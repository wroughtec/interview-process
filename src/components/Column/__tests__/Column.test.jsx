import React from 'react';
import { shallow } from 'enzyme';
import { Column } from 'components/Column/Column';
import { mockData } from 'mocks/interviewerMock';

describe('Column', () => {
  it('should render correctly with', () => {
    const props = {
      title: 'title',
      data: [mockData.results[0]],
      currentPosition: 'currentPosition',
      filter: '',
      filterBy: '',
      btnRight: 'btnRight',
      btnLeft: 'btnLeft',
      handleBtnClick: Function
    };
    const component = shallow(<Column {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with city filter', () => {
    const props = {
      title: 'title',
      data: [mockData.results[0]],
      currentPosition: 'currentPosition',
      filter: 'city',
      filterBy: 'city',
      btnRight: 'btnRight',
      btnLeft: 'btnLeft',
      handleBtnClick: Function
    };
    const component = shallow(<Column {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with name filter', () => {
    const props = {
      title: 'title',
      data: [mockData.results[0]],
      currentPosition: 'currentPosition',
      filter: 'first',
      filterBy: 'name',
      btnRight: 'btnRight',
      btnLeft: 'btnLeft',
      handleBtnClick: Function
    };
    const component = shallow(<Column {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('no data render', () => {
    const props = {
      title: 'title',
      data: [],
      currentPosition: 'currentPosition',
      filter: 'first',
      filterBy: 'name',
      btnRight: 'btnRight',
      btnLeft: 'btnLeft',
      handleBtnClick: Function
    };
    const component = shallow(<Column {...props} />);
    expect(component).toMatchSnapshot();
  });
});
