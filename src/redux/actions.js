// action은 객체, action type은 스트링
// action creator: 액션을 생성하는 함수 => 파람에 따라 값을 동적으로 생성하기위해
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: {
    user: name
  }
});