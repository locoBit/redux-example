export const FIND_RESULTS = 'FIND_RESULTS';

const findResults = text => {
  return {
    type: FIND_RESULTS,
    payload: text
  };
};

export default findResults;
