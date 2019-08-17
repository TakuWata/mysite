import React from 'react';
import Resume from '../Resume';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Resume /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Resume />);
  });
  it('has 5 <div />', () => {
    expect(wrapper.find('div')).toHaveLength(5);
  });
});
