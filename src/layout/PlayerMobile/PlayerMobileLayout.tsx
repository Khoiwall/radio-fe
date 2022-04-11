import react, { useState } from 'react';
import '../../asset/css/Player.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import Slider from '@mui/material/Slider';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import Stack from '@mui/material/Stack';
// import QueueMusicIcon from '@mui/icons-material/QueueMusic';

import { formatTimer } from '../../util/timmer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { listen } from '../../redux/actions/listen';
import { useDispatch } from 'react-redux';

const player = new Audio();
let playingMusicCurrent = false;
let indexSong: number = parseInt(localStorage.getItem('indexSong') || '0');

function PlayerMobile() {
    const dispatch = useDispatch();
    const [openPlayer, setOpenPlayer] = useState<string>('');
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

    return (
        <div className="player__mobile">
            <div className="player__mobile_fixed">
                <div className="player__mobile_bnt" onClick={() => { openPlayer === '' ? setOpenPlayer('openPlayer') : setOpenPlayer('') }}>
                    <div className="player__mobile_display_flex">
                        <div className="player__mobile_icon">
                            <MusicNoteIcon />
                        </div>
                        <div className="player__mobile_text">
                            Player
                        </div>
                    </div>
                </div>
            </div>
            <div className="player__mobile__control">
                <div className="player__mobile_control_flex">
                    <div className="player__mobile_avatar">
                        <img src={musicPlayer.mainImg} alt="123" />
                    </div>
                    <div>
                        
                    </div>
                    <div>control</div>
                    <div>thanh nhac</div>
                    <div>2 cai kia</div>
                </div>
            </div>
        </div>
    )
}

export default PlayerMobile;