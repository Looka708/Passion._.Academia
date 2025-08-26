
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Pakistan Studies", "Islamic Studies"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Pakistan Studies": [
    {
      "id": 1,
      "questionText": "Who is the founder of Pakistan?",
      "options": ["Allama Iqbal", "Muhammad Ali Jinnah", "Liaquat Ali Khan", "Sir Syed Ahmed Khan"],
      "correctAnswer": "Muhammad Ali Jinnah",
    },
    {
      "id": 2,
      "questionText": "Which is the national sport of Pakistan?",
      "options": ["Cricket", "Football", "Hockey", "Squash"],
      "correctAnswer": "Hockey",
    }
  ],
  "Islamic Studies": [
    {
      "id": 1,
      "questionText": "How many pillars of Islam are there?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "5",
    },
    {
      "id": 2,
      "questionText": "In which month do Muslims fast?",
      "options": ["Shawwal", "Ramadan", "Rajab", "Muharram"],
      "correctAnswer": "Ramadan",
    }
  ],
};
