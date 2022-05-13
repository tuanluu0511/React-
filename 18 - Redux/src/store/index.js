//const redux = require('redux');

import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
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

setInterval(() => {
  store.dispatch({ type: 'increment' });
  store.dispatch({ type: 'decrement' });
}, 1000);

export default store;
