import react from 'react';
import Limitations from '../SideBar/Limitations';
import '../../asset/css/HeaderFooter.css';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import { Link } from 'react-router-dom';

function HeaderMobileComponent() {
    return (
        <div className="sb__nav_mobile">
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
            <div className="sb__nav_mobile_display_flex sb__nav_mobile_center sb__nav_mobile_text">
                <Limitations />
            </div>
        </div>
    )
}
export default HeaderMobileComponent;