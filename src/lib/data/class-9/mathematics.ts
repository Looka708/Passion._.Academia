
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './mathematics-short-questions';
import { longQuestions as longQuestionsData } from './mathematics-long-questions';

export const chapters = [
"Real Numbers",
"Logarithms",
"Set and Functions",
"Factorization and Algebraic Manipulation",
"Linear Equations and Inequalities",
"Trigonometry",
"Coordinate Geometry",
"Logic",
"Similar Figures",
"Graphs of Functions",
"Loci and Construction",
"Information Handling",
"Probability",
];

export const mcqs: Record<string, MCQ[]> = {
  "Real Numbers": [
    {
    "id": 1,
    "questionText": "Which of the following describes a well-defined collection of distinct objects?",
    "options": [
      "Real Numbers",
      "Rational Numbers",
      "Irrational Numbers",
      "Set"
    ],
    "correctAnswer": "Set"
  },
  {
    "id": 2,
    "questionText": "The set of real numbers (R) is defined as the union of which two sets?",
    "options": [
      "Natural numbers and Integers",
      "Rational numbers and Irrational numbers",
      "Whole numbers and Prime numbers",
      "Even numbers and Odd numbers"
    ],
    "correctAnswer": "Rational numbers and Irrational numbers"
  },
  {
    "id": 3,
    "questionText": "According to the source, the history of numbers comprises thousands of years, from ancient civilization to the modern Arabic system. Which civilization invented the number system used today, also known as Indo-Arabic numerals?",
    "options": [
      "Egyptians",
      "Romans",
      "Indians",
      "Sumerians"
    ],
    "correctAnswer": "Indians"
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of a terminating decimal number?",
    "options": [
      "0.333...",
      "3.14159... (Pi)",
      "0.25",
      "1.709975947..."
    ],
    "correctAnswer": "0.25"
  },
  {
    "id": 5,
    "questionText": "A decimal number with an infinitely repeating pattern of digits after the decimal point is called a:",
    "options": [
      "Terminating decimal number",
      "Non-terminating and non-recurring decimal number",
      "Rational number",
      "Non-terminating and recurring decimal number"
    ],
    "correctAnswer": "Non-terminating and recurring decimal number"
  },
  {
    "id": 6,
    "questionText": "Identify the irrational number among the following:",
    "options": [
      "0.35",
      "0.444...",
      "√2",
      "3.5555..."
    ],
    "correctAnswer": "√2"
  },
  {
    "id": 7,
    "questionText": "The property a + b = b + a for real numbers a, b is known as:",
    "options": [
      "Closure property",
      "Associative property",
      "Commutative property",
      "Identity property"
    ],
    "correctAnswer": "Commutative property"
  },
  {
    "id": 8,
    "questionText": "For real numbers, the additive identity is:",
    "options": [
      "1",
      "0",
      "-a",
      "a"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 9,
    "questionText": "What is the multiplicative inverse of a non-zero real number 'a'?",
    "options": [
      "0",
      "1",
      "-a",
      "1/a"
    ],
    "correctAnswer": "1/a"
  },
  {
    "id": 10,
    "questionText": "The property a(b + c) = ab + ac is called:",
    "options": [
      "Right distributive property",
      "Left distributive property of multiplication over addition",
      "Associative property",
      "Commutative property"
    ],
    "correctAnswer": "Left distributive property of multiplication over addition"
  },
  {
    "id": 11,
    "questionText": "The reflexive property of equality states that for any real number 'a':",
    "options": [
      "a = b ⇒ b = a",
      "a = a",
      "a + c = b + c",
      "a > b or a < b"
    ],
    "correctAnswer": "a = a"
  },
  {
    "id": 12,
    "questionText": "If a > b and b > c, then a > c. This is an example of which property of real numbers?",
    "options": [
      "Reflexive property",
      "Symmetric property",
      "Transitive property",
      "Additive property"
    ],
    "correctAnswer": "Transitive property"
  },
  {
    "id": 13,
    "questionText": "Which of the following statements is true regarding the division property of inequalities, if c < 0?",
    "options": [
      "a < b ⇒ a/c < b/c",
      "a < b ⇒ a/c > b/c",
      "a > b ⇒ a/c > b/c",
      "a > b ⇒ a/c < b/c"
    ],
    "correctAnswer": "a < b ⇒ a/c > b/c"
  },
  {
    "id": 14,
    "questionText": "The reciprocal property for real numbers a, b with the same sign states that if a < b, then:",
    "options": [
      "1/a < 1/b",
      "1/a > 1/b",
      "a/b < 1",
      "a/b > 1"
    ],
    "correctAnswer": "1/a > 1/b"
  },
  {
    "id": 15,
    "questionText": "What is the value of 0.5 (recurring decimal) as a rational number p/q?",
    "options": [
      "1/2",
      "5/9",
      "5/10",
      "1/5"
    ],
    "correctAnswer": "5/9"
  },
  {
    "id": 16,
    "questionText": "What is the value of 0.93 (recurring decimal) as a rational number p/q?",
    "options": [
      "93/100",
      "93/99",
      "3/93",
      "9/3"
    ],
    "correctAnswer": "93/99"
  },
  {
    "id": 17,
    "questionText": "If n is a positive integer greater than 1 and 'a' is a real number, then any real number x such that x = √a is called the nth root of a. In this expression, what is 'n' called?",
    "options": [
      "Radical",
      "Radicand",
      "Index of radical",
      "Exponential form"
    ],
    "correctAnswer": "Index of radical"
  },
  {
    "id": 18,
    "questionText": "What is the exponential form of x = √a?",
    "options": [
      "x = aⁿ",
      "x = a¹/ⁿ",
      "x = nᵃ",
      "x = a⁻ⁿ"
    ],
    "correctAnswer": "x = a¹/ⁿ"
  },
  {
    "id": 19,
    "questionText": "An irrational radical with a rational radicand is called a:",
    "options": [
      "Rational number",
      "Integer",
      "Surd",
      "Whole number"
    ],
    "correctAnswer": "Surd"
  },
  {
    "id": 20,
    "questionText": "Which of the following is NOT a surd, according to the definition given in the source?",
    "options": [
      "√5",
      "√7",
      "√9",
      "√2"
    ],
    "correctAnswer": "√9"
  },
  {
    "id": 21,
    "questionText": "The product of two conjugate surds is always a:",
    "options": [
      "Irrational number",
      "Surd",
      "Rational number",
      "Imaginary number"
    ],
    "correctAnswer": "Rational number"
  },
  {
    "id": 22,
    "questionText": "To rationalize a denominator of the form a + b√x, one should multiply both the numerator and denominator by:",
    "options": [
      "a - b√x (conjugate factor)",
      "a + b√x",
      "b√x",
      "√x"
    ],
    "correctAnswer": "a - b√x (conjugate factor)"
  },
  {
    "id": 23,
    "questionText": "Which of the following examples represents (aᵐ)ⁿ = aᵐⁿ?",
    "options": [
      "(x²)³ = x⁶",
      "x² * x³ = x⁵",
      "x⁶ / x³ = x³",
      "x⁰ = 1"
    ],
    "correctAnswer": "(x²)³ = x⁶"
  },
  {
    "id": 24,
    "questionText": "Real numbers are used in which of the following fields?",
    "options": [
      "Science and engineering",
      "Medicine and Health",
      "Computer science",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "id": 25,
    "questionText": "The formula for converting Celsius (°C) to Fahrenheit (°F) is:",
    "options": [
      "K = °C + 273",
      "°C = (5/9)(°F - 32)",
      "°F = (9/5)°C + 32",
      "°C = °F - 32"
    ],
    "correctAnswer": "°F = (9/5)°C + 32"
  },
  {
    "id": 26,
    "questionText": "If the sum of two real numbers is 8 and their difference is 2, what are the numbers?",
    "options": [
      "4 and 4",
      "5 and 3",
      "6 and 2",
      "7 and 1"
    ],
    "correctAnswer": "5 and 3"
  },
  {
    "id": 27,
    "questionText": "According to the source, the Romans used how many letters to represent different numbers in their numeral system?",
    "options": [
      "5",
      "6",
      "7",
      "10"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 28,
    "questionText": "In the modern era, the counting set was adopted as {1, 2, 3, ...}. This set represents:",
    "options": [
      "Whole numbers",
      "Integers",
      "Natural numbers",
      "Rational numbers"
    ],
    "correctAnswer": "Natural numbers"
  },
  {
    "id": 29,
    "questionText": "Which of the following is defined as Q = {p/q ; p, q ∈ Z ∧ q ≠ 0}?",
    "options": [
      "Set of irrational numbers",
      "Set of real numbers",
      "Set of rational numbers",
      "Set of integers"
    ],
    "correctAnswer": "Set of rational numbers"
  },
  {
    "id": 30,
    "questionText": "The decimal representation of irrational numbers is generally:",
    "options": [
      "Terminating",
      "Non-terminating and recurring",
      "Non-terminating and non-recurring",
      "Finite"
    ],
    "correctAnswer": "Non-terminating and non-recurring"
  },
  {
    "id": 31,
    "questionText": "If x = 0.4 recurring, what is its rational form p/q?",
    "options": [
      "4/10",
      "2/5",
      "4/9 [Answer Key for Ex 1.1, Q3(i) shows 4/9]",
      "1/4"
    ],
    "correctAnswer": "4/9 [Answer Key for Ex 1.1, Q3(i) shows 4/9]"
  },
  {
    "id": 32,
    "questionText": "Which property is used in the statement (a+4)+b = a+(4+b)?",
    "options": [
      "Commutative property over addition",
      "Associative property over addition",
      "Additive identity",
      "Distributive property"
    ],
    "correctAnswer": "Associative property over addition"
  },
  {
    "id": 33,
    "questionText": "Which property is used in the statement √2 + √3 = √3 + √2?",
    "options": [
      "Associative property over addition",
      "Commutative property over addition",
      "Additive inverse",
      "Additive identity"
    ],
    "correctAnswer": "Commutative property over addition"
  },
  {
    "id": 34,
    "questionText": "Which property justifies the statement x - x = 0?",
    "options": [
      "Additive identity",
      "Multiplicative identity",
      "Additive inverse",
      "Multiplicative inverse"
    ],
    "correctAnswer": "Additive inverse"
  },
  {
    "id": 35,
    "questionText": "The statement a(b + c) = ab + ac represents:",
    "options": [
      "Commutative property",
      "Associative property",
      "Left distributive property",
      "Right distributive property"
    ],
    "correctAnswer": "Left distributive property"
  },
  {
    "id": 36,
    "questionText": "Which property is demonstrated by 16 + 0 = 16?",
    "options": [
      "Additive inverse",
      "Additive identity",
      "Multiplicative identity",
      "Closure property"
    ],
    "correctAnswer": "Additive identity"
  },
  {
    "id": 37,
    "questionText": "What property is shown by 100 x 1 = 100?",
    "options": [
      "Additive identity",
      "Multiplicative identity",
      "Additive inverse",
      "Multiplicative inverse"
    ],
    "correctAnswer": "Multiplicative identity"
  },
  {
    "id": 38,
    "questionText": "The statement 4 x (5 x 8) = (4 x 5) x 8 illustrates which property?",
    "options": [
      "Commutative property under multiplication",
      "Associative property under multiplication",
      "Distributive property",
      "Closure property"
    ],
    "correctAnswer": "Associative property under multiplication"
  },
  {
    "id": 39,
    "questionText": "The property ab = ba is an example of:",
    "options": [
      "Associative property under multiplication",
      "Commutative property under multiplication",
      "Distributive property",
      "Closure property"
    ],
    "correctAnswer": "Commutative property under multiplication"
  },
  {
    "id": 40,
    "questionText": "If a < b then 1/a > 1/b for a, b with the same sign, this is known as:",
    "options": [
      "Additive property",
      "Reciprocal property",
      "Multiplicative property",
      "Trichotomy property"
    ],
    "correctAnswer": "Reciprocal property"
  },
  {
    "id": 41,
    "questionText": "What does the trichotomy property state for any two real numbers a, b?",
    "options": [
      "a = b only",
      "a > b only",
      "a < b only",
      "Either a > b or a = b or a < b"
    ],
    "correctAnswer": "Either a > b or a = b or a < b"
  },
  {
    "id": 42,
    "questionText": "How would √5 be represented on a number line, approximately?",
    "options": [
      "Near 1",
      "Near 2.236",
      "Near 3",
      "Near 5"
    ],
    "correctAnswer": "Near 2.236"
  },
  {
    "id": 43,
    "questionText": "Which of the following is true for the sum of a rational number and an irrational number?",
    "options": [
      "Always rational",
      "Always irrational",
      "Can be rational or irrational",
      "Always zero"
    ],
    "correctAnswer": "Always irrational"
  },
  {
    "id": 44,
    "questionText": "Which of the following statements about surds is correct?",
    "options": [
      "Every irrational number is a surd.",
      "Every surd is an irrational number.",
      "√π is a surd.",
      "√e is a surd."
    ],
    "correctAnswer": "Every surd is an irrational number."
  },
  {
    "id": 45,
    "questionText": "What kind of surd contains a single term, e.g., √5?",
    "options": [
      "Binomial surd",
      "Monomial surd",
      "Conjugate surd",
      "Polynomial surd"
    ],
    "correctAnswer": "Monomial surd"
  },
  {
    "id": 46,
    "questionText": "What type of surd is √3 + √5?",
    "options": [
      "Monomial surd",
      "Conjugate surd",
      "Binomial surd",
      "Rational surd"
    ],
    "correctAnswer": "Binomial surd"
  },
  {
    "id": 47,
    "questionText": "What is the correct simplification of ⁴√(16x⁴y⁸)?",
    "options": [
      "4x y²",
      "2x y²",
      "2x²y²",
      "4x²y²"
    ],
    "correctAnswer": "2x y²"
  },
  {
    "id": 48,
    "questionText": "Simplify ³√(27x⁶y⁹z³).",
    "options": [
      "3x²y³z",
      "3x³y³z",
      "9x²y³z",
      "3xyz"
    ],
    "correctAnswer": "3x²y³z"
  },
  {
    "id": 49,
    "questionText": "According to the source, what is the role of Muhammad ibn Musa al-Khwarizmi in the development of mathematics?",
    "options": [
      "Introduced Roman numerals",
      "Invented Indo-Arabic numerals",
      "Introduced algebra as a distinct field in the 9th century",
      "Developed modern number systems like binary."
    ],
    "correctAnswer": "Introduced algebra as a distinct field in the 9th century"
  },
  {
    "id": 50,
    "questionText": "The modern decimal system used globally today is based on which system?",
    "options": [
      "Egyptian system",
      "Roman system",
      "Arabic system",
      "Sumerian system"
    ],
    "correctAnswer": "Arabic system"
  }
  ],
  "Logarithms": [
    {
    "id": 1,
    "questionText": "Logarithms are powerful mathematical tools used to simplify complex calculations, particularly those involving:",
    "options": [
      "Addition or subtraction",
      "Exponential growth or decay",
      "Division only",
      "Multiplication only"
    ],
    "correctAnswer": "Exponential growth or decay"
  },
  {
    "id": 2,
    "questionText": "What is the scientific notation of 2,000,000?",
    "options": [
      "2 x 10⁵",
      "2 x 10⁶",
      "20 x 10⁵",
      "0.2 x 10⁷"
    ],
    "correctAnswer": "2 x 10⁶"
  },
  {
    "id": 3,
    "questionText": "Express 0.0042 in scientific notation:",
    "options": [
      "4.2 x 10³",
      "4.2 x 10⁻³",
      "4.2 x 10⁴",
      "0.42 x 10⁻²"
    ],
    "correctAnswer": "4.2 x 10⁻³"
  },
  {
    "id": 4,
    "questionText": "The speed of light is approximately 3 x 10⁸ metres per second. Express it in standard form:",
    "options": [
      "3,000,000 metres per second",
      "300,000,000 metres per second",
      "30,000,000,000 metres per second",
      "300,000 metres per second"
    ],
    "correctAnswer": "300,000,000 metres per second"
  },
  {
    "id": 5,
    "questionText": "Who introduced the word \"logarithm\"?",
    "options": [
      "Henry Briggs",
      "John Napier",
      "Muhammad ibn Musa al-Khwarizmi",
      "Georg Cantor"
    ],
    "correctAnswer": "John Napier"
  },
  {
    "id": 6,
    "questionText": "In the general form of a logarithm, logᵇx = y, what does 'b' represent?",
    "options": [
      "Result",
      "Exponent",
      "Base",
      "Logarithm"
    ],
    "correctAnswer": "Base"
  },
  {
    "id": 7,
    "questionText": "Convert log₂8 = 3 to exponential form:",
    "options": [
      "8³ = 2",
      "3² = 8",
      "2³ = 8",
      "8² = 3"
    ],
    "correctAnswer": "2³ = 8"
  },
  {
    "id": 8,
    "questionText": "Convert 3⁴ = 81 to logarithmic form:",
    "options": [
      "log₄81 = 3",
      "log₃81 = 4",
      "log₃4 = 81",
      "log₄3 = 81"
    ],
    "correctAnswer": "log₃81 = 4"
  },
  {
    "id": 9,
    "questionText": "Find the value of x in log₅25 = x:",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 10,
    "questionText": "The logarithm with a base of 10 is called:",
    "options": [
      "Natural logarithm",
      "Binary logarithm",
      "Common logarithm",
      "Euler's logarithm"
    ],
    "correctAnswer": "Common logarithm"
  },
  {
    "id": 11,
    "questionText": "What is the value of log 0.1?",
    "options": [
      "1",
      "0",
      "-1",
      "10"
    ],
    "correctAnswer": "-1"
  },
  {
    "id": 12,
    "questionText": "Who extended Napier's work and developed the common logarithm, also introducing logarithmic tables?",
    "options": [
      "Al-Khwarizmi",
      "Georg Cantor",
      "Henry Briggs",
      "John Napier"
    ],
    "correctAnswer": "Henry Briggs"
  },
  {
    "id": 13,
    "questionText": "For a number greater than 1, the characteristic of its logarithm is determined by:",
    "options": [
      "Number of zeros between decimal point and first non-zero digit.",
      "Number of digits to the left of the decimal point - 1",
      "The decimal part of the logarithm",
      "The whole number itself"
    ],
    "correctAnswer": "Number of digits to the left of the decimal point - 1"
  },
  {
    "id": 14,
    "questionText": "What is the characteristic of log 725?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 15,
    "questionText": "What is the characteristic of log 0.00045?",
    "options": [
      "- (2 + 1) = -3",
      "- (3 + 1) = -4",
      "3",
      "4"
    ],
    "correctAnswer": "- (3 + 1) = -4"
  },
  {
    "id": 16,
    "questionText": "The decimal part of the logarithm, which represents the \"fractional\" component and is always positive, is called the:",
    "options": [
      "Characteristic",
      "Mantissa",
      "Exponent",
      "Base"
    ],
    "correctAnswer": "Mantissa"
  },
  {
    "id": 17,
    "questionText": "What is the value of log (0)?",
    "options": [
      "0",
      "1",
      "Undefined",
      "infinity"
    ],
    "correctAnswer": "Undefined"
  },
  {
    "id": 18,
    "questionText": "What is the value of log (1)?",
    "options": [
      "0",
      "1",
      "Undefined",
      "-1"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 19,
    "questionText": "An antilogarithm is the inverse operation of a:",
    "options": [
      "Multiplication",
      "Division",
      "Exponentiation",
      "Logarithm"
    ],
    "correctAnswer": "Logarithm"
  },
  {
    "id": 20,
    "questionText": "The word \"antilogarithm\" is another word for the:",
    "options": [
      "Exponent",
      "Base",
      "Number or result",
      "Characteristic"
    ],
    "correctAnswer": "Number or result"
  },
  {
    "id": 21,
    "questionText": "The logarithm of the product is the sum of the logarithms of the factors. This statement describes which law of logarithms?",
    "options": [
      "Quotient Law",
      "Power Law",
      "Product Law",
      "Change of Base Law"
    ],
    "correctAnswer": "Product Law"
  },
  {
    "id": 22,
    "questionText": "What is the formula for the Product Law of Logarithms?",
    "options": [
      "logᵇ(x/y) = logᵇx - logᵇy",
      "logᵇxⁿ = n logᵇx",
      "logᵇxy = logᵇx + logᵇy",
      "logᵇx = logᵃx / logᵃb"
    ],
    "correctAnswer": "logᵇxy = logᵇx + logᵇy"
  },
  {
    "id": 23,
    "questionText": "The logarithm of a quotient is the difference between the logarithms of the numerator and the denominator. This is the definition of the:",
    "options": [
      "Product Law",
      "Quotient Law",
      "Power Law",
      "Change of Base Law"
    ],
    "correctAnswer": "Quotient Law"
  },
  {
    "id": 24,
    "questionText": "What is the formula for the Power Law of Logarithms?",
    "options": [
      "logᵇxy = logᵇx + logᵇy",
      "logᵇ(x/y) = logᵇx - logᵇy",
      "logᵇxⁿ = n logᵇx",
      "logᵇx = logᵃx / logᵃb"
    ],
    "correctAnswer": "logᵇxⁿ = n logᵇx"
  },
  {
    "id": 25,
    "questionText": "Which law allows changing the base of a logarithm from \"b\" to any other base \"a\"?",
    "options": [
      "Product Law",
      "Quotient Law",
      "Power Law",
      "Change of Base Law"
    ],
    "correctAnswer": "Change of Base Law"
  },
  {
    "id": 26,
    "questionText": "Expand log₃(20) using laws of logarithms:",
    "options": [
      "log₃2 + log₃10",
      "2log₃2 + log₃5",
      "log₃2 + log₃5 + log₃2",
      "log₃(4x5)"
    ],
    "correctAnswer": "2log₃2 + log₃5"
  },
  {
    "id": 27,
    "questionText": "Expand log₂(9)⁵ using laws of logarithms:",
    "options": [
      "5log₂9",
      "10log₂3",
      "log₂9 + log₂5",
      "(log₂9)⁵"
    ],
    "correctAnswer": "10log₂3"
  },
  {
    "id": 28,
    "questionText": "Write 2 log₃10 - log₃4 as a single logarithm:",
    "options": [
      "log₃(100/4)",
      "log₃25",
      "log₃(100-4)",
      "log₃(10/4)²"
    ],
    "correctAnswer": "log₃25"
  },
  {
    "id": 29,
    "questionText": "Write 6 log₃x + 2 log₃11 as a single logarithm:",
    "options": [
      "log₃(x⁶ + 11²)",
      "log₃(x⁶ * 11²)",
      "log₃(x⁶ * 121)",
      "log₃(x + 11)⁸"
    ],
    "correctAnswer": "log₃(x⁶ * 121)"
  },
  {
    "id": 30,
    "questionText": "The formula for measuring the magnitude of earthquakes is M = log₁₀(I/I₀). If amplitude (A) is 10,000 and reference amplitude (A₀) is 10, what is the magnitude of the earthquake?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 31,
    "questionText": "Evaluate log₂64:",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 32,
    "questionText": "The base of the common logarithm is:",
    "options": [
      "2",
      "10",
      "e",
      "Any real number"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 33,
    "questionText": "If log 2 = 0.3010, then log 200 is:",
    "options": [
      "1.3010",
      "0.6010",
      "2.3010",
      "2.6010"
    ],
    "correctAnswer": "2.3010"
  },
  {
    "id": 34,
    "questionText": "Log 10,000 equals:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 35,
    "questionText": "Log 5 + Log 3 equals:",
    "options": [
      "Log 8",
      "Log (5/3)",
      "Log 15",
      "Log 2"
    ],
    "correctAnswer": "Log 15"
  },
  {
    "id": 36,
    "questionText": "The exponential form of log₃81 = 4 is:",
    "options": [
      "3⁴ = 81",
      "4³ = 81",
      "81⁴ = 3",
      "3⁸¹ = 4"
    ],
    "correctAnswer": "3⁴ = 81"
  },
  {
    "id": 37,
    "questionText": "Convert 0.000567 to scientific notation:",
    "options": [
      "5.67 x 10³",
      "5.67 x 10⁻³",
      "5.67 x 10⁻⁴",
      "5.67 x 10⁴"
    ],
    "correctAnswer": "5.67 x 10⁻⁴"
  },
  {
    "id": 38,
    "questionText": "Convert 2.6 x 10³ to ordinary notation:",
    "options": [
      "260",
      "2600",
      "26000",
      "0.0026"
    ],
    "correctAnswer": "2600"
  },
  {
    "id": 39,
    "questionText": "Convert log₄8 = x to exponential form:",
    "options": [
      "4⁸ = x",
      "x⁴ = 8",
      "4ˣ = 8",
      "8ˣ = 4"
    ],
    "correctAnswer": "4ˣ = 8"
  },
  {
    "id": 40,
    "questionText": "Find the value of x in log₉x = 0.5:",
    "options": [
      "3",
      "4.5",
      "81",
      "0.5"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 41,
    "questionText": "What is the value of log₁₀1000?",
    "options": [
      "1",
      "2",
      "3",
      "10"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 42,
    "questionText": "What is the characteristic of log 5287?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 43,
    "questionText": "What is the characteristic of log 0.0567?",
    "options": [
      "-1",
      "-2",
      "1",
      "2"
    ],
    "correctAnswer": "-2"
  },
  {
    "id": 44,
    "questionText": "If log 3.177 = 0.5019, then log 3177 is:",
    "options": [
      "0.5019",
      "1.5019",
      "2.5019",
      "3.5019"
    ],
    "correctAnswer": "3.5019"
  },
  {
    "id": 45,
    "questionText": "If log 3.177 = 0.5019, then log 0.03177 is:",
    "options": [
      "-0.5019",
      "-1.4981",
      "-2.5019",
      "1.5019"
    ],
    "correctAnswer": "-1.4981"
  },
  {
    "id": 46,
    "questionText": "Find the value of x if log x = 0.0065:",
    "options": [
      "1.0065",
      "1.015",
      "0.0065",
      "0.1015"
    ],
    "correctAnswer": "1.015"
  },
  {
    "id": 47,
    "questionText": "Find the value of x if log x = -3.434:",
    "options": [
      "0.0003681",
      "-3.434",
      "3.434",
      "0.003681"
    ],
    "correctAnswer": "0.0003681"
  },
  {
    "id": 48,
    "questionText": "Expand log(x y z⁶):",
    "options": [
      "log x + log y + log z⁶",
      "log x + log y + 6 log z",
      "(log x)(log y)(log z⁶)",
      "6(log x + log y + log z)"
    ],
    "correctAnswer": "log x + log y + 6 log z"
  },
  {
    "id": 49,
    "questionText": "Expand log₃(⁵√(m⁵n³)):",
    "options": [
      "5 log₃m + 3 log₃n",
      "(1/5)(5 log₃m + 3 log₃n)",
      "(5 log₃m)(3 log₃n)",
      "log₃(m⁵n³/⁵)"
    ],
    "correctAnswer": "(1/5)(5 log₃m + 3 log₃n)"
  },
  {
    "id": 50,
    "questionText": "If log₂ + log x = 1, find the value of x:",
    "options": [
      "1/2",
      "2",
      "5",
      "10"
    ],
    "correctAnswer": "5"
  }
  ],
  "Set and Functions": [
    {
    "id": 1,
    "questionText": "Mathematics is described as the study of:",
    "options": [
      "Numbers only",
      "Patterns, structure, and relationships",
      "Algorithms only",
      "Equations and formulas"
    ],
    "correctAnswer": "Patterns, structure, and relationships"
  },
  {
    "id": 2,
    "questionText": "A mathematical structure is typically a rule of:",
    "options": [
      "Numerical relationship only",
      "Geometric relationship only",
      "Logical relationship only",
      "Numerical, geometric, and logical relationship that holds consistency within a specific domain"
    ],
    "correctAnswer": "Numerical, geometric, and logical relationship that holds consistency within a specific domain"
  },
  {
    "id": 3,
    "questionText": "Who significantly contributed to the development of set theory and showed how to compare two sets by matching their members one-to-one?",
    "options": [
      "Rene Descartes",
      "Euclid",
      "Georg Cantor",
      "John Venn"
    ],
    "correctAnswer": "Georg Cantor"
  },
  {
    "id": 4,
    "questionText": "A well-defined collection of distinct objects is called a:",
    "options": [
      "Function",
      "Relation",
      "Set",
      "Element"
    ],
    "correctAnswer": "Set"
  },
  {
    "id": 5,
    "questionText": "The set of natural numbers (N) is represented as:",
    "options": [
      "{0, 1, 2, 3, ...}",
      "{1, 2, 3, ...}",
      "{0, ±1, ±2, ...}",
      "{±1, ±3, ±5, ...}"
    ],
    "correctAnswer": "{1, 2, 3, ...}"
  },
  {
    "id": 6,
    "questionText": "The set of whole numbers (W) is:",
    "options": [
      "{1, 2, 3, ...}",
      "{0, 1, 2, ...}",
      "{0, ±1, ±2, ...}",
      "{2, 3, 5, 7, ...}"
    ],
    "correctAnswer": "{0, 1, 2, ...}"
  },
  {
    "id": 7,
    "questionText": "The set of integers (Z) is:",
    "options": [
      "{1, 2, 3, ...}",
      "{0, 1, 2, ...}",
      "{0, ±1, ±2, ...}",
      "{±1, ±3, ±5, ...}"
    ],
    "correctAnswer": "{0, ±1, ±2, ...}"
  },
  {
    "id": 8,
    "questionText": "A set with only one element is called a:",
    "options": [
      "Null set",
      "Empty set",
      "Singleton set",
      "Universal set"
    ],
    "correctAnswer": "Singleton set"
  },
  {
    "id": 9,
    "questionText": "The empty set is denoted by which symbol?",
    "options": [
      "{0}",
      "{ } or ∅",
      "U",
      "P(S)"
    ],
    "correctAnswer": "{ } or ∅"
  },
  {
    "id": 10,
    "questionText": "What is the difference between {0} and ∅?",
    "options": [
      "They are the same.",
      "{0} is a singleton set, while ∅ is an empty set.",
      "{0} is an empty set, while ∅ is a singleton set.",
      "{0} contains numbers, while ∅ contains symbols."
    ],
    "correctAnswer": "{0} is a singleton set, while ∅ is an empty set."
  },
  {
    "id": 11,
    "questionText": "Two sets A and B are equal if:",
    "options": [
      "They have the same number of elements.",
      "They have exactly the same elements.",
      "A is a subset of B.",
      "B is a subset of A."
    ],
    "correctAnswer": "They have exactly the same elements."
  },
  {
    "id": 12,
    "questionText": "Two sets A and B are equivalent if:",
    "options": [
      "They have exactly the same elements.",
      "They have the same number of elements.",
      "A is a subset of B.",
      "B is a subset of A."
    ],
    "correctAnswer": "They have the same number of elements."
  },
  {
    "id": 13,
    "questionText": "If A is a subset of B (A ⊆ B) and A ≠ B, then A is called a:",
    "options": [
      "Universal subset",
      "Improper subset",
      "Proper subset",
      "Power set"
    ],
    "correctAnswer": "Proper subset"
  },
  {
    "id": 14,
    "questionText": "The set that contains all objects or elements under consideration is called the:",
    "options": [
      "Power set",
      "Null set",
      "Universal set",
      "Proper set"
    ],
    "correctAnswer": "Universal set"
  },
  {
    "id": 15,
    "questionText": "The power set of a set S, denoted by P(S), is:",
    "options": [
      "The set of elements not in S.",
      "The set containing all possible subsets of S.",
      "The number of elements in S.",
      "The largest subset of S."
    ],
    "correctAnswer": "The set containing all possible subsets of S."
  },
  {
    "id": 16,
    "questionText": "If S is a finite set with n(S) = m (number of elements), then the number of elements in its power set, n(P(S)), is:",
    "options": [
      "m",
      "2m",
      "2ᵐ",
      "m²"
    ],
    "correctAnswer": "2ᵐ"
  },
  {
    "id": 17,
    "questionText": "The union of two sets A and B (A ∪ B) is the set of all elements which belong to:",
    "options": [
      "A and B",
      "A or B",
      "Only A",
      "Only B"
    ],
    "correctAnswer": "A or B"
  },
  {
    "id": 18,
    "questionText": "The intersection of two sets A and B (A ∩ B) is the set of all elements that belong to:",
    "options": [
      "A or B",
      "Both A and B",
      "Only A",
      "Only B"
    ],
    "correctAnswer": "Both A and B"
  },
  {
    "id": 19,
    "questionText": "If the intersection of two sets is the empty set, the sets are said to be:",
    "options": [
      "Overlapping sets",
      "Disjoint sets",
      "Equal sets",
      "Equivalent sets"
    ],
    "correctAnswer": "Disjoint sets"
  },
  {
    "id": 20,
    "questionText": "If the intersection of two sets is non-empty but neither is a subset of the other, the sets are called:",
    "options": [
      "Disjoint sets",
      "Overlapping sets",
      "Universal sets",
      "Complement sets"
    ],
    "correctAnswer": "Overlapping sets"
  },
  {
    "id": 21,
    "questionText": "The difference between sets A and B (A - B) consists of all elements that:",
    "options": [
      "Belong to B but not to A.",
      "Belong to A but not to B.",
      "Belong to both A and B.",
      "Belong to either A or B."
    ],
    "correctAnswer": "Belong to A but not to B."
  },
  {
    "id": 22,
    "questionText": "The complement of a set A (A') relative to the universal set U is the set of all elements of U, which:",
    "options": [
      "Belong to A.",
      "Do not belong to A.",
      "Are common to A and U.",
      "Are present in both A and U."
    ],
    "correctAnswer": "Do not belong to A."
  },
  {
    "id": 23,
    "questionText": "Who first used Venn diagrams?",
    "options": [
      "Georg Cantor",
      "Rene Descartes",
      "John Venn",
      "Euclid"
    ],
    "correctAnswer": "John Venn"
  },
  {
    "id": 24,
    "questionText": "The commutative property of union states:",
    "options": [
      "A ∪ (B ∪ C) = (A ∪ B) ∪ C",
      "A ∪ B = B ∪ A",
      "A ∩ B = B ∩ A",
      "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)"
    ],
    "correctAnswer": "A ∪ B = B ∪ A"
  },
  {
    "id": 25,
    "questionText": "The associative property of intersection states:",
    "options": [
      "A ∩ B = B ∩ A",
      "(A ∩ B) ∩ C = A ∩ (B ∩ C)",
      "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
      "(A ∪ B)' = A' ∩ B'"
    ],
    "correctAnswer": "(A ∩ B) ∩ C = A ∩ (B ∩ C)"
  },
  {
    "id": 26,
    "questionText": "De Morgan's Law states that (A ∪ B)' equals:",
    "options": [
      "A' ∪ B'",
      "A' ∩ B'",
      "A ∩ B",
      "A ∪ B"
    ],
    "correctAnswer": "A' ∩ B'"
  },
  {
    "id": 27,
    "questionText": "The cardinality of a set is defined as:",
    "options": [
      "The largest element in the set.",
      "The smallest element in the set.",
      "The total number of elements of a set.",
      "The sum of all elements in the set."
    ],
    "correctAnswer": "The total number of elements of a set."
  },
  {
    "id": 28,
    "questionText": "For two finite sets A and B, the principle of inclusion and exclusion states that n(A ∪ B) equals:",
    "options": [
      "n(A) + n(B)",
      "n(A) + n(B) + n(A ∩ B)",
      "n(A) + n(B) - n(A ∩ B)",
      "n(A) - n(B)"
    ],
    "correctAnswer": "n(A) + n(B) - n(A ∩ B)"
  },
  {
    "id": 29,
    "questionText": "In a sports club, 58 students join swimming and 50 join tug-of-war. If 98 students join at least one club, how many participated in both games?",
    "options": [
      "58",
      "50",
      "10",
      "8"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 30,
    "questionText": "Mathematically, a relation is any set of:",
    "options": [
      "Single elements",
      "Unordered pairs",
      "Ordered pairs",
      "Functions"
    ],
    "correctAnswer": "Ordered pairs"
  },
  {
    "id": 31,
    "questionText": "The set of the first elements of the ordered pairs forming a relation is called its:",
    "options": [
      "Range",
      "Co-domain",
      "Domain",
      "Image"
    ],
    "correctAnswer": "Domain"
  },
  {
    "id": 32,
    "questionText": "The set of the second elements of the ordered pairs forming a relation is called its:",
    "options": [
      "Domain",
      "Range",
      "Co-domain",
      "Pre-image"
    ],
    "correctAnswer": "Range"
  },
  {
    "id": 33,
    "questionText": "If a function f: A → B is such that Range f ⊂ B (i.e., Range f ≠ B), then f is said to be a function from A:",
    "options": [
      "Onto B",
      "One-to-one",
      "Into B",
      "Bijective"
    ],
    "correctAnswer": "Into B"
  },
  {
    "id": 34,
    "questionText": "A function of the form y = mx + c is called a:",
    "options": [
      "Quadratic function",
      "Cubic function",
      "Linear function",
      "Exponential function"
    ],
    "correctAnswer": "Linear function"
  },
  {
    "id": 35,
    "questionText": "A function of the form y = ax² + bx + c is called a:",
    "options": [
      "Linear function",
      "Quadratic function",
      "Cubic function",
      "Reciprocal function"
    ],
    "correctAnswer": "Quadratic function"
  },
  {
    "id": 36,
    "questionText": "If f(x) = 2x - 1, what is f(1)?",
    "options": [
      "2",
      "1",
      "0",
      "-1"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 37,
    "questionText": "If g(x) = x² - 3, what is g(-3)?",
    "options": [
      "-12",
      "6",
      "0",
      "9"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 38,
    "questionText": "The set builder form of the set {1, 1/3, 1/5, 1/7, ...} is:",
    "options": [
      "{x | x = 1/n, n ∈ W}",
      "{x | x = 1/(2n+1), n ∈ W}",
      "{x | x = 1/(n+1), n ∈ W}",
      "{x | x = 2n + 1, n ∈ W}"
    ],
    "correctAnswer": "{x | x = 1/(2n+1), n ∈ W}"
  },
  {
    "id": 39,
    "questionText": "If A = { }, then P(A) (Power Set of A) is:",
    "options": [
      "{ }",
      "{1}",
      "{{ }}",
      "∅"
    ],
    "correctAnswer": "{{ }}"
  },
  {
    "id": 40,
    "questionText": "If U = {1, 2, 3, 4, 5}, A = {1, 2, 3} and B = {3, 4, 5}, then U - (A ∩ B) is:",
    "options": [
      "{1, 2, 4, 5}",
      "{2, 3}",
      "{1, 3, 4, 5}",
      "{1, 2, 3}"
    ],
    "correctAnswer": "{1, 2, 4, 5}"
  },
  {
    "id": 41,
    "questionText": "If A and B are overlapping sets, then n(A - B) is equal to:",
    "options": [
      "n(A)",
      "n(B)",
      "A ∩ B",
      "n(A) - n(A ∩ B)"
    ],
    "correctAnswer": "n(A) - n(A ∩ B)"
  },
  {
    "id": 42,
    "questionText": "If n(A ∪ B) = 50, n(A) = 30 and n(B) = 35, then n(A ∩ B) is:",
    "options": [
      "23",
      "15",
      "9",
      "40"
    ],
    "correctAnswer": "15"
  },
  {
    "id": 43,
    "questionText": "If A = {1, 2, 3, 4} and B = {x, y, z}, then the Cartesian product of A and B contains exactly how many elements?",
    "options": [
      "13",
      "12",
      "10",
      "6"
    ],
    "correctAnswer": "12"
  },
  {
    "id": 44,
    "questionText": "If f(x) = x² - 3x + 2, then the value of f(a + 1) is equal to:",
    "options": [
      "a + 1",
      "a² + 1",
      "a² + 2a + 1",
      "a² - a"
    ],
    "correctAnswer": "a² - a"
  },
  {
    "id": 45,
    "questionText": "Given that f(x) = 3x + 1, if f(x) = 28, then the value of x is:",
    "options": [
      "9",
      "27",
      "3",
      "18"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 46,
    "questionText": "Which of the following describes an \"into function\"?",
    "options": [
      "Injective",
      "Surjective",
      "Bijective",
      "Range f ⊂ B (Range f ≠ B)"
    ],
    "correctAnswer": "Range f ⊂ B (Range f ≠ B)"
  },
  {
    "id": 47,
    "questionText": "The set {x | x = 2n, n ∈ N} in tabular form is:",
    "options": [
      "{1, 2, 3, ...}",
      "{2, 4, 6, 8, 10, ...}",
      "{0, 2, 4, 6, ...}",
      "{1, 3, 5, 7, ...}"
    ],
    "correctAnswer": "{2, 4, 6, 8, 10, ...}"
  },
  {
    "id": 48,
    "questionText": "The set {x | x ∈ E ∧ 4 < x < 6} in tabular form is:",
    "options": [
      "{4, 6}",
      "{5}",
      "{}",
      "{4, 5, 6}"
    ],
    "correctAnswer": "{}"
  },
  {
    "id": 49,
    "questionText": "What is the single set equal to A ∪ ∅?",
    "options": [
      "∅",
      "U",
      "A",
      "{0}"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 50,
    "questionText": "If g(x) = 7x - 2, what is g(0)?",
    "options": [
      "7",
      "0",
      "-2",
      "5"
    ],
    "correctAnswer": "-2"
  }
  ],
  "Factorization and Algebraic Manipulation": [
    {
    "id": 1,
    "questionText": "What is an algebraic factorization?",
    "options": [
      "A method to add complex algebraic expressions.",
      "A technique to break down complex algebraic expressions into simpler factors.",
      "A way to multiply algebraic expressions.",
      "A process of simplifying numerical calculations only."
    ],
    "correctAnswer": "A technique to break down complex algebraic expressions into simpler factors."
  },
  {
    "id": 2,
    "questionText": "In algebra, an expression that divides two or more expressions exactly is called a:",
    "options": [
      "Factor",
      "Common factor",
      "Term",
      "Binomial"
    ],
    "correctAnswer": "Common factor"
  },
  {
    "id": 3,
    "questionText": "When factorizing trinomials concretely using algebraic tiles, the factors of the trinomial are represented by:",
    "options": [
      "The area of the rectangle.",
      "The number of unit tiles.",
      "The lengths of the sides of the rectangle.",
      "The perimeter of the rectangle."
    ],
    "correctAnswer": "The lengths of the sides of the rectangle."
  },
  {
    "id": 4,
    "questionText": "A grey rectangular tile represents 'x' and a white rectangular tile represents '-x'. Both form a:",
    "options": [
      "Positive pair",
      "Negative pair",
      "Zero pair",
      "Unit pair"
    ],
    "correctAnswer": "Zero pair"
  },
  {
    "id": 5,
    "questionText": "What is the symbolic factorization of x² + 2x?",
    "options": [
      "x(x + 1)",
      "x(x + 2)",
      "(x+1)²",
      "(x+2)²"
    ],
    "correctAnswer": "x(x + 2)"
  },
  {
    "id": 6,
    "questionText": "Converting a trinomial expression into a product of two binomial expressions is called:",
    "options": [
      "Binomial expansion",
      "Trinomial addition",
      "Trinomial factoring",
      "Algebraic simplification"
    ],
    "correctAnswer": "Trinomial factoring"
  },
  {
    "id": 7,
    "questionText": "Factorize x² - 5x + 4:",
    "options": [
      "(x - 1)(x + 4)",
      "(x + 1)(x - 4)",
      "(x - 1)(x - 4)",
      "(x + 1)(x + 4)"
    ],
    "correctAnswer": "(x - 1)(x - 4)"
  },
  {
    "id": 8,
    "questionText": "Factorize x² - 3x - 10:",
    "options": [
      "(x + 2)(x + 5)",
      "(x - 2)(x - 5)",
      "(x + 2)(x - 5)",
      "(x - 2)(x + 5)"
    ],
    "correctAnswer": "(x + 2)(x - 5)"
  },
  {
    "id": 9,
    "questionText": "An expression having degree 2 is called a:",
    "options": [
      "Linear expression",
      "Cubic expression",
      "Quadratic expression",
      "Polynomial expression"
    ],
    "correctAnswer": "Quadratic expression"
  },
  {
    "id": 10,
    "questionText": "Factorize 2x² + 17x + 26:",
    "options": [
      "(x + 2)(2x + 13)",
      "(2x + 2)(x + 13)",
      "(x + 1)(2x + 26)",
      "(2x + 1)(x + 26)"
    ],
    "correctAnswer": "(x + 2)(2x + 13)"
  },
  {
    "id": 11,
    "questionText": "Factorize 3x² - 4x - 4:",
    "options": [
      "(3x + 2)(x - 2)",
      "(3x - 2)(x + 2)",
      "(x - 4)(3x + 1)",
      "(x + 4)(3x - 1)"
    ],
    "correctAnswer": "(3x + 2)(x - 2)"
  },
  {
    "id": 12,
    "questionText": "The factorization of a⁴ + a²b² + b⁴ is:",
    "options": [
      "(a² + b²)²",
      "(a² - b²)(a² + b²)",
      "(a² - ab + b²)(a² + ab + b²)",
      "(a² + ab + b²)²"
    ],
    "correctAnswer": "(a² - ab + b²)(a² + ab + b²)"
  },
  {
    "id": 13,
    "questionText": "Factorize x⁴ + x² + 25:",
    "options": [
      "(x² + 3x + 5)(x² - 3x + 5)",
      "(x² + 5)² - 9x²",
      "(x² + 5)²",
      "(x² - 5)²"
    ],
    "correctAnswer": "(x² + 3x + 5)(x² - 3x + 5)"
  },
  {
    "id": 14,
    "questionText": "Factorize x⁴ + y⁴:",
    "options": [
      "(x² + y²)²",
      "(x² - √2xy + y²)(x² + √2xy + y²)",
      "(x² + y² - xy)(x² + y² + xy)",
      "(x² + y²)² - (xy)²"
    ],
    "correctAnswer": "(x² - √2xy + y²)(x² + √2xy + y²)"
  },
  {
    "id": 15,
    "questionText": "Factorize a⁴ + 64:",
    "options": [
      "(a² + 8 - 4a)(a² + 8 + 4a)",
      "(a² + 8)²",
      "(a² - 8)²",
      "(a² + 4a + 8)(a² - 4a - 8)"
    ],
    "correctAnswer": "(a² + 8 - 4a)(a² + 8 + 4a)"
  },
  {
    "id": 16,
    "questionText": "Which identity represents (a + b)³?",
    "options": [
      "a³ + b³",
      "a³ - 3a²b + 3ab² - b³",
      "a³ + 3a²b + 3ab² + b³",
      "(a + b)(a² - ab + b²)"
    ],
    "correctAnswer": "a³ + 3a²b + 3ab² + b³"
  },
  {
    "id": 17,
    "questionText": "The expression a³ + b³ can be factorized as:",
    "options": [
      "(a + b)³",
      "(a + b)(a² + ab + b²)",
      "(a + b)(a² - ab + b²)",
      "(a - b)(a² + ab + b²)"
    ],
    "correctAnswer": "(a + b)(a² - ab + b²)"
  },
  {
    "id": 18,
    "questionText": "The expression a³ - b³ can be factorized as:",
    "options": [
      "(a - b)³",
      "(a - b)(a² - ab + b²)",
      "(a - b)(a² + ab + b²)",
      "(a + b)(a² + ab + b²)"
    ],
    "correctAnswer": "(a - b)(a² + ab + b²)"
  },
  {
    "id": 19,
    "questionText": "Factorize 8x³ + 27:",
    "options": [
      "(2x + 3)³",
      "(2x + 3)(4x² + 6x + 9)",
      "(2x + 3)(4x² - 6x + 9)",
      "(2x - 3)(4x² - 6x + 9)"
    ],
    "correctAnswer": "(2x + 3)(4x² - 6x + 9)"
  },
  {
    "id": 20,
    "questionText": "Factorize x³ - 27y³:",
    "options": [
      "(x - 3y)³",
      "(x - 3y)(x² + 3xy + 9y²)",
      "(x + 3y)(x² - 3xy + 9y²)",
      "(x - 3y)(x² - 3xy + 9y²)"
    ],
    "correctAnswer": "(x - 3y)(x² + 3xy + 9y²)"
  },
  {
    "id": 21,
    "questionText": "The HCF of two or more algebraic expressions refers to the:",
    "options": [
      "Smallest algebraic expression that divides them.",
      "Greatest algebraic expression which divides them without leaving a remainder.",
      "Product of all factors.",
      "Sum of all common factors."
    ],
    "correctAnswer": "Greatest algebraic expression which divides them without leaving a remainder."
  },
  {
    "id": 22,
    "questionText": "What is the HCF of 6x²y and 9xy²?",
    "options": [
      "3xy",
      "18x²y²",
      "3x²y²",
      "6xy"
    ],
    "correctAnswer": "3xy"
  },
  {
    "id": 23,
    "questionText": "The LCM of two or more algebraic expressions is the smallest algebraic expression which is exactly divisible by each of the given expressions.",
    "options": [
      "Product",
      "Sum",
      "Smallest algebraic expression",
      "Largest algebraic expression"
    ],
    "correctAnswer": "Smallest algebraic expression"
  },
  {
    "id": 24,
    "questionText": "The formula for LCM is:",
    "options": [
      "Common factors + Non-common factors",
      "Common factors x Non-common factors",
      "Non-common factors / Common factors",
      "Common factors - Non-common factors"
    ],
    "correctAnswer": "Common factors x Non-common factors"
  },
  {
    "id": 25,
    "questionText": "What is the LCM of 4x²y and 8x³y²?",
    "options": [
      "4x²y",
      "8x³y²",
      "32x⁵y³",
      "2xy"
    ],
    "correctAnswer": "8x³y²"
  },
  {
    "id": 26,
    "questionText": "The relationship between LCM and HCF of two polynomials p(x) and q(x) is:",
    "options": [
      "LCM + HCF = p(x) + q(x)",
      "LCM x HCF = p(x) x q(x)",
      "LCM / HCF = p(x) / q(x)",
      "LCM - HCF = p(x) - q(x)"
    ],
    "correctAnswer": "LCM x HCF = p(x) x q(x)"
  },
  {
    "id": 27,
    "questionText": "If LCM = x³ - 10x² + 11x + 70 and HCF = x - 7, and p(x) = x² - 12x + 35, what is q(x)?",
    "options": [
      "x² + 5x + 14",
      "x² - 5x - 14",
      "(x - 7)²",
      "(x + 2)²"
    ],
    "correctAnswer": "x² - 5x - 14"
  },
  {
    "id": 28,
    "questionText": "The square root of an algebraic expression refers to a value that, when multiplied by itself, gives the:",
    "options": [
      "Square of the expression",
      "Original expression",
      "Half of the expression",
      "Double of the expression"
    ],
    "correctAnswer": "Original expression"
  },
  {
    "id": 29,
    "questionText": "What is the square root of 4a²?",
    "options": [
      "2a",
      "±2a",
      "4a",
      "±4a"
    ],
    "correctAnswer": "±2a"
  },
  {
    "id": 30,
    "questionText": "The square root of the expression 36x⁴ - 36x² + 9 is:",
    "options": [
      "±(6x² - 3)",
      "±3(2x² - 1)",
      "±(18x² - 3)",
      "±9(2x² - 1)"
    ],
    "correctAnswer": "±3(2x² - 1)"
  },
  {
    "id": 31,
    "questionText": "Find the HCF of 21x²y and 35xy:",
    "options": [
      "7xy",
      "7x²y",
      "7xy²",
      "105x²y²"
    ],
    "correctAnswer": "7xy"
  },
  {
    "id": 32,
    "questionText": "Find the HCF of 4x² - 9y² and 2x² - 3xy:",
    "options": [
      "2x - 3y",
      "2x + 3y",
      "4x² - 9y²",
      "x(2x - 3y)"
    ],
    "correctAnswer": "2x - 3y"
  },
  {
    "id": 33,
    "questionText": "Find the HCF of x³ - 1 and x² + x + 1:",
    "options": [
      "x - 1",
      "x² + x + 1",
      "(x - 1)(x² + x + 1)",
      "(x + 1)(x² + x + 1)"
    ],
    "correctAnswer": "x² + x + 1"
  },
  {
    "id": 34,
    "questionText": "Find the LCM of x² + x and x³ + x²:",
    "options": [
      "x",
      "x(x + 1)",
      "x²(x + 1)",
      "x²(x² + x)"
    ],
    "correctAnswer": "x²(x + 1)"
  },
  {
    "id": 35,
    "questionText": "The square root of x² - 8x + 16 is:",
    "options": [
      "±(x + 4)",
      "±(x - 4)",
      "x - 4",
      "x + 4"
    ],
    "correctAnswer": "±(x - 4)"
  },
  {
    "id": 36,
    "questionText": "The square root of 9x² + 12x + 4 is:",
    "options": [
      "±(3x + 2)",
      "±(3x - 2)",
      "(3x + 2)",
      "(3x - 2)"
    ],
    "correctAnswer": "±(3x + 2)"
  },
  {
    "id": 37,
    "questionText": "The factorization of 12x + 36 is:",
    "options": [
      "12(x + 3)",
      "12(3x)",
      "12(3x + 1)",
      "x(12 + 36x)"
    ],
    "correctAnswer": "12(x + 3)"
  },
  {
    "id": 38,
    "questionText": "The factors of 4x² - 12x + 9 are:",
    "options": [
      "(2x + 3)²",
      "(2x - 3)²",
      "(2x - 3)(2x + 3)",
      "(2 + 3x)(2 - 3x)²"
    ],
    "correctAnswer": "(2x - 3)²"
  },
  {
    "id": 39,
    "questionText": "The HCF of a³b³ and ab² is:",
    "options": [
      "a³b³",
      "ab²",
      "a²b",
      "a²b²"
    ],
    "correctAnswer": "ab²"
  },
  {
    "id": 40,
    "questionText": "The LCM of 16x², 4x and 30xy is:",
    "options": [
      "480x³y",
      "240xy",
      "240x²y",
      "120x⁴y"
    ],
    "correctAnswer": "240x²y"
  },
  {
    "id": 41,
    "questionText": "The square root of x² - 6x + 9 is:",
    "options": [
      "±(x - 3)",
      "±(x + 3)",
      "x - 3",
      "x + 3"
    ],
    "correctAnswer": "±(x - 3)"
  },
  {
    "id": 42,
    "questionText": "The LCM of (a - b)² and (a - b)⁴ is:",
    "options": [
      "(a - b)²",
      "(a - b)³",
      "(a - b)⁴",
      "(a - b)⁶"
    ],
    "correctAnswer": "(a - b)⁴"
  },
  {
    "id": 43,
    "questionText": "Factorization of x³ + 3x² + 3x + 1 is:",
    "options": [
      "(x + 1)³",
      "(x - 1)³",
      "(x + 1)(x² + x + 1)",
      "(x - 1)(x² - x + 1)"
    ],
    "correctAnswer": "(x + 1)³"
  },
  {
    "id": 44,
    "questionText": "A cubic polynomial has degree:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 45,
    "questionText": "One of the factors of x³ - 27 is:",
    "options": [
      "x - 3",
      "x + 3",
      "x² - 3x + 9",
      "Both a and c"
    ],
    "correctAnswer": "Both a and c"
  },
  {
    "id": 46,
    "questionText": "Factorize 4x³ + 18x² - 12x:",
    "options": [
      "2x(2x² + 9x - 6)",
      "x(4x² + 18x - 12)",
      "2x(2x² + 9x + 6)",
      "2x(x² + 9x - 6)"
    ],
    "correctAnswer": "2x(2x² + 9x - 6)"
  },
  {
    "id": 47,
    "questionText": "Factorize x³ + 64y³:",
    "options": [
      "(x + 4y)(x² - 4xy + 16y²)",
      "(x - 4y)(x² + 4xy + 16y²)",
      "(x + 4y)³",
      "(x + 4y)(x² + 4xy + 16y²)"
    ],
    "correctAnswer": "(x + 4y)(x² - 4xy + 16y²)"
  },
  {
    "id": 48,
    "questionText": "Factorize x⁴ + 64:",
    "options": [
      "(x² + 8)²",
      "(x² + 4x + 8)(x² - 4x + 8)",
      "(x² + 8)(x² - 8)",
      "(x² + 64)²"
    ],
    "correctAnswer": "(x² + 4x + 8)(x² - 4x + 8)"
  },
  {
    "id": 49,
    "questionText": "Factorize (x² + 6x + 3)(x² + 6x - 9) + 36:",
    "options": [
      "(x² + 6x - 3)²",
      "(x² + 6x + 9)²",
      "(x² + 6x)² - 36",
      "(x² + 6x + 36)²"
    ],
    "correctAnswer": "(x² + 6x - 3)²"
  },
  {
    "id": 50,
    "questionText": "An investor's return R(x) = -x² + 6x - 8. Find the investment levels that result in zero return.",
    "options": [
      "x = 0 or x = 8",
      "x = 2 or x = 4",
      "x = 1 or x = 5",
      "x = 6 or x = 8"
    ],
    "correctAnswer": "x = 2 or x = 4"
  }
  ],
  "Linear Equations and Inequalities": [
    {
    "id": 1,
    "questionText": "What is the main goal in the unit on Linear Equations and Inequalities?",
    "options": [
      "To solve complex polynomial equations.",
      "To optimize (maximum or minimum) a quantity under consideration subject to certain constraint restrictions.",
      "To analyze non-linear relationships between variables.",
      "To find exact solutions for all types of equations."
    ],
    "correctAnswer": "To optimize (maximum or minimum) a quantity under consideration subject to certain constraint restrictions."
  },
  {
    "id": 2,
    "questionText": "To check a solution for a linear equation, one should:",
    "options": [
      "Solve the equation again.",
      "Substitute the solution into the original equation.",
      "Graph the equation.",
      "Divide both sides by the variable's coefficient."
    ],
    "correctAnswer": "Substitute the solution into the original equation."
  },
  {
    "id": 3,
    "questionText": "Solve the equation 3x - 5 = 7:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 5",
      "x = 12"
    ],
    "correctAnswer": "x = 4"
  },
  {
    "id": 4,
    "questionText": "A solution of a linear inequality in x and y is an:",
    "options": [
      "Single number",
      "Ordered pair of numbers which satisfies the inequality.",
      "Graph of a line",
      "Inequality statement itself"
    ],
    "correctAnswer": "Ordered pair of numbers which satisfies the inequality."
  },
  {
    "id": 5,
    "questionText": "The linear equation ax + by = c is called the \"associated or corresponding equation\" of:",
    "options": [
      "Quadratic equations",
      "Exponential functions",
      "Each of the inequalities mentioned.",
      "Non-linear systems."
    ],
    "correctAnswer": "Each of the inequalities mentioned."
  },
  {
    "id": 6,
    "questionText": "The graph of y < 2 is the open half-plane:",
    "options": [
      "Above the boundary line y = 2.",
      "Below the boundary line y = 2.",
      "On the boundary line y = 2.",
      "To the right of y = 2."
    ],
    "correctAnswer": "Below the boundary line y = 2."
  },
  {
    "id": 7,
    "questionText": "The graph of y ≤ 2 consists of:",
    "options": [
      "Only the open half-plane below y=2.",
      "Only the boundary line y=2.",
      "The boundary line and the closed half-plane below it.",
      "The boundary line and the open half-plane above it."
    ],
    "correctAnswer": "The boundary line and the closed half-plane below it."
  },
  {
    "id": 8,
    "questionText": "A function which is to be maximized or minimized is called an:",
    "options": [
      "Feasible function",
      "Optimal function",
      "Objective function",
      "Constraint function"
    ],
    "correctAnswer": "Objective function"
  },
  {
    "id": 9,
    "questionText": "The feasible solution which maximizes or minimizes the objective function is called the:",
    "options": [
      "Feasible region",
      "Optimal solution",
      "Corner point",
      "Constraint"
    ],
    "correctAnswer": "Optimal solution"
  },
  {
    "id": 10,
    "questionText": "Which of the following is a linear equation?",
    "options": [
      "5x > 7",
      "4x - 2 < 1",
      "2x + 1 = 1",
      "4 = 1 + 3"
    ],
    "correctAnswer": "2x + 1 = 1"
  },
  {
    "id": 11,
    "questionText": "The solution of 5x - 10 = 10 is:",
    "options": [
      "0",
      "50",
      "4",
      "-4"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 12,
    "questionText": "If 7x + 4 < 6x + 6, then x belongs to the interval:",
    "options": [
      "(2, ∞)",
      "[2, ∞)",
      "(-∞, 2)",
      "(-∞, 2]"
    ],
    "correctAnswer": "(-∞, 2)"
  },
  {
    "id": 13,
    "questionText": "A vertical line divides the plane into:",
    "options": [
      "Left half plane",
      "Right half plane",
      "Full plane",
      "Two half planes"
    ],
    "correctAnswer": "Two half planes"
  },
  {
    "id": 14,
    "questionText": "The equation formed from a linear inequality is called:",
    "options": [
      "Cubic equation",
      "Associated equation",
      "Quadratic equation",
      "Feasible region"
    ],
    "correctAnswer": "Associated equation"
  },
  {
    "id": 15,
    "questionText": "3x + 4 < 0 is a(n):",
    "options": [
      "Equation",
      "Inequality",
      "Not inequality",
      "Identity"
    ],
    "correctAnswer": "Inequality"
  },
  {
    "id": 16,
    "questionText": "A corner point is also called a:",
    "options": [
      "Code",
      "Vertex",
      "Curve",
      "Region"
    ],
    "correctAnswer": "Vertex"
  },
  {
    "id": 17,
    "questionText": "The solution region restricted to the first quadrant is called the:",
    "options": [
      "Objective region",
      "Feasible region",
      "Solution region",
      "Constraints region"
    ],
    "correctAnswer": "Feasible region"
  },
  {
    "id": 18,
    "questionText": "Find the solution of x + 5 = 1 - x and represent on a real line:",
    "options": [
      "x = -2",
      "x = 2",
      "x = -4",
      "x = 4"
    ],
    "correctAnswer": "x = -2"
  },
  {
    "id": 19,
    "questionText": "Solve the inequality 3x + 7 < 16:",
    "options": [
      "x > 3",
      "x < 3",
      "x ≤ 3",
      "x ≥ 3"
    ],
    "correctAnswer": "x < 3"
  },
  {
    "id": 20,
    "questionText": "What is the minimum value of f(x,y) = 3x + 5y, subject to constraints x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0?",
    "options": [
      "0",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 21,
    "questionText": "Solve the inequality 2x - 3x/5 < 0:",
    "options": [
      "x < 0",
      "x > 0",
      "x < 3/2",
      "x > 3/2"
    ],
    "correctAnswer": "x < 3/2"
  },
  {
    "id": 22,
    "questionText": "Which graph represents the solution set of y ≤ 2?",
    "options": [
      "Open half-plane above y=2",
      "Closed half-plane below y=2",
      "Only the line y=2",
      "Open half-plane below y=2"
    ],
    "correctAnswer": "Closed half-plane below y=2"
  },
  {
    "id": 23,
    "questionText": "The graph of a system of linear inequalities consists of:",
    "options": [
      "A single line",
      "The set of all ordered pairs (x, y) satisfying all inequalities simultaneously.",
      "Only the corner points.",
      "The boundary lines."
    ],
    "correctAnswer": "The set of all ordered pairs (x, y) satisfying all inequalities simultaneously."
  },
  {
    "id": 24,
    "questionText": "If 6(x + 10) ≥ 0, what is the solution on a real line?",
    "options": [
      "x ≥ 0",
      "x ≥ -10",
      "x ≤ -10",
      "x ≥ 10"
    ],
    "correctAnswer": "x ≥ -10"
  },
  {
    "id": 25,
    "questionText": "If x - 6 ≥ -2, what is the solution on a real line?",
    "options": [
      "x ≥ 4",
      "x ≤ 4",
      "x ≥ -8",
      "x ≤ -8"
    ],
    "correctAnswer": "x ≥ 4"
  },
  {
    "id": 26,
    "questionText": "Shade the solution region for the linear inequality 2x + y ≥ 6. The line 2x + y = 6 passes through which points?",
    "options": [
      "(0, 0) and (3, 6)",
      "(0, 6) and (3, 0)",
      "(6, 0) and (0, 3)",
      "(2, 4) and (1, 5)"
    ],
    "correctAnswer": "(0, 6) and (3, 0)"
  },
  {
    "id": 27,
    "questionText": "Shade the solution region for the linear inequality 3x - 2y ≥ 6. The line 3x - 2y = 6 passes through:",
    "options": [
      "(0, -3) and (2, 0)",
      "(0, 3) and (-2, 0)",
      "(3, 0) and (0, -2)",
      "(2, -3) and (0, 3)"
    ],
    "correctAnswer": "(0, -3) and (2, 0)"
  },
  {
    "id": 28,
    "questionText": "Shade the solution region for the linear inequality 2x + 1 ≥ 0. This inequality represents:",
    "options": [
      "x ≥ -1/2 (right of a vertical line)",
      "x ≤ -1/2 (left of a vertical line)",
      "y ≥ -2 (above a horizontal line)",
      "y ≤ -2 (below a horizontal line)"
    ],
    "correctAnswer": "x ≥ -1/2 (right of a vertical line)"
  },
  {
    "id": 29,
    "questionText": "Shade the solution region for the linear inequality 3y - 4 ≥ 0. This inequality represents:",
    "options": [
      "y ≥ 4/3 (above a horizontal line)",
      "y ≤ 4/3 (below a horizontal line)",
      "x ≥ 4/3 (right of a vertical line)",
      "x ≤ 4/3 (left of a vertical line)"
    ],
    "correctAnswer": "y ≥ 4/3 (above a horizontal line)"
  },
  {
    "id": 30,
    "questionText": "Maximize the function f(x, y) = 2x + 3y subject to the constraints: 2x + y ≤ 10, x + 2y ≤ 14, x ≥ 0; y ≥ 0. What are the corner points of the feasible region?",
    "options": [
      "(0,0), (5,0), (0,7), (2,6)",
      "(0,0), (10,0), (0,14)",
      "(0,0), (5,0), (0,7)",
      "(0,0), (5,0), (7,0), (2,6)"
    ],
    "correctAnswer": "(0,0), (5,0), (0,7), (2,6)"
  },
  {
    "id": 31,
    "questionText": "If (0,0) is a solution of an inequality, which of the following is NOT true?",
    "options": [
      "4x + 5y > 8",
      "3x + y > 6",
      "-2x + 3y < 0",
      "x + y > 4"
    ],
    "correctAnswer": "4x + 5y > 8"
  },
  {
    "id": 32,
    "questionText": "Which property of linear inequalities states that if a > b, then a + c > b + c?",
    "options": [
      "Multiplicative property",
      "Transitive property",
      "Additive property",
      "Trichotomy property"
    ],
    "correctAnswer": "Additive property"
  },
  {
    "id": 33,
    "questionText": "Which property of linear inequalities states that if a > b and c < 0, then ac < bc?",
    "options": [
      "Additive property",
      "Transitive property",
      "Multiplicative property",
      "Division property"
    ],
    "correctAnswer": "Multiplicative property"
  },
  {
    "id": 34,
    "questionText": "To isolate the variable term in a linear equation, the first step is usually to:",
    "options": [
      "Multiply both sides by the coefficient.",
      "Add or subtract any constant terms from both sides.",
      "Divide both sides by the variable.",
      "Factorize the expression."
    ],
    "correctAnswer": "Add or subtract any constant terms from both sides."
  },
  {
    "id": 35,
    "questionText": "The solution set of the inequality x < 3/2 is:",
    "options": [
      "(3/2, ∞)",
      "(-∞, 3/2)",
      "[3/2, ∞)",
      "(-∞, 3/2]"
    ],
    "correctAnswer": "(-∞, 3/2)"
  },
  {
    "id": 36,
    "questionText": "Which of the following describes the graph of x + 2y < 6?",
    "options": [
      "A straight line",
      "An open half-plane",
      "A closed half-plane",
      "A single point"
    ],
    "correctAnswer": "An open half-plane"
  },
  {
    "id": 37,
    "questionText": "If x = 4 in the equation 3x - 5 = 7, the check yields:",
    "options": [
      "12 = 7 (False)",
      "7 = 7 (True)",
      "4 = 7 (False)",
      "3 = 7 (False)"
    ],
    "correctAnswer": "7 = 7 (True)"
  },
  {
    "id": 38,
    "questionText": "If the value of 2x/3 - x/5 = 2. Which of the following is correct?",
    "options": [
      "(10x - 3x)/15 = 2",
      "7x/15 = 2",
      "7x = 30",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "id": 39,
    "questionText": "The equation 3 + 2x/3 ≥ 3 can be simplified to:",
    "options": [
      "2x/3 ≥ 0",
      "2x ≥ 0",
      "x ≥ 0",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "id": 40,
    "questionText": "The inequality 5x - 4y ≥ 20. If x=0, what is y?",
    "options": [
      "y ≥ -5",
      "y ≤ -5",
      "y = -5",
      "y ≥ 5"
    ],
    "correctAnswer": "y ≤ -5"
  },
  {
    "id": 41,
    "questionText": "To find the maximum value of g(x,y) = x + 4y subject to constraints x + y ≤ 4, x ≥ 0 and y ≥ 0, which corner points would you evaluate?",
    "options": [
      "(0,0), (4,0), (0,4)",
      "(0,0), (4,0)",
      "(0,4), (4,0)",
      "(0,0), (0,4)"
    ],
    "correctAnswer": "(0,0), (4,0), (0,4)"
  },
  {
    "id": 42,
    "questionText": "The maximum value of g(x,y) = x + 4y for constraints x + y ≤ 4, x ≥ 0 and y ≥ 0 is:",
    "options": [
      "0 at (0,0)",
      "4 at (4,0)",
      "16 at (0,4)",
      "8 at (2,2)"
    ],
    "correctAnswer": "16 at (0,4)"
  },
  {
    "id": 43,
    "questionText": "Which of the following is NOT an application of linear equations and inequalities?",
    "options": [
      "Modeling real-world problems.",
      "Understanding relationships between variables.",
      "Making decisions.",
      "Solving equations of degree 3 or higher."
    ],
    "correctAnswer": "Solving equations of degree 3 or higher."
  },
  {
    "id": 44,
    "questionText": "If 4x + 5y > 8, which point does NOT satisfy the inequality?",
    "options": [
      "(0,0)",
      "(1,1)",
      "(2,1)",
      "(0,2)"
    ],
    "correctAnswer": "(0,0)"
  },
  {
    "id": 45,
    "questionText": "The interval (-∞, 2) means all real numbers:",
    "options": [
      "Greater than or equal to 2.",
      "Less than 2.",
      "Greater than 2.",
      "Less than or equal to 2."
    ],
    "correctAnswer": "Less than 2."
  },
  {
    "id": 46,
    "questionText": "When solving a linear equation, after isolating the variable term, the next step is to:",
    "options": [
      "Factorize the variable.",
      "Square both sides.",
      "Divide or multiply both sides by the coefficient of the variable.",
      "Add constants to the variable."
    ],
    "correctAnswer": "Divide or multiply both sides by the coefficient of the variable."
  },
  {
    "id": 47,
    "questionText": "The graph of x + 2y = 6 forms a boundary line for the inequality x + 2y < 6. This line would be drawn as a [Implicit, but common practice in inequalities]:",
    "options": [
      "Solid line",
      "Dashed line (because it's a strict inequality)",
      "Thick line",
      "Dotted line"
    ],
    "correctAnswer": "Dashed line (because it's a strict inequality)"
  },
  {
    "id": 48,
    "questionText": "If the graph of an inequality includes the boundary line, how is the line typically drawn?",
    "options": [
      "As a dashed line",
      "As a solid line",
      "As a very thin line",
      "It is not drawn"
    ],
    "correctAnswer": "As a solid line"
  },
  {
    "id": 49,
    "questionText": "What is the feasible region when constraints are restricted to the first quadrant?",
    "options": [
      "Only x values",
      "Only y values",
      "x ≥ 0 and y ≥ 0",
      "x ≤ 0 and y ≤ 0"
    ],
    "correctAnswer": "x ≥ 0 and y ≥ 0"
  },
  {
    "id": 50,
    "questionText": "The purpose of \"checking your solution\" in linear equations is to ensure:",
    "options": [
      "You used the correct method.",
      "The calculations were done quickly.",
      "The solution is correct.",
      "The variable is isolated."
    ],
    "correctAnswer": "The solution is correct."
  }
  ],
  "Trigonometry": [
    {
    "id": 1,
    "questionText": "A plane figure formed by two rays sharing a common endpoint is called an:",
    "options": [
      "Line",
      "Segment",
      "Angle",
      "Vertex"
    ],
    "correctAnswer": "Angle"
  },
  {
    "id": 2,
    "questionText": "One-quarter of a full rotation, or a 90° angle, is called a:",
    "options": [
      "Straight angle",
      "Acute angle",
      "Right angle",
      "Obtuse angle"
    ],
    "correctAnswer": "Right angle"
  },
  {
    "id": 3,
    "questionText": "How many minutes are in one degree (1°)?",
    "options": [
      "30'",
      "60'",
      "100'",
      "3600'"
    ],
    "correctAnswer": "60'"
  },
  {
    "id": 4,
    "questionText": "How many seconds are in one degree (1°)?",
    "options": [
      "60\"",
      "300\"",
      "3600\"",
      "6000\""
    ],
    "correctAnswer": "3600\""
  },
  {
    "id": 5,
    "questionText": "Convert 45° 45' 45\" to decimal degrees:",
    "options": [
      "45.4545°",
      "45.75125°",
      "45.7625°",
      "45.0125°"
    ],
    "correctAnswer": "45.7625°"
  },
  {
    "id": 6,
    "questionText": "A radian is defined as the angle subtended at the centre of a circle by an arc whose length is equal to the:",
    "options": [
      "Diameter of the circle",
      "Circumference of the circle",
      "Radius of the circle",
      "Chord of the circle"
    ],
    "correctAnswer": "Radius of the circle"
  },
  {
    "id": 7,
    "questionText": "One full revolution of a circle is equivalent to:",
    "options": [
      "180°",
      "2π radians",
      "360°",
      "Both b and c"
    ],
    "correctAnswer": "Both b and c"
  },
  {
    "id": 8,
    "questionText": "How many degrees are in 1 radian (approximately)?",
    "options": [
      "90°",
      "180°",
      "57.2958°",
      "360°"
    ],
    "correctAnswer": "57.2958°"
  },
  {
    "id": 9,
    "questionText": "To convert radians to degrees, multiply by:",
    "options": [
      "π/180",
      "180/π",
      "360/π",
      "π/360"
    ],
    "correctAnswer": "180/π"
  },
  {
    "id": 10,
    "questionText": "Convert 5π/3 rad to degrees:",
    "options": [
      "150°",
      "210°",
      "300°",
      "330°"
    ],
    "correctAnswer": "300°"
  },
  {
    "id": 11,
    "questionText": "Convert 15° to radians:",
    "options": [
      "π/6 rad",
      "π/12 rad",
      "π/18 rad",
      "15π rad"
    ],
    "correctAnswer": "π/12 rad"
  },
  {
    "id": 12,
    "questionText": "The arc length (l) of a sector with radius 'r' and central angle 'θ' (in radians) is given by:",
    "options": [
      "l = r/θ",
      "l = θ/r",
      "l = rθ",
      "l = r²θ"
    ],
    "correctAnswer": "l = rθ"
  },
  {
    "id": 13,
    "questionText": "The area (A) of a sector with radius 'r' and central angle 'θ' (in radians) is given by:",
    "options": [
      "A = rθ",
      "A = (1/2)rθ",
      "A = (1/2)r²θ",
      "A = r²θ"
    ],
    "correctAnswer": "A = (1/2)r²θ"
  },
  {
    "id": 14,
    "questionText": "Find the arc length of a sector with radius r = 10 cm and central angle θ = 60°:",
    "options": [
      "10 cm",
      "10π/3 cm",
      "20π cm",
      "5π/3 cm"
    ],
    "correctAnswer": "10π/3 cm"
  },
  {
    "id": 15,
    "questionText": "Find the area of a sector with radius r = 8 cm and central angle θ = 45°:",
    "options": [
      "8π cm²",
      "16π cm²",
      "4π cm²",
      "32π cm²"
    ],
    "correctAnswer": "8π cm²"
  },
  {
    "id": 16,
    "questionText": "The functions that relate angles to side measures in a right-angled triangle are known as:",
    "options": [
      "Geometric functions",
      "Algebraic functions",
      "Trigonometric functions",
      "Calculus functions"
    ],
    "correctAnswer": "Trigonometric functions"
  },
  {
    "id": 17,
    "questionText": "Who is considered the \"father of trigonometry\"?",
    "options": [
      "Al-Battani",
      "Al-Khwarizmi",
      "Hipparchus of Nicaea",
      "Omar Khayyam"
    ],
    "correctAnswer": "Hipparchus of Nicaea"
  },
  {
    "id": 18,
    "questionText": "In a right-angled triangle, with respect to an angle θ, the side opposite to θ is called the:",
    "options": [
      "Hypotenuse",
      "Base",
      "Perpendicular",
      "Adjacent"
    ],
    "correctAnswer": "Perpendicular"
  },
  {
    "id": 19,
    "questionText": "In a right-angled triangle, sin θ is defined as:",
    "options": [
      "Base / Hypotenuse",
      "Perpendicular / Hypotenuse",
      "Perpendicular / Base",
      "Hypotenuse / Perpendicular"
    ],
    "correctAnswer": "Perpendicular / Hypotenuse"
  },
  {
    "id": 20,
    "questionText": "In a right-angled triangle, tan θ is defined as:",
    "options": [
      "Base / Hypotenuse",
      "Perpendicular / Hypotenuse",
      "Perpendicular / Base",
      "Hypotenuse / Perpendicular"
    ],
    "correctAnswer": "Perpendicular / Base"
  },
  {
    "id": 21,
    "questionText": "What is the reciprocal of sin θ?",
    "options": [
      "cos θ",
      "tan θ",
      "cosec θ",
      "sec θ"
    ],
    "correctAnswer": "cosec θ"
  },
  {
    "id": 22,
    "questionText": "What is the reciprocal of tan θ?",
    "options": [
      "sin θ",
      "cos θ",
      "sec θ",
      "cot θ"
    ],
    "correctAnswer": "cot θ"
  },
  {
    "id": 23,
    "questionText": "Which of the following is true for complementary angles?",
    "options": [
      "sin(90° - θ) = sin θ",
      "cos(90° - θ) = cos θ",
      "sin(90° - θ) = cos θ",
      "tan(90° - θ) = tan θ"
    ],
    "correctAnswer": "sin(90° - θ) = cos θ"
  },
  {
    "id": 24,
    "questionText": "What is tan(90° - θ) equal to?",
    "options": [
      "sin θ",
      "cos θ",
      "cot θ",
      "sec θ"
    ],
    "correctAnswer": "cot θ"
  },
  {
    "id": 25,
    "questionText": "One of the fundamental trigonometric identities is:",
    "options": [
      "sin²θ - cos²θ = 1",
      "sin²θ + cos²θ = 1",
      "tan²θ - sec²θ = 1",
      "cot²θ - cosec²θ = 1"
    ],
    "correctAnswer": "sin²θ + cos²θ = 1"
  },
  {
    "id": 26,
    "questionText": "Another fundamental trigonometric identity is:",
    "options": [
      "1 + tan²θ = sec²θ",
      "1 - tan²θ = sec²θ",
      "tan²θ + cot²θ = 1",
      "sec²θ - cosec²θ = 1"
    ],
    "correctAnswer": "1 + tan²θ = sec²θ"
  },
  {
    "id": 27,
    "questionText": "The identity 1 + cot²θ = cosec²θ is a:",
    "options": [
      "Pythagorean identity",
      "Reciprocal identity",
      "Quotient identity",
      "Sum identity"
    ],
    "correctAnswer": "Pythagorean identity"
  },
  {
    "id": 28,
    "questionText": "Show that (sec²θ - 1)cos²θ = sin²θ. Which identity is used to replace (sec²θ - 1)?",
    "options": [
      "sin²θ + cos²θ = 1",
      "tan²θ",
      "cot²θ",
      "cosec²θ"
    ],
    "correctAnswer": "tan²θ"
  },
  {
    "id": 29,
    "questionText": "What is the value of sin 45°?",
    "options": [
      "1",
      "1/√2",
      "√3/2",
      "1/2"
    ],
    "correctAnswer": "1/√2"
  },
  {
    "id": 30,
    "questionText": "What is the value of tan 45°?",
    "options": [
      "0",
      "1",
      "Undefined",
      "√2"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 31,
    "questionText": "What is the value of sin 30°?",
    "options": [
      "1",
      "1/2",
      "√3/2",
      "√2/2"
    ],
    "correctAnswer": "1/2"
  },
  {
    "id": 32,
    "questionText": "What is the value of cos 60°?",
    "options": [
      "√3/2",
      "1/2",
      "0",
      "1"
    ],
    "correctAnswer": "1/2"
  },
  {
    "id": 33,
    "questionText": "What is the value of tan 60°?",
    "options": [
      "1/√3",
      "1",
      "√3",
      "Undefined"
    ],
    "correctAnswer": "√3"
  },
  {
    "id": 34,
    "questionText": "Finding the measures of the remaining elements of a triangle when three elements (including at least one side) are known is called:",
    "options": [
      "Proving a triangle",
      "Constructing a triangle",
      "Solving a triangle",
      "Analyzing a triangle"
    ],
    "correctAnswer": "Solving a triangle"
  },
  {
    "id": 35,
    "questionText": "In a right-angled triangle ABC (mLB = 90°), if mLA = 30° and a = 2 cm, what is the measure of mL C?",
    "options": [
      "30°",
      "60°",
      "90°",
      "45°"
    ],
    "correctAnswer": "60°"
  },
  {
    "id": 36,
    "questionText": "In a right-angled triangle ABC (mLB = 90°), if mLA = 30° and a = 2 cm, what is the length of side 'b' (hypotenuse)?",
    "options": [
      "2 cm",
      "3 cm",
      "4 cm",
      "2√3 cm"
    ],
    "correctAnswer": "4 cm"
  },
  {
    "id": 37,
    "questionText": "The angle between the horizontal line (eye level) and a line from the eye to the top of a building is called an:",
    "options": [
      "Angle of depression",
      "Angle of incidence",
      "Angle of elevation",
      "Angle of refraction"
    ],
    "correctAnswer": "Angle of elevation"
  },
  {
    "id": 38,
    "questionText": "The angle between the horizontal line (eye level) and a line from the eye to an object below the horizontal line is called an:",
    "options": [
      "Angle of elevation",
      "Angle of depression",
      "Angle of incidence",
      "Angle of reflection"
    ],
    "correctAnswer": "Angle of depression"
  },
  {
    "id": 39,
    "questionText": "In which quadrant does 65° lie?",
    "options": [
      "1st",
      "2nd",
      "3rd",
      "4th"
    ],
    "correctAnswer": "1st"
  },
  {
    "id": 40,
    "questionText": "In which quadrant does -40° lie?",
    "options": [
      "1st",
      "2nd",
      "3rd",
      "4th"
    ],
    "correctAnswer": "4th"
  },
  {
    "id": 41,
    "questionText": "Convert 123.456° into degrees, minutes, and seconds:",
    "options": [
      "123° 27' 21.6\"",
      "123° 45' 6\"",
      "123° 27' 6\"",
      "123° 45' 21.6\""
    ],
    "correctAnswer": "123° 27' 21.6\""
  },
  {
    "id": 42,
    "questionText": "Convert 78° 45' 36\" to decimal degrees:",
    "options": [
      "78.4536°",
      "78.76°",
      "78.75°",
      "78.456°"
    ],
    "correctAnswer": "78.76°"
  },
  {
    "id": 43,
    "questionText": "Which of the following equations correctly defines cot θ?",
    "options": [
      "1/sin θ",
      "1/cos θ",
      "cos θ / sin θ",
      "sin θ / cos θ"
    ],
    "correctAnswer": "cos θ / sin θ"
  },
  {
    "id": 44,
    "questionText": "Fill in the blank: sin 30° = sin (90° - 60°) = _____.",
    "options": [
      "sin 60°",
      "cos 60°",
      "tan 60°",
      "cot 60°"
    ],
    "correctAnswer": "cos 60°"
  },
  {
    "id": 45,
    "questionText": "Fill in the blank: tan 60° = tan (90° - 30°) = _____.",
    "options": [
      "tan 30°",
      "sin 30°",
      "cot 30°",
      "cos 30°"
    ],
    "correctAnswer": "cot 30°"
  },
  {
    "id": 46,
    "questionText": "If a ladder makes an angle of 60° with the ground and reaches a height of 10m along the wall, what is the length of the ladder?",
    "options": [
      "10m",
      "20m",
      "11.55m",
      "5m"
    ],
    "correctAnswer": "11.55m"
  },
  {
    "id": 47,
    "questionText": "A light house tower is 150 m high from the sea level. The angle of depression from the top of the tower to a ship is 60°. Find the distance between the ship and the tower?",
    "options": [
      "150 m",
      "86.6 m",
      "150√3 m",
      "75 m"
    ],
    "correctAnswer": "86.6 m"
  },
  {
    "id": 48,
    "questionText": "The value of tan⁻¹(2) in radians is approximately:",
    "options": [
      "π/2",
      "3π/2",
      "1.11π",
      "1.11"
    ],
    "correctAnswer": "1.11"
  },
  {
    "id": 49,
    "questionText": "If sin θ = 3/5 and θ is an acute angle, then cos²θ =:",
    "options": [
      "7/25",
      "24/25",
      "16/25",
      "4/25"
    ],
    "correctAnswer": "16/25"
  },
  {
    "id": 50,
    "questionText": "cos²(100π) + sin²(100π) = _____.",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctAnswer": "1"
  }
  ],
  "Coordinate Geometry": [
     {
    "id": 1,
    "questionText": "Which French philosopher and mathematician introduced algebraic methods in geometry, giving birth to coordinate geometry?",
    "options": [
      "Euclid",
      "Pythagoras",
      "Rene Descartes",
      "Isaac Newton"
    ],
    "correctAnswer": "Rene Descartes"
  },
  {
    "id": 2,
    "questionText": "The horizontal line in a coordinate plane is called the:",
    "options": [
      "y-axis",
      "x-axis",
      "origin",
      "z-axis"
    ],
    "correctAnswer": "x-axis"
  },
  {
    "id": 3,
    "questionText": "The point of intersection of the x-axis and y-axis is called the:",
    "options": [
      "quadrant",
      "coordinate",
      "origin",
      "graph"
    ],
    "correctAnswer": "origin"
  },
  {
    "id": 4,
    "questionText": "In which quadrant do all points (x, y) have x > 0 and y > 0?",
    "options": [
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV",
      "Quadrant I"
    ],
    "correctAnswer": "Quadrant I"
  },
  {
    "id": 5,
    "questionText": "A point (x, y) where x < 0 and y > 0 lies in which quadrant?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant II"
  },
  {
    "id": 6,
    "questionText": "Which quadrant contains points (x, y) where x < 0 and y < 0?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant III"
  },
  {
    "id": 7,
    "questionText": "A point (x, y) with x > 0 and y < 0 is located in which quadrant?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant IV"
  },
  {
    "id": 8,
    "questionText": "The graph of a set of ordered pairs of real numbers is the:",
    "options": [
      "single point in the plane",
      "aggregate of all points in the plane that correspond to ordered pairs of the set",
      "intersection of the axes",
      "origin"
    ],
    "correctAnswer": "aggregate of all points in the plane that correspond to ordered pairs of the set"
  },
  {
    "id": 9,
    "questionText": "Points on the x-axis are of the form:",
    "options": [
      "(0, b)",
      "(a, 0)",
      "(a, a)",
      "(0, 0)"
    ],
    "correctAnswer": "(a, 0)"
  },
  {
    "id": 10,
    "questionText": "Points on the y-axis are of the form:",
    "options": [
      "(a, 0)",
      "(0, b)",
      "(b, b)",
      "(0, 0)"
    ],
    "correctAnswer": "(0, b)"
  },
  {
    "id": 11,
    "questionText": "What is the distance between two points A(x1, y1) and B(x2, y2) in a coordinate plane?",
    "options": [
      "sqrt((x2 - x1)^2 + (y1 - y2)^2)",
      "sqrt((x1 - x2)^2 - (y2 - y1)^2)",
      "sqrt((x2 - x1)^2 + (y2 - y1)^2)",
      "(x2 - x1) + (y2 - y1)"
    ],
    "correctAnswer": "sqrt((x2 - x1)^2 + (y2 - y1)^2)"
  },
  {
    "id": 12,
    "questionText": "The distance between points A(5, 6) and B(5, -2) is:",
    "options": [
      "sqrt(0^2 + 8^2)",
      "sqrt(10^2 + 4^2)",
      "sqrt(0^2 + 4^2)",
      "sqrt(8^2 + 0^2)"
    ],
    "correctAnswer": "sqrt(0^2 + 8^2)"
  },
  {
    "id": 13,
    "questionText": "Given A(5, 6) and B(5, -2), the distance |AB| is:",
    "options": [
      "4",
      "8",
      "10",
      "12"
    ],
    "correctAnswer": "8"
  },
  {
    "id": 14,
    "questionText": "The distance between points C(-4, -2) and D(0, 9) is:",
    "options": [
      "sqrt(4^2 + 7^2)",
      "sqrt(4^2 + 11^2)",
      "sqrt(0^2 + 11^2)",
      "sqrt((-4)^2 + 9^2)"
    ],
    "correctAnswer": "sqrt(4^2 + 11^2)"
  },
  {
    "id": 15,
    "questionText": "Given C(-4, -2) and D(0, 9), the distance |CD| is:",
    "options": [
      "sqrt(16 + 49)",
      "sqrt(16 + 81)",
      "sqrt(16 + 121)",
      "sqrt(0 + 121)"
    ],
    "correctAnswer": "sqrt(16 + 81)"
  },
  {
    "id": 16,
    "questionText": "According to the example, which points are vertices of a right triangle?",
    "options": [
      "A(-1, 2), B(7, 5), C(2, -6)",
      "A(0, 0), B(1, 0), C(0, 1)",
      "A(1, 1), B(2, 2), C(3, 3)",
      "A(0, 2), B(sqrt(3), 1), C(0, -2)"
    ],
    "correctAnswer": "A(-1, 2), B(7, 5), C(2, -6)"
  },
  {
    "id": 17,
    "questionText": "If C(-5, 3) is the center of a circle and P(7, -2) lies on the circle, what is the radius?",
    "options": [
      "5 units",
      "10 units",
      "13 units",
      "15 units"
    ],
    "correctAnswer": "13 units"
  },
  {
    "id": 18,
    "questionText": "The midpoint formula for a line segment joining A(x1, y1) and B(x2, y2) is:",
    "options": [
      "((x1 + y1)/2, (x2 + y2)/2)",
      "((x1 + x2)/2, (y1 + y2)/2)",
      "((x2 - x1)/2, (y2 - y1)/2)",
      "((x1 - x2)/2, (y1 - y2)/2)"
    ],
    "correctAnswer": "((x1 + x2)/2, (y1 + y2)/2)"
  },
  {
    "id": 19,
    "questionText": "The x-coordinate of the midpoint is the average of the:",
    "options": [
      "y-coordinates",
      "x-coordinates",
      "distances",
      "slopes"
    ],
    "correctAnswer": "x-coordinates"
  },
  {
    "id": 20,
    "questionText": "The midpoint of the line segment joining A(2, 3) and B(8, 7) is:",
    "options": [
      "(10, 10)",
      "(6, 4)",
      "(5, 5)",
      "(4, 2)"
    ],
    "correctAnswer": "(5, 5)"
  },
  {
    "id": 21,
    "questionText": "The angle alpha (0° < alpha < 180°) measured counterclockwise from the positive x-axis to a line is called the:",
    "options": [
      "slope",
      "gradient",
      "inclination",
      "angle of depression"
    ],
    "correctAnswer": "inclination"
  },
  {
    "id": 22,
    "questionText": "The slope or gradient m of a line passing through P(x1, y1) and Q(x2, y2) is given by:",
    "options": [
      "(x2 - x1) / (y2 - y1)",
      "(y1 - y2) / (x2 - x1)",
      "(y2 - y1) / (x2 - x1)",
      "(x1 + x2) / (y1 + y2)"
    ],
    "correctAnswer": "(y2 - y1) / (x2 - x1)"
  },
  {
    "id": 23,
    "questionText": "A line is horizontal if its slope (m) is:",
    "options": [
      "undefined",
      "1",
      "0",
      "-1"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 24,
    "questionText": "A line is vertical if its slope (m) is:",
    "options": [
      "0",
      "1",
      "undefined",
      "-1"
    ],
    "correctAnswer": "undefined"
  },
  {
    "id": 25,
    "questionText": "If the slope of AB is equal to the slope of BC, then points A, B, and C are:",
    "options": [
      "perpendicular",
      "parallel",
      "collinear",
      "intersecting"
    ],
    "correctAnswer": "collinear"
  },
  {
    "id": 26,
    "questionText": "Two lines l1 and l2 with slopes m1 and m2 are parallel if:",
    "options": [
      "m1 = -m2",
      "m1 = 1/m2",
      "m1 = m2",
      "m1 * m2 = -1"
    ],
    "correctAnswer": "m1 = m2"
  },
  {
    "id": 27,
    "questionText": "Two lines l1 and l2 with slopes m1 and m2 are perpendicular if:",
    "options": [
      "m1 = m2",
      "m1 * m2 = 1",
      "m1 = -m2",
      "m1 * m2 = -1"
    ],
    "correctAnswer": "m1 * m2 = -1"
  },
  {
    "id": 28,
    "questionText": "The points A(-3, 6), B(3, 2), and C(6, 0) are collinear because, according to the example:",
    "options": [
      "slope of AB = 1 and slope of BC = -1",
      "slope of AB = -2/3 and slope of BC = -2/3",
      "slope of AB = 3/2 and slope of BC = 3/2",
      "their product of slopes is -1"
    ],
    "correctAnswer": "slope of AB = -2/3 and slope of BC = -2/3"
  },
  {
    "id": 29,
    "questionText": "An equation of the form y = mx + c is called the:",
    "options": [
      "Point-slope form",
      "Intercept form",
      "Slope-intercept form",
      "Normal form"
    ],
    "correctAnswer": "Slope-intercept form"
  },
  {
    "id": 30,
    "questionText": "In the equation y = mx + c, c represents the:",
    "options": [
      "x-intercept",
      "slope",
      "y-intercept",
      "inclination"
    ],
    "correctAnswer": "y-intercept"
  },
  {
    "id": 31,
    "questionText": "If a line passes through the origin, its equation in slope-intercept form is:",
    "options": [
      "y = mx + 1",
      "y = c",
      "y = mx",
      "x = my"
    ],
    "correctAnswer": "y = mx"
  },
  {
    "id": 32,
    "questionText": "The equation of a non-vertical straight line l with slope m and passing through a point Q(x1, y1) is:",
    "options": [
      "y - y1 = m(x - x1)",
      "y + y1 = m(x + x1)",
      "x - x1 = m(y - y1)",
      "y = mx + y1"
    ],
    "correctAnswer": "y - y1 = m(x - x1)"
  },
  {
    "id": 33,
    "questionText": "The symmetric form of the equation of a line with inclination alpha passing through (x1, y1) is:",
    "options": [
      "(x - x1)/sin(alpha) = (y - y1)/cos(alpha)",
      "(x - x1)/cos(alpha) = (y - y1)/sin(alpha) = r",
      "x*cos(alpha) + y*sin(alpha) = p",
      "x/a + y/b = 1"
    ],
    "correctAnswer": "(x - x1)/cos(alpha) = (y - y1)/sin(alpha) = r"
  },
  {
    "id": 34,
    "questionText": "The equation of a non-vertical straight line passing through two points Q(x1, y1) and R(x2, y2) is:",
    "options": [
      "(y - y1) = ((y2 - y1) / (x2 - x1)) * (x - x1)",
      "(y - y1) = ((x2 - x1) / (y2 - y1)) * (x - x1)",
      "(x - x1) = ((y2 - y1) / (x2 - x1)) * (y - y1)",
      "y = mx + c"
    ],
    "correctAnswer": "(y - y1) = ((y2 - y1) / (x2 - x1)) * (x - x1)"
  },
  {
    "id": 35,
    "questionText": "The equation of a line whose non-zero x and y-intercepts are a and b respectively is:",
    "options": [
      "x/a + y/b = 1",
      "x/b + y/a = 1",
      "y = mx + c",
      "y - y1 = m(x - x1)"
    ],
    "correctAnswer": "x/a + y/b = 1"
  },
  {
    "id": 36,
    "questionText": "An equation of a non-vertical straight line l, such that length of the perpendicular from the origin to l is p and alpha is the inclination of this perpendicular, is:",
    "options": [
      "x*sin(alpha) + y*cos(alpha) = p",
      "x*cos(alpha) + y*sin(alpha) = p",
      "(x - x1)/cos(alpha) = (y - y1)/sin(alpha)",
      "x/a + y/b = 1"
    ],
    "correctAnswer": "x*cos(alpha) + y*sin(alpha) = p"
  },
  {
    "id": 37,
    "questionText": "The general form of the equation of a straight line is:",
    "options": [
      "y = mx + c",
      "x/a + y/b = 1",
      "Ax + By + C = 0",
      "x*cos(alpha) + y*sin(alpha) = p"
    ],
    "correctAnswer": "Ax + By + C = 0"
  },
  {
    "id": 38,
    "questionText": "If A=0 and B!=0 in the general form Ax + By + C = 0, the line is parallel to the:",
    "options": [
      "x-axis",
      "y-axis",
      "origin",
      "z-axis"
    ],
    "correctAnswer": "x-axis"
  },
  {
    "id": 39,
    "questionText": "If B=0 and A!=0 in the general form Ax + By + C = 0, the line is parallel to the:",
    "options": [
      "x-axis",
      "y-axis",
      "origin",
      "z-axis"
    ],
    "correctAnswer": "y-axis"
  },
  {
    "id": 40,
    "questionText": "Transforming 5x - 12y + 39 = 0 into slope-intercept form gives:",
    "options": [
      "y = (12/5)x + (39/5)",
      "y = (5/12)x + (39/12)",
      "y = (5/12)x - (39/12)",
      "y = (12/5)x - (39/5)"
    ],
    "correctAnswer": "y = (5/12)x + (39/12)"
  },
  {
    "id": 41,
    "questionText": "Transforming 5x - 12y + 39 = 0 into two-intercept form gives:",
    "options": [
      "x/(-39/5) + y/(39/12) = 1",
      "x/(39/5) + y/(-39/12) = 1",
      "x/(-12) + y/(5) = 1",
      "x/(5) + y/(-12) = 1"
    ],
    "correctAnswer": "x/(-39/5) + y/(39/12) = 1"
  },
  {
    "id": 42,
    "questionText": "The distance between Town A at (2, 3) and Town B at (-4, -1) is approximately:",
    "options": [
      "5.21 units",
      "6.21 units",
      "7.21 units",
      "8.21 units"
    ],
    "correctAnswer": "7.21 units"
  },
  {
    "id": 43,
    "questionText": "Given City A at (3, 4) and City B at (7, 1), the straight-line distance between them is:",
    "options": [
      "sqrt(25)",
      "sqrt(16)",
      "sqrt(9)",
      "sqrt(5)"
    ],
    "correctAnswer": "sqrt(25)"
  },
  {
    "id": 44,
    "questionText": "An engineer is building a bridge between (2, 5) and (8, 9). The midpoint of the bridge is at:",
    "options": [
      "(10, 14)",
      "(4, 4)",
      "(5, 7)",
      "(3, 2)"
    ],
    "correctAnswer": "(5, 7)"
  },
  {
    "id": 45,
    "questionText": "Abdul Hadi's journey midpoint from Latitude 10° N, Longitude 50° E to Latitude 20° N, Longitude 60° E is at:",
    "options": [
      "Latitude 15° N, Longitude 55° E",
      "Latitude 30° N, Longitude 110° E",
      "Latitude 5° N, Longitude 10° E",
      "Latitude 10° N, Longitude 50° E"
    ],
    "correctAnswer": "Latitude 15° N, Longitude 55° E"
  },
  {
    "id": 46,
    "questionText": "The length of a straight pathway from P(2, 3) to Q(8, 9) is:",
    "options": [
      "sqrt(36)",
      "sqrt(72)",
      "sqrt(100)",
      "sqrt(64)"
    ],
    "correctAnswer": "sqrt(72)"
  },
  {
    "id": 47,
    "questionText": "The concept of slope is widely used in:",
    "options": [
      "cooking and fashion design",
      "engineering, architecture, and skiing",
      "music and literature",
      "gardening and painting"
    ],
    "correctAnswer": "engineering, architecture, and skiing"
  },
  {
    "id": 48,
    "questionText": "The Cartesian coordinate system was invented by Rene Descartes when he was trying to describe:",
    "options": [
      "the orbits of planets",
      "the path of a fly crawling on the ceiling",
      "the movement of ocean tides",
      "the growth of plants"
    ],
    "correctAnswer": "the path of a fly crawling on the ceiling"
  },
  {
    "id": 49,
    "questionText": "If a line cuts the x-axis at (2, 0) and y-axis at (0, -4), its equation in intercept form is x/2 + y/(-4) = 1, which simplifies to:",
    "options": [
      "2x + y - 4 = 0",
      "2x - y - 4 = 0",
      "x + 2y - 4 = 0",
      "x - 2y - 4 = 0"
    ],
    "correctAnswer": "2x - y - 4 = 0"
  },
  {
    "id": 50,
    "questionText": "The value h such that points A(-1, h), B(3, 2) and C(7, 3) are collinear is: [199, Exercise 7.1 Q7]",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": "1"
  }
  ],
  "Logic": [
    {
    "id": 1,
    "questionText": "Logic is defined as a systematic method of:",
    "options": [
      "Experimentation",
      "Reasoning",
      "Calculation",
      "Observation"
    ],
    "correctAnswer": "Reasoning"
  },
  {
    "id": 2,
    "questionText": "Drawing general conclusions from a limited number of observations or experiences is called:",
    "options": [
      "Deduction",
      "Induction",
      "Abduction",
      "Conjecture"
    ],
    "correctAnswer": "Induction"
  },
  {
    "id": 3,
    "questionText": "Drawing conclusions from premises believed to be true is called:",
    "options": [
      "Induction",
      "Hypothesis",
      "Deduction",
      "Conjecture"
    ],
    "correctAnswer": "Deduction"
  },
  {
    "id": 4,
    "questionText": "A mathematical statement is a unit of information that is either:",
    "options": [
      "Accurate or ambiguous",
      "True or false, but not both",
      "Subjective or objective",
      "Proven or unproven"
    ],
    "correctAnswer": "True or false, but not both"
  },
  {
    "id": 5,
    "questionText": "Which of the following is an example of a true mathematical statement?",
    "options": [
      "3 + 4 = 8",
      "Z is a subset of W",
      "The sum of two odd integers is an even integer",
      "All isosceles triangles are equilateral triangles"
    ],
    "correctAnswer": "The sum of two odd integers is an even integer"
  },
  {
    "id": 6,
    "questionText": "Which of the following is an example of a false mathematical statement?",
    "options": [
      "Q is a subset of R",
      "x^2 - 5x + 6 = 0 for x = 2 or x = 3",
      "The circumference of a circle with radius r is 2πr",
      "The set of integers is finite"
    ],
    "correctAnswer": "The set of integers is finite"
  },
  {
    "id": 7,
    "questionText": "The symbol ~ (tilde) denotes:",
    "options": [
      "Conjunction",
      "Disjunction",
      "Negation",
      "Implication"
    ],
    "correctAnswer": "Negation"
  },
  {
    "id": 8,
    "questionText": "The symbol /\\ denotes:",
    "options": [
      "Or",
      "Not",
      "And",
      "If...then"
    ],
    "correctAnswer": "And"
  },
  {
    "id": 9,
    "questionText": "The symbol V denotes:",
    "options": [
      "And",
      "Or",
      "If and only if",
      "Implies"
    ],
    "correctAnswer": "Or"
  },
  {
    "id": 10,
    "questionText": "The symbolic expression p -> q is read as:",
    "options": [
      "p and q",
      "p or q",
      "If p then q",
      "p is equivalent to q"
    ],
    "correctAnswer": "If p then q"
  },
  {
    "id": 11,
    "questionText": "The symbolic expression p <-> q is read as:",
    "options": [
      "p implies q",
      "p is equivalent to q",
      "If p then q",
      "p or q"
    ],
    "correctAnswer": "p is equivalent to q"
  },
  {
    "id": 12,
    "questionText": "If p is true, its negation ~p is:",
    "options": [
      "True",
      "False",
      "Undefined",
      "Both true and false"
    ],
    "correctAnswer": "False"
  },
  {
    "id": 13,
    "questionText": "A conjunction p /\\ q is considered to be true only if:",
    "options": [
      "Both statements p and q are false",
      "Only p is true",
      "Both statements p and q are true",
      "Only q is true"
    ],
    "correctAnswer": "Both statements p and q are true"
  },
  {
    "id": 14,
    "questionText": "Given the statement \"4 < 5 /\\ 8 < 10\", its truth value is:",
    "options": [
      "True",
      "False",
      "Undefined",
      "Cannot be determined"
    ],
    "correctAnswer": "True"
  },
  {
    "id": 15,
    "questionText": "Given the statement \"2 + 2 = 3 /\\ 6 + 6 = 10\", its truth value is:",
    "options": [
      "True",
      "False",
      "Undefined",
      "Both true and false"
    ],
    "correctAnswer": "False"
  },
  {
    "id": 16,
    "questionText": "A disjunction p V q is considered to be true when:",
    "options": [
      "Both statements are false",
      "At least one of the statements is true",
      "Both statements are true",
      "Only p is false"
    ],
    "correctAnswer": "At least one of the statements is true"
  },
  {
    "id": 17,
    "questionText": "Given the disjunction \"10 is a positive integer or 0 is a rational number\", its truth value is:",
    "options": [
      "True",
      "False",
      "Undefined",
      "Cannot be determined"
    ],
    "correctAnswer": "True"
  },
  {
    "id": 18,
    "questionText": "Given the disjunction \"A triangle can have two right angles or Lahore is the capital of Sindh\", its truth value is:",
    "options": [
      "True",
      "False",
      "Undefined",
      "Both true and false"
    ],
    "correctAnswer": "False"
  },
  {
    "id": 19,
    "questionText": "A conditional statement p -> q is regarded as false only when:",
    "options": [
      "The antecedent p is false and the consequent q is true",
      "The antecedent p is true and the consequent q is false",
      "Both p and q are false",
      "Both p and q are true"
    ],
    "correctAnswer": "The antecedent p is true and the consequent q is false"
  },
  {
    "id": 20,
    "questionText": "The statement p <-> q is true only when:",
    "options": [
      "Both p and q are true, or both are false",
      "p is true and q is false",
      "p is false and q is true",
      "Only p is true"
    ],
    "correctAnswer": "Both p and q are true, or both are false"
  },
  {
    "id": 21,
    "questionText": "For a given conditional p -> q, the statement q -> p is called its:",
    "options": [
      "Inverse",
      "Contrapositive",
      "Converse",
      "Negation"
    ],
    "correctAnswer": "Converse"
  },
  {
    "id": 22,
    "questionText": "For a given conditional p -> q, the statement ~p -> ~q is called its:",
    "options": [
      "Converse",
      "Contrapositive",
      "Inverse",
      "Biconditional"
    ],
    "correctAnswer": "Inverse"
  },
  {
    "id": 23,
    "questionText": "For a given conditional p -> q, the statement ~q -> ~p is called its:",
    "options": [
      "Converse",
      "Inverse",
      "Contrapositive",
      "Conjunction"
    ],
    "correctAnswer": "Contrapositive"
  },
  {
    "id": 24,
    "questionText": "From the truth table, which statements are equivalent to each other?",
    "options": [
      "Any conditional and its converse",
      "Any conditional and its inverse",
      "Any conditional and its contrapositive",
      "Converse and contrapositive"
    ],
    "correctAnswer": "Any conditional and its contrapositive"
  },
  {
    "id": 25,
    "questionText": "A mathematical statement that has been proved true based on previously known facts is called a:",
    "options": [
      "Conjecture",
      "Axiom",
      "Theorem",
      "Postulate"
    ],
    "correctAnswer": "Theorem"
  },
  {
    "id": 26,
    "questionText": "\"The sum of the interior angles of a quadrilateral is 360 degrees\" is an example of a:",
    "options": [
      "Conjecture",
      "Axiom",
      "Theorem",
      "Hypothesis"
    ],
    "correctAnswer": "Theorem"
  },
  {
    "id": 27,
    "questionText": "A mathematical statement or hypothesis that is believed to be true based on observations but has not yet been proved is called a:",
    "options": [
      "Theorem",
      "Axiom",
      "Conjecture",
      "Proof"
    ],
    "correctAnswer": "Conjecture"
  },
  {
    "id": 28,
    "questionText": "\"Every even number greater than 2 can be written as the sum of two prime numbers\" is an example of a:",
    "options": [
      "Theorem",
      "Axiom",
      "Conjecture",
      "Postulate"
    ],
    "correctAnswer": "Conjecture"
  },
  {
    "id": 29,
    "questionText": "A mathematical statement that is accepted as true without any evidence or requiring any proof is called an:",
    "options": [
      "Theorem",
      "Conjecture",
      "Axiom",
      "Hypothesis"
    ],
    "correctAnswer": "Axiom"
  },
  {
    "id": 30,
    "questionText": "\"Through a given point, infinitely many lines can pass\" is an example of an:",
    "options": [
      "Theorem",
      "Conjecture",
      "Axiom",
      "Deduction"
    ],
    "correctAnswer": "Axiom"
  },
  {
    "id": 31,
    "questionText": "Axioms are sometimes referred to as:",
    "options": [
      "Theorems",
      "Conjectures",
      "Postulates",
      "Hypotheses"
    ],
    "correctAnswer": "Postulates"
  },
  {
    "id": 32,
    "questionText": "What is the defining characteristic of an axiom?",
    "options": [
      "It must be proven experimentally.",
      "It is accepted as true without proof.",
      "It is a statement that can be false.",
      "It is derived from other statements."
    ],
    "correctAnswer": "It is accepted as true without proof."
  },
  {
    "id": 33,
    "questionText": "What is the best representation of the negation of the statement \"The stove is burning\"?",
    "options": [
      "The stove is dim.",
      "The stove is not burning.",
      "The stove is turned to low heat.",
      "It is both burning and not burning."
    ],
    "correctAnswer": "The stove is not burning."
  },
  {
    "id": 34,
    "questionText": "If x is an odd integer, then x^2 is also an odd integer. This is an example of:",
    "options": [
      "Inductive reasoning",
      "A conjecture",
      "A deductive proof",
      "An axiom"
    ],
    "correctAnswer": "A deductive proof"
  },
  {
    "id": 35,
    "questionText": "The sum of two odd numbers is an even number. This can be proven by:",
    "options": [
      "Observation",
      "Deductive proof",
      "Inductive reasoning",
      "Experimentation"
    ],
    "correctAnswer": "Deductive proof"
  },
  {
    "id": 36,
    "questionText": "Which law allows us to write (ad + cb)/bd as (ad * (1/bd)) + (cb * (1/bd))?",
    "options": [
      "Commutative Law of Multiplication",
      "Associative Law of Addition",
      "Distributive Property",
      "Multiplicative Identity"
    ],
    "correctAnswer": "Distributive Property"
  },
  {
    "id": 37,
    "questionText": "If p is \"It is raining\" and q is \"The ground is wet\", then p -> q represents:",
    "options": [
      "It is raining and the ground is wet.",
      "It is raining or the ground is wet.",
      "If it is raining, then the ground is wet.",
      "It is raining if and only if the ground is wet."
    ],
    "correctAnswer": "If it is raining, then the ground is wet."
  },
  {
    "id": 38,
    "questionText": "According to the source, what significant contribution did Kurt Gödel make to mathematical logic?",
    "options": [
      "Developed set theory",
      "Introduced incompleteness theorems",
      "Formalized Euclidean geometry",
      "Invented calculus"
    ],
    "correctAnswer": "Introduced incompleteness theorems"
  },
  {
    "id": 39,
    "questionText": "The statement \"A set B is a subset of a set A if every element of set B is also an element of a set A\" is an example of a:",
    "options": [
      "Conjecture",
      "Definition",
      "Theorem",
      "Axiom"
    ],
    "correctAnswer": "Definition"
  },
  {
    "id": 40,
    "questionText": "Which of these properties is used in the simplification (1/15) * (15x * 3x + 15 * 1) to (1/15) * 15(3x + 1)?",
    "options": [
      "Multiplicative Identity",
      "Distributive Law",
      "Associative Law",
      "Commutative Law"
    ],
    "correctAnswer": "Distributive Law"
  },
  {
    "id": 41,
    "questionText": "In the truth table for p -> q, when p is False and q is True, p -> q is: [244, Table 4]",
    "options": [
      "True",
      "False",
      "Undefined",
      "Depends on other factors"
    ],
    "correctAnswer": "True"
  },
  {
    "id": 42,
    "questionText": "In the truth table for p -> q, when p is False and q is False, p -> q is: [244, Table 4]",
    "options": [
      "True",
      "False",
      "Undefined",
      "Depends on other factors"
    ],
    "correctAnswer": "True"
  },
  {
    "id": 43,
    "questionText": "If a theorem is proved by proving its contrapositive, this is justified because:",
    "options": [
      "Converse and inverse are equivalent",
      "Any conditional and its contrapositive are equivalent",
      "Any conditional and its converse are equivalent",
      "Contrapositive is always true"
    ],
    "correctAnswer": "Any conditional and its contrapositive are equivalent"
  },
  {
    "id": 44,
    "questionText": "Which of the following is an example of a mathematical statement that is true?",
    "options": [
      "Between any two real numbers, there is no real number.",
      "{1, 2, 3, 4} intersect {-1, -2, -3, -4} = {1, 2, 3, 4}.",
      "xm * xn = xm+n for non-zero real number x and integers m, n.",
      "The sum of the interior angle of an n-sided polygon is (n-1) * 180°."
    ],
    "correctAnswer": "xm * xn = xm+n for non-zero real number x and integers m, n."
  },
  {
    "id": 45,
    "questionText": "The antecedent of a conditional statement is also called the:",
    "options": [
      "Consequent",
      "Conclusion",
      "Hypothesis",
      "Equivalence"
    ],
    "correctAnswer": "Hypothesis"
  },
  {
    "id": 46,
    "questionText": "The consequent of a conditional statement is also called the:",
    "options": [
      "Antecedent",
      "Hypothesis",
      "Conclusion",
      "Premise"
    ],
    "correctAnswer": "Conclusion"
  },
  {
    "id": 47,
    "questionText": "The statement \"Every natural number has a successor, which is also a natural number\" is part of:",
    "options": [
      "Euclid Axioms",
      "Peano Axioms",
      "Axiom of Extensionality",
      "Axiom of Power Set"
    ],
    "correctAnswer": "Peano Axioms"
  },
  {
    "id": 48,
    "questionText": "The statement Vx E U, x E Φ -> x E A for an empty set Φ is true because:",
    "options": [
      "its antecedent is always true.",
      "its antecedent is always false.",
      "its consequent is always true.",
      "it is a tautology."
    ],
    "correctAnswer": "its antecedent is always false."
  },
  {
    "id": 49,
    "questionText": "What type of reasoning is helpful in natural sciences, where dependence is on repeated experiments or observations?",
    "options": [
      "Deductive reasoning",
      "Inductive reasoning",
      "Analytical reasoning",
      "Abductive reasoning"
    ],
    "correctAnswer": "Inductive reasoning"
  },
  {
    "id": 50,
    "questionText": "The concept of logic plays a key role in:",
    "options": [
      "emotional responses",
      "artistic expression",
      "problem-solving and decision-making",
      "physical strength"
    ],
    "correctAnswer": "problem-solving and decision-making"
  }
  ],
  "Similar Figures": [
    {
    "id": 1,
    "questionText": "Similar figures have the same:",
    "options": [
      "size",
      "shape",
      "area",
      "volume"
    ],
    "correctAnswer": "shape"
  },
  {
    "id": 2,
    "questionText": "Two polygons are similar if their corresponding angles are equal and their corresponding sides are:",
    "options": [
      "equal",
      "congruent",
      "perpendicular",
      "proportional"
    ],
    "correctAnswer": "proportional"
  },
  {
    "id": 3,
    "questionText": "Which of the following statements about equilateral triangles is true?",
    "options": [
      "All equilateral triangles are congruent.",
      "All equilateral triangles are similar to each other.",
      "Equilateral triangles can have different angle measures.",
      "Equilateral triangles cannot be similar to squares."
    ],
    "correctAnswer": "All equilateral triangles are similar to each other."
  },
  {
    "id": 4,
    "questionText": "If two angles in one triangle are congruent to two corresponding angles in another triangle, then the triangles are:",
    "options": [
      "congruent",
      "similar",
      "equilateral",
      "right-angled"
    ],
    "correctAnswer": "similar"
  },
  {
    "id": 5,
    "questionText": "The similarity symbol is:",
    "options": [
      "=",
      "~",
      "==",
      "~="
    ],
    "correctAnswer": "~"
  },
  {
    "id": 6,
    "questionText": "In triangles ABC and DEF, if m∠A = m∠D, m∠B = m∠E, and m∠C = m∠F, then ΔABC is similar to ΔDEF by which criterion?",
    "options": [
      "SSS (Side-Side-Side)",
      "SAS (Side-Angle-Side)",
      "AAA (Angle-Angle-Angle)",
      "ASA (Angle-Side-Angle)"
    ],
    "correctAnswer": "AAA (Angle-Angle-Angle)"
  },
  {
    "id": 7,
    "questionText": "If the ratio of two corresponding sides and their included angle are equal, then the triangles are similar by which criterion?",
    "options": [
      "AAA",
      "SSS",
      "SAS",
      "ASA"
    ],
    "correctAnswer": "SAS"
  },
  {
    "id": 8,
    "questionText": "If the ratio of all the corresponding sides of two triangles are equal, then the triangles are similar by which criterion?",
    "options": [
      "SAS",
      "AAA",
      "SSS",
      "ASA"
    ],
    "correctAnswer": "SSS"
  },
  {
    "id": 9,
    "questionText": "If one pair of corresponding sides in two triangles are parallel, resulting in equal alternate angles and vertically opposite angles, then the triangles so formed are:",
    "options": [
      "congruent",
      "isosceles",
      "similar",
      "equilateral"
    ],
    "correctAnswer": "similar"
  },
  {
    "id": 10,
    "questionText": "In similar triangles OAB and ODC, the statement \"Proportionality of sides means one side is k times of its corresponding side\" defines what aspect of similarity?",
    "options": [
      "Congruence",
      "Angle relationship",
      "Scale factor",
      "Area ratio"
    ],
    "correctAnswer": "Scale factor"
  },
  {
    "id": 11,
    "questionText": "If BC is parallel to ED in triangles XBC and XDE, then ΔXBC and ΔXDE are:",
    "options": [
      "congruent",
      "isosceles",
      "similar",
      "right-angled"
    ],
    "correctAnswer": "similar"
  },
  {
    "id": 12,
    "questionText": "For similar quadrilaterals, what must be true about their corresponding angles?",
    "options": [
      "They must be supplementary.",
      "They must be complementary.",
      "They must be equal.",
      "They must be proportional."
    ],
    "correctAnswer": "They must be equal."
  },
  {
    "id": 13,
    "questionText": "For similar quadrilaterals, what must be true about the ratios of their corresponding sides?",
    "options": [
      "They must be equal to 1.",
      "They must be inversely proportional.",
      "They must be equal.",
      "They must sum to 1."
    ],
    "correctAnswer": "They must be equal."
  },
  {
    "id": 14,
    "questionText": "The ratio of the areas of any two similar figures is equal to the:",
    "options": [
      "ratio of any two corresponding lengths.",
      "square of the ratio of any two corresponding lengths.",
      "cube of the ratio of any two corresponding lengths.",
      "sum of any two corresponding lengths."
    ],
    "correctAnswer": "square of the ratio of any two corresponding lengths."
  },
  {
    "id": 15,
    "questionText": "If l1 and l2 are corresponding lengths of similar figures and A1 and A2 are their areas, then A1/A2 is equal to:",
    "options": [
      "l1/l2",
      "(l1/l2)^2",
      "(l1/l2)^3",
      "sqrt(l1/l2)"
    ],
    "correctAnswer": "(l1/l2)^2"
  },
  {
    "id": 16,
    "questionText": "If the ratio of corresponding lengths of two similar figures is k, then the ratio of their areas is:",
    "options": [
      "k",
      "k^2",
      "k^3",
      "sqrt(k)"
    ],
    "correctAnswer": "k^2"
  },
  {
    "id": 17,
    "questionText": "The value k in the context of similarity, where A1 = k^2 * A2 (and l1 = k * l2), is called the:",
    "options": [
      "area factor",
      "length factor",
      "scale factor",
      "volume factor"
    ],
    "correctAnswer": "scale factor"
  },
  {
    "id": 18,
    "questionText": "Two polygons are similar with a ratio of corresponding sides being 1/5. If the area of the smaller polygon is 54 cm^2, the area of the larger polygon is:",
    "options": [
      "250 cm^2",
      "150 cm^2",
      "75 cm^2",
      "30 cm^2"
    ],
    "correctAnswer": "150 cm^2"
  },
  {
    "id": 19,
    "questionText": "If BC || DE, then ΔABC and ΔADE are similar due to:",
    "options": [
      "SAS",
      "SSS",
      "AAA (common angle A and corresponding angles)",
      "ASA"
    ],
    "correctAnswer": "AAA (common angle A and corresponding angles)"
  },
  {
    "id": 20,
    "questionText": "The ratio of the volumes of any two similar solids is equal to the:",
    "options": [
      "ratio of any two corresponding lengths.",
      "square of the ratio of any two corresponding lengths.",
      "cube of the ratio of any two corresponding lengths.",
      "sum of any two corresponding lengths."
    ],
    "correctAnswer": "cube of the ratio of any two corresponding lengths."
  },
  {
    "id": 21,
    "questionText": "If l1 and l2 are corresponding lengths of similar solids and V1 and V2 are their volumes, then V1/V2 is equal to:",
    "options": [
      "l1/l2",
      "(l1/l2)^2",
      "(l1/l2)^3",
      "sqrt(l1/l2)"
    ],
    "correctAnswer": "(l1/l2)^3"
  },
  {
    "id": 22,
    "questionText": "Since the mass of a substance is proportional to its volume, the ratio of the mass of two similar solids is equal to the ratio of their:",
    "options": [
      "areas",
      "lengths",
      "volumes",
      "densities"
    ],
    "correctAnswer": "volumes"
  },
  {
    "id": 23,
    "questionText": "A regular polygon has all sides and all angles:",
    "options": [
      "proportional",
      "equal",
      "different",
      "parallel"
    ],
    "correctAnswer": "equal"
  },
  {
    "id": 24,
    "questionText": "The formula for the sum of interior angles of an n-sided polygon is:",
    "options": [
      "(n - 1) * 180°",
      "(n - 2) * 180°",
      "n * 180°",
      "(n + 2) * 180°"
    ],
    "correctAnswer": "(n - 2) * 180°"
  },
  {
    "id": 25,
    "questionText": "For a regular n-sided polygon, the measure of each interior angle is:",
    "options": [
      "(n - 2) * 180° / n",
      "(n - 1) * 180° / n",
      "360° / n",
      "(n + 2) * 180° / n"
    ],
    "correctAnswer": "(n - 2) * 180° / n"
  },
  {
    "id": 26,
    "questionText": "A regular n-sided polygon has rotational symmetry of order:",
    "options": [
      "1",
      "2",
      "n",
      "2n"
    ],
    "correctAnswer": "n"
  },
  {
    "id": 27,
    "questionText": "The sum of the interior angles in any triangle is always:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correctAnswer": "180°"
  },
  {
    "id": 28,
    "questionText": "In an equilateral triangle, each angle is:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": "60°"
  },
  {
    "id": 29,
    "questionText": "An isosceles triangle has:",
    "options": [
      "All sides equal",
      "Two sides equal",
      "No sides equal",
      "One right angle"
    ],
    "correctAnswer": "Two sides equal"
  },
  {
    "id": 30,
    "questionText": "The measure of an exterior angle in a triangle is equal to the sum of the measures of:",
    "options": [
      "The two adjacent interior angles",
      "The two opposite interior angles",
      "All three interior angles",
      "One adjacent and one opposite interior angle"
    ],
    "correctAnswer": "The two opposite interior angles"
  },
  {
    "id": 31,
    "questionText": "In a parallelogram, its opposite sides are:",
    "options": [
      "Perpendicular and equal",
      "Parallel and unequal",
      "Parallel and equal in length",
      "Intersecting and equal"
    ],
    "correctAnswer": "Parallel and equal in length"
  },
  {
    "id": 32,
    "questionText": "The diagonals of a parallelogram:",
    "options": [
      "Are always equal in length",
      "Bisect each other",
      "Are perpendicular to each other",
      "Divide the parallelogram into two congruent triangles"
    ],
    "correctAnswer": "Bisect each other"
  },
  {
    "id": 33,
    "questionText": "Which property distinguishes a rectangle from a general parallelogram?",
    "options": [
      "All sides are equal.",
      "Diagonals bisect each other.",
      "All angles are 90°.",
      "Opposite angles are equal."
    ],
    "correctAnswer": "All angles are 90°."
  },
  {
    "id": 34,
    "questionText": "Which property distinguishes a rhombus from a general parallelogram?",
    "options": [
      "All angles are 90°.",
      "Diagonals are equal.",
      "All sides are equal.",
      "Diagonals bisect angles."
    ],
    "correctAnswer": "All sides are equal."
  },
  {
    "id": 35,
    "questionText": "A square has all sides equal, all angles 90°, and its diagonals are:",
    "options": [
      "Perpendicular but not equal",
      "Equal and bisect each other at right angles",
      "Equal but do not bisect each other",
      "Unequal and bisect each other"
    ],
    "correctAnswer": "Equal and bisect each other at right angles"
  },
  {
    "id": 36,
    "questionText": "The measure of each interior angle of a regular pentagon is:",
    "options": [
      "72°",
      "108°",
      "120°",
      "144°"
    ],
    "correctAnswer": "108°"
  },
  {
    "id": 37,
    "questionText": "A tessellation is a pattern of shapes that fit together perfectly without:",
    "options": [
      "Equal sides",
      "Any gaps or overlaps",
      "Different angles",
      "Symmetry"
    ],
    "correctAnswer": "Any gaps or overlaps"
  },
  {
    "id": 38,
    "questionText": "The area of a parallelogram is calculated by:",
    "options": [
      "(1/2) * base * height",
      "base * height",
      "length * width",
      "(1/2) * diagonal1 * diagonal2"
    ],
    "correctAnswer": "base * height"
  },
  {
    "id": 39,
    "questionText": "The area of an equilateral triangle with side length s is given by the formula:",
    "options": [
      "(1/2) * s^2",
      "(sqrt(3)/4) * s^2",
      "s^2",
      "sqrt(3) * s"
    ],
    "correctAnswer": "(sqrt(3)/4) * s^2"
  },
  {
    "id": 40,
    "questionText": "If a man who is 1.8 m tall casts a shadow of 0.76 m, and at the same time a telephone pole casts a 3 m shadow, the height of the pole is approximately:",
    "options": [
      "7.11 m",
      "6.00 m",
      "5.40 m",
      "8.20 m"
    ],
    "correctAnswer": "7.11 m"
  },
  {
    "id": 41,
    "questionText": "In ΔABC, mAB = 6 cm, mBC = 9 cm, mCA = 12 cm. In ΔDEF, mDE = 10.5 cm, mEF = 15.75 cm, mFD = 21 cm. Are the triangles similar?",
    "options": [
      "No, sides are not proportional.",
      "Yes, by SSS similarity.",
      "Yes, by SAS similarity.",
      "Cannot be determined."
    ],
    "correctAnswer": "Yes, by SSS similarity."
  },
  {
    "id": 42,
    "questionText": "If ΔABC ~ ΔJEF, mAB = 12 cm, mAC = 20 cm, mBC = 16 cm, and mDE = 6 cm, then mDF and mEF are:",
    "options": [
      "mDF = 10 cm, mEF = 8 cm",
      "mDF = 8 cm, mEF = 10 cm",
      "mDF = 15 cm, mEF = 12 cm",
      "mDF = 10 cm, mEF = 10 cm"
    ],
    "correctAnswer": "mDF = 10 cm, mEF = 8 cm"
  },
  {
    "id": 43,
    "questionText": "If two regular tetrahedrons have volumes in the ratio 8:27, what is the ratio of their sides?",
    "options": [
      "2:3",
      "4:9",
      "8:27",
      "1:3"
    ],
    "correctAnswer": "2:3"
  },
  {
    "id": 44,
    "questionText": "Two right cones have volumes in the ratio 64:125. What is the ratio of their heights?",
    "options": [
      "4:5",
      "8:25",
      "64:125",
      "16:25"
    ],
    "correctAnswer": "4:5"
  },
  {
    "id": 45,
    "questionText": "The ratio of the areas of two similar triangles are 144 cm^2 and 81 cm^2. If the base of the larger triangle is 30 cm, find the corresponding base of the smaller triangle.",
    "options": [
      "20 cm",
      "22.5 cm",
      "25 cm",
      "18 cm"
    ],
    "correctAnswer": "22.5 cm"
  },
  {
    "id": 46,
    "questionText": "What is the sum of the interior angles of a decagon (10-sided polygon)?",
    "options": [
      "1080°",
      "1440°",
      "1620°",
      "1800°"
    ],
    "correctAnswer": "1440°"
  },
  {
    "id": 47,
    "questionText": "If the sum of the interior angles of a polygon is 1260°, how many sides does the polygon have?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 48,
    "questionText": "In a parallelogram ABCD, if m∠DAB = 70°, what are the measures of the other angles?",
    "options": [
      "m∠ABC = 70°, m∠BCD = 110°, m∠CDA = 110°",
      "m∠ABC = 110°, m∠BCD = 70°, m∠CDA = 110°",
      "m∠ABC = 70°, m∠BCD = 70°, m∠CDA = 70°",
      "m∠ABC = 110°, m∠BCD = 110°, m∠CDA = 70°"
    ],
    "correctAnswer": "m∠ABC = 110°, m∠BCD = 70°, m∠CDA = 110°"
  },
  {
    "id": 49,
    "questionText": "A rectangular floor is 12 m by 15 m. How many square tiles, each 1 m by 1 m, are needed to cover the floor?",
    "options": [
      "12 tiles",
      "15 tiles",
      "27 tiles",
      "180 tiles"
    ],
    "correctAnswer": "180 tiles"
  },
  {
    "id": 50,
    "questionText": "A rectangular wall has a length of 10 m and a width of 4 meters. If 1 litre of paint covers 7 m^2, how many liters of paint are needed to cover the wall?",
    "options": [
      "40 liters",
      "5.71 liters",
      "6 liters",
      "280 liters"
    ],
    "correctAnswer": "5.71 liters"
  }
  ],
  "Graphs of Functions": [
    {
    "id": 1,
    "questionText": "Graphs are powerful tools for visualizing and analyzing relationships between:",
    "options": [
      "Numbers",
      "Constants",
      "Variables",
      "Equations"
    ],
    "correctAnswer": "Variables"
  },
  {
    "id": 2,
    "questionText": "The general form of a linear function is:",
    "options": [
      "f(x) = ax^2 + b",
      "f(x) = mx + c",
      "f(x) = a/x",
      "f(x) = ka^x"
    ],
    "correctAnswer": "f(x) = mx + c"
  },
  {
    "id": 3,
    "questionText": "In the linear function f(x) = mx + c, m represents the:",
    "options": [
      "y-intercept",
      "x-intercept",
      "slope or gradient",
      "independent variable"
    ],
    "correctAnswer": "slope or gradient"
  },
  {
    "id": 4,
    "questionText": "In the linear function f(x) = mx + c, c represents the:",
    "options": [
      "slope",
      "x-intercept",
      "y-intercept",
      "independent variable"
    ],
    "correctAnswer": "y-intercept"
  },
  {
    "id": 5,
    "questionText": "What are the x and y-intercepts of the line y = 2x - 1? [310, Example 1]",
    "options": [
      "x-intercept = 1/2, y-intercept = -1",
      "x-intercept = -1/2, y-intercept = 1",
      "x-intercept = 1, y-intercept = 2",
      "x-intercept = 0, y-intercept = -1"
    ],
    "correctAnswer": "x-intercept = 1/2, y-intercept = -1"
  },
  {
    "id": 6,
    "questionText": "A reciprocal function has the form:",
    "options": [
      "y = ax^2",
      "y = a/x",
      "y = mx + c",
      "y = ka^x"
    ],
    "correctAnswer": "y = a/x"
  },
  {
    "id": 7,
    "questionText": "For the reciprocal function y = a/x, what value is x not allowed to be?",
    "options": [
      "a",
      "1",
      "0",
      "-1"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 8,
    "questionText": "The graph of y = 1/(x - 0.5) has a vertical asymptote at:",
    "options": [
      "x = 0",
      "x = 0.5",
      "y = 0",
      "y = 0.5"
    ],
    "correctAnswer": "x = 0.5"
  },
  {
    "id": 9,
    "questionText": "The graph of y = x^3 passes through the:",
    "options": [
      "x-axis at x = 1",
      "y-axis at y = 1",
      "origin (0, 0)",
      "point (1, 8)"
    ],
    "correctAnswer": "origin (0, 0)"
  },
  {
    "id": 10,
    "questionText": "For the function y = x^-1 = 1/x, the graph consists of two branches, one in the first quadrant and the other in the:",
    "options": [
      "second quadrant",
      "third quadrant",
      "fourth quadrant",
      "both second and fourth quadrants"
    ],
    "correctAnswer": "third quadrant"
  },
  {
    "id": 11,
    "questionText": "For the function y = 1/x, both branches approach but never touch which axes?",
    "options": [
      "Only x-axis",
      "Only y-axis",
      "Both x-axis and y-axis",
      "Neither axis"
    ],
    "correctAnswer": "Both x-axis and y-axis"
  },
  {
    "id": 12,
    "questionText": "Exponential growth and decay are widely observed in:",
    "options": [
      "Linear relationships",
      "Practical phenomena",
      "Quadratic equations",
      "Reciprocal functions"
    ],
    "correctAnswer": "Practical phenomena"
  },
  {
    "id": 13,
    "questionText": "In exponential growth, the graph starts slowly but accelerates rapidly as:",
    "options": [
      "x decreases",
      "time progresses",
      "y becomes constant",
      "the slope becomes zero"
    ],
    "correctAnswer": "time progresses"
  },
  {
    "id": 14,
    "questionText": "The graph of y = ka^x where a > 1 represents:",
    "options": [
      "linear growth",
      "exponential decay",
      "quadratic growth",
      "exponential growth"
    ],
    "correctAnswer": "exponential growth"
  },
  {
    "id": 15,
    "questionText": "If Majid's salary S(x) = 25000 + 1500x, where x is years worked, his salary increases: [316, Example 14]",
    "options": [
      "exponentially",
      "quadratically",
      "linearly",
      "by a constant factor"
    ],
    "correctAnswer": "linearly"
  },
  {
    "id": 16,
    "questionText": "For S(x) = 25000 + 1500x, what is Majid's salary after 10 years? [316, Example 14]",
    "options": [
      "Rs. 25000",
      "Rs. 30000",
      "Rs. 37000",
      "Rs. 40000"
    ],
    "correctAnswer": "Rs. 40000"
  },
  {
    "id": 17,
    "questionText": "A company's cost function for manufacturing x footballs is C(x) = 90,000 + 600x. The revenue function is R(x) = 1,800x. What is the break-even point? [316-317, Example 15]",
    "options": [
      "x = 50",
      "x = 75",
      "x = 100",
      "x = 120"
    ],
    "correctAnswer": "x = 75"
  },
  {
    "id": 18,
    "questionText": "To determine the gradients of curves, one can:",
    "options": [
      "Plot coordinates",
      "Draw tangents",
      "Calculate intercepts",
      "Find areas"
    ],
    "correctAnswer": "Draw tangents"
  },
  {
    "id": 19,
    "questionText": "The graph of y = -x^2 + 5 opens: [321, Review Ex 10, Q1 (vi)]",
    "options": [
      "upward",
      "downward",
      "left side",
      "right side"
    ],
    "correctAnswer": "downward"
  },
  {
    "id": 20,
    "questionText": "The graph of y = x^2 - 9 opens: [321, Review Ex 10, Q1 (vii)]",
    "options": [
      "upward",
      "downward",
      "left side",
      "right side"
    ],
    "correctAnswer": "upward"
  },
  {
    "id": 21,
    "questionText": "y = 5x is an example of which type of function? [321, Review Ex 10, Q1 (viii)]",
    "options": [
      "linear",
      "quadratic",
      "cubic",
      "exponential"
    ],
    "correctAnswer": "linear"
  },
  {
    "id": 22,
    "questionText": "y = 2/x is an example of which type of function? [321, Review Ex 10, Q1 (ix)]",
    "options": [
      "linear",
      "quadratic",
      "reciprocal",
      "exponential"
    ],
    "correctAnswer": "reciprocal"
  },
  {
    "id": 23,
    "questionText": "y = -3x^3 + 7 is an example of which type of function? [322, Review Ex 10, Q1 (x)]",
    "options": [
      "exponential",
      "cubic",
      "linear",
      "reciprocal"
    ],
    "correctAnswer": "cubic"
  },
  {
    "id": 24,
    "questionText": "What are the practical applications of sketching and interpreting graphs?",
    "options": [
      "Tax payment and salary problems",
      "Weather forecasting",
      "Geological surveys",
      "Quantum physics"
    ],
    "correctAnswer": "Tax payment and salary problems"
  },
  {
    "id": 25,
    "questionText": "If the strength of students in a school S = 1000 e^-t, this equation models: [317, Ex 10.2 Q3]",
    "options": [
      "linear growth",
      "exponential decay",
      "quadratic decay",
      "constant strength"
    ],
    "correctAnswer": "exponential decay"
  },
  {
    "id": 26,
    "questionText": "Given the demand function Pd = 400 - 5Q and supply function Ps = 3Q + 24. What kind of functions are these? [318, Ex 10.2 Q4]",
    "options": [
      "Quadratic functions",
      "Exponential functions",
      "Linear functions",
      "Reciprocal functions"
    ],
    "correctAnswer": "Linear functions"
  },
  {
    "id": 27,
    "questionText": "If y = 3-x is plotted for x from -2 to 4, what is y when x = 4? [322, Review Ex 10, Q2(i)]",
    "options": [
      "7",
      "1",
      "-1",
      "-4"
    ],
    "correctAnswer": "-1"
  },
  {
    "id": 28,
    "questionText": "Sales for a new magazine are expected to grow according to S = 200000(1 - e^-0.05t). What is the value of S when t = 0? [322, Review Ex 10, Q3]",
    "options": [
      "200000",
      "0",
      "100000",
      "e"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 29,
    "questionText": "The graph of y = x^2 - 3 is a: [323, Review Ex 10, Q4(i)]",
    "options": [
      "straight line",
      "parabola opening upwards",
      "parabola opening downwards",
      "cubic curve"
    ],
    "correctAnswer": "parabola opening upwards"
  },
  {
    "id": 30,
    "questionText": "The graph of y = 15 - x^2 is a: [323, Review Ex 10, Q4(ii)]",
    "options": [
      "straight line",
      "parabola opening upwards",
      "parabola opening downwards",
      "cubic curve"
    ],
    "correctAnswer": "parabola opening downwards"
  },
  {
    "id": 31,
    "questionText": "If C(x) = 60,000 + 250x and R(x) = 1200x, what is the profit when 100 LEDs are sold? [324, Review Ex 10, Q7]",
    "options": [
      "Profit of Rs. 35,000",
      "Loss of Rs. 35,000",
      "Profit of Rs. 40,000",
      "Loss of Rs. 40,000"
    ],
    "correctAnswer": "Profit of Rs. 35,000"
  },
  {
    "id": 32,
    "questionText": "What is the slope of the line y = 5x + 3? [320, Review Ex 10, Q1 (ii)]",
    "options": [
      "3",
      "-3",
      "5",
      "-5"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 33,
    "questionText": "What is the y-intercept of y = -2x - 1? [320, Review Ex 10, Q1 (iii)]",
    "options": [
      "-2",
      "2",
      "-1",
      "1"
    ],
    "correctAnswer": "-1"
  },
  {
    "id": 34,
    "questionText": "The graph of y = x^3 cuts the x-axis at: [321, Review Ex 10, Q1 (iv)]",
    "options": [
      "x = 0",
      "x = 1",
      "x = -1",
      "x = 2"
    ],
    "correctAnswer": "x = 0"
  },
  {
    "id": 35,
    "questionText": "The graph of 3^x represents: [321, Review Ex 10, Q1 (v)]",
    "options": [
      "growth",
      "decay",
      "both (a) and (b)",
      "a line"
    ],
    "correctAnswer": "growth"
  },
  {
    "id": 36,
    "questionText": "Which function would show compound interest in finance?",
    "options": [
      "Linear",
      "Quadratic",
      "Exponential growth",
      "Reciprocal"
    ],
    "correctAnswer": "Exponential growth"
  },
  {
    "id": 37,
    "questionText": "If a company's profit p(x) = 10x - 70, where x is the number of newspapers, what is the profit for 500 newspapers? [319, Ex 10.2 Q7]",
    "options": [
      "Rs. 4930",
      "Rs. 5000",
      "Rs. 10",
      "Rs. 70"
    ],
    "correctAnswer": "Rs. 4930"
  },
  {
    "id": 38,
    "questionText": "The cost function C(x) = 1500 + 10x + 0.2x^2 is a: [320, Ex 10.2 Q8]",
    "options": [
      "Linear function",
      "Quadratic function",
      "Cubic function",
      "Exponential function"
    ],
    "correctAnswer": "Quadratic function"
  },
  {
    "id": 39,
    "questionText": "The horizontal line x = 5 represents a line parallel to the: [320, Review Ex 10, Q1 (i)]",
    "options": [
      "x-axis",
      "y-axis",
      "z-axis",
      "origin"
    ],
    "correctAnswer": "y-axis"
  },
  {
    "id": 40,
    "questionText": "What is a key insight gained from graphical representations of exponential growth/decay?",
    "options": [
      "Linear relationships",
      "Constant rate of change",
      "Critical insights into processes",
      "Intercepts of functions"
    ],
    "correctAnswer": "Critical insights into processes"
  },
  {
    "id": 41,
    "questionText": "The function y = ax^n where n is a positive integer greater than 1 typically represents what kind of curve?",
    "options": [
      "A straight line",
      "A parabola or higher-order polynomial curve",
      "An exponential curve",
      "A reciprocal curve"
    ],
    "correctAnswer": "A parabola or higher-order polynomial curve"
  },
  {
    "id": 42,
    "questionText": "If y = 2x^5 is plotted, what is the value of y when x = 1?",
    "options": [
      "0.80",
      "1.74",
      "2",
      "3.48"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 43,
    "questionText": "If y = 2x^5 is plotted, what is the value of y when x = 32?",
    "options": [
      "2",
      "3.48",
      "4",
      "5"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 44,
    "questionText": "Which graph begins slowly and then accelerates rapidly?",
    "options": [
      "Linear decay",
      "Exponential growth",
      "Quadratic decay",
      "Reciprocal function"
    ],
    "correctAnswer": "Exponential growth"
  },
  {
    "id": 45,
    "questionText": "The C(x) = 1200 + 20x is a cost function and R(x) = 50x is a revenue function. How many bags must be sold to break-even? [319, Ex 10.2 Q6]",
    "options": [
      "20 bags",
      "30 bags",
      "40 bags",
      "50 bags"
    ],
    "correctAnswer": "40 bags"
  },
  {
    "id": 46,
    "questionText": "For the cost and revenue functions C(x) = 1200 + 20x and R(x) = 50x, what is the profit/loss when 250 bags are sold? [319, Ex 10.2 Q6]",
    "options": [
      "Profit of Rs. 6300",
      "Loss of Rs. 6300",
      "Profit of Rs. 7500",
      "Loss of Rs. 7500"
    ],
    "correctAnswer": "Profit of Rs. 6300"
  },
  {
    "id": 47,
    "questionText": "In the graph of y = x^-1, what is the value of y when x = -0.5?",
    "options": [
      "-10",
      "-2",
      "2",
      "10"
    ],
    "correctAnswer": "-2"
  },
  {
    "id": 48,
    "questionText": "In the graph of y = x^-1, what is the value of y when x = 0.5?",
    "options": [
      "-10",
      "-2",
      "2",
      "10"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 49,
    "questionText": "The table values for y = 2x^5 in Example 11 are given for x in which range?",
    "options": [
      "All real numbers",
      "x > 0",
      "x = 0, 0.01, 0.5, 1, 16, 32",
      "Integers only"
    ],
    "correctAnswer": "x = 0, 0.01, 0.5, 1, 16, 32"
  },
  {
    "id": 50,
    "questionText": "The graph of a function y = x^n where n is a negative integer is a characteristic of a:",
    "options": [
      "Linear function",
      "Quadratic function",
      "Cubic function",
      "Reciprocal-like function"
    ],
    "correctAnswer": "Reciprocal-like function"
  }
  ],
  "Loci and Construction": [
    {
    "id": 1,
    "questionText": "A locus is defined as a set of points that:",
    "options": [
      "form a straight line",
      "follow a given rule",
      "intersect at a single point",
      "have equal distances"
    ],
    "correctAnswer": "follow a given rule"
  },
  {
    "id": 2,
    "questionText": "Loci are useful for understanding and predicting:",
    "options": [
      "random events",
      "patterns",
      "algebraic equations",
      "statistical data"
    ],
    "correctAnswer": "patterns"
  },
  {
    "id": 3,
    "questionText": "In contexts like tracking satellites, the concept of loci helps predict:",
    "options": [
      "their fuel consumption",
      "their launch date",
      "their positions at given times",
      "their manufacturing cost"
    ],
    "correctAnswer": "their positions at given times"
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT listed as a locus in two dimensions in the Introduction?",
    "options": [
      "Triangle",
      "Circle",
      "Parallel lines",
      "Parabola"
    ],
    "correctAnswer": "Triangle"
  },
  {
    "id": 5,
    "questionText": "A triangle is a closed figure having:",
    "options": [
      "two sides and three angles",
      "three sides and two angles",
      "three sides and three angles",
      "four sides and four angles"
    ],
    "correctAnswer": "three sides and three angles"
  },
  {
    "id": 6,
    "questionText": "In a scalene triangle, all sides are of:",
    "options": [
      "equal length",
      "different length",
      "proportional length",
      "unknown length"
    ],
    "correctAnswer": "different length"
  },
  {
    "id": 7,
    "questionText": "An isosceles triangle has:",
    "options": [
      "all sides equal",
      "two sides of equal length",
      "no sides of equal length",
      "one right angle"
    ],
    "correctAnswer": "two sides of equal length"
  },
  {
    "id": 8,
    "questionText": "An equilateral triangle has:",
    "options": [
      "all sides of equal length",
      "two sides of equal length",
      "no sides of equal length",
      "one obtuse angle"
    ],
    "correctAnswer": "all sides of equal length"
  },
  {
    "id": 9,
    "questionText": "An acute-angled triangle has:",
    "options": [
      "one angle greater than 90°",
      "one angle equal to 90°",
      "all angles less than 90°",
      "all angles equal to 60°"
    ],
    "correctAnswer": "all angles less than 90°"
  },
  {
    "id": 10,
    "questionText": "An obtuse-angled triangle has:",
    "options": [
      "all angles less than 90°",
      "one angle equal to 90°",
      "one angle greater than 90°",
      "all angles equal to 60°"
    ],
    "correctAnswer": "one angle greater than 90°"
  },
  {
    "id": 11,
    "questionText": "A right-angled triangle has:",
    "options": [
      "one angle equal to 90°",
      "one angle greater than 90°",
      "all angles less than 90°",
      "all angles equal to 60°"
    ],
    "correctAnswer": "one angle equal to 90°"
  },
  {
    "id": 12,
    "questionText": "The Triangle Inequality Theorem states that the sum of the measure of any two sides of a triangle is always:",
    "options": [
      "equal to the measure of the third side",
      "less than the measure of the third side",
      "greater than the measure of the third side",
      "inversely proportional to the third side"
    ],
    "correctAnswer": "greater than the measure of the third side"
  },
  {
    "id": 13,
    "questionText": "An equilateral triangle is also a(n):",
    "options": [
      "obtuse-angled triangle",
      "right-angled triangle",
      "acute-angled triangle",
      "isosceles triangle"
    ],
    "correctAnswer": "acute-angled triangle"
  },
  {
    "id": 14,
    "questionText": "When constructing a triangle with three given sides, what can be drawn first?",
    "options": [
      "The longest side",
      "The shortest side",
      "Any length first",
      "Only the base"
    ],
    "correctAnswer": "Any length first"
  },
  {
    "id": 15,
    "questionText": "Which of the following angles can be constructed with the help of a pair of compasses?",
    "options": [
      "40°",
      "55°",
      "75°",
      "100°"
    ],
    "correctAnswer": "75°"
  },
  {
    "id": 16,
    "questionText": "The \"ambiguous case\" in triangle construction (SSA) occurs when the given angle opposite one of the two sides is:",
    "options": [
      "90°",
      "greater than 90°",
      "less than 90°",
      "60°"
    ],
    "correctAnswer": "less than 90°"
  },
  {
    "id": 17,
    "questionText": "If, in the ambiguous case (SSA), mEF < 3 cm for a triangle with mDE = 6 cm and m∠D = 30°, how many triangles can be formed?",
    "options": [
      "Two",
      "One",
      "No triangle",
      "Infinitely many"
    ],
    "correctAnswer": "No triangle"
  },
  {
    "id": 18,
    "questionText": "A line that intersects a line segment at a right angle and divides it into two equal parts is called a:",
    "options": [
      "median",
      "angle bisector",
      "altitude",
      "perpendicular bisector"
    ],
    "correctAnswer": "perpendicular bisector"
  },
  {
    "id": 19,
    "questionText": "A line segment that joins a vertex to the midpoint of the opposite side in a triangle is called a:",
    "options": [
      "perpendicular bisector",
      "median",
      "altitude",
      "angle bisector"
    ],
    "correctAnswer": "median"
  },
  {
    "id": 20,
    "questionText": "The single point where three or more lines, rays, or line segments intersect or meet in a geometric figure is called a:",
    "options": [
      "vertex",
      "midpoint",
      "point of concurrency",
      "intersection point"
    ],
    "correctAnswer": "point of concurrency"
  },
  {
    "id": 21,
    "questionText": "The point of concurrency of perpendicular bisectors of the sides of a triangle is called the:",
    "options": [
      "centroid",
      "incentre",
      "orthocentre",
      "circumcentre"
    ],
    "correctAnswer": "circumcentre"
  },
  {
    "id": 22,
    "questionText": "The point of concurrency of the medians of a triangle is called the:",
    "options": [
      "incentre",
      "orthocentre",
      "centroid",
      "circumcentre"
    ],
    "correctAnswer": "centroid"
  },
  {
    "id": 23,
    "questionText": "A line or ray that divides an angle into two equal parts, creating two congruent smaller angles, is called an:",
    "options": [
      "perpendicular bisector",
      "median",
      "altitude",
      "angle bisector"
    ],
    "correctAnswer": "angle bisector"
  },
  {
    "id": 24,
    "questionText": "The point of concurrency of the angle bisectors of a triangle is called the:",
    "options": [
      "circumcentre",
      "centroid",
      "orthocentre",
      "incentre"
    ],
    "correctAnswer": "incentre"
  },
  {
    "id": 25,
    "questionText": "An altitude in a triangle is a ray drawn perpendicular from a vertex to the:",
    "options": [
      "midpoint of the opposite side",
      "opposite side",
      "adjacent side",
      "angle bisector"
    ],
    "correctAnswer": "opposite side"
  },
  {
    "id": 26,
    "questionText": "The point of concurrency of the altitudes of a triangle is called the:",
    "options": [
      "incentre",
      "circumcentre",
      "centroid",
      "orthocentre"
    ],
    "correctAnswer": "orthocentre"
  },
  {
    "id": 27,
    "questionText": "The locus of a point whose distance is constant from a fixed point is called a:",
    "options": [
      "straight line",
      "circle",
      "parallel line",
      "perpendicular bisector"
    ],
    "correctAnswer": "circle"
  },
  {
    "id": 28,
    "questionText": "The locus of a point whose distance from a fixed line is constant forms:",
    "options": [
      "a circle",
      "a perpendicular bisector",
      "parallel lines",
      "an angle bisector"
    ],
    "correctAnswer": "parallel lines"
  },
  {
    "id": 29,
    "questionText": "The locus of a point whose distance from two fixed points is constant is called a:",
    "options": [
      "circle",
      "parallel line",
      "angle bisector",
      "perpendicular bisector"
    ],
    "correctAnswer": "perpendicular bisector"
  },
  {
    "id": 30,
    "questionText": "The locus of a point whose distance is constant from two intersecting lines is called an:",
    "options": [
      "perpendicular bisector",
      "parallel line",
      "angle bisector",
      "circle"
    ],
    "correctAnswer": "angle bisector"
  },
  {
    "id": 31,
    "questionText": "If two or more loci intersect at a point P, then P:",
    "options": [
      "only satisfies the first condition",
      "only satisfies the last condition",
      "satisfies all given conditions of the loci",
      "creates a new locus"
    ],
    "correctAnswer": "satisfies all given conditions of the loci"
  },
  {
    "id": 32,
    "questionText": "What locus would you use to place a fire hydrant equally accessible to two water sources (points X and Y)?",
    "options": [
      "A circle around X",
      "A line parallel to XY",
      "The perpendicular bisector of XY",
      "An angle bisector"
    ],
    "correctAnswer": "The perpendicular bisector of XY"
  },
  {
    "id": 33,
    "questionText": "When constructing an isosceles triangle DEF with vertical angle 80° at E and mEF = mDE = 3.1 cm, the angle bisector of angle DEF would be equidistant from:",
    "options": [
      "D and F",
      "E and F",
      "DE and EF",
      "D and E"
    ],
    "correctAnswer": "DE and EF"
  },
  {
    "id": 34,
    "questionText": "If mEF = 3 cm in a triangle where mDE = 6 cm and m∠D = 30°, what type of triangle is formed?",
    "options": [
      "Obtuse-angled",
      "Acute-angled",
      "Right-angled",
      "Equilateral"
    ],
    "correctAnswer": "Right-angled"
  },
  {
    "id": 35,
    "questionText": "The word 'locus' in Latin is defined by the English term:",
    "options": [
      "Line",
      "Location",
      "Logic",
      "Length"
    ],
    "correctAnswer": "Location"
  },
  {
    "id": 36,
    "questionText": "A robotic arm working within a specific area without crossing into other areas utilizes the concept of:",
    "options": [
      "Concurrency",
      "Symmetry",
      "Loci",
      "Perpendicularity"
    ],
    "correctAnswer": "Loci"
  },
  {
    "id": 37,
    "questionText": "If you draw the locus of points 2.2 cm from a line segment CD of measure 5.7 cm, what shape would it resemble?",
    "options": [
      "A square",
      "A circle",
      "A sausage shape",
      "A triangle"
    ],
    "correctAnswer": "A sausage shape"
  },
  {
    "id": 38,
    "questionText": "For a triangle ABC, if the perpendicular bisectors intersect at point O, this point O is the:",
    "options": [
      "centroid",
      "incentre",
      "orthocentre",
      "circumcentre"
    ],
    "correctAnswer": "circumcentre"
  },
  {
    "id": 39,
    "questionText": "For a triangle ABC, if the medians intersect at point O', this point O' is the:",
    "options": [
      "circumcentre",
      "incentre",
      "centroid",
      "orthocentre"
    ],
    "correctAnswer": "centroid"
  },
  {
    "id": 40,
    "questionText": "For a triangle ABC, if the angle bisectors intersect at point O, this point O is the:",
    "options": [
      "circumcentre",
      "incentre",
      "centroid",
      "orthocentre"
    ],
    "correctAnswer": "incentre"
  },
  {
    "id": 41,
    "questionText": "For a triangle ABC, if the altitudes intersect at point O, this point O is the:",
    "options": [
      "circumcentre",
      "incentre",
      "centroid",
      "orthocentre"
    ],
    "correctAnswer": "orthocentre"
  },
  {
    "id": 42,
    "questionText": "The Ambiguous Case (SSA) occurs when the given angle opposite one of the two sides is:",
    "options": [
      "90°",
      "greater than 90°",
      "less than 90°",
      "60°"
    ],
    "correctAnswer": "less than 90°"
  },
  {
    "id": 43,
    "questionText": "A triangle with measures of sides 5.3 cm, 5.9 cm, and 6.2 cm is constructed. This method is classified as:",
    "options": [
      "SAS",
      "ASA",
      "SSS",
      "SSA"
    ],
    "correctAnswer": "SSS"
  },
  {
    "id": 44,
    "questionText": "A triangle BCD constructed with sides 5.5 cm and 4.2 cm and an included angle of 60° is an example of which construction method?",
    "options": [
      "SSS",
      "ASA",
      "SAS",
      "SSA"
    ],
    "correctAnswer": "SAS"
  },
  {
    "id": 45,
    "questionText": "A triangle CDE constructed with mDE = 4.3 cm, m∠D = 30°, and m∠E = 120° is an example of which construction method?",
    "options": [
      "SSS",
      "ASA",
      "SAS",
      "SSA"
    ],
    "correctAnswer": "ASA"
  },
  {
    "id": 46,
    "questionText": "When constructing a triangle DEF with mDE = 6 cm, m∠D = 110°, and mEF = 9 cm, if the given angle is obtuse, how many triangles are possible?",
    "options": [
      "Two",
      "One",
      "No triangle",
      "Depends on the other angle"
    ],
    "correctAnswer": "One"
  },
  {
    "id": 47,
    "questionText": "The locus of points equidistant from L and M, and equidistant from LM and LN in a triangular field LMN, is the intersection of the:",
    "options": [
      "Perpendicular bisector of LM and angle bisector of ∠L",
      "Medians from L and M",
      "Altitudes from L and M",
      "Parallel lines to LM and LN"
    ],
    "correctAnswer": "Perpendicular bisector of LM and angle bisector of ∠L"
  },
  {
    "id": 48,
    "questionText": "For the locus of all points 10 km from an infection source, defining a quarantine area, the locus is a:",
    "options": [
      "straight line",
      "rectangle",
      "circle",
      "square"
    ],
    "correctAnswer": "circle"
  },
  {
    "id": 49,
    "questionText": "An equilateral triangle is also a(n):",
    "options": [
      "Obtuse-angled triangle",
      "Right-angled triangle",
      "Acute-angled triangle",
      "Reflex angle"
    ],
    "correctAnswer": "Acute-angled triangle"
  },
  {
    "id": 50,
    "questionText": "If the sum of the measures of two angles in a triangle is less than 90°, then the triangle is:",
    "options": [
      "equilateral",
      "obtuse-angled",
      "acute-angled",
      "right-angled"
    ],
    "correctAnswer": "obtuse-angled"
  }
  ],
  "Information Handling": [
    {
    "id": 1,
    "questionText": "To answer questions like \"how many students were there in each class?\", one needs:",
    "options": [
      "qualitative information",
      "quantitative information",
      "descriptive information",
      "subjective information"
    ],
    "correctAnswer": "quantitative information"
  },
  {
    "id": 2,
    "questionText": "When simple numbers like 85, 96, 70 are given context (e.g., marks of students), they are considered:",
    "options": [
      "raw numbers",
      "raw facts",
      "data",
      "statistics"
    ],
    "correctAnswer": "data"
  },
  {
    "id": 3,
    "questionText": "Information organized and summarized by classifying data into groups or classes, with the number of items in each, is known as:",
    "options": [
      "raw data",
      "ungrouped data",
      "frequency distribution",
      "class limits"
    ],
    "correctAnswer": "frequency distribution"
  },
  {
    "id": 4,
    "questionText": "The difference between the greatest value and the smallest value in a data set is called the:",
    "options": [
      "class interval",
      "class size",
      "range",
      "frequency"
    ],
    "correctAnswer": "range"
  },
  {
    "id": 5,
    "questionText": "If the greatest value is 136 and the smallest value is 30, and you want to make 10 classes, the size of the class limits is approximately:",
    "options": [
      "10",
      "10.6",
      "11",
      "106"
    ],
    "correctAnswer": "11"
  },
  {
    "id": 6,
    "questionText": "The number of times a value occurs in a data is called its:",
    "options": [
      "range",
      "class limit",
      "frequency",
      "midpoint"
    ],
    "correctAnswer": "frequency"
  },
  {
    "id": 7,
    "questionText": "When making tally marks, if 5 or more tallies appear in any class, the 5th tally is marked:",
    "options": [
      "with a circle",
      "diagonally across the previous four",
      "with a cross",
      "with an asterisk"
    ],
    "correctAnswer": "diagonally across the previous four"
  },
  {
    "id": 8,
    "questionText": "Class boundaries are obtained by subtracting half the difference between class limits from the lower limit and adding it to the:",
    "options": [
      "lower class limit",
      "midpoint",
      "upper class limit",
      "frequency"
    ],
    "correctAnswer": "upper class limit"
  },
  {
    "id": 9,
    "questionText": "If the upper class limit of the 1st class is 9 and the lower class limit of the 2nd class is 10, the adjustment factor for class boundaries is:",
    "options": [
      "0.1",
      "0.5",
      "1",
      "2"
    ],
    "correctAnswer": "0.5"
  },
  {
    "id": 10,
    "questionText": "A graph of adjacent rectangles constructed on an xy-plane for a frequency distribution is called a:",
    "options": [
      "bar graph",
      "line graph",
      "histogram",
      "frequency polygon"
    ],
    "correctAnswer": "histogram"
  },
  {
    "id": 11,
    "questionText": "In a histogram, the values of the data (classes) are represented along the:",
    "options": [
      "y-axis",
      "z-axis",
      "horizontal axis (x-axis)",
      "vertical axis (y-axis)"
    ],
    "correctAnswer": "horizontal axis (x-axis)"
  },
  {
    "id": 12,
    "questionText": "In a histogram with unequal class limits, the height of each rectangle is obtained by dividing each class frequency by its:",
    "options": [
      "total frequency",
      "class limit size",
      "midpoint",
      "adjusted frequency"
    ],
    "correctAnswer": "class limit size"
  },
  {
    "id": 13,
    "questionText": "A closed geometrical figure used to display a frequency distribution graphically, where frequencies are plotted against their midpoints, is known as a:",
    "options": [
      "histogram",
      "bar chart",
      "frequency polygon",
      "pie chart"
    ],
    "correctAnswer": "frequency polygon"
  },
  {
    "id": 14,
    "questionText": "The midpoint (also known as class mark) of a class limit is calculated by:",
    "options": [
      "(Upper limit - Lower limit) / 2",
      "(Upper limit + Lower limit) / 2",
      "Upper limit - Lower limit",
      "Upper limit + Lower limit"
    ],
    "correctAnswer": "(Upper limit + Lower limit) / 2"
  },
  {
    "id": 15,
    "questionText": "The measure that gives the center of the data is called the:",
    "options": [
      "range",
      "frequency",
      "measure of central tendency",
      "class mark"
    ],
    "correctAnswer": "measure of central tendency"
  },
  {
    "id": 16,
    "questionText": "Which of the following is NOT listed as a measure of central tendency discussed in the section?",
    "options": [
      "Arithmetic Mean (A.M.)",
      "Median",
      "Standard Deviation",
      "Mode"
    ],
    "correctAnswer": "Standard Deviation"
  },
  {
    "id": 17,
    "questionText": "The arithmetic mean of a set of values x1, x2, ..., xn is calculated as Σx / n. This is known as the:",
    "options": [
      "indirect method",
      "short method",
      "direct method",
      "coded method"
    ],
    "correctAnswer": "direct method"
  },
  {
    "id": 18,
    "questionText": "The marks of a student in five examinations were 64, 75, 81, 87, 90. The arithmetic mean of the marks is:",
    "options": [
      "75.4",
      "79.4",
      "81.0",
      "82.5"
    ],
    "correctAnswer": "79.4"
  },
  {
    "id": 19,
    "questionText": "For grouped data, the arithmetic mean is calculated as Σfx / Σf. Here x represents the:",
    "options": [
      "class limits",
      "class boundaries",
      "midpoints of the class limits",
      "frequencies"
    ],
    "correctAnswer": "midpoints of the class limits"
  },
  {
    "id": 20,
    "questionText": "Given marks 30-35 with frequency 14, the midpoint x for this class is:",
    "options": [
      "32",
      "32.5",
      "33",
      "33.5"
    ],
    "correctAnswer": "32.5"
  },
  {
    "id": 21,
    "questionText": "The short formula for computing arithmetic mean for ungrouped data uses X = A + ΣD / n. Here A is the:",
    "options": [
      "actual mean",
      "assumed mean",
      "average deviation",
      "total frequency"
    ],
    "correctAnswer": "assumed mean"
  },
  {
    "id": 22,
    "questionText": "The short formula for grouped data uses X = A + ΣfD / Σf. Here D is the:",
    "options": [
      "deviation of midpoint from assumed mean (x - A)",
      "deviation of frequency from assumed mean (f - A)",
      "product of frequency and midpoint (f * x)",
      "class interval"
    ],
    "correctAnswer": "deviation of midpoint from assumed mean (x - A)"
  },
  {
    "id": 23,
    "questionText": "If n is the number of observations in an ungrouped data, and n is odd, the median is the (n+1)/2 observation. If n is even, the median is the average of the n/2 observation and the:",
    "options": [
      "(n/2 - 1) observation",
      "(n/2 + 1) observation",
      "(n + 1) observation",
      "n observation"
    ],
    "correctAnswer": "(n/2 + 1) observation"
  },
  {
    "id": 24,
    "questionText": "The scores of a batsman are 8, 12, 18, 13, 16, 5, 20. The median of this data is:",
    "options": [
      "12",
      "13",
      "16",
      "18"
    ],
    "correctAnswer": "13"
  },
  {
    "id": 25,
    "questionText": "The median for grouped data is obtained by the formula Median = l + (h/f) * (n/2 - c). Here c represents the:",
    "options": [
      "class interval of median class",
      "frequency of median class",
      "lower class boundary of median class",
      "cumulative frequency preceding the median class"
    ],
    "correctAnswer": "cumulative frequency preceding the median class"
  },
  {
    "id": 26,
    "questionText": "In the median formula Median = l + (h/f) * (n/2 - c), l represents the:",
    "options": [
      "lower class boundary of median class",
      "upper class boundary of median class",
      "midpoint of median class",
      "total frequency"
    ],
    "correctAnswer": "lower class boundary of median class"
  },
  {
    "id": 27,
    "questionText": "In the median formula Median = l + (h/f) * (n/2 - c), h represents the:",
    "options": [
      "height of the bar",
      "total frequency",
      "size of class limits of median class",
      "number of observations"
    ],
    "correctAnswer": "size of class limits of median class"
  },
  {
    "id": 28,
    "questionText": "The value (observation) which appears or occurs most often in a data is called the:",
    "options": [
      "mean",
      "median",
      "mode",
      "range"
    ],
    "correctAnswer": "mode"
  },
  {
    "id": 29,
    "questionText": "The marks in mathematics of Jamal in eight monthly tests were 75, 76, 80, 80, 82, 82, 82, 85. The mode of the marks is:",
    "options": [
      "75",
      "80",
      "82",
      "85"
    ],
    "correctAnswer": "82"
  },
  {
    "id": 30,
    "questionText": "If no value appears more than once in a data set, then there is:",
    "options": [
      "a single mode",
      "two modes",
      "no mode",
      "an average mode"
    ],
    "correctAnswer": "no mode"
  },
  {
    "id": 31,
    "questionText": "For grouped data, the mode is obtained by the formula Mode = l + (fm - f1) / ((fm - f1) + (fm - f2)) * h. Here fm represents the:",
    "options": [
      "frequency of the class preceding the modal class",
      "frequency of the modal class",
      "frequency of the class succeeding the modal class",
      "midpoint of the modal class"
    ],
    "correctAnswer": "frequency of the modal class"
  },
  {
    "id": 32,
    "questionText": "The class with the highest frequency in a frequency distribution is called the:",
    "options": [
      "median class",
      "arithmetic mean class",
      "modal class",
      "range class"
    ],
    "correctAnswer": "modal class"
  },
  {
    "id": 33,
    "questionText": "When different observations get different weights, the weighted mean (Xw) is preferred, calculated as:",
    "options": [
      "ΣX / ΣW",
      "ΣXW / ΣW",
      "Σ(X+W) / n",
      "ΣW / ΣXW"
    ],
    "correctAnswer": "ΣXW / ΣW"
  },
  {
    "id": 34,
    "questionText": "A student's marks (X) are 74, 78, 74, 90 with weights (W) 4, 3, 5, 6. The weighted mean is:",
    "options": [
      "74",
      "78",
      "80",
      "82"
    ],
    "correctAnswer": "80"
  },
  {
    "id": 35,
    "questionText": "The modal class for the toy factory sales data (10-20: 15, 20-30: 28, 30-40: 45, 40-50: 29, 50-60: 20) is:",
    "options": [
      "10-20",
      "20-30",
      "30-40",
      "40-50"
    ],
    "correctAnswer": "30-40"
  },
  {
    "id": 36,
    "questionText": "What is the main purpose of Measures of Location (Central Tendency)?",
    "options": [
      "To find the range of the data.",
      "To find the number of frequencies.",
      "To find the middle or central value of a data set.",
      "To construct histograms."
    ],
    "correctAnswer": "To find the middle or central value of a data set."
  },
  {
    "id": 37,
    "questionText": "If the mean of 10, 30, 40, x, 67 and 81 is 50, what is the value of x? [387, Try Yourself!]",
    "options": [
      "42",
      "52",
      "72",
      "82"
    ],
    "correctAnswer": "72"
  },
  {
    "id": 38,
    "questionText": "If the mean of 15 values was 50, and the value 25 was wrongly copied as 52, what is the correct sum of values? [388, Try Yourself!]",
    "options": [
      "750",
      "723",
      "777",
      "700"
    ],
    "correctAnswer": "723"
  },
  {
    "id": 39,
    "questionText": "For Heights (inches) 62.5-63.5, 63.5-64.5, etc., the class boundaries have already been given because:",
    "options": [
      "they overlap",
      "they are continuous",
      "they are discrete",
      "they are in ascending order"
    ],
    "correctAnswer": "they are continuous"
  },
  {
    "id": 40,
    "questionText": "If X = 120, A = 85, and n = 25, and X = A + W/n, what is W? [391, Try Yourself!]",
    "options": [
      "35",
      "875",
      "1050",
      "3000"
    ],
    "correctAnswer": "875"
  },
  {
    "id": 41,
    "questionText": "In the construction of a frequency distribution, after finding the range and size of the class, what is the next step?",
    "options": [
      "Tally marks",
      "Class boundaries",
      "Prepare four columns",
      "Calculate frequency"
    ],
    "correctAnswer": "Prepare four columns"
  },
  {
    "id": 42,
    "questionText": "How are lower class boundaries obtained in the example of telephone calls?",
    "options": [
      "By adding 0.5 to the lower class limits.",
      "By subtracting 0.5 from the lower class limits.",
      "By dividing the class limits by 2.",
      "By subtracting the upper class limit from the lower class limit."
    ],
    "correctAnswer": "By subtracting 0.5 from the lower class limits."
  },
  {
    "id": 43,
    "questionText": "In a frequency polygon, the lines at both ends are joined with the next midpoints to touch the bases of:",
    "options": [
      "y-axis",
      "z-axis",
      "x-axis",
      "the top of the rectangles"
    ],
    "correctAnswer": "x-axis"
  },
  {
    "id": 44,
    "questionText": "The average number of packets of medicine distributed by a company is 16.29. What does this represent? [402, Example 20]",
    "options": [
      "The median",
      "The mode",
      "The mean",
      "The weighted mean"
    ],
    "correctAnswer": "The mean"
  },
  {
    "id": 45,
    "questionText": "For the medicine distribution data, the weighted mean is 17.95. What does this represent? [402, Example 20]",
    "options": [
      "The average number of packets considering demand",
      "The simple average of packets",
      "The most frequent number of packets",
      "The middle value of packets"
    ],
    "correctAnswer": "The average number of packets considering demand"
  },
  {
    "id": 46,
    "questionText": "When is the weighted mean preferred over the arithmetic mean?",
    "options": [
      "When all observations are equally important.",
      "When different observations get different weights.",
      "When data is ungrouped.",
      "When there are no extreme values."
    ],
    "correctAnswer": "When different observations get different weights."
  },
  {
    "id": 47,
    "questionText": "The frequency distribution for chemistry students' scores (24-28: 3, 29-33: 6, 34-38: 12, 39-43: 23, 44-48: 15, 49-53: 6). What is the upper limit of the last class? [380, Ex 12.1 Q1 (i)]",
    "options": [
      "49",
      "53",
      "48",
      "50"
    ],
    "correctAnswer": "53"
  },
  {
    "id": 48,
    "questionText": "For the same chemistry students' scores data, what is the midpoint of the class (34-38)? [381, Ex 12.1 Q1 (iii)]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": "36"
  },
  {
    "id": 49,
    "questionText": "What is the size of the class limits in the chemistry students' scores frequency distribution? [381, Ex 12.1 Q1 (v)]",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 50,
    "questionText": "In a school, Hassan studies 6 hours daily. This statement represents an \"average\" and is also known as a measure of:",
    "options": [
      "frequency",
      "range",
      "central tendency",
      "class boundary"
    ],
    "correctAnswer": "central tendency"
  }
  ],
  "Probability": [
    {
    "id": 1,
    "questionText": "The process which generates results, such as tossing a coin or rolling a dice, is called an:",
    "options": [
      "outcome",
      "event",
      "experiment",
      "sample space"
    ],
    "correctAnswer": "experiment"
  },
  {
    "id": 2,
    "questionText": "The results of an experiment are called:",
    "options": [
      "events",
      "outcomes",
      "trials",
      "probabilities"
    ],
    "correctAnswer": "outcomes"
  },
  {
    "id": 3,
    "questionText": "An outcome which represents how many times we expect things to happen is called a:",
    "options": [
      "sample point",
      "random outcome",
      "favorable outcome",
      "certain outcome"
    ],
    "correctAnswer": "favorable outcome"
  },
  {
    "id": 4,
    "questionText": "The set of all possible outcomes of an experiment is called the:",
    "options": [
      "event space",
      "outcome set",
      "sample space",
      "possibility set"
    ],
    "correctAnswer": "sample space"
  },
  {
    "id": 5,
    "questionText": "If you roll a dice, the sample space is:",
    "options": [
      "{1, 2, 3}",
      "{1, 2, 3, 4, 5, 6}",
      "{Head, Tail}",
      "{Even, Odd}"
    ],
    "correctAnswer": "{1, 2, 3, 4, 5, 6}"
  },
  {
    "id": 6,
    "questionText": "The set of results of an experiment is called an:",
    "options": [
      "outcome",
      "trial",
      "event",
      "sample space"
    ],
    "correctAnswer": "event"
  },
  {
    "id": 7,
    "questionText": "An event that cannot occur in any trial has a probability of:",
    "options": [
      "1",
      "0.5",
      "0",
      "undefined"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 8,
    "questionText": "An event which will probably occur and has a greater chance to occur is called a:",
    "options": [
      "impossible event",
      "unlikely event",
      "likely event",
      "certain event"
    ],
    "correctAnswer": "likely event"
  },
  {
    "id": 9,
    "questionText": "An event that will not probably occur and has less chance to occur is called an:",
    "options": [
      "impossible event",
      "unlikely event",
      "likely event",
      "certain event"
    ],
    "correctAnswer": "unlikely event"
  },
  {
    "id": 10,
    "questionText": "Events which have an equal chance of occurrence are called:",
    "options": [
      "impossible events",
      "unlikely events",
      "equally likely events",
      "certain events"
    ],
    "correctAnswer": "equally likely events"
  },
  {
    "id": 11,
    "questionText": "The probability of an equally likely event is:",
    "options": [
      "0",
      "1",
      "0.5",
      "0.25"
    ],
    "correctAnswer": "0.5"
  },
  {
    "id": 12,
    "questionText": "An event that is sure to happen has a probability of:",
    "options": [
      "0",
      "0.5",
      "1",
      "undefined"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 13,
    "questionText": "The range of probability for any event A is:",
    "options": [
      "P(A) < 0",
      "P(A) > 1",
      "0 <= P(A) <= 1",
      "P(A) = 0.5"
    ],
    "correctAnswer": "0 <= P(A) <= 1"
  },
  {
    "id": 14,
    "questionText": "Abdul Raheem rolls a fair dice. What is the probability of getting a number divisible by 3?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctAnswer": "1/3"
  },
  {
    "id": 15,
    "questionText": "When a pair of fair dice is rolled, the total number of possible outcomes in the sample space is:",
    "options": [
      "6",
      "12",
      "36",
      "216"
    ],
    "correctAnswer": "36"
  },
  {
    "id": 16,
    "questionText": "Zeeshan rolls two fair dice. What is the probability of getting even numbers on both dice?",
    "options": [
      "1/2",
      "1/4",
      "1/6",
      "1/9"
    ],
    "correctAnswer": "1/4"
  },
  {
    "id": 17,
    "questionText": "Zeeshan rolls two fair dice. What is the probability of getting multiples of 3 on both dice?",
    "options": [
      "1/6",
      "1/9",
      "1/12",
      "1/36"
    ],
    "correctAnswer": "1/9"
  },
  {
    "id": 18,
    "questionText": "If the probability of an event C is P(C), then the probability of its complement C' (not C) is:",
    "options": [
      "1 + P(C)",
      "1 - P(C)",
      "P(C)",
      "0"
    ],
    "correctAnswer": "1 - P(C)"
  },
  {
    "id": 19,
    "questionText": "If the probability of missile 'C' hitting the target is 5/9, what is the probability it does NOT hit the target?",
    "options": [
      "5/9",
      "4/9",
      "1/9",
      "0"
    ],
    "correctAnswer": "4/9"
  },
  {
    "id": 20,
    "questionText": "A bag contains 5 blue balls and 8 green balls. What is the probability of selecting a blue ball?",
    "options": [
      "5/8",
      "8/13",
      "5/13",
      "1"
    ],
    "correctAnswer": "5/13"
  },
  {
    "id": 21,
    "questionText": "A bag contains 5 blue balls and 8 green balls. What is the probability of selecting a green ball?",
    "options": [
      "5/8",
      "8/13",
      "5/13",
      "1"
    ],
    "correctAnswer": "8/13"
  },
  {
    "id": 22,
    "questionText": "A bag contains 5 blue balls and 8 green balls. What is the probability of selecting a ball that is NOT green?",
    "options": [
      "5/13",
      "8/13",
      "1",
      "0"
    ],
    "correctAnswer": "5/13"
  },
  {
    "id": 23,
    "questionText": "A standard deck of 52 playing cards has how many spades?",
    "options": [
      "4",
      "13",
      "26",
      "52"
    ],
    "correctAnswer": "13"
  },
  {
    "id": 24,
    "questionText": "What is the probability of selecting a heart from a well-shuffled pack of 52 playing cards?",
    "options": [
      "1/52",
      "1/26",
      "1/13",
      "1/4"
    ],
    "correctAnswer": "1/4"
  },
  {
    "id": 25,
    "questionText": "What is the probability of selecting neither a spade nor a heart from a pack of 52 playing cards?",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "0"
    ],
    "correctAnswer": "1/2"
  },
  {
    "id": 26,
    "questionText": "Relative frequency is an estimated probability of an event occurring when an experiment is:",
    "options": [
      "performed once",
      "repeated a fixed number of times",
      "performed with different outcomes",
      "not performed"
    ],
    "correctAnswer": "repeated a fixed number of times"
  },
  {
    "id": 27,
    "questionText": "Relative frequency is calculated as Frequency of a class / Total frequency. What does \"Total frequency\" represent in this context?",
    "options": [
      "Frequency of a class",
      "Total number of trials",
      "Number of outcomes",
      "Number of outcomes in the sample space"
    ],
    "correctAnswer": "Total number of trials"
  },
  {
    "id": 28,
    "questionText": "The sum of all the relative frequencies for a given data set is always equal to or approximately equal to:",
    "options": [
      "0",
      "0.5",
      "1",
      "the number of classes"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 29,
    "questionText": "In a survey of 80 students, 23 liked Red, 15 Green, 25 Pink, 10 Blue, 7 White. What is the relative frequency for blue color?",
    "options": [
      "10/80 = 0.12",
      "23/80 = 0.28",
      "15/80 = 0.19",
      "7/80 = 0.09"
    ],
    "correctAnswer": "10/80 = 0.12"
  },
  {
    "id": 30,
    "questionText": "In a survey about favorite food (Biryani: 40, Fresh Juice: 7, Chicken Bar. B.Q: 21, Sweets: 25), which food item is least liked by students? [435-436, Ex 13.2 Q4]",
    "options": [
      "Biryani",
      "Fresh Juice",
      "Chicken Bar. B.Q",
      "Sweets"
    ],
    "correctAnswer": "Fresh Juice"
  },
  {
    "id": 31,
    "questionText": "In a survey about favorite food (Biryani: 40, Fresh Juice: 7, Chicken Bar. B.Q: 21, Sweets: 25), which food item is most preferred by students? [435-436, Ex 13.2 Q4]",
    "options": [
      "Biryani",
      "Fresh Juice",
      "Chicken Bar. B.Q",
      "Sweets"
    ],
    "correctAnswer": "Biryani"
  },
  {
    "id": 32,
    "questionText": "Expected frequency is a measure that estimates:",
    "options": [
      "the actual number of events",
      "how often an event should occur based on probability",
      "the relative frequency",
      "the total number of trials"
    ],
    "correctAnswer": "how often an event should occur based on probability"
  },
  {
    "id": 33,
    "questionText": "Expected frequency is calculated by:",
    "options": [
      "Probability of event / Total number of trials",
      "Total number of trials * Probability of event",
      "Total number of trials + Probability of event",
      "Probability of event - Total number of trials"
    ],
    "correctAnswer": "Total number of trials * Probability of event"
  },
  {
    "id": 34,
    "questionText": "The sum of all expected frequencies is always equal to or approximately equal to:",
    "options": [
      "1",
      "0",
      "a fixed number of trials",
      "the probability of the event"
    ],
    "correctAnswer": "a fixed number of trials"
  },
  {
    "id": 35,
    "questionText": "A fair dice is rolled 300 times. What is the expected frequency of getting a 1 or a 6?",
    "options": [
      "50",
      "100",
      "150",
      "300"
    ],
    "correctAnswer": "100"
  },
  {
    "id": 36,
    "questionText": "If the probability of a defective bolt is 0.3, in a total of 800 bolts, how many are expected to be non-defective?",
    "options": [
      "240",
      "560",
      "800",
      "300"
    ],
    "correctAnswer": "560"
  },
  {
    "id": 37,
    "questionText": "What is the probability of selecting a card with the number 25 from a box of cards labeled 1 to 30? [426, Ex 13.1 Q5 (i)]",
    "options": [
      "1/30",
      "1/25",
      "25/30",
      "0"
    ],
    "correctAnswer": "1/30"
  },
  {
    "id": 38,
    "questionText": "What is the probability of selecting a card with a number between 17 to 22 (inclusive) from a box of cards labeled 1 to 30? [426, Ex 13.1 Q5 (ii)]",
    "options": [
      "5/30",
      "6/30",
      "4/30",
      "1/30"
    ],
    "correctAnswer": "6/30"
  },
  {
    "id": 39,
    "questionText": "The probability that Ayesha will pass an examination is 0.85. What is the probability she will NOT pass? [426, Ex 13.1 Q6]",
    "options": [
      "0.85",
      "0.15",
      "1",
      "0"
    ],
    "correctAnswer": "0.15"
  },
  {
    "id": 40,
    "questionText": "Taabish tossed a fair coin and rolled a fair dice once. What is the probability of getting a tail on the coin and at least 4 on the dice? [427, Ex 13.1 Q7 (i)]",
    "options": [
      "1/4",
      "1/2",
      "1/6",
      "1/12"
    ],
    "correctAnswer": "1/4"
  },
  {
    "id": 41,
    "questionText": "A card is selected at random from a well-shuffled pack of 52 playing cards. What is the probability of selecting a queen? [427, Ex 13.1 Q8 (i)]",
    "options": [
      "1/52",
      "1/26",
      "1/13",
      "1/4"
    ],
    "correctAnswer": "1/13"
  },
  {
    "id": 42,
    "questionText": "In an urn containing 10 red balls, 5 green balls, and 8 blue balls (total 23 balls). What is the probability of selecting a green ball at random? [439, Review Ex 13, Q3 (i)]",
    "options": [
      "5/10",
      "5/23",
      "10/23",
      "8/23"
    ],
    "correctAnswer": "5/23"
  },
  {
    "id": 43,
    "questionText": "Three coins are tossed together. What is the probability of getting exactly three heads? [440, Review Ex 13, Q4 (i)]",
    "options": [
      "1/2",
      "1/4",
      "1/8",
      "3/8"
    ],
    "correctAnswer": "1/8"
  },
  {
    "id": 44,
    "questionText": "Three coins are tossed together. What is the probability of getting at least two tails? [440, Review Ex 13, Q4 (ii)]",
    "options": [
      "1/8",
      "2/8",
      "3/8",
      "4/8"
    ],
    "correctAnswer": "4/8"
  },
  {
    "id": 45,
    "questionText": "From a lot containing 25 items, 8 items are defective. What is the relative frequency of non-defective items? [441, Review Ex 13, Q7]",
    "options": [
      "8/25",
      "17/25",
      "25/17",
      "17/8"
    ],
    "correctAnswer": "17/25"
  },
  {
    "id": 46,
    "questionText": "What type of event would have a probability of 75%?",
    "options": [
      "Impossible event",
      "Unlikely event",
      "Likely event",
      "Certain event"
    ],
    "correctAnswer": "Likely event"
  },
  {
    "id": 47,
    "questionText": "What type of event would have a probability of 25%?",
    "options": [
      "Impossible event",
      "Unlikely event",
      "Likely event",
      "Certain event"
    ],
    "correctAnswer": "Unlikely event"
  },
  {
    "id": 48,
    "questionText": "An event that occurs with equal chance is called:",
    "options": [
      "impossible",
      "unlikely",
      "equally likely",
      "certain"
    ],
    "correctAnswer": "equally likely"
  },
  {
    "id": 49,
    "questionText": "Arshad rolls a dice with sides labeled L, M, N, O, P, U. What is the probability that the dice lands on a consonant? [424, Exercise 13.1 Q1]",
    "options": [
      "1/6",
      "2/6",
      "3/6",
      "4/6"
    ],
    "correctAnswer": "4/6"
  },
  {
    "id": 50,
    "questionText": "Shazia throws a pair of fair dice. What will be the probability of getting a sum of dots at least 4? [425, Exercise 13.1 Q2 (i)]",
    "options": [
      "3/36",
      "6/36",
      "33/36",
      "30/36"
    ],
    "correctAnswer": "33/36"
  }
  ]
};
export const shortQuestions = {
    "Matrices and Determinants": shortQuestionsData.slice(0, 3),
    "Logarithms": shortQuestionsData.slice(3, 6),
    "Algebraic Expressions and Formulas": shortQuestionsData.slice(6, 8),
    "Coordinate Geometry": shortQuestionsData.slice(8, 10),
};

export const longQuestions = {
    "Matrices and Determinants": longQuestionsData.slice(0, 2),
    "Logarithms": longQuestionsData.slice(2, 3),
    "Algebraic Expressions and Formulas": longQuestionsData.slice(3, 4),
    "Coordinate Geometry": longQuestionsData.slice(4, 5),
};