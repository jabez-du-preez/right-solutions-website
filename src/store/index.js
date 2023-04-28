import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleState";

export default configureStore({
  reducer: {
    title: titleReducer,
  },
});
