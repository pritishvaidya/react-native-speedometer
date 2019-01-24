/* eslint radix: ["error", "as-needed"] */
/* eslint-disable react/destructuring-assignment */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

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

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: 0,
  };

  onChange = value => this.setState({ value: parseInt(value) });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={this.onChange} />
        <RNSpeedometer value={this.state.value} size={200} />
      </SafeAreaView>
    );
  }
}
