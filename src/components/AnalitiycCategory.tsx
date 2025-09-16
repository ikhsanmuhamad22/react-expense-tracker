import { Box, Card, Stack, Table, Typography } from "@mui/joy";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { categoryExpenses } from "../data/interface/category";

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: { value: number }) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function AnalitycCategory() {
  return (
    <>
      <Typography level="body-lg" component="h1" sx={{ mt: 3, ml: 2 }}>
        Most expense per category.
      </Typography>
      <Card>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Card sx={{ width: "29%" }} variant="plain">
            <PieChart
              series={[
                {
                  outerRadius: 80,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                },
              }}
              {...sizing}
            />
          </Card>
          <Box sx={{ width: "70%" }}>
            <Table sx={{ "& thead th:nth-child(1)": { width: "40%" } }}>
              <thead>
                <tr>
                  <th>category name</th>
                  <th>total amount</th>
                  <th>percentation</th>
                </tr>
              </thead>
              <tbody>
                {categoryExpenses.map((row) => (
                  <tr key={row.value}>
                    <td>{row.label}</td>
                    <td>36000</td>
                    <td>20%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

export default AnalitycCategory;
