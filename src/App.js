import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import UrlShortenerForm from './components/UrlShortenerForm';

function App() {
  return (
      <Container>
          <Header>2ul.top - URL Shortener</Header>
          <UrlShortenerForm />
          <Footer>Made with ♥ for the Web</Footer>
      </Container>
  );
}

export default App;
