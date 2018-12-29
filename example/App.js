import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import RNSpeedometer from 'react-native-speedometer';

export default class App extends React.Component {
  state = {
    value: 0,
  }

  onChange = value => this.setState({ value: parseInt(value) })

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={this.onChange} />
        <RNSpeedometer value={this.state.value} />
      </View>
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
