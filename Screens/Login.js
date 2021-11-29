import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    Button,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    const [eye, setEye] = useState(false);
    const [text, setText] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <KeyboardAvoidingView style={{ height: "100%" }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#4F6D7A"
                        />

                        <View style={styles.oAuth}>
                            <Image source={require("../assets/G_logo.png")} style={styles.google} />
                            <Text style={styles.loginText}>
                                Sign in with Google
                            </Text>
                        </View>

                        <View style={styles.loginArea}>

                            <TextInput placeholder="Username" style={styles.inputArea} value={text} onChangeText={text => { setText(text) }} />

                            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", flex: 1 }}>
                                <TextInput placeholder="Password" style={styles.inputArea} secureTextEntry={!eye} value={password} onChangeText={text => { setPassword(text) }} />
                                <Pressable style={{ position: "absolute", right: 10 }} onPress={() => {
                                    setEye((prevState) => {
                                        if (prevState === false) {
                                            return true
                                        }
                                        else {
                                            return false
                                        }
                                    })
                                }}>
                                    <Entypo name={eye ? "eye" : "eye-with-line"} size={20} color="black" />
                                </Pressable>

                            </View>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 16, color: "white", fontWeight: "600" }}>Sign In</Text>
                            </Pressable>

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
        paddingVertical: 10
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF'
    },
    google: {
        height: 50,
        width: 50
    },
    oAuth: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    loginText: {
        color: "white",
        fontSize: 18,
        fontWeight: '700'
    },
    inputArea: {
        width: "100%",
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
        color: "black",
        fontSize: 16
    },
    loginArea: {
        height: 200,
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 200,
    },
    button: {
        backgroundColor: "#3D8991",
        color: 'white',
        height: 50,
        width: 79,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 10,
    }
});

export default Login