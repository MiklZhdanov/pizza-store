import { takeEvery, all, fork } from 'redux-saga/effects';
import { ActionType } from './types';

export function* metaSaga(sagas: Array<any>, action: ActionType<unknown>) {
  if (Array.isArray(sagas) && action.meta) {
    yield all(sagas.map(saga => fork(saga, action.meta, action)));
  }
}

export default function* metaSagaWatcher(sagas: Array<any>) {
  yield takeEvery('*', metaSaga, sagas);
}
