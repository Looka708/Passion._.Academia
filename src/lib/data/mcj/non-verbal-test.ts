
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Pattern Completion", "Figure Matrix", "Classification"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// NOTE: For non-verbal questions, the question text should describe the image or pattern.
// In a real application, you would have image paths here.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Pattern Completion": [
    {
      "id": 1,
      "questionText": "A sequence shows a circle, then a circle with a dot, then a circle with two dots. What comes next?",
      "options": ["A circle", "A circle with a dot", "A circle with three dots", "A square"],
      "correctAnswer": "A circle with three dots",
    }
  ],
  "Figure Matrix": [
    {
      "id": 1,
      "questionText": "In a 2x2 grid, the top row has a black circle and a white circle. The bottom left has a black square. What is in the bottom right?",
      "options": ["Black circle", "White circle", "Black square", "White square"],
      "correctAnswer": "White square",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which shape is the odd one out: A five-pointed star, a six-pointed star, a seven-pointed star, a circle?",
      "options": ["Five-pointed star", "Six-pointed star", "Seven-pointed star", "Circle"],
      "correctAnswer": "Circle",
    }
  ],
};
