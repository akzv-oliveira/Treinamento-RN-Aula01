import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  name: string;
  changeLabel: (newLabel: string) => void;
}

const Child: React.FC<Props> = ({name, changeLabel}) => {
  const [inputValue, setInputValue] = useState('');

  function sendNewLabel() {
    changeLabel(inputValue);
  }

  return (
    <View>
      <Text style={styles.text}>Retorno do componente pai: {name}</Text>
      <TextInput
        placeholder="Digite um valor"
        onChangeText={newText => setInputValue(newText)}
        style={styles.input}
      />
      <Button title="Enviar" onPress={sendNewLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  input: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
});

export default Child;
