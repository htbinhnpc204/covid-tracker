import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import constants from '../../controller/Constants'
import CountryRoute from '../countries/CountryRoute'
import HomeScreen from '../home/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import NewsScreen from '../news/NewsScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName

                    if (route.name === constants.ROUTE.HOME)
                        iconName = focused ? 'globe' : 'globe-outline'
                    if (route.name === constants.ROUTE.COUNTRIES_ROUTE)
                        iconName = focused ? 'list' : 'list-outline'
                    if (route.name === constants.ROUTE.NEWS)
                        iconName = focused ? 'newspaper' : 'newspaper-outline'

                    return <Icon name={iconName} size={25} color={constants.color.primary} />
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: constants.color.secondary,
                    borderTopLeftRadius: 12,
                    borderTopEndRadius: 12
                }
            })}
        >
            <Tab.Screen name={constants.ROUTE.HOME} component={HomeScreen}></Tab.Screen>
            <Tab.Screen name={constants.ROUTE.COUNTRIES_ROUTE} component={CountryRoute}></Tab.Screen>
            <Tab.Screen name={constants.ROUTE.NEWS} component={NewsScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
