/**
 * Homework03
 * author: Jonathan Winkle (jw63)
 * CS262
 * homework should read in celebrity and celebrity sighting data from a database and 
 *    display it when prompted by buttons
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';



export default function App() {
  /** 
   * set the states to keep track of the celebrities and the sightings
   */
  const [celebrities, setCelebrities] = useState([])
  const [sightings, setSightings] = useState([])

  /** 
   * function to fetch the list of celebrities
   */
  function getCelebrity() {
    fetch(`http://192.168.1.114:3000/celebrity`)
      .then(response => response.json())
      .then(responseJson => {
        setCelebrities(responseJson)
      })
  }

  /** 
   * function to fetch the sighting data
   */
  function getSighting() {
    fetch(`http://192.168.1.114:3000/sighting`)
      .then(response => response.json())
      .then(responseJson => {
        setSightings(responseJson)
      })
  }

  /** 
   * main view of the screen
   */
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Homework 3</Text>

        <Text style={styles.header}>Celebrity</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={getCelebrity}
        >
          <Text> Get Celebrities </Text>
        </TouchableOpacity>

        <Text style={styles.header}>Sighting</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={getSighting}
        >
          <Text> Get Sightings </Text>
        </TouchableOpacity>

        <Text style={styles.header}>Celeb List</Text>

        {celebrities.map((item, index) => (
          <Text key={index}>{item.id} {item.first_name} {item.last_name}, {item.career}, {item.country}</Text>
        ))
        }

        <Text style={styles.header}>Sighting List</Text>
        {sightings.map((item, index) => (
          <Text key={index}>{item.celebrity_id} {item.celebrity_location}, {item.notes}</Text>
        ))
        }

      </View>
    </ScrollView>
  );
}

/** 
 * define styles
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    borderBottomWidth: 1,
    width: 100,
    margin: 12,
  },
  header: {
    borderBottomWidth: 1,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    margin: 4,
    width: '95%',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});