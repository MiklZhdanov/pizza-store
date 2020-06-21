import { CallApi } from 'modules/callApiSaga';
import { AuthActionTypes, LoginRequestType, RegistrationRequestType, UserType } from './types';
import { api } from 'modules/api/api';

const { callApiAction } = CallApi;

export const login = (data: LoginRequestType) =>
  callApiAction({
    api: () => api.auth.login(data),
    types: [
      AuthActionTypes.LOGIN_REQUEST,
      AuthActionTypes.LOGIN_SUCCESS,
      AuthActionTypes.LOGIN_FAILURE
    ]
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS
});

export const register = (data: RegistrationRequestType) =>
  callApiAction({
    api: () => api.auth.register(data),
    types: [
      AuthActionTypes.REGISTRATION_REQUEST,
      AuthActionTypes.REGISTRATION_SUCCESS,
      AuthActionTypes.REGISTRATION_FAILURE
    ]
});

export const updateUser = (data: UserType) =>
  callApiAction({
    api: () => api.auth.updateUser(data),
    types: [
      AuthActionTypes.UPDATE_USER_REQUEST,
      AuthActionTypes.UPDATE_USER_SUCCESS,
      AuthActionTypes.UPDATE_USER_FAILURE
    ]
});