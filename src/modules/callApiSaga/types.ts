// TODO: fix type
export interface getApiActionObjectData {
  types: any;
  // types: ActionTypeObject[] | string[];
  method?: string;
  baseURL?: string;
  url?: string;
  api?: any;
  headers?: Object;
  body?: Object;
  key?: string;
}

export interface ActionTypeObject {
  payload?: string | Function;
  meta?: {
    _callApiMeta: {
      body?: any;
    };
    notification?: Object | Function;
  };
  type: string;
}

export type CallApiActionType = [
  string | ActionTypeObject,
  string | ActionTypeObject,
  string | ActionTypeObject
];
