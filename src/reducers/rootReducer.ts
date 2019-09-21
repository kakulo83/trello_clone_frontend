import {
  LOGIN,
  AppActionTypes,
} from "../types/index"

// IMPORT ALL REDUCERS

const RootReducer = (state=0, action: AppActionTypes) => {
  switch(action.type) {
    case LOGIN:
      return state + 1
    default:
      return state
  }
}

export default RootReducer
