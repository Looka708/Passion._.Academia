
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Mechanics", "Waves"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Mechanics": [
    {
      "id": 1,
      "questionText": "Which of these is a vector quantity?",
      "options": ["Speed", "Distance", "Mass", "Velocity"],
      "correctAnswer": "Velocity",
    },
    {
      "id": 2,
      "questionText": "Work is done when:",
      "options": ["Force is applied", "An object moves", "Force causes displacement", "There is no motion"],
      "correctAnswer": "Force causes displacement",
    }
  ],
  "Waves": [
    {
      "id": 1,
      "questionText": "Sound waves are an example of:",
      "options": ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Surface waves"],
      "correctAnswer": "Longitudinal waves",
    },
    {
      "id": 2,
      "questionText": "Which of the following has the highest frequency?",
      "options": ["Radio waves", "Microwaves", "Infrared", "Gamma rays"],
      "correctAnswer": "Gamma rays",
    }
  ],
};
