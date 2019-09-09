import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from "./containers/AppContainer";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app-container")
);
