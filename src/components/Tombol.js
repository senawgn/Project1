import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

let Tombol = ({title,onclick}) => {
    return (
        <TouchableOpacity onPress={onclick} style={style.container}>
            <Text style={{color: 'white', fontSize: 25}}>{title}</Text>
        </TouchableOpacity>
    )
}

let style = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        backgroundColor: 'blue',
        borderTopEndRadius:20,
        borderBottomStartRadius:20,
        alignItems: 'center',
        elevation: 3
    }
})

export default Tombol