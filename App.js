
import { View, Text, Switch, StatusBar } from 'react-native'
import Tombol from './src/components/Tombol'
import { useState } from 'react'


function App() {
    const [count, setCount] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <View style={{ backgroundColor: isEnabled ? "#333" : "#fff", flex: 1 }}>
            <StatusBar backgroundColor={isEnabled ? "#333" : "#fff"} barStyle={isEnabled ? "light-content" : "dark-content"} />
            <Switch
                trackColor={{ true: '#81b0ff', false: '#81b0ff' }}
                value={isEnabled}
                thumbColor={isEnabled ? '#f5dd4b' : '#000'}
                onValueChange={() => setIsEnabled(!isEnabled)}
            />

            <Tombol title='TAMBAH (+)' onclick={() => {
                console.log('BERTAMBAH')
                setCount(count + 1)
            }} />
            <Text style={{ color: isEnabled ? "#fff" : "#000", textAlign: "center", fontSize: 50 }}>{count}</Text>
            <Tombol  title='KURANG (-)' onclick={() => {
                console.log('BERKURANG')
                count <= 0 ? setCount(count - 0) : setCount(count - 1)
            }} />
            <Tombol title='RESET (C)' onclick={() => {
                console.log('KEMBALI KE 0')
                setCount(0)
            }} />

        </View>
    )
}



export default App
