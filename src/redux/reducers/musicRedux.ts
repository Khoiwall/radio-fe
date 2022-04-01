interface MusicType {
  payload?: any;
  type: string;
}

const musicRedux = (state = {}, action: MusicType) => {
  switch (action.type) {
    case 'listen':
      return action.payload;
    default:
      return state;
  }
};

export default musicRedux;
