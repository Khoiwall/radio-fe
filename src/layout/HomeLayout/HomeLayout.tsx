import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/Home.css';
import BannerComponent from '../../components/HomeComponent/Banner';
import NewReleases from '../../components/HomeComponent/NewReleases';
import UpcomingEvents from '../../components/HomeComponent/UpcomingEvents';
import TopArtists from '../../components/HomeComponent/TopArtists';
import TopTrack from '../../components/HomeComponent/TopTrack';
import HotNews from '../../components/HomeComponent/HotNews';

interface HomeType {
    allTrack: {
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
    }[];
    allNotification: {
        idNotification: string;
        title: string;
        type: string;
        idSNEA: string;
        image: string;
        content: string;
    }[];
    allAlbum: {
        idAlbum: string,
        idTrack: string[],
        artists: {
            idArtists: string,
            nameArtists: string,
        }[],
        like: number,
        name: string,
        image: string
    }[];
    allArtists: {
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
        type: string[]
    }[];
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

function HomeLayout({
    allTrack,
    allNotification,
    allAlbum,
    allArtists,
    allNews
}: HomeType) {
    return (
        <div className="home container">
            <BannerComponent
                allTrack={allTrack}
                allNotification={allNotification}
            />
            <NewReleases
                allTrack={allTrack}
                allAlbum={allAlbum}
            />
            <UpcomingEvents />
            <TopArtists 
                allArtists={allArtists}
            />
            <TopTrack
                allTrack={allTrack}
            />
            <HotNews allNews={allNews}/>
        </div>
    )
}

export default HomeLayout;