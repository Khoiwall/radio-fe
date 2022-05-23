import react from 'react';
import '../../asset/css/News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function loaddingLoop() {
    const length = [];
    for (let i = 0; i < 6; i++) {
        length.push(i);
    }
    return length;
}

function LoaddingNewsLayout() {
    return (
        <div className="news container">
            <div className="news__display_flex">
                <div className="news__title">
                    <h1>News</h1>
                </div>
            </div>
            <div className="new__margin_top_30 container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            loaddingLoop().map(() => {
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
    )
}
export default LoaddingNewsLayout;