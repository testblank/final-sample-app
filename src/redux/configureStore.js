import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '@/redux/rootReducer';
import rootSaga from '@/redux/rootSaga';


const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, logger];

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false }).concat(...middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store;
};

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(...middleware),
//     devTools: process.env.NODE_ENV !== 'production',
// });

// sagaMiddleware.run(rootSaga);

export const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== 'production',
});
