
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
      "questionText": "What is 15% of 200?",
      "options": ["15", "20", "30", "40"],
      "correctAnswer": "30",
    },
    {
      "id": 2,
      "questionText": "If a car travels at 60 km/h, how far will it travel in 3 hours?",
      "options": ["120 km", "150 km", "180 km", "200 km"],
      "correctAnswer": "180 km",
    }
  ],
  "Geometry": [
    {
      "id": 1,
      "questionText": "The sum of angles in a triangle is:",
      "options": ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
      "correctAnswer": "180 degrees",
    },
    {
      "id": 2,
      "questionText": "What is the perimeter of a square with a side length of 5 cm?",
      "options": ["10 cm", "15 cm", "20 cm", "25 cm"],
      "correctAnswer": "20 cm",
    }
  ],
};
