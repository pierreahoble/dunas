import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Logo from '../../../assets/images/logos.jpg';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import axios from 'axios';

const SignUpSreen = (props) => {
    const SERVER_URL = 'http://10.0.2.2:8000/'

    const [active, setActive] = useState(false)
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')

    const register = () => {
        if (email == '' || password == '' || nom == '' || prenom == '' || telephone == '') {
            alert('vous devez remplir tous les champs')
        } else {
            setActive(true)
            axios.post(`${SERVER_URL}api/auth/signup`, {
                'nom': nom,
                'prenom': prenom,
                'telephone': telephone,
                'email': email,
                'password': password,
                'code': code
            }).then((response) => {
                console.log(response)
                // if (response.data.status === 200) {
                //     setTimeout(() => {
                //         props.navigation.navigate('Login')
                //         setActive(false)
                //     }, 3000);

                // }
            })
        }
        setActive(false)
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

                <CustInputP placeholder='Nom' value={nom} onchangeText={value => setNom({ value })} />
                <CustInputP placeholder='Prénoms' value={prenom} onchangeText={value => setPrenom({ value })} />
                <CustInputP placeholder='Téléphone ' keyboardType='numeric' value={telephone} onchangeText={value => setTelephone({ value })} />
                <CustInputP placeholder='Adresse Email' keyboardType='email-address' value={email} onchangeText={value => setEmail({ value })} />
                <CustInputP placeholder='Mot de passe' secureTextEntry value={password} onchangeText={value => setPassword({ value })} />
                <CustInputP placeholder="Code d'invation" value={code} onchangeText={value => setCode({ value })} />
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
        paddingTop: 15,
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
        margin: 1,
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
