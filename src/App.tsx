import React from 'react';
import styled from 'styled-components';
import './App.css';
import Console from './components/Console';
import Flex from './components/Flex';
import LargeButton from './components/LargeButton';
import Title from './components/Title';

const AppWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`


const App: React.FC = () => {
  return (
    <AppWrapper backgroundColor='black'>
      <Flex
        alighItems='center'
        justifyContent='center'
      >
        <Title mb='20px'>
          Console cmd 2022
        </Title>
      </Flex>
      <Flex
        flexDirection='column'
        alighItems='center'
      >
        <Console backgroundColor='black' />
        <LargeButton
          alignSelf='flex-end'
        >
          Send
        </LargeButton>
      </Flex>
    </AppWrapper>
  );
}

export default App;
