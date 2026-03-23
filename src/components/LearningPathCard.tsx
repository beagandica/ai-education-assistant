import type { LearningPath } from '../types/content';
import './LearningPathCard.css';

interface LearningPathCardProps {
  path: LearningPath;
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <article className="learning-path-card">
      <div className="learning-path-card__header">
        <span className="learning-path-card__icon">{path.icon}</span>
        <h3 className="learning-path-card__title">{path.title}</h3>
      </div>
      <p className="learning-path-card__description">{path.description}</p>
      <ol className="learning-path-card__steps">
        {path.steps.map((step, index) => (
          <li key={index} className="learning-path-card__step">
            <span className="learning-path-card__step-number">{index + 1}</span>
            <span className="learning-path-card__step-text">{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
