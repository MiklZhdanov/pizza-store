import { put } from 'redux-saga/effects';
import { getProducts } from './actions';

export function* productsSaga() {
  yield put(getProducts())
  yield console.log("productsSaga")
}