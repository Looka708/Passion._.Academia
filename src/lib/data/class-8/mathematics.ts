
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './mathematics-short-questions';
import { longQuestions as longQuestionsData } from './mathematics-long-questions';

export const chapters = [
  "Real Numbers",
  "Estimation and Approximation",
  "Square Roots and Cube Roots",
  "Sets",
  "Ratio Rate and Proportion",
  "Percentage and Financial Arithmetic",
  "Number Sequence and Patterns",
  "Expansion and Factorization",
  "Linear Equations and Inequalities",
  "Mensuration",
  "Congruency and Similarity, Construction of Triangles and Transformation",
  "Information Handling",
  "Probability",
];

export const mcqs: Record<string, MCQ[]> = {
  "Real Numbers": [
  {
    "id": 1,
    "questionText": "What type of numbers are real numbers a union of?",
    "options": [
      "a) Natural and Whole Numbers",
      "b) Integers and Rational Numbers",
      "c) Rational and Irrational Numbers",
      "d) Prime and Composite Numbers"
    ],
    "correctAnswer": "c) Rational and Irrational Numbers"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a rational number?",
    "options": [
      "a) √2",
      "b) π",
      "c) 0.10110111...",
      "d) 0.45"
    ],
    "correctAnswer": "d) 0.45"
  },
  {
    "id": 3,
    "questionText": "Which of the following describes a terminating decimal?",
    "options": [
      "a) A decimal that continues indefinitely without repeating.",
      "b) A decimal that has a finite number of digits in its decimal part.",
      "c) A decimal that repeats a block of digits indefinitely.",
      "d) A decimal that cannot be written as a fraction."
    ],
    "correctAnswer": "b) A decimal that has a finite number of digits in its decimal part."
  },
  {
    "id": 4,
    "questionText": "The number 0.3333... is an example of a:",
    "options": [
      "a) Non-terminating non-recurring decimal",
      "b) Terminating decimal",
      "c) Non-terminating recurring decimal",
      "d) Irrational number"
    ],
    "correctAnswer": "c) Non-terminating recurring decimal"
  },
  {
    "id": 5,
    "questionText": "Which set represents natural numbers (N)?",
    "options": [
      "a) {1, 2, 3, 4, ...}",
      "b) {0, 1, 2, 3, ...}",
      "c) {..., -2, -1, 0, 1, 2, ...}",
      "d) {..., -3, -2, -1}"
    ],
    "correctAnswer": "a) {1, 2, 3, 4, ...}"
  },
  {
    "id": 6,
    "questionText": "The set of whole numbers (W) includes natural numbers and which other number?",
    "options": [
      "a) -1",
      "b) 1/2",
      "c) 0",
      "d) π"
    ],
    "correctAnswer": "c) 0"
  },
  {
    "id": 7,
    "questionText": "Integers (Z) include which of the following?",
    "options": [
      "a) Natural numbers only",
      "b) Whole numbers only",
      "c) Positive numbers only",
      "d) Positive numbers, negative numbers, and zero"
    ],
    "correctAnswer": "d) Positive numbers, negative numbers, and zero"
  },
  {
    "id": 8,
    "questionText": "A number that can be written in the form p/q, where q ≠ 0 and p, q are integers, is called a:",
    "options": [
      "a) Irrational number",
      "b) Rational number",
      "c) Real number",
      "d) Natural number"
    ],
    "correctAnswer": "b) Rational number"
  },
  {
    "id": 9,
    "questionText": "What is the absolute value of -4?",
    "options": [
      "a) -4",
      "b) 0",
      "c) 4",
      "d) undefined"
    ],
    "correctAnswer": "c) 4"
  },
  {
    "id": 10,
    "questionText": "The closure property with respect to addition states that if 'a' and 'b' are any two real numbers, then:",
    "options": [
      "a) a - b is a real number",
      "b) a × b is a real number",
      "c) a + b is a real number",
      "d) a / b is a real number"
    ],
    "correctAnswer": "c) a + b is a real number"
  },
  {
    "id": 11,
    "questionText": "What is the additive identity element for real numbers?",
    "options": [
      "a) 1",
      "b) 0",
      "c) -a",
      "d) 1/a"
    ],
    "correctAnswer": "b) 0"
  },
  {
    "id": 12,
    "questionText": "The multiplicative identity property states that for any real number 'a', there is a unique number 'one (1)' called multiplicative identity such that:",
    "options": [
      "a) a + 0 = a",
      "b) a × 1 = 1 × a = a",
      "c) a + (-a) = 0",
      "d) a × (1/a) = 1"
    ],
    "correctAnswer": "b) a × 1 = 1 × a = a"
  },
  {
    "id": 13,
    "questionText": "For any real number 'a', there exists a unique real number '-a' called additive inverse of 'a' such that:",
    "options": [
      "a) a × (1/a) = 1",
      "b) a × 0 = 0",
      "c) a + (-a) = 0",
      "d) a + a = 2a"
    ],
    "correctAnswer": "c) a + (-a) = 0"
  },
  {
    "id": 14,
    "questionText": "For any non-zero real number 'a', there exists a unique real number '1/a' called multiplicative inverse of 'a' such that:",
    "options": [
      "a) a × (1/a) = 1",
      "b) a + (-a) = 0",
      "c) a × 1 = a",
      "d) a × a = a^2"
    ],
    "correctAnswer": "a) a × (1/a) = 1"
  },
  {
    "id": 15,
    "questionText": "The commutative property with respect to addition states that if 'a' and 'b' are any two real numbers, then:",
    "options": [
      "a) a × b = b × a",
      "b) a + (b + c) = (a + b) + c",
      "c) a + b = b + a",
      "d) a × (b + c) = a × b + a × c"
    ],
    "correctAnswer": "c) a + b = b + a"
  },
  {
    "id": 16,
    "questionText": "The statement (a × b) × c = a × (b × c) represents which property of real numbers with respect to multiplication?",
    "options": [
      "a) Commutative Property",
      "b) Distributive Property",
      "c) Associative Property",
      "d) Inverse Property"
    ],
    "correctAnswer": "c) Associative Property"
  },
  {
    "id": 17,
    "questionText": "The distributive property of multiplication over addition states that if a, b and c are real numbers, then:",
    "options": [
      "a) a + b = b + a",
      "b) a × b = b × a",
      "c) a × (b + c) = a × b + a × c",
      "d) a + (b × c) = (a + b) × (a + c)"
    ],
    "correctAnswer": "c) a × (b + c) = a × b + a × c"
  },
  {
    "id": 18,
    "questionText": "The Trichotomy Property for real numbers 'a' and 'b' states that exactly one of the following holds:",
    "options": [
      "a) a < b or a > b",
      "b) a < b or a = b",
      "c) a > b or a = b",
      "d) a < b or a > b or a = b"
    ],
    "correctAnswer": "d) a < b or a > b or a = b"
  },
  {
    "id": 19,
    "questionText": "If a > b and b > c, then a > c represents which property of order (inequalities)?",
    "options": [
      "a) Trichotomy Property",
      "b) Transitive Property",
      "c) Addition Property",
      "d) Multiplication Property"
    ],
    "correctAnswer": "b) Transitive Property"
  },
  {
    "id": 20,
    "questionText": "If a > b, then a + c > b + c represents which property of order?",
    "options": [
      "a) Addition Property",
      "b) Subtraction Property",
      "c) Multiplication Property",
      "d) Division Property"
    ],
    "correctAnswer": "a) Addition Property"
  },
  {
    "id": 21,
    "questionText": "If a < b, and c > 0, then a × c < b × c. This is the:",
    "options": [
      "a) Addition Property of order",
      "b) Subtraction Property of order c) Multiplication Property of order",
      "c) Multiplication Property of order",
      "d) Division Property of order"
    ],
    "correctAnswer": "c) Multiplication Property of order"
  },
  {
    "id": 22,
    "questionText": "If a < b, and c < 0, then a × c > b × c. This is the:",
    "options": [
      "a) Addition Property of order",
      "b) Subtraction Property of order c) Multiplication Property of order",
      "c) Multiplication Property of order",
      "d) Division Property of order"
    ],
    "correctAnswer": "c) Multiplication Property of order"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an irrational number?",
    "options": [
      "a) √9",
      "b) 2/3",
      "c) √7",
      "d) 0.25"
    ],
    "correctAnswer": "c) √7"
  },
  {
    "id": 24,
    "questionText": "Convert the fraction 7/5 to a decimal.",
    "options": [
      "a) 0.7",
      "b) 1.2",
      "c) 1.4",
      "d) 2.5"
    ],
    "correctAnswer": "c) 1.4"
  },
  {
    "id": 25,
    "questionText": "The number -1/3 on a number line is:",
    "options": [
      "a) To the right of 0",
      "b) To the left of 0",
      "c) Exactly at 0",
      "d) Cannot be represented on a number line"
    ],
    "correctAnswer": "b) To the left of 0"
  },
  {
    "id": 26,
    "questionText": "Which property is shown: 5 + 0 = 5?",
    "options": [
      "a) Closure property",
      "b) Commutative property",
      "c) Associative property",
      "d) Additive identity property"
    ],
    "correctAnswer": "d) Additive identity property"
  },
  {
    "id": 27,
    "questionText": "Which property is shown: 12 × (1/12) = 1?",
    "options": [
      "a) Multiplicative identity",
      "b) Multiplicative inverse",
      "c) Associative property",
      "d) Closure property"
    ],
    "correctAnswer": "b) Multiplicative inverse"
  },
  {
    "id": 28,
    "questionText": "Identify the property: (19 + 12) + 8 = 19 + (12 + 8)",
    "options": [
      "a) Commutative property of addition",
      "b) Associative property of addition",
      "c) Distributive property",
      "d) Additive inverse property"
    ],
    "correctAnswer": "b) Associative property of addition"
  },
  {
    "id": 29,
    "questionText": "Identify the property: x × (y × z) = (x × y) × z",
    "options": [
      "a) Commutative property of multiplication",
      "b) Associative property of multiplication",
      "c) Distributive property",
      "d) Multiplicative identity property"
    ],
    "correctAnswer": "b) Associative property of multiplication"
  },
  {
    "id": 30,
    "questionText": "Which property is shown: √5 ∈ R (meaning √5 is a real number)?",
    "options": [
      "a) Closure property of real numbers",
      "b) Commutative property",
      "c) Associative property",
      "d) Distributive property"
    ],
    "correctAnswer": "a) Closure property of real numbers"
  },
  {
    "id": 31,
    "questionText": "0 ∈ R has no multiplicative inverse because:",
    "options": [
      "a) 0 is not a real number",
      "b) 1/0 is 0",
      "c) 1/0 is undefined",
      "d) 0 is the additive identity"
    ],
    "correctAnswer": "c) 1/0 is undefined"
  },
  {
    "id": 32,
    "questionText": "What is the value of |(-2)|?",
    "options": [
      "a) -2",
      "b) 0",
      "c) 2",
      "d) Undefined"
    ],
    "correctAnswer": "c) 2"
  },
  {
    "id": 33,
    "questionText": "Which of the following is a non-terminating non-recurring decimal?",
    "options": [
      "a) 0.121212...",
      "b) 0.5",
      "c) 5.23456789...",
      "d) 0.8181..."
    ],
    "correctAnswer": "c) 5.23456789..."
  },
  {
    "id": 34,
    "questionText": "A number whose decimal representation does not end and does not repeat in a pattern is:",
    "options": [
      "a) Rational",
      "b) Irrational",
      "c) Integer",
      "d) Whole number"
    ],
    "correctAnswer": "b) Irrational"
  },
  {
    "id": 35,
    "questionText": "The product of two rational numbers is always a:",
    "options": [
      "a) Irrational number",
      "b) Rational number",
      "c) Natural number",
      "d) Whole number"
    ],
    "correctAnswer": "b) Rational number"
  },
  {
    "id": 36,
    "questionText": "The sum of a rational and an irrational number is always a:",
    "options": [
      "a) Rational number",
      "b) Irrational number",
      "c) Integer",
      "d) Natural number"
    ],
    "correctAnswer": "b) Irrational number"
  },
  {
    "id": 37,
    "questionText": "What are rational numbers represented by?",
    "options": [
      "a) N",
      "b) W",
      "c) Z",
      "d) Q"
    ],
    "correctAnswer": "d) Q"
  },
  {
    "id": 38,
    "questionText": "The numbers that are not rational are called:",
    "options": [
      "a) Integers",
      "b) Whole Numbers",
      "c) Irrational Numbers",
      "d) Natural Numbers"
    ],
    "correctAnswer": "c) Irrational Numbers"
  },
  {
    "id": 39,
    "questionText": "The number π is an example of an:",
    "options": [
      "a) Rational number",
      "b) Irrational number",
      "c) Integer",
      "d) Terminating decimal"
    ],
    "correctAnswer": "b) Irrational number"
  },
  {
    "id": 40,
    "questionText": "How many pieces of 1/4 metre ribbon can be cut from a ribbon which is 15/2 metres long?",
    "options": [
      "a) 15",
      "b) 30",
      "c) 60",
      "d) 120"
    ],
    "correctAnswer": "b) 30"
  },
  {
    "id": 41,
    "questionText": "Which of the following is an example of the additive inverse property?",
    "options": [
      "a) 8 + (-8) = 0",
      "b) 8 + 0 = 8",
      "c) 8 × 1 = 8",
      "d) 8 + 8 = 16"
    ],
    "correctAnswer": "a) 8 + (-8) = 0"
  },
  {
    "id": 42,
    "questionText": "What is the sum of -7 and -2?",
    "options": [
      "a) 9",
      "b) 5",
      "c) -9",
      "d) -5"
    ],
    "correctAnswer": "c) -9"
  },
  {
    "id": 43,
    "questionText": "Which statement is true for all real numbers 'a'?",
    "options": [
      "a) a < a",
      "b) a > a",
      "c) a = a",
      "d) a ≠ a"
    ],
    "correctAnswer": "c) a = a"
  },
  {
    "id": 44,
    "questionText": "Which property allows us to write a + b + c = a + (b + c)?",
    "options": [
      "a) Commutative property of addition",
      "b) Associative property of addition",
      "c) Distributive property",
      "d) Additive identity property"
    ],
    "correctAnswer": "b) Associative property of addition"
  },
  {
    "id": 45,
    "questionText": "Which of the following numbers is a natural number?",
    "options": [
      "a) 0",
      "b) -5",
      "c) 1",
      "d) 0.5"
    ],
    "correctAnswer": "c) 1"
  },
  {
    "id": 46,
    "questionText": "If a number is represented on a number line, and it is positive, it lies:",
    "options": [
      "a) To the left of 0",
      "b) To the right of 0",
      "c) Exactly at 0",
      "d) Depends on the number"
    ],
    "correctAnswer": "b) To the right of 0"
  },
  {
    "id": 47,
    "questionText": "The result of 50 kilograms of rice being packed equally in 4 packets is how much rice per packet?",
    "options": [
      "a) 10 kg",
      "b) 12.5 kg",
      "c) 20 kg",
      "d) 50 kg"
    ],
    "correctAnswer": "b) 12.5 kg"
  },
  {
    "id": 48,
    "questionText": "The concept of negative numbers is used in real life for:",
    "options": [
      "a) Counting objects",
      "b) Measuring positive quantities",
      "c) Representing values below zero (like temperature or depth)",
      "d) Identifying prime numbers"
    ],
    "correctAnswer": "c) Representing values below zero (like temperature or depth)"
  },
  {
    "id": 49,
    "questionText": "Which of the following represents a rational number?",
    "options": [
      "a) √11",
      "b) 22/7 (as approximation of π)",
      "c) -5/3",
      "d) The square root of any non-perfect square"
    ],
    "correctAnswer": "c) -5/3"
  },
  {
    "id": 50,
    "questionText": "The summary of Real Numbers states that terminating decimals, recurring decimals, and non-terminating non-recurring decimals are forms of:",
    "options": [
      "a) Rational numbers",
      "b) Irrational numbers",
      "c) Decimal numbers",
      "d) Integers"
    ],
    "correctAnswer": "c) Decimal numbers"
  }
],
  "Estimation and Approximation": [
  {
    "id": 1,
    "questionText": "Estimation is a process in which we find the number closest to the actual value or required degree of accuracy.",
    "options": [
      "a) Always exact",
      "b) Only for whole numbers",
      "c) Closest to actual value",
      "d) Only for decimal numbers"
    ],
    "correctAnswer": "c) Closest to actual value"
  },
  {
    "id": 2,
    "questionText": "Round 548735 to 1 significant figure (s.f.).",
    "options": [
      "a) 548730",
      "b) 550000",
      "c) 500000",
      "d) 540000"
    ],
    "correctAnswer": "c) 500000"
  },
  {
    "id": 3,
    "questionText": "Round 548735 to 3 significant figures (s.f.).",
    "options": [
      "a) 548000",
      "b) 549000",
      "c) 548700",
      "d) 500000"
    ],
    "correctAnswer": "b) 549000"
  },
  {
    "id": 4,
    "questionText": "Round 0.0785229 to 3 significant figures (s.f.).",
    "options": [
      "a) 0.078",
      "b) 0.0785",
      "c) 0.079",
      "d) 0.07852"
    ],
    "correctAnswer": "b) 0.0785"
  },
  {
    "id": 5,
    "questionText": "Round 0.0785229 to 5 significant figures (s.f.).",
    "options": [
      "a) 0.07852",
      "b) 0.078523",
      "c) 0.07853",
      "d) 0.07850"
    ],
    "correctAnswer": "b) 0.078523"
  },
  {
    "id": 6,
    "questionText": "Round -234576 to 3 significant figures (s.f.).",
    "options": [
      "a) -234000",
      "b) -235000",
      "c) -234600",
      "d) -234500"
    ],
    "correctAnswer": "b) -235000"
  },
  {
    "id": 7,
    "questionText": "Round -234576 to 5 significant figures (s.f.).",
    "options": [
      "a) -234570",
      "b) -234580",
      "c) -234600",
      "d) -234575"
    ],
    "correctAnswer": "b) -234580"
  },
  {
    "id": 8,
    "questionText": "Round -48.3567 to 3 decimal places (d.p.).",
    "options": [
      "a) -48.356",
      "b) -48.357",
      "c) -48.360",
      "d) -48.350"
    ],
    "correctAnswer": "b) -48.357"
  },
  {
    "id": 9,
    "questionText": "Round -48.3567 to 5 significant figures (s.f.).",
    "options": [
      "a) -48.356",
      "b) -48.357",
      "c) -48.35",
      "d) -48.35670"
    ],
    "correctAnswer": "a) -48.356"
  },
  {
    "id": 10,
    "questionText": "Round the rational number 17/3 to 2 significant figures (s.f.).",
    "options": [
      "a) 5.7",
      "b) 5.6",
      "c) 6.0",
      "d) 5.67"
    ],
    "correctAnswer": "a) 5.7"
  },
  {
    "id": 11,
    "questionText": "Round the rational number 235/28 to 2 decimal places (d.p.).",
    "options": [
      "a) 8.39",
      "b) 8.39",
      "c) 8.40",
      "d) 8.38"
    ],
    "correctAnswer": "c) 8.40"
  },
  {
    "id": 12,
    "questionText": "Approximation error is the numerical value which tells us how far the approximated value is from the actual / accurate value.",
    "options": [
      "a) Always positive",
      "b) Always negative",
      "c) Numerical value",
      "d) Percentage value"
    ],
    "correctAnswer": "c) Numerical value"
  },
  {
    "id": 13,
    "questionText": "What is the approximation value of 5 + 800 using approximation method (Example 8)?",
    "options": [
      "a) 805",
      "b) 800",
      "c) 5",
      "d) 805 (accurate)"
    ],
    "correctAnswer": "b) 800"
  },
  {
    "id": 14,
    "questionText": "Calculate the approximation error for 1.45 × 560 / 23.5 if the approximation value is 25.",
    "options": [
      "a) 34.55",
      "b) 9.55",
      "c) 9.45",
      "d) 25"
    ],
    "correctAnswer": "c) 9.45"
  },
  {
    "id": 15,
    "questionText": "K-2 is the 2nd highest mountain in the world, with a height of 8611 meters. Round this height to 2 significant figures.",
    "options": [
      "a) 8600 meters",
      "b) 8600 meters",
      "c) 8700 meters",
      "d) 9000 meters"
    ],
    "correctAnswer": "a) 8600 meters"
  },
  {
    "id": 16,
    "questionText": "K-2's height 8611 meters rounded to 3 significant figures is:",
    "options": [
      "a) 8610 meters",
      "b) 8611 meters",
      "c) 8600 meters",
      "d) 861 meters"
    ],
    "correctAnswer": "a) 8610 meters"
  },
  {
    "id": 17,
    "questionText": "Noor purchased 343 metres of cloth. Aisha purchased 340 metres of cloth. If Noor rounded her length to 2 significant figures, how accurate is she?",
    "options": [
      "a) She rounded to 1 s.f.",
      "b) She rounded to 2 s.f.",
      "c) She rounded to 3 s.f.",
      "d) She did not round."
    ],
    "correctAnswer": "c) She rounded to 3 s.f."
  },
  {
    "id": 18,
    "questionText": "The first non-zero digit from the left in a number is called the:",
    "options": [
      "a) Decimal place",
      "b) Unit digit",
      "c) First significant figure",
      "d) Most significant digit"
    ],
    "correctAnswer": "c) First significant figure"
  },
  {
    "id": 19,
    "questionText": "When we round a number to a greater number of significant figures, then that number is called:",
    "options": [
      "a) Less accurate",
      "b) More accurate",
      "c) Equally accurate",
      "d) Insignificant"
    ],
    "correctAnswer": "b) More accurate"
  },
  {
    "id": 20,
    "questionText": "What does s.f. stand for in the context of rounding?",
    "options": [
      "a) Standard form",
      "b) Significant figures",
      "c) Simple form",
      "d) Scientific formula"
    ],
    "correctAnswer": "b) Significant figures"
  },
  {
    "id": 21,
    "questionText": "What does d.p. stand for in the context of rounding?",
    "options": [
      "a) Digit position",
      "b) Decimal places",
      "c) Data point",
      "d) Double precision"
    ],
    "correctAnswer": "b) Decimal places"
  },
  {
    "id": 22,
    "questionText": "In decimal part of a decimal number, all zeros after a non-zero digit are significant and all zeros before a non-zero digit are not significant.",
    "options": [
      "a) False",
      "b) True",
      "c) Sometimes true",
      "d) Depends on the number"
    ],
    "correctAnswer": "b) True"
  },
  {
    "id": 23,
    "questionText": "How many significant figures are in 0.00295?",
    "options": [
      "a) 2",
      "b) 3",
      "c) 5",
      "d) 6"
    ],
    "correctAnswer": "b) 3"
  },
  {
    "id": 24,
    "questionText": "Round 54285 to 4 significant figures.",
    "options": [
      "a) 54280",
      "b) 54290",
      "c) 54300",
      "d) 54285"
    ],
    "correctAnswer": "b) 54290"
  },
  {
    "id": 25,
    "questionText": "The method to round negative integers is different from the method used to round natural numbers. In negative integer, the number which is close to the zero (0) is:",
    "options": [
      "a) Smaller number",
      "b) Larger number",
      "c) Always positive",
      "d) Always negative"
    ],
    "correctAnswer": "b) Larger number"
  },
  {
    "id": 26,
    "questionText": "Round 0.0289357 to 5 significant figures.",
    "options": [
      "a) 0.02893",
      "b) 0.02894",
      "c) 0.028936",
      "d) 0.02890"
    ],
    "correctAnswer": "b) 0.02894"
  },
  {
    "id": 27,
    "questionText": "Round 2345987 to 5 significant figures.",
    "options": [
      "a) 2345900",
      "b) 2346000",
      "c) 2346000",
      "d) 2345980"
    ],
    "correctAnswer": "b) 2346000"
  },
  {
    "id": 28,
    "questionText": "Round 0.780247 to 4 significant figures.",
    "options": [
      "a) 0.7802",
      "b) 0.7802",
      "c) 0.7803",
      "d) 0.7800"
    ],
    "correctAnswer": "a) 0.7802"
  },
  {
    "id": 29,
    "questionText": "Round 2.785 (2 d.p.) to the nearest tenth.",
    "options": [
      "a) 2.7",
      "b) 2.8",
      "c) 2.79",
      "d) 3.0"
    ],
    "correctAnswer": "b) 2.8"
  },
  {
    "id": 30,
    "questionText": "Round 15.3456 (3 d.p.) to the nearest hundredth.",
    "options": [
      "a) 15.340",
      "b) 15.346",
      "c) 15.350",
      "d) 15.34"
    ],
    "correctAnswer": "c) 15.350"
  },
  {
    "id": 31,
    "questionText": "Round 10.4579 (3 d.p.) to the nearest thousandth.",
    "options": [
      "a) 10.457",
      "b) 10.458",
      "c) 10.460",
      "d) 10.450"
    ],
    "correctAnswer": "b) 10.458"
  },
  {
    "id": 32,
    "questionText": "Round -23.456 (1 d.p.) to the nearest whole number.",
    "options": [
      "a) -23",
      "b) -24",
      "c) -23 (closer to 0 for negatives if rounding to nearest integer from negative side, but conventional rounding would be -23. For negative integers, the number closer to zero is smaller. If we round to nearest integer, -23.456 is closer to -23 than -24.)",
      "d) -20"
    ],
    "correctAnswer": "a) -23"
  },
  {
    "id": 33,
    "questionText": "Round -45325 (3 s.f.).",
    "options": [
      "a) -45300",
      "b) -45300",
      "c) -45000",
      "d) -45320"
    ],
    "correctAnswer": "a) -45300"
  },
  {
    "id": 34,
    "questionText": "Round -17.7898 (4 s.f.).",
    "options": [
      "a) -17.78",
      "b) -17.79",
      "c) -17.789",
      "d) -17.790"
    ],
    "correctAnswer": "b) -17.79"
  },
  {
    "id": 35,
    "questionText": "Round 1172859 (5 s.f.).",
    "options": [
      "a) 1172900",
      "b) 1172800",
      "c) 1173000",
      "d) 1172860"
    ],
    "correctAnswer": "c) 1173000"
  },
  {
    "id": 36,
    "questionText": "Round 23/3 (3 d.p.).",
    "options": [
      "a) 7.666",
      "b) 7.667",
      "c) 7.670",
      "d) 7.66"
    ],
    "correctAnswer": "b) 7.667"
  },
  {
    "id": 37,
    "questionText": "Round 55/2 (2 d.p.).",
    "options": [
      "a) 27.50",
      "b) 27.50",
      "c) 27.5",
      "d) 27.00"
    ],
    "correctAnswer": "a) 27.50"
  },
  {
    "id": 38,
    "questionText": "Round 3/2 (1 d.p.).",
    "options": [
      "a) 1.0",
      "b) 2.0",
      "c) 1.5",
      "d) 1.6"
    ],
    "correctAnswer": "c) 1.5"
  },
  {
    "id": 39,
    "questionText": "Round 22/6 (3 d.p.).",
    "options": [
      "a) 3.666",
      "b) 3.667",
      "c) 3.670",
      "d) 3.66"
    ],
    "correctAnswer": "b) 3.667"
  },
  {
    "id": 40,
    "questionText": "Round 5/2 (4 s.f.).",
    "options": [
      "a) 2.5",
      "b) 2.50",
      "c) 2.500",
      "d) 2.500 (4 significant figures would be 2.500 if we need to extend to fill sig figs)"
    ],
    "correctAnswer": "c) 2.500"
  },
  {
    "id": 41,
    "questionText": "How many significant figures are in 0.0028?",
    "options": [
      "a) 2",
      "b) 2",
      "c) 4",
      "d) 5"
    ],
    "correctAnswer": "a) 2"
  },
  {
    "id": 42,
    "questionText": "How many significant figures are in 25901?",
    "options": [
      "a) 3",
      "b) 4",
      "c) 5",
      "d) 6"
    ],
    "correctAnswer": "c) 5"
  },
  {
    "id": 43,
    "questionText": "How many significant figures are in 0.1080?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "d) 4"
  },
  {
    "id": 44,
    "questionText": "How many significant figures are in 0.000235?",
    "options": [
      "a) 3",
      "b) 3",
      "c) 6",
      "d) 7"
    ],
    "correctAnswer": "a) 3"
  },
  {
    "id": 45,
    "questionText": "Compute 3.78 + 1.98 and round to 1 decimal place.",
    "options": [
      "a) 5.7",
      "b) 5.8",
      "c) 5.76",
      "d) 6.0"
    ],
    "correctAnswer": "b) 5.8"
  },
  {
    "id": 46,
    "questionText": "Compute 330 x 2.53 and round to 2 significant figures.",
    "options": [
      "a) 830",
      "b) 830",
      "c) 834.9",
      "d) 835"
    ],
    "correctAnswer": "a) 830"
  },
  {
    "id": 47,
    "questionText": "Compute 28.35 + 30.15 and round to 2 decimal places.",
    "options": [
      "a) 58.50",
      "b) 58.50",
      "c) 58.5",
      "d) 58.500"
    ],
    "correctAnswer": "a) 58.50"
  },
  {
    "id": 48,
    "questionText": "Compute 133 ÷ 8.95 and round to 3 significant figures.",
    "options": [
      "a) 14.8",
      "b) 14.9",
      "c) 14.86",
      "d) 15.0"
    ],
    "correctAnswer": "b) 14.9"
  },
  {
    "id": 49,
    "questionText": "The total length of the Great Wall of China is 21196.18 km. Round this length to 5 significant figures.",
    "options": [
      "a) 21196 km",
      "b) 21196 km",
      "c) 21200 km",
      "d) 21196.2 km"
    ],
    "correctAnswer": "c) 21200 km"
  },
  {
    "id": 50,
    "questionText": "The diameter of earth is 12742 km. Round to 3 significant figures.",
    "options": [
      "a) 12700 km",
      "b) 12700 km",
      "c) 12740 km",
      "d) 12742 km"
    ],
    "correctAnswer": "b) 12700 km"
  }
],
  "Square Roots and Cube Roots": [
  {
    "id": 1,
    "questionText": "What is a perfect square?",
    "options": [
      "a) A number whose square root is irrational.",
      "b) A natural number that is the square of another natural number.",
      "c) Any natural number.",
      "d) A number ending in 5."
    ],
    "correctAnswer": "b) A natural number that is the square of another natural number."
  },
  {
    "id": 2,
    "questionText": "What is the square of 5?",
    "options": [
      "a) 10",
      "b) 20",
      "c) 25",
      "d) √5"
    ],
    "correctAnswer": "c) 25"
  },
  {
    "id": 3,
    "questionText": "How is the square root symbol denoted?",
    "options": [
      "a) ^2",
      "b) x",
      "c) √",
      "d) | |"
    ],
    "correctAnswer": "c) √"
  },
  {
    "id": 4,
    "questionText": "To find the square root of a number by prime factorization method, what is the first step?",
    "options": [
      "a) Divide the number by 2.",
      "b) Find prime factors of the number.",
      "c) Multiply the number by itself.",
      "d) Estimate the square root."
    ],
    "correctAnswer": "b) Find prime factors of the number."
  },
  {
    "id": 5,
    "questionText": "Find the square root of 12100 by prime factorization.",
    "options": [
      "a) 100",
      "b) 110",
      "c) 120",
      "d) 121"
    ],
    "correctAnswer": "b) 110"
  },
  {
    "id": 6,
    "questionText": "Find the square root of 225 by prime factorization.",
    "options": [
      "a) 5",
      "b) 10",
      "c) 15",
      "d) 25"
    ],
    "correctAnswer": "c) 15"
  },
  {
    "id": 7,
    "questionText": "To find the square root of natural numbers by division method, what is the first step?",
    "options": [
      "a) Find the prime factors.",
      "b) Make pairs of digits on the left side of the decimal point from right to left.",
      "c) Divide by 2.",
      "d) Add the digits."
    ],
    "correctAnswer": "b) Make pairs of digits on the left side of the decimal point from right to left."
  },
  {
    "id": 8,
    "questionText": "Find the square root of 1024 by division method.",
    "options": [
      "a) 22",
      "b) 32",
      "c) 42",
      "d) 52"
    ],
    "correctAnswer": "b) 32"
  },
  {
    "id": 9,
    "questionText": "Find the square root of 15129 by division method.",
    "options": [
      "a) 113",
      "b) 123",
      "c) 133",
      "d) 143"
    ],
    "correctAnswer": "b) 123"
  },
  {
    "id": 10,
    "questionText": "Find the square root of the fraction 11/25.",
    "options": [
      "a) 11/5",
      "b) √11/25",
      "c) √11/5",
      "d) 11/√5"
    ],
    "correctAnswer": "c) √11/5"
  },
  {
    "id": 11,
    "questionText": "Find the square root of the decimal 2.25.",
    "options": [
      "a) 0.15",
      "b) 1.05",
      "c) 1.5",
      "d) 2.5"
    ],
    "correctAnswer": "c) 1.5"
  },
  {
    "id": 12,
    "questionText": "Find the square root of 1239.04 by division method.",
    "options": [
      "a) 34.2",
      "b) 35.0",
      "c) 35.2",
      "d) 36.4"
    ],
    "correctAnswer": "c) 35.2"
  },
  {
    "id": 13,
    "questionText": "Find the square root of 180.9025 by division method.",
    "options": [
      "a) 13.05",
      "b) 13.25",
      "c) 13.45",
      "d) 13.65"
    ],
    "correctAnswer": "c) 13.45"
  },
  {
    "id": 14,
    "questionText": "What is a number that is not a perfect square called?",
    "options": [
      "a) Rational number",
      "b) Perfect cube",
      "c) Irrational number (when considering its square root)",
      "d) Prime number"
    ],
    "correctAnswer": "c) Irrational number (when considering its square root)"
  },
  {
    "id": 15,
    "questionText": "Find the square root of 0.053361 by division method.",
    "options": [
      "a) 0.131",
      "b) 0.211",
      "c) 0.231",
      "d) 0.321"
    ],
    "correctAnswer": "c) 0.231"
  },
  {
    "id": 16,
    "questionText": "Find the square root of 2.5 up to 2 decimal places.",
    "options": [
      "a) 1.57",
      "b) 1.58",
      "c) 1.59",
      "d) 1.60"
    ],
    "correctAnswer": "b) 1.58"
  },
  {
    "id": 17,
    "questionText": "Find the square root of 2723.56 up to 3 decimal places.",
    "options": [
      "a) 52.186",
      "b) 52.187",
      "c) 52.188",
      "d) 52.189"
    ],
    "correctAnswer": "b) 52.187"
  },
  {
    "id": 18,
    "questionText": "If 'n' is the number of digits in a perfect square, and 'n' is even, the number of digits in its square root is:",
    "options": [
      "a) n",
      "b) n/2",
      "c) n+1/2",
      "d) 2n"
    ],
    "correctAnswer": "b) n/2"
  },
  {
    "id": 19,
    "questionText": "If 'n' is the number of digits in a perfect square, and 'n' is odd, the number of digits in its square root is:",
    "options": [
      "a) n",
      "b) n/2",
      "c) (n+1)/2",
      "d) 2n"
    ],
    "correctAnswer": "c) (n+1)/2"
  },
  {
    "id": 20,
    "questionText": "What is the number of digits in the square root of 49729?",
    "options": [
      "a) 2",
      "b) 3",
      "c) 4",
      "d) 5"
    ],
    "correctAnswer": "b) 3"
  },
  {
    "id": 21,
    "questionText": "What is the number of digits in the square root of 10329796?",
    "options": [
      "a) 3",
      "b) 4",
      "c) 4",
      "d) 5"
    ],
    "correctAnswer": "b) 4"
  },
  {
    "id": 22,
    "questionText": "The length of the side of a square is 55m. Find the area of the square.",
    "options": [
      "a) 55 m²",
      "b) 110 m²",
      "c) 3025 m²",
      "d) 27.5 m²"
    ],
    "correctAnswer": "c) 3025 m²"
  },
  {
    "id": 23,
    "questionText": "1225 students stand in rows such a way that the number of rows is equal to the number of students in a row. How many students are there in each row?",
    "options": [
      "a) 25",
      "b) 30",
      "c) 35",
      "d) 40"
    ],
    "correctAnswer": "c) 35"
  },
  {
    "id": 24,
    "questionText": "A number multiplied by itself three times is called a:",
    "options": [
      "a) Square",
      "b) Cube",
      "c) Square root",
      "d) Cube root"
    ],
    "correctAnswer": "b) Cube"
  },
  {
    "id": 25,
    "questionText": "What is a perfect cube?",
    "options": [
      "a) A number whose cube root is irrational.",
      "b) An integer that is the cube of another integer.",
      "c) Any integer.",
      "d) A number ending in 3."
    ],
    "correctAnswer": "b) An integer that is the cube of another integer."
  },
  {
    "id": 26,
    "questionText": "Is 8 a perfect cube?",
    "options": [
      "a) No",
      "b) Yes, 2³",
      "c) Yes, 4³",
      "d) Yes, 8³"
    ],
    "correctAnswer": "b) Yes, 2³"
  },
  {
    "id": 27,
    "questionText": "Is 27 a perfect cube?",
    "options": [
      "a) No",
      "b) Yes, 2³",
      "c) Yes, 3³",
      "d) Yes, 9³"
    ],
    "correctAnswer": "c) Yes, 3³"
  },
  {
    "id": 28,
    "questionText": "The cube root of a number 'x' is denoted by:",
    "options": [
      "a) √x",
      "b) x³",
      "c) ³√x",
      "d) x^(1/2)"
    ],
    "correctAnswer": "c) ³√x"
  },
  {
    "id": 29,
    "questionText": "Find the cube of 1.2.",
    "options": [
      "a) 1.44",
      "b) 1.728",
      "c) 2.4",
      "d) 12"
    ],
    "correctAnswer": "b) 1.728"
  },
  {
    "id": 30,
    "questionText": "Find the cube root of 125.",
    "options": [
      "a) 3",
      "b) 4",
      "c) 5",
      "d) 6"
    ],
    "correctAnswer": "c) 5"
  },
  {
    "id": 31,
    "questionText": "Find the cube root of 9261.",
    "options": [
      "a) 11",
      "b) 19",
      "c) 21",
      "d) 31"
    ],
    "correctAnswer": "c) 21"
  },
  {
    "id": 32,
    "questionText": "The cube of a positive number is:",
    "options": [
      "a) Positive",
      "b) Negative",
      "c) Zero",
      "d) Undefined"
    ],
    "correctAnswer": "a) Positive"
  },
  {
    "id": 33,
    "questionText": "The cube of a negative number is:",
    "options": [
      "a) Positive",
      "b) Negative",
      "c) Zero",
      "d) Undefined"
    ],
    "correctAnswer": "b) Negative"
  },
  {
    "id": 34,
    "questionText": "The cube of an even number is:",
    "options": [
      "a) Even",
      "b) Odd",
      "c) Cannot be determined",
      "d) Always ends in 0"
    ],
    "correctAnswer": "a) Even"
  },
  {
    "id": 35,
    "questionText": "The cube of an odd number is:",
    "options": [
      "a) Even",
      "b) Odd",
      "c) Cannot be determined",
      "d) Always ends in 5"
    ],
    "correctAnswer": "b) Odd"
  },
  {
    "id": 36,
    "questionText": "Find the cube root of 216.",
    "options": [
      "a) 4",
      "b) 5",
      "c) 6",
      "d) 7"
    ],
    "correctAnswer": "c) 6"
  },
  {
    "id": 37,
    "questionText": "Find the cube root of 64.",
    "options": [
      "a) 4",
      "b) 8",
      "c) 16",
      "d) 2"
    ],
    "correctAnswer": "a) 4"
  },
  {
    "id": 38,
    "questionText": "Find the cube root of 512.",
    "options": [
      "a) 6",
      "b) 7",
      "c) 8",
      "d) 9"
    ],
    "correctAnswer": "c) 8"
  },
  {
    "id": 39,
    "questionText": "The volume of a cube shaped gift box is 64 cm³. Find the length of its side.",
    "options": [
      "a) 2 cm",
      "b) 3 cm",
      "c) 4 cm",
      "d) 8 cm"
    ],
    "correctAnswer": "c) 4 cm"
  },
  {
    "id": 40,
    "questionText": "The volume of a cube shaped jewelry box is 216 cm³. Find the length of its side.",
    "options": [
      "a) 5 cm",
      "b) 6 cm",
      "c) 7 cm",
      "d) 8 cm"
    ],
    "correctAnswer": "b) 6 cm"
  },
  {
    "id": 41,
    "questionText": "Which of the following numbers is a perfect cube?",
    "options": [
      "a) 512",
      "b) 729",
      "c) 1100",
      "d) 10000"
    ],
    "correctAnswer": "a) 512"
  },
  {
    "id": 42,
    "questionText": "Find the cube root of 729.",
    "options": [
      "a) 7",
      "b) 8",
      "c) 9",
      "d) 11"
    ],
    "correctAnswer": "c) 9"
  },
  {
    "id": 43,
    "questionText": "Find the cube root of 0.8 (This would imply a cube of something, but sources have 0.4 in the exercises). Let's stick to an exact answer present in the problem. The exercise 1.11 No.3 gives 0.4 and 0.8 as options. Since it's cube root, there is no easy exact integer solution. Let's assume the question expects the value if it were a perfect cube. No direct calculation for cube root of 0.4 is given as a direct question in the source with exact answers. I need to make sure the MCQ has an answer that can be derived directly or is a simple recall. Let's instead ask which number is a perfect cube.",
    "options": [
      "a) 0.2",
      "b) 0.4",
      "c) 0.8 (assuming typo and it meant 0.512 for 0.8) OR If actual number is 0.4, then the answer is approximately 0.736. The sources do not contain direct calculation for 0.4. I will pick one that is clearly supported. Let's use a clear one.",
      "a) 0.2\n\t\t\t\t\t\t▪ b) 0.4\n\t\t\t\t\t\t▪ c) 0.8 (assuming typo and it meant 0.512 for 0.8) OR If actual number is 0.4, then the answer is approximately 0.736. The sources do not contain direct calculation for 0.4. I will pick one that is clearly supported. Let's use a clear one."
    ],
    "correctAnswer": "This question is a placeholder for a perfect cube. Let's provide an alternative."
  },
  {
    "id": 44,
    "questionText": "Which of the following numbers is a perfect cube?",
    "options": [
      "a) 125",
      "b) 216",
      "c) 343",
      "d) All of the above"
    ],
    "correctAnswer": "d) All of the above"
  },
  {
    "id": 45,
    "questionText": "If the volume of a cube has side length 6cm, what will be the volume of the cube?",
    "options": [
      "a) 36 cm³",
      "b) 100 cm³",
      "c) 216 cm³",
      "d) 120 cm³"
    ],
    "correctAnswer": "c) 216 cm³"
  },
  {
    "id": 46,
    "questionText": "If the volume of a cube is 729cm³, what will be the measure of the edge of the cube?",
    "options": [
      "a) 7 cm",
      "b) 8 cm",
      "c) 9 cm",
      "d) 11 cm"
    ],
    "correctAnswer": "c) 9 cm"
  },
  {
    "id": 47,
    "questionText": "How many cubical boxes of dimensions 5cm × 5cm × 5cm can be packed in a large cubical case having volume 875cm³?",
    "options": [
      "a) 5",
      "b) 6",
      "c) 7",
      "d) 8"
    ],
    "correctAnswer": "c) 7"
  },
  {
    "id": 48,
    "questionText": "The square of 3 is:",
    "options": [
      "a) 6",
      "b) 9",
      "c) 27",
      "d) 3"
    ],
    "correctAnswer": "b) 9"
  },
  {
    "id": 49,
    "questionText": "The symbol √ is called a:",
    "options": [
      "a) Cube root sign",
      "b) Division sign",
      "c) Radical sign",
      "d) Addition sign"
    ],
    "correctAnswer": "c) Radical sign"
  },
  {
    "id": 50,
    "questionText": "What is the cube root of 1728?",
    "options": [
      "a) 10",
      "b) 12",
      "c) 14",
      "d) 16"
    ],
    "correctAnswer": "b) 12"
  },
  {
    "id": 51,
    "questionText": "What is the cube root of 3375?",
    "options": [
      "a) 13",
      "b) 14",
      "c) 15",
      "d) 16"
    ],
    "correctAnswer": "c) 15"
  }
],
  "Sets": [
  {
    "id": 1,
    "questionText": "A set is a collection of:",
    "options": [
      "a) Unordered objects",
      "b) Repeated objects",
      "c) Well-defined distinct objects",
      "d) Similar objects"
    ],
    "correctAnswer": "c) Well-defined distinct objects"
  },
  {
    "id": 2,
    "questionText": "The objects that form a set are called its:",
    "options": [
      "a) Classes",
      "b) Groups",
      "c) Members or elements",
      "d) Entities"
    ],
    "correctAnswer": "c) Members or elements"
  },
  {
    "id": 3,
    "questionText": "How many ways can a set be expressed?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "c) 3"
  },
  {
    "id": 4,
    "questionText": "Which form of expressing a set lists all elements separated by commas within braces { }?",
    "options": [
      "a) Descriptive Form",
      "b) Set Builder Notation",
      "c) Tabular Form or Roster Form",
      "d) Verbal Form"
    ],
    "correctAnswer": "c) Tabular Form or Roster Form"
  },
  {
    "id": 5,
    "questionText": "A = {2, 4, 6, 8, 10} is an example of a set expressed in which form?",
    "options": [
      "a) Descriptive Form",
      "b) Set Builder Notation",
      "c) Tabular Form",
      "d) Interval Notation"
    ],
    "correctAnswer": "c) Tabular Form"
  },
  {
    "id": 6,
    "questionText": "Which set represents the set of natural numbers?",
    "options": [
      "a) N = {1, 2, 3, 4, ...}",
      "b) W = {0, 1, 2, 3, ...}",
      "c) Z = {..., -1, 0, 1, ...}",
      "d) Q = {p/q | p, q ∈ Z, q ≠ 0}"
    ],
    "correctAnswer": "a) N = {1, 2, 3, 4, ...}"
  },
  {
    "id": 7,
    "questionText": "A set described by a given statement is called:",
    "options": [
      "a) Descriptive Form",
      "b) Tabular Form",
      "c) Set Builder Notation",
      "d) Roster Form"
    ],
    "correctAnswer": "a) Descriptive Form"
  },
  {
    "id": 8,
    "questionText": "Which form describes a set by expressing its elements in terms of common properties?",
    "options": [
      "a) Roster Form",
      "b) Descriptive Form",
      "c) Set Builder Notation",
      "d) Tabular Form"
    ],
    "correctAnswer": "c) Set Builder Notation"
  },
  {
    "id": 9,
    "questionText": "If two sets have the same number of elements but not necessarily the same elements, they are called:",
    "options": [
      "a) Equivalent sets",
      "b) Equal sets",
      "c) Universal sets",
      "d) Disjoint sets"
    ],
    "correctAnswer": "a) Equivalent sets"
  },
  {
    "id": 10,
    "questionText": "If two sets have the same elements, they are called:",
    "options": [
      "a) Equivalent sets",
      "b) Equal sets",
      "c) Universal sets",
      "d) Overlapping sets"
    ],
    "correctAnswer": "b) Equal sets"
  },
  {
    "id": 11,
    "questionText": "Which symbol indicates \"is an element of\"?",
    "options": [
      "a) ∈",
      "b) ∉",
      "c) ⊆",
      "d) ⊃"
    ],
    "correctAnswer": "a) ∈"
  },
  {
    "id": 12,
    "questionText": "A set 'A' is a subset of set 'B' if:",
    "options": [
      "a) All elements of B are in A.",
      "b) All elements of A are in B.",
      "c) A and B have no common elements.",
      "d) A and B are equal."
    ],
    "correctAnswer": "b) All elements of A are in B."
  },
  {
    "id": 13,
    "questionText": "The set of all possible subsets of a given set A is called the:",
    "options": [
      "a) Universal set",
      "b) Complement of A",
      "c) Power set of A",
      "d) Equivalent set"
    ],
    "correctAnswer": "c) Power set of A"
  },
  {
    "id": 14,
    "questionText": "The union of two sets A and B is:",
    "options": [
      "a) The set of elements common to A and B.",
      "b) The set of all elements that are in A or in B or in both.",
      "c) The set of elements in A but not in B.",
      "d) The set of elements not in A."
    ],
    "correctAnswer": "b) The set of all elements that are in A or in B or in both."
  },
  {
    "id": 15,
    "questionText": "The intersection of two sets A and B is:",
    "options": [
      "a) The set of common elements in A and B.",
      "b) The set of all elements that are in A or in B or in both.",
      "c) The set of elements in A but not in B.",
      "d) The set of elements not in B."
    ],
    "correctAnswer": "a) The set of common elements in A and B."
  },
  {
    "id": 16,
    "questionText": "The difference of two sets A - B is:",
    "options": [
      "a) The set of elements common to A and B.",
      "b) The set of all elements that are in A or in B or in both.",
      "c) The set of elements that are in A but not in B.",
      "d) The set of elements that are in B but not in A."
    ],
    "correctAnswer": "c) The set of elements that are in A but not in B."
  },
  {
    "id": 17,
    "questionText": "A set that contains all the elements of the sets under consideration, including its own elements, is denoted by the symbol U and is called the:",
    "options": [
      "a) Subset",
      "b) Universal set",
      "c) Empty set",
      "d) Power set"
    ],
    "correctAnswer": "b) Universal set"
  },
  {
    "id": 18,
    "questionText": "The complement of a set A, denoted by A', is:",
    "options": [
      "a) The set of elements in the universal set U that are not in A.",
      "b) The set of elements in A.",
      "c) The set of elements common to A and U.",
      "d) The empty set."
    ],
    "correctAnswer": "a) The set of elements in the universal set U that are not in A."
  },
  {
    "id": 19,
    "questionText": "A Venn diagram is an illustration that uses circles or ovals to show the relationships among sets in a:",
    "options": [
      "a) 2D perspective",
      "b) Perspective way",
      "c) Tabular form",
      "d) Sequential order"
    ],
    "correctAnswer": "a) 2D perspective"
  },
  {
    "id": 20,
    "questionText": "Sets that have no common elements are called:",
    "options": [
      "a) Overlapping sets",
      "b) Disjoint sets",
      "c) Equivalent sets",
      "d) Subsets"
    ],
    "correctAnswer": "b) Disjoint sets"
  },
  {
    "id": 21,
    "questionText": "Sets that have at least one common element are called:",
    "options": [
      "a) Overlapping sets",
      "b) Disjoint sets",
      "c) Equal sets",
      "d) Universal sets"
    ],
    "correctAnswer": "a) Overlapping sets"
  },
  {
    "id": 22,
    "questionText": "The Commutative Law for Union states that:",
    "options": [
      "a) A ∩ B = B ∩ A",
      "b) A ∪ B = B ∪ A",
      "c) A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
      "d) (A ∪ B) ∪ C = A ∪ (B ∪ C)"
    ],
    "correctAnswer": "b) A ∪ B = B ∪ A"
  },
  {
    "id": 23,
    "questionText": "The Associative Law for Intersection states that:",
    "options": [
      "a) A ∪ B = B ∪ A",
      "b) A ∩ B = B ∩ A",
      "c) A ∩ (B ∩ C) = (A ∩ B) ∩ C",
      "d) A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)"
    ],
    "correctAnswer": "c) A ∩ (B ∩ C) = (A ∩ B) ∩ C"
  },
  {
    "id": 24,
    "questionText": "The Distributive Law of Union over Intersection states:",
    "options": [
      "a) A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
      "b) A ∪ (B ∪ C) = (A ∪ B) ∪ C",
      "c) A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
      "d) A ∩ (B ∩ C) = (A ∩ B) ∩ C"
    ],
    "correctAnswer": "c) A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)"
  },
  {
    "id": 25,
    "questionText": "De Morgan's First Law states that:",
    "options": [
      "a) (A ∩ B)' = A' ∩ B'",
      "b) (A ∪ B)' = A' ∩ B'",
      "c) (A ∪ B)' = A' ∪ B'",
      "d) (A ∩ B)' = A ∪ B"
    ],
    "correctAnswer": "b) (A ∪ B)' = A' ∩ B'"
  },
  {
    "id": 26,
    "questionText": "De Morgan's Second Law states that:",
    "options": [
      "a) (A ∪ B)' = A' ∩ B'",
      "b) (A ∩ B)' = A' ∩ B'",
      "c) (A ∩ B)' = A' ∪ B'",
      "d) (A ∪ B)' = A ∪ B"
    ],
    "correctAnswer": "c) (A ∩ B)' = A' ∪ B'"
  },
  {
    "id": 27,
    "questionText": "In a class of 50 students, 35 like mangoes, 25 like bananas, and 5 students like neither. How many students like both mangoes and bananas?",
    "options": [
      "a) 5",
      "b) 10",
      "c) 15",
      "d) 20"
    ],
    "correctAnswer": "c) 15"
  },
  {
    "id": 28,
    "questionText": "Given U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {1, 3, 5, 7, 9}, B = {2, 4, 6, 8, 10}. Find A ∪ B.",
    "options": [
      "a) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      "b) { }",
      "c) {1, 3, 5, 7, 9}",
      "d) {2, 4, 6, 8, 10}"
    ],
    "correctAnswer": "a) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}"
  },
  {
    "id": 29,
    "questionText": "Given A = {a, b, c}, B = {x, y, z}. Find A ∩ B.",
    "options": [
      "a) {a, b, c, x, y, z}",
      "b) { }",
      "c) {a, b, c}",
      "d) {x, y, z}"
    ],
    "correctAnswer": "b) { }"
  },
  {
    "id": 30,
    "questionText": "Which set represents odd integers?",
    "options": [
      "a) O = {2, 4, 6, ...}",
      "b) O = {..., -3, -1, 1, 3, ...}",
      "c) O = {0, 1, 3, 5, ...}",
      "d) O = {1, 3, 5, ...}"
    ],
    "correctAnswer": "b) O = {..., -3, -1, 1, 3, ...}"
  },
  {
    "id": 31,
    "questionText": "If A = {1, 2, 3} and B = {1, 2, 3}, then A and B are:",
    "options": [
      "a) Equivalent sets only",
      "b) Equal sets and Equivalent sets",
      "c) Disjoint sets",
      "d) Subsets of each other but not equal"
    ],
    "correctAnswer": "b) Equal sets and Equivalent sets"
  },
  {
    "id": 32,
    "questionText": "The empty set is denoted by:",
    "options": [
      "a) {U}",
      "b) φ or { }",
      "c) {0}",
      "d) {1}"
    ],
    "correctAnswer": "b) φ or { }"
  },
  {
    "id": 33,
    "questionText": "How many subsets can be formed from a set with 2 elements? (e.g., {a, b})",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4 (The formula is 2^n, so 2^2 = 4: {}, {a}, {b}, {a,b})"
    ],
    "correctAnswer": "d) 4 (The formula is 2^n, so 2^2 = 4: {}, {a}, {b}, {a,b})"
  },
  {
    "id": 34,
    "questionText": "If A = {1, 2, 3}, then the power set P(A) is:",
    "options": [
      "a) {{1}, {2}, {3}}",
      "b) {{ }, {1, 2, 3}}",
      "c) {{ }, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}",
      "d) {{1,2,3}}"
    ],
    "correctAnswer": "c) {{ }, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}"
  },
  {
    "id": 35,
    "questionText": "For sets A and B, the relationship A ∪ B = B ∪ A is an example of the:",
    "options": [
      "a) Commutative law of union",
      "b) Associative law of union",
      "c) Distributive law",
      "d) De Morgan's law"
    ],
    "correctAnswer": "a) Commutative law of union"
  },
  {
    "id": 36,
    "questionText": "If A = {1, 2, 3}, then A' (complement of A) if U = {1, 2, 3, 4, 5} is:",
    "options": [
      "a) {1, 2, 3}",
      "b) { }",
      "c) {4, 5}",
      "d) {U}"
    ],
    "correctAnswer": "c) {4, 5}"
  },
  {
    "id": 37,
    "questionText": "A Venn diagram where sets A and B are shown to have some common elements is called:",
    "options": [
      "a) Disjoint",
      "b) Overlapping",
      "c) Universal",
      "d) Subset representation"
    ],
    "correctAnswer": "b) Overlapping"
  },
  {
    "id": 38,
    "questionText": "The total region bounded by a set A and set B in a Venn diagram represents:",
    "options": [
      "a) A ∩ B",
      "b) A ∪ B",
      "c) A - B",
      "d) A'"
    ],
    "correctAnswer": "b) A ∪ B"
  },
  {
    "id": 39,
    "questionText": "The region where sets A and B overlap in a Venn diagram represents:",
    "options": [
      "a) A ∩ B",
      "b) A ∪ B",
      "c) A - B",
      "d) B - A"
    ],
    "correctAnswer": "a) A ∩ B"
  },
  {
    "id": 40,
    "questionText": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A - B?",
    "options": [
      "a) {1, 2}",
      "b) {4, 5}",
      "c) {3}",
      "d) {1, 2, 3, 4, 5}"
    ],
    "correctAnswer": "a) {1, 2}"
  },
  {
    "id": 41,
    "questionText": "If A = {1, 2, 3} and B = {3, 4, 5}, what is B - A?",
    "options": [
      "a) {1, 2}",
      "b) {4, 5}",
      "c) {3}",
      "d) {1, 2, 3, 4, 5}"
    ],
    "correctAnswer": "b) {4, 5}"
  },
  {
    "id": 42,
    "questionText": "Which of the following is an example of Set Builder Notation?",
    "options": [
      "a) {1, 2, 3}",
      "b) Set of natural numbers less than 4",
      "c) {x | x ∈ N ∧ x < 4}",
      "d) {N}"
    ],
    "correctAnswer": "c) {x | x ∈ N ∧ x < 4}"
  },
  {
    "id": 43,
    "questionText": "The expression (A ∪ B) ∩ C = (A ∩ C) ∪ (B ∩ C) is an example of:",
    "options": [
      "a) Commutative Law",
      "b) Associative Law",
      "c) Distributive Law of Intersection over Union",
      "d) De Morgan's Law"
    ],
    "correctAnswer": "c) Distributive Law of Intersection over Union"
  },
  {
    "id": 44,
    "questionText": "If A is a set of boys and B is a set of girls, and the universal set U is students in a class. Then A ∩ B would be: [This is general knowledge application, not directly stated in sources with examples like this]",
    "options": [
      "a) All students in the class",
      "b) All boys",
      "c) All girls",
      "d) The empty set (assuming distinct groups)"
    ],
    "correctAnswer": "d) The empty set (assuming distinct groups)"
  },
  {
    "id": 45,
    "questionText": "The set of prime numbers is:",
    "options": [
      "a) P = {1, 2, 3, 5, ...}",
      "b) P = {2, 3, 5, 7, ...}",
      "c) P = {3, 5, 7, 9, ...}",
      "d) P = {2, 4, 6, 8, ...}"
    ],
    "correctAnswer": "b) P = {2, 3, 5, 7, ...}"
  },
  {
    "id": 46,
    "questionText": "What symbol is used to denote \"not an element of\"?",
    "options": [
      "a) ∈",
      "b) ∉",
      "c) ⊆",
      "d) ⊃"
    ],
    "correctAnswer": "b) ∉"
  },
  {
    "id": 47,
    "questionText": "The sentence \"The set of cities in Pakistan with population less than 1 million\" describes a set in which form?",
    "options": [
      "a) Descriptive Form",
      "b) Tabular Form",
      "c) Set Builder Notation",
      "d) Roster Form"
    ],
    "correctAnswer": "a) Descriptive Form"
  },
  {
    "id": 48,
    "questionText": "If A = {1, 2, 3}, what is A ∪ φ? [This is general property of sets, not directly listed in operations but implicit]",
    "options": [
      "a) A",
      "b) φ",
      "c) {1, 2, 3, φ}",
      "d) { }"
    ],
    "correctAnswer": "a) A"
  },
  {
    "id": 49,
    "questionText": "If A = {1, 2, 3}, what is A ∩ U? (Where U is the universal set containing A)",
    "options": [
      "a) A",
      "b) U",
      "c) φ",
      "d) A'"
    ],
    "correctAnswer": "a) A"
  },
  {
    "id": 50,
    "questionText": "The Venn diagram with shading over the entire rectangular region represents the:",
    "options": [
      "a) Set A",
      "b) Set B",
      "c) Intersection of A and B",
      "d) Universal set"
    ],
    "correctAnswer": "d) Universal set"
  }
],
  "Ratio Rate and Proportion": [
  {
    "id": 1,
    "questionText": "The relation of equality of two ratios is called:",
    "options": [
      "a) Ratio",
      "b) Rate",
      "c) Proportion",
      "d) Percentage"
    ],
    "correctAnswer": "c) Proportion"
  },
  {
    "id": 2,
    "questionText": "In a proportion a : b :: c : d, the terms 'a' and 'd' are called:",
    "options": [
      "a) Extremes",
      "b) Means",
      "c) Antecedents",
      "d) Consequents"
    ],
    "correctAnswer": "a) Extremes"
  },
  {
    "id": 3,
    "questionText": "In a proportion a : b :: c : d, the terms 'b' and 'c' are called:",
    "options": [
      "a) Extremes",
      "b) Means",
      "c) Antecedents",
      "d) Consequents"
    ],
    "correctAnswer": "b) Means"
  },
  {
    "id": 4,
    "questionText": "If four quantities a, b, c, d are written as a : b :: c : d, and 'a' is called the first, 'b' is the second, 'c' is the third, then 'd' is called the:",
    "options": [
      "a) Third proportional",
      "b) Fourth proportional",
      "c) Mean proportional",
      "d) Extreme proportional"
    ],
    "correctAnswer": "b) Fourth proportional"
  },
  {
    "id": 5,
    "questionText": "If three quantities a, b, c are in continued proportion, then 'b' is called the:",
    "options": [
      "a) Third proportional",
      "b) Fourth proportional",
      "c) Mean proportional",
      "d) Extreme proportional"
    ],
    "correctAnswer": "c) Mean proportional"
  },
  {
    "id": 6,
    "questionText": "How many kinds of proportion are there?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three",
      "d) Four"
    ],
    "correctAnswer": "b) Two"
  },
  {
    "id": 7,
    "questionText": "A relation in which increases / decreases one quantity causes proportional increases / decreases in the other quantity is called:",
    "options": [
      "a) Direct proportion",
      "b) Inverse proportion",
      "c) Compound proportion",
      "d) Rate"
    ],
    "correctAnswer": "a) Direct proportion"
  },
  {
    "id": 8,
    "questionText": "A relation in which if one quantity increases / decreases, then the other quantity decreases / increases proportionally is called:",
    "options": [
      "a) Direct proportion",
      "b) Inverse proportion",
      "c) Compound proportion",
      "d) Rate"
    ],
    "correctAnswer": "b) Inverse proportion"
  },
  {
    "id": 9,
    "questionText": "If the number of pencils increases, the cost of pencils will:",
    "options": [
      "a) Increase proportionally",
      "b) Decrease proportionally",
      "c) Stay the same",
      "d) Not be related"
    ],
    "correctAnswer": "a) Increase proportionally"
  },
  {
    "id": 10,
    "questionText": "If the number of workers increases, the time to complete a job will:",
    "options": [
      "a) Increase",
      "b) Decrease",
      "c) Stay the same",
      "d) Not be related"
    ],
    "correctAnswer": "b) Decrease"
  },
  {
    "id": 11,
    "questionText": "If 2 pencils cost Rs. 10, how much will 4 pencils cost in a direct proportion?",
    "options": [
      "a) Rs. 10",
      "b) Rs. 15",
      "c) Rs. 20",
      "d) Rs. 25"
    ],
    "correctAnswer": "c) Rs. 20"
  },
  {
    "id": 12,
    "questionText": "3 shirts are ironed in 15 minutes. How many shirts can be ironed in 45 minutes?",
    "options": [
      "a) 6",
      "b) 7",
      "c) 8",
      "d) 9"
    ],
    "correctAnswer": "d) 9"
  },
  {
    "id": 13,
    "questionText": "5 persons build a house in 600 days. How many persons will build the same house in 300 days? (Inverse Proportion)",
    "options": [
      "a) 5",
      "b) 8",
      "c) 10",
      "d) 12"
    ],
    "correctAnswer": "c) 10"
  },
  {
    "id": 14,
    "questionText": "5 workers take 12 days to weed a field. How many days would 6 workers take to weed it?",
    "options": [
      "a) 8 days",
      "b) 9 days",
      "c) 10 days",
      "d) 11 days"
    ],
    "correctAnswer": "c) 10 days"
  },
  {
    "id": 15,
    "questionText": "The relationship between two or more proportions is known as:",
    "options": [
      "a) Direct proportion",
      "b) Inverse proportion",
      "c) Compound proportion",
      "d) Ratio"
    ],
    "correctAnswer": "c) Compound proportion"
  },
  {
    "id": 16,
    "questionText": "If 35 labourers dig 805 cm³ of earth in 5 hours, how much of the earth will 30 labourers dig in 6 hours?",
    "options": [
      "a) 600 cm³",
      "b) 700 cm³",
      "c) 828 cm³",
      "d) 900 cm³"
    ],
    "correctAnswer": "c) 828 cm³"
  },
  {
    "id": 17,
    "questionText": "Rs. 8,000 are sufficient for a family of 4 members for 40 days. For how many days Rs. 15,000 will be sufficient for a family of 5 members?",
    "options": [
      "a) 40 days",
      "b) 50 days",
      "c) 60 days",
      "d) 70 days"
    ],
    "correctAnswer": "c) 60 days"
  },
  {
    "id": 18,
    "questionText": "If 4200 men have sufficient food for 32 days at a rate of 12 gram per person, how many men may leave so that the same food may be sufficient for 42 days at a rate of 16 gram per person?",
    "options": [
      "a) 1000 men",
      "b) 1200 men",
      "c) 1800 men",
      "d) 2000 men"
    ],
    "correctAnswer": "b) 1200 men"
  },
  {
    "id": 19,
    "questionText": "The ratio of 75 : 100 in its simplest form is:",
    "options": [
      "a) 7:10",
      "b) 5:10",
      "c) 3:4",
      "d) 1:2"
    ],
    "correctAnswer": "c) 3:4"
  },
  {
    "id": 20,
    "questionText": "The ratio of 12 is to 120 in its simplest form is:",
    "options": [
      "a) 1:10",
      "b) 1:10",
      "c) 1:12",
      "d) 12:1"
    ],
    "correctAnswer": "a) 1:10"
  },
  {
    "id": 21,
    "questionText": "The ratio of 1 kg is to 800 gm in its simplest form is:",
    "options": [
      "a) 1:800",
      "b) 100:800",
      "c) 5:4",
      "d) 4:5"
    ],
    "correctAnswer": "c) 5:4"
  },
  {
    "id": 22,
    "questionText": "In the proportion 12 : p :: 3 : 6, what is the value of p?",
    "options": [
      "a) 18",
      "b) 24",
      "c) 36",
      "d) 48"
    ],
    "correctAnswer": "b) 24"
  },
  {
    "id": 23,
    "questionText": "In the proportion 7 : m :: m : 28, what is the value of m?",
    "options": [
      "a) 7",
      "b) 14",
      "c) 14 (mean proportional)",
      "d) 28"
    ],
    "correctAnswer": "b) 14"
  },
  {
    "id": 24,
    "questionText": "In the proportion x : 2 :: 150 : 100, what is the value of x?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "c) 3"
  },
  {
    "id": 25,
    "questionText": "If 150 shirts can be stitched on 6 sewing machines in a day, how many machines are required to stitch 225 shirts in a day?",
    "options": [
      "a) 7",
      "b) 9",
      "c) 10",
      "d) 12"
    ],
    "correctAnswer": "b) 9"
  },
  {
    "id": 26,
    "questionText": "If the price of 12 eggs is Rs. 180, how many eggs can be bought with Rs. 270?",
    "options": [
      "a) 15",
      "b) 18",
      "c) 20",
      "d) 24"
    ],
    "correctAnswer": "b) 18"
  },
  {
    "id": 27,
    "questionText": "If 30 labourers dig 800 m³ of earth in 3 hours, how many labourers will be required to dig the same earth in 2 hours?",
    "options": [
      "a) 30",
      "b) 45",
      "c) 60",
      "d) 90"
    ],
    "correctAnswer": "b) 45"
  },
  {
    "id": 28,
    "questionText": "10 men have ration for 21 days in a camp. If 7 men leave the camp, for how many days will the ration be sufficient for the remaining men?",
    "options": [
      "a) 21 days",
      "b) 30 days",
      "c) 35 days",
      "d) 40 days"
    ],
    "correctAnswer": "d) 40 days"
  },
  {
    "id": 29,
    "questionText": "Shayan takes 200 steps for walking a distance of 80m. Find the distance covered by him in 350 steps.",
    "options": [
      "a) 100m",
      "b) 120m",
      "c) 140m",
      "d) 160m"
    ],
    "correctAnswer": "c) 140m"
  },
  {
    "id": 30,
    "questionText": "In 25 minutes a train travels 20 km, how far will it travel in 5 minutes?",
    "options": [
      "a) 2 km",
      "b) 4 km",
      "c) 5 km",
      "d) 10 km"
    ],
    "correctAnswer": "b) 4 km"
  },
  {
    "id": 31,
    "questionText": "A car travelling at 50 km/h takes 7 minutes. How long will the journey take at 70 km/h?",
    "options": [
      "a) 3 minutes",
      "b) 5 minutes",
      "c) 7 minutes",
      "d) 10 minutes"
    ],
    "correctAnswer": "b) 5 minutes"
  },
  {
    "id": 32,
    "questionText": "How many days will 10 persons take to build a house if 5 persons build it in 600 days?",
    "options": [
      "a) 150 days",
      "b) 200 days",
      "c) 300 days",
      "d) 120 days"
    ],
    "correctAnswer": "c) 300 days"
  },
  {
    "id": 33,
    "questionText": "How long will the journey take at 70 km/h if it takes 7 minutes at 50 km/h?",
    "options": [
      "a) 3 min",
      "b) 5 min",
      "c) 7 min",
      "d) 10 min"
    ],
    "correctAnswer": "b) 5 min"
  },
  {
    "id": 34,
    "questionText": "A bag of 10 kg potatoes lasts a family for 7 days. How long will 20 kg potatoes last for the same family? (Direct proportion)",
    "options": [
      "a) 7 days",
      "b) 14 days",
      "c) 20 days",
      "d) 10 days"
    ],
    "correctAnswer": "b) 14 days"
  },
  {
    "id": 35,
    "questionText": "What is the value of 'x' in the proportion x : 5 :: 10 : 25?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "b) 2"
  },
  {
    "id": 36,
    "questionText": "In Direct Proportion, if one quantity is represented by 'x' and the other by 'y', how do the variables move in the table?",
    "options": [
      "a) x value is multiplied, y value is divided",
      "b) x value is multiplied, y value is multiplied",
      "c) x value is divided, y value is multiplied",
      "d) x value is divided, y value is divided"
    ],
    "correctAnswer": "b) x value is multiplied, y value is multiplied"
  },
  {
    "id": 37,
    "questionText": "In Inverse Proportion, if one quantity is represented by 'x' and the other by 'y', how do the variables move in the table?",
    "options": [
      "a) x value is multiplied, y value is divided",
      "b) x value is multiplied, y value is multiplied",
      "c) x value is divided, y value is multiplied",
      "d) x value is divided, y value is divided"
    ],
    "correctAnswer": "a) x value is multiplied, y value is divided"
  },
  {
    "id": 38,
    "questionText": "Which type of proportion is illustrated by a graph that goes downwards from left to right?",
    "options": [
      "a) Direct proportion",
      "b) Inverse proportion",
      "c) Compound proportion",
      "d) No proportion"
    ],
    "correctAnswer": "b) Inverse proportion"
  },
  {
    "id": 39,
    "questionText": "The term \"rate\" refers to:",
    "options": [
      "a) Comparison of two quantities of the same kind.",
      "b) Comparison of two quantities of different kinds.",
      "c) The equality of two ratios.",
      "d) The percentage of a quantity."
    ],
    "correctAnswer": "b) Comparison of two quantities of different kinds."
  },
  {
    "id": 40,
    "questionText": "If the price of 12 meters of cloth is Rs. 6288, what will be the price of 10 meters and 6 meters of cloth?",
    "options": [
      "a) Rs. 5240, Rs. 3144",
      "b) Rs. 5240, Rs. 3144",
      "c) Rs. 5000, Rs. 3000",
      "d) Rs. 5500, Rs. 3200"
    ],
    "correctAnswer": "a) Rs. 5240, Rs. 3144"
  },
  {
    "id": 41,
    "questionText": "70 men can complete a wall of 150 meters long in 12 days. How many men will complete the wall of length 600 meters in 30 days?",
    "options": [
      "a) 100",
      "b) 112",
      "c) 120",
      "d) 140"
    ],
    "correctAnswer": "b) 112"
  },
  {
    "id": 42,
    "questionText": "If the fare of 12 quintal luggage for a distance of 18 km is 12 rupees, how much fare will be charged for a luggage of 9 quintals for a distance of 20 km?",
    "options": [
      "a) Rs. 8",
      "b) Rs. 9",
      "c) Rs. 10",
      "d) Rs. 11"
    ],
    "correctAnswer": "c) Rs. 10"
  },
  {
    "id": 43,
    "questionText": "14 masons can build a wall of 12 meters high in 12 days. How many masons will be needed to build a wall of 120 meters high in 7 days?",
    "options": [
      "a) 120",
      "b) 140",
      "c) 180",
      "d) 240"
    ],
    "correctAnswer": "d) 240"
  },
  {
    "id": 44,
    "questionText": "15 machines prepare 360 sweaters in 6 days, 3 machines get out of order. How many sweaters can be prepared in 10 days by the remaining machines?",
    "options": [
      "a) 400",
      "b) 450",
      "c) 480",
      "d) 500"
    ],
    "correctAnswer": "c) 480"
  },
  {
    "id": 45,
    "questionText": "1440 men had sufficient food for 32 days in a camp. How many men may leave the camp so that the same food is sufficient for 40 days when the ration is increased by 1/2 times?",
    "options": [
      "a) 480 men",
      "b) 720 men",
      "c) 960 men",
      "d) 1000 men"
    ],
    "correctAnswer": "b) 720 men"
  },
  {
    "id": 46,
    "questionText": "10 men can assemble 400 cycles in 8 days. How many cycles will 5 men assemble if they work for 16 days?",
    "options": [
      "a) 200",
      "b) 300",
      "c) 400",
      "d) 500"
    ],
    "correctAnswer": "c) 400"
  },
  {
    "id": 47,
    "questionText": "The ratio a : b is also written as:",
    "options": [
      "a) a/b",
      "b) b/a",
      "c) a-b",
      "d) a+b"
    ],
    "correctAnswer": "a) a/b"
  },
  {
    "id": 48,
    "questionText": "If the quantities are in continued proportion, the product of the extremes equals the square of the mean. This implies:",
    "options": [
      "a) a × c = b²",
      "b) a × c = b × b",
      "c) a × b = c²",
      "d) a × b = b × c"
    ],
    "correctAnswer": "a) a × c = b²"
  },
  {
    "id": 49,
    "questionText": "What will be the mass of 80 books if the mass of 72 books is 9 kg?",
    "options": [
      "a) 9 kg",
      "b) 10 kg",
      "c) 11 kg",
      "d) 12 kg"
    ],
    "correctAnswer": "b) 10 kg"
  },
  {
    "id": 50,
    "questionText": "The graphical representation of direct proportion is typically a straight line that passes through the origin and goes:",
    "options": [
      "a) Downwards",
      "b) Upwards",
      "c) Horizontal",
      "d) Vertical"
    ],
    "correctAnswer": "b) Upwards"
  }
],
  "Percentage and Financial Arithmetic": [
  {
    "id": 1,
    "questionText": "Percentage is widely used in our everyday life. Percentage is another way of expressing:",
    "options": [
      "a) Decimal",
      "b) Fraction or decimal",
      "c) Ratio",
      "d) Rate"
    ],
    "correctAnswer": "b) Fraction or decimal"
  },
  {
    "id": 2,
    "questionText": "The percentage means \"per hundred\".",
    "options": [
      "a) True",
      "b) True",
      "c) False",
      "d) Sometimes true"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 3,
    "questionText": "The symbol used for percentage is:",
    "options": [
      "a) /",
      "b) ×",
      "c) =",
      "d) %"
    ],
    "correctAnswer": "d) %"
  },
  {
    "id": 4,
    "questionText": "Convert 60% to a fraction.",
    "options": [
      "a) 3/4",
      "b) 3/5",
      "c) 1/2",
      "d) 6/100"
    ],
    "correctAnswer": "b) 3/5"
  },
  {
    "id": 5,
    "questionText": "Convert 10% to a decimal.",
    "options": [
      "a) 1.0",
      "b) 0.01",
      "c) 0.1",
      "d) 10.0"
    ],
    "correctAnswer": "c) 0.1"
  },
  {
    "id": 6,
    "questionText": "If the selling price (S.P.) is higher than the cost price (C.P.), then a profit occurs.",
    "options": [
      "a) True",
      "b) False",
      "c) Sometimes true",
      "d) Depends on discount"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 7,
    "questionText": "Profit percentage is always expressed in terms of:",
    "options": [
      "a) Selling price",
      "b) Cost price",
      "c) Marked price",
      "d) Discount"
    ],
    "correctAnswer": "b) Cost price"
  },
  {
    "id": 8,
    "questionText": "Abid bought a motor-cycle for Rs. 50,000 and sold it for Rs. 56,000. Find his percentage profit.",
    "options": [
      "a) 10%",
      "b) 12%",
      "c) 15%",
      "d) 20%"
    ],
    "correctAnswer": "b) 12%"
  },
  {
    "id": 9,
    "questionText": "If the cost price (C.P.) is higher than the selling price (S.P.), then a loss occurs.",
    "options": [
      "a) True",
      "b) False",
      "c) Sometimes true",
      "d) Depends on tax"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 10,
    "questionText": "Loss percentage is also expressed in terms of:",
    "options": [
      "a) Selling price",
      "b) Cost price",
      "c) Marked price",
      "d) Discount"
    ],
    "correctAnswer": "b) Cost price"
  },
  {
    "id": 11,
    "questionText": "Hameed bought a piece of land worth Rs. 300,000 and sold it for Rs. 240,000. Find his profit / loss percentage.",
    "options": [
      "a) 20% profit",
      "b) 25% loss",
      "c) 20% loss",
      "d) 25% profit"
    ],
    "correctAnswer": "c) 20% loss"
  },
  {
    "id": 12,
    "questionText": "Discount means to reduce the price of an article from its:",
    "options": [
      "a) Cost price",
      "b) Selling price",
      "c) Marked price",
      "d) Profit margin"
    ],
    "correctAnswer": "c) Marked price"
  },
  {
    "id": 13,
    "questionText": "Ali bought some articles of worth Rs. 2,500. He was allowed 15% discount on his purchase. Find the price he paid of the said articles.",
    "options": [
      "a) Rs. 2500",
      "b) Rs. 2300",
      "c) Rs. 2125",
      "d) Rs. 2000"
    ],
    "correctAnswer": "c) Rs. 2125"
  },
  {
    "id": 14,
    "questionText": "The marked price of an article is Rs. 1,700. The selling price of the article is Rs. 1,360. Find the percentage discount.",
    "options": [
      "a) 10%",
      "b) 20%",
      "c) 25%",
      "d) 30%"
    ],
    "correctAnswer": "b) 20%"
  },
  {
    "id": 15,
    "questionText": "A wholesaler sold an article to a retailer at a profit of 10%. The retailer sold it for Rs. 1897.50 at a profit of 15%. What is the cost of wholesaler?",
    "options": [
      "a) Rs. 1500",
      "b) Rs. 1500 (This requires working backward from Rs. 1897.50. Retailer's cost = 1897.50 / 1.15 = 1650. Wholesaler's cost = 1650 / 1.10 = 1500).",
      "c) Rs. 1650",
      "d) Rs. 1750"
    ],
    "correctAnswer": "a) Rs. 1500"
  },
  {
    "id": 16,
    "questionText": "Markup is the extra money which the bank receives from an extra amount alongwith the actual money given.",
    "options": [
      "a) Profit",
      "b) Loss",
      "c) Markup",
      "d) Discount"
    ],
    "correctAnswer": "c) Markup"
  },
  {
    "id": 17,
    "questionText": "The time for which a particular amount is invested in a business is known as:",
    "options": [
      "a) Rate",
      "b) Principal Amount",
      "c) Period",
      "d) Markup"
    ],
    "correctAnswer": "c) Period"
  },
  {
    "id": 18,
    "questionText": "Younas borrowed Rs. 65,000 from a bank at the rate of 5% for 2 years. Find the amount of markup and the total amount to be paid.",
    "options": [
      "a) Markup: Rs. 6000, Total: Rs. 71000",
      "b) Markup: Rs. 6500, Total: Rs. 71500",
      "c) Markup: Rs. 7000, Total: Rs. 72000",
      "d) Markup: Rs. 5000, Total: Rs. 70000"
    ],
    "correctAnswer": "b) Markup: Rs. 6500, Total: Rs. 71500"
  },
  {
    "id": 19,
    "questionText": "A student purchased a computer by taking loan from a bank on simple interest. He took loan of Rs. 25,000 at the rate of 10% for 2 years. Calculate the markup to be paid and the total amount to be paid back.",
    "options": [
      "a) Markup: Rs. 4000, Total: Rs. 29000",
      "b) Markup: Rs. 5000, Total: Rs. 30000",
      "c) Markup: Rs. 6000, Total: Rs. 31000",
      "d) Markup: Rs. 3000, Total: Rs. 28000"
    ],
    "correctAnswer": "b) Markup: Rs. 5000, Total: Rs. 30000"
  },
  {
    "id": 20,
    "questionText": "What annual rate percent of markup would the principal amount Rs. 68,000 become Rs. 86,360 in 3 years?",
    "options": [
      "a) 5%",
      "b) 7%",
      "c) 9%",
      "d) 10%"
    ],
    "correctAnswer": "c) 9%"
  },
  {
    "id": 21,
    "questionText": "Insurance is a system of protecting or safeguarding against risk or injuries.",
    "options": [
      "a) True",
      "b) False",
      "c) Sometimes true",
      "d) Depends on type of risk"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 22,
    "questionText": "What are the two types of insurance discussed in the source?",
    "options": [
      "a) Health and Property",
      "b) Life and Travel",
      "c) Life and Vehicle",
      "d) Home and Business"
    ],
    "correctAnswer": "c) Life and Vehicle"
  },
  {
    "id": 23,
    "questionText": "Saud got a life insurance policy of Rs. 500,000. Rate of annual premium is 4.5% of the total amount of the policy whereas the policy fee is at the rate of 0.25%. Find the annual premium of the policy.",
    "options": [
      "a) Rs. 22,500",
      "b) Rs. 23,750",
      "c) Rs. 25,000",
      "d) Rs. 20,000"
    ],
    "correctAnswer": "b) Rs. 23,750"
  },
  {
    "id": 24,
    "questionText": "A man purchased a life insurance policy for Rs. 300,000. The annual premium is 4.5% of the policy amount whereas policy fee is at the rate of 0.25%. Calculate the quarterly premium at 27% of the annual premium.",
    "options": [
      "a) Rs. 3000",
      "b) Rs. 3500",
      "c) Rs. 3847.50",
      "d) Rs. 4000"
    ],
    "correctAnswer": "c) Rs. 3847.50"
  },
  {
    "id": 25,
    "questionText": "Khalid purchased an insurance policy for his car. The worth of the car is Rs. 750,000. The rate of annual premium is 3% for two years and depreciation rate is 10%. Find the total amount he paid as premium.",
    "options": [
      "a) Rs. 22,500",
      "b) Rs. 45,000",
      "c) Rs. 42,750",
      "d) Rs. 50,000"
    ],
    "correctAnswer": "b) Rs. 45,000"
  },
  {
    "id": 26,
    "questionText": "A business in which two or more persons run the business and they are responsible for the profit and loss is called:",
    "options": [
      "a) Partnership",
      "b) Sole proprietorship",
      "c) Corporation",
      "d) Cooperative"
    ],
    "correctAnswer": "a) Partnership"
  },
  {
    "id": 27,
    "questionText": "Saud and Ammar started a business with capitals of Rs. 56,000 and Rs. 64,000 respectively. After one year they earned a profit of Rs. 22,500. Find the share of each one.",
    "options": [
      "a) Saud: Rs. 10,000, Ammar: Rs. 12,500",
      "b) Saud: Rs. 10,500, Ammar: Rs. 12,000",
      "c) Saud: Rs. 11,000, Ammar: Rs. 11,500",
      "d) Saud: Rs. 9,000, Ammar: Rs. 13,500"
    ],
    "correctAnswer": "b) Saud: Rs. 10,500, Ammar: Rs. 12,000"
  },
  {
    "id": 28,
    "questionText": "When a person dies, then the assets left by him are called inheritance.",
    "options": [
      "a) True",
      "b) False",
      "c) Sometimes true",
      "d) It's a gift"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 29,
    "questionText": "The principles of distribution of inheritance are given below according to Islamic Law.",
    "options": [
      "a) True",
      "b) False",
      "c) Not applicable",
      "d) Depends on local laws"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 30,
    "questionText": "A man left Rs. 640,000 as inheritance. His debt is Rs. 40,000. Burial expenses are Rs. 5,000. His widow's share is 1/8. Find the widow's share.",
    "options": [
      "a) Rs. 70,000",
      "b) Rs. 74,375",
      "c) Rs. 80,000",
      "d) Rs. 60,000"
    ],
    "correctAnswer": "b) Rs. 74,375"
  },
  {
    "id": 31,
    "questionText": "A foreign currency exchange rate is a price that represents how much it costs to buy the currency of one country using the currency of another country.",
    "options": [
      "a) True",
      "b) False",
      "c) Not relevant to financial arithmetic",
      "d) Only for local currencies"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 32,
    "questionText": "If the Selling Price (S.P.) is higher than the Cost Price (C.P.), then profit occurs. This statement is:",
    "options": [
      "a) True",
      "b) False",
      "c) Partially true",
      "d) Always false"
    ],
    "correctAnswer": "a) True"
  },
  {
    "id": 33,
    "questionText": "Which of the following is the formula for Profit Percentage?",
    "options": [
      "a) (Loss / C.P.) × 100%",
      "b) (Profit / C.P.) × 100%",
      "c) (Profit / S.P.) × 100%",
      "d) (Loss / S.P.) × 100%"
    ],
    "correctAnswer": "b) (Profit / C.P.) × 100%"
  },
  {
    "id": 34,
    "questionText": "Which of the following is the formula for Loss Percentage?",
    "options": [
      "a) (Loss / C.P.) × 100%",
      "b) (Profit / C.P.) × 100%",
      "c) (Loss / S.P.) × 100%",
      "d) (Profit / S.P.) × 100%"
    ],
    "correctAnswer": "a) (Loss / C.P.) × 100%"
  },
  {
    "id": 35,
    "questionText": "Which of the following is the formula for Percentage Discount?",
    "options": [
      "a) (Discount / S.P.) × 100%",
      "b) (Discount / C.P.) × 100%",
      "c) (Discount / Market Price) × 100%",
      "d) (Discount / Profit) × 100%"
    ],
    "correctAnswer": "c) (Discount / Market Price) × 100%"
  },
  {
    "id": 36,
    "questionText": "When we borrow money from bank to run a business, the bank in return receives some extra amount along with the actual money given. This extra money which the bank receives is known as:",
    "options": [
      "a) Interest",
      "b) Markup",
      "c) Profit",
      "d) Capital"
    ],
    "correctAnswer": "b) Markup"
  },
  {
    "id": 37,
    "questionText": "The amount we borrow or deposit in the bank is called:",
    "options": [
      "a) Principal amount",
      "b) Markup",
      "c) Interest",
      "d) Capital"
    ],
    "correctAnswer": "a) Principal amount"
  },
  {
    "id": 38,
    "questionText": "The rate at which the bank gives share to its account holders is known as:",
    "options": [
      "a) Profit rate",
      "b) Loss rate",
      "c) Profit / markup rate",
      "d) Interest rate"
    ],
    "correctAnswer": "c) Profit / markup rate"
  },
  {
    "id": 39,
    "questionText": "For calculating Markup, the formula is:",
    "options": [
      "a) P + R + T",
      "b) P × R × T",
      "c) (P + R) × T",
      "d) P - R - T"
    ],
    "correctAnswer": "b) P × R × T"
  },
  {
    "id": 40,
    "questionText": "For calculating Rate of Markup, the formula is:",
    "options": [
      "a) Markup / (Principal × Time)",
      "b) (Markup × 100) / (Principal × Time)",
      "c) (Principal × Time) / Markup",
      "d) (Principal + Time) / Markup"
    ],
    "correctAnswer": "b) (Markup × 100) / (Principal × Time)"
  },
  {
    "id": 41,
    "questionText": "Life insurance provides a protection against risks to the vehicle. This statement is:",
    "options": [
      "a) True",
      "b) False (Life insurance is for people, vehicle insurance for vehicles)",
      "c) Partially true",
      "d) Irrelevant"
    ],
    "correctAnswer": "b) False (Life insurance is for people, vehicle insurance for vehicles)"
  },
  {
    "id": 42,
    "questionText": "How much is 1 US Dollar in Pakistani Rupees (PKR) as per Example 1?",
    "options": [
      "a) Rs. 181.70",
      "b) Rs. 181.70",
      "c) Rs. 183",
      "d) Rs. 237.5"
    ],
    "correctAnswer": "b) Rs. 181.70"
  },
  {
    "id": 43,
    "questionText": "Convert Rs. 75,810 into UK £, given 1 UK Pound = Rs. 237.5.",
    "options": [
      "a) £ 300",
      "b) £ 319.2",
      "c) £ 320",
      "d) £ 350"
    ],
    "correctAnswer": "b) £ 319.2"
  },
  {
    "id": 44,
    "questionText": "Haneef bought a car for Rs. 550,000. He sold it for Rs. 605,000 after some time. Find his profit percentage.",
    "options": [
      "a) 5%",
      "b) 10%",
      "c) 15%",
      "d) 20%"
    ],
    "correctAnswer": "b) 10%"
  },
  {
    "id": 45,
    "questionText": "The marked price of an article is Rs. 3,000. Discount on this article is 20%. Find the selling price of the article.",
    "options": [
      "a) Rs. 2,000",
      "b) Rs. 2,200",
      "c) Rs. 2,400",
      "d) Rs. 2,500"
    ],
    "correctAnswer": "c) Rs. 2,400"
  },
  {
    "id": 46,
    "questionText": "A manufacturer sells an article which cost him Rs. 2500 at 20% profit. The purchaser sells the article at 30% gain. Find the final sale price of the article.",
    "options": [
      "a) Rs. 3000",
      "b) Rs. 3250",
      "c) Rs. 3900",
      "d) Rs. 4000"
    ],
    "correctAnswer": "c) Rs. 3900"
  },
  {
    "id": 47,
    "questionText": "The marked price of every article was reduced by 12% in sale at a store. A cash customer was given a further 10% discount. What percentage would a cash customer pay for an article marked initially as Rs. 2000?",
    "options": [
      "a) 78.4%",
      "b) 79.2%",
      "c) 80%",
      "d) 88%"
    ],
    "correctAnswer": "b) 79.2%"
  },
  {
    "id": 48,
    "questionText": "A person got some loan on which he has to pay Rs. 3,500 as markup at the rate of 10% for 3.5 years. What is the amount of loan?",
    "options": [
      "a) Rs. 5,000",
      "b) Rs. 8,000",
      "c) Rs. 10,000",
      "d) Rs. 12,000"
    ],
    "correctAnswer": "c) Rs. 10,000"
  },
  {
    "id": 49,
    "questionText": "A person got loan from a bank at a rate of 3% per year for some period. In how much period his loan of Rs. 65,000 will become Rs. 68,900?",
    "options": [
      "a) 1 year",
      "b) 2 years",
      "c) 3 years",
      "d) 4 years"
    ],
    "correctAnswer": "b) 2 years"
  },
  {
    "id": 50,
    "questionText": "In Partnership, if Saud's share is 1,35,000, Ali's share is 1,35,000, and Saad's share is 1,08,000, and total ratio is 5+5+4 = 14. What is Tahir's share if the total profit is 42000?",
    "options": [
      "a) Rs. 10,000",
      "b) Rs. 15,000",
      "c) Rs. 20,000",
      "d) Rs. 25,000"
    ],
    "correctAnswer": "b) Rs. 15,000"
  }
],
  "Number Sequence and Patterns": [
  {
    "id": 1,
    "questionText": "What is a number sequence?",
    "options": [
      "A) A random collection of numbers.",
      "B) A list of numbers arranged in a specific order.",
      "C) Only numbers that increase.",
      "D) Only numbers that decrease."
    ],
    "correctAnswer": "B) A list of numbers arranged in a specific order."
  },
  {
    "id": 2,
    "questionText": "In the sequence 1, 3, 7, 13, ___, 31, 57, 87, what is the missing term?",
    "options": [
      "A) 20",
      "B) 21",
      "C) 22",
      "D) 23"
    ],
    "correctAnswer": "D) 23"
  },
  {
    "id": 3,
    "questionText": "What is the common difference (d) in an arithmetic sequence where a₂ = a₁ + d?",
    "options": [
      "A) The product of two consecutive terms.",
      "B) The sum of two consecutive terms.",
      "C) The difference between two consecutive terms.",
      "D) The ratio of two consecutive terms."
    ],
    "correctAnswer": "C) The difference between two consecutive terms."
  },
  {
    "id": 4,
    "questionText": "For the arithmetic sequence 2, 5, 8, 11, ..., what is the common difference?",
    "options": [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 5"
    ],
    "correctAnswer": "B) 3"
  },
  {
    "id": 5,
    "questionText": "What is the general term (aₙ) for an arithmetic sequence?",
    "options": [
      "A) aₙ = a₁ × (n-1)d",
      "B) aₙ = a₁ - (n-1)d",
      "C) aₙ = a₁ + (n-1)d",
      "D) aₙ = d + (n-1)a₁"
    ],
    "correctAnswer": "C) aₙ = a₁ + (n-1)d"
  },
  {
    "id": 6,
    "questionText": "Given an arithmetic sequence with a₁ = 2 and d = 3, what is the 5th term (a₅)?",
    "options": [
      "A) 11",
      "B) 14",
      "C) 17",
      "D) 20"
    ],
    "correctAnswer": "B) 14"
  },
  {
    "id": 7,
    "questionText": "Which term of the arithmetic sequence 3, 8, 13, ... is 83?",
    "options": [
      "A) 15th",
      "B) 17th",
      "C) 19th",
      "D) 21st"
    ],
    "correctAnswer": "B) 17th"
  },
  {
    "id": 8,
    "questionText": "What is the 200th term of an arithmetic sequence if the first term is a₁ and the common difference is d?",
    "options": [
      "A) a₁ + 199d",
      "B) a₁ + 200d",
      "C) d + 199a₁",
      "D) 200a₁ + d"
    ],
    "correctAnswer": "A) a₁ + 199d"
  },
  {
    "id": 9,
    "questionText": "If the nth term of an arithmetic sequence is aₙ = 2n - 7, what is the first term?",
    "options": [
      "A) -5",
      "B) -3",
      "C) -1",
      "D) 2"
    ],
    "correctAnswer": "A) -5"
  },
  {
    "id": 10,
    "questionText": "Which rule describes how to get from one term to the next in a sequence?",
    "options": [
      "A) Position to term rule",
      "B) Term to position rule",
      "C) General term rule",
      "D) Common difference rule"
    ],
    "correctAnswer": "B) Term to position rule"
  },
  {
    "id": 11,
    "questionText": "In the sequence 2, 4, 6, 8, 10, what is the 4th term?",
    "options": [
      "A) 2",
      "B) 4",
      "C) 6",
      "D) 8"
    ],
    "correctAnswer": "D) 8"
  },
  {
    "id": 12,
    "questionText": "The rule for finding a term from its position is called:",
    "options": [
      "A) Term rule",
      "B) Position rule",
      "C) Term to position rule",
      "D) Position to term rule"
    ],
    "correctAnswer": "D) Position to term rule"
  },
  {
    "id": 13,
    "questionText": "For the sequence with position-to-term rule \"Multiply the position by 2 then add 1\", what is the term at position 3?",
    "options": [
      "A) 5",
      "B) 6",
      "C) 7",
      "D) 8"
    ],
    "correctAnswer": "C) 7"
  },
  {
    "id": 14,
    "questionText": "What type of sequence is 4, 8, 12, 16, ...?",
    "options": [
      "A) Geometric sequence",
      "B) Fibonacci sequence",
      "C) Arithmetic sequence",
      "D) Square sequence"
    ],
    "correctAnswer": "C) Arithmetic sequence"
  },
  {
    "id": 15,
    "questionText": "If the general term for a sequence is aₙ = 2n + 1, what is the 5th term?",
    "options": [
      "A) 9",
      "B) 10",
      "C) 11",
      "D) 12"
    ],
    "correctAnswer": "C) 11"
  },
  {
    "id": 16,
    "questionText": "What is a geometric sequence?",
    "options": [
      "A) A sequence where each term is obtained by adding a constant.",
      "B) A sequence where each term is obtained by multiplying a non-zero constant 'r' to the preceding term.",
      "C) A sequence of random numbers.",
      "D) A sequence defined by a graphical representation."
    ],
    "correctAnswer": "B) A sequence where each term is obtained by multiplying a non-zero constant 'r' to the preceding term."
  },
  {
    "id": 17,
    "questionText": "What is 'r' in a geometric sequence?",
    "options": [
      "A) The common difference.",
      "B) The first term.",
      "C) The common ratio.",
      "D) The number of terms."
    ],
    "correctAnswer": "C) The common ratio."
  },
  {
    "id": 18,
    "questionText": "What is the general term for a geometric sequence?",
    "options": [
      "A) aₙ = a₁ + (n-1)r",
      "B) aₙ = a₁rⁿ",
      "C) aₙ = a₁rⁿ⁻¹",
      "D) aₙ = rⁿ⁻¹"
    ],
    "correctAnswer": "C) aₙ = a₁rⁿ⁻¹"
  },
  {
    "id": 19,
    "questionText": "For the geometric sequence 1, 2, 4, 8, ..., what is the common ratio?",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correctAnswer": "B) 2"
  },
  {
    "id": 20,
    "questionText": "Given a geometric sequence with a₁ = 1 and r = 2, what is the 5th term (a₅)?",
    "options": [
      "A) 8",
      "B) 16",
      "C) 32",
      "D) 64"
    ],
    "correctAnswer": "B) 16"
  },
  {
    "id": 21,
    "questionText": "In a geometric sequence, if a₁ = 4 and r = (-4), what is the 3rd term (a₃)?",
    "options": [
      "A) -16",
      "B) 16",
      "C) -64",
      "D) 64"
    ],
    "correctAnswer": "D) 64"
  },
  {
    "id": 22,
    "questionText": "A car travels 250m in the 1st minute, 350m in the 2nd minute, 500m in the 3rd minute, and 700m in the 4th minute. If the car increased its distance traveled in each minute with the same pattern, find the distance that the car travelled in the 7th minute.",
    "options": [
      "A) 1250m",
      "B) 1600m",
      "C) 1950m",
      "D) 2300m"
    ],
    "correctAnswer": "C) 1950m"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an arithmetic sequence?",
    "options": [
      "A) 1, 3, 6, 10, ...",
      "B) 1, 4, 9, 16, ...",
      "C) 2, 5, 8, 11, ...",
      "D) 1, 2, 4, 8, ..."
    ],
    "correctAnswer": "C) 2, 5, 8, 11, ..."
  },
  {
    "id": 24,
    "questionText": "A sequence that goes on forever is called an ____.",
    "options": [
      "A) Finite sequence",
      "B) Infinite sequence",
      "C) Arithmetic sequence",
      "D) Geometric sequence"
    ],
    "correctAnswer": "B) Infinite sequence"
  },
  {
    "id": 25,
    "questionText": "What is the common ratio for the geometric sequence 10, 100, 1000, ...?",
    "options": [
      "A) 1",
      "B) 10",
      "C) 100",
      "D) 1000"
    ],
    "correctAnswer": "B) 10"
  },
  {
    "id": 26,
    "questionText": "Which of the following defines a finite sequence?",
    "options": [
      "A) A sequence that never ends.",
      "B) A sequence with a specific number of terms.",
      "C) A sequence where the common difference is zero.",
      "D) A sequence with no discernible pattern."
    ],
    "correctAnswer": "B) A sequence with a specific number of terms."
  },
  {
    "id": 27,
    "questionText": "If the first term of an arithmetic sequence is 5 and the common difference is 4, what is the 4th term?",
    "options": [
      "A) 13",
      "B) 14",
      "C) 17",
      "D) 20"
    ],
    "correctAnswer": "C) 17"
  },
  {
    "id": 28,
    "questionText": "The terms of a sequence are typically denoted by:",
    "options": [
      "A) x, y, z",
      "B) a₁, a₂, a₃, ...",
      "C) n, m, k",
      "D) +, -, ×"
    ],
    "correctAnswer": "B) a₁, a₂, a₃, ..."
  },
  {
    "id": 29,
    "questionText": "What is the pattern in the sequence 1, 4, 9, 16, 25, ...?",
    "options": [
      "A) Adding 3, 5, 7, ...",
      "B) Multiplying by 4, 9/4, 16/9, ...",
      "C) Square of natural numbers",
      "D) Cube of natural numbers"
    ],
    "correctAnswer": "C) Square of natural numbers"
  },
  {
    "id": 30,
    "questionText": "If the common difference d = 0, what kind of sequence is it?",
    "options": [
      "A) Geometric",
      "B) Constant",
      "C) Increasing",
      "D) Decreasing"
    ],
    "correctAnswer": "B) Constant"
  },
  {
    "id": 31,
    "questionText": "Find the 10th term of the arithmetic sequence 1, 4, 7, 10, ...",
    "options": [
      "A) 25",
      "B) 28",
      "C) 30",
      "D) 31"
    ],
    "correctAnswer": "B) 28"
  },
  {
    "id": 32,
    "questionText": "The sequence a₁, a₂ + d, a₃ + 2d, a₄ + 3d, ... represents what type of sequence?",
    "options": [
      "A) Geometric",
      "B) Arithmetic",
      "C) Fibonacci",
      "D) Square"
    ],
    "correctAnswer": "B) Arithmetic"
  },
  {
    "id": 33,
    "questionText": "What is the value of 'd' if a₃ = 13 and a₂ = 7 in an arithmetic sequence?",
    "options": [
      "A) 5",
      "B) 6",
      "C) 7",
      "D) 8"
    ],
    "correctAnswer": "B) 6"
  },
  {
    "id": 34,
    "questionText": "If the rule is \"add 2 continuously\" from 3, what are the first three terms?",
    "options": [
      "A) 3, 5, 7",
      "B) 3, 6, 9",
      "C) 2, 4, 6",
      "D) 1, 3, 5"
    ],
    "correctAnswer": "A) 3, 5, 7"
  },
  {
    "id": 35,
    "questionText": "The 2nd term of an arithmetic sequence is 4 and the common difference is 4. What is the 1st term?",
    "options": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "correctAnswer": "A) 0"
  },
  {
    "id": 36,
    "questionText": "In a real-life situation, if passengers in a cabin are 50, 100, 150, 200, ..., what type of sequence is this?",
    "options": [
      "A) Geometric",
      "B) Arithmetic",
      "C) Random",
      "D) Inverse"
    ],
    "correctAnswer": "B) Arithmetic"
  },
  {
    "id": 37,
    "questionText": "If a₁ = 50 and d = 50, what is the 8th term of the arithmetic sequence?",
    "options": [
      "A) 350",
      "B) 400",
      "C) 450",
      "D) 500"
    ],
    "correctAnswer": "B) 400"
  },
  {
    "id": 38,
    "questionText": "The sequence 2, 8, 14, ... has a common difference of:",
    "options": [
      "A) 4",
      "B) 6",
      "C) 8",
      "D) 10"
    ],
    "correctAnswer": "B) 6"
  },
  {
    "id": 39,
    "questionText": "For a geometric sequence, if the first term is a₁ and the common ratio is r, what is the second term a₂?",
    "options": [
      "A) a₁ + r",
      "B) a₁ / r",
      "C) a₁ r",
      "D) a₁ - r"
    ],
    "correctAnswer": "C) a₁ r"
  },
  {
    "id": 40,
    "questionText": "What is the common difference for the sequence -3, -1, 1, 3, ...?",
    "options": [
      "A) -2",
      "B) 2",
      "C) 0",
      "D) 4"
    ],
    "correctAnswer": "B) 2"
  },
  {
    "id": 41,
    "questionText": "Which sequence is geometric?",
    "options": [
      "A) 1, 2, 3, 4, ...",
      "B) 1, 4, 16, 64, ...",
      "C) 15, 45, 135, ...",
      "D) Both B and C"
    ],
    "correctAnswer": "D) Both B and C"
  },
  {
    "id": 42,
    "questionText": "If the nth term of a geometric sequence is aₙ = 3.2 (-2)ⁿ⁻¹, what is the first term?",
    "options": [
      "A) 3.2",
      "B) -6.4",
      "C) 12.8",
      "D) -25.6"
    ],
    "correctAnswer": "A) 3.2"
  },
  {
    "id": 43,
    "questionText": "Which of the following is NOT a property of an arithmetic sequence?",
    "options": [
      "A) Common difference is constant.",
      "B) Terms are found by adding a constant.",
      "C) General term formula aₙ = a₁ + (n-1)d.",
      "D) Terms are found by multiplying a constant."
    ],
    "correctAnswer": "D) Terms are found by multiplying a constant."
  },
  {
    "id": 44,
    "questionText": "What is the 3rd term in the sequence 1, 3, 5, 7, ...?",
    "options": [
      "A) 3",
      "B) 5",
      "C) 7",
      "D) 9"
    ],
    "correctAnswer": "B) 5"
  },
  {
    "id": 45,
    "questionText": "The \"position to term rule\" helps us find a term if we know its:",
    "options": [
      "A) Value",
      "B) Position",
      "C) Preceding term",
      "D) Next term"
    ],
    "correctAnswer": "B) Position"
  },
  {
    "id": 46,
    "questionText": "What type of sequence is defined by aₙ = a₁rⁿ⁻¹?",
    "options": [
      "A) Arithmetic",
      "B) Linear",
      "C) Geometric",
      "D) Quadratic"
    ],
    "correctAnswer": "C) Geometric"
  },
  {
    "id": 47,
    "questionText": "In the sequence 2, 4, 8, 16, ..., what is a₅?",
    "options": [
      "A) 24",
      "B) 28",
      "C) 30",
      "D) 32"
    ],
    "correctAnswer": "D) 32"
  },
  {
    "id": 48,
    "questionText": "A sequence where the difference 'd' between two consecutive terms is a constant is called:",
    "options": [
      "A) Geometric sequence",
      "B) Arithmetic sequence",
      "C) Fibonacci sequence",
      "D) Harmonic sequence"
    ],
    "correctAnswer": "B) Arithmetic sequence"
  },
  {
    "id": 49,
    "questionText": "What is the value of the common ratio 'r' in a geometric sequence whose first term is a₁ and second term is a₂?",
    "options": [
      "A) a₂ - a₁",
      "B) a₂ / a₁",
      "C) a₁ / a₂",
      "D) a₁ + a₂"
    ],
    "correctAnswer": "B) a₂ / a₁"
  },
  {
    "id": 50,
    "questionText": "If the rule for a sequence is aₙ = 4n - 3, what is the first term?",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correctAnswer": "A) 1"
  }
],
  "Expansion and Factorization": [
  {
    "id": 1,
    "questionText": "What is the definition of a closed sentence?",
    "options": [
      "A) A sentence that is always false.",
      "B) A sentence that is always true or always false.",
      "C) A sentence with variables.",
      "D) A sentence that cannot be evaluated."
    ],
    "correctAnswer": "B) A sentence that is always true or always false."
  },
  {
    "id": 2,
    "questionText": "Which of the following is a closed sentence?",
    "options": [
      "A) x + 4 = 10",
      "B) 12 ÷ 4 = 3",
      "C) 3y - 4 = 0",
      "D) y = 2x"
    ],
    "correctAnswer": "B) 12 ÷ 4 = 3"
  },
  {
    "id": 3,
    "questionText": "What is an open sentence?",
    "options": [
      "A) A statement that is always true.",
      "B) A statement that is always false.",
      "C) A statement that is neither true nor false until the variables are known.",
      "D) A statement with no variables."
    ],
    "correctAnswer": "C) A statement that is neither true nor false until the variables are known."
  },
  {
    "id": 4,
    "questionText": "An algebraic expression connects variables and constants by:",
    "options": [
      "A) Only addition.",
      "B) Only subtraction.",
      "C) Algebraic operations of addition, subtraction, multiplication and division.",
      "D) Only multiplication."
    ],
    "correctAnswer": "C) Algebraic operations of addition, subtraction, multiplication and division."
  },
  {
    "id": 5,
    "questionText": "What is a polynomial?",
    "options": [
      "A) An algebraic expression with only one term.",
      "B) An algebraic expression with no variables.",
      "C) An algebraic expression consisting of one or more terms in which the exponent of the variable is zero or a positive integer.",
      "D) Any algebraic expression."
    ],
    "correctAnswer": "C) An algebraic expression consisting of one or more terms in which the exponent of the variable is zero or a positive integer."
  },
  {
    "id": 6,
    "questionText": "Which of the following is NOT a polynomial?",
    "options": [
      "A) x² + 3x - 1",
      "B) x - 1/x",
      "C) 2x + 5",
      "D) x³ + y² + z"
    ],
    "correctAnswer": "B) x - 1/x"
  },
  {
    "id": 7,
    "questionText": "What is the degree of a polynomial?",
    "options": [
      "A) The highest coefficient.",
      "B) The highest power of a term in a polynomial.",
      "C) The number of terms.",
      "D) The lowest power of a term."
    ],
    "correctAnswer": "B) The highest power of a term in a polynomial."
  },
  {
    "id": 8,
    "questionText": "What is a linear polynomial?",
    "options": [
      "A) A polynomial of degree 2.",
      "B) A polynomial of degree 1.",
      "C) A polynomial of degree 0.",
      "D) A polynomial with only one variable."
    ],
    "correctAnswer": "B) A polynomial of degree 1."
  },
  {
    "id": 9,
    "questionText": "Which of these is a quadratic polynomial?",
    "options": [
      "A) x + 2",
      "B) x² + yz",
      "C) x³ + 2",
      "D) x⁴ + x² + y²"
    ],
    "correctAnswer": "B) x² + yz"
  },
  {
    "id": 10,
    "questionText": "What is a cubic polynomial?",
    "options": [
      "A) A polynomial with three terms.",
      "B) A polynomial of degree 3.",
      "C) A polynomial with x³ as the lowest power.",
      "D) A polynomial that can be factored into three terms."
    ],
    "correctAnswer": "B) A polynomial of degree 3."
  },
  {
    "id": 11,
    "questionText": "What is the sum of (3x³ + 5x² - 4) and (4x³ + 7x² - x)?",
    "options": [
      "A) 7x³ + 12x² - x - 4",
      "B) 7x³ + 12x² - x + 4",
      "C) x³ + 2x² - x - 4",
      "D) 7x⁶ + 12x⁴ - x² - 4"
    ],
    "correctAnswer": "A) 7x³ + 12x² - x - 4"
  },
  {
    "id": 12,
    "questionText": "Subtract (P - Q) from P + Q.",
    "options": [
      "A) 2P",
      "B) 2Q",
      "C) 0",
      "D) P"
    ],
    "correctAnswer": "B) 2Q"
  },
  {
    "id": 13,
    "questionText": "Multiply (4x²y) by (5x²y²).",
    "options": [
      "A) 20x⁴y²",
      "B) 20x²y³",
      "C) 20x⁴y³",
      "D) 20x³y⁴"
    ],
    "correctAnswer": "C) 20x⁴y³"
  },
  {
    "id": 14,
    "questionText": "Divide (-8x²) by (-4x).",
    "options": [
      "A) 2x",
      "B) -2x",
      "C) 2x²",
      "D) -2x²"
    ],
    "correctAnswer": "A) 2x"
  },
  {
    "id": 15,
    "questionText": "Expand (a + b)².",
    "options": [
      "A) a² + b²",
      "B) a² + 2ab + b²",
      "C) a² - 2ab + b²",
      "D) a² + ab + b²"
    ],
    "correctAnswer": "B) a² + 2ab + b²"
  },
  {
    "id": 16,
    "questionText": "What is the value of (107)² using the formula (a+b)²?",
    "options": [
      "A) 11449",
      "B) 10049",
      "C) 12100",
      "D) 10700"
    ],
    "correctAnswer": "A) 11449"
  },
  {
    "id": 17,
    "questionText": "Expand (a - b)².",
    "options": [
      "A) a² + b²",
      "B) a² + 2ab + b²",
      "C) a² - 2ab + b²",
      "D) a² - b²"
    ],
    "correctAnswer": "C) a² - 2ab + b²"
  },
  {
    "id": 18,
    "questionText": "What is (90 - 3)²?",
    "options": [
      "A) 8100",
      "B) 7569",
      "C) 8649",
      "D) 8469"
    ],
    "correctAnswer": "D) 8469"
  },
  {
    "id": 19,
    "questionText": "Factorize 2x - 4y + 6z.",
    "options": [
      "A) 2(x - 2y + 3z)",
      "B) 2(x + 2y + 3z)",
      "C) 2(x - 4y + 6z)",
      "D) x - 2y + 3z"
    ],
    "correctAnswer": "A) 2(x - 2y + 3z)"
  },
  {
    "id": 20,
    "questionText": "Factorize x² - yz + xy - xz.",
    "options": [
      "A) (x + y)(x - z)",
      "B) (x - y)(x + z)",
      "C) (x + y)(x + z)",
      "D) (x - y)(x - z)"
    ],
    "correctAnswer": "A) (x + y)(x - z)"
  },
  {
    "id": 21,
    "questionText": "What is the factored form of 9a² + 30ab + 25b²?",
    "options": [
      "A) (3a + 5b)²",
      "B) (3a - 5b)²",
      "C) (9a + 25b)²",
      "D) (3a + 5b)(3a - 5b)"
    ],
    "correctAnswer": "A) (3a + 5b)²"
  },
  {
    "id": 22,
    "questionText": "Factorize 16x² - 64x + 64.",
    "options": [
      "A) 16(x - 2)²",
      "B) 16(x + 2)²",
      "C) 8(x - 4)²",
      "D) (4x - 8)²"
    ],
    "correctAnswer": "A) 16(x - 2)²"
  },
  {
    "id": 23,
    "questionText": "What is the expansion of (a² - b²)?",
    "options": [
      "A) (a - b)(a - b)",
      "B) (a + b)(a + b)",
      "C) (a + b)(a - b)",
      "D) a² - 2ab + b²"
    ],
    "correctAnswer": "C) (a + b)(a - b)"
  },
  {
    "id": 24,
    "questionText": "Factorize 25x² - 64.",
    "options": [
      "A) (5x + 8)²",
      "B) (5x - 8)²",
      "C) (5x + 8)(5x - 8)",
      "D) (25x + 64)(25x - 64)"
    ],
    "correctAnswer": "C) (5x + 8)(5x - 8)"
  },
  {
    "id": 25,
    "questionText": "What is the value of 0.987 - 0.643?",
    "options": [
      "A) 0.344",
      "B) 0.348",
      "C) 0.444",
      "D) 0.544"
    ],
    "correctAnswer": "A) 0.344"
  },
  {
    "id": 26,
    "questionText": "Expand (a + b + c)².",
    "options": [
      "A) a² + b² + c² + 2ab + 2bc + 2ca",
      "B) a² + b² + c² + ab + bc + ca",
      "C) a² + b² + c² + 2abc",
      "D) (a + b)² + c²"
    ],
    "correctAnswer": "A) a² + b² + c² + 2ab + 2bc + 2ca"
  },
  {
    "id": 27,
    "questionText": "Expand (2a - 3b)².",
    "options": [
      "A) 4a² - 9b²",
      "B) 4a² + 9b²",
      "C) 4a² - 12ab + 9b²",
      "D) 4a² + 12ab + 9b²"
    ],
    "correctAnswer": "C) 4a² - 12ab + 9b²"
  },
  {
    "id": 28,
    "questionText": "If x + 1/x = 5, what is the value of x² + 1/x²?",
    "options": [
      "A) 23",
      "B) 25",
      "C) 27",
      "D) 29"
    ],
    "correctAnswer": "A) 23"
  },
  {
    "id": 29,
    "questionText": "If x - 1/x = 2, what is the value of x² + 1/x²?",
    "options": [
      "A) 2",
      "B) 4",
      "C) 6",
      "D) 8"
    ],
    "correctAnswer": "C) 6"
  },
  {
    "id": 30,
    "questionText": "What is the standard form of 100,000?",
    "options": [
      "A) 1 × 10⁵",
      "B) 10 × 10⁴",
      "C) 1 × 10⁻⁵",
      "D) 10⁵"
    ],
    "correctAnswer": "A) 1 × 10⁵"
  },
  {
    "id": 31,
    "questionText": "How is (6²)³ simplified using the law of power of power?",
    "options": [
      "A) 6⁵",
      "B) 6⁶",
      "C) 6¹",
      "D) 6⁹"
    ],
    "correctAnswer": "B) 6⁶"
  },
  {
    "id": 32,
    "questionText": "Simplify (3²)⁵ × (3)⁷.",
    "options": [
      "A) 3¹⁰",
      "B) 3¹²",
      "C) 3¹⁷",
      "D) 3³⁵"
    ],
    "correctAnswer": "C) 3¹⁷"
  },
  {
    "id": 33,
    "questionText": "What is the result of x⁰ for any non-zero integer x?",
    "options": [
      "A) x",
      "B) 0",
      "C) 1",
      "D) -1"
    ],
    "correctAnswer": "C) 1"
  },
  {
    "id": 34,
    "questionText": "Simplify x⁻ᵐ.",
    "options": [
      "A) xᵐ",
      "B) 1/xᵐ",
      "C) -xᵐ",
      "D) m/x"
    ],
    "correctAnswer": "B) 1/xᵐ"
  },
  {
    "id": 35,
    "questionText": "How is x^(m/n) expressed in radical form?",
    "options": [
      "A) ⁿ√xᵐ",
      "B) ᵐ√xⁿ",
      "C) x^(m-n)",
      "D) x^(m+n)"
    ],
    "correctAnswer": "A) ⁿ√xᵐ"
  },
  {
    "id": 36,
    "questionText": "Simplify (2³) × (2²).",
    "options": [
      "A) 2¹",
      "B) 2⁵",
      "C) 2⁶",
      "D) 2⁹"
    ],
    "correctAnswer": "B) 2⁵"
  },
  {
    "id": 37,
    "questionText": "Express 0.000007m in standard form.",
    "options": [
      "A) 7 × 10⁻⁶ m",
      "B) 7 × 10⁶ m",
      "C) 7 × 10⁻⁵ m",
      "D) 7 × 10⁻⁷ m"
    ],
    "correctAnswer": "A) 7 × 10⁻⁶ m"
  },
  {
    "id": 38,
    "questionText": "Express 78,330 in scientific notation.",
    "options": [
      "A) 7.833 × 10⁵",
      "B) 7.833 × 10⁴",
      "C) 7.833 × 10⁻⁴",
      "D) 78.33 × 10³"
    ],
    "correctAnswer": "B) 7.833 × 10⁴"
  },
  {
    "id": 39,
    "questionText": "What is a polynomial expression?",
    "options": [
      "A) An algebraic expression with negative exponents.",
      "B) An algebraic expression with variables in the denominator.",
      "C) An algebraic expression with one or more terms, where the exponent of the variable is zero or a positive integer.",
      "D) An algebraic expression with irrational numbers."
    ],
    "correctAnswer": "C) An algebraic expression with one or more terms, where the exponent of the variable is zero or a positive integer."
  },
  {
    "id": 40,
    "questionText": "If P and Q are two polynomials, their sum is represented as:",
    "options": [
      "A) P - Q",
      "B) P × Q",
      "C) P + Q",
      "D) P ÷ Q"
    ],
    "correctAnswer": "C) P + Q"
  },
  {
    "id": 41,
    "questionText": "What is the coefficient of the variable in a term?",
    "options": [
      "A) The exponent of the variable.",
      "B) The number multiplied by the variable.",
      "C) The variable itself.",
      "D) The degree of the term."
    ],
    "correctAnswer": "B) The number multiplied by the variable."
  },
  {
    "id": 42,
    "questionText": "If x + 1/x = 5, what is the value of x³ + 1/x³?",
    "options": [
      "A) 125",
      "B) 110",
      "C) 100",
      "D) 95"
    ],
    "correctAnswer": "B) 110"
  },
  {
    "id": 43,
    "questionText": "Factorize x² + 2x - 3x - 6.",
    "options": [
      "A) (x - 2)(x + 3)",
      "B) (x + 2)(x - 3)",
      "C) (x + 2)(x + 3)",
      "D) (x - 2)(x - 3)"
    ],
    "correctAnswer": "B) (x + 2)(x - 3)"
  },
  {
    "id": 44,
    "questionText": "Which of the following is NOT a law of exponents?",
    "options": [
      "A) xᵐ × xⁿ = x^(m+n)",
      "B) (xᵐ)ⁿ = x^(m+n)",
      "C) xᵐ ÷ xⁿ = x^(m-n)",
      "D) (xy)ⁿ = xⁿyⁿ"
    ],
    "correctAnswer": "B) (xᵐ)ⁿ = x^(m+n)"
  },
  {
    "id": 45,
    "questionText": "The number 10ⁿ is read as 10 raised to the power of:",
    "options": [
      "A) n",
      "B) 10",
      "C) 1",
      "D) 0"
    ],
    "correctAnswer": "A) n"
  },
  {
    "id": 46,
    "questionText": "What type of polynomial is x²y² + x²z + y²z?",
    "options": [
      "A) Linear",
      "B) Quadratic",
      "C) Cubic",
      "D) Biquadratic"
    ],
    "correctAnswer": "D) Biquadratic"
  },
  {
    "id": 47,
    "questionText": "How do you find the number of digits in the square root of a perfect square if 'n' is even?",
    "options": [
      "A) (n+1)/2",
      "B) n/2",
      "C) n",
      "D) 2n"
    ],
    "correctAnswer": "B) n/2"
  },
  {
    "id": 48,
    "questionText": "What is the scientific notation for a way of expressing very large and very small numbers conveniently?",
    "options": [
      "A) Polynomial expression",
      "B) Standard form",
      "C) Algebraic expression",
      "D) Radical form"
    ],
    "correctAnswer": "B) Standard form"
  },
  {
    "id": 49,
    "questionText": "Simplify (3y)³ × (y²)⁴.",
    "options": [
      "A) 27y¹¹",
      "B) 9y⁷",
      "C) 27y⁸",
      "D) 27y⁵"
    ],
    "correctAnswer": "A) 27y¹¹"
  },
  {
    "id": 50,
    "questionText": "The expression (a + b)(a - b) is equal to:",
    "options": [
      "A) a² + b²",
      "B) a² - b²",
      "C) a² + 2ab + b²",
      "D) a² - 2ab + b²"
    ],
    "correctAnswer": "B) a² - b²"
  }
],
  "Linear Equations and Inequalities": [
  {
    "id": 1,
    "questionText": "What is a linear equation in two variables?",
    "options": [
      "A) ax + by = c where a, b, c are real numbers and a, b are not both zero.",
      "B) ax² + by = c",
      "C) ax + by + cz = d",
      "D) ax = c"
    ],
    "correctAnswer": "A) ax + by = c where a, b, c are real numbers and a, b are not both zero."
  },
  {
    "id": 2,
    "questionText": "What is the standard form of a linear equation in two variables, where a, b ≠ 0?",
    "options": [
      "A) y = mx + c",
      "B) ax + by = c",
      "C) ax² + by = c",
      "D) a/x + b/y = c"
    ],
    "correctAnswer": "B) ax + by = c"
  },
  {
    "id": 3,
    "questionText": "What is the slope-intercept form of a linear equation?",
    "options": [
      "A) ax + by = c",
      "B) y = mx + c",
      "C) x = my + c",
      "D) x/a + y/b = 1"
    ],
    "correctAnswer": "B) y = mx + c"
  },
  {
    "id": 4,
    "questionText": "In the equation y = mx + c, what does 'm' represent?",
    "options": [
      "A) Y-intercept",
      "B) X-intercept",
      "C) Steepness of the line (gradient)",
      "D) Constant term"
    ],
    "correctAnswer": "C) Steepness of the line (gradient)"
  },
  {
    "id": 5,
    "questionText": "Convert 6x + 2y = 10 to slope-intercept form.",
    "options": [
      "A) y = 3x - 5",
      "B) y = -3x + 5",
      "C) y = 6x + 10",
      "D) y = -6x + 10"
    ],
    "correctAnswer": "B) y = -3x + 5"
  },
  {
    "id": 6,
    "questionText": "Find the value of x in the equation x + 3y = 7 when y = 5.",
    "options": [
      "A) -8",
      "B) 8",
      "C) 22",
      "D) -22"
    ],
    "correctAnswer": "A) -8"
  },
  {
    "id": 7,
    "questionText": "Change the subject of the formula u = v + at to t.",
    "options": [
      "A) t = (u + v) / a",
      "B) t = (u - v) / a",
      "C) t = a / (u - v)",
      "D) t = a(u - v)"
    ],
    "correctAnswer": "B) t = (u - v) / a"
  },
  {
    "id": 8,
    "questionText": "To locate a point (x, y) on a Cartesian plane, from the origin, you move:",
    "options": [
      "A) y units horizontally and x units vertically.",
      "B) x units horizontally and y units vertically.",
      "C) x units diagonally.",
      "D) y units diagonally."
    ],
    "correctAnswer": "B) x units horizontally and y units vertically."
  },
  {
    "id": 9,
    "questionText": "What type of graph is y = c (where c is a constant)?",
    "options": [
      "A) A vertical line parallel to the y-axis.",
      "B) A horizontal line parallel to the x-axis.",
      "C) A line passing through the origin.",
      "D) A line with a negative slope."
    ],
    "correctAnswer": "B) A horizontal line parallel to the x-axis."
  },
  {
    "id": 10,
    "questionText": "The graph of x = -5 is a straight line:",
    "options": [
      "A) Parallel to the x-axis.",
      "B) Parallel to the y-axis.",
      "C) Passing through the origin.",
      "D) With a slope of -5."
    ],
    "correctAnswer": "B) Parallel to the y-axis."
  },
  {
    "id": 11,
    "questionText": "The graph of the equation y = 2x is a straight line that:",
    "options": [
      "A) Is parallel to the x-axis.",
      "B) Passes through the origin (0, 0) and has a slope of 2.",
      "C) Is parallel to the y-axis.",
      "D) Has a y-intercept of 2."
    ],
    "correctAnswer": "B) Passes through the origin (0, 0) and has a slope of 2."
  },
  {
    "id": 12,
    "questionText": "The y-intercept is the point where the line cuts the:",
    "options": [
      "A) X-axis",
      "B) Y-axis",
      "C) Origin",
      "D) Any point on the line"
    ],
    "correctAnswer": "B) Y-axis"
  },
  {
    "id": 13,
    "questionText": "What is the slope of a line passing through (x₁, y₁) and (x₂, y₂)?",
    "options": [
      "A) (y₂ - y₁) / (x₂ - x₁)",
      "B) (x₂ - x₁) / (y₂ - y₁)",
      "C) (y₂ + y₁) / (x₂ + x₁)",
      "D) (x₂ + y₂) / (x₁ + y₁)"
    ],
    "correctAnswer": "A) (y₂ - y₁) / (x₂ - x₁)"
  },
  {
    "id": 14,
    "questionText": "How many linear equations are involved in a system of simultaneous linear equations in two variables?",
    "options": [
      "A) One",
      "B) Two or more",
      "C) Three",
      "D) Four"
    ],
    "correctAnswer": "B) Two or more"
  },
  {
    "id": 15,
    "questionText": "Which method is used to solve simultaneous linear equations?",
    "options": [
      "A) Differentiation method",
      "B) Integration method",
      "C) Elimination method",
      "D) Matrix method"
    ],
    "correctAnswer": "C) Elimination method"
  },
  {
    "id": 16,
    "questionText": "Solve the system of equations: 9x + 8y = 1 and 5x - y = 6 using the elimination method. What is the value of x?",
    "options": [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) 2"
    ],
    "correctAnswer": "A) 1"
  },
  {
    "id": 17,
    "questionText": "If x = 1 from the previous question, what is the value of y?",
    "options": [
      "A) -1",
      "B) 1",
      "C) 5",
      "D) -5"
    ],
    "correctAnswer": "A) -1"
  },
  {
    "id": 18,
    "questionText": "What is the solution to x + y = 3 and x - y = 1 graphically?",
    "options": [
      "A) (0, 3)",
      "B) (1, 2)",
      "C) (2, 1)",
      "D) (3, 0)"
    ],
    "correctAnswer": "C) (2, 1)"
  },
  {
    "id": 19,
    "questionText": "Eleven years ago, Ali's age was 5 times Waleed's age. But after 7 years, Ali's age will be 2 times of Waleed's age. What is Ali's current age?",
    "options": [
      "A) 41 years",
      "B) 17 years",
      "C) 30 years",
      "D) 50 years"
    ],
    "correctAnswer": "A) 41 years"
  },
  {
    "id": 20,
    "questionText": "If the numerator and denominator of a fraction are increased by 5, the fraction becomes 2/5. If numerator and denominator are decreased by 3, the fraction becomes 1/2. Find the fraction.",
    "options": [
      "A) x/y = 19/43",
      "B) x/y = 5/10",
      "C) x/y = 10/19",
      "D) x/y = 1/2"
    ],
    "correctAnswer": "A) x/y = 19/43"
  },
  {
    "id": 21,
    "questionText": "What is a linear inequality?",
    "options": [
      "A) An equation with two variables.",
      "B) An inequality in which the variable occurs only to the first power.",
      "C) An equation with an equals sign.",
      "D) A statement involving curves."
    ],
    "correctAnswer": "B) An inequality in which the variable occurs only to the first power."
  },
  {
    "id": 22,
    "questionText": "The standard form of linear inequality in one variable is:",
    "options": [
      "A) ax + by = c",
      "B) ax + b < 0, where a, b are real numbers and a ≠ 0.",
      "C) y = mx + c",
      "D) ax² + bx + c > 0"
    ],
    "correctAnswer": "B) ax + b < 0, where a, b are real numbers and a ≠ 0."
  },
  {
    "id": 23,
    "questionText": "What property of inequalities states that if a > b and b > c, then a > c?",
    "options": [
      "A) Trichotomy Property",
      "B) Transitive Property",
      "C) Addition Property",
      "D) Multiplication Property"
    ],
    "correctAnswer": "B) Transitive Property"
  },
  {
    "id": 24,
    "questionText": "If a > b, then a + c is:",
    "options": [
      "A) Less than b + c",
      "B) Equal to b + c",
      "C) Greater than b + c",
      "D) Unrelated to b + c"
    ],
    "correctAnswer": "C) Greater than b + c"
  },
  {
    "id": 25,
    "questionText": "If a < b and c > 0, then ac is:",
    "options": [
      "A) Less than bc",
      "B) Greater than bc",
      "C) Equal to bc",
      "D) Undefined"
    ],
    "correctAnswer": "A) Less than bc"
  },
  {
    "id": 26,
    "questionText": "Solve the inequality 2x - 5 > 1.",
    "options": [
      "A) x > 3",
      "B) x < 3",
      "C) x > -3",
      "D) x < -3"
    ],
    "correctAnswer": "A) x > 3"
  },
  {
    "id": 27,
    "questionText": "Representing inequalities on a number line makes it easier to:",
    "options": [
      "A) Calculate the exact solution.",
      "B) Understand the solution of an inequality.",
      "C) Graph equations.",
      "D) Find the slope."
    ],
    "correctAnswer": "B) Understand the solution of an inequality."
  },
  {
    "id": 28,
    "questionText": "Solve the inequality 5x + 1 < 13.",
    "options": [
      "A) x > 12/5",
      "B) x < 12/5",
      "C) x ≤ 12/5",
      "D) x ≥ 12/5"
    ],
    "correctAnswer": "B) x < 12/5"
  },
  {
    "id": 29,
    "questionText": "What is the solution to x - 3 < 2?",
    "options": [
      "A) x < 5",
      "B) x > 5",
      "C) x < -5",
      "D) x > -5"
    ],
    "correctAnswer": "A) x < 5"
  },
  {
    "id": 30,
    "questionText": "What is the solution to 7x + 6 ≤ 5x?",
    "options": [
      "A) x ≤ 3",
      "B) x ≥ 3",
      "C) x ≤ -3",
      "D) x ≥ -3"
    ],
    "correctAnswer": "C) x ≤ -3"
  },
  {
    "id": 31,
    "questionText": "If two or more linear equations consisting of the same set of variables are satisfied simultaneously by the same values of the variables, then these equations are called:",
    "options": [
      "A) Linear inequalities",
      "B) Simultaneous linear equations",
      "C) Quadratic equations",
      "D) Polynomial equations"
    ],
    "correctAnswer": "B) Simultaneous linear equations"
  },
  {
    "id": 32,
    "questionText": "The graph of a linear equation y = mx + c is:",
    "options": [
      "A) A curve",
      "B) A straight line",
      "C) A parabola",
      "D) An ellipse"
    ],
    "correctAnswer": "B) A straight line"
  },
  {
    "id": 33,
    "questionText": "What is the y-intercept of the equation y = -2x + 8?",
    "options": [
      "A) 8",
      "B) -2",
      "C) 4",
      "D) -4"
    ],
    "correctAnswer": "A) 8"
  },
  {
    "id": 34,
    "questionText": "How is the process of finding the value of an unknown in a given formula by substituting the values of suitable unknowns called?",
    "options": [
      "A) Graphing",
      "B) Changing the subject",
      "C) Calculation of unknown value",
      "D) Substitution method"
    ],
    "correctAnswer": "C) Calculation of unknown value"
  },
  {
    "id": 35,
    "questionText": "The solution of 2x - 7y = -3 and y = 5 is:",
    "options": [
      "A) (16, 5)",
      "B) (10, 5)",
      "C) (5, 16)",
      "D) (5, 10)"
    ],
    "correctAnswer": "A) (16, 5)"
  },
  {
    "id": 36,
    "questionText": "Which method is not suitable for solving simultaneous linear equations?",
    "options": [
      "A) Elimination",
      "B) Substitution",
      "C) Graphical",
      "D) Factorization"
    ],
    "correctAnswer": "D) Factorization"
  },
  {
    "id": 37,
    "questionText": "If a point is (4, 3), starting from the origin, to locate it, we move:",
    "options": [
      "A) 4 units up, 3 units right.",
      "B) 4 units left, 3 units down.",
      "C) 4 units right, 3 units up.",
      "D) 4 units down, 3 units left."
    ],
    "correctAnswer": "C) 4 units right, 3 units up."
  },
  {
    "id": 38,
    "questionText": "The system of linear equations x + y = 2 and x - y = 1 is a system of two linear equations with:",
    "options": [
      "A) One variable",
      "B) Three variables",
      "C) Two variables",
      "D) No variables"
    ],
    "correctAnswer": "C) Two variables"
  },
  {
    "id": 39,
    "questionText": "What is the slope of the line y = 3x - 2?",
    "options": [
      "A) -2",
      "B) 3",
      "C) 1",
      "D) -3"
    ],
    "correctAnswer": "B) 3"
  },
  {
    "id": 40,
    "questionText": "An ordered pair is a composition of two elements that are separated by a comma and written inside:",
    "options": [
      "A) Square brackets",
      "B) Parentheses",
      "C) Curly brackets",
      "D) Angle brackets"
    ],
    "correctAnswer": "B) Parentheses"
  },
  {
    "id": 41,
    "questionText": "What is the value of y when x = 3 in the equation y = -2x + 8?",
    "options": [
      "A) 2",
      "B) -2",
      "C) 14",
      "D) -14"
    ],
    "correctAnswer": "A) 2"
  },
  {
    "id": 42,
    "questionText": "If u = v + at, then a is the subject of the formula. How can a be expressed?",
    "options": [
      "A) a = (u - v) / t",
      "B) a = t / (u - v)",
      "C) a = u + v - t",
      "D) a = (u + v) / t"
    ],
    "correctAnswer": "A) a = (u - v) / t"
  },
  {
    "id": 43,
    "questionText": "Which of the following is an inequality symbol?",
    "options": [
      "A) =",
      "B) >",
      "C) +",
      "D) ×"
    ],
    "correctAnswer": "B) >"
  },
  {
    "id": 44,
    "questionText": "What happens to an inequality if you multiply or divide it by a negative number?",
    "options": [
      "A) The inequality sign remains the same.",
      "B) The inequality sign is always changed.",
      "C) The inequality becomes an equation.",
      "D) The numbers become negative."
    ],
    "correctAnswer": "B) The inequality sign is always changed."
  },
  {
    "id": 45,
    "questionText": "How many linear equations in two variables were solved in Example 11 on page 124?",
    "options": [
      "A) One",
      "B) Two",
      "C) Three",
      "D) Four"
    ],
    "correctAnswer": "B) Two"
  },
  {
    "id": 46,
    "questionText": "What type of equation is 3x + 7y = 4 and x - 5y = 10?",
    "options": [
      "A) Quadratic",
      "B) Simultaneous linear equations",
      "C) Single linear equation",
      "D) Cubic"
    ],
    "correctAnswer": "B) Simultaneous linear equations"
  },
  {
    "id": 47,
    "questionText": "The method of solving linear equations by finding the intersection point of their graphs is called:",
    "options": [
      "A) Substitution method",
      "B) Elimination method",
      "C) Graphical method",
      "D) Algebraic method"
    ],
    "correctAnswer": "C) Graphical method"
  },
  {
    "id": 48,
    "questionText": "If x - 3 < 2, then x can be:",
    "options": [
      "A) 5",
      "B) 6",
      "C) 4",
      "D) 7"
    ],
    "correctAnswer": "C) 4"
  },
  {
    "id": 49,
    "questionText": "What coordinate determines the y-intercept where the line intersects the y-axis?",
    "options": [
      "A) (x, 0)",
      "B) (0, y)",
      "C) (0, 0)",
      "D) (x, y)"
    ],
    "correctAnswer": "B) (0, y)"
  },
  {
    "id": 50,
    "questionText": "For ax + by = c, a ≠ 0, b ≠ 0. If a = 0, then the equation by = c becomes a:",
    "options": [
      "A) Linear equation in two variables.",
      "B) Linear equation in one variable (y).",
      "C) Quadratic equation.",
      "D) Nonlinear equation."
    ],
    "correctAnswer": "B) Linear equation in one variable (y)."
  }
],
  "Mensuration": [
  {
    "id": 1,
    "questionText": "What is the Pythagorean Theorem?",
    "options": [
      "A) a + b = c",
      "B) a² + b² = c²",
      "C) a³ + b³ = c³",
      "D) ab = c"
    ],
    "correctAnswer": "B) a² + b² = c²"
  },
  {
    "id": 2,
    "questionText": "In a right-angled triangle, what is the side opposite to the right angle called?",
    "options": [
      "A) Adjacent",
      "B) Opposite",
      "C) Hypotenuse",
      "D) Base"
    ],
    "correctAnswer": "C) Hypotenuse"
  },
  {
    "id": 3,
    "questionText": "If the two sides of a right-angled triangle are 5cm and 12cm, what is the length of the hypotenuse?",
    "options": [
      "A) 13cm",
      "B) 17cm",
      "C) 7cm",
      "D) 60cm"
    ],
    "correctAnswer": "A) 13cm"
  },
  {
    "id": 4,
    "questionText": "The length and width of a rectangle are 8cm and 6cm respectively. Find the length of its diagonals.",
    "options": [
      "A) 10cm",
      "B) 14cm",
      "C) 2cm",
      "D) 48cm"
    ],
    "correctAnswer": "A) 10cm"
  },
  {
    "id": 5,
    "questionText": "A ladder 2.5m long is placed against a wall. If its upper end reaches the height of 2m along the wall, then find the distance of the foot of the ladder from the wall.",
    "options": [
      "A) 1.5m",
      "B) 2.25m",
      "C) 0.5m",
      "D) 4.5m"
    ],
    "correctAnswer": "A) 1.5m"
  },
  {
    "id": 6,
    "questionText": "What is a circle?",
    "options": [
      "A) A straight line.",
      "B) A plane figure bounded by one fixed curved line such that all straight lines drawn from a fixed point to the boundary are equal.",
      "C) A polygon.",
      "D) A three-dimensional shape."
    ],
    "correctAnswer": "B) A plane figure bounded by one fixed curved line such that all straight lines drawn from a fixed point to the boundary are equal."
  },
  {
    "id": 7,
    "questionText": "The fixed point inside a circle is called its:",
    "options": [
      "A) Radius",
      "B) Diameter",
      "C) Center",
      "D) Chord"
    ],
    "correctAnswer": "C) Center"
  },
  {
    "id": 8,
    "questionText": "The distance between the centre and any point on the circle is called:",
    "options": [
      "A) Diameter",
      "B) Chord",
      "C) Radius",
      "D) Arc"
    ],
    "correctAnswer": "C) Radius"
  },
  {
    "id": 9,
    "questionText": "A line segment that passes through the centre of a circle and touches at two points on its edge is called:",
    "options": [
      "A) Radius",
      "B) Chord",
      "C) Diameter",
      "D) Tangent"
    ],
    "correctAnswer": "C) Diameter"
  },
  {
    "id": 10,
    "questionText": "What is the formula for arc length (L) of a sector?",
    "options": [
      "A) L = (x/360°) × 2πr",
      "B) L = (x/360°) × πr²",
      "C) L = 2πr",
      "D) L = πr²"
    ],
    "correctAnswer": "A) L = (x/360°) × 2πr"
  },
  {
    "id": 11,
    "questionText": "Find the arc length of a sector subtended by a central angle of 45° in a circle with a radius of 14 cm.",
    "options": [
      "A) 7 cm",
      "B) 11 cm",
      "C) 14 cm",
      "D) 22 cm"
    ],
    "correctAnswer": "B) 11 cm"
  },
  {
    "id": 12,
    "questionText": "What is the formula for the area of a sector?",
    "options": [
      "A) Area = (x/360°) × 2πr",
      "B) Area = (x/360°) × πr²",
      "C) Area = πr²",
      "D) Area = 2πr"
    ],
    "correctAnswer": "B) Area = (x/360°) × πr²"
  },
  {
    "id": 13,
    "questionText": "Find the area of a sector subtended by the central angle 160° and 100° respectively, where the radius is 6cm.",
    "options": [
      "A) 50.29cm² and 31.43cm²",
      "B) 160cm² and 100cm²",
      "C) 6cm² and 6cm²",
      "D) 360cm² and 360cm²"
    ],
    "correctAnswer": "A) 50.29cm² and 31.43cm²"
  },
  {
    "id": 14,
    "questionText": "A 3D shape with a flat polygon base and three or more triangular sides converging at the top is called a:",
    "options": [
      "A) Cylinder",
      "B) Cone",
      "C) Pyramid",
      "D) Sphere"
    ],
    "correctAnswer": "C) Pyramid"
  },
  {
    "id": 15,
    "questionText": "What is the apex of a pyramid?",
    "options": [
      "A) The base of the pyramid.",
      "B) The corner point of a pyramid.",
      "C) The lateral face.",
      "D) The slant height."
    ],
    "correctAnswer": "B) The corner point of a pyramid."
  },
  {
    "id": 16,
    "questionText": "The perpendicular distance from base to the apex is called:",
    "options": [
      "A) Slant height",
      "B) Lateral edge",
      "C) Vertex height",
      "D) Altitude / Vertical height"
    ],
    "correctAnswer": "D) Altitude / Vertical height"
  },
  {
    "id": 17,
    "questionText": "What is the formula for the volume of a pyramid?",
    "options": [
      "A) Volume = base area × height",
      "B) Volume = (1/3) × base area × height",
      "C) Volume = 2 × base area × height",
      "D) Volume = base area + height"
    ],
    "correctAnswer": "B) Volume = (1/3) × base area × height"
  },
  {
    "id": 18,
    "questionText": "Calculate the volume of a tetrahedron whose base area is 21cm² and height 10cm.",
    "options": [
      "A) 70cm³",
      "B) 210cm³",
      "C) 700cm³",
      "D) 300cm³"
    ],
    "correctAnswer": "A) 70cm³"
  },
  {
    "id": 19,
    "questionText": "What is the surface area of a sphere?",
    "options": [
      "A) πr²",
      "B) 2πr²",
      "C) 3πr²",
      "D) 4πr²"
    ],
    "correctAnswer": "D) 4πr²"
  },
  {
    "id": 20,
    "questionText": "Find the surface area of a sphere whose radius is 21cm (π = 22/7).",
    "options": [
      "A) 5544cm²",
      "B) 1386cm²",
      "C) 176cm²",
      "D) 441cm²"
    ],
    "correctAnswer": "A) 5544cm²"
  },
  {
    "id": 21,
    "questionText": "What is the volume of a sphere?",
    "options": [
      "A) (1/3)πr³",
      "B) (2/3)πr³",
      "C) (4/3)πr³",
      "D) 4πr³"
    ],
    "correctAnswer": "C) (4/3)πr³"
  },
  {
    "id": 22,
    "questionText": "What is the surface area of a hemi-sphere?",
    "options": [
      "A) 2πr²",
      "B) 3πr²",
      "C) πr²",
      "D) 4πr²"
    ],
    "correctAnswer": "B) 3πr²"
  },
  {
    "id": 23,
    "questionText": "Calculate the surface area of a hemisphere with radius 4cm.",
    "options": [
      "A) 50.26cm²",
      "B) 150.86cm²",
      "C) 201.06cm²",
      "D) 100.53cm²"
    ],
    "correctAnswer": "B) 150.86cm²"
  },
  {
    "id": 24,
    "questionText": "What is the volume of a hemi-sphere?",
    "options": [
      "A) (1/3)πr³",
      "B) (2/3)πr³",
      "C) πr³",
      "D) (4/3)πr³"
    ],
    "correctAnswer": "B) (2/3)πr³"
  },
  {
    "id": 25,
    "questionText": "What is the formula for the curved surface area of a cone?",
    "options": [
      "A) πr²",
      "B) 2πr",
      "C) πrl",
      "D) πr(r+l)"
    ],
    "correctAnswer": "C) πrl"
  },
  {
    "id": 26,
    "questionText": "What is the formula for the total surface area of a cone?",
    "options": [
      "A) πr² + πrl",
      "B) πrl",
      "C) 2πr + πr²",
      "D) 2πr(r+l)"
    ],
    "correctAnswer": "A) πr² + πrl"
  },
  {
    "id": 27,
    "questionText": "The radius of the base of a cone is 3cm and the height is 4cm. Find its slant height.",
    "options": [
      "A) 3cm",
      "B) 4cm",
      "C) 5cm",
      "D) 7cm"
    ],
    "correctAnswer": "C) 5cm"
  },
  {
    "id": 28,
    "questionText": "The radius of the base of a cone is 6cm, slant height is 10cm. Find the total surface area.",
    "options": [
      "A) 301 ⁵/₇ cm²",
      "B) 188 ⁴/₇ cm²",
      "C) 113 ⅟₇ cm²",
      "D) 200 cm²"
    ],
    "correctAnswer": "A) 301 ⁵/₇ cm²"
  },
  {
    "id": 29,
    "questionText": "What is the volume of a cone?",
    "options": [
      "A) πr²h",
      "B) (1/3)πr²h",
      "C) 2πr²h",
      "D) (2/3)πr²h"
    ],
    "correctAnswer": "B) (1/3)πr²h"
  },
  {
    "id": 30,
    "questionText": "How much sand can a conical container hold whose height is 3.5m and radius is 3m?",
    "options": [
      "A) 100 m³",
      "B) 33 m³",
      "C) 3300 kg",
      "D) 33 m³ of sand, 3300 kg for 100kg/m^3"
    ],
    "correctAnswer": "B) 33 m³"
  },
  {
    "id": 31,
    "questionText": "A composite 3D figure is made up of:",
    "options": [
      "A) Only one basic 3D figure.",
      "B) Two or more basic 3D figures.",
      "C) Two 2D figures.",
      "D) Only squares and triangles."
    ],
    "correctAnswer": "B) Two or more basic 3D figures."
  },
  {
    "id": 32,
    "questionText": "Find the total surface area of the composite figure made of a square and a triangle as shown in Example 26.",
    "options": [
      "A) 300cm²",
      "B) 350cm²",
      "C) 650cm²",
      "D) 875cm³"
    ],
    "correctAnswer": "C) 650cm²"
  },
  {
    "id": 33,
    "questionText": "What is the volume of a composite object made of a square prism?",
    "options": [
      "A) 144cm³",
      "B) 100.8cm³",
      "C) 244.8cm³",
      "D) 228cm³"
    ],
    "correctAnswer": "C) 244.8cm³"
  },
  {
    "id": 34,
    "questionText": "A right pyramid whose base is a right angled triangle has volume 60cm³. If base and altitude of the right angle triangle are 6cm and 10cm, find the height of the pyramid.",
    "options": [
      "A) 3cm",
      "B) 4cm",
      "C) 6cm",
      "D) 10cm"
    ],
    "correctAnswer": "C) 6cm"
  },
  {
    "id": 35,
    "questionText": "The area of the square of side \"c\" is equal to the total area of the square of side \"b\" and the square of side \"a\" in a right triangle. This is a property of:",
    "options": [
      "A) Euclidean geometry",
      "B) Pythagorean Theorem",
      "C) Area calculations",
      "D) Perimeter calculations"
    ],
    "correctAnswer": "B) Pythagorean Theorem"
  },
  {
    "id": 36,
    "questionText": "A line segment joining two points on a circle is called a:",
    "options": [
      "A) Radius",
      "B) Diameter",
      "C) Arc",
      "D) Chord"
    ],
    "correctAnswer": "D) Chord"
  },
  {
    "id": 37,
    "questionText": "Concentric circles are circles with:",
    "options": [
      "A) Different radii and different centers.",
      "B) The same radii and same centers.",
      "C) The same center and different radii.",
      "D) Different centers and same radii."
    ],
    "correctAnswer": "C) The same center and different radii."
  },
  {
    "id": 38,
    "questionText": "The perimeter of a sector is given by:",
    "options": [
      "A) Arc length + radius",
      "B) Arc length + 2 × radius",
      "C) Arc length × radius",
      "D) Arc length - 2 × radius"
    ],
    "correctAnswer": "B) Arc length + 2 × radius"
  },
  {
    "id": 39,
    "questionText": "The volume of any pyramid is always one-third of the volume of the:",
    "options": [
      "A) Cylinder",
      "B) Cone",
      "C) Prism",
      "D) Sphere"
    ],
    "correctAnswer": "C) Prism"
  },
  {
    "id": 40,
    "questionText": "A polyheron is a three-dimensional shape with flat polygonal faces, straight edges and sharp corners or vertices. Which shape is NOT a polyhedron?",
    "options": [
      "A) Pyramid",
      "B) Cube",
      "C) Sphere",
      "D) Prism"
    ],
    "correctAnswer": "C) Sphere"
  },
  {
    "id": 41,
    "questionText": "For a cylinder with radius r and height h, what is 2πr²h?",
    "options": [
      "A) Volume of cylinder",
      "B) Curved surface area",
      "C) Total surface area",
      "D) It is not a standard formula for a cylinder"
    ],
    "correctAnswer": "D) It is not a standard formula for a cylinder"
  },
  {
    "id": 42,
    "questionText": "What is the diameter of a hemisphere?",
    "options": [
      "A) r",
      "B) 2r",
      "C) πr",
      "D) 4r"
    ],
    "correctAnswer": "B) 2r"
  },
  {
    "id": 43,
    "questionText": "In a cone, the height is perpendicular to the:",
    "options": [
      "A) Apex",
      "B) Slant height",
      "C) Radius",
      "D) Vertex"
    ],
    "correctAnswer": "C) Radius"
  },
  {
    "id": 44,
    "questionText": "What is the volume of a cylinder with radius r and height h?",
    "options": [
      "A) πr²h",
      "B) (1/3)πr²h",
      "C) 2πr²h",
      "D) πrh"
    ],
    "correctAnswer": "A) πr²h"
  },
  {
    "id": 45,
    "questionText": "The radius of the base of a cone is 7cm and its height is 10cm. Calculate its volume.",
    "options": [
      "A) 1540/3 cm³",
      "B) 490π/3 cm³",
      "C) 490π cm³",
      "D) 1540 cm³"
    ],
    "correctAnswer": "A) 1540/3 cm³"
  },
  {
    "id": 46,
    "questionText": "What is the surface area of a square pyramid whose base is 5cm by 5cm and the slant height of its triangular faces is 3cm?",
    "options": [
      "A) 25cm²",
      "B) 30cm²",
      "C) 55cm²",
      "D) 100cm²"
    ],
    "correctAnswer": "C) 55cm²"
  },
  {
    "id": 47,
    "questionText": "How many litres of water can a spherical tank contain if its radius is 1.4m?",
    "options": [
      "A) 1.4 L",
      "B) 11.499 L",
      "C) 11499 L",
      "D) 114.99 L"
    ],
    "correctAnswer": "C) 11499 L"
  },
  {
    "id": 48,
    "questionText": "A right-angled triangle ABC has m∠C = 90° and m∠A = 2.4cm, m∠B = 2.1cm. What is the length of AB?",
    "options": [
      "A) 7.2cm",
      "B) 3.18cm",
      "C) 3.2cm",
      "D) 2.4cm"
    ],
    "correctAnswer": "B) 3.18cm"
  },
  {
    "id": 49,
    "questionText": "What is the volume of a hemi-sphere given r = 5cm?",
    "options": [
      "A) 261.667cm³",
      "B) 130.833cm³",
      "C) 523.333cm³",
      "D) 1047.19cm³"
    ],
    "correctAnswer": "A) 261.667cm³"
  },
  {
    "id": 50,
    "questionText": "The formula L = √(h² + r²) is used to calculate the:",
    "options": [
      "A) Area of a cone",
      "B) Volume of a cone",
      "C) Slant height of a cone",
      "D) Base radius of a cone"
    ],
    "correctAnswer": "C) Slant height of a cone"
  }
],
  "Congruency and Similarity Construction of Triangles and Transformation": [
  {
    "id": 1,
    "questionText": "Which symbol is used to denote congruence?",
    "options": [
      "A) ≈",
      "B) ≅",
      "C) ∼",
      "D) ="
    ],
    "correctAnswer": "B) ≅"
  },
  {
    "id": 2,
    "questionText": "Two figures are congruent if they have:",
    "options": [
      "A) Exactly the same shape",
      "B) Exactly the same size",
      "C) Exactly the same shape and size",
      "D) Different shapes but same size"
    ],
    "correctAnswer": "C) Exactly the same shape and size"
  },
  {
    "id": 3,
    "questionText": "Two figures are similar if they have:",
    "options": [
      "A) The same shape but different sizes",
      "B) The same size but different shapes",
      "C) Exactly the same shape and size",
      "D) Different shapes and sizes"
    ],
    "correctAnswer": "A) The same shape but different sizes"
  },
  {
    "id": 4,
    "questionText": "In congruent shapes, corresponding sides and angles are:",
    "options": [
      "A) Unequal",
      "B) Equal",
      "C) Proportional",
      "D) Inverted"
    ],
    "correctAnswer": "B) Equal"
  },
  {
    "id": 5,
    "questionText": "What is the main characteristic of non-congruent shapes?",
    "options": [
      "A) They have the same shape but different sizes.",
      "B) They have different shapes.",
      "C) They do not necessarily have the same size or shape.",
      "D) They have the same size."
    ],
    "correctAnswer": "C) They do not necessarily have the same size or shape."
  },
  {
    "id": 6,
    "questionText": "The SSS Postulate for triangle congruence states that if three sides of one triangle are equal to three corresponding sides of another triangle, then the triangles are:",
    "options": [
      "A) Similar",
      "B) Enlarged",
      "C) Congruent",
      "D) Rotated"
    ],
    "correctAnswer": "C) Congruent"
  },
  {
    "id": 7,
    "questionText": "The SAS Postulate states that if two sides and the included angle of one triangle are equal to the two corresponding sides and the included angle of another triangle, then the triangles are:",
    "options": [
      "A) Similar",
      "B) Congruent",
      "C) Translated",
      "D) Reflected"
    ],
    "correctAnswer": "B) Congruent"
  },
  {
    "id": 8,
    "questionText": "The ASA Postulate states that if two angles and the included side of one triangle are equal to the two corresponding angles and the included side of another triangle, then the triangles are:",
    "options": [
      "A) Similar",
      "B) Enlarged",
      "C) Congruent",
      "D) Rotated"
    ],
    "correctAnswer": "C) Congruent"
  },
  {
    "id": 9,
    "questionText": "The RHS Postulate for triangle congruence applies to:",
    "options": [
      "A) Acute triangles",
      "B) Obtuse triangles",
      "C) Right-angled triangles",
      "D) Equilateral triangles"
    ],
    "correctAnswer": "C) Right-angled triangles"
  },
  {
    "id": 10,
    "questionText": "In RHS congruence, what specific elements must be equal in two right-angled triangles?",
    "options": [
      "A) All three sides",
      "B) Hypotenuse and one side",
      "C) Two angles and a side",
      "D) All three angles"
    ],
    "correctAnswer": "B) Hypotenuse and one side"
  },
  {
    "id": 11,
    "questionText": "If ΔLMN ≅ ΔXYZ, which of the following is true?",
    "options": [
      "A) LM = YZ",
      "B) m∠L = m∠X",
      "C) MN = XY",
      "D) LN = XY"
    ],
    "correctAnswer": "B) m∠L = m∠X"
  },
  {
    "id": 12,
    "questionText": "If two triangles have corresponding angles equal, they are:",
    "options": [
      "A) Congruent",
      "B) Similar",
      "C) Translated",
      "D) Reflected"
    ],
    "correctAnswer": "B) Similar"
  },
  {
    "id": 13,
    "questionText": "If ΔABC is similar to ΔDEF, then the ratio of corresponding sides is:",
    "options": [
      "A) mAB/mDE = mBC/mEF = mAC/mDF",
      "B) mAB/mBC = mDE/mEF",
      "C) mAC/mDE = mBC/mDF",
      "D) mAB/mEF = mBC/mDF"
    ],
    "correctAnswer": "A) mAB/mDE = mBC/mEF = mAC/mDF"
  },
  {
    "id": 14,
    "questionText": "What is the sum of interior angles of a triangle?",
    "options": [
      "A) 90°",
      "B) 180°",
      "C) 270°",
      "D) 360°"
    ],
    "correctAnswer": "B) 180°"
  },
  {
    "id": 15,
    "questionText": "When constructing a triangle with given SSS, what does SSS stand for?",
    "options": [
      "A) Side-Side-Side",
      "B) Sum-Side-Sum",
      "C) Segment-Segment-Segment",
      "D) Side-Slope-Side"
    ],
    "correctAnswer": "A) Side-Side-Side"
  },
  {
    "id": 16,
    "questionText": "When constructing a square given its diagonal, what is the initial step?",
    "options": [
      "A) Draw a perpendicular bisector of the diagonal.",
      "B) Draw a line segment equal to the diagonal.",
      "C) Mark the center of the square.",
      "D) Draw arcs from the endpoints of the diagonal."
    ],
    "correctAnswer": "B) Draw a line segment equal to the diagonal."
  },
  {
    "id": 17,
    "questionText": "To construct a rectangle given two sides, say mAB = 4cm and mBC = 5cm, what is the first step?",
    "options": [
      "A) Draw mAC as a diagonal.",
      "B) Draw a line segment AB = 4cm.",
      "C) Draw a line segment BC = 5cm.",
      "D) Measure angle B."
    ],
    "correctAnswer": "B) Draw a line segment AB = 4cm."
  },
  {
    "id": 18,
    "questionText": "What is the sum of interior angles of a quadrilateral?",
    "options": [
      "A) 90°",
      "B) 180°",
      "C) 270°",
      "D) 360°"
    ],
    "correctAnswer": "D) 360°"
  },
  {
    "id": 19,
    "questionText": "To construct a rhombus with a given side length and an angle (e.g., mPQ = 4cm and m∠P = 45°), what is done after drawing the side PQ?",
    "options": [
      "A) Draw the diagonal.",
      "B) Construct an angle of 45° at P.",
      "C) Draw an arc from Q.",
      "D) Construct a perpendicular line."
    ],
    "correctAnswer": "B) Construct an angle of 45° at P."
  },
  {
    "id": 20,
    "questionText": "In the construction of a parallelogram, if two adjacent sides and their included angle are given, what information is usually the first to be drawn?",
    "options": [
      "A) The diagonal.",
      "B) One of the given sides.",
      "C) The non-included angle.",
      "D) A perpendicular line."
    ],
    "correctAnswer": "B) One of the given sides."
  },
  {
    "id": 21,
    "questionText": "What is a key property of a kite that is relevant to its construction?",
    "options": [
      "A) All sides are equal.",
      "B) Diagonals bisect each other at right angles.",
      "C) It has two pairs of equal-length sides that are adjacent to each other.",
      "D) All angles are equal."
    ],
    "correctAnswer": "C) It has two pairs of equal-length sides that are adjacent to each other."
  },
  {
    "id": 22,
    "questionText": "When constructing a triangle using ASA (Angle-Side-Angle) criteria, what type of bisector involves dividing an angle into two equal parts?",
    "options": [
      "A) Angle bisector of a triangle",
      "B) Perpendicular bisector of a side",
      "C) Median",
      "D) Altitude"
    ],
    "correctAnswer": "A) Angle bisector of a triangle"
  },
  {
    "id": 23,
    "questionText": "The point where the three angle bisectors of a triangle intersect is called the:",
    "options": [
      "A) Centroid",
      "B) Incentre",
      "C) Circumcentre",
      "D) Orthocentre"
    ],
    "correctAnswer": "B) Incentre"
  },
  {
    "id": 24,
    "questionText": "The point where the three perpendicular bisectors of the sides of a triangle intersect is called the:",
    "options": [
      "A) Incentre",
      "B) Orthocentre",
      "C) Circumcentre",
      "D) Centroid"
    ],
    "correctAnswer": "C) Circumcentre"
  },
  {
    "id": 25,
    "questionText": "To construct a triangle given two angles and a side, the side is typically drawn first, then the angles are constructed at its endpoints. This corresponds to which postulate?",
    "options": [
      "A) SSS",
      "B) SAS",
      "C) ASA",
      "D) RHS"
    ],
    "correctAnswer": "C) ASA"
  },
  {
    "id": 26,
    "questionText": "Transformation means to:",
    "options": [
      "A) Change the size of a figure only.",
      "B) Change the shape of a figure only.",
      "C) Make some changes in any given geometric shape.",
      "D) Change the orientation of a figure only."
    ],
    "correctAnswer": "C) Make some changes in any given geometric shape."
  },
  {
    "id": 27,
    "questionText": "Which of the following is NOT a type of transformation mentioned?",
    "options": [
      "A) Translation",
      "B) Reflection",
      "C) Shearing",
      "D) Rotation"
    ],
    "correctAnswer": "C) Shearing"
  },
  {
    "id": 28,
    "questionText": "In a translation, the shape:",
    "options": [
      "A) Changes its size.",
      "B) Changes its orientation.",
      "C) Moves without changing its size, shape, or orientation.",
      "D) Flips over a line."
    ],
    "correctAnswer": "C) Moves without changing its size, shape, or orientation."
  },
  {
    "id": 29,
    "questionText": "A reflection is a transformation that involves:",
    "options": [
      "A) Moving an object along a straight line.",
      "B) Flipping an object across a line.",
      "C) Turning an object around a fixed point.",
      "D) Resizing an object."
    ],
    "correctAnswer": "B) Flipping an object across a line."
  },
  {
    "id": 30,
    "questionText": "A rotation is a transformation where an object:",
    "options": [
      "A) Slides without turning.",
      "B) Flips over a line.",
      "C) Is turned around a fixed point.",
      "D) Is enlarged or reduced."
    ],
    "correctAnswer": "C) Is turned around a fixed point."
  },
  {
    "id": 31,
    "questionText": "The centre of rotation is:",
    "options": [
      "A) A line about which an object flips.",
      "B) A fixed point around which a shape is turned.",
      "C) The distance an object moves.",
      "D) The ratio of image size to object size."
    ],
    "correctAnswer": "B) A fixed point around which a shape is turned."
  },
  {
    "id": 32,
    "questionText": "A 90° counterclockwise rotation about the origin for a point (x, y) results in the image point:",
    "options": [
      "A) (y, -x)",
      "B) (-y, x)",
      "C) (-x, -y)",
      "D) (x, -y)"
    ],
    "correctAnswer": "B) (-y, x)"
  },
  {
    "id": 33,
    "questionText": "A 90° clockwise rotation about the origin for a point (x, y) results in the image point:",
    "options": [
      "A) (y, -x)",
      "B) (-y, x)",
      "C) (-x, -y)",
      "D) (x, -y)"
    ],
    "correctAnswer": "A) (y, -x)"
  },
  {
    "id": 34,
    "questionText": "A 180° rotation (either clockwise or counterclockwise) about the origin for a point (x, y) results in the image point:",
    "options": [
      "A) (y, x)",
      "B) (-y, x)",
      "C) (-x, -y)",
      "D) (x, -y)"
    ],
    "correctAnswer": "C) (-x, -y)"
  },
  {
    "id": 35,
    "questionText": "Enlargement is a type of transformation in which the image is:",
    "options": [
      "A) Resized to make it larger.",
      "B) Resized to make it smaller.",
      "C) Resized to make it larger or smaller.",
      "D) Translated and rotated."
    ],
    "correctAnswer": "C) Resized to make it larger or smaller."
  },
  {
    "id": 36,
    "questionText": "The scale factor (k) in an enlargement is defined as:",
    "options": [
      "A) Distance of object from centre / Distance of image from centre",
      "B) Distance of image from centre / Distance of object from centre",
      "C) Distance of image from centre + Distance of object from centre",
      "D) Distance of image from centre - Distance of object from centre"
    ],
    "correctAnswer": "B) Distance of image from centre / Distance of object from centre"
  },
  {
    "id": 37,
    "questionText": "If the scale factor k > 1, the object is:",
    "options": [
      "A) Reduced in size.",
      "B) Enlarged.",
      "C) Reflected.",
      "D) Rotated."
    ],
    "correctAnswer": "B) Enlarged."
  },
  {
    "id": 38,
    "questionText": "If the scale factor 0 < k < 1, the image is:",
    "options": [
      "A) Enlarged.",
      "B) Reduced in size.",
      "C) Translated.",
      "D) Rotated."
    ],
    "correctAnswer": "B) Reduced in size."
  },
  {
    "id": 39,
    "questionText": "If the scale factor k is negative, the image lies:",
    "options": [
      "A) On the same side of the centre of enlargement as the object.",
      "B) On the opposite side of the centre of enlargement from the object.",
      "C) At the same position as the object.",
      "D) Anywhere on the plane."
    ],
    "correctAnswer": "B) On the opposite side of the centre of enlargement from the object."
  },
  {
    "id": 40,
    "questionText": "In enlargement with a positive scale factor, the object and image lie:",
    "options": [
      "A) On opposite sides of the centre of enlargement.",
      "B) On the same side of the centre of enlargement.",
      "C) Perpendicular to each other.",
      "D) Along a curved path."
    ],
    "correctAnswer": "B) On the same side of the centre of enlargement."
  },
  {
    "id": 41,
    "questionText": "An image obtained by enlargement is not congruent but similar to the original object. True or False?",
    "options": [
      "A) True",
      "B) False"
    ],
    "correctAnswer": "A) True"
  },
  {
    "id": 42,
    "questionText": "How many types of transformations are generally discussed in the sources?",
    "options": [
      "A) Two",
      "B) Three",
      "C) Four",
      "D) Five"
    ],
    "correctAnswer": "C) Four"
  },
  {
    "id": 43,
    "questionText": "What is the effect of a translation on the angles of a figure?",
    "options": [
      "A) Angles are enlarged.",
      "B) Angles are reduced.",
      "C) Angles remain unchanged.",
      "D) Angles are inverted."
    ],
    "correctAnswer": "C) Angles remain unchanged."
  },
  {
    "id": 44,
    "questionText": "What is the effect of a reflection on the lengths of the sides of a figure?",
    "options": [
      "A) Lengths are enlarged.",
      "B) Lengths are reduced.",
      "C) Lengths remain unchanged.",
      "D) Lengths are inverted."
    ],
    "correctAnswer": "C) Lengths remain unchanged."
  },
  {
    "id": 45,
    "questionText": "If the centre of rotation is the origin (0,0), and a point (2,3) is rotated 90° clockwise, what are the new coordinates?",
    "options": [
      "A) (-3, 2)",
      "B) (3, -2)",
      "C) (-2, -3)",
      "D) (2, -3)"
    ],
    "correctAnswer": "B) (3, -2)"
  },
  {
    "id": 46,
    "questionText": "If a triangle ABC is translated, the resulting triangle A'B'C' is:",
    "options": [
      "A) Similar to ABC",
      "B) Congruent to ABC",
      "C) Larger than ABC",
      "D) Smaller than ABC"
    ],
    "correctAnswer": "B) Congruent to ABC"
  },
  {
    "id": 47,
    "questionText": "Which transformation involves flipping a shape over a line?",
    "options": [
      "A) Translation",
      "B) Rotation",
      "C) Reflection",
      "D) Enlargement"
    ],
    "correctAnswer": "C) Reflection"
  },
  {
    "id": 48,
    "questionText": "A polygon is rotated 90° counterclockwise about the origin. If its vertices remain unchanged in length and angle, this property is related to:",
    "options": [
      "A) Similarity",
      "B) Congruence",
      "C) Dilation",
      "D) Inversion"
    ],
    "correctAnswer": "B) Congruence"
  },
  {
    "id": 49,
    "questionText": "If a point A is located at (1,2) and the center of enlargement is (0,0) with a scale factor of 2, what are the coordinates of A'?",
    "options": [
      "A) (1,4)",
      "B) (2,2)",
      "C) (2,4)",
      "D) (4,1)"
    ],
    "correctAnswer": "C) (2,4)"
  },
  {
    "id": 50,
    "questionText": "What type of transformation is shown when an object is resized, such as a butterfly appearing in two different sizes on the cover page?",
    "options": [
      "A) Rotation",
      "B) Reflection",
      "C) Translation",
      "D) Enlargement"
    ],
    "correctAnswer": "D) Enlargement"
  }
],
  "Information Handling": [
  {
    "id": 1,
    "questionText": "Discrete data can take only:",
    "options": [
      "A) Any possible value in a given interval.",
      "B) Some specific values.",
      "C) Values greater than zero.",
      "D) Only whole numbers."
    ],
    "correctAnswer": "B) Some specific values."
  },
  {
    "id": 2,
    "questionText": "Which of the following is an example of discrete data?",
    "options": [
      "A) Height of students",
      "B) Amount of milk in liters",
      "C) Number of flowers",
      "D) Time in seconds"
    ],
    "correctAnswer": "C) Number of flowers"
  },
  {
    "id": 3,
    "questionText": "Continuous data can take:",
    "options": [
      "A) Only whole number values.",
      "B) Only specific values.",
      "C) Any possible value in a given interval.",
      "D) Values less than zero."
    ],
    "correctAnswer": "C) Any possible value in a given interval."
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of continuous data?",
    "options": [
      "A) Number of students",
      "B) Number of books",
      "C) Weight of items in kg",
      "D) Number of apples"
    ],
    "correctAnswer": "C) Weight of items in kg"
  },
  {
    "id": 5,
    "questionText": "Ungrouped data is data that is:",
    "options": [
      "A) Arranged in systematic order (groups or classes).",
      "B) Not arranged in any systematic order.",
      "C) Only numerical.",
      "D) Only categorical."
    ],
    "correctAnswer": "B) Not arranged in any systematic order."
  },
  {
    "id": 6,
    "questionText": "Grouped data is data that is:",
    "options": [
      "A) Not arranged in any systematic order.",
      "B) Arranged in systematic order (groups or classes).",
      "C) Always continuous.",
      "D) Always discrete."
    ],
    "correctAnswer": "B) Arranged in systematic order (groups or classes)."
  },
  {
    "id": 7,
    "questionText": "The marks obtained out of 10 by 20 students is listed as 3, 10, 9, 8, 7, 6, 5, 4, 1, 8, 9, 5, 6, 7, 8, 5. This is an example of:",
    "options": [
      "A) Grouped data",
      "B) Continuous data",
      "C) Ungrouped data",
      "D) Primary data"
    ],
    "correctAnswer": "C) Ungrouped data"
  },
  {
    "id": 8,
    "questionText": "The difference between discrete and continuous data is that continuous data is:",
    "options": [
      "A) Qualitative",
      "B) Quantitative",
      "C) Qualitative or quantitative",
      "D) Always a whole number"
    ],
    "correctAnswer": "B) Quantitative"
  },
  {
    "id": 9,
    "questionText": "Which graph uses line segments to represent discrete and continuous data?",
    "options": [
      "A) Bar Graph",
      "B) Multiple Bar Graph",
      "C) Line Graph",
      "D) Pie Chart"
    ],
    "correctAnswer": "C) Line Graph"
  },
  {
    "id": 10,
    "questionText": "A Bar Graph is used for the comparison of:",
    "options": [
      "A) Values over time.",
      "B) Values of two or more variable characteristics.",
      "C) Parts of a whole.",
      "D) Frequency distribution."
    ],
    "correctAnswer": "B) Values of two or more variable characteristics."
  },
  {
    "id": 11,
    "questionText": "A Multiple Bar Graph is an extension of the:",
    "options": [
      "A) Line graph.",
      "B) Pie chart.",
      "C) Bar graph.",
      "D) Histogram."
    ],
    "correctAnswer": "C) Bar graph."
  },
  {
    "id": 12,
    "questionText": "A Pie Chart is also known as a:",
    "options": [
      "A) Line graph.",
      "B) Bar graph.",
      "C) Circular graph.",
      "D) Histogram."
    ],
    "correctAnswer": "C) Circular graph."
  },
  {
    "id": 13,
    "questionText": "In a pie chart, the angles used to represent sectors are calculated by dividing the individual value by the total sum and multiplying by 360 degrees. This process shows the:",
    "options": [
      "A) Sum of values.",
      "B) Percentage of total values.",
      "C) Proportion of each category within the whole.",
      "D) Mean of the values."
    ],
    "correctAnswer": "C) Proportion of each category within the whole."
  },
  {
    "id": 14,
    "questionText": "What is the first step in drawing a pie chart from given data?",
    "options": [
      "A) Calculate the angles of the sectors.",
      "B) Draw a circle.",
      "C) Label the sectors.",
      "D) Find the total number of items."
    ],
    "correctAnswer": "D) Find the total number of items."
  },
  {
    "id": 15,
    "questionText": "A Histogram is a common graphic representation of data by means of a:",
    "options": [
      "A) Pie chart.",
      "B) Bar graph.",
      "C) Frequency distribution.",
      "D) Line graph."
    ],
    "correctAnswer": "C) Frequency distribution."
  },
  {
    "id": 16,
    "questionText": "A histogram is a bar graph where the bars:",
    "options": [
      "A) Are separated by gaps.",
      "B) Represent discrete data.",
      "C) Represent class intervals and have no gaps between them.",
      "D) Represent single values."
    ],
    "correctAnswer": "C) Represent class intervals and have no gaps between them."
  },
  {
    "id": 17,
    "questionText": "A Frequency Polygon is constructed by joining the:",
    "options": [
      "A) Upper class limits of the bars.",
      "B) Lower class limits of the bars.",
      "C) Midpoints of the tops of the bars of a histogram.",
      "D) Heights of the bars."
    ],
    "correctAnswer": "C) Midpoints of the tops of the bars of a histogram."
  },
  {
    "id": 18,
    "questionText": "To draw a frequency polygon from grouped data, what is the first step?",
    "options": [
      "A) Draw x-axis and y-axis.",
      "B) Mark class boundaries on x-axis.",
      "C) Mark midpoints on x-axis.",
      "D) Join the points by line segment."
    ],
    "correctAnswer": "A) Draw x-axis and y-axis."
  },
  {
    "id": 19,
    "questionText": "What does the y-axis typically represent in a frequency polygon?",
    "options": [
      "A) Class limits",
      "B) Midpoints",
      "C) Frequency",
      "D) Class boundaries"
    ],
    "correctAnswer": "C) Frequency"
  },
  {
    "id": 20,
    "questionText": "In a bar graph, the bars can be drawn:",
    "options": [
      "A) Vertically only.",
      "B) Horizontally only.",
      "C) Vertically or horizontally.",
      "D) Diagonally."
    ],
    "correctAnswer": "C) Vertically or horizontally."
  },
  {
    "id": 21,
    "questionText": "Frequency refers to the number of times a value:",
    "options": [
      "A) Is repeated in a data set.",
      "B) Occurs in a data set.",
      "C) Is the largest in a data set.",
      "D) Is the smallest in a data set."
    ],
    "correctAnswer": "B) Occurs in a data set."
  },
  {
    "id": 22,
    "questionText": "Frequency Distribution is a table in which the frequency of each class is observed and arranged. This statement is:",
    "options": [
      "A) True",
      "B) False"
    ],
    "correctAnswer": "A) True"
  },
  {
    "id": 23,
    "questionText": "Cumulative Frequency is calculated by adding each frequency from a frequency distribution to the sum of its:",
    "options": [
      "A) Successors.",
      "B) Predecessors.",
      "C) Mean.",
      "D) Median."
    ],
    "correctAnswer": "B) Predecessors."
  },
  {
    "id": 24,
    "questionText": "To construct a frequency distribution table, what is the formula for \"Size of class interval (h)\"?",
    "options": [
      "A) (Largest value - Smallest value) / Total frequency",
      "B) (Largest value - Smallest value) / Number of classes",
      "C) Total frequency / Number of classes",
      "D) Number of classes / (Largest value - Smallest value)"
    ],
    "correctAnswer": "B) (Largest value - Smallest value) / Number of classes"
  },
  {
    "id": 25,
    "questionText": "The class boundaries for class limits 6-9 are:",
    "options": [
      "A) Lower limit = 6, Upper limit = 9",
      "B) Lower limit = 5.5, Upper limit = 9.5",
      "C) Lower limit = 6.5, Upper limit = 8.5",
      "D) Lower limit = 0.5, Upper limit = 1.5"
    ],
    "correctAnswer": "B) Lower limit = 5.5, Upper limit = 9.5"
  },
  {
    "id": 26,
    "questionText": "The measure that gives the centre of the data is called:",
    "options": [
      "A) Measure of Dispersion.",
      "B) Measure of Central Tendency.",
      "C) Measure of Skewness.",
      "D) Measure of Kurtosis."
    ],
    "correctAnswer": "B) Measure of Central Tendency."
  },
  {
    "id": 27,
    "questionText": "Which of the following is NOT a measure of central tendency mentioned?",
    "options": [
      "A) Mean",
      "B) Median",
      "C) Mode",
      "D) Range"
    ],
    "correctAnswer": "D) Range"
  },
  {
    "id": 28,
    "questionText": "The Mean (Average) for ungrouped data is calculated by:",
    "options": [
      "A) Sum of values / Number of values",
      "B) Number of values / Sum of values",
      "C) Product of values / Number of values",
      "D) Sum of squared values / Number of values"
    ],
    "correctAnswer": "A) Sum of values / Number of values"
  },
  {
    "id": 29,
    "questionText": "The Arithmetic Mean for grouped data is obtained by dividing the sum of the products of 'midpoints (x)' and 'frequencies (f)' by the total sum of the frequencies. This statement is:",
    "options": [
      "A) True",
      "B) False"
    ],
    "correctAnswer": "A) True"
  },
  {
    "id": 30,
    "questionText": "The formula for the mean (X̄) for grouped data is:",
    "options": [
      "A) ΣX / N",
      "B) Σf / ΣX",
      "C) Σfx / Σf",
      "D) ΣfX^2 / N"
    ],
    "correctAnswer": "C) Σfx / Σf"
  },
  {
    "id": 31,
    "questionText": "The Short Formula for computing arithmetic mean for ungrouped data is:",
    "options": [
      "A) X̄ = A + ΣD / N",
      "B) X̄ = Σfx / Σf",
      "C) X̄ = A + (ΣfU / Σf) * h",
      "D) X̄ = ΣX / N"
    ],
    "correctAnswer": "A) X̄ = A + ΣD / N"
  },
  {
    "id": 32,
    "questionText": "In the short formula for arithmetic mean, 'A' represents the:",
    "options": [
      "A) Actual mean.",
      "B) Assumed mean.",
      "C) Absolute deviation.",
      "D) Average frequency."
    ],
    "correctAnswer": "B) Assumed mean."
  },
  {
    "id": 33,
    "questionText": "The Coding Method for finding arithmetic mean for grouped data uses the formula:",
    "options": [
      "A) X̄ = A + ΣD / N",
      "B) X̄ = A + (ΣfU / Σf) * h",
      "C) X̄ = Σfx / Σf",
      "D) X̄ = ΣX / N"
    ],
    "correctAnswer": "B) X̄ = A + (ΣfU / Σf) * h"
  },
  {
    "id": 34,
    "questionText": "In the coding method formula for arithmetic mean, 'h' represents the:",
    "options": [
      "A) Height of the bar.",
      "B) Highest frequency.",
      "C) Class interval size.",
      "D) Harmonic mean."
    ],
    "correctAnswer": "C) Class interval size."
  },
  {
    "id": 35,
    "questionText": "The Median for ungrouped data, when arranged in ascending or descending order, is the middle value if N is:",
    "options": [
      "A) Even",
      "B) Odd",
      "C) Prime",
      "D) Composite"
    ],
    "correctAnswer": "B) Odd"
  },
  {
    "id": 36,
    "questionText": "If the number of values (N) in ungrouped data is odd, the median is the value of the:",
    "options": [
      "A) Nth item.",
      "B) (N/2)th item.",
      "C) ((N+1)/2)th item.",
      "D) (N-1)th item."
    ],
    "correctAnswer": "C) ((N+1)/2)th item."
  },
  {
    "id": 37,
    "questionText": "If the number of values (N) in ungrouped data is even, the median is the mean of the:",
    "options": [
      "A) Nth and (N+1)th items.",
      "B) (N/2)th and ((N/2)+1)th items.",
      "C) First and last items.",
      "D) Two largest items."
    ],
    "correctAnswer": "B) (N/2)th and ((N/2)+1)th items."
  },
  {
    "id": 38,
    "questionText": "When calculating the mean, if a distribution has a high variance, it indicates that the values are:",
    "options": [
      "A) Clustered closely around the mean.",
      "B) Widely spread from the mean.",
      "C) All equal to the mean.",
      "D) All zero."
    ],
    "correctAnswer": "B) Widely spread from the mean."
  },
  {
    "id": 39,
    "questionText": "What is a \"Merit of mean\" according to the source?",
    "options": [
      "A) It is less affected by extreme values.",
      "B) It is the most simple and reliable form of an average.",
      "C) It can be calculated for qualitative data.",
      "D) It always provides a whole number result."
    ],
    "correctAnswer": "B) It is the most simple and reliable form of an average."
  },
  {
    "id": 40,
    "questionText": "What is a \"Demerit of mean\"?",
    "options": [
      "A) It is not rigidly defined.",
      "B) It is difficult to calculate.",
      "C) It is highly affected by extreme values.",
      "D) It does not depend on all observations."
    ],
    "correctAnswer": "C) It is highly affected by extreme values."
  },
  {
    "id": 41,
    "questionText": "Which type of graph is best suited to show the proportion of different categories within a whole?",
    "options": [
      "A) Line graph",
      "B) Bar graph",
      "C) Pie chart",
      "D) Histogram"
    ],
    "correctAnswer": "C) Pie chart"
  },
  {
    "id": 42,
    "questionText": "If the height of each bar in a bar graph depends upon frequency, this is a \"Keep in mind!\" note for which graph type?",
    "options": [
      "A) Line graph",
      "B) Bar graph",
      "C) Histogram",
      "D) Multiple bar graph"
    ],
    "correctAnswer": "B) Bar graph"
  },
  {
    "id": 43,
    "questionText": "What is the total frequency of the data presented in Example 1 on page 190 (scores of 50 students)?",
    "options": [
      "A) 25",
      "B) 50",
      "C) 75",
      "D) 100"
    ],
    "correctAnswer": "B) 50"
  },
  {
    "id": 44,
    "questionText": "The steps to draw a frequency polygon from grouped data include drawing x-axis and y-axis. In a histogram, what do the adjacent bars typically represent?",
    "options": [
      "A) Discrete values",
      "B) Class intervals",
      "C) Frequencies",
      "D) Midpoints"
    ],
    "correctAnswer": "B) Class intervals"
  },
  {
    "id": 45,
    "questionText": "How are class boundaries typically calculated from class limits like 40-44?",
    "options": [
      "A) Lower limit - 0.5, Upper limit + 0.5",
      "B) Lower limit + 0.5, Upper limit - 0.5",
      "C) Lower limit - 1, Upper limit + 1",
      "D) Lower limit, Upper limit + 0.5"
    ],
    "correctAnswer": "A) Lower limit - 0.5, Upper limit + 0.5"
  },
  {
    "id": 46,
    "questionText": "If the class limits are 1-8, what are the class boundaries?",
    "options": [
      "A) 0.5-8.5",
      "B) 1.5-7.5",
      "C) 0-9",
      "D) 1-8"
    ],
    "correctAnswer": "A) 0.5-8.5"
  },
  {
    "id": 47,
    "questionText": "What is the primary purpose of a frequency polygon?",
    "options": [
      "A) To represent individual data points.",
      "B) To show the exact frequency of each value.",
      "C) To show the distribution of frequencies for grouped data.",
      "D) To compare two different categories."
    ],
    "correctAnswer": "C) To show the distribution of frequencies for grouped data."
  },
  {
    "id": 48,
    "questionText": "In the \"Short Formula for Computing Arithmetic Mean,\" what does 'D' explicitly represent?",
    "options": [
      "A) Direct method result.",
      "B) Deviation from the assumed mean (X - A).",
      "C) Division factor.",
      "D) Denominator."
    ],
    "correctAnswer": "B) Deviation from the assumed mean (X - A)."
  },
  {
    "id": 49,
    "questionText": "What is a key advantage of using the coding method for computing the arithmetic mean?",
    "options": [
      "A) It is always more accurate than other methods.",
      "B) It simplifies calculations, especially when dealing with large numbers or wide class intervals.",
      "C) It can only be used for ungrouped data.",
      "D) It eliminates the need for an assumed mean."
    ],
    "correctAnswer": "B) It simplifies calculations, especially when dealing with large numbers or wide class intervals."
  },
  {
    "id": 50,
    "questionText": "What type of data is collected when recording the number of students who passed an examination?",
    "options": [
      "A) Discrete data",
      "B) Continuous data",
      "C) Grouped data",
      "D) Qualitative data"
    ],
    "correctAnswer": "A) Discrete data"
  }
],
  "Probability": [
  {
    "id": 1,
    "questionText": "In the context of probability, what is an \"experiment\"?",
    "options": [
      "A. A predictable process.",
      "B. An action with a single possible outcome.",
      "C. A process resulting in one of several possible outcomes.",
      "D. A random guess."
    ],
    "correctAnswer": "C. A process resulting in one of several possible outcomes."
  },
  {
    "id": 2,
    "questionText": "What is a \"sample space\"?",
    "options": [
      "A. The most likely outcome.",
      "B. A single result of an experiment.",
      "C. A subset of all possible outcomes.",
      "D. The set of all possible outcomes."
    ],
    "correctAnswer": "D. The set of all possible outcomes."
  },
  {
    "id": 3,
    "questionText": "What is an \"event\" in probability?",
    "options": [
      "A. The sample space itself.",
      "B. A single outcome.",
      "C. A subset of the sample space.",
      "D. The total number of outcomes."
    ],
    "correctAnswer": "C. A subset of the sample space."
  },
  {
    "id": 4,
    "questionText": "What is the term for a single result of an experiment?",
    "options": [
      "A. Event",
      "B. Sample Space",
      "C. Outcome",
      "D. Probability"
    ],
    "correctAnswer": "C. Outcome"
  },
  {
    "id": 5,
    "questionText": "The probability of an event (P(E)) is defined as the ratio of:",
    "options": [
      "A. Total outcomes to favorable outcomes.",
      "B. Favorable outcomes to total outcomes.",
      "C. Possible outcomes to impossible outcomes.",
      "D. Favorable outcomes to unfavorable outcomes."
    ],
    "correctAnswer": "B. Favorable outcomes to total outcomes."
  },
  {
    "id": 6,
    "questionText": "The probability of any event is always between what two values?",
    "options": [
      "A. 0 and 100",
      "B. -1 and 1",
      "C. 0 and 1",
      "D. 1 and 10"
    ],
    "correctAnswer": "C. 0 and 1"
  },
  {
    "id": 7,
    "questionText": "If the probability of an event is 0, what kind of event is it?",
    "options": [
      "A. A certain event",
      "B. An impossible event",
      "C. A likely event",
      "D. An unknown event"
    ],
    "correctAnswer": "B. An impossible event"
  },
  {
    "id": 8,
    "questionText": "If the probability of an event is 1, what kind of event is it?",
    "options": [
      "A. A random event",
      "B. An impossible event",
      "C. A certain event",
      "D. A favorable event"
    ],
    "correctAnswer": "C. A certain event"
  },
  {
    "id": 9,
    "questionText": "Which of the following values can be a probability?",
    "options": [
      "A. 1.5",
      "B. -0.5",
      "C. 0.75",
      "D. 1.01"
    ],
    "correctAnswer": "C. 0.75"
  },
  {
    "id": 10,
    "questionText": "An event with a probability of 0.5 is considered:",
    "options": [
      "A. Highly likely",
      "B. Impossible",
      "C. Equally likely or unlikely",
      "D. Certain"
    ],
    "correctAnswer": "C. Equally likely or unlikely"
  },
  {
    "id": 11,
    "questionText": "A single die is rolled. What is the sample space?",
    "options": [
      "A. {1, 2, 3}",
      "B. {1, 2, 3, 4, 5, 6}",
      "C. {Even numbers}",
      "D. {Prime numbers}"
    ],
    "correctAnswer": "B. {1, 2, 3, 4, 5, 6}"
  },
  {
    "id": 12,
    "questionText": "What is the probability of rolling a 4 on a single six-sided die?",
    "options": [
      "A. 1/6",
      "B. 4/6",
      "C. 1/4",
      "D. 1/2"
    ],
    "correctAnswer": "A. 1/6"
  },
  {
    "id": 13,
    "questionText": "What is the probability of rolling an even number on a single six-sided die?",
    "options": [
      "A. 1/6",
      "B. 3/6",
      "C. 1/3",
      "D. 2/6"
    ],
    "correctAnswer": "B. 3/6"
  },
  {
    "id": 14,
    "questionText": "A coin is tossed. What is the probability of getting heads?",
    "options": [
      "A. 1/3",
      "B. 1/2",
      "C. 1",
      "D. 0"
    ],
    "correctAnswer": "B. 1/2"
  },
  {
    "id": 15,
    "questionText": "A bag contains 3 red balls and 7 blue balls. What is the probability of picking a red ball?",
    "options": [
      "A. 7/10",
      "B. 3/7",
      "C. 3/10",
      "D. 10/3"
    ],
    "correctAnswer": "C. 3/10"
  },
  {
    "id": 16,
    "questionText": "A bag contains 5 green marbles, 2 red marbles, and 3 blue marbles. What is the total number of possible outcomes for picking one marble?",
    "options": [
      "A. 3",
      "B. 10",
      "C. 5",
      "D. 2"
    ],
    "correctAnswer": "B. 10"
  },
  {
    "id": 17,
    "questionText": "Using the same bag from Q16, what is the probability of picking a blue marble?",
    "options": [
      "A. 3/10",
      "B. 5/10",
      "C. 2/10",
      "D. 10/3"
    ],
    "correctAnswer": "A. 3/10"
  },
  {
    "id": 18,
    "questionText": "A spinner has 4 equal sections: Red, Blue, Green, Yellow. What is the probability of landing on Red?",
    "options": [
      "A. 1/2",
      "B. 1/4",
      "C. 1/3",
      "D. 1"
    ],
    "correctAnswer": "B. 1/4"
  },
  {
    "id": 19,
    "questionText": "What is the probability of selecting a vowel from the letters A, B, C, D, E, F, G, H, I?",
    "options": [
      "A. 2/9",
      "B. 3/9",
      "C. 1/9",
      "D. 4/9"
    ],
    "correctAnswer": "B. 3/9"
  },
  {
    "id": 20,
    "questionText": "There are 52 cards in a standard deck. What is the probability of drawing a King?",
    "options": [
      "A. 1/52",
      "B. 4/52",
      "C. 13/52",
      "D. 1/4"
    ],
    "correctAnswer": "B. 4/52"
  },
  {
    "id": 21,
    "questionText": "Which of the following describes a \"certain event\"?",
    "options": [
      "A. Picking a black card from a standard deck.",
      "B. Picking a card that is either red or black from a standard deck.",
      "C. Drawing a 7 of diamonds from a standard deck.",
      "D. Picking a face card."
    ],
    "correctAnswer": "B. Picking a card that is either red or black from a standard deck."
  },
  {
    "id": 22,
    "questionText": "Which of the following is an \"impossible event\"?",
    "options": [
      "A. Rolling a 7 with a single six-sided die.",
      "B. Drawing a red card from a deck.",
      "C. Getting tails on a coin flip.",
      "D. Picking an even number between 1 and 10."
    ],
    "correctAnswer": "A. Rolling a 7 with a single six-sided die."
  },
  {
    "id": 23,
    "questionText": "An event that has a 100% chance of occurring has a probability of:",
    "options": [
      "A. 0",
      "B. 0.5",
      "C. 1",
      "D. 100"
    ],
    "correctAnswer": "C. 1"
  },
  {
    "id": 24,
    "questionText": "In a coin toss, what is the probability of the outcome being \"Heads or Tails\"?",
    "options": [
      "A. 1/2",
      "B. 0",
      "C. 1",
      "D. 1/4"
    ],
    "correctAnswer": "C. 1"
  },
  {
    "id": 25,
    "questionText": "A box contains 10 pens, all of which are black. What is the probability of picking a black pen?",
    "options": [
      "A. 0.1",
      "B. 0",
      "C. 0.5",
      "D. 1"
    ],
    "correctAnswer": "D. 1"
  },
  {
    "id": 26,
    "questionText": "A six-sided die is rolled. What is the probability of rolling a number greater than 4?",
    "options": [
      "A. 1/6",
      "B. 2/6",
      "C. 3/6",
      "D. 4/6"
    ],
    "correctAnswer": "B. 2/6"
  },
  {
    "id": 27,
    "questionText": "A bag contains 2 red, 4 green, and 6 blue marbles. What is the probability of picking a marble that is NOT red?",
    "options": [
      "A. 2/12",
      "B. 10/12",
      "C. 4/12",
      "D. 6/12"
    ],
    "correctAnswer": "B. 10/12"
  },
  {
    "id": 28,
    "questionText": "A standard deck of 52 cards is used. What is the probability of drawing a heart?",
    "options": [
      "A. 1/52",
      "B. 4/52",
      "C. 13/52",
      "D. 26/52"
    ],
    "correctAnswer": "C. 13/52"
  },
  {
    "id": 29,
    "questionText": "A spinner has 8 equal sections. 2 are red, 4 are blue, and 2 are green. What is the probability of landing on red or green?",
    "options": [
      "A. 2/8",
      "B. 4/8",
      "C. 6/8",
      "D. 1/8"
    ],
    "correctAnswer": "B. 4/8"
  },
  {
    "id": 30,
    "questionText": "If the probability of rain tomorrow is 0.3, what is the probability that it will NOT rain tomorrow?",
    "options": [
      "A. 0.3",
      "B. 0.7",
      "C. 0",
      "D. 1"
    ],
    "correctAnswer": "B. 0.7"
  },
  {
    "id": 31,
    "questionText": "An event with a probability of 0.99 is considered a:",
    "options": [
      "A. Very unlikely event",
      "B. Very likely event",
      "C. Impossible event",
      "D. Certain event"
    ],
    "correctAnswer": "B. Very likely event"
  },
  {
    "id": 32,
    "questionText": "The set of all possible outcomes is called the:",
    "options": [
      "A. Event",
      "B. Result",
      "C. Outcome",
      "D. Sample Space"
    ],
    "correctAnswer": "D. Sample Space"
  },
  {
    "id": 33,
    "questionText": "If you flip a coin and it lands on its side, this is a part of the:",
    "options": [
      "A. Event",
      "B. Outcome",
      "C. Experiment",
      "D. Probability"
    ],
    "correctAnswer": "B. Outcome"
  },
  {
    "id": 34,
    "questionText": "The probability of an event can be expressed as a:",
    "options": [
      "A. Negative number",
      "B. Percentage",
      "C. Number greater than 1",
      "D. Complex number"
    ],
    "correctAnswer": "B. Percentage"
  },
  {
    "id": 35,
    "questionText": "What is the range of a probability value?",
    "options": [
      "A. From -1 to 1",
      "B. From 0 to 100",
      "C. From 0 to 1",
      "D. From -100 to 100"
    ],
    "correctAnswer": "C. From 0 to 1"
  },
  {
    "id": 36,
    "questionText": "A bag contains 26 letter tiles, one for each letter of the alphabet. What is the probability of drawing a letter from the first half of the alphabet (A-M)?",
    "options": [
      "A. 13/26",
      "B. 26/13",
      "C. 1/26",
      "D. 1/2"
    ],
    "correctAnswer": "A. 13/26"
  },
  {
    "id": 37,
    "questionText": "A number is chosen randomly from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. What is the probability of choosing a prime number?",
    "options": [
      "A. 4/10",
      "B. 5/10",
      "C. 3/10",
      "D. 2/10"
    ],
    "correctAnswer": "A. 4/10"
  },
  {
    "id": 38,
    "questionText": "Two coins are tossed. What is the sample space?",
    "options": [
      "A. {HH, HT, TH, TT}",
      "B. {H, T}",
      "C. {HH, TT}",
      "D. {HT, TH}"
    ],
    "correctAnswer": "A. {HH, HT, TH, TT}"
  },
  {
    "id": 39,
    "questionText": "A person has a 0.8 probability of passing a test. What is the probability of failing the test?",
    "options": [
      "A. 0.2",
      "B. 0.8",
      "C. 0",
      "D. 1"
    ],
    "correctAnswer": "A. 0.2"
  },
  {
    "id": 40,
    "questionText": "The probability of an event E is P(E). The probability of the event not occurring is:",
    "options": [
      "A. 1 + P(E)",
      "B. 1 - P(E)",
      "C. P(E) - 1",
      "D. P(E)"
    ],
    "correctAnswer": "B. 1 - P(E)"
  },
  {
    "id": 41,
    "questionText": "A bag contains 10 cards numbered 1 through 10. What is the probability of drawing a card with a number divisible by 3?",
    "options": [
      "A. 3/10",
      "B. 1/10",
      "C. 4/10",
      "D. 10/3"
    ],
    "correctAnswer": "A. 3/10"
  },
  {
    "id": 42,
    "questionText": "A family has three children. What is the number of possible outcomes for the genders of the children?",
    "options": [
      "A. 3",
      "B. 6",
      "C. 8",
      "D. 10"
    ],
    "correctAnswer": "C. 8"
  },
  {
    "id": 43,
    "questionText": "A day is chosen at random from a week. What is the probability of choosing a day that starts with the letter 'T'?",
    "options": [
      "A. 1/7",
      "B. 2/7",
      "C. 3/7",
      "D. 4/7"
    ],
    "correctAnswer": "B. 2/7"
  },
  {
    "id": 44,
    "questionText": "An event that contains all the outcomes in the sample space is a:",
    "options": [
      "A. Simple event",
      "B. Compound event",
      "C. Certain event",
      "D. Impossible event"
    ],
    "correctAnswer": "C. Certain event"
  },
  {
    "id": 45,
    "questionText": "The total number of favorable outcomes for an event can be described as the:",
    "options": [
      "A. Denominator in the probability fraction",
      "B. Numerator in the probability fraction",
      "C. Sum of all probabilities",
      "D. Sample space"
    ],
    "correctAnswer": "B. Numerator in the probability fraction"
  },
  {
    "id": 46,
    "questionText": "What is the probability of drawing a Jack of spades from a standard deck of 52 cards?",
    "options": [
      "A. 4/52",
      "B. 1/52",
      "C. 13/52",
      "D. 1/4"
    ],
    "correctAnswer": "B. 1/52"
  },
  {
    "id": 47,
    "questionText": "A fair coin is tossed. What is the probability of getting a result other than heads?",
    "options": [
      "A. 0",
      "B. 0.5",
      "C. 1",
      "D. 0.25"
    ],
    "correctAnswer": "B. 0.5"
  },
  {
    "id": 48,
    "questionText": "A bag has 5 red, 5 green, and 5 blue marbles. An outcome is:",
    "options": [
      "A. Picking a red marble",
      "B. Picking a red or green marble",
      "C. The set of all marbles",
      "D. Picking a blue marble"
    ],
    "correctAnswer": "D. Picking a blue marble"
  },
  {
    "id": 49,
    "questionText": "What is the probability of choosing a number that is neither odd nor even from the set of integers?",
    "options": [
      "A. 0",
      "B. 1",
      "C. 0.5",
      "D. It depends on the number."
    ],
    "correctAnswer": "A. 0"
  },
  {
    "id": 50,
    "questionText": "In an experiment of flipping a coin, getting \"Heads\" is an example of a(n):",
    "options": [
      "A. Experiment",
      "B. Sample Space",
      "C. Outcome",
      "D. All of the above"
    ],
    "correctAnswer": "C. Outcome"
  }
],
};
export const shortQuestions = {
    "Square and Square Roots": shortQuestionsData.slice(0, 4),
    "Algebraic Identities": shortQuestionsData.slice(4, 7),
    "Data Handling": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Square and Square Roots": longQuestionsData.slice(0, 2),
    "Algebraic Identities": longQuestionsData.slice(2, 4),
    "Data Handling": longQuestionsData.slice(4, 5),
};
