
import { MCQ } from '@/lib/types';

export const chapters = ["Electromagnetism", "Modern Physics", "Nuclear Physics"];
export const mcqs: Record<string, MCQ[]> = {
    "Electromagnetism": [{ "id": 1, "questionText": "Placeholder question for Electromagnetism.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Modern Physics": [{ "id": 1, "questionText": "Placeholder question for Modern Physics.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
    "Nuclear Physics": [{ "id": 1, "questionText": "Placeholder question for Nuclear Physics.", "options": ["A", "B", "C", "D"], "correctAnswer": "A" }],
};
