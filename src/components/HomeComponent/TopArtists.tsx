import react from 'React';
import '../../asset/css/Home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import TopArtistsChild from './TopArtistsChild';

interface TopArtists{
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
}

function TopArtists({
    allArtists
}: TopArtists){
    return(
        <div className="hp__margin_top_32">
            <div className="hp__header">
                <div className="hp__display_flex">
                    <h2 className="hp__title_h2">Top Artists</h2>
                    <Link to="/artists">
                        <div className="hp__see_all">
                            <p>See all</p>
                            <ArrowForwardIcon/>
                        </div>
                    </Link>
                </div>
            </div>
            <TopArtistsChild allArtists={allArtists}/>
        </div>
    )
}

export default TopArtists;