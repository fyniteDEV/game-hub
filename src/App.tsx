import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Grid, Button, Box } from "@mui/material";
import NavBar from "./components/ui/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Grid container>
          <Grid size={12}>
            <Box>
              <NavBar />
            </Box>
          </Grid>

          <Grid
            size={{ lg: 6 }}
            display={{
              lg: "block",
              xs: "none",
            }}
          >
            <Box
              sx={{
                bgcolor: "gold",
                p: 2,
              }}
            >
              Aside
            </Box>
          </Grid>

          <Grid size={{ lg: 6, xs: 12 }}>
            <Box sx={{ bgcolor: "lightblue", p: 2 }}>Main</Box>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
