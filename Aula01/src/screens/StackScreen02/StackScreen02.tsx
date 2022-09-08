import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function StackScreen02() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Estou na tela 02</Text>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
