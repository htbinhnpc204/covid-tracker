import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import constants from '../../controller/Constants'
import DetailsScreen from '../details/DetailsScreen'
import HomeScreen from '../home/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName

                    if (route.name === constants.ROUTE.HOME)
                        iconName = focused ? 'home' : 'home-outline'
                    if (route.name === constants.ROUTE.DETAILS)
                        iconName = focused ? 'albums' : 'albums-outline'

                    return <Icon name={iconName} size={22} color={constants.color.primary} />
                },
                tabBarStyle: {
                    position: 'absolute',
                    width: constants.dimensions.screen.width * 0.95,
                    height: 40,
                    left: constants.dimensions.screen.width * 0.025,
                    bottom: constants.dimensions.screen.height * 0.025,
                    backgroundColor: constants.color.secondary,
                    borderRadius: 12
                },
                tabBarIconStyle: {
                    margin: 5,
                    borderRadius: 10
                }
            })}
        >
            <Tab.Screen name={constants.ROUTE.HOME} component={HomeScreen}></Tab.Screen>
            <Tab.Screen name={constants.ROUTE.DETAILS} component={DetailsScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
