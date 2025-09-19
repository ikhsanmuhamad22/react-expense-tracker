import { createSelector } from "@reduxjs/toolkit";
import type { Transaction } from "../../interface/transaction";
import type { RootState } from "../store";

const selectAllTransactions = (state: RootState) => state.transactions.list;

export const selectTransactionByDate = (
  state: RootState,
  year?: number,
  month?: number,
  day?: number
): Transaction[] => {
  return state.transactions.list.filter(
    (tx: { date: string | number | Date }) => {
      const d = new Date(tx.date);
      const matchYear = year ? d.getFullYear() === year : true;
      const matchMonth = month ? d.getMonth() + 1 === month : true;
      const matchDay = day ? d.getDate() === day : true;

      return matchYear && matchMonth && matchDay;
    }
  );
};

export const selectTransactionsToday = createSelector(
  [selectAllTransactions],
  (transaction) => {
    const today = new Date();
    const tx = transaction.filter((tx) => {
      const d = new Date(tx.date);
      return (
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate()
      );
    });
    const expense: number = tx
      .filter((t) => t.type === "expense")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const income: number = tx
      .filter((t) => t.type === "income")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const totalBalance: number = income - expense;

    return {
      transaction: tx,
      expense: expense,
      income: income,
      totalBalance: totalBalance,
    };
  }
);

export const selectTransactionsThisWeek = createSelector(
  [selectAllTransactions],
  (transaction) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const tx = transaction.filter((tx) => {
      const d = new Date(tx.date);
      return d >= startOfWeek && d <= today;
    });

    const expense: number = tx
      .filter((t) => t.type === "expense")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const income: number = tx
      .filter((t) => t.type === "income")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const totalBalance: number = income - expense;

    return {
      transaction: tx,
      expense: expense,
      income: income,
      totalBalance: totalBalance,
    };
  }
);

export const selectTransactionsThisMonth = createSelector(
  [selectAllTransactions],
  (transaction) => {
    const today = new Date();
    const tx = transaction.filter((tx) => {
      const d = new Date(tx.date);
      return (
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth()
      );
    });

    const expense: number = tx
      .filter((t) => t.type === "expense")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const income: number = tx
      .filter((t) => t.type === "income")
      .reduce((acc, cur) => acc + cur.amount, 0);

    const totalBalance: number = income - expense;

    return {
      transaction: tx,
      expense: expense,
      income: income,
      totalBalance: totalBalance,
    };
  }
);
