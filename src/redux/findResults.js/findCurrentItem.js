export const type = 'FIND_CURRENT_ITEM';

const findCurrentItem = id => {
  return {
    type,
    payload: id
  };
};

export default findCurrentItem;
