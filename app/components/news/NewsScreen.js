import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Constants from '../../controller/Constants'
import CoronaScreen from './components/CoronaScreen'
import HealthScreen from './components/HealthScreen'
import VaccineScreen from './components/VaccineScreen'

const Tab = createMaterialTopTabNavigator()

const NewsScreen = () => {
    return <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Constants.color.primary
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Constants.color.background
                }
            }}
        >
            <Tab.Screen
                name={Constants.ROUTE.CORONA}
                component={CoronaScreen}
                options={{
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
            <Tab.Screen
                name={Constants.ROUTE.HEALTH}
                component={HealthScreen}
                options={{
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
            <Tab.Screen
                name={Constants.ROUTE.VACCINE}
                component={VaccineScreen}
                options={{
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
        </Tab.Navigator>
}

export default NewsScreen

const styles = StyleSheet.create({})
