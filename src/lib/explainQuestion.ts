import type { TopicResponse, Language } from '../types/content';
import { topicsEn } from '../data/topics.en';
import { topicsEs } from '../data/topics.es';

function getTopics(language: Language): TopicResponse[] {
  return language === 'es' ? topicsEs : topicsEn;
}

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

/** Split a query into meaningful words (2+ chars), dropping noise words. */
function extractWords(query: string): string[] {
  const stopWords = new Set([
    'what', 'is', 'a', 'an', 'the', 'how', 'do', 'does', 'can', 'i',
    'you', 'me', 'my', 'to', 'in', 'of', 'for', 'and', 'or', 'are',
    'this', 'that', 'it', 'about', 'use', 'work', 'explain', 'tell',
    'que', 'es', 'un', 'una', 'el', 'la', 'los', 'las', 'como', 'son',
    'por', 'para', 'qué', 'cómo', 'me', 'del',
  ]);
  return normalize(query)
    .split(/\W+/)
    .filter(w => w.length >= 2 && !stopWords.has(w));
}

/**
 * Search through topics for the best match to the given question.
 * Returns the best matching TopicResponse or null.
 */
export function explainQuestion(
  question: string,
  language: Language = 'en',
): TopicResponse | null {
  if (!question || !question.trim()) return null;

  const topics = getTopics(language);
  const q = normalize(question);
  const words = extractWords(question);

  // Exact id match
  const idMatch = topics.find(t => q === normalize(t.id));
  if (idMatch) return idMatch;

  // Exact topic name match
  const nameMatch = topics.find(t => q === normalize(t.topic));
  if (nameMatch) return nameMatch;

  // Score each topic by how well it matches the query
  let bestScore = 0;
  let bestTopic: TopicResponse | null = null;

  for (const topic of topics) {
    let score = 0;
    const topicName = normalize(topic.topic);
    const topicId = normalize(topic.id);

    // Query contains the full topic name
    if (q.includes(topicName)) score += 10;

    // Query contains the topic id
    if (q.includes(topicId)) score += 8;

    // Topic name appears as a word in the query
    if (words.includes(topicName)) score += 6;

    // Individual query words match parts of the topic
    for (const word of words) {
      if (topicName.includes(word)) score += 3;
      if (topicId.includes(word)) score += 2;
    }

    // Topic name contains any word from the query
    const topicWords = topicName.split(/\W+/);
    for (const tw of topicWords) {
      if (tw.length >= 3 && words.includes(tw)) score += 4;
    }

    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  // Require a minimum score to avoid false positives
  return bestScore >= 3 ? bestTopic : null;
}

/** Returns all topics for the given language. */
export function getAllTopics(language: Language = 'en'): TopicResponse[] {
  return getTopics(language);
}
