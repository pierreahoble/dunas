import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';



const Dropdown = ({ value, onValueChange, titre = 'Choississez une ville', data = ["javaScript", "TypeScript", "PHP", "Python"] }) => {

    // data = ["javaScript", "TypeScript", "PHP", "Python"]

    return (
        <View style={styles.viewPicker}>
            <Picker style={styles.picker}
                prompt={titre}
                selectedValue={value}
                onValueChange={onValueChange}>
                {
                    data.map(libelle => <Picker.Item key={libelle} label={libelle} value={libelle} />)
                }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        width: "100%",
        backgroundColor: 'white',
        borderColor: 'black',
        elevation: 10
    },
    viewPicker: {
        width: "90%",
        height: 50,
        margin: 10,
        borderWidth: 1,
    }
})

export default Dropdown;