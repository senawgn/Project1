
// import { Text } from "react-native";

// function App() {
//     return (
//         <Text>sena</Text>
//     )
// }

// export default App;
// color
// fontSize
// fontWeight

// import { Text , View, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";


// function App() {
//     return (
//         <ScrollView ShowsVerticalScrollIndicator= {false}>
//             <Text style={{color : "#0066ff", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Sena Ganteng</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
//             <Image style={{width: 200, height:200}} source={{ uri: "https://i.pinimg.com/564x/d7/80/50/d78050127adffd498add0b94ae0e878c.jpg"}}/>
//             <Image style={{width: 200, height:200}} source={require('./src/assets/images/spide-man.jpg')} />

//             <TextInput 
//                 placeholder="Enter Your PIN"
//                 secureTextEntry
//                 keyboardType="phone-pad"
            
//             />

//         </ScrollView>
//     )
// }
// let styles = StyleSheet.create({
//         image: {width: 200, height: 200}
// })


// export default App;

// PROPS
// import {View, Text, Alert} from 'react-native'
// import Tombol from './src/components/Tombol'


// function App () {
//     return (
//         <View>
//             <Text style={{fontSize: 30, color: 'blue'}}>Hello</Text>
//             <Tombol title='PRESS ME' onclick={() => console.log('PRESS ME DI TEKAN')} />
//             <Tombol title='DON:T PRESS' onclick={() => Alert.alert('Warning', 'Kamu menekan Tombol terlarang')}/>
//             <Tombol title='LOVE ME' onclick={() => Alert.alert('❤️', 'Kamu mencintai ku')}/>
//             <Tombol title='STRING' />
//             <Tombol title='NUMBER' />
            
//         </View>
//     )
// }

// export default App

import {View, Text, Alert} from 'react-native'
import Tombol from './src/components/Tombol'
import { useState } from 'react';


function App () {
    const [count , setCount] = useState(0);

    return (
        <View>
            <Tombol title='TAMBAH (+)' onclick={() => {
                console.log('PRESS ME DI TEKAN')
                setCount(count + 1)
            }} />
                <Text style={{color: "#333" , textAlign:"center" ,  fontSize:50}}>{count}</Text>
            <Tombol title='KURANG (-)'onclick={() => {
                console.log('PRESS ME DI TEKAN')
                 count <= 0 ? setCount(count - 0) : setCount(count - 1)}} />
            <Tombol title='RESET (C)'onclick={() => {
                console.log('PRESS ME DI TEKAN')
                setCount(0)}} />
            
        </View>
    )
}

export default App