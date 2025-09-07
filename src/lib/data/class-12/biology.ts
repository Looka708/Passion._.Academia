import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './biology-short-questions';
import { longQuestions as longQuestionsData } from './biology-long-questions';

export const chapters = ["Advanced Topics", "Human Anatomy", "Ecology"];
export const mcqs: Record<string, MCQ[]> = {
    "Advanced Topics": [{ "id": 1, "questionText": "Placeholder question for Advanced Topics in Biology.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Human Anatomy": [{ "id": 1, "questionText": "Placeholder question for Human Anatomy.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Ecology": [{ "id": 1, "questionText": "Placeholder question for Ecology.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};
export const shortQuestions = {
    "Advanced Topics": shortQuestionsData.slice(0, 3),
    "Human Anatomy": shortQuestionsData.slice(3, 6),
    "Ecology": shortQuestionsData.slice(6, 10),
};

export const longQuestions = {
    "Advanced Topics": longQuestionsData.slice(0, 2),
    "Human Anatomy": longQuestionsData.slice(2, 4),
    "Ecology": longQuestionsData.slice(4, 5),
};
