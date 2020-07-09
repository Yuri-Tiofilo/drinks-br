import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';

import LogoCock from '../../assets/images/cocktails.png';
import LogoOrdnary from '../../assets/images/ordinary.png';

import * as ActionsCategory from '../../store/modules/categories/actions';

import {
  Container,
  ListCategories,
  ContainerList,
  TitleCategories,
  CardCategories,
  TitleCard,
  ImageCard,
  ContainerButton,
} from './styles';

const Categories = () => {
  const dispatch = useDispatch();

  const {goBack} = useNavigation();

  const [categorySelected, setCategorySelected] = useState(-1);
  const [categorySelectedData, setCategorySelectedData] = useState([]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      icon: '',
      name: 'Ordinary Drink',
    },
    {
      id: 2,
      icon: '',
      name: 'Cocktail',
    },
  ]);

  function onSelectCategory(category) {
    setCategorySelected(category.id);
    setCategorySelectedData(category);
  }

  function handleMoreCatalogDrinks() {
    dispatch(ActionsCategory.requestDrinks(categorySelectedData));
  }

  function returnImageCard(nameCategory) {
    if (nameCategory === 'Cocktail') {
      return (
        <ImageCard
          source={LogoCock}
          resizeMode="contain"
          width={200}
          height={200}
        />
      );
    }
    if (nameCategory === 'Ordinary Drink') {
      return (
        <ImageCard
          source={LogoOrdnary}
          resizeMode="contain"
          width={200}
          height={200}
        />
      );
    }
    return (
      <ImageCard
        source={LogoCock}
        resizeMode="contain"
        width={200}
        height={200}
      />
    );
  }

  return (
    <Container>
      <Header
        functionOnPressIcon={() => {
          goBack();
        }}>
        DrinksBR
      </Header>
      <TitleCategories>Select a category:</TitleCategories>
      <ContainerList>
        <ListCategories
          contentContainerStyle={{
            marginTop: 10,
            justifyContent: 'center',
            width: '100%',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <CardCategories
              key={category.id}
              onPress={() => {
                onSelectCategory(category);
              }}
              isSelected={category.id === categorySelected}>
              {returnImageCard(category.name)}
              <TitleCard>{category.name}</TitleCard>
            </CardCategories>
          ))}
        </ListCategories>
      </ContainerList>
      {categorySelected !== -1 ? (
        <ContainerButton>
          <Button
            functionOnPress={() => {
              handleMoreCatalogDrinks();
            }}>
            see complete catalog
          </Button>
        </ContainerButton>
      ) : null}
    </Container>
  );
};

export default Categories;
