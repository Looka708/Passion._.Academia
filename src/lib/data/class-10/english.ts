
import { MCQ } from '@/lib/types';

export const chapters = [
  "Advanced Grammar",
  "Idioms and Phrases",
  "Translation",
  "Essay Writing",
];

export const mcqs: Record<string, MCQ[]> = {
  "Advanced Grammar": [
    {
      "id": 1,
      "questionText": "Choose the correct passive voice sentence for 'He is writing a letter.'",
      "options": ["A letter is wrote by him.", "A letter is being written by him.", "A letter was written by him.", "A letter has been written by him."],
      "correctAnswer": "A letter is being written by him.",
    },
    {
      "id": 2,
      "questionText": "Identify the type of sentence: 'What a beautiful painting!'",
      "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
      "correctAnswer": "Exclamatory",
    },
  ],
  "Idioms and Phrases": [
    {
      "id": 1,
      "questionText": "What does the idiom 'to hit the nail on the head' mean?",
      "options": ["To be very accurate", "To hit someone with a hammer", "To work hard", "To be incorrect"],
      "correctAnswer": "To be very accurate",
    },
    {
      "id": 2,
      "questionText": "The phrase 'a piece of cake' means:",
      "options": ["A delicious dessert", "Something very difficult", "Something very easy", "A small portion"],
      "correctAnswer": "Something very easy",
    },
  ],
  "Translation": [
    {
      "id": 1,
      "questionText": "Translate into English: 'وہ ایک اچھا لڑکا ہے۔'",
      "options": ["He was a good boy.", "He will be a good boy.", "He is a good boy.", "He is good boy."],
      "correctAnswer": "He is a good boy.",
      "language": "urdu",
    },
  ],
  "Essay Writing": [
    {
      "id": 1,
      "questionText": "Which of these is a key component of a good essay introduction?",
      "options": ["A detailed summary", "A concluding statement", "A thesis statement", "A list of sources"],
      "correctAnswer": "A thesis statement",
    },
  ]
};
