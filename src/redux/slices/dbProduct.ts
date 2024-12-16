import {
  addDbProduct,
  deleteDbProduct,
  getProducts,
  updateDbProduct,
} from "@/api/productApi";
import { createSlice } from "@reduxjs/toolkit";

interface DataStateType {
  dataList: any[];
  isLoading: boolean;
  error: null | string | undefined;
}

const initialState: DataStateType = {
  dataList: [],
  isLoading: true,
  error: null,
};

const dataSlice = createSlice({
  name: "dataSlice",
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
        state.dataList = state.dataList.map((data: { id: number }) =>
          data.id === action.payload.id ? action.payload : data
        );
      });
    builder.addCase(updateDbProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder
      .addCase(deleteDbProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = state.dataList.filter(
          (data: { id: number }) => data.id !== action.payload
        );
      });
    builder.addCase(deleteDbProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
