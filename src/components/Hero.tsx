import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import './Hero.css';

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero">
      <span className="hero__icon">🎓</span>
      <h1 className="hero__title">AI Education Assistant</h1>
      <p className="hero__subtitle">
        {language === 'es'
          ? 'Aprende a programar de manera amigable'
          : 'Learn coding the friendly way'}
      </p>
      <div className="hero__actions">
        <Link to="/ask" className="btn btn--secondary">
          {language === 'es' ? '❓ Hacer una Pregunta' : '❓ Ask a Question'}
        </Link>
        <Link to="/explain-code" className="btn btn--secondary">
          {language === 'es' ? '💻 Explicar Código' : '💻 Explain Code'}
        </Link>
        <Link to="/practice" className="btn btn--secondary">
          {language === 'es' ? '🎯 Practicar' : '🎯 Practice'}
        </Link>
      </div>
    </section>
  );
}
