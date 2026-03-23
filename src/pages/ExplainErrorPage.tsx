import { useLanguage } from '../lib/i18n';
import { ErrorExplainer } from '../components/ErrorExplainer';

export default function ExplainErrorPage() {
  const { language } = useLanguage();

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
        <h1>{language === 'es' ? '🐛 Explicar Error' : '🐛 Explain Error'}</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
          {language === 'es'
            ? '¿Tienes un error confuso? Pégalo aquí y te ayudaremos a entenderlo.'
            : 'Got a confusing error? Paste it here and we\'ll help you understand it.'}
        </p>
        <ErrorExplainer />
      </div>
    </main>
  );
}
