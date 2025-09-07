
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './physics-short-questions';
import { longQuestions as longQuestionsData } from './physics-long-questions';


export const chapters = ["Electromagnetism", "Modern Physics", "Nuclear Physics"];
export const mcqs: Record<string, MCQ[]> = {
    "Electromagnetism": [{ "id": 1, "questionText": "Placeholder question for Electromagnetism.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Modern Physics": [{ "id": 1, "questionText": "Placeholder question for Modern Physics.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Nuclear Physics": [{ "id": 1, "questionText": "Placeholder question for Nuclear Physics.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};

export const shortQuestions = {
    "Electromagnetism": shortQuestionsData.slice(0, 3),
    "Modern Physics": shortQuestionsData.slice(3, 6),
    "Nuclear Physics": shortQuestionsData.slice(6, 10),
};

export const longQuestions = {
    "Electromagnetism": longQuestionsData.slice(0, 2),
    "Modern Physics": longQuestionsData.slice(2, 4),
    "Nuclear Physics": longQuestionsData.slice(4, 5),
};
