import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/loginSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
