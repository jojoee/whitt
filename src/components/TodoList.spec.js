import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('Component: TodoList', () => {
  it('renders without crashing', () => {
    shallow(<TodoList
      todos={[]}
      onTodoClick={() => {
        
      }}
    />);
  });
});
