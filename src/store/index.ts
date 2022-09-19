import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./noteSlice";

export default configureStore({
  reducer: {
    comments: commentReducer,
  },
});

