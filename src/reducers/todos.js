/**
 * todo reducer
 * 
 * @param {TodoState} state
 * @param {TodoAction} action
 * @returns {TodoState}
 */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        isCompleted: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        isCompleted: !state.isCompleted
      };
    default:
      return state;
  }
};

/**
 * todos reducer
 * 
 * @param {TodoState[]} state
 * @param {TodoAction} action
 * @returns {TodoState[]}
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
