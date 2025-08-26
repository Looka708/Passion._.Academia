
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Grammar", "Vocabulary"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Grammar": [
    {
      "id": 1,
      "questionText": "Identify the part of speech for the word 'quickly' in 'He ran quickly.'",
      "options": ["Adjective", "Verb", "Noun", "Adverb"],
      "correctAnswer": "Adverb",
    },
    {
      "id": 2,
      "questionText": "Choose the correct form of the verb: 'She ___ to school every day.'",
      "options": ["go", "goes", "is going", "went"],
      "correctAnswer": "goes",
    }
  ],
  "Vocabulary": [
    {
      "id": 1,
      "questionText": "Choose the word that is an antonym for 'brave'.",
      "options": ["Courageous", "Bold", "Cowardly", "Heroic"],
      "correctAnswer": "Cowardly",
    },
    {
      "id": 2,
      "questionText": "A synonym for 'large' is:",
      "options": ["Small", "Tiny", "Huge", "Little"],
      "correctAnswer": "Huge",
    }
  ],
};
