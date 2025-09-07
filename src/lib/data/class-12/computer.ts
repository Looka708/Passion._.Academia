
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './computer-short-questions';
import { longQuestions as longQuestionsData } from './computer-long-questions';


export const chapters = ["Data Structures", "Algorithms", "Databases"];
export const mcqs: Record<string, MCQ[]> = {
    "Data Structures": [{ "id": 1, "questionText": "Placeholder question for Data Structures.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Algorithms": [{ "id": 1, "questionText": "Placeholder question for Algorithms.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Databases": [{ "id": 1, "questionText": "Placeholder question for Databases.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};

export const shortQuestions = {
    "Data Structures": shortQuestionsData.slice(0, 3),
    "Algorithms": shortQuestionsData.slice(3, 6),
    "Databases": shortQuestionsData.slice(6, 10),
};

export const longQuestions = {
    "Data Structures": longQuestionsData.slice(0, 2),
    "Algorithms": longQuestionsData.slice(2, 4),
    "Databases": longQuestionsData.slice(4, 5),
};
