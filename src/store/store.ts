import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import watchAuthSaga from '../sagas/login';
import rootReducer from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  rootReducer,
  enhancer,
);

sagaMiddleware.run(watchAuthSaga);

export default store;
