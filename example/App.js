import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Speedometer from 'react-native-speedometer';

export default class App extends React.Component {
  state = {
    value: 0,
  }

  onChange = value => this.setState({ value })

  render() {
    return (
      <View style={styles.container}>
        <TextInput autoFocus style={styles.textInput} onChangeText={this.onChange} />
        <Speedometer value={this.state.value} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  textInput: {
    marginHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
