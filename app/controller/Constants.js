import { Dimensions } from 'react-native'

export default {
    dimensions: {
        screen: Dimensions.get('screen'),
        window: Dimensions.get('window')
    },
    color: {
        primary: '#0d63a5',
        secondary: '#1a1a2e',
        green: '#5bb68c',
        yellow: '#f8fa60',
        red: '#cb3333',
        orange: '#f79233',
        blue: '#19d3d5',
        background: '#283149',
        cardBackgroundLeft: '#141e31',
        cardBackgroundRight: '#233a54'
    },
    ROUTE: {
        HOME: 'Home Tab',
        COUNTRIES_ROUTE: 'Countries Route',
        COUNTRIES_LIST: 'Countries List',
        COUNTRY_DETAIL: 'Country Detail',
        NEWS: 'News Tab',
        CORONA: 'Corona',
        HEALTH: 'Health',
        VACCINE: 'Vaccine'
    },
    images: {
        icon: {
            home: require('../assets/images/ico_home.png')
        }
    },
    font: {
        title: {
            size: 42,
            spacing: 4,
            weight: '700'
        },
        content: {
            size: 26,
            spacing: 2,
            weight: '500'
        }
    },
    configType: {
        newCases: 'NEW CASES',
        newDeaths: 'NEW DEATHS',
        totalCases: 'TOTAL CASES',
        totalDeaths: 'TOTAL DEATHS'
    },
    chartConfig: {
        newCase: {
            backgroundColor: '#0ba300',
            backgroundGradientFrom: '#02bf0e',
            backgroundGradientTo: '#07e070',
            decimalPlaces: 2, // optional, defaults to 2dp,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#0E0'
            }
        },
        totalCase: {
            backgroundColor: '#104f00',
            backgroundGradientFrom: '#138c05',
            backgroundGradientTo: '#73af00',
            decimalPlaces: 1, // optional, defaults to 2dp,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#1F1'
            }
        },
        newDeaths: {
            backgroundColor: '#440000',
            backgroundGradientFrom: '#741c00',
            backgroundGradientTo: '#783103',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#f31'
            }
        },
        totalDeaths: {
            backgroundColor: '#5e1100',
            backgroundGradientFrom: '#f32e00',
            backgroundGradientTo: '#ff1c26',
            decimalPlaces: 3, // optional, defaults to 2dp,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#f31'
            }
        }
    }
}
