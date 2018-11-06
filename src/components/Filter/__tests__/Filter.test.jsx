import React from 'react';
import { shallow } from 'enzyme';
import { Filter } from 'components/Filter/Filter';

describe('Filter', () => {
  let component, props;
  beforeEach(() => {
    props = {
      handleChange: jest.fn(),
      filter: 'test'
    };

    component = shallow(<Filter {...props} />);
  });
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('on change function should have been called', () => {
    component.find('input').simulate('change', { currentTarget: { value: 'change' } });

    expect(props.handleChange).toHaveBeenCalled();
  });
});
