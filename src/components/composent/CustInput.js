import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

const CustInputP = ({ setvalue, value, placeholder = 'Entrer du text', keyboardType = 'default', secureTextEntry = false }) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.inputbu}
                value={value}
                setvalue={setvalue}
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
        // borderWidth: 1,
        // padding: 10,
        // width: 100,
    },
    inputbu: {
        fontSize: 20,
        fontWeight: '400'
    }
})


export default CustInputP;
