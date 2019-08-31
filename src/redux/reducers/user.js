export const userReducer = (state = 'Jane', action) => {
  if(action.type === 'updateUser') {
    return action.payload;
  }
  return state;
};