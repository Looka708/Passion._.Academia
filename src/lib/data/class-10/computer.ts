
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './computer-short-questions';
import { longQuestions as longQuestionsData } from './computer-long-questions';


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

export const shortQuestions = {
    "Programming in C": shortQuestionsData.slice(0, 3),
    "User Interface": shortQuestionsData.slice(3, 5),
    "Data Types and Variables": shortQuestionsData.slice(5, 8),
    "Control Structures": shortQuestionsData.slice(8, 10),
};

export const longQuestions = {
    "Programming in C": longQuestionsData.slice(0, 2),
    "User Interface": longQuestionsData.slice(2, 3),
    "Data Types and Variables": longQuestionsData.slice(3, 4),
    "Control Structures": longQuestionsData.slice(4, 5),
};
