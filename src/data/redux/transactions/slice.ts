import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "../../interface/transaction";
import { dummyTransactions } from "../../dummy/dummy_tx";

interface TransactionsState {
  list: Transaction[];
}

const initialState: TransactionsState = {
  list: dummyTransactions,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.list.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((tx) => tx.id !== action.payload);
    },

    editTransaction: (state, action: PayloadAction<Transaction>) => {
      let index = state.list.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addTransaction, removeTransaction, editTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
