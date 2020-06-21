export type LoginRequestType = {
  identifier: string;
  password: string;
};

export type RegistrationRequestType = {
  username: string,
  email:string,
  password: string,
  address: string
}

export type UserType = {
  id: number;
  username?: string;
  email:string;
  address: string;
  orders: OrdersHistoryType[];
};

export type OrdersHistoryType = {
  id: number;
  totalSum: string;
  items: number;
  address: string;
  delivery: string;
}

export type AuthStateType = {
  currentUser?: UserType;
  loading: boolean;
};

const moduleName = '@@auth';

export const AuthActionTypes = {
  LOGIN_REQUEST: `${moduleName}/LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${moduleName}/LOGIN_SUCCESS`,
  LOGIN_FAILURE: `${moduleName}/LOGIN_FAILURE`,

  REGISTRATION_REQUEST: `${moduleName}/REGISTRATION_REQUEST`,
  REGISTRATION_SUCCESS: `${moduleName}/REGISTRATION_SUCCESS`,
  REGISTRATION_FAILURE: `${moduleName}/REGISTRATION_FAILURE`,

  UPDATE_USER_REQUEST: `${moduleName}/UPDATE_USER_REQUEST`,
  UPDATE_USER_SUCCESS: `${moduleName}/UPDATE_USER_SUCCESS`,
  UPDATE_USER_FAILURE: `${moduleName}/UPDATE_USER_FAILURE`,
  
  LOGOUT_SUCCESS:  `${moduleName}/LOGOUT_SUCCESS`,
};
