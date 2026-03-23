import { useLanguage } from '../lib/i18n';
import './Footer.css';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <p className="footer__text">
        {language === 'es'
          ? <>Creado por <a href="https://www.beagandica.com" target="_blank" rel="noopener noreferrer">Beatris Mendez Gandica</a> con <span className="footer__heart">❤️</span> para estudiantes de todo el mundo</>
          : <>Built by <a href="https://www.beagandica.com" target="_blank" rel="noopener noreferrer">Beatris Mendez Gandica</a> with <span className="footer__heart">❤️</span> for learners everywhere</>}
      </p>
      <p className="footer__credits">
        AI Education Assistant &copy; 2026
      </p>
    </footer>
  );
}
