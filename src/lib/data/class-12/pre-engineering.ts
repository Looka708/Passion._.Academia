
import { MCQ } from '@/lib/types';

export const chapters = {
    "Mathematics": [
        "Functions and Limits",
        "Differentiation",
        "Integration",
        "Vectors"
    ],
    "Physics": [
        "Electrostatics",
        "Current Electricity",
        "Electromagnetism",
        "Modern Physics"
    ],
    "Chemistry": [
        "Periodic Classification",
        "s-Block and p-Block Elements",
        "d- and f-Block Elements",
        "Organic Chemistry"
    ]
};

export const mcqs = {
    "Mathematics": {
        "Functions and Limits": [
            { "id": 1, "questionText": "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", "options": ["0", "1", "2", "Undefined"], "correctAnswer": "2" },
            { "id": 2, "questionText": "If f(x) = 2x + 3, what is f(g(x)) if g(x) = x^2?", "options": ["2x^2 + 3", "4x^2 + 9", "(2x+3)^2", "2x^2 + 6x + 9"], "correctAnswer": "2x^2 + 3" }
        ],
        "Differentiation": [
            { "id": 1, "questionText": "What is the derivative of x^n?", "options": ["nx^(n-1)", "x^(n+1)/(n+1)", "n*x^(n+1)", "x^n"], "correctAnswer": "nx^(n-1)" },
            { "id": 2, "questionText": "The derivative of sin(x) is:", "options": ["-cos(x)", "cos(x)", "-sin(x)", "tan(x)"], "correctAnswer": "cos(x)" }
        ],
        "Integration": [
            { "id": 1, "questionText": "What is the integral of 1/x dx?", "options": ["ln|x| + C", "1/x^2 + C", "x + C", "e^x + C"], "correctAnswer": "ln|x| + C" },
            { "id": 2, "questionText": "Integration is also known as:", "options": ["Differentiation", "Anti-differentiation", "Finding the slope", "Finding the limit"], "correctAnswer": "Anti-differentiation" }
        ],
        "Vectors": [
            { "id": 1, "questionText": "The dot product of two vectors a and b is given by:", "options": ["|a||b|sin(θ)", "|a||b|cos(θ)", "|a||b|tan(θ)", "ab"], "correctAnswer": "|a||b|cos(θ)" },
            { "id": 2, "questionText": "The cross product of two parallel vectors is:", "options": ["A vector of magnitude 1", "A scalar", "The zero vector", "A vector of magnitude |a||b|"], "correctAnswer": "The zero vector" }
        ]
    },
    "Physics": {
        "Electrostatics": [
            { "id": 1, "questionText": "Coulomb's law describes the force between:", "options": ["Two masses", "Two charges", "Two magnetic poles", "A charge and a magnet"], "correctAnswer": "Two charges" },
            { "id": 2, "questionText": "The SI unit of capacitance is:", "options": ["Volt", "Ampere", "Ohm", "Farad"], "correctAnswer": "Farad" }
        ],
        "Current Electricity": [
            { "id": 1, "questionText": "Kirchhoff's first law (junction rule) is a statement of conservation of:", "options": ["Energy", "Momentum", "Charge", "Mass"], "correctAnswer": "Charge" },
            { "id": 2, "questionText": "The resistivity of a wire depends on its:", "options": ["Length", "Cross-sectional area", "Material", "All of the above"], "correctAnswer": "Material" }
        ],
        "Electromagnetism": [
            { "id": 1, "questionText": "A moving charge produces:", "options": ["Only an electric field", "Only a magnetic field", "Both electric and magnetic fields", "No field"], "correctAnswer": "Both electric and magnetic fields" },
            { "id": 2, "questionText": "The unit of magnetic flux is:", "options": ["Tesla", "Gauss", "Weber", "Henry"], "correctAnswer": "Weber" }
        ],
        "Modern Physics": [
            { "id": 1, "questionText": "The photoelectric effect demonstrates the:", "options": ["Wave nature of light", "Particle nature of light", "Interference of light", "Diffraction of light"], "correctAnswer": "Particle nature of light" },
            { "id": 2, "questionText": "E = mc^2 is the famous equation proposed by:", "options": ["Newton", "Galileo", "Einstein", "Planck"], "correctAnswer": "Einstein" }
        ]
    },
    "Chemistry": {
        "Periodic Classification": [
            { "id": 1, "questionText": "Which property generally decreases across a period in the periodic table?", "options": ["Ionization energy", "Electronegativity", "Electron affinity", "Atomic radius"], "correctAnswer": "Atomic radius" },
            { "id": 2, "questionText": "The elements of Group 1 are called:", "options": ["Halogens", "Noble gases", "Alkali metals", "Alkaline earth metals"], "correctAnswer": "Alkali metals" }
        ],
        "s-Block and p-Block Elements": [
            { "id": 1, "questionText": "Which of the following is an alkaline earth metal?", "options": ["Sodium (Na)", "Potassium (K)", "Calcium (Ca)", "Iron (Fe)"], "correctAnswer": "Calcium (Ca)" },
            { "id": 2, "questionText": "Group 17 elements are known as:", "options": ["Chalcogens", "Halogens", "Pnictogens", "Noble gases"], "correctAnswer": "Halogens" }
        ],
        "d- and f-Block Elements": [
            { "id": 1, "questionText": "Elements of d-block are also known as:", "options": ["Representative elements", "Transition elements", "Inner transition elements", "Noble gases"], "correctAnswer": "Transition elements" },
            { "id": 2, "questionText": "The lanthanide series belongs to which block?", "options": ["s-block", "p-block", "d-block", "f-block"], "correctAnswer": "f-block" }
        ],
        "Organic Chemistry": [
            { "id": 1, "questionText": "Which functional group defines an aldehyde?", "options": ["-OH", "-COOH", "-CHO", "-CO-"], "correctAnswer": "-CHO" },
            { "id": 2, "questionText": "The IUPAC name for CH3-CH2-OH is:", "options": ["Methanol", "Ethanol", "Propanol", "Ethanal"], "correctAnswer": "Ethanol" }
        ]
    }
};
