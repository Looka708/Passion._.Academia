
import { MCQ } from '@/lib/types';

export const chapters = ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"];
export const mcqs: Record<string, MCQ[]> = {
    "Physical Chemistry": [{ "id": 1, "questionText": "Placeholder question for Physical Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Organic Chemistry": [{ "id": 1, "questionText": "Placeholder question for Organic Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Inorganic Chemistry": [{ "id": 1, "questionText": "Placeholder question for Inorganic Chemistry.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};
