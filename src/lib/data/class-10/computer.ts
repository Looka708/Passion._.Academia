
import { MCQ } from '@/lib/types';

export const chapters = [
  "Programming in C",
  "User Interface",
  "Data Types and Variables",
  "Control Structures",
];

export const mcqs: Record<string, MCQ[]> = {
  "Programming in C": [
    {
      "id": 1,
      "questionText": "Which of the following is a high-level programming language?",
      "options": ["Assembly", "Machine Language", "C", "Binary"],
      "correctAnswer": "C",
    },
  ],
  "User Interface": [
    {
      "id": 1,
      "questionText": "GUI stands for:",
      "options": ["General User Input", "Graphical User Interface", "Global User Interaction", "Game User Interface"],
      "correctAnswer": "Graphical User Interface",
    },
  ],
  "Data Types and Variables": [
    {
      "id": 1,
      "questionText": "Which data type is used to store whole numbers in C?",
      "options": ["float", "char", "double", "int"],
      "correctAnswer": "int",
    },
  ],
  "Control Structures": [
    {
      "id": 1,
      "questionText": "Which statement is used to make a decision in C?",
      "options": ["for", "while", "if", "switch"],
      "correctAnswer": "if",
    },
  ]
};
