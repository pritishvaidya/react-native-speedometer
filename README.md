# react-native-speedometer [![Build Status](https://travis-ci.com/pritishvaidya/react-native-speedometer.svg?branch=master)](https://travis-ci.com/pritishvaidya/react-native-speedometer) [![CodeFactor](https://www.codefactor.io/repository/github/pritishvaidya/react-native-speedometer/badge)](https://www.codefactor.io/repository/github/pritishvaidya/react-native-speedometer) [![Maintainability](https://api.codeclimate.com/v1/badges/0938f80fff81ed82c9de/maintainability)](https://codeclimate.com/github/pritishvaidya/react-native-speedometer/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0938f80fff81ed82c9de/test_coverage)](https://codeclimate.com/github/pritishvaidya/react-native-speedometer/test_coverage) [![npm version](https://badge.fury.io/js/react-native-speedometer.svg)](https://badge.fury.io/js/react-native-speedometer) [![npm downloads](https://img.shields.io/npm/dt/react-native-speedometer.svg)](https://npm-stat.com/charts.html?package=react-native-speedometer&from=2018-02-17&to=2018-12-28) <a href="https://github.com/pritishvaidya/react-native-speedometer/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>


A Customizable Speedometer Implementation in React Native


## Show Cases
![Alt Text](https://media.giphy.com/media/7SEJiywhkmM9veTlvi/giphy.gif)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Defaults](#defaults)
- [Contribution](#contribution)
- [TODOS](#todos)
- [Questions](#questions)

### Installation

```bash
$ npm i react-native-speedometer --save
```

### Basic Usage
```
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput
} from 'react-native';

import RNSpeedometer from 'react-native-speedometer'

class App extends Component {
  state = {
    value: 0,
  };

  onChange = (value) => this.setState({ value: parseInt(value) });

  render() {
     return (
        <SafeAreaView style={style.container}>
          <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={this.onChange} />
          <RNSpeedometer value={this.state.value} size={200}/>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
});
```

### Properties
| Prop  | Default  | Type | Description |
| :------------ |---------------:| :---------------| :-----|
| value | required | number | Current Value |
| size | [Default Labels](#defaults) | number | Size |
| defaultValue | 50 | number | Default Value |
| minValue | 0 | number | Minimum Limit |
| maxValue | 100 | number | Maximum Value |
| allowedDecimals | 0 | number | Allowed Decimal Places |
| easeDuration | 500| number | Ease Duration for the Needle animation |
| labels | [Default Labels](#defaults) | array | Labels List |
| needleImage | [Default Needle Image](#defaults) | string | Absolute path to the Needle Image |
| wrapperStyle | {} | object | Wrapper Style |
| outerCircleStyle   | {} | object | Outer Circle Style |
| halfCircleStyle   | {} | object | Half Circle Style |
| imageWrapperStyle | {} | object | Needle Image Wrapper Style |
| imageStyle | {} | object | Needle Image Style |
| innerCircleStyle | {} | object | Inner Circle Style |
| labelWrapperStyle | {} | object | Label Wrapper Style |
| labelStyle | {} | object | Label Style |
| labelNoteStyle | {} | object | Label Note Style |

### Defaults
```
  size: deviceWidth - 20,
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  labels: [
    {
      name: 'Too Slow',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      name: 'Very Slow',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      name: 'Slow',
      labelColor: '#f4ab44',
      activeBarColor: '#f4ab44',
    },
    {
      name: 'Normal',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      name: 'Fast',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      name: 'Unbelievably Fast',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  needleImage: require('./images/speedometer-needle.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
```

## Contribution

- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## TODOS
- Provision to remove `labels` and `labelIndex`.
- Unequal Split of chart (Need Help)

## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.co) or [create an issue](https://github.com/pritishvaidya/react-native-speedometer/issues/new)
