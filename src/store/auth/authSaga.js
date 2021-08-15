import history from '../../utils/history';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { IS_FORM_VALID } from './constants';

export function* login() {
  try {   
    yield localStorage.setItem('auth-verification', true);
    
    yield history.push('/flights');
    console.log(2);
    console.log(history);
  } catch (e) {
     console.log(e);
  }
}

export const authSagas = [
  takeEvery(IS_FORM_VALID, login)
]