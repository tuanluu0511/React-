//const redux = require('redux');

import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
}

const store = createStore(counterReducer);

const counterSubscribe = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscribe);

export default store;
