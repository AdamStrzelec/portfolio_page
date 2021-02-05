import React from 'react';
import { createGlobalStyle } from "styled-components";
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Navigation from './components/Navigation/Navigation';
import HomeSection from './components/HomeSection/HomeSection';
import { Provider } from 'react-redux'
import store from './store'

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
      <Provider store={store}>
        <ClientContext.Provider value={client}>
          <div>
            
            <HomeSection sectionId={'home'} />
            <h1 id='about'>asdsadsda</h1>
            <h1 id='projects'>asdsadsda</h1>
            <h1 id='technologies'>asdsadsda</h1>
            <h1 id='contact'>asdsadsda</h1>
            <Navigation />
            <GlobalStyle />
          </div>
        </ClientContext.Provider>
      </Provider>

    );
  }
}

export default App;
