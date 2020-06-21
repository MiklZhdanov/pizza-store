import { AuthActionTypes, AuthStateType } from "./types";

const initialState: AuthStateType = {
  loading: false,
  currentUser: undefined,
};

export default function (state = initialState, action: any): AuthStateType {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case AuthActionTypes.REGISTRATION_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case AuthActionTypes.REGISTRATION_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        loading: false,
      };
    case AuthActionTypes.REGISTRATION_FAILURE:
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false };

    case AuthActionTypes.LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
}
