import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground
} from 'react-native';
import { DataTable } from "react-native-paper";
import axios from "axios"


const About = ({ navigation }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getSrc = () => {
      axios.get("https://impact-toronto-react-native.herokuapp.com/rest/v1/events")
        .then((res) => {
          const data = res.data;

          setEvents(data)

          return data
        })
        .catch((error) => {
          alert(error + "err")
        }
        )
    }

    getSrc()
  }, [])

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

        <View style={styles.events}>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Day</Text></DataTable.Title>
              <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Time</Text></DataTable.Title>
              <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Event</Text></DataTable.Title>
            </DataTable.Header>
            {events.map((el, idx) => {
              return (
                <>
                  <DataTable.Row key={idx}>
                    <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.day}</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.timeOfEvent}</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.eventName}</Text></DataTable.Cell>
                  </DataTable.Row>

                </>

              )
            })}
          </DataTable>
        </View>
      </View>

    </>
  )
}


const styles = StyleSheet.create({

  events: {
    height: 300,
    width: "100%"
  },
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  header: {
    color: 'white',
    fontSize: 25
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