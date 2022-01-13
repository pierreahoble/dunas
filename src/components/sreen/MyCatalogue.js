import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const MyCatalogue = () => {
    return (
        <View style={styles.container}>
            <Text>
                je suis la liste de vos catalogues
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MyCatalogue;
