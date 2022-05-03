import React, { KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

type PropsType = {
  backgroundColor?: string;
  color?: string;
}

const StyledConsole = styled.textarea<PropsType & { onKeyPress: (e: KeyboardEvent<HTMLTextAreaElement>) => void }>`
  width: 100%;
  height: 70vh;
  border: none;
  resize: none;
  background-color: ${({backgroundColor}) => backgroundColor || 'white'};
  font-size: 24px;
  color: ${({color, theme}) => color || theme.colors.primary};
  &:focus {
    outline: none;
  }
`


const Console: React.FC<PropsType> = ({color, ...props}) => {

  const startString = 'artyom@MacBook-Pro-Artyom';
  const [lines, setLines] = useState([startString]);
  
  const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      setLines([...lines, startString]);
    }
  }

  return (
    <Flex>
      <Flex flexDirection='column' margin='0 15px 0 0'>
        {lines.map((item, index) => {
          return (
            <Line key={index} color={color}>
              {item}
            </Line>
          );
        })}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};

export default Console;