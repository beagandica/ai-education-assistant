import { useLanguage } from '../lib/i18n';
import { LearningPathCard } from '../components/LearningPathCard';
import { learningPathsEn, learningPathsEs } from '../data/learningPaths';

export default function LearningPathsPage() {
  const { language } = useLanguage();
  const paths = language === 'es' ? learningPathsEs : learningPathsEn;

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '900px', padding: '2rem 1.5rem' }}>
        <h1>{language === 'es' ? '🗺️ Rutas de Aprendizaje' : '🗺️ Learning Paths'}</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
          {language === 'es'
            ? 'Sigue rutas estructuradas para aprender programación paso a paso.'
            : 'Follow structured paths to learn programming step by step.'}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {paths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </main>
  );
}
