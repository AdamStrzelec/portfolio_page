import React from 'react';
import { createGlobalStyle } from "styled-components";
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { Provider } from 'react-redux'
import store from './store'
import Navigation from './components/Navigation/Navigation';
import HomeSection from './components/HomeSection/HomeSection';
import Section from './components/Section/Section';
import AboutSection from './components/AboutSection/AboutSection';

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
            <Section sectionId={'about'} header={'O MNIE'} heading={'Adam Strzelec'}>
              <AboutSection />
            </Section>
            <Section sectionId={'projects'} header={'PROJEKTY'} heading={'Adam Strzelec'}>
              <p>cos tam cos tam dsadassad dsaasdas dsaasdas dassaddas dsaasd dsasaddsa</p>
            </Section>
            <Section sectionId={'technologies'} header={'TECHNOLOGIE'} heading={'Technologie, których używam'}>
              <p>cos tam cos tam dsadassad dsaasdas dsaasdas dassaddas dsaasd dsasaddsa</p>
            </Section>
            <Section sectionId={'contact'} header={'KONTAKT'}>
              <p>cos tam cos tam dsadassad dsaasdas dsaasdas dassaddas dsaasd dsasaddsa</p>
            </Section>
            <Navigation />
            <GlobalStyle />
          </div>
        </ClientContext.Provider>
      </Provider>

    );
  }
}

export default App;
