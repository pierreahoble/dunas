import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import CustInputP from '../composent/CustInput';
import Button from '../composent/Button';
import Dropdown from '../composent/Dropdown';
import TextArea from '../composent/TextArea';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';



const Formulaire = ({ route, navigation }) => {
    const { user } = useContext(AuthContext)
    const authUser = JSON.parse(user)
    const SERVER_URL = 'http://10.0.2.2:8000/'
    const { params } = route
    const ville = JSON.stringify(params.ville)
    const formeJuridique = JSON.stringify(params.formeJuridique)
    const adresse = JSON.stringify(params.adresse)
    const departement = JSON.stringify(params.departement)
    const raison = JSON.stringify(params.raison)
    const representant = JSON.stringify(params.representant)



    const [province, setProvince] = useState('')
    const [domaine, setDomaine] = useState('')
    const [description, setDescription] = useState('')
    const [telephone, setTelephone] = useState('')




    const provinces = ["Estuaire", "Ougoué-Lolo", "Ougoué-Ivindo"]


    const save = () => {
        if (province === '' || domaine === '' || description === '' || telephone === '') {
            alert(province)
            // alert('Remplissez tous les champs')
        } else {
            axios.post(`${SERVER_URL}api/update_compte`, {
                province,
                telephone,
                domaine,
                description,
                ville,
                raison,
                representant,
                adresse,
                formeJuridique,
                departement,
                'id': authUser.id
            }).then((response) => {
                console.log(response);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }



    const log = () => {
        console.log(authUser.id);
    }



    return (
        <ScrollView >
            <View style={styles.container} >
                <Text style={styles.text}> REMPLIRE LES CHAMPS DU FORMULAIRE :</Text>


                <Dropdown titre='PROVINCE' data={provinces} onValueChange={(itemValue, itemIndex) => setProvince(itemValue)} />
                <CustInputP placeholder='Téléphone +241 90 25 90 67' keyboardType='numeric' value={telephone} onchangeText={value => setTelephone(value)} />
                <TextArea placeholder={"Domaine d'activité"} value={domaine} onChangeText={(value) => setDomaine(value)} />
                <TextArea placeholder={"Description de votre d'activité"} value={description} onChangeText={(value) => setDescription(value)} />
                <CustInputP placeholder="Choisir une Image de l'entreprise" />

                <Button text="Enrégistrer" onPress={save} />



                {/* <Button text="Console Log" onPress={log} /> */}



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
        marginVertical: 30
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
