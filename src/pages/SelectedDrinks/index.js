import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';

import * as ActionsDrinks from '../../store/modules/drinks/actions';

import {
  Container,
  ContainerListDrinks,
  CardDrink,
  ImageCard,
  AreaTitle,
  TitleCard,
  ButtonDetails,
  TextButtonDetails,
} from './styles';

const SelectedDrinks = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [listDrinkAux, setListDrinkAux] = useState([]);

  const {drinks, titleHeader} = useSelector(state => state.categories);
  const {loading} = useSelector(state => state.common);

  console.log(drinks);

  const {goBack} = useNavigation();

  useEffect(() => {
    setListDrinkAux(drinks);
  }, [drinks]);// eslint-disable-line


  useEffect(() => {
    const data = listDrinkAux
      .map(drink => {
        return drink;
      })
      .filter(drink => {
        return (
          drink.strDrink.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      });
    if (search === '') {
      setListDrinkAux(drinks);
    } else {
      setListDrinkAux(data);
    }
  }, [search]);// eslint-disable-line

  function handleMoreDetailsDrinks(idDrinks) {
    dispatch(ActionsDrinks.requestMoreDetailsDrink(idDrinks));
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header
            nameIcon="arrow-left"
            functionOnPressIcon={() => {
              goBack();
            }}>
            {titleHeader}
          </Header>
          <InputSearch
            value={search}
            functionOnChange={text => {
              setSearch(text);
            }}
            placeholder="Search drink..."
          />
          <ContainerListDrinks>
            <FlatList
              data={listDrinkAux}
              keyExtractor={item => item.idDrink}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <CardDrink
                    onPress={() => {
                      handleMoreDetailsDrinks(item.idDrink);
                    }}>
                    <ImageCard
                      source={{uri: item.strDrinkThumb}}
                      width={200}
                      height={200}
                    />
                    <AreaTitle>
                      <TitleCard>{item.strDrink}</TitleCard>

                      <ButtonDetails
                        onPress={() => {
                          handleMoreDetailsDrinks(item.idDrink);
                        }}>
                        <TextButtonDetails>SEE DETAILS</TextButtonDetails>
                      </ButtonDetails>
                    </AreaTitle>
                  </CardDrink>
                );
              }}
            />
          </ContainerListDrinks>
        </>
      )}
    </Container>
  );
};

export default SelectedDrinks;
