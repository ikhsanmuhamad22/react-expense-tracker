import { Card, Stack, Tab, tabClasses, TabList, Tabs } from "@mui/joy";
import { PieChart, BarChart } from "@mui/x-charts";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTransactionsThisMonth,
  selectTransactionsThisWeek,
  selectTransactionsThisYear,
} from "../data/redux/transactions/reducer";
import type { RootState } from "../data/redux/store";

const valueFormatter = (item: { value: any }) => `${item.value}%`;

function Analitycs() {
  const dispatch = useDispatch();
  const [tab, setTab] = React.useState<"week" | "month" | "year">("week");
  const weekTx = useSelector(selectTransactionsThisWeek);
  const monthTx = useSelector(selectTransactionsThisMonth);
  const yearlyTx = useSelector(selectTransactionsThisYear);
  const transactions = useSelector(
    (state: RootState) => state.transactions.list
  );
  const chart = useSelector((state: RootState) => state.chart);

  const tx = tab === "week" ? weekTx : tab === "month" ? monthTx : yearlyTx;

  const piechartData = [
    {
      label: "Income",
      value: tx.income,
    },
    {
      label: "Expense",
      value: tx.expense,
    },
  ];

  React.useEffect(() => {
    if (tab === "week")
      dispatch({ type: "chart/daily", payload: weekTx.transaction });
    if (tab === "month")
      dispatch({ type: "chart/monthly", payload: monthTx.transaction });
    if (tab === "year")
      dispatch({ type: "chart/yearly", payload: yearlyTx.transaction });
  }, [transactions, tab, dispatch]);

  return (
    <Card variant="plain">
      <Tabs
        defaultValue={"week"}
        sx={{ bgcolor: "transparent" }}
        onChange={(_, v) => setTab(v as "week" | "month" | "year")}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: { xs: 0, md: 4 },
            justifyContent: "space-around",
            [`&& .${tabClasses.root}`]: {
              fontWeight: "600",
              flex: "initial",
              color: "text.tertiary",
              [`&.${tabClasses.selected}`]: {
                bgcolor: "transparent",
                color: "text.primary",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={"week"}
          >
            Weekly
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={"month"}
          >
            Monthly
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={"year"}
          >
            Yearly
          </Tab>
        </TabList>
      </Tabs>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Card sx={{ width: "39%" }}>
          <PieChart
            series={[
              {
                data: piechartData,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={200}
            width={200}
          />
        </Card>
        <Card sx={{ width: "60%" }}>
          <BarChart
            height={300}
            series={[
              { data: chart.incomeData, label: "income", id: "inId" },
              { data: chart.expenseData, label: "expense", id: "exId" },
            ]}
            xAxis={[{ data: chart.labels }]}
            yAxis={[{ width: 50 }]}
          />
        </Card>
      </Stack>
    </Card>
  );
}

export default Analitycs;
