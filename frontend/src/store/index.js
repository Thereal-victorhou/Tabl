import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import restaurant from './restaurant';
import review from './reviews';
import ratings from './ratings';
import liveSearch from './liveSearch';
import searchResults from './searchResult';
import navigation from './navigation';
import location from './location';

const rootReducer = combineReducers({
    session,
    restaurant,
    review,
    ratings,
    liveSearch,
    searchResults,
    navigation,
    location
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
};

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
