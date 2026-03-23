import type { Quiz, Language } from '../types/content';
import { quizzesEn } from '../data/quizzes.en';
import { quizzesEs } from '../data/quizzes.es';

function getQuizzes(language: Language): Quiz[] {
  return language === 'es' ? quizzesEs : quizzesEn;
}

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Returns quiz questions filtered by topic.
 * If topic is 'all', returns all quizzes in shuffled order.
 */
export function getPracticeQuestions(
  topic: string,
  language: Language = 'en',
): Quiz[] {
  const quizzes = getQuizzes(language);

  if (!topic || topic.toLowerCase() === 'all') {
    return shuffle(quizzes);
  }

  const normalized = topic.toLowerCase().trim();
  return quizzes.filter(q => q.topic.toLowerCase() === normalized);
}

/** Returns the list of unique quiz topics available for the given language. */
export function getAvailableTopics(language: Language = 'en'): string[] {
  const quizzes = getQuizzes(language);
  const topics = new Set(quizzes.map(q => q.topic));
  return [...topics].sort();
}
