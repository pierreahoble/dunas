import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';

const AddCatalogueScreen = () => {

    //add catalogue 
    const addCatalogue = () => {
        alert('add-catalogue')
    }



    return (
        <ScrollView style={styles.base}>
            <View style={styles.container}>
                <Text style={styles.titre} >
                    Ajouter un Catalogue
                </Text>
                <CustInputP placeholder='Choisir le Fichier .png, .jpg' />
                <Button text='Sauvegarder' onPress={addCatalogue} />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titre: {
        margin: 5,
        fontSize: 25,
        paddingTop: 40,
        padding: 30,
        fontWeight: '400',
        color: 'black',
        fontFamily: 'PTSans-Regular'
    },
})

export default AddCatalogueScreen;
