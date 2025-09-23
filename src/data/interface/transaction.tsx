import type { CategoryExpense, CategoryIncome } from "../types";

export interface Transaction {
  id: string;
  type: "expense" | "income";
  category: CategoryExpense | CategoryIncome | undefined;
  amount: number;
  date: string;
  note?: string;
}

export interface ChartState {
  labels: string[];
  incomeData: number[];
  expenseData: number[];
}
