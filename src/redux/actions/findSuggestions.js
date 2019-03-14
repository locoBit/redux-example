export const FIND_SUGGESTIONS = 'FIND_SUGGESTIONS';

const findSuggestions = text => {
  return {
    type: FIND_SUGGESTIONS,
    payload: text
  };
};

export default findSuggestions;
