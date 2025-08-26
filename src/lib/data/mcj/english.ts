
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
      "questionText": "Which of these is a preposition?",
      "options": ["run", "beautiful", "under", "quickly"],
      "correctAnswer": "under",
    },
    {
      "id": 2,
      "questionText": "The plural of 'child' is:",
      "options": ["childs", "childes", "children", "childer"],
      "correctAnswer": "children",
    }
  ],
  "Vocabulary": [
    {
      "id": 1,
      "questionText": "What is the opposite of 'ancient'?",
      "options": ["Old", "Modern", "Historic", "Past"],
      "correctAnswer": "Modern",
    },
    {
      "id": 2,
      "questionText": "What do you call a place where books are kept?",
      "options": ["Museum", "Library", "Gallery", "Stadium"],
      "correctAnswer": "Library",
    }
  ],
};
