interface UserType {
  payload?: any;
  type: string;
}

const musicRedux = (state = {}, action: UserType) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'signOut':
      return action.payload;
    case 'likeAndDislike':
      return action.payload;
    default:
      return state;
  }
};

export default musicRedux;
