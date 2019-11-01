import React, {useState} from 'react';
import { Text, ScrollView, View, StyleSheet, TextInput, Button } from 'react-native';

export default function App(){

  // use two states, one for the noun search key and one for the returned list of adjectives
  const [searchKey, onSearchKeyChange] = useState('');
  const [result, onResultChange] = useState([]);

  function search() {
  // fetch the list of 
  fetch(`https://api.datamuse.com/words?rel_jjb=${searchKey}`)
  // use the ocean example to test fetch 
  // fetch('https://api.datamuse.com/words?rel_jjb=ocean')
    .then(data => data.json())
    .then(dataJson => {
      onResultChange(dataJson)
      })
  }
  // take the input noun and change the state, then fetch the list of adjectives when the search button is pressed
  return(
    <ScrollView>
      <View style={styles.container}>
        <TextInput value={searchKey} onChangeText={text => onSearchKeyChange(text)} style={{height: 55, width: 100}} placeholder="Type Noun"/>
        <Button title="get adjectives" onPress={search} />
        {result.map((item, index) => (
          <Text key={index}>{item.word}</Text>
        ))
        }
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

