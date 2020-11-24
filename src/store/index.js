import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSagas);

export default store;