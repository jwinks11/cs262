import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TestPhoto from './components/photo';
import Blinker from './components/blink';


export default function App() {

  const [text1, onText1Change] = useState('')
  const [output, onOutputChange] = useState('')
  this.state = {text: ''};

function Greeter(){
  onOutputChange('Hey '+String(text1))
}

  return (
     <View style={styles.container}>
      <Text style={styles.red}>Jonathan's Lab04 React Native test app!</Text>
      <TestPhoto />
      <Blinker />
      <TextInput value={text1} onChangeText={text => onText1Change(text)} style={{height: 40, width: 100}} placeholder="Type Name"/>
      <View style={{top: '5%', left: '-33%'}}> 
        <Button title="Greet me" onPress={Greeter}/>
      </View>
      <Text>{String(output)}</Text>
    </View>
    );
  }

const styles = StyleSheet.create({
  //add a color style
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
