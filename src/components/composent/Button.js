import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, text = 'Button', type = "PRIMARY" }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                styles[`container_${type}`],
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#85c65c',
        width: "90%",
        height: 50,
        borderRadius: 7,
        margin: 10,
        elevation: 10,
    },
    text: {
        alignSelf: 'center',
        padding: 9,
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        fontFamily: 'PTSans-Regular'
    },
    container_DANGER: {
        backgroundColor: '#FF6600'
    },
    container_INFO: {
        backgroundColor: '#6600FF'
    },
    container_WARNNING: {
        backgroundColor: '#FFFF00'
    }

})

export default Button;