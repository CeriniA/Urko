import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  minimal: {
    id: 'minimal',
    name: 'Minimalista',
    description: 'Oscuro, limpio y moderno',
    icon: '🎨',
    preview: '#0a0a0a'
  },
  editorial: {
    id: 'editorial',
    name: 'Editorial',
    description: 'Claro, serif y sofisticado',
    icon: '📰',
    preview: '#fafafa'
  },
  brutalist: {
    id: 'brutalist',
    name: 'Brutalist',
    description: 'Vibrante, bold y atrevido',
    icon: '⚡',
    preview: '#ff6b35'
  },
  glass: {
    id: 'glass',
    name: 'Glass',
    description: 'Suave, blur y elegante',
    icon: '💎',
    preview: '#667eea'
  },
  neon: {
    id: 'neon',
    name: 'Neon',
    description: 'Cyberpunk con colores neón',
    icon: '🌟',
    preview: '#0f0f23'
  },
  luxury: {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium oscuro con dorado',
    icon: '👑',
    preview: '#1a1a1a'
  },
  retro: {
    id: 'retro',
    name: 'Retro',
    description: 'Vintage años 80',
    icon: '📻',
    preview: '#ff6b9d'
  },
  bootstrap: {
    id: 'bootstrap',
    name: 'Bootstrap',
    description: 'Clásico estilo Bootstrap',
    icon: '🅱️',
    preview: '#0d6efd'
  },
  mercadolibre: {
    id: 'mercadolibre',
    name: 'MercadoLibre',
    description: 'Inspirado en MercadoLibre',
    icon: '🛒',
    preview: '#ffe600'
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Cargar tema guardado o usar 'minimal' por defecto
    return localStorage.getItem('urko-theme') || 'minimal';
  });

  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    // Guardar tema en localStorage
    localStorage.setItem('urko-theme', theme);
    
    // Aplicar clase al body para CSS
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const openSelector = () => setShowSelector(true);
  const closeSelector = () => setShowSelector(false);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      toggleTheme, 
      showSelector, 
      openSelector, 
      closeSelector,
      currentTheme: THEMES[theme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
