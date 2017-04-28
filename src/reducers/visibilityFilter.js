/**
 * visibilityFilter reducer
 *
 * @param {string} state 
 * @param {VisibilityFilterAction} action 
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
