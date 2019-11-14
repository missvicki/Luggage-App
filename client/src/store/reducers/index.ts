import { combineReducers } from "redux";
import { loginReducer } from "./Login/login";

const reducerParts = {
  login: loginReducer
};

// we combine the individual parts
const reducer = combineReducers(reducerParts);

// and export only the parent reducer
export default reducer;
