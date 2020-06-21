import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import products from 'modules/products/reducer';
import cart from 'modules/cart/reducer';
import auth from 'modules/auth/reducer';
import delivery from 'modules/delivery/reducer';
import currency from 'modules/currency/reducer';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    products,
    cart,
    auth,
    delivery,
    currency
  });
