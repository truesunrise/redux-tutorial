import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

// 초기 state를 결정
export const allReducers = combineReducers({
  product: productReducer,
  user: userReducer
});