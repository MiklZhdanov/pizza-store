import { put, takeEvery, select, take } from 'redux-saga/effects';
import {createCart, updateCart} from './actions';
import {CartActionTypes, CartType} from './types';
import { getTotalSum, getTotalItems } from './utils';
import { updateUser } from 'modules/auth/actions';
import { AuthActionTypes } from 'modules/auth/types';

export function* cartSaga() {
  const { selectedCart } = yield select(state => state.cart);

  if(!selectedCart){
    yield put(createCart())
  }
  yield takeEvery(CartActionTypes.ADD_PRODUCT_TO_CART, addToCartSaga )
  yield takeEvery(CartActionTypes.CHECKOUT_CART, checkoutCartSaga )

}

function* addToCartSaga(data: any){
  const { selectedCart } = yield select(state => state.cart);
  const updatedItems = updateItems(selectedCart.items, data.payload)

  yield put(updateCart({
    id: selectedCart.id,
    items: clearItems(updatedItems)
  }))

}

function* checkoutCartSaga({payload:{cart, delivery, address}}: {type: string, payload: {cart: CartType, delivery: string, address: string, email: string}}){
  const { currentUser } = yield select(state => state.auth);
  const { items } = yield select(state => state.products);
  if(currentUser){
    const order = {id: cart.id, totalSum: getTotalSum({products: items, cart}), items: getTotalItems({cart}), address, delivery}
    yield put(updateUser({
      ...currentUser,
      orders: currentUser.orders ? [...currentUser.orders, order] : [order]
    }));
    const updatedUser = yield take(AuthActionTypes.UPDATE_USER_SUCCESS);
    yield put(createCart());
    const {payload} = yield take(CartActionTypes.CREATE_CART_SUCCESS);
    yield put(updateUser({...updatedUser.payload, cart: payload.id}))
  } else {
    yield put(createCart());
  }
}



const clearItems = (items: {id: number, quantity: number}[]): {id: number, quantity: number}[] => items?.filter(item => item?.quantity > 0) || []

const updateItems = (items: {id: number, quantity: number}[], itemForUpdate:  {id: number, quantity: number}) => {
  if(!items.length){
    return [itemForUpdate]
  } else if(items.find(item => item.id === itemForUpdate.id)){
     return items.map(item => ({...item, quantity: item.id === itemForUpdate.id ? item.quantity + itemForUpdate.quantity : item.quantity}))
  } else {
    return [...items, itemForUpdate]
  }
}