
import { MCQ } from '@/lib/types';

export const chapters = [
  "Simple Harmonic Motion and Waves",
  "Sound",
  "Geometrical Optics",
  "Electostatics",
  "Current Electricity",
];

export const mcqs: Record<string, MCQ[]> = {
  "Simple Harmonic Motion and Waves": [
    {
      "id": 1,
      "questionText": "In simple harmonic motion, the acceleration of the body is directly proportional to its:",
      "options": ["Velocity", "Displacement from the mean position", "Time period", "Frequency"],
      "correctAnswer": "Displacement from the mean position",
    },
    {
      "id": 2,
      "questionText": "Which of the following is an example of a longitudinal wave?",
      "options": ["Light wave", "Radio wave", "Sound wave", "Water wave"],
      "correctAnswer": "Sound wave",
    },
  ],
  "Sound": [
    {
      "id": 1,
      "questionText": "The speed of sound is fastest in:",
      "options": ["Gases", "Liquids", "Solids", "Vacuum"],
      "correctAnswer": "Solids",
    },
    {
      "id": 2,
      "questionText": "The unit of frequency is:",
      "options": ["Meter", "Second", "Hertz", "Decibel"],
      "correctAnswer": "Hertz",
    },
  ],
  "Geometrical Optics": [
    {
      "id": 1,
      "questionText": "A concave mirror produces a real, inverted, and highly diminished image when the object is placed at:",
      "options": ["The focus (F)", "The center of curvature (C)", "Between F and C", "Infinity"],
      "correctAnswer": "Infinity",
    },
    {
      "id": 2,
      "questionText": "The phenomenon of light bending as it passes from one medium to another is called:",
      "options": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
      "correctAnswer": "Refraction",
    },
  ],
  "Electostatics": [
    {
      "id": 1,
      "questionText": "The SI unit of electric charge is:",
      "options": ["Volt", "Ampere", "Ohm", "Coulomb"],
      "correctAnswer": "Coulomb",
    },
    {
      "id": 2,
      "questionText": "A device used to store electric charge is called a:",
      "options": ["Resistor", "Capacitor", "Inductor", "Transistor"],
      "correctAnswer": "Capacitor",
    },
  ],
  "Current Electricity": [
    {
      "id": 1,
      "questionText": "Ohm's law states that:",
      "options": ["V = IR", "P = VI", "V = I/R", "I = V/R"],
      "correctAnswer": "V = IR",
    },
    {
      "id": 2,
      "questionText": "In a series circuit, the total resistance is the _______ of individual resistances.",
      "options": ["product", "sum", "difference", "reciprocal of the sum"],
      "correctAnswer": "sum",
    },
  ]
};
