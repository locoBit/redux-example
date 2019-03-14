import { FIND_CURRENT_ITEM } from './../actions/findCurrentItem';
import items from './../../data/items';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
  case FIND_CURRENT_ITEM: {
    const currentItem = items.find(item => item.id == payload);

    return currentItem;
  }
  default:
    return state;
  }
}

export default reducer;
