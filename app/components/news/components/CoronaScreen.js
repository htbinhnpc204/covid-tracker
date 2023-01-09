import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewsAPIs from '../../../controller/APIs/news/NewsAPIs'
import NewsItem from './NewsItem'
import Loading from '../../Loading'

const CoronaScreen = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const res = NewsAPIs.getCoronaNews({ page })
        res.then((response) => {
            setData(data.concat(response.data.news))
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [page])

    const nextPage = () => {
        if(!isLoading)
            setPage(page+1)
    }

    return (
        <View style={styles.container}>
            <Loading isLoading={isLoading} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.news_id}
                renderItem={({ item, index }) => {
                    return <NewsItem item={item} />
                }}
                onEndReached={nextPage}
            />
        </View>
    )
}

export default CoronaScreen

const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    }
})
