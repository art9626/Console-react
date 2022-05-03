import React from 'react';
import styled from 'styled-components';

type PropsType = {
  color?: string;
}

const StyledLine = styled.div<PropsType>`
  font-size: 24px;
  color: ${({color, theme}) => color || theme.colors.primary};
  white-space: nowrap;
`

const Line: React.FC<PropsType> = (props) => {
  return (
    <StyledLine {...props} />
  );
};

export default Line;