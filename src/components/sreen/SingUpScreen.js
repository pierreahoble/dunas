import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Logo from '../../../assets/images/logos.jpg';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';

const SignUpSreen = (props) => {

    const [active, setActive] = useState(false)

    const register = () => {
        setActive(true)
        setTimeout(() => {
            props.navigation.navigate('HomeAccueil')
            setActive(false)
        }, 5000);
    }

    const goToLogin = () => {
        setActive(true)
        setTimeout(() => {
            props.navigation.navigate('Login')
            setActive(false)
        }, 2000);
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
                    {active ?
                        <ActivityIndicator size={'large'} color={'#85c65c'} />
                        :
                        <Text style={styles.login}>
                            Vous avez un compte ? Connectez-Vous ...
                        </Text>
                    }
                </TouchableOpacity>
                {/* {active ? <ActivityIndicator size={'large'} color={'#85c65c'} /> : null} */}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    text: {
        fontSize: 25,
        fontFamily: 'PTSans-Bold',
        color: 'black'
    },
    logo: {
        height: 150,
        maxWidth: "100%",
        borderRadius: 16,
        alignSelf: 'center',
        margin: 3,
        paddingTop: 5
    },
    base: {
        backgroundColor: 'white'
    },
    login: {
        fontSize: 16,
        // fontWeight: '500',
        color: '#85c65c',
        fontFamily: 'PTSans-Regular'
    }
})


export default SignUpSreen;
