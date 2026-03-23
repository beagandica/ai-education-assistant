import type { ErrorResponse, Language } from '../types/content';
import { errorsEn } from '../data/errors.en';
import { errorsEs } from '../data/errors.es';

function getErrors(language: Language): ErrorResponse[] {
  return language === 'es' ? errorsEs : errorsEn;
}

/**
 * Match an error message against known error patterns.
 * Returns the first matching ErrorResponse or null.
 */
export function explainError(
  errorMessage: string,
  language: Language = 'en',
): ErrorResponse | null {
  if (!errorMessage || !errorMessage.trim()) return null;

  const errors = getErrors(language);
  const input = errorMessage.trim();

  for (const err of errors) {
    try {
      const regex = new RegExp(err.pattern, 'i');
      if (regex.test(input)) return err;
    } catch {
      // If a pattern is malformed, skip it
    }
  }

  return null;
}

/** Returns all seeded error explanations for the given language. */
export function getCommonErrors(language: Language = 'en'): ErrorResponse[] {
  return getErrors(language);
}
