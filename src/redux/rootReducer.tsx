import { combineReducers } from "redux";
import {
  authSlice,
  dataSlice,
  productsSlice,
  todoSlice,
  cartSlice,
} from "./slices";

const rootReducer = combineReducers({
  authSlice: authSlice,
  productsSlice: productsSlice,
  dataSlice: dataSlice,
  todoSlice: todoSlice,
  cartSlice: cartSlice,
});

export default rootReducer;
