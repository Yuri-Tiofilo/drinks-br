import {all} from 'redux-saga/effects';

import categories from './categories/sagas';
import drinks from './drinks/sagas';

export default function* rootSaga() {
  return yield all([categories, drinks]);
}
