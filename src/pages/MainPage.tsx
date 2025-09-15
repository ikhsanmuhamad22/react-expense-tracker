import Typography from "@mui/joy/Typography/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Link from "@mui/joy/Link";
import { Stack } from "@mui/material";
import InputTx from "../components/InputTx";
import MainDashboard from "../components/MainDashboard";

export default function MainPage() {
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
            September.
          </Typography>

          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <MainDashboard />
            <InputTx />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
