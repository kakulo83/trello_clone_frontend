export interface SystemState {
  loggedIn: boolean;
  apiToken: string;
  userName: string;
  isAuthenticating: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface ApiToken {
  apiToken: string;
}

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export interface LoginAction {
  type: typeof LOGIN
  payload: Credentials
}

export interface LoginSuccessfulAction {
  type: typeof LOGIN_SUCCESSFUL
  payload: ApiToken
}

export type SystemActionTypes = LoginAction | LoginSuccessfulAction
