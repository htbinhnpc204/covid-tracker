import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CovidAPI from '../../controller/APIs/covid-19/CovidAPI'
import Constants from '../../controller/Constants'
import Loading from '../Loading'
import Details from '../Details'


const HomeScreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [worldData, setWorldData] = useState({})
    
    useEffect(() => {
        getWorldStatically()
    }, [])

    const getWorldStatically = async () => {
        setIsLoading(true)
        try {
            const response = await CovidAPI.getWorld()
            setWorldData(response.data[0])
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView style={[styles.container]}>
            <View style={{ paddingBottom: 80 }}>
                <Loading isLoading={isLoading} />
                {!isLoading && (
                    <Details data={worldData}/>
                    )}
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.color.background,
        paddingTop: 15,
        paddingHorizontal: 15
    },
})
