"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00897B",
    },
    secondary: {
      main: "#00BCD4",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            WebkitTextFillColor: "inherit",
            caretColor: "inherit",
          },
        },
      },
    },
  },
});

export default theme;
