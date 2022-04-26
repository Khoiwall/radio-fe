import react from 'react';
import '../../asset/css/News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HotNewsChild from '../../components/HomeComponent/HotNewsChild';

interface NewsType {
    allNews: {
        idNews: string,
        nameNews: string,
        timeUp: Date,
        like: number,
        content: string,
        comments: {
            idUser: string,
            content: string,
            like: number
        }[],
        image: string,
    }[]
}

function NewsLayout({
    allNews
}: NewsType) {
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
                            allNews.map((news, index) => {
                                return (
                                    <HotNewsChild news={news} />
                                )
                            })
                        }
                    </Grid>
                </Box>
            </div>
            <div className="artists__btn_flex">
                <div className="artists__btn_margin">
                    <div className="artists__btn_padidng artists__btn_background artists__btn">
                        <span className="artists__btn_text">LOAD MORE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLayout;