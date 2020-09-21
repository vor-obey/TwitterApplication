import {applyMiddleware, compose, createStore} from "redux";

import {persistStore} from "redux-persist";

import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import {rootSaga } from "./rootSaga";

let saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export const persistor = persistStore(store);

saga.run(rootSaga);

export default {store, persistor};