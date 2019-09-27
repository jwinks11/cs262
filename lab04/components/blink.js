//create a component to make blinking text to learn how to use states
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
export default class Blinker extends Component {
    render() {
      return (
        <View>
          <Blink text='I learned how states work'/>
        </View>
      );
    }
  }