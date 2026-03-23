import './ResponsePanel.css';

interface Section {
  title: string;
  content: string;
  icon?: string;
}

interface ResponsePanelProps {
  sections: Section[];
}

function isCodeLike(text: string): boolean {
  return (
    text.includes('`') ||
    text.includes('console.') ||
    text.includes('function ') ||
    text.includes('const ') ||
    text.includes('let ') ||
    text.includes('=>') ||
    text.includes('  ') ||
    /[{}();]/.test(text)
  );
}

function renderContent(content: string) {
  if (isCodeLike(content)) {
    const cleaned = content.replace(/^`+|`+$/g, '');
    return (
      <pre>
        <code>{cleaned}</code>
      </pre>
    );
  }
  return content.split('\n').map((line, i) => <p key={i}>{line}</p>);
}

export function ResponsePanel({ sections }: ResponsePanelProps) {
  if (sections.length === 0) return null;

  return (
    <div className="response-panel">
      {sections.map((section, index) => (
        <article key={index} className="response-panel__section">
          <div className="response-panel__header">
            {section.icon && (
              <span className="response-panel__icon">{section.icon}</span>
            )}
            <h3 className="response-panel__title">{section.title}</h3>
          </div>
          <div className="response-panel__content">
            {renderContent(section.content)}
          </div>
        </article>
      ))}
    </div>
  );
}
