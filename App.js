import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import ComponentImage from './components/imagem';
import MegaSena from './components/megaSena';



export default function App() {


  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('./assets/bgWhite.jpg')} style={styles.imageBackground}>
      <ComponentImage />
      <MegaSena />
      </ImageBackground>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    opacity: 0.9
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
});


