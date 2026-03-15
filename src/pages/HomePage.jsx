import { lazy, Suspense } from 'react';
import Hero from '../components/Hero.jsx';
import EscuelaUrko from '../components/EscuelaUrko.jsx';
import ComoFunciona from '../components/ComoFunciona.jsx';
import EsTuCamino from '../components/EsTuCamino.jsx';
import ComparacionProgramas from '../components/ComparacionProgramas.jsx';
import Testimonials from '../components/Testimonials.jsx';
import SobreMi from '../components/SobreMi.jsx';
import RecursosGratuitos from '../components/RecursosGratuitos.jsx';
import NewsletterSection from '../components/NewsletterSection.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactSection from '../components/ContactSection.jsx';

// Lazy loading para componentes pesados
const EntrenamientosUrko = lazy(() => import('../components/EntrenamientosUrko.jsx'));
const BibliotecaUrko = lazy(() => import('../components/BibliotecaUrko.jsx'));

const HomePage = () => {
  return (
    <main>
      <Hero />
      
      <EscuelaUrko />
      <ComoFunciona />
      <EsTuCamino />
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <EntrenamientosUrko />
      </Suspense>
      
      <ComparacionProgramas />
      <Testimonials />
      <SobreMi />
      <RecursosGratuitos />
      <NewsletterSection />
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <BibliotecaUrko />
      </Suspense>
      
      <FAQ />
      <ContactSection />
    </main>
  );
};

export default HomePage;
