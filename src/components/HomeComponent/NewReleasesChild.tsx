import React from 'react';
import '../../asset/css/Home.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import {album} from '../../redux/actions/playAlbum';
import {listen} from '../../redux/actions/listen';
import { useDispatch } from 'react-redux';

interface NewReleasesType {
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
}

function NewReleasesChild({
    allTrack,
    allAlbum
}: NewReleasesType){
    const dispatch = useDispatch();

    const playAlbum = (id: string) =>{
        const indexAlbum = allAlbum.findIndex(album => album.idAlbum === id);
        const listTrack = allTrack.filter((track)=>{
            return allAlbum[indexAlbum].idTrack.includes(track.idTrack);
        })
        window.localStorage.setItem('music',JSON.stringify(listTrack[0]));
        window.localStorage.setItem('playlist',JSON.stringify(listTrack));
        window.localStorage.setItem('indexSong','0'.toString());
        dispatch(listen('listen',listTrack[0]));
        dispatch(album('playAlbum',listTrack));
    }
    return(
        <div className="nrc">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        allAlbum.map((album, index) =>{
                            return(
                                <Grid className="nrc__album" item xl={2} xs={6} md={8}>
                                    <div className="nrc__album_cover">
                                        <img src={album.image} alt={album.name}/>
                                        <div 
                                            className="nrc__play_album"
                                        >
                                            <PlayArrowOutlinedIcon onClick={()=>playAlbum(album.idAlbum)}/>
                                        </div>
                                        <div className="nrc__album_stat">
                                            <span className="nrc__album_stat_number_song">
                                                <FormatListBulletedOutlinedIcon/>
                                                <span>{album.idTrack.length}</span>
                                            </span>
                                            <span className="nrc__album_stat_listner">
                                                <HeadphonesIcon/>
                                                <span>{album.like}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="nrc__album_title">
                                        <Link to={'/album/' + album.idAlbum}>
                                            <h3>{album.name}</h3>
                                        </Link>
                                        <div className="nrc__album_name_singer">
                                            {
                                                album.artists.map((artist,index)=>{
                                                    return(
                                                        <>
                                                            {
                                                                index === 0 ?
                                                                <span>
                                                                    <Link to={'/artists/'+ artist.idArtists}>
                                                                        {artist.nameArtists}
                                                                    </Link>
                                                                </span>
                                                                : 
                                                                <span>
                                                                    <span> & </span>
                                                                    <Link to={'/artists/'+ artist.idArtists}>
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
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default NewReleasesChild;