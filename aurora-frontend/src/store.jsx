import { applyMiddleware, createStore, compose } from 'redux';
import allReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import auroraSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(auroraSaga)

export default store;