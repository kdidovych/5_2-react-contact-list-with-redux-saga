import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from '@redux-devtools/extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);
export default createStore(rootReducer, composeWithDevTools(middleware));
sagaMiddleware.run(rootSaga);
