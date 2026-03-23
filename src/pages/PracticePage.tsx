import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { getPracticeQuestions, getAvailableTopics } from '../lib/getPracticeQuestions';
import { PracticeCard } from '../components/PracticeCard';

export default function PracticePage() {
  const { language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [key, setKey] = useState(0);

  const topics = getAvailableTopics(language);
  const questions = getPracticeQuestions(selectedTopic, language);

  const handleAnswer = (correct: boolean) => {
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    setKey((k) => k + 1);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setScore({ correct: 0, total: 0 });
    setKey((k) => k + 1);
  };

  const topicLabels: Record<string, Record<string, string>> = {
    all: { en: 'All', es: 'Todos' },
    variables: { en: 'Variables', es: 'Variables' },
    loops: { en: 'Loops', es: 'Bucles' },
    conditionals: { en: 'Conditionals', es: 'Condicionales' },
    functions: { en: 'Functions', es: 'Funciones' },
    arrays: { en: 'Arrays', es: 'Arreglos' },
  };

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
        <h1>{language === 'es' ? '🎯 Practicar' : '🎯 Practice'}</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
          {language === 'es'
            ? 'Pon a prueba tus conocimientos con preguntas interactivas.'
            : 'Test your knowledge with interactive quiz questions.'}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['all', ...topics].map((topic) => (
            <button
              key={topic}
              className={`btn ${selectedTopic === topic ? 'btn--primary' : 'btn--outline'}`}
              style={{ fontSize: '0.875rem', padding: '0.4rem 0.85rem' }}
              onClick={() => handleTopicChange(topic)}
            >
              {topicLabels[topic]?.[language] || topic}
            </button>
          ))}
        </div>

        {score.total > 0 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--color-bg-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.75rem 1.25rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ fontWeight: 700 }}>
              {language === 'es' ? 'Puntuación' : 'Score'}: {score.correct}/{score.total}
              {score.total > 0 && ` (${Math.round((score.correct / score.total) * 100)}%)`}
            </span>
            <button
              className="btn btn--outline"
              style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}
              onClick={handleReset}
            >
              {language === 'es' ? 'Reiniciar' : 'Reset'}
            </button>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} key={key}>
          {questions.map((quiz) => (
            <PracticeCard key={quiz.id} quiz={quiz} onAnswer={handleAnswer} />
          ))}
        </div>

        {questions.length === 0 && (
          <div className="text-center" style={{ padding: '3rem 1rem' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>📝</span>
            <p style={{ color: 'var(--color-text-light)' }}>
              {language === 'es'
                ? 'No hay preguntas disponibles para este tema.'
                : 'No questions available for this topic.'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
