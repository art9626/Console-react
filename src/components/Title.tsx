import React from 'react';
import styled from 'styled-components';

type PropsType = {
  color?: string;
  mb?: string
}

const StyledTitle = styled.h1<PropsType>`
  color: ${ ({ color, theme }) => color || theme.colors.primary };
  margin-bottom: ${({mb}) => mb || '0'};
`

const Title: React.FC<PropsType> = (props) => {
  return (
    <StyledTitle {...props} />
  );
};

export default Title;