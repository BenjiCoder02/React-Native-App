import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Pressable, View, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as FileSystem from "expo-file-system";
import DateGetter from "../NotificationHandler/Date";

function Notes({ navigation }) {
    const fileURI = FileSystem.documentDirectory;
    const [title, setTitle] = useState("Impact Toronto Sermon")
    const [textContent, setTextContent] = useState("")
    const date = DateGetter();

    useEffect(() => {
        setTitle(() => {
            return (`Impact_Toronto_Sermon_${date}`)
        })
    }, [])

    function convertTitle() {
        return title.replaceAll(" ", "_")
    }


    function writeNewNote() {
        let finalTitle = convertTitle();
        const newFileDir = `${fileURI}Notes/${finalTitle}.txt`
        FileSystem.writeAsStringAsync(newFileDir, textContent);
    }

    //Checks for the Notes directory and then creates the dir if it does not exist
    function checkForDir() {
        let listOfDirs = FileSystem.readDirectoryAsync(fileURI)
        return listOfDirs
    }

    checkForDir().then((res) => {
        res.map(el => {
            if (el === "Notes") {
                return
            }
            else {
                FileSystem.makeDirectoryAsync(fileURI + "Notes")
            }
        })
    })


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>

                <Text style={styles.header}>Sermon Notes</Text>
                <View style={styles.createArea}>
                    <Text style={styles.makeNote}>Title</Text>
                    <TextInput placeholder={title} style={styles.noteInput} multiline={true} onChangeText={(text) => { setTitle(text) }} value={title}></TextInput>
                </View>
                <View style={styles.createArea_1}>
                    <Text style={styles.makeNote}>Notes</Text>
                    <TextInput style={styles.noteInput_1} multiline={true} onChangeText={(text) => { setTextContent(text) }} value={textContent} numberOfLines={30}></TextInput>

                </View>
                <Pressable style={{ width: 250 }} onPress={writeNewNote}>
                    <View style={styles.createBtn}>
                        <Text style={styles.makeNote}>Make Note</Text>
                    </View>
                </Pressable>
                <Pressable style={{ width: 250 }} onPress={() => { navigation.navigate("AllNotes") }}>
                    <View style={styles.viewAllNotes}>
                        <Text style={styles.makeNote}>All Notes</Text>
                    </View>
                </Pressable>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4F6D7A',
        height: '100%',
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    header: {
        color: "white",
        fontSize: 24,
        fontWeight: "800"
    },
    makeNote: {
        color: "white",
        fontSize: 20,
        fontWeight: '700'
    },
    noteInput: {
        backgroundColor: "white",
        height: 50,
        width: "90%",
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top"
    },
    noteInput_1: {
        backgroundColor: "white",
        maxHeight: 200,
        minHeight: 200,
        width: "90%",
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top"
    },
    createArea: {
        width: "80%",
        height: 100,
        alignItems: "center"
    },
    createArea_1: {
        width: "80%",
        height: 300,
        alignItems: "center"
    },
    createBtn: {
        backgroundColor: "#fcba03",
        height: 40,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    viewAllNotes: {
        backgroundColor: "#3D8991",
        height: 40,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Notes