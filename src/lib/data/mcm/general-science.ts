
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Physics", "Chemistry", "Biology"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Physics": [
    {
      "id": 1,
      "questionText": "Gravity is a force that:",
      "options": ["Pushes objects apart", "Attracts objects with mass", "Only affects planets", "Is stronger than magnetism"],
      "correctAnswer": "Attracts objects with mass",
    },
    {
      "id": 2,
      "questionText": "Light travels in a:",
      "options": ["Curved line", "Zigzag line", "Straight line", "Circular path"],
      "correctAnswer": "Straight line",
    }
  ],
  "Chemistry": [
    {
      "id": 1,
      "questionText": "The chemical symbol for water is:",
      "options": ["O2", "H2O", "CO2", "HO"],
      "correctAnswer": "H2O",
    },
    {
      "id": 2,
      "questionText": "What is the hardest natural substance on Earth?",
      "options": ["Gold", "Iron", "Diamond", "Quartz"],
      "correctAnswer": "Diamond",
    }
  ],
  "Biology": [
    {
      "id": 1,
      "questionText": "The brain is part of which body system?",
      "options": ["Circulatory System", "Respiratory System", "Nervous System", "Digestive System"],
      "correctAnswer": "Nervous System",
    },
    {
      "id": 2,
      "questionText": "Which organ in the body produces insulin?",
      "options": ["Liver", "Stomach", "Pancreas", "Kidney"],
      "correctAnswer": "Pancreas",
    }
  ]
};
