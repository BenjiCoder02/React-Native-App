import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import * as Linking from "expo-linking";
import YoutubePlayer from "react-native-youtube-iframe";
import AnimatedLoader from "react-native-animated-loader"
import { homeAPI, registerPushToken, youtubeLink } from "../Constants/API";

import { registerForPushNotificationsAsync } from "../NotificationHandler/Notification";
import axios from "axios";


const Home = ({ navigation }) => {
  const [src, setVideoSrc] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [playing, setPlaying] = useState(false);

  const registerForNotifications = () => {

    registerForPushNotificationsAsync().then(token =>
      axios.post(registerPushToken, { token: token })

    );

  }

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
    Linking.openURL(youtubeLink)
  }

  const handleLogin = () => {
    navigation.navigate("Login")
  }

  const getSrc = () => {
    let data, arr;
    axios.get(homeAPI).then(res => {
      data = res.data;
      arr = data.items;
      arr.map(ele => {
        setVideoSrc(prevState => {
          return [...prevState, ele.contentDetails.videoId]
        })
      })
    })
      .catch(err => {
        console.log(err)
      })

    setIsLoaded(true)
    return data
  }

  useEffect(() => {

    getSrc()
    registerForNotifications();




  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {!isLoaded ?
        <AnimatedLoader visible={true}
          overlayColor="none"
          source={require("../assets/loader.json")}
          animationStyle={{ height: 100, width: 100 }}
          speed={1}
          loop={true}
        />

        :
        <>
          <View style={styles.imageView}>
            <Image source={require("../assets/impact_church_logo.png")} style={styles.logo} />
            {/*<Pressable onPress={handleLogin}>
                <View style={styles.login}><Text style={{ color: 'white', fontWeight: '700' }}>Login</Text></View>
            </Pressable>*/}
          </View>


          <ScrollView style={{ paddingHorizontal: "10%" }}>

            <Image source={require("../assets/love_god_love_people.jpg")} style={styles.image} />

            <Pressable onPress={handlePress} style={styles.Pressable}>
              <Image source={require("../assets/Service_Link.png")} style={styles.image} />
            </Pressable>


            {src.map((ele, idx) => {
              return (
                <View style={{ marginVertical: 20 }} key={idx}>
                  <YoutubePlayer height={200} width={335}
                    play={playing}
                    videoId={ele}
                    onChangeState={onStateChange}
                  />
                </View>
              )

            })}


          </ScrollView >
        </>

      }
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  imageView: {
    flexDirection: 'row',
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
    resizeMode: "contain"
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
  },
  login: {
    marginRight: 25,
    height: 35,
    width: 75,
    color: 'white',
    fontWeight: "500",
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#3D8991',
    backgroundColor: '#3D8991',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default Home