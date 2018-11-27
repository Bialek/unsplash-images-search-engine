import { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        outline: none;
        box-sizing: border-box;
    }
    body {
        background-color: #eee;
    }
`