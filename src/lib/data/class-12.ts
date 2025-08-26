
import { Dna, Atom, Sigma, Laptop, Book, FlaskConical } from "lucide-react";
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. STREAM DEFINITIONS
// =================================================================================
// Define the different academic streams available for Class 12.
// =================================================================================

export const streams = [
  { name: "Pre-Medical", icon: Dna, description: "Final preparation in biology and sciences for university entrance exams.", href: "/classes/12/pre-medical" },
  { name: "Pre-Engineering", icon: Atom, description: "Master calculus, mechanics, and advanced chemistry for engineering tests.", href: "/classes/12/pre-engineering" },
  { name: "Computer Science", icon: Laptop, description: "Advanced topics in algorithms, databases, and networking.", href: "/classes/12/computer-science" },
  { name: "General Group", icon: Sigma, description: "Specialize in subjects for careers in commerce, arts, and social sciences.", href: "/classes/12/general-group" },
];

// =================================================================================
// 2. SUBJECTS BY STREAM
// =================================================================================
// Define the subjects for each stream.
// =================================================================================

const preMedicalSubjects = [
    { name: "Biology", icon: Dna, description: "Advanced topics in genetics, evolution, and physiology.", href: "/classes/12/biology" },
    { name: "Chemistry", icon: FlaskConical, description: "In-depth study of organic chemistry and biochemistry.", href: "/classes/12/chemistry" },
    { name: "Physics", icon: Atom, description: "Focus on modern physics, nuclear physics, and electronics.", href: "/classes/12/physics" },
    { name: "Computer", icon: Laptop, description: "Basics of computer hardware, software and networking.", href: "/classes/12/computer" },
];

const preEngineeringSubjects = [
    { name: "Mathematics", icon: Sigma, description: "Master calculus, vectors, and differential equations.", href: "/classes/12/mathematics" },
    { name: "Physics", icon: Atom, description: "Advanced electromagnetism and modern physics.", href: "/classes/12/physics" },
    { name: "Chemistry", icon: FlaskConical, description: "Advanced inorganic chemistry and reaction kinetics.", href: "/classes/12/chemistry" },
    { name: "Computer", icon: Laptop, description: "Basics of computer hardware, software and networking.", href: "/classes/12/computer" },
];

const computerScienceSubjects = [
    { name: "Computer Science", icon: Laptop, description: "Study algorithms, database management, and networking.", href: "/classes/12/computer-science" },
    { name: "Mathematics", icon: Sigma, description: "Explore discrete mathematics and advanced calculus.", href: "/classes/12/mathematics" },
    { name: "Physics", icon: Atom, description: "Learn about digital logic design and microprocessors.", href: "/classes/12/physics" },
];

const generalGroupSubjects = [
    { name: "Accounting", icon: Book, description: "Principles of accounting, financial statements, and partnership accounting.", href: "/classes/12/accounting" },
    { name: "Banking", icon: Sigma, description: "Understand central banking, commercial banking, and financial instruments.", href: "/classes/12/banking" },
    { name: "Sociology", icon: Book, description: "Study social structures, institutions, and cultural dynamics.", href: "/classes/12/sociology" },
    { name: "Computer", icon: Laptop, description: "Basics of computer hardware, software and networking.", href: "/classes/12/computer" },
];

export const subjectsByStream = {
    "pre-medical": preMedicalSubjects,
    "pre-engineering": preEngineeringSubjects,
    "computer-science": computerScienceSubjects,
    "general-group": generalGroupSubjects,
}

// =================================================================================
// 3. CHAPTERS AND MCQS
// =================================================================================
// Define the chapters and MCQs for each subject in Class 12.
// =================================================================================

// Chapters
const biologyChapters = ["Genetics", "Evolution", "Physiology"];
const chemistryChapters = ["Organic Chemistry II", "Inorganic Chemistry II", "Biochemistry"];
const physicsChapters = ["Modern Physics", "Electromagnetism II", "Digital Logic Design"];
const mathematicsChapters = ["Calculus", "Discrete Mathematics", "Vectors"];
const computerScienceChapters = ["Algorithms", "Database Management", "Networking"];
const accountingChapters = ["Partnership Accounting", "Financial Statements"];
const bankingChapters = ["Central Banking", "Commercial Banking"];
const sociologyChapters = ["Social Institutions", "Cultural Dynamics"];
const computerChapters = ["Introduction to Computer", "Hardware", "Software"];

