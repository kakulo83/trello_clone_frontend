import {
  LOGIN,
  LOGIN_SUCCESSFUL,
  Credentials,
  SystemActionTypes
} from '../../types/system/types'

export function login(credentials: Credentials): SystemActionTypes {
  return {
    type: LOGIN,
    payload: credentials,
  }
}

export function loginSuccessful(token: string): SystemActionTypes {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: token,
  }
}
