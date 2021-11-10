import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


const About = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#4F6D7A"

        />
        <Text style={styles.welcome}>
          About Impact Church Toronto
        </Text>

        <Text style={styles.instructions}>
          Located at 27 Castlefield Avenue...
        </Text>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

export default About