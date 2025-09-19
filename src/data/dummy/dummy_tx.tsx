import type { Transaction } from "../interface/transaction";

export const dummyTransactions: Transaction[] = [
  {
    id: "1",
    type: "expense",
    category: "food",
    amount: 75000,
    date: "2025-09-01T10:30:00.000Z",
    note: "Lunch with friends",
  },
  {
    id: "2",
    type: "expense",
    category: "transportation",
    amount: 20000,
    date: "2025-09-01T15:45:00.000Z",
    note: "Bus ticket",
  },
  {
    id: "3",
    type: "income",
    category: "salary",
    amount: 5000000,
    date: "2025-09-18T08:00:00.000Z",
    note: "Monthly salary",
  },
  {
    id: "4",
    type: "income",
    category: "freelance",
    amount: 1200000,
    date: "2025-09-05T20:00:00.000Z",
    note: "Website project",
  },
  {
    id: "5",
    type: "expense",
    category: "shopping",
    amount: 300000,
    date: "2025-10-07T18:20:00.000Z",
    note: "New shoes",
  },
  {
    id: "6",
    type: "expense",
    category: "utilities",
    amount: 450000,
    date: "2025-09-10T09:00:00.000Z",
    note: "Electricity bill",
  },
];
