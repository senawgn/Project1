
// import { View, Text, Switch, StatusBar } from 'react-native'
// import Tombol from './src/components/Tombol'
// import { useState } from 'react'


// function App() {
//     const [count, setCount] = useState(0);
//     const [isEnabled, setIsEnabled] = useState(false)

//     return (
//         <View 

        
        
//         style={{ backgroundColor: isEnabled ? "#333" : "#fff", flex: 1 }}>
//             <StatusBar backgroundColor={isEnabled ? "#333" : "#fff"} barStyle={isEnabled ? "light-content" : "dark-content"} />
//             <Switch
//                 trackColor={{ true: '#81b0ff', false: '#81b0ff' }}
//                 value={isEnabled}
//                 thumbColor={isEnabled ? '#f5dd4b' : '#000'}
//                 onValueChange={() => setIsEnabled(!isEnabled)}
//             />

//             <Tombol title='TAMBAH (+)' onclick={() => {
//                 console.log('BERTAMBAH')
//                 setCount(count + 1)
//             }} />
//             <Text style={{ color: isEnabled ? "#fff" : "#000", textAlign: "center", fontSize: 50 }}>{count}</Text>
//             <Tombol  title='KURANG (-)' onclick={() => {
//                 console.log('BERKURANG')
//                 count <= 0 ? setCount(count - 0) : setCount(count - 1)
//             }} />
//             <Tombol title='RESET (C)' onclick={() => {
//                 console.log('KEMBALI KE 0')
//                 setCount(0)
//             }} />

//         </View>
//     )
// }



// export default App


import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import HeaderCustom from "./components/HeaderCustom";

const App = () => {

    console.log(Dimensions.get('window').width)
    console.log(Dimensions.get('window').height)

    return (
    <View style={style.container}>

        {/* Header */}
        <View style={{height: 50, width: '100%', backgroundColor:'green',justifyContent: 'center', alignItems: 'center'}}>
            <HeaderCustom title="SELAMAT" colorCustom="black"/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555'
    }
})

export default App 