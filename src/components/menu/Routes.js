import React from 'react'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../sreen/Home';
import LoginScreen from '../sreen/LoginScreen'
import DetailScreen from '../sreen/DetailScreen'
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './DrawerContent';




const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreeen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}
                options={{
                    title: 'Accueil',
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
                }} />
        </HomeStack.Navigator>
    )
}

const DetailStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen name='Detail' component={DetailScreen}
                options={{
                    title: 'Details',
                    headerLeft: () => (
                        <Icon name='menu' size={50} color={'black'} onPress={() => navigation.openDrawer()} />)
                }}
            />
        </DetailStack.Navigator>
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
            </Drawer.Navigator>

        </NavigationContainer >
    )
}

export default Routes;
