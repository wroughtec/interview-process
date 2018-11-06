import React from 'react';
import fetchMock from 'fetch-mock';
import { render } from 'react-dom';
import { shallow, mount } from 'enzyme';
import { App } from 'app/App';
import { endpoint } from 'consts/apiEndpoints';
import { mockData } from 'mocks/interviewerMock';

describe('App', () => {
  fetchMock.get(endpoint, JSON.stringify(mockData));

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)),
    DELAY_MS = 2000;

  let component, wrapper;
  beforeEach(() => {
    component = shallow(<App />);
    wrapper = mount(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    render(<App />, div);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test(`5 cards should display in first column`, async () => {
    // Add fake delay
    await sleep(DELAY_MS);
    wrapper.update();

    expect(
      wrapper
        .find('.c-column')
        .first()
        .find('.c-card')
    ).toHaveLength(5);
  });

  test(`click button to move card`, async () => {
    // Add fake delay
    await sleep(DELAY_MS);
    wrapper.update();

    wrapper
      .find('.c-card')
      .first()
      .find('button')
      .simulate('click');

    wrapper.update();

    expect(
      wrapper
        .find('.c-column')
        .first()
        .find('.c-card')
    ).toHaveLength(4);
    expect(
      wrapper
        .find('.c-column')
        .at(1)
        .find('.c-card')
    ).toHaveLength(1);
  });

  test('reset app', async () => {
    // Add fake delay
    await sleep(DELAY_MS);
    wrapper.update();

    expect(
      wrapper
        .find('.c-column')
        .at(1)
        .find('.c-card')
    ).toHaveLength(1);

    wrapper.find('.c-app__btn').simulate('click');

    expect(
      wrapper
        .find('.c-column')
        .at(1)
        .find('.c-card')
    ).toHaveLength(0);
  });
});
