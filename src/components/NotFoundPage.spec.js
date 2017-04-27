import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should have a header called \'NotFoundPage\'', () => {
    const wrapper = shallow(<NotFoundPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'NotFoundPage';

    expect(actual).toEqual(expected);
  });
});
