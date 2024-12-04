import { createSlice } from "@reduxjs/toolkit";

interface StateAuthType {
  login: {
    isLoading: boolean;
    currentUser: {
      accessToken?: string | null;
      user?: {
        name: string;
        id: number;
      };
    };
    error: null | string;
  };
}

const initialState: StateAuthType = {
  login: {
    isLoading: false,
    currentUser: {
      accessToken: null,
      user: undefined,
    },
    error: null,
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.login.isLoading = false;
      state.login.currentUser = action.payload;
      state.login.error = null;
    },
    loginFailed: (state) => {
      state.login.isLoading = false;
      state.login.error = "Login Failed";
    },
    logoutStart: (state) => {
      state.login.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.login.isLoading = false;
      state.login.currentUser = {};
      state.login.error = null;
    },
    logoutFailed: (state) => {
      state.login.isLoading = false;
      state.login.error = "Logout Failed";
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
