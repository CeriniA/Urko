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

  // Cargar CSS dinámicamente según el tema usando importaciones dinámicas
  useEffect(() => {
    const loadThemeCSS = async () => {
      // Remover CSS anterior
      const oldStyle = document.getElementById('theme-css');
      if (oldStyle) {
        oldStyle.remove();
      }

      // Importar el CSS del tema actual
      let cssModule;
      switch (theme) {
        case 'editorial':
          cssModule = await import('./styles/global-editorial.css?inline');
          break;
        case 'brutalist':
          cssModule = await import('./styles/global-brutalist.css?inline');
          break;
        case 'glass':
          cssModule = await import('./styles/global-glass.css?inline');
          break;
        case 'neon':
          cssModule = await import('./styles/global-neon.css?inline');
          break;
        case 'luxury':
          cssModule = await import('./styles/global-luxury.css?inline');
          break;
        case 'retro':
          cssModule = await import('./styles/global-retro.css?inline');
          break;
        case 'bootstrap':
          cssModule = await import('./styles/global-bootstrap.css?inline');
          break;
        case 'mercadolibre':
          cssModule = await import('./styles/global-mercadolibre.css?inline');
          break;
        default:
          cssModule = await import('./styles/global.css?inline');
      }

      // Crear un style tag con el CSS importado
      const style = document.createElement('style');
      style.id = 'theme-css';
      style.textContent = cssModule.default;
      document.head.appendChild(style);
    };

    loadThemeCSS();
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
