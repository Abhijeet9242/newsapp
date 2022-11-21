import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { newsReducer, selectedNewsReducer } from "./reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  selectedNews: selectedNewsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
