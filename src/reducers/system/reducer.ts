import {
  SystemState,
  SystemActionTypes,
  LOGIN,
  LOGIN_SUCCESSFUL,
} from "../../types/system/types";

const initialState: SystemState = {
  loggedIn: false,
  apiToken: "",
  userName: "",
  isAuthenticating: false,
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {

  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticating: true,
      }
    }
    case LOGIN_SUCCESSFUL: {
      return {
        ...state,
        isAuthenticating: false,
        apiToken: action.payload,
      }
    }
    default:
      return state;
  }
}
