interface AlbumType {
  payload?: any;
  type: string;
}

const albumRedux = (state = {}, action: AlbumType) => {
  switch (action.type) {
    case 'playAlbum':
      return action.payload;
    default:
      return state;
  }
};

export default albumRedux;
