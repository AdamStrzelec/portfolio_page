import React from 'react';
import { createGlobalStyle } from "styled-components";
import HomeSection from './components/HomeSection/HomeSection';

const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap'); */

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }
`
class App extends React.Component {

  render(){
    return (
      <div>
        
        <HomeSection />

        <GlobalStyle />
      </div>
    );
  }
}

export default App;
