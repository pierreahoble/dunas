import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import Dropdown from '../composent/Dropdown';



const Entrepreneur = (props) => {

    const [formeJuridique, setFormeJuridique] = useState('')




    const formes = ["Société", "Entreprise Indiviuelle"]

    const goToNext = () => {
        // console.log(props)
        props.navigation.navigate('Formulaire')
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView >
            <View style={styles.container} >
                <Text style={styles.text}> REMPLIRE LES CHAMPS DU FORMULAIRE :</Text>


                <CustInputP placeholder='Raison Sociale' />
                <Dropdown titre='FORME JURIDIQUE' data={formes} value={formeJuridique} onValueChange={(itemValue, itemIndex) => setFormeJuridique({ itemValue })} />
                <CustInputP placeholder='Représentant Légal' />
                <CustInputP placeholder='Adresse' />
                <CustInputP placeholder='Ville' />



                <Button text="Suivant ...>>" onPress={goToNext} />

                {/* <CustInputP placeholder='Departement' />
                <CustInputP placeholder='Province' />
                <CustInputP placeholder='Téléphone' keyboardType='numeric' />
                <CustInputP placeholder="Domaine d'activité" />
                <CustInputP placeholder="Description de votre d'activité" />
 */}

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        marginVertical: 30,
    },
    text: {
        margin: 5,
        color: 'black',
        fontFamily: 'PTSans-Regular',
        fontSize: 17,
        fontWeight: 'bold'
    },
})

export default Entrepreneur;
