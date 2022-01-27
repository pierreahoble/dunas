import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { VStack, Box, Divider, NativeBaseProvider } from 'native-base'

const Card = ({ nom = "Nom user", statut = "Client", code = "HNHDSASJWN", commission = 2000, bonus = 40, total = 0 }) => {
    return (

        <NativeBaseProvider style={styles.container}>
            <View style={styles.titre}>
                <Text style={styles.text}>
                    Informations Utilisateur
                </Text>
            </View>
            <Box border="1" borderRadius="md" style={styles.card}>
                <VStack space="2" divider={<Divider />}>
                    <Box px="4" pt="4" style={styles.box}>
                        {"Nom : " + nom}
                    </Box>
                    <Box px="4" pt="4" pb="4" style={styles.box}>
                        {"Statut : " + statut}
                    </Box>
                    <Box px="4" pb="4" pt="4" style={styles.box}>
                        {" Code d'invitation : " + code}
                    </Box>
                    <Box px="4" pb="4" pt="4" style={styles.box}>
                        {"Commission Achat : " + commission}
                    </Box>

                    <Box px="4" pb="4" pt="4" style={styles.box}>
                        {" Bonus de fin d’année : " + bonus}
                    </Box>
                    <Box px="4" pb="4" pt="4" style={styles.box}>
                        {" Total amis parrainés : " + total}
                    </Box>

                </VStack>
            </Box>
        </NativeBaseProvider>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',

    },
    text: {
        fontFamily: 'PTSans-Regular',
        fontSize: 25,
        fontWeight: '500'
    },

    titre: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    box: {
        // /padding: 0,
        fontSize: 25,
        fontFamily: 'PTSans-Regular',
        width: "90%",
        backgroundColor: "white",
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
    }
})

export default Card;
