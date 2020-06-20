import action from './actions';
import saga, { actionDataSaga } from './saga';

export const CallApi = {
  callApiSaga: saga,
  callApiAction: action,
  callApiActionSaga: actionDataSaga
};

// you can optionally also set a default export for your module
export default CallApi;
