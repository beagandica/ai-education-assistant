import { useLanguage } from '../lib/i18n';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';

export default function Home() {
  const { language } = useLanguage();

  const features = language === 'es'
    ? [
        { icon: '❓', title: 'Preguntar', description: 'Pregunta sobre cualquier tema de programación y obtén explicaciones claras.', to: '/ask' },
        { icon: '💻', title: 'Explicar Código', description: 'Pega código y recibe una explicación línea por línea.', to: '/explain-code' },
        { icon: '🐛', title: 'Explicar Error', description: 'Pega un mensaje de error y entiende qué salió mal.', to: '/explain-error' },
        { icon: '🎯', title: 'Practicar', description: 'Pon a prueba tus conocimientos con preguntas interactivas.', to: '/practice' },
        { icon: '🗺️', title: 'Rutas de Aprendizaje', description: 'Sigue rutas estructuradas para aprender paso a paso.', to: '/learning-paths' },
      ]
    : [
        { icon: '❓', title: 'Ask a Question', description: 'Ask about any programming topic and get clear, friendly explanations.', to: '/ask' },
        { icon: '💻', title: 'Explain Code', description: 'Paste code and get a line-by-line explanation of what it does.', to: '/explain-code' },
        { icon: '🐛', title: 'Explain Error', description: 'Paste an error message and understand what went wrong.', to: '/explain-error' },
        { icon: '🎯', title: 'Practice', description: 'Test your knowledge with interactive quiz questions.', to: '/practice' },
        { icon: '🗺️', title: 'Learning Paths', description: 'Follow structured paths to learn step by step.', to: '/learning-paths' },
      ];

  return (
    <>
      <Hero />
      <section className="container" style={{ padding: '3rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>
          {language === 'es' ? '¿Cómo puedo ayudarte?' : 'How can I help you?'}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {features.map((feature) => (
            <FeatureCard key={feature.to} {...feature} />
          ))}
        </div>
      </section>
    </>
  );
}
