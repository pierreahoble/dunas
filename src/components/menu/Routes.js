import React from 'react'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../sreen/Home';
import LoginScreen from '../sreen/LoginScreen'
import DetailScreen from '../sreen/DetailScreen'
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './DrawerContent';
import SignUpSreen from '../sreen/SingUpScreen';
import AddCatalogueScreen from '../sreen/AddCatalogueScreen';
import ProfileScreen from '../sreen/ProfileScreen';
import MyCatalogue from '../sreen/MyCatalogue';



const Drawer = createDrawerNavigator();

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
            <HomeStack.Screen name='HomeAccueil' component={Home}
                options={{
                    title: 'Accueil',
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
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
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </DetailStack.Navigator>
    )
}


//Login
const LoginStackScreeen = ({ navigation }) => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name='LoginSreen' component={LoginScreen}
            // options={{
            //     title: 'Login',
            //     headerLeft: () => (
            //         <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
            // }}
            />
        </LoginStack.Navigator>
    )
}

//Singup 

const SignUpStackScreeen = ({ navigation }) => {
    return (
        <SingUpStack.Navigator>
            <SingUpStack.Screen name='SingUpScreen' component={SignUpSreen}
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
                    title: 'Ajouter Un Catalogue',
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
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
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
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
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </MyCataStack.Navigator>
    )
}





const Routes = () => {
    return (
        <NavigationContainer>

            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeStackScreeen} />
                <Drawer.Screen name="Detail" component={DetailStackScreen} />
                <Drawer.Screen name="Login" component={LoginStackScreeen} />
                <Drawer.Screen name="SignUp" component={SignUpStackScreeen} />
                <Drawer.Screen name="AddCatalogue" component={AddCatalogueStackScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                <Drawer.Screen name="MyCatalogue" component={MyCatalaStackScreen} />
            </Drawer.Navigator>

        </NavigationContainer >
    )
}

export default Routes;
