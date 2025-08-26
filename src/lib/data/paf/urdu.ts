
import { MCQ } from '@/lib/types';

export const chapters: string[] = ["قواعد", "الفاظ و محاورات"];

export const mcqs: Record<string, MCQ[]> = {
  "قواعد": [
    {
      "id": 1,
      "questionText": "اسم معرفہ کی کتنی اقسام ہیں؟",
      "options": ["2", "3", "4", "5"],
      "correctAnswer": "4",
      "language": "urdu"
    },
    {
      "id": 2,
      "questionText": "وہ کلمہ جو کسی کام کا کرنا، ہونا یا سہنا زمانے کے تعلق سے ظاہر کرے، کیا کہلاتا ہے؟",
      "options": ["اسم", "فعل", "حرف", "صفت"],
      "correctAnswer": "فعل",
      "language": "urdu",
    }
  ],
  "الفاظ و محاورات": [
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
