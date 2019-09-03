import {
  INCREMENT,
  AppActionTypes,
} from "../types/index";

const AppReducer = (state=0, action: AppActionTypes) => {
  console.log("Reducer Executed")
  switch(action.type) {
    case INCREMENT:
      console.log("INCREMENT CLICKED!!!")
      return state + 1
    default:
      return state
  }
}

export default AppReducer
