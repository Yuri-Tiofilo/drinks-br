import React from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, ButtonText, IconButton, IconContainer} from './styles';

const Button = ({children, functionOnPress}) => {
  return (
    <Container
      onPress={() => {
        functionOnPress();
      }}>
      <ButtonText>{children}</ButtonText>

      <IconContainer>
        <Icon name="check" size={22} />
      </IconContainer>
    </Container>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  functionOnPress: PropTypes.func,
};
Button.defaultProps = {
  children: 'small',
  functionOnPress: () => {},
};
