import {createStore} from "redux";
// index가 생략됐네? : import 규칙은
// 1) x.js 먼저 찾는다.
// 2) x 폴더에 index.js 찾는다.
import {allReducers} from "./reducers";

export const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);