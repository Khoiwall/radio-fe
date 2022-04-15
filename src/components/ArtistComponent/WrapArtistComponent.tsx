import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/Artists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';

interface TypeWrapArtistComponent {
    fetchArtistsCountryAndGenre: (nation: string, genre: string) => void;
    searchArtist: (textField: string) => void;
}

const artistsCountry: string[] = [
    'All Artists', 'Việt Nam', 'USUK', 'Korean'
]
const artistsGenres: string[] = [
    'All Genres', 'ROCK', 'EDM', 'RAP'
]

function WrapArtistComponent({
    fetchArtistsCountryAndGenre,
    searchArtist
}: TypeWrapArtistComponent) {
    const [textField, setTextField] = useState('');
    const [filterCountry, setFilterCountry] = useState<boolean>(false);
    const [filterGenres, setFilterGenres] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('All Artists');
    const [genres, setGenres] = useState<string>('All Genres');
    const artistCountry = useRef<any>(null);
    const artistGenres = useRef<any>(null);

    const selectCountry = (item: string) => {
        setCountry(item);
        fetchArtistsCountryAndGenre(item, genres);
    }
    const selectGenre = (item: string) => {
        setGenres(item);
        fetchArtistsCountryAndGenre(country,item);
    }

    const searchArtists = (e: any) => {
        e.preventDefault();
        searchArtist(textField)
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(e: any) {
            if (artistGenres.current && !artistGenres.current.contains(e.target)) {
                setFilterGenres(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [artistGenres]);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(e: any) {
            if (artistCountry.current && !artistCountry.current.contains(e.target)) {
                setFilterCountry(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [artistCountry]);

    return (
        <div className="artists__content">
            <div className="artists__filter">
                <div className="input__search">
                    <form onSubmit={searchArtists}>
                        <input type="search"
                            className="form-control rounded"
                            placeholder="Search..."
                            aria-label="Search"
                            aria-describedby="search-addon"
                            onChange={(e) => { setTextField(e.target.value) }}
                        />
                        <SearchIcon className="hd__icon__search" onClick={searchArtists}/>
                    </form>
                </div>
                <div className="artists__filter_wrap">
                    <div
                        className="artist__select_country artist__select_margin_right_32"
                        ref={artistCountry}
                    >
                        <div className="select__current"
                            onClick={() => { setFilterCountry(!filterCountry) }}
                        >
                            <span>{country}</span>
                        </div>
                        <div
                            className={filterCountry ? 'list__filter visibility_visible' : 'list__filter visibility_hidden'}
                        >
                            <ul>
                                {artistsCountry.map((item) => {
                                    return (
                                        <li onClick={() => { selectCountry(item) }}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="artist__select_genres"
                        ref={artistGenres}
                    >
                        <div className="select__current"
                            onClick={() => { setFilterGenres(!filterGenres) }}
                        >
                            <span>{genres}</span>
                        </div>
                        <div
                            className={filterGenres ? 'list__filter visibility_visible' : 'list__filter visibility_hidden'}
                        >
                            <ul>
                                {artistsGenres.map((genres) => {
                                    return (
                                        <li onClick={() => { selectGenre(genres) }}>{genres}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WrapArtistComponent;