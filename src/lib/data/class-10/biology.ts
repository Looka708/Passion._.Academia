
import { MCQ } from '@/lib/types';

export const chapters = [
  "Gaseous Exchange",
  "Homeostasis",
  "Coordination and Control",
  "Support and Movement",
  "Reproduction",
];

export const mcqs: Record<string, MCQ[]> = {
  "Gaseous Exchange": [
    {
      "id": 1,
      "questionText": "The process of taking in oxygen and giving out carbon dioxide is called:",
      "options": ["Respiration", "Breathing", "Photosynthesis", "Transpiration"],
      "correctAnswer": "Breathing",
    },
  ],
  "Homeostasis": [
    {
      "id": 1,
      "questionText": "The maintenance of a constant internal environment is known as:",
      "options": ["Metabolism", "Homeostasis", "Excretion", "Osmosis"],
      "correctAnswer": "Homeostasis",
    },
  ],
  "Coordination and Control": [
    {
      "id": 1,
      "questionText": "Which part of the brain is responsible for controlling balance and posture?",
      "options": ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
      "correctAnswer": "Cerebellum",
    },
  ],
  "Support and Movement": [
    {
      "id": 1,
      "questionText": "The human skeleton is composed of how many bones?",
      "options": ["106", "206", "306", "406"],
      "correctAnswer": "206",
    },
  ],
  "Reproduction": [
    {
      "id": 1,
      "questionText": "Which of the following is a method of asexual reproduction?",
      "options": ["Fertilization", "Pollination", "Budding", "Germination"],
      "correctAnswer": "Budding",
    },
  ]
};
