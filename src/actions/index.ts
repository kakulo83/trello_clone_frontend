import { INCREMENT, AppActionTypes } from "../types/index"

export function increment(): AppActionTypes {
  return {
    type: INCREMENT
  }
}
