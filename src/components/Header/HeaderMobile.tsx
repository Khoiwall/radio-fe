import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Button from '@mui/material/Button';
import HeaderMobileComponent from './HeaderMobileComponent';

import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';

const anchor = 'right';

export default function ButtonAppBar() {
  const [textFind, setTextFind] = useState('');
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const signOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(userAction('signOut', {}));
  }

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setOpenMenu(open);
      };

  useEffect(() => {

  }, [user])
  return (
    <Navbar className="header__mobile">
      <Container className="header__fixed">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header__mobile_full_width">
            <Box className="header__mobile_full_width">
              <Grid container spacing={2} className="header__mobile_margin_top_bottom">
                <Grid xs={2}>
                  <Link to="/">
                    <div className="sb__display_flex">
                      <LibraryMusicIcon />
                      <div className="sb__text">
                        <p>Pirex Radio</p>
                      </div>
                    </div>
                  </Link>
                </Grid>
                <Grid xs={9}>
                  <div className="input__search header__mobile_margin_left_0">
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
                <Grid xs={1}>
                  <div className="header__icon_menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </div>
                  <Drawer
                    anchor={anchor}
                    open={openMenu}
                    onClose={toggleDrawer(false)}
                  >
                    <HeaderMobileComponent/>
                  </Drawer>
                </Grid>
              </Grid>
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}