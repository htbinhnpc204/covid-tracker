import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CovidAPI from '../../controller/APIs/covid-19/CovidAPI'
import LinearGradient from 'react-native-linear-gradient'
import Constants from '../../controller/Constants'
import Loading from '../Loading'


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
                    <View style={styles.header}>
                        <Text style={styles.title}>WORLD</Text>
                        <View style={{ borderRadius: 5 }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    Constants.color.cardBackgroundLeft,
                                    Constants.color.cardBackgroundRight
                                ]}
                                style={styles.card}
                            >
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        Total Case
                                    </Text>
                                    <Text
                                        style={[styles.content, { color: Constants.color.green }]}
                                    >
                                        {new Intl.NumberFormat('en').format(worldData.TotalCases)}
                                    </Text>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        NEW CASES
                                    </Text>
                                    <Text
                                        style={[styles.content, { color: Constants.color.green }]}
                                    >
                                        {new Intl.NumberFormat('en').format(worldData.NewCases)}
                                    </Text>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        ACTIVE CASES
                                    </Text>
                                    <Text
                                        style={[styles.content, { color: Constants.color.yellow }]}
                                    >
                                        {new Intl.NumberFormat('en').format(worldData.ActiveCases)}
                                    </Text>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        CRITICAL
                                    </Text>
                                    <Text
                                        style={[styles.content, { color: Constants.color.orange }]}
                                    >
                                        {new Intl.NumberFormat('en').format(
                                            worldData.Serious_Critical
                                        )}
                                    </Text>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        TOTAL DEATHS
                                    </Text>
                                    <Text style={[styles.content, { color: Constants.color.red }]}>
                                        {new Intl.NumberFormat('en').format(worldData.TotalDeaths)}
                                    </Text>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text style={[styles.content, { color: 'white' }]}>
                                        NEW DEATHS
                                    </Text>
                                    <Text style={[styles.content, { color: Constants.color.red }]}>
                                        {new Intl.NumberFormat('en').format(worldData.NewDeaths)}
                                    </Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
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
    header: {
        alignItems: 'center'
    },
    title: {
        color: Constants.color.white,
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: Constants.font.title.spacing,
        fontSize: Constants.font.title.size,
        fontWeight: Constants.font.title.weight,
        marginBottom: 15
    },
    card: {
        width: Constants.dimensions.screen.width * 0.95,
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 15
    },
    cardItem: {
        paddingVertical: 5,
        alignItems: 'center'
    },
    content: {
        fontSize: Constants.font.content.size,
        letterSpacing: Constants.font.content.spacing,
        textTransform: 'uppercase'
    }
})
