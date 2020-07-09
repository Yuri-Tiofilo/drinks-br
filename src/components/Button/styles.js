import styled from 'styled-components/native';

import {colors} from '../../styles';

export const Container = styled.TouchableOpacity`
  background: ${colors.secundary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.black};
  flex: 1;
  text-align: center;
  text-transform: uppercase;
`;

export const IconContainer = styled.View`
  background-color: ${colors.secundaryLight};
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.View`
  width: 20px;
  height: 20px;
`;
