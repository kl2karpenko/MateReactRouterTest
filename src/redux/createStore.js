import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { routerMiddleware, routerReducer } from 'react-router-redux';
import history from './history';

import {
  GET_ENTRY_DATA,
  GET_NAVIGATION_LIST,
  SET_ACTIVE_ENTRY_TYPE
} from './actionTypes';

const initialState = {
  app: {
    navList: {},
    entry: {
      active: 'people'
    }
  },
  routing: {}
};

const enhancer = compose(
  applyMiddleware(
    routerMiddleware(history)
  ),
  devToolsEnhancer()
);

function appReducer(state = initialState, action) {
  console.log(action, ' action dispatched in redux');
  // { type: `actionTypes`, payload: {  } }

  switch (action.type) {
    case GET_NAVIGATION_LIST:
      return {
        ...state,
        navList: action.payload.data
      };

    case GET_ENTRY_DATA:
      return {
        ...state,
        entry: {
          ...state.entry,
          ...action.payload.data
        }
      };

    case SET_ACTIVE_ENTRY_TYPE:
      return {
        ...state,
        entry: {
          ...state.entry,
          active: action.payload.active
        }
      };

    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    app: appReducer,
    routing: routerReducer
  }),
  initialState,
  enhancer
);

export default store;