//const redux = require('redux');

import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
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
