import { createStore ,applyMiddleware } from  "redux";
import ThunkMiddleware  from  "redux-thunk";
import  Reducer from  "./reducer";
//thunk 异步
const store = createStore(Reducer,applyMiddleware(ThunkMiddleware));
export default  store;
