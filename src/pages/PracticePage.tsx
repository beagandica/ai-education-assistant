import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { getPracticeQuestions, getAvailableTopics } from '../lib/getPracticeQuestions';
import { PracticeCard } from '../components/PracticeCard';
import { BackToHome } from '../components/BackToHome';

const QUESTIONS_PER_SESSION = 10;

export default function PracticePage() {
  const { language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState(() =>
    getPracticeQuestions('all', language).slice(0, QUESTIONS_PER_SESSION)
  );
  const [finished, setFinished] = useState(false);

  const topics = getAvailableTopics(language);

  const handleAnswer = (correct: boolean) => {
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (currentIndex >= questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    const newQuestions = getPracticeQuestions(selectedTopic, language).slice(0, QUESTIONS_PER_SESSION);
    setQuestions(newQuestions);
    setScore({ correct: 0, total: 0 });
    setCurrentIndex(0);
    setFinished(false);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    const newQuestions = getPracticeQuestions(topic, language).slice(0, QUESTIONS_PER_SESSION);
    setQuestions(newQuestions);
    setScore({ correct: 0, total: 0 });
    setCurrentIndex(0);
    setFinished(false);
  };

  const topicLabels: Record<string, Record<string, string>> = {
    all: { en: 'All', es: 'Todos' },
    variables: { en: 'Variables', es: 'Variables' },
    loops: { en: 'Loops', es: 'Bucles' },
    conditionals: { en: 'Conditionals', es: 'Condicionales' },
    functions: { en: 'Functions', es: 'Funciones' },
    arrays: { en: 'Arrays', es: 'Arreglos' },
    objects: { en: 'Objects', es: 'Objetos' },
    debugging: { en: 'Debugging', es: 'Depuración' },
  };

  const currentQuestion = questions[currentIndex];

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
        <BackToHome />
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
            {language === 'es' ? 'Pregunta' : 'Question'} {Math.min(currentIndex + 1, questions.length)}/{questions.length}
            {score.total > 0 && (
              <span style={{ marginLeft: '1rem', color: 'var(--color-text-light)' }}>
                {language === 'es' ? 'Puntuación' : 'Score'}: {score.correct}/{score.total}
              </span>
            )}
          </span>
        </div>

        {finished ? (
          <div className="practice-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>
              {score.correct === questions.length ? '🏆' : score.correct >= questions.length * 0.7 ? '🌟' : '💪'}
            </span>
            <h2 style={{ marginBottom: '0.5rem' }}>
              {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
            </h2>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              {score.correct}/{questions.length}
              {' '}({Math.round((score.correct / questions.length) * 100)}%)
            </p>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              {score.correct === questions.length
                ? (language === 'es' ? '¡Perfecto! Dominaste todas las preguntas.' : 'Perfect! You nailed every question.')
                : score.correct >= questions.length * 0.7
                  ? (language === 'es' ? '¡Muy bien! Sigue practicando para dominar el resto.' : 'Great job! Keep practicing to master the rest.')
                  : (language === 'es' ? '¡Buen intento! Revisa los temas y vuelve a intentar.' : 'Good effort! Review the topics and try again.')}
            </p>
            <button className="btn btn--primary" onClick={handleRestart}>
              {language === 'es' ? '🔄 Intentar de nuevo' : '🔄 Try again'}
            </button>
          </div>
        ) : currentQuestion ? (
          <PracticeCard
            key={currentQuestion.id}
            quiz={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            isLast={currentIndex >= questions.length - 1}
          />
        ) : (
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
