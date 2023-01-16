import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Constants from '../controller/Constants'

const Details = ({ data }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{data.Country}</Text>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[Constants.color.cardBackgroundLeft, Constants.color.cardBackgroundRight]}
                style={styles.card}
            >
                <View style={{ borderRadius: 5 }}>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>Total Case</Text>
                        <Text style={[styles.content, { color: Constants.color.green }]}>
                            {new Intl.NumberFormat('en').format(data.TotalCases)}
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>NEW CASES</Text>
                        <Text style={[styles.content, { color: Constants.color.green }]}>
                            {new Intl.NumberFormat('en').format(data.NewCases)}
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>ACTIVE CASES</Text>
                        <Text style={[styles.content, { color: Constants.color.yellow }]}>
                            {new Intl.NumberFormat('en').format(data.ActiveCases)}
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>CRITICAL</Text>
                        <Text style={[styles.content, { color: Constants.color.orange }]}>
                            {new Intl.NumberFormat('en').format(data.Serious_Critical)}
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>TOTAL DEATHS</Text>
                        <Text style={[styles.content, { color: Constants.color.red }]}>
                            {new Intl.NumberFormat('en').format(data.TotalDeaths)}
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={[styles.content, { color: 'white' }]}>NEW DEATHS</Text>
                        <Text style={[styles.content, { color: Constants.color.red }]}>
                            {new Intl.NumberFormat('en').format(data.NewDeaths)}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
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
        paddingVertical: 8,
        alignItems: 'center'
    },
    content: {
        fontSize: Constants.font.content.size,
        letterSpacing: Constants.font.content.spacing,
        fontWeight: Constants.font.content.weight,
        textTransform: 'uppercase'
    }
})
