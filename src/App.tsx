import react, { useState, useEffect } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SideBar from './components/SideBar/SideBar';
import HeaderMobile from './components/Header/HeaderMobile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PlayerMobileLayout from './layout/PlayerMobile/PlayerMobileLayout';
import Navigation from './navigation/Navigation';
import axios from 'axios';

import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAction } from './redux/actions/user';
import { Endpoints } from './api/Endpoints';
import {getWindowDimensions} from './util/getWindowDimensions';
import { io } from 'socket.io-client';


function App() {
  const dispatch = useDispatch();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const getUserByToken = async () => {
    return axios.get(`${Endpoints}/api/user/get-user-by-token`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    })
      .then((res) => {
        dispatch(userAction('login', res.data));
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getUserByToken()
  }, [])

  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xl={2} lg={2} md={3} sm={12} xs={12} className="mobile">
              <SideBar windowDimensions={windowDimensions}/>
            </Grid>
            <Grid item xl={10} lg={10} md={9} sm={12} xs={12} className="app__display_flex app__overflow_y">
              <Header />
              <PlayerMobileLayout windowDimensions={windowDimensions}/>
              <HeaderMobile />
              <Navigation />
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Router>
    </div>
  );
}

export default App;
