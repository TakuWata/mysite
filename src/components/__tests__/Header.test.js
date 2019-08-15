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
  it('has a <div /> and a <Typography />', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Typography))')).toHaveLength(1);
  });
});
