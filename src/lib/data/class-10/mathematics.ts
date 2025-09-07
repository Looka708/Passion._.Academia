
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './mathematics-short-questions';
import { longQuestions as longQuestionsData } from './mathematics-long-questions';


// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = [
  "Quadratic Equations",
  "Theory of Quadratic Equations",
  "Variations",
  "Partial Fractions",
  "Sets and Functions",
];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Quadratic Equations": [
    {
      "id": 1,
      "questionText": "Which of the following is a quadratic equation?",
      "options": ["x^3 + 2x + 1 = 0", "x^2 - 5x + 6 = 0", "x + 1 = 0", "x^4 - 1 = 0"],
      "correctAnswer": "x^2 - 5x + 6 = 0",
    },
    {
      "id": 2,
      "questionText": "The standard form of a quadratic equation is:",
      "options": ["ax + b = 0", "ax^2 + bx + c = 0, a ≠ 0", "ax^3 + bx^2 + cx + d = 0", "y = mx + c"],
      "correctAnswer": "ax^2 + bx + c = 0, a ≠ 0",
    },
    {
      "id": 3,
      "questionText": "How many roots does a quadratic equation have?",
      "options": ["1", "2", "3", "4"],
      "correctAnswer": "2",
    },
    {
        "id": 4,
        "questionText": "The solutions to the equation x^2 - 5x + 6 = 0 are:",
        "options": ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"],
        "correctAnswer": "2 and 3",
    },
    {
        "id": 5,
        "questionText": "A quadratic equation with no real roots is:",
        "options": ["x^2 + 4 = 0", "x^2 - 4 = 0", "x^2 - 2x + 1 = 0", "x^2 + 3x + 2 = 0"],
        "correctAnswer": "x^2 + 4 = 0",
    }
  ],
  "Theory of Quadratic Equations": [
    {
      "id": 1,
      "questionText": "The discriminant of the equation ax^2 + bx + c = 0 is:",
      "options": ["b^2 - 4ac", "b^2 + 4ac", "a^2 - 4bc", "c^2 - 4ab"],
      "correctAnswer": "b^2 - 4ac",
    },
    {
      "id": 2,
      "questionText": "If the discriminant is zero, the roots are:",
      "options": ["Real and distinct", "Real and equal", "Complex", "Imaginary"],
      "correctAnswer": "Real and equal",
    },
    {
      "id": 3,
      "questionText": "The sum of the roots of x^2 - 5x + 6 = 0 is:",
      "options": ["-5", "5", "6", "-6"],
      "correctAnswer": "5",
    },
    {
        "id": 4,
        "questionText": "The product of the roots of 2x^2 + 3x - 5 = 0 is:",
        "options": ["-5/2", "5/2", "-3/2", "3/2"],
        "correctAnswer": "-5/2",
    },
    {
        "id": 5,
        "questionText": "If the roots of a quadratic equation are 2 and -3, the equation is:",
        "options": ["x^2 + x - 6 = 0", "x^2 - x + 6 = 0", "x^2 + x + 6 = 0", "x^2 - x - 6 = 0"],
        "correctAnswer": "x^2 + x - 6 = 0",
    }
  ],
  "Variations": [
    {
      "id": 1,
      "questionText": "If y varies directly as x, which equation is correct?",
      "options": ["y = kx", "y = k/x", "xy = k", "y = x+k"],
      "correctAnswer": "y = kx",
    },
    {
      "id": 2,
      "questionText": "The third proportional to 4 and 16 is:",
      "options": ["32", "64", "20", "12"],
      "correctAnswer": "64",
    },
    {
        "id": 3,
        "questionText": "If a:b = c:d, then by alternando property:",
        "options": ["a:c = b:d", "d:b = c:a", "a:d = b:c", "c:a = d:b"],
        "correctAnswer": "a:c = b:d",
    }
  ],
  "Partial Fractions": [
    {
        "id": 1,
        "questionText": "A fraction in which the degree of the numerator is less than the degree of the denominator is called a:",
        "options": ["Proper fraction", "Improper fraction", "Mixed fraction", "None of these"],
        "correctAnswer": "Proper fraction"
    },
    {
        "id": 2,
        "questionText": "The partial fraction form of 1/((x-1)(x+2)) is:",
        "options": ["A/(x-1) + B/(x+2)", "A/(x-1) + Bx/(x+2)", "A/x + B/(x+2)", "Ax+B/(x-1) + C/(x+2)"],
        "correctAnswer": "A/(x-1) + B/(x+2)"
    }
  ],
   "Sets and Functions": [
    {
        "id": 1,
        "questionText": "A set with no elements is called:",
        "options": ["Singleton set", "Empty set", "Infinite set", "Power set"],
        "correctAnswer": "Empty set"
    },
    {
        "id": 2,
        "questionText": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∪ B?",
        "options": ["{3}", "{1, 2, 4, 5}", "{1, 2, 3, 4, 5}", "{1, 2}"],
        "correctAnswer": "{1, 2, 3, 4, 5}"
    },
    {
        "id": 3,
        "questionText": "If f(x) = 2x + 1, then f(3) is:",
        "options": ["5", "6", "7", "8"],
        "correctAnswer": "7"
    }
  ]
};

export const shortQuestions = {
    "Quadratic Equations": shortQuestionsData.slice(0, 3),
    "Theory of Quadratic Equations": shortQuestionsData.slice(3, 5),
    "Variations": shortQuestionsData.slice(5, 7),
    "Partial Fractions": shortQuestionsData.slice(7, 8),
    "Sets and Functions": shortQuestionsData.slice(8, 10),
};

export const longQuestions = {
    "Quadratic Equations": longQuestionsData.slice(0, 1),
    "Theory of Quadratic Equations": longQuestionsData.slice(1, 2),
    "Variations": longQuestionsData.slice(2, 3),
    "Partial Fractions": longQuestionsData.slice(3, 4),
    "Sets and Functions": longQuestionsData.slice(4, 5),
};
