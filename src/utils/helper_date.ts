// chartUtils.ts
export function getLast7DaysLabels(): string[] {
  const days: string[] = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d.toLocaleDateString("id-ID", { weekday: "short" })); // Sen, Sel, Rab
  }
  return days;
}

export function getWeeksInMonth(year: number, month: number): string[] {
  const weeks: string[] = [];
  const date = new Date(year, month, 1);
  let weekIndex = 1;

  while (date.getMonth() === month) {
    weeks.push(`Week ${weekIndex}`);
    date.setDate(date.getDate() + 7);
    weekIndex++;
  }

  return weeks;
}

export function getMonthsInYear(): string[] {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
}
