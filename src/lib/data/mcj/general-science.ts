
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
      "questionText": "What is the boiling point of water at sea level?",
      "options": ["90°C", "100°C", "110°C", "120°C"],
      "correctAnswer": "100°C",
    },
    {
      "id": 2,
      "questionText": "Rainbows are caused by:",
      "options": ["Reflection of light", "Refraction and dispersion of light", "Scattering of light", "Diffraction of light"],
      "correctAnswer": "Refraction and dispersion of light",
    }
  ],
  "Chemistry": [
    {
      "id": 1,
      "questionText": "Which gas is most abundant in Earth's atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      "correctAnswer": "Nitrogen",
    },
    {
      "id": 2,
      "questionText": "What is the chemical formula for sulfuric acid?",
      "options": ["H2SO4", "HCl", "HNO3", "H2O"],
      "correctAnswer": "H2SO4",
    }
  ],
  "Biology": [
    {
      "id": 1,
      "questionText": "Which blood type is the universal donor?",
      "options": ["A", "B", "AB", "O"],
      "correctAnswer": "O",
    },
    {
      "id": 2,
      "questionText": "The human skeleton is made up of how many bones?",
      "options": ["106", "206", "306", "406"],
      "correctAnswer": "206",
    }
  ]
};
