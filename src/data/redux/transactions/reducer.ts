import type { Transaction } from "../../interface/transaction";
import type { RootState } from "../store";

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
      const matchMonth = month ? d.getMonth() + 1 === month : true; // +1 karena getMonth() 0-11
      const matchDay = day ? d.getDate() === day : true;

      return matchYear && matchMonth && matchDay;
    }
  );
};
