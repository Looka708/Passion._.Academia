
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './urdu-short-questions';
import { longQuestions as longQuestionsData } from './urdu-long-questions';


export const chapters: string[] = [
  "Hissa Nazm",
  "Hissa Ghazal",
  "Qawaid o Insha",
];

export const mcqs: Record<string, MCQ[]> = {
  "Hissa Nazm": [
    { "id": 1, "questionText": "نظم 'حمد' میں شاعر کس کی تعریف کرتا ہے؟", "options": ["اللہ کی", "رسول کی", "والدین کی", "استاد کی"], "correctAnswer": "اللہ کی", "language": "urdu" },
  ],
  "Hissa Ghazal": [
    { "id": 1, "questionText": "مرزا غالب کا اصل نام کیا تھا؟", "options": ["مرزا اسد اللہ خان", "مرزا نوشہ", "مرزا عبداللہ بیگ", "مرزا حیدر بیگ"], "correctAnswer": "مرزا اسد اللہ خان", "language": "urdu" },
  ],
  "Qawaid o Insha": [
    { "id": 1, "questionText": "کہانی 'شیر کا گھر' کا اخلاقی سبق کیا ہے؟", "options": ["اتحاد میں برکت ہے", "غرور کا سر نیچا", "ایمانداری بہترین حکمت عملی ہے", "وقت کی قدر کرو"], "correctAnswer": "غرور کا سر نیچا", "language": "urdu" },
  ]
};

export const shortQuestions = {
    "Hissa Nazm": shortQuestionsData.slice(0, 4),
    "Hissa Ghazal": shortQuestionsData.slice(4, 7),
    "Qawaid o Insha": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Hissa Nazm": longQuestionsData.slice(0, 2),
    "Hissa Ghazal": longQuestionsData.slice(2, 3),
    "Qawaid o Insha": longQuestionsData.slice(3, 5),
};
