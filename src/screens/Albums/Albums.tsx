import React, { useState, useEffect } from 'react';
import AlbumLayout from '../../layout/AlbumLayout/AlbumLayout';
import WrapAlbumLoadingComponent from '../../components/AlbumComponent/WrapAlbumLoadingComponent';
import axios from 'axios';

import { Endpoints } from '../../api/Endpoints';
import LoaddingArtistComponent from '../../components/ArtistComponent/LoaddingArtistComponent';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Albums() {
    let [index, setIndex] = useState(0)
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

    const fetchAllTrack = async () => {
        return axios.get(`${Endpoints}/api/track`)
            .then((res) => { setAllTrack(res.data); setIndex(1) })
            .catch((err) => { console.log(err) })

    }

    useEffect(() => {
        fetchAllTrack()
    }, [])
    return (
        <>
            {
                index >= 1 ?
                    <AlbumLayout
                        allTrack={allTrack}
                    /> :
                    <div className="album container">
                        <div className="album__title">
                            <h1>Album</h1>
                        </div>
                        <WrapAlbumLoadingComponent />
                        <LoaddingArtistComponent />
                        <div className="artists__btn_flex">
                            <div className="artists__btn_margin">
                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                    <Skeleton width={160} height={40} />
                                </SkeletonTheme>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Albums;