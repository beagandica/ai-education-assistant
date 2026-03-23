import { Link } from 'react-router-dom';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  to: string;
}

export function FeatureCard({ icon, title, description, to }: FeatureCardProps) {
  return (
    <Link to={to} className="feature-card">
      <span className="feature-card__icon">{icon}</span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </Link>
  );
}
