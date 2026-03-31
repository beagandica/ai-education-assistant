import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { explainQuestion, getAllTopics } from '../lib/explainQuestion';
import { QuestionForm } from '../components/QuestionForm';
import { ResponsePanel } from '../components/ResponsePanel';
import { BackToHome } from '../components/BackToHome';
import type { TopicResponse } from '../types/content';

export default function AskPage() {
  const { language } = useLanguage();
  const [result, setResult] = useState<TopicResponse | null>(null);
  const [searched, setSearched] = useState(false);

  const allTopics = getAllTopics(language);

  const handleSubmit = (query: string) => {
    setResult(explainQuestion(query, language));
    setSearched(true);
  };

  const handleTopicClick = (topic: string) => {
    setResult(explainQuestion(topic, language));
    setSearched(true);
  };

  const buildSections = (r: TopicResponse) => [
    { title: language === 'es' ? 'Explicación' : 'Explanation', content: r.simpleExplanation, icon: '💡' },
    { title: language === 'es' ? 'Por qué importa' : 'Why it matters', content: r.whyItMatters, icon: '🎯' },
    { title: language === 'es' ? 'Ejemplo' : 'Example', content: r.example, icon: '📝' },
    { title: language === 'es' ? 'Error común' : 'Common mistake', content: r.commonMistake, icon: '⚠️' },
    { title: language === 'es' ? 'Intenta esto' : 'Try this next', content: r.tryThisNext, icon: '🚀' },
  ];

  return (
    <main className="page">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
        <BackToHome />
        <h1>{language === 'es' ? '❓ Hacer una Pregunta' : '❓ Ask a Question'}</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
          {language === 'es'
            ? 'Escribe un tema de programación y te lo explicaremos de forma sencilla.'
            : 'Type a programming topic and we\'ll explain it in a friendly way.'}
        </p>

        <QuestionForm
          placeholder={language === 'es' ? 'Ej: variables, bucles, funciones...' : 'e.g. variables, loops, functions...'}
          onSubmit={handleSubmit}
          buttonText={language === 'es' ? 'Preguntar' : 'Ask'}
        />

        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
            {language === 'es' ? 'Elige un tema:' : 'Pick a topic:'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {allTopics.map((t) => (
              <button
                key={t.id}
                className={`btn ${result?.id === t.id ? 'btn--primary' : 'btn--outline'}`}
                style={{ fontSize: '0.875rem', padding: '0.4rem 0.85rem' }}
                onClick={() => handleTopicClick(t.topic)}
              >
                {t.topic}
              </button>
            ))}
          </div>
        </div>

        {result && <ResponsePanel sections={buildSections(result)} />}

        {searched && !result && (
          <div className="text-center" style={{ padding: '2rem 1rem' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🤔</span>
            <p style={{ color: 'var(--color-text-light)' }}>
              {language === 'es'
                ? 'No encontramos ese tema. Intenta con otro como "variables" o "funciones".'
                : 'We couldn\'t find that topic. Try something like "variables" or "functions".'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
