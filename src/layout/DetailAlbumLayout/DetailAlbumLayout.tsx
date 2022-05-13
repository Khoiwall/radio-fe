import react, { useEffect, useState } from 'react';
import '../../asset/css/DetailAlbum.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import axios from 'axios';
import Track from '../../components/DetailAlbumComponent/Track';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from 'moment';
import AlbumComponent from '../../components/AlbumComponent/AlbumComponent';

import {
    useParams
} from "react-router-dom";
import { Endpoints } from '../../api/Endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { io } from 'socket.io-client';
import { makeid } from '../../util/randomString';
import { useDispatch } from 'react-redux';
import { album } from '../../redux/actions/playAlbum';
import { listen } from '../../redux/actions/listen';

const grid = {
    xl: 6,
    lg: 6,
    md: 3,
    sm: 4,
    xs: 6
}

function DetailAlbumLayout() {
    let params: { idAlbum: string } = useParams();
    const [_album, setAlbum] = useState<
        {
            idAlbum: string,
            idTrack: string[],
            artists: {
                idArtists: string,
                nameArtists: string,
            }[],
            like: number,
            name: string,
            comments: {
                id: string,
                idUser: string,
                userName: string,
                avatar: string,
                content: string,
                like: number,
                disLike: number,
                time: string
            }[],
            image: string
        } | null
    >(null)
    const [albums, setAlbums] = useState<
        {
            idAlbum: string,
            idTrack: string[],
            artists: {
                idArtists: string,
                nameArtists: string,
            }[],
            like: number,
            name: string,
            comments: {
                id: string,
                idUser: string,
                userName: string,
                avatar: string,
                content: string,
                like: number,
                disLike: number,
                time: string
            }[],
            image: string
        }[] | null
    >(null)
    const [tracks, setTracks] = useState<
        {
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
        }[] | null
    >(null);
    const [allTrack, setAllTrack] = useState<
        {
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
        }[]
    >([]);
    const [indexRender, setIndexRender] = useState<number>(0);
    const user = useSelector((state: RootState) => state.user);
    const socket = io();
    const dispatch = useDispatch();

    const fecthAlbum = async () => {
        await axios.get(`${Endpoints}/api/album/${params.idAlbum}`)
            .then((res) => {
                setAlbum(res.data[0])
            })
            .catch((err) => { console.log(err) })
    }

    const fecthAllAlbum = async () => {
        return await axios.get(`${Endpoints}/api/album`)
            .then((res) => { setAlbums(res.data.album) })
            .catch((err) => { console.log(err) })
    }

    const fectTracks = async () => {
        const tracks = _album ? _album.idTrack : null;
        await axios.get(`${Endpoints}/api/track/get-track-into-album`, {
            params: {
                tracks
            }
        })
            .then((res) => {
                setTracks(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    const fetchAllTrack = async () => {
        return await axios.get(`${Endpoints}/api/track`)
            .then((res) => { setAllTrack(res.data) })
            .catch((err) => { console.log(err) })

    }

    const playAlbum = (id: string) => {
        if (albums) {
            const indexAlbum = albums.findIndex(album => album.idAlbum === id);
            const listTrack = allTrack.filter((track) => {
                return albums[indexAlbum].idTrack.includes(track.idTrack);
            })
            window.localStorage.setItem('music', JSON.stringify(listTrack[0]));
            window.localStorage.setItem('playlist', JSON.stringify(listTrack));
            window.localStorage.setItem('indexSong', '0'.toString());
            dispatch(listen('listen', listTrack[0]));
            dispatch(album('playAlbum', listTrack));
        }
    }

    const comments = async (e: any) => {
        e.preventDefault();
        const comment = {
            id: makeid(10),
            idUser: user.user.idUser,
            userName: user.user.userName,
            avatar: user.avatar,
            content: e.target.text.value,
            like: 0,
            disLike: 0,
            time: moment().format('DD.MM.YY, HH:MM')
        }
        socket.emit("comment", comment, _album)
        await axios.put(`${Endpoints}/api/album/add-comment`, {
            _album,
            comment
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        })
            .then((res) => { setAllTrack(res.data) })
            .catch((err) => { console.log(err) })
    }

    const likeAlbum = async () => {

    }

    const render = () => {
        setIndexRender(indexRender + 1)
    }

    useEffect(() => {
        fetchAllTrack()
    }, [])

    useEffect(() => {
        fecthAllAlbum()
    }, [])

    useEffect(() => {
        fecthAlbum()
    }, [])

    useEffect(() => {
        if (_album) {
            fectTracks()
        }
    }, [_album])

    useEffect(() => {
        socket.on('send-comments', (album) => {
            console.log(album)
            setAlbum(album)
        })
    }, [])

    return (
        <>
            {
                _album && tracks && albums ?
                    (
                        <div className="d_album container">
                            <div className="d_album__title">
                                <h1>{_album.name}</h1>
                            </div>
                            <div className="d_album__margin_top_20">
                                <div className="d_album__square">
                                    <div className="d_album__flex">
                                        <div className="d_album__content">
                                            <div className="d_album__cover_image">
                                                <img src={_album.image} alt={_album.name} />
                                            </div>
                                            <div className="d_album__stat">
                                                <div className="d_album_stat_number_song">
                                                    <FormatListBulletedOutlinedIcon />
                                                    <span>{_album.idTrack.length}</span>
                                                </div>
                                                <div className="d_album_stat_listner">
                                                    <HeadphonesIcon />
                                                    <span>{_album.like}</span>
                                                </div>
                                            </div>
                                            <div className="d_album_btn" onClick={likeAlbum}>
                                                Like
                                            </div>
                                        </div>
                                        <div className="d_album__tracks">
                                            <div className="d_album__scroll">
                                                <div className="d_album__track">
                                                    <div className="charts">
                                                        <ul className="charts__main_list">
                                                            {
                                                                tracks.map((track, index) => {
                                                                    return (
                                                                        <Track track={track} tracks={tracks} index={index} render={render} />
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d_album__margin_top_20">
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                                            <div className="d_album__comments">
                                                <div className="d_album__comments_title">
                                                    <h4>Comments</h4>
                                                    <span>{_album.comments.length}</span>
                                                </div>
                                                <ul className="d_album__comments__list">
                                                    {
                                                        _album.comments.map((comment, index) => {
                                                            return (
                                                                <li className="d_album__comments__item">
                                                                    <div className="d_album__comments__autor">
                                                                        <img className="d_album__comments__avatar" src={comment.avatar} alt={comment.userName} />
                                                                        <span className="d_album__comments__name">{comment.userName}</span>
                                                                        <span className="d_album__comments__time">{comment.time}</span>
                                                                    </div>
                                                                    <p className="d_album__comments__text">
                                                                        {comment.content}
                                                                    </p>
                                                                    <div className="d_album__comments__actions">
                                                                        <div className="d_album__comments__rate">
                                                                            {
                                                                                Object.keys(user).length > 0
                                                                                    ?
                                                                                    <div className="d_album__comments__like">
                                                                                        <ThumbUpIcon />
                                                                                        {comment.like}
                                                                                    </div>
                                                                                    :
                                                                                    <div className="d_album__comments__like cursor__prevent">
                                                                                        <ThumbDownIcon />
                                                                                        {comment.like}
                                                                                    </div>
                                                                            }
                                                                            {
                                                                                Object.keys(user).length > 0
                                                                                    ?
                                                                                    <div className="d_album__comments__dislike">
                                                                                        <ThumbUpIcon />
                                                                                        {comment.like}
                                                                                    </div>
                                                                                    :
                                                                                    <div className="d_album__comments__dislike cursor__prevent">
                                                                                        <ThumbUpIcon />
                                                                                        {comment.like}
                                                                                    </div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <form className="d_album__comments__form" onSubmit={comments}>
                                                    <div className="d_album__sign__group">
                                                        <textarea placeholder="Add comment" name="text" className="d_album__comments__sign__textarea" />
                                                    </div>
                                                    {
                                                        Object.keys(user).length > 0
                                                            ?
                                                            <button className="d_album__sign__btn" onSubmit={comments}>Send</button>
                                                            :
                                                            <button className="d_album__sign__btn cursor__prevent">Send</button>
                                                    }
                                                </form>
                                            </div>
                                        </Grid>
                                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                                            <div className="a__margin_top_16">
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        {
                                                            albums.sort(() => Math.random() - 0.5).slice(0, 4).map((album, index) => {
                                                                return (
                                                                    <AlbumComponent
                                                                        Album={album}
                                                                        playAlbum={playAlbum}
                                                                        grid={grid}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                </Box>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    )
                    : null
            }
        </>
    )
}

export default DetailAlbumLayout;