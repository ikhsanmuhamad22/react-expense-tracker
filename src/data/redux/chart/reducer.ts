import {
  getLast7DaysLabels,
  getMonthsInYear,
  getWeeksInMonth,
} from "../../../utils/helper_date";
import type { ChartState, Transaction } from "../../interface/transaction";

const initialState: ChartState = {
  labels: [],
  incomeData: [],
  expenseData: [],
};

export const chartReducer = (
  state = initialState,
  action: { type: string; payload?: Transaction[] }
): ChartState => {
  switch (action.type) {
    case "chart/daily": {
      const txs = action.payload ?? [];
      const labels = getLast7DaysLabels();

      const incomeMap: Record<string, number> = {};
      const expenseMap: Record<string, number> = {};
      labels.forEach((l) => {
        incomeMap[l] = 0;
        expenseMap[l] = 0;
      });

      txs.forEach((tx) => {
        const d = new Date(tx.date);
        const label = d.toLocaleDateString("id-ID", { weekday: "short" });
        if (labels.includes(label)) {
          if (tx.type === "income") incomeMap[label] += tx.amount;
          else expenseMap[label] += tx.amount;
        }
      });

      return {
        labels,
        incomeData: labels.map((l) => incomeMap[l]),
        expenseData: labels.map((l) => expenseMap[l]),
      };
    }

    case "chart/monthly": {
      const txs = action.payload ?? [];
      const today = new Date();
      const labels = getWeeksInMonth(today.getFullYear(), today.getMonth());

      const incomeMap: Record<string, number> = {};
      const expenseMap: Record<string, number> = {};
      labels.forEach((l) => {
        incomeMap[l] = 0;
        expenseMap[l] = 0;
      });

      txs.forEach((tx) => {
        const d = new Date(tx.date);
        if (
          d.getMonth() === today.getMonth() &&
          d.getFullYear() === today.getFullYear()
        ) {
          const week = Math.ceil(d.getDate() / 7); // week index
          const label = `Week ${week}`;
          if (tx.type === "income") incomeMap[label] += tx.amount;
          else expenseMap[label] += tx.amount;
        }
      });

      return {
        labels,
        incomeData: labels.map((l) => incomeMap[l]),
        expenseData: labels.map((l) => expenseMap[l]),
      };
    }

    case "chart/yearly": {
      const txs = action.payload ?? [];
      const today = new Date();
      const year = today.getFullYear();
      const labels = getMonthsInYear();

      const incomeMap: Record<string, number> = {};
      const expenseMap: Record<string, number> = {};
      labels.forEach((l) => {
        incomeMap[l] = 0;
        expenseMap[l] = 0;
      });

      txs.forEach((tx) => {
        const d = new Date(tx.date);
        if (d.getFullYear() === year) {
          const monthLabel = labels[d.getMonth()];
          if (tx.type === "income") incomeMap[monthLabel] += tx.amount;
          else expenseMap[monthLabel] += tx.amount;
        }
      });

      return {
        labels,
        incomeData: labels.map((l) => incomeMap[l]),
        expenseData: labels.map((l) => expenseMap[l]),
      };
    }

    default:
      return state;
  }
};
