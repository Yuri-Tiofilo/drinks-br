import styled from 'styled-components/native';

import {colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  padding: 40px 40px 0;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  width: 250px;
`;

export const AreaImage = styled.View``;

export const Image = styled.Image`
  height: 150px;
  width: 150px;
`;
