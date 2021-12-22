import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from './actions/sagas';
import { rootReducers } from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = reduxSaga();

export const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

// ejecuta las sagas del proyecto
sagaMiddleware.run(rootSaga);