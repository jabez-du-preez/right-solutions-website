import { configureStore } from "@reduxjs/toolkit";
import drawerState from "./drawerState";
import rtlSetting from "./rtlSetting";

export default configureStore({
  reducer: {
    rtl: rtlSetting,
    drawerState,
  },
});
