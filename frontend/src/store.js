import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userImageUploadReducer,
} from "./Reducers/userReducers";

//All the list of reducers which hold the state and pass it to components
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userImageUpload: userImageUploadReducer,
});

//To get the user info from localstorage and add them to the initial state
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//An object to have the initial state if required
const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

// An aarray of middlewares to be used in the store
const middleware = [thunk];

//The main store which takes the reducders, initialState, and all the middlewares
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) //applyMiddleware takes all the middlewares so spreading the array here
);

export default store;
