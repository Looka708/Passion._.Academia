
import { MCQ } from '@/lib/types';

export const chapters: string[] = ["قواعد", "الفاظ و محاورات"];

export const mcqs: Record<string, MCQ[]> = {
  "قواعد": [
    {
      "id": 1,
      "questionText": "وہ اسم جو کسی عام شخص، جگہ یا چیز کے لیے بولا جائے کیا کہلاتا ہے؟",
      "options": ["اسم معرفہ", "اسم نکرہ", "اسم ضمیر", "اسم صفت"],
      "correctAnswer": "اسم نکرہ",
      "language": "urdu"
    },
    {
      "id": 2,
      "questionText": "جملہ مکمل کریں: 'وہ سکول ___ ہے۔'",
      "options": ["جاتا", "جاتی", "جاتے", "جاؤ"],
      "correctAnswer": "جاتا",
      "language": "urdu"
    }
  ],
  "الفاظ و محاورات": [
    {
      "id": 1,
      "questionText": "لفظ 'آسمان' کا مترادف کیا ہے؟",
      "options": ["زمین", "فلک", "پہاڑ", "دریا"],
      "correctAnswer": "فلک",
      "language": "urdu"
    },
    {
      "id": 2,
      "questionText": "لفظ 'خوشی' کا متضاد کیا ہے؟",
      "options": ["مسرت", "شادمانی", "غم", "راحت"],
      "correctAnswer": "غم",
      "language": "urdu"
    }
  ]
};
