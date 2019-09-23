import { takeEvery, put, call } from 'redux-saga/effects';
import {
  APIService,
} from '../services/APIService';
import {
  LoginAction,
} from "../types/system/types"
import * as actions from "../actions/system/actions";


export default function* watchAuthSaga() {
  yield takeEvery('LOGIN', startLogin);
}

function* startLogin(action: LoginAction) {
  const api = new APIService("admin1@test.net", "password");
  api.setMethod("POST").setHeaders([
    {
      key: "Accept",
      value: "application/json"
    },
    {
      key:"Content-Type",
      value: "application/json"
    }
  ]);

  try {
    const body = {
      session: {
        email: action.payload.email,
        password: action.payload.password,
      }
    }

    const response = yield call(fetch, "http://localhost:3000/login", api.request(body));


    // TODO response isn't what you think it is, there's probably some function
    // that you have to run to get to the actual response data payload
    //
    // i.e   await response.json()
    //const data = response.json().then(payload => {
    //  debugger
    //  // token is available here!!!
    //});


    yield put(actions.loginSuccessful(response.token))

  } catch (error) {
    console.log("Fail");
  }
}
