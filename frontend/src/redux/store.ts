import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { createHashHistory } from 'history';

import { settingsReducer } from './settings/reducer';
import { pageDataReducer } from './page-data/reducer';
import { patientsReducer } from './patients/reducer';

export const history = createHashHistory();

const rootReducer = combineReducers({
  pageData: pageDataReducer,
  settings: settingsReducer,
  patients: patientsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
