import styled from '@emotion/styled';

interface ButtonProps {
  isDisabled ?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: transparent;
  font-size: 40px;
  padding: 5px, 2px;
  color: ${({ isDisabled }) => (isDisabled? '#0A090C' : '#999999')};
  border: 1px solid ${({ isDisabled }) => (isDisabled? '#0A090C' : '#999999')};
  font-weight: ${({ isDisabled }) => (isDisabled? 'bold' : 'normal')};
  border-radius: 5px;

  &:hover {
    color: ${({ isDisabled }) => (isDisabled? '#0A090C'  : '#0A090C')};
    border: 1px solid ${({ isDisabled }) => (isDisabled?'#0A090C'  : '#0A090C')};
  }

`;

export default Button;