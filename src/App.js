import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";
import {allReducers} from "./redux/reducers";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <p>user: {props.user}</p>
      <button onClick={() => props.updateUser('KIM')}>change name</button>
    </div>
  );
}

// store의 state를 props로 맵핑
const mapStateToProps = (state) => ({
  // 왼쪽은 props가 되고, 오른쪽은 state = { product: xxx, user: xxx }
  user: state.user
});

// action을 dispatch하는 function을 props로 내려준다.(맵핑)
const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
});

// 커링펑션
// HOC
export default connect(mapStateToProps, mapActionToProps)(App);
