import { request } from 'modules/api/request';
import { LoginRequestType, RegistrationRequestType, UserType } from './types';

export const auth = {
  // updateUser: async (data: UserType) =>
  // await request.put(`/user/${data.id}`, data),
  register: async (data: RegistrationRequestType) =>
  await request.post(`/auth/local/register`, data),
  login: async (data: LoginRequestType) =>
    await request.post(`/auth/local`, data),
  updateUser: async (data: UserType) =>
    await request.put(`/users/${data.id}`, data),
};
