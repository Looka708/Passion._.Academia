
import { MCQ } from '@/lib/types';

export const chapters = [
  "Algebra",
  "Geometry",
  "Data Handling",
];

export const mcqs: Record<string, MCQ[]> = {
  "Algebra": [
    { "id": 1, "questionText": "Solve the equation: 2x - 4 = 10", "options": ["5", "7", "6", "8"], "correctAnswer": "7" },
    { "id": 2, "questionText": "Simplify the expression: 3(x + 2)", "options": ["3x + 2", "3x + 6", "x + 6", "3x + 5"], "correctAnswer": "3x + 6" },
  ],
  "Geometry": [
    { "id": 1, "questionText": "What is the area of a rectangle with length 8 cm and width 5 cm?", "options": ["13 cm²", "40 cm²", "26 cm²", "35 cm²"], "correctAnswer": "40 cm²" },
    { "id": 2, "questionText": "The sum of angles in a quadrilateral is:", "options": ["180°", "270°", "360°", "90°"], "correctAnswer": "360°" },
  ],
  "Data Handling": [
    { "id": 1, "questionText": "What is the average of the numbers 10, 20, and 30?", "options": ["15", "20", "25", "60"], "correctAnswer": "20" },
  ]
};
