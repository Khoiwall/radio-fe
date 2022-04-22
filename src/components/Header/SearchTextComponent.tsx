import react, { useState } from 'react';
import '../../asset/css/HeaderFooter.css';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import { Container } from 'react-bootstrap';

interface SearchTextComponentType{
    openSearch: string;
    closeSearch: () => void;
}

function SearchTextComponent({
    openSearch,
    closeSearch
}: SearchTextComponentType) {
    const [textFind, setTextFind] = useState('');

    return (
        <div className={"header__mobile_search " + openSearch}>
            <Container>
                <Grid container>
                    <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                        <div className="input__search">
                            <input type="search"
                                className="form-control rounded"
                                placeholder="Artist, Track or Album"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                onChange={(e) => { setTextFind(e.target.value) }}
                            />
                            <SearchIcon className="hd__icon__search" />
                        </div>
                    </Grid>
                    <Grid item xl={1} lg={1} md={1} sm={1} xs={1} className="header__mobile_padding_top_left">
                        <ClearIcon className="pointer" onClick={()=>{closeSearch()}} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SearchTextComponent;