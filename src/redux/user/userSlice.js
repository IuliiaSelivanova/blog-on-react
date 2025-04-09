import {
  asyncThunkCreator,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  redusers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    loginFaliure: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = action.payload || "Login Failed";
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = null;
    },
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    updateFaliure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload || "Update failed";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFaliure,
  logout,
  updateStart,
  updateSuccess,
  updateFaliure,
} = userSlice.actions;

export default userSlice.reducer;
