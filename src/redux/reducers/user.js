export const userReducer = (state = 'Jane', action) => {
  // if(action.type === 'updateUser') {
  //   return action.payload;
  // }
  // return state;
  switch(action.type) {
    case 'updateUser':
      return action.payload;
    default:
      return state;
  }
};