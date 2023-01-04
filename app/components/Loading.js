import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'

const Loading = ({ isLoading }) => {
    return (
        isLoading && (
            <View>
                <ActivityIndicator size='large' />
            </View>
        )
    )
}

export default Loading

const styles = StyleSheet.create({})
