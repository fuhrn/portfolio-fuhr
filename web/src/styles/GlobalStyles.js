import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #84cc16;
    --secondary: #65a30d;
    --secondary1: #84cc16;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #292524;
    --black-2: #292524;
    --white-1: #e7e5e4;
    --gray: #d4d4d4;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter';
    background: var(--black-1);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
