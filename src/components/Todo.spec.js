import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('Component: Todo', () => {
  it('renders without crashing', () => {
    shallow(<Todo
      onClick={() => {

      }}
      isCompleted={true}
      text="First"
    />);
  });
});
