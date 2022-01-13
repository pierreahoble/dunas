import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { Image, View, Text, StyleSheet } from 'react-native';

function DrawerContent(props) {
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
            </View>
            <DrawerItem
                label={'Home'}
                onPress={() => navigation.navigate('Home')}
            />

            <DrawerItem
                label={'Profile'}
                Icon={() => <Image style={styles.icon}
                    source={{ uri: 'https://icon-library.com/images/home-icon-vector/home-icon-vector-15.jpg' }} />}
                onPress={() => alert("ok")}
            />
            <DrawerItem
                label={'Login'}
                onPress={() => navigation.navigate('Login')}
            />

            <DrawerItem
                label={'Inscription'}
                onPress={() => navigation.navigate('SignUp')}
            />

            <DrawerItem
                label={'Ajouter Un Catalogue'}
                onPress={() => navigation.navigate('AddCatalogue')}
            />

            <DrawerItem
                label={'Profile'}
                onPress={() => navigation.navigate('Profile')}
            />
            <DrawerItem
                label={'Liste de Mes Catalogues'}
                onPress={() => navigation.navigate('MyCatalogue')}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        paddingVertical: 24
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40

    },
    text: {
        marginTop: 8
    },
    icon: {
        width: 80,
        height: 90
    }
})
export default DrawerContent;