import React, {useRef} from 'react';
import '../../asset/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {events} from '../../api/events';
import {Link} from 'react-router-dom';
import ButtonDialog from './ButtonDialog';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function UpcomingEventsChild(){
    const sliderRef = React.useRef<Slider | null>(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const slickNext = () => {
        sliderRef.current?.slickNext()
    };

    const slickPrev = () => {
        sliderRef.current?.slickPrev();
    };
    return(
        <div className="uec">
            <Slider ref={sliderRef} {...settings}>
                {
                    events.map((event,index)=>{
                        return(
                            <div className="uec__cover_event">
                                <div className="uec__event" 
                                    data-bg={event.image} 
                                    style={{background: `url('${event.image}') center center / cover no-repeat`}}
                                >
                                    {
                                        event.ticket > 0 ?
                                            <ButtonDialog event={event}/>
                                        :
                                            <div className="uec__sold_out">
                                                <Button variant="outlined" className="uec__buy">
                                                    <p>Sold out</p>
                                                </Button>
                                            </div>

                                    }
                                    <span className="uec__event_date">
                                        {event.date}
                                    </span>
                                    <span className="uec__event_time">
                                        {event.time}
                                    </span>
                                    <Link to={`/events/${event.idEvent}`}>
                                        <h3 className="uec__event_title">{event.nameEvents}</h3>
                                    </Link>
                                    <div className="uec__break_word">
                                        <p className="uec__event_description">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                
                }
            </Slider>
            <div className="uec__prev_next">
                <div className="uec__prev" onClick={slickPrev}><NavigateBeforeIcon/></div>
                <div className="uec__next" onClick={slickNext}><NavigateNextIcon/></div>
            </div>
        </div>
    )
}

export default UpcomingEventsChild;