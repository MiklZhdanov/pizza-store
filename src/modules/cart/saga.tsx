import { put, takeEvery, select } from 'redux-saga/effects';
import {createCart, updateCart} from './actions';
import {CartActionTypes} from './types';

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

function* checkoutCartSaga(){
  const { selectedCart } = yield select(state => state.cart);
  console.log(selectedCart)
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