import home from '../asset/image/tag/home.png';
import artists from '../asset/image/tag/artists.png';
import album from '../asset/image/tag/album.png';
import rank from '../asset/image/tag/rank.png';
import events from '../asset/image/tag/events.png';
import news from '../asset/image/tag/news.png';
import homeHover from '../asset/image/tag/homeHover.png';
import artistsHover from '../asset/image/tag/artistsHover.png';
import albumHover from '../asset/image/tag/albumHover.png';
import rankHover from '../asset/image/tag/rankHover.png';
import eventsHover from '../asset/image/tag/eventsHover.png';
import newsHover from '../asset/image/tag/newsHover.png';

const tab = [
    {
        name: 'Home',
        url: '/',
        img: home,
        imgHover: homeHover
    },
    {
        name: 'Artists',
        url: '/artists',
        img: artists,
        imgHover: artistsHover
    },
    {
        name: 'Album',
        url: '/albums',
        img: album,
        imgHover: albumHover
    },
    {
        name: 'Rank',
        url: '/rank',
        img: rank,
        imgHover: rankHover
    },
    {
        name: 'Events',
        url: '/events',
        img: events,
        imgHover: eventsHover
    },
    {
        name: 'News',
        url: '/news',
        img: news,
        imgHover: newsHover
    }
]

export default tab;