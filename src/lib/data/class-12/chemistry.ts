
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './chemistry-short-questions';
import { longQuestions as longQuestionsData } from './chemistry-long-questions';


export const chapters = ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"];
export const mcqs: Record<string, MCQ[]> = {
    "Physical Chemistry": [{ "id": 1, "questionText": "Placeholder question for Physical Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Organic Chemistry": [{ "id": 1, "questionText": "Placeholder question for Organic Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Inorganic Chemistry": [{ "id": 1, "questionText": "Placeholder question for Inorganic Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};

export const shortQuestions = {
    "Physical Chemistry": shortQuestionsData.slice(0, 3),
    "Organic Chemistry": shortQuestionsData.slice(3, 6),
    "Inorganic Chemistry": shortQuestionsData.slice(6, 10),
};

export const longQuestions = {
    "Physical Chemistry": longQuestionsData.slice(0, 2),
    "Organic Chemistry": longQuestionsData.slice(2, 4),
    "Inorganic Chemistry": longQuestionsData.slice(4, 5),
};
