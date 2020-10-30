import React, { Component } from 'react';
import { Text, TextInput, View ,StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Appnavigation from './Navigation/Appnavigation';
// import Lab1 from './Screen/Lab1';
import Lab2 from './Screen/Lab2';


export default class App extends Component {
  render() {
    return (
      <Appnavigation/>
    );
  }
}
