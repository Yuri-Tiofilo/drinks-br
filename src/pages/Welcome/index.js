import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

import Logo from '../../assets/images/logo.png';

import {Container, Title, AreaImage, Image} from './styles';

const Welcome = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <AreaImage>
        <Image source={Logo} width={100} height={100} />
      </AreaImage>
      <Title>The best catalog of drinks and ingredients</Title>
      <Button
        functionOnPress={() => {
          navigate('Categories');
        }}>
        START USING
      </Button>
    </Container>
  );
};

export default Welcome;
