import React from 'react';
import { shallow } from 'enzyme';
import TodoPage from './TodoPage';

describe('Component: TodoPage', () => {
  it('should have a header: TodoPage', () => {
    const wrapper = shallow(<TodoPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'TodoPage';

    expect(actual).toEqual(expected);
  });
});
