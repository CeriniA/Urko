import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhatIsTantra from './components/WhatIsTantra.jsx';
import AboutUrko from './components/AboutUrko.jsx';
import WhatYouWillAchieve from './components/WhatYouWillAchieve.jsx';
import ResourcesSection from './components/ResourcesSection.jsx';
import FAQ from './components/FAQ.jsx';
import CTASection from './components/CTASection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-bg">
      <Header />
      <main>
        <Hero />
        <WhatIsTantra />
        <AboutUrko />
        <WhatYouWillAchieve />
        <ResourcesSection />
        <FAQ />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
