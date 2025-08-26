
import { MCQ } from '@/lib/types';

export const chapters = [
  "قواعد (واحد/جمع، مذکر/مؤنث)",
  "تفہیم",
  "خط نویسی",
];

export const mcqs: Record<string, MCQ[]> = {
  "قواعد (واحد/جمع، مذکر/مؤنث)": [
    { "id": 1, "questionText": "لفظ 'لڑکا' کی مؤنث کیا ہے؟", "options": ["لڑکی", "لڑکے", "لڑکیوں", "لڑکپن"], "correctAnswer": "لڑکی", "language": "urdu" },
    { "id": 2, "questionText": "لفظ 'کتاب' کی جمع کیا ہے؟", "options": ["کتابیں", "کتابوں", "کتابچہ", "مکتب"], "correctAnswer": "کتابیں", "language": "urdu" },
  ],
  "تفہیم": [
    { "id": 1, "questionText": "اگر ایک پیراگراف کسی تاریخی واقعہ کے بارے میں ہے، تو اس کا مرکزی خیال کیا ہوگا؟", "options": ["سائنس", "جغرافیہ", "تاریخ", "کھیل"], "correctAnswer": "تاریخ", "language": "urdu" },
  ],
  "خط نویسی": [
    { "id": 1, "questionText": "دوست کے نام خط کا اختتام کس طرح کیا جاتا ہے؟", "options": ["آپ کا تابع فرمان", "آپ کا مخلص", "فقط والسلام", "آپ کا خیر خواہ"], "correctAnswer": "آپ کا مخلص", "language": "urdu" },
  ]
};
