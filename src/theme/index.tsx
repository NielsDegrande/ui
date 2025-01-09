import {
  CssBaseline,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";

import Overrides from "./overrides";
import palette from "./palette";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const theme = createTheme({
    palette: palette(),
  });

  theme.components = Overrides();

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
