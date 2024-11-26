import { configureStore } from "@reduxjs/toolkit";
import connect4Reducer from "./connect4Slice";

export const store = configureStore({
  reducer: {
    connect4: connect4Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
