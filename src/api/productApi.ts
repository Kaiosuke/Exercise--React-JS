import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceLocal } from "./instance";

const getProducts = createAsyncThunk(
  "dataList/getDataList",
  async (path: string, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.get(`${path}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: any) {
      if (!error.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const addDbProduct = createAsyncThunk(
  "dataList/addData",
  async (
    { path, data }: { path: string; data: any[] },
    { rejectWithValue }
  ) => {
    try {
      const res = await instanceLocal.post(`${path}`, data);
      if (res.status === 201) {
        return res.data;
      }
      return true;
    } catch (error: any) {
      if (!error.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const updateDbProduct = createAsyncThunk(
  "dataList/updateData",
  async (
    { path, id, data }: { path: string; id: number; data: any[] },
    { rejectWithValue }
  ) => {
    try {
      const res = await instanceLocal.patch(`${path}/${id}`, data);
      if (res.status === 200) {
        return res.data;
      }
      return false;
    } catch (error: any) {
      if (!error.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteDbProduct = createAsyncThunk(
  "dataList/deleteData",
  async ({ path, id }: { path: string; id: number }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.delete(`${path}/${id}`);
      if (res.status === 200) {
        return id;
      }
      return false;
    } catch (error: any) {
      if (!error.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export { getProducts, addDbProduct, updateDbProduct, deleteDbProduct };
