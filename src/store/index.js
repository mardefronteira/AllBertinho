import { persistStore } from 'redux-persist'; 
import persist from './modules/reduxPersist';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persist(rootReducer), enhancer);

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
export default store;