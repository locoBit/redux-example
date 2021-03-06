import { FIND_RESULTS } from './../actions/findResults';
import items from './../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
  case FIND_RESULTS: {
    const regex = new RegExp(`^${payload}`, 'i');

    return items.filter(item => regex.test(item.title));
  }
  default:
    return state;
  }
}

export default reducer;
