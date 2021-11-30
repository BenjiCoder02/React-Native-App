import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";


function AllNotes() {
    const [dirs, setDirs] = useState([])
    const fileURI = FileSystem.documentDirectory + "Notes";
    const [text, setText] = useState("");
    const [selectedFile, setSelectedFile] = useState("")

    function getDirData() {
        let data = FileSystem.readDirectoryAsync(fileURI)
        return data
    }

    getDirData().then(res => {
        setDirs(res)
    })

    function openSelectedFile(filePath) {
        return (FileSystem.readAsStringAsync(`${fileURI}/${filePath}`))
    }

    function deleteSelectedFile(filePath) {
        return (FileSystem.deleteAsync(`${fileURI}/${filePath}`))
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <TextInput value={fileURI} multiline={true}></TextInput>*/}
            <View style={{ height: 300 }}>
                <ScrollView>
                    {dirs.map((el, idx) => {
                        return (
                            <View key={idx} style={styles.dirListContainer}>
                                <Text style={styles.dirList}>
                                    {`${idx + 1}.${el}`}
                                </Text>
                                <View style={styles.options}>
                                    <Pressable onPress={() => { openSelectedFile(el).then((res) => { setText(res); setSelectedFile(el) }) }}>
                                        <Text style={{ height: 20, backgroundColor: "white", color: '#4F6D7A', fontSize: 18 }}>Open</Text>
                                    </Pressable>
                                    <Pressable onPress={() => { deleteSelectedFile(el).then((res) => { setText(res); setSelectedFile(el) }) }}>
                                        <Text style={{ height: 20, backgroundColor: "white", color: 'red', fontSize: 18 }}>Delete</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.textViewBackGround}>
                <Text style={{ textAlign: 'center', marginTop: 15, color: "black", fontWeight: '800' }}>{selectedFile}</Text>
                <Text style={styles.textView}>{text}</Text>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    dirList: {
        color: 'black',
        backgroundColor: 'white',
        height: '50%',
        fontSize: 18
    },
    dirListContainer: {
        height: 90,
        borderStyle: "solid",
        borderWidth: 0,
        borderColor: "gray",
        borderBottomWidth: 3,
        width: '100%'
    },
    textViewBackGround: {
        backgroundColor: "white"
    },
    textView: {
        color: 'black',
        fontSize: 24,
        minHeight: 300,
        paddingTop: 20,
        paddingHorizontal: 10
    },
    options: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 20
    }
})

export default AllNotes;

