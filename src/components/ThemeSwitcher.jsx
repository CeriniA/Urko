import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { currentTheme, openSelector } = useTheme();

  return (
    <button 
      className="theme-switcher" 
      onClick={openSelector}
      aria-label="Cambiar estilo de diseño"
      title="Elegir diseño"
    >
      <span className="theme-switcher__icon">
        {currentTheme.icon}
      </span>
      <span className="theme-switcher__text">
        {currentTheme.name}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
