import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { useTheme } from './context/ThemeContext.jsx';
import ThemeSelector from './components/ThemeSelector.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FreeResources from './components/FreeResources.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import BenefitsSectionEditorial from './components/BenefitsSection-editorial.jsx';
import OffersSection from './components/OffersSection.jsx';
import OffersSectionEditorial from './components/OffersSection-editorial.jsx';
import CTASection from './components/CTASection.jsx';
import CTASectionEditorial from './components/CTASection-editorial.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const { theme } = useTheme();

  // Cargar CSS dinámicamente según el tema
  useEffect(() => {
    const cssFiles = {
      minimal: '/src/styles/global.css',
      editorial: '/src/styles/global-editorial.css',
      brutalist: '/src/styles/global-brutalist.css',
      glass: '/src/styles/global-glass.css',
      neon: '/src/styles/global-neon.css',
      luxury: '/src/styles/global-luxury.css',
      retro: '/src/styles/global-retro.css',
      bootstrap: '/src/styles/global-bootstrap.css',
      mercadolibre: '/src/styles/global-mercadolibre.css'
    };
    
    const cssFile = cssFiles[theme] || cssFiles.minimal;
    
    // Remover CSS anterior
    const oldLink = document.getElementById('theme-css');
    if (oldLink) {
      oldLink.remove();
    }

    // Agregar nuevo CSS
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.href = cssFile;
    document.head.appendChild(link);
  }, [theme]);

  // Seleccionar componentes según el tema
  // Brutalist y Glass usan los mismos componentes que Minimal por ahora
  const Benefits = theme === 'editorial' ? BenefitsSectionEditorial : BenefitsSection;
  const Offers = theme === 'editorial' ? OffersSectionEditorial : OffersSection;
  const CTA = theme === 'editorial' ? CTASectionEditorial : CTASection;

  return (
    <div className="app-bg">
      <ThemeSelector />
      <Header />
      <main>
        <Hero />
        <Container as={Stack} gap={5} className="py-5">
          <FreeResources />
        </Container>
        <Benefits />
        <Offers />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
