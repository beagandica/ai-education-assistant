import { useLanguage } from '../lib/i18n';
import { CodeExplainer } from '../components/CodeExplainer';

export default function ExplainCodePage() {
  const { language } = useLanguage();

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
        <h1>{language === 'es' ? '💻 Explicar Código' : '💻 Explain Code'}</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
          {language === 'es'
            ? 'Pega un fragmento de código y te explicaremos qué hace cada línea.'
            : 'Paste a code snippet and we\'ll explain what each line does.'}
        </p>
        <CodeExplainer />
      </div>
    </main>
  );
}
