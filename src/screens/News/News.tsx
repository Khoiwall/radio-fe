import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsLayout from '../../layout/NewsLayout/NewsLayout';
import LoaddingNewsLayout from '../../layout/NewsLayout/LoaddingNewsLayout';

import { Endpoints } from '../../api/Endpoints';

function News() {

    const [allNews, setAllNews] = useState<
        {
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
    >([])

    useEffect(() => {
        fecthNews()
    }, [])

    const fecthNews = async () => {
        return axios.get(`${Endpoints}/api/news`)
            .then((res) => { setAllNews(res.data) })
            .catch((err) => { console.log(err) })
    }

    return (
        <>
            {
                allNews.length !== 0
                    ?
                    <NewsLayout allNews={allNews} />
                    :
                    <LoaddingNewsLayout />
            }
        </>
    )
}

export default News;