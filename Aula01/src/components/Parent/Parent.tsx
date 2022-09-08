import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Child from '../Child/Child';

export default function Parent() {
  const [value, setValue] = useState('');

  function handleLabel(newLabel: string) {
    setValue(newLabel);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Retorno do componente filho: {value}</Text>

      {/* Chamada do Componente Filho */}
      <Child name="Uva" changeLabel={handleLabel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
  },
});
