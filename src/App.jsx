import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FreeResources from './components/FreeResources.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import OffersSection from './components/OffersSection.jsx';
import CTASection from './components/CTASection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Cargar solo el CSS del tema minimalista de forma dinámica una vez
  useEffect(() => {
    const loadBaseCSS = async () => {
      const cssModule = await import('./styles/global.css?inline');

      const existingStyle = document.getElementById('theme-css');
      if (existingStyle) {
        existingStyle.remove();
      }

      const style = document.createElement('style');
      style.id = 'theme-css';
      style.textContent = cssModule.default;
      document.head.appendChild(style);
    };

    loadBaseCSS();
  }, []);

  return (
    <div className="app-bg">
      <Header />
      <main>
        <Hero />
        <Container as={Stack} gap={5} className="py-5">
          <FreeResources />
        </Container>
        <BenefitsSection />
        <OffersSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
