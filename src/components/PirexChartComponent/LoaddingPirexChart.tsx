import react from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../asset/css/PirexChart.css';

function loaddingLoop() {
    const length = [];
    for (let i = 0; i < 10; i++) {
        length.push(i);
    }
    return length;
}

function LoaddingPirexChart() {
    return (
        <div className="loadding">
            <div className="chart__main">
                <div className="charts">
                    {
                        loaddingLoop().map(() => {
                            return (
                                <div className="loadding__display_flex">
                                    <div className="loadding__left">
                                        <span className="loadding__rank_margin">
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={20} height={33} />
                                            </SkeletonTheme>
                                        </span>
                                        <div className="column_center loadding__rank_margin">
                                            <span>
                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                    <Skeleton width={20} height={20} />
                                                </SkeletonTheme>
                                            </span>
                                            <span>
                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                    <Skeleton width={8} height={21} />
                                                </SkeletonTheme>
                                            </span>
                                        </div>
                                        <div className="loadding__img loadding__rank_margin">
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={48} height={48} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="column">
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={150} height={24} />
                                            </SkeletonTheme>
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={120} height={18} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                    <div className="loadding__right">
                                        <div className="loadding__icon loadding__rank_margin">
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={24} height={24} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="loadding__timer">
                                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                <Skeleton width={31} height={18} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="artists__btn_flex">
                        <div className="artists__btn_margin">
                            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                <Skeleton width={160} height={40} />
                            </SkeletonTheme>
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
                                    </div>
                                    <div className="charts">
                                        {
                                            loaddingLoop().slice(0, 5).map(() => {
                                                return (
                                                    <div className="loadding__display_flex">
                                                        <div className="loadding__left">
                                                            <span className="loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={20} height={33} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <div className="column_center loadding__rank_margin">
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={20} height={20} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={8} height={21} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                            </div>
                                                            <div className="loadding__img loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={48} height={48} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="column">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={150} height={24} />
                                                                </SkeletonTheme>
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={120} height={18} />
                                                                </SkeletonTheme>
                                                            </div>
                                                        </div>
                                                        <div className="loadding__right">
                                                            <div className="loadding__icon loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={24} height={24} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="loadding__timer">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
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
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={20} height={33} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <div className="column_center loadding__rank_margin">
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={20} height={20} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={8} height={21} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                            </div>
                                                            <div className="loadding__img loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={48} height={48} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="column">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={150} height={24} />
                                                                </SkeletonTheme>
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={120} height={18} />
                                                                </SkeletonTheme>
                                                            </div>
                                                        </div>
                                                        <div className="loadding__right">
                                                            <div className="loadding__icon loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={24} height={24} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="loadding__timer">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
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
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={20} height={33} />
                                                                </SkeletonTheme>
                                                            </span>
                                                            <div className="column_center loadding__rank_margin">
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={20} height={20} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                                <span>
                                                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                        <Skeleton width={8} height={21} />
                                                                    </SkeletonTheme>
                                                                </span>
                                                            </div>
                                                            <div className="loadding__img loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={48} height={48} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="column">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={150} height={24} />
                                                                </SkeletonTheme>
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={120} height={18} />
                                                                </SkeletonTheme>
                                                            </div>
                                                        </div>
                                                        <div className="loadding__right">
                                                            <div className="loadding__icon loadding__rank_margin">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                                                    <Skeleton width={24} height={24} />
                                                                </SkeletonTheme>
                                                            </div>
                                                            <div className="loadding__timer">
                                                                <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
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
            </div>
        </div>
    )
}

export default LoaddingPirexChart;