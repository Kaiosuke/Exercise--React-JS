import { createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  isLoading: boolean;
  currentUser: {
    accessToken?: string | null;
    user?:
      | {
          name: string;
          isAdmin?: boolean;
          id: number;
        }
      | undefined;
  };
  error: string | null;
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
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailed: (state) => {
      state.isLoading = false;
      state.error = "Login Failed";
    },
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.currentUser = {};
      state.error = null;
    },
    logoutFailed: (state) => {
      state.isLoading = false;
      state.error = "Logout Failed";
    },
  },
});

export default authSlice.reducer;

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
} = authSlice.actions;
