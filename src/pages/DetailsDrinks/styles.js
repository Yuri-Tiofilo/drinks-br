import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AreaImage = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Image = styled.Image`
  height: 210px;
  width: 220px;
`;

export const AreaDescripition = styled.View`
  padding: 20px;
`;

export const Descripition = styled.Text`
  text-align: center;
  font-size: 18px;

  width: 100%;

  background: #fff;
  border-radius: 10px;
  elevation: 5;
  padding: 10px;
`;

export const AreaIngredients = styled.View`
  flex: 1;

  justify-content: center;
  padding: 20px;
`;

export const Ingredients = styled.ScrollView``;

export const CardIngredients = styled.View`
  width: 100%;
  padding: 5px;
`;

export const DecorationIngredient = styled.View`
  height: 48px;
  margin-bottom: 10px;
  elevation: 5;
  background: #fff;
  justify-content: center;
  padding-left: 20px;
`;

export const TextIngredients = styled.Text`
  font-weight: bold;
  color: #707070;
  font-size: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;

  padding-left: 20px;
  padding-top: 10px;
`;
