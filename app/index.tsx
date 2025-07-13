import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Modal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Modal Home Page</Text>
      <Link href={'/modal'}>Modal</Link>
      <Link href={'/webmodal'}>Open Web Modal</Link>
    </View>
  )
};

export default Modal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'skyblue',
    }
});