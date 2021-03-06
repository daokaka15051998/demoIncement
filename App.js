/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';

import Counter from './src/Counter';

import { createStore } from "redux";
import { Provider } from "react-redux";


const initialState = {
  count: 0
};


function reducer(state = initialState, action) {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store} >
      <Counter />
    </Provider>
  );
};

export default App;
