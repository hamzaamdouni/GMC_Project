import { combineReducers } from "redux";
import visiteurReducer from "./visiteur";
import AdministrateurReducer from "./administrateur";

const rootReducer = combineReducers({ visiteurReducer, AdministrateurReducer });
export default rootReducer;
