import { useLanguage } from '../lib/i18n';
import './LanguageToggle.css';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`language-toggle__btn ${language === 'en' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        EN
      </button>
      <button
        className={`language-toggle__btn ${language === 'es' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
}
