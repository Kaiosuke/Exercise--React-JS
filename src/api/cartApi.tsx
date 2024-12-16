import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceLocal } from "./instance";

const getCartList = createAsyncThunk(
  "cart/getCartList",
  async ({ id }: { id: number }) => {
    try {
      const res = await instanceLocal.get(`/carts?userId=${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export { getCartList };
