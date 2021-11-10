import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert
} from 'react-native';
import * as Linking from "expo-linking";
import YoutubePlayer from "react-native-youtube-iframe";






const Home = ({ navigation }) => {

  const [playing, setPlaying] = useState(false);


  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert("Video has finished playing!")
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, [])

  const handlePress = () => {
    Linking.openURL("https://www.youtube.com/c/ImpactChurchTO/featured")
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../assets/impact_church_logo.png")} style={styles.logo} />
      </View>
      {/*------------------------*/}
      <ScrollView style={{ paddingHorizontal: "10%" }}>
        <Pressable onPress={handlePress} style={styles.Pressable}>
          <Image source={require("../assets/love_god_love_people.jpg")} style={styles.image} />
        </Pressable>
        <Pressable onPress={handlePress} style={styles.Pressable}>
          <Image source={require("../assets/Service_Link.png")} style={styles.image} />
        </Pressable>

        {/*----------------------- */}
        <View style={{ marginVertical: 20 }}>

          <YoutubePlayer height={200} width={'auto'}
            play={playing}
            videoId={"xbgjkcAy6r0"}
            onChangeState={onStateChange}
          />
        </View>

        {/*------------------------*/}

        {/*------------------------*/}

      </ScrollView >


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: 'auto'
  },
  logo: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain'
  },
  image: {
    height: 200,
    width: 'auto',
    resizeMode: "contain",
  },
  container: {
    backgroundColor: '#4F6D7A',
    height: '100%'
  },
  Pressable: {
    marginVertical: 10
  },
  item: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 25,
  },
  viewBlocks: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: "rgb(43,52,56)",
    marginHorizontal: 0,
    height: 200,
    marginVertical: 20
  }

});

export default Home