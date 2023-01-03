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
        DETAILS: 'Detail Tab'
    },
    images: {
        icon: {
            home: require('../assets/images/ico_home.png')
        }
    },
    font: {
        title: {
            size: 28,
            spacing: 4,
            weight: '600'
        },
        content: {
            size: 24,
            spacing: 2
        }
    }
}
