import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import '../../asset/css/PirexChart.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function loaddingLoop() {
    const length = []
    for (let i = 0; i < 12; i++) {
        length.push(i);
    }
    return length
}

function LoaddingHomeLayout() {
    return (
        <div className="container">
            <div className="hp__margin_top_32">
                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                    <Skeleton width={1216} height={460} />
                </SkeletonTheme>
            </div>
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">New Releases</h2>
                        <Link to="/albums">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="nrc">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                loaddingLoop().map(() => {
                                    return (
                                        <Grid className="nrc__album" item xl={2} lg={2} md={3} sm={4} xs={6}>
                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                <Skeleton width={190} height={172} />
                                            </SkeletonTheme>
                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                <Skeleton width={130} height={19} />
                                            </SkeletonTheme>
                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                <Skeleton width={70} height={18} />
                                            </SkeletonTheme>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">Top Artists</h2>
                        <Link to="/artists">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="tac">
                    <Grid container spacing={2}>
                        {
                            loaddingLoop().slice(0, 6).map(() => {
                                return (
                                    <Grid className="nrc__album" item xl={2} lg={2} md={3} sm={4} xs={6}>
                                        <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                            <Skeleton width={190} height={172} />
                                        </SkeletonTheme>
                                        <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                            <Skeleton width={130} height={19} />
                                        </SkeletonTheme>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
                <div className="hp__margin_top_32">
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <div className="chart__display_flex">
                                    <div className="chart__title">
                                        <h2>Viet Nam</h2>
                                    </div>
                                </div>
                                <div className="charts">
                                    {
                                        loaddingLoop().slice(0, 5).map(() => {
                                            return (
                                                <div className="loadding__display_flex">
                                                    <div className="loadding__left">
                                                        <span className="loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={20} height={33} />
                                                            </SkeletonTheme>
                                                        </span>
                                                        <div className="column_center loadding__rank_margin">
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={20} height={20} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={8} height={21} />
                                                                </SkeletonTheme>
                                                            </span>
                                                        </div>
                                                        <div className="loadding__img loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={48} height={48} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="column">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={150} height={24} />
                                                            </SkeletonTheme>
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={120} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                    <div className="loadding__right">
                                                        <div className="loadding__icon loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={24} height={24} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="loadding__timer">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={31} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                </div>
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
                                </div>
                                <div className="charts">
                                    {
                                        loaddingLoop().slice(0, 5).map(() => {
                                            return (
                                                <div className="loadding__display_flex">
                                                    <div className="loadding__left">
                                                        <span className="loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={20} height={33} />
                                                            </SkeletonTheme>
                                                        </span>
                                                        <div className="column_center loadding__rank_margin">
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={20} height={20} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={8} height={21} />
                                                                </SkeletonTheme>
                                                            </span>
                                                        </div>
                                                        <div className="loadding__img loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={48} height={48} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="column">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={150} height={24} />
                                                            </SkeletonTheme>
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={120} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                    <div className="loadding__right">
                                                        <div className="loadding__icon loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={24} height={24} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="loadding__timer">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={31} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                </div>
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
                                </div>
                                <div className="charts">
                                    {
                                        loaddingLoop().slice(0, 5).map(() => {
                                            return (
                                                <div className="loadding__display_flex">
                                                    <div className="loadding__left">
                                                        <span className="loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={20} height={33} />
                                                            </SkeletonTheme>
                                                        </span>
                                                        <div className="column_center loadding__rank_margin">
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={20} height={20} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <span>
                                                                <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                    <Skeleton width={8} height={21} />
                                                                </SkeletonTheme>
                                                            </span>
                                                        </div>
                                                        <div className="loadding__img loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={48} height={48} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="column">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={150} height={24} />
                                                            </SkeletonTheme>
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={120} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                    <div className="loadding__right">
                                                        <div className="loadding__icon loadding__rank_margin">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={24} height={24} />
                                                            </SkeletonTheme>
                                                        </div>
                                                        <div className="loadding__timer">
                                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                                <Skeleton width={31} height={18} />
                                                            </SkeletonTheme>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="hp__margin_top_32">
                <div className="hp__header">
                    <div className="hp__display_flex">
                        <h2 className="hp__title_h2">Hot News</h2>
                        <Link to="/news">
                            <div className="hp__see_all">
                                <p>See all</p>
                                <ArrowForwardIcon />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hnc">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                loaddingLoop().slice(0, 3).map(() => {
                                    return (
                                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <SkeletonTheme baseColor="#282727" highlightColor="#2e2e2e">
                                                <Skeleton height={413} />
                                            </SkeletonTheme>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default LoaddingHomeLayout;