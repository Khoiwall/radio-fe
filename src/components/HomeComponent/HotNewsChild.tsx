import React from 'react';
import '../../asset/css/Home.css';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';

interface HotNewsChild {
    news: {
        idNews: string;
        nameNews: string;
        timeUp: Date;
        like: number;
        content: string;
        comments: {
            idUser: string;
            content: string;
            like: number;
        }[];
        image: string;
    }
}
function HotNewsChild({
    news
}: HotNewsChild) {

    let time2 = moment();
    return (
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="hnc__post">
                <div className="hnc__post_img">
                    <img src={news.image} alt={news.nameNews} />
                </div>
                <div className="hnc__post_content">
                    <h3 className="hnc__post_title">
                        <Link to={'/news/' + news.idNews}>{news.nameNews}</Link>
                    </h3>
                    <div className="hnc__post_meta">
                        <span className="post__meta_date">
                            <AccessTimeIcon />
                            <span>2 hours</span>
                        </span>
                        <span className="post__meta_cmt">
                            <CommentIcon />
                            <span>{news.comments.length}</span>
                        </span>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default HotNewsChild;