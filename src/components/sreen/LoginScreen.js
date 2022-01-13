import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const LoginScreen = (props) => {

    const goToSingUp = () => {
        props.navigation.navigate('SingUp')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Login
            </Text>
            <Button title='Aller a Singup' onPress={goToSingUp} />
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

export default LoginScreen;
