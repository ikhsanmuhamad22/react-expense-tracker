import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import tabClasses from "@mui/joy/Tab/tabClasses";
import Tab from "@mui/joy/Tab";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import React from "react";
import Divider from "@mui/joy/Divider";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormLabel from "@mui/joy/FormLabel";
import { categoryExpenses, categoryIncomes } from "../data/interface/category";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import { Alert, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../data/redux/store";
import { addTransaction } from "../data/redux/transactions/slice";
import type { Transaction } from "../data/interface/transaction";
import type { CategoryExpense, CategoryIncome } from "../data/types";

function InputTx() {
  const dispatch = useDispatch<AppDispatch>();
  const [tab, setTab] = React.useState<"expense" | "income">("expense");
  const [showAlert, setShowAlert] = React.useState(false);

  const [selectedCategory, setSelectedCategory] = React.useState<
    CategoryExpense | CategoryIncome | undefined
  >("food");
  const [inputNote, setInputNote] = React.useState("");
  const [inputAmount, setInputAmount] = React.useState("");

  return (
    <Box sx={{ width: "38%" }}>
      <Card variant="outlined">
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue as "expense" | "income")}
          sx={{ bgcolor: "transparent" }}
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
              value="expense"
            >
              Expense
            </Tab>
            <Tab
              sx={{ borderRadius: "6px 6px 0 0" }}
              indicatorInset
              value="income"
            >
              Income
            </Tab>
          </TabList>
        </Tabs>
        {showAlert && (
          <Alert sx={{ px: 3 }} color="success" size="md" variant="soft">
            Success to input
          </Alert>
        )}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const data: Transaction = {
              id: "id" + Date.now(),
              type: tab,
              note: inputNote,
              amount: Number(inputAmount),
              category: selectedCategory,
              date: new Date().toISOString(),
            };
            setShowAlert(true);
            dispatch(addTransaction(data));
            setTimeout(() => setShowAlert(false), 2000);
          }}
        >
          <Stack spacing={2} sx={{ px: 4, py: 2 }}>
            <Stack spacing={1}>
              <FormLabel>
                Your {tab === "expense" ? "expense" : "Income"}
              </FormLabel>
              <Input
                value={inputNote}
                onChange={(e) => setInputNote(e.target.value)}
                placeholder="note"
                required
              />
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                placeholder="Amount"
                startDecorator={"Rp"}
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                endDecorator={
                  <React.Fragment>
                    <Divider orientation="vertical" />
                    <Typography pl={1}>IDR</Typography>
                  </React.Fragment>
                }
              />
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Category</FormLabel>
              <Select
                value={selectedCategory}
                placeholder="Category"
                variant="outlined"
                slotProps={{
                  listbox: {
                    placement: "bottom-end",
                    disablePortal: true,
                  },
                }}
                onChange={(_, value) => setSelectedCategory(value!)}
              >
                {tab === "expense"
                  ? categoryExpenses.map((c) => (
                      <Option id={c.value} value={c.value}>
                        {c.label}
                      </Option>
                    ))
                  : categoryIncomes.map((c) => (
                      <Option id={c.value} value={c.value}>
                        {c.label}
                      </Option>
                    ))}
              </Select>
            </Stack>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Card>
    </Box>
  );
}

export default InputTx;
