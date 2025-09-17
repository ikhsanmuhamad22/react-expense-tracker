// store.ts
import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions/slice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

// Type buat dispatch dan state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
