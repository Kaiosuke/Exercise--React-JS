import {
  addDbProduct,
  deleteDbProduct,
  getProducts,
  updateDbProduct,
} from "@/api/productApi";
import { IProducts } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface DataStateType {
  isLoading: boolean;
  dataList: IProducts[];
  error: null | string | undefined;
}

const initialState: DataStateType = {
  dataList: [],
  isLoading: true,
  error: null,
};

const dbProductSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = action.payload;
      });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder
      .addCase(addDbProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = [...state.dataList, action.payload];
      });
    builder.addCase(addDbProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder
      .addCase(updateDbProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = state.dataList.map((data) =>
          data.id === action.payload.id ? action.payload : data
        );
      });
    builder.addCase(updateDbProduct.rejected, (state, action) => {
      console.log(action.error);
      state.isLoading = true;
      state.error = action.error.message;
    });
    builder
      .addCase(deleteDbProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = state.dataList.filter(
          (data) => data.id !== action.payload.id
        );
      });
    builder.addCase(deleteDbProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default dbProductSlice.reducer;
