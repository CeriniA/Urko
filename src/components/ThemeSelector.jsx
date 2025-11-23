import { useTheme, THEMES } from '../context/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { theme, setTheme, showSelector, closeSelector } = useTheme();

  if (!showSelector) return null;

  const handleThemeSelect = (themeId) => {
    setTheme(themeId);
    closeSelector();
  };

  return (
    <div className="theme-selector-overlay" onClick={closeSelector}>
      <div className="theme-selector-modal" onClick={(e) => e.stopPropagation()}>
        <div className="theme-selector-header">
          <h2>Elegí tu estilo favorito</h2>
          <button className="theme-selector-close" onClick={closeSelector}>
            ✕
          </button>
        </div>
        <div className="theme-selector-grid">
          {Object.values(THEMES).map((themeOption) => (
            <button
              key={themeOption.id}
              className={`theme-card ${theme === themeOption.id ? 'theme-card--active' : ''}`}
              onClick={() => handleThemeSelect(themeOption.id)}
            >
              <div 
                className="theme-card-preview" 
                style={{ background: themeOption.preview }}
              >
                <span className="theme-card-icon">{themeOption.icon}</span>
              </div>
              <div className="theme-card-content">
                <h3 className="theme-card-name">{themeOption.name}</h3>
                <p className="theme-card-description">{themeOption.description}</p>
                {theme === themeOption.id && (
                  <span className="theme-card-badge">✓ Activo</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
