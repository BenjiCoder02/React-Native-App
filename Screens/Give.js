import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';


const Give = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#4F6D7A"

                />
                <Text style={styles.welcome}>
                    Give
                </Text>

                <Text style={styles.instructions}>
                    Wassup, hello home, We are a church, that has a lot of fun.
                </Text>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
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
});

export default Give