import {legacy_createStore as createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

export const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
