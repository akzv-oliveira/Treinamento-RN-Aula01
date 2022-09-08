import React, {useState} from 'react';
import {Button} from 'react-native';

import {
  SearchView,
  SearchText,
  SearchTextInput,
  SearchResult,
  SearchLabel,
} from './styles.Search';

import api from '../../services/api';

export interface ISearchResponse {
  localidade: string;
  bairro: string;
  logradouro: string;
}

export default function SearchScreen() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResponse, setSearchResponse] = useState<ISearchResponse>({
    localidade: '',
    bairro: '',
    logradouro: '',
  });

  const getCep = async () => {
    const {data} = await api.get(`${searchValue}/json`);
    setSearchResponse(data);
  };

  return (
    <SearchView>
      <SearchText>Digite um CEP</SearchText>
      <SearchTextInput
        placeholder="Digite um valor"
        onChangeText={(newValue: string) => setSearchValue(newValue)}
      />
      <Button title="Buscar" onPress={getCep} />

      <SearchResult>
        <SearchLabel>Cidade: {searchResponse.localidade}</SearchLabel>
        <SearchLabel>Bairro: {searchResponse.bairro}</SearchLabel>
        <SearchLabel>Logradouro: {searchResponse.logradouro}</SearchLabel>
      </SearchResult>
    </SearchView>
  );
}
