import { put, takeEvery, select } from 'redux-saga/effects';
import {updateUser} from './actions';
import {AuthActionTypes} from './types';
import {setToken, removeToken} from 'modules/api/request';
import {createCart, getCart} from 'modules/cart/actions';

export function* authSaga() {
  // const { selectedCart } = yield select(state => state.cart);

  yield takeEvery([AuthActionTypes.LOGIN_SUCCESS, AuthActionTypes.REGISTRATION_SUCCESS], loginSuccessSaga );
  yield takeEvery(AuthActionTypes.LOGOUT_SUCCESS, logoutSuccessSaga );
}

function* loginSuccessSaga(data: any){
  yield setToken(data.payload.jwt);
  const { selectedCart } = yield select(state => state.cart);
  if(data.payload.user.cart){
    yield put(getCart({id: data.payload.user.cart.id}))
  } else {
    yield put(updateUser({...data.payload.user, cart: selectedCart.id}))
  }
}

function* logoutSuccessSaga(){
  yield removeToken();
  yield put(createCart())
}