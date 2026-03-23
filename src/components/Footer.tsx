import { useLanguage } from '../lib/i18n';
import './Footer.css';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <p className="footer__text">
        {language === 'es'
          ? <>Hecho con <span className="footer__heart">❤️</span> para estudiantes de todo el mundo</>
          : <>Built with <span className="footer__heart">❤️</span> for learners everywhere</>}
      </p>
      <p className="footer__credits">
        AI Education Assistant &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
