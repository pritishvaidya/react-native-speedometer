/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
/* eslint radix: ["error", "as-needed"] */
import React, { Component } from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Utils
import calculateDegreeFromLabels from './utils/calculate-degree-from-labels';
import calculateLabelFromValue from './utils/calculate-label-from-value';
import limitValue from './utils/limit-value';

// Style
import style, { width as deviceWidth } from './style';

// eslint-disable-next-line react/prefer-stateless-function
class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.speedometerValue = new Animated.Value(props.defaultValue);
  }

  render() {
    const {
      value,
      minValue,
      maxValue,
      easeDuration,
      labels,
      needleImage,
      wrapperStyle,
      outerCircleStyle,
      imageWrapperStyle,
      imageStyle,
      innerCircleStyle,
      labelWrapperStyle,
      labelStyle,
      labelNoteStyle,
    } = this.props;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
      limitValue(value, minValue, maxValue), labels, minValue, maxValue,
    );
    Animated.timing(
      this.speedometerValue,
      {
        toValue: limitValue(value, minValue, maxValue),
        duration: easeDuration,
        easing: Easing.linear,
      },
    ).start();

    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });
    return (
      <View style={[style.wrapper, wrapperStyle]}>
        <View style={[style.outerCircle, outerCircleStyle]}>
          {labels.map((level, index) => {
            const circleDegree = 90 + (index * perLevelDegree);
            return (
              <View
                key={labels.name}
                style={[style.halfCircle, {
                  backgroundColor: level.activeBarColor,
                  transform: [
                    { translateX: deviceWidth / 4 - 5 },
                    { rotate: `${circleDegree}deg` },
                    { translateX: (deviceWidth / 4 * -1 - 5) },
                  ],
                }]}
              />
            );
          })}
          <Animated.View style={[style.imageWrapper, imageWrapperStyle, {
            transform: [{ rotate }],
          }]}
          >
            <Image style={[style.image, imageStyle]} source={needleImage} />
          </Animated.View>
          <View style={[style.innerCircle, innerCircleStyle]} />
        </View>
        <View style={[style.labelWrapper, labelWrapperStyle]}>
          <Text style={
            [style.label, labelStyle]}
          >
            {limitValue(value, minValue, maxValue)}
          </Text>
          <Text style={
            [style.labelNote, { color: label.labelColor }, labelNoteStyle]}
          >
            {label.name}
          </Text>
        </View>
      </View>
    );
  }
}

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  labels: [
    {
      name: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      name: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      name: 'So-so',
      labelColor: '#f4ab44',
      activeBarColor: '#f4ab44',
    },
    {
      name: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      name: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      name: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  needleImage: require('./images/speedometer-needle.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
};

Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
};

export default Speedometer;
