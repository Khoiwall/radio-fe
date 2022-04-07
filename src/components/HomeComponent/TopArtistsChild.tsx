import React, { useState, useEffect } from 'react';
import '../../asset/css/Home.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

interface TopArtistsChild {
    artist:{
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
    };
    likeArtist: (artist: any) => void;
    dislikeArtist: (artsit: any, index: number) => void
}

function TopArtistsChild({
    artist,
    likeArtist,
    dislikeArtist
}: TopArtistsChild) {
    const user = useSelector((state: RootState) => state.user);
    console.log(user)

    const likeArtistChild = async (artist: any) => {
        likeArtist(artist);
    }

    const dislikeArtistChild = async (artist: any, index: number) => {
        dislikeArtist(artist, index);
    }
    return (
        <div className="tac__cover_artist">
            <div className="tac__artist">
                <img src={artist.image} alt={artist.stageName} />
                {
                    Object.keys(user).length === 0 ? (
                        <div
                            className="nrc__play_album"
                            onClick={() => likeArtistChild(artist)}
                        >
                            <FavoriteIcon />
                        </div>
                    ) : (
                        user.likeArtists.indexOf(artist.idArtists) !== -1 ?
                            (
                                <div
                                    className="nrc__play_album nrc__liked"
                                    onClick={() => dislikeArtistChild(artist, user.likeArtists.indexOf(artist.idArtists))}
                                >
                                    <FavoriteIcon />
                                </div>
                            ) :
                            (
                                <div
                                    className="nrc__play_album"
                                    onClick={() => likeArtistChild(artist)}
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
}

export default TopArtistsChild;