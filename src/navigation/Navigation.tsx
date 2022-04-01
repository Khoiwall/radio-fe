import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Artists from '../screens/Artists/Artists';
import Events from '../screens/Events/Events';
import Home from '../screens/Home/Home';
import News from '../screens/News/News';
import RankMusic from '../screens/RankMusic/RankMusic';
import Store from '../screens/Store/Store';
import Albums from '../screens/Albums/Albums';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';

import { RootState } from '../redux/reducers';
import { useSelector } from 'react-redux';

function Navigation() {
    const user = useSelector((state: RootState) => state.user);
    return (
        <Switch>
            {/* user */}
            <Route path="/sign-in">
                {Object.keys(user).length > 0 ? <Redirect to="/" /> : <SignIn />}
            </Route>
            <Route path='/sign-up'>
                {Object.keys(user).length > 0 ? <Redirect to="/" /> : <SignUp />}
            </Route>

            {/* everyone */}
            <Route path='/albums'>
                <Albums />
            </Route>
            <Route path='/store'>
                <Store />
            </Route>
            <Route path='/rank'>
                <RankMusic />
            </Route>
            <Route path='/news'>
                <News />
            </Route>
            <Route path='/events'>
                <Events />
            </Route>
            <Route path='/artists'>
                <Artists />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    )
}

export default Navigation;