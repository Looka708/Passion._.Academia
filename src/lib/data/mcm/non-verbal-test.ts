
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Pattern Completion", "Analogy", "Classification"];

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
      "questionText": "A pattern shows a square with one of its corners shaded, moving clockwise. Which corner is shaded next?",
      "options": ["Top-left", "Top-right", "Bottom-right", "Bottom-left"],
      "correctAnswer": "Bottom-right",
    }
  ],
  "Analogy": [
    {
      "id": 1,
      "questionText": "A picture of a key is to a picture of a lock, as a picture of a pen is to a picture of a ...",
      "options": ["Book", "Paper", "Pencil", "Desk"],
      "correctAnswer": "Paper",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which shape is the odd one out? A series of regular polygons (triangle, square, pentagon) and one irregular shape.",
      "options": ["Triangle", "Square", "Pentagon", "Irregular shape"],
      "correctAnswer": "Irregular shape",
    }
  ],
};
