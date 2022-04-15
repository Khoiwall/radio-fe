import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/Artists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import WrapArtistComponent from '../../components/ArtistComponent/WrapArtistComponent';
import ArtistComponent from '../../components/ArtistComponent/ArtistComponent';
import LoaddingArtistComponent from '../../components/ArtistComponent/LoaddingArtistComponent';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { Endpoints } from '../../api/Endpoints';

function ArtistsLayout() {
    const [loading, setLoading] = useState<boolean>(false);
    const [nation, setNational] = useState<string>('All Artists');
    const [genre, setGenre] = useState<string>('All Genres');
    const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
    const [outOfArtist, setOutOfArtist] = useState<boolean>(false);
    const [allArtists, setAllArtists] = useState<{
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
    }[]>([]);

    const fetchAllArtists = async () => {
        axios.get(`${Endpoints}/api/artist/get-artist-top`)
            .then((res) => {
                setAllArtists(res.data);
            })
            .catch((err) => { console.log(err) })
    }

    const fetchArtistsCountryAndGenre = async (_nation: string, _genre: string) => {
        setLoading(false)
        setOutOfArtist(false)
        setNational(_nation);
        setGenre(_genre);
        if (_nation === 'All Artists' && _genre === 'All Genres') {
            fetchAllArtists()
        } else {
            await axios.get(`${Endpoints}/api/artist/search-by-country-and-genre`, {
                params: {
                    nation: _nation,
                    genre: _genre
                }
            })
                .then((res) => {
                    setAllArtists(res.data.artists);
                })
                .catch((err) => { console.log(err) })
        }
    }

    const loadMore = async () => {
        setLoadMoreBtn(true);
        await axios.get(`${Endpoints}/api/artist/get-artist-top/load-more`, {
            params: {
                allArtists,
                nation,
                genre
            }
        })
            .then((res) => {
                if (res.data.outOfArtist === false) {
                    const tmpAllArtists = allArtists;
                    tmpAllArtists.push(...res.data.artists);
                    setLoadMoreBtn(false);
                    setAllArtists(tmpAllArtists);
                } else {
                    setLoadMoreBtn(false);
                    setOutOfArtist(true);
                }
            })
            .catch((err) => { console.log(err) })
    }

    const searchArtist = async (textField: string) => {
        setLoading(false)
        await axios.get(`${Endpoints}/api/artist/search`, {
            params: {
                textField,
                nation,
                genre
            }
        })
            .then((res) => {
                setAllArtists(res.data.artists);
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        fetchAllArtists()
    }, [])

    useEffect(() => {
        setLoading(true)
        setLoadMoreBtn(false)
    }, [allArtists])

    useEffect(() => {
    }, [loadMoreBtn])

    useEffect(() => {
    }, [outOfArtist])
    return (
        <div className="artists container">
            <div className="artists__title">
                <h1>Artists</h1>
            </div>
            <WrapArtistComponent
                fetchArtistsCountryAndGenre={fetchArtistsCountryAndGenre}
                searchArtist={searchArtist}
            />
            {
                loading && allArtists.length !== 0 ?
                    <>
                        <ArtistComponent
                            allArtists={allArtists}
                        />
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

export default ArtistsLayout;