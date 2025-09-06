import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Sidebar from "./components/Sidebar";
import { Box, CssVarsProvider } from "@mui/joy";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Sidebar />
          <Header />
          <Box
            component="main"
            className="MainContent"
            sx={{
              pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
              pb: { xs: 2, sm: 2, md: 3 },
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              height: "100dvh",
              gap: 1,
              overflow: "auto",
              bgcolor: "background.body",
              color: "text.primary",
            }}
          >
            <MainPage />
          </Box>
        </Box>
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
