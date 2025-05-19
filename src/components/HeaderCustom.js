import React from "react";
import {Text, View,} from 'react-native'

const HeaderCustom = ({title = 'SELAMAT DATANG', colorCustom = 'green'}) => {
    return (
        
        <View style={{height: 50, width: '100%', backgroundColor: colorCustom,justifyContent: 'center', alignItems: 'center'}}>
             <Text style= {{fontSize: 16, fontWeight: 'bold', color: 'white'}} >{title}</Text>
        </View>
    )
}

export default HeaderCustom