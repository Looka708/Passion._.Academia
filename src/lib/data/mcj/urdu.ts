
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// For Urdu content, use the 'language: "urdu"' property in the MCQ object.
// =================================================================================

export const chapters = ["Grammar", "Vocabulary"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Grammar": [
    {
      "id": 1,
      "questionText": "اسم معرفہ کی کتنی اقسام ہیں؟",
      "options": ["2", "3", "4", "5"],
      "correctAnswer": "4",
      "language": "urdu",
    },
    {
      "id": 2,
      "questionText": "وہ کلمہ جو کسی کام کا کرنا، ہونا یا سہنا زمانے کے تعلق سے ظاہر کرے، کیا کہلاتا ہے؟",
      "options": ["اسم", "فعل", "حرف", "صفت"],
      "correctAnswer": "فعل",
      "language": "urdu",
    }
  ],
  "Vocabulary": [
    {
      "id": 1,
      "questionText": "لفظ 'خوبصورت' کا متضاد کیا ہے؟",
      "options": ["بدصورت", "حسین", "پیارا", "اچھا"],
      "correctAnswer": "بدصورت",
      "language": "urdu",
    },
    {
      "id": 2,
      "questionText": "لفظ 'صبح' کا مترادف کیا ہے؟",
      "options": ["شام", "رات", "دن", "سحر"],
      "correctAnswer": "سحر",
      "language": "urdu",
    }
  ],
};
