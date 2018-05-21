import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const initialState = [];

const middleWare = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);
