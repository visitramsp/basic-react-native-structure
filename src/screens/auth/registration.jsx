import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Registration() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={[styles.text, { color: "black" }]}>Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Registration Screen</Text>
            <Text style={styles.text}>This is a placeholder for the registration form.</Text>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        // textAlign: 'center',
        margin: 10,
        color: "red"
    },
});  
