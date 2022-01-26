import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const DetailScreen = (props) => {
    // const { id } = props.route.params

    useEffect(() => {

    }, [])

    const toucher = () => {
        console.log(props.route)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Details
            </Text>
            <TouchableOpacity onPress={toucher}>
                <Text>TOucher</Text>
            </TouchableOpacity>
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
