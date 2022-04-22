import React, { useState, useEffect } from 'react';
import AlbumLayout from '../../layout/AlbumLayout/AlbumLayout';
import WrapAlbumLoadingComponent from '../../components/AlbumComponent/WrapAlbumLoadingComponent';
import axios from 'axios';

import { Endpoints } from '../../api/Endpoints';
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
                    </div>
            }
        </>
    )
}

export default Albums;