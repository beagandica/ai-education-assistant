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

  const audiences = language === 'es'
    ? [
        { icon: '🧑‍💻', label: 'Estudiantes que comienzan a programar' },
        { icon: '🌍', label: 'Hablantes no nativos de inglés' },
        { icon: '👩‍🏫', label: 'Docentes y talleres educativos' },
      ]
    : [
        { icon: '🧑‍💻', label: 'Students starting coding' },
        { icon: '🌍', label: 'Non-native English speakers' },
        { icon: '👩‍🏫', label: 'Teachers and workshops' },
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

      <section style={{ background: 'var(--color-bg-white)', padding: '3rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>
            {language === 'es' ? '¿Para quién es esto?' : 'Who is this for?'}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {audiences.map((a) => (
              <div key={a.label} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '160px',
              }}>
                <span style={{ fontSize: '2.5rem' }}>{a.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text)' }}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>
            {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            {language === 'es'
              ? 'Creado por Bea Mendez Gandica, fundadora de Nuevo Foundation, para expandir el acceso a la educación en programación para estudiantes en todas partes.'
              : 'Built by Bea Mendez Gandica, founder of Nuevo Foundation, to expand access to coding education for students everywhere.'}
          </p>
          <a
            href="https://github.com/beagandica/ai-education-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{ gap: '0.5rem', display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.4rem' }}>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
          </a>
        </div>
      </section>
    </>
  );
}
