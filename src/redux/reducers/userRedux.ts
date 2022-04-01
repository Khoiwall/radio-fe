interface UserType {
    payload?: any;
    type: string;
  }
  
  const musicRedux = (state = {}, action: UserType) => {
    console.log(action.payload);
    switch (action.type) {
      case 'login':
        return action.payload;
      case 'signOut':
        return action.payload;
      case 'likeArtist':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default musicRedux;
  