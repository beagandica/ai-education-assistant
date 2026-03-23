import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { explainCode } from '../lib/explainCode';
import type { CodeExplanation } from '../types/content';
import './CodeExplainer.css';

export function CodeExplainer() {
  const { language } = useLanguage();
  const [code, setCode] = useState('');
  const [result, setResult] = useState<CodeExplanation | null>(null);

  const handleSubmit = () => {
    const trimmed = code.trim();
    if (!trimmed) return;
    setResult(explainCode(trimmed));
  };

  return (
    <div className="code-explainer">
      <textarea
        className="code-explainer__textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={
          language === 'es'
            ? 'Pega tu código aquí...'
            : 'Paste your code here...'
        }
        aria-label={language === 'es' ? 'Entrada de código' : 'Code input'}
      />
      <div className="code-explainer__actions">
        <button
          className="btn btn--primary"
          onClick={handleSubmit}
          disabled={!code.trim()}
        >
          {language === 'es' ? 'Explicar este código' : 'Explain this code'}
        </button>
      </div>

      {result ? (
        <div className="code-explainer__result">
          <span className="code-explainer__badge">
            🔤 {result.language}
          </span>

          <div className="code-explainer__summary">
            <p>{result.summary}</p>
          </div>

          <div className="code-explainer__concepts">
            {result.concepts.map((concept) => (
              <span key={concept} className="code-explainer__concept-tag">
                {concept}
              </span>
            ))}
          </div>

          <h3>{language === 'es' ? 'Línea por línea' : 'Line by Line'}</h3>
          <div className="code-explainer__lines">
            {result.lines.map((item, index) => (
              <div key={index} className="code-explainer__line-item">
                <code className="code-explainer__line-code">{item.line}</code>
                <p className="code-explainer__line-explanation">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        !code.trim() && (
          <div className="code-explainer__empty">
            <span className="code-explainer__empty-icon">💻</span>
            <p>
              {language === 'es'
                ? 'Pega un fragmento de código arriba y te lo explicaremos paso a paso.'
                : 'Paste a code snippet above and we\'ll explain it step by step.'}
            </p>
          </div>
        )
      )}
    </div>
  );
}
