
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
      "questionText": "Which number comes next in the sequence? 5, 10, 15, 20, ...",
      "options": ["25", "30", "35", "40"],
      "correctAnswer": "25",
    },
    {
      "id": 2,
      "questionText": "What letter comes next? A, Z, B, Y, C, ...",
      "options": ["X", "D", "W", "V"],
      "correctAnswer": "X",
    }
  ],
  "Analogy": [
    {
      "id": 1,
      "questionText": "Doctor is to Patient as Lawyer is to ...",
      "options": ["Judge", "Court", "Client", "Law"],
      "correctAnswer": "Client",
    },
    {
      "id": 2,
      "questionText": "Sun is to Day as Moon is to ...",
      "options": ["Star", "Night", "Light", "Sky"],
      "correctAnswer": "Night",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which item does not belong in the group?",
      "options": ["Apple", "Orange", "Banana", "Broccoli"],
      "correctAnswer": "Broccoli",
    },
    {
      "id": 2,
      "questionText": "Find the odd one out.",
      "options": ["Triangle", "Square", "Circle", "Line"],
      "correctAnswer": "Line",
    }
  ],
};
