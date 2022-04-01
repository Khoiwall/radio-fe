import React, { useState, useEffect } from 'react';
import '../../asset/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios'

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Endpoints } from '../../api/Endpoints';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';

interface TopArtistsChild {
    allArtists: {
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
        type: string[]
    }[];
}

function TopArtistsChild({
    allArtists
}: TopArtistsChild) {
    const sliderRef = React.useRef<Slider | null>(null);
    const user = useSelector((state: RootState) => state.user);
    let history = useHistory();
    const dispatch = useDispatch();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    const socket = io('http://localhost:3001');
    const [allArtistsComponent, setAllArtistsComponent] = useState<{
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
        type: string[]
    }[]>(allArtists)

    const slickNext = () => {
        sliderRef.current?.slickNext()
    };

    const slickPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const likeArtist = async (artist: any) => {
        if (Object.keys(user).length === 0) {
            history.push("/sign-in");
        } else {
            socket.emit("dislike-or-like-artist", allArtistsComponent, artist.idArtists,0)
            user.likeArtists.push(artist.idArtists);
            dispatch(userAction('likeArtist', user));
            // setChangeUser(changeUser + 1);
            await axios.put(`${Endpoints}/api/artist/like-artist`, artist, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accessToken")
                }
            })
                .then(res => { console.log(res.data.message) })
                .catch(err => { console.log(err) })
        }
    }

    const dislikeArtist = async (artist: any, index: number) => {
        socket.emit("dislike-or-like-artist", allArtistsComponent, artist.idArtists,1)
        user.likeArtists.splice(index, 1)
        dispatch(userAction('likeArtist', user));
        // setChangeUser(changeUser + 1);
        await axios.put(`${Endpoints}/api/artist/dislike-artist`, artist, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        })
            .then(res => { console.log(res.data.message) })
            .catch(err => { console.log(err) })
    }


    useEffect(() => {
        socket.on('resend-dislike-or-like-artist', (artists) => {
            setAllArtistsComponent(artists);
            console.log('123')
        })
    }, [])
    return (
        <div className="tac">
            <Slider ref={sliderRef} {...settings}>
                {
                    allArtistsComponent.map((artist, index) => {
                        return (
                            <div className="tac__cover_artist">
                                <div className="tac__artist">
                                    <img src={artist.image} alt={artist.stageName} />
                                    {
                                        Object.keys(user).length === 0 ? (
                                            <div
                                                className="nrc__play_album"
                                                onClick={() => likeArtist(artist)}
                                            >
                                                <FavoriteIcon />
                                            </div>
                                        ) : (
                                            user.likeArtists.indexOf(artist.idArtists) !== -1 ?
                                                (
                                                    <div
                                                        className="nrc__play_album nrc__liked"
                                                        onClick={() => dislikeArtist(artist, user.likeArtists.indexOf(artist.idArtists))}
                                                    >
                                                        <FavoriteIcon />
                                                    </div>
                                                ) :
                                                (
                                                    <div
                                                        className="nrc__play_album"
                                                        onClick={() => likeArtist(artist)}
                                                    >
                                                        <FavoriteIcon />
                                                    </div>
                                                )
                                        )

                                    }
                                    <div className="nrc__album_stat">
                                        <span className="nrc__album_stat_number_song">
                                            <FavoriteIcon />
                                            <span>{artist.like}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="nrc__album_title">
                                    <Link to={'/artists/' + artist.idArtists}>
                                        <h3>{artist.stageName}</h3>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="uec__prev_next">
                <div className="uec__prev" onClick={slickPrev}><NavigateBeforeIcon /></div>
                <div className="uec__next" onClick={slickNext}><NavigateNextIcon /></div>
            </div>
        </div>
    )
}

export default TopArtistsChild;