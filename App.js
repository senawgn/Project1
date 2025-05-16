
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

import {View, Text, Alert, Switch, TextInput} from 'react-native'
import Tombol from './src/components/Tombol'
import { useState } from 'react'


function App () {
    const [count , setCount] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false)
    const [Password, setPassword] = useState(true)
    return (
        <View>
            <Tombol title='TAMBAH (+)' onclick={() => {
                console.log('BERTAMBAH')
                setCount(count + 1)}} />
                <Text style={{color: "#000" , textAlign:"center" ,  fontSize:50}}>{count}</Text>
            <Tombol title='KURANG (-)'onclick={() => {
                console.log('BERKURANG')
                 count <= 0 ? setCount(count - 0) : setCount(count - 1)}} />
            <Tombol title='RESET (C)'onclick={() => {
                console.log('KEMBALI KE 0')
                setCount(0)}} />
            

            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                value={isEnabled}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={() => setIsEnabled(!isEnabled)}
            />


            {/* <TextInput
                placeholder='Enter Your Password'
                placeholderTextColor={isEnabled ? 'blue':'#777'} style={{fontSize: 20,}}
                secureTextEntry={!isEnabled}
                onChangeText={e => setPassword(e)}
                value={Password}
            /> */}
        </View>
    )
}

export default App