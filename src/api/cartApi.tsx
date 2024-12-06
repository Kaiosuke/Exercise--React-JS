import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceLocal } from "./instance";

const getCartList = createAsyncThunk(
  "cart/getCartList",
  async ({ id }: { id: number }) => {
    try {
      const res = await instanceLocal.get("/carts");
      const data = res.data.filter(
        (cart: { userId: number }): any => cart.userId === id
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export { getCartList };
