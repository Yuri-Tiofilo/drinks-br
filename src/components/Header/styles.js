import styled from 'styled-components/native';

import {colors} from '../../styles';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const AreaHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const TitleHeader = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${colors.white};
  padding-left: 10px;
  font-weight: bold;
`;
export const AreaTitle = styled.View``;

export const AreaBack = styled.TouchableOpacity`
  width: 25px;
  height: 25px;

  margin-right: 10px;
`;
