import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setName('Usuário');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textUser}>Bem vindo, {name}</Text>
      <View style={styles.body}>
        <Text style={styles.textStyle}>Contador</Text>
        <Text style={styles.countStyle}>{count}</Text>
        <Button title="Incrementar" onPress={increment} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUser: {
    width: '90%',
    marginBottom: 10,
    alignItems: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'normal',
  },
});
