import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import UrlShortenerForm from './components/UrlShortenerForm';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import RedirectPage from './components/RedirectPage'; // Import the dynamic page component

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<UrlShortenerForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:id" element={<RedirectPage />} /> 
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
