import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/PirexChart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Chart from '../../components/PirexChartComponent/Chart';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoaddingPirexChart from '../../components/PirexChartComponent/LoaddingPirexChart';

import { listen } from '../../redux/actions/listen';
import { album } from '../../redux/actions/playAlbum';
import { useDispatch, useSelector } from 'react-redux';
import { Endpoints } from '../../api/Endpoints';
import { randomMusic } from '../../util/random';
import { RootState } from '../../redux/reducers';

function PirexChartLayout() {

    const dispatch = useDispatch();

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
    const [length, setLength] = useState<number>(10);
    const [indexRender, setIndexRender] = useState<number>(0);

    const fetchAllTrack = async () => {
        return axios.get(`${Endpoints}/api/track`)
            .then((res) => { setAllTrack(res.data) })
            .catch((err) => { console.log(err) })
    }

    const playPirexWorldRankings = () => {
        const index = randomMusic(allTrack.length);
        window.localStorage.setItem('music', JSON.stringify(allTrack[index]));
        window.localStorage.setItem('playlist', JSON.stringify(allTrack));
        window.localStorage.setItem('indexSong', index.toString());
        dispatch(listen('listen', allTrack[index]));
        dispatch(album('playAlbum', allTrack));
    }

    const playPirexCountryRankings = (country: string) => {
        const trackCountry = allTrack.filter((track => {
            return track.country === country;
        }))
        const index = randomMusic(trackCountry.length);
        window.localStorage.setItem('music', JSON.stringify(trackCountry[index]));
        window.localStorage.setItem('playlist', JSON.stringify(trackCountry));
        window.localStorage.setItem('indexSong', index.toString());
        dispatch(listen('listen', trackCountry[index]));
        dispatch(album('playAlbum', trackCountry));
    }

    const render = () => {
        setIndexRender(indexRender + 1)
    }

    const seeTopMore = () => {
        setLength(100)
    }

    useEffect(() => {
        fetchAllTrack()
    }, [])

    useEffect(() => { }, [length])
    useEffect(() => { }, [indexRender])
    return (
        <div className="chart container">
            <div className="chart__display_flex">
                <div className="chart__title">
                    <h1>PirexChart</h1>
                </div>
                {
                    allTrack.length !== 0
                        ?
                        <div
                            className="chart__icon_player"
                            onClick={playPirexWorldRankings}
                        >
                            <div className="chart__icon_style">
                                <PlayCircleFilledWhiteIcon />
                            </div>
                        </div>
                        : null
                }
            </div>
            {
                allTrack.length !== 0
                    ?
                    (
                        <>
                            <div className="chart__main">
                                <div className="charts">
                                    <ul className="charts__main_list">
                                        {
                                            allTrack.slice(0, length).map((track, index) => {
                                                return (
                                                    <Chart
                                                        track={track}
                                                        tracks={allTrack}
                                                        index={index}
                                                        render={render}
                                                    />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            {
                                length === 10
                                    ?
                                    <div className="artists__btn_flex">
                                        <div className="artists__btn_margin">
                                            <div
                                                className="artists__btn_padidng artists__btn_background artists__btn"
                                                onClick={seeTopMore}
                                            >
                                                <span className="artists__btn_text">SEE TOP 100</span>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                            <div className="chart__country">
                                <Box sx={{ width: '100%' }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                            <div className="chart__display_flex">
                                                <div className="chart__title">
                                                    <h2>Viet Nam</h2>
                                                </div>
                                                <div
                                                    className="chart__icon_player"
                                                    onClick={() => { playPirexCountryRankings('VietNam') }}
                                                >
                                                    <div className="chart__icon_style">
                                                        <PlayCircleFilledWhiteIcon />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="charts">
                                                {
                                                    allTrack.filter((track) => {
                                                        return track.country === 'VietNam';
                                                    }).map((track, index) => {
                                                        return (
                                                            <Chart
                                                                track={track}
                                                                tracks={allTrack}
                                                                index={index}
                                                                render={render}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Grid>
                                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                            <div className="chart__display_flex">
                                                <div className="chart__title">
                                                    <h2>US-UK</h2>
                                                </div>
                                                <div
                                                    className="chart__icon_player"
                                                    onClick={() => { playPirexCountryRankings('US-UK') }}
                                                >
                                                    <div className="chart__icon_style">
                                                        <PlayCircleFilledWhiteIcon />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="charts">
                                                {
                                                    allTrack.filter((track) => {
                                                        return track.country === 'US-UK';
                                                    }).map((track, index) => {
                                                        return (
                                                            <Chart
                                                                track={track}
                                                                tracks={allTrack}
                                                                index={index}
                                                                render={render}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Grid>
                                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                            <div className="chart__display_flex">
                                                <div className="chart__title">
                                                    <h2>Korea</h2>
                                                </div>
                                                <div
                                                    className="chart__icon_player"
                                                    onClick={() => { playPirexCountryRankings('Korea') }}
                                                >
                                                    <div className="chart__icon_style">
                                                        <PlayCircleFilledWhiteIcon />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="charts">
                                                {
                                                    allTrack.filter((track) => {
                                                        return track.country === 'Korea';
                                                    }).map((track, index) => {
                                                        return (
                                                            <Chart
                                                                track={track}
                                                                tracks={allTrack}
                                                                index={index}
                                                                render={render}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </>
                    )
                    : <LoaddingPirexChart />
            }
        </div>
    )
}

export default PirexChartLayout;