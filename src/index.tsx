import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const theme: DefaultTheme = {
  colors: {
    primary: 'green',
    secondary: 'yellow',
  }
};


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

