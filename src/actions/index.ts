import { LOGIN, AppActionTypes } from "../types/index"

export function login(): AppActionTypes {
  return {
    type: LOGIN
  }
}
