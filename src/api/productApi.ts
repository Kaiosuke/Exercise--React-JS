import { IProducts } from "@/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { instanceLocal } from "./instance";

const getProducts = createAsyncThunk<IProducts[], { path: string }>(
  "dataList/getDataList",
  async ({ path }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.get(`${path}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (!axiosError.response) {
        throw error;
      }
      return rejectWithValue(
        axiosError.response.data || "Failed to fetch data"
      );
    }
  }
);

const addDbProduct = createAsyncThunk<
  IProducts,
  { path: string; data: IProducts }
>("dataList/addData", async ({ path, data }, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.post(`${path}`, data);
    if (res.status === 201) {
      return res.data;
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (!axiosError.response) {
      throw error;
    }
    return rejectWithValue(axiosError.response.data || "Failed to add data");
  }
});

const updateDbProduct = createAsyncThunk<
  IProducts,
  { path: string; id: number; data: IProducts }
>("dataList/updateData", async ({ path, id, data }, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.patch(`${path}/${id}`, data);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (!axiosError.response) {
      throw error;
    }
    return rejectWithValue(axiosError.response.data || "Failed to update data");
  }
});

const deleteDbProduct = createAsyncThunk<number, { path: string; id: number }>(
  "dataList/deleteData",
  async ({ path, id }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.delete(`${path}/${id}`);
      if (res.status === 200) {
        return id;
      } else {
        return rejectWithValue("Failed to delete data");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (!axiosError.response) {
        throw error;
      }
      return rejectWithValue(
        axiosError.response.data || "Failed to delete data"
      );
    }
  }
);

export { addDbProduct, deleteDbProduct, getProducts, updateDbProduct };
