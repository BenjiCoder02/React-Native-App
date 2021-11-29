import React from "react";
import { Text } from "react-native";




const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayNumber = date.getDay()

const day = days[dayNumber];

const fullDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()

const time = date.getHours() + " : " + (date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`)

const AM_PM = date.getHours() > 11 ? "PM" : "AM"

//_${day}_${time}_${AM_PM}

function DateGetter() {
    return (`${fullDate}`)

}




export default DateGetter;


