import { fork } from 'redux-saga/effects';
import Meta from 'modules/meta';
import callApiSaga from 'modules/callApiSaga';
import { productsSaga } from 'modules/products/saga';
import { cartSaga } from 'modules/cart/saga';
import { authSaga } from 'modules/auth/saga';

const { metaSaga } = Meta;
const { callApiActionSaga } = callApiSaga;


export default function* baseSaga() {
  // add all base sagas here
  yield fork(metaSaga, [callApiActionSaga]);
  yield fork(productsSaga);
  yield fork(cartSaga);
  yield fork(authSaga);
}
