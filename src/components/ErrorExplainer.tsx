import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { explainError, getCommonErrors } from '../lib/explainError';
import type { ErrorResponse } from '../types/content';
import './ErrorExplainer.css';

export function ErrorExplainer() {
  const { language } = useLanguage();
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<ErrorResponse | null>(null);
  const [searched, setSearched] = useState(false);

  const allErrors = getCommonErrors(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = errorMsg.trim();
    if (!trimmed) return;
    setResult(explainError(trimmed, language));
    setSearched(true);
  };

  const handleExample = (error: ErrorResponse) => {
    setErrorMsg(error.title);
    setResult(error);
    setSearched(true);
  };

  return (
    <div className="error-explainer">
      <form className="error-explainer__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="error-explainer__input"
          value={errorMsg}
          onChange={(e) => setErrorMsg(e.target.value)}
          placeholder={
            language === 'es'
              ? 'Pega tu mensaje de error aquí...'
              : 'Paste your error message here...'
          }
          aria-label={language === 'es' ? 'Mensaje de error' : 'Error message'}
        />
        <button
          type="submit"
          className="btn btn--primary error-explainer__btn"
          disabled={!errorMsg.trim()}
        >
          {language === 'es' ? 'Explicar' : 'Explain'}
        </button>
      </form>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
          {language === 'es' ? 'Elige un error:' : 'Pick an error:'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {allErrors.map((err) => (
            <button
              key={err.id}
              className={`btn ${result?.id === err.id ? 'btn--primary' : 'btn--outline'}`}
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
              onClick={() => handleExample(err)}
            >
              {err.title}
            </button>
          ))}
        </div>
      </div>

      {result ? (
        <div className="error-explainer__result">
          <div className="error-explainer__title">
            🚨 {result.title}
          </div>

          <div className="error-explainer__section">
            <div className="error-explainer__section-title">
              💡 {language === 'es' ? 'Qué significa' : 'What it means'}
            </div>
            <p>{result.whatItMeans}</p>
          </div>

          <div className="error-explainer__section">
            <div className="error-explainer__section-title">
              🔍 {language === 'es' ? 'Causas comunes' : 'Common causes'}
            </div>
            <ul className="error-explainer__list">
              {result.commonCauses.map((cause, i) => (
                <li key={i}>{cause}</li>
              ))}
            </ul>
          </div>

          <div className="error-explainer__section">
            <div className="error-explainer__section-title">
              🛠️ {language === 'es' ? 'Pasos para arreglar' : 'Steps to fix'}
            </div>
            <ol className="error-explainer__numbered-list">
              {result.stepsToFix.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="error-explainer__section">
            <div className="error-explainer__section-title">
              ✅ {language === 'es' ? 'Ejemplo de solución' : 'Example fix'}
            </div>
            <pre>
              <code>{result.exampleFix}</code>
            </pre>
          </div>
        </div>
      ) : searched ? (
        <div className="error-explainer__no-match">
          <span className="error-explainer__no-match-icon">🤔</span>
          <p>
            {language === 'es'
              ? 'No encontramos una explicación para ese error. Intenta con otro mensaje.'
              : "We couldn't find an explanation for that error. Try a different message."}
          </p>
        </div>
      ) : (
        <div className="error-explainer__empty">
          <span className="error-explainer__empty-icon">🐛</span>
          <p>
            {language === 'es'
              ? 'Pega un mensaje de error o elige uno de arriba para aprender.'
              : "Paste an error message or pick one above to learn."}
          </p>
        </div>
      )}
    </div>
  );
}
