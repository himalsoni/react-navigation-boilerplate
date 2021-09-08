import {fork, all} from 'redux-saga/effects';

import {watchApiRequest} from './homeSaga';

export default function* rootSaga() {
  yield all([
    watchApiRequest()
  ])
}
