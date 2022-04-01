import React from 'react';
import '../../asset/css/Home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import HotNewsChild from './HotNewsChild';

interface HotNews{
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


function HotNews({
    allNews
}: HotNews) {
    return (
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
            <HotNewsChild allNews={allNews}/>
        </div>
    )
}

export default HotNews;