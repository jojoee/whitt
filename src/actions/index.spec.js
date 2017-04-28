import * as actions from './index';

describe('Actions: addTodo', () => {
  it('should create action', () => {
    expect(actions.addTodo('First')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'First',
    });

    expect(actions.addTodo('Second')).toEqual({
      type: 'ADD_TODO',
      id: 1,
      text: 'Second',
    });
  });
});

describe('Actions: setVisibilityFilter', () => {
  it('should create action', () => {
    expect(actions.setVisibilityFilter('SHOW_ACTIVE')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ACTIVE',
    });
  });
});

describe('Actions: toggleTodo', () => {
  it('should create action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    });
  });
});
