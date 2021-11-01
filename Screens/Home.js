import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
} from 'react-native';


const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/impact_church_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text>Impact Church Toronto</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#4F6D7A'
  },
  logo: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },

});

export default Home