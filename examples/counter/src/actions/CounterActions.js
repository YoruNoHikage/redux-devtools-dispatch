import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function add(...rest) {
  const compute = rest.concat([0]).reduce((prev, next) => prev + next);
  const action = compute < 0 ? decrement() : increment();
  return dispatch => {
    Array.apply(null, Array(Math.abs(compute))).forEach(() => dispatch(action));
  };
}
