import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/requestApi";

interface ProductsState {
  products: string[];
  limit: number;
  skip: number;
  pages: number;
  search: string;
  sortBy: string;
  order: string;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: ProductsState = {
  products: [],
  limit: 8,
  skip: 0,
  pages: 0,
  search: "",
  sortBy: "",
  order: "",
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.search = action.payload;
      state.skip = 0;
    },
    limitProducts: (state, action) => {
      state.limit = action.payload;
      state.skip = 0;
    },
    sortPriceProducts: (state, action) => {
      state.sortBy = "";
      if (action.payload) {
        state.sortBy = "price";
      }
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.pages = Math.ceil(action.payload.total / state.limit);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export const { searchProducts, limitProducts, sortPriceProducts } =
  productsSlice.actions;
