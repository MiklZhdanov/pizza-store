import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'config/theme';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import { GlobalStyle } from 'config/globalStyles';
import { BaseLayout } from 'atomic/templates/BaseLayout';
import { MainPage } from 'pages/Main';
import { CartPage } from 'pages/Cart';
import { LoginPage } from 'pages/Login';
import { RegistrationPage } from 'pages/Registration';
import { ProfilePage } from 'pages/Profile';
import { CheckoutPage } from 'pages/Checkout';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <BaseLayout>
          <Switch>
           <Route exact path="/" render={() => (<MainPage/>)} />
           <Route exact path="/cart" render={() => (<CartPage/>)} />
           <Route exact path="/login" render={() => (<LoginPage/>)} />
           <Route exact path="/register" render={() => (<RegistrationPage/>)} />
           <Route exact path="/profile" render={() => (<ProfilePage/>)} />
           <Route exact path="/checkout" render={() => (<CheckoutPage/>)} />
           <Route render={() => (<div>404 - page not found</div>)} />
         </Switch>
      </BaseLayout>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

export default App;