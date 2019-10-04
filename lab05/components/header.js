// example of a basic component -- creates a two-line header with a title and subtitle
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
        fontSize: 8,
        textAlign: 'center',
        margin: 1,
      },
});

export class Header extends Component {
    render() {
    return (
        //add props to the header
        <View style={styles.container}>
            <Text style={styles.headerText}>{this.props.title}</Text>
            <Text style={styles.headerText}>{this.props.subTitle}</Text>
        </View>
    );
    }
}
//make this component available to the app
export default Header;