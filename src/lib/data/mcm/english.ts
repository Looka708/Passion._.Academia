
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
      "questionText": "Which sentence is grammatically correct?",
      "options": ["She don't like ice cream.", "She doesn't likes ice cream.", "She doesn't like ice cream.", "She no like ice cream."],
      "correctAnswer": "She doesn't like ice cream.",
    },
    {
      "id": 2,
      "questionText": "I have been waiting ___ two hours.",
      "options": ["since", "for", "from", "at"],
      "correctAnswer": "for",
    }
  ],
  "Vocabulary": [
    {
      "id": 1,
      "questionText": "A person who writes books is called an:",
      "options": ["Author", "Actor", "Artist", "Athlete"],
      "correctAnswer": "Author",
    },
    {
      "id": 2,
      "questionText": "What is the synonym of 'begin'?",
      "options": ["End", "Finish", "Start", "Stop"],
      "correctAnswer": "Start",
    }
  ],
};
