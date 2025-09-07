
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './chemistry-short-questions';
import { longQuestions as longQuestionsData } from './chemistry-long-questions';


export const chapters = [
  "Chemical Equilibrium",
  "Acids, Bases and Salts",
  "Organic Chemistry",
  "Hydrocarbons",
];

export const mcqs: Record<string, MCQ[]> = {
  "Chemical Equilibrium": [
    {
      "id": 1,
      "questionText": "A reaction which can proceed in both forward and reverse directions is called:",
      "options": ["Irreversible reaction", "Reversible reaction", "Spontaneous reaction", "Non-spontaneous reaction"],
      "correctAnswer": "Reversible reaction",
    },
    {
      "id": 2,
      "questionText": "In a dynamic equilibrium, the rate of the forward reaction is ________ the rate of the reverse reaction.",
      "options": ["greater than", "less than", "equal to", "unrelated to"],
      "correctAnswer": "equal to",
    },
  ],
  "Acids, Bases and Salts": [
    {
      "id": 1,
      "questionText": "Which of the following is a strong acid?",
      "options": ["Acetic acid (CH3COOH)", "Carbonic acid (H2CO3)", "Hydrochloric acid (HCl)", "Formic acid (HCOOH)"],
      "correctAnswer": "Hydrochloric acid (HCl)",
    },
    {
      "id": 2,
      "questionText": "The pH of a neutral solution is:",
      "options": ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 0"],
      "correctAnswer": "Equal to 7",
    },
  ],
  "Organic Chemistry": [
    {
      "id": 1,
      "questionText": "Which element is the essential constituent of all organic compounds?",
      "options": ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
      "correctAnswer": "Carbon",
    },
    {
      "id": 2,
      "questionText": "The functional group -OH represents:",
      "options": ["Aldehydes", "Ketones", "Carboxylic acids", "Alcohols"],
      "correctAnswer": "Alcohols",
    },
  ],
  "Hydrocarbons": [
    {
      "id": 1,
      "questionText": "Which of the following is a saturated hydrocarbon?",
      "options": ["Ethene", "Ethyne", "Benzene", "Ethane"],
      "correctAnswer": "Ethane",
    },
    {
      "id": 2,
      "questionText": "The general formula for alkenes is:",
      "options": ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
      "correctAnswer": "CnH2n",
    },
  ]
};

export const shortQuestions = {
    "Chemical Equilibrium": shortQuestionsData.slice(0, 3),
    "Acids, Bases and Salts": shortQuestionsData.slice(3, 6),
    "Organic Chemistry": shortQuestionsData.slice(6, 8),
    "Hydrocarbons": shortQuestionsData.slice(8, 10),
};

export const longQuestions = {
    "Chemical Equilibrium": longQuestionsData.slice(0, 1),
    "Acids, Bases and Salts": longQuestionsData.slice(1, 2),
    "Organic Chemistry": longQuestionsData.slice(2, 4),
    "Hydrocarbons": longQuestionsData.slice(4, 5),
};
