import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';

const LoginScreen = (props) => {

    const goToSingUp = () => {
        props.navigation.navigate('SignUp')
    }
    return (
        <ScrollView style={styles.base}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Text style={styles.titre}>Bienvenu Connectez - vous !!</Text>

                <CustInputP placeholder='Votre Adresse Email' keyboardType='email-address' />
                <CustInputP placeholder='Mot de passe' secureTextEntry={false} />
                <Button text='Login' onPress={goToSingUp} />
                <TouchableOpacity
                    onPress={goToSingUp}
                >
                    <Text style={styles.inscription}>Vous n'avez pas de compte? S'incire ici !</Text>
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
        fontSize: 40,
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
    titre: {
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    base: {
        backgroundColor: 'white'
    },
    inscription: {
        fontSize: 15,
        fontWeight: '500',
        color: '#00FF00'
    }

})

export default LoginScreen;
