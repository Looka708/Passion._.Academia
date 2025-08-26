
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
      "questionText": "A sequence shows a line rotating 45 degrees clockwise in each step. If it starts horizontally, what is the third step?",
      "options": ["Vertical line", "Line at 90 degrees", "Line at 135 degrees", "Horizontal line"],
      "correctAnswer": "Line at 90 degrees",
    }
  ],
  "Analogy": [
    {
      "id": 1,
      "questionText": "A large square is to a small square as a large circle is to:",
      "options": ["A small circle", "A large triangle", "A small triangle", "An oval"],
      "correctAnswer": "A small circle",
    }
  ],
  "Classification": [
    {
      "id": 1,
      "questionText": "Which shape is different from the others: circle, square, triangle, arrow?",
      "options": ["Circle", "Square", "Triangle", "Arrow"],
      "correctAnswer": "Arrow",
    }
  ],
};
