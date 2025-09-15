// types.ts
export type CategoryExpense =
  | "food"
  | "transportation"
  | "entertainment"
  | "utilities"
  | "shopping"
  | "health"
  | "education"
  | "other";

export type CategoryIncome =
  | "salary"
  | "freelance"
  | "investment"
  | "gift"
  | "other";

export interface Transaction {
  id: string;
  type: "expense" | "income";
  category: CategoryExpense | CategoryIncome;
  amount: number;
  date: string;
  note?: string;
}
