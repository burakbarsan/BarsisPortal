import { createSlice } from "@reduxjs/toolkit";

export const initialState: any = {
  user: {},
  error: "", // for error message
  loading: true,
  isUserLogout: false,
  errorMsg: false, // for error
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(state: any, action: any) {
      state.error = action.payload.data;
      state.loading = true;
      state.isUserLogout = false;
      state.errorMsg = true;
    },
    apiError2(state: any, action: any) {
      state.error = action.payload;
      state.loading = true;
      state.isUserLogout = false;
      state.errorMsg = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true;
    },
    reset_login_flag(state: any) {
      state.error = null;
      state.loading = true;
      state.errorMsg = false;
    },
  },
});

export const {
  apiError,
  apiError2,
  loginSuccess,
  logoutUserSuccess,
  reset_login_flag,
} = loginSlice.actions;

export default loginSlice.reducer;
