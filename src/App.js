import React from 'react';
import { createGlobalStyle } from "styled-components";
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { Provider } from 'react-redux'
import store from './store'
import MainTemplate from './templates/MainTemplate';
import Navigation from './components/Navigation/Navigation';
import HomeSection from './components/HomeSection/HomeSection';
import Section from './components/Section/Section';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection';
import ContactSection from './components/ContactSection/ContactSection';

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
    "Authorization": `Bearer 5f48aab63332993d77baeeba4213d9`,
  }
});

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <ClientContext.Provider value={client}>
          <MainTemplate>
            
            <HomeSection sectionId={'home'} />

            <Section sectionId={'about'} header={'O MNIE'} heading={'Adam Strzelec'}>
              <AboutSection />
            </Section>

            <Section sectionId={'projects'} header={'PROJEKTY'} heading={'Moje projekty'}>
              <ProjectsSection />
            </Section>

            <Section sectionId={'technologies'} header={'TECHNOLOGIE'} heading={'Technologie, których używam'}>
              <TechnologiesSection />
            </Section>

            <Section sectionId={'contact'} header={'KONTAKT'}>
              <ContactSection />
            </Section>

            <Navigation />

            <GlobalStyle />
          </MainTemplate>
        </ClientContext.Provider>
      </Provider>

    );
  }
}

export default App;
