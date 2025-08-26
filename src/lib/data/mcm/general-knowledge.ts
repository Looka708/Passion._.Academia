
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
      "questionText": "What is the national animal of Pakistan?",
      "options": ["Tiger", "Lion", "Markhor", "Snow Leopard"],
      "correctAnswer": "Markhor",
    },
    {
      "id": 2,
      "questionText": "The largest province of Pakistan by area is:",
      "options": ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
      "correctAnswer": "Balochistan",
    }
  ],
  "Islamic Studies": [
    {
      "id": 1,
      "questionText": "The holy book of Islam is called:",
      "options": ["Torah", "Bible", "Quran", "Gita"],
      "correctAnswer": "Quran",
    },
    {
      "id": 2,
      "questionText": "What is the first month of the Islamic calendar?",
      "options": ["Ramadan", "Shawwal", "Muharram", "Safar"],
      "correctAnswer": "Muharram",
    }
  ],
};
