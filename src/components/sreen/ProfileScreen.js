import React, { useEffect, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AuthContext from '../../context/AuthContext';
import Button from '../composent/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from '../composent/Card'

const ProfileScreen = () => {
    const [user, setUser] = useState([])



    const getAuthUser = async () => {
        try {
            const valUser = await AsyncStorage.getItem('user')
            setUser(JSON.parse(valUser))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAuthUser()
        console.log(user);
    }, [])






    return (
        <View>
            <Card nom={" " + user.name} statut={user.roles} code={user.code_dinvitation} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileScreen;
