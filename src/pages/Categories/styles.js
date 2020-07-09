import styled, {css} from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
  background: #f4f4ff;
`;

export const ContainerList = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
`;

export const TitleCategories = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: ${colors.dark};

  margin-top: 25px;
  padding: 10px 25px;
`;

export const ListCategories = styled.ScrollView``;

export const CardCategories = styled.TouchableOpacity`
  height: 200px;
  width: 45%;
  background: #ffff;
  border: 2px;
  border-color: #f0f0f5;
  align-items: center;
  margin-right: 5px;
  border-radius: 8px;

  justify-content: space-around;

  ${props =>
    props.isSelected &&
    css`
      border-color: #c72828;
      background-color: #ffebeb;
    `}
`;

export const TitleCard = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;

  /* Textos */

  color: #6c6c80;
`;

export const ImageCard = styled.Image`
  height: 90px;
  width: 90px;
`;

export const ContainerButton = styled.View`
  padding: 10px;
`;
