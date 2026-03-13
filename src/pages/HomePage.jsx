import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import EscuelaUrko from '../components/EscuelaUrko.jsx';
import ComoFunciona from '../components/ComoFunciona.jsx';
import EsTuCamino from '../components/EsTuCamino.jsx';
import { scrollToElement } from '../utils/scrollHelpers';

// Lazy load de componentes pesados (below the fold)
const EntrenamientosUrko = lazy(() => import('../components/EntrenamientosUrko.jsx'));
const ComparacionProgramas = lazy(() => import('../components/ComparacionProgramas.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));
const SobreMi = lazy(() => import('../components/SobreMi.jsx'));
const RecursosGratuitos = lazy(() => import('../components/RecursosGratuitos.jsx'));
const NewsletterSection = lazy(() => import('../components/NewsletterSection.jsx'));
const BibliotecaUrko = lazy(() => import('../components/BibliotecaUrko.jsx'));
const FAQ = lazy(() => import('../components/FAQ.jsx'));
const ContactSection = lazy(() => import('../components/ContactSection.jsx'));

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Si venimos de otra página con un objetivo de scroll
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Esperar a que el DOM esté listo
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      
      <EscuelaUrko />
      <ComoFunciona />
      <EsTuCamino />
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <EntrenamientosUrko />
        <ComparacionProgramas />
        <Testimonials />
        <SobreMi />
        <RecursosGratuitos />
        <NewsletterSection />
        <BibliotecaUrko />
        <FAQ />
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
