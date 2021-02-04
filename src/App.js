import React from 'react';
import { createGlobalStyle } from "styled-components";
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import HomeSection from './components/HomeSection/HomeSection';

const GlobalStyle = createGlobalStyle`
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

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_API_DATO_CMS}`,
  }
});

class App extends React.Component {

  render(){
    return (
      <ClientContext.Provider value={client}>
        <div>
          
          <HomeSection />

          <GlobalStyle />
        </div>
      </ClientContext.Provider>
    );
  }
}

export default App;
