import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import DevTools from './DevTools';

export const store = createStore(
    reducers,
    DevTools.instrument(), 
    applyMiddleware(thunk),
);