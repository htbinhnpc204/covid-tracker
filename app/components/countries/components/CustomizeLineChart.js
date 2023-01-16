import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import Constants from '../../../controller/Constants'

const CustomizeLineChart = ({ labels, data, type, name }) => {
    const getConfigByType = () => {
        switch (type) {
            case Constants.configType.newCases:
                return Constants.chartConfig.newCase
            case Constants.configType.totalCases:
                return Constants.chartConfig.totalCase
            case Constants.configType.newDeaths:
                return Constants.chartConfig.newDeaths
            case Constants.configType.totalDeaths:
                return Constants.chartConfig.totalDeaths
        }
    }
    return (
        <View style={styles.container}>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: data
                        }
                    ]
                }}
                width={Constants.dimensions.screen.width * 0.95} // from react-native
                height={220}
                yAxisSuffix={'k'}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={getConfigByType()}
                bezier
                style={styles.chart}
            />
            <Text style={styles.chartTitle}>{name}</Text>
        </View>
    )
}

export default CustomizeLineChart

const styles = StyleSheet.create({
    container: {
        marginBottom: 24
    },
    chart: {
        alignSelf: 'center',
        borderRadius: 8
    },
    chartTitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic'
    }
})
