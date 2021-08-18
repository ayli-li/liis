import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPage } from './components/AuthPage/AuthPage';
import { FlightsPage } from './components/FlightsPage/FlightsPage';

import './App.css';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isFormValid = useSelector(state => state.auth.isFormValid);

  return (
    <Route
      {...rest}
      component={(props) => (
        isFormValid ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )}
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isFormValid = useSelector(state => state.auth.isFormValid);
  
  return (
    <Route
      {...rest}
      component={(props) => (
        isFormValid ? (
          <Redirect to="flights"/>
        ) : (
          <Component {...props} />
        )
      )}
    />
  );
};

const App = () => {

  return (
    <Switch>
      <PrivateRoute path='/flights' component={FlightsPage} />
      <PublicRoute exact path='/' component={AuthPage} />      
    </Switch>
  );
}

export default App;