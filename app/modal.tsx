import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Modal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Modal</Text>
    </View>
  )
};

export default Modal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'skyblue',
    }
});