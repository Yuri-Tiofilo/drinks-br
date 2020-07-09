import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

import {
  Container,
  AreaDescripition,
  AreaIngredients,
  AreaImage,
  Image,
  Descripition,
  Ingredients,
  CardIngredients,
  TextIngredients,
  Title,
  DecorationIngredient,
} from './styles';

const DetailsDrinks = () => {
  const [dataIngredients, setDataIngredients] = useState([]);

  const {drink} = useSelector(state => state.drinks);

  useEffect(() => {
    const {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
    } = drink;

    const data = {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
    };

    const vet = [];

    vet.push(data);
    setDataIngredients(vet);
  }, [drink]);

  const {goBack} = useNavigation();

  return (
    <Container>
      <Header
        nameIcon="arrow-left"
        functionOnPressIcon={() => {
          goBack();
        }}>
        {drink.strDrink}
      </Header>

      <AreaImage>
        <Image source={{uri: drink.strDrinkThumb}} />
      </AreaImage>

      <Title>Description</Title>

      <AreaDescripition>
        <Descripition>{drink.strInstructions}</Descripition>
      </AreaDescripition>

      <Title>Some ingredients</Title>

      <AreaIngredients>
        <Ingredients>
          {dataIngredients.map((ingredient, index) => (
            <CardIngredients key={ingredient.strIngredient1}>
              <DecorationIngredient>
                <TextIngredients>{ingredient.strIngredient1}</TextIngredients>
              </DecorationIngredient>
              <DecorationIngredient>
                <TextIngredients>{ingredient.strIngredient2}</TextIngredients>
              </DecorationIngredient>
              <DecorationIngredient>
                <TextIngredients>{ingredient.strIngredient3}</TextIngredients>
              </DecorationIngredient>
              <DecorationIngredient>
                <TextIngredients>{ingredient.strIngredient4}</TextIngredients>
              </DecorationIngredient>
            </CardIngredients>
          ))}
        </Ingredients>
      </AreaIngredients>
    </Container>
  );
};

export default DetailsDrinks;
