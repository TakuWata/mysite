import React from 'react';
import Inquiry from '../Inquiry';
import { createMount } from '@material-ui/core/test-utils';
import Root from '../../redux/Root';

describe('<Inquiry /> rendering', () => {
  let wrapper;
  let mount;
  beforeEach(() => {
    mount = createMount();
    wrapper = mount(
      <Root>
        <Inquiry />
      </Root>
    );
    //console.log(wrapper.debug());
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('has a <div /> and a <Typography />', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('WithStyles(ForwardRef(Typography))')).toHaveLength(1);
  });
});
