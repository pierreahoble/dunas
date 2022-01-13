import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Button from '../composent/Button';
import CustInputP from '../composent/CustInput';

const Home = (props) => {

    const goToLogin = () => {
        props.navigation.navigate('SignUp')
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Home Screen
            </Text>
            <Button text='Aller A Login' onPress={goToLogin} />
            <CustInputP keyboardType='numeric' />


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
