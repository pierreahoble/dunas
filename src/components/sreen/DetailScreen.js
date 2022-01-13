import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const DetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Details
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default DetailScreen;
