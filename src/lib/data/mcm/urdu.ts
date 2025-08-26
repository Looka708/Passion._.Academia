
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Grammar", "Vocabulary"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// For Urdu content, use the 'language: "urdu"' property in the MCQ object.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Grammar": [
    {
      "id": 1,
      "questionText": "وہ اسم جو کسی عام شخص، جگہ یا چیز کے لیے بولا جائے کیا کہلاتا ہے؟",
      "options": ["اسم معرفہ", "اسم نکرہ", "اسم ضمیر", "اسم صفت"],
      "correctAnswer": "اسم نکرہ",
      "language": "urdu",
    },
    {
      "id": 2,
      "questionText": "جملہ مکمل کریں: 'وہ سکول ___ ہے۔'",
      "options": ["جاتا", "جاتی", "جاتے", "جاؤ"],
      "correctAnswer": "جاتا",
      "language": "urdu",
    }
  ],
  "Vocabulary": [
    {
      "id": 1,
      "questionText": "لفظ 'آسمان' کا مترادف کیا ہے؟",
      "options": ["زمین", "فلک", "پہاڑ", "دریا"],
      "correctAnswer": "فلک",
      "language": "urdu",
    },
    {
      "id": 2,
      "questionText": "لفظ 'خوشی' کا متضاد کیا ہے؟",
      "options": ["مسرت", "شادمانی", "غم", "راحت"],
      "correctAnswer": "غم",
      "language": "urdu",
    }
  ],
};
