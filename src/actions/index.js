let nextTodoId = 0;

/**
 * addTodo action
 * 
 * @param {string} text 
 */
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

/**
 * toggleTodo action
 * 
 * @param {number} id 
 */
const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

/**
 * setVisibilityFilter action
 * 
 * @param {string} filter 
 */
const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
};
