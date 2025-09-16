import { Card, Stack } from "@mui/joy";
import { PieChart, BarChart } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const valueFormatter = (item: { value: any }) => `${item.value}%`;

const platforms = [
  {
    label: "Income",
    value: 59.12,
  },
  {
    label: "Expense",
    value: 40.88,
  },
];

function Analitycs() {
  return (
    <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
      <Card sx={{ width: "39%" }}>
        <PieChart
          series={[
            {
              data: platforms,
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
            { data: pData, label: "income", id: "inId" },
            { data: uData, label: "expense", id: "exId" },
          ]}
          xAxis={[{ data: xLabels }]}
          yAxis={[{ width: 50 }]}
        />
      </Card>
    </Stack>
  );
}

export default Analitycs;
