import { LoginAction, UserData } from "../../types/Login/login";

interface LoginState {
  user: UserData;
  isLoading: boolean;
}

const initialState: LoginState = {
  user: null,
  isLoading: false
};

export function loginReducer(
  state = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return { ...state, isLoading: false, user: action.user };
    default:
      return state;
  }
}
