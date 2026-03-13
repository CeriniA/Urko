import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Solo hacer scroll a top si NO hay un objetivo de sección en el state
    if (!location.state?.scrollTo) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollToTop;
