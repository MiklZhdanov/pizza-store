import { put } from 'redux-saga/effects';
import {getDeliveries} from './actions';

export function* deliverySaga() {
  yield put(getDeliveries())
}