import { combineReducers } from "redux";
import {
  authSlice,
  dataSlice,
  productsSlice,
  todoSlice,
  cartSlice,
  dbProductSlice,
} from "./slices";

const rootReducer = combineReducers({
  authSlice: authSlice,
  productsSlice: productsSlice,
  dbProductSlice: dbProductSlice,
  dataSlice: dataSlice,
  todoSlice: todoSlice,
  cartSlice: cartSlice,
});

export default rootReducer;
