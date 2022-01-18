import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/globalStyle";
import theme from "./components/theme";

import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Crew from './pages/Crew';

const App = () => {
  let history = createBrowserHistory();
  let location = history.location;
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
        <Main bg={history.location.pathname === '/' ? 'home':location.pathname.replace("/","") }>
          <Routes>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>
        </Main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
