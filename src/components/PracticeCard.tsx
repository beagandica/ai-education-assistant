import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import type { Quiz } from '../types/content';
import './PracticeCard.css';

interface PracticeCardProps {
  quiz: Quiz;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  isLast: boolean;
}

export function PracticeCard({ quiz, onAnswer, onNext, isLast }: PracticeCardProps) {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    onAnswer(index === quiz.correctIndex);
  };

  const getOptionClass = (index: number) => {
    if (selectedIndex === null) return 'practice-card__option';

    if (index === quiz.correctIndex) {
      return 'practice-card__option practice-card__option--correct';
    }
    if (index === selectedIndex && index !== quiz.correctIndex) {
      return 'practice-card__option practice-card__option--incorrect';
    }
    return 'practice-card__option practice-card__option--dimmed';
  };

  return (
    <article className="practice-card">
      <span className="practice-card__topic">{quiz.topic}</span>
      <h3 className="practice-card__question">{quiz.question}</h3>

      <div className="practice-card__options">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleSelect(index)}
            disabled={selectedIndex !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="practice-card__explanation">
          <div className="practice-card__explanation-label">
            {selectedIndex === quiz.correctIndex
              ? (language === 'es' ? '✅ ¡Correcto!' : '✅ Correct!')
              : (language === 'es' ? '❌ Incorrecto' : '❌ Incorrect')}
          </div>
          <p>{quiz.explanation}</p>
          <button
            className="btn btn--primary"
            style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
            onClick={onNext}
          >
            {isLast
              ? (language === 'es' ? 'Ver resultados' : 'See results')
              : (language === 'es' ? 'Siguiente →' : 'Next →')}
          </button>
        </div>
      )}
    </article>
  );
}
