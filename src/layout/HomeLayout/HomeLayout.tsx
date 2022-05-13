import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerComponent from '../../components/HomeComponent/Banner';
import TopTrack from '../../components/HomeComponent/TopTrack';
import NewReleasesChild from '../../components/HomeComponent/NewReleasesChild';
import TopArtistsChild from '../../components/HomeComponent/TopArtistsChild';
import HotNewChild from '../../components/HomeComponent/HotNewsChild';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { album } from '../../redux/actions/playAlbum';
import { listen } from '../../redux/actions/listen';
import { useDispatch } from 'react-redux';
import { events } from '../../api/events';
import { Endpoints } from '../../api/Endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { userAction } from '../../redux/actions/user';
import { io } from 'socket.io-client';
import { useHistory } from "react-router-dom";
import { settings, settingsArtist } from '../../util/slick';

interface HomeType {
    allTrack: {
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
    allNotification: {
        idNotification: string;
        title: string;
        type: string;
        idSNEA: string;
        image: string;
        content: string;
    }[];
    allAlbum: {
        idAlbum: string,
        idTrack: string[],
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        like: number,
        name: string,
        image: string
    }[];
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
    allNews: {
        idNews: string,
        nameNews: string,
        timeUp: Date,
        like: number,
        content: string,
        comments: {
            idUser: string,
            content: string,
            like: number
        }[],
        image: string,
    }[]
}

function HomeLayout({
    allTrack,
    allNotification,
    allAlbum,
    allArtists,
    allNews
}: HomeType) {
    const dispatch = useDispatch();
    let history = useHistory();
    const sliderRef = React.useRef<Slider | null>(null);
    const sliderArtistRef = React.useRef<Slider | null>(null);
    const user = useSelector((state: RootState) => state.user);
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
    }[]>(allArtists);
    const socket = io();


    const playAlbum = (id: string) => {
        const indexAlbum = allAlbum.findIndex(album => album.idAlbum === id);
        const listTrack = allTrack.filter((track) => {
            return allAlbum[indexAlbum].idTrack.includes(track.idTrack);
        })
        window.localStorage.setItem('music', JSON.stringify(listTrack[0]));
        window.localStorage.setItem('playlist', JSON.stringify(listTrack));
        window.localStorage.setItem('indexSong', '0'.toString());
        dispatch(listen('listen', listTrack[0]));
        dispatch(album('playAlbum', listTrack));
    }

    const likeArtist = async (artist: any) => {
        if (Object.keys(user).length === 0) {
            history.push("/sign-in");
        } else {
            socket.emit("dislike-or-like-artist", allArtistsComponent, artist.idArtists, 0)
            user.likeArtists.push(artist.idArtists);
            dispatch(userAction('likeAndDislike', user));
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
        socket.emit("dislike-or-like-artist", allArtistsComponent, artist.idArtists, 1)
        user.likeArtists.splice(index, 1)
        dispatch(userAction('likeAndDislike', user));
        await axios.put(`${Endpoints}/api/artist/dislike-artist`, artist, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        })
            .then(res => { console.log(res.data.message) })
            .catch(err => { console.log(err) })
    }

    const slickNext = (indexOf: number) => {
        switch (indexOf) {
            case 0:
                sliderRef.current?.slickNext();
                break;
            case 1:
                sliderArtistRef.current?.slickNext();
                break;
        }
    };

    const slickPrev = (indexOf: number) => {
        switch (indexOf) {
            case 0:
                sliderRef.current?.slickPrev();
                break;
            case 1:
                sliderArtistRef.current?.slickPrev();
                break;
        }
    };

    useEffect(() => {
        socket.on('resend-dislike-or-like-artist', (artists) => {
            console.log(artists)
            setAllArtistsComponent(artists);
        })
    }, [])

    return (
        <div className="home container">
            <BannerComponent
                allTrack={allTrack}
                allNotification={allNotification}
            />
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">New Releases</h2>
                        <Link to="/albums">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="nrc">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                allAlbum.map((album, index) => {
                                    return (
                                        <NewReleasesChild
                                            Album={album}
                                            playAlbum={playAlbum}
                                        />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">Top Artists</h2>
                        <Link to="/artists">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="tac">
                    <Slider ref={sliderArtistRef} {...settingsArtist}>
                        {
                            allArtistsComponent.map((artist, index) => {
                                return (
                                    <TopArtistsChild artist={artist} likeArtist={likeArtist} dislikeArtist={dislikeArtist} />
                                )
                            })
                        }
                    </Slider>
                    <div className="uec__prev_next">
                        <div className="uec__prev" onClick={() => { slickPrev(1) }}><NavigateBeforeIcon /></div>
                        <div className="uec__next" onClick={() => { slickNext(1) }}><NavigateNextIcon /></div>
                    </div>
                </div>
            </div>
            <TopTrack
                allTrack={allTrack}
            />
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">Hot News</h2>
                        <Link to="/news">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hnc">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                allNews.map((news, index) => {
                                    return (
                                        <HotNewChild news={news} />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;