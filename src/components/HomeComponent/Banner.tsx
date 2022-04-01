import react, { useState, useEffect } from 'react';
import '../../asset/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { listen } from '../../redux/actions/listen';
import {album} from '../../redux/actions/playAlbum';
import { useDispatch } from 'react-redux';
import axios from 'axios';

interface BannerType{
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
  allNotification:{
      idNotification: string;
      title: string;
      type: string;
      idSNEA: string;
      image: string;
      content: string;
  }[];
}


function BannerComponent({
  allTrack,
  allNotification
}:BannerType) {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const playMusic = (id: string) => {
    const track = allTrack.filter((song) => {
      return song.idTrack === id;
    })

    const relatedMusic = allTrack.filter((song)=>{
      return song.type.includes(track[0].type[0]) && song !== track[0];
    });

    console.log(relatedMusic.unshift(track[0]));

    window.localStorage.setItem('music', JSON.stringify(track[0]));
    window.localStorage.setItem('playlist',JSON.stringify(relatedMusic));
    window.localStorage.setItem('indexSong','0'.toString());
    dispatch(listen('listen', track[0]));
    dispatch(album('playAlbum',relatedMusic));
  }

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {
        allNotification.length === 0 ?
          <div>Loadding</div>
          :
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {
              allNotification.map((notifi, index) => {
                return (
                  <Carousel.Item key={index} className="banner">
                    <div
                      className="d-block w-100 banner__background_image"
                      style={{ backgroundImage: `url(${notifi.image})` }}
                    ></div>
                    <Carousel.Caption className="banner__display_flex banner__width_height">
                      <div className="banner__conent">
                        <h1>{notifi.title}</h1>
                        <p>{notifi.content}</p>
                        <div className="banner__btn">
                          {
                            notifi.type === "Song" ?
                              <div className="play__song_btn" onClick={() => playMusic(notifi.idSNEA)}>
                                <span className="banner__icon">
                                  <PlayCircleOutlineIcon />
                                </span>
                                <span>Listen To Music</span>
                              </div>
                              : null
                          }
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
      }
    </>
  );
}

export default BannerComponent;