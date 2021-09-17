import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// store:
import store from 'store';

// themes:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

// screens:
import { Login } from 'screens';

// styles:
import 'assets/css/reset.css';
import { AppContainer } from 'containers/AppContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={main}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login">
              <AppContainer>
                <Login />
              </AppContainer>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
