import React from 'react';
import Greeting from '../Greeting';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Greeting /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Greeting />);
  });
  it('has a <div /> and 2 <Typography />', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Typography))')).toHaveLength(2);
  });
});
