import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  forgotPasswordReducer,
  userReducer,
} from "./reducers/userReducer";


const reducer = combineReducers({
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {
};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
