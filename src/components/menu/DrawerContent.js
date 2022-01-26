import React, { useEffect, useState, useContext } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';


function DrawerContent(props) {
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)

    const getLog = async () => {
        setIsLogin(await AsyncStorage.getItem('isLogin'))
        // setUser(await AsyncStorage.getItem('user'))

    }


    useEffect(() => {
        getLog()
    }, [])

    const logout = async () => {
        setIsLogin(false)
        await AsyncStorage.setItem('isLogin', 'false')
        props.navigation.navigate('Login')
    }

    var color = '#85c65c'

    const myIcon = <Icon name="md-home" size={20} color="black" />;
    const proIcon = <Icon name="md-search-sharp" size={30} color="#900" />;

    const { navigation } = props
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <View style={styles.view}>
                <Image style={styles.image}
                    source={{ uri: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg' }} />
                <Text style={styles.text}>
                    Pierre AHOBLE
                </Text>
                <Text style={styles.caption}>
                    Client
                </Text>
            </View>
            <DrawerItem
                labelStyle={styles.label}
                label={'Accueil'}
                onPress={() => navigation.navigate('Home')}
                icon={() => <Icon name='md-home' size={20} color={color} />}
            />

            {/* <DrawerItem
                label={'Login'}
                onPress={() => navigation.navigate('Login')}
            /> */}

            {/* <DrawerItem
                label={'Inscription'}
                onPress={() => navigation.navigate('SignUp')}
            /> */}

            <DrawerItem
                labelStyle={styles.label}
                label={'Ajouter Un Catalogue'}
                onPress={() => navigation.navigate('AddCatalogue')}
                icon={() => <Icon name='md-list-outline' size={20} color={color} />}
            />

            <DrawerItem
                labelStyle={styles.label}
                label={'Profile'}
                onPress={() => navigation.navigate('Profile')}
                icon={() => <Icon name='md-person-sharp' size={20} color={color} />}
            />
            <DrawerItem
                labelStyle={styles.label}
                label={'Liste de Mes Catalogues'}
                onPress={() => navigation.navigate('MyCatalogue')}
                icon={() => <Icon name='rocket' size={20} color={color} />}
            />


            <DrawerItem
                labelStyle={styles.label}
                label={'Deconnexion'}
                onPress={logout}
                icon={() => <Icon name='log-out' size={20} color={color} />}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40

    },
    text: {
        marginTop: 8,
        fontSize: 15,
        fontFamily: 'PTSans-Regular',
    },
    icon: {
        width: 80,
        height: 90
    },
    label: {
        fontSize: 15,
        fontFamily: 'PTSans-Regular',
    },
    caption: {
        fontSize: 15,
        fontFamily: 'PTSans-Regular',
    }
})
export default DrawerContent;