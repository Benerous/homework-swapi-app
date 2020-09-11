import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import PersonList from './Components/PersonList';
import Person from './Components/Person';
import FilmList from './Components/FilmList';
import Film from './Components/Film';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';
import { useTheme } from './themes/useTheme';

export default function App() {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home toggleTheme={toggleTheme} />
          </Route>
          <Route path="/persons/" exact>
            <PersonList toggleTheme={toggleTheme} />
          </Route>
          <Route path="/persons/:personId">
            <Person toggleTheme={toggleTheme} />
          </Route>
          <Route path="/films/" exact>
            <FilmList toggleTheme={toggleTheme} />
          </Route>
          <Route path="/films/:filmId">
            <Film toggleTheme={toggleTheme} />
          </Route>
        </Switch>
      </Router> 
    </ThemeProvider>
  );
}
