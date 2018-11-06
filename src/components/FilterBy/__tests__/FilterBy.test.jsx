import React from 'react';
import { shallow } from 'enzyme';
import { FilterBy } from 'components/FilterBy/FilterBy';

describe('FilterBy', () => {
  let component, props;
  beforeEach(() => {
    props = {
      handleChange: jest.fn(),
      filterBy: 'test'
    };

    component = shallow(<FilterBy {...props} />);
  });
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('on change function should have been called', () => {
    component.find('select').simulate('change', { currentTarget: { value: 'city' } });

    expect(props.handleChange).toHaveBeenCalled();
  });
});
