import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import EscuelaUrko from '../components/EscuelaUrko.jsx';
import ComoFunciona from '../components/ComoFunciona.jsx';
import EsTuCamino from '../components/EsTuCamino.jsx';
import EntrenamientosUrko from '../components/EntrenamientosUrko.jsx';
import ComparacionProgramas from '../components/ComparacionProgramas.jsx';
import Testimonials from '../components/Testimonials.jsx';
import SobreMi from '../components/SobreMi.jsx';
import RecursosGratuitos from '../components/RecursosGratuitos.jsx';
import NewsletterSection from '../components/NewsletterSection.jsx';
import BibliotecaUrko from '../components/BibliotecaUrko.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { scrollToElement } from '../utils/scrollHelpers';

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
      <EntrenamientosUrko />
      <ComparacionProgramas />
      <Testimonials />
      <SobreMi />
      <RecursosGratuitos />
      <NewsletterSection />
      <BibliotecaUrko />
      <FAQ />
      <ContactSection />
    </main>
  );
};

export default HomePage;
