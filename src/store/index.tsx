import { createStore, applyMiddleware } from 'redux';
import { fork } from 'redux-saga/effects';
import persistState from 'redux-localstorage';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import baseSaga from './baseSaga';

export const history = createBrowserHistory();

export function* rootSaga() {
  yield fork(baseSaga);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export const rootReducer = createRootReducer(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
    // @ts-ignore
    persistState(['products', 'cart', 'auth'])
  )
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
