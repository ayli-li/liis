import { all } from 'redux-saga/effects';
import { authSagas } from './auth/authSaga';

export default function* rootSaga() {
  yield all([
    ...authSagas
  ])
}