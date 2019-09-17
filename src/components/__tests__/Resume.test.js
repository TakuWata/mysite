import React from 'react';
import AboutResume from '../AboutResume';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Resume /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<AboutResume />);
  });
  it('has 5 <div />', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });
});
