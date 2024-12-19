import { IUser } from "@/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { instanceLocal } from "./instance";

const register = createAsyncThunk<IUser[], IUser>(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.post("register", user);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (!axiosError.response) {
        throw error;
      }
      return rejectWithValue(axiosError.response.data || "Failed to register");
    }
  }
);

const login = createAsyncThunk<{ accessToken: string; user: IUser }, IUser>(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.post("login", user);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (!axiosError.response) {
        throw error;
      }
      return rejectWithValue(axiosError.response.data || "Failed to login");
    }
  }
);

export { login, register };
