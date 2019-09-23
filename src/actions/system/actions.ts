import {
  LOGIN,
  LOGIN_SUCCESSFUL,
  Credentials,
  ApiToken,
  SystemActionTypes
} from '../../types/system/types'

export function login(credentials: Credentials): SystemActionTypes {
  return {
    type: LOGIN,
    payload: credentials,
  }
}

export function loginSuccessful(token: ApiToken): SystemActionTypes {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: token,
  }
}
