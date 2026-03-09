import Hero from '../components/Hero.jsx';
import SobreUrko from '../components/SobreUrko.jsx';
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

const HomePage = () => {
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
