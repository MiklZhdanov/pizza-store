import { ActionTypeObject } from './types';

export const getBodyFromCallApi = (callApiAction: ActionTypeObject) => {
  if (callApiAction.meta && callApiAction.meta._callApiMeta)
    return callApiAction.meta._callApiMeta.body;
};
