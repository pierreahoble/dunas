import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Avatar, Card, Paragraph, Title, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardBorder = ({ data, titre = "Titre du Card", titreDuButton, onPress, image = 'https://picsum.photos/700', domaine = 'infor', adresse = 'adresse', numero = 'numero', email = 'email@email.com' }) => {
    const PATH_URL = 'https://images.unsplash.com/photo-1629963917992-1d3baadfddd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'

    return (


        <Card style={styles.card}>
            <View style={styles.view_1}>
                <View style={styles.image}>
                    <Card.Cover source={{ uri: image ? image : PATH_URL }} />
                </View>
                <View style={styles.text_1}>
                    <Text style={styles.titre}>{titre.toUpperCase()} </Text>
                    <Text style={styles.info}>{domaine} </Text>
                    <Text style={styles.info}> <Icon name="location" size={15} style={styles.icon} /> {adresse} </Text>
                    <Text style={styles.info}> <Icon name="mail" size={15} style={styles.icon} /> {email} </Text>
                    <Text style={styles.info}> <Icon name="md-phone-portrait-sharp" size={15} style={styles.icon} /> {numero} </Text>
                </View>
            </View>
        </Card>


        // <FlatList data={data}
        // renderItem={({ item, index }) =>
        // } keyExtractor={item => item.ID}

        // />

    )
}

const styles = StyleSheet.create({

    card: {
        margin: 5,
        borderRadius: 10,
        // padding: 1
    },
    text_1: {
        flex: 1,
        padding: 10,
        margin: 2,
    },
    view_1: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-between",
        marginLeft: 10,

    },
    image: {
        flex: 1,
        maxWidth: '35%',

    },

    titre: {
        fontFamily: 'PTSans-Regular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        fontFamily: 'PTSans-Bold',
        fontSize: 15,
    },
    icon: {
        color: "#85c65c"
    }

})


export default CardBorder;


{/* <Card style={styles.card}>
<Card.Content>
    <Card.Cover source={{ uri: image }} style={styles.image} />
    <Title> {titre.toUpperCase()}</Title>
</Card.Content>
<Card.Actions >
    <Button onPress={onPress} >{titreDuButton}</Button>
</Card.Actions>
</Card> */}