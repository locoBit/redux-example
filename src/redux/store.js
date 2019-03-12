import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import sugestions from './reducers/sugestions';
import currentitem from './reducers/currentitem';

const reducer = combineReducers({
  results,
  sugestions,
  currentitem,
});

const store = createStore(reducer);

export default store;
