
import { MCQ } from '@/lib/types';

export const chapters = [
  "حصہ نظم",
  "حصہ غزل",
  "قواعد و انشاء",
];

export const mcqs: Record<string, MCQ[]> = {
  "حصہ نظم": [
    { "id": 1, "questionText": "نظم 'حمد' میں شاعر کس کی تعریف کرتا ہے؟", "options": ["اللہ کی", "رسول کی", "والدین کی", "استاد کی"], "correctAnswer": "اللہ کی", "language": "urdu" },
  ],
  "حصہ غزل": [
    { "id": 1, "questionText": "مرزا غالب کا اصل نام کیا تھا؟", "options": ["مرزا اسد اللہ خان", "مرزا نوشہ", "مرزا عبداللہ بیگ", "مرزا حیدر بیگ"], "correctAnswer": "مرزا اسد اللہ خان", "language": "urdu" },
  ],
  "قواعد و انشاء": [
    { "id": 1, "questionText": "کہانی 'شیر کا گھر' کا اخلاقی سبق کیا ہے؟", "options": ["اتحاد میں برکت ہے", "غرور کا سر نیچا", "ایمانداری بہترین حکمت عملی ہے", "وقت کی قدر کرو"], "correctAnswer": "غرور کا سر نیچا", "language": "urdu" },
  ]
};
