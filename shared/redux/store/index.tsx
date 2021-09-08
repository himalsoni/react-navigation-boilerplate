import { createStore, applyMiddleware, combineReducers } from 'redux';
import saga from 'redux-saga';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from '../reducers';
import rootSaga from '../sagas';

const middlewares = [];
const sagaMiddleware = saga();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
