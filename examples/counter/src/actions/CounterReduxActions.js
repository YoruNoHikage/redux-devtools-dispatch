import { createAction } from 'redux-actions';

export const increment = createAction('INCREMENT_COUNTER');
export const decrement = createAction('DECREMENT_COUNTER', payload => payload, ({meta}) => meta);
