import {Route, Router, Routes} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {RecoilRoot} from 'recoil'
import MainPage from "./page/MainPage";
import './assets/css.css'

const theme = createTheme({
  typography: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segae UI Emoji", "Segoe UI Symbol", sans-serif',
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
              <Router>
                  <Routes>
                      <Route path='/' component={<MainPage />} />
                  </Routes>
              </Router>
      </ThemeProvider>
  );
}

export default App;
