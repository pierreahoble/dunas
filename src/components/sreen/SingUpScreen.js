import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/images/logos.jpg';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';

const SignUpSreen = (props) => {

    const goToLogin = () => {
        props.navigation.navigate('Login')
    }

    const register = () => {
        alert('Inscription')
        props.navigation.navigate('Home')
    }

    return (
        <ScrollView style={styles.base}>
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.text}>
                    Inscription Client
                </Text>

                <CustInputP placeholder='Nom ' />
                <CustInputP placeholder='Prénoms ' />
                <CustInputP placeholder='Téléphone ' keyboardType='numeric' />
                <CustInputP placeholder='Adresse Email' keyboardType='email-address' />
                <CustInputP placeholder='Mot de passe' secureTextEntry />
                <Button text='Inscription' onPress={register} />
                <TouchableOpacity
                    onPress={goToLogin}
                >
                    <Text style={styles.login}>
                        Vous avez un compte ? Connectez-Vous ...
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    logo: {
        height: 150,
        maxWidth: "100%",
        borderRadius: 16,
        alignSelf: 'center',
        margin: 5,
        paddingTop: 5
    },
    base: {
        backgroundColor: 'white'
    },
    login: {
        fontSize: 15,
        fontWeight: '500',
        color: '#00FF00'
    }
})


export default SignUpSreen;
