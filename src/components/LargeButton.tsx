import React from 'react';
import styled from 'styled-components';
import { ButtonPropsType, StyledButton } from './Button';



const StyledButtonLarge = styled(StyledButton)`
  font-size: 32px;
`

const LargeButton: React.FC<ButtonPropsType> = (props) => {
  return (
    <StyledButtonLarge {...props} />
  );
};

export default LargeButton;