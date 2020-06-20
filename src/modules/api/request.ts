import axios, { AxiosResponse } from 'axios';
import Qs from 'query-string';
import { API_URL } from 'config/env';
import { responseDefaultTransforms, requestDefaultTransforms } from './transforms';

const commonConfig = {
  baseURL: API_URL,
  paramsSerializer: function(params: Object) {
    return Qs.stringify(params, { arrayFormat: 'comma' });
  },
  transformResponse: responseDefaultTransforms,
  transformRequest: requestDefaultTransforms
};

// Backend entrypoint
const instance = axios.create(commonConfig);

// Mock entrypoint

const handleSuccess = (response: AxiosResponse) => response;

instance.interceptors.response.use(handleSuccess);

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  delete instance.defaults.headers.common.Authorization;
};

export const request = instance;
