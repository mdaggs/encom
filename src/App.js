import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f7f2e9',
    },
    secondary: {
      main: '#e6090a',
    },
    background: {
      default: '#30464D',
      paper: '#fdfdfd',
    },
    info: {
      main: '#2196f3',
    },
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
