import React from 'react';
import styled from 'styled-components';

type PropsType = {
  flexDirection?: string;
  justifyContent?: string;
  alighItems?: string;
  margin?: string;
}


const StyledFlex = styled.div<PropsType>`
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'stretch'};
  aligh-items: ${({alighItems}) => alighItems || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`

const Flex: React.FC<PropsType> = (props) => {
  return (
    <StyledFlex {...props} />
  );
};

export default Flex;