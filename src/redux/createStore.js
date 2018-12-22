import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// import { routerReducer } from 'react-router-redux'

import {
  GET_ENTRY_DATA,
  GET_NAVIGATION_LIST
} from './actionTypes';

const initialState = {
  navList: {},
  entry: {}
};

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
        entry: action.payload.data
      };

    default:
      return state;
  }
}

const store = createStore(
  appReducer,
  devToolsEnhancer()
);

export default store;