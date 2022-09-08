import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

//@ts-ignore
export default function StackScreen01({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Estou na tela 01</Text>
      <Button
        title="Próxima Tela"
        onPress={() => navigation.navigate('Screen02')}
      />
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
    color: 'blue',
  },
});
