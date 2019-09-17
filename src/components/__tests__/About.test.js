import React from 'react';
import About from '../About';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Resume /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<About />);
  });
  it('has 1 <div /> and 6 <Paper />', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Paper))')).toHaveLength(6);
    expect(wrapper.find('ReduxForm')).toHaveLength(1);
  });
});
