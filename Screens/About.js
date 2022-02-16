import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { DataTable } from "react-native-paper";
import axios from "axios"
import AnimatedLoader from "react-native-animated-loader";
import { eventsAPI } from "../Constants/API";


const About = ({ navigation }) => {
  const [events, setEvents] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const getSrc = () => {
      axios.get(eventsAPI)
        .then((res) => {
          const data = res.data;

          setEvents(data)
          setIsLoaded(true)

          return data
        })
        .catch((error) => {
          setIsLoaded(false)
          alert(error + "err")
        }
        )
    }

    getSrc()
  }, [])

  const hourConverter = (hour) => {
    let hourInt = parseInt(hour)
    let adjustedHour = hourInt - 12

    return (hourInt > 12 ? adjustedHour : hour)
  }

  const AM_PMConverter = (hour) => {
    let hourInt = parseInt(hour)
    if (hourInt > 11) {
      return "PM"
    }
    else if ((hourInt === 0 || 24) || (hourInt < 11)) {
      return "AM"
    }
  }


  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#4F6D7A"

        />
        <View style={styles.top}>

          <Text style={{ textAlign: "center", color: 'white', fontSize: 35, fontWeight: '900' }}>SERVICES</Text>

        </View>

        {!isLoaded ? <>
          <AnimatedLoader visible={true}
            overlayColor="none"
            source={require("../assets/loader.json")}
            animationStyle={{ height: 100, width: 100 }}
            speed={1}
            loop={true}
          />
        </>
          :


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
                    <DataTable.Row>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.day}</Text></DataTable.Cell>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{hourConverter(el.hourOfEvent) + " : " + el.minuteOfEvent + " " + AM_PMConverter(el.hourOfEvent)}</Text></DataTable.Cell>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.eventName}</Text></DataTable.Cell>
                    </DataTable.Row>

                  </>

                )
              })}
            </DataTable>
          </View>
        }
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
    justifyContent: "center",
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