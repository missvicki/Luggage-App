interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  token: string;
}

export type LoginAction =
  | { type: "LOGIN_REQUEST"; input: LoginData }
  | { type: "LOGIN_SUCCESS"; user: UserData }
  | { type: "LOGIN_FAILED"; loginError: string }
  | { type: "REMOVE_LOGIN_ERROR" };

// action creators
export function loginRequest(input: LoginData): LoginAction {
  return { type: "LOGIN_REQUEST", input };
}

export function loginSuccess(user: UserData): LoginAction {
  console.log(user, "am a user");
  return { type: "LOGIN_SUCCESS", user };
}

export function loginFailed(loginError: string): LoginAction {
  return { type: "LOGIN_FAILED", loginError };
}

export function removeLoginError(): LoginAction {
  return { type: "REMOVE_LOGIN_ERROR" };
}
