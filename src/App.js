import React, {useState, useContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/globalStyle";
import { GlobalContext } from "./context/globalState";
import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';

const App = () => {
  const { theme } = useContext(GlobalContext);
  const [background, setBackground] = useState(''); 
  const backgroundHandler = (bg) =>{
    setBackground(bg)
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
        <Main bg={background}>
          <Routes>
            <Route path="/crew" element={<Crew setBackground={(e)=>backgroundHandler(e)}/>}/>
            <Route path="/destination" element={<Destination setBackground={(e)=>backgroundHandler(e)}/>}/>
            <Route path="/technology" element={<Technology setBackground={(e)=>backgroundHandler(e)}/>}/>
            <Route path="/home" element={<Home setBackground={(e)=>backgroundHandler(e)}/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>
        </Main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
