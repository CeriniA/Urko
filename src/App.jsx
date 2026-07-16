import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import HomePage from './pages/HomePage.jsx';
import BiografiaPage from './pages/BiografiaPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-bg">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biografia" element={<BiografiaPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
