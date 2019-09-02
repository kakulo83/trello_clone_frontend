import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from "./containers/AppContainer";
import appReducer from "./reducers/rootReducer";

const store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("example")
);
