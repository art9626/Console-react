import React from 'react';
import styled, { css, keyframes } from 'styled-components';


export type ButtonPropsType = {
  primary?: boolean;
  outlined?: boolean;
  alignSelf: string;
  backgroundColor?: string;
  color?: string;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

export const StyledButton = styled.button.attrs(props => ({
  outlined: true
}))<ButtonPropsType>`
  align-self: ${({alignSelf}) => alignSelf || 'stretch'};
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  ${({primary}) => primary && css<ButtonPropsType>`
    background-color: ${({backgroundColor}) => backgroundColor || 'white'};
    color: ${({color, theme}) => color || theme.colors.primary};
  `} 
  ${({outlined}) => outlined && css<ButtonPropsType>`
    background-color: transparent;
    border: 1px solid ${({color, theme}) => color || theme.colors.primary};
    color: ${({color, theme}) => color || theme.colors.primary};
  `} 
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
`


const Button: React.FC<ButtonPropsType> = (props) => {
  return (
    <StyledButton {...props} />
  );
};

export default Button;