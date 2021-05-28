/* eslint-disable require-jsdoc */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

export function configureStore() {
    const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware()));
    return store;
}
