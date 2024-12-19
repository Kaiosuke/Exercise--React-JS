import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceDummy, instanceLocal } from "./instance";

const getProduct = async (path: string, id: number) => {
  try {
    const res = await instanceDummy.get(`${path} /${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (
    {
      path,
      search,
      limit,
      skip,
      sortBy,
      order,
    }: {
      path: string;
      search: string;
      limit: number;
      skip: number;
      sortBy: number | string;
      order: number | string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await instanceDummy.get(`${path}/search`, {
        params: {
          q: search,
          limit: limit,
          skip: skip,
          sortBy: sortBy,
          order: order,
        },
      });
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const getDataList = createAsyncThunk(
  "dataList/getDataList",
  async (path: string) => {
    try {
      const res = await instanceLocal.get(`${path}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getData = async (path: string, id: number) => {
  try {
    const res = await instanceLocal.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addData = async (path: string, data: any[]) => {
  try {
    const res = await instanceLocal.post(`${path}`, data);
    if (res.status !== 201) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (path: string, id: number, data: any[]) => {
  try {
    const res = await instanceLocal.patch(`${path}/${id}`, data);
    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (path: string, id: number) => {
  try {
    const res = await instanceLocal.delete(`${path}/${id}`);
    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export {
  addData,
  deleteData,
  getAllProducts,
  getData,
  getDataList,
  getProduct,
  updateData,
};
