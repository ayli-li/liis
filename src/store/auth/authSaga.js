import history from '../../utils/history';
import { takeEvery } from 'redux-saga/effects';
import { IS_FORM_VALID } from './constants';

function* login() {
  try {   
    yield localStorage.setItem('auth-verification', true);
    
    yield history.push('/flights');
  } catch (e) {
     console.log(e);
  }
}

export const authSagas = [
  takeEvery(IS_FORM_VALID, login)
]