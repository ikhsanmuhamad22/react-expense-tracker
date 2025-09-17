import type { CategoryExpense, CategoryIncome } from "../types";

export const categoryExpenses: { value: CategoryExpense; label: string }[] = [
  { value: "food", label: "Food & Drinks" },
  { value: "transportation", label: "Transportation" },
  { value: "entertainment", label: "Entertainment" },
  { value: "utilities", label: "Utilities" },
  { value: "shopping", label: "Shopping" },
  { value: "health", label: "Health" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" },
];

export const categoryIncomes: { value: CategoryIncome; label: string }[] = [
  { value: "salary", label: "Salary" },
  { value: "freelance", label: "Freelance" },
  { value: "investment", label: "Investment" },
  { value: "gift", label: "Gift" },
  { value: "other", label: "Other" },
];
