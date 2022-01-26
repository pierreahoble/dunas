import SecureStorage from 'react-native-secure-storage'

import React from 'react'

const LocalStorage = () => {
    async function save(key, value) {
        await SecureStorage.setItem(key, JSON.stringify(value))
    }
    async function getValue(key, value) {
        await SecureStorage.getItem(key, JSON.stringify(value))
    }

}

export default LocalStorage;

