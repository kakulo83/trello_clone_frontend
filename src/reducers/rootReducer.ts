import {
  INCREMENT,
  AppActionTypes,
} from "../types/index";

const AppReducer = (state=0, action: AppActionTypes) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default AppReducer
