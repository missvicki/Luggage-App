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
  | { type: "LOGIN_SUCCESS"; user: UserData };

// action creators
export function loginRequest(input: LoginData): LoginAction {
  return { type: "LOGIN_REQUEST", input };
}

export function loginSuccess(user: UserData): LoginAction {
  return { type: "LOGIN_SUCCESS", user };
}
