import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React, { useState, useEffect, cloneElement } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import Dropdown from '../composent/Dropdown';



const Entrepreneur = (props) => {

    const departements = ["Lolo-Bouenguidi", "Libreville", "Lombo-Bouenguidi", "Lopé"]


    const [formeJuridique, setFormeJuridique] = useState('')
    const [departement, setDepartement] = useState('')
    const [raison, setRaison] = useState('')
    const [representant, setRepresentant] = useState('')
    const [adresse, setAdresse] = useState('')
    const [ville, setVille] = useState('')




    const formes = ["Société", "Entreprise Indiviuelle"]

    const goToNext = () => {
        if (raison === '' || representant === '' || adresse === '' || ville === '') {
            alert("Remplissez tous les champs")
        } else {
            props.navigation.navigate('Entreprise', {
                screen: 'FormulaireScreen',
                params: {
                    formeJuridique,
                    departement,
                    raison,
                    representant,
                    adresse,
                    ville
                }
            })
        }
    }

    useEffect(() => {

    }, [])

    return (
        <ScrollView >
            <View style={styles.container} >
                <Text style={styles.text}> REMPLIRE LES CHAMPS DU FORMULAIRE :</Text>


                <CustInputP placeholder='Raison Sociale' value={raison} onchangeText={value => setRaison(value)} />
                <Dropdown titre='FORME JURIDIQUE' data={formes} value={formeJuridique} onValueChange={(itemValue, itemIndex) => setFormeJuridique({ itemValue })} />
                <Dropdown titre='DEPARTEMENT' data={departements} value={departement} onValueChange={(itemValue, itemIndex) => setDepartement({ itemValue })} />
                <CustInputP placeholder='Représentant Légal' value={representant} onchangeText={value => setRepresentant(value)} />
                <CustInputP placeholder='Adresse' value={adresse} onchangeText={value => setAdresse(value)} />
                <CustInputP placeholder='Ville' value={ville} onchangeText={value => setVille(value)} />


                <Button text="Enrégistrer" onPress={goToNext} />

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
