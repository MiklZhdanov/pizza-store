import { put, call, takeEvery, take, cancel, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import Requals from 'ramda/src/equals';
import { getApiActionObjectData } from './types';

export const apiRequest = (api: any, options: Object) => {
  return api(options);
};

export function* actionDataSaga(
  meta: { key: string; _callApiMeta: getApiActionObjectData },
  api: any
) {
  yield call(actionDataFunc, api, { meta });
}

// saga to cancel dublicate api call
export function* cancelSaga(cancellation: any, meta: getApiActionObjectData) {
  while (true) {
    const request = yield take('*');
    if (request.type.indexOf('_REQUEST') !== -1) {
      const requestObject =
        request.meta && request.meta._callApiMeta ? request.meta._callApiMeta : {};
      if (Requals(meta, requestObject)) {
        yield call(cancellation, [`Dublicate call of ${request.type}`]);
      }
    }
  }
}

export function* actionDataFunc(
  api: any,
  actionData: { meta: { key: string; _callApiMeta: getApiActionObjectData } }
): any {
  // link to reject cancelSaga while error catch
  let requestCancelSagaLink;

  if (
    actionData.meta &&
    actionData.meta._callApiMeta &&
    Array.isArray(actionData.meta._callApiMeta.types) &&
    actionData.meta._callApiMeta.types.length === 3 &&
    ((actionData.meta._callApiMeta.method && actionData.meta._callApiMeta.url) ||
      actionData.meta._callApiMeta.api)
  ) {
    try {
      const headers = actionData.meta._callApiMeta.headers
        ? actionData.meta._callApiMeta.headers
        : {};

      const CancelToken = axios.CancelToken;

      let cancellation = () => {};

      const action = actionData.meta._callApiMeta.api
        ? call(actionData.meta._callApiMeta.api)
        : call(apiRequest, api, {
            method: actionData.meta._callApiMeta.method,
            // Overide baseUrl, can be useful for mock data from another server
            baseURL: actionData.meta._callApiMeta.baseURL || api.defaults.baseURL,
            url: actionData.meta._callApiMeta.url,
            data: actionData.meta._callApiMeta.body,
            headers,
            cancelToken: new CancelToken(function executor(c) {
              cancellation = c;
            })
          });

      const [request, requestCancelSaga] = yield all([
        action,
        fork(cancelSaga, cancellation, actionData.meta._callApiMeta)
      ]);

      requestCancelSagaLink = requestCancelSaga;

      if (request) {
        yield cancel(requestCancelSaga); //abort cancelSaga saga forked for this request
        const successActionType: any =
          typeof actionData.meta._callApiMeta.types[1] === 'string'
            ? { type: actionData.meta._callApiMeta.types[1] }
            : actionData.meta._callApiMeta.types[1];

        if (successActionType.meta && typeof successActionType.meta.notification === 'function') {
          successActionType.meta.notification = successActionType.meta.notification(request.data);
        }

        if (successActionType.meta && typeof successActionType.meta.silent === 'function') {
          successActionType.meta.notification = successActionType.meta.silent(request.data);
        }

        // Set uniq key for connect actions flow
        if (api.meta.key) successActionType.meta = { ...successActionType.meta, key: api.meta.key };

        const payload =
          successActionType.payload && typeof successActionType.payload === 'function'
            ? successActionType.payload(request.data)
            : request.data;

        yield put({
          ...successActionType,
          payload
        });
      }
    } catch (error) {
      console.log(error);
      if (requestCancelSagaLink) {
        yield cancel(requestCancelSagaLink);
      }
      const failureActionType: any =
        typeof actionData.meta._callApiMeta.types[2] === 'string'
          ? { type: actionData.meta._callApiMeta.types[2] }
          : actionData.meta._callApiMeta.types[2];

      if (failureActionType.meta && typeof failureActionType.meta.notification === 'function') {
        failureActionType.meta.notification = failureActionType.meta.notification(error);
      }

      if (failureActionType.meta && typeof failureActionType.meta.silent === 'function') {
        failureActionType.meta.notification = failureActionType.meta.silent(error);
      }

      // Set uniq key for connect actions flow
      if (api.meta.key) failureActionType.meta = { ...failureActionType.meta, key: api.meta.key };

      const status = error.response ? error.response.status : 418;
      const data = error.response ? error.response.data : 'Something bad happened';

      // Set uniq key for connect actions flow
      // ----------------------

      yield put({
        ...failureActionType,
        payload: failureActionType.payload ? failureActionType.payload : { status, data }
      });
    }
  }
}

export default function* callApiSaga(api: any) {
  // @ts-ignore
  yield takeEvery('*', actionDataFunc, api);
}
