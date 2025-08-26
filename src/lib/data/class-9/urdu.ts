
import { MCQ } from '@/lib/types';

export const chapters = [
  "قواعد (گرامر)",
  "نثر",
  "شاعری",
];

export const mcqs: Record<string, MCQ[]> = {
  "قواعد (گرامر)": [
    { "id": 1, "questionText": "تشبیہ کے کتنے ارکان ہیں؟", "options": ["3", "4", "5", "6"], "correctAnswer": "5", "language": "urdu" },
  ],
  "نثر": [
    { "id": 1, "questionText": "سبق 'ہجرت نبوی' کے مصنف کون ہیں؟", "options": ["مولانا شبلی نعمانی", "سرسید احمد خان", "مولوی عبدالحق", "ڈپٹی نذیر احمد"], "correctAnswer": "مولانا شبلی نعمانی", "language": "urdu" },
  ],
  "شاعری": [
    { "id": 1, "questionText": "غزل کا آخری شعر جس میں شاعر اپنا تخلص استعمال کرتا ہے، کیا کہلاتا ہے؟", "options": ["مطلع", "مقطع", "قافیہ", "ردیف"], "correctAnswer": "مقطع", "language": "urdu" },
  ]
};
