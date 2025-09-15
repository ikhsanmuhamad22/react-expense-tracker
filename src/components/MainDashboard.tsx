import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import { dummyTransactions } from "../data/dummy/dummy_tx";
import { Stack, Table, Typography } from "@mui/joy";

function MainDashboard() {
  return (
    <Box sx={{ width: "60%" }}>
      <Card variant="outlined">
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
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
              Daily
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
              Weekly
            </Tab>
            <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
              Monthly
            </Tab>
          </TabList>
        </Tabs>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Card sx={{ width: "30%", alignItems: "center" }} variant="outlined">
            <Typography level="title-md">Income</Typography>
            <Typography level="body-lg">Rp 5.000.000</Typography>
          </Card>
          <Card sx={{ width: "30%", alignItems: "center" }} variant="outlined">
            <Typography level="title-md">Expenses</Typography>
            <Typography level="body-lg">Rp 5.000.000</Typography>
          </Card>
          <Card sx={{ width: "30%", alignItems: "center" }} variant="outlined">
            <Typography level="title-md">Balance</Typography>
            <Typography level="body-lg">Rp 5.000.000</Typography>
          </Card>
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ mt: "5px" }}>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "30%" }}>notes</th>
              <th>type</th>
              <th>amount</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {dummyTransactions.map((row) => (
              <tr key={row.id}>
                <td>{row.note}</td>
                <td>{row.type}</td>
                <td>{row.amount}</td>
                <td>soon action</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default MainDashboard;
