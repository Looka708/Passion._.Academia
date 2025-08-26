
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
      "questionText": "Which number should come next in the series? 3, 6, 12, 24, ...",
      "options": ["30", "36", "48", "60"],
      "correctAnswer": "48",
    },
    {
      "id": 2,
      "questionText": "Find the missing letter: B, E, H, K, ...",
      "options": ["L", "M", "N", "O"],
      "correctAnswer": "N",
    }
  ],
  "Analogy": [
    {
      "id": 1,
      "questionText": "Book is to Read as Fork is to ...",
      "options": ["Cut", "Eat", "Stir", "Cook"],
      "correctAnswer": "Eat",
    },
    {
      "id": 2,
      "questionText": "Puppy is to Dog as Kitten is to ...",
      "options": ["Cat", "Lion", "Tiger", "Animal"],
      "correctAnswer": "Cat",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which word does not belong with the others?",
      "options": ["Carrot", "Potato", "Tomato", "Onion"],
      "correctAnswer": "Tomato",
    },
    {
      "id": 2,
      "questionText": "Find the odd one out.",
      "options": ["Run", "Walk", "Think", "Jog"],
      "correctAnswer": "Think",
    }
  ],
};
