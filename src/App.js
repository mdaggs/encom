import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f7f2e9',
    },
    secondary: {
      main: '#e6090a',
    },
    background: {
      default: '#30464D',
      paper: '#f7f2e9',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
