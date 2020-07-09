import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f0f0f5;
  border-radius: 10px;
  border-width: 2px;
  border-color: #666;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;

  font-size: 16px;
`;

export const AreaInput = styled.View`
  flex: 6;
`;

export const AreaIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconSearch = styled(Icon)``;
