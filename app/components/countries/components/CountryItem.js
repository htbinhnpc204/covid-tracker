import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Constants from '../../../controller/Constants'
import { useNavigation } from '@react-navigation/native'

const CountryItem = ({ item, index }) => {
    const navagator = useNavigation()
    return (
        item.Continent != 'All' && (
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navagator.navigate(Constants.ROUTE.COUNTRY_DETAIL, {
                        NAME: item.Country,
                        ISO: item.ThreeLetterSymbol,
                        CountryData: item
                    })
                }}
            >
                <Text style={styles.header}>
                    {item.Country} ({item.ThreeLetterSymbol})
                </Text>

                <View style={[styles.container, styles.row]}>
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
            </TouchableOpacity>
        )
    )
}

export default CountryItem

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
    card: {
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: Constants.color.secondary,
        width: '95%',
        paddingVertical: 7,
        paddingHorizontal: 8,
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
        fontSize: 21,
        letterSpacing: 2,
        marginBottom: 12
    },
    text: {
        width: '50%',
        fontWeight: '400',
        letterSpacing: 0.6,
        fontSize: 16,
        marginBottom: 8,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
