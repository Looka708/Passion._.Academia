
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './physics-short-questions';
import { longQuestions as longQuestionsData } from './physics-long-questions';


export const chapters = ["Measurements",
                        "Force and Motion",
                        "Circular and Rotational Motion",
                        "Work Energy and Power",
                        "Solids and Fluid Dynamics",
                        "Heat and Thermodynamics",
                        "Waves and Vibrations",
                        "Physical Optics and Gravitational Waves",
                        "Electrostatics and Current Electricity",
                        "Electromagnetism",
                        "Special Theory of Relativity",
                        "Nuclear and Particle Physics"
];
export const mcqs: Record<string, MCQ[]> = {
    "Measurements": [
  {
    "id": 1,
    "questionText": "Physics is described as the most fundamental branch of which sciences?",
    "options": [
      "a) Biological sciences",
      "b) Chemical sciences",
      "c) Physical sciences",
      "d) Earth sciences"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What does the scientific method emphasize the need for in experimental science?",
    "options": [
      "a) Qualitative observations",
      "b) Theoretical predictions",
      "c) Accurate measurement of physical quantities",
      "d) Philosophical debates"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "Physical quantities are often divided into how many categories?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three",
      "d) Four"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT an example of a derived quantity?",
    "options": [
      "a) Velocity",
      "b) Acceleration",
      "c) Force",
      "d) Mass"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "What are base quantities defined in terms of?",
    "options": [
      "a) Derived quantities",
      "b) Other physical quantities",
      "c) They are not defined in terms of other physical quantities",
      "d) Mathematical constants"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which of the following is a typical example of a base quantity?",
    "options": [
      "a) Density",
      "b) Temperature",
      "c) Electric current",
      "d) Length"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "The measurement of a base quantity involves two steps. What is the first step?",
    "options": [
      "a) Establishing a comparison procedure",
      "b) Attaching a number and a unit",
      "c) Choice of a standard",
      "d) Analyzing accuracy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "In what year did an international committee agree on a set of definitions and standards for physical quantities?",
    "options": [
      "a) 1950",
      "b) 1960",
      "c) 1970",
      "d) 1980"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What is the system of units established in 1960 called?",
    "options": [
      "a) British System",
      "b) Imperial System",
      "c) System International (SI)",
      "d) Metric System"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "How many base units are there in the SI system?",
    "options": [
      "a) Five",
      "b) Six",
      "c) Seven",
      "d) Eight"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Which of the following is NOT an SI base unit for physical quantities?",
    "options": [
      "a) Length",
      "b) Mass",
      "c) Time",
      "d) Force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 12,
    "questionText": "What is the SI unit for temperature?",
    "options": [
      "a) Celsius",
      "b) Fahrenheit",
      "c) Kelvin",
      "d) Joule"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is the SI unit for electric current?",
    "options": [
      "a) Volt",
      "b) Coulomb",
      "c) Ohm",
      "d) Ampere"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 14,
    "questionText": "What is the SI unit for luminous intensity?",
    "options": [
      "a) Lumen",
      "b) Lux",
      "c) Candela",
      "d) Watt"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Derived units are those units which depend on:",
    "options": [
      "a) Fundamental constants",
      "b) Base units",
      "c) Arbitrary definitions",
      "d) Historical precedents"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Which of the following is a derived SI unit?",
    "options": [
      "a) Kilogram",
      "b) Second",
      "c) Newton",
      "d) Mole"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is the SI unit for power?",
    "options": [
      "a) Joule",
      "b) Newton",
      "c) Pascal",
      "d) Watt"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "In terms of base units, the unit for force (Newton) is expressed as:",
    "options": [
      "a) kg m s^-1",
      "b) kg m s^-2",
      "c) kg s^-2",
      "d) m s^-2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Which of the following traditional mathematical units for measuring angles is permitted in SI?",
    "options": [
      "a) Gradian",
      "b) Degree",
      "c) Steradian",
      "d) Radian (Note: Radian is SI, but degree is traditional and permitted)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 20,
    "questionText": "Which of the following is a non-metric scientific unit mentioned as permitted in SI?",
    "options": [
      "a) Litre",
      "b) Tonne",
      "c) Atomic mass unit",
      "d) Nautical mile"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Most prefixes in SI indicate order of magnitude in steps of:",
    "options": [
      "a) 10",
      "b) 100",
      "c) 1000",
      "d) 10000"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Which prefix corresponds to 10^-12?",
    "options": [
      "a) Nano",
      "b) Micro",
      "c) Milli",
      "d) Pico"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "Which prefix corresponds to 10^6?",
    "options": [
      "a) Kilo",
      "b) Giga",
      "c) Tera",
      "d) Mega"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 24,
    "questionText": "When writing SI units, each SI unit is represented by:",
    "options": [
      "a) An abbreviation",
      "b) A full name",
      "c) A symbol",
      "d) A numeral"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "According to SI conventions, the full name of a unit does NOT begin with a capital letter, EXCEPT for:",
    "options": [
      "a) Newton",
      "b) Watt",
      "c) Joule",
      "d) Celsius"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "Symbols named after scientists have initial letters:",
    "options": [
      "a) Lowercase",
      "b) Capital",
      "c) It varies",
      "d) It depends on the unit"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Which of the following is the correct way to write 50 meters?",
    "options": [
      "a) 50ms",
      "b) 50 M",
      "c) 50 m",
      "d) 50meter"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Symbols for SI units do NOT take:",
    "options": [
      "a) Numeric values",
      "b) Prefixes",
      "c) Plural form",
      "d) Negative indices"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "When a prefix is written before a base unit, there should be:",
    "options": [
      "a) A space",
      "b) A hyphen",
      "c) A dot",
      "d) No space"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "Compound prefixes are:",
    "options": [
      "a) Recommended",
      "b) Used in specific cases",
      "c) Not allowed",
      "d) Optional"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The least count of an instrument puts a limit on its:",
    "options": [
      "a) Precision",
      "b) Accuracy",
      "c) Resolution",
      "d) Range"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "What is the maximum uncertainty often estimated as for a measurement?",
    "options": [
      "a) Half of the largest division",
      "b) Two smallest divisions",
      "c) One smallest division of the instrument",
      "d) 0.1 cm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What is the formula for fractional uncertainty?",
    "options": [
      "a) (Measured value / Absolute uncertainty) x 100%",
      "b) (Measured value / Absolute uncertainty)",
      "c) Absolute uncertainty / Measured value",
      "d) (Absolute uncertainty + Measured value) x 100%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "When adding or subtracting numbers, the number of decimal places retained in the answer should be equal to the smallest number of decimal places in any of the quantities being added or subtracted. What is NOT important in this case?",
    "options": [
      "a) Position of decimal",
      "b) Number of significant figures",
      "c) Smallest number of decimal places",
      "d) Result's precision"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "How is precision of a measurement determined?",
    "options": [
      "a) By its accuracy",
      "b) By the user's skill",
      "c) By the instrument or device being used",
      "d) By the number of trials"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the relationship between least count and precision?",
    "options": [
      "a) Larger the least count, more precise the measurement",
      "b) Smaller the least count, more precise the measurement",
      "c) Least count has no relation to precision",
      "d) Least count is directly proportional to precision"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is accuracy defined by?",
    "options": [
      "a) Absolute uncertainty",
      "b) Percentage uncertainty",
      "c) Number of significant figures",
      "d) Least percentage uncertainty"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "In adding or subtracting numbers with uncertainties, what happens to absolute uncertainties?",
    "options": [
      "a) They are multiplied",
      "b) They are subtracted",
      "c) They are divided",
      "d) They are added"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 39,
    "questionText": "What is the fundamental property described by dimensions?",
    "options": [
      "a) Quantitative nature of a physical quantity",
      "b) Numerical value of a physical quantity",
      "c) Qualitative nature of a physical quantity",
      "d) Specific units of a physical quantity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What symbol is used to denote the dimension of length?",
    "options": [
      "a) [l]",
      "b) [d]",
      "c) [L]",
      "d) [m]"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What symbol is used to denote the dimension of mass?",
    "options": [
      "a) [g]",
      "b) [k]",
      "c) [M]",
      "d) [s]"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What symbol is used to denote the dimension of time?",
    "options": [
      "a) [S]",
      "b) [T]",
      "c) [Hr]",
      "d) [Min]"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "The dimensions of speed are:",
    "options": [
      "a) $[LT]$",
      "b) $[L^{-1}T]$",
      "c) $[LT^{-1}]$",
      "d) $[LT^{-2}]$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "The dimensions of acceleration are:",
    "options": [
      "a) $[L T^{-1}]$",
      "b) $[L^{-1} T^{-2}]$",
      "c) $[L T^{-2}]$",
      "d) $[L^{-2} T^{-1}]$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The dimensions of force are:",
    "options": [
      "a) $[M L T^{-1}]$",
      "b) $[M L T^{-2}]$",
      "c) $[M L^{-1} T^{-2}]$",
      "d) $[M L T^2]$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What principle is used to check the correctness (homogeneity) of a physical equation?",
    "options": [
      "a) Principle of conservation of energy",
      "b) Principle of least action",
      "c) Principle of homogeneity",
      "d) Principle of relativity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Numerical factors like 1/2 in an equation have:",
    "options": [
      "a) $[L T^{-1}]$ dimensions",
      "b) $[M L T^{-2}]$ dimensions",
      "c) No dimensions",
      "d) Dimensions that vary"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is a limitation of dimensional analysis?",
    "options": [
      "a) It can always determine the numerical value of constants.",
      "b) It can identify where an equation is fundamentally wrong.",
      "c) It does not provide a check on any numerical factor or constant.",
      "d) It is applicable only to simple cases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "If the dimension of a physical quantity is $[L]$, it could represent:",
    "options": [
      "a) Area",
      "b) Volume",
      "c) Speed",
      "d) Height"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "What is the purpose of studying discoveries in Physics?",
    "options": [
      "a) The probing of stellar spaces",
      "b) The betterment of mankind",
      "c) The development of destructive technology in warfare",
      "d) Development in aesthetics for the world"
    ],
    "correctAnswer": "b"
  }
],
    "Force and Motion": [
  {
    "id": 1,
    "questionText": "What are scalars described by?",
    "options": [
      "a) Direction only",
      "b) Direction and magnitude",
      "c) Magnitude only",
      "d) Units only"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Which of the following is an example of a scalar quantity?",
    "options": [
      "a) Displacement",
      "b) Velocity",
      "c) Acceleration",
      "d) Distance"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "What are vectors described by?",
    "options": [
      "a) Magnitude only",
      "b) Magnitude as well as direction",
      "c) Direction only",
      "d) Units and symbols"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of a vector quantity?",
    "options": [
      "a) Speed",
      "b) Time",
      "c) Energy",
      "d) Force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "In a vector diagram, what does the length of an arrow indicate?",
    "options": [
      "a) Direction",
      "b) Angle",
      "c) Magnitude",
      "d) Component"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "How are vectors typically denoted?",
    "options": [
      "a) Italic letters",
      "b) Underlined letters",
      "c) Bold face letters or an arrow above symbol",
      "d) Script letters"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "If a vector A has rectangular components $A_x$ and $A_y$, its magnitude A can be found using:",
    "options": [
      "a) $A = A_x + A_y$",
      "b) $A = (A_x \\cdot A_y)$",
      "c) $A = \\sqrt{(A_x^2 + A_y^2)}$",
      "d) $A = A_x / A_y$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "The direction $\\theta$ of a vector A from its rectangular components $A_x$ and $A_y$ is given by:",
    "options": [
      "a) $\\theta = \\tan(A_x / A_y)$",
      "b) $\\theta = \\sin(A_y / A_x)$",
      "c) $\\theta = \\tan^{-1}(A_y / A_x)$",
      "d) $\\theta = \\cos^{-1}(A_x / A_y)$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Work done by a force F over a distance d with an angle $\\theta$ between them is given by:",
    "options": [
      "a) $Fd \\sin\\theta$",
      "b) $Fd / \\cos\\theta$",
      "c) $Fd \\cos\\theta$",
      "d) $Fd \\tan\\theta$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The scalar product (dot product) of two vectors A and B is defined as:",
    "options": [
      "a) $AB \\sin\\theta$",
      "b) $AB \\cos\\theta$",
      "c) $A \\times B$",
      "d) $A + B$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is the scalar product of two mutually perpendicular vectors ($\\theta = 90°$)?",
    "options": [
      "a) Maximum",
      "b) Negative",
      "c) Zero",
      "d) Equal to the product of their magnitudes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What is the scalar product of two parallel vectors ($\\theta = 0°$)?",
    "options": [
      "a) Zero",
      "b) Negative",
      "c) Equal to the product of their magnitudes",
      "d) Maximum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The self-product of a vector A (A.A) is equal to:",
    "options": [
      "a) Zero",
      "b) 2A",
      "c) $A^2$",
      "d) $-A^2$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "The cross product of two vectors A and B is given by:",
    "options": [
      "a) $AB \\cos\\theta \\hat{n}$",
      "b) $AB \\sin\\theta \\hat{n}$",
      "c) $A\\cdot B$",
      "d) $B \\times A$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "Is the cross product commutative?",
    "options": [
      "a) Yes",
      "b) No",
      "c) Only for parallel vectors",
      "d) Only for perpendicular vectors"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The cross product of two perpendicular vectors ($\\\\theta = 90°$) has:",
    "options": [
      "a) Zero magnitude",
      "b) Negative magnitude",
      "c) Maximum magnitude",
      "d) Half magnitude"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "The cross product of two parallel vectors ($\\\\theta = 0°$ or $180°$) is a:",
    "options": [
      "a) Vector with maximum magnitude",
      "b) Vector with negative magnitude",
      "c) Null vector",
      "d) Scalar quantity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "The magnitude of $A \\times B$ is equal to the area of the:",
    "options": [
      "a) Triangle formed by A and B",
      "b) Square formed by A and B",
      "c) Parallelogram formed with A and B as two adjacent sides",
      "d) Circle with radius A+B"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Which of the following is an example of a vector product in physics?",
    "options": [
      "a) Work",
      "b) Kinetic energy",
      "c) Torque",
      "d) Power"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The force F on a particle of charge q and velocity v in a magnetic field B is given by:",
    "options": [
      "a) $F = q(v\\cdot B)$",
      "b) $F = qvB$",
      "c) $F = qB/v$",
      "d) $F = q(v \\times B)$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "Equations of motion can only be applied to objects moving with:",
    "options": [
      "a) Variable acceleration in a curved path",
      "b) Constant velocity in any path",
      "c) Constant acceleration in a straight line",
      "d) Constant speed in a circular path"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The first equation of motion relates:",
    "options": [
      "a) Position and time",
      "b) Velocity and position",
      "c) Final velocity, initial velocity, acceleration, and time",
      "d) Distance and acceleration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Which of the following is the first equation of motion?",
    "options": [
      "a) $S = v_it + 1/2 at^2$",
      "b) $2aS = v_f^2 - v_i^2$",
      "c) $v_f = v_i + at$",
      "d) $S = (v_i + v_f)t / 2$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The second equation of motion relates:",
    "options": [
      "a) Final velocity, initial velocity, and time",
      "b) Final velocity, initial velocity, and displacement",
      "c) Displacement, initial velocity, acceleration, and time",
      "d) Acceleration, time, and final velocity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "Numerical factors in equations of motion (like 1/2) have no:",
    "options": [
      "a) Value",
      "b) Impact",
      "c) Dimensions",
      "d) Relevance"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "In the absence of air resistance, all objects in free fall at the surface of the Earth move with a uniform acceleration known as:",
    "options": [
      "a) Terminal velocity",
      "b) Constant acceleration",
      "c) Acceleration due to gravity (g)",
      "d) Centripetal acceleration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The average value of acceleration due to gravity (g) at Earth's surface is taken as:",
    "options": [
      "a) 8.9 m/s^2",
      "b) 9.8 m/s^2",
      "c) 10.0 m/s^2",
      "d) 9.0 m/s^2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Momentum is defined as the product of an object's mass and:",
    "options": [
      "a) Acceleration",
      "b) Displacement",
      "c) Velocity",
      "d) Force"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Is momentum a scalar or vector quantity?",
    "options": [
      "a) Scalar",
      "b) Vector",
      "c) Neither",
      "d) Both"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What is the SI unit of momentum?",
    "options": [
      "a) N s^2",
      "b) Joule",
      "c) kg m/s (or N s)",
      "d) Watt"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Newton's second law of motion can also be stated in terms of momentum as:",
    "options": [
      "a) Force is inversely proportional to the change in momentum.",
      "b) The rate of change of acceleration is equal to the applied force.",
      "c) The time rate of change of momentum of a body is equal to the applied force.",
      "d) Momentum is conserved in the absence of external forces."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is impulse defined as?",
    "options": [
      "a) The change in momentum per unit time",
      "b) The rate of change of force",
      "c) The product of average force and the time it acts",
      "d) The product of mass and acceleration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Impulse is equal to:",
    "options": [
      "a) Initial momentum",
      "b) Final momentum",
      "c) Change in momentum",
      "d) Work done"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What is an isolated system?",
    "options": [
      "a) A system where internal forces are negligible.",
      "b) A system that is not in contact with anything else.",
      "c) A system on which no external agency exerts any force.",
      "d) A system with constant velocity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The law of conservation of momentum states that the total linear momentum of an isolated system remains:",
    "options": [
      "a) Variable",
      "b) Increasing",
      "c) Decreasing",
      "d) Constant"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 36,
    "questionText": "In applying the conservation of momentum, it is important to remember that momentum is a:",
    "options": [
      "a) Scalar quantity",
      "b) Vector quantity",
      "c) Dimensionless quantity",
      "d) Relative quantity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "In an elastic collision, which quantity is conserved?",
    "options": [
      "a) Only momentum",
      "b) Only kinetic energy",
      "c) Both momentum and kinetic energy",
      "d) Neither momentum nor kinetic energy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "In an inelastic collision, which quantity is NOT conserved?",
    "options": [
      "a) Momentum",
      "b) Kinetic energy",
      "c) Total energy",
      "d) Mass"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "For an elastic collision, the relative speed of approach is equal to:",
    "options": [
      "a) The product of the masses",
      "b) The sum of the velocities",
      "c) The relative speed of separation",
      "d) Zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "If two bodies of equal mass undergo an elastic collision and one is initially at rest, what happens after the collision?",
    "options": [
      "a) Both bodies move together with half the initial velocity.",
      "b) Both bodies move with the same velocity in opposite directions.",
      "c) The moving body stops, and the body at rest takes off with the initial velocity of the first.",
      "d) The moving body bounces back, and the body at rest moves forward."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "When a light body collides with a massive body at rest in an elastic collision, what happens to the light body?",
    "options": [
      "a) It sticks to the massive body.",
      "b) It moves off with the massive body.",
      "c) It bounces back with the same velocity.",
      "d) It passes through the massive body."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "In a perfectly inelastic collision, what happens to the colliding objects?",
    "options": [
      "a) They bounce off with maximum kinetic energy.",
      "b) They exchange momentum.",
      "c) They stick together to make a single mass.",
      "d) They explode into multiple pieces."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "For a projectile motion in the absence of air resistance, the horizontal component of velocity ($V_x$) is:",
    "options": [
      "a) Decreasing",
      "b) Increasing",
      "c) Constant",
      "d) Zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "For a projectile motion in the absence of air resistance, acceleration is in which direction?",
    "options": [
      "a) Horizontal direction",
      "b) Tangential direction",
      "c) Vertical direction",
      "d) Zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The horizontal motion and vertical motion of a projectile are:",
    "options": [
      "a) Dependent on each other",
      "b) Combined into a single motion",
      "c) Independent of each other",
      "d) Always equal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What is the path of a projectile in the absence of air resistance?",
    "options": [
      "a) Straight line",
      "b) Circular",
      "c) Parabolic",
      "d) Elliptical"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "How does air resistance affect projectile motion qualitatively?",
    "options": [
      "a) It increases the range and maximum height.",
      "b) It only affects the vertical component of velocity.",
      "c) It only affects the horizontal component of velocity.",
      "d) It reduces both the horizontal and vertical components of velocity, thus reducing range and maximum height."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 48,
    "questionText": "Rocket propulsion is an application of:",
    "options": [
      "a) Newton's first law",
      "b) Conservation of energy",
      "c) Conservation of momentum",
      "d) Conservation of angular momentum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "The ignited fuel in a rocket turns into a high-pressure gas that is expelled. How does the rocket gain momentum?",
    "options": [
      "a) By friction with the atmosphere.",
      "b) By pushing against the ground.",
      "c) Equal to the momentum of the gas expelled, but in the opposite direction.",
      "d) By attracting celestial bodies."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "As a rocket moves upward during its journey, then its acceleration generally:",
    "options": [
      "a) Decreases",
      "b) Increases (Due to decreasing mass from fuel burn, increasing thrust-to-mass ratio)",
      "c) Remains the same",
      "d) It moves with uniform velocity"
    ],
    "correctAnswer": "b"
  }
],
    "Circular and Rotational Motion": [
  {
    "id": 1,
    "questionText": "What is the SI unit of angular measurement?",
    "options": [
      "a) Degree",
      "b) Revolution",
      "c) Grade",
      "d) Radian"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 2,
    "questionText": "If the length of an arc (s) is equal to the radius (r) of a circle, the angle subtended at the center is called:",
    "options": [
      "a) One degree",
      "b) One revolution",
      "c) One radian",
      "d) One steradian"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "How many degrees are in one radian (approximately)?",
    "options": [
      "a) 90°",
      "b) 180°",
      "c) 57.3°",
      "d) 360°"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "How many radians are in one revolution?",
    "options": [
      "a) 1 radian",
      "b) 2π radians",
      "c) π radians",
      "d) 360 radians"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is angular velocity defined as?",
    "options": [
      "a) The rate of change of linear displacement",
      "b) The rate of change of angular acceleration",
      "c) The rate at which the angular displacement is changing with time",
      "d) The total angular displacement"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "What is the SI unit of angular velocity?",
    "options": [
      "a) Degrees per second",
      "b) Revolutions per minute",
      "c) Radians per second",
      "d) Meters per second"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is angular acceleration defined as?",
    "options": [
      "a) The rate of change of angular displacement",
      "b) The rate of change of angular velocity",
      "c) The rate of change of linear acceleration",
      "d) The product of angular velocity and time"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the SI unit of angular acceleration?",
    "options": [
      "a) Radians per second",
      "b) Revolutions per minute squared",
      "c) Degrees per second squared",
      "d) Radians per second squared"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 9,
    "questionText": "For a rigid body rotating about a fixed axis, all points on the body have the same:",
    "options": [
      "a) Linear speed",
      "b) Linear acceleration",
      "c) Angular speed",
      "d) Tangential velocity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The relation between linear velocity (v) and angular velocity (ω) for a point at radius (r) is:",
    "options": [
      "a) $v = \\omega/r$",
      "b) $v = \\omega^2 r$",
      "c) $v = r\\omega$",
      "d) $v = r/\\omega$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "The relation between tangential acceleration ($a_t$) and angular acceleration (α) for a point at radius (r) is:",
    "options": [
      "a) $a_t = \\alpha/r$",
      "b) $a_t = \\alpha^2 r$",
      "c) $a_t = r\\alpha$",
      "d) $a_t = r/\\alpha$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The equations of angular motion hold true only when the axis of rotation is:",
    "options": [
      "a) Moving with constant velocity",
      "b) Fixed",
      "c) Accelerating",
      "d) Oscillating"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What type of force makes a body move in a circle by producing a radial acceleration?",
    "options": [
      "a) Tangential force",
      "b) Frictional force",
      "c) Gravitational force",
      "d) Centripetal force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 14,
    "questionText": "If a string holding a ball in circular motion snaps, what path will the ball follow?",
    "options": [
      "a) A tighter circle",
      "b) A wider circle",
      "c) A straight line tangent to the circle",
      "d) Directly towards the center"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "For a body of mass m moving with velocity v in a circular path of radius r, the centripetal force $F_c$ is given by:",
    "options": [
      "a) $F_c = mv/r$",
      "b) $F_c = mvr$",
      "c) $F_c = mv^2/r$",
      "d) $F_c = m/vr$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "The direction of centripetal acceleration is always:",
    "options": [
      "a) Tangential to the circular path",
      "b) Opposite to the direction of velocity",
      "c) Away from the center of the circular path",
      "d) Towards the center of the circular path"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "If $v = r\\omega$, the centripetal force $F_c$ can also be expressed as:",
    "options": [
      "a) $F_c = mr/\\omega^2$",
      "b) $F_c = m\\omega^2/r$",
      "c) $F_c = mr\\omega$",
      "d) $F_c = mr\\omega^2$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "Which of the following provides the necessary centripetal force for the Earth orbiting around the Sun?",
    "options": [
      "a) Tension",
      "b) Friction",
      "c) Normal force",
      "d) Gravitational force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "When a vehicle takes a turn on a road, what provides the centripetal force?",
    "options": [
      "a) Air resistance",
      "b) Engine thrust",
      "c) Friction between the tyres and the road",
      "d) Gravitational pull"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What is done to overcome the difficulty of vehicles skidding on turns at high speeds?",
    "options": [
      "a) Roads are made wider.",
      "b) Speed limits are enforced.",
      "c) The highway road is banked on turns.",
      "d) Vehicles are equipped with special tires."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is the minimum velocity necessary to put a satellite into orbit, called the critical velocity?",
    "options": [
      "a) $v = \\sqrt{(2gR)}$",
      "b) $v = \\sqrt{(gR)}$",
      "c) $v = gR$",
      "d) $v = R/g$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "An object in orbit around the Earth appears to be weightless because:",
    "options": [
      "a) There is no gravity in space.",
      "b) It is in a vacuum.",
      "c) The gravitational force is providing the centripetal force for its motion.",
      "d) It is moving at very high speed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Artificial gravity can be created in a spaceship by:",
    "options": [
      "a) Increasing its speed linearly.",
      "b) Decreasing its mass.",
      "c) Rotating the spaceship.",
      "d) Applying a constant thrust."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What is the rotational analogue of Newton's second law of motion (F=ma)?",
    "options": [
      "a) $\\tau = I + \\alpha$",
      "b) $\\tau = I / \\alpha$",
      "c) $\\tau = I\\alpha$",
      "d) $\\tau = \\alpha / I$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The quantity $mr^2$ is known as the:",
    "options": [
      "a) Angular velocity",
      "b) Angular momentum",
      "c) Moment of inertia",
      "d) Torque"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "What role does moment of inertia play in angular motion?",
    "options": [
      "a) It is analogous to velocity in linear motion.",
      "b) It is analogous to acceleration in linear motion.",
      "c) It is analogous to force in linear motion.",
      "d) It is analogous to mass in linear motion."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 27,
    "questionText": "The moment of inertia of a rigid body depends on its mass and:",
    "options": [
      "a) Angular speed",
      "b) Angular acceleration",
      "c) Its distribution about the axis of rotation",
      "d) External torque"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The angular momentum L of a particle with position vector r and momentum p is defined as:",
    "options": [
      "a) $L = r \\cdot p$",
      "b) $L = r/p$",
      "c) $L = r \\times p$",
      "d) $L = p \\times r$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What is the SI unit of angular momentum?",
    "options": [
      "a) N m s",
      "b) J $s^{-1}$",
      "c) kg $m^2 s^{-1}$ (or J s)",
      "d) kg $s^{-2}$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "If a particle is moving in a circle of radius r with uniform angular velocity $\\omega$, its angular momentum is:",
    "options": [
      "a) $mr\\omega$",
      "b) $m\\omega^2 r$",
      "c) $mr^2\\omega$",
      "d) $m\\omega/r$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The law of conservation of angular momentum states that if no external torque acts on a system, the total angular momentum of the system remains:",
    "options": [
      "a) Increasing",
      "b) Decreasing",
      "c) Oscillating",
      "d) Constant"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "When an ice skater pulls her arms inward while spinning, what happens to her angular speed?",
    "options": [
      "a) It decreases.",
      "b) It remains constant.",
      "c) It increases.",
      "d) It first decreases then increases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "A flywheel is used to:",
    "options": [
      "a) Increase linear speed",
      "b) Generate electricity",
      "c) Store rotational energy",
      "d) Provide linear stability"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "The angular momentum of a spinning flywheel provides:",
    "options": [
      "a) High speed",
      "b) Energy conversion",
      "c) Stability",
      "d) Increased torque"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "What is a gyroscope used for?",
    "options": [
      "a) Measuring linear acceleration",
      "b) Maintaining orientation relative to a fixed axis",
      "c) Generating electricity",
      "d) Converting rotational motion to linear motion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "The principle of a gyroscope is based on the law of:",
    "options": [
      "a) Conservation of linear momentum",
      "b) Conservation of energy",
      "c) Conservation of angular momentum",
      "d) Newton's third law"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The ratio of angular speed of minute's hand and hour's hand in a watch is:",
    "options": [
      "a) 1:6",
      "b) 12:1",
      "c) 60:1",
      "d) 1:12"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "A body traveling in a circle at constant speed:",
    "options": [
      "a) Has constant velocity",
      "b) Is not accelerated",
      "c) Has an outward radial acceleration",
      "d) Has an inward radial acceleration"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 39,
    "questionText": "The tension in the string when a stone is whirled in a vertical circle at constant speed will be maximum when the stone is:",
    "options": [
      "a) At the top of the circle",
      "b) Halfway down",
      "c) At the bottom of the circle",
      "d) Anywhere in the circle"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Every point of a rotating rigid body has:",
    "options": [
      "a) Same linear velocity",
      "b) Same linear acceleration",
      "c) Same linear distance from the axis",
      "d) Same angular velocity"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 41,
    "questionText": "An astronaut feels weightlessness while orbiting from the Earth in a spaceship because the force of attraction due to the Earth is:",
    "options": [
      "a) Zero at pole",
      "b) Balanced by the force of attraction due to the moon",
      "c) Equal to the centripetal force",
      "d) Non-effective due to some particular design of the satellite"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "A bottle of soda water is grasped from the neck and swung briskly in a vertical circle. Near which portion of the bottle do the bubbles collect?",
    "options": [
      "a) Near the bottom",
      "b) In the middle of bottle",
      "c) Bubbles remain distributed throughout the volume of the bottle",
      "d) Near the neck of the bottle"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "The moment of inertia of a body depends upon:",
    "options": [
      "a) Volume of the body",
      "b) Kinetic energy of the body",
      "c) Angular momentum of the body",
      "d) Mass of the body and its distribution about axis of rotation"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "Why is it harder to take a turn at higher speed than at lower speed?",
    "options": [
      "a) Air resistance increases",
      "b) The radius of curvature decreases",
      "c) More centripetal force is required",
      "d) Gravitational force increases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "When a car turns around a corner to the left, in what direction do the occupants tend to fall?",
    "options": [
      "a) Towards the left",
      "b) Forward",
      "c) Backward",
      "d) Towards the right (due to inertia)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 46,
    "questionText": "What is the average velocity for one revolution in uniform circular motion?",
    "options": [
      "a) Constant and non-zero",
      "b) Increasing",
      "c) Zero",
      "d) Equal to linear speed"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What is the average acceleration for one revolution in uniform circular motion?",
    "options": [
      "a) Constant and non-zero",
      "b) Increasing",
      "c) Zero",
      "d) Equal to tangential acceleration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What provides the centripetal force for a satellite orbiting around the Earth?",
    "options": [
      "a) Tension in a tether",
      "b) Atmospheric pressure",
      "c) Gravitational force",
      "d) Magnetic field"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What provides the centripetal force for a car taking a turn on a level road?",
    "options": [
      "a) Air friction",
      "b) Engine thrust",
      "c) Friction between tires and road",
      "d) Normal force"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is the minimum time period necessary to put a satellite into orbit near the surface of the Earth?",
    "options": [
      "a) 24 hours",
      "b) 90 minutes",
      "c) 84 minutes",
      "d) 45 minutes"
    ],
    "correctAnswer": "c"
  }
],
    "Work Energy and Power": [
  {
    "id": 1,
    "questionText": "In Physics, the term work involves two things: force and:",
    "options": [
      "a) Time",
      "b) Energy",
      "c) Displacement",
      "d) Power"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What is the SI unit of work?",
    "options": [
      "a) Newton",
      "b) Watt",
      "c) Pascal",
      "d) Joule"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "Work done by a constant force can be represented graphically as the area under which curve?",
    "options": [
      "a) Force-time",
      "b) Velocity-displacement",
      "c) Force-displacement",
      "d) Pressure-volume"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "If the force F and displacement d are in the same direction, the work done is:",
    "options": [
      "a) F/d",
      "b) F^2d",
      "c) Fd",
      "d) Fd^2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "If the angle (θ) between the force and displacement is 90°, what is the work done?",
    "options": [
      "a) Maximum",
      "b) Minimum",
      "c) Zero",
      "d) Negative"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "If the angle (θ) between the force and displacement is greater than 90°, the work done is:",
    "options": [
      "a) Positive",
      "b) Zero",
      "c) Negative",
      "d) Undefined"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "How is work done by a variable force calculated?",
    "options": [
      "a) By multiplying the average force by the total displacement.",
      "b) By taking the maximum force and multiplying by displacement.",
      "c) By summing the work done over many small intervals where the force is approximately constant.",
      "d) By using the final force value only."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "When an object is moved in the gravitational field, and the displacement is against the gravitational force, the work done is:",
    "options": [
      "a) Positive",
      "b) Zero",
      "c) Negative",
      "d) Undefined"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "A force is called conservative if the work done by it in moving an object between two points:",
    "options": [
      "a) Depends on the path followed.",
      "b) Is always positive.",
      "c) Is independent of the path followed.",
      "d) Is always negative."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Which of the following is an example of a conservative force?",
    "options": [
      "a) Frictional force",
      "b) Air resistance",
      "c) Electrostatic force",
      "d) Viscous drag"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "If the work done by a force in a closed path is zero, the force is:",
    "options": [
      "a) Non-conservative",
      "b) Conservative",
      "c) Variable",
      "d) Irreversible"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What is power a measure of?",
    "options": [
      "a) The total work done",
      "b) The total energy consumed",
      "c) The rate at which work is being done",
      "d) The efficiency of a machine"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "If work ΔW is done in a time interval Δt, the average power P_avg is defined as:",
    "options": [
      "a) $Δt / ΔW$",
      "b) $ΔW \\times Δt$",
      "c) $(ΔW + Δt) / 2$",
      "d) $ΔW / Δt$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 14,
    "questionText": "Power can also be defined as the scalar product of force (F) and:",
    "options": [
      "a) Displacement (d)",
      "b) Acceleration (a)",
      "c) Work (W)",
      "d) Velocity (v)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "What is the SI unit of power?",
    "options": [
      "a) Joule per second",
      "b) Newton meter per second",
      "c) Kilogram meter squared per second cubed",
      "d) All of the above (equivalent to Watt)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 16,
    "questionText": "The energy of a body is its capacity to do:",
    "options": [
      "a) Power",
      "b) Heat",
      "c) Work",
      "d) Momentum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What are the two basic forms of mechanical energy?",
    "options": [
      "a) Heat and light",
      "b) Electrical and chemical",
      "c) Kinetic and potential",
      "d) Nuclear and thermal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "Kinetic energy is the energy possessed by a body due to its:",
    "options": [
      "a) Position",
      "b) Temperature",
      "c) Motion",
      "d) Chemical composition"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What is the formula for kinetic energy (KE)?",
    "options": [
      "a) $KE = mv$",
      "b) $KE = mgh$",
      "c) $KE = 1/2 mv^2$",
      "d) $KE = 1/2 kx^2$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The unit of kinetic energy must be the same as that of:",
    "options": [
      "a) Power",
      "b) Force",
      "c) Momentum",
      "d) Work"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "Potential energy is the energy possessed by a body due to its:",
    "options": [
      "a) Motion",
      "b) Speed",
      "c) Changed position",
      "d) Internal structure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The absolute potential energy of a body at a certain position in a gravitational field is considered zero at:",
    "options": [
      "a) Earth's surface",
      "b) Sea level",
      "c) The center of the Earth",
      "d) Infinity"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "What is the gravitational force between two masses m and M separated by distance r?",
    "options": [
      "a) $F = k Mm/r^2$",
      "b) $F = M/r^2$",
      "c) $F = G Mm/r^2$",
      "d) $F = gM/r$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The work done in displacing a body from point 1 to point N against a gravitational force is given by:",
    "options": [
      "a) $W = GMm (1/r_N - 1/r_1)$",
      "b) $W = GMm (1/r_1 + 1/r_N)$",
      "c) $W = GMm (1/r_1 - 1/r_N)$",
      "d) $W = GMm (r_N - r_1)$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What is escape velocity ($v_{esc}$)?",
    "options": [
      "a) The velocity required to maintain orbit.",
      "b) The maximum velocity an object can achieve.",
      "c) The minimum velocity required for an object to escape the Earth's gravitational field.",
      "d) The velocity at which an object re-enters the atmosphere."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "The work-energy theorem states that the change in kinetic energy of an object is equal to:",
    "options": [
      "a) Its potential energy",
      "b) The heat supplied to it",
      "c) Its mechanical energy",
      "d) The work done on it by a net force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 27,
    "questionText": "The work-energy theorem is expressed as:",
    "options": [
      "a) $W = KE_f + KE_i$",
      "b) $W = 1/2 m(v_f - v_i)^2$",
      "c) $W = 1/2 mv_f^2 - 1/2 mv_i^2$",
      "d) $W = P.E_f - P.E_i$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What is a non-conservative force?",
    "options": [
      "a) A force that only performs positive work.",
      "b) A force that depends on the initial and final positions only.",
      "c) A force for which the work done depends on the path of motion.",
      "d) A force that always conserves mechanical energy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Which of the following is a non-conservative force?",
    "options": [
      "a) Gravitational force",
      "b) Elastic spring force",
      "c) Air friction",
      "d) Electrostatic force"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "If a body falls towards the Earth in air, will its total mechanical energy be conserved?",
    "options": [
      "a) Yes, always.",
      "b) Only if air resistance is negligible.",
      "c) No, because air friction is a non-conservative force.",
      "d) It depends on the initial height."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "A 1 kg mass has potential energy of 1 joule relative to the ground when it is at a height of approximately:",
    "options": [
      "a) 1 m",
      "b) 9.8 m",
      "c) 0.5 m",
      "d) 0.102 m (since $PE = mgh$, $h = PE/mg = 1J / (1kg \\times 9.8m/s^2) = 0.102m$)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "An iron sphere and an aluminum sphere of different masses but same diameter are dropped simultaneously from a cliff. When they are 10 m from the ground, they have identical:",
    "options": [
      "a) Momentums",
      "b) Potential energies",
      "c) Kinetic energies",
      "d) Accelerations (assuming no air resistance, both fall with 'g')"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "A body at rest may have:",
    "options": [
      "a) Speed",
      "b) Velocity",
      "c) Momentum",
      "d) Energy (potential energy)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "According to the work-energy principle in linear motion, the work done on a body is equal to:",
    "options": [
      "a) Change in potential energy",
      "b) Sum of KE and PE",
      "c) Zero",
      "d) Change in KE"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "Power of a lamp is 6 W. How much energy does it give out in 2 minutes?",
    "options": [
      "a) 12 J",
      "b) 20 J",
      "c) 600 J",
      "d) 720 J (Energy = Power \\times Time = 6W \\times 120s = 720 J)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 36,
    "questionText": "A dry battery can deliver 3000 J of energy to a 2 W small electric motor. For how many minutes does the battery run?",
    "options": [
      "a) 1500 min",
      "b) 100 min",
      "c) 25 min (Time = Energy/Power = 3000J / 2W = 1500s = 25 min)",
      "d) 10 min"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The kinetic energy acquired by a mass m after traveling a fixed distance from rest under the action of a constant force is directly proportional to:",
    "options": [
      "a) $\\sqrt{m}$",
      "b) $1/m$",
      "c) m",
      "d) Independent of m"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "A body moves a distance of 10 m along a straight line under the action of 5 N force. If the work done is 25 J, the angle which the force makes with the direction of motion of the body is:",
    "options": [
      "a) 0°",
      "b) 60° (W = Fd cosθ => 25 = 5 \\times 10 \\times \\cos\\theta => \\cos\\theta = 0.5 => \\theta = 60°)",
      "c) 30°",
      "d) 45°"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Why is electrical power required even when an elevator is descending?",
    "options": [
      "a) To increase its speed.",
      "b) To overcome air resistance.",
      "c) To control the descent and manage potential energy conversion.",
      "d) To generate heat."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "If the speed of a bicycle is doubled, what happens to its kinetic energy (assuming mass remains constant)?",
    "options": [
      "a) It doubles.",
      "b) It becomes half.",
      "c) It quadruples.",
      "d) It remains the same."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "If the mass of a bicycle is tripled and its speed is halved, what happens to its kinetic energy?",
    "options": [
      "a) It remains the same.",
      "b) It doubles.",
      "c) It triples.",
      "d) It becomes 3/4 of the original. ($KE_{new} = 1/2 \\times (3m) \\times (v/2)^2 = 3/4 \\times (1/2 mv^2)$)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 42,
    "questionText": "Does the International Space Station (ISS) have gravitational potential energy or kinetic energy or both?",
    "options": [
      "a) Only gravitational potential energy",
      "b) Only kinetic energy",
      "c) Both",
      "d) Neither"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "A slow-moving truck can have more kinetic energy than a fast-moving car. This is possible if:",
    "options": [
      "a) The car has very little mass.",
      "b) The truck is on a downhill slope.",
      "c) The truck's mass is significantly greater than the car's mass.",
      "d) The car is accelerating."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Why is work done against friction non-conservative in nature?",
    "options": [
      "a) Because it always results in a loss of energy.",
      "b) Because it depends on the direction of motion.",
      "c) Because the energy dissipated depends on the path taken.",
      "d) Because it is a contact force."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Does wind possess kinetic energy?",
    "options": [
      "a) No, it only possesses potential energy.",
      "b) Only when it is still.",
      "c) Yes, due to the motion of air molecules.",
      "d) It depends on the temperature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "Escape velocity for Earth can be expressed as:",
    "options": [
      "a) $v_{esc} = \\sqrt{(gR)}$",
      "b) $v_{esc} = gR$",
      "c) $v_{esc} = \\sqrt{(R/g)}$",
      "d) $v_{esc} = \\sqrt{(2gR)}$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 47,
    "questionText": "What is the numerical value of escape velocity near the surface of the Earth?",
    "options": [
      "a) 7.9 km/s",
      "b) 11.2 km/s",
      "c) 9.8 km/s",
      "d) 3.0 x 10^8 m/s"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "A machine gun fires 6 bullets per minute with a velocity of 700 m/s. If each bullet has a mass of 40g, what is the power developed by the gun?",
    "options": [
      "a) 98 W",
      "b) 9800 W",
      "c) 980 W (Energy per bullet = $1/2 mv^2 = 0.5 \\times 0.04kg \\times (700m/s)^2 = 9800 J$. Power = (Energy per bullet \\times bullets per min) / 60s = $(9800J \\times 6) / 60s = 980 W$)",
      "d) 1960 W"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "An object weighing 98 N is dropped from a height of 10 m. Its speed just before hitting the ground is 12 m/s. What is the frictional force acting on it?",
    "options": [
      "a) 10 N",
      "b) 26 N (mg = 98N => m = 10kg. $PE_i = mgh = 98 \\times 10 = 980 J$. $KE_f = 0.5 \\times 10 \\times 12^2 = 720 J$. Work done by friction = $PE_i - KE_f = 980 - 720 = 260 J$. Frictional force = Work/distance = $260J / 10m = 26 N$)",
      "c) 50 N",
      "d) 98 N"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What will be the total work done by gravity for an object thrown up to 5m height and then falling back to Earth (neglecting air resistance)?",
    "options": [
      "a) -98 J",
      "b) +98 J",
      "c) 0 J",
      "d) Depends on the initial velocity"
    ],
    "correctAnswer": "c"
  }
],
    "Solids and Fluid Dynamics": [
  {
    "id": 1,
    "questionText": "In crystalline solids, atoms and molecules are arranged in a:",
    "options": [
      "a) Random pattern",
      "b) Disordered structure",
      "c) Regular pattern",
      "d) Amorphous structure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Most solids, like metals and ceramics, have a:",
    "options": [
      "a) Amorphous structure",
      "b) Polymeric structure",
      "c) Crystalline structure",
      "d) Viscous structure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "In crystalline solids, atoms, molecules, or ions are:",
    "options": [
      "a) Static",
      "b) Only vibrating at high temperatures",
      "c) Vibrating about a fixed point with an amplitude that increases with temperature",
      "d) Moving freely throughout the crystal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of an amorphous solid?",
    "options": [
      "a) Iron",
      "b) Copper",
      "c) Diamond",
      "d) Glass"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "What is a polymer?",
    "options": [
      "a) A solid with a perfectly ordered structure.",
      "b) A liquid with high viscosity.",
      "c) A macromolecule formed by linking small, repeating units.",
      "d) A material that exhibits zero viscosity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "If a soft rubber ball is squeezed, its shape or volume changes. When the squeezing force is removed, it returns to its original shape. This behavior is called:",
    "options": [
      "a) Plasticity",
      "b) Failure",
      "c) Elasticity",
      "d) Deformation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Stress is defined as:",
    "options": [
      "a) Change in length per unit length",
      "b) Total force applied",
      "c) Force applied per unit area",
      "d) Resistance to flow"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the SI unit of stress?",
    "options": [
      "a) Newton (N)",
      "b) Joule (J)",
      "c) Pascal (Pa)",
      "d) Kilogram (kg)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "When stress changes the length of a body, it is called:",
    "options": [
      "a) Shear stress",
      "b) Volume stress",
      "c) Tensile stress",
      "d) Normal stress"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Strain is a measure of the:",
    "options": [
      "a) Applied force",
      "b) Material's hardness",
      "c) Deformation of a solid",
      "d) Ultimate strength"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What is tensile strain defined as?",
    "options": [
      "a) Original length / Change in length",
      "b) Applied force / Original area",
      "c) Change in length / Original length",
      "d) Volume change / Original volume"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Is strain a dimensionless quantity?",
    "options": [
      "a) No, its unit is meters.",
      "b) No, its unit is pascals.",
      "c) Yes, because it is a ratio of lengths.",
      "d) Only for shear strain."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is Young's Modulus (Y) defined as?",
    "options": [
      "a) Strain / Tensile stress",
      "b) Applied force / Cross-sectional area",
      "c) Tensile stress / Tensile strain",
      "d) Change in length x Applied force"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What is the unit of Young's Modulus?",
    "options": [
      "a) Dimensionless",
      "b) N/m",
      "c) N/m^2 (Pascal)",
      "d) J/m"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "In a stress-strain curve, the region where Hooke's law is obeyed is called the:",
    "options": [
      "a) Yield point",
      "b) Plastic deformation region",
      "c) Proportional limit",
      "d) Ultimate tensile strength"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "If the load is removed at any point between the origin and the elastic limit on a stress-strain curve, what happens to the material?",
    "options": [
      "a) It remains permanently deformed.",
      "b) It fractures.",
      "c) It returns to its original state.",
      "d) It softens."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is the point on the stress-strain curve where the material becomes permanently changed if stress is increased beyond it?",
    "options": [
      "a) Proportional limit",
      "b) Ultimate tensile strength",
      "c) Yield point (or elastic limit)",
      "d) Fracture point"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "When a body is deformed by a force, work is done against elastic restoring force. This work is stored in it as its:",
    "options": [
      "a) Kinetic energy",
      "b) Heat energy",
      "c) Potential energy (strain energy)",
      "d) Chemical energy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "For a spring stretched by a force F through extension x, the work done (strain energy stored) within the elastic limit is:",
    "options": [
      "a) Fx",
      "b) 2Fx",
      "c) $1/2 Fx$ (or $1/2 kx^2$)",
      "d) F/x"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Archimedes' principle states that the buoyant force acting on an object immersed in a fluid is equal to:",
    "options": [
      "a) The weight of the object.",
      "b) The volume of the fluid.",
      "c) The density of the fluid.",
      "d) The weight of the fluid displaced by the object."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "What causes an object to float in a fluid?",
    "options": [
      "a) Its density is greater than the fluid's density.",
      "b) Its weight is greater than the buoyant force.",
      "c) The buoyant force acting on it is equal to its weight.",
      "d) It is completely submerged."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Which of the following conditions is NOT assumed for an ideal fluid?",
    "options": [
      "a) It is non-viscous.",
      "b) It is incompressible.",
      "c) Its motion is steady.",
      "d) Its flow is turbulent."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "In streamline or laminar flow, what happens to every particle that passes a particular point?",
    "options": [
      "a) It moves in a random direction.",
      "b) It changes its path over time.",
      "c) It moves along exactly the same path as followed by previous particles.",
      "d) It crosses other streamlines."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The smooth path followed by fluid particles in laminar flow is called a:",
    "options": [
      "a) Flow tube",
      "b) Vortex",
      "c) Streamline",
      "d) Pathline"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The rate of flow of a fluid through a pipe is defined as the:",
    "options": [
      "a) Speed of the fluid",
      "b) Area of the pipe",
      "c) Volume of the fluid passing through any section per unit time",
      "d) Mass of the fluid per unit time"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "If A is the cross-sectional area and v is the fluid speed, the rate of flow is given by:",
    "options": [
      "a) A/v",
      "b) v/A",
      "c) (A+v)",
      "d) Av"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 27,
    "questionText": "What is the SI unit of rate of flow?",
    "options": [
      "a) m/s",
      "b) kg/s",
      "c) N/s",
      "d) $m^3/s$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 28,
    "questionText": "The equation of continuity is a form of the principle of conservation of:",
    "options": [
      "a) Energy",
      "b) Momentum",
      "c) Mass",
      "d) Volume"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "For an incompressible fluid in steady flow, the equation of continuity states that:",
    "options": [
      "a) $A_1/v_1 = A_2/v_2$",
      "b) $A_1v_1^2 = A_2v_2^2$",
      "c) $A_1v_1 = A_2v_2$",
      "d) $A_1+v_1 = A_2+v_2$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Squeezing the end of a rubber pipe to decrease its cross-sectional area results in:",
    "options": [
      "a) A decrease in flow velocity",
      "b) No change in flow velocity",
      "c) An increase in flow velocity",
      "d) An increase in pressure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Bernoulli's equation states that the sum of pressure, kinetic energy per unit volume, and potential energy per unit volume of an ideal fluid remains:",
    "options": [
      "a) Increasing",
      "b) Decreasing",
      "c) Variable",
      "d) Constant"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "Bernoulli's equation is a fundamental equation in fluid dynamics that relates pressure, fluid speed, and:",
    "options": [
      "a) Density",
      "b) Viscosity",
      "c) Height",
      "d) Volume"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Which of the following is NOT a practical application of Bernoulli's equation?",
    "options": [
      "a) Lift of an aeroplane",
      "b) Filter pump",
      "c) Hydraulic press",
      "d) Venturi meter"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "The phenomenon of reduced pressure with increased fluid speed is known as:",
    "options": [
      "a) Pascal's principle",
      "b) Archimedes' principle",
      "c) Bernoulli effect",
      "d) Torricelli's theorem"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The lift of an aeroplane is primarily due to:",
    "options": [
      "a) The weight of the plane",
      "b) The shape of the fuselage",
      "c) Pressure difference above and below the wing",
      "d) The thrust of the engines"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the Magnus effect?",
    "options": [
      "a) The pressure difference that causes a fluid to accelerate.",
      "b) The buoyant force acting on a spinning object.",
      "c) A sideways force on a spinning ball caused by pressure difference in the airflow.",
      "d) The resistance to fluid flow due to viscosity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "A device used to measure the speed of liquid flow based on Bernoulli's principle is called a:",
    "options": [
      "a) Pitot tube",
      "b) Flowmeter",
      "c) Venturi meter",
      "d) Orifice plate"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Torricelli's theorem relates the speed of efflux from an orifice in a tank to the:",
    "options": [
      "a) Pressure at the surface",
      "b) Density of the fluid",
      "c) Height of the fluid above the orifice",
      "d) Area of the orifice"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The frictional effect between different layers of a flowing fluid is described in terms of:",
    "options": [
      "a) Density",
      "b) Pressure",
      "c) Viscosity",
      "d) Surface tension"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Substances that do not flow easily, like thick tar and honey, have:",
    "options": [
      "a) Low viscosity",
      "b) Zero viscosity",
      "c) Large coefficients of viscosity",
      "d) High density"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Stokes' law describes the viscous drag force ($F_d$) on a spherical object of radius r moving with velocity v through a fluid with viscosity η as:",
    "options": [
      "a) $F_d = 2\\pi\\eta vr$",
      "b) $F_d = 6\\pi\\eta vr$",
      "c) $F_d = 4\\pi\\eta vr$",
      "d) $F_d = \\pi\\eta r^2$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Terminal velocity is reached when the downward force of gravity (weight) on an object is balanced by:",
    "options": [
      "a) The applied force and buoyant force.",
      "b) Only the viscous drag force.",
      "c) The buoyant force and the viscous drag force.",
      "d) The kinetic energy of the fluid."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "A fluid that does not have viscosity and cannot be compressed is called:",
    "options": [
      "a) Real fluid",
      "b) Superfluid",
      "c) Ideal fluid",
      "d) Non-Newtonian fluid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "All types of fluids that possess viscosity are termed as:",
    "options": [
      "a) Ideal fluids",
      "b) Superfluids",
      "c) Real fluids",
      "d) Non-Newtonian fluids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Superfluidity is the characteristic property of fluids with:",
    "options": [
      "a) High viscosity",
      "b) Low density",
      "c) Zero viscosity",
      "d) High surface tension"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "At what conditions is superfluidity achieved in some substances?",
    "options": [
      "a) High pressures",
      "b) Extremely low temperatures",
      "c) High velocities",
      "d) Low density"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Which of the following is a defining characteristic of a superfluid?",
    "options": [
      "a) Infinite density",
      "b) Zero temperature",
      "c) Infinite thermal conductivity",
      "d) Zero viscosity"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 48,
    "questionText": "Which of the following is more elastic?",
    "options": [
      "a) Rubber",
      "b) Wood",
      "c) Sponge",
      "d) Steel"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 49,
    "questionText": "The principle of floatation is a direct application of:",
    "options": [
      "a) Pascal's law",
      "b) Bernoulli's principle",
      "c) Archimedes' principle",
      "d) Newton's third law"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "In medical field, a Venturi mask, used to deliver a known oxygen concentration to patients, operates based on:",
    "options": [
      "a) Newton's third law",
      "b) Archimedes' principle",
      "c) Pascal's law",
      "d) Bernoulli's principle"
    ],
    "correctAnswer": "d"
  }
],
    "Heat and Thermodynamics": [
  {
    "id": 1,
    "questionText": "Which of the following is NOT an assumption of the kinetic theory of gases?",
    "options": [
      "a) Gas particles are in constant, random motion.",
      "b) The volume of individual gas molecules is negligible.",
      "c) There are strong attractive forces between gas molecules.",
      "d) Collisions between gas molecules are perfectly elastic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "According to the kinetic theory of gases, the average kinetic energy of gas particles is directly proportional to the:",
    "options": [
      "a) Pressure of the gas.",
      "b) Volume of the gas.",
      "c) Absolute temperature of the gas.",
      "d) Number of gas particles."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "The ideal gas equation can be written as $PV = nRT$. What does 'n' represent?",
    "options": [
      "a) Number of particles",
      "b) Number of atoms",
      "c) Number of moles of the gas",
      "d) Newton's constant"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "The Boltzmann constant ($k_b$) is related to the universal gas constant (R) and Avogadro's number ($N_A$) by which equation?",
    "options": [
      "a) $k_b = R \\times N_A$",
      "b) $k_b = R / N_A$",
      "c) $k_b = N_A / R$",
      "d) $k_b = R + N_A$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is the approximate value of the Boltzmann constant?",
    "options": [
      "a) $1.38 \\times 10^{-23} J K^{-1}$",
      "b) $1.38 \\times 10^{-19} J K^{-1}$",
      "c) $1.38 \\times 10^{23} J K^{-1}$",
      "d) $1.38 \\times 10^{-20} J K^{-1}$"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 6,
    "questionText": "When two bodies are at the same temperature, they are said to be in:",
    "options": [
      "a) Mechanical equilibrium",
      "b) Chemical equilibrium",
      "c) Thermal equilibrium",
      "d) Dynamic equilibrium"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What happens to the net heat flow between two bodies when they reach thermal equilibrium?",
    "options": [
      "a) Heat flows only from the hotter body to the colder body.",
      "b) Heat flows only from the colder body to the hotter body.",
      "c) There is no net heat flow between them.",
      "d) Heat flow becomes infinite."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "The sum of all forms of molecular energies (kinetic and potential) of a substance is termed as its:",
    "options": [
      "a) External energy",
      "b) Work energy",
      "c) Internal energy",
      "d) Heat energy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "For an ideal gas system, the internal energy is directly proportional to its:",
    "options": [
      "a) Pressure",
      "b) Volume",
      "c) Number of moles",
      "d) Temperature"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "In thermodynamics, work done by the system on its environment is considered:",
    "options": [
      "a) Positive",
      "b) Negative",
      "c) Zero",
      "d) Dependent on internal energy"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "If a gas expands and does work W, and an amount of heat Q is supplied to the gas, what is the change in internal energy (ΔU)?",
    "options": [
      "a) $ΔU = Q + W$",
      "b) $ΔU = Q - W$",
      "c) $ΔU = W - Q$",
      "d) $ΔU = Q / W$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The first law of thermodynamics is essentially a statement of the:",
    "options": [
      "a) Conservation of momentum",
      "b) Conservation of charge",
      "c) Conservation of energy",
      "d) Conservation of mass"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is an isothermal process?",
    "options": [
      "a) A process where no heat enters or leaves the system.",
      "b) A process where the pressure remains constant.",
      "c) A process where the temperature of the system remains constant.",
      "d) A process where the volume remains constant."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "For an isothermal process involving an ideal gas, what is the change in internal energy (ΔU)?",
    "options": [
      "a) $ΔU > 0$",
      "b) $ΔU < 0$",
      "c) $ΔU = 0$",
      "d) $ΔU$ is infinite"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is an adiabatic process?",
    "options": [
      "a) A process where heat is added to the system.",
      "b) A process where no heat enters or leaves the system.",
      "c) A process where temperature remains constant.",
      "d) A process where work done is zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Which of the following is an example of an adiabatic process?",
    "options": [
      "a) Boiling water in a pot.",
      "b) The rapid escape of air from a burst tyre.",
      "c) Melting ice in a room.",
      "d) Heating a metal rod."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "A process that cannot be retraced in the backward direction by reversing the controlling factors is called:",
    "options": [
      "a) Reversible process",
      "b) Isothermal process",
      "c) Adiabatic process",
      "d) Irreversible process"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "What is the primary function of a heat engine?",
    "options": [
      "a) To maintain a constant temperature.",
      "b) To convert mechanical work into heat.",
      "c) To convert thermal energy to mechanical work.",
      "d) To store heat energy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "According to Lord Kelvin's statement of the second law of thermodynamics, it is impossible to devise a process which may entirely convert heat extracted from a single reservoir into:",
    "options": [
      "a) Chemical energy",
      "b) Internal energy",
      "c) Work",
      "d) Potential energy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "For the working of a heat engine, there must be:",
    "options": [
      "a) Only a source of heat at high temperature.",
      "b) Only a sink at low temperature.",
      "c) A source of heat at a high temperature and a sink at low temperature.",
      "d) No heat reservoirs."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What types of processes does a Carnot cycle ideally use?",
    "options": [
      "a) Only isothermal processes",
      "b) Only adiabatic processes",
      "c) Isothermal and isobaric processes",
      "d) Isothermal and adiabatic processes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 22,
    "questionText": "The efficiency of a Carnot engine (η) operating between a hot reservoir at $T_1$ and a cold reservoir at $T_2$ is given by:",
    "options": [
      "a) $\\eta = T_1 / T_2$",
      "b) $\\eta = T_2 / T_1$",
      "c) $\\eta = 1 - (T_2 / T_1)$",
      "d) $\\eta = (T_1 - T_2)$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "A Carnot engine can achieve 100% efficiency only if the cold reservoir is at:",
    "options": [
      "a) Room temperature",
      "b) Boiling point",
      "c) Absolute zero temperature ($T_2=0$ K)",
      "d) Melting point"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What is a refrigerator in thermodynamic terms?",
    "options": [
      "a) A device that converts electrical energy to heat.",
      "b) A heat engine operating in a cyclic process but in reverse.",
      "c) A device that produces work from heat.",
      "d) A device that only cools an object without expelling heat."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The coefficient of performance (COP) of a refrigerator is defined as the ratio of:",
    "options": [
      "a) Work done to heat removed from LTR.",
      "b) Heat removed from LTR to work done.",
      "c) Heat rejected to HTR to heat removed from LTR.",
      "d) Heat rejected to HTR to work done."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "The concept of entropy was introduced to give a quantitative basis for the:",
    "options": [
      "a) First law of thermodynamics",
      "b) Second law of thermodynamics",
      "c) Third law of thermodynamics",
      "d) Zeroth law of thermodynamics"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "If a system undergoes a reversible process during which it absorbs a quantity of heat ΔQ at absolute temperature T, the increase in entropy (ΔS) is given by:",
    "options": [
      "a) $ΔS = ΔQ \\times T$",
      "b) $ΔS = T / ΔQ$",
      "c) $ΔS = ΔQ / T$",
      "d) $ΔS = ΔQ - T$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "In all natural processes where heat flows from one system to another, there is always a net increase in:",
    "options": [
      "a) Internal energy",
      "b) Work done",
      "c) Entropy",
      "d) Temperature"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "An increase in entropy means:",
    "options": [
      "a) An increase in energy efficiency.",
      "b) Degradation of energy from a higher level to a lower level.",
      "c) Creation of new energy.",
      "d) Conservation of energy for useful work."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "In terms of particle motion, an increase in temperature of an object relates to:",
    "options": [
      "a) A decrease in the average kinetic energy of its particles.",
      "b) An increase in the average kinetic energy of its particles.",
      "c) No change in the kinetic energy of its particles.",
      "d) A decrease in the potential energy of its particles."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "A car's engine has an efficiency of 35-40%. This is less than 100% due to:",
    "options": [
      "a) The car's weight.",
      "b) The second law of thermodynamics.",
      "c) The car's speed.",
      "d) The type of fuel used."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The temperature of an ideal gas remains constant during an isothermal expansion. What is the relation between heat (Q) and work (W)?",
    "options": [
      "a) Q = 0",
      "b) W = 0",
      "c) Q = W",
      "d) Q = -W"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Which property of a real gas causes deviations from ideal gas behavior, especially at high pressures and low temperatures?",
    "options": [
      "a) Large number of particles.",
      "b) Negligible volume of particles.",
      "c) Intermolecular forces and finite molecular volume.",
      "d) Elastic collisions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "A gas is sealed in a cylinder by a weightless, frictionless piston. When the gas expands, the work done by the gas is given by:",
    "options": [
      "a) $W = P/ΔV$",
      "b) $W = PΔV$",
      "c) $W = ΔV/P$",
      "d) $W = P + ΔV$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "When a bicycle pump's handle is pushed rapidly, it becomes hot due to:",
    "options": [
      "a) Heat flowing into the pump from the surroundings.",
      "b) Mechanical work done on the gas, raising its internal energy.",
      "c) Increase in the volume of the gas.",
      "d) Chemical reactions inside the pump."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "According to the first law of thermodynamics, human metabolism can be described as:",
    "options": [
      "a) Only heat absorbed from the environment.",
      "b) Only work done by the body.",
      "c) Energy transformations that occur within an organism.",
      "d) No change in internal energy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "If 42 J of heat is transferred to a system and the system performs 32 J of work, what is the change in its internal energy?",
    "options": [
      "a) 74 J",
      "b) 10 J",
      "c) -10 J",
      "d) 42 J"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "The curve representing an isothermal process on a P-V diagram is called an:",
    "options": [
      "a) Adiabat",
      "b) Isochor",
      "c) Isotherm",
      "d) Isobar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The curve representing an adiabatic process on a P-V diagram is called an:",
    "options": [
      "a) Isotherm",
      "b) Isobar",
      "c) Adiabat",
      "d) Isochor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is the efficiency (η) of a heat engine that absorbs 500 J from a hot reservoir and expels 250 J to a cold reservoir?",
    "options": [
      "a) 25%",
      "b) 50%",
      "c) 75%",
      "d) 100%"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "A refrigerator extracts 1200 J of heat from its interior and releases 1800 J to the surroundings. What is the work input required per cycle?",
    "options": [
      "a) 600 J",
      "b) 1200 J",
      "c) 1800 J",
      "d) 3000 J"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "What is the coefficient of performance (COP) of the refrigerator in the previous question (extracts 1200 J, releases 1800 J)?",
    "options": [
      "a) 0.5",
      "b) 1",
      "c) 2",
      "d) 3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "When 1.0 kg of ice at 0°C melts into water at 0°C, the entropy change is positive. This indicates:",
    "options": [
      "a) A decrease in disorder of the system.",
      "b) An increase in disorder of the system.",
      "c) No change in the disorder of the system.",
      "d) A decrease in temperature."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Which of the following is NOT a fundamental assumption of the kinetic theory of gases regarding intermolecular forces?",
    "options": [
      "a) Particles exert no forces on each other except during collisions.",
      "b) There are no attractive forces between gas molecules.",
      "c) There are no repulsive forces between gas molecules.",
      "d) Strong intermolecular forces are present at high temperatures."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "The conservation principle underlying the first law of thermodynamics asserts that the total energy in an isolated system remains:",
    "options": [
      "a) Increasing over time",
      "b) Decreasing over time",
      "c) Constant over time",
      "d) Dependent on work done"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The first practical steam-engine was designed by:",
    "options": [
      "a) Sadi Carnot",
      "b) Rudolf Clausius",
      "c) John Savery",
      "d) Lord Kelvin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "How does an ideal gas behave at low pressure and high temperature?",
    "options": [
      "a) It deviates significantly from ideal behavior.",
      "b) It approaches ideal behavior.",
      "c) It becomes a liquid.",
      "d) It becomes a solid."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "A gas occupies 400 mL at 20°C. If the pressure remains constant, what volume will it occupy at 80°C?",
    "options": [
      "a) 400 mL",
      "b) 440 mL",
      "c) 482 mL",
      "d) 520 mL"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "A gas has a pressure of 2 atm at 300 K. Assuming constant volume, what pressure will it have at 450 K?",
    "options": [
      "a) 1 atm",
      "b) 2 atm",
      "c) 3 atm",
      "d) 4 atm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is the fundamental principle behind the working of a heat engine?",
    "options": [
      "a) Conversion of mechanical work into heat.",
      "b) Cyclic transfer of heat energy from a high to a low temperature reservoir, converting heat into work.",
      "c) Storage of heat energy for later use.",
      "d) Maintaining thermal equilibrium within a system."
    ],
    "correctAnswer": "b"
  }
],
    "Waves and Vibrations": [
  {
    "id": 1,
    "questionText": "A wave is a regular disturbance or variation that carries: ",
    "options": [
      "a) Mass",
      "b) Particles",
      "c) Energy",
      "d) Medium"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT a parameter used to describe waves?",
    "options": [
      "a) Amplitude",
      "b) Frequency",
      "c) Density",
      "d) Wavelength"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "The maximum displacement of the wave (or particles of the medium) from its equilibrium position is called:",
    "options": [
      "a) Wavelength",
      "b) Period",
      "c) Amplitude",
      "d) Frequency"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "The time taken by the wave to complete one oscillation or cycle is called the:",
    "options": [
      "a) Frequency",
      "b) Speed",
      "c) Wavelength",
      "d) Period"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "What is the relationship between wave speed ($v$), frequency ($f$), and wavelength ($λ$)?",
    "options": [
      "a) $v = f + λ$",
      "b) $v = f / λ$",
      "c) $v = f \\times λ$",
      "d) $v = λ / f$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which type of wave requires a physical medium to propagate?",
    "options": [
      "a) Electromagnetic waves",
      "b) Quantum waves",
      "c) Mechanical waves",
      "d) Surface waves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Sound waves are an example of what type of wave?",
    "options": [
      "a) Electromagnetic waves",
      "b) Transverse waves",
      "c) Mechanical waves",
      "d) Quantum waves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "In a transverse wave, the vibrations of the particles are:",
    "options": [
      "a) Parallel to the direction of energy travel.",
      "b) At right angles to the direction of energy travel.",
      "c) In the same direction as the wave speed.",
      "d) Independent of the wave direction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "The principle of superposition states that if a particle is simultaneously acted upon by two waves, the resultant displacement is the:",
    "options": [
      "a) Product of their individual displacements.",
      "b) Difference of their individual displacements.",
      "c) Algebraic sum of their individual displacements.",
      "d) Quotient of their individual displacements."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What phenomenon occurs when two waves, which overlap, have the same phase?",
    "options": [
      "a) Destructive interference",
      "b) Diffraction",
      "c) Constructive interference",
      "d) Refraction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "For constructive interference, the path difference (ΔS) between two waves is an integral multiple of the wavelength (λ). Which formula represents this?",
    "options": [
      "a) $ΔS = n + λ$",
      "b) $ΔS = nλ$",
      "c) $ΔS = (n + 1/2)λ$",
      "d) $ΔS = n / λ$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "For destructive interference, the path difference (ΔS) between two waves is given by:",
    "options": [
      "a) $ΔS = nλ$",
      "b) $ΔS = nλ/2$",
      "c) $ΔS = (2n + 1)λ/2$",
      "d) $ΔS = (n + 1)λ$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What phenomenon is used by noise-cancelling headphones to eliminate unwanted noise?",
    "options": [
      "a) Diffraction",
      "b) Reflection",
      "c) Principle of superposition",
      "d) Refraction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Stationary waves are formed by the superposition of two waves with:",
    "options": [
      "a) Different frequencies and amplitudes, travelling in the same direction.",
      "b) Same frequency and amplitude, travelling in the same direction.",
      "c) Same frequency and amplitude, travelling in opposite directions.",
      "d) Different frequencies and amplitudes, travelling in opposite directions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "In a stationary wave, points of zero amplitude are called:",
    "options": [
      "a) Antinodes",
      "b) Crests",
      "c) Nodes",
      "d) Troughs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "The distance between two consecutive nodes in a stationary wave is:",
    "options": [
      "a) $λ/4$",
      "b) $λ/2$",
      "c) $λ$",
      "d) $2λ$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "If a string fixed at both ends vibrates in one loop, its length ($l$) is equal to:",
    "options": [
      "a) $λ/4$",
      "b) $λ/2$",
      "c) $λ$",
      "d) $2λ$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "For a string fixed at both ends, the fundamental frequency ($f_1$) corresponds to the:",
    "options": [
      "a) Second harmonic",
      "b) First harmonic",
      "c) Third harmonic",
      "d) Overtones"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "In an organ pipe open at both ends, the ends behave as:",
    "options": [
      "a) Nodes",
      "b) Antinodes",
      "c) Half-nodes",
      "d) Quarter-nodes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "In an organ pipe closed at one end, the closed end behaves as a:",
    "options": [
      "a) Antinode",
      "b) Node",
      "c) Half-antinode",
      "d) Full antinode"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Which type of organ pipe is richer in harmonics?",
    "options": [
      "a) Pipe open at both ends",
      "b) Pipe closed at one end",
      "c) Both are equally rich",
      "d) Neither produces harmonics"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "Diffraction of waves is the bending of waves around:",
    "options": [
      "a) Smooth surfaces",
      "b) Sharp edges or corners of obstacles or spreading beyond a barrier.",
      "c) Reflective surfaces",
      "d) Different media"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Diffraction is most noticeable when the wavelength of the wave is:",
    "options": [
      "a) Much smaller than the obstacle.",
      "b) Much larger than the obstacle.",
      "c) Comparable in size to the obstacle or opening.",
      "d) Independent of the obstacle size."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What is the phenomenon where a periodic variation of sound loudness occurs due to two waves of slightly different frequencies overlapping?",
    "options": [
      "a) Interference",
      "b) Diffraction",
      "c) Beats",
      "d) Refraction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The number of beats per second is equal to the:",
    "options": [
      "a) Sum of the frequencies of the two tuning forks.",
      "b) Product of the frequencies of the two tuning forks.",
      "c) Difference between the frequencies of the two tuning forks.",
      "d) Average of the frequencies of the two tuning forks."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "What does intensity (I) of a wave represent?",
    "options": [
      "a) The total energy of the wave.",
      "b) The wavelength of the wave.",
      "c) The amount of energy transmitted per unit area per unit time.",
      "d) The speed of the wave."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The intensity (I) of a progressive wave is proportional to the:",
    "options": [
      "a) Amplitude (A)",
      "b) Square of the amplitude ($A^2$)",
      "c) Cube of the amplitude ($A^3$)",
      "d) Square root of the amplitude ($\\sqrt{A}$)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "The Doppler effect explains that when a source of sound moves relative to a stationary observer, the observed frequency is:",
    "options": [
      "a) The same as the source frequency.",
      "b) Different from the source frequency.",
      "c) Always higher than the source frequency.",
      "d) Always lower than the source frequency."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "If a sound source moves towards a stationary observer, the observed frequency ($f'$) is given by:",
    "options": [
      "a) $f' = f(v / (v + u_s))$",
      "b) $f' = f(v / (v - u_s))$",
      "c) $f' = f((v + u_o) / v)$",
      "d) $f' = f((v - u_o) / v)$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Radar, sonar, astronomy, and medical applications are examples of the applications of the:",
    "options": [
      "a) Superposition principle",
      "b) Diffraction effect",
      "c) Doppler effect",
      "d) Beat phenomenon"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "If two waves of equal frequency are travelling in opposite directions, what phenomenon occurs?",
    "options": [
      "a) Interference",
      "b) Beats",
      "c) Stationary waves",
      "d) Diffraction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What kind of waves are radiowaves, microwaves, and visible light?",
    "options": [
      "a) Mechanical waves",
      "b) Longitudinal waves",
      "c) Electromagnetic waves",
      "d) Quantum waves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "A wave generator produces 500 pulses in 10 seconds. What is the frequency of the pulses?",
    "options": [
      "a) 5 Hz",
      "b) 10 Hz",
      "c) 50 Hz",
      "d) 100 Hz"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "The period (T) of the pulses in the previous question (500 pulses in 10 s) is:",
    "options": [
      "a) 0.5 s",
      "b) 0.2 s",
      "c) 0.1 s",
      "d) 0.02 s"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "Why does the sound produced by most string and wind musical instruments occur?",
    "options": [
      "a) Due to random vibrations.",
      "b) Due to the formation of stationary waves.",
      "c) Due to air resistance.",
      "d) Due to magnetic fields."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "A stationary wave is established in a string 1.2 m long, fixed at both ends. If it vibrates in four segments at 120 Hz, what is its wavelength?",
    "options": [
      "a) 0.3 m",
      "b) 0.6 m",
      "c) 1.2 m",
      "d) 2.4 m"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is the fundamental frequency of the string described in the previous question (1.2 m long, four segments, 120 Hz)?",
    "options": [
      "a) 120 Hz",
      "b) 60 Hz",
      "c) 30 Hz",
      "d) 15 Hz"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "The speed of waves in a string depends upon the:",
    "options": [
      "a) Amplitude of the wave.",
      "b) Point where the string is plucked.",
      "c) Tension (F) of the string and mass per unit length (m) of the string.",
      "d) Number of loops formed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "An organ pipe 50 cm long is open at both ends. If the speed of sound is 350 m/s, what is the frequency of its fundamental note?",
    "options": [
      "a) 175 Hz",
      "b) 350 Hz",
      "c) 525 Hz",
      "d) 700 Hz"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "An organ pipe 50 cm long is closed at one end. If the speed of sound is 350 m/s, what is the frequency of its fundamental note?",
    "options": [
      "a) 175 Hz",
      "b) 350 Hz",
      "c) 525 Hz",
      "d) 700 Hz"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 41,
    "questionText": "What is the lowest or fundamental frequency of all the harmonics called?",
    "options": [
      "a) Overtone",
      "b) First harmonic",
      "c) Partial",
      "d) Second harmonic"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Microwaves are a form of:",
    "options": [
      "a) Mechanical waves",
      "b) Sound waves",
      "c) Electromagnetic radiations",
      "d) Water waves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "In an experiment demonstrating stationary waves using microwaves, how can the wavelength of the stationary wave be found?",
    "options": [
      "a) By measuring the distance from the source to the reflector.",
      "b) By finding the distance from one antinode to the next antinode.",
      "c) By observing the frequency of the microwave source.",
      "d) By measuring the size of the metal plate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The bending of waves around sharp edges or corners of obstacles is known as:",
    "options": [
      "a) Refraction",
      "b) Reflection",
      "c) Interference",
      "d) Diffraction"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "What happens to the amplitude of energy when the amplitude of a wave is tripled?",
    "options": [
      "a) It increases 3 times.",
      "b) It increases 6 times.",
      "c) It increases 9 times.",
      "d) It increases 12 times."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The wavelength of a signal from a radio transmitter is 1500 m and the frequency is 200 kHz. What is the speed with which the radiowaves travel?",
    "options": [
      "a) $3.0 \\times 10^5 m/s$",
      "b) $3.0 \\times 10^8 m/s$",
      "c) $3.0 \\times 10^{11} m/s$",
      "d) $3.0 \\times 10^2 m/s$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Two trucks F' and Q are traveling in the same direction. Truck F' travels at 12 m/s, truck Q at 20 m/s. Q sounds its horn, which P's driver estimates has a frequency of 830 Hz. What is the speed of Q relative to P?",
    "options": [
      "a) 8 m/s",
      "b) 12 m/s",
      "c) 20 m/s",
      "d) 32 m/s"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 48,
    "questionText": "What is the typical frequency range of microwaves?",
    "options": [
      "a) $10^2 - 10^4 Hz$",
      "b) $10^4 - 10^7 Hz$",
      "c) $10^7 - 10^9 Hz$",
      "d) $10^9 - 10^{11} Hz$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 49,
    "questionText": "The difference between the frequencies of two waves in beats is called:",
    "options": [
      "a) Interference frequency",
      "b) Harmonic frequency",
      "c) Beat frequency",
      "d) Resonant frequency"
    ],
    "correctAnswer": "c"
  }
],
    "Physical Optics and Gravitational Waves": [
  {
    "id": 1,
    "questionText": "What phenomenon suggests that light waves are transverse in character?",
    "options": [
      "a) Interference",
      "b) Diffraction",
      "c) Polarization",
      "d) Refraction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Light waves produced by oscillating charges consist of a periodic variation of the electric field vector E accompanied by the magnetic field vector B at:",
    "options": [
      "a) Parallel to E",
      "b) Right angles to E",
      "c) 45 degrees to E",
      "d) In the same plane as E"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Ordinary light, having components of vibration in all possible planes, is called:",
    "options": [
      "a) Polarized light",
      "b) Monochromatic light",
      "c) Unpolarized light",
      "d) Coherent light"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Polarization is a property exhibited only by:",
    "options": [
      "a) Longitudinal waves",
      "b) Sound waves",
      "c) Transverse waves",
      "d) Quantum waves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Which of the following is NOT a method for polarizing light?",
    "options": [
      "a) Passing light through a polarizing filter.",
      "b) Reflection.",
      "c) Refraction.",
      "d) Heating the light source."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 6,
    "questionText": "Malus's Law states that the intensity of transmitted light (I) through an analyzer is given by:",
    "options": [
      "a) $I = I_0 sin^2(θ)$",
      "b) $I = I_0 cos^2(θ)$",
      "c) $I = I_0 tan^2(θ)$",
      "d) $I = I_0 / cos(θ)$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What does $I_0$ represent in Malus's Law?",
    "options": [
      "a) Intensity of unpolarized light.",
      "b) Intensity of light before passing through the analyzer.",
      "c) Intensity of light after passing through the analyzer.",
      "d) Intensity of reflected light."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Brewster's Law describes the condition for obtaining:",
    "options": [
      "a) Unpolarized light by reflection.",
      "b) Plane polarized light by reflection.",
      "c) Diffracted light.",
      "d) Interfered light."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "According to Brewster's Law, when the reflected light is almost plane polarized, the reflected and refracted beams are at:",
    "options": [
      "a) Parallel to each other.",
      "b) 45 degrees to each other.",
      "c) 90 degrees to each other.",
      "d) In the same direction."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Brewster's Law ($tanθ_p = n$) relates the polarizing angle ($θ_p$) to the:",
    "options": [
      "a) Wavelength of light.",
      "b) Amplitude of light.",
      "c) Refractive index of the medium.",
      "d) Speed of light."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Substances that rotate the plane of polarization of light passing through them are called:",
    "options": [
      "a) Optically inactive",
      "b) Optically active",
      "c) Polarizers",
      "d) Analyzers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What is the main purpose of polarized sunglasses?",
    "options": [
      "a) To enhance image sharpness.",
      "b) To reduce glare.",
      "c) To change the color of light.",
      "d) To increase light intensity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What technique uses polarized light to analyze stress and strain on materials like plastics and metals?",
    "options": [
      "a) Spectroscopy",
      "b) Photoelasticity",
      "c) Microscopy",
      "d) X-ray diffraction"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What is a gravitational wave?",
    "options": [
      "a) A type of electromagnetic wave.",
      "b) A stretching and compressing of space-time.",
      "c) A sound wave traveling through space.",
      "d) A wave generated by nuclear reactions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "Gravitational waves are generated by:",
    "options": [
      "a) Stationary masses.",
      "b) Masses moving at constant velocity.",
      "c) Accelerating masses.",
      "d) Light particles."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "At what speed do gravitational waves propagate?",
    "options": [
      "a) Speed of sound.",
      "b) Slower than the speed of light.",
      "c) Faster than the speed of light.",
      "d) The speed of light."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "Which of the following is a type of gravitational wave produced when a single massive object spins with a constant rate, such as a neutron star?",
    "options": [
      "a) Burst GWs",
      "b) Stochastic GWs",
      "c) Continuous GWs",
      "d) Compact Binary Inspiral GWs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What happens to a body's position in space-time when a gravitational wave passes through it?",
    "options": [
      "a) It remains unaffected.",
      "b) It experiences a constant acceleration.",
      "c) It stretches and compresses periodically.",
      "d) It rotates with the wave."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What are devices called that detect gravitational waves by making use of the interference of laser beams?",
    "options": [
      "a) Optical telescopes",
      "b) Radio telescopes",
      "c) Spectrometers",
      "d) Interferometers"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 20,
    "questionText": "What is the purpose of arm cavities in a LIGO interferometer?",
    "options": [
      "a) To block external interference.",
      "b) To enhance the laser light, increasing sensitivity.",
      "c) To generate gravitational waves.",
      "d) To measure temperature changes."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "The first direct detection of gravitational waves came from a collision between two:",
    "options": [
      "a) Planets",
      "b) Stars",
      "c) Black holes",
      "d) Galaxies"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Who received the Nobel Prize in 2017 for their work on the observation of gravitational waves?",
    "options": [
      "a) Albert Einstein",
      "b) Galileo Galilei",
      "c) Rainer Weiss, Barry C. Bartsk, and Kip S. Throne",
      "d) Isaac Newton"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "If gravitational waves have a wavelength of 4000 km, what is their frequency (given speed of light c = $3 \\times 10^8$ m/s)?",
    "options": [
      "a) 75 Hz",
      "b) 750 Hz",
      "c) $7.5 \\times 10^4 Hz$",
      "d) $7.5 \\times 10^5 Hz$"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 24,
    "questionText": "A galaxy is moving away from us at 0.2c. An Hα line normally emitted at 500 nm from this galaxy will be observed at:",
    "options": [
      "a) A shorter wavelength (blueshifted)",
      "b) The same wavelength",
      "c) A longer wavelength (redshifted)",
      "d) Dependent on the galaxy's mass"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The unwanted light that interferes with vision is termed as:",
    "options": [
      "a) Haze",
      "b) Glare",
      "c) Contrast",
      "d) Flare"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "When unpolarized light passes through a polarizer, the transmitted light will be:",
    "options": [
      "a) Still unpolarized.",
      "b) Plane polarized.",
      "c) Circularly polarized.",
      "d) Elliptically polarized."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "If an analyzer is rotated 90 degrees with respect to a polarizer, what happens to the intensity of light emerging from the analyzer?",
    "options": [
      "a) It increases.",
      "b) It remains the same.",
      "c) It becomes dimmer and ultimately disappears.",
      "d) It becomes brighter."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The particular angle of incidence on a transparent medium when the reflected light is almost plane polarized is called the:",
    "options": [
      "a) Angle of refraction",
      "b) Critical angle",
      "c) Polarizing angle",
      "d) Angle of incidence"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "If a polarizing filter reduces the intensity of unpolarized light by 85%, what angle is required between the direction of polarized light and the filter's axis?",
    "options": [
      "a) 30°",
      "b) 45°",
      "c) 60°",
      "d) 67.5°"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "Two polarizing sheets have their polarizing directions parallel. If either sheet is rotated so the intensity is dropped by half, what is the angle of rotation?",
    "options": [
      "a) 30°",
      "b) 45°",
      "c) 60°",
      "d) 90°"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "If gravitational waves have a wavelength of 3000 km, what is their frequency (speed of light = $3 \\times 10^8$ m/s)?",
    "options": [
      "a) 100 Hz",
      "b) 1000 Hz",
      "c) 10 Hz",
      "d) 1 Hz"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "The process where a particle meets its corresponding anti-particle and they undergo reactions where mass is converted to energy or new sub-atomic particles is called:",
    "options": [
      "a) Pair production",
      "b) Nuclear fusion",
      "c) Annihilation reaction",
      "d) Radioactive decay"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What is the primary method used to detect gravitational waves?",
    "options": [
      "a) Optical telescopes",
      "b) Radio telescopes",
      "c) LASER interferometry",
      "d) Gravitational lensing"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "A binary system in the context of gravitational waves refers to:",
    "options": [
      "a) A system with two black holes.",
      "b) A system with two neutron stars.",
      "c) A system with two compact objects orbiting each other and emitting GWs.",
      "d) A system with two stars emitting light."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The characteristics of gravitational waves depend on the system's properties such as:",
    "options": [
      "a) Mass of the objects.",
      "b) Orbital period and frequency.",
      "c) Eccentricity of the orbit.",
      "d) All of the above."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 36,
    "questionText": "Optical activity is measured by the:",
    "options": [
      "a) Type of substance.",
      "b) Concentration of the substance.",
      "c) Length of the path.",
      "d) All of the above."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "A polarized light with an amplitude of 5 units passes through a polarizer with its electric field aligned at 60° to the original polarization direction. What is the amplitude of the transmitted light?",
    "options": [
      "a) 5 units",
      "b) 4.33 units",
      "c) 2.5 units",
      "d) 0 units"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "If unpolarized light of intensity $I_0$ is incident on a polarizing sheet, what is the intensity of light that does not get transmitted?",
    "options": [
      "a) 0",
      "b) $I_0/2$",
      "c) $I_0$",
      "d) $I_0/\\sqrt{2}$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The LIGO interferometer consists of two arms of:",
    "options": [
      "a) 1 km",
      "b) 2 km",
      "c) 3 km",
      "d) 4 km"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 40,
    "questionText": "Virgo, another facility for measuring gravitational waves, has two arms of:",
    "options": [
      "a) 1 km",
      "b) 2 km",
      "c) 3 km",
      "d) 4 km"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What is the effect of increasing the angle between the light wave and the analyzer on the intensity of light?",
    "options": [
      "a) The intensity increases.",
      "b) The intensity decreases.",
      "c) The intensity remains the same.",
      "d) The intensity becomes zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What is the condition for maximum intensity of light in a polarization experiment?",
    "options": [
      "a) The light wave and analyzer are perpendicular.",
      "b) The light wave and analyzer are parallel.",
      "c) The light wave and analyzer are at an angle of 45°.",
      "d) The light wave and analyzer are at an angle of 60°."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which of the following is a primary source of gravitational waves?",
    "options": [
      "a) Solar flares",
      "b) Earthquake",
      "c) Binary black hole merger",
      "d) Solar wind"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "When an unpolarized light of intensity 15 $Wm^{-2}$ is incident on a pair of polarizers, the first filter has its transmission axis at 50° from the vertical. What is the intensity of light transmitted after the first polarizer?",
    "options": [
      "a) 15 $Wm^{-2}$",
      "b) 7.5 $Wm^{-2}$",
      "c) 5.8 $Wm^{-2}$",
      "d) 0 $Wm^{-2}$"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "An electric field vector E in a light wave is accompanied by a magnetic field vector B. The relationship between E and B is that they are:",
    "options": [
      "a) Parallel.",
      "b) Perpendicular.",
      "c) In the same direction.",
      "d) In the same phase."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Who discovered that polarized light is obtained when ordinary light is reflected by a plane sheet of glass?",
    "options": [
      "a) Isaac Newton",
      "b) James Clerk Maxwell",
      "c) Étienne-Louis Malus",
      "d) Albert Einstein"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "The Fabry-Perot cavity in an interferometer is used to:",
    "options": [
      "a) Block out all light.",
      "b) Reflect the beams directly.",
      "c) Enhance the path length of the laser light.",
      "d) Convert light into electrical signals."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "The tidal forces caused by gravitational waves are a result of the waves':",
    "options": [
      "a) High frequency.",
      "b) Oscillating nature.",
      "c) Constant amplitude.",
      "d) Fast speed."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What is the main characteristic of continuous gravitational waves?",
    "options": [
      "a) They have rapidly changing frequency and amplitude.",
      "b) They are produced by sudden violent events.",
      "c) They are produced with a constant frequency and amplitude.",
      "d) They are weak, random signals."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is the effect of a gravitational wave passing a body on its space-time?",
    "options": [
      "a) It causes a permanent change in shape.",
      "b) It causes uniform expansion.",
      "c) It causes periodic stretching and compressing.",
      "d) It has no effect on the body itself."
    ],
    "correctAnswer": "c"
  }
],
    "Electrostatics and Current Electricity": [
  {
    "id": 1,
    "questionText": "The smallest amount of free charge that has been discovered is:",
    "options": [
      "a) 1 Coulomb",
      "b) $1.6 \\times 10^{-19}$ C",
      "c) $9.1 \\times 10^{-31}$ C",
      "d) $6.02 \\times 10^{23}$ C"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Electrostatics is the study of phenomena and properties of electric charges:",
    "options": [
      "a) In motion",
      "b) At rest",
      "c) In acceleration",
      "d) In a magnetic field"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Coulomb's Law states that the force between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the:",
    "options": [
      "a) Sum of their distances.",
      "b) Square of the distance between them.",
      "c) Cube of the distance between them.",
      "d) Product of their distances."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "The constant 'k' in Coulomb's Law ($F = k q_1 q_2 / r^2$) has a value of approximately:",
    "options": [
      "a) $9 \\times 10^9 Nm^2 C^{-2}$",
      "b) $9 \\times 10^{-9} Nm^2 C^{-2}$",
      "c) $8.85 \\times 10^{-12} Nm^2 C^{-2}$",
      "d) $1.6 \\times 10^{-19} Nm^2 C^{-2}$"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 5,
    "questionText": "The presence of a dielectric medium between two charges always:",
    "options": [
      "a) Increases the electrostatic force.",
      "b) Reduces the electrostatic force.",
      "c) Has no effect on the electrostatic force.",
      "d) Converts the electrostatic force to magnetic force."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "Electric field intensity (E) at any point is defined as the force experienced by a:",
    "options": [
      "a) Unit negative charge placed at that point.",
      "b) Unit positive charge placed at that point.",
      "c) Neutral particle placed at that point.",
      "d) Moving charge placed at that point."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "The SI unit of electric intensity is:",
    "options": [
      "a) Joule per Coulomb (J/C)",
      "b) Newton per meter (N/m)",
      "c) Newton per Coulomb (N/C)",
      "d) Volt per second (V/s)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Electric field lines originate from:",
    "options": [
      "a) Negative charges and end on positive charges.",
      "b) Positive charges and end on negative charges.",
      "c) Both positive and negative charges, ending at infinity.",
      "d) Infinity and end on charges."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Which of the following is a property of electric field lines?",
    "options": [
      "a) They can cross each other.",
      "b) They are closer where the field is weak.",
      "c) The tangent to a field line at any point gives the direction of the electric field.",
      "d) They only exist in two dimensions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The number of electric field lines passing through a certain element of area is known as:",
    "options": [
      "a) Electric potential",
      "b) Electric current",
      "c) Electric flux",
      "d) Electric intensity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "The SI unit of electric flux is:",
    "options": [
      "a) Joules (J)",
      "b) Coulombs (C)",
      "c) Newton meters squared per Coulomb ($Nm^2 C^{-1}$)",
      "d) Volts (V)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Gauss's Law states that the total electric flux through any closed surface is proportional to the:",
    "options": [
      "a) Surface area of the enclosure.",
      "b) Volume of the enclosure.",
      "c) Total charge enclosed in it.",
      "d) Electric field intensity outside it."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The electric potential at any point in an electric field is equal to the work done in bringing a unit positive charge from infinity to that point, keeping:",
    "options": [
      "a) Constant speed.",
      "b) Electrostatic equilibrium.",
      "c) Zero work.",
      "d) Maximum kinetic energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "The SI unit of potential difference (volt) is defined as:",
    "options": [
      "a) 1 Newton per meter.",
      "b) 1 Joule per second.",
      "c) 1 Joule per Coulomb.",
      "d) 1 Coulomb per second."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "The electric field intensity is equal to the negative of the:",
    "options": [
      "a) Electric flux.",
      "b) Electric potential.",
      "c) Potential gradient.",
      "d) Work done."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "One electron-volt (1 eV) is defined as:",
    "options": [
      "a) The charge of one electron.",
      "b) The potential difference of one volt.",
      "c) The amount of energy acquired or lost by an electron as it traverses a potential difference of one volt.",
      "d) The kinetic energy of an electron in vacuum."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is the value of 1 electron-volt in Joules?",
    "options": [
      "a) $1.6 \\times 10^{-19}$ J",
      "b) 1 J",
      "c) $9.1 \\times 10^{-31}$ J",
      "d) $6.02 \\times 10^{23}$ J"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 18,
    "questionText": "A Faraday cage is an enclosure that blocks:",
    "options": [
      "a) Magnetic fields.",
      "b) External electric fields.",
      "c) Sound waves.",
      "d) Heat transfer."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "At equilibrium under electrostatic conditions, any excess charge on a conductor resides:",
    "options": [
      "a) In the interior of the conductor.",
      "b) On the surface of the conductor.",
      "c) In the core of the conductor.",
      "d) Is evenly distributed throughout the volume."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the typical drift velocity of free electrons in a conductor?",
    "options": [
      "a) Order of $10^8 m/s$",
      "b) Order of $10^{-3} m/s$",
      "c) Order of 1 m/s",
      "d) Order of $10^{-6} m/s$"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "The SI unit of electric current is:",
    "options": [
      "a) Coulomb",
      "b) Volt",
      "c) Ampere",
      "d) Ohm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What is the direction of conventional current?",
    "options": [
      "a) From negative terminal to positive terminal.",
      "b) From positive terminal to negative terminal.",
      "c) Randomly changing direction.",
      "d) Perpendicular to the electric field."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Ohm's Law states that the current flowing through a conductor is directly proportional to the potential difference applied across it, provided:",
    "options": [
      "a) The conductor is very long.",
      "b) There is a change in the physical state of the conductor.",
      "c) There is no change in the physical state of the conductor.",
      "d) The temperature of the conductor increases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The SI unit of resistance is:",
    "options": [
      "a) Volt (V)",
      "b) Ampere (A)",
      "c) Ohm (Ω)",
      "d) Watt (W)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The resistivity of a substance depends upon the:",
    "options": [
      "a) Length of the wire.",
      "b) Cross-sectional area of the wire.",
      "c) Temperature.",
      "d) Current flowing through it."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "For metallic conductors, the resistance typically:",
    "options": [
      "a) Decreases with increasing temperature.",
      "b) Increases with increasing temperature.",
      "c) Remains constant with temperature.",
      "d) First decreases then increases with temperature."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "The fractional change in resistance per Kelvin is known as the:",
    "options": [
      "a) Resistivity.",
      "b) Conductivity.",
      "c) Temperature coefficient of resistance.",
      "d) Ohm's constant."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Electrical power (P) delivered from a source of current (I) operating on a voltage (V) is given by:",
    "options": [
      "a) P = I / V",
      "b) P = V / I",
      "c) P = V \\times I",
      "d) P = V + I"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Which of the following is an alternative equation for calculating power dissipated in a resistor?",
    "options": [
      "a) $P = V/R$",
      "b) $P = I^2/R$",
      "c) $P = V^2/R$",
      "d) $P = I/V$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Electromotive force (emf, ε) of a source is defined as the:",
    "options": [
      "a) Force exerted by the battery on charges.",
      "b) Energy supplied to unit charge by the cell.",
      "c) Potential difference across an external resistor.",
      "d) Current flowing through the circuit."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "The internal resistance of a cell is due to:",
    "options": [
      "a) The external circuit.",
      "b) The electrolyte and electrodes of the cell.",
      "c) The voltage applied.",
      "d) The current flowing."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Kirchhoff's First Rule (Junction Rule) is a manifestation of the law of:",
    "options": [
      "a) Conservation of energy.",
      "b) Conservation of momentum.",
      "c) Conservation of charge.",
      "d) Conservation of mass."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Kirchhoff's Second Rule (Loop Rule) is a manifestation of the law of:",
    "options": [
      "a) Conservation of charge.",
      "b) Conservation of energy.",
      "c) Conservation of momentum.",
      "d) Conservation of current."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "For a balanced Wheatstone bridge, the condition for no current flowing through the galvanometer is:",
    "options": [
      "a) $R_1 + R_3 = R_2 + R_4$",
      "b) $R_1 \\times R_2 = R_3 \\times R_4$",
      "c) $R_1 / R_2 = R_3 / R_4$",
      "d) $R_1 - R_2 = R_3 - R_4$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "A potentiometer is mainly used to:",
    "options": [
      "a) Measure current directly.",
      "b) Compare potential differences and find unknown resistance.",
      "c) Generate electric fields.",
      "d) Create magnetic fields."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "An ideal voltmeter would have:",
    "options": [
      "a) Zero resistance.",
      "b) Infinite resistance.",
      "c) Low resistance.",
      "d) Resistance equal to the circuit resistance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "A galvanometer is often used in what kind of method to achieve precise electrical measurements?",
    "options": [
      "a) Direct measurement method.",
      "b) Null method.",
      "c) Comparison method.",
      "d) Digital method."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Most thermistors have a negative temperature coefficient of resistance, meaning their resistance:",
    "options": [
      "a) Increases when their temperature is increased.",
      "b) Decreases when their temperature is increased.",
      "c) Remains constant with temperature changes.",
      "d) Is independent of temperature."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Thermistors are commonly used in:",
    "options": [
      "a) Current amplifiers.",
      "b) Voltage regulators.",
      "c) Temperature sensors.",
      "d) Magnetic field detectors."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "A Light Dependent Resistor (LDR) is a resistor whose resistance:",
    "options": [
      "a) Increases with increasing light intensity.",
      "b) Decreases with increasing light intensity.",
      "c) Remains constant regardless of light intensity.",
      "d) Is inversely proportional to temperature."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "In darkness, the semiconductor material in an LDR has:",
    "options": [
      "a) Many free electrons, resulting in low resistance.",
      "b) Few free electrons, resulting in high resistance.",
      "c) No free electrons, resulting in infinite resistance.",
      "d) Both free electrons and holes, resulting in moderate resistance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What happens when light photons hit the material of an LDR?",
    "options": [
      "a) They cause the material to heat up.",
      "b) They increase the resistance of the LDR.",
      "c) They transfer energy to electrons, making them free to conduct electricity.",
      "d) They create a magnetic field."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Two parallel metal plates are 1.0 cm apart and connected to a 12-volt battery. What is the magnitude of the electric field intensity between them?",
    "options": [
      "a) 12 N/C",
      "b) 120 N/C",
      "c) 1200 N/C",
      "d) 12000 N/C"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "An electron is released from the negative plate of a 12-volt battery connected to two parallel plates 1.0 cm apart. What is the kinetic energy gained by the electron as it reaches the positive plate?",
    "options": [
      "a) 12 eV",
      "b) $1.6 \\times 10^{-19}$ J",
      "c) 1 eV",
      "d) $1.6 \\times 10^{-19}$ C"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 45,
    "questionText": "What does the negative sign in $E = -ΔV/Δd$ indicate?",
    "options": [
      "a) The electric field is decreasing in magnitude.",
      "b) The direction of E is opposite to the potential gradient.",
      "c) The electric potential is negative.",
      "d) The work done is negative."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the resistance of a conductor if a current of 1 ampere flows through it when a potential difference of 1 volt is applied across its ends?",
    "options": [
      "a) 0.5 Ohm",
      "b) 1 Ohm",
      "c) 2 Ohm",
      "d) 10 Ohm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "A copper wire of length L has resistance R. If it is stretched to double its length, its cross-sectional area becomes half. What will be the resistance of the new wire?",
    "options": [
      "a) R/2",
      "b) R",
      "c) 2R",
      "d) 4R"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 48,
    "questionText": "A battery is rated at 100 Ah (ampere-hour). How much charge can this battery supply?",
    "options": [
      "a) 100 Coulombs",
      "b) 3600 Coulombs",
      "c) $3.6 \\times 10^5$ Coulombs",
      "d) $3.6 \\times 10^7$ Coulombs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the net flux through an uncharged conducting hollow sphere placed in the field of a positive charge q located outside the sphere?",
    "options": [
      "a) $q/ε_0$",
      "b) $-q/ε_0$",
      "c) 0",
      "d) Dependent on the sphere's radius."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The emf (ε) of a battery is 12 V. It is connected to a 3.6 Ω resistor. If the internal resistance of the battery is 0.2 Ω, what will be the terminal voltage across the battery?",
    "options": [
      "a) 12 V",
      "b) 11.4 V",
      "c) 0.6 V",
      "d) 3.6 V"
    ],
    "correctAnswer": "b"
  }
],
    "Electromagnetism": 
  [
  {
    "id": 1,
    "questionText": "Which statement describes the force experienced by a current-carrying conductor in a magnetic field?",
    "options": [
      "a) It is directly proportional to the square of the current",
      "b) It is inversely proportional to the length of the conductor",
      "c) It is directly proportional to the current, length, and strength of the external magnetic field",
      "d) It is always zero if the conductor is not moving"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "According to Fleming's left-hand rule, if the first finger points in the direction of the magnetic field and the second finger points in the direction of the current, what does the thumb indicate?",
    "options": [
      "a) The direction of the magnetic flux",
      "b) The direction of the force",
      "c) The direction of the electric field",
      "d) The direction of the conductor's velocity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What is the SI unit of magnetic field strength (magnetic induction B)?",
    "options": [
      "a) Weber (Wb)",
      "b) Tesla (T)",
      "c) Ampere (A)",
      "d) Newton per coulomb (NC⁻¹)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "When is the force on a current-carrying conductor in a magnetic field maximum?",
    "options": [
      "a) When the conductor is parallel to the magnetic field (θ = 0°)",
      "b) When the conductor makes an angle of 45° with the field",
      "c) When the conductor is perpendicular to the magnetic field (θ = 90°)",
      "d) When the current in the conductor is very small"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "A 20.0 cm wire carrying 10.0 A current is placed in a 0.30 T uniform magnetic field. If the wire makes an angle of 40° with the field, what is the magnitude of the force acting on the wire?",
    "options": [
      "a) 0.60 N",
      "b) 0.39 N",
      "c) 0.20 N",
      "d) 1.20 N"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What is magnetic flux (Φ)?",
    "options": [
      "a) The force acting per unit current per unit length on a wire",
      "b) The number of magnetic lines passing through a patch of area",
      "c) The product of magnetic field strength and magnetic flux density",
      "d) The change in magnetic field over time"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What is the SI unit of magnetic flux?",
    "options": [
      "a) Tesla (T)",
      "b) Weber (Wb)",
      "c) Tesla per square meter (Tm⁻²)",
      "d) Newton-meter per ampere (Nm A⁻¹)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Magnetic induction (B) is also known as what?",
    "options": [
      "a) Magnetic field intensity",
      "b) Magnetic permeability",
      "c) Magnetic flux density",
      "d) Magnetic reluctance"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "If an area A is held parallel to the magnetic field lines (B), what is the magnetic flux (Φ) through that area?",
    "options": [
      "a) Φ = AB",
      "b) Φ = AB cosθ",
      "c) Φ = 0",
      "d) Φ = A/B"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Magnetic flux linkage is defined as the product of the magnetic flux through a coil and what other quantity?",
    "options": [
      "a) The current in the coil",
      "b) The resistance of the coil",
      "c) The number of turns in the coil",
      "d) The length of the coil"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Magnetic flux linkage plays a crucial role in the design and operation of which devices?",
    "options": [
      "a) Resistors and capacitors",
      "b) Transistors and diodes",
      "c) Transformers, electric motors, generators, and inductors",
      "d) Voltmeters and ammeters"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "A charged particle moving across a magnetic field experiences a force. What is the formula for the magnitude of this force?",
    "options": [
      "a) F = qE",
      "b) F = mv²/r",
      "c) F = qvB sinθ",
      "d) F = BIL"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "When is the force on a charged particle moving in a magnetic field maximum?",
    "options": [
      "a) When the velocity is parallel to the magnetic field (θ = 0°)",
      "b) When the velocity is perpendicular to the magnetic field (θ = 90°)",
      "c) When the particle is at rest",
      "d) When the charge of the particle is zero"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "An electron enters a uniform magnetic field perpendicularly with a speed of 10⁶ m s⁻¹. The magnetic field strength is 2.5 Wb m⁻². What path will the electron follow, and what is the radius of this path?",
    "options": [
      "a) Straight line, radius 0",
      "b) Circular path, radius $2.3 \\times 10^{-5}$ m",
      "c) Helical path, radius dependent on initial angle",
      "d) Parabolic path, radius $1.5 \\times 10^{-4}$ m"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is a velocity selector used for?",
    "options": [
      "a) To accelerate charged particles to high speeds",
      "b) To determine the charge of a charged particle",
      "c) To determine the velocity of a charged particle",
      "d) To measure the magnetic field strength"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "In a velocity selector, electric and magnetic forces are balanced. What is the formula for the selected velocity (v)?",
    "options": [
      "a) v = EB",
      "b) v = B/E",
      "c) v = E/B",
      "d) v = qE/B"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Alpha particles with speeds from 1000 m s⁻¹ to 2000 m s⁻¹ enter a velocity selector with electric intensity 300 V m⁻¹ and magnetic induction 0.20 T. Which particles will move undeviated?",
    "options": [
      "a) 1000 m s⁻¹",
      "b) 1500 m s⁻¹",
      "c) 2000 m s⁻¹",
      "d) All particles will be undeviated"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "A charged particle moves through a velocity selector with an electric field of $4.8 \\times 10^{3}$ N C⁻¹ and a magnetic field of 0.20 T. When the electric field is turned OFF, the particle moves in a circular path of radius 3.0 cm. What is the charge-to-mass ratio of the particle?",
    "options": [
      "a) $1.0 \\times 10^{8}$ C kg⁻¹",
      "b) $4.0 \\times 10^{8}$ C kg⁻¹",
      "c) $2.0 \\times 10^{8}$ C kg⁻¹",
      "d) $8.0 \\times 10^{8}$ C kg⁻¹"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "What is motional EMF?",
    "options": [
      "a) EMF induced by a stationary conductor in a changing magnetic field",
      "b) EMF induced by the motion of a conductor across a magnetic field",
      "c) EMF produced by a chemical reaction in a battery",
      "d) EMF caused by temperature changes in a conductor"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the formula for the magnitude of motional EMF induced in a conductor of length L moving with velocity v perpendicular to a magnetic field B?",
    "options": [
      "a) E = vB/L",
      "b) E = L/vB",
      "c) E = vBL",
      "d) E = qvB"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "A metal rod of length 25 cm is moving at a speed of 0.5 m s⁻¹ perpendicular to a 0.25 T magnetic field. What is the EMF produced in the rod?",
    "options": [
      "a) 0.0313 V",
      "b) 0.313 V",
      "c) 3.13 V",
      "d) 0.00313 V"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "What does Faraday's law of electromagnetic induction state?",
    "options": [
      "a) The induced EMF is directly proportional to the magnetic field strength",
      "b) The induced EMF is equal to the negative of the rate at which the magnetic flux through the coil is changing with time",
      "c) The induced current creates a magnetic field that reinforces the original magnetic field",
      "d) The induced EMF depends only on the number of turns in the coil"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "The minus sign in Faraday's law (ε = -N ΔΦ/Δt) is related to the direction of the induced EMF and is explained by which law?",
    "options": [
      "a) Ampere's Law",
      "b) Gauss's Law",
      "c) Ohm's Law",
      "d) Lenz's Law"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 24,
    "questionText": "What does Lenz's Law state about the direction of the induced current?",
    "options": [
      "a) It is always in the direction of the change that causes the current",
      "b) It is always perpendicular to the change that causes the current",
      "c) It is always such that it opposes the change that causes the current",
      "d) It is always constant regardless of the change"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "Lenz's law is a manifestation of which fundamental law?",
    "options": [
      "a) Law of conservation of momentum",
      "b) Law of conservation of charge",
      "c) Law of conservation of energy",
      "d) Newton's third law of motion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "A loop of wire is placed in a uniform magnetic field of 0.6 T perpendicular to its plane. The area of the loop shrinks at a constant rate of 0.8 m² s⁻¹. What is the magnitude of the EMF induced in the loop? (Assume N=1)",
    "options": [
      "a) 0.48 V",
      "b) 0.60 V",
      "c) 0.80 V",
      "d) 1.20 V"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 27,
    "questionText": "Which factor, according to Faraday's law, leads to a greater induced EMF?",
    "options": [
      "a) Slower changes in magnetic flux",
      "b) Fewer turns in the coil",
      "c) Faster changes in magnetic flux",
      "d) Stationary coil in a constant magnetic field"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What is a ferrofluid?",
    "options": [
      "a) A liquid that acts as a perfect insulator",
      "b) A material that exhibits both liquid and magnetic properties",
      "c) A solid that becomes liquid when a magnetic field is applied",
      "d) A fluid that permanently loses its magnetic properties in a magnetic field"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "How do ferrofluids respond when a magnet is brought nearby?",
    "options": [
      "a) The fluid is repelled by the magnet",
      "b) The particles are temporarily magnetized, and the fluid acts more like a solid",
      "c) The fluid freezes instantly",
      "d) The fluid undergoes a chemical reaction"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What prevents the nanoparticles in a ferrofluid from settling down?",
    "options": [
      "a) High density of the fluid",
      "b) Low surface tension",
      "c) Viscosity of the fluid, nanometre size of particles, and their constant movement",
      "d) Strong gravitational forces"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "In loudspeakers, ferrofluids are used for what purpose?",
    "options": [
      "a) To increase the overall weight of the speaker",
      "b) To cool the voice coil and dampen vibrations",
      "c) To generate the sound itself",
      "d) To act as an electrical insulator"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is a seismometer?",
    "options": [
      "a) An instrument that measures atmospheric pressure",
      "b) An instrument that detects movements of rocks under the ground or vibrations caused by earthquakes",
      "c) A device used to predict weather patterns",
      "d) A tool for measuring the Earth's magnetic field"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "How does a seismometer detect earthquakes?",
    "options": [
      "a) By measuring changes in temperature",
      "b) By converting ground motion into electrical signals using electromagnetic induction",
      "c) By directly observing visible ground cracks",
      "d) By detecting changes in light intensity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "In a seismometer, a weight suspended by a spring tends to stay stationary during an earthquake due to what principle?",
    "options": [
      "a) Gravity",
      "b) Magnetism",
      "c) Inertia",
      "d) Buoyancy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The induced current in a seismometer coil is proportional to what aspect of ground motion?",
    "options": [
      "a) Displacement",
      "b) Acceleration",
      "c) Velocity",
      "d) Jerk"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Which type of magnetic force interaction is responsible for holding the nuclei of atoms together?",
    "options": [
      "a) Gravitational force",
      "b) Electromagnetic force",
      "c) Weak nuclear force",
      "d) Strong nuclear force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "When a metal ring jumps upward as a switch is closed in a circuit with a coil, what phenomenon is occurring?",
    "options": [
      "a) Lenz's law",
      "b) Faraday's law",
      "c) Magnetic repulsion due to induced current",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "A current is flowing in a wire. The direction of the magnetic field lines around the wire would be:",
    "options": [
      "a) Parallel to the wire",
      "b) Perpendicular to the wire, forming concentric circles",
      "c) Random and unpredictable",
      "d) Only at the ends of the wire"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "If the plane of a coil is perpendicular to a uniform magnetic field, and the coil is pulled out of the field, what happens to the induced EMF?",
    "options": [
      "a) It becomes zero",
      "b) It is constant",
      "c) It is induced as the magnetic flux changes",
      "d) It acts to increase the magnetic flux"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "How does the direction of force on a current-carrying conductor in a magnetic field relate to both the conductor and the magnetic field?",
    "options": [
      "a) It is parallel to the conductor and perpendicular to the magnetic field",
      "b) It is perpendicular to both the conductor and the magnetic field",
      "c) It is parallel to the magnetic field and perpendicular to the conductor",
      "d) It is parallel to both the conductor and the magnetic field"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What happens to the magnetic force on a charged particle when it moves parallel to the magnetic field (θ = 0°)?",
    "options": [
      "a) It is maximum",
      "b) It is half of the maximum",
      "c) It is zero",
      "d) It is inversely proportional to velocity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "In Faraday's law, if a coil has N loops instead of a single loop, how does the induced EMF change?",
    "options": [
      "a) It remains the same",
      "b) It becomes N times smaller",
      "c) It becomes N times larger",
      "d) It depends on the resistance of the coil"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Which rule helps to determine the direction of force experienced by a current-carrying conductor in a magnetic field?",
    "options": [
      "a) Right-Hand Thumb Rule",
      "b) Maxwell's Corkscrew Rule",
      "c) Fleming's Left-Hand Rule",
      "d) Lenz's Right-Hand Rule"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "What is the primary function of the magnetic strip on an ATM card?",
    "options": [
      "a) To store chemical energy",
      "b) To display account information visually",
      "c) To store information encoded on magnetic domains",
      "d) To generate its own electric current"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What happens to the magnetic field of a current-carrying conductor and an external uniform magnetic field on the side where they reinforce each other?",
    "options": [
      "a) The conductor moves towards this side",
      "b) The conductor moves away from this side",
      "c) The magnetic field strength decreases",
      "d) The magnetic field strength remains unchanged"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the effect of increasing the relative speed between a coil/conductor and a magnetic field on the induced EMF?",
    "options": [
      "a) The induced EMF decreases",
      "b) The induced EMF remains constant",
      "c) The induced EMF increases",
      "d) The induced EMF becomes zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "How are induced currents and induced EMF related in terms of Lenz's Law?",
    "options": [
      "a) Lenz's Law directly applies to induced EMF, not current",
      "b) Lenz's Law applies specifically to induced currents, and from that, EMF direction can be inferred",
      "c) They are entirely unrelated in Lenz's Law",
      "d) Lenz's Law applies only to the magnitude of EMF and current"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "Which of the following describes the motion of a positively charged particle entering a uniform magnetic field at a right angle to it?",
    "options": [
      "a) It continues in a straight line",
      "b) It is deflected along a curved path",
      "c) It accelerates linearly in the direction of the field",
      "d) It stops immediately"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "In a velocity selector, the electric field (E) is oriented in what way relative to the magnetic field (B)?",
    "options": [
      "a) Parallel",
      "b) Anti-parallel",
      "c) Perpendicular",
      "d) At a 45-degree angle"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What happens to a moving charged particle that does NOT have the selected velocity in a velocity selector?",
    "options": [
      "a) It continues undeviated",
      "b) It is accelerated",
      "c) It is deflected and will not exit the right end of the tube",
      "d) It gains kinetic energy"
    ],
    "correctAnswer": "c"
  }
],
    "Special Theory of Relativity": [
  {
    "id": 1,
    "questionText": "The special theory of relativity addresses problems involving which type of frames of reference?",
    "options": [
      "a) Accelerating frames.",
      "b) Non-accelerating (inertial) frames.",
      "c) Rotating frames.",
      "d) Gravitational frames."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the first postulate of the special theory of relativity?",
    "options": [
      "a) The speed of light is constant in all frames.",
      "b) The laws of physics are the same in all inertial frames.",
      "c) Mass and energy are interconvertible.",
      "d) Time is an absolute quantity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What is the second postulate of the special theory of relativity?",
    "options": [
      "a) The laws of physics change for observers in relative motion.",
      "b) The speed of light in free space has the same value for all observers, regardless of the state of motion of the source or the observer.",
      "c) Objects cannot be accelerated to the speed of light.",
      "d) Time passes more slowly for a moving observer."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "According to the special theory of relativity, if two events are simultaneous for one observer in a certain location, how will they generally be observed by another observer in a different frame of reference moving relative to the first?",
    "options": [
      "a) They will also be simultaneous.",
      "b) They will generally not be observed as simultaneous.",
      "c) Only one event will be simultaneous.",
      "d) They will occur in reverse order."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What phenomenon describes time as not an absolute quantity, but dependent on the motion of the frame of reference?",
    "options": [
      "a) Length contraction.",
      "b) Mass variation.",
      "c) Time dilation.",
      "d) Relativity of simultaneity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "If a time interval $t_0$ is measured as proper time by a stationary observer, what is the time t measured by an observer moving with relativistic velocity v?",
    "options": [
      "a) $t = t_0 / (1 - v^2/c^2)$.",
      "b) $t = t_0 \\sqrt{1 - v^2/c^2}$.",
      "c) $t = t_0 / \\sqrt{1 - v^2/c^2}$.",
      "d) $t = t_0 (1 + v^2/c^2)$."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "The period of a pendulum is 3.0 s in its inertial reference frame. What is its period measured by an observer moving at 0.95c relative to the pendulum?",
    "options": [
      "a) 3.0 s.",
      "b) 9.6 s.",
      "c) 0.94 s.",
      "d) 1.5 s."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "According to the special theory of relativity, how does the mass of an object change with its speed?",
    "options": [
      "a) It remains constant.",
      "b) It decreases with increasing speed.",
      "c) It increases with increasing speed.",
      "d) It becomes zero at relativistic speeds."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What is the formula for the relativistic mass (m) of an object with rest mass ($m_0$) moving at speed (v)?",
    "options": [
      "a) $m = m_0 \\sqrt{1 - v^2/c^2}$.",
      "b) $m = m_0 / (1 - v^2/c^2)$.",
      "c) $m = m_0 / \\sqrt{1 - v^2/c^2}$.",
      "d) $m = m_0 (1 + v^2/c^2)$."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "As an object's speed (v) approaches the speed of light (c), what happens to its relativistic mass?",
    "options": [
      "a) It approaches zero.",
      "b) It remains constant.",
      "c) It approaches infinity.",
      "d) It becomes negative."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Why cannot an object be accelerated to the speed of light (c) in free space?",
    "options": [
      "a) Because it would require infinite energy.",
      "b) Because its length would contract to zero.",
      "c) Because its mass would become infinite, requiring infinite force.",
      "d) Because time would stop for the object."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "In everyday life, why are Newton's laws valid, despite relativistic effects?",
    "options": [
      "a) Relativistic effects are negligible at low speeds.",
      "b) Objects never reach relativistic speeds.",
      "c) Time dilation cancels out length contraction.",
      "d) Mass variation is only significant for photons."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 13,
    "questionText": "What does Einstein's mass-energy equivalence equation state?",
    "options": [
      "a) Mass and energy are separate and cannot be converted.",
      "b) Energy is conserved, but mass is not.",
      "c) Mass and energy are distinct entities but are interconvertible.",
      "d) The total energy is always greater than the rest mass energy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What is the formula relating total energy (E) and mass (m) of an object?",
    "options": [
      "a) $E = mv^2/2$.",
      "b) $E = mc^2$.",
      "c) $E = mgh$.",
      "d) $E = pc$."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the rest mass energy ($E_0$) of an object with rest mass ($m_0$)?",
    "options": [
      "a) $E_0 = m_0 v^2$.",
      "b) $E_0 = m_0 c^2$.",
      "c) $E_0 = (m - m_0)c^2$.",
      "d) $E_0 = mc^2$."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The kinetic energy (K.E.) of a relativistic mass (m) with rest mass ($m_0$) is given by what expression?",
    "options": [
      "a) $K.E. = 1/2 mv^2$.",
      "b) $K.E. = mc^2$.",
      "c) $K.E. = (m - m_0)c^2$.",
      "d) $K.E. = m_0 c^2$."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is the significance of the fact that $c^2$ is a very large quantity in the mass-energy equivalence equation?",
    "options": [
      "a) Small changes in mass require very large changes in energy.",
      "b) Large changes in mass require very small changes in energy.",
      "c) Mass and energy are completely independent.",
      "d) It only applies to macroscopic objects."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 18,
    "questionText": "In the theory of relativity, time is considered as what dimension?",
    "options": [
      "a) First dimension.",
      "b) Second dimension.",
      "c) Third dimension.",
      "d) Fourth dimension."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "What phenomenon described earlier in the chapter demonstrates that time passes more slowly for an observer moving at extremely high speeds compared to one at rest?",
    "options": [
      "a) Length contraction.",
      "b) Mass variation.",
      "c) Time dilation.",
      "d) Relativity of simultaneity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What concept explains the bending of light around massive objects like stars, linking space and time to gravity?",
    "options": [
      "a) Special theory of relativity.",
      "b) Quantum field theory.",
      "c) General theory of relativity.",
      "d) String theory."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "An electron is accelerated to a speed of 0.995c through an evacuated tube 500 m long. How long will the tube appear to the electron?",
    "options": [
      "a) 500 m.",
      "b) 50 m.",
      "c) 5 m.",
      "d) 100 m."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "A neutron disintegrates in 20 minutes on average when at rest. How long will it seem to exist if it shoots out from a nucleus with a speed of 0.8c?",
    "options": [
      "a) 20 minutes.",
      "b) 12 minutes.",
      "c) 33.3 minutes.",
      "d) 40 minutes."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "A spaceship is measured to be 100 m long while at rest. If it flies by an observer with a speed of 0.99c, what length will the observer measure for the spaceship?",
    "options": [
      "a) 100 m.",
      "b) 14 m.",
      "c) 50 m.",
      "d) 1 m."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "The rest mass of an electron is $9.11 \\times 10^{-31}$ kg. Calculate its corresponding rest-mass energy.",
    "options": [
      "a) $8.2 \\times 10^{-14}$ J.",
      "b) $9.11 \\times 10^{-31}$ J.",
      "c) $1.6 \\times 10^{-19}$ J.",
      "d) 0.51 MeV."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 25,
    "questionText": "At what speed would the mass of a proton in a particle accelerator be tripled?",
    "options": [
      "a) 0.5c.",
      "b) 0.707c.",
      "c) 0.866c.",
      "d) 0.943c."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "Hypothetically, if a ball of mass 0.5 kg is projected with a velocity of 0.9c, what will be its mass in flight?",
    "options": [
      "a) 0.5 kg.",
      "b) 0.75 kg.",
      "c) 1.15 kg.",
      "d) 2.0 kg."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What is an inertial frame of reference?",
    "options": [
      "a) A frame that is accelerating.",
      "b) A frame in which Newton's laws are invalid.",
      "c) A frame moving with uniform velocity relative to another.",
      "d) A frame with varying speed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What does the principle of relativity imply about detecting absolute uniform motion?",
    "options": [
      "a) It is easily detectable.",
      "b) It is impossible to detect.",
      "c) It depends on the observer's speed.",
      "d) It only applies to sound waves."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "When are relativistic effects most prominent?",
    "options": [
      "a) For macroscopic objects.",
      "b) For objects moving at very low speeds.",
      "c) For subatomic particles moving at velocities approaching the speed of light.",
      "d) For objects at rest."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "If an observer is moving with respect to a frame of events, how does the measured time interval compare to the proper time ($t_0$)?",
    "options": [
      "a) It is always shorter than $t_0$.",
      "b) It is always longer than $t_0$.",
      "c) It is always equal to $t_0$.",
      "d) It can be shorter or longer depending on direction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What is the effect of motion on the mass of an object as described by special relativity?",
    "options": [
      "a) Mass is conserved regardless of motion.",
      "b) Mass decreases for objects in motion.",
      "c) Mass increases for objects in motion.",
      "d) Mass only changes at speeds greater than light."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "The increase in mass at high speeds indicates an increase in what property of an object?",
    "options": [
      "a) Volume.",
      "b) Density.",
      "c) Inertia.",
      "d) Temperature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Can an electron be created from energy, according to Einstein's equation E = mc²?",
    "options": [
      "a) No, energy and mass are separate.",
      "b) Yes, if sufficient energy is available.",
      "c) Only if the electron is already present.",
      "d) Only if there is a corresponding anti-electron."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the primary difference in how classical physics and relativistic mechanics explain phenomena at very high velocities?",
    "options": [
      "a) Classical physics provides a more comprehensive framework.",
      "b) Relativistic mechanics offers a more comprehensive framework.",
      "c) Both explain it equally well.",
      "d) Neither theory can explain it."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "The relativity of simultaneity implies that whether two events are seen as simultaneous depends on what?",
    "options": [
      "a) The absolute time.",
      "b) The observer's frame of reference.",
      "c) The distance between the events.",
      "d) The type of events."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "A fundamental consequence of special relativity is the slowing down of clocks in moving reference frames. This is known as:",
    "options": [
      "a) Length contraction.",
      "b) Mass variation.",
      "c) Time dilation.",
      "d) Relativity of simultaneity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What happens to the length of an object in a moving reference frame as observed by a stationary observer?",
    "options": [
      "a) It remains constant.",
      "b) It increases.",
      "c) It contracts.",
      "d) It becomes infinite."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "What is the maximum possible speed for any object with non-zero rest mass in free space?",
    "options": [
      "a) Infinite.",
      "b) Greater than the speed of light.",
      "c) The speed of light.",
      "d) Less than the speed of light."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 39,
    "questionText": "What term is used to describe the three-dimensional extent in which all objects and events occur?",
    "options": [
      "a) Time.",
      "b) Space.",
      "c) Space-time.",
      "d) Dimension."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "How does special theory of relativity describe the relationship between space and time?",
    "options": [
      "a) They are independent entities.",
      "b) Space and time are influenced by gravity and speed.",
      "c) Space is absolute, time is relative.",
      "d) Time is absolute, space is relative."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is a non-inertial frame of reference?",
    "options": [
      "a) A frame moving at constant velocity.",
      "b) A frame that is accelerating.",
      "c) A frame in which all laws of physics are the same.",
      "d) A frame where the speed of light is constant."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "If the speed of light were just 50 $m s^{-1}$, how would everyday events appear to us?",
    "options": [
      "a) Faster than normal.",
      "b) Slower than normal, with noticeable relativistic effects.",
      "c) No different from current observations.",
      "d) Time would run backwards."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is one of the key observations that led to the development of relativistic mechanics?",
    "options": [
      "a) Classical physics could not explain phenomena involving very slow particles.",
      "b) Classical physics could not explain phenomena involving very small particles or very high velocities.",
      "c) Electromagnetic theory completely replaced classical mechanics.",
      "d) Newton's laws were found to be universally applicable."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Which concept states that the laws of physics are the same for all observers?",
    "options": [
      "a) Principle of Constancy of Light.",
      "b) Principle of Relativity.",
      "c) Principle of Equivalence.",
      "d) Principle of Conservation of Energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What happens to the energy and mass changes in nuclear reactions according to special relativity?",
    "options": [
      "a) They are too small to be measurable.",
      "b) They are exactly in accordance with Einstein's equations.",
      "c) They contradict the mass-energy equivalence.",
      "d) They only involve mass conservation."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the Earth's orbital speed compared to the speed of light?",
    "options": [
      "a) Much greater than the speed of light.",
      "b) Exactly equal to the speed of light.",
      "c) Extremely small compared to the speed of light.",
      "d) Slightly less than the speed of light."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What is the significance of the first postulate that \"the laws of physics are the same in all inertial frames\"?",
    "options": [
      "a) It implies that absolute uniform motion can be detected.",
      "b) It ensures consistency across different inertial observers.",
      "c) It limits the applicability of physical laws.",
      "d) It suggests that gravity is not a universal force."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "If a spaceship's clocks are moving slowly from Earth's point of view, what do the spaceship occupants experience regarding their journey?",
    "options": [
      "a) A longer journey time.",
      "b) A shorter journey length due to length contraction.",
      "c) No change in journey length or time.",
      "d) An increase in mass."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "In special relativity, when an object's mass is measured at rest, it is called its:",
    "options": [
      "a) Relativistic mass.",
      "b) Kinetic mass.",
      "c) Rest mass.",
      "d) Gravitational mass."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is one of the fundamental concepts that Einstein's special theory of relativity revolutionized our understanding of?",
    "options": [
      "a) Only gravity.",
      "b) Only electromagnetic fields.",
      "c) Time, space, and motion.",
      "d) Only quantum mechanics."
    ],
    "correctAnswer": "c"
  }
],
    "Nuclear and Particle Physics": [
  {
    "id": 1,
    "questionText": "What is the composition of the atomic nucleus?",
    "options": [
      "a) Only protons",
      "b) Only neutrons",
      "c) Protons and electrons",
      "d) Protons and neutrons"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 2,
    "questionText": "What is the electrical charge of a proton?",
    "options": [
      "a) Zero",
      "b) Positive, same magnitude as an electron",
      "c) Negative, same magnitude as an electron",
      "d) Positive, twice the magnitude of an electron"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What is the role of a neutron in the nucleus?",
    "options": [
      "a) It carries a negative charge",
      "b) It is electrically neutral and has a mass nearly the same as a proton",
      "c) It is responsible for chemical bonding",
      "d) It is much lighter than a proton"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "The number of protons in a nucleus is called what?",
    "options": [
      "a) Mass number (A)",
      "b) Neutron number (N)",
      "c) Atomic number (Z)",
      "d) Nucleon number"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What is the atomic mass number (A)?",
    "options": [
      "a) The number of protons only",
      "b) The number of neutrons only",
      "c) The sum of protons and neutrons",
      "d) The number of electrons and protons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "What are isotopes?",
    "options": [
      "a) Nuclei with different numbers of protons but the same number of neutrons",
      "b) Nuclei with the same number of protons but different numbers of neutrons",
      "c) Atoms with different chemical symbols but the same mass number",
      "d) Particles that decay spontaneously"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "How many fundamental forces govern all interactions in the universe?",
    "options": [
      "a) Two",
      "b) Three",
      "c) Four",
      "d) Five"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Which fundamental force is considered negligibly weak at the atomic level, despite being significant for large masses?",
    "options": [
      "a) Electromagnetic force",
      "b) Strong nuclear force",
      "c) Weak nuclear force",
      "d) Gravitational force"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 9,
    "questionText": "What is the range of the strong nuclear force?",
    "options": [
      "a) Infinite",
      "b) Short-range (<10⁻¹⁵ m)",
      "c) Medium-range (10⁻¹⁰ m)",
      "d) Variable depending on the nucleus size"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Which fundamental force is responsible for radioactive decay, particularly beta decay, and interactions involving neutrinos?",
    "options": [
      "a) Strong nuclear force",
      "b) Electromagnetic force",
      "c) Weak nuclear force",
      "d) Gravitational force"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What is a positron?",
    "options": [
      "a) An anti-proton",
      "b) An anti-electron, with positive charge",
      "c) A neutral particle",
      "d) A type of neutrino"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "Who first predicted the existence of anti-particles in 1928?",
    "options": [
      "a) Albert Einstein",
      "b) James Chadwick",
      "c) Paul Dirac",
      "d) Carl Anderson"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is pair production?",
    "options": [
      "a) The process where two photons combine to form an electron-positron pair",
      "b) The emission of an electron-positron pair when a high-energy photon passes nearby an atomic nucleus",
      "c) The decay of a particle into its corresponding anti-particle",
      "d) The creation of two identical particles from vacuum"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What is the minimum energy a photon must have for electron-positron pair production?",
    "options": [
      "a) 0.51 MeV",
      "b) 1.02 MeV",
      "c) 2.04 MeV",
      "d) Any energy value"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What happens in an annihilation of matter reaction between an electron and a positron?",
    "options": [
      "a) They form a neutron",
      "b) They scatter off each other",
      "c) They annihilate into two gamma ray photons",
      "d) They convert into a single electron"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which atomic nuclei are naturally unstable and spontaneously emit radiations?",
    "options": [
      "a) Nuclei with atomic numbers less than 82",
      "b) Nuclei with atomic numbers greater than 82",
      "c) All nuclei are unstable",
      "d) Only isotopes of hydrogen"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Which type of radiation is deflected towards the negative terminal in an electric field?",
    "options": [
      "a) Alpha (α) particles",
      "b) Beta (β) particles",
      "c) Gamma (γ) radiations",
      "d) Neutrinos"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 18,
    "questionText": "Which type of radiation has the highest penetrating power but lowest ionization power?",
    "options": [
      "a) Alpha (α) particles",
      "b) Beta (β) particles",
      "c) Gamma (γ) radiations",
      "d) Positrons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "In alpha decay, how do the atomic number (Z) and mass number (A) change?",
    "options": [
      "a) Z decreases by 1, A decreases by 2",
      "b) Z decreases by 2, A decreases by 4",
      "c) Z increases by 1, A remains same",
      "d) Z remains same, A decreases by 2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "In beta-minus (β⁻) decay, a neutron in the nucleus decays into what particles?",
    "options": [
      "a) A proton and a positron",
      "b) A proton, an electron, and an anti-neutrino",
      "c) A proton, an electron, and a neutrino",
      "d) Two protons and an electron"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Why do beta particles (electrons or positrons) have a continuous range of energies in β-decay?",
    "options": [
      "a) Because they are always emitted with maximum kinetic energy",
      "b) Because the energy is shared between the beta particle and an (anti)-neutrino in varying proportions",
      "c) Because of the electromagnetic interaction within the nucleus",
      "d) Because their mass varies during emission"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What are the fundamental constituents of matter, considered to be indivisible?",
    "options": [
      "a) Protons and neutrons",
      "b) Quarks and leptons",
      "c) Hadrons and mesons",
      "d) Electrons and photons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Particles that experience the strong force are known as what?",
    "options": [
      "a) Leptons",
      "b) Bosons",
      "c) Hadrons",
      "d) Fermions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "Which particles are composite subatomic particles made of an odd number of quarks (usually three)?",
    "options": [
      "a) Mesons",
      "b) Baryons",
      "c) Leptons",
      "d) Photons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "How many flavors (types) of quarks are known?",
    "options": [
      "a) Three",
      "b) Four",
      "c) Five",
      "d) Six"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "What is the quark composition of a proton?",
    "options": [
      "a) udd",
      "b) uud",
      "c) uds",
      "d) ddu"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is the quark composition of a neutron?",
    "options": [
      "a) uud",
      "b) udd",
      "c) uus",
      "d) dds"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is the role of the Higgs boson?",
    "options": [
      "a) It carries the strong nuclear force",
      "b) It provides an explanation for how other particles get mass",
      "c) It mediates gravitational force",
      "d) It is responsible for chemical reactions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Which particles do NOT interact with the Higgs field, and thus have zero rest mass?",
    "options": [
      "a) Electrons",
      "b) Protons",
      "c) Photons",
      "d) W and Z bosons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Which conservation law is obeyed in nuclear processes?",
    "options": [
      "a) Conservation of energy, momentum, and charge",
      "b) Conservation of baryon number",
      "c) Conservation of lepton number",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "What is the current understanding of the asymmetry between matter and anti-matter in the universe?",
    "options": [
      "a) The universe consists of equal amounts of matter and anti-matter",
      "b) The universe is entirely composed of anti-matter",
      "c) It is a well-understood phenomenon due to constant particle-antiparticle creation",
      "d) It is an unsolved mystery"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "What percentage of the observable universe is currently understood as \"ordinary matter\"?",
    "options": [
      "a) 95%",
      "b) 68%",
      "c) 27%",
      "d) 5%"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "What is the \"quantum field theory\"?",
    "options": [
      "a) A theory that describes gravity at the macroscopic level",
      "b) A theory where each particle is represented by a field and forces are transmitted by mediators",
      "c) A theory that focuses on classical mechanics",
      "d) A theory where particles are vibrating strings"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "In quantum field theory, what are the quanta that exchange momentum and energy between particles called?",
    "options": [
      "a) Electrons",
      "b) Field particles (bosons)",
      "c) Quarks",
      "d) Leptons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What is the \"string theory\"?",
    "options": [
      "a) A theory that describes particles as point-like entities",
      "b) A theory proposing that fundamental particles are tiny, vibrating strings",
      "c) A theory that unifies all fundamental forces through quantum fields",
      "d) A theory explaining the origin of the universe"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the \"Standard Model\" in particle physics?",
    "options": [
      "a) A collection of theories that describe all known phenomena in the universe",
      "b) A collection of theories that describe the smallest experimentally observed particles of matter and interaction between energy and matter",
      "c) A theory that explains dark matter and dark energy",
      "d) A model that only includes quarks and leptons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is the value of 1 unified mass scale (u) in kilograms?",
    "options": [
      "a) $1.6606 \\times 10^{-24}$ kg",
      "b) $1.6606 \\times 10^{-27}$ kg",
      "c) 931 MeV",
      "d) 1.007276 kg"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Which of the following is an example of an isotope of carbon?",
    "options": [
      "a) $^{12}C, ^{13}C, and ^{14}C$",
      "b) $^{1}H, ^{2}H, and ^{3}H$",
      "c) $^{16}O and ^{18}O$",
      "d) Only $^{12}C$"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 39,
    "questionText": "What were the \"strange particles\" discovered in high-energy collisions?",
    "options": [
      "a) Particles that behave identically to protons and neutrons",
      "b) Particles that were not accounted for by existing theoretical schemes",
      "c) Particles with zero spin",
      "d) Particles that interact only through gravitational force"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What is the spin characteristic of \"fermions\"?",
    "options": [
      "a) Zero spin",
      "b) Whole number spin",
      "c) Half-integer spin (e.g., ½)",
      "d) Variable spin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Which particles obey the Pauli's exclusion principle?",
    "options": [
      "a) Bosons",
      "b) Fermions",
      "c) Photons",
      "d) Mesons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "According to the quark theory, what property (or quality) was suggested that quarks have, analogous to electric charge?",
    "options": [
      "a) Flavor",
      "b) Spin",
      "c) Color",
      "d) Mass"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "What is the term for the theory of the strong force acting between color charges?",
    "options": [
      "a) Quantum Electrodynamics (QED)",
      "b) Quantum Chromodynamics (QCD)",
      "c) Quantum Gravitational Dynamics (QGD)",
      "d) Standard Model"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "What is the charge quantum number of an anti-down quark (d̄)?",
    "options": [
      "a) +2/3",
      "b) -1/3",
      "c) +1/3",
      "d) -2/3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the approximate mass of the Higgs boson?",
    "options": [
      "a) $9.11 \\times 10^{-31}$ kg",
      "b) $1.67 \\times 10^{-27}$ kg",
      "c) Around 125 giga-electron-volts (GeV)",
      "d) Zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What percentage of the universe is composed of unknown dark matter?",
    "options": [
      "a) 5%",
      "b) 27%",
      "c) 68%",
      "d) 95%"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What percentage of the universe is composed of mysterious anti-gravity material known as dark energy?",
    "options": [
      "a) 5%",
      "b) 27%",
      "c) 68%",
      "d) 95%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "In the Standard Model, which forces are provided by the fundamental bosons?",
    "options": [
      "a) Gravity, strong, and weak nuclear forces",
      "b) Electromagnetism, strong, and weak nuclear forces",
      "c) Gravity and electromagnetism",
      "d) Only electromagnetism"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What is a \"bar\" over a symbol (e.g., p̄ or ν̄) commonly used to represent?",
    "options": [
      "a) A heavier isotope",
      "b) An excited state of a particle",
      "c) An anti-particle",
      "d) A neutral particle"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is an anti-neutrino?",
    "options": [
      "a) A particle with a negative charge",
      "b) A particle with a positive charge",
      "c) A particle with zero charge and very small mass, anti-particle of neutrino",
      "d) A particle that always interacts strongly with matter"
    ],
    "correctAnswer": "c"
  }
],
};
export const shortQuestions = {
    "Vectors and Equilibrium": shortQuestionsData.slice(0, 4),
    "Work and Energy": shortQuestionsData.slice(4, 7),
    "Rotational and Circular Motion": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Vectors and Equilibrium": longQuestionsData.slice(0, 2),
    "Work and Energy": longQuestionsData.slice(2, 4),
    "Rotational and Circular Motion": longQuestionsData.slice(4, 5),
};
