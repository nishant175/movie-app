import { configureStore } from "@reduxjs/toolkit";
import nightmodeReducer from "./nightmodeSlice";

export const store = configureStore({
  reducer: {
    nightmode: nightmodeReducer,
  },
});
