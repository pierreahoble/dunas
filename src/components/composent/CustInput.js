import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

const CustInputP = ({ setvalue, value, placeholder = 'Entrer du text', keyboardType = 'default', secureTextEntry = false, onchangeText }) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.inputbu}
                value={value}
                setvalue={setvalue}
                onChangeText={onchangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        width: "90%",

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,

        paddingHorizontal: 15,
        marginVertical: 7,
        // height: 40,
        margin: 12,
        elevation: 5,
    },
    inputbu: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'PTSans-Regular'
    }
})


export default CustInputP;
