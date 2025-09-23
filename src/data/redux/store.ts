// store.ts
import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions/slice";
import { chartReducer } from "./chart/reducer";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    chart: chartReducer,
  },
});

// Type buat dispatch dan state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
