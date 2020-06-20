# Meta

## Summary

`Meta` include `metaSaga`. You can use it to handle actions with meta.

## Usage

Fork metaSaga innto the root saga

```javascript
export default function* root(history, dispatch) {
  yield fork(metaSaga, [
    callApiActionSaga, // sagas, that need meta
    metaSagaNotificationsSaga // sagas, that need meta
  ]);
}
```

Inside the pet saga you have access to the meta information

```javascript
export default function* metaCallbackSaga(meta) {
  if (!meta.callback) return;
  if (typeof meta.callback !== 'function') throw new Error('Callback must be a function');
  yield call(meta.callback);
}
```
