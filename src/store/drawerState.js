/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerOpen: false,
};

export const drawerStateSlice = createSlice({
  name: "drawerState",
  initialState,
  reducers: {
    drawerToggle: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { drawerToggle } = drawerStateSlice.actions;
