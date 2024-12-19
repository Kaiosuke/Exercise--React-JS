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

const setLoading = (state: DataStateType) => {
  state.isLoading = true;
};

const setError = (state: DataStateType, action: { payload: any }) => {
  state.isLoading = false;
  state.error = action.payload;
};
const dbProductSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, setLoading)
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = action.payload;
      });
    builder.addCase(getProducts.rejected, setError);
    builder
      .addCase(addDbProduct.pending, setLoading)
      .addCase(addDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = [...state.dataList, action.payload];
      });
    builder.addCase(addDbProduct.rejected, setError);
    builder
      .addCase(updateDbProduct.pending, setLoading)
      .addCase(updateDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = state.dataList.map((data) =>
          data.id === action.payload.id ? action.payload : data
        );
      });
    builder.addCase(updateDbProduct.rejected, setError);
    builder
      .addCase(deleteDbProduct.pending, setLoading)
      .addCase(deleteDbProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = state.dataList.filter(
          (data) => data.id !== action.payload
        );
      });
    builder.addCase(deleteDbProduct.rejected, setError);
  },
});

export default dbProductSlice.reducer;
