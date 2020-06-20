import { getApiActionObjectData } from './types';

export const getApiActionObject = (data: getApiActionObjectData) => {
  const [requestAction] = data.types;
  const type = typeof requestAction === 'object' ? requestAction.type : requestAction;
  const meta = typeof requestAction === 'object' ? requestAction.meta : undefined;
  const key = data.key;

  const payload =
    typeof requestAction === 'object' && typeof requestAction.payload === 'function'
      ? requestAction.payload({})
      : undefined;
  return { type, meta: { key, ...meta, _callApiMeta: data }, payload };
};

const apiAction = (payload: getApiActionObjectData) => getApiActionObject(payload);

export default apiAction;
