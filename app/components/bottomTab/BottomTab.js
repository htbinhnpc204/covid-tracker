import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import constants from '../../controller/Constants'
import DetailsScreen from '../details/DetailsScreen'
import HomeScreen from '../home/HomeScreen'
import Icon from 'react-native-ionicons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    console.log(route.name)
                    if (route.name === 'Home Screen') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline'
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name={constants.screenName.home} component={HomeScreen}></Tab.Screen>
            <Tab.Screen name={constants.screenName.detail} component={DetailsScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
