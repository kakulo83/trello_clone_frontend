import { takeEvery, put } from 'redux-saga/effects';
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

    const json = yield fetch("http://localhost:3000/login",
      api.request(body)).then(response => response.json())

    yield put(actions.loginSuccessful(json.token))

  } catch (error) {
    console.log(error)
    console.log("Fail");
  }
}
