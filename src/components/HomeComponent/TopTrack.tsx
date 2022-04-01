import react, { useState } from 'react';
import '../../asset/css/Home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Charts from './Charts';

interface TopTrack {
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

function TopTrack({
    allTrack
}: TopTrack) {
    const [chartTracksVN, setChartTracksVN] = useState<{
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
    }[]>(allTrack.filter(track=>{
        return track.country === 'VietNam';
    }))
    const [chartTracksUSUK, setChartTracksUSUK] = useState<{
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
    }[]>(allTrack.filter(track=>{
        return track.country === 'US-UK';
    }))
    const [chartTracksKorea, setChartTracksKorea] = useState<{
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
    }[]>(allTrack.filter(track=>{
        return track.country === 'Korea';
    }))
    return (
        <div className="hp__margin_top_32">
            <div className="hp__header">
                <div className="hp__display_flex">
                    <h2 className="hp__title_h2">PirexCharts</h2>
                    <Link to="/tracks/charts">
                        <div className="hp__see_all">
                            <p>See all</p>
                            <ArrowForwardIcon />
                        </div>
                    </Link>
                </div>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <div className="tt__main_title">
                            <h2>Viet Nam</h2>
                        </div>
                        <Charts tracks={chartTracksVN}/>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="tt__main_title">
                            <h2>US-UK</h2>
                        </div>
                        <Charts tracks={chartTracksUSUK}/>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="tt__main_title">
                            <h2>Korea</h2>
                        </div>
                        <Charts tracks={chartTracksKorea}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TopTrack;