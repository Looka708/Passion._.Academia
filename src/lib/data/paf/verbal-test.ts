
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Series Completion", "Analogy", "Classification"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Series Completion": [
    {
      "id": 1,
      "questionText": "Which number logically follows this series? 4, 6, 9, 13, ...",
      "options": ["16", "17", "18", "19"],
      "correctAnswer": "18",
    },
    {
      "id": 2,
      "questionText": "Find the missing letter: Z, X, V, T, R, ...",
      "options": ["P", "O", "N", "Q"],
      "correctAnswer": "P",
    }
  ],
  "Analogy": [
    {
      "id": 1,
      "questionText": "Wheel is to Bicycle as Wing is to ...",
      "options": ["Bird", "Fly", "Aeroplane", "Sky"],
      "correctAnswer": "Aeroplane",
    },
    {
      "id": 2,
      "questionText": "Water is to Thirst as Food is to ...",
      "options": ["Eat", "Hunger", "Energy", "Drink"],
      "correctAnswer": "Hunger",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which word is the odd one out?",
      "options": ["Lion", "Tiger", "Leopard", "Cow"],
      "correctAnswer": "Cow",
    },
    {
      "id": 2,
      "questionText": "Find the odd one out:",
      "options": ["Car", "Bus", "Train", "Bicycle"],
      "correctAnswer": "Bicycle",
    }
  ],
};
