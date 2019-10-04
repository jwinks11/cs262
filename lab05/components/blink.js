// example of a basic component that uses states
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// define your styles
const styles = StyleSheet.create({

    blinkerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 1,
      },
});

export class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        // below is milisecond interval for which to toggle state    
        }, 1000);
    }

    render() {
        // display text if isShowingText is True and make the text displayed a prop
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
          <Text style={styles.blinkerText}>{display}</Text>
        );
      }
}

export default Blink;