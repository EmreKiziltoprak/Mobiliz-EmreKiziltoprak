import { createTheme } from "@material-ui/core";

const defaultTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      min: 0,
      mobile: 450,
      tablet: 640,
      laptop: 1024,
      desktop: 1920,
    },
  },
  palette: {
    primary: {
      main: "#CAB8AD",
    },
    light_coffee: {
      light: "#ffffff",
      main: "#CAB8AD",
      dark: "#7e736d",
      contrastText: "#000",
    },
  },
  typography: {
    fontSize: 11,
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme