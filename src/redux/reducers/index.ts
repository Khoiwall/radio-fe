import { combineReducers } from 'redux';
import musicRedux from './musicRedux';
import albumRedux from './albumRedux';
import userRedux from './userRedux';

const rootReducer = combineReducers({
    album: albumRedux,
    music: musicRedux,
    user: userRedux
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;