import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/i18n';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import AskPage from './pages/AskPage';
import ExplainCodePage from './pages/ExplainCodePage';
import ExplainErrorPage from './pages/ExplainErrorPage';
import PracticePage from './pages/PracticePage';
import LearningPathsPage from './pages/LearningPathsPage';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/explain-code" element={<ExplainCodePage />} />
          <Route path="/explain-error" element={<ExplainErrorPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/learning-paths" element={<LearningPathsPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
