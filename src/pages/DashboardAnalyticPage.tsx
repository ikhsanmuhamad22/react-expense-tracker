import {
  Box,
  Breadcrumbs,
  Card,
  Link,
  Tab,
  tabClasses,
  TabList,
  Tabs,
  Typography,
} from "@mui/joy";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Analitycs from "../components/Analitycs";
import AnalitycCategory from "../components/AnalitiycCategory";

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
            <AnalitycCategory />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardAnalitycPage;
