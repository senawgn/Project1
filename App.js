
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

import { Text , View, Image, TextInput, ScrollView, StyleSheet } from "react-native";

function App() {
    return (
        <ScrollView ShowsVerticalScrollIndicator= {false}>
            <Text style={{color : "#0066ff", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Sena Ganteng</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Text style={{color : "#08b3fc", fontSize: 30, fontStyle: "italic", fontWeight: "bold", fontFamily: "serif"}}>Pasti dong</Text>
            <Image style={{width: 200, height:200}} source={{ uri: "https://i.pinimg.com/564x/d7/80/50/d78050127adffd498add0b94ae0e878c.jpg"}}/>
            <Image style={{width: 200, height:200}} source={require('./src/assets/images/spide-man.jpg')} />

            <TextInput 
                placeholder="Enter Your Name"
                secureTextEntry
                keyboardType="phone-pad"
            
            />

        </ScrollView>
    )
}
let styles = StyleSheet.create({
        image: {width: 200, height: 200}
})


export default App;