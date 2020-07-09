import React from 'react';

import {
  Container,
  ContainerInput,
  AreaIcon,
  AreaInput,
  IconSearch,
  Input,
} from './styles';

const InputSearch = ({value, functionOnChange, placeholder}) => {
  return (
    <Container>
      <ContainerInput>
        <AreaInput>
          <Input
            value={value}
            onChangeText={text => {
              functionOnChange(text);
            }}
            placeholder={placeholder}
            placeholderTextColor="#707070"
          />
        </AreaInput>

        <AreaIcon>
          <IconSearch name="search" size={25} />
        </AreaIcon>
      </ContainerInput>
    </Container>
  );
};

export default InputSearch;
