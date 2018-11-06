import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'components/Card/Card';
import { mockData } from 'mocks/interviewerMock';

describe('Card', () => {
  let component, props;
  beforeEach(() => {
    props = {
      name: `${mockData.results[0].name.first} ${mockData.results[0].name.last}`,
      img: `${mockData.results[0].picture.thumbnail}`,
      location: `${mockData.results[0].location.city}`,
      currentPosition: 'currentPosition',
      id: `${mockData.results[0].login.uuid}`,
      handleBtnClick: jest.fn(),
      btnLeft: 'btnLeft',
      btnRight: 'btnRight'
    };

    component = shallow(<Card {...props} />);
  });
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('click function should have been called', () => {
    component
      .find('button')
      .at(0)
      .simulate('click');

    expect(props.handleBtnClick).toHaveBeenCalled();

    component
      .find('button')
      .at(1)
      .simulate('click');

    expect(props.handleBtnClick).toHaveBeenCalledTimes(2);
  });
});
