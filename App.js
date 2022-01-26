/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Routes from './src/components/menu/Routes';
import AuthContext from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';






const App = ({ props }) => {
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(false)


  async function getIsLogin() {
    const val = await AsyncStorage.getItem('isLogin').then(value => {
      value === true ? setIsLogin(value) : ''
      console.log('isLogin ====>' + value);
    })
    const valuser = await AsyncStorage.getItem('user').then(value => {
      setUser(value)
      console.log(value)
    })
  }



  useEffect(() => {
    getIsLogin()
  }, [])


  const contextValue = {
    user: user,
    setUser: setUser,
    isLogin: isLogin,
    setIsLogin: setIsLogin
  }


  return (
    <AuthContext.Provider value={contextValue}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;
