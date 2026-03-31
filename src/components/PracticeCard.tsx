import { useState, useRef } from 'react';
import { useLanguage } from '../lib/i18n';
import type { Quiz } from '../types/content';
import './PracticeCard.css';

interface PracticeCardProps {
  quiz: Quiz;
  onAnswer: (correct: boolean) => void;
}

export function PracticeCard({ quiz, onAnswer }: PracticeCardProps) {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLElement>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    onAnswer(index === quiz.correctIndex);
    // Keep the card in view after the explanation expands
    requestAnimationFrame(() => {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
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
    <article className="practice-card" ref={cardRef}>
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
        </div>
      )}
    </article>
  );
}
