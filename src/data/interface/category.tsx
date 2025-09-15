export type CategoryExpense =
  | "food"
  | "transportation"
  | "entertainment"
  | "utilities"
  | "shopping"
  | "health"
  | "education"
  | "other";

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
