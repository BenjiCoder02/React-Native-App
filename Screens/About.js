import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground
} from 'react-native';


const About = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#4F6D7A"

        />
        <View style={styles.top}>
          <ImageBackground style={styles.background} source={require("../assets/image-asset.jpeg")} resizeMode={'cover'}>
            <Text style={{ textAlign: "center", color: 'white', fontSize: 35, fontWeight: '900' }}>SERVICES</Text>
          </ImageBackground>
        </View>
        <Text style={styles.header}>
          SUNDAYS
        </Text>

        <Text style={styles.instructions}>
          Sunday : 10:30AM
        </Text>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  header: {
    color: 'white',
    fontSize: 25,
  },
  top: {

    height: 100,
    width: "100%"
  },
  background: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  instructions: {
    color: 'white'
  }

});

export default About