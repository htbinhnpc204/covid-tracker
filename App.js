import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './app/components/bottomTab/BottomTab'
import 'react-native-gesture-handler'

const App = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

export default App
