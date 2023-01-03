import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NumericFormat } from 'react-number-format'

const CaseInfo = ({ name, caseNumber, color}) => {
    return <View>
        <Text style={styles.name}>
            { name}
        </Text>
        <NumericFormat value={caseNumber} style={[styles.caseNumber, {color: color}]} />
    </View>
}

const styles = StyleSheet.create({
    name: {
        textTransform: 'uppercase',
        letterSpacing: 3,
        color: '#d8dee2',
        fontSize: 18
    },
    caseNumber: {
        fontSize: 18
    }
})

export default CaseInfo
