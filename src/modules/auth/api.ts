import { request } from 'modules/api/request';
import { LoginRequestType, RegistrationRequestType } from './types';

export const auth = {
  // updateUser: async (data: UserType) =>
  // await request.put(`/user/${data.id}`, data),
  register: async (data: RegistrationRequestType) =>
  await request.post(`/auth/local`, data),
  login: async (data: LoginRequestType) =>
    await request.post(`/auth/local`, data),
};
