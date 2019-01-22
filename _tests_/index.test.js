/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import TestRenderer from 'react-test-renderer';
import RNSpeedometer from '../src';

describe('Main Component Tests', () => {
  const value = 50;

  describe('check prop types', () => {
    it('should throw an error if value is not specified', () => {
      expect(
        checkPropTypes(
          RNSpeedometer.propTypes,
          {
            value: null,
          },
          'prop',
          RNSpeedometer.value,
        ),
      ).toBe('Failed prop type: The prop `value` is marked as required in `<<anonymous>>`, but its value is `null`.');
    });
  });

  describe('main component details', () => {
    const componentTestRenderer = TestRenderer.create(<RNSpeedometer
      value={value}
    />);

    const wrapper = componentTestRenderer.toJSON();
    it('should render the component correctly', () => {
      expect(componentTestRenderer).toMatchSnapshot();
    });

    it('should add the styles correctly', () => {
      expect(wrapper.props.style).toBeArray();
    });

    it('should contain a wrapper view ', () => {
      expect(wrapper.type).toBe('View');
    });

    it('should contain a array of children layouts ', () => {
      expect(wrapper.children).toBeArray();
    });
  });
});
