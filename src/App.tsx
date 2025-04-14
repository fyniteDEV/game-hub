import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Grid, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
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
            <Box>Aside</Box>
          </Grid>

          <Grid size={{ lg: 6, xs: 12 }}>
            <Box>
              <GameGrid />
            </Box>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
