import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index.js';

export default createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);