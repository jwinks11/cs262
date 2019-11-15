/**
 * Jonathan Winkle
 * Homework02
 * using react native navigation
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/** 
 * Adding a home screen
 * Include a button on the home screen that navigates you
 * Use the prop example for navigation to the details page
*/
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

/** 
 * Adding a details screen
 * Include another details button to show navigating to the same page does nothing
 * Change the navigate to a push in order to push to a new details page
 * Include a custom goback button and a go to home button
 */
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

/** 
 * Create a stack navigator that takes a route configuration object
 */
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

/** returns a react component to take as a parameter the react component created by createStackNavigator
 */
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}