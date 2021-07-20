import styled from 'styled-components/native';

import PlusSVG from '../../assets/icons/plus.svg';
import { AppColors } from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${AppColors.GRAY};
  padding: 0 20px;
`;

export const ListItem = styled.TouchableOpacity`
  height: 48px;
  margin-bottom: 16px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
`;

export const CarBrandText = styled.Text`
  font-size: 16px;
  margin-right: 8px;
  font-weight: 400;
`;

export const CarNameText = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${AppColors.PRIMARY};
  position: absolute;
  right: 16px;
  bottom: 0;
`;

export const PlusIcon = styled(PlusSVG)`
  width: 22px;
  height: 22px;
  color: #fff;
`;
