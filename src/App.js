// import React from "react";
// import { Text, View, StyleSheet, Dimensions } from "react-native";
// import HeaderCustom from "./components/HeaderCustom";

// const App = () => {

//     console.log(Dimensions.get('window').width)
//     console.log(Dimensions.get('window').height)

//     return (
//     <View style={style.container}>

//         {/* Header */}
//         <View style={{height: 50, width: '100%', backgroundColor:'green',justifyContent: 'center', alignItems: 'center'}}>
//             <HeaderCustom title="SELAMAT" colorCustom="black"/>
//         </View>
//     </View>
//     )
// }

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#555'
//     }
// })

// export default App 

import React from "react";
import{ Pressable, ScrollView, View } from "react-native"
import ImageCustom from "./components/ImagesCustom";
import ButtonCustom from "./components/ButtonCustom";

const App = () => {
    return (
           <ScrollView>
             <ImageCustom link='https://i.pinimg.com/564x/d7/80/50/d78050127adffd498add0b94ae0e878c.jpg' />
             <ImageCustom link='https://i.pinimg.com/564x/d7/80/50/d78050127adffd498add0b94ae0e878c.jpg' />

            <ButtonCustom title='Selamat Datang'/>
            <ButtonCustom title='Selamat Jalan'/>
            <ButtonCustom title='Sampai Jumpa' />

        </ScrollView>
    )
}

export default App
