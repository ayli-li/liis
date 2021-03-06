import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store/store';
import history from './utils/history';

ReactDOM.render(
  <Router history={ history } basename={process.env.PUBLIC_URL} >
    <Provider store={ store }>
      <App />
    </Provider>    
  </Router>,
  document.getElementById('root')
);