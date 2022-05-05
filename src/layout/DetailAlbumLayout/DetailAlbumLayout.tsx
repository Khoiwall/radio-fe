import react, { useEffect, useState } from 'react';
import '../../asset/css/DetailAlbum.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';

import {
    useParams
} from "react-router-dom";
import { Endpoints } from '../../api/Endpoints'

function DetailAlbumLayout() {
    let params: { idAlbum: string } = useParams();
    const [album, setAlbum] = useState<
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
        } | null
    >(null)

    console.log(album)

    const fecthAlbum = async () => {
        await axios.get(`${Endpoints}/api/album/${params.idAlbum}`)
            .then((res) => {
                setAlbum(res.data[0])
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        fecthAlbum()
    }, [])

    return (
        <>
            {
                album !== null ?
                    (
                        <div className="d_album container">
                            <div className="d_album__title">
                                <h1>{album.name}</h1>
                            </div>
                        </div>
                    )
                    : null
            }
        </>
    )
}

export default DetailAlbumLayout;