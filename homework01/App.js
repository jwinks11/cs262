/**
 * Homework01
 * CS262
 * Calculator app -- this app receives two values in a textbox, allows 
 *                   the user to choose the operation and then calculates
 *                   the result upon a button press
 * @author Jonathan Winkle (jw63)
 */
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker} from 'react-native';

export default function App() {
  /**
  * Create the states that will store the inputs, operator, and output   
  */
  const [input1, onInput1Change] = useState('')
  const [input2, onInput2Change] = useState('')
  const [operator, onOperatorChange] = useState('+')
  const [output, onOutputChange] = useState('')

  /**
  * Create the fuction to calculate the results of the operation on the inputs  
  */
  function calculate() {
    switch(operator) {
      case "+":
        onOutputChange(String(parseInt(input1) + parseInt(input2)))
        break;
      case "-":
        onOutputChange(String(parseInt(input1) - parseInt(input2)))
        break;
      case "*":
        onOutputChange(String(parseInt(input1) * parseInt(input2)))
        break;
      case "/":
        onOutputChange(String(parseInt(input1) / parseInt(input2)))
        break;
    }
  }

  /**
  * Return a view with the two inputs received by textinput boxes and style them,
  *     a picker to store the different operator options, a button that calls the 
  *     calculate function and then a text box to display the result   
  */
  return (
    <View style={styles.container}>
      <TextInput value={input1} onChangeText={text => onInput1Change(text)} style={{top: '10%', borderWidth: 1, height: '10%', width: '75%'}} keyboardType="numeric"/>
      <TextInput value={input2} onChangeText={text => onInput2Change(text)} style={{ top: '20%', borderWidth: 1, height: '10%', width: '75%'}} keyboardType="numeric"/>
      <Picker
        selectedValue={operator}
        style={{top: '30%', height: '50%', width: '20%'}}
        itemStyle={{height: 44}}
        onValueChange={(itemValue, itemIndex) => onOperatorChange(itemValue)
        }
      >   
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>
      <View style={{top: '5%', left: '-33%'}}> 
        <Button title="Calculate" onPress={calculate}/>
      </View>
      <Text style={{top: '5.5%', borderWidth: 1}}>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
