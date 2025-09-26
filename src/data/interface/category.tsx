import type { CategoryExpense, CategoryIncome } from "../types";

export const categoryExpenses: {
  id: number;
  value: CategoryExpense;
  label: string;
}[] = [
  { id: 1, value: "food", label: "Food & Drinks" },
  { id: 2, value: "transportation", label: "Transportation" },
  { id: 3, value: "entertainment", label: "Entertainment" },
  { id: 4, value: "utilities", label: "Utilities" },
  { id: 5, value: "shopping", label: "Shopping" },
  { id: 6, value: "health", label: "Health" },
  { id: 7, value: "education", label: "Education" },
  { id: 8, value: "other", label: "Other" },
];

export const categoryIncomes: {
  id: number;
  value: CategoryIncome;
  label: string;
}[] = [
  { id: 1, value: "salary", label: "Salary" },
  { id: 2, value: "freelance", label: "Freelance" },
  { id: 3, value: "investment", label: "Investment" },
  { id: 4, value: "gift", label: "Gift" },
  { id: 5, value: "other", label: "Other" },
];
