import { createSlice } from "@reduxjs/toolkit";

interface StateAuthType {
  login: {
    isLoading: boolean;
    currentUser: {
      accessToken?: string | null;
      user?: {
        name: string;
      };
    };
    error: null | string;
  };
  register: {
    isLoading: boolean;
    success: boolean;
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
  register: {
    isLoading: false,
    success: false,
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
    registerStart: (state) => {
      state.register.isLoading = true;
    },
    registerSuccess: (state) => {
      state.register.isLoading = false;
      state.register.success = true;
      state.register.error = null;
    },
    registerFailed: (state) => {
      state.register.isLoading = false;
      state.register.success = false;
      state.register.error = "Register Failed";
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
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
} = authSlice.actions;
