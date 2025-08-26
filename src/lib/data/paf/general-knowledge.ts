
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["World Facts", "Current Affairs"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "World Facts": [
    {
      "id": 1,
      "questionText": "Which is the largest ocean in the world?",
      "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
      "correctAnswer": "Pacific",
    },
    {
      "id": 2,
      "questionText": "What is the longest river in the world?",
      "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
      "correctAnswer": "Nile",
    }
  ],
  "Current Affairs": [
    {
      "id": 1,
      "questionText": "The headquarters of the United Nations is located in:",
      "options": ["Geneva", "New York City", "Paris", "London"],
      "correctAnswer": "New York City",
    },
    {
      "id": 2,
      "questionText": "Which country is known as the 'Land of the Rising Sun'?",
      "options": ["China", "South Korea", "Japan", "Thailand"],
      "correctAnswer": "Japan",
    }
  ],
};
