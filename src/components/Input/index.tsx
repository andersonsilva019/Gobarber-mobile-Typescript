import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<IInputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark" /* Funciona apenas no ios */
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;