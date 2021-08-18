import { all } from 'redux-saga/effects';
import { authSagas } from './auth/authSaga';
import { flightsSagas } from './flights/flightsSaga';

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...flightsSagas
  ])
}