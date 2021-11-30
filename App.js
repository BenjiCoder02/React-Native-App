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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./Screens/Home";
import About from "./Screens/About"
import Give from "./Screens/Give"

import { Header } from "react-native-elements"
import 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import NotificationSystem from './NotificationHandler/Notification';
import Login from './Screens/Login';
import Notes from './Screens/Notes';
import AllNotes from './Screens/AllNotes';

const Stack = createNativeStackNavigator();

function NotesNav() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="AllNotes" component={AllNotes} />
    </Stack.Navigator>

  )
}

const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarHideOnKeyboard: true
      }}>

        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Entypo name="home" size={size} color={focused === true ? '#3D8991' : 'gray'} />
              )
            }
          }} />
        <Tab.Screen name='About' component={About}
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Entypo name="info" size={size} color={focused === true ? '#3D8991' : 'gray'} />
              )
            }
          }} />
        <Tab.Screen name='Give' component={Give}
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <FontAwesome5 name="donate" size={size} color={focused === true ? '#3D8991' : 'gray'} />
              )
            }
          }} />
        <Tab.Screen name='Notes' component={NotesNav}
          options={{
            tabBarActiveTintColor: "black",
            headerShown: false,

            tabBarIcon: ({ size, focused, color }) => {
              return (
                <FontAwesome name="sticky-note" size={size} color={focused === true ? '#3D8991' : 'gray'} />
              )
            }
          }} />

        <Tab.Screen name="Login" component={Login}
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Entypo name="login" size={size} color={focused === true ? '#3D8991' : 'gray'} />
              )
            }
          }} />


      </Tab.Navigator>

    </NavigationContainer>

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