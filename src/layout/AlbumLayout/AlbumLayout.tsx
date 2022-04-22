import react, { useState, useEffect } from 'react';
import '../../asset/css/Album.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import WrapAlbumComponent from '../../components/AlbumComponent/WrapAlbumComponent';
import LoaddingArtistComponent from '../../components/ArtistComponent/LoaddingArtistComponent';
import AlbumComponent from '../../components/AlbumComponent/AlbumComponent';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Endpoints } from '../../api/Endpoints';
import { useDispatch } from 'react-redux';
import { album } from '../../redux/actions/playAlbum';
import { listen } from '../../redux/actions/listen';

interface AlbumType {
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
}

function AlbumLayout({
    allTrack
}: AlbumType) {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
    const [outOfArtist, setOutOfArtist] = useState<boolean>(false);
    const [nation, setNational] = useState<string>('All Country');
    const [genre, setGenre] = useState<string>('All Genres');
    const [allAlbum, setAllAlbum] = useState<
        {
            idAlbum: string,
            idTrack: string[],
            artists: {
                idArtists: string,
                nameArtists: string,
            }[],
            like: number,
            name: string,
            image: string
        }[]
    >([])

    const fecthAllAlbum = async () => {
        return axios.get(`${Endpoints}/api/album`)
            .then((res) => { setAllAlbum(res.data.album) })
            .catch((err) => { console.log(err) })
    }

    const fecthAllAlbumCountryAndGenre = async (_nation: string, _genre: string) => {
        setLoading(false)
        setOutOfArtist(false)
        setNational(_nation);
        setGenre(_genre);
        if (_nation === 'All Country' && _genre === 'All Genres') {
            fecthAllAlbum()
        } else {
            await axios.get(`${Endpoints}/api/album/search-by-coutry-and-genres`, {
                params: {
                    nation: _nation,
                    genre: _genre,
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setAllAlbum(res.data.albums);
                })
                .catch((err) => { console.log(err) })
        }
    }

    const loadMore = async () => {
        setLoadMoreBtn(true);
        await axios.get(`${Endpoints}/api/album/get-album/load-more`, {
            params: {
                allAlbum,
                nation,
                genre
            }
        })
            .then((res) => {
                if (res.data.outOfArtist === false) {
                    const tmpAllArtists = allAlbum;
                    tmpAllArtists.push(...res.data.albums);
                    setLoadMoreBtn(false);
                    setAllAlbum(tmpAllArtists);
                } else {
                    setLoadMoreBtn(false);
                    setOutOfArtist(true);
                }
            })
            .catch((err) => { console.log(err) })
    }

    const searchAlbum = async (textField: string) => {
        setLoading(false)
        await axios.get(`${Endpoints}/api/album/search`, {
            params: {
                textField,
                nation,
                genre
            }
        })
            .then((res) => {
                console.log(res.data)
                setAllAlbum(res.data.albums);
            })
            .catch((err) => { console.log(err) })
    }

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

    useEffect(() => {
        fecthAllAlbum()
    }, [])

    useEffect(() => {
        setLoading(true)
        setLoadMoreBtn(false)
    }, [allAlbum])
    return (
        <div className="album container">
            <div className="album__title">
                <h1>Album</h1>
            </div>
            <WrapAlbumComponent
                fecthAllAlbumCountryAndGenre={fecthAllAlbumCountryAndGenre}
                searchAlbum={searchAlbum}
            />
            {
                loading && allAlbum.length !== 0 ?
                    <>
                        <div className="a__margin_top_16">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    {
                                        allAlbum.map((album, index) => {
                                            return (
                                                <AlbumComponent
                                                    Album={album}
                                                    playAlbum={playAlbum}
                                                />
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </div>
                        {
                            loadMoreBtn === false ? (
                                <>
                                    {
                                        outOfArtist === false ? (
                                            <div className="artists__btn_flex">
                                                <div className="artists__btn_margin">
                                                    <div
                                                        className="artists__btn_padidng artists__btn_background artists__btn"
                                                        onClick={loadMore}
                                                    >
                                                        <span className="artists__btn_text">LOAD MORE</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </>
                            ) : (
                                <LoaddingArtistComponent />
                            )
                        }
                    </>
                    :
                    <>
                        <LoaddingArtistComponent />
                        <div className="artists__btn_flex">
                            <div className="artists__btn_margin">
                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                    <Skeleton width={160} height={40} />
                                </SkeletonTheme>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default AlbumLayout;