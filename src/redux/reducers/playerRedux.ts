interface PlayerType {
    playPause: any;
    mute: any;
    volume: any;
    timeCurrent: any;
    type: string;
}

const playerRedux = (state = { playPause: true, volume: 70, mute: false, timeCurrent: 0 }, action: PlayerType) => {
    switch (action.type) {
        case 'playMuisc':
            return { playPause: action.playPause, volume: action.volume, mute: action.mute , timeCurrent: action.timeCurrent};
        default:
            return state;
    }
};

export default playerRedux;
