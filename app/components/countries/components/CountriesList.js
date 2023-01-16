import { StyleSheet, TextInput, View, FlatList, SafeAreaView, Text } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CountryItem from './CountryItem'
import Loading from '../../Loading'
import CovidAPI from '../../../controller/APIs/covid-19/CovidAPI'
import Constants from '../../../controller/Constants'
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const CountriesList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [filterList, setFilterList] = useState([])
    const [filterSelected, setFilterSelected] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        setIsLoading(true)
        setData([])
        setSearchResult([])
        setFilterSelected([])
        getAll()
    }, [])

    useEffect(() => {
        let result = data.filter((item) =>
            item.Country.toLowerCase().includes(searchText.toLowerCase())
        )

        if (filterSelected.length > 0) {
            result = result.filter((item) => filterSelected.includes(item.Continent))
        }
        console.log(result)
        setSearchResult(result)
    }, [filterSelected, searchText])

    const getAll = async () => {
        try {
            const response = await CovidAPI.getCountries()
            response.data.sort((a, b) => {
                return a.Country.toLowerCase().localeCompare(b.Country.toLowerCase())
            })
            let tmpFilterList = []
            response.data.forEach((element) => {
                if (
                    !tmpFilterList.includes(element.Continent) &&
                    element.Continent != '' &&
                    element.Continent != 'All'
                ) {
                    tmpFilterList.push(element.Continent)
                }
            })
            let filterData = []
            tmpFilterList.forEach((element) => {
                filterData.push({ key: element, value: element })
            })
            tmpFilterList.sort((a, b) => {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            })
            setData(response.data)
            setSearchResult(response.data)
            setFilterList(filterData)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <Loading isLoading={isLoading} />
            {!isLoading && (
                <View style={styles.searchView}>
                    <TextInput
                        placeholder='Input to search'
                        style={styles.searchInput}
                        onChangeText={(text) => setSearchText(text)}
                    />
                    <View style={styles.filterView}>
                        <Text style={styles.filterViewText}>Location filter</Text>
                        <MultipleSelectList
                            fontFamily='lato'
                            setSelected={(val) => setFilterSelected(val)}
                            data={filterList}
                            save='value'
                            boxStyles={{ width: Constants.dimensions.screen.width * 0.95 }}
                            maxHeight={Constants.dimensions.screen.height * 0.3}
                            dropdownStyles={{ marginBottom: 16 }}
                            inputStyles={{ color: 'white' }}
                            dropdownTextStyles={{ color: 'white' }}
                            labelStyles={{ color: 'white' }}
                            placeholder='Select locale'
                            label={'Locale'}
                        />
                    </View>
                </View>
            )}
            <FlatList
                style={styles.listContainer}
                data={searchResult}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <CountryItem item={item} index={index} />}
            />
        </SafeAreaView>
    )
}

export default CountriesList

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
        top: 16,
        position: 'relative',
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
    },
    row: {
        width: '95%',
        flexDirection: 'row',
        marginVertical: 8
    },
    dropDownItem: {
        color: 'white'
    },
    filterView: {
        marginVertical: 8,
    },
    filterViewText: {
        fontSize: 15,
        letterSpacing: 1,
        marginBottom: 4,
        color: 'white'
    }
})
