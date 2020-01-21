import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import filmsReducers from './films/filmsReducers';
import modalReducers from './modal/modalReducers';

const rootReducer = combineReducers({
  films: filmsReducers,
  modal: modalReducers,
});

// const enhanser = applyMiddleware(logger);

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
