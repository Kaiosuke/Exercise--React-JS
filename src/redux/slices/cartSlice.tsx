import { getCartList } from "@/api/cartApi";
import { createSlice } from "@reduxjs/toolkit";

export interface CartType {
  isLoading: boolean;
  carts: any[];

  error: null | undefined | string;
}
const initialState: CartType = {
  carts: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exist = state.carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (exist !== -1) {
        if (state.carts[exist].quantity <= action.payload.stock) {
          state.carts[exist].quantity += action.payload.quantity;
          state.carts[exist].stock -= action.payload.quantity;
        } else {
          return;
        }
      } else {
        state.carts.push(action.payload);
      }
    },
    increaseProduct: (state, action) => {
      state.carts = state.carts.filter((cart) => {
        if (cart.id === action.payload.id) {
          cart.quantity += 1;
          cart.stock -= 1;
          return cart;
        }
        return cart;
      });
    },
    decreaseProduct: (state, action) => {
      state.carts = state.carts.filter((cart) => {
        if (cart.id === action.payload.id) {
          console.log(cart.stock);
          cart.quantity -= 1;
          cart.stock += 1;
          return cart;
        }
        return cart;
      });
    },
    deleteProduct: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    });
    builder.addCase(getCartList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default cartSlice.reducer;
export const { addProduct, increaseProduct, decreaseProduct, deleteProduct } =
  cartSlice.actions;
