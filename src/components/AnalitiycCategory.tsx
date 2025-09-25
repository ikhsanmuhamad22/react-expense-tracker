import { Box, Card, Stack, Table, Typography } from "@mui/joy";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { useSelector } from "react-redux";
import { selectCategoryAnalytic } from "../data/redux/transactions/reducer";

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function AnalitycCategory() {
  const analityc = useSelector(selectCategoryAnalytic);

  const data = analityc.map((a) => {
    return { label: a.category, value: a.total, color: getRandomColor() };
  });

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: { value: number }) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
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
                {analityc.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>{row.total}</td>
                    <td>{row.totalPercent} %</td>
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
