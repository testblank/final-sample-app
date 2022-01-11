import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '@redux/rootReducer';
import rootSaga from '@redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(...middlewares),
    // devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
