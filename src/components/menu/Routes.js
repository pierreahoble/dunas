import React, { useState, useEffect, useContext } from 'react'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../sreen/Home';
import LoginScreen from '../sreen/LoginScreen'
import DetailScreen from '../sreen/DetailScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

import DrawerContent from './DrawerContent';
import SignUpSreen from '../sreen/SingUpScreen';
import AddCatalogueScreen from '../sreen/AddCatalogueScreen';
import ProfileScreen from '../sreen/ProfileScreen';
import MyCatalogue from '../sreen/MyCatalogue';
import SecureStorage from 'react-native-secure-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SingUpStack = createNativeStackNavigator();
const AddCataStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const MyCataStack = createNativeStackNavigator();


//Home - Acceuil
const HomeStackScreeen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}
                options={{
                    title: 'Accueil',
                    headerTitle: { fontWeigth: '200', fontSize: 50, fontFamily: 'PTSans-Regular' },
                    headerLeft: () => (
                        <Icon name='menu' size={30} color={'black'} onPress={() => navigation.openDrawer()} />)
                }} />
        </HomeStack.Navigator>
    )
}

//Detail
const DetailStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen name='DetailScreen' component={DetailScreen}
                options={{
                    title: 'Details',
                    headerTitle: { fontWeigth: '200', fontSize: 50, fontFamily: 'PTSans-Regular' },
                    headerLeft: () => (
                        <Icon name='md-return-up-back' size={30} color={'black'} onPress={() => navigation.goBack()} />),
                    presentation: 'card',
                }}
            />
        </DetailStack.Navigator>
    )
}


//Login
const LoginStackScreeen = ({ navigation }) => {
    return (
        <LoginStack.Navigator >
            <LoginStack.Screen name='LoginSreen' component={LoginScreen}
                options={{ headerShown: false }}
            />
        </LoginStack.Navigator>
    )
}

//Singup 

const SignUpStackScreeen = ({ navigation }) => {
    return (
        <SingUpStack.Navigator>
            <SingUpStack.Screen
                name='SingUpScreen'
                component={SignUpSreen}
                options={{ headerShown: false }}
            />
        </SingUpStack.Navigator>
    )
}

//Ajouter Catalogue 

const AddCatalogueStackScreen = ({ navigation }) => {
    return (
        <AddCataStack.Navigator>
            <AddCataStack.Screen name='CatalogueScreen' component={AddCatalogueScreen}
                options={{
                    headerTitle: { fontWeigth: '200', fontSize: 50, fontFamily: 'PTSans-Regular' },
                    title: 'Ajouter Un Catalogue',
                    headerLeft: () => (
                        <Icon name='menu' size={30} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </AddCataStack.Navigator>
    )
}


//Profile
const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen}
                options={{
                    title: 'Mon Profile',
                    headerTitle: { fontWeigth: '200', fontSize: 50, fontFamily: 'PTSans-Regular' },
                    headerLeft: () => (
                        <Icon name='menu' size={30} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </ProfileStack.Navigator>
    )
}

//Mes catalogues 

//Profile
const MyCatalaStackScreen = ({ navigation }) => {
    return (
        <MyCataStack.Navigator>
            <MyCataStack.Screen name='MyCataLogueScreee' component={MyCatalogue}
                options={{
                    title: 'La liste de mes catalogues',
                    headerTitle: { fontWeigth: '200', fontSize: 50, fontFamily: 'PTSans-Regular' },
                    headerLeft: () => (
                        <Icon name='menu' size={30} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </MyCataStack.Navigator>
    )
}






const Routes = ({ navigation }) => {
    const [loading, setLoading] = useState(0)
    const contextValue = useContext(AuthContext)
    const { isLogin, setIsLogin } = contextValue



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

    async function getLogin() {
        const val = await AsyncStorage.getItem('isLogin').then(value => {
            value ? setIsLogin(value) : console.log(value);
        })
    }




    useEffect(() => {

    }, [])

    return (

        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false, }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                {
                    isLogin == true ?
                        <>
                            <Drawer.Screen name="HomeAccueil" component={HomeStackScreeen} />
                            <Drawer.Screen name="Detail" component={DetailStackScreen} />
                            <Drawer.Screen name="AddCatalogue" component={AddCatalogueStackScreen} />
                            <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                            <Drawer.Screen name="MyCatalogue" component={MyCatalaStackScreen} />
                        </>
                        :
                        <>
                            <Drawer.Screen name="Login" component={LoginStackScreeen} />
                            <Drawer.Screen name="SignUp" component={SignUpStackScreeen} />
                        </>
                }
            </Drawer.Navigator>

        </NavigationContainer >
    )
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};


export default Routes;
