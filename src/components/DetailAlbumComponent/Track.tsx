import React, { useEffect, useState } from 'react';
import '../../asset/css/Home.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { formatTimer } from '../../util/timmer';
import { listen } from '../../redux/actions/listen';
import { album } from '../../redux/actions/playAlbum';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';
import { Endpoints } from '../../api/Endpoints';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

interface Chart {
    track: {
        idTrack: string,
        nameSong: string,
        url: string,
        mainImg: string,
        duration: number,
        numberListen: number,
        like: number,
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        country: string,
        type: string[],
        weeklyViews: number,
        likeOfWeek: number,
    };
    tracks: {
        idTrack: string,
        nameSong: string,
        url: string,
        mainImg: string,
        duration: number,
        numberListen: number,
        like: number,
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        country: string,
        type: string[],
        weeklyViews: number,
        likeOfWeek: number,
    }[];
    index: number;
    render: () => void;
}

function Track({
    track,
    tracks,
    index,
    render
}: Chart) {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const playMusic = (track: any, index: number) => {
        window.localStorage.setItem('music', JSON.stringify(track));
        window.localStorage.setItem('playlist', JSON.stringify(tracks));
        window.localStorage.setItem('indexSong', index.toString());
        dispatch(listen('listen', track));
        dispatch(album('playAlbum', tracks));
    }

    const likeTrack = async (idTrack: string, like: number) => {
        if (Object.keys(user).length === 0) {
            history.push("/sign-in");
        } else {
            render();
            user.likeTracks.push(idTrack);
            dispatch(userAction('likeAndDislike', user));
            await axios.put(`${Endpoints}/api/track/like-track`, { idTrack, like }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accessToken")
                }
            })
                .then(res => { console.log(res.data.message) })
                .catch(err => { console.log(err) })
        }
    }
    const dislikeTrack = async (idTrack: string, like: number, indexTrackInUser: number) => {
        render();
        user.likeTracks.splice(indexTrackInUser, 1)
        dispatch(userAction('likeAndDislike', user));
        await axios.put(`${Endpoints}/api/track/dislike-track`, { idTrack, like }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        })
            .then(res => { console.log(res.data.message) })
            .catch(err => { console.log(err) })
    }
    return (
        <li className="charts__track_item">
            <div
                className="charts__track_img"
                onClick={() => playMusic(track, index)}
            >
                <img src={track.mainImg} alt={track.nameSong} />
                <PlayArrowOutlinedIcon />
            </div>
            <div className="charts__track_title">
                <h4>{track.nameSong}</h4>
                <div className="charts__track_artist">
                    {
                        track.artists.map((artist, index) => {
                            return (
                                <>
                                    {
                                        index === 0 ?
                                            <span>
                                                <Link to={'/artists/' + artist.idArtists}>
                                                    {artist.nameArtists}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <span> & </span>
                                                <Link to={'/artists/' + artist.idArtists}>
                                                    {artist.nameArtists}
                                                </Link>
                                            </span>
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="chart__time_heart">
                {
                    Object.keys(user).length === 0 ? (
                        <span className="chart__icon_heart" onClick={() => likeTrack(track.idTrack, track.like)}>
                            <FavoriteIcon />
                        </span>
                    ) : (
                        user.likeTracks.indexOf(track.idTrack) !== -1 ?
                            (
                                <span className="chart__icon_heart liked" onClick={() => dislikeTrack(track.idTrack, track.like, user.likeTracks.indexOf(track.idTrack))}>
                                    <FavoriteIcon />
                                </span>
                            ) :
                            (
                                <span className="chart__icon_heart" onClick={() => likeTrack(track.idTrack, track.like)}>
                                    <FavoriteIcon />
                                </span>
                            )
                    )
                }
                <span className="charts__track_duration">{formatTimer(track.duration)}</span>
            </div>
        </li>
    )
}

export default Track;