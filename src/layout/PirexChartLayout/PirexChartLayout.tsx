import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/PirexChart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Chart from '../../components/PirexChartComponent/Chart';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Endpoints } from '../../api/Endpoints';

function PirexChartLayout() {

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
            .then((res) => { setAllTrack(res.data) })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        fetchAllTrack()
    }, [])
    return (
        <div className="chart container">
            <div className="chart__display_flex">
                <div className="chart__title">
                    <h1>PirexChart</h1>
                </div>
                <div className="chart__icon_player">
                    <div className="chart__icon_style">
                        <PlayCircleFilledWhiteIcon />
                    </div>
                </div>
            </div>
            <div className="chart__main">
                <div className="charts">
                    <ul className="charts__main_list">
                        {
                            allTrack.slice(0, 10).map((track, index) => {
                                return (
                                    <Chart
                                        track={track}
                                        tracks={allTrack}
                                        index={index}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="artists__btn_flex">
                <div className="artists__btn_margin">
                    <div
                        className="artists__btn_padidng artists__btn_background artists__btn"
                    >
                        <span className="artists__btn_text">SEE TOP 100</span>
                    </div>
                </div>
            </div>
            <div className="chart__country">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <div className="chart__display_flex">
                                <div className="chart__title">
                                    <h2>Viet Nam</h2>
                                </div>
                                <div className="chart__icon_player">
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
                                <div className="chart__icon_player">
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
                                <div className="chart__icon_player">
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
                                            />
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default PirexChartLayout;