
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Algebra", "Calculus"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Algebra": [
    {
      "id": 1,
      "questionText": "If 2x + 3 = 9, what is the value of x?",
      "options": ["2", "3", "4", "6"],
      "correctAnswer": "3",
    },
    {
      "id": 2,
      "questionText": "What is the value of x in the equation 5x - 10 = 15?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "5",
    }
  ],
  "Calculus": [
    {
      "id": 1,
      "questionText": "What is the derivative of x^2?",
      "options": ["2x", "x", "x^3", "2"],
      "correctAnswer": "2x",
    },
    {
      "id": 2,
      "questionText": "The integral of 2x dx is:",
      "options": ["x^2 + C", "2x^2 + C", "x + C", "2 + C"],
      "correctAnswer": "x^2 + C",
    }
  ],
};
