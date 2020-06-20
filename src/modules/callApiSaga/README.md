# CallApi

## Summary

`CallApi` include `callApiSaga` and `callApiAction`. You can use them to interact with request.

### Dependencies

```javascript
'redux-saga/effects';
```

## Usage

### Import

```javascript
import { CallApi } from 'fm-react-components';
const { callApiSaga, callApiAction } = CallApi;
```

### Fork saga

Fork universalPageSaga in root saga

```javascript
import request from 'utils/api'; // axios instance

export default function* root(history, dispatch) {
  yield fork(callApiSaga, api);
}
```

Or use metaSaga like this

```javascript
import request from 'utils/api'; // axios instance
import { UniversalPageContainer, CallApi, Meta, Notification } from 'fm-react-components';

const { callApiActionSaga } = CallApi;
const { metaSaga } = Meta;

export default function* root(history, dispatch) {
  yield fork(callApiSaga, api);
  yield fork(metaSaga, [callApiActionSaga], api);
}
```

### Add actions

Add some actions

```javascript
export const FETCH_PRODUCT_DETAIL_REQUEST = 'FETCH_PRODUCT_DETAIL_REQUEST';
export const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';
export const FETCH_PRODUCT_DETAIL_FAILURE = 'FETCH_PRODUCT_DETAIL_FAILURE';

export const fetchDetailProduct = id =>
  callApiAction({
    api: () => api.product.get(id),
    types: [
      FETCH_PRODUCT_DETAIL_REQUEST,
      FETCH_PRODUCT_DETAIL_SUCCESS,
      FETCH_PRODUCT_DETAIL_FAILURE
    ]
  });
```

You can add request data like this

```javascript
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const addProductAction = data =>
  apiAction({
    api: () => api.product.create(data),
    types: [ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE],
    body: data
  });
```

You can extend action types

```javascript
export const UPDATE_MERCHANT_REQUEST = 'UPDATE_MERCHANT_REQUEST';
export const UPDATE_MERCHANT_SUCCESS = 'UPDATE_MERCHANT_SUCCESS';
export const UPDATE_MERCHANT_FAILURE = 'UPDATE_MERCHANT_FAILURE';

export const updateMerchant = ({ id, formData }) =>
  apiAction({
    api: () => api.merchant.update({ id, formData }),
    types: [
      UPDATE_MERCHANT_REQUEST,
      {
        type: UPDATE_MERCHANT_SUCCESS,
        meta: {
          notification: {
            type: 'success',
            message: 'Merchant successfully updated'
          }
        },
        customFieldName: {
          customFieldData: '123'
        }
      },
      {
        type: UPDATE_MERCHANT_FAILURE,
        meta: {
          notification: {
            type: 'failure',
            message: 'Something bad happend!'
          }
        }
      }
    ],
    body: formData
  });
```

You can set custom payload for request/success/failure actions
and set notification as function depends on response/error data

```javascript
export const GET_EXAMPLE_REQUEST = 'GET_EXAMPLE_REQUEST';
export const GET_EXAMPLE_SUCCESS = 'GET_EXAMPLE_SUCCESS';
export const GET_EXAMPLE_FAILURE = 'GET_EXAMPLE_FAILURE';

export const getExample = () =>
  callApiAction({
    api: () => api.merchant.get(id),
    types: [
      {
        type: GET_EXAMPLE_REQUEST,
        meta: {
          data: '111odin11odinOdinOdin111',
          notification: {
            message: 'REQUEST!!! (notification test)',
            type: 'message'
          }
        },
        payload: data => {
          data.info = 'some info';
          return data;
        }
      },
      {
        type: GET_EXAMPLE_SUCCESS,
        meta: {
          notification: {
            message: 'SUCCESS!!! (notification test)',
            type: 'success'
          },
          data: 'myaw myaw'
        },
        payload: data => {
          data.info = 'some info';
          return data;
        }
      },
      {
        type: GET_EXAMPLE_FAILURE,
        meta: {
          notification: data => {
            // Object || Function
            data.code === 405 && {
              type: 'modal',
              options: {
                type: 'info',
                title: 'Ops...',
                content: 'Please, clarify search query using filters.',
                onOk() {}
              }
            };
          },
          silent: data => data.code !== 405 // boolean || Function
        }
      }
    ]
  });
```

For check `loading` and `error` state you just need add `key` param and that's it, everything will store inside `loading` and `error` modules;

```javascript
export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

export const getProduct = id =>
  callApiAction({
    key: `product-${id}`
    api: () => api.product.get(id),
    types: [
      GET_PRODUCT_REQUEST,
      GET_PRODUCT_SUCCESS,
      GET_PRODUCT_FAILURE
    ]
  });
```
