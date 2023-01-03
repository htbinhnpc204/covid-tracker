import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import CovidAPI from '../../controller/APIs/covid-19/CovidAPI'
import LinearGradient from 'react-native-linear-gradient'
import Constants from '../../controller/Constants'

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const DetailsScreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
        setIsLoading(true)
        try {
            const response = await CovidAPI.getAll()
            setData(response.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const renderItem = ({ item }) => !(item.Continent == 'All') && <Item title={item.Country} />

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Text>Danh sách các nước</Text>
                            </View>
                        )
                    }}
                    data={data} keyExtractor={(item) => item.id} renderItem={renderItem} />
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})
