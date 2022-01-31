import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Logo from '../../../assets/images/logos.jpg';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react/cjs/react.development';



const LoginScreen = (props) => {
    const SERVER_URL = 'http://10.0.2.2:8000/'

    //Stocker un objet en session
    const storeData = async (name, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(name, jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    //recupere la variable de session
    const getData = async (name) => {
        try {
            const jsonValue = await AsyncStorage.getItem(name)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }


    //Stocker une chaine de caractere
    const storeDataString = async (name, value) => {
        try {
            await AsyncStorage.setItem(name, value).then(value => {
                setIsLogin('true')
            })

        } catch (e) {
            // saving error
        }
    }

    //Recupere une chaine de caractere 
    const getDataString = async (name) => {
        try {
            const value = await AsyncStorage.getItem(name)
            if (value !== null) {
                return value
            }
        } catch (e) {
            // error reading value
        }
    }


    //Effacer les valeurs en session
    const removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (e) {
            return false;
        }
    }




    const [active, setActive] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState([])
    // const [isLogin, setIsLogin] = useState('0')
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)

    const loginUser = async () => {
        // console.log(isLogin, user);
        if (email.length > 0 && password.length > 0) {
            setActive(false)
        }
        await axios.post(`${SERVER_URL}api/auth/apiroute`, {
            'email': email,
            'password': password
        }).then((response) => {
            var data = response.data
            if (data.success == true) {
                setActive(true)
                setUser(data.user)
                storeData('user', data.user)
                storeDataString('isLogin', 'true')
                setTimeout(() => {
                    props.navigation.navigate('HomeAccueil')
                    setActive(false)
                }, 2000);
            }

        }).catch((Error) => {
            console.log(Error)
        })
    }

    const goToHome = () => {
        setActive(true)
        setTimeout(() => {
            props.navigation.navigate('HomeAccueil')
            setActive(false)
        }, 1000);


    }


    const goToSingUp = () => {
        setActive(true)
        setTimeout(() => {
            props.navigation.navigate('SignUp')
            setActive(false)
        }, 3000);
    }




    return (
        <ScrollView style={styles.base}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Text style={styles.titre}>Bienvenu Connectez - vous !!</Text>

                <CustInputP placeholder='Votre Adresse Email' keyboardType='email-address' value={(email)} onchangeText={email => setEmail(email)} />
                <CustInputP placeholder='Mot de passe' secureTextEntry value={password} onchangeText={password => setPassword(password)} />
                <Button text='Login' onPress={loginUser} />
                <TouchableOpacity
                    onPress={goToSingUp}
                >
                    {active ?
                        <ActivityIndicator size={'large'} color={'#85c65c'} />
                        : <Text style={styles.inscription}>Vous n'avez pas de compte? S'incire ici !</Text>
                    }
                    {/* <Text style={styles.inscription}>Vous n'avez pas de compte? S'incire ici !</Text> */}
                </TouchableOpacity>
            </View>
            {/* {active ? <ActivityIndicator size={'large'} color={'#85c65c'} /> : null} */}
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
        // fontWeight: 'bold',
        color: 'black',
        fontFamily: 'PTSans-Regular'
    },
    base: {
        backgroundColor: 'white'
    },
    inscription: {
        fontSize: 16,
        fontWeight: '500',
        color: '#85c65c',
        fontFamily: 'PTSans-Regular'
    },
    indicator: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default LoginScreen;
