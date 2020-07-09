import styled from 'styled-components/native';

import {colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerListDrinks = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const CardDrink = styled.TouchableOpacity`
  width: 170px;
  height: 170px;
  margin-bottom: 10px;
  margin-left: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ImageCard = styled.Image`
  width: 120px;
  height: 110px;
  border-radius: 10px;
  top: 20px;
  position: relative;
`;

export const AreaTitle = styled.View`
  background: ${colors.white};
  width: 100%;
  height: 45%;
  justify-content: space-around;
  border-radius: 8px;
  align-items: center;
  position: relative;
  elevation: 5;
  padding: 5px;
`;

export const TitleCard = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const ButtonDetails = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  background: ${colors.primary};
`;

export const TextButtonDetails = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`;
