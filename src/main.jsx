import { Router } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./contexts/UserContext";
import { CssBaseline } from "@mui/material";

export default function Main() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Router />
      </UserProvider>
    </ThemeProvider>
  );
}
