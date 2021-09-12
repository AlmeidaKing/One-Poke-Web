import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// themes:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

// screens:
import { Login } from 'screens';

// styles:
import 'assets/css/reset.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={main}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
