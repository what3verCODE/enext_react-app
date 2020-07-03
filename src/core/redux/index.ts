import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { compose, applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { combineReducers } from 'redux';

import sagas from '../redux-saga';
import {rootReducer} from "./reducers";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(sagas);

export default store;

