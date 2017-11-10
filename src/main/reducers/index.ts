import { combineReducers } from "redux";

import { GlobalState } from "../../shared/interfaces/index";
import PageReducer from "./Reducer.Page";

export default combineReducers<GlobalState>({
  currentPage: PageReducer,
});