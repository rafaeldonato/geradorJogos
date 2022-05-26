import React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';


const ComponentImage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/logoMega2048.png')} />
        </SafeAreaView>
    );
}

export default ComponentImage;


const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        margin: 5,
    },
    imagem: {
        width: 500,
        height: 300,
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        
    }
})
