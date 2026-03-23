export interface TopicResponse {
  id: string;
  topic: string;
  simpleExplanation: string;
  whyItMatters: string;
  example: string;
  commonMistake: string;
  tryThisNext: string;
}

export interface ErrorResponse {
  id: string;
  pattern: string;
  title: string;
  whatItMeans: string;
  commonCauses: string[];
  stepsToFix: string[];
  exampleFix: string;
}

export interface Quiz {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: string[];
  icon: string;
}

export interface CodeExplanation {
  language: string;
  summary: string;
  concepts: string[];
  lines: { line: string; explanation: string }[];
}

export type Language = 'en' | 'es';
