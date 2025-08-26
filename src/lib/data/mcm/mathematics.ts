
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Arithmetic", "Geometry"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Arithmetic": [
    {
      "id": 1,
      "questionText": "What is the least common multiple (LCM) of 12 and 18?",
      "options": ["6", "12", "18", "36"],
      "correctAnswer": "36",
    },
    {
      "id": 2,
      "questionText": "Solve for x: 3x - 7 = 8",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "5",
    }
  ],
  "Geometry": [
    {
      "id": 1,
      "questionText": "What is the area of a circle with a radius of 5 cm? (Use π ≈ 3.14)",
      "options": ["15.7 cm²", "31.4 cm²", "78.5 cm²", "25 cm²"],
      "correctAnswer": "78.5 cm²",
    },
    {
      "id": 2,
      "questionText": "A triangle with all three sides equal is called:",
      "options": ["Isosceles", "Scalene", "Equilateral", "Right-angled"],
      "correctAnswer": "Equilateral",
    }
  ],
};
