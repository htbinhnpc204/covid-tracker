import { StyleSheet, TextInput, View, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CovidAPI from '../../controller/APIs/covid-19/CovidAPI'
import Constants from '../../controller/Constants'
import ListItem from './components/ListItem'
import Loading from '../Loading'

const DetailsScreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchResult, setSearchResult] = useState([])

    const doSearch = (text) => {
        const result = data.filter((item) =>
            item.Country.toLowerCase().includes(text.toLowerCase())
        )
        setSearchResult(result)
    }

    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
        setIsLoading(true)
        try {
            const response = await CovidAPI.getCountries()
            response.data.sort((a, b) => {
                return a.Country.toLowerCase().localeCompare(b.Country.toLowerCase())
            })
            setData(response.data)
            setSearchResult(response.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.searchView}>
                <TextInput
                    placeholder='Input to search'
                    style={styles.searchInput}
                    onChangeText={(text) => doSearch(text)}
                />
            </View>
            <Loading isLoading={isLoading} />
            <FlatList
                style={styles.listContainer}
                data={searchResult}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <ListItem item={item} index={index} />}
            />
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.color.background,
        alignItems: 'center',
        width: Constants.dimensions.width,
        paddingBottom: 40
    },
    listContainer: {
        width: '100%'
    },
    searchView: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    searchInput: {
        width: '95%',
        paddingHorizontal: 7,
        height: 36,
        backgroundColor: 'white',
        fontSize: 16,
        paddingBottom: 7,
        borderRadius: 6
    }
})
