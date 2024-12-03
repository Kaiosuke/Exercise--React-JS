import { createSlice } from "@reduxjs/toolkit";
import { getDataList } from "../../api/requestApi";

interface DataStateType {
  dataList: [];
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
      .addCase(getDataList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = action.payload;
      });
    builder.addCase(getDataList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
