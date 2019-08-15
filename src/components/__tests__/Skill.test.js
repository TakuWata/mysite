import React from 'react';
import Skill from '../Skill';
import { createShallow } from '@material-ui/core/test-utils';

describe('<Skill /> rendering', () => {
  let wrapper;
  let shallow;
  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Skill />);
  });
  it('has 6 <Card />', () => {
    expect(wrapper.find('WithStyles(ForwardRef(Card))')).toHaveLength(6);
    expect(wrapper.find('WithStyles(ForwardRef(CardMedia))')).toHaveLength(6);
  });
});
