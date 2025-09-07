
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './mathematics-short-questions';
import { longQuestions as longQuestionsData } from './mathematics-long-questions';


export const chapters = ["Calculus", "Vectors", "Differential Equations"];
export const mcqs: Record<string, MCQ[]> = {
    "Calculus": [{ "id": 1, "questionText": "Placeholder question for Calculus.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Vectors": [{ "id": 1, "questionText": "Placeholder question for Vectors.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Differential Equations": [{ "id": 1, "questionText": "Placeholder question for Differential Equations.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};

export const shortQuestions = {
    "Calculus": shortQuestionsData.slice(0, 4),
    "Vectors": shortQuestionsData.slice(4, 7),
    "Differential Equations": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Calculus": longQuestionsData.slice(0, 2),
    "Vectors": longQuestionsData.slice(2, 4),
    "Differential Equations": longQuestionsData.slice(4, 5),
};
