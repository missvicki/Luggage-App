import { LoginAction, UserData } from "../../types/Login/login";

interface LoginState {
  user: UserData;
  isLoading: boolean;
  loginError: string;
}

const initialState: LoginState = {
  user: null,
  loginError: null,
  isLoading: false
};

export function loginReducer(
  state = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    // case 'LOGIN_REQUEST':
    //   return {...state, isLoading: true}
    // case 'LOGIN_SUCCESS':
    //   return {...state, isLoading: false, user: action.user}
    // case 'LOGIN_FAILED':
    //   return {...state, isLoading: false, loginError: action.loginError}
    // case 'REMOVE_LOGIN_ERROR':
    //   return {...state, loginError: "", isLoading: false};
    default:
      return state;
  }
}