// MCQs
const biologyMcqs: Record<string, MCQ[]> = { 
    "Genetics": [
        { "id": 1, "questionText": "Who is known as the father of genetics?", "options": ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"], "correctAnswer": "Gregor Mendel" }
    ],
    "Evolution": [
        { "id": 1, "questionText": "The theory of evolution by natural selection was proposed by:", "options": ["Jean-Baptiste Lamarck", "Charles Darwin", "Alfred Russel Wallace", "Both B and C"], "correctAnswer": "Both B and C" }
    ],
    "Physiology": [
        { "id": 1, "questionText": "Which part of the brain is responsible for regulating basic life functions like breathing and heartbeat?", "options": ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], "correctAnswer": "Brainstem" }
    ]
};
const chemistryMcqs: Record<string, MCQ[]> = { 
    "Organic Chemistry II": [
        { "id": 1, "questionText": "What is the main element in organic compounds?", "options": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], "correctAnswer": "Carbon" }
    ],
    "Biochemistry": [
        { "id": 1, "questionText": "Proteins are polymers of:", "options": ["Glucose", "Fatty acids", "Amino acids", "Nucleotides"], "correctAnswer": "Amino acids" }
    ],
    "Inorganic Chemistry II": [
        { "id": 1, "questionText": "The elements in Group 17 of the periodic table are known as:", "options": ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"], "correctAnswer": "Halogens" }
    ]
};
const physicsMcqs: Record<string, MCQ[]> = { 
    "Modern Physics": [
        { "id": 1, "questionText": "What does E=mc^2 represent?", "options": ["Kinetic Energy", "Potential Energy", "Mass-energy equivalence", "Photoelectric effect"], "correctAnswer": "Mass-energy equivalence" }
    ],
    "Electromagnetism II": [
        { "id": 1, "questionText": "Lenz's law is a consequence of the law of conservation of:", "options": ["Mass", "Charge", "Momentum", "Energy"], "correctAnswer": "Energy" }
    ],
    "Digital Logic Design": [
        { "id": 1, "questionText": "An AND gate produces a HIGH output only when:", "options": ["All inputs are LOW", "All inputs are HIGH", "Any input is HIGH", "Any input is LOW"], "correctAnswer": "All inputs are HIGH" }
    ]
};
const mathematicsMcqs: Record<string, MCQ[]> = { 
    "Calculus": [
        { "id": 1, "questionText": "The integral of a function gives the:", "options": ["Slope of the tangent", "Area under the curve", "Rate of change", "Maximum value"], "correctAnswer": "Area under the curve" }
    ],
    "Discrete Mathematics": [
        { "id": 1, "questionText": "Which of the following is not a part of discrete mathematics?", "options": ["Graph Theory", "Set Theory", "Calculus", "Logic"], "correctAnswer": "Calculus" }
    ],
    "Vectors": [
        { "id": 1, "questionText": "The dot product of two perpendicular vectors is:", "options": ["0", "1", "-1", "Cannot be determined"], "correctAnswer": "0" }
    ]
};
const computerScienceMcqs: Record<string, MCQ[]> = { 
    "Algorithms": [
        { "id": 1, "questionText": "Which sorting algorithm is generally the fastest for large datasets?", "options": ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"], "correctAnswer": "Quick Sort" }
    ],
    "Database Management": [
        { "id": 1, "questionText": "What does SQL stand for?", "options": ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"], "correctAnswer": "Structured Query Language" }
    ],
    "Networking": [
        { "id": 1, "questionText": "What is the full form of IP?", "options": ["Internet Protocol", "Internet Provider", "Interface Program", "Internal Process"], "correctAnswer": "Internet Protocol" }
    ]
};
const accountingMcqs: Record<string, MCQ[]> = { 
    "Partnership Accounting": [
        { "id": 1, "questionText": "Which document governs a partnership?", "options": ["Memorandum of Association", "Articles of Association", "Partnership Deed", "Certificate of Incorporation"], "correctAnswer": "Partnership Deed" }
    ],
    "Financial Statements": [
        { "id": 1, "questionText": "Which statement shows the financial position of a company at a specific point in time?", "options": ["Income Statement", "Cash Flow Statement", "Balance Sheet", "Statement of Retained Earnings"], "correctAnswer": "Balance Sheet" }
    ]
};
const bankingMcqs: Record<string, MCQ[]> = { 
    "Central Banking": [
        { "id": 1, "questionText": "Which of the following is a function of a central bank?", "options": ["Accepting deposits from the public", "Issuing currency", "Providing loans to individuals", "Making profit"], "correctAnswer": "Issuing currency" }
    ],
    "Commercial Banking": [
        { "id": 1, "questionText": "The main function of a commercial bank is:", "options": ["Controlling money supply", "Issuing notes and coins", "Accepting deposits and granting loans", "Acting as a lender of last resort"], "correctAnswer": "Accepting deposits and granting loans" }
    ]
};
const sociologyMcqs: Record<string, MCQ[]> = { 
    "Social Institutions": [
        { "id": 1, "questionText": "Which of the following is considered the primary social institution?", "options": ["Economy", "Government", "Education", "Family"], "correctAnswer": "Family" }
    ],
    "Cultural Dynamics": [
        { "id": 1, "questionText": "The process by which an individual learns the culture of their society is called:", "options": ["Assimilation", "Socialization", "Acculturation", "Integration"], "correctAnswer": "Socialization" }
    ]
};
const computerMcqs: Record<string, MCQ[]> = {
    "Introduction to Computer": [
        { "id": 1, "questionText": "What does CPU stand for?", "options": ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"], "correctAnswer": "Central Processing Unit" }
    ],
    "Hardware": [
        { "id": 1, "questionText": "Which of these is an input device?", "options": ["Monitor", "Printer", "Keyboard", "Speaker"], "correctAnswer": "Keyboard" }
    ],
    "Software": [
        { "id": 1, "questionText": "Which of these is an example of an operating system?", "options": ["Microsoft Word", "Google Chrome", "Windows", "Adobe Photoshop"], "correctAnswer": "Windows" }
    ]
};

// =================================================================================
// 4. COMBINED SUBJECT DATA
// =================================================================================
// This object combines all the chapter and MCQ data for Class 12 subjects.
// It is used by the application to dynamically load test content.
// =================================================================================

export const class12Subjects = {
    "Biology": { chapters: biologyChapters, mcqs: biologyMcqs },
    "Chemistry": { chapters: chemistryChapters, mcqs: chemistryMcqs },
    "Physics": { chapters: physicsChapters, mcqs: physicsMcqs },
    "Mathematics": { chapters: mathematicsChapters, mcqs: mathematicsMcqs },
    "Computer Science": { chapters: computerScienceChapters, mcqs: computerScienceMcqs },
    "Accounting": { chapters: accountingChapters, mcqs: accountingMcqs },
    "Banking": { chapters: bankingChapters, mcqs: bankingMcqs },
    "Sociology": { chapters: sociologyChapters, mcqs: sociologyMcqs },
    "Computer": { chapters: computerChapters, mcqs: computerMcqs },
};
