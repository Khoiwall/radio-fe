import React from 'react';
import '../../asset/css/Home.css';
import { styled } from '@mui/material/styles';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface NewReleasesType {
    Album: {
        idAlbum: string,
        idTrack: string[],
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        like: number,
        name: string,
        image: string
    };
    playAlbum: (id: string) => void;
    grid: {
        xl: number,
        lg: number,
        md: number,
        sm: number,
        xs: number,
    }
}

function AlbumComponent({
    Album,
    grid,
    playAlbum
}: NewReleasesType) {
    const dispatch = useDispatch();

    const playAlbumChild = (id: string) => {
        playAlbum(id);
    }
    return (
        <Grid className="nrc__album" item xl={grid.xl} lg={grid.lg} md={grid.md} sm={grid.sm} xs={grid.xs}>
            <div className="nrc__album_cover">
                <img src={Album.image} alt={Album.name} />
                <div
                    className="nrc__play_album"
                >
                    <PlayArrowOutlinedIcon onClick={() => { playAlbumChild(Album.idAlbum) }} />
                </div>
                <div className="nrc__album_stat">
                    <span className="nrc__album_stat_number_song">
                        <FormatListBulletedOutlinedIcon />
                        <span>{Album.idTrack.length}</span>
                    </span>
                    <span className="nrc__album_stat_listner">
                        <HeadphonesIcon />
                        <span>{Album.like}</span>
                    </span>
                </div>
            </div>
            <div className="nrc__album_title">
                <Link to={'/albums/' + Album.idAlbum}>
                    <h3>{Album.name}</h3>
                </Link>
                <div className="nrc__album_name_singer">
                    {
                        Album.artists.map((artist, index) => {
                            return (
                                <>
                                    {
                                        index === 0 ?
                                            <span>
                                                <Link to={'/artists/' + artist.idArtists}>
                                                    {artist.nameArtists}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <span> & </span>
                                                <Link to={'/artists/' + artist.idArtists}>
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
        // <div className="nrc">
        //     <Box sx={{ flexGrow: 1 }}>
        //         <Grid container spacing={2}>
        //             {
        //                 allAlbum.map((album, index) =>{
        //                     return(
        //                         <Grid className="nrc__album" item xl={2} xs={6} md={8}>
        //                             <div className="nrc__album_cover">
        //                                 <img src={album.image} alt={album.name}/>
        //                                 <div 
        //                                     className="nrc__play_album"
        //                                 >
        //                                     <PlayArrowOutlinedIcon onClick={()=>playAlbum(album.idAlbum)}/>
        //                                 </div>
        //                                 <div className="nrc__album_stat">
        //                                     <span className="nrc__album_stat_number_song">
        //                                         <FormatListBulletedOutlinedIcon/>
        //                                         <span>{album.idTrack.length}</span>
        //                                     </span>
        //                                     <span className="nrc__album_stat_listner">
        //                                         <HeadphonesIcon/>
        //                                         <span>{album.like}</span>
        //                                     </span>
        //                                 </div>
        //                             </div>
        //                             <div className="nrc__album_title">
        //                                 <Link to={'/album/' + album.idAlbum}>
        //                                     <h3>{album.name}</h3>
        //                                 </Link>
        //                                 <div className="nrc__album_name_singer">
        //                                     {
        //                                         album.artists.map((artist,index)=>{
        //                                             return(
        //                                                 <>
        //                                                     {
        //                                                         index === 0 ?
        //                                                         <span>
        //                                                             <Link to={'/artists/'+ artist.idArtists}>
        //                                                                 {artist.nameArtists}
        //                                                             </Link>
        //                                                         </span>
        //                                                         : 
        //                                                         <span>
        //                                                             <span> & </span>
        //                                                             <Link to={'/artists/'+ artist.idArtists}>
        //                                                                 {artist.nameArtists}
        //                                                             </Link>
        //                                                         </span>
        //                                                     }
        //                                                 </>
        //                                             )
        //                                         })
        //                                     }
        //                                 </div>
        //                             </div>
        //                         </Grid>
        //                     )
        //                 })
        //             }
        //         </Grid>
        //     </Box>
        // </div>
    )
}

export default AlbumComponent;