/* started doing the android app homework on accident
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker} from 'react-native';

export default function App() {

  const [choice, onChoiceChange] = useState("http://")
  const [url, onURLChange] = useState('')

  return (
    <View style={styles.container}>
      <TextInput value={url} onChangeText={text => onURLChange(text)} 
      style={styles.textInput} />
      <Picker
        selectedValue={choice}
        style={styles.picker}
        itemStyle={{height: 44}}
        onValueChange={(itemValue) =>
          onChoiceChange(itemValue)
        }
        >
        <Picker.Item label="http://" value="http://" />
        <Picker.Item label="https://" value="https://" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
  },
  picker: {
  top: '10%', 
  height: '50%', 
  width: '30%'
  },
  textInput: {
  top: '10%', 
  borderWidth: 1, 
  height: '10%', 
  width: '75%'
  }
});
*/


/* Jonathan Winkle
// Homework02
// using react native navigation
*/
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// add a home screen
// add a button on the home screen that navigates you to the details page
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

// add a details screen
// add another details button to show navigating to the same page does nothing
// change the navigate to a push in order to push to a new details page
// add a custom goback button and a go to home button
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

// creates a stack navigator, takes a route configuration object
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

//returns a react component to take as a parameter the react component created by createStackNavigator
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}