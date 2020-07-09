import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/Feather';
import {
  Container,
  TitleHeader,
  AreaHeader,
  AreaTitle,
  AreaBack,
} from './styles';

export default function Header({
  children,
  isSmall,
  isCaterory,
  nameIcon,
  functionOnPressIcon,
}) {
  return (
    <Container isSmall={isSmall}>
      {isCaterory ? (
        <AreaHeader>
          <AreaTitle>
            <TitleHeader>{children}</TitleHeader>
          </AreaTitle>

          <AreaBack>
            <Icons
              name={nameIcon}
              size={25}
              onPress={() => {
                functionOnPressIcon();
              }}
              color="#ffca28"
            />
          </AreaBack>
        </AreaHeader>
      ) : null}
    </Container>
  );
}
Header.propTypes = {
  children: PropTypes.string,
  nameIcon: PropTypes.string,
  isSmall: PropTypes.bool,
  isCaterory: PropTypes.bool,
  functionOnPressIcon: PropTypes.func,
};
Header.defaultProps = {
  children: 'children',
  nameIcon: 'log-in',
  isSmall: false,
  isCaterory: true,
  functionOnPressIcon: () => {},
};
