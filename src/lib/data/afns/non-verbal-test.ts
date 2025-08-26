

import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// =================================================================================

export const chapters = ["Non Verbal"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter.
// For non-verbal questions, questionImage holds the main problem SVG.
// The options array holds the SVGs for the answer choices.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Non Verbal": [
    {
      "id": 1,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,15 35,35 15,35\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"15\" y1=\"15\" x2=\"35\" y2=\"35\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M15 15 L 35 15 L 25 35 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 2,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>"},
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 3,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"35\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"15\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 4,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(45 25 25)\"/></g><g transform=\"translate(100,0)\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(90 25 25)\"/></g><g transform=\"translate(150,0)\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(135 25 25)\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(180 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(45 25 25)\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\" transform=\"rotate(-45 25 25)\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 5,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"25\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"25\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
     {
      "id": 6,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"25,45 5,5 45,5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"5,25 45,5 45,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"25,5 45,45 5,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"45,25 5,5 5,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"25,45 5,5 45,5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"5,25 45,5 45,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"25,5 45,45 5,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><polygon points=\"45,25 5,5 5,45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 7,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\" stroke=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 8,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"20\" width=\"40\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"20\" y=\"5\" width=\"10\" height=\"40\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"20\" width=\"40\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"20\" y=\"5\" width=\"10\" height=\"40\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"20\" y=\"5\" width=\"10\" height=\"40\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"20\" width=\"40\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"10\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"10\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 9,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 40 L25 10 L40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><path d=\"M10 10 L25 40 L40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><path d=\"M10 40 L25 10 L40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><path d=\"M10 10 L25 40 L40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L25 40 L40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L25 10 L40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 L40 25\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 L25 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 10,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 25,5 L 45,45 L 5,45 Z\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><path d=\"M 25,5 L 45,25 25,45 5,25 Z\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,5 L 45,45 L 5,45 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 5,25 a 20,20 0 1,1 40,0\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,5 L 45,25 25,45 5,25 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"10,40 10,10 40,25\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 11,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 12,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 13,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,5 45,20 35,45 15,45 5,20\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,5 45,15 45,35 25,45 5,35 5,15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,15 45,35 25,45 5,35 5,15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 42,12 48,32 32,48 18,48 2,32 8,12\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 14,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 15,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 16,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(90 25 25)\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(180 25 25)\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(270 25 25)\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(180 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\" transform=\"rotate(270 25 25)\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 10,25 40,25\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 10,25 40,25\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 17,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"40\" r=\"4\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"40\" r=\"4\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"40\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"50\" r=\"4\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"10\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"20\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"30\" r=\"4\" fill=\"black\"/><circle cx=\"25\" cy=\"40\" r=\"4\" fill=\"black\"/><circle cx=\"15\" cy=\"25\" r=\"4\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 18,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"white\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"white\"/><rect x=\"22.5\" y=\"22.5\" width=\"5\" height=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"white\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"white\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 19,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><line x1=\"45\" y1=\"5\" x2=\"5\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 20,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 21,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 25,5 L 25,45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><path d=\"M 15,15 L 35,35\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 15,35 L 35,15\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><path d=\"M 25,5 L 25,45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><path d=\"M 15,15 L 35,35\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 15,35 L 35,15\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 15,15 L 35,35\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 15,35 L 35,15\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,5 L 25,45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,5 L 25,45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 5,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 22,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"15\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 23,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"30\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"30\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"20\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"30\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"20\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"20\" y=\"30\" width=\"10\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"10\" fill=\"black\"/><rect x=\"10\" y=\"30\" width=\"30\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"30\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"20\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"20\" y=\"30\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"30\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/><rect x=\"20\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 24,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 25,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 40 10 A 20 20 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 40 10 A 20 20 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 10 10 A 20 20 0 0 1 40 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 40 10 A 20 20 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 10 10 A 20 20 0 0 1 40 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 0 25 45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 40 10 A 20 20 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 A 20 20 0 0 1 25 45\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 45 25 A 20 20 0 0 1 5 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 40 10 A 20 20 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/><path d=\"M 10 10 A 20 20 0 0 1 40 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 26,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"0\" x2=\"40\" y2=\"0\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"35\" x2=\"40\" y2=\"35\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"15\" x2=\"40\" y2=\"15\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"5\" x2=\"40\" y2=\"5\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"20\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 27,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\" stroke=\"white\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 28,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5 5 L 45 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5 5 L 45 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 45 5 L 5 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5 5 L 45 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 45 5 L 5 45\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 5 5 L 45 45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 29,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"30\" r=\"8\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"30\" r=\"8\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"30\" r=\"8\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 30,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 5 L 25 25 L 45 5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 45 L 25 25 L 45 45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 5 L 25 25 L 45 5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 45 L 25 25 L 45 45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 45 L 25 25 L 45 45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 5 L 25 25 L 45 5\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 31,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"10,40 25,10 40,40\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"10,40 25,10 40,40\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,25 25,45 5,25\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"10,10 40,10 40,40 10,40 25,25\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 32,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"2\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 33,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\" transform=\"rotate(45 25 25)\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 34,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"30\" width=\"30\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"20\" width=\"30\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"20\" width=\"30\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"30\" width=\"30\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"20\" width=\"30\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"20\" y=\"10\" width=\"10\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"5\" width=\"30\" height=\"10\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 35,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 10 A 15 15 0 0 1 25 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 25 A 15 15 0 0 1 10 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 40 A 15 15 0 0 1 25 10\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 25 A 15 15 0 0 1 40 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 10 A 15 15 0 0 1 25 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 25 A 15 15 0 0 1 10 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 40 A 15 15 0 0 1 25 10\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 25 A 15 15 0 0 1 40 25\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 10 A 15 15 0 0 1 10 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 36,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 37,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,20 30,30 20,30\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><line x1=\"20\" y1=\"20\" x2=\"30\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"30\" y1=\"20\" x2=\"20\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,20 30,30 20,30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"20\" y1=\"20\" x2=\"30\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"30\" y1=\"20\" x2=\"20\" y2=\"30\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M20 20 H 30 V 30 H 20 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 38,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(90 25 25)\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(180 25 25)\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(270 25 25)\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(180 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\" transform=\"rotate(270 25 25)\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 5,45 15,5 35,5\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 5,5 15,45 35,45\" fill=\"none\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 39,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"35\" cy=\"15\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"35\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"15\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/><circle cx=\"15\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 40,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"5\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"10\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"15\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"20\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"25\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"5\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"15\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 41,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 40 L 40 10\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><path d=\"M10 35 L 40 5\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><path d=\"M10 30 L 40 0\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><path d=\"M10 25 L 40 -5\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 20 L 40 -10\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 40 10\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 15 L 40 -15\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 45 L 40 15\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 42,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></g><g transform=\"translate(100,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"15\" y1=\"5\" x2=\"15\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"35\" y1=\"5\" x2=\"35\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"5\" x2=\"10\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"40\" y1=\"5\" x2=\"40\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"5\" y1=\"5\" x2=\"5\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"18\" y1=\"5\" x2=\"18\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"32\" y1=\"5\" x2=\"32\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"45\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"5\" x2=\"10\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"20\" y1=\"5\" x2=\"20\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"30\" y1=\"5\" x2=\"30\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"40\" y1=\"5\" x2=\"40\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"15\" y1=\"5\" x2=\"15\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"35\" y1=\"5\" x2=\"35\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 43,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"35\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"15\" r=\"3\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"3\" fill=\"black\"/><circle cx=\"15\" cy=\"35\" r=\"3\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 44,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(100,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><polygon points=\"25,5 45,45 5,45\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,45 5,5 45,5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 45,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 46,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/></g><g transform=\"translate(50,0)\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/></g><g transform=\"translate(100,0)\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/></g><g transform=\"translate(150,0)\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"3\"/><circle cx=\"25\" cy=\"25\" r=\"5\" stroke=\"black\" fill=\"none\" stroke-width=\"3\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 47,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 10 L 40 40\" stroke=\"red\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 10 L 25 40\" stroke=\"red\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 10 L 10 40\" stroke=\"red\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 25 L 10 25\" stroke=\"red\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 40 40 L 10 10\" stroke=\"red\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 25 40 L 25 10\" stroke=\"red\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 40 L 40 10\" stroke=\"red\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 25 L 40 25\" stroke=\"red\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><path d=\"M 10 10 L 40 40\" stroke=\"red\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 48,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"4\"/></g><g transform=\"translate(50,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"8\"/></g><g transform=\"translate(100,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"4\"/></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"8\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"8\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"4\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" stroke-dasharray=\"12\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" stroke-dasharray=\"4\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 49,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 25,15 L 25,5\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 35,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 25,35 L 25,45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 15,25 L 5,25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 25,35 L 25,45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 15,25 L 5,25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 35,25 L 45,25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 25,15 L 25,5\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/><path d=\"M 35,15 L 45,5\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 50,
      "questionText": "Which figure completes the series?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(100,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(150,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><text x=\"25\" y=\"30\" font-size=\"24\" text-anchor=\"middle\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 5 L 25 45\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" stroke=\"black\" fill=\"none\"/><path d=\"M 5 25 L 45 25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 51,
      "questionText": "Which figure completes the analogy: Square is to Cube as Circle is to ...?",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"20\" y2=\"0\" stroke=\"black\"/><line x1=\"40\" y1=\"10\" x2=\"50\" y2=\"0\" stroke=\"black\"/><line x1=\"40\" y1=\"40\" x2=\"50\" y2=\"30\" stroke=\"black\"/><line x1=\"20\" y1=\"0\" x2=\"50\" y2=\"0\" stroke=\"black\"/><line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"30\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><ellipse cx=\"25\" cy=\"25\" rx=\"15\" ry=\"5\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><ellipse cx=\"25\" cy=\"25\" rx=\"15\" ry=\"10\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M10 25 C 10 15, 40 15, 40 25\" stroke=\"black\" fill=\"none\"/><path d=\"M10 25 C 10 35, 40 35, 40 25\" stroke=\"black\" stroke-dasharray=\"4,2\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 52,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"white\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10 10 L 40 10 L 40 40 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 53,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 25 L 40 25\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 25 L 40 25 M 25 10 L 25 40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40 M 40 10 L 10 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 40 10\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 40 M 10 25 L 40 25\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 L 25 40\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 54,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,10 40,40 10,40\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"25,40 10,10 40,10\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\" transform=\"rotate(180 25 25)\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 55,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/><line x1=\"5\" y1=\"5\" x2=\"45\" y2=\"45\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"black\"/><line x1=\"5\" y1=\"25\" x2=\"45\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 56,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"15\" height=\"30\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 1 25 10 L 25 40 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"15\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 A 15 15 0 0 1 25 40 L 10 25 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,10 A 15 15 0 0 1 25,40 L 25 10 Z\" fill=\"black\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 57,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 L40 10 L25 40 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 10 L40 10 L25 40 Z\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 40 L40 40 L25 10 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L40 40 L25 10 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L40 40 L25 10 Z\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L40 40 L25 10 Z\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 58,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(75,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"25\" r=\"3\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\" font-size=\"20\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\" font-size=\"24\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"15\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"35\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"25\" r=\"3\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"3\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 59,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"10,10 40,10 40,40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"10,10 40,10 40,40 10,40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 40 A 15 15 0 0 1 40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 1 40 25\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 A 15 15 0 0 1 40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"40\" r=\"15\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 60,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"none\" stroke=\"black\"/><path d=\"M 10,10 L 40,40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M 10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"black\" stroke=\"black\"/><path d=\"M 10,10 L 40,40\" stroke=\"white\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"white\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"white\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"black\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"white\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 61,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,10 40,25 25,40 10,25\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"25,10 40,25 25,40 10,25\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" stroke=\"black\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 62,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"10\" y1=\"40\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 10 C 25 40, 25 40, 40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 C 25 10, 25 10, 40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 C 40 25, 40 25, 10 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M40 10 C 10 25, 10 25, 40 40\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 C 25 40, 25 40, 40 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 C 10 40, 40 40, 25 10\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 63,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"red\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"red\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"red\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"red\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"red\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 64,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 10 25 L 40 25\" stroke=\"black\"/><path d=\"M 25 10 L 25 40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M 15 15 L 35 35\" stroke=\"black\"/><path d=\"M 35 15 L 15 35\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\" transform=\"rotate(45 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 C 25 10, 25 10, 40 25 M10 25 C 25 40, 25 40, 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 65,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 10 10 L 40 40\" stroke=\"black\"/><path d=\"M 10 40 L 40 10\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M 10 10 L 40 40\" stroke=\"black\"/><path d=\"M 10 40 L 40 10\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M 25 10 L 25 40\" stroke=\"black\"/><path d=\"M 10 25 L 40 25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25 10 L 25 40\" stroke=\"black\"/><path d=\"M 10 25 L 40 25\" stroke=\"black\"/><rect x=\"20\" y=\"20\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25 10 L 25 40\" stroke=\"black\"/><path d=\"M 10 25 L 40 25\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10 10 L 40 40\" stroke=\"black\"/><path d=\"M 10 40 L 40 10\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25 10 L 25 40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10 25 L 40 25\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 66,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10,25 h30 v15 h-30 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10,25 h30 v15 h-30 Z\" fill=\"black\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\" stroke-width=\"2\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10,10 h30 v30 h-30 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\" stroke=\"black\" stroke-width=\"2\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 67,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\" transform=\"rotate(45 25 25)\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 40 L 25 10 L 40 40 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 25 10 L 40 40 Z\" stroke=\"black\" fill=\"none\" transform=\"rotate(180 25 25)\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 25 10 L 40 40 Z\" stroke=\"black\" fill=\"none\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 25 10 L 40 40 Z\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 25 10 L 40 40 Z\" stroke=\"black\" fill=\"none\" transform=\"rotate(45 25 25)\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "D"
    },
    {
      "id": 68,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"white\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"white\"/><circle cx=\"25\" cy=\"25\" r=\"10\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"white\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"white\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\" stroke=\"white\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 69,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"10,10 40,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"10,10 40,10 40,40 10,40 25,25\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M25 10 L 25 40 M10 25 L 40 25\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M10 10 L 40 40 M40 10 L 10 40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 70,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"none\" stroke=\"black\"/><path d=\"M 10,10 L 40,40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"black\" stroke=\"black\"/><path d=\"M 10,10 L 40,40\" stroke=\"white\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"white\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"white\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10,10 L 40,10 L 40,40 L 10,40 L 10,10\" fill=\"black\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"white\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 71,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,10 40,25 25,40 10,25\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"25,10 40,25 25,40 10,25\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" stroke=\"black\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 72,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 L 40 10 L 40 40 L 10 40 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 10 L 40 10 L 25 25 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 1 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"7.5\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 0 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 L 25 40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 73,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"red\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"red\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><rect x=\"15\" y=\"15\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"red\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"red\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"red\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 74,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M 10 25 L 40 25\" stroke=\"black\"/><path d=\"M 25 10 L 25 40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M 15 15 L 35 35\" stroke=\"black\"/><path d=\"M 35 15 L 15 35\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\" transform=\"rotate(45 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 C 25 10, 25 10, 40 25 M10 25 C 25 40, 25 40, 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 75,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 H 40 V 40\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 10 L 40 10 L 40 40 L 10 40 Z\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 25 a 15 15 0 0 1 30 0\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 a 15 15 0 0 1 30 0\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\" stroke-width=\"2\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 a 15 15 0 1 1 30 0\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><ellipse cx=\"25\" cy=\"25\" rx=\"15\" ry=\"10\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 a 15 15 0 0 0 30 0\" stroke=\"black\" stroke-width=\"2\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 76,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M 25 10 L 25 40 M 10 25 L 40 25\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M 10 10 L 40 40 M 40 10 L 10 40\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M 10 10 L 40 40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M 40 10 L 10 40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M 10 10 L 40 40 M 40 10 L 10 40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 77,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10,10 L 40,25 L 10,40 Z\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10,10 L 40,25 L 10,40 Z\" fill=\"black\" transform=\"rotate(180 25 25)\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M25,10 L 40,40 L 10,40 Z\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25,40 L 10,10 L 40,10 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25,10 L 40,40 L 10,40 Z\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25,10 L 40,40 L 10,40 Z\" fill=\"black\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10,10 L 25,40 L 40,10 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 78,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M25 10 L 25 40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M10 25 L 40 25\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M10 10 L 40 40\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M10 25 L 40 25\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M25 10 L 25 40\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M40 10 L 10 40\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M40 10 L 10 40\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 79,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 L 40 10 L 25 25 Z\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 40 L 40 40 L 25 25 Z\" fill=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 10 L 10 40 L 25 25 Z\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 10 40 L 25 25 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M40 10 L 40 40 L 25 25 Z\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 10 L 25 25 Z\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 40 40 L 25 25 Z\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 L 40 40 L 10 40 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 80,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><path d=\"M10 10 L 40 10 L 25 40 Z\" fill=\"none\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 10 L 25 40 Z\" fill=\"black\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L 40 10 L 25 40 Z\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 40 L 40 40 L 25 10 Z\" fill=\"black\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 81,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 82,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><path d=\"M10 10 L 40 10 L 40 40 L 10 40 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><path d=\"M10 10 L 40 10 L 25 25 Z\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 1 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"7.5\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 A 15 15 0 0 0 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M25 10 L 25 40\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 83,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"40\" y1=\"10\" x2=\"10\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 84,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M10 25 L40 25 M25 10 L25 40\" stroke=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M10 10 L40 40 M40 10 L10 40\" stroke=\"black\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M25 10 L25 40 M10 25 L40 25\" stroke=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M18 18 L32 32 M32 18 L18 32\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M25 10 L25 40 M10 25 L40 25\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><path d=\"M10 10 L40 40 M40 10 L10 40\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><path d=\"M10 10 L40 40 M40 10 L10 40\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "A"
    },
    {
      "id": 85,
      "questionText": "Find the figure that completes the analogy.",
      "questionImage": "<svg width=\"250\" height=\"50\" viewBox=\"0 0 250 50\"><g transform=\"translate(0,0)\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(50,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(75,0)\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></g><g transform=\"translate(125,0)\"><text x=\"25\" y=\"30\">::</text></g><g transform=\"translate(150,0)\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/></g><g transform=\"translate(200,0)\"><text x=\"25\" y=\"30\">:</text></g><g transform=\"translate(225,0)\"><text x=\"25\" y=\"30\">?</text></g></svg>",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 25 a 15 15 0 1 1 30 0\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 86,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M15 15 L35 25 L15 35 Z\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M15 15 L35 25 L15 35 Z\" fill=\"black\" transform=\"rotate(90 25 25)\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M15 15 L35 25 L15 35 Z\" fill=\"black\" transform=\"rotate(180 25 25)\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M15 15 L35 25 L15 35 Z\" fill=\"black\" transform=\"rotate(270 25 25)\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M35 15 L15 25 L35 35 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 87,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"white\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,10 L 40,25 25,40 10,25 Z\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "C"
    },
    {
      "id": 88,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10,40 C20,-10 30,60 40,10\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,10 40,40 10,40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25,10 L 40,25 25,40 10,25 Z\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "B"
    },
    {
      "id": 89,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"15\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"15\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"5\" y=\"5\" width=\"40\" height=\"40\" stroke=\"black\" fill=\"none\"/><circle cx=\"25\" cy=\"25\" r=\"5\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 90,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\" /><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"25,5 45,45 5,45\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"5\" x2=\"25\" y2=\"45\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"40\" y2=\"40\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 91,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10 25 Q 25 10 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 10 25 Q 25 40 40 25\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25 10 Q 10 25 25 40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M 25 10 Q 40 25 25 40\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 92,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"30\" y=\"30\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"15\" cy=\"15\" r=\"5\" fill=\"black\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><polygon points=\"15,10 20,20 10,20\" fill=\"black\"/><polygon points=\"35,40 40,30 30,30\" fill=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"30\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"10\" y=\"30\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"10\" fill=\"black\"/><rect x=\"10\" y=\"30\" width=\"10\" height=\"10\" fill=\"black\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 93,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"10\" x2=\"25\" y2=\"20\" stroke=\"black\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"30\" x2=\"25\" y2=\"40\" stroke=\"black\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"10\" y1=\"25\" x2=\"20\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"30\" y1=\"25\" x2=\"40\" y2=\"25\" stroke=\"black\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"15\" stroke=\"black\" fill=\"none\"/><line x1=\"25\" y1=\"20\" x2=\"25\" y2=\"30\" stroke=\"black\"/></svg>" }
      ],
      "correctAnswer": "E"
    },
    {
      "id": 94,
      "questionText": "Find the figure that is different from the others.",
      "questionImage": "",
      "options": [
        { "label": "A", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 L10 10 M15 15 L35 15\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "B", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 L10 10 M15 35 L35 35\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "C", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 L10 10 M15 15 L15 35\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "D", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 L10 10 M35 15 L35 35\" stroke=\"black\" fill=\"none\"/></svg>" },
        { "label": "E", "svg": "<svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><path d=\"M10 10 L40 10 L40 40 L10 40 L10 10 M15 15 L35 35\" stroke=\"black\" fill=\"none\"/></svg>" }
      ],
      "correctAnswer": "E"
    }
  ]
};

    