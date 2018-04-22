import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoAll from './components/info/info_all';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello all</Text>
        <InfoAll />
      </View>
    );
  }
}

