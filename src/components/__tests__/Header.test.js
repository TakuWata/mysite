import React from 'react';
import Header from '../Header';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Header /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Header />);
  });
  it('has a <div /> ', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
