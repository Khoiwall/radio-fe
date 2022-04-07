import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HeaderMobileComponent from './HeaderMobileComponent';
import SearchTextComponent from './SearchTextComponent'

import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';

const anchor = 'left';

export default function ButtonAppBar() {
  const [textFind, setTextFind] = useState('');
  const [openSearch, setOpenSearch] = useState('');
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

  const closeSearch = ()=>{
    setOpenSearch('');
  }


  useEffect(() => {

  }, [user])
  return (
    <Navbar className="header__mobile">
      <Container className="header__fixed">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header__mobile_full_width">
            <div className="header__mobile_display_flex">
              <Link to="/">
                <div className="sb__display_flex">
                  <LibraryMusicIcon />
                  <div className="sb__text">
                    <p>Pirex Radio</p>
                  </div>
                </div>
              </Link>
              <div className="header__mobile_right_display_flex">
                <div 
                  className="header__mobile_margin_left_0 header__mobile_search_icon"
                  onClick={()=>{setOpenSearch('true')}}
                >
                  <SearchIcon/>
                </div>
                {
                  Object.keys(user).length === 0 ?
                    (<div className="hd__sign_in">
                      <Link to="/sign-in">
                        <div className="hd__display_flex hd__gap_sign_in">
                          <p className="hd__margin_none">Sign in</p>
                          <LoginIcon />
                        </div>
                      </Link>
                    </div>
                    )
                    :
                    (
                      <div className="hd__information">
                        <div className="hd__display_flex">
                          <span className="hd__user_icon hd__margin_right_4">
                            <img src={user.avatar} alt="avatar" />
                          </span>
                          <span className="hd__user_name">{user.user.userName}</span>
                        </div>
                        <div className="hd__more_information hd__drop">
                          <ul>
                            <li className="hd__blance">Blance: {user.blance}</li>
                            <li className="hd__setting">
                              <Link to={`/user/${user.user.userId}/setting`}>
                                Setting
                              </Link>
                            </li>
                            <li className="hd__sign_out" onClick={signOut}>
                              Sign Out
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                }
                <div className="header__icon_menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </div>
                <Drawer
                  anchor={anchor}
                  open={openMenu}
                  onClose={toggleDrawer(false)}
                >
                  <HeaderMobileComponent />
                </Drawer>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        <SearchTextComponent openSearch={openSearch} closeSearch={closeSearch}/>
      </Container>
    </Navbar >
  );
}