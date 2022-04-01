import react from 'React';
import '../../asset/css/Home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import UpcomingEventsChild from './UpcomingEventsChild';

function UpcomingEvents(){
    return(
        <div className="hp__margin_top_32">
            <div className="hp__header">
                <div className="hp__display_flex">
                    <h2 className="hp__title_h2">Upcoming Events</h2>
                    <Link to="/events">
                        <div className="hp__see_all">
                            <p>See all</p>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </div>
            </div>
            <UpcomingEventsChild/>
        </div>
    )
}

export default UpcomingEvents;