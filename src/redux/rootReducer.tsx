import { combineReducers } from "redux";
import { authSlice, dataSlice, productsSlice, todoSlice } from "./slices";

const rootReducer = combineReducers({
  authSlice: authSlice,
  productsSlice: productsSlice,
  dataSlice: dataSlice,
  todoSlice: todoSlice,
});

export default rootReducer;
