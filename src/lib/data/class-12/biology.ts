import { MCQ } from '@/lib/types';

export const chapters = ["Advanced Topics", "Human Anatomy", "Ecology"];
export const mcqs: Record<string, MCQ[]> = {
    "Advanced Topics": [{ "id": 1, "questionText": "Placeholder question for Advanced Topics in Biology.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Human Anatomy": [{ "id": 1, "questionText": "Placeholder question for Human Anatomy.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Ecology": [{ "id": 1, "questionText": "Placeholder question for Ecology.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};