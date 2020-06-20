import axios from 'axios';

export const removeData = (response: string) => {
  try {
    const responseParsed = JSON.parse(response);
    return responseParsed.data ? responseParsed.data : responseParsed;
  } catch {
    return response;
  }
};

export const addEmptyObject = (data?: Object) => data || {};

export const appendValues = (values: Object) => (response: Object) => ({ ...response, ...values });

export const responseDefaultTransforms = [
  removeData,
  ...(Array.isArray(axios.defaults.transformResponse) ? axios.defaults.transformResponse : [])
];
export const requestDefaultTransforms = [
  addEmptyObject,
  ...(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : [])
];
