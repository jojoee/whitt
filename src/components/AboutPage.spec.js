import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('Component: AboutPage', () => {
  it('should have a header: AboutPage', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'AboutPage';

    expect(actual).toEqual(expected);
  });
});
