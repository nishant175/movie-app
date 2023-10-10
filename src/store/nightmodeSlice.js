import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nightMode: false,
};

export const nightmodeSlice = createSlice({
  name: "nightmode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.nightMode = !state.nightMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const nightmodeActions = nightmodeSlice.actions;

export default nightmodeSlice.reducer;
