import React from 'react';
import '../../asset/css/SideBar.css';
import { Link } from "react-router-dom";
import Limitations from './Limitations';
import MusicPlayer from './MusicPlayer';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

interface SideBarType {
    windowDimensions: {
        width: number;
        height: number;
    }
}

function SideBar({
    windowDimensions
}: SideBarType) {
    return (
        <div className="sb__sidebar">
            <div className="sb__logo">
                <Link to="/">
                    <div className="sb__display_flex sb__logo">
                        <LibraryMusicIcon />
                        <div className="sb__text">
                            <p>Pirex Radio</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="sb__nav">
                <Limitations />
            </div>
            {
                windowDimensions.width > 900 ?
                    (<div className="sb__music__current">
                        <MusicPlayer />
                    </div>)
                : null
            }
        </div>
    )
}

export default SideBar;