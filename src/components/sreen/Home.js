import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

const Home = (props) => {

    const goToLogin = () => {
        props.navigation.navigate('Detail')
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Home Screen
            </Text>
            <Button title='Aller Login' onPress={goToLogin} />

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

export default Home;
