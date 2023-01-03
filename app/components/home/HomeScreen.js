import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CovidAPI from '../../controller/APIs/covid-19/CovidAPI'
import LinearGradient from 'react-native-linear-gradient'
import Constants from '../../controller/Constants'

const HomeScreen = () => {
    const [worldData, setWorldData] = useState([])

    useEffect(() => {
        getWorldStatically()
    })

    const getWorldStatically = async () => {
        try {
            const response = await CovidAPI.world()
            setWorldData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>WORLD</Text>
                <View>
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
                            <Text style={[styles.content, { color: 'white' }]}>Total Case</Text>
                            <Text style={[styles.content, { color: Constants.color.green }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text style={[styles.content, { color: 'white' }]}>NEW CASES</Text>
                            <Text style={[styles.content, { color: Constants.color.green }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text style={[styles.content, { color: 'white' }]}>ACTIVE CASES</Text>
                            <Text style={[styles.content, { color: Constants.color.yellow }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text style={[styles.content, { color: 'white' }]}>CRITICAL</Text>
                            <Text style={[styles.content, { color: Constants.color.orange }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text style={[styles.content, { color: 'white' }]}>TOTAL DEATHS</Text>
                            <Text style={[styles.content, { color: Constants.color.red }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text style={[styles.content, { color: 'white' }]}>NEW DEATHS</Text>
                            <Text style={[styles.content, { color: Constants.color.red }]}>
                                {new Intl.NumberFormat('en').format(689123456)}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.color.background
    },
    header: {
        marginTop: 15,
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
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})
