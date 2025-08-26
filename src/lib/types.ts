
export type Course = {
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  dataAiHint?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  dataAiHint?: string;
};

export interface MCQ {
    "id": number;
    "questionText"?: string; // Optional for non-verbal questions
    "questionImage"?: string; // For image/SVG based questions
    "options": (string | { label: string; svg: string })[]; // Options can be text or SVG objects
    "correctAnswer": string;
    "language"?: 'english' | 'urdu';
}
