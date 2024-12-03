import { combineReducers } from "redux";
import { authSlice, dataSlice, productsSlice } from "./slices";

const rootReducer = combineReducers({
  authSlice: authSlice,
  productsSlice: productsSlice,
  dataSlice: dataSlice,
});

export default rootReducer;
