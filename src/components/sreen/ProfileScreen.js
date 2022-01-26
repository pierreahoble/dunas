import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

import Card from '../composent/Card'

const ProfileScreen = () => {
    return (
        <Card />
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
