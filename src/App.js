import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  console.log(colorMode);
  return (
    <div className="app">

    </div>
  );
}

export default App;
