import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FreeResources from './components/FreeResources.jsx';
import OffersSection from './components/OffersSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-bg">
      <Header />
      <main>
        <Hero />
        <Container as={Stack} gap={5} className="py-5">
          <FreeResources />
        </Container>
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
