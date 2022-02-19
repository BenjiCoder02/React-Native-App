import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { DataTable } from "react-native-paper";
import axios from "axios"
import AnimatedLoader from "react-native-animated-loader";
import { eventsAPI, verseOfTheDayAPI } from "../Constants/API";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const About = ({ navigation }) => {
  const [events, setEvents] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [verse, setVerse] = useState("")
  const [chapter, setChapter] = useState("")
  const [bookOf, setBookOf] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const getSrc = () => {
      getVerseOfTheDay()
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

  const getVerseOfTheDay = () => {
    axios.get(verseOfTheDayAPI).then(res => {
      let verseOfTheDay = res.data[0]
      setChapter(verseOfTheDay.chapter)
      setVerse(verseOfTheDay.verse)
      setBookOf(verseOfTheDay.bookOf)
      setContent(verseOfTheDay.content)
    })
  }


  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: '#4F6D7A', }}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#4F6D7A"

      />{
        <View style={styles.top}>
          <Text style={{ textAlign: "center", color: 'white', fontSize: 25, fontWeight: '600' }}>Events</Text>
        </View>
      }

      {!isLoaded ?
        <>
          <AnimatedLoader visible={true}
            overlayColor="none"
            source={require("../assets/loader.json")}
            animationStyle={{ height: 100, width: 100 }}
            speed={1}
            loop={true}
          />
        </>
        :
        <ScrollView style={{ height: "auto", width: "100%", paddingHorizontal: "5%" }}>
          <View style={styles.events}>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginVertical: 10 }}>Events</Text>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Day</Text></DataTable.Title>
                <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Time</Text></DataTable.Title>
                <DataTable.Title><Text style={{ color: "white", fontWeight: "600" }}>Event</Text></DataTable.Title>
              </DataTable.Header>
              {events.map((el, idx) => {
                return (
                  <View key={idx}>
                    <DataTable.Row>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.day}</Text></DataTable.Cell>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{hourConverter(el.hourOfEvent) + " : " + el.minuteOfEvent + " " + AM_PMConverter(el.hourOfEvent)}</Text></DataTable.Cell>
                      <DataTable.Cell><Text style={{ color: "white", fontWeight: "300" }}>{el.eventName}</Text></DataTable.Cell>
                    </DataTable.Row>
                  </View>
                )
              })}
            </DataTable>

          </View>

          <View style={styles.verse}>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginBottom: 20 }}>Verse Of the day</Text>
            <Text style={styles.verseDetails}>{bookOf} {chapter} : {verse}</Text>
            <Text style={styles.verses}>{content}</Text>
          </View>

        </ScrollView>
      }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  verses: {
    color: "white",
    fontSize: 18,
    marginHorizontal: "10%"
  },
  verseDetails: {
    marginBottom: 30,
    color: "white",
    fontSize: 20
  },
  verse: {
    marginTop: 10,
    height: "auto",
    paddingBottom: 40,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(35, 35, 35, 0.5)",
    paddingTop: 20,
    borderRadius: 10
  },
  events: {
    height: 300,
    width: "100%",
    backgroundColor: "rgba(35, 35, 35, 0.5)",
    borderRadius: 10
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  header: {
    color: 'white',
    fontSize: 25
  },
  top: {
    width: "100%",
    marginBottom: 30
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