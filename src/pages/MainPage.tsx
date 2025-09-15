import Typography from "@mui/joy/Typography/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import { Stack } from "@mui/material";
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
import { categoryExpenses } from "../data/category";

export default function MainPage() {
  const [currency, setCurrency] = React.useState("rupiah");
  const [categroy, setCategory] = React.useState("food");
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
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="/"
              sx={{ fontSize: 12, fontWeight: 500 }}
            >
              Home
            </Link>
          </Breadcrumbs>

          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Your Tracker.
          </Typography>

          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <Box sx={{ width: "60%" }}>
              <Card variant="outlined">
                <Typography>ikhsan yang ganteng</Typography>
              </Card>
            </Box>
            <Box sx={{ width: "38%" }}>
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
                    <Tab
                      sx={{ borderRadius: "6px 6px 0 0" }}
                      indicatorInset
                      value={0}
                    >
                      Expense
                    </Tab>
                    <Tab
                      sx={{ borderRadius: "6px 6px 0 0" }}
                      indicatorInset
                      value={1}
                    >
                      Income
                    </Tab>
                  </TabList>
                </Tabs>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(
                      (formData as any).entries()
                    );
                    alert(JSON.stringify(formJson));
                  }}
                >
                  <Stack spacing={2} sx={{ px: 4, py: 2 }}>
                    <Stack spacing={1}>
                      <FormLabel>Your expense</FormLabel>
                      <Input placeholder="buy ferari" required />
                    </Stack>
                    <Stack spacing={1}>
                      <FormLabel>Amount</FormLabel>
                      <Input
                        type="number"
                        placeholder="Amount"
                        startDecorator={{ dollar: "$", rupiah: "Rp" }[currency]}
                        endDecorator={
                          <React.Fragment>
                            <Divider orientation="vertical" />
                            <Select
                              variant="plain"
                              value={currency}
                              onChange={(_, value) => setCurrency(value!)}
                              slotProps={{
                                listbox: {
                                  placement: "bottom-end", // posisi dropdown
                                  disablePortal: true, // supaya tidak nempel ke body, tetap render di container
                                },
                              }}
                              sx={{
                                mr: -1.5,
                                "&:hover": { bgcolor: "transparent" },
                              }}
                            >
                              <Option value="dollar">US dollar</Option>
                              <Option value="rupiah">IDR</Option>
                            </Select>
                          </React.Fragment>
                        }
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <FormLabel>Category</FormLabel>
                      <Select
                        value={categroy}
                        placeholder="Category"
                        variant="outlined"
                        slotProps={{
                          listbox: {
                            placement: "bottom-end", // posisi dropdown
                            disablePortal: true, // supaya tidak nempel ke body, tetap render di container
                          },
                        }}
                        onChange={(_, value) => setCategory(value!)}
                      >
                        {categoryExpenses.map((c) => (
                          <Option value={c.value}>{c.label}</Option>
                        ))}
                      </Select>
                    </Stack>
                    <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              </Card>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
