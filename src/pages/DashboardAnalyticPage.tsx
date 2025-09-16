import {
  Box,
  Breadcrumbs,
  Card,
  Link,
  Stack,
  Tab,
  tabClasses,
  Table,
  TabList,
  Tabs,
  Typography,
} from "@mui/joy";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { categoryExpenses } from "../data/interface/category";
import Analitycs from "../components/Analitycs";

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

function DashboardAnalitycPage() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="small" />}
            sx={{ pl: 0 }}
          >
            <Link underline="none" color="neutral" aria-label="Home">
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              sx={{ fontSize: 12, fontWeight: 500 }}
            >
              Analityc
            </Link>
          </Breadcrumbs>

          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Analitycs.
          </Typography>

          <Card variant="plain">
            <Tabs defaultValue={0} sx={{ bgcolor: "transparent" }}>
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
                  value={0}
                >
                  Weekly
                </Tab>
                <Tab
                  sx={{ borderRadius: "6px 6px 0 0" }}
                  indicatorInset
                  value={1}
                >
                  Monthly
                </Tab>
                <Tab
                  sx={{ borderRadius: "6px 6px 0 0" }}
                  indicatorInset
                  value={2}
                >
                  Yearly
                </Tab>
              </TabList>
            </Tabs>

            <Analitycs />
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
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardAnalitycPage;
