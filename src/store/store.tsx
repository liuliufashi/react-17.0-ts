import { createStore ,applyMiddleware } from  "redux";
import ThunkMiddleware  from  "redux-thunk";
import  Reducer from  "./reducer";
const store = createStore(Reducer,applyMiddleware(ThunkMiddleware));
export default  store;
