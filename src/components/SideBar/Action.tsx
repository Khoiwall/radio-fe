import React, {useState} from 'react';
import '../../asset/css/SideBar.css';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';

interface ActionType{
    playSong: ()=> void;
    pauseSong: ()=>void;
    nextSong: ()=>void;
    prevSong: () => void;
    playPause: boolean;
}

function PlayerAction({
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    playPause
}: ActionType){

    const playMusic = () =>{
        playSong();
    }
    const pauseMusic = () =>{
        pauseSong();
    }
    const nextMusic = () =>{
        nextSong();
    }
    const prevMusic = () =>{
        prevSong();
    }
    return(
        <div className="sb__action">
            <div className="sb__action__prev"
                onClick={prevMusic}
            >
                <SkipPreviousOutlinedIcon/>
            </div>
            {
                playPause ?
                <div className="sb__action__play" 
                    onClick={playMusic}
                >
                    <PlayArrowOutlinedIcon/>
                </div>
                :
                <div className="sb__action__pause" 
                    onClick={pauseMusic}
                >
                    <PauseOutlinedIcon/>
                </div>
            }
            <div className="sb__action__next"
                onClick={nextMusic}
            >
                <SkipNextOutlinedIcon/>
            </div>
        </div>
    )
}

export default PlayerAction