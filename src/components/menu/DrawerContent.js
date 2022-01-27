import React, { useEffect, useState, useContext } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Image,
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';


function DrawerContent(props) {
    const [active, setActive] = useState(false)
    const [authUser, setAuthUser] = useState([])
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)

    // const { name, roles } = user.user ? user : ''

    const getLog = async () => {
        setIsLogin(await AsyncStorage.getItem('isLogin'))
        setUser(await AsyncStorage.getItem('user'))
    }

    const getAuthUser = async () => {
        try {
            const valUser = await AsyncStorage.getItem('user')
            setAuthUser(JSON.parse(valUser))

        } catch (error) {

        }
    }


    useEffect(() => {
        getLog()
        getAuthUser()
    }, [])

    const logout = async () => {
        setActive(true)
        setIsLogin(false)
        await AsyncStorage.setItem('isLogin', 'false')
        setTimeout(() => {
            props.navigation.navigate('Login')
            setActive(false)
        }, 1000);
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
                    {authUser ? authUser.name : ''}
                </Text>
                <Text style={styles.caption}>
                    {authUser ? authUser.roles : ''}
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
            {active && <ActivityIndicator size={'large'} color={'#85c65c'} />}

            {
                authUser?.roles === 'Consultant' &&
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Entreprise')}
                >
                    <Text style={styles.text_button}>Devenir Operateur </Text>
                </TouchableOpacity>
            }


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
        fontWeight: 'bold'
    },
    icon: {
        width: 80,
        height: 90
    },
    label: {
        fontSize: 15,
        fontFamily: 'PTSans-Regular',
    },
    label_C: {
        fontSize: 20,
        fontFamily: 'PTSans-Regular',
        justifyContent: 'center',
        backgroundColor: '#85c65c',
        width: "100%",
        height: 30,
        margin: 15,
    },
    caption: {
        fontSize: 15,
        fontFamily: 'PTSans-Regular',
    },
    button: {
        backgroundColor: '#85c65c',
        width: "90%",
        height: 50,
        borderRadius: 7,
        margin: 10,
    },
    text_button: {
        alignSelf: 'center',
        padding: 9,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        fontFamily: 'PTSans-Regular'
    }
})
export default DrawerContent;