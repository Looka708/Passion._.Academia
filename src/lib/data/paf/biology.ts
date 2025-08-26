
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Botany", "Zoology"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Botany": [
    {
      "id": 1,
      "questionText": "The process of a plant making its own food is called:",
      "options": ["Respiration", "Transpiration", "Photosynthesis", "Pollination"],
      "correctAnswer": "Photosynthesis",
    },
    {
      "id": 2,
      "questionText": "Which gas is released during photosynthesis?",
      "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      "correctAnswer": "Oxygen",
    }
  ],
  "Zoology": [
    {
      "id": 1,
      "questionText": "Which chamber of the heart pumps oxygenated blood to the rest of the body?",
      "options": ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
      "correctAnswer": "Left Ventricle",
    },
    {
      "id": 2,
      "questionText": "What is the powerhouse of the animal cell?",
      "options": ["Nucleus", "Ribosome", "Mitochondrion", "Lysosome"],
      "correctAnswer": "Mitochondrion",
    }
  ],
};
