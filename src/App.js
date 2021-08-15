import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { AuthPage } from './components/AuthPage/AuthPage';
import { FlightsPage } from './components/FlightsPage/FlightsPage';

import { setFormVerification } from './store/auth/action';

import './App.css';

// const PrivateRoute = ({ component: Component, isFormValid, ...rest }) => {
//   console.log(isFormValid);
//   return (   
//     <Route
//       {...rest}
//       render={props => (isFormValid ? <Component {...props} /> : <Redirect to="/" />) }
//     />
// )};

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
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

const App = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const isFormValid = useSelector(state => state.auth.isFormValid);
  const storageIsFormValid = localStorage.getItem('auth-verification');

  // useEffect(() => {
  //   if (storageIsFormValid) {
  //     dispatch(setFormVerification());
  //     history.push('/flights');
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFormValid) {
  //     history.push('/flights');
  //   }
  // }, [history, isFormValid]);

  return (
    <Switch>
      <Route exact path='/' component={AuthPage} />
      <PrivateRoute path='/flights' component={FlightsPage} />
    </Switch>
  );
}

export default App;