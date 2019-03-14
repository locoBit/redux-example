export const FIND_CURRENT_ITEM = 'FIND_CURRENT_ITEM';

const findCurrentItem = id => {
  return {
    type: FIND_CURRENT_ITEM,
    payload: id
  };
};

export default findCurrentItem;
