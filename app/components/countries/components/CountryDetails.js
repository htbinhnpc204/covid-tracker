import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import {
    PieChart,
} from 'react-native-chart-kit'
import CovidAPI from '../../../controller/APIs/covid-19/CovidAPI'
import Constants from '../../../controller/Constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomizeLineChart from './CustomizeLineChart'
import Details from '../../Details'
import Loading from '../../Loading'

const CountryDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()

    navigation.setOptions({
        title: route.params.NAME + ' statistical',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: Constants.color.secondary
        }
    })


    const [data, setData] = useState({
        labels: [],
        datasets: {
            new_cases: [],
            total_cases: [],
            total_deaths: [],
            new_deaths: []
        }
    })
    const [pieData, setPieData] = useState([])

    const [isDataLoad, setIsDataLoad] = useState(true)
    const [isPieDataLoad, setIsPieDataLoad] = useState(true)

    useEffect(() => {
        getData()
        getCountryData()
    }, [])

    const getData = async () => {
        setIsDataLoad(true)
        try {
            const response = await CovidAPI.getLastSixMonths({ country: route.params.ISO })
            let labels = []
            let newCasesData = []
            let totalCasesData = []
            let newDeathsData = []
            let totalDeathsData = []
            let i = 1

            response.data.forEach((element) => {
                if (i % 4 == 0) {
                    date = element.date.split('-')
                    labels.push(date[2] + '/' + date[1])
                    newCasesData.push(element.new_cases / 1000)
                    totalCasesData.push(element.total_cases / 1000)
                    newDeathsData.push(element.new_deaths / 1000)
                    totalDeathsData.push(element.total_deaths / 1000)
                }
                i++
            })

            let sumary = {
                total_cases: totalCasesData.reverse(),
                new_cases: newCasesData.reverse(),
                total_deaths: totalDeathsData.reverse(),
                new_deaths: newDeathsData.reverse()
            }

            setData({
                labels: labels.reverse(),
                datasets: sumary
            })
            setIsDataLoad(false)
        } catch (err) {
            console.log('getdataLog: ' + err)
        }
    }

    const getCountryData = async () => {
        try {
            setIsPieDataLoad(true)
            const response = await CovidAPI.getSpecificCountry({
                NAME: route.params.NAME,
                ISO: route.params.ISO
            })
            let sumary = [
                {
                    name: 'Active Cases',
                    case: response.data[0].ActiveCases,
                    color: '#0F0',
                    legendFontColor: '#FFF',
                    legendFontSize: 15
                },
                {
                    name: 'Total Deaths',
                    case: response.data[0].TotalDeaths,
                    color: '#F00',
                    legendFontColor: '#FFF',
                    legendFontSize: 15
                },
                {
                    name: 'Critical',
                    case: response.data[0].Serious_Critical,
                    color: '#F80',
                    legendFontColor: '#FFF',
                    legendFontSize: 15
                }
            ]
            setPieData(sumary)
            setIsPieDataLoad(false)
        } catch (err) {
            console.log('getCountryDataLog: ' + err)
        }
    }

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#08130D',
        backgroundGradientToOpacity: 0.5,
        color: () => `rgb(26, 255, 146)`,
        useShadowColorFromDataset: false // optional,
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {isPieDataLoad && <Loading isLoading={isPieDataLoad} />}
                {!isPieDataLoad && (
                    <View style={styles.cart}>
                        <Details data={route.params.CountryData} />
                        <Text style={styles.title}>
                            The condition of all case in {route.params.NAME}
                        </Text>
                        <PieChart
                            data={pieData}
                            width={Constants.dimensions.screen.width * 0.95}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={'case'}
                            backgroundColor={'transparent'}
                            paddingLeft={'3'}
                            absolute
                        />
                    </View>
                )}
                <Text style={styles.title}>Last six months satistical</Text>
                {isDataLoad && <Loading isLoading={isDataLoad} />}
                {!isDataLoad && (
                    <View style={{ marginTop: 16 }}>
                        {data.labels.length > 0 && (
                            <CustomizeLineChart
                                name={'New cases'}
                                labels={data.labels}
                                data={data.datasets.new_cases}
                                type={Constants.configType.newCases}
                            />
                        )}
                        {data.labels.length > 0 && (
                            <CustomizeLineChart
                                name={'New deaths'}
                                labels={data.labels}
                                data={data.datasets.new_deaths}
                                type={Constants.configType.newDeaths}
                            />
                        )}
                        {data.labels.length > 0 && (
                            <CustomizeLineChart
                                name={'Total cases'}
                                labels={data.labels}
                                data={data.datasets.total_cases}
                                type={Constants.configType.totalCases}
                            />
                        )}
                        {data.labels.length > 0 && (
                            <CustomizeLineChart
                                name={'Total deaths'}
                                labels={data.labels}
                                data={data.datasets.total_deaths}
                                type={Constants.configType.totalDeaths}
                            />
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default CountryDetails

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40,
        backgroundColor: Constants.color.background
    },
    title: {
        marginTop: 8,
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontStyle: 'italic'
    }
})
