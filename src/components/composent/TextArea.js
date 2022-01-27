import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import React from 'react';

const TextArea = ({ value, onChangeText, placeholder = 'Votre message' }) => {
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={3}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />

        </View>
    );
};

export default TextArea;

const styles = StyleSheet.create({
    input: {
        // margin: 12,
        // borderWidth: 1,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'PTSans-Regular'
    },
    view: {
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

    }
});
