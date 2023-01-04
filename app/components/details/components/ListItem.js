import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from '../../../controller/Constants'

const ListItem = ({ item, index }) => {
    return (
        item.Continent != 'All' && (
            <View style={styles.card}>
                <Text style={styles.header}>
                    {item.Country} ({item.ThreeLetterSymbol})
                </Text>

                <View style={styles.container}>
                    <Text style={[styles.text, { color: Constants.color.yellow }]}>
                        Active cases: {new Intl.NumberFormat('en').format(item.ActiveCases)}
                    </Text>
                    <Text style={[styles.text, { color: Constants.color.orange }]}>
                        Critical: {new Intl.NumberFormat('en').format(item.Serious_Critical)}
                    </Text>
                    <Text style={[styles.text, { color: Constants.color.green }]}>
                        New cases: {new Intl.NumberFormat('en').format(item.NewCases)}
                    </Text>
                    <Text style={[styles.text, { color: Constants.color.red }]}>
                        New deaths: {new Intl.NumberFormat('en').format(item.NewDeaths)}
                    </Text>
                </View>
            </View>
        )
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
    card: {
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: Constants.color.secondary,
        width: '95%',
        height: 72,
        paddingVertical: 3,
        paddingHorizontal: 5,
        shadowColor: Constants.color.primary,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 2,

        elevation: 4
    },
    header: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 5
    },
    text: {
        width: '45%',
        fontSize: 12,
        letterSpacing: 1,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
