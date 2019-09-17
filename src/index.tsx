import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import AppContainer from "./containers/AppContainer";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app-container")
);
