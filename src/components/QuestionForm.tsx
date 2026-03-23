import { useState } from 'react';
import './QuestionForm.css';

interface QuestionFormProps {
  placeholder: string;
  onSubmit: (query: string) => void;
  buttonText: string;
}

export function QuestionForm({ placeholder, onSubmit, buttonText }: QuestionFormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="question-form__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="submit" className="btn btn--primary question-form__btn" disabled={!query.trim()}>
        {buttonText}
      </button>
    </form>
  );
}
