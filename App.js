import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image
} from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Screens/Home";
import About from "./Screens/About"
import Give from "./Screens/Give"
import { Header } from "react-native-elements"
import 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
/*import { Provider } from "react-redux"
import store from "./Store/Store"
*/


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  return (
    //<Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: config => <Entypo
            size={23}
            name="home"
          ></Entypo>
        }} />
        <Drawer.Screen name="About" component={About} options={{
          drawerIcon: config => <Feather name="info" size={24} color="black" />
        }} />
        <Drawer.Screen name="Give" component={Give} options={{
          drawerIcon: config => <FontAwesome5 name="donate" size={24} color="black" />
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
    //</Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  logo: {
    resizeMode: 'cover',
    height: 25
  }
});

registerRootComponent(App)