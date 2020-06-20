import { put, takeEvery } from 'redux-saga/effects';
import {login} from './actions';
import {AuthActionTypes} from './types';
import {setToken, removeToken} from 'modules/api/request';
import {createCart} from 'modules/cart/actions';

export function* authSaga() {
  // const { selectedCart } = yield select(state => state.cart);

  yield put(login({
    identifier: "test",
    password: "123123123"
  }))

  yield takeEvery([AuthActionTypes.LOGIN_SUCCESS, AuthActionTypes.REGISTRATION_SUCCESS], loginSuccessSaga )
  yield takeEvery(AuthActionTypes.LOGOUT_SUCCESS, logoutSuccessSaga )
}

function* loginSuccessSaga(data: any){
  yield setToken(data.payload.jwt)

}

function* logoutSuccessSaga(){
  yield removeToken();
  yield put(createCart())
}