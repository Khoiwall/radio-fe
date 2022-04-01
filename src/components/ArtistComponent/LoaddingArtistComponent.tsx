import react from 'react';
import '../../asset/css/Artists.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function loadingLoop() {
    let tmp = [];
    for (let i = 0; i < 12; i++) {
        tmp.push(i);
    }
    return tmp;
}

function LoaddingArtistComponent() {
    return (
        <div className="a__margin_top_16">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        loadingLoop().map(() => {
                            return (
                                <Grid item xs={6} sm={4} md={3} lg={2}>
                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                        <Skeleton width={190} height={171} />
                                    </SkeletonTheme>
                                    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#fff">
                                        <Skeleton width={120} />
                                    </SkeletonTheme>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default LoaddingArtistComponent;