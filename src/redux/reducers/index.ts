import { combineReducers } from 'redux';
import musicRedux from './musicRedux';
import albumRedux from './albumRedux';
import userRedux from './userRedux';
import playerRedux from './playerRedux'

const rootReducer = combineReducers({
    album: albumRedux,
    music: musicRedux,
    user: userRedux,
    player: playerRedux
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;