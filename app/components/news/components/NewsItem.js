import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import moment from 'moment'

import { Linking } from 'react-native'

const openURL = (url) => {
    Linking.openURL(url)
}

const NewsItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                openURL(item.link)
            }}
        >
            <View style={styles.card}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: item.urlToImage
                    }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.content.replace('/<[^>]+>/g', '')}</Text>
                <Text style={styles.timestamp}>
                    {moment(item.pubDate).format('dddd, DD/MM/yyyy HH:mm a')}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flex: 1,
        alignItems: 'center'
    },
    card: {
        width: '95%',
        backgroundColor: 'white',
        marginBottom: 15,
        padding: 7,
        borderRadius: 5,
        // borderWidth: 2,
        // borderColor: 'black'
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    cardImage: {
        width: '100%',
        height: 180,
        resizeMode: 'stretch',
        marginBottom: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'justify'
    },
    timestamp: {
        alignSelf: 'flex-end'
    }
})
