import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should have a header called \'Dashboard\'', () => {
    const wrapper = shallow(<Dashboard />);
    const actual = wrapper.find('h2').text();
    const expected = 'Dashboard';

    expect(actual).toEqual(expected);
  });
});
