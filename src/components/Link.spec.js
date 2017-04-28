import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Component: Link', () => {
  it('renders without crashing', () => {
    shallow(<Link
      isActive={true}
      onClick={() => {

      }}
      children="All"
    />);
  });
});
