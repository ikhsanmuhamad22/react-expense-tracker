import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import { Button, Stack, Table, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah } from "../utils/currency";

import {
  selectTransactionsThisMonth,
  selectTransactionsThisWeek,
  selectTransactionsToday,
} from "../data/redux/transactions/reducer";
import React from "react";
import type { AppDispatch } from "../data/redux/store";
import { removeTransaction } from "../data/redux/transactions/slice";
import ModalEditTx from "./ModalEditTx";
import type { Transaction } from "../data/interface/transaction";

function MainDashboard() {
  const dispatch = useDispatch<AppDispatch>();

  const [tab, setTab] = React.useState<"day" | "week" | "month">("day");
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const [selectedTx, setSelectedTx] = React.useState<Transaction>();

  const dayTx = useSelector(selectTransactionsToday);
  const weekTx = useSelector(selectTransactionsThisWeek);
  const monthTx = useSelector(selectTransactionsThisMonth);

  const tx = tab === "day" ? dayTx : tab === "week" ? weekTx : monthTx;

  return (
    <>
      <Box sx={{ width: "60%" }}>
        <Card variant="outlined">
          <Tabs
            defaultValue={"day"}
            sx={{ bgcolor: "transparent" }}
            onChange={(_, v) => setTab(v as "day" | "week" | "month")}
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
                value={"day"}
              >
                Daily
              </Tab>
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
            </TabList>
          </Tabs>
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <Card
              sx={{ width: "30%", alignItems: "center" }}
              variant="outlined"
            >
              <Typography level="title-md">Income</Typography>
              <Typography level="body-lg">{formatRupiah(tx.income)}</Typography>
            </Card>
            <Card
              sx={{ width: "30%", alignItems: "center" }}
              variant="outlined"
            >
              <Typography level="title-md">Expenses</Typography>
              <Typography level="body-lg">
                {formatRupiah(tx.expense)}
              </Typography>
            </Card>
            <Card
              sx={{ width: "30%", alignItems: "center" }}
              variant="outlined"
            >
              <Typography level="title-md">Balance</Typography>
              <Typography level="body-lg">
                {formatRupiah(tx.totalBalance)}
              </Typography>
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
              {tx.transaction.length === 0 ? (
                <td>no tx</td>
              ) : (
                tx.transaction
                  .slice()
                  .reverse()
                  .map((row) => (
                    <tr key={row.id}>
                      <td>{row.note}</td>
                      <td>{row.type}</td>
                      <td>{formatRupiah(row.amount)}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="solid"
                          color="primary"
                          sx={{ mx: "2px" }}
                          onClick={() => {
                            setSelectedTx(row);
                            setOpenModalEdit(!openModalEdit);
                          }}
                        >
                          edit
                        </Button>
                        <Button
                          onClick={() => dispatch(removeTransaction(row.id))}
                          size="sm"
                          variant="solid"
                          color="danger"
                          sx={{ mx: "2px" }}
                        >
                          delete
                        </Button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </Table>
        </Card>
      </Box>
      <ModalEditTx
        modal={openModalEdit}
        setModal={setOpenModalEdit}
        dataTx={selectedTx}
      />
    </>
  );
}

export default MainDashboard;
