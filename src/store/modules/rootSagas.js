import { all } from 'redux-saga/effects';

import authSaga from './auth/sagas';

export default function* rootSagas() {
  return yield all([authSaga]);
};
