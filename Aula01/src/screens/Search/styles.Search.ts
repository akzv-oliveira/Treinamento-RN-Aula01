//@ts-ignore
import styled from 'styled-components/native';

export const SearchView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SearchText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const SearchTextInput = styled.TextInput`
  margin-top: 10px;
`;

export const SearchResult = styled.View`
  width: 80%;
  height: 20%;
  justify-content: center;
`;

export const SearchLabel = styled.Text`
  font-weight: normal;
  font-size: 16px;
`;
