import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from '../composent/Button';
import CustInputP from '../composent/CustInput';
import axios from 'axios';

import CardBorder from '../composent/CardBorder';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';





const Home = (props) => {
    const SERVER_URL = 'http://10.0.2.2:8000/'
    const PATH_URL = 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

    const [projetTab, setProjetTab] = useState([])
    const { user, setUser } = useContext(AuthContext)
    const { isLogin, setIsLogin } = useContext(AuthContext)




    async function getLogin() {
        setUser(await AsyncStorage.setItem('user'))
        setIsLogin(await AsyncStorage.setItem('isLogin'))
    }

    useEffect(() => {
        getLogin()
    }, [])















    useEffect(() => {
        // const loginValue = getDataString('isLogin').
        //     then(isLogin => setIsLogin(loginValue))


        axios.get(`${SERVER_URL}api/liste_des_projets`)
            .then((response) => {
                var data = response.data
                setProjetTab(data)
            })
    }, [])

    const printLog = () => {
        // console.log(getValue('user'))
        console.log(props)
        // props.navigation.navigate('HomeAccueil', {
        //     screen: 'HomeAccueil'
        // })
    }


    const goToDetail = (projet) => {
        props.navigation.navigate('DetailScreen', {
            name: 'Detatails Produit',
            params: {
                id: 23,
                nom: 'Pierre',
            }
        })
    }

    const displayProjet = () => {
        return <FlatList data={projetTab} renderItem={({ data, index }) =>
            <CardBorder titre={data.raison_sociale} />
        } keyExtractor={index}
        />
    }



    return (



        <ScrollView style={styles.base} >
            {/* <Button onPress={printLog} /> */}
            <View style={styles.content}>
                {projetTab.map((data, index) => {
                    return <CardBorder
                        image={PATH_URL}
                        titre={data.raison_sociale}
                        domaine={data.domaine}
                        adresse={data.adresse}
                        numero={data.telephone}
                        email={data.email}
                        key={index} />
                })}
            </View>

        </ScrollView >


    )
}


const styles = StyleSheet.create({
    base: {
        marginHorizontal: 2,
        paddingTop: 3,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    text: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'PTSans-Regular',
        color: 'black',
        padding: 5,
    },
    content: {
        flex: 1,
        padding: 9,
    }
})

export default Home;
