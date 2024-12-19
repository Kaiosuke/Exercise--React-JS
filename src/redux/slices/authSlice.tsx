import { login } from "@/api/authApi";
import { IUser } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  isLoading: boolean;
  currentUser: {
    accessToken?: string | null;
    user?: IUser | undefined;
  };
  error: null | unknown;
}

const initialState: AuthType = {
  isLoading: false,
  currentUser: {
    accessToken: null,
    user: undefined,
  },
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.currentUser = {};
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;

export const { logoutSuccess } = authSlice.actions;
