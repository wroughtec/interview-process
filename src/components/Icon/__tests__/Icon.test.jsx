import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../Icon';

describe('Icon', () => {
  const defaultProps = {
    iconId: 'iconId',
    iconClass: 'iconClass',
    iconSize: ''
  };

  const generateProps = ({ iconId, iconClass, iconSize }) => ({
    iconId,
    iconClass,
    iconSize
  });

  test('Renders', () => {
    const props = generateProps(defaultProps);
    const component = shallow(<Icon {...props} />);

    expect(component).toMatchSnapshot();
  });

  test('Class is correct', () => {
    const props = generateProps(defaultProps);
    const component = shallow(<Icon {...props} />);

    expect(component.find('svg').hasClass(defaultProps.iconClass));
  });
});
