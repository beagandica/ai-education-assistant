import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { explainError } from '../lib/explainError';
import type { ErrorResponse } from '../types/content';
import './ErrorExplainer.css';

export function ErrorExplainer() {
  const { language } = useLanguage();
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<ErrorResponse | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = errorMsg.trim();
    if (!trimmed) return;
    setResult(explainError(trimmed, language));
    setSearched(true);
  };

  const handleExample = (example: string) => {
    setErrorMsg(example);
    setResult(explainError(example, language));
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
              ? 'Pega un mensaje de error y te ayudaremos a entenderlo.'
              : "Paste an error message and we'll help you understand it."}
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            {language === 'es' ? 'Prueba con estos ejemplos:' : 'Try these examples:'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '0.75rem' }}>
            {[
              'TypeError: x is not a function',
              'Cannot read properties of undefined',
              'SyntaxError: Unexpected token',
              'ReferenceError: x is not defined',
              'Maximum call stack size exceeded',
            ].map((example) => (
              <button
                key={example}
                className="btn btn--outline"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
                onClick={() => handleExample(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
