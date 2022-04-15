import React, { useState, useEffect } from 'react';
import Action from './Action';
// import {Line} from 'rc-progress';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Stack from '@mui/material/Stack';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { formatTimer } from '../../util/timmer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { listen } from '../../redux/actions/listen';
import { useDispatch } from 'react-redux';


const player = new Audio();
let playingMusicCurrent = false;
let indexSong: number = parseInt(localStorage.getItem('indexSong') || '0');

function MusicPlayer() {
    const dispatch = useDispatch();
    const [currentTime, setCurrentTime] = useState("00:00");
    const [volume, setVolume] = useState<number>(70);
    const [mute, setMute] = useState<boolean>(false)
    const [percent, setPercent] = useState<number>(0);
    player.volume = mute === true ? 0 : volume / 100;
    const [playPause, setPlayPause] = useState<boolean>(true);
    const musicRedux = useSelector((state: RootState) => state.music);
    const albumRedux = useSelector((state: RootState) => state.album);
    const [musicPlayer, setMusicPlayer] = useState<{
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
    }>(JSON.parse(localStorage.getItem('music') || '{}'));
    const [currentAlbum, setCurrentAlbum] = useState<{
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
    }[]>(JSON.parse(localStorage.getItem('playlist') || '{}'));
    // listenWhenPlay();

    const handleChange = (event: Event, newValue: number | number[]) => {
        setPercent(newValue as number);
        player.currentTime = ((newValue as number) * musicPlayer.duration) / 100;
        setCurrentTime(formatTimer(player.currentTime));
        playSong();
    }

    const handleVolume = (event: Event, newValue: number | number[]) => {
        const volumeTmp = newValue as number;
        setVolume(volumeTmp);
        setMute(volumeTmp === 0 ? true : false);
    }

    function listenWhenPlay() {
        player.addEventListener("timeupdate", () => {
            setCurrentTime(formatTimer(player.currentTime));
            setPercent((player.currentTime * 100) / musicPlayer.duration);
        })
        player.onpause = () => {
            player.pause();
        }
        player.onplay = () => {
            player.play();
        }
        player.onended = () => {
            playingMusicCurrent = false;
            nextSong();
        }
    }

    const playSong = () => {
        if (playingMusicCurrent === false) {
            player.src = musicRedux.url || musicPlayer.url;
            playingMusicCurrent = true;
        }
        setPlayPause(false);
        player.play();
        listenWhenPlay();
    }

    const pauseSong = () => {
        setPlayPause(true);
        player.pause();
    }

    const nextSong = () => {
        indexSong += 1;
        console.log(indexSong);
        console.log(currentAlbum.length);
        console.log(indexSong === currentAlbum.length);
        if (indexSong >= currentAlbum.length) {
            console.log(1);
            indexSong = 0;
            setMusicPlayer(currentAlbum[indexSong]);
        } else {
            console.log(2);
            setMusicPlayer(currentAlbum[indexSong]);
        }
        window.localStorage.setItem('indexSong', indexSong.toString());
        window.localStorage.setItem('music', JSON.stringify(currentAlbum[indexSong]));
        if (currentAlbum[indexSong] !== musicRedux) {
            dispatch(listen('listen', currentAlbum[indexSong]));
        } else {
            playSong();
        }
    }

    const prevSong = () => {
        indexSong -= 1;
        if (indexSong < 0) {
            indexSong = currentAlbum.length - 1;
            setMusicPlayer(currentAlbum[indexSong]);
        } else {
            setMusicPlayer(currentAlbum[indexSong]);
        }
        window.localStorage.setItem('indexSong', indexSong.toString());
        window.localStorage.setItem('music', JSON.stringify(currentAlbum[indexSong]));
        if (currentAlbum[indexSong] !== musicRedux) {
            dispatch(listen('listen', currentAlbum[indexSong]));
        } else {
            playSong();
        }
    }

    useEffect(() => {
        listenWhenPlay();
    }, []);
    useEffect(() => {
        window.addEventListener('storage', () => {
            setMusicPlayer(JSON.parse(localStorage.getItem('music') || '{}'));
        })
    }, [])
    useEffect(() => {
        if (Object.keys(musicRedux).length !== 0) {
            playingMusicCurrent = false;
            setMusicPlayer(musicRedux);
            setCurrentAlbum(Object.keys(albumRedux).length === 0 ? currentAlbum : albumRedux);
            indexSong = parseInt(localStorage.getItem('indexSong') || '0');
            playSong();
        } else {
            setMusicPlayer(JSON.parse(localStorage.getItem('music') || '{}'));
        }
    }, [musicRedux])
    return (
        <>
            {Object.keys(musicPlayer).length === 0 ?
                <div></div>
                :
                (
                    <div className="sb__music__player">
                        <div className="sb__music__main__image sb__margin__auto">
                            <img src={musicPlayer.mainImg} alt={musicPlayer.nameSong} />
                        </div>
                        <div className="sb__music__content">
                            <div className="sb__music__track">
                                <div>
                                    <p className="sb__name_song sb__margin_none">{musicPlayer.nameSong}</p>
                                    <p className="sb__margin_none">
                                        {
                                            musicPlayer.artists.map((artist, index) => {
                                                return (
                                                    <>
                                                        {
                                                            index === 0 ?
                                                                <span>{artist.nameArtists}</span>
                                                                : <span> & {artist.nameArtists}</span>
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="sb__music__control">
                                <Action
                                    playPause={playPause}
                                    playSong={playSong}
                                    pauseSong={pauseSong}
                                    nextSong={nextSong}
                                    prevSong={prevSong}
                                />
                                <Slider
                                    size="small"
                                    value={percent}
                                    aria-label="Small"
                                    color="secondary"
                                    className="sb__color_green"
                                    onChange={handleChange}
                                />
                                <div className="sb__music__time">
                                    <div className="sb__flex_space_bewten">
                                        <p className="sb__margin_none">{currentTime}</p>
                                        <p className="sb__margin_none">{formatTimer(musicPlayer.duration)}</p>
                                    </div>
                                </div>
                                <div className="sb__action__display_flex">
                                    <Stack className="sb__volume_min_width sb__margin_action" direction="row" sx={{ mb: 1 }} alignItems="center">
                                        {
                                            mute === false ?
                                                <VolumeUpIcon className="sb__cursor_pointer sb__volume_hover" onClick={() => { setMute(true) }} />
                                                :
                                                <VolumeOffIcon className="sb__cursor_pointer sb__volume_hover" onClick={() => { setMute(false) }} />
                                        }
                                        <Slider
                                            size="small"
                                            value={mute === true ? 0 : volume}
                                            aria-label="Volumne"
                                            className="sb__margin_left sb__color_green"
                                            color="secondary"
                                            onChange={handleVolume}
                                        />
                                    </Stack>
                                    <div className="sb__playlist">
                                        <Link to="/music/current-playlist">
                                            <QueueMusicIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MusicPlayer;