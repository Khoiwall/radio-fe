import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import {userAction} from '../../redux/actions/user';

export default function ButtonAppBar() {
  const [textFind, setTextFind] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log(user);


  const signOut = ()=>{
    localStorage.removeItem("accessToken");
    dispatch(userAction('signOut', {}));
  }

  useEffect(()=>{
    
  },[user])
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="hd__nav__text">
              <Link to="/profile/123">Profile</Link>
            </Nav.Link>
            <Nav.Link className="hd__nav__text">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link className="hd__nav__text">
              <Link to="/contacts">Contacts</Link>
            </Nav.Link>
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
          </Nav>
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
                      <img src={user.avatar} alt="avatar"/>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}