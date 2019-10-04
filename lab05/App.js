import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { ContainerDemo } from './components/containerDemo';
import Blink from './components/blink';

export default function App() {
  return (
    // 1. add Header component to screen
    // 2. edit header.js to add props and add title and subtitle as the props
    // 3. replace View with the created container component
    // 4. use the Blink class built with the toggling state and set the text prop
    // 5. create custom style in header.js and blink.js
    // 6. create custom style for welcome text in App.js 
    <ContainerDemo style={styles.container}>
      <Header title="React Native Lab05" subTitle="Jonathan Winkle"/>
      <Text style={styles.welcome}>Welcome!</Text>
      <Blink style={styles.blinker} text='Text blinking on state switching'/>
    </ContainerDemo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 100,
  },
});
