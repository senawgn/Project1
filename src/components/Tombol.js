import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

let Tombol = ({title,onclick}) => {
    return (
        <TouchableOpacity onPress={onclick} style={style.container}>
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

let style = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3
    }
})

export default Tombol