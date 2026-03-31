import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export function BackToHome() {
  const { language } = useLanguage();

  return (
    <Link
      to="/"
      className="btn btn--outline"
      style={{ display: 'inline-block', fontSize: '0.875rem', padding: '0.4rem 0.85rem', marginBottom: '1.25rem', textDecoration: 'none' }}
    >
      ← {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
    </Link>
  );
}
