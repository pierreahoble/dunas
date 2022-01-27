import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import Dropdown from '../composent/Dropdown';
import TextArea from '../composent/TextArea';


const Formulaire = (props) => {
    const [province, setProvince] = useState('')
    const [departement, setDepartement] = useState('')
    const [domaine, setDomaine] = useState('')
    const [description, setDescription] = useState('')



    const save = () => {
        alert(domaine)
    }

    const provinces = ["Estuaire", "Ougoué-Lolo", "Ougoué-Ivindo"]
    const departements = ["Lolo-Bouenguidi", "Libreville", "Lombo-Bouenguidi", "Lopé"]

    return (
        <ScrollView >
            <View style={styles.container} >
                <Text style={styles.text}> REMPLIRE LES CHAMPS DU FORMULAIRE :</Text>

                <Dropdown titre='DEPARTEMENT' data={departements} value={departement} onValueChange={(itemValue, itemIndex) => setDepartement({ itemValue })} />
                <Dropdown titre='PROVINCE' data={provinces} />
                <CustInputP placeholder='Téléphone' keyboardType='numeric' />
                <TextArea placeholder={"Domaine d'activité"} value={domaine} onChangeText={(value) => setDomaine(value)} />
                <TextArea placeholder={"Description de votre d'activité"} value={description} onChangeText={(value) => setDescription(value)} />
                <CustInputP placeholder="Choisir une Image de l'entreprise" />

                <Button text="Enrégistrer" onPress={save} />



            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 30,
    },
    text: {
        margin: 5,
        color: 'black',
        fontFamily: 'PTSans-Regular',
        fontSize: 17,
        fontWeight: 'bold'

    }

})

export default Formulaire;
