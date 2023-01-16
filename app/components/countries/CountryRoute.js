import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Constants from '../../controller/Constants'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

const Stack = createNativeStackNavigator()

const CountryRoute = () => {
    

    return (
        <Stack.Navigator initialRouteName={Constants.ROUTE.COUNTRIES_LIST}>
            <Stack.Screen
                name={Constants.ROUTE.COUNTRIES_LIST}
                component={CountriesList}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={Constants.ROUTE.COUNTRY_DETAIL} component={CountryDetails} />
        </Stack.Navigator>
    )
}

export default CountryRoute

const styles = StyleSheet.create({})
