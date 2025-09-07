
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './mathematics-short-questions';
import { longQuestions as longQuestionsData } from './mathematics-long-questions';


export const chapters = [
  "Rational Numbers and Decimal Numbers",
  "Simplification",
  "Sets",
  "Rate Ratio and Proportion",
  "Financial Arithmetic",
  "Squares and Square Roots",
  "Number Sequence and Patterns",
  "Algebraic Expressions",
  "Linear Equation",
  "Distance Speed and Time",
  "Perimeter and Area",
  "Practical Geometry",
  "Angle Properties of Polygons",
  "Transformation",
  "Statistics",
  "Probability",

];

export const mcqs: Record<string, MCQ[]> = {
  "Rational Numbers and Decimal Numbers": [
  {
    "id": 1,
    "questionText": "Which set of numbers includes all positive and negative integers, along with zero?",
    "options": [
      "A) Natural Numbers",
      "B) Whole Numbers",
      "C) Integers",
      "D) Rational Numbers"
    ],
    "correctAnswer": "C) Integers"
  },
  {
    "id": 2,
    "questionText": "What is a whole number?",
    "options": [
      "A) Any counting number",
      "B) Any positive number including fractions",
      "C) Natural numbers including zero",
      "D) Negative numbers"
    ],
    "correctAnswer": "C) Natural numbers including zero"
  },
  {
    "id": 3,
    "questionText": "Which of the following describes a rational number?",
    "options": [
      "A) A number that cannot be expressed as a fraction p/q.",
      "B) A number with only a positive numerator.",
      "C) A number that can be expressed in the form p/q, where p, q are integers and q ≠ 0.",
      "D) A number that is always positive."
    ],
    "correctAnswer": "C) A number that can be expressed in the form p/q, where p, q are integers and q ≠ 0."
  },
  {
    "id": 4,
    "questionText": "In the number -750 ft, what does the negative sign indicate?",
    "options": [
      "A) Above sea level",
      "B) At sea level",
      "C) Below sea level",
      "D) Temperature"
    ],
    "correctAnswer": "C) Below sea level"
  },
  {
    "id": 5,
    "questionText": "On a number line, where is 0 located relative to negative integers?",
    "options": [
      "A) To the left",
      "B) To the right",
      "C) At the same point",
      "D) It varies"
    ],
    "correctAnswer": "B) To the right"
  },
  {
    "id": 6,
    "questionText": "According to the sources, what is 0 (zero)?",
    "options": [
      "A) A positive integer",
      "B) A negative integer",
      "C) Neither positive nor negative",
      "D) A natural number"
    ],
    "correctAnswer": "C) Neither positive nor negative"
  },
  {
    "id": 7,
    "questionText": "What is the neutral number/integer mentioned in the context of numbers?",
    "options": [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) Any whole number"
    ],
    "correctAnswer": "C) 0"
  },
  {
    "id": 8,
    "questionText": "Which of these is the correct ascending order for -3, 0, 1, 2, -2, 3?",
    "options": [
      "A) 0, 1, -2, 2, -3, 3",
      "B) 3, 2, 1, 0, -2, -3",
      "C) -3, -2, 0, 1, 2, 3",
      "D) -2, -3, 0, 1, 2, 3"
    ],
    "correctAnswer": "C) -3, -2, 0, 1, 2, 3"
  },
  {
    "id": 9,
    "questionText": "What is the definition of \"numerical value\" as discussed?",
    "options": [
      "A) The value of a number with its sign",
      "B) The value of a number without regard to its sign",
      "C) The value of a positive number only",
      "D) The value of a negative number only"
    ],
    "correctAnswer": "B) The value of a number without regard to its sign"
  },
  {
    "id": 10,
    "questionText": "In the number 987436, which digit is in the \"ten thousands\" place?",
    "options": [
      "A) 9",
      "B) 8",
      "C) 7",
      "D) 4"
    ],
    "correctAnswer": "B) 8"
  },
  {
    "id": 11,
    "questionText": "Which period in the place value chart contains \"Hundreds, Tens, Ones\"?",
    "options": [
      "A) Third period",
      "B) Second period",
      "C) First period",
      "D) Fourth period"
    ],
    "correctAnswer": "C) First period"
  },
  {
    "id": 12,
    "questionText": "How is 987436 read according to the place value chart provided?",
    "options": [
      "A) Nine hundred eighty-seven thousand, four hundred thirty-six",
      "B) Ninety-eight thousand, seven hundred forty-three, six",
      "C) Not explicitly stated, but the chart provides a framework for understanding place value.",
      "D) Nine million, eighty-seven thousand, four hundred thirty-six"
    ],
    "correctAnswer": "A) Nine hundred eighty-seven thousand, four hundred thirty-six"
  },
  {
    "id": 13,
    "questionText": "If you compare 923530 and 987436, which is smaller?",
    "options": [
      "A) 987436",
      "B) 923530",
      "C) They are equal",
      "D) Cannot be compared"
    ],
    "correctAnswer": "B) 923530"
  },
  {
    "id": 14,
    "questionText": "Which of the following numbers is the smallest when comparing 923530, 987436, and 987219?",
    "options": [
      "A) 923530",
      "B) 987436",
      "C) 987219",
      "D) All are equal"
    ],
    "correctAnswer": "A) 923530"
  },
  {
    "id": 15,
    "questionText": "What is the ascending order for the numbers -7.5, -5.0, -3.7, 0.5, 2.5, 3.0, 4.7, 4.8?",
    "options": [
      "A) -7.5, -5.0, -3.7, 0.5, 2.5, 3.0, 4.7, 4.8",
      "B) 4.8, 4.7, 3.0, 2.5, 0.5, -3.7, -5.0, -7.5",
      "C) 0.5, 2.5, 3.0, 4.7, 4.8, -3.7, -5.0, -7.5",
      "D) -5.0, -7.5, -3.7, 0.5, 2.5, 3.0, 4.7, 4.8"
    ],
    "correctAnswer": "A) -7.5, -5.0, -3.7, 0.5, 2.5, 3.0, 4.7, 4.8"
  },
  {
    "id": 16,
    "questionText": "In the decimal number 235.89, what is the place value of the digit 9?",
    "options": [
      "A) Tenths",
      "B) Hundredths",
      "C) Thousandths",
      "D) Ones"
    ],
    "correctAnswer": "B) Hundredths"
  },
  {
    "id": 17,
    "questionText": "What is the ascending order for the decimal numbers 235.70, 235.74, 235.89?",
    "options": [
      "A) 235.89, 235.74, 235.70",
      "B) 235.74, 235.70, 235.89",
      "C) 235.70, 235.74, 235.89",
      "D) 235.70, 235.89, 235.74"
    ],
    "correctAnswer": "C) 235.70, 235.74, 235.89"
  },
  {
    "id": 18,
    "questionText": "Which type of fraction has a numerator smaller than its denominator?",
    "options": [
      "A) Proper Fractions",
      "B) Improper Fractions",
      "C) Mixed Fractions",
      "D) Unit Fractions"
    ],
    "correctAnswer": "A) Proper Fractions"
  },
  {
    "id": 19,
    "questionText": "Which type of fraction includes a whole number part and a proper fraction part?",
    "options": [
      "A) Proper Fractions",
      "B) Improper Fractions",
      "C) Mixed Fractions",
      "D) Unit Fractions"
    ],
    "correctAnswer": "C) Mixed Fractions"
  },
  {
    "id": 20,
    "questionText": "What is the least common multiple (LCM) of 2 and 3?",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 6"
    ],
    "correctAnswer": "D) 6"
  },
  {
    "id": 21,
    "questionText": "What is the greatest common divisor (GCD) also known as?",
    "options": [
      "A) Least Common Multiple (LCM)",
      "B) Highest Common Factor (HCF)",
      "C) Common Denominator",
      "D) Lowest Common Denominator"
    ],
    "correctAnswer": "B) Highest Common Factor (HCF)"
  },
  {
    "id": 22,
    "questionText": "How is the mixed number 2 1/4 converted to an improper fraction?",
    "options": [
      "A) (2+1)/4",
      "B) (2x4+1)/2",
      "C) (2x4+1)/4",
      "D) (2+4)/1"
    ],
    "correctAnswer": "C) (2x4+1)/4"
  },
  {
    "id": 23,
    "questionText": "What is the standard form of a rational number?",
    "options": [
      "A) p + q",
      "B) p - q",
      "C) p/q",
      "D) p x q"
    ],
    "correctAnswer": "C) p/q"
  },
  {
    "id": 24,
    "questionText": "The set of rational numbers is denoted by:",
    "options": [
      "A) N",
      "B) W",
      "C) Z",
      "D) Q"
    ],
    "correctAnswer": "D) Q"
  },
  {
    "id": 25,
    "questionText": "According to the source, what kind of number is -8/3?",
    "options": [
      "A) Proper fraction",
      "B) Improper fraction",
      "C) Mixed number",
      "D) Whole number"
    ],
    "correctAnswer": "B) Improper fractio"
  },
  {
    "id": 26,
    "questionText": "When representing -8/3 on a number line, where does it lie relative to 0?",
    "options": [
      "A) Left side",
      "B) Right side",
      "C) At 0",
      "D) Cannot be determined"
    ],
    "correctAnswer": "A) Left side"
  },
  {
    "id": 27,
    "questionText": "How do you compare two rational numbers with different denominators?",
    "options": [
      "A) Compare their numerators directly.",
      "B) Compare their denominators directly.",
      "C) Convert them into like fractions by finding their LCM.",
      "D) Convert them to mixed numbers."
    ],
    "correctAnswer": "C) Convert them into like fractions by finding their LCM."
  },
  {
    "id": 28,
    "questionText": "What is the result of adding 1/2 and 1/9?",
    "options": [
      "A) 2/11",
      "B) 1/18",
      "C) 11/18",
      "D) 1/2"
    ],
    "correctAnswer": "C) 11/18"
  },
  {
    "id": 29,
    "questionText": "To add rational numbers with different denominators, what is the first step?",
    "options": [
      "A) Add the numerators.",
      "B) Add the denominators.",
      "C) Find the LCM of the denominators.",
      "D) Subtract the numerators."
    ],
    "correctAnswer": "C) Find the LCM of the denominators."
  },
  {
    "id": 30,
    "questionText": "What is the additive inverse of a rational number p/q?",
    "options": [
      "A) q/p",
      "B) p/-q",
      "C) -p/q",
      "D) 1/(p/q)"
    ],
    "correctAnswer": "C) -p/q"
  },
  {
    "id": 31,
    "questionText": "What is the property of rational numbers that states (p/q) + (r/s) = (r/s) + (p/q)?",
    "options": [
      "A) Associative property of rational numbers w.r.t. addition",
      "B) Commutative property of rational numbers w.r.t. addition",
      "C) Distributive property of rational numbers w.r.t. multiplication over addition",
      "D) Additive Inverse property"
    ],
    "correctAnswer": "B) Commutative property of rational numbers w.r.t. addition"
  },
  {
    "id": 32,
    "questionText": "What is the result of multiplying (p/q) by (r/s)?",
    "options": [
      "A) (p+r)/(q+s)",
      "B) (p-r)/(q-s)",
      "C) (pr)/(qs)",
      "D) (p/s) x (r/q)"
    ],
    "correctAnswer": "C) (pr)/(qs)"
  },
  {
    "id": 33,
    "questionText": "Division by 0 is:",
    "options": [
      "A) 0",
      "B) 1",
      "C) Infinite",
      "D) Undefined"
    ],
    "correctAnswer": "D) Undefined"
  },
  {
    "id": 34,
    "questionText": "The inverse process of multiplication is:",
    "options": [
      "A) Addition",
      "B) Subtraction",
      "C) Division",
      "D) Modulo"
    ],
    "correctAnswer": "C) Division"
  },
  {
    "id": 35,
    "questionText": "What does the associative property of rational numbers w.r.t. addition mean?",
    "options": [
      "A) p/q + r/s = r/s + p/q",
      "B) (p/q + r/s) + t/u = p/q + (r/s + t/u)",
      "C) p/q * (r/s + t/u) = p/q * r/s + p/q * t/u",
      "D) p/q + 0 = p/q"
    ],
    "correctAnswer": "B) (p/q + r/s) + t/u = p/q + (r/s + t/u)"
  },
  {
    "id": 36,
    "questionText": "Which property is described as: p/q × (r/s + t/u) = (p/q × r/s) + (p/q × t/u)?",
    "options": [
      "A) Commutative Property",
      "B) Associative Property",
      "C) Distributive Property",
      "D) Additive Inverse"
    ],
    "correctAnswer": "C) Distributive Property"
  },
  {
    "id": 37,
    "questionText": "What is the first step to apply when rounding a number to the nearest decimal place?",
    "options": [
      "A) Add 1 to the digit at the required degree of accuracy.",
      "B) Leave the digit as it is if it is 5.",
      "C) Look at the digit at the next to the required degree of accuracy.",
      "D) Multiply the number by 10."
    ],
    "correctAnswer": "C) Look at the digit at the next to the required degree of accuracy."
  },
  {
    "id": 38,
    "questionText": "Round 3925 to 1 significant figure.",
    "options": [
      "A) 3000",
      "B) 4000",
      "C) 3900",
      "D) 3920"
    ],
    "correctAnswer": "B) 4000"
  },
  {
    "id": 39,
    "questionText": "Round 3925 to 2 significant figures.",
    "options": [
      "A) 4000",
      "B) 3900",
      "C) 3920",
      "D) 3000"
    ],
    "correctAnswer": "B) 3900"
  },
  {
    "id": 40,
    "questionText": "Round 3925 to 3 significant figures.",
    "options": [
      "A) 4000",
      "B) 3900",
      "C) 3930",
      "D) 3920"
    ],
    "correctAnswer": "C) 3930"
  },
  {
    "id": 41,
    "questionText": "Round 24.3528 to 2 decimal places.",
    "options": [
      "A) 24.35",
      "B) 24.36",
      "C) 24.3",
      "D) 24.4"
    ],
    "correctAnswer": "A) 24.35"
  },
  {
    "id": 42,
    "questionText": "Round 0.028635 to 3 decimal places.",
    "options": [
      "A) 0.028",
      "B) 0.029",
      "C) 0.0286",
      "D) 0.03"
    ],
    "correctAnswer": "B) 0.029"
  },
  {
    "id": 43,
    "questionText": "When rounding a negative integer, what determines if the number is greater or smaller from zero?",
    "options": [
      "A) Its distance from zero",
      "B) Its absolute value only",
      "C) Its sign",
      "D) Whether it's positive"
    ],
    "correctAnswer": "A) Its distance from zero"
  },
  {
    "id": 44,
    "questionText": "Round -43566 to 2 significant figures.",
    "options": [
      "A) -44000",
      "B) -43000",
      "C) -43500",
      "D) -43600"
    ],
    "correctAnswer": "A) -44000"
  },
  {
    "id": 45,
    "questionText": "In the decimal number, all zeros after a non-zero digit are:",
    "options": [
      "A) Insignificant",
      "B) Important",
      "C) Significant",
      "D) Variable"
    ],
    "correctAnswer": "C) Significant"
  },
  {
    "id": 46,
    "questionText": "If the difference between the actual value and estimated value is small, what can be inferred about the solution?",
    "options": [
      "A) It is unreasonable.",
      "B) It is reasonable.",
      "C) It is incorrect.",
      "D) It is only an estimate."
    ],
    "correctAnswer": "B) It is reasonable."
  },
  {
    "id": 47,
    "questionText": "What is meant by \"error\" in the context of estimation?",
    "options": [
      "A) The actual value",
      "B) The estimated value",
      "C) The difference between the actual value and approximated/estimated value",
      "D) The sum of actual and estimated values"
    ],
    "correctAnswer": "C) The difference between the actual value and approximated/estimated value"
  },
  {
    "id": 48,
    "questionText": "What are the key properties of rational numbers mentioned in the summary?",
    "options": [
      "A) Addition, Subtraction, Multiplication",
      "B) Positive and Negative",
      "C) Commutative, Associative, and Distributive properties",
      "D) Numerator and Denominator"
    ],
    "correctAnswer": "C) Commutative, Associative, and Distributive properties"
  },
  {
    "id": 49,
    "questionText": "What is the relationship between LCM and rational numbers?",
    "options": [
      "A) LCM is used to identify positive rational numbers.",
      "B) The smallest common multiple of two or more rational numbers is called LCM.",
      "C) LCM is used to determine the sign of rational numbers.",
      "D) LCM is the difference between two rational numbers."
    ],
    "correctAnswer": "B) The smallest common multiple of two or more rational numbers is called LCM."
  },
  {
    "id": 50,
    "questionText": "What is a \"number line\"?",
    "options": [
      "A) A line showing only natural numbers",
      "B) A line showing only positive integers",
      "C) A line on which numbers are represented by points",
      "D) A line used for geometric shapes"
    ],
    "correctAnswer": "C) A line on which numbers are represented by points"
  }
],
  "Simplification": [
  {
    "id": 1,
    "questionText": "What is the main purpose of simplification in mathematics?",
    "options": [
      "A) To complicate expressions",
      "B) To identify different operations",
      "C) To solve mathematical expressions",
      "D) To change the values of numbers"
    ],
    "correctAnswer": "C) To solve mathematical expressions"
  },
  {
    "id": 2,
    "questionText": "What does the \"B\" in BODMAS stand for?",
    "options": [
      "A) Brackets",
      "B) Base",
      "C) Binary",
      "D) Bold"
    ],
    "correctAnswer": "A) Brackets"
  },
  {
    "id": 3,
    "questionText": "What does the \"O\" in BODMAS stand for?",
    "options": [
      "A) Over",
      "B) Order or Of",
      "C) One",
      "D) Open"
    ],
    "correctAnswer": "B) Order or Of"
  },
  {
    "id": 4,
    "questionText": "What does the \"D\" in BODMAS stand for?",
    "options": [
      "A) Denominator",
      "B) Division",
      "C) Decimal",
      "D) Degree"
    ],
    "correctAnswer": "B) Division"
  },
  {
    "id": 5,
    "questionText": "What does the \"M\" in BODMAS stand for?",
    "options": [
      "A) Minus",
      "B) Modulo",
      "C) Multiplication",
      "D) Metric"
    ],
    "correctAnswer": "C) Multiplication"
  },
  {
    "id": 6,
    "questionText": "What does the \"A\" in BODMAS stand for?",
    "options": [
      "A) Addition",
      "B) Angle",
      "C) Algebra",
      "D) Area"
    ],
    "correctAnswer": "A) Addition"
  },
  {
    "id": 7,
    "questionText": "What does the \"S\" in BODMAS stand for?",
    "options": [
      "A) Sequence",
      "B) Sets",
      "C) Subtraction",
      "D) Sum"
    ],
    "correctAnswer": "C) Subtraction"
  },
  {
    "id": 8,
    "questionText": "According to BODMAS, which operation should be performed first?",
    "options": [
      "A) Brackets",
      "B) Division",
      "C) Addition",
      "D) Subtraction"
    ],
    "correctAnswer": "A) Brackets"
  },
  {
    "id": 9,
    "questionText": "Which type of bracket is represented by \"()\"?",
    "options": [
      "A) Curly brackets",
      "B) Round, curved brackets",
      "C) Box brackets",
      "D) Vinculum or bar"
    ],
    "correctAnswer": "B) Round, curved brackets"
  },
  {
    "id": 10,
    "questionText": "Which type of bracket is represented by \"[]\"?",
    "options": [
      "A) Curly brackets",
      "B) Round, curved brackets",
      "C) Box brackets or square brackets",
      "D) Vinculum or bar"
    ],
    "correctAnswer": "C) Box brackets or square brackets"
  },
  {
    "id": 11,
    "questionText": "Which type of bracket is represented by \"{}\"?",
    "options": [
      "A) Curly brackets",
      "B) Round, curved brackets",
      "C) Box brackets",
      "D) Vinculum or bar"
    ],
    "correctAnswer": "A) Curly brackets"
  },
  {
    "id": 12,
    "questionText": "Which symbol is also known as a vinculum or bar?",
    "options": [
      "A) ( )",
      "B) { }",
      "C) [ ]",
      "D) A horizontal line over numbers"
    ],
    "correctAnswer": "D) A horizontal line over numbers"
  },
  {
    "id": 13,
    "questionText": "In the expression 18 ÷ 2 - [3 x 5 - {12 - 6 - (6 + 8 - 5)}], what should be solved first according to BODMAS?",
    "options": [
      "A) (6 + 8 - 5)",
      "B) [3 x 5 - {...}]",
      "C) {12 - 6 - (...)}",
      "D) 18 ÷ 2"
    ],
    "correctAnswer": "A) (6 + 8 - 5)"
  },
  {
    "id": 14,
    "questionText": "If an expression has both multiplication and division, which one should be performed first?",
    "options": [
      "A) Multiplication",
      "B) Division",
      "C) Either, from left to right",
      "D) Depends on the numbers"
    ],
    "correctAnswer": "C) Either, from left to right"
  },
  {
    "id": 15,
    "questionText": "If an expression has both addition and subtraction, which one should be performed first?",
    "options": [
      "A) Addition",
      "B) Subtraction",
      "C) Either, from left to right",
      "D) Depends on the numbers"
    ],
    "correctAnswer": "C) Either, from left to right"
  },
  {
    "id": 16,
    "questionText": "Simplify: 12 + 3 × 4",
    "options": [
      "A) 60",
      "B) 15",
      "C) 24",
      "D) 48"
    ],
    "correctAnswer": "C) 24"
  },
  {
    "id": 17,
    "questionText": "Simplify: (5 + 3) × 2 - 10",
    "options": [
      "A) 6",
      "B) 6",
      "C) 16",
      "D) 0"
    ],
    "correctAnswer": "A) 6"
  },
  {
    "id": 18,
    "questionText": "Simplify: 25 ÷ 5 + 3",
    "options": [
      "A) 4",
      "B) 8",
      "C) 20",
      "D) 15"
    ],
    "correctAnswer": "B) 8"
  },
  {
    "id": 19,
    "questionText": "What is the result of 10 - 2 × 3?",
    "options": [
      "A) 24",
      "B) 4",
      "C) 8",
      "D) 1"
    ],
    "correctAnswer": "B) 4"
  },
  {
    "id": 20,
    "questionText": "Simplify: 4 × (6 - 2) + 5",
    "options": [
      "A) 36",
      "B) 29",
      "C) 21",
      "D) 40"
    ],
    "correctAnswer": "C) 21"
  },
  {
    "id": 21,
    "questionText": "Simplify: 15 ÷ (5 - 2)",
    "options": [
      "A) 5",
      "B) 5",
      "C) 3",
      "D) 10"
    ],
    "correctAnswer": "A) 5"
  },
  {
    "id": 22,
    "questionText": "What rule helps simplify mathematical expressions?",
    "options": [
      "A) ABC",
      "B) XYZ",
      "C) BODMAS",
      "D) LMN"
    ],
    "correctAnswer": "C) BODMAS"
  },
  {
    "id": 23,
    "questionText": "Who introduced the \"BODMAS\" rule?",
    "options": [
      "A) John Napier",
      "B) Isaac Newton",
      "C) Achilles Reselfelt",
      "D) Euclid"
    ],
    "correctAnswer": "C) Achilles Reselfelt"
  },
  {
    "id": 24,
    "questionText": "When using BODMAS, after solving operations inside brackets, what is the next step?",
    "options": [
      "A) Addition/Subtraction",
      "B) Multiplication/Division",
      "C) Orders (powers and square roots)",
      "D) Simplification"
    ],
    "correctAnswer": "C) Orders (powers and square roots)"
  },
  {
    "id": 25,
    "questionText": "Simplify: 2.25 + 8.5 × [2 × 1.37 + {3.2 - (5.2 - 3.2 + 5.2)}]",
    "options": [
      "A) 2.25 + 8.5 × [2 × 1.37 + {3.2 - (7.2)}]",
      "B) 2.25 + 8.5 × [2 × 1.37 + {3.2 - (5.2 - 3.2)}] = 2.25 + 8.5 × [2 × 1.37 + {3.2 - 2}]",
      "C) 2.25 + 8.5 × [2 × 1.37 + {3.2 + 5.2 - 3.2}]",
      "D) 2.25 + 8.5 × [2 × 1.37 + {3.2 - 7.2 + 5.2}] = 2.25 + 8.5 × [2 × 1.37 + 1.2] = 2.25 + 8.5 × [2.74 + 1.2] = 2.25 + 8.5 × 3.94 = 2.25 + 33.49 = 35.74 (This is a complex calculation; the key is the order of operations)"
    ],
    "correctAnswer": "D) 2.25 + 8.5 × [2 × 1.37 + {3.2 - 7.2 + 5.2}] = 2.25 + 8.5 × [2 × 1.37 + 1.2] = 2.25 + 8.5 × [2.74 + 1.2] = 2.25 + 8.5 × 3.94 = 2.25 + 33.49 = 35.74 (This is a complex calculation; the key is the order of operations)"
  },
  {
    "id": 26,
    "questionText": "When is an expression considered simplified?",
    "options": [
      "A) When all numbers are integers",
      "B) When it contains only one operation",
      "C) When it is reduced to its simplest form",
      "D) When it has been multiplied by 0"
    ],
    "correctAnswer": "C) When it is reduced to its simplest form"
  },
  {
    "id": 27,
    "questionText": "Simplify: 1/3 + 2/3 × 5/2",
    "options": [
      "A) 5/6",
      "B) 1",
      "C) 1/3 + 5/3 = 6/3 = 2",
      "D) 1/3 + 7/3"
    ],
    "correctAnswer": "C) 1/3 + 5/3 = 6/3 = 2"
  },
  {
    "id": 28,
    "questionText": "Simplify: 70 + 10 ÷ 20 - 2",
    "options": [
      "A) 88",
      "B) 70.5",
      "C) 68.5 (70 + 0.5 - 2)",
      "D) 69"
    ],
    "correctAnswer": "C) 68.5 (70 + 0.5 - 2)"
  },
  {
    "id": 29,
    "questionText": "Simplify: 25 - [5 + (28 ÷ 4 + 12)]",
    "options": [
      "A) 25 - [5 + 7 + 12] = 25 - 24 = 1",
      "B) 25 - [5 + 19] = 25 - 24 = 1",
      "C) 25 - [5 + 7 + 12] = 25 - 24 = 1",
      "D) 25 - [5 + 28/4 + 12] = 25 - [5 + 7 + 12] = 25 - 24 = 1"
    ],
    "correctAnswer": "C) 25 - [5 + 7 + 12] = 25 - 24 = 1"
  },
  {
    "id": 30,
    "questionText": "Simplify: 12 × 8 - [64 - {18 + (9 - 6 - 3)}]",
    "options": [
      "A) 96 - [64 - {18 + 0}] = 96 -  = 96 - 46 = 50",
      "B) 96 -  = 96 - 46 = 50",
      "C) 96 -  = 96 - 43 = 53",
      "D) 96 - [64 - {18 + (0)}] = 96 -  = 96 - 46 = 50"
    ],
    "correctAnswer": "A) 96 - [64 - {18 + 0}] = 96 -  = 96 - 46 = 50"
  },
  {
    "id": 31,
    "questionText": "Simplify: 8 × 9 - [32 - {24 ÷ (8 - 4 × 2)}]",
    "options": [
      "A) 72 - [32 - {24 ÷ (8 - 8)}] = 72 - [32 - {24 ÷ 0}] which is undefined.",
      "B) Undefined (Due to division by zero)",
      "C) 72 - [32 - {24 ÷ 0}] = 72 - undefined",
      "D) 72 - [32 - {24 ÷ (4)}] = 72 -  = 72 - 26 = 46"
    ],
    "correctAnswer": "B) Undefined (Due to division by zero)"
  },
  {
    "id": 32,
    "questionText": "What is the order of operations for BODMAS?",
    "options": [
      "A) Orders, Brackets, Division, Multiplication, Addition, Subtraction",
      "B) Addition, Subtraction, Multiplication, Division, Orders, Brackets",
      "C) Brackets, Orders, Division, Multiplication, Addition, Subtraction",
      "D) Brackets, Orders, Addition, Subtraction, Division, Multiplication"
    ],
    "correctAnswer": "C) Brackets, Orders, Division, Multiplication, Addition, Subtraction"
  },
  {
    "id": 33,
    "questionText": "Simplify: 1/7 - [7/6 {245 / 4 + 121 / 8}]",
    "options": [
      "A) 1/7 - [7/6 {61.25 + 15.125}] = 1/7 - [7/6 * 76.375] = 1/7 - 89.09...",
      "B) This involves large decimals, so exact fraction arithmetic is preferred.",
      "C) 1/7 - [7/6 {490/8 + 121/8}] = 1/7 - [7/6 {611/8}] = 1/7 - 4277/48 = (48 - 29939)/336 = -29891/336 (Conceptually, it's about following order)",
      "D) 1/7 - 7/6 * (245/4 + 121/8)"
    ],
    "correctAnswer": "C) 1/7 - [7/6 {490/8 + 121/8}] = 1/7 - [7/6 {611/8}] = 1/7 - 4277/48 = (48 - 29939)/336 = -29891/336 (Conceptually, it's about following order)"
  },
  {
    "id": 34,
    "questionText": "Simplify: [3/5 + 1/4 {3/2 + 2/3 - 1/5}]",
    "options": [
      "A) [3/5 + 1/4 { (45 + 40 - 12) / 60 }]",
      "B) [3/5 + 1/4 { 73 / 60 }]",
      "C) [3/5 + 1/4 { (45+40-12)/60 }] = [3/5 + 1/4 * 73/60] = [3/5 + 73/240] = (144 + 73)/240 = 217/240",
      "D) [3/5 + 1/4 * 3/2 + 2/3 - 1/5]"
    ],
    "correctAnswer": "C) [3/5 + 1/4 { (45+40-12)/60 }] = [3/5 + 1/4 * 73/60] = [3/5 + 73/240] = (144 + 73)/240 = 217/240"
  },
  {
    "id": 35,
    "questionText": "The source states that \"Mathematics involves directly into business, health and finance.\" This implies simplification is useful in:",
    "options": [
      "A) Only academic settings",
      "B) Only abstract problems",
      "C) Real-world applications",
      "D) Only pure mathematics"
    ],
    "correctAnswer": "C) Real-world applications"
  },
  {
    "id": 36,
    "questionText": "Simplify: 0.8 × [40 - {0.2 + 0.002)}]",
    "options": [
      "A) 0.8 × [40 - 0.202] = 0.8 × 39.798 = 31.8384",
      "B) 31.8384",
      "C) 32",
      "D) 0.8 × 39.78"
    ],
    "correctAnswer": "A) 0.8 × [40 - 0.202] = 0.8 × 39.798 = 31.8384"
  },
  {
    "id": 37,
    "questionText": "Simplify: 5.28 × [1.026 + {1.123 × (9.261 + 2.345 + 5.432)}] × 2.03",
    "options": [
      "A) This is a complex expression, but it follows BODMAS.",
      "B) 5.28 × [1.026 + {1.123 × (17.038)}] × 2.03 = 5.28 × [1.026 + 19.1352] × 2.03 = 5.28 × 20.1612 × 2.03",
      "C) 5.28 × 40.827 × 2.03",
      "D) 2.25 × 8.5 × 9.14 = 2.25 × 77.69 = 174.80 (This question refers to example 3 from page 30, which has similar complexity. The answer will be the result of a long calculation. Assuming a direct simplification based on the prompt structure, rather than an exact match to a simple problem)"
    ],
    "correctAnswer": "B) 5.28 × [1.026 + {1.123 × (17.038)}] × 2.03 = 5.28 × [1.026 + 19.1352] × 2.03 = 5.28 × 20.1612 × 2.03"
  },
  {
    "id": 38,
    "questionText": "What is the order of solving brackets, from innermost to outermost?",
    "options": [
      "A) Curly, Round, Box",
      "B) Box, Curly, Round",
      "C) Vinculum/Bar, Round, Curly, Box",
      "D) Round, Box, Curly"
    ],
    "correctAnswer": "C) Vinculum/Bar, Round, Curly, Box"
  },
  {
    "id": 39,
    "questionText": "When an expression has multiplication and division at the same level, how should they be performed?",
    "options": [
      "A) Multiplication first, then division.",
      "B) Division first, then multiplication.",
      "C) From left to right.",
      "D) From right to left."
    ],
    "correctAnswer": "C) From left to right."
  },
  {
    "id": 40,
    "questionText": "When an expression has addition and subtraction at the same level, how should they be performed?",
    "options": [
      "A) Addition first, then subtraction.",
      "B) Subtraction first, then addition.",
      "C) From left to right.",
      "D) From right to left."
    ],
    "correctAnswer": "C) From left to right."
  },
  {
    "id": 41,
    "questionText": "Simplify: 10 + 2 × (5 - 1)",
    "options": [
      "A) 12 × 4 = 48",
      "B) 10 + 2 × 5 - 1 = 10 + 10 - 1 = 19",
      "C) 10 + 2 × 4 = 10 + 8 = 18",
      "D) 10 + 8 = 18"
    ],
    "correctAnswer": "C) 10 + 2 × 4 = 10 + 8 = 18"
  },
  {
    "id": 42,
    "questionText": "Simplify: 18 ÷ 3 + 7 - 2",
    "options": [
      "A) 6 + 7 - 2 = 13 - 2 = 11",
      "B) 18 ÷ 10 - 2 = 1.8 - 2 = -0.2",
      "C) 11",
      "D) 18"
    ],
    "correctAnswer": "A) 6 + 7 - 2 = 13 - 2 = 11"
  },
  {
    "id": 43,
    "questionText": "What is the value of 5² in terms of \"Orders\"?",
    "options": [
      "A) 10",
      "B) 25",
      "C) 7",
      "D) 5"
    ],
    "correctAnswer": "B) 25"
  },
  {
    "id": 44,
    "questionText": "What is the value of √9 in terms of \"Orders\"?",
    "options": [
      "A) 3",
      "B) 81",
      "C) 9",
      "D) 30"
    ],
    "correctAnswer": "A) 3"
  },
  {
    "id": 45,
    "questionText": "Simplify: 4 + 6 × 2 ÷ 3",
    "options": [
      "A) 10 × 2 ÷ 3 = 20 ÷ 3 = 6.67",
      "B) 4 + 12 ÷ 3 = 4 + 4 = 8",
      "C) 8",
      "D) 4"
    ],
    "correctAnswer": "B) 4 + 12 ÷ 3 = 4 + 4 = 8"
  },
  {
    "id": 46,
    "questionText": "Which of the following expressions is simplified correctly using BODMAS?",
    "options": [
      "A) 5 + 3 × 2 = 16",
      "B) (5 + 3) × 2 = 13",
      "C) 10 - 4 ÷ 2 = 8",
      "D) 10 - 4 ÷ 2 = 3"
    ],
    "correctAnswer": "C) 10 - 4 ÷ 2 = 8"
  },
  {
    "id": 47,
    "questionText": "Simplify: 20 - (8 ÷ 2) + 3",
    "options": [
      "A) 20 - 4 + 3 = 19",
      "B) 19",
      "C) 20 - 1 = 19",
      "D) 20 - 4 = 16"
    ],
    "correctAnswer": "A) 20 - 4 + 3 = 19"
  },
  {
    "id": 48,
    "questionText": "In 18 - 2 × [3 × 5 - {12 - 6 - (6 + 8 - 5)}], after calculating (6 + 8 - 5) = 9, what's the next step?",
    "options": [
      "A) 12 - 6",
      "B) 3 × 5",
      "C) 12 - 6 - 9",
      "D) 18 - 2"
    ],
    "correctAnswer": "C) 12 - 6 - 9"
  },
  {
    "id": 49,
    "questionText": "If an expression only has addition and multiplication, which operation comes first?",
    "options": [
      "A) Addition",
      "B) Multiplication",
      "C) Depends on numbers",
      "D) Left to right"
    ],
    "correctAnswer": "B) Multiplication"
  },
  {
    "id": 50,
    "questionText": "What type of numbers are involved in mathematical expressions that simplification rules apply to?",
    "options": [
      "A) Only whole numbers",
      "B) Only fractions",
      "C) Only decimals",
      "D) Whole numbers, integers, decimals, fractions"
    ],
    "correctAnswer": "D) Whole numbers, integers, decimals, fractions"
  }
],
  "Sets":[
  {
    "id": 1,
    "questionText": "What is a \"Set\" in Mathematics?",
    "options": [
      "A) A collection of numbers.",
      "B) A collection of objects or things. (Specifically, a well-defined collection)",
      "C) A group of mathematical operations.",
      "D) A list of equations."
    ],
    "correctAnswer": "B) A collection of objects or things. (Specifically, a well-defined collection)"
  },
  {
    "id": 2,
    "questionText": "Which of the following describes a well-defined collection?",
    "options": [
      "A) The collection of beautiful flowers.",
      "B) The collection of intelligent students.",
      "C) The collection of coins in your pocket.",
      "D) The collection of good books."
    ],
    "correctAnswer": "C) The collection of coins in your pocket."
  },
  {
    "id": 3,
    "questionText": "Which of these is not a well-defined set?",
    "options": [
      "A) A = {1, 2, 3}",
      "B) B = {Days of the week}",
      "C) The collection of talented singers.",
      "D) C = {Vowels in English alphabet}"
    ],
    "correctAnswer": "C) The collection of talented singers."
  },
  {
    "id": 4,
    "questionText": "What is a \"subset\"?",
    "options": [
      "A) If all the elements of a set A are also the elements of a set B, then set A is called the subset of set B.",
      "B) If set A has some elements that are also in set B.",
      "C) If set A and set B have no common elements.",
      "D) If set A is larger than set B."
    ],
    "correctAnswer": "A) If all the elements of a set A are also the elements of a set B, then set A is called the subset of set B."
  },
  {
    "id": 5,
    "questionText": "What is a \"supersets\"?",
    "options": [
      "A) A set which is smaller than another set.",
      "B) If a set A contains all the elements of a set B, then set A is a superset of set B.",
      "C) A set with no elements.",
      "D) A set that is disjoint from another set."
    ],
    "correctAnswer": "B) If a set A contains all the elements of a set B, then set A is a superset of set B."
  },
  {
    "id": 6,
    "questionText": "The symbol \"∈\" is used to denote:",
    "options": [
      "A) Is not an element of",
      "B) Is an element of",
      "C) Subset of",
      "D) Superset of"
    ],
    "correctAnswer": "B) Is an element of"
  },
  {
    "id": 7,
    "questionText": "The symbol \"∉\" is used to denote:",
    "options": [
      "A) Is not an element of",
      "B) Is an element of",
      "C) Subset of",
      "D) Superset of"
    ],
    "correctAnswer": "A) Is not an element of"
  },
  {
    "id": 8,
    "questionText": "How is the empty set (a set with no elements) denoted?",
    "options": [
      "A) { }",
      "B) Ø",
      "C) {} or Ø",
      "D) Both A and B"
    ],
    "correctAnswer": "D) Both A and B"
  },
  {
    "id": 9,
    "questionText": "A set that contains only one element is called a:",
    "options": [
      "A) Null set",
      "B) Empty set",
      "C) Singleton set",
      "D) Universal set"
    ],
    "correctAnswer": "C) Singleton set"
  },
  {
    "id": 10,
    "questionText": "What is a \"Finite Set\"? [Not explicitly defined but implied by examples in sources]",
    "options": [
      "A) A set with an infinite number of elements.",
      "B) A set with a limited or countable number of elements.",
      "C) A set containing only numbers.",
      "D) A set that is empty."
    ],
    "correctAnswer": "B) A set with a limited or countable number of elements."
  },
  {
    "id": 11,
    "questionText": "What is an \"Infinite Set\"? [Not explicitly defined but implied by examples in sources]",
    "options": [
      "A) A set with an unlimited or uncountable number of elements.",
      "B) A set containing only positive numbers.",
      "C) A set that is well-defined.",
      "D) A set that is empty."
    ],
    "correctAnswer": "A) A set with an unlimited or uncountable number of elements."
  },
  {
    "id": 12,
    "questionText": "If A = {1, 2, 3} and B = {1, 2, 3, 4, 5}, then A is a _____ of B.",
    "options": [
      "A) Superset",
      "B) Proper subset",
      "C) Equal set",
      "D) Disjoint set"
    ],
    "correctAnswer": "B) Proper subset"
  },
  {
    "id": 13,
    "questionText": "What is a \"Proper Subset\"?",
    "options": [
      "A) A set A is a proper subset of a set B if all the elements of A are elements of B, and B has at least one element that is not in A.",
      "B) A set A is a proper subset of a set B if A and B have exactly the same elements.",
      "C) A set A is a proper subset of a set B if they have no common elements.",
      "D) A set A is a proper subset of a set B if A contains B."
    ],
    "correctAnswer": "A) A set A is a proper subset of a set B if all the elements of A are elements of B, and B has at least one element that is not in A."
  },
  {
    "id": 14,
    "questionText": "What is an \"Improper Subset\"?",
    "options": [
      "A) A set A is an improper subset of a set B if A is a subset of B and A has fewer elements than B.",
      "B) If set A is a subset of set B and A = B, then A is an improper subset of B.",
      "C) A set A is an improper subset of a set B if A and B have no common elements.",
      "D) A set A is an improper subset of a set B if A is not well-defined."
    ],
    "correctAnswer": "B) If set A is a subset of set B and A = B, then A is an improper subset of B."
  },
  {
    "id": 15,
    "questionText": "What are \"Equivalent Sets\"?",
    "options": [
      "A) Two sets that contain exactly the same elements.",
      "B) Two sets that have the same number of elements.",
      "C) Two sets that have no common elements.",
      "D) Two sets where one is a subset of the other."
    ],
    "correctAnswer": "B) Two sets that have the same number of elements."
  },
  {
    "id": 16,
    "questionText": "What are \"Equal Sets\"?",
    "options": [
      "A) Two sets that contain exactly the same elements.",
      "B) Two sets that have the same number of elements.",
      "C) Two sets that have common elements.",
      "D) Two sets where one is a proper subset of the other."
    ],
    "correctAnswer": "A) Two sets that contain exactly the same elements."
  },
  {
    "id": 17,
    "questionText": "What are \"Disjoint Sets\"?",
    "options": [
      "A) Two or more sets that have at least one common element.",
      "B) Two or more sets that do not have any common elements.",
      "C) Sets that are equivalent.",
      "D) Sets that are proper subsets of each other."
    ],
    "correctAnswer": "B) Two or more sets that do not have any common elements."
  },
  {
    "id": 18,
    "questionText": "What are \"Overlapping Sets\"?",
    "options": [
      "A) Two or more sets that have at least one common element.",
      "B) Two or more sets that do not have any common elements.",
      "C) Sets that are equal.",
      "D) Sets that are empty."
    ],
    "correctAnswer": "A) Two or more sets that have at least one common element."
  },
  {
    "id": 19,
    "questionText": "What operation combines elements of two sets according to a specific rule?",
    "options": [
      "A) Operations on sets",
      "B) Comparing sets",
      "C) Describing sets",
      "D) Listing sets"
    ],
    "correctAnswer": "A) Operations on sets"
  },
  {
    "id": 20,
    "questionText": "The \"Union of Sets\" is denoted by:",
    "options": [
      "A) ∩",
      "B) ∪",
      "C) -",
      "D) ×"
    ],
    "correctAnswer": "B) ∪"
  },
  {
    "id": 21,
    "questionText": "The \"Intersection of Sets\" is denoted by:",
    "options": [
      "A) ∩",
      "B) ∪",
      "C) -",
      "D) ÷"
    ],
    "correctAnswer": "A) ∩"
  },
  {
    "id": 22,
    "questionText": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∪ B?",
    "options": [
      "A) {3}",
      "B) {1, 2, 4, 5}",
      "C) {1, 2, 3, 4, 5}",
      "D) { }"
    ],
    "correctAnswer": "C) {1, 2, 3, 4, 5}"
  },
  {
    "id": 23,
    "questionText": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
    "options": [
      "A) {3}",
      "B) {1, 2, 4, 5}",
      "C) {1, 2, 3, 4, 5}",
      "D) { }"
    ],
    "correctAnswer": "A) {3}"
  },
  {
    "id": 24,
    "questionText": "The \"Difference of Sets\" (A - B) contains:",
    "options": [
      "A) All elements common to A and B.",
      "B) All elements in B that are not in A.",
      "C) All elements of set A that are not in set B.",
      "D) All elements in A and B combined."
    ],
    "correctAnswer": "C) All elements of set A that are not in set B."
  },
  {
    "id": 25,
    "questionText": "If A = {3, 5, 7, 9} and B = {1, 3, 4, 7, 11}, what is A - B?",
    "options": [
      "A) {3, 7}",
      "B) {1, 4, 11}",
      "C) {5, 9}",
      "D) {3, 5, 7, 9, 1, 4, 11}"
    ],
    "correctAnswer": "C) {5, 9}"
  },
  {
    "id": 26,
    "questionText": "What is a \"Universal Set\"?",
    "options": [
      "A) A set containing only natural numbers.",
      "B) A set that contains all elements under consideration.",
      "C) A set with no elements.",
      "D) A set that is a subset of all other sets."
    ],
    "correctAnswer": "B) A set that contains all elements under consideration."
  },
  {
    "id": 27,
    "questionText": "The \"Complement of a Set\" A (denoted as A') contains:",
    "options": [
      "A) Elements of A.",
      "B) Elements that are in a universal set and in A.",
      "C) All elements that are in the universal set but not in A.",
      "D) Elements of another set."
    ],
    "correctAnswer": "C) All elements that are in the universal set but not in A."
  },
  {
    "id": 28,
    "questionText": "If U = {1, 2, 3, 4, 5, 6, 7, 8, 9} and A = {1, 2, 5, 6}, what is A'?",
    "options": [
      "A) {1, 2, 5, 6}",
      "B) { }",
      "C) {3, 4, 7, 8, 9}",
      "D) {2, 5}"
    ],
    "correctAnswer": "C) {3, 4, 7, 8, 9}"
  },
  {
    "id": 29,
    "questionText": "Which of these properties states that (A ∪ B)' = A' ∩ B'?",
    "options": [
      "A) Commutative Law",
      "B) Associative Law",
      "C) Distributive Law",
      "D) De Morgan's Law"
    ],
    "correctAnswer": "D) De Morgan's Law"
  },
  {
    "id": 30,
    "questionText": "Which of these properties states that (A ∩ B)' = A' ∪ B'?",
    "options": [
      "A) Commutative Law",
      "B) Associative Law",
      "C) Distributive Law",
      "D) De Morgan's Law"
    ],
    "correctAnswer": "D) De Morgan's Law"
  },
  {
    "id": 31,
    "questionText": "What is the tabular form of a set?",
    "options": [
      "A) Elements are written within curly brackets and separated by commas.",
      "B) Elements are described using a rule.",
      "C) Elements are shown in a Venn diagram.",
      "D) Elements are listed randomly."
    ],
    "correctAnswer": "A) Elements are written within curly brackets and separated by commas."
  },
  {
    "id": 32,
    "questionText": "What is set builder notation?",
    "options": [
      "A) Elements are described by a common property using symbols.",
      "B) Elements are listed numerically.",
      "C) Elements are drawn as a diagram.",
      "D) Elements are given nicknames."
    ],
    "correctAnswer": "A) Elements are described by a common property using symbols."
  },
  {
    "id": 33,
    "questionText": "What is a Venn Diagram used for?",
    "options": [
      "A) To list elements of a set.",
      "B) To represent sets and their relationships pictorially using circles and rectangles.",
      "C) To write the properties of sets.",
      "D) To calculate the number of elements in a set."
    ],
    "correctAnswer": "B) To represent sets and their relationships pictorially using circles and rectangles."
  },
  {
    "id": 34,
    "questionText": "In a Venn diagram, what typically represents the universal set?",
    "options": [
      "A) A circle",
      "B) A rectangle",
      "C) A triangle",
      "D) A line"
    ],
    "correctAnswer": "B) A rectangle"
  },
  {
    "id": 35,
    "questionText": "The symbol \"⊆\" means:",
    "options": [
      "A) Proper subset",
      "B) Subset or equal to",
      "C) Not a subset",
      "D) Superset"
    ],
    "correctAnswer": "B) Subset or equal to"
  },
  {
    "id": 36,
    "questionText": "If A ⊆ B and A ≠ B, then A is a:",
    "options": [
      "A) Supersets",
      "B) Proper subset",
      "C) Equal set",
      "D) Disjoint set"
    ],
    "correctAnswer": "B) Proper subset"
  },
  {
    "id": 37,
    "questionText": "If a set has 'n' elements, how many subsets can be formed from it? [Not explicitly stated, but general knowledge based on sets usually covered with this topic]",
    "options": [
      "A) n",
      "B) n!",
      "C) n²",
      "D) 2ⁿ (This is a common property taught alongside sets, assuming it's part of the curriculum's implied knowledge)"
    ],
    "correctAnswer": "D) 2ⁿ (This is a common property taught alongside sets, assuming it's part of the curriculum's implied knowledge)"
  },
  {
    "id": 38,
    "questionText": "Which set notation is equivalent to {x | x ∈ N ∧ x ≤ 10}?",
    "options": [
      "A) {1, 2, 3, 4, 5, 6, 7, 8, 9}",
      "B) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      "C) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      "D) {2, 4, 6, 8, 10}"
    ],
    "correctAnswer": "B) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}"
  },
  {
    "id": 39,
    "questionText": "What is the value of A ∪ A'?",
    "options": [
      "A) A",
      "B) A'",
      "C) U (Universal Set)",
      "D) Ø (Empty Set)"
    ],
    "correctAnswer": "C) U (Universal Set)"
  },
  {
    "id": 40,
    "questionText": "What is the value of A ∩ A'?",
    "options": [
      "A) A",
      "B) A'",
      "C) U (Universal Set)",
      "D) Ø (Empty Set)"
    ],
    "correctAnswer": "D) Ø (Empty Set)"
  },
  {
    "id": 41,
    "questionText": "Which operation on sets follows the commutative property?",
    "options": [
      "A) Difference (A - B ≠ B - A)",
      "B) Union (A ∪ B = B ∪ A)",
      "C) Complement (A' ≠ B')",
      "D) None of the above"
    ],
    "correctAnswer": "B) Union (A ∪ B = B ∪ A)"
  },
  {
    "id": 42,
    "questionText": "What is the common language, notation, and diagrams used to represent different sets?",
    "options": [
      "A) Numbers and equations",
      "B) Language, notation, and Venn Diagrams",
      "C) Graphs and charts",
      "D) Lists and tables"
    ],
    "correctAnswer": "B) Language, notation, and Venn Diagrams"
  },
  {
    "id": 43,
    "questionText": "What are the two main types of sets based on their elements? [Implied by content, finite/infinite]",
    "options": [
      "A) Equal and Equivalent",
      "B) Finite and Infinite",
      "C) Proper and Improper",
      "D) Disjoint and Overlapping"
    ],
    "correctAnswer": "B) Finite and Infinite"
  },
  {
    "id": 44,
    "questionText": "If A = {a, b, c} and B = {c, d, e}, what is B - A?",
    "options": [
      "A) {a, b}",
      "B) {d, e}",
      "C) {c}",
      "D) {a, b, c, d, e}"
    ],
    "correctAnswer": "B) {d, e}"
  },
  {
    "id": 45,
    "questionText": "What kind of sets are \"Natural Numbers\" {1, 2, 3, ...}?",
    "options": [
      "A) Infinite set",
      "B) Finite set",
      "C) Empty set",
      "D) Singleton set"
    ],
    "correctAnswer": "A) Infinite set"
  },
  {
    "id": 46,
    "questionText": "What kind of sets are \"Whole Numbers\" {0, 1, 2, 3, ...}?",
    "options": [
      "A) Infinite set",
      "B) Finite set",
      "C) Empty set",
      "D) Singleton set"
    ],
    "correctAnswer": "A) Infinite set"
  },
  {
    "id": 47,
    "questionText": "What kind of sets are \"Integers\" {..., -2, -1, 0, 1, 2, ...}?",
    "options": [
      "A) Infinite set",
      "B) Finite set",
      "C) Empty set",
      "D) Singleton set"
    ],
    "correctAnswer": "A) Infinite set"
  },
  {
    "id": 48,
    "questionText": "How many subsets can be formed from the set {a, b}? [36, based on 2^n rule]",
    "options": [
      "A) 2",
      "B) 3",
      "C) 4 ({}, {a}, {b}, {a,b})",
      "D) 5"
    ],
    "correctAnswer": "C) 4 ({}, {a}, {b}, {a,b})"
  },
  {
    "id": 49,
    "questionText": "If A is an empty set (Ø), then A is a subset of:",
    "options": [
      "A) Only itself",
      "B) Only universal set",
      "C) Every set",
      "D) No set"
    ],
    "correctAnswer": "C) Every set"
  },
  {
    "id": 50,
    "questionText": "What is the outcome of A ∩ B = Ø?",
    "options": [
      "A) A and B are overlapping sets.",
      "B) A and B are disjoint sets.",
      "C) A and B are equal sets.",
      "D) A is a subset of B."
    ],
    "correctAnswer": "B) A and B are disjoint sets."
  }
],
  "Rate Ratio and Proportion": [
  {
    "id": 1,
    "questionText": "What is a \"Ratio\"?",
    "options": [
      "A) A comparison of three quantities.",
      "B) A comparison of two quantities with different units.",
      "C) A comparison of two quantities with the same units.",
      "D) A statement of equality between two ratios."
    ],
    "correctAnswer": "C) A comparison of two quantities with the same units."
  },
  {
    "id": 2,
    "questionText": "In a ratio, what is the first term called?",
    "options": [
      "A) Antecedent",
      "B) Consequent",
      "C) Proportion",
      "D) Rate"
    ],
    "correctAnswer": "A) Antecedent"
  },
  {
    "id": 3,
    "questionText": "In a ratio, what is the second term called?",
    "options": [
      "A) Antecedent",
      "B) Consequent",
      "C) Proportion",
      "D) Rate"
    ],
    "correctAnswer": "B) Consequent"
  },
  {
    "id": 4,
    "questionText": "A ratio has:",
    "options": [
      "A) Dimension",
      "B) Units",
      "C) No units",
      "D) Both dimension and units"
    ],
    "correctAnswer": "C) No units"
  },
  {
    "id": 5,
    "questionText": "If the price of a mobile is Rs. 21000 and the price of a LED is Rs. 42000, what is the ratio of mobile price to LED price in its lowest form?",
    "options": [
      "A) 2:1",
      "B) 1:2",
      "C) 21:42",
      "D) 1:1"
    ],
    "correctAnswer": "B) 1:2"
  },
  {
    "id": 6,
    "questionText": "An increase in ratio means the numerator is _____ than the denominator.",
    "options": [
      "A) Greater",
      "B) Smaller",
      "C) Equal",
      "D) Zero"
    ],
    "correctAnswer": "A) Greater"
  },
  {
    "id": 7,
    "questionText": "A decrease in ratio means the numerator is _____ than the denominator.",
    "options": [
      "A) Greater",
      "B) Smaller",
      "C) Equal",
      "D) Zero"
    ],
    "correctAnswer": "B) Smaller"
  },
  {
    "id": 8,
    "questionText": "What is \"Rate\"?",
    "options": [
      "A) A ratio of two quantities with the same units.",
      "B) A ratio of two quantities with different units.",
      "C) A statement comparing two quantities.",
      "D) A proportion in its simplest form."
    ],
    "correctAnswer": "B) A ratio of two quantities with different units."
  },
  {
    "id": 9,
    "questionText": "How is speed defined?",
    "options": [
      "A) Distance / Time",
      "B) Time / Distance",
      "C) Distance × Time",
      "D) Distance + Time"
    ],
    "correctAnswer": "A) Distance / Time"
  },
  {
    "id": 10,
    "questionText": "If a bus covers 90 km in 1 hour and 80 km in the second hour, what is the average speed of the truck?",
    "options": [
      "A) 90 km/h",
      "B) 80 km/h",
      "C) 85 km/h ((90+80)/2 = 170/2 = 85)",
      "D) 170 km/h"
    ],
    "correctAnswer": "C) 85 km/h ((90+80)/2 = 170/2 = 85)"
  },
  {
    "id": 11,
    "questionText": "What is \"Proportion\"?",
    "options": [
      "A) A comparison of two quantities.",
      "B) A mathematical comparison between two ratios.",
      "C) A relationship between three quantities.",
      "D) A calculation of speed."
    ],
    "correctAnswer": "B) A mathematical comparison between two ratios."
  },
  {
    "id": 12,
    "questionText": "How is proportion denoted?",
    "options": [
      "A) =",
      "B) :",
      "C) ::",
      "D) Both A and C (equality of ratios, i.e., a:b::c:d or a/b = c/d)"
    ],
    "correctAnswer": "D) Both A and C (equality of ratios, i.e., a:b::c:d or a/b = c/d)"
  },
  {
    "id": 13,
    "questionText": "In a proportion a:b::c:d, what are 'b' and 'c' called?",
    "options": [
      "A) Extremes",
      "B) Means",
      "C) Products",
      "D) Ratios"
    ],
    "correctAnswer": "B) Means"
  },
  {
    "id": 14,
    "questionText": "In a proportion a:b::c:d, what are 'a' and 'd' called?",
    "options": [
      "A) Extremes",
      "B) Means",
      "C) Products",
      "D) Ratios"
    ],
    "correctAnswer": "A) Extremes"
  },
  {
    "id": 15,
    "questionText": "What is the fundamental property of proportion?",
    "options": [
      "A) Sum of means = Sum of extremes",
      "B) Product of means + Product of extremes",
      "C) Product of means = Product of extremes",
      "D) Difference of means = Difference of extremes"
    ],
    "correctAnswer": "C) Product of means = Product of extremes"
  },
  {
    "id": 16,
    "questionText": "If 10 pencils cost Rs. 150, what is the cost of 20 such pencils assuming direct proportion?",
    "options": [
      "A) Rs. 150",
      "B) Rs. 200",
      "C) Rs. 300",
      "D) Rs. 400"
    ],
    "correctAnswer": "C) Rs. 300"
  },
  {
    "id": 17,
    "questionText": "In a direct proportion, if one quantity increases, the other quantity:",
    "options": [
      "A) Increases",
      "B) Decreases",
      "C) Remains the same",
      "D) Becomes zero"
    ],
    "correctAnswer": "A) Increases"
  },
  {
    "id": 18,
    "questionText": "In an indirect proportion, if one quantity increases, the other quantity:",
    "options": [
      "A) Increases",
      "B) Decreases",
      "C) Remains the same",
      "D) Becomes infinite"
    ],
    "correctAnswer": "B) Decreases"
  },
  {
    "id": 19,
    "questionText": "If 10 men can complete a task in 24 days, how many days will 15 men take to complete the same task? (Inverse Proportion)",
    "options": [
      "A) 24 days",
      "B) 10 days",
      "C) 16 days (10*24 = 15*x, x = 240/15 = 16)",
      "D) 36 days"
    ],
    "correctAnswer": "C) 16 days (10*24 = 15*x, x = 240/15 = 16)"
  },
  {
    "id": 20,
    "questionText": "Convert 5 km to 950 m ratio to its simplest form.",
    "options": [
      "A) 5:950",
      "B) 5000:950",
      "C) 100:19",
      "D) 100:19 (5000:950, divide by 50)"
    ],
    "correctAnswer": "D) 100:19 (5000:950, divide by 50)"
  },
  {
    "id": 21,
    "questionText": "What is the ratio of 2 kg to 800 g in its simplest form?",
    "options": [
      "A) 2:800",
      "B) 2000:800",
      "C) 20:8",
      "D) 5:2 (2000:800, divide by 400)"
    ],
    "correctAnswer": "D) 5:2 (2000:800, divide by 400)"
  },
  {
    "id": 22,
    "questionText": "If a ratio is \"2 weeks to 21 days\", simplify it.",
    "options": [
      "A) 2:21",
      "B) 14:21",
      "C) 2:3 (14 days : 21 days = 2:3)",
      "D) 7:21"
    ],
    "correctAnswer": "C) 2:3 (14 days : 21 days = 2:3)"
  },
  {
    "id": 23,
    "questionText": "Increase 40 inches to 65 inches in 13 years, what is the new ratio?",
    "options": [
      "A) 40:65",
      "B) 13:8",
      "C) 8:13 (40/5 : 65/5 = 8:13)",
      "D) 65:40"
    ],
    "correctAnswer": "C) 8:13 (40/5 : 65/5 = 8:13)"
  },
  {
    "id": 24,
    "questionText": "Decrease 1200 in the ratio of 8:5.",
    "options": [
      "A) 1200 * 8/5 = 1920",
      "B) 1200 * 5/8 = 750",
      "C) 1200 * 5/13 = 461.54",
      "D) 1200 * 8/13 = 738.46"
    ],
    "correctAnswer": "B) 1200 * 5/8 = 750"
  },
  {
    "id": 25,
    "questionText": "What is the first term of the ratio called when it is larger than the second term, indicating an increase in ratio?",
    "options": [
      "A) Consequent",
      "B) Numerator (In fraction form, ratio a/b)",
      "C) Denominator",
      "D) Term"
    ],
    "correctAnswer": "B) Numerator (In fraction form, ratio a/b)"
  },
  {
    "id": 26,
    "questionText": "What is 60 km/hour if converted to meters per second?",
    "options": [
      "A) 60 × 1000 / 3600 = 16.67 m/s",
      "B) 60 × 1000 m/s",
      "C) 60 / 3600 m/s",
      "D) 60 × 3600 m/s"
    ],
    "correctAnswer": "A) 60 × 1000 / 3600 = 16.67 m/s"
  },
  {
    "id": 27,
    "questionText": "If an object covers equal distances in equal intervals of time, what kind of speed does it have?",
    "options": [
      "A) Average speed",
      "B) Variable speed",
      "C) Uniform speed",
      "D) Constant speed"
    ],
    "correctAnswer": "C) Uniform speed"
  },
  {
    "id": 28,
    "questionText": "Which of the following is NOT a unit rate?",
    "options": [
      "A) Miles per hour",
      "B) Unit rate (e.g. per second)",
      "C) Calories per serving",
      "D) Kilometers per day (80 days/54 km) (Unit rate is typically something per one unit)"
    ],
    "correctAnswer": "D) Kilometers per day (80 days/54 km) (Unit rate is typically something per one unit)"
  },
  {
    "id": 29,
    "questionText": "If 2 liters of milk cost Rs. 990, what is the price of 1 liter of milk?",
    "options": [
      "A) Rs. 990",
      "B) Rs. 1980",
      "C) Rs. 495",
      "D) Rs. 99"
    ],
    "correctAnswer": "C) Rs. 495"
  },
  {
    "id": 30,
    "questionText": "What is the ratio of 40 to 10 in simplest form?",
    "options": [
      "A) 40:10",
      "B) 4:1",
      "C) 10:40",
      "D) 1:4"
    ],
    "correctAnswer": "B) 4:1"
  },
  {
    "id": 31,
    "questionText": "In a proportion, the product of means equals the product of:",
    "options": [
      "A) Extremes",
      "B) Ratios",
      "C) Terms",
      "D) Numbers"
    ],
    "correctAnswer": "A) Extremes"
  },
  {
    "id": 32,
    "questionText": "What is the rule for finding the 3rd term in a given proportion if the 1st, 2nd, and 4th terms are known?",
    "options": [
      "A) (1st × 4th) / 2nd",
      "B) (1st × 4th) / 2nd (This is consistent with product of means = product of extremes)",
      "C) (2nd × 4th) / 1st",
      "D) (1st × 2nd) / 4th"
    ],
    "correctAnswer": "B) (1st × 4th) / 2nd (This is consistent with product of means = product of extremes)"
  },
  {
    "id": 33,
    "questionText": "If 2 kg of mangoes costs Rs. 240, what is the cost of one dozen oranges? (This question cannot be answered from the given info.)",
    "options": [
      "A) Rs. 120",
      "B) Rs. 240",
      "C) Rs. 60",
      "D) Cannot be determined from the provided information."
    ],
    "correctAnswer": "D) Cannot be determined from the provided information."
  },
  {
    "id": 34,
    "questionText": "If a car covers 400 km in 4 hours, how much fuel consumption is it per km? (This is an incomplete question, as fuel consumption is not given.)",
    "options": [
      "A) 100 km/L",
      "B) 4 L/km",
      "C) Not enough information",
      "D) 100 km/hour"
    ],
    "correctAnswer": "C) Not enough information"
  },
  {
    "id": 35,
    "questionText": "How is \"average speed\" calculated?",
    "options": [
      "A) Total distance covered / Total time taken",
      "B) Sum of all speeds / Number of speeds",
      "C) Distance - Time",
      "D) Distance + Time"
    ],
    "correctAnswer": "A) Total distance covered / Total time taken"
  },
  {
    "id": 36,
    "questionText": "If a car traveled 630 km in 8 hours, what was its average speed?",
    "options": [
      "A) 70 km/h",
      "B) 75 km/h",
      "C) 78.75 km/h (630/8)",
      "D) 80 km/h"
    ],
    "correctAnswer": "C) 78.75 km/h (630/8)"
  },
  {
    "id": 37,
    "questionText": "What is 5:10::9:18 an example of?",
    "options": [
      "A) Ratio",
      "B) Proportion",
      "C) Rate",
      "D) Fraction"
    ],
    "correctAnswer": "B) Proportion"
  },
  {
    "id": 38,
    "questionText": "What is the definition of direct proportion?",
    "options": [
      "A) Two quantities are said to be in direct proportion if increase/decrease in one causes decrease/increase in other.",
      "B) Two quantities are said to be in direct proportion if increase/decrease in one causes increase/decrease in other quantity in the same ratio.",
      "C) Two quantities are in direct proportion if their product is constant.",
      "D) Two quantities are in direct proportion if their sum is constant."
    ],
    "correctAnswer": "B) Two quantities are said to be in direct proportion if increase/decrease in one causes increase/decrease in other quantity in the same ratio."
  },
  {
    "id": 39,
    "questionText": "What is the definition of indirect/inverse proportion?",
    "options": [
      "A) Two quantities are said to be in indirect proportion if increase/decrease in one causes increase/decrease in other.",
      "B) Two quantities are said to be in indirect proportion if increase/decrease in one causes decrease/increase in other quantity in the same ratio.",
      "C) Two quantities are in indirect proportion if their ratio is constant.",
      "D) Two quantities are in indirect proportion if their sum is constant."
    ],
    "correctAnswer": "B) Two quantities are said to be in indirect proportion if increase/decrease in one causes decrease/increase in other quantity in the same ratio."
  },
  {
    "id": 40,
    "questionText": "If the first term in ratio is known as antecedent, what is the second term known as?",
    "options": [
      "A) Successor",
      "B) Consequent",
      "C) Precedent",
      "D) Follower"
    ],
    "correctAnswer": "B) Consequent"
  },
  {
    "id": 41,
    "questionText": "What is the standard way to write a ratio?",
    "options": [
      "A) a + b",
      "B) a - b",
      "C) a × b",
      "D) a : b or a/b"
    ],
    "correctAnswer": "D) a : b or a/b"
  },
  {
    "id": 42,
    "questionText": "If 1 kg rice was Rs. 120 and now it is Rs. 180, what is the increase in price?",
    "options": [
      "A) Rs. 60",
      "B) 50%",
      "C) 180:120",
      "D) The increase is Rs. 60. The ratio of increase is 180/120 = 3/2."
    ],
    "correctAnswer": "D) The increase is Rs. 60. The ratio of increase is 180/120 = 3/2."
  },
  {
    "id": 43,
    "questionText": "Increase 800 in the ratio of 7:10.",
    "options": [
      "A) 800 × 7/10 = 560",
      "B) 800 × 10/7 = 1142.85",
      "C) 800 × (10/7) = 1142.857 (Since it's \"increase in ratio of 7:10\", it means from 7 parts it becomes 10 parts, so multiply by 10/7. The example on page 48 uses this interpretation.)",
      "D) 800 + (800 × 7/10) = 1360"
    ],
    "correctAnswer": "C) 800 × (10/7) = 1142.857 (Since it's \"increase in ratio of 7:10\", it means from 7 parts it becomes 10 parts, so multiply by 10/7. The example on page 48 uses this interpretation.)"
  },
  {
    "id": 44,
    "questionText": "If the length of a ribbon was originally 30 cm and it was reduced in the ratio of 3:5, what is its length now?",
    "options": [
      "A) 30 × 5/3 = 50 cm",
      "B) 30 × 3/5 = 18 cm (Reduced means 3 parts out of 5, or 3/5 of original)",
      "C) 30 + (30 × 3/5) = 48 cm",
      "D) 30 - (30 × 3/5) = 12 cm"
    ],
    "correctAnswer": "B) 30 × 3/5 = 18 cm (Reduced means 3 parts out of 5, or 3/5 of original)"
  },
  {
    "id": 45,
    "questionText": "In a bus trip from Lahore to Islamabad, if Ali left at 8:00 a.m. and arrived 5 hours later, what time did he reach?",
    "options": [
      "A) 12:00 a.m.",
      "B) 1:00 p.m.",
      "C) 1:00 p.m.",
      "D) 3:00 p.m."
    ],
    "correctAnswer": "C) 1:00 p.m."
  },
  {
    "id": 46,
    "questionText": "If 1 m = 100 cm, then 15 km = ______ m.",
    "options": [
      "A) 1500 m",
      "B) 150 m",
      "C) 15000 m",
      "D) 150000 m"
    ],
    "correctAnswer": "C) 15000 m"
  },
  {
    "id": 47,
    "questionText": "How many minutes are in 3 hours 20 minutes?",
    "options": [
      "A) 320 minutes",
      "B) 180 minutes",
      "C) 200 minutes (3*60 + 20)",
      "D) 120 minutes"
    ],
    "correctAnswer": "C) 200 minutes (3*60 + 20)"
  },
  {
    "id": 48,
    "questionText": "What is the number of seconds in 1 minute?",
    "options": [
      "A) 100",
      "B) 60",
      "C) 3600",
      "D) 10"
    ],
    "correctAnswer": "B) 60"
  },
  {
    "id": 49,
    "questionText": "What is the number of seconds in 1 hour?",
    "options": [
      "A) 60",
      "B) 100",
      "C) 600",
      "D) 3600"
    ],
    "correctAnswer": "D) 3600"
  },
  {
    "id": 50,
    "questionText": "What is a \"conversion of units\"?",
    "options": [
      "A) Changing the meaning of a unit.",
      "B) Expressing a quantity in different units.",
      "C) Adding different units together.",
      "D) Removing units from a quantity."
    ],
    "correctAnswer": "B) Expressing a quantity in different units."
  }
],
  "Financial Arithmetic": [
  {
    "id": 1,
    "questionText": "What is the full form of S.P. in financial arithmetic?",
    "options": [
      "A) Standard Price",
      "B) Selling Point",
      "C) Selling Price",
      "D) Sale Price"
    ],
    "correctAnswer": "C) Selling Price"
  },
  {
    "id": 2,
    "questionText": "What is the full form of C.P. in financial arithmetic?",
    "options": [
      "A) Calculated Price",
      "B) Company Price",
      "C) Cost Price",
      "D) Current Price"
    ],
    "correctAnswer": "C) Cost Price"
  },
  {
    "id": 3,
    "questionText": "How is Profit calculated?",
    "options": [
      "A) Cost Price - Selling Price",
      "B) Selling Price - Cost Price",
      "C) Cost Price + Selling Price",
      "D) Selling Price / Cost Price"
    ],
    "correctAnswer": "B) Selling Price - Cost Price"
  },
  {
    "id": 4,
    "questionText": "How is Loss calculated?",
    "options": [
      "A) Cost Price - Selling Price",
      "B) Selling Price - Cost Price",
      "C) Cost Price + Selling Price",
      "D) Selling Price / Cost Price"
    ],
    "correctAnswer": "A) Cost Price - Selling Price"
  },
  {
    "id": 5,
    "questionText": "What does it mean if S.P. > C.P.?",
    "options": [
      "A) There is a loss.",
      "B) There is a profit.",
      "C) There is no profit or loss.",
      "D) The item is discounted."
    ],
    "correctAnswer": "B) There is a profit."
  },
  {
    "id": 6,
    "questionText": "What does it mean if S.P. < C.P.?",
    "options": [
      "A) There is a loss.",
      "B) There is a profit.",
      "C) There is no profit or loss.",
      "D) The item is taxed."
    ],
    "correctAnswer": "A) There is a loss."
  },
  {
    "id": 7,
    "questionText": "How is Profit Percentage calculated?",
    "options": [
      "A) (Profit / Selling Price) × 100",
      "B) (Profit / Cost Price) × 100",
      "C) (Cost Price / Profit) × 100",
      "D) (Selling Price / Profit) × 100"
    ],
    "correctAnswer": "B) (Profit / Cost Price) × 100"
  },
  {
    "id": 8,
    "questionText": "How is Loss Percentage calculated?",
    "options": [
      "A) (Loss / Selling Price) × 100",
      "B) (Loss / Cost Price) × 100",
      "C) (Cost Price / Loss) × 100",
      "D) (Selling Price / Loss) × 100"
    ],
    "correctAnswer": "B) (Loss / Cost Price) × 100"
  },
  {
    "id": 9,
    "questionText": "If a laptop cost Rs. 65000 (C.P.) and was sold for Rs. 66000 (S.P.), what is the profit?",
    "options": [
      "A) Rs. 100",
      "B) Rs. 1000",
      "C) Rs. 65000",
      "D) Rs. 66000"
    ],
    "correctAnswer": "B) Rs. 1000"
  },
  {
    "id": 10,
    "questionText": "If an item is bought for Rs. 12500 (C.P.) and sold for Rs. 10000 (S.P.), what is the discount given?",
    "options": [
      "A) Rs. 10000",
      "B) Rs. 12500",
      "C) Rs. 2500 (Marked price - Selling price)",
      "D) Rs. 22500"
    ],
    "correctAnswer": "C) Rs. 2500 (Marked price - Selling price)"
  },
  {
    "id": 11,
    "questionText": "What is Income Tax?",
    "options": [
      "A) Tax on goods and services.",
      "B) Tax imposed by the government on the income of individuals.",
      "C) Tax on property.",
      "D) Tax on sales."
    ],
    "correctAnswer": "B) Tax imposed by the government on the income of individuals."
  },
  {
    "id": 12,
    "questionText": "What is Property Tax?",
    "options": [
      "A) A tax imposed by government on properties such as house, land, and shops.",
      "B) A tax on income.",
      "C) A tax on sales.",
      "D) A tax on goods."
    ],
    "correctAnswer": "A) A tax imposed by government on properties such as house, land, and shops."
  },
  {
    "id": 13,
    "questionText": "What is General Sales Tax (GST)?",
    "options": [
      "A) A tax on income.",
      "B) A tax on property.",
      "C) A tax on expensive items.",
      "D) A tax on goods and services provided by sellers."
    ],
    "correctAnswer": "D) A tax on goods and services provided by sellers."
  },
  {
    "id": 14,
    "questionText": "What is Value Added Tax (VAT)?",
    "options": [
      "A) A tax levied on the final sale price.",
      "B) A tax on income only.",
      "C) A tax imposed during production or distribution at each stage.",
      "D) A tax that replaces GST."
    ],
    "correctAnswer": "C) A tax imposed during production or distribution at each stage."
  },
  {
    "id": 15,
    "questionText": "What is Commission?",
    "options": [
      "A) An additional charge on a purchase.",
      "B) A tax on services.",
      "C) An amount of money paid to an employee or agent for services.",
      "D) A fixed salary."
    ],
    "correctAnswer": "C) An amount of money paid to an employee or agent for services."
  },
  {
    "id": 16,
    "questionText": "How is Zakat defined in Islam?",
    "options": [
      "A) Voluntary charity.",
      "B) One of the five pillars of Islam, mandatory charity on wealth.",
      "C) Tax on agriculture.",
      "D) Interest on savings."
    ],
    "correctAnswer": "B) One of the five pillars of Islam, mandatory charity on wealth."
  },
  {
    "id": 17,
    "questionText": "What is the rate of Zakat?",
    "options": [
      "A) 5%",
      "B) 10%",
      "C) 2.5%",
      "D) 15%"
    ],
    "correctAnswer": "C) 2.5%"
  },
  {
    "id": 18,
    "questionText": "On what assets is Zakat typically paid?",
    "options": [
      "A) Only cash.",
      "B) Only property.",
      "C) Gold, silver, commercial goods, and cash.",
      "D) Only agricultural produce."
    ],
    "correctAnswer": "C) Gold, silver, commercial goods, and cash."
  },
  {
    "id": 19,
    "questionText": "What is Nisab for Zakat?",
    "options": [
      "A) The amount of profit.",
      "B) The total value of all assets.",
      "C) The minimum amount of annual savings on which Zakat has to be paid.",
      "D) The amount of tax."
    ],
    "correctAnswer": "C) The minimum amount of annual savings on which Zakat has to be paid."
  },
  {
    "id": 20,
    "questionText": "What is Ushr?",
    "options": [
      "A) Tax on property.",
      "B) Income tax.",
      "C) Agricultural tax imposed by government on land.",
      "D) Sales tax."
    ],
    "correctAnswer": "C) Agricultural tax imposed by government on land."
  },
  {
    "id": 21,
    "questionText": "What are the two rates of Ushr, based on the irrigation source?",
    "options": [
      "A) 2.5% and 5%",
      "B) 10% (natural sources) and 5% (artificial sources)",
      "C) 15% and 20%",
      "D) 7.5% and 12.5%"
    ],
    "correctAnswer": "B) 10% (natural sources) and 5% (artificial sources)"
  },
  {
    "id": 22,
    "questionText": "If profit is Rs. 1000 and Cost Price is Rs. 65000, what is the profit percentage?",
    "options": [
      "A) 1.5%",
      "B) 1.54% (approx) (1000/65000 * 100 = 1.538%)",
      "C) 2.5%",
      "D) 10%"
    ],
    "correctAnswer": "B) 1.54% (approx) (1000/65000 * 100 = 1.538%)"
  },
  {
    "id": 23,
    "questionText": "If the C.P. of a watch is Rs. 1200 and S.P. is Rs. 1500, what is the profit percentage?",
    "options": [
      "A) 20%",
      "B) 25% ((1500-1200)/1200 * 100 = 300/1200 * 100 = 1/4 * 100 = 25%)",
      "C) 15%",
      "D) 30%"
    ],
    "correctAnswer": "B) 25% ((1500-1200)/1200 * 100 = 300/1200 * 100 = 1/4 * 100 = 25%)"
  },
  {
    "id": 24,
    "questionText": "If the C.P. of a watch is Rs. 1500 and S.P. is Rs. 1200, what is the loss percentage?",
    "options": [
      "A) 20%",
      "B) 20% ((1500-1200)/1500 * 100 = 300/1500 * 100 = 1/5 * 100 = 20%)",
      "C) 25%",
      "D) 15%"
    ],
    "correctAnswer": "B) 20% ((1500-1200)/1500 * 100 = 300/1500 * 100 = 1/5 * 100 = 20%)"
  },
  {
    "id": 25,
    "questionText": "What is the formula for Discount Percentage?",
    "options": [
      "A) (Discount / Selling Price) × 100",
      "B) (Discount / Marked Price) × 100",
      "C) (Discount / Cost Price) × 100",
      "D) (Marked Price / Discount) × 100"
    ],
    "correctAnswer": "B) (Discount / Marked Price) × 100"
  },
  {
    "id": 26,
    "questionText": "If a marked price of an electric heater is Rs. 4800 and it is sold for Rs. 4080, what is the discount percentage?",
    "options": [
      "A) 10%",
      "B) 15% ((4800-4080)/4800 * 100 = 720/4800 * 100 = 15%)",
      "C) 20%",
      "D) 5%"
    ],
    "correctAnswer": "B) 15% ((4800-4080)/4800 * 100 = 720/4800 * 100 = 15%)"
  },
  {
    "id": 27,
    "questionText": "Who is responsible for collecting income tax in Pakistan?",
    "options": [
      "A) Provincial Tax Board",
      "B) Federal Board of Revenue (FBR)",
      "C) Local Government",
      "D) Banks"
    ],
    "correctAnswer": "B) Federal Board of Revenue (FBR)"
  },
  {
    "id": 28,
    "questionText": "If Ahmad's annual income is Rs. 800000, and the exempted amount is Rs. 600000, what is his taxable income?",
    "options": [
      "A) Rs. 800000",
      "B) Rs. 600000",
      "C) Rs. 200000",
      "D) Rs. 1400000"
    ],
    "correctAnswer": "C) Rs. 200000"
  },
  {
    "id": 29,
    "questionText": "If the rate of income tax is 2.5% on taxable income, and taxable income is Rs. 360000, what is the income tax?",
    "options": [
      "A) Rs. 7200",
      "B) Rs. 8000",
      "C) Rs. 9000 (360000 * 0.025)",
      "D) Rs. 10000"
    ],
    "correctAnswer": "C) Rs. 9000 (360000 * 0.025)"
  },
  {
    "id": 30,
    "questionText": "If the price of a motorcycle is Rs. 110000 and GST is 17%, what is the amount of GST?",
    "options": [
      "A) Rs. 11000",
      "B) Rs. 17000",
      "C) Rs. 18700 (110000 * 0.17)",
      "D) Rs. 10000"
    ],
    "correctAnswer": "C) Rs. 18700 (110000 * 0.17)"
  },
  {
    "id": 31,
    "questionText": "If the price of 10 fans is Rs. 60000 and GST is 17%, what is the total price payable?",
    "options": [
      "A) Rs. 60000",
      "B) Rs. 10200",
      "C) Rs. 70200 (60000 + 60000*0.17)",
      "D) Rs. 50000"
    ],
    "correctAnswer": "C) Rs. 70200 (60000 + 60000*0.17)"
  },
  {
    "id": 32,
    "questionText": "If a property sells for Rs. 4000000 and the commission rate is 2.5%, what is the commission amount?",
    "options": [
      "A) Rs. 40000",
      "B) Rs. 80000",
      "C) Rs. 100000 (4000000 * 0.025)",
      "D) Rs. 150000"
    ],
    "correctAnswer": "C) Rs. 100000 (4000000 * 0.025)"
  },
  {
    "id": 33,
    "questionText": "For calculation of Zakat, what is the equivalent amount of silver in tola?",
    "options": [
      "A) 7.5 tola",
      "B) 52.5 tola",
      "C) 612.36 grams or 52.5 tola (Note: The source has a discrepancy, stating 7.5 tola gold and 52.5 tola silver, but then giving the calculation for 52.5 tola silver as 612.36 grams. The 7.5 tola gold is 87.48 grams. I'll use 52.5 tola as the silver nisab.)",
      "D) 87.48 grams"
    ],
    "correctAnswer": "C) 612.36 grams or 52.5 tola (Note: The source has a discrepancy, stating 7.5 tola gold and 52.5 tola silver, but then giving the calculation for 52.5 tola silver as 612.36 grams. The 7.5 tola gold is 87.48 grams. I'll use 52.5 tola as the silver nisab.)"
  },
  {
    "id": 34,
    "questionText": "If Aslam saved Rs. 200000 for one year, what is the Zakat due?",
    "options": [
      "A) Rs. 2000",
      "B) Rs. 4000",
      "C) Rs. 5000 (200000 * 0.025)",
      "D) Rs. 10000"
    ],
    "correctAnswer": "C) Rs. 5000 (200000 * 0.025)"
  },
  {
    "id": 35,
    "questionText": "If Sadia had Rs. 15000 in gold and the Zakat rate is 2.5%, what is the Zakat?",
    "options": [
      "A) Rs. 150",
      "B) Rs. 250",
      "C) Rs. 375 (15000 * 0.025)",
      "D) Rs. 500"
    ],
    "correctAnswer": "C) Rs. 375 (15000 * 0.025)"
  },
  {
    "id": 36,
    "questionText": "If Ahmad owns a house worth Rs. 450000 and property tax rate is 4.5%, what is the amount of tax?",
    "options": [
      "A) Rs. 18000",
      "B) Rs. 19500",
      "C) Rs. 20250 (450000 * 0.045)",
      "D) Rs. 21000"
    ],
    "correctAnswer": "C) Rs. 20250 (450000 * 0.045)"
  },
  {
    "id": 37,
    "questionText": "If Aslam owns a property of Rs. 22000 and the rate of tax is 2%, what is the tax?",
    "options": [
      "A) Rs. 220",
      "B) Rs. 330",
      "C) Rs. 440 (22000 * 0.02)",
      "D) Rs. 550"
    ],
    "correctAnswer": "C) Rs. 440 (22000 * 0.02)"
  },
  {
    "id": 38,
    "questionText": "What type of tax is levied on the production and distribution of goods and services at each stage?",
    "options": [
      "A) Income Tax",
      "B) Property Tax",
      "C) Value Added Tax (VAT)",
      "D) Zakat"
    ],
    "correctAnswer": "C) Value Added Tax (VAT)"
  },
  {
    "id": 39,
    "questionText": "What is the rate of ushr for natural sources of irrigation?",
    "options": [
      "A) 2.5%",
      "B) 5%",
      "C) 10%",
      "D) 20%"
    ],
    "correctAnswer": "C) 10%"
  },
  {
    "id": 40,
    "questionText": "What is the rate of ushr for artificial sources of irrigation (like tube-wells)?",
    "options": [
      "A) 2.5%",
      "B) 5%",
      "C) 10%",
      "D) 20%"
    ],
    "correctAnswer": "B) 5%"
  },
  {
    "id": 41,
    "questionText": "If 2300 kg onion is irrigated by natural source, what is the amount of ushr at 10%?",
    "options": [
      "A) 23 kg",
      "B) 230 kg",
      "C) 460 kg",
      "D) 115 kg"
    ],
    "correctAnswer": "B) 230 kg"
  },
  {
    "id": 42,
    "questionText": "If 1400 kg ginger is irrigated by artificial source, what is the amount of ushr at 5%?",
    "options": [
      "A) 14 kg",
      "B) 70 kg",
      "C) 140 kg",
      "D) 28 kg"
    ],
    "correctAnswer": "B) 70 kg"
  },
  {
    "id": 43,
    "questionText": "What is the purpose of Financial Arithmetic?",
    "options": [
      "A) To study geometry",
      "B) To solve algebraic equations",
      "C) To solve real-world problems involving profit, loss, discount, tax, zakat, and ushr.",
      "D) To manage data"
    ],
    "correctAnswer": "C) To solve real-world problems involving profit, loss, discount, tax, zakat, and ushr."
  },
  {
    "id": 44,
    "questionText": "Which term describes the original price of an item before any discount or profit?",
    "options": [
      "A) Selling Price",
      "B) Discount Price",
      "C) Cost Price",
      "D) Marked Price (implied by Discount definition)"
    ],
    "correctAnswer": "D) Marked Price (implied by Discount definition)"
  },
  {
    "id": 45,
    "questionText": "If a shopkeeper purchases a bag for Rs. 500 and sells it for Rs. 550, what is the profit?",
    "options": [
      "A) Rs. 5",
      "B) Rs. 10",
      "C) Rs. 50",
      "D) Rs. 100"
    ],
    "correctAnswer": "C) Rs. 50"
  },
  {
    "id": 46,
    "questionText": "If a shopkeeper purchases a bag for Rs. 500 and sells it for Rs. 450, what is the loss?",
    "options": [
      "A) Rs. 5",
      "B) Rs. 10",
      "C) Rs. 50",
      "D) Rs. 100"
    ],
    "correctAnswer": "C) Rs. 50"
  },
  {
    "id": 47,
    "questionText": "What does discount mean?",
    "options": [
      "A) An increase in price.",
      "B) The original price.",
      "C) Reduction offered on the marked price.",
      "D) Extra charges."
    ],
    "correctAnswer": "C) Reduction offered on the marked price."
  },
  {
    "id": 48,
    "questionText": "What are the pillars of Islam, one of which Zakat is a part of?",
    "options": [
      "A) 3",
      "B) 4",
      "C) 5",
      "D) 6"
    ],
    "correctAnswer": "C) 5"
  },
  {
    "id": 49,
    "questionText": "What is the total income of Ahmad if his annual income is Rs. 800000, and exempted is Rs. 600000?",
    "options": [
      "A) Gross Income is Rs. 800000.",
      "B) Taxable income is Rs. 200000.",
      "C) Income after tax is Rs. 791000.",
      "D) Exempted income is Rs. 600000."
    ],
    "correctAnswer": "A) Gross Income is Rs. 800000."
  },
  {
    "id": 50,
    "questionText": "What type of goods and services is GST typically applied to?",
    "options": [
      "A) Only luxury items.",
      "B) Only essential goods.",
      "C) Most goods and services.",
      "D) Only services."
    ],
    "correctAnswer": "C) Most goods and services."
  }
],
  "Squares and Square Roots": [
  {
    "id": 1,
    "questionText": "What is the square of a number 'a'?",
    "options": [
      "a × a",
      "a + a",
      "a / a",
      "a - a"
    ],
    "correctAnswer": "a × a"
  },
  {
    "id": 2,
    "questionText": "What is the square of 6?",
    "options": [
      "12",
      "6",
      "36",
      "1"
    ],
    "correctAnswer": "36"
  },
  {
    "id": 3,
    "questionText": "What is the square of 5?",
    "options": [
      "10",
      "5",
      "25",
      "0"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 4,
    "questionText": "A perfect square is a natural number which is the square of a:",
    "options": [
      "Rational number",
      "Decimal number",
      "Natural number",
      "Negative integer"
    ],
    "correctAnswer": "Natural number"
  },
  {
    "id": 5,
    "questionText": "What is the square of 1 (1-squared)?",
    "options": [
      "1",
      "2",
      "0",
      "10"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 6,
    "questionText": "What is the square of 2 (2-squared)?",
    "options": [
      "2",
      "4",
      "8",
      "1"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 7,
    "questionText": "What is the square of 3 (3-squared)?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 8,
    "questionText": "What is the square of 4 (4-squared)?",
    "options": [
      "4",
      "8",
      "16",
      "20"
    ],
    "correctAnswer": "16"
  },
  {
    "id": 9,
    "questionText": "What is the square of 5 (5-squared)?",
    "options": [
      "5",
      "10",
      "25",
      "30"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 10,
    "questionText": "The square of an even number is always:",
    "options": [
      "Odd",
      "Even",
      "Prime",
      "Decimal"
    ],
    "correctAnswer": "Even"
  },
  {
    "id": 11,
    "questionText": "The square of an odd number is always:",
    "options": [
      "Odd",
      "Even",
      "Prime",
      "Decimal"
    ],
    "correctAnswer": "Odd"
  },
  {
    "id": 12,
    "questionText": "A number ending with 1 or 9, its square will end with:",
    "options": [
      "0",
      "5",
      "1",
      "9"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 13,
    "questionText": "A number ending with 4 or 6, its square will end with:",
    "options": [
      "0",
      "5",
      "1",
      "6"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 14,
    "questionText": "The square of a proper fraction is _____ than the given fraction.",
    "options": [
      "Less",
      "Greater",
      "Equal",
      "Zero"
    ],
    "correctAnswer": "Less"
  },
  {
    "id": 15,
    "questionText": "The square of a decimal number less than 1 is _____ than the given decimal number.",
    "options": [
      "Greater",
      "Equal",
      "Smaller",
      "Zero"
    ],
    "correctAnswer": "Smaller"
  },
  {
    "id": 16,
    "questionText": "What is the square root of a positive number?",
    "options": [
      "That positive number whose square is the given positive number.",
      "The number when multiplied by 2 gives the original number.",
      "The number that is equal to half of the original number.",
      "The inverse of addition."
    ],
    "correctAnswer": "That positive number whose square is the given positive number."
  },
  {
    "id": 17,
    "questionText": "What is the symbol for square root?",
    "options": [
      "×",
      "÷",
      "√",
      "+"
    ],
    "correctAnswer": "√"
  },
  {
    "id": 18,
    "questionText": "What are the two methods mentioned for finding the square root of a positive number?",
    "options": [
      "Addition and Subtraction",
      "Multiplication and Division",
      "Prime Factorisation Method and Long Division Method",
      "Estimation and Approximation"
    ],
    "correctAnswer": "Prime Factorisation Method and Long Division Method"
  },
  {
    "id": 19,
    "questionText": "Find the square root of 49 using the prime factorization method.",
    "options": [
      "4",
      "6",
      "7 (7x7=49)",
      "8"
    ],
    "correctAnswer": "7 (7x7=49)"
  },
  {
    "id": 20,
    "questionText": "Find the square root of 64 using the prime factorization method.",
    "options": [
      "8 (2x2x2x2x2x2 = 64; √64 = 8)",
      "4",
      "16",
      "6"
    ],
    "correctAnswer": "8 (2x2x2x2x2x2 = 64; √64 = 8)"
  },
  {
    "id": 21,
    "questionText": "What is the area of a square shaped park if its side is 36m?",
    "options": [
      "72 m²",
      "144 m²",
      "1296 m² (36x36)",
      "1296 m"
    ],
    "correctAnswer": "1296 m² (36x36)"
  },
  {
    "id": 22,
    "questionText": "If the area of a square is 900 m², what is the length of its side?",
    "options": [
      "300 m",
      "30 m (√900)",
      "90 m",
      "3000 m"
    ],
    "correctAnswer": "30 m (√900)"
  },
  {
    "id": 23,
    "questionText": "Find the square root of 289 by division method.",
    "options": [
      "17",
      "13",
      "19",
      "23"
    ],
    "correctAnswer": "17"
  },
  {
    "id": 24,
    "questionText": "Find the square root of 0.49.",
    "options": [
      "0.07",
      "0.7",
      "0.7",
      "0.049"
    ],
    "correctAnswer": "0.7"
  },
  {
    "id": 25,
    "questionText": "Find the square root of 625.",
    "options": [
      "15",
      "25",
      "35",
      "45"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 26,
    "questionText": "What is the square of an improper fraction (e.g. 5/3)?",
    "options": [
      "It is less than the original fraction.",
      "It is greater than the original fraction. (25/9 = 2.77 > 5/3 = 1.67)",
      "It is equal to the original fraction.",
      "It is always a whole number."
    ],
    "correctAnswer": "It is greater than the original fraction. (25/9 = 2.77 > 5/3 = 1.67)"
  },
  {
    "id": 27,
    "questionText": "Which of the following numbers would have a square ending in 0?",
    "options": [
      "103",
      "115",
      "120",
      "131"
    ],
    "correctAnswer": "120"
  },
  {
    "id": 28,
    "questionText": "What is the minimum number of digits in the square of a 3-digit number?",
    "options": [
      "3",
      "5 (100^2 = 10000)",
      "6",
      "4"
    ],
    "correctAnswer": "5 (100^2 = 10000)"
  },
  {
    "id": 29,
    "questionText": "What is the maximum number of digits in the square of a 3-digit number?",
    "options": [
      "5",
      "6 (999^2 = 998001)",
      "7",
      "8"
    ],
    "correctAnswer": "6 (999^2 = 998001)"
  },
  {
    "id": 30,
    "questionText": "The square root of a number, when multiplied by itself, gives:",
    "options": [
      "Half the number",
      "Twice the number",
      "The original number",
      "Zero"
    ],
    "correctAnswer": "The original number"
  },
  {
    "id": 31,
    "questionText": "How can you identify if a natural number is a perfect square?",
    "options": [
      "It ends in 2, 3, 7, or 8.",
      "It can be expressed as the square of another natural number.",
      "It is always an even number.",
      "It is always an odd number."
    ],
    "correctAnswer": "It can be expressed as the square of another natural number."
  },
  {
    "id": 32,
    "questionText": "Which of the following is NOT a perfect square?",
    "options": [
      "1",
      "4",
      "9",
      "7"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 33,
    "questionText": "If you are finding the square root of a decimal number by the division method, what should you do with the decimal point?",
    "options": [
      "Ignore it.",
      "Move it to the end.",
      "Place it in the quotient when the integral part is exhausted.",
      "Multiply by 100."
    ],
    "correctAnswer": "Place it in the quotient when the integral part is exhausted."
  },
  {
    "id": 34,
    "questionText": "The square of 0.15 is:",
    "options": [
      "0.15",
      "0.225",
      "0.0225 (0.15 x 0.15)",
      "2.25"
    ],
    "correctAnswer": "0.0225 (0.15 x 0.15)"
  },
  {
    "id": 35,
    "questionText": "The source mentions that \"Perfect squares are used frequently in math. Try to remember these familiar numbers so that you can recognize them as they are used in most of the math problems.\" This implies:",
    "options": [
      "Memorizing all numbers is important.",
      "Only squares of small numbers are useful.",
      "Recognition of perfect squares simplifies problem-solving.",
      "Squares are only for advanced math."
    ],
    "correctAnswer": "Recognition of perfect squares simplifies problem-solving."
  },
  {
    "id": 36,
    "questionText": "Which of the following is the square root of 196/400?",
    "options": [
      "14/10",
      "14/20",
      "7/10 (√196 / √400 = 14/20 = 7/10)",
      "7/20"
    ],
    "correctAnswer": "7/10 (√196 / √400 = 14/20 = 7/10)"
  },
  {
    "id": 37,
    "questionText": "If you use the prime factorization method to find the square root of a number, how do you pair the prime factors?",
    "options": [
      "In groups of three",
      "In pairs",
      "Individually",
      "In groups of four"
    ],
    "correctAnswer": "In pairs"
  },
  {
    "id": 38,
    "questionText": "What is the first step in the long division method for finding a square root?",
    "options": [
      "Bring down the next pair of numbers.",
      "Place a bar over the pair of numbers starting from the ones place.",
      "Multiply the divisor by the new digit.",
      "Double the quotient."
    ],
    "correctAnswer": "Place a bar over the pair of numbers starting from the ones place."
  },
  {
    "id": 39,
    "questionText": "If the area of a rectangular field is 19.36 m², and its length is 4 times its width, what is the length of the field?",
    "options": [
      "2.2 m",
      "4.4 m",
      "8.8 m",
      "8.8 m (Area = LW = 4WW = 4W^2; 19.36 = 4W^2; W^2 = 4.84; W = 2.2; L = 4*2.2 = 8.8)"
    ],
    "correctAnswer": "8.8 m (Area = LW = 4WW = 4W^2; 19.36 = 4W^2; W^2 = 4.84; W = 2.2; L = 4*2.2 = 8.8)"
  },
  {
    "id": 40,
    "questionText": "The square root of a negative number is: [Not explicitly in sources, but implied by context of positive number square roots]",
    "options": [
      "Positive",
      "Negative",
      "Not a real number (Informal phrasing for this level)",
      "Zero"
    ],
    "correctAnswer": "Not a real number (Informal phrasing for this level)"
  },
  {
    "id": 41,
    "questionText": "What is 784 in prime factorization method?",
    "options": [
      "2^2 × 7^2",
      "2^4 × 7^2 (784 = 2x2x2x2x7x7)",
      "2 × 7",
      "2^3 × 7^3"
    ],
    "correctAnswer": "2^4 × 7^2 (784 = 2x2x2x2x7x7)"
  },
  {
    "id": 42,
    "questionText": "How many numbers between 1 and 100 are perfect squares?",
    "options": [
      "5",
      "7",
      "9",
      "10 (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)"
    ],
    "correctAnswer": "10 (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)"
  },
  {
    "id": 43,
    "questionText": "What is the square of 11?",
    "options": [
      "11",
      "22",
      "121",
      "100"
    ],
    "correctAnswer": "121"
  },
  {
    "id": 44,
    "questionText": "If a number ends with 0, its square will end with:",
    "options": [
      "00",
      "10",
      "50",
      "Two zeros (00) (as in 10^2=100)"
    ],
    "correctAnswer": "Two zeros (00) (as in 10^2=100)"
  },
  {
    "id": 45,
    "questionText": "The square of an even number is always divisible by:",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 46,
    "questionText": "What is the purpose of \"Students' Learning Outcomes\" in this sub-domain?",
    "options": [
      "To provide a summary of the chapter.",
      "To list what students will be able to do after studying the sub-domain.",
      "To introduce the main concepts.",
      "To provide examples."
    ],
    "correctAnswer": "To list what students will be able to do after studying the sub-domain."
  },
  {
    "id": 47,
    "questionText": "How do you recognize and calculate squares of numbers up to 3-digits?",
    "options": [
      "By adding the number to itself.",
      "By multiplying the number by itself.",
      "By dividing the number by 2.",
      "By taking the square root."
    ],
    "correctAnswer": "By multiplying the number by itself."
  },
  {
    "id": 48,
    "questionText": "What kind of numbers are perfect squares?",
    "options": [
      "Rational numbers",
      "Decimal numbers",
      "Natural numbers",
      "Negative numbers"
    ],
    "correctAnswer": "Natural numbers"
  },
  {
    "id": 49,
    "questionText": "What type of problems are solved using the concepts of squares and square roots?",
    "options": [
      "Algebraic problems",
      "Financial problems",
      "Real-world problems",
      "Statistical problems"
    ],
    "correctAnswer": "Real-world problems"
  },
  {
    "id": 50,
    "questionText": "What is the square of a prime number?",
    "options": [
      "Always a prime number.",
      "A composite number (unless the prime number is 1, but 1 is not prime).",
      "Always an even number.",
      "Always an odd number."
    ],
    "correctAnswer": "A composite number (unless the prime number is 1, but 1 is not prime)."
  }
],
  "Number Sequence and Patterns": [
  {
    "id": 1,
    "questionText": "What is a number sequence?",
    "options": [
      "A random collection of numbers.",
      "An ordered list of numbers.",
      "A list of numbers with no discernible pattern.",
      "A diagram showing numbers."
    ],
    "correctAnswer": "An ordered list of numbers."
  },
  {
    "id": 2,
    "questionText": "In the sequence 1, 3, 5, ..., what is the term-to-term rule?",
    "options": [
      "Multiply by 2.",
      "Add 2 to the previous term.",
      "Subtract 2 from the previous term.",
      "Divide by 2."
    ],
    "correctAnswer": "Add 2 to the previous term."
  },
  {
    "id": 3,
    "questionText": "What is the next term in the sequence 2, 5, 8, 11, ...?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "correctAnswer": "14"
  },
  {
    "id": 4,
    "questionText": "If the first term is 3 and the term-to-term rule is \"multiply by 2\", what is the 3rd term?",
    "options": [
      "6",
      "9",
      "12",
      "18"
    ],
    "correctAnswer": "12"
  },
  {
    "id": 5,
    "questionText": "What is the position-to-term rule for the sequence 2, 4, 6, 8, ...?",
    "options": [
      "$n+1$",
      "$2n$",
      "$n^2$",
      "$n-1$"
    ],
    "correctAnswer": "$2n$"
  },
  {
    "id": 6,
    "questionText": "If the nth term of a sequence is given by the rule $2n + 1$, what is the 5th term?",
    "options": [
      "6",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": "11"
  },
  {
    "id": 7,
    "questionText": "A sequence starts with 5. The term-to-term rule is \"add 4\". What is the 4th term?",
    "options": [
      "9",
      "13",
      "17",
      "21"
    ],
    "correctAnswer": "17"
  },
  {
    "id": 8,
    "questionText": "Which of the following is an example of a number sequence?",
    "options": [
      "{apple, banana, orange}",
      "{1, 3, 5, 7}",
      "{chair, table, desk}",
      "{red, blue, green}"
    ],
    "correctAnswer": "{1, 3, 5, 7}"
  },
  {
    "id": 9,
    "questionText": "In the sequence 10, 20, 30, ..., what is the missing term?",
    "options": [
      "35",
      "40",
      "45",
      "50"
    ],
    "correctAnswer": "40"
  },
  {
    "id": 10,
    "questionText": "If a sequence is formed by adding 2 to the previous term, and the 1st term is 1, what is the 7th term?",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "correctAnswer": "13"
  },
  {
    "id": 11,
    "questionText": "What does the term '$a_n$' represent in a number sequence?",
    "options": [
      "The first term.",
      "The last term.",
      "The nth term.",
      "The sum of all terms."
    ],
    "correctAnswer": "The nth term."
  },
  {
    "id": 12,
    "questionText": "If the rule is $3n - 1$, what is the 10th term of the sequence?",
    "options": [
      "29",
      "30",
      "31",
      "32"
    ],
    "correctAnswer": "29"
  },
  {
    "id": 13,
    "questionText": "A concert hall has 10 rows. The first row has 25 seats, and each subsequent row has 2 more seats than the row before it. How many seats are in the 3rd row?",
    "options": [
      "27",
      "29",
      "31",
      "33"
    ],
    "correctAnswer": "29"
  },
  {
    "id": 14,
    "questionText": "What is the total number of seats in the first 3 rows of the concert hall described in Q13?",
    "options": [
      "79",
      "81",
      "83",
      "85"
    ],
    "correctAnswer": "81"
  },
  {
    "id": 15,
    "questionText": "If the nth term is given as $a_n = 2n + 1$, which of the following is NOT a term in the sequence?",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 16,
    "questionText": "What is the difference between the 1st and 2nd terms in the sequence 1, 3, 7, 13, ...?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 17,
    "questionText": "Which statement defines the \"position-to-term rule\"?",
    "options": [
      "A rule that describes how to get from one term to the next.",
      "A rule that defines the value of each term with respect to its position.",
      "A rule that is followed by adding a specific value to the previous term.",
      "A rule that is followed by multiplying a specific value to the previous term."
    ],
    "correctAnswer": "A rule that defines the value of each term with respect to its position."
  },
  {
    "id": 18,
    "questionText": "For the sequence 500000, 50000, 5000, 500, ..., what is the term-to-term rule?",
    "options": [
      "Divide by 10.",
      "Multiply by 10.",
      "Subtract 450000.",
      "Add 450000."
    ],
    "correctAnswer": "Divide by 10."
  },
  {
    "id": 19,
    "questionText": "What type of sequence is 3, 6, 12, 24, ...?",
    "options": [
      "A sequence where a constant is added.",
      "A sequence where a constant is multiplied.",
      "A sequence where a constant is subtracted.",
      "A sequence where a constant is divided."
    ],
    "correctAnswer": "A sequence where a constant is multiplied."
  },
  {
    "id": 20,
    "questionText": "If the 3rd term of a sequence is 10 and the term-to-term rule is \"add 3\", what is the 1st term?",
    "options": [
      "4",
      "7",
      "13",
      "16"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 21,
    "questionText": "A sequence is described as $a_n = n^2$. What is the 4th term?",
    "options": [
      "8",
      "16",
      "20",
      "25"
    ],
    "correctAnswer": "16"
  },
  {
    "id": 22,
    "questionText": "Which of the following is true about the definition of a pattern in mathematics?",
    "options": [
      "It is always a decreasing sequence.",
      "It is a regular or repeated arrangement.",
      "It only involves addition.",
      "It must start from zero."
    ],
    "correctAnswer": "It is a regular or repeated arrangement."
  },
  {
    "id": 23,
    "questionText": "Consider the sequence 23, 23, 23, 23, ... What is the term-to-term rule?",
    "options": [
      "Add 0.",
      "Multiply by 1.",
      "Both A and B.",
      "Neither A nor B."
    ],
    "correctAnswer": "Both A and B."
  },
  {
    "id": 24,
    "questionText": "The general term of a sequence is $a_n = n + 5$. What type of rule is this?",
    "options": [
      "Term-to-term rule.",
      "Position-to-term rule.",
      "Constant rule.",
      "Recursive rule."
    ],
    "correctAnswer": "Position-to-term rule."
  },
  {
    "id": 25,
    "questionText": "If $a_n = 3n$, what is the 1st term ($a_1$)?",
    "options": [
      "1",
      "3",
      "6",
      "9"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 26,
    "questionText": "Which of these is an example of identifying the next pattern?",
    "options": [
      "Finding the square root of a number.",
      "Predicting the next shape in a series of shapes.",
      "Calculating the area of a circle.",
      "Solving a linear equation."
    ],
    "correctAnswer": "Predicting the next shape in a series of shapes."
  },
  {
    "id": 27,
    "questionText": "A sequence has terms $a_1=5$, $a_2=7$, $a_3=9$. What is the common difference?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 28,
    "questionText": "What is the value of the 2nd term if the 1st term is 2 and the term-to-term rule is \"add 3\"?",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 29,
    "questionText": "In a sequence, if $a_n = 2n$, what is $a_n + a_{n+1}$?",
    "options": [
      "$4n+1$",
      "$4n+2$",
      "$2n+1$",
      "$2n+2$"
    ],
    "correctAnswer": "$4n+2$"
  },
  {
    "id": 30,
    "questionText": "Which number represents the 1st term in the sequence $a_n = 2n + 1$?",
    "options": [
      "$a_0$",
      "$a_1$",
      "$a_2$",
      "$a_n$"
    ],
    "correctAnswer": "$a_1$"
  },
  {
    "id": 31,
    "questionText": "How many seats are in the 1st row of the concert hall example?",
    "options": [
      "10",
      "25",
      "27",
      "43"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 32,
    "questionText": "What is the sum of the first 3 terms in the sequence where $a_n = n^2$?",
    "options": [
      "10",
      "14",
      "16",
      "20"
    ],
    "correctAnswer": "14"
  },
  {
    "id": 33,
    "questionText": "If a sequence is obtained by multiplying the previous term by (-1), and the 1st term is 500000, what is the 2nd term?",
    "options": [
      "500000",
      "-500000",
      "0",
      "50000"
    ],
    "correctAnswer": "-500000"
  },
  {
    "id": 34,
    "questionText": "In the sequence 2, 8, 14, 20, ..., what is the missing term?",
    "options": [
      "22",
      "24",
      "26",
      "28"
    ],
    "correctAnswer": "26"
  },
  {
    "id": 35,
    "questionText": "If the general term is $a_n = n^2 + 1$, what is the 3rd term?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 36,
    "questionText": "A sequence starts with 5. The term-to-term rule is \"add 2\". What is the 4th term?",
    "options": [
      "7",
      "9",
      "11",
      "13"
    ],
    "correctAnswer": "11"
  },
  {
    "id": 37,
    "questionText": "Which of the following is NOT a student learning outcome for \"Number Sequence and Patterns\"?",
    "options": [
      "Find the position-to-term rule.",
      "Find the term-to-term rule.",
      "Solve real-life problems involving sequence and patterns.",
      "Calculate the area of a circle."
    ],
    "correctAnswer": "Calculate the area of a circle."
  },
  {
    "id": 38,
    "questionText": "If the 3rd term of a sequence is 15 and the term-to-term rule is \"multiply by 3\", what is the 2nd term?",
    "options": [
      "5",
      "12",
      "18",
      "45"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 39,
    "questionText": "For the sequence 1, 3, 7, 13, ..., the differences between consecutive terms are 2, 4, 6. What is the next difference?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": "8"
  },
  {
    "id": 40,
    "questionText": "If $a_n = n+1$, what is the sum of the first two terms?",
    "options": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 41,
    "questionText": "What is the missing number in the sequence: 40, __, 20, 10?",
    "options": [
      "25",
      "30",
      "35",
      "45"
    ],
    "correctAnswer": "30"
  },
  {
    "id": 42,
    "questionText": "Which of the following is NOT a way to identify and differentiate number sequences?",
    "options": [
      "By their term-to-term rule.",
      "By their position-to-term rule.",
      "By drawing a graph of unrelated data.",
      "By observing the numerical value change."
    ],
    "correctAnswer": "By drawing a graph of unrelated data."
  },
  {
    "id": 43,
    "questionText": "If the general term for a sequence is $a_n = n$, what kind of sequence is it?",
    "options": [
      "Only odd numbers.",
      "Only even numbers.",
      "Natural numbers.",
      "Prime numbers."
    ],
    "correctAnswer": "Natural numbers."
  },
  {
    "id": 44,
    "questionText": "What is the sum of the 1st and 3rd terms if the sequence starts with 1, and the term-to-term rule is \"add 4\"?",
    "options": [
      "6",
      "9",
      "10",
      "12"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 45,
    "questionText": "Which method helps in finding a specific term in a sequence without listing all previous terms?",
    "options": [
      "Term-to-term rule.",
      "Position-to-term rule.",
      "Simply adding numbers.",
      "Random guessing."
    ],
    "correctAnswer": "Position-to-term rule."
  },
  {
    "id": 46,
    "questionText": "A sequence has the general term $a_n = 2n-1$. Which term has a value of 15?",
    "options": [
      "7th term",
      "8th term",
      "9th term",
      "10th term"
    ],
    "correctAnswer": "8th term"
  },
  {
    "id": 47,
    "questionText": "In the example of a concert hall, how many rows are there?",
    "options": [
      "5",
      "7",
      "10",
      "12"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 48,
    "questionText": "What is a key characteristic of a \"number sequence\"?",
    "options": [
      "It must contain only even numbers.",
      "It has a specific rule for generating terms.",
      "It cannot contain negative numbers.",
      "It is always decreasing."
    ],
    "correctAnswer": "It has a specific rule for generating terms."
  },
  {
    "id": 49,
    "questionText": "If $a_n = 3n + 2$, what is the difference between the 5th and 4th term?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 50,
    "questionText": "What is the definition of a \"pattern\"?",
    "options": [
      "A random arrangement of elements.",
      "A regular or repeated arrangement.",
      "A set of unrelated numbers.",
      "A single number."
    ],
    "correctAnswer": "A regular or repeated arrangement."
  }
],
  "Algebraic Expressions": [
  {
    "id": 1,
    "questionText": "What is the main characteristic of an \"algebraic expression\"?",
    "options": [
      "It contains only numbers.",
      "It combines variables and constants with mathematical operations.",
      "It always has an equality sign.",
      "It is a collection of random symbols."
    ],
    "correctAnswer": "It combines variables and constants with mathematical operations."
  },
  {
    "id": 2,
    "questionText": "In the term $5x$, what is the numerical value 5 called?",
    "options": [
      "Variable",
      "Constant",
      "Coefficient",
      "Term"
    ],
    "correctAnswer": "Coefficient."
  },
  {
    "id": 3,
    "questionText": "Which of the following is an \"Open Sentence\"?",
    "options": [
      "$4 \\times 8 = 32$",
      "$16 \\div 4 = 4$",
      "$9 + \\Box = 10$",
      "$8 \\times 8 = 64$"
    ],
    "correctAnswer": "$9 + \\Box = 10$"
  },
  {
    "id": 4,
    "questionText": "What is the difference between \"Like Terms\" and \"Unlike Terms\"?",
    "options": [
      "Like terms have different variables, unlike terms have the same variable.",
      "Like terms have the same variable and same power, unlike terms do not.",
      "Like terms have different coefficients, unlike terms have the same coefficients.",
      "Like terms have no variables, unlike terms have variables."
    ],
    "correctAnswer": "Like terms have the same variable and same power, unlike terms do not."
  },
  {
    "id": 5,
    "questionText": "How many terms are in the algebraic expression $4x^2 + 2xy - 5$?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 6,
    "questionText": "Which type of polynomial has three terms?",
    "options": [
      "Monomial",
      "Binomial",
      "Trinomial",
      "Polynomial of degree 3"
    ],
    "correctAnswer": "Trinomial"
  },
  {
    "id": 7,
    "questionText": "Simplify the expression: $(3x + 2) + (5x - 4)$.",
    "options": [
      "$8x - 2$",
      "$8x + 2$",
      "$2x - 2$",
      "$2x + 2$"
    ],
    "correctAnswer": "$8x - 2$"
  },
  {
    "id": 8,
    "questionText": "Subtract $2x^2 + 3x$ from $5x^2 - x$.",
    "options": [
      "$3x^2 + 4x$",
      "$3x^2 - 4x$",
      "$7x^2 + 2x$",
      "$7x^2 - 2x$"
    ],
    "correctAnswer": "$3x^2 - 4x$"
  },
  {
    "id": 9,
    "questionText": "Multiply $3x$ by $4y$.",
    "options": [
      "$7xy$",
      "$12x+y$",
      "$12xy$",
      "$7x+4y$"
    ],
    "correctAnswer": "$12xy$"
  },
  {
    "id": 10,
    "questionText": "What is the product of $(x+1)$ and $(x+2)$?",
    "options": [
      "$x^2 + 3x + 2$",
      "$x^2 + 2x + 1$",
      "$x^2 + x + 2$",
      "$x^2 + 3x + 1$"
    ],
    "correctAnswer": "$x^2 + 3x + 2$"
  },
  {
    "id": 11,
    "questionText": "Divide $8x^3y^2$ by $2xy$.",
    "options": [
      "$4x^2y$",
      "$6x^2y$",
      "$4x^4y^3$",
      "$16x^4y^3$"
    ],
    "correctAnswer": "$4x^2y$"
  },
  {
    "id": 12,
    "questionText": "What does BODMAS stand for in the context of simplifying expressions?",
    "options": [
      "Brackets, Order, Division, Multiplication, Addition, Subtraction.",
      "Brackets, Operations, Division, Multiplication, Addition, Subtraction.",
      "Brackets, Division, Multiplication, Addition, Subtraction, Order.",
      "Body, Order, Division, Multiplication, All, Sum."
    ],
    "correctAnswer": "Brackets, Order, Division, Multiplication, Addition, Subtraction."
  },
  {
    "id": 13,
    "questionText": "Expand $(a+b)^2$ using the algebraic identity.",
    "options": [
      "$a^2 + b^2$",
      "$a^2 - b^2$",
      "$a^2 + 2ab + b^2$",
      "$a^2 - 2ab + b^2$"
    ],
    "correctAnswer": "$a^2 + 2ab + b^2$"
  },
  {
    "id": 14,
    "questionText": "Expand $(a-b)^2$ using the algebraic identity.",
    "options": [
      "$a^2 + b^2$",
      "$a^2 - b^2$",
      "$a^2 + 2ab + b^2$",
      "$a^2 - 2ab + b^2$"
    ],
    "correctAnswer": "$a^2 - 2ab + b^2$"
  },
  {
    "id": 15,
    "questionText": "Expand $(a^2 - b^2)$ using the algebraic identity.",
    "options": [
      "$(a-b)(a+b)$",
      "$(a-b)(a-b)$",
      "$(a+b)(a+b)$",
      "$a^2 + 2ab + b^2$"
    ],
    "correctAnswer": "$(a-b)(a+b)$"
  },
  {
    "id": 16,
    "questionText": "Factorize $ax + ay$.",
    "options": [
      "$a(x+y)$",
      "$x(a+y)$",
      "$y(a+x)$",
      "$axy$"
    ],
    "correctAnswer": "$a(x+y)$"
  },
  {
    "id": 17,
    "questionText": "What is the value of $(100-3)^2$?",
    "options": [
      "9409",
      "9491",
      "9801",
      "9701"
    ],
    "correctAnswer": "9409"
  },
  {
    "id": 18,
    "questionText": "Which of the following is an \"equation\"?",
    "options": [
      "$2x + 3$",
      "$5y < 10$",
      "$z - 7 = 12$",
      "$4a - b$"
    ],
    "correctAnswer": "$z - 7 = 12$"
  },
  {
    "id": 19,
    "questionText": "What is the degree of the polynomial $3x^2y^3 + 4x^4y + 6$?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 20,
    "questionText": "What is a \"constant\" in an algebraic expression?",
    "options": [
      "A quantity that can take various numerical values.",
      "A quantity which cannot be changed or vary.",
      "A variable with a fixed exponent.",
      "A term with no coefficient."
    ],
    "correctAnswer": "A quantity which cannot be changed or vary."
  },
  {
    "id": 21,
    "questionText": "Simplify $x^2 + 5x + 3x^2 - 2x$.",
    "options": [
      "$4x^2 + 3x$",
      "$3x^2 + 3x$",
      "$4x^2 + 7x$",
      "$4x^2 - 3x$"
    ],
    "correctAnswer": "$4x^2 + 3x$"
  },
  {
    "id": 22,
    "questionText": "Which of the following is a \"monomial\"?",
    "options": [
      "$3x + 2$",
      "$x^2 + y^2$",
      "$5y$",
      "$x^2 + x + 1$"
    ],
    "correctAnswer": "$5y$"
  },
  {
    "id": 23,
    "questionText": "Factorize $x^2 + 9x + 18$.",
    "options": [
      "$(x+3)(x+6)$",
      "$(x+2)(x+9)$",
      "$(x+1)(x+18)$",
      "$(x+3)(x-6)$"
    ],
    "correctAnswer": "$(x+3)(x+6)$"
  },
  {
    "id": 24,
    "questionText": "Which operation is performed first according to BODMAS if there are both brackets and orders (powers)?",
    "options": [
      "Orders",
      "Brackets",
      "Division",
      "Addition"
    ],
    "correctAnswer": "Brackets"
  },
  {
    "id": 25,
    "questionText": "What is the product of $(a+b)$ and $(c+d)$?",
    "options": [
      "$ac + bd$",
      "$ac + ad + bc + bd$",
      "$ab + cd$",
      "$ac + bc + ad$"
    ],
    "correctAnswer": "$ac + ad + bc + bd$"
  },
  {
    "id": 26,
    "questionText": "What is the definition of a \"variable\"?",
    "options": [
      "A numerical value that is fixed.",
      "A quantity that can take various numerical values.",
      "The power of a term.",
      "A fixed letter."
    ],
    "correctAnswer": "A quantity that can take various numerical values."
  },
  {
    "id": 27,
    "questionText": "What is the value of $(x+y)^2$ if $x=2$ and $y=3$?",
    "options": [
      "13",
      "16",
      "25",
      "36"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 28,
    "questionText": "A mathematical expression is a combination of what?",
    "options": [
      "Only numbers and operations.",
      "Only variables and constants.",
      "Numbers, variables, and mathematical operations.",
      "Only equality signs."
    ],
    "correctAnswer": "Numbers, variables, and mathematical operations."
  },
  {
    "id": 29,
    "questionText": "Which of the following is an \"Inequality\"?",
    "options": [
      "$3x = 9$",
      "$2y + 1 = 5$",
      "$4z > 12$",
      "$5a - 2$"
    ],
    "correctAnswer": "$4z > 12$"
  },
  {
    "id": 30,
    "questionText": "According to BODMAS, which operation should be performed first in an expression without brackets or orders?",
    "options": [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division"
    ],
    "correctAnswer": "Multiplication"
  },
  {
    "id": 31,
    "questionText": "What is the value of $(x+y)(x-y)$?",
    "options": [
      "$x^2 + y^2$",
      "$x^2 - y^2$",
      "$x^2 + 2xy + y^2$",
      "$x^2 - 2xy + y^2$"
    ],
    "correctAnswer": "$x^2 - y^2$"
  },
  {
    "id": 32,
    "questionText": "What is the constant term in the expression $7x^2 - 2x + 10$?",
    "options": [
      "7",
      "-2",
      "10",
      "x"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 33,
    "questionText": "Which of the following is a \"Close Sentence\"?",
    "options": [
      "$x+2=7$",
      "$4 \\times 8 = 32$",
      "$y-5 > 2$",
      "$3z$"
    ],
    "correctAnswer": "$4 \\times 8 = 32$"
  },
  {
    "id": 34,
    "questionText": "Add $2x^2 + 5x + 1$ and $3x^2 - 2x + 4$.",
    "options": [
      "$5x^2 + 3x + 5$",
      "$5x^2 + 7x + 5$",
      "$x^2 + 3x + 5$",
      "$5x^2 - 3x + 5$"
    ],
    "correctAnswer": "$5x^2 + 3x + 5$"
  },
  {
    "id": 35,
    "questionText": "If you multiply a monomial by a binomial, what kind of polynomial do you typically get?",
    "options": [
      "Monomial",
      "Binomial",
      "Trinomial",
      "The type depends on the specific terms."
    ],
    "correctAnswer": "Binomial"
  },
  {
    "id": 36,
    "questionText": "Factorize $x^2 - 4$.",
    "options": [
      "$(x-2)^2$",
      "$(x+2)^2$",
      "$(x-2)(x+2)$",
      "$x(x-4)$"
    ],
    "correctAnswer": "$(x-2)(x+2)$"
  },
  {
    "id": 37,
    "questionText": "When simplifying an algebraic expression, which step follows 'Brackets' in BODMAS?",
    "options": [
      "Order or Of",
      "Division",
      "Multiplication",
      "Addition"
    ],
    "correctAnswer": "Order or Of"
  },
  {
    "id": 38,
    "questionText": "What is the coefficient of $y$ in the expression $18x+y$?",
    "options": [
      "18",
      "x",
      "1",
      "0"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 39,
    "questionText": "If $x=5$ and $y=2$, what is the value of the expression $2x+3y$?",
    "options": [
      "16",
      "19",
      "10",
      "6"
    ],
    "correctAnswer": "16"
  },
  {
    "id": 40,
    "questionText": "What is the standard form of a polynomial?",
    "options": [
      "Terms arranged randomly.",
      "Terms arranged in ascending order of variable exponent.",
      "Terms arranged in descending order of variable exponent.",
      "Terms separated by commas."
    ],
    "correctAnswer": "Terms arranged in descending order of variable exponent."
  },
  {
    "id": 41,
    "questionText": "Which operation is NOT considered an \"operation on polynomials\"?",
    "options": [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Square Root"
    ],
    "correctAnswer": "Square Root"
  },
  {
    "id": 42,
    "questionText": "Which of the following terms is 'like' to $5x^2y$?",
    "options": [
      "$5xy^2$",
      "$2x^2y$",
      "$5x^2$",
      "$2xy$"
    ],
    "correctAnswer": "$2x^2y$"
  },
  {
    "id": 43,
    "questionText": "What is the result of $x \\times x^2 \\times x^3$?",
    "options": [
      "$x^5$",
      "$x^6$",
      "$x^7$",
      "$3x^6$"
    ],
    "correctAnswer": "$x^6$"
  },
  {
    "id": 44,
    "questionText": "What is the process of writing an expression as a product of its factors called?",
    "options": [
      "Expansion",
      "Simplification",
      "Factorization",
      "Evaluation"
    ],
    "correctAnswer": "Factorization"
  },
  {
    "id": 45,
    "questionText": "Which method is used to add or subtract polynomials by aligning terms according to their variables and powers?",
    "options": [
      "Horizontal method",
      "Vertical method",
      "BODMAS method",
      "Factorization method"
    ],
    "correctAnswer": "Vertical method"
  },
  {
    "id": 46,
    "questionText": "What is the first step in simplifying $2 + 3 \\times 4$?",
    "options": [
      "$2+3$",
      "$3 \\times 4$",
      "$2 \\times 4$",
      "$2+4$"
    ],
    "correctAnswer": "$3 \\times 4$"
  },
  {
    "id": 47,
    "questionText": "If $(x-y)^2 = x^2 - 2xy + y^2$, what is the result of $(5-2)^2$?",
    "options": [
      "25",
      "4",
      "9",
      "1"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 48,
    "questionText": "What is the term for a polynomial with two terms?",
    "options": [
      "Monomial",
      "Binomial",
      "Trinomial",
      "Quadnomial"
    ],
    "correctAnswer": "Binomial"
  },
  {
    "id": 49,
    "questionText": "Factorize $x^2 - 10x + 24$.",
    "options": [
      "$(x-4)(x-6)$",
      "$(x-3)(x-8)$",
      "$(x-2)(x-12)$",
      "$(x+4)(x+6)$"
    ],
    "correctAnswer": "$(x-4)(x-6)$"
  },
  {
    "id": 50,
    "questionText": "What is the basic purpose of BODMAS in mathematics?",
    "options": [
      "To identify variables.",
      "To define the order of operations in mathematical expressions.",
      "To solve equations.",
      "To factorize polynomials."
    ],
    "correctAnswer": "To define the order of operations in mathematical expressions."
  }
],
  "Linear Equation": [
  {
    "id": 1,
    "questionText": "What is the highest power of the variable in a linear equation in one variable?",
    "options": [
      "0",
      "1",
      "2",
      "Any power"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a linear equation in one variable?",
    "options": [
      "$2x + 3y = 5$",
      "$x^2 + 1 = 0$",
      "$5x - 7 = 3$",
      "$y = x+4$"
    ],
    "correctAnswer": "$5x - 7 = 3$"
  },
  {
    "id": 3,
    "questionText": "What is the first step when solving the equation $5x - 1 = 2(x-5)$?",
    "options": [
      "Subtract 1 from both sides.",
      "Remove parentheses/brackets.",
      "Isolate x.",
      "Divide by 5."
    ],
    "correctAnswer": "Remove parentheses/brackets."
  },
  {
    "id": 4,
    "questionText": "Solve the equation: $3x - 1 = 8$.",
    "options": [
      "$x = 2$",
      "$x = 3$",
      "$x = 4$",
      "$x = 5$"
    ],
    "correctAnswer": "$x = 3$"
  },
  {
    "id": 5,
    "questionText": "In a linear equation in two variables, $ax + by = c$, what do 'a' and 'b' represent?",
    "options": [
      "Variables",
      "Constants (coefficients)",
      "Intercepts",
      "Solutions"
    ],
    "correctAnswer": "Constants (coefficients)"
  },
  {
    "id": 6,
    "questionText": "What is the standard form of a linear equation in two variables?",
    "options": [
      "$ax + by = c$",
      "$y = mx + c$",
      "$x = k$",
      "$y = k$"
    ],
    "correctAnswer": "$ax + by = c$"
  },
  {
    "id": 7,
    "questionText": "How many quadrants are there in a Cartesian coordinate system?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 8,
    "questionText": "In which quadrant is a point with coordinates $(-x, +y)$ located?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant II"
  },
  {
    "id": 9,
    "questionText": "What is the x-coordinate of a point called?",
    "options": [
      "Ordinate",
      "Abscissa",
      "Origin",
      "Quadrant"
    ],
    "correctAnswer": "Abscissa"
  },
  {
    "id": 10,
    "questionText": "What is the y-coordinate of a point called?",
    "options": [
      "Ordinate",
      "Abscissa",
      "Origin",
      "Quadrant"
    ],
    "correctAnswer": "Ordinate"
  },
  {
    "id": 11,
    "questionText": "What is the point where the x-axis and y-axis intersect?",
    "options": [
      "Quadrant I",
      "Abscissa",
      "Ordinate",
      "Origin"
    ],
    "correctAnswer": "Origin"
  },
  {
    "id": 12,
    "questionText": "Plotting the graph of $x=-3$, what kind of line will it be?",
    "options": [
      "A horizontal line parallel to the y-axis.",
      "A vertical line parallel to the x-axis.",
      "A horizontal line parallel to the x-axis.",
      "A vertical line parallel to the y-axis."
    ],
    "correctAnswer": "A vertical line parallel to the y-axis."
  },
  {
    "id": 13,
    "questionText": "The graph of $y=b$ is what kind of line?",
    "options": [
      "Vertical line parallel to the y-axis.",
      "Vertical line parallel to the x-axis.",
      "Horizontal line parallel to the x-axis.",
      "Horizontal line parallel to the y-axis."
    ],
    "correctAnswer": "Horizontal line parallel to the x-axis."
  },
  {
    "id": 14,
    "questionText": "If a line intersects the x-axis at $(-2, 0)$, what is $(-2, 0)$ called?",
    "options": [
      "Y-intercept",
      "Origin",
      "X-intercept",
      "Slope"
    ],
    "correctAnswer": "X-intercept"
  },
  {
    "id": 15,
    "questionText": "If a line intersects the y-axis at $(0, 2)$, what is $(0, 2)$ called?",
    "options": [
      "X-intercept",
      "Origin",
      "Y-intercept",
      "Slope"
    ],
    "correctAnswer": "Y-intercept"
  },
  {
    "id": 16,
    "questionText": "How many solutions does a linear equation in one variable have?",
    "options": [
      "Zero",
      "One",
      "Two",
      "Infinitely many"
    ],
    "correctAnswer": "One"
  },
  {
    "id": 17,
    "questionText": "If a point has coordinates $(+x, -y)$, in which quadrant does it lie?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant IV"
  },
  {
    "id": 18,
    "questionText": "What is the first step in solving a real-life word problem involving linear equations?",
    "options": [
      "Solve the equation.",
      "Represent the unknown quantity by a variable.",
      "Read the statement of the word problem.",
      "Form an equation."
    ],
    "correctAnswer": "Read the statement of the word problem."
  },
  {
    "id": 19,
    "questionText": "What is the value of x in the equation $x + 5 = 12$?",
    "options": [
      "5",
      "7",
      "12",
      "17"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 20,
    "questionText": "What is true about a linear equation in two variables $ax+by=c$ where $a \\ne 0$ and $b \\ne 0$?",
    "options": [
      "It represents a single point.",
      "It represents a straight line.",
      "It represents a curve.",
      "It represents an area."
    ],
    "correctAnswer": "It represents a straight line."
  },
  {
    "id": 21,
    "questionText": "Hooria is 5 years younger than Farah. Two years later, Farah will be twice as old as Hooria. If Farah's present age is 'x', what is Hooria's present age?",
    "options": [
      "$x+5$",
      "$x-5$",
      "$5-x$",
      "$x$"
    ],
    "correctAnswer": "$x-5$"
  },
  {
    "id": 22,
    "questionText": "If a point is located on the y-axis, what is its x-coordinate?",
    "options": [
      "1",
      "-1",
      "0",
      "It varies"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 23,
    "questionText": "If a point is located on the x-axis, what is its y-coordinate?",
    "options": [
      "1",
      "-1",
      "0",
      "It varies"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 24,
    "questionText": "Which method is used to solve linear equations by transposing terms from one side to another?",
    "options": [
      "Graphical method",
      "Substitution method",
      "Transposition method",
      "Elimination method"
    ],
    "correctAnswer": "Transposition method"
  },
  {
    "id": 25,
    "questionText": "If $y = 2x+1$, and $x=3$, what is the value of $y$?",
    "options": [
      "4",
      "5",
      "7",
      "8"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 26,
    "questionText": "Which of the following is a step for solving linear equations in one variable?",
    "options": [
      "Plotting the graph.",
      "Clearing fractions by multiplying with LCD.",
      "Finding the slope.",
      "Determining the quadrants."
    ],
    "correctAnswer": "Clearing fractions by multiplying with LCD."
  },
  {
    "id": 27,
    "questionText": "What is the value of 'c' in the linear equation $2x + 3y = 7$?",
    "options": [
      "2",
      "3",
      "7",
      "x"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 28,
    "questionText": "If $x+y=5$, and $x=2$, what is $y$?",
    "options": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 29,
    "questionText": "The point $(2,6)$ is located in which quadrant?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant I"
  },
  {
    "id": 30,
    "questionText": "If a point has coordinates $(-x, -y)$, in which quadrant does it lie?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correctAnswer": "Quadrant III"
  },
  {
    "id": 31,
    "questionText": "What is the horizontal line in the Cartesian coordinate system called?",
    "options": [
      "Y-axis",
      "X-axis",
      "Origin",
      "Quadrant"
    ],
    "correctAnswer": "X-axis"
  },
  {
    "id": 32,
    "questionText": "What is the vertical line in the Cartesian coordinate system called?",
    "options": [
      "Y-axis",
      "X-axis",
      "Origin",
      "Quadrant"
    ],
    "correctAnswer": "Y-axis"
  },
  {
    "id": 33,
    "questionText": "What is the slope of a horizontal line?",
    "options": [
      "Undefined",
      "1",
      "0",
      "Negative"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 34,
    "questionText": "What is the slope of a vertical line?",
    "options": [
      "Undefined",
      "1",
      "0",
      "Negative"
    ],
    "correctAnswer": "Undefined"
  },
  {
    "id": 35,
    "questionText": "If a line passes through the origin, what are its coordinates at the origin?",
    "options": [
      "$(1,1)$",
      "$(0,0)$",
      "$(-1,-1)$",
      "$(1,0)$"
    ],
    "correctAnswer": "$(0,0)$"
  },
  {
    "id": 36,
    "questionText": "A linear equation in one variable can only have how many terms?",
    "options": [
      "One",
      "Two",
      "Three",
      "It can have multiple terms after simplification, but ultimately involves one variable."
    ],
    "correctAnswer": "It can have multiple terms after simplification, but ultimately involves one variable."
  },
  {
    "id": 37,
    "questionText": "If $3x+2=11$, what is the value of $x$?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 38,
    "questionText": "What is the coefficient of x in the equation $5x - 7 = 3$?",
    "options": [
      "5",
      "-7",
      "3",
      "1"
    ],
    "correctAnswer": "5"
  },
  {
    "id": 39,
    "questionText": "In a word problem, if \"the sum of two numbers is 20\" and one number is 'x', what is the other number?",
    "options": [
      "$x+20$",
      "$x-20$",
      "$20-x$",
      "$20x$"
    ],
    "correctAnswer": "$20-x$"
  },
  {
    "id": 40,
    "questionText": "Plotting the point $(4,-3)$, in which quadrant does it lie?",
    "options": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "correctAnswer": "IV"
  },
  {
    "id": 41,
    "questionText": "What is the value of $x$ when $y=0$ for the equation $y = 2x+4$?",
    "options": [
      "4",
      "2",
      "-2",
      "0"
    ],
    "correctAnswer": "-2"
  },
  {
    "id": 42,
    "questionText": "What is the value of $y$ when $x=0$ for the equation $y = 2x+4$?",
    "options": [
      "0",
      "2",
      "4",
      "-4"
    ],
    "correctAnswer": "4"
  },
  {
    "id": 43,
    "questionText": "The coordinate system with horizontal x-axis and vertical y-axis is known as what?",
    "options": [
      "Polar coordinate system.",
      "Spherical coordinate system.",
      "Cartesian coordinate system.",
      "Cylindrical coordinate system."
    ],
    "correctAnswer": "Cartesian coordinate system."
  },
  {
    "id": 44,
    "questionText": "What is the result of solving $5x + 10 = 3x + 20$?",
    "options": [
      "$x = 2.5$",
      "$x = 5$",
      "$x = 10$",
      "$x = 15$"
    ],
    "correctAnswer": "$x = 5$"
  },
  {
    "id": 45,
    "questionText": "If the equation is $ax+by=c$, and $b=0$, what does the equation simplify to?",
    "options": [
      "$ax=c$ (a vertical line)",
      "$by=c$ (a horizontal line)",
      "$y=c/b$",
      "$x=0$"
    ],
    "correctAnswer": "$ax=c$ (a vertical line)"
  },
  {
    "id": 46,
    "questionText": "If the equation is $ax+by=c$, and $a=0$, what does the equation simplify to?",
    "options": [
      "$ax=c$",
      "$by=c$ (a horizontal line)",
      "$x=c/a$",
      "$y=0$"
    ],
    "correctAnswer": "$by=c$ (a horizontal line)"
  },
  {
    "id": 47,
    "questionText": "In the context of linear equations, what is the role of plotting a graph?",
    "options": [
      "To find the factors of an expression.",
      "To visually represent the relationship between variables.",
      "To determine the next term in a sequence.",
      "To calculate square roots."
    ],
    "correctAnswer": "To visually represent the relationship between variables."
  },
  {
    "id": 48,
    "questionText": "Which point represents the origin on a graph?",
    "options": [
      "$(1,1)$",
      "$(0,1)$",
      "$(0,0)$",
      "$(1,1)$"
    ],
    "correctAnswer": "$(0,0)$"
  },
  {
    "id": 49,
    "questionText": "What is the value of $x$ in the equation $4x - 6 = 2x + 8$?",
    "options": [
      "1",
      "3",
      "7",
      "14"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 50,
    "questionText": "What type of problems can be solved by formulating them into linear equations in one variable?",
    "options": [
      "Only simple numerical problems.",
      "Real-life word problems.",
      "Only problems involving geometric shapes.",
      "Problems related to probability."
    ],
    "correctAnswer": "Real-life word problems."
  }
],
  "Distance Speed and Time": [
  {
    "id": 1,
    "questionText": "The length of space between two points is known as:",
    "options": [
      "Time",
      "Speed",
      "Distance",
      "Displacement"
    ],
    "correctAnswer": "Distance"
  },
  {
    "id": 2,
    "questionText": "Large distances are usually measured in:",
    "options": [
      "Millimetres",
      "Centimetres",
      "Metres",
      "Kilometres"
    ],
    "correctAnswer": "Kilometres"
  },
  {
    "id": 3,
    "questionText": "Small distances are measured in:",
    "options": [
      "Kilometres",
      "Metres",
      "Centimetres",
      "Hectometres"
    ],
    "correctAnswer": "Centimetres"
  },
  {
    "id": 4,
    "questionText": "To convert kilometres to metres, one should multiply by:",
    "options": [
      "10",
      "100",
      "1000",
      "10000"
    ],
    "correctAnswer": "1000"
  },
  {
    "id": 5,
    "questionText": "How many centimetres are in 1 metre?",
    "options": [
      "10",
      "100",
      "1000",
      "10000"
    ],
    "correctAnswer": "100"
  },
  {
    "id": 6,
    "questionText": "1 kilometre is equal to:",
    "options": [
      "100 metres",
      "500 metres",
      "1000 metres",
      "10000 metres"
    ],
    "correctAnswer": "1000 metres"
  },
  {
    "id": 7,
    "questionText": "To convert from a smaller unit to a larger unit, one should:",
    "options": [
      "Multiply",
      "Divide",
      "Add",
      "Subtract"
    ],
    "correctAnswer": "Divide"
  },
  {
    "id": 8,
    "questionText": "Convert 15 km to metres.",
    "options": [
      "150 m",
      "1500 m",
      "15000 m",
      "150000 m"
    ],
    "correctAnswer": "15000 m"
  },
  {
    "id": 9,
    "questionText": "A tailor used 1 m 20 cm of cloth to stitch a shirt and 1 m 15 cm to stitch another shirt. What is the total length of cloth used?",
    "options": [
      "2 m 25 cm",
      "2 m 30 cm",
      "2 m 32 cm",
      "2 m 35 cm"
    ],
    "correctAnswer": "2 m 35 cm"
  },
  {
    "id": 10,
    "questionText": "Convert 4000 m to km.",
    "options": [
      "0.4 km",
      "40 km",
      "400 km",
      "4 km"
    ],
    "correctAnswer": "4 km"
  },
  {
    "id": 11,
    "questionText": "Convert 8 m 25 cm to m.",
    "options": [
      "8.0025 m",
      "8.025 m",
      "8.2 m",
      "8.25 m"
    ],
    "correctAnswer": "8.25 m"
  },
  {
    "id": 12,
    "questionText": "The duration of a period in which an action, process, or condition exists or continues is called:",
    "options": [
      "Distance",
      "Speed",
      "Time",
      "Rate"
    ],
    "correctAnswer": "Time"
  },
  {
    "id": 13,
    "questionText": "Time from midnight to midday is written with:",
    "options": [
      "p.m.",
      "a.m.",
      "midnight",
      "midday"
    ],
    "correctAnswer": "a.m."
  },
  {
    "id": 14,
    "questionText": "Time from midday to midnight is written with:",
    "options": [
      "p.m.",
      "a.m.",
      "midnight",
      "midday"
    ],
    "correctAnswer": "p.m."
  },
  {
    "id": 15,
    "questionText": "The 24-hour clock is also known as:",
    "options": [
      "Standard Time",
      "Civilian Time",
      "Military Time",
      "International Time"
    ],
    "correctAnswer": "Military Time"
  },
  {
    "id": 16,
    "questionText": "How is 16:00 written in the 12-hour clock?",
    "options": [
      "4:00 a.m.",
      "4:00 p.m.",
      "6:00 a.m.",
      "6:00 p.m."
    ],
    "correctAnswer": "4:00 p.m."
  },
  {
    "id": 17,
    "questionText": "Convert 5:45 a.m. to 24-hour time.",
    "options": [
      "05:45 p.m.",
      "17:45",
      "05:45",
      "17:45 a.m."
    ],
    "correctAnswer": "05:45"
  },
  {
    "id": 18,
    "questionText": "Convert 4:15 p.m. to 24-hour time.",
    "options": [
      "04:15",
      "16:15",
      "14:15",
      "24:15"
    ],
    "correctAnswer": "16:15"
  },
  {
    "id": 19,
    "questionText": "Convert 06:15 into 12-hour time.",
    "options": [
      "6:15 p.m.",
      "6:15 a.m.",
      "18:15",
      "18:15 a.m."
    ],
    "correctAnswer": "6:15 a.m."
  },
  {
    "id": 20,
    "questionText": "Convert 16:30 into 12-hour time.",
    "options": [
      "4:30 a.m.",
      "4:30 p.m.",
      "6:30 a.m.",
      "6:30 p.m."
    ],
    "correctAnswer": "4:30 p.m."
  },
  {
    "id": 21,
    "questionText": "How many minutes are in 3 hours 20 minutes?",
    "options": [
      "180 minutes",
      "200 minutes",
      "200 minutes",
      "220 minutes"
    ],
    "correctAnswer": "200 minutes"
  },
  {
    "id": 22,
    "questionText": "Kalsoom completes a project in 3 hours 20 minutes. How many minutes does she complete the project?",
    "options": [
      "180 minutes",
      "200 minutes",
      "320 minutes",
      "340 minutes"
    ],
    "correctAnswer": "200 minutes"
  },
  {
    "id": 23,
    "questionText": "How many days are in 10 months 25 days, assuming 30 days per month?",
    "options": [
      "300 days",
      "320 days",
      "325 days",
      "350 days"
    ],
    "correctAnswer": "325 days"
  },
  {
    "id": 24,
    "questionText": "Convert 1 year 6 months into months.",
    "options": [
      "12 months",
      "16 months",
      "18 months",
      "24 months"
    ],
    "correctAnswer": "18 months"
  },
  {
    "id": 25,
    "questionText": "Convert 7 weeks 5 days into days.",
    "options": [
      "35 days",
      "42 days",
      "47 days",
      "54 days"
    ],
    "correctAnswer": "54 days"
  },
  {
    "id": 26,
    "questionText": "Convert 30 months into years and months.",
    "options": [
      "1 year 6 months",
      "2 years 6 months",
      "2 years 5 months",
      "3 years"
    ],
    "correctAnswer": "2 years 6 months"
  },
  {
    "id": 27,
    "questionText": "Convert 108 days into weeks and days.",
    "options": [
      "15 weeks 0 days",
      "15 weeks 1 day",
      "15 weeks 2 days",
      "15 weeks 3 days"
    ],
    "correctAnswer": "15 weeks 3 days"
  },
  {
    "id": 28,
    "questionText": "What is 15 hours 30 minutes in minutes?",
    "options": [
      "900 minutes",
      "930 minutes",
      "930 minutes",
      "960 minutes"
    ],
    "correctAnswer": "930 minutes"
  },
  {
    "id": 29,
    "questionText": "Convert 12 months 15 days into days.",
    "options": [
      "365 days",
      "375 days",
      "375 days",
      "380 days"
    ],
    "correctAnswer": "375 days"
  },
  {
    "id": 30,
    "questionText": "Convert 56 months into years and months.",
    "options": [
      "4 years 8 months",
      "4 years 8 months",
      "5 years 6 months",
      "5 years 8 months"
    ],
    "correctAnswer": "4 years 8 months"
  },
  {
    "id": 31,
    "questionText": "If arrival time is Departure time + Journey time, then Departure time is equal to:",
    "options": [
      "Arrival time + Journey time",
      "Journey time - Arrival time",
      "Arrival time - Journey time",
      "Journey time + Arrival time"
    ],
    "correctAnswer": "Arrival time - Journey time"
  },
  {
    "id": 32,
    "questionText": "If a bus departs from Lahore at 9:30 a.m. and it takes 6 hours 30 minutes to reach Islamabad, what time will it reach Islamabad?",
    "options": [
      "3:00 p.m.",
      "4:00 p.m.",
      "4:30 p.m.",
      "5:00 p.m."
    ],
    "correctAnswer": "4:00 p.m."
  },
  {
    "id": 33,
    "questionText": "Salman departs at 9:30 a.m. and arrives at 3:30 p.m. What is his journey time?",
    "options": [
      "5 hours",
      "6 hours",
      "7 hours",
      "8 hours"
    ],
    "correctAnswer": "6 hours"
  },
  {
    "id": 34,
    "questionText": "A bus departs at 22:00 (24-hour format) and arrives at 07:00 (24-hour format) the next day. What is the journey time?",
    "options": [
      "7 hours",
      "8 hours",
      "9 hours",
      "10 hours"
    ],
    "correctAnswer": "9 hours"
  },
  {
    "id": 35,
    "questionText": "A ship started its journey from port A at 6:15 a.m. and reached port B at 12:45 p.m. How long did it take to reach port B?",
    "options": [
      "6 hours 15 minutes",
      "6 hours 20 minutes",
      "6 hours 30 minutes",
      "6 hours 45 minutes"
    ],
    "correctAnswer": "6 hours 30 minutes"
  },
  {
    "id": 36,
    "questionText": "If departure time is 4:00 a.m. and arrival time is 8:15 p.m., what is the journey time?",
    "options": [
      "16 hours 05 minutes",
      "16 hours 15 minutes",
      "16 hours 25 minutes",
      "16 hours 35 minutes"
    ],
    "correctAnswer": "16 hours 15 minutes"
  },
  {
    "id": 37,
    "questionText": "If departure time is 03:20 (24-hour format) and arrival time is 5:20 a.m. (next day), what is the journey time?",
    "options": [
      "24 hours",
      "25 hours",
      "26 hours",
      "27 hours"
    ],
    "correctAnswer": "26 hours"
  },
  {
    "id": 38,
    "questionText": "Ahmad started his journey to move abroad at 08:30 a.m. and reached at 04:50 p.m. the next day. How long was his journey?",
    "options": [
      "30 hours 20 minutes",
      "31 hours 20 minutes",
      "32 hours 20 minutes",
      "33 hours 20 minutes"
    ],
    "correctAnswer": "32 hours 20 minutes"
  },
  {
    "id": 39,
    "questionText": "The rate of change of distance per unit time is called:",
    "options": [
      "Distance",
      "Time",
      "Speed",
      "Acceleration"
    ],
    "correctAnswer": "Speed"
  },
  {
    "id": 40,
    "questionText": "What is the formula for Speed?",
    "options": [
      "Speed = Time \\times Distance",
      "Speed = Distance + Time",
      "Speed = Distance / Time",
      "Speed = Time / Distance"
    ],
    "correctAnswer": "Speed = Distance / Time"
  },
  {
    "id": 41,
    "questionText": "A train covers a distance of 480 km in 8 hours. Find its speed.",
    "options": [
      "50 km/h",
      "60 km/h",
      "70 km/h",
      "80 km/h"
    ],
    "correctAnswer": "60 km/h"
  },
  {
    "id": 42,
    "questionText": "Convert 72 km/h into m/s.",
    "options": [
      "10 m/s",
      "20 m/s",
      "25 m/s",
      "30 m/s"
    ],
    "correctAnswer": "20 m/s"
  },
  {
    "id": 43,
    "questionText": "Convert 70 m/s into km/h.",
    "options": [
      "200 km/h",
      "220 km/h",
      "252 km/h",
      "280 km/h"
    ],
    "correctAnswer": "252 km/h"
  },
  {
    "id": 44,
    "questionText": "What is the formula for Average Speed?",
    "options": [
      "Total distance covered / Number of stops",
      "Total time taken / Number of stops",
      "Total distance covered / Total time taken",
      "Total time taken / Total distance covered"
    ],
    "correctAnswer": "Total distance covered / Total time taken"
  },
  {
    "id": 45,
    "questionText": "A bus moves at a speed of 32 km/h for an hour and 50 km/h for 2 hours. Find the average speed of the bus.",
    "options": [
      "40 km/h",
      "42 km/h",
      "44 km/h",
      "46 km/h"
    ],
    "correctAnswer": "44 km/h"
  },
  {
    "id": 46,
    "questionText": "When the speed of the object varies or changes throughout the journey, it is called:",
    "options": [
      "Uniform speed",
      "Average speed",
      "Constant speed",
      "Varying speed"
    ],
    "correctAnswer": "Varying speed"
  },
  {
    "id": 47,
    "questionText": "When the speed of an object remains constant throughout the journey, it is called:",
    "options": [
      "Average speed",
      "Variable speed",
      "Uniform speed",
      "Changing speed"
    ],
    "correctAnswer": "Uniform speed"
  },
  {
    "id": 48,
    "questionText": "A car travels 80 km in an hour, then how much distance is covered in 12 hours at the same speed?",
    "options": [
      "860 km",
      "900 km",
      "920 km",
      "960 km"
    ],
    "correctAnswer": "960 km"
  },
  {
    "id": 49,
    "questionText": "What is the speed of an object that moves 50 km/h in the first hour and 60 km/h in the second hour?",
    "options": [
      "Uniform speed",
      "Average speed",
      "Constant speed",
      "Fixed speed"
    ],
    "correctAnswer": "Average speed"
  },
  {
    "id": 50,
    "questionText": "The movement of clock hands is an example of:",
    "options": [
      "Average speed",
      "Variable speed",
      "Uniform speed",
      "Irregular speed"
    ],
    "correctAnswer": "Uniform speed"
  }
],
  "Perimeter and Area":[
  {
    "id": 1,
    "questionText": "The concept of perimeter, area, and volume is first studied in:",
    "options": [
      "Grade 5",
      "Grade 6",
      "Previous grade",
      "Higher grade"
    ],
    "correctAnswer": "Grade 6"
  },
  {
    "id": 2,
    "questionText": "Perimeter gives the length of the:",
    "options": [
      "Interior region of a closed shape",
      "Interior region of a surface",
      "Outer boundary of a 2D shape",
      "Whole surface of a 3D object"
    ],
    "correctAnswer": "Outer boundary of a 2D shape"
  },
  {
    "id": 3,
    "questionText": "Area gives the measurement of the:",
    "options": [
      "Outer boundary of a 2D shape",
      "Interior region of a closed shape or surface",
      "Volume of an object",
      "Surface of a 3D object"
    ],
    "correctAnswer": "Interior region of a closed shape or surface"
  },
  {
    "id": 4,
    "questionText": "The total length of red line in the figure (representing a track) measures the:",
    "options": [
      "Area",
      "Volume",
      "Circumference",
      "Length"
    ],
    "correctAnswer": "Circumference"
  },
  {
    "id": 5,
    "questionText": "The perimeter of a rectangle with length (l) and breadth (b) is given by:",
    "options": [
      "$l \\times b$",
      "$l + b$",
      "$2(l + b)$",
      "$l + b + l + b$"
    ],
    "correctAnswer": "$2(l + b)$"
  },
  {
    "id": 6,
    "questionText": "The area of a rectangle with length (l) and breadth (b) is given by:",
    "options": [
      "$2(l + b)$",
      "$l + b$",
      "$l \\times b$",
      "$l^2/b$"
    ],
    "correctAnswer": "$l \\times b$"
  },
  {
    "id": 7,
    "questionText": "The perimeter of a square with side (l) is given by:",
    "options": [
      "$l^2$",
      "$2l$",
      "$4l$",
      "$l^3$"
    ],
    "correctAnswer": "$4l$"
  },
  {
    "id": 8,
    "questionText": "The area of a square with side (l) is given by:",
    "options": [
      "$4l$",
      "$l^2$",
      "$2l$",
      "$l^3$"
    ],
    "correctAnswer": "$l^2$"
  },
  {
    "id": 9,
    "questionText": "The perimeter of a triangle with sides a, b, c is given by:",
    "options": [
      "$a \\times b \\times c$",
      "$(a + b) \\times c$",
      "$a + b + c$",
      "$(a \\times b) + c$"
    ],
    "correctAnswer": "$a + b + c$"
  },
  {
    "id": 10,
    "questionText": "The area of a triangle with base (b) and height (h) is given by:",
    "options": [
      "$b \\times h$",
      "$2(b + h)$",
      "$\\frac{1}{2} \\times (base) \\times (height)$",
      "$(base + height) / 2$"
    ],
    "correctAnswer": "$\\frac{1}{2} \\times (base) \\times (height)$"
  },
  {
    "id": 11,
    "questionText": "The volume of a cube with side (l) is given by:",
    "options": [
      "$4l$",
      "$l^2$",
      "$l^3$",
      "$6l^2$"
    ],
    "correctAnswer": "$l^3$"
  },
  {
    "id": 12,
    "questionText": "The surface area of a cube with side (l) is given by:",
    "options": [
      "$l^3$",
      "$4l^2$",
      "$6l^2$",
      "$l^2/6$"
    ],
    "correctAnswer": "$6l^2$"
  },
  {
    "id": 13,
    "questionText": "The volume of a cuboid with length (l), width (w), and height (h) is given by:",
    "options": [
      "$l + w + h$",
      "$2(lw + wh + hl)$",
      "$l \\times w \\times h$",
      "$lwh/2$"
    ],
    "correctAnswer": "$l \\times w \\times h$"
  },
  {
    "id": 14,
    "questionText": "The surface area of a cuboid with length (l), width (w), and height (h) is given by:",
    "options": [
      "$lwh$",
      "$l + w + h$",
      "$2(lw + wh + hl)$",
      "$6lwh$"
    ],
    "correctAnswer": "$2(lw + wh + hl)$"
  },
  {
    "id": 15,
    "questionText": "What is the area of a shaded region composed of two rectangles? Region 1: 3 cm $\\times$ 14 cm, Region 2: 6 cm $\\times$ 20 cm.",
    "options": [
      "42 cm²",
      "120 cm²",
      "160 cm²",
      "162 cm²"
    ],
    "correctAnswer": "162 cm²"
  },
  {
    "id": 16,
    "questionText": "What is the perimeter of a shaded region composed of a large rectangle (7 $\\times$ 13 cm) and a small rectangle (4 $\\times$ 10 cm) inside?",
    "options": [
      "40 cm",
      "62 cm",
      "81 cm",
      "104 cm"
    ],
    "correctAnswer": "104 cm"
  },
  {
    "id": 17,
    "questionText": "1 cm² is equal to:",
    "options": [
      "10 mm²",
      "100 mm³",
      "100 mm²",
      "1000 mm²"
    ],
    "correctAnswer": "100 mm²"
  },
  {
    "id": 18,
    "questionText": "1 m² is equal to:",
    "options": [
      "100 cm²",
      "1000 cm²",
      "10000 cm²",
      "100000 cm²"
    ],
    "correctAnswer": "10000 cm²"
  },
  {
    "id": 19,
    "questionText": "1 mm³ is equal to:",
    "options": [
      "10 cm³",
      "100 cm³",
      "1000 cm³",
      "1/1000 cm³"
    ],
    "correctAnswer": "1/1000 cm³"
  },
  {
    "id": 20,
    "questionText": "A circular object's outline is called its:",
    "options": [
      "Radius",
      "Diameter",
      "Arc",
      "Circumference"
    ],
    "correctAnswer": "Circumference"
  },
  {
    "id": 21,
    "questionText": "The radius of a circle is denoted by:",
    "options": [
      "C",
      "D",
      "r",
      "A"
    ],
    "correctAnswer": "r"
  },
  {
    "id": 22,
    "questionText": "The diameter of a circle is denoted by:",
    "options": [
      "C",
      "D",
      "r",
      "A"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 23,
    "questionText": "A line segment joining two different points of a circle is called a:",
    "options": [
      "Radius",
      "Diameter",
      "Chord",
      "Arc"
    ],
    "correctAnswer": "Chord"
  },
  {
    "id": 24,
    "questionText": "An arc is a part of a:",
    "options": [
      "Radius",
      "Diameter",
      "Chord",
      "Circumference"
    ],
    "correctAnswer": "Circumference"
  },
  {
    "id": 25,
    "questionText": "The perimeter of a circle is called its:",
    "options": [
      "Area",
      "Radius",
      "Diameter",
      "Circumference"
    ],
    "correctAnswer": "Circumference"
  },
  {
    "id": 26,
    "questionText": "The formula for the circumference of a circle is:",
    "options": [
      "$\\pi r^2$",
      "$2\\pi r$",
      "$\\pi d^2$",
      "$2\\pi d$"
    ],
    "correctAnswer": "$2\\pi r$"
  },
  {
    "id": 27,
    "questionText": "Calculate the circumference of a circle with radius 7 cm. (Use $\\pi = 22/7$)",
    "options": [
      "22 cm",
      "44 cm",
      "88 cm",
      "154 cm"
    ],
    "correctAnswer": "44 cm"
  },
  {
    "id": 28,
    "questionText": "If the diameter of a circle is 10 cm, find its circumference. (Use $\\pi = 3.14$)",
    "options": [
      "15.7 cm",
      "31.4 cm",
      "62.8 cm",
      "78.5 cm"
    ],
    "correctAnswer": "31.4 cm"
  },
  {
    "id": 29,
    "questionText": "The area of a circle with radius (r) is given by the formula:",
    "options": [
      "$2\\pi r$",
      "$\\pi d$",
      "$\\pi r^2$",
      "$\\pi d^2$"
    ],
    "correctAnswer": "$\\pi r^2$"
  },
  {
    "id": 30,
    "questionText": "Find the area of a circle with radius 5 cm. (Use $\\pi = 22/7$)",
    "options": [
      "38.5 cm²",
      "78.5 cm²",
      "157 cm²",
      "25 cm²"
    ],
    "correctAnswer": "78.5 cm²"
  },
  {
    "id": 31,
    "questionText": "If the radius of the circle is 5 cm, then the area of the circle is:",
    "options": [
      "38.5 cm²",
      "78.5 cm²",
      "157 cm²",
      "25 cm²"
    ],
    "correctAnswer": "78.5 cm²"
  },
  {
    "id": 32,
    "questionText": "A circle has a radius of 10 cm. Using $\\pi = 3.14$, what is its area?",
    "options": [
      "31.4 cm²",
      "62.8 cm²",
      "314 cm²",
      "3140 cm²"
    ],
    "correctAnswer": "314 cm²"
  },
  {
    "id": 33,
    "questionText": "What is the area of a triangle with base 6 cm and height 8 cm?",
    "options": [
      "14 cm²",
      "24 cm²",
      "24 cm²",
      "48 cm²"
    ],
    "correctAnswer": "24 cm²"
  },
  {
    "id": 34,
    "questionText": "Find the area of a quarter of a circle with radius 7 cm. (Use $\\pi = 22/7$)",
    "options": [
      "154 cm²",
      "77 cm²",
      "38.5 cm²",
      "19.25 cm²"
    ],
    "correctAnswer": "38.5 cm²"
  },
  {
    "id": 35,
    "questionText": "The circumference of a circular ground is 88 m. Find the area of the ground. (Take $\\pi = 22/7$)",
    "options": [
      "308 m²",
      "616 m²",
      "1232 m²",
      "2464 m²"
    ],
    "correctAnswer": "616 m²"
  },
  {
    "id": 36,
    "questionText": "If the diameter of a circular region is 14m, find its circumference. (Take $\\pi = 22/7$)",
    "options": [
      "22 m",
      "44 m",
      "88 m",
      "154 m"
    ],
    "correctAnswer": "44 m"
  },
  {
    "id": 37,
    "questionText": "A cylinder is a closed solid that has two parallel circular bases which are connected by a:",
    "options": [
      "Flat face",
      "Square face",
      "Curved face",
      "Triangular face"
    ],
    "correctAnswer": "Curved face"
  },
  {
    "id": 38,
    "questionText": "Consider a cylinder with three faces, 2 circular bases, and 1 curved face. What is the shape of the side faces?",
    "options": [
      "Rectangular",
      "Square",
      "Circular",
      "Oval"
    ],
    "correctAnswer": "Rectangular"
  },
  {
    "id": 39,
    "questionText": "The formula for the surface area of a cylinder is:",
    "options": [
      "$2\\pi rh$",
      "$\\pi r^2 h$",
      "$2\\pi r(r + h)$",
      "$\\pi r(r + h)$"
    ],
    "correctAnswer": "$2\\pi r(r + h)$"
  },
  {
    "id": 40,
    "questionText": "The formula for the volume of a cylinder is:",
    "options": [
      "$2\\pi r(r + h)$",
      "$\\pi r^2 h$",
      "$2\\pi rh$",
      "$\\pi r^2$"
    ],
    "correctAnswer": "$\\pi r^2 h$"
  },
  {
    "id": 41,
    "questionText": "If the radius and height of the cylinder are 4 cm and 7 cm respectively, find the surface area of the given cylinder. (Use $\\pi = 3.14$)",
    "options": [
      "100.48 cm²",
      "200.96 cm²",
      "251.32 cm²",
      "301.59 cm²"
    ],
    "correctAnswer": "251.32 cm²"
  },
  {
    "id": 42,
    "questionText": "If the radius of a cylinder is 3 cm and height is 9 cm, find the volume of the cylinder. (Use $\\pi = 3.14$)",
    "options": [
      "84.78 cm³",
      "169.56 cm³",
      "254.34 cm³",
      "339.12 cm³"
    ],
    "correctAnswer": "254.34 cm³"
  },
  {
    "id": 43,
    "questionText": "If the radius of a cylinder is 2.5 cm and height is 6 cm, find the cost of painting the cylinder at the rate of Rs. 15 per square centimetre. (Total Surface Area. Use $\\pi = 22/7$)",
    "options": [
      "Rs. 1500",
      "Rs. 1800",
      "Rs. 2000",
      "Rs. 2003.565"
    ],
    "correctAnswer": "Rs. 2003.565"
  },
  {
    "id": 44,
    "questionText": "A prism is a solid 3D object that is bounded on all its sides by:",
    "options": [
      "Curved faces",
      "Triangular faces",
      "Plane faces",
      "Conical faces"
    ],
    "correctAnswer": "Plane faces"
  },
  {
    "id": 45,
    "questionText": "What type of prism has a square base and 4 rectangular lateral faces?",
    "options": [
      "Right triangular prism",
      "Right rectangular prism",
      "Right square prism",
      "Right pentagonal prism"
    ],
    "correctAnswer": "Right square prism"
  },
  {
    "id": 46,
    "questionText": "What type of prism has a rectangular base and 4 rectangular lateral faces?",
    "options": [
      "Right square prism",
      "Right triangular prism",
      "Right rectangular prism",
      "Right pentagonal prism"
    ],
    "correctAnswer": "Right rectangular prism"
  },
  {
    "id": 47,
    "questionText": "What type of prism has a triangular base and 3 rectangular lateral faces?",
    "options": [
      "Right square prism",
      "Right rectangular prism",
      "Right triangular prism",
      "Right pentagonal prism"
    ],
    "correctAnswer": "Right triangular prism"
  },
  {
    "id": 48,
    "questionText": "A right square prism has how many vertices?",
    "options": [
      "6",
      "8",
      "9",
      "12"
    ],
    "correctAnswer": "8"
  },
  {
    "id": 49,
    "questionText": "A right rectangular prism has how many faces?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 50,
    "questionText": "A right triangular prism has how many edges?",
    "options": [
      "6",
      "9",
      "12",
      "18"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 51,
    "questionText": "The surface area of a right square prism with base length l and height h is:",
    "options": [
      "$2lh + 4l^2$",
      "$2l^2 + 4lh$",
      "$l^2 + 4lh$",
      "$4lh + l^2$"
    ],
    "correctAnswer": "$2l^2 + 4lh$"
  },
  {
    "id": 52,
    "questionText": "The volume of a right square prism with base length l and height h is:",
    "options": [
      "$4l^2h$",
      "$2l^2h$",
      "$l^2h$",
      "$l h^2$"
    ],
    "correctAnswer": "$l^2h$"
  },
  {
    "id": 53,
    "questionText": "Given a right square prism with length = 12 cm and height = 5 cm, find its surface area.",
    "options": [
      "144 cm²",
      "240 cm²",
      "528 cm²",
      "576 cm²"
    ],
    "correctAnswer": "528 cm²"
  },
  {
    "id": 54,
    "questionText": "The volume of a cuboid is given by:",
    "options": [
      "$l \\times w \\times h$",
      "$2(lw + wh + hl)$",
      "$l + w + h$",
      "$l^2wh$"
    ],
    "correctAnswer": "$l \\times w \\times h$"
  },
  {
    "id": 55,
    "questionText": "Given a right rectangular prism with length = 5 cm, width = 15 cm and height = 8 cm, find its surface area.",
    "options": [
      "120 cm²",
      "240 cm²",
      "470 cm²",
      "600 cm²"
    ],
    "correctAnswer": "470 cm²"
  },
  {
    "id": 56,
    "questionText": "The surface area of a right triangular prism is the sum of the areas of all its:",
    "options": [
      "Base and top only",
      "Lateral faces only",
      "Faces",
      "Edges"
    ],
    "correctAnswer": "Faces"
  },
  {
    "id": 57,
    "questionText": "The surface area of a right triangular prism with base length (l) and height (h) and a base triangle with sides (a, b, c) and base height ($h_b$) is given by:",
    "options": [
      "Area of bases + Area of lateral faces",
      "Sum of all faces",
      "2 $\\times$ Area of base + Perimeter of base $\\times$ height",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "id": 58,
    "questionText": "A triangle has a base of 10 cm and a height of 6 cm. What is its area?",
    "options": [
      "16 cm²",
      "30 cm²",
      "30 cm²",
      "60 cm²"
    ],
    "correctAnswer": "30 cm²"
  },
  {
    "id": 59,
    "questionText": "The volume of a right triangular prism is calculated by multiplying its length of a side by itself as given below.",
    "options": [
      "Area of base $\\times$ height",
      "$\\frac{1}{2} \\times$ base of triangle $\\times$ height of triangle $\\times$ length of prism",
      "Perimeter of base $\\times$ length",
      "Area of triangle + Area of rectangles"
    ],
    "correctAnswer": "Area of base $\\times$ height"
  },
  {
    "id": 60,
    "questionText": "If the length of a cubic box is 5 cm, find the volume of the box and convert it into mm³.",
    "options": [
      "125 mm³",
      "1250 mm³",
      "125000 mm³",
      "1250000 mm³"
    ],
    "correctAnswer": "125000 mm³"
  },
  {
    "id": 61,
    "questionText": "What is the area measurement of a boundary of a closed plane figure called?",
    "options": [
      "Perimeter",
      "Area",
      "Circumference",
      "Volume"
    ],
    "correctAnswer": "Area"
  },
  {
    "id": 62,
    "questionText": "What is the perimeter of a rectangle with length 'l' and breadth 'b'?",
    "options": [
      "$l \\times b$",
      "$2(l + b)$",
      "$l + b$",
      "$l^2/b$"
    ],
    "correctAnswer": "$2(l + b)$"
  },
  {
    "id": 63,
    "questionText": "What is the circumference of a circle?",
    "options": [
      "$\\pi r^2$",
      "$2\\pi r$",
      "$\\pi d^2$",
      "$2\\pi d$"
    ],
    "correctAnswer": "$2\\pi r$"
  },
  {
    "id": 64,
    "questionText": "What is the surface area of a cube?",
    "options": [
      "$l^3$",
      "$4l^2$",
      "$6l^2$",
      "$2l^2$"
    ],
    "correctAnswer": "$6l^2$"
  },
  {
    "id": 65,
    "questionText": "What is the surface area of a cylinder?",
    "options": [
      "$\\pi r^2h$",
      "$2\\pi rh$",
      "$2\\pi r(r + h)$",
      "$\\pi r(r+h)$"
    ],
    "correctAnswer": "$2\\pi r(r + h)$"
  },
  {
    "id": 66,
    "questionText": "What is the surface area of a right rectangular prism?",
    "options": [
      "$lwh$",
      "$2(lw + wh + hl)$",
      "$lw + wh + hl$",
      "$lwh/2$"
    ],
    "correctAnswer": "$2(lw + wh + hl)$"
  },
  {
    "id": 67,
    "questionText": "What is the volume of a cube?",
    "options": [
      "$6l^2$",
      "$l^3$",
      "$4l$",
      "$l^2$"
    ],
    "correctAnswer": "$l^3$"
  },
  {
    "id": 68,
    "questionText": "What is the volume of a cylinder?",
    "options": [
      "$2\\pi r(r + h)$",
      "$2\\pi rh$",
      "$\\pi r^2h$",
      "$\\pi r^2$"
    ],
    "correctAnswer": "$\\pi r^2h$"
  },
  {
    "id": 69,
    "questionText": "What is the volume of a right triangular prism?",
    "options": [
      "Area of base $\\times$ height",
      "$\\frac{1}{2}bh_{prism}$",
      "Perimeter of base $\\times$ height",
      "(base + height)/2"
    ],
    "correctAnswer": "Area of base $\\times$ height"
  },
  {
    "id": 70,
    "questionText": "Convert 1 km to m.",
    "options": [
      "10 m",
      "100 m",
      "1000 m",
      "10000 m"
    ],
    "correctAnswer": "1000 m"
  },
  {
    "id": 71,
    "questionText": "Convert 1mm to cm.",
    "options": [
      "0.1 cm",
      "0.01 cm",
      "0.001 cm",
      "10 cm"
    ],
    "correctAnswer": "0.1 cm"
  },
  {
    "id": 72,
    "questionText": "Convert 16 km to m.",
    "options": [
      "1600 m",
      "16000 m",
      "160 m",
      "160000 m"
    ],
    "correctAnswer": "16000 m"
  },
  {
    "id": 73,
    "questionText": "Convert 14:00 in 12-hour clock.",
    "options": [
      "01:00 a.m.",
      "02:00 a.m.",
      "02:00 p.m.",
      "02:00 p.m."
    ],
    "correctAnswer": "02:00 p.m."
  },
  {
    "id": 74,
    "questionText": "If arrival time is 2:40 p.m. and journey time is 4 hours, then departure time is:",
    "options": [
      "08:40 a.m.",
      "09:40 a.m.",
      "10:40 a.m.",
      "11:40 a.m."
    ],
    "correctAnswer": "10:40 a.m."
  },
  {
    "id": 75,
    "questionText": "Convert 72 km/h to m/s.",
    "options": [
      "10 m/s",
      "20 m/s",
      "30 m/s",
      "40 m/s"
    ],
    "correctAnswer": "20 m/s"
  },
  {
    "id": 76,
    "questionText": "Convert 25 m/s to km/h.",
    "options": [
      "70 km/h",
      "90 km/h",
      "80 km/h",
      "100 km/h"
    ],
    "correctAnswer": "90 km/h"
  },
  {
    "id": 77,
    "questionText": "Convert 03:48 p.m. in 24-hour clock.",
    "options": [
      "03:48",
      "14:48",
      "15:48",
      "16:48"
    ],
    "correctAnswer": "15:48"
  },
  {
    "id": 78,
    "questionText": "The perimeter of a square of length 4 cm is:",
    "options": [
      "8 cm",
      "12 cm",
      "16 cm",
      "20 cm"
    ],
    "correctAnswer": "16 cm"
  },
  {
    "id": 79,
    "questionText": "The area of a circle with radius 3 cm is:",
    "options": [
      "$9\\pi$ cm²",
      "$18\\pi$ cm²",
      "$9\\pi$ cm²",
      "$3\\pi$ cm²"
    ],
    "correctAnswer": "$9\\pi$ cm²"
  },
  {
    "id": 80,
    "questionText": "Convert 10 mm² to cm².",
    "options": [
      "0.1 cm²",
      "1 cm²",
      "10 cm²",
      "100 cm²"
    ],
    "correctAnswer": "0.1 cm²"
  },
  {
    "id": 81,
    "questionText": "Convert 10 cm³ to mm³.",
    "options": [
      "100 mm³",
      "1000 mm³",
      "10000 mm³",
      "100000 mm³"
    ],
    "correctAnswer": "10000 mm³"
  },
  {
    "id": 82,
    "questionText": "The surface area of a cylinder with radius = 2 cm and h = 10 cm.",
    "options": [
      "150.8 cm²",
      "150.8 cm²",
      "150 cm²",
      "140 cm²"
    ],
    "correctAnswer": "150.8 cm²"
  },
  {
    "id": 83,
    "questionText": "The surface area of a triangular prism with l = 8 cm, b = 4 cm, h = 3 cm.",
    "options": [
      "78 cm²",
      "96 cm²",
      "108 cm²",
      "120 cm²"
    ],
    "correctAnswer": "120 cm²"
  },
  {
    "id": 84,
    "questionText": "Convert 1 m³ to cm³.",
    "options": [
      "1000 cm³",
      "10000 cm³",
      "1000000 cm³",
      "100000 cm³"
    ],
    "correctAnswer": "1000000 cm³"
  },
  {
    "id": 85,
    "questionText": "Convert 75 km 880 m into m.",
    "options": [
      "7588 m",
      "75880 m",
      "758800 m",
      "758.8 m"
    ],
    "correctAnswer": "75880 m"
  },
  {
    "id": 86,
    "questionText": "Convert 75 cm into mm.",
    "options": [
      "75 mm",
      "7500 mm",
      "750 mm",
      "75000 mm"
    ],
    "correctAnswer": "750 mm"
  },
  {
    "id": 87,
    "questionText": "Convert 585 mm into cm and mm.",
    "options": [
      "5 cm 85 mm",
      "58 cm 5 mm",
      "585 cm 0 mm",
      "5 cm 8 mm"
    ],
    "correctAnswer": "58 cm 5 mm"
  },
  {
    "id": 88,
    "questionText": "Convert 5700 m into km and m.",
    "options": [
      "5 km 7 m",
      "5 km 700 m",
      "57 km 0 m",
      "0.57 km 0 m"
    ],
    "correctAnswer": "5 km 700 m"
  },
  {
    "id": 89,
    "questionText": "The park near Hannah's house is 1 km 200 m. What is the length of park in m?",
    "options": [
      "120 m",
      "1020 m",
      "1200 m",
      "12000 m"
    ],
    "correctAnswer": "1200 m"
  },
  {
    "id": 90,
    "questionText": "Convert 560 seconds into min and sec.",
    "options": [
      "9 min 0 sec",
      "9 min 20 sec",
      "9 min 40 sec",
      "9 min 60 sec"
    ],
    "correctAnswer": "9 min 20 sec"
  },
  {
    "id": 91,
    "questionText": "Convert 98 week 5 days into days.",
    "options": [
      "686 days",
      "691 days",
      "693 days",
      "700 days"
    ],
    "correctAnswer": "691 days"
  },
  {
    "id": 92,
    "questionText": "Convert 35 months into year and months.",
    "options": [
      "2 years 11 months",
      "2 years 11 months",
      "3 years 5 months",
      "3 years 11 months"
    ],
    "correctAnswer": "2 years 11 months"
  },
  {
    "id": 93,
    "questionText": "Convert 490 days into months and days.",
    "options": [
      "16 months 10 days",
      "16 months 10 days",
      "17 months 0 days",
      "17 months 10 days"
    ],
    "correctAnswer": "16 months 10 days"
  },
  {
    "id": 94,
    "questionText": "What is the departure time if journey time is 4h 15min and arrival time is 7:48 p.m.?",
    "options": [
      "3:33 p.m.",
      "3:33 p.m.",
      "3:45 p.m.",
      "4:00 p.m."
    ],
    "correctAnswer": "3:33 p.m."
  },
  {
    "id": 95,
    "questionText": "What is the journey time if departure is 07:50 and arrival is 18:20?",
    "options": [
      "10h 10min",
      "10h 30min",
      "10h 40min",
      "11h 00min"
    ],
    "correctAnswer": "10h 30min"
  },
  {
    "id": 96,
    "questionText": "What is the arrival time if departure is 2:30 a.m. and journey time is 13h 20min?",
    "options": [
      "3:50 p.m.",
      "15:50",
      "4:50 p.m.",
      "3:50 p.m."
    ],
    "correctAnswer": "3:50 p.m."
  },
  {
    "id": 97,
    "questionText": "What is the area of a square shaped box if its side is 15 cm?",
    "options": [
      "225 cm³",
      "225 cm²",
      "60 cm²",
      "60 cm³"
    ],
    "correctAnswer": "225 cm²"
  },
  {
    "id": 98,
    "questionText": "A circular flower has a diameter of 31.4 cm. Find the circumference and area of the region.",
    "options": [
      "31.4 cm",
      "98.596 cm",
      "98.596 cm²",
      "774.1 cm"
    ],
    "correctAnswer": "98.596 cm"
  },
  {
    "id": 99,
    "questionText": "The radius of a cylindrical pillar is 1 m and its height is 10 m. Find its surface area. (Take $\\pi = 3.14$)",
    "options": [
      "62.8 m²",
      "69.08 m²",
      "31.4 m²",
      "78.5 m²"
    ],
    "correctAnswer": "69.08 m²"
  },
  {
    "id": 100,
    "questionText": "The dimensions of a shoe box are 15 cm, 30 cm and 10 cm. Find the volume of the shoe box.",
    "options": [
      "55 cm³",
      "450 cm³",
      "4500 cm³",
      "45000 cm³"
    ],
    "correctAnswer": "4500 cm³"
  }
],
  "Practical Geometry": [
  {
    "id": 1,
    "questionText": "The \"Mathematics 7\" textbook is based on which Single National Curriculum?",
    "options": [
      "Single National Curriculum 2020",
      "Single National Curriculum 2021",
      "Single National Curriculum 2022",
      "Single National Curriculum 2023"
    ],
    "correctAnswer": "Single National Curriculum 2020"
  },
  {
    "id": 2,
    "questionText": "What is the first step in constructing an angle of 60 degrees?",
    "options": [
      "Draw an arc intersecting the ray.",
      "Mark a point A on the ray.",
      "Draw a ray AB with endpoint A.",
      "Draw a line segment of a specific length."
    ],
    "correctAnswer": "Draw a ray AB with endpoint A."
  },
  {
    "id": 3,
    "questionText": "When constructing an angle of 60 degrees, where should the compass point be placed for the first arc after drawing the ray?",
    "options": [
      "At point B on the ray.",
      "At the endpoint A of the ray.",
      "Anywhere on the ray.",
      "At a point outside the ray."
    ],
    "correctAnswer": "At the endpoint A of the ray."
  },
  {
    "id": 4,
    "questionText": "After drawing an initial arc for a 60-degree angle, where is the compass pointed for the second arc?",
    "options": [
      "At the endpoint of the ray.",
      "At any point on the first arc.",
      "At the intersection of the first arc and the ray.",
      "At the center of the first arc."
    ],
    "correctAnswer": "At the intersection of the first arc and the ray."
  },
  {
    "id": 5,
    "questionText": "A triangle with all three sides of different measures is called a:",
    "options": [
      "Isosceles triangle.",
      "Equilateral triangle.",
      "Scalene triangle.",
      "Right-angled triangle."
    ],
    "correctAnswer": "Scalene triangle."
  },
  {
    "id": 6,
    "questionText": "How many sides of equal measure does an isosceles triangle have?",
    "options": [
      "One.",
      "Two.",
      "Three.",
      "None."
    ],
    "correctAnswer": "Two."
  },
  {
    "id": 7,
    "questionText": "A triangle with all sides of equal measure is called an:",
    "options": [
      "Scalene triangle.",
      "Isosceles triangle.",
      "Equilateral triangle.",
      "Obtuse-angled triangle."
    ],
    "correctAnswer": "Equilateral triangle."
  },
  {
    "id": 8,
    "questionText": "What is the measure of each interior angle in an equilateral triangle?",
    "options": [
      "45°.",
      "60°.",
      "90°.",
      "180°."
    ],
    "correctAnswer": "60°."
  },
  {
    "id": 9,
    "questionText": "An acute-angled triangle is defined as a triangle where all angles are less than:",
    "options": [
      "30°.",
      "60°.",
      "90°.",
      "180°."
    ],
    "correctAnswer": "90°."
  },
  {
    "id": 10,
    "questionText": "A right-angled triangle has exactly one angle equal to:",
    "options": [
      "60°.",
      "90°.",
      "120°.",
      "180°."
    ],
    "correctAnswer": "90°."
  },
  {
    "id": 11,
    "questionText": "What is the sum of all interior angles of a triangle?",
    "options": [
      "90°.",
      "180°.",
      "270°.",
      "360°."
    ],
    "correctAnswer": "180°."
  },
  {
    "id": 12,
    "questionText": "An obtuse-angled triangle has exactly one angle greater than:",
    "options": [
      "45°.",
      "60°.",
      "90°.",
      "180°."
    ],
    "correctAnswer": "90°."
  },
  {
    "id": 13,
    "questionText": "For a triangle to be constructible, the sum of the lengths of any two sides must be:",
    "options": [
      "Equal to the third side.",
      "Less than the third side.",
      "Greater than the third side.",
      "Irrelevant to the third side."
    ],
    "correctAnswer": "Greater than the third side."
  },
  {
    "id": 14,
    "questionText": "What is the first step in constructing an equilateral triangle given the length of one side?",
    "options": [
      "Draw an arc from one endpoint.",
      "Mark a third point C.",
      "Draw a line segment AB of the given length.",
      "Construct a 60-degree angle."
    ],
    "correctAnswer": "Draw a line segment AB of the given length."
  },
  {
    "id": 15,
    "questionText": "When constructing an isosceles triangle ABC where mAB = 6 cm and mAC = mBC, what does this imply about the triangle?",
    "options": [
      "It is an equilateral triangle.",
      "It is a scalene triangle.",
      "It is a right-angled triangle.",
      "It is an isosceles triangle with base AB."
    ],
    "correctAnswer": "It is an isosceles triangle with base AB."
  },
  {
    "id": 16,
    "questionText": "To construct an isosceles triangle ABC with mAB = 6 cm, how should the compass be set for arcs from points A and B?",
    "options": [
      "Radius less than 6 cm.",
      "Radius equal to 6 cm.",
      "Radius greater than 6 cm (e.g., 5 cm given example).",
      "Radius equal to half of 6 cm."
    ],
    "correctAnswer": "Radius greater than 6 cm (e.g., 5 cm given example)."
  },
  {
    "id": 17,
    "questionText": "When constructing a right-angled triangle XYZ with hypotenuse YZ = 9 cm and m∠Y = 90°, what kind of triangle is formed?",
    "options": [
      "Scalene.",
      "Isosceles.",
      "Equilateral.",
      "Right-angled."
    ],
    "correctAnswer": "Right-angled."
  },
  {
    "id": 18,
    "questionText": "What tool is primarily used for measuring and drawing angles in practical geometry?",
    "options": [
      "Ruler.",
      "Protractor (implied by angle construction, not explicitly named for measuring, but essential).",
      "Compass.",
      "Set square."
    ],
    "correctAnswer": "Protractor (implied by angle construction, not explicitly named for measuring, but essential)."
  },
  {
    "id": 19,
    "questionText": "In constructing an angle of 90 degrees, after drawing an initial arc from the vertex, how many further arcs are typically drawn to locate the 90-degree point?",
    "options": [
      "One.",
      "Two.",
      "Three.",
      "Four."
    ],
    "correctAnswer": "Two."
  },
  {
    "id": 20,
    "questionText": "The fixed point about which a compass rotates to draw a circle or arc is called the:",
    "options": [
      "Radius.",
      "Circumference.",
      "Centre (implied by compass use).",
      "Diameter."
    ],
    "correctAnswer": "Centre (implied by compass use)."
  },
  {
    "id": 21,
    "questionText": "What does it mean for two angles to be complementary?",
    "options": [
      "They sum to 60 degrees.",
      "They sum to 180 degrees.",
      "They sum to 90 degrees.",
      "They are equal."
    ],
    "correctAnswer": "They sum to 90 degrees."
  },
  {
    "id": 22,
    "questionText": "In a right-angled triangle LMN, if LN is the hypotenuse, then MN is perpendicular to:",
    "options": [
      "LM.",
      "Base (LM).",
      "LN.",
      "Cannot be determined."
    ],
    "correctAnswer": "LM."
  },
  {
    "id": 23,
    "questionText": "Which of the following is NOT a type of triangle classification based on angles?",
    "options": [
      "Acute-angled.",
      "Obtuse-angled.",
      "Right-angled.",
      "Isosceles."
    ],
    "correctAnswer": "Isosceles."
  },
  {
    "id": 24,
    "questionText": "If a triangle has angles 55°, 75°, and 50°, what type of triangle is it?",
    "options": [
      "Obtuse-angled.",
      "Right-angled.",
      "Acute-angled.",
      "Equilateral."
    ],
    "correctAnswer": "Acute-angled."
  },
  {
    "id": 25,
    "questionText": "What is the shortest distance from a point to a line?",
    "options": [
      "Any line segment from the point to the line.",
      "The parallel line segment from the point to the line.",
      "The perpendicular line segment from the point to the line.",
      "The longest line segment from the point to the line."
    ],
    "correctAnswer": "The perpendicular line segment from the point to the line."
  },
  {
    "id": 26,
    "questionText": "A perpendicular bisector divides a line segment into how many equal parts?",
    "options": [
      "One unequal part.",
      "Two equal parts.",
      "Three equal parts.",
      "Four equal parts."
    ],
    "correctAnswer": "Two equal parts."
  },
  {
    "id": 27,
    "questionText": "What is the initial step when constructing a perpendicular bisector of a line segment AB?",
    "options": [
      "Draw arcs from point B.",
      "Draw arcs from both A and B with radius greater than half of AB.",
      "Draw a line through the midpoint of AB.",
      "Measure the length of AB."
    ],
    "correctAnswer": "Draw arcs from both A and B with radius greater than half of AB."
  },
  {
    "id": 28,
    "questionText": "When constructing a perpendicular bisector, the arcs drawn from the two endpoints must intersect at how many points?",
    "options": [
      "One point.",
      "Two points.",
      "Three points.",
      "Zero points."
    ],
    "correctAnswer": "Two points."
  },
  {
    "id": 29,
    "questionText": "If a triangle has angle measures 30°, 60°, and 90°, what type of triangle is it?",
    "options": [
      "Acute-angled.",
      "Obtuse-angled.",
      "Right-angled.",
      "Equilateral."
    ],
    "correctAnswer": "Right-angled."
  },
  {
    "id": 30,
    "questionText": "To construct a scalene triangle ABC with mAB = 5.5 cm, mBC = 4.5 cm, and m∠B = 45°, what should be drawn first?",
    "options": [
      "An arc from C.",
      "An angle at B.",
      "A line segment AB = 5.5 cm.",
      "A ray from A."
    ],
    "correctAnswer": "A line segment AB = 5.5 cm."
  },
  {
    "id": 31,
    "questionText": "After drawing line segment AB and constructing angle B (e.g., 45°) for a scalene triangle, what is the next step to locate point C?",
    "options": [
      "Draw an arc from A.",
      "Draw an arc from B with radius 4.5 cm.",
      "Draw a perpendicular from B.",
      "Extend the ray from B."
    ],
    "correctAnswer": "Draw an arc from B with radius 4.5 cm."
  },
  {
    "id": 32,
    "questionText": "The steps for construction of an angle of 30° usually involve first constructing an angle of:",
    "options": [
      "45°.",
      "60°.",
      "90°.",
      "120°."
    ],
    "correctAnswer": "60°."
  },
  {
    "id": 33,
    "questionText": "To bisect an angle, one typically draws an arc from the vertex, and then from the points where this arc intersects the angle's arms, draws two more arcs. The line connecting the vertex to the intersection of these two arcs performs the:",
    "options": [
      "Perpendicular construction.",
      "Copying of an angle.",
      "Angle bisection (implied by \"bisect an angle\").",
      "Parallel line construction."
    ],
    "correctAnswer": "Angle bisection (implied by \"bisect an angle\")."
  },
  {
    "id": 34,
    "questionText": "If a triangle has angles 45°, 45°, and 90°, it is a:",
    "options": [
      "Scalene triangle.",
      "Equilateral triangle.",
      "Right-angled isosceles triangle (combining angle and side properties).",
      "Obtuse-angled triangle."
    ],
    "correctAnswer": "Right-angled isosceles triangle (combining angle and side properties)."
  },
  {
    "id": 35,
    "questionText": "The \"Remember!\" box on page 143 states that in a right-angled triangle, one angle is 90° and the other two angles are:",
    "options": [
      "Supplementary.",
      "Obtuse.",
      "Complementary.",
      "Equal."
    ],
    "correctAnswer": "Complementary."
  },
  {
    "id": 36,
    "questionText": "Which type of triangle can be acute-angled, right-angled, or obtuse-angled?",
    "options": [
      "Equilateral.",
      "Isosceles.",
      "Scalene.",
      "None of the above."
    ],
    "correctAnswer": "Scalene."
  },
  {
    "id": 37,
    "questionText": "If you are asked to construct a triangle with sides 3 cm, 4 cm, and 8 cm, would it be possible?",
    "options": [
      "Yes, always possible.",
      "No, because 3 + 4 is not greater than 8.",
      "Yes, if it's a right-angled triangle.",
      "Only if the angles are known."
    ],
    "correctAnswer": "No, because 3 + 4 is not greater than 8."
  },
  {
    "id": 38,
    "questionText": "The process of dividing an angle into two equal parts is called:",
    "options": [
      "Angle construction.",
      "Angle measurement.",
      "Angle bisection (implied).",
      "Angle extension."
    ],
    "correctAnswer": "Angle bisection (implied)."
  },
  {
    "id": 39,
    "questionText": "The Punjab Curriculum and Textbook Board, Lahore, is listed as the publisher of \"Mathematics 7\" in which year?",
    "options": [
      "2020.",
      "2021.",
      "2022.",
      "2023."
    ],
    "correctAnswer": "2021."
  },
  {
    "id": 40,
    "questionText": "How many points are typically used as centers for drawing arcs to construct a perpendicular bisector of a line segment?",
    "options": [
      "One.",
      "Two.",
      "Three.",
      "Four."
    ],
    "correctAnswer": "Two."
  },
  {
    "id": 41,
    "questionText": "What is the key characteristic of an obtuse-angled triangle regarding its angles?",
    "options": [
      "All angles are less than 90°.",
      "Exactly one angle is greater than 90°.",
      "Exactly one angle is 90°.",
      "All angles are equal to 60°."
    ],
    "correctAnswer": "Exactly one angle is greater than 90°."
  },
  {
    "id": 42,
    "questionText": "When constructing an angle of 90 degrees using a compass, the construction steps are essentially based on which other angle construction?",
    "options": [
      "30 degrees.",
      "60 degrees (as two 60-degree arcs are often used to define 120, then bisected for 90, or similar method).",
      "120 degrees.",
      "180 degrees."
    ],
    "correctAnswer": "60 degrees (as two 60-degree arcs are often used to define 120, then bisected for 90, or similar method)."
  },
  {
    "id": 43,
    "questionText": "If m∠Y = 90° in a right-angled triangle XYZ, which side is the hypotenuse?",
    "options": [
      "XY.",
      "YZ.",
      "XZ.",
      "Cannot be determined."
    ],
    "correctAnswer": "XZ."
  },
  {
    "id": 44,
    "questionText": "The summary for practical geometry states that a triangle can be constructed if:",
    "options": [
      "The length of all sides are known.",
      "When length of two sides and their included angle are given.",
      "When length of two sides and any angle are given.",
      "All of the above (and when one side and two angles are given)."
    ],
    "correctAnswer": "All of the above (and when one side and two angles are given)."
  },
  {
    "id": 45,
    "questionText": "The \"Remember!\" section on page 146 mentions that since point O is the midpoint of YZ, then mOY = mOZ. This concept is relevant to:",
    "options": [
      "Angle bisection.",
      "Perpendicular bisector (implied by the context of bisector construction).",
      "Triangle construction.",
      "Parallel lines."
    ],
    "correctAnswer": "Perpendicular bisector (implied by the context of bisector construction)."
  },
  {
    "id": 46,
    "questionText": "To construct an angle of 105 degrees, which standard angles could be used as a basis?",
    "options": [
      "30° and 60°.",
      "90° and 60° or 90° and 120° (as 105 is between 90 and 120, implying bisection of the 90-120 range).",
      "45° and 90°.",
      "15° and 60°."
    ],
    "correctAnswer": "90° and 60° or 90° and 120° (as 105 is between 90 and 120, implying bisection of the 90-120 range)."
  },
  {
    "id": 47,
    "questionText": "The \"Try Yourself\" section on page 142 asks to identify the bisection of 30°, 60°, and 90°. This implies learning how to:",
    "options": [
      "Multiply angles.",
      "Sum angles.",
      "Divide angles into two equal parts.",
      "Draw parallel lines."
    ],
    "correctAnswer": "Divide angles into two equal parts."
  },
  {
    "id": 48,
    "questionText": "If an isosceles triangle has one angle of 50°, and it's not the vertex angle, what are the other two angles?",
    "options": [
      "50°, 80° (if 50 is base, vertex is 80).",
      "65°, 65° (if 50 is vertex, base angles are 65).",
      "Both A and B are possible scenarios for an isosceles triangle (not directly from source but logical extension for general MCQs).",
      "Cannot be determined."
    ],
    "correctAnswer": "50°, 80° (if 50 is base, vertex is 80)."
  },
  {
    "id": 49,
    "questionText": "According to the \"Summary\" on page 148, what is NOT a type of triangle classified by side length?",
    "options": [
      "Scalene.",
      "Isosceles.",
      "Equilateral.",
      "Acute-angled."
    ],
    "correctAnswer": "Acute-angled."
  },
  {
    "id": 50,
    "questionText": "What is the main purpose of using a compass in practical geometry constructions?",
    "options": [
      "To draw straight lines.",
      "To measure angles.",
      "To draw arcs and circles of specific radii.",
      "To erase mistakes."
    ],
    "correctAnswer": "To draw arcs and circles of specific radii."
  }
],
  "Angle Properties of Polygons": [
  {
    "id": 1,
    "questionText": "What is the sum of all interior angles in a triangle?",
    "options": [
      "$90^\\circ$",
      "$180^\\circ$",
      "$270^\\circ$",
      "$360^\\circ$"
    ],
    "correctAnswer": "$180^\\circ$"
  },
  {
    "id": 2,
    "questionText": "If the exterior angle of a triangle is $180^\\circ$, what does this imply?",
    "options": [
      "It is a right-angled triangle.",
      "It is an equilateral triangle.",
      "It forms a straight line.",
      "It is an isosceles triangle."
    ],
    "correctAnswer": "It forms a straight line."
  },
  {
    "id": 3,
    "questionText": "In an isosceles triangle, if the base angles are $75^\\circ$ each, what is the measure of the vertex angle?",
    "options": [
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$150^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$"
  },
  {
    "id": 4,
    "questionText": "Which quadrilateral has all four sides of equal length and all angles equal to $90^\\circ$?",
    "options": [
      "Rectangle.",
      "Rhombus.",
      "Square.",
      "Parallelogram."
    ],
    "correctAnswer": "Square."
  },
  {
    "id": 5,
    "questionText": "In a rectangle, the diagonals:",
    "options": [
      "Are perpendicular to each other.",
      "Bisect each other.",
      "Are of unequal length.",
      "Do not bisect each other."
    ],
    "correctAnswer": "Bisect each other."
  },
  {
    "id": 6,
    "questionText": "Which property is characteristic of a parallelogram?",
    "options": [
      "All sides are of equal length.",
      "All angles are $90^\\circ$.",
      "Opposite sides are parallel.",
      "Diagonals are perpendicular."
    ],
    "correctAnswer": "Opposite sides are parallel."
  },
  {
    "id": 7,
    "questionText": "The sum of the interior angles of a quadrilateral is:",
    "options": [
      "$90^\\circ$.",
      "$180^\\circ$.",
      "$360^\\circ$.",
      "$540^\\circ$."
    ],
    "correctAnswer": "$360^\\circ$"
  },
  {
    "id": 8,
    "questionText": "What is the formula for the sum of the interior angles of an n-sided polygon?",
    "options": [
      "$n \\times 180^\\circ$.",
      "$(n + 2) \\times 180^\\circ$.",
      "$(n - 2) \\times 180^\\circ$.",
      "$(n - 1) \\times 180^\\circ$."
    ],
    "correctAnswer": "$(n - 2) \\times 180^\\circ$"
  },
  {
    "id": 9,
    "questionText": "What is the sum of the exterior angles of any polygon?",
    "options": [
      "$90^\\circ$.",
      "$180^\\circ$.",
      "$360^\\circ$.",
      "Varies with the number of sides."
    ],
    "correctAnswer": "$360^\\circ$"
  },
  {
    "id": 10,
    "questionText": "A polygon with at least one reflex angle (angle greater than $180^\\circ$ but less than $360^\\circ$) is called a:",
    "options": [
      "Convex polygon.",
      "Regular polygon.",
      "Concave polygon.",
      "Irregular polygon."
    ],
    "correctAnswer": "Concave polygon."
  },
  {
    "id": 11,
    "questionText": "What is the measure of each interior angle of a regular octagon (8-sided polygon)?",
    "options": [
      "$1080^\\circ$.",
      "$135^\\circ$.",
      "$45^\\circ$.",
      "$108^\\circ$."
    ],
    "correctAnswer": "$135^\\circ$"
  },
  {
    "id": 12,
    "questionText": "If the exterior angle of a regular polygon is $72^\\circ$, how many sides does the polygon have?",
    "options": [
      "4 sides.",
      "5 sides.",
      "6 sides.",
      "10 sides."
    ],
    "correctAnswer": "5 sides."
  },
  {
    "id": 13,
    "questionText": "The number of diagonals in a polygon with 'n' sides is calculated by the formula:",
    "options": [
      "$n(n-1)/2$.",
      "$n(n+1)/2$.",
      "$n(n-3)/2$.",
      "$n(n+3)/2$."
    ],
    "correctAnswer": "$n(n-3)/2$"
  },
  {
    "id": 14,
    "questionText": "In a rhombus, the diagonals:",
    "options": [
      "Are equal in length.",
      "Bisect each other at right angles.",
      "Are not perpendicular.",
      "Do not bisect each other."
    ],
    "correctAnswer": "Bisect each other at right angles."
  },
  {
    "id": 15,
    "questionText": "What is the sum of the interior angles of a pentagon (5-sided polygon)?",
    "options": [
      "$360^\\circ$.",
      "$540^\\circ$.",
      "$720^\\circ$.",
      "$900^\\circ$."
    ],
    "correctAnswer": "$540^\\circ$"
  },
  {
    "id": 16,
    "questionText": "A polygon where all its sides and all its interior angles are equal in measure is called a:",
    "options": [
      "Concave polygon.",
      "Irregular polygon.",
      "Regular polygon.",
      "Simple polygon."
    ],
    "correctAnswer": "Regular polygon."
  },
  {
    "id": 17,
    "questionText": "Which of the following statements is true for a trapezium?",
    "options": [
      "All sides are equal.",
      "It has two pairs of parallel sides.",
      "Only one pair of parallel sides.",
      "Diagonals bisect each other."
    ],
    "correctAnswer": "Only one pair of parallel sides."
  },
  {
    "id": 18,
    "questionText": "If the interior angle of a regular polygon is $108^\\circ$, what type of polygon is it?",
    "options": [
      "Quadrilateral.",
      "Triangle.",
      "Pentagon.",
      "Hexagon."
    ],
    "correctAnswer": "Pentagon."
  },
  {
    "id": 19,
    "questionText": "In a square, what is the measure of each interior angle?",
    "options": [
      "$45^\\circ$.",
      "$60^\\circ$.",
      "$90^\\circ$.",
      "$180^\\circ$."
    ],
    "correctAnswer": "$90^\\circ$"
  },
  {
    "id": 20,
    "questionText": "Opposite angles in a parallelogram are:",
    "options": [
      "Supplementary.",
      "Complementary.",
      "Equal.",
      "None of the above."
    ],
    "correctAnswer": "Equal."
  },
  {
    "id": 21,
    "questionText": "The sum of the adjacent angles in a parallelogram is:",
    "options": [
      "$90^\\circ$.",
      "$180^\\circ$.",
      "$270^\\circ$.",
      "$360^\\circ$."
    ],
    "correctAnswer": "$180^\\circ$"
  },
  {
    "id": 22,
    "questionText": "In a kite, which property holds true for its diagonals?",
    "options": [
      "They are equal in length.",
      "They bisect each other.",
      "They are perpendicular to each other.",
      "Only one diagonal is bisected by the other."
    ],
    "correctAnswer": "They are perpendicular to each other."
  },
  {
    "id": 23,
    "questionText": "A polygon with 6 sides is called a:",
    "options": [
      "Pentagon.",
      "Octagon.",
      "Hexagon.",
      "Heptagon."
    ],
    "correctAnswer": "Hexagon."
  },
  {
    "id": 24,
    "questionText": "If two angles are \"alternate interior angles,\" they are:",
    "options": [
      "Supplementary.",
      "Equal.",
      "Complementary.",
      "Adjacent."
    ],
    "correctAnswer": "Equal."
  },
  {
    "id": 25,
    "questionText": "The exterior angle of a triangle is equal to the sum of the:",
    "options": [
      "Adjacent interior angles.",
      "All interior angles.",
      "Two opposite interior angles.",
      "Sum of interior and exterior angles."
    ],
    "correctAnswer": "Two opposite interior angles."
  },
  {
    "id": 26,
    "questionText": "In a triangle, if two angles are $60^\\circ$ and $70^\\circ$, what is the third angle?",
    "options": [
      "$40^\\circ$.",
      "$50^\\circ$.",
      "$80^\\circ$.",
      "$90^\\circ$."
    ],
    "correctAnswer": "$50^\\circ$"
  },
  {
    "id": 27,
    "questionText": "The sides of a polygon are:",
    "options": [
      "Curved lines.",
      "Line segments.",
      "Rays.",
      "Points."
    ],
    "correctAnswer": "Line segments."
  },
  {
    "id": 28,
    "questionText": "The number of vertices in a polygon is equal to the number of its:",
    "options": [
      "Diagonals.",
      "Angles only.",
      "Sides.",
      "Exterior angles only."
    ],
    "correctAnswer": "Sides."
  },
  {
    "id": 29,
    "questionText": "A polygon whose all its diagonals lie inside the polygon is called a:",
    "options": [
      "Concave polygon.",
      "Convex polygon.",
      "Regular polygon.",
      "Irregular polygon."
    ],
    "correctAnswer": "Convex polygon."
  },
  {
    "id": 30,
    "questionText": "In a square, the diagonals are:",
    "options": [
      "Unequal and bisect each other.",
      "Equal and do not bisect each other.",
      "Equal and bisect each other at 90 degrees.",
      "Perpendicular but unequal."
    ],
    "correctAnswer": "Equal and bisect each other at 90 degrees."
  },
  {
    "id": 31,
    "questionText": "If two angles are vertically opposite angles, then they are:",
    "options": [
      "Supplementary.",
      "Complementary.",
      "Equal.",
      "Adjacent."
    ],
    "correctAnswer": "Equal."
  },
  {
    "id": 32,
    "questionText": "What is the sum of interior angles of a nonagon (9-sided polygon)?",
    "options": [
      "$900^\\circ$.",
      "$1260^\\circ$.",
      "$1440^\\circ$.",
      "$1080^\\circ$."
    ],
    "correctAnswer": "$1260^\\circ$"
  },
  {
    "id": 33,
    "questionText": "How many pairs of parallel sides does a parallelogram have?",
    "options": [
      "Zero.",
      "One.",
      "Two.",
      "Three."
    ],
    "correctAnswer": "Two."
  },
  {
    "id": 34,
    "questionText": "In a quadrilateral, the sum of interior angles is derived from dividing it into how many triangles from one vertex?",
    "options": [
      "One.",
      "Two.",
      "Three.",
      "Four."
    ],
    "correctAnswer": "Two."
  },
  {
    "id": 35,
    "questionText": "What is the measure of each exterior angle of a regular hexagon?",
    "options": [
      "$30^\\circ$.",
      "$45^\\circ$.",
      "$60^\\circ$.",
      "$90^\\circ$."
    ],
    "correctAnswer": "$60^\\circ$"
  },
  {
    "id": 36,
    "questionText": "If a polygon has an interior angle sum of $1080^\\circ$, how many sides does it have?",
    "options": [
      "6 sides.",
      "7 sides.",
      "8 sides.",
      "9 sides."
    ],
    "correctAnswer": "8 sides."
  },
  {
    "id": 37,
    "questionText": "A polygon described as having \"at least one reflex angle\" is by definition:",
    "options": [
      "Regular.",
      "Convex.",
      "Concave.",
      "Equilateral."
    ],
    "correctAnswer": "Concave."
  },
  {
    "id": 38,
    "questionText": "The diagonals of a rectangle are:",
    "options": [
      "Perpendicular.",
      "Equal.",
      "Parallel.",
      "Unequal."
    ],
    "correctAnswer": "Equal."
  },
  {
    "id": 39,
    "questionText": "In a rhombus, adjacent angles are:",
    "options": [
      "Equal.",
      "Complementary.",
      "Supplementary.",
      "Obtuse."
    ],
    "correctAnswer": "Supplementary."
  },
  {
    "id": 40,
    "questionText": "What is the common name for a 4-sided polygon?",
    "options": [
      "Triangle.",
      "Pentagon.",
      "Hexagon.",
      "Quadrilateral."
    ],
    "correctAnswer": "Quadrilateral."
  },
  {
    "id": 41,
    "questionText": "If the interior angle of a regular polygon is $144^\\circ$, how many sides does it have?",
    "options": [
      "8 sides.",
      "10 sides.",
      "12 sides.",
      "15 sides."
    ],
    "correctAnswer": "10 sides."
  },
  {
    "id": 42,
    "questionText": "The number of diagonals in a triangle (n=3) is:",
    "options": [
      "1.",
      "0.",
      "2.",
      "3."
    ],
    "correctAnswer": "0."
  },
  {
    "id": 43,
    "questionText": "Which of the following is NOT a characteristic of a regular polygon?",
    "options": [
      "All sides are equal.",
      "All interior angles are equal.",
      "It must be convex (regular polygons are typically convex).",
      "Its exterior angles may vary."
    ],
    "correctAnswer": "Its exterior angles may vary."
  },
  {
    "id": 44,
    "questionText": "In a triangle, if an exterior angle is $110^\\circ$, and one of its interior opposite angles is $60^\\circ$, what is the other interior opposite angle?",
    "options": [
      "$30^\\circ$.",
      "$50^\\circ$.",
      "$70^\\circ$.",
      "$100^\\circ$."
    ],
    "correctAnswer": "$50^\\circ$"
  },
  {
    "id": 45,
    "questionText": "The \"Remember!\" box on page 153 states that every square is a parallelogram and every rectangle is a:",
    "options": [
      "Rhombus.",
      "Kite.",
      "Parallelogram.",
      "Trapezium."
    ],
    "correctAnswer": "Parallelogram."
  },
  {
    "id": 46,
    "questionText": "What type of angle is $262^\\circ$?",
    "options": [
      "Acute.",
      "Obtuse.",
      "Straight.",
      "Reflex."
    ],
    "correctAnswer": "Reflex."
  },
  {
    "id": 47,
    "questionText": "A \"Tessellation\" is a repetitive pattern of polygons that fit together without overlapping and without gaps between them. This concept is mentioned in relation to:",
    "options": [
      "Regular polygons.",
      "Angle properties.",
      "Both of the above.",
      "None of the above."
    ],
    "correctAnswer": "Both of the above."
  },
  {
    "id": 48,
    "questionText": "If a rectangle ABCD has $\\text{m}\\angle A = 90^\\circ$, what are the measures of angles B, C, and D?",
    "options": [
      "All are $60^\\circ$.",
      "All are $45^\\circ$.",
      "All are $90^\\circ$.",
      "They vary."
    ],
    "correctAnswer": "All are $90^\\circ$."
  },
  {
    "id": 49,
    "questionText": "Which of the following polygons has 7 sides?",
    "options": [
      "Hexagon.",
      "Octagon.",
      "Heptagon.",
      "Decagon."
    ],
    "correctAnswer": "Heptagon."
  },
  {
    "id": 50,
    "questionText": "The summary on page 164 states that in a trapezium, there are:",
    "options": [
      "All sides equal.",
      "Two parallel lines.",
      "All angles are equal.",
      "Diagonals are perpendicular."
    ],
    "correctAnswer": "Two parallel lines."
  }
],
  "Transformation": [
  {
    "id": 1,
    "questionText": "What are the two main types of symmetry discussed in the source?",
    "options": [
      "Linear and Curvilinear.",
      "Direct and Indirect.",
      "Reflective and Rotational.",
      "Horizontal and Vertical."
    ],
    "correctAnswer": "Reflective and Rotational."
  },
  {
    "id": 2,
    "questionText": "In reflective symmetry, the line that divides a shape into two equal halves is called the:",
    "options": [
      "Axis of rotation.",
      "Mirror line.",
      "Translation vector.",
      "Symmetry point."
    ],
    "correctAnswer": "Mirror line."
  },
  {
    "id": 3,
    "questionText": "A Ferris wheel is given as an example of what type of symmetry?",
    "options": [
      "Reflective symmetry.",
      "Translational symmetry.",
      "Rotational symmetry.",
      "Glide symmetry."
    ],
    "correctAnswer": "Rotational symmetry."
  },
  {
    "id": 4,
    "questionText": "How many lines of symmetry does a square have?",
    "options": [
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctAnswer": "4."
  },
  {
    "id": 5,
    "questionText": "What is the order of rotational symmetry for a rectangle that is not a square?",
    "options": [
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctAnswer": "2."
  },
  {
    "id": 6,
    "questionText": "The number of times a shape becomes the same in one full rotation ($360^\\circ$) is called its:",
    "options": [
      "Angle of rotation.",
      "Centre of rotation.",
      "Order of rotation.",
      "Direction of rotation."
    ],
    "correctAnswer": "Order of rotation."
  },
  {
    "id": 7,
    "questionText": "A geometric figure moving from one place to another without turning is called:",
    "options": [
      "Reflection.",
      "Rotation.",
      "Translation.",
      "Dilation."
    ],
    "correctAnswer": "Translation."
  },
  {
    "id": 8,
    "questionText": "When a shape is reflected, what happens to its orientation?",
    "options": [
      "It remains the same.",
      "It flips over (produces a mirror image).",
      "It rotates.",
      "It shrinks."
    ],
    "correctAnswer": "It flips over (produces a mirror image)."
  },
  {
    "id": 9,
    "questionText": "If point P(x, y) is translated by 2 units to the right and 3 units up, the new coordinates P'(x', y') would be:",
    "options": [
      "(x-2, y-3).",
      "(x+2, y+3).",
      "(x+2, y-3).",
      "(x-2, y+3)."
    ],
    "correctAnswer": "(x+2, y+3)."
  },
  {
    "id": 10,
    "questionText": "Which transformation maps a figure to a new position without changing its size, shape, or orientation?",
    "options": [
      "Reflection.",
      "Rotation.",
      "Translation.",
      "Dilation."
    ],
    "correctAnswer": "Translation."
  },
  {
    "id": 11,
    "questionText": "If an object is rotated by $180^\\circ$ about a point O, what is the relative position of the original point and its image with respect to O?",
    "options": [
      "They are on the same side of O.",
      "They are equidistant from O on opposite sides.",
      "The image is closer to O.",
      "The original point is closer to O."
    ],
    "correctAnswer": "They are equidistant from O on opposite sides."
  },
  {
    "id": 12,
    "questionText": "A geometric transformation that produces a mirror image of a figure is called:",
    "options": [
      "Translation.",
      "Rotation.",
      "Reflection.",
      "Enlargement."
    ],
    "correctAnswer": "Reflection."
  },
  {
    "id": 13,
    "questionText": "How many lines of symmetry does an isosceles triangle (not equilateral) have?",
    "options": [
      "0.",
      "1.",
      "2.",
      "3."
    ],
    "correctAnswer": "1."
  },
  {
    "id": 14,
    "questionText": "The center of rotation is the fixed point around which an object moves in a:",
    "options": [
      "Reflection.",
      "Translation.",
      "Rotation.",
      "Glide."
    ],
    "correctAnswer": "Rotation."
  },
  {
    "id": 15,
    "questionText": "What type of transformation is described by a rule like (x, y) \\( \\rightarrow \\) (x + a, y + b)?",
    "options": [
      "Reflection.",
      "Rotation.",
      "Translation.",
      "Dilation."
    ],
    "correctAnswer": "Translation."
  },
  {
    "id": 16,
    "questionText": "What is the order of rotational symmetry for a shape that only looks the same after a full $360^\\circ$ turn?",
    "options": [
      "0.",
      "1.",
      "2.",
      "Undefined."
    ],
    "correctAnswer": "1."
  },
  {
    "id": 17,
    "questionText": "A type of symmetry where half of the shape reflects the other half is known as:",
    "options": [
      "Rotational symmetry.",
      "Reflective symmetry.",
      "Translational symmetry.",
      "Point symmetry."
    ],
    "correctAnswer": "Reflective symmetry."
  },
  {
    "id": 18,
    "questionText": "If a point A' is the image of point A after a reflection, what is true about the distance between the point and the mirror line?",
    "options": [
      "A' is closer to the mirror line.",
      "A is further from the mirror line.",
      "The distance from the object to the mirror line is the same as the distance from the image to the mirror line.",
      "The distance doubles."
    ],
    "correctAnswer": "The distance from the object to the mirror line is the same as the distance from the image to the mirror line."
  },
  {
    "id": 19,
    "questionText": "If a square is rotated by $90^\\circ$ clockwise, what will be its appearance compared to the original?",
    "options": [
      "It will look different.",
      "It will look the same.",
      "It will be reflected.",
      "It will be enlarged."
    ],
    "correctAnswer": "It will look the same."
  },
  {
    "id": 20,
    "questionText": "A translation can be defined as a \"slide\" because:",
    "options": [
      "It changes the size of the object.",
      "It turns the object.",
      "It moves the object from one place to another without turning.",
      "It creates a mirror image."
    ],
    "correctAnswer": "It moves the object from one place to another without turning."
  },
  {
    "id": 21,
    "questionText": "The \"Remember!\" box on page 168 states that translation is also called:",
    "options": [
      "Turn.",
      "Flip.",
      "Slide.",
      "Expand."
    ],
    "correctAnswer": "Slide."
  },
  {
    "id": 22,
    "questionText": "What is the image of point (3, 2) after translation by vector (1, -1)?",
    "options": [
      "(4, 1).",
      "(2, 3).",
      "(4, 3).",
      "(3, 1)."
    ],
    "correctAnswer": "(4, 1)."
  },
  {
    "id": 23,
    "questionText": "Which of the following transformations preserves the size and shape of a figure?",
    "options": [
      "Only reflection.",
      "Only rotation.",
      "Only translation.",
      "Reflection, rotation, and translation."
    ],
    "correctAnswer": "Reflection, rotation, and translation."
  },
  {
    "id": 24,
    "questionText": "If a shape is reflected across a horizontal mirror line, its x-coordinates remain the same, but its y-coordinates will:",
    "options": [
      "Also remain the same.",
      "Change sign (if reflected across x-axis) or change relative to mirror line.",
      "Swap with x-coordinates.",
      "Be multiplied by a factor."
    ],
    "correctAnswer": "Change sign (if reflected across x-axis) or change relative to mirror line."
  },
  {
    "id": 25,
    "questionText": "The angle of rotation specifies:",
    "options": [
      "The size of the rotation.",
      "The amount of turn around a fixed point.",
      "The direction of the mirror line.",
      "The distance of translation."
    ],
    "correctAnswer": "The amount of turn around a fixed point."
  },
  {
    "id": 26,
    "questionText": "An object that only has a rotational symmetry of order 1:",
    "options": [
      "Can be rotated $90^\\circ$ to look the same.",
      "Has at least one line of symmetry.",
      "Only looks the same after a full $360^\\circ$ rotation.",
      "Has a center of rotation outside the object."
    ],
    "correctAnswer": "Only looks the same after a full $360^\\circ$ rotation."
  },
  {
    "id": 27,
    "questionText": "A regular hexagon has how many lines of symmetry?",
    "options": [
      "3.",
      "6.",
      "8.",
      "12."
    ],
    "correctAnswer": "6."
  },
  {
    "id": 28,
    "questionText": "The coordinates of an image after reflection across the x-axis for point (x, y) would be:",
    "options": [
      "(x, -y).",
      "(-x, y).",
      "(-x, -y).",
      "(y, x)."
    ],
    "correctAnswer": "(x, -y)."
  },
  {
    "id": 29,
    "questionText": "If the order of rotational symmetry of a regular polygon with 'n' sides is 'n', then the angle of rotation for each identical appearance is:",
    "options": [
      "$90^\\circ/n$.",
      "$180^\\circ/n$.",
      "$360^\\circ/n$.",
      "$720^\\circ/n$."
    ],
    "correctAnswer": "$360^\\circ/n$."
  },
  {
    "id": 30,
    "questionText": "How many lines of symmetry does a rhombus (not a square) have?",
    "options": [
      "0.",
      "2.",
      "4.",
      "Infinite."
    ],
    "correctAnswer": "2."
  },
  {
    "id": 31,
    "questionText": "If an object undergoes a reflection, its image is:",
    "options": [
      "Congruent to the object (same size and shape) but may have different orientation.",
      "Larger than the object.",
      "Smaller than the object.",
      "Rotated."
    ],
    "correctAnswer": "Congruent to the object (same size and shape) but may have different orientation."
  },
  {
    "id": 32,
    "questionText": "The concept of \"symmetry looks beautiful\" is presented as an introduction to:",
    "options": [
      "Algebra.",
      "Measurements.",
      "Transformations.",
      "Data Management."
    ],
    "correctAnswer": "Transformations."
  },
  {
    "id": 33,
    "questionText": "What is the image of point (5, -3) after translation by the vector (2, 4)?",
    "options": [
      "(7, 1).",
      "(3, -7).",
      "(7, 7).",
      "(3, 1)."
    ],
    "correctAnswer": "(7, 1)."
  },
  {
    "id": 34,
    "questionText": "A transformation can be defined as the process of:",
    "options": [
      "Moving a geometric figure from one position to another.",
      "Changing the color of a figure.",
      "Enlarging a figure only.",
      "Erasing a figure."
    ],
    "correctAnswer": "Moving a geometric figure from one position to another."
  },
  {
    "id": 35,
    "questionText": "The source explicitly mentions that reflection, rotation, and translation are types of:",
    "options": [
      "Symmetry.",
      "Transformation.",
      "Geometry.",
      "Patterns."
    ],
    "correctAnswer": "Transformation."
  },
  {
    "id": 36,
    "questionText": "If a figure has rotational symmetry of order 4, what is the smallest angle (in degrees) through which it can be rotated to appear the same?",
    "options": [
      "$45^\\circ$.",
      "$60^\\circ$.",
      "$90^\\circ$.",
      "$180^\\circ$."
    ],
    "correctAnswer": "$90^\\circ$"
  },
  {
    "id": 37,
    "questionText": "A line of symmetry for a rectangle that is not a square passes through its:",
    "options": [
      "Corners.",
      "Diagonals only.",
      "Midpoints of opposite sides.",
      "Center of rotation."
    ],
    "correctAnswer": "Midpoints of opposite sides."
  },
  {
    "id": 38,
    "questionText": "The distance between corresponding points in a figure and its reflection across a mirror line is:",
    "options": [
      "Variable.",
      "Zero.",
      "Equal (distance from object to line = distance from image to line).",
      "Doubled."
    ],
    "correctAnswer": "Equal (distance from object to line = distance from image to line)."
  },
  {
    "id": 39,
    "questionText": "The image of AB after reflection across line L is denoted as:",
    "options": [
      "AB'.",
      "A'B.",
      "A'B'.",
      "A''B''."
    ],
    "correctAnswer": "A'B'."
  },
  {
    "id": 40,
    "questionText": "How many units is point A' from line L if point A is 3 units from line L after reflection?",
    "options": [
      "1 unit.",
      "2 units.",
      "3 units.",
      "6 units."
    ],
    "correctAnswer": "3 units."
  },
  {
    "id": 41,
    "questionText": "A rotation transformation requires a specified:",
    "options": [
      "Mirror line.",
      "Translation vector.",
      "Centre of rotation and angle/direction.",
      "Scale factor."
    ],
    "correctAnswer": "Centre of rotation and angle/direction."
  },
  {
    "id": 42,
    "questionText": "If a shape has order of rotation 1, it means it has:",
    "options": [
      "High symmetry.",
      "No actual rotational symmetry other than a full turn.",
      "Only reflective symmetry.",
      "A very small angle of rotation."
    ],
    "correctAnswer": "No actual rotational symmetry other than a full turn."
  },
  {
    "id": 43,
    "questionText": "Which letter has both reflective and rotational symmetry?",
    "options": [
      "F.",
      "A.",
      "H.",
      "N."
    ],
    "correctAnswer": "H."
  },
  {
    "id": 44,
    "questionText": "Which of the following describes a translation?",
    "options": [
      "Flipping a figure.",
      "Turning a figure around a point.",
      "Sliding a figure along a straight line.",
      "Changing the size of a figure."
    ],
    "correctAnswer": "Sliding a figure along a straight line."
  },
  {
    "id": 45,
    "questionText": "The transformation (x, y) \\( \\rightarrow \\) (x-2, y+3) represents a translation of:",
    "options": [
      "2 units right, 3 units down.",
      "2 units right, 3 units up.",
      "2 units left, 3 units up.",
      "2 units left, 3 units down."
    ],
    "correctAnswer": "2 units left, 3 units up."
  },
  {
    "id": 46,
    "questionText": "When a shape rotates $360^\\circ$, it returns to its:",
    "options": [
      "Mirrored image.",
      "Enlarged image.",
      "Translated position.",
      "Original position."
    ],
    "correctAnswer": "Original position."
  },
  {
    "id": 47,
    "questionText": "What happens to the size of a figure after a translation?",
    "options": [
      "It increases.",
      "It decreases.",
      "It remains the same.",
      "It changes unpredictably."
    ],
    "correctAnswer": "It remains the same."
  },
  {
    "id": 48,
    "questionText": "A horizontal line of symmetry divides a figure into two equal halves that are mirror images across a:",
    "options": [
      "Vertical line.",
      "Horizontal line.",
      "Diagonal line.",
      "Point."
    ],
    "correctAnswer": "Horizontal line."
  },
  {
    "id": 49,
    "questionText": "In a square, the lines of symmetry include the lines connecting:",
    "options": [
      "Midpoints of adjacent sides.",
      "Midpoints of opposite sides and diagonals.",
      "Opposite corners only.",
      "Only horizontal and vertical lines."
    ],
    "correctAnswer": "Midpoints of opposite sides and diagonals."
  },
  {
    "id": 50,
    "questionText": "The \"Summary\" for Transformation on page 170 states that \"The point and image are at equal distances from the line of symmetry\" for which type of transformation?",
    "options": [
      "Rotation.",
      "Translation.",
      "Reflection.",
      "All transformations."
    ],
    "correctAnswer": "Reflection."
  }
],
  "Statistics": [
  {
    "id": 1,
    "questionText": "What is data defined as in statistics?",
    "options": [
      "Opinions and beliefs",
      "Collection of information in the form of facts and figures",
      "Imaginary numbers",
      "Artistic representations"
    ],
    "correctAnswer": "Collection of information in the form of facts and figures"
  },
  {
    "id": 2,
    "questionText": "Which type of data consists only of whole numbers?",
    "options": [
      "Continuous data",
      "Qualitative data",
      "Discrete data",
      "Ordinal data"
    ],
    "correctAnswer": "Discrete data"
  },
  {
    "id": 3,
    "questionText": "The height of a boy and the mass of a student are examples of which type of data?",
    "options": [
      "Discrete data",
      "Categorical data",
      "Continuous data",
      "Nominal data"
    ],
    "correctAnswer": "Continuous data"
  },
  {
    "id": 4,
    "questionText": "What are the two main ways data can be represented in statistics?",
    "options": [
      "Primary and Secondary",
      "Ungrouped and Grouped",
      "Raw and Processed",
      "Numerical and Graphical"
    ],
    "correctAnswer": "Ungrouped and Grouped"
  },
  {
    "id": 5,
    "questionText": "A list of classes/groups and their respective class frequencies is called a:",
    "options": [
      "Data set",
      "Tally chart",
      "Frequency distribution",
      "Histogram"
    ],
    "correctAnswer": "Frequency distribution"
  },
  {
    "id": 6,
    "questionText": "In a frequency distribution table, what is denoted by 'f'?",
    "options": [
      "Frequency",
      "Class interval",
      "Tally marks",
      "Midpoint"
    ],
    "correctAnswer": "Frequency"
  },
  {
    "id": 7,
    "questionText": "If the largest value in a data set is 40, and the smallest value is 15, what is the range?",
    "options": [
      "25",
      "55",
      "20",
      "30"
    ],
    "correctAnswer": "25"
  },
  {
    "id": 8,
    "questionText": "According to the sources, what is the formula to calculate the number of classes?",
    "options": [
      "(Largest value + Smallest value) / 2",
      "(Largest value - Smallest value) / Size of class interval",
      "Total number of values / Number of categories",
      "Frequency / Number of items"
    ],
    "correctAnswer": "(Largest value - Smallest value) / Size of class interval"
  },
  {
    "id": 9,
    "questionText": "What are \"tally marks\" used for in statistics?",
    "options": [
      "To draw graphs",
      "To represent numbers in calculations",
      "To count the given values in a given interval",
      "To define the class boundaries"
    ],
    "correctAnswer": "To count the given values in a given interval"
  },
  {
    "id": 10,
    "questionText": "The midpoint of a class interval is calculated by:",
    "options": [
      "(Upper limit - Lower limit) / 2",
      "(Lower limit + Upper limit) / 2",
      "Upper limit - Lower limit",
      "Lower limit + Upper limit"
    ],
    "correctAnswer": "(Lower limit + Upper limit) / 2"
  },
  {
    "id": 11,
    "questionText": "How are class boundaries obtained from class limits?",
    "options": [
      "By adding 0.5 to both limits",
      "By subtracting 0.5 from the lower class limit and adding 0.5 to the upper class limit",
      "By dividing by 2",
      "By rounding to the nearest whole number"
    ],
    "correctAnswer": "By subtracting 0.5 from the lower class limit and adding 0.5 to the upper class limit"
  },
  {
    "id": 12,
    "questionText": "Which graphical representation uses rectangular bars of different heights to represent different categories, where the height of each bar is proportional to the values they represent?",
    "options": [
      "Pie graph",
      "Line graph",
      "Histogram",
      "Bar graph"
    ],
    "correctAnswer": "Bar graph"
  },
  {
    "id": 13,
    "questionText": "In a vertical bar graph, on which axis are the categories typically represented?",
    "options": [
      "Y-axis",
      "X-axis",
      "Z-axis",
      "Both X and Y axes"
    ],
    "correctAnswer": "X-axis"
  },
  {
    "id": 14,
    "questionText": "What is the primary purpose of a line graph?",
    "options": [
      "To compare different categories",
      "To show the trend in data over a period of time",
      "To display parts of a whole",
      "To show frequency distribution with no gaps"
    ],
    "correctAnswer": "To show the trend in data over a period of time"
  },
  {
    "id": 15,
    "questionText": "Which type of graph displays data in a circular shape, where the arc length of the slices represents the proportional size of the data?",
    "options": [
      "Bar graph",
      "Histogram",
      "Line graph",
      "Pie graph"
    ],
    "correctAnswer": "Pie graph"
  },
  {
    "id": 16,
    "questionText": "A histogram is described as similar to a bar graph, but it is constructed for:",
    "options": [
      "Qualitative data only",
      "Frequency distribution",
      "Time series data",
      "Geographical data"
    ],
    "correctAnswer": "Frequency distribution"
  },
  {
    "id": 17,
    "questionText": "What is a key visual difference between a histogram and a bar graph, as depicted in the sources?",
    "options": [
      "Histograms use curved bars.",
      "Bar graphs have gaps between bars, while histograms do not.",
      "Histograms are always vertical, bar graphs are horizontal.",
      "Bar graphs only use numerical data."
    ],
    "correctAnswer": "Bar graphs have gaps between bars, while histograms do not."
  },
  {
    "id": 18,
    "questionText": "Which of the following is NOT one of the measures of central tendency mentioned in the sources?",
    "options": [
      "Mean",
      "Median",
      "Range",
      "Mode"
    ],
    "correctAnswer": "Range"
  },
  {
    "id": 19,
    "questionText": "What is the Mean defined as?",
    "options": [
      "The middle value of a data set",
      "The sum of all values divided by the total number of values",
      "The most frequently occurring value",
      "The spread of the data"
    ],
    "correctAnswer": "The sum of all values divided by the total number of values"
  },
  {
    "id": 20,
    "questionText": "If the sum of all values is 707 and the total number of values is 7, what is the Mean?",
    "options": [
      "100",
      "101",
      "70",
      "77"
    ],
    "correctAnswer": "101"
  },
  {
    "id": 21,
    "questionText": "How must the data be arranged before finding the Median?",
    "options": [
      "Randomly",
      "In ascending or descending order",
      "By frequency",
      "In alphabetical order"
    ],
    "correctAnswer": "In ascending or descending order"
  },
  {
    "id": 22,
    "questionText": "For an odd number of values (n), what is the position of the median?",
    "options": [
      "$(n/2)$th term",
      "$(n+1)/2$th term",
      "$(n-1)$th term",
      "The last term"
    ],
    "correctAnswer": "$(n+1)/2$th term"
  },
  {
    "id": 23,
    "questionText": "If there are 10 values in a data set, and it is arranged in ascending order, how is the median found?",
    "options": [
      "It is the 5th term.",
      "It is the average of the 5th and 6th terms.",
      "It is the 6th term.",
      "It is the average of the 4th and 5th terms."
    ],
    "correctAnswer": "It is the average of the 5th and 6th terms."
  },
  {
    "id": 24,
    "questionText": "What is the Mode of a data set?",
    "options": [
      "The average value",
      "The value that appears exactly once",
      "The most frequently occurred value",
      "The value in the middle"
    ],
    "correctAnswer": "The most frequently occurred value"
  },
  {
    "id": 25,
    "questionText": "Can a data set have more than one mode?",
    "options": [
      "No, a data set can only have one mode.",
      "Yes, if two or more values occur with the same maximum frequency.",
      "Only if the data is continuous.",
      "Only if the data is ungrouped."
    ],
    "correctAnswer": "Yes, if two or more values occur with the same maximum frequency."
  },
  {
    "id": 26,
    "questionText": "In a negatively skewed distribution, what is the relationship between the Mean, Median, and Mode?",
    "options": [
      "Mean = Median = Mode",
      "Mean > Median > Mode",
      "Mean < Median < Mode",
      "Mean < Mode < Median"
    ],
    "correctAnswer": "Mean < Median < Mode"
  },
  {
    "id": 27,
    "questionText": "What does a symmetric distribution imply about the Mean, Median, and Mode?",
    "options": [
      "They are all different.",
      "They are not defined.",
      "They are all equal.",
      "Only the mean and median are equal."
    ],
    "correctAnswer": "They are all equal."
  },
  {
    "id": 28,
    "questionText": "In a positively skewed distribution, which measure of central tendency is the largest?",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "All are equal"
    ],
    "correctAnswer": "Mean"
  },
  {
    "id": 29,
    "questionText": "What is the first step in constructing a frequency distribution table from grouped data?",
    "options": [
      "Make tally marks.",
      "Find the largest value.",
      "Calculate the midpoint.",
      "Determine the number of classes."
    ],
    "correctAnswer": "Find the largest value."
  },
  {
    "id": 30,
    "questionText": "When reading a bar graph, what does the width of the bars represent?",
    "options": [
      "The frequency of data",
      "The height of data",
      "The equal width for all categories",
      "The number of categories"
    ],
    "correctAnswer": "The equal width for all categories"
  },
  {
    "id": 31,
    "questionText": "If a question asks to find the \"average weight\", which measure of central tendency should be calculated?",
    "options": [
      "Median",
      "Mode",
      "Mean",
      "Range"
    ],
    "correctAnswer": "Mean"
  },
  {
    "id": 32,
    "questionText": "When collecting data for the number of students in a class, what type of data is this typically?",
    "options": [
      "Continuous data",
      "Discrete data",
      "Qualitative data",
      "Random data"
    ],
    "correctAnswer": "Discrete data"
  },
  {
    "id": 33,
    "questionText": "The sources mention that statistics helps in:",
    "options": [
      "Predicting future events",
      "Organizing, analyzing, describing and drawing conclusion based on data",
      "Creating art and figures",
      "Building mathematical equations"
    ],
    "correctAnswer": "Organizing, analyzing, describing and drawing conclusion based on data"
  },
  {
    "id": 34,
    "questionText": "What is a \"class interval\"?",
    "options": [
      "The number of items in a category",
      "The range of values within a class",
      "The midpoint of a class",
      "The boundary of a class"
    ],
    "correctAnswer": "The range of values within a class"
  },
  {
    "id": 35,
    "questionText": "The maximum temperature recorded in Lahore for 30 days is given. To construct a frequency distribution table, what is the first information needed?",
    "options": [
      "The total number of values",
      "The size of class interval",
      "The largest and smallest values",
      "The midpoint of each interval"
    ],
    "correctAnswer": "The largest and smallest values"
  },
  {
    "id": 36,
    "questionText": "Which graph type is particularly good for showing the proportional contribution of different categories to a whole?",
    "options": [
      "Line graph",
      "Histogram",
      "Bar graph",
      "Pie graph"
    ],
    "correctAnswer": "Pie graph"
  },
  {
    "id": 37,
    "questionText": "What is the common method to determine if a distribution is skewed or symmetric, as shown in the sources?",
    "options": [
      "By looking at the range",
      "By comparing the mean, median, and mode",
      "By calculating the standard deviation",
      "By observing the maximum frequency"
    ],
    "correctAnswer": "By comparing the mean, median, and mode"
  },
  {
    "id": 38,
    "questionText": "If the mean of a data set is 40.7, what does this tell us about the obtained marks?",
    "options": [
      "The exact marks of each student.",
      "The average marks obtained by students.",
      "The most common marks.",
      "The middle value of the marks."
    ],
    "correctAnswer": "The average marks obtained by students."
  },
  {
    "id": 39,
    "questionText": "In a data set, if the value 3 occurs three times, and no other value occurs more than twice, what is the mode?",
    "options": [
      "There is no mode.",
      "3",
      "The mean",
      "The median"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 40,
    "questionText": "According to the summary, what does a frequency distribution table represent?",
    "options": [
      "The spread of data",
      "Classes and their respective frequencies",
      "The average of data",
      "The most common value"
    ],
    "correctAnswer": "Classes and their respective frequencies"
  },
  {
    "id": 41,
    "questionText": "What is the main characteristic of a histogram, as shown in the example images?",
    "options": [
      "Bars are separated by gaps.",
      "Bars represent individual data points.",
      "Bars are adjacent, representing continuous intervals.",
      "Bars are circular."
    ],
    "correctAnswer": "Bars are adjacent, representing continuous intervals."
  },
  {
    "id": 42,
    "questionText": "When constructing a bar graph, if categories are \"Apple\", \"Mangoes\", \"Coconut\", \"Pineapple\", \"Papaya\", where would these names be placed?",
    "options": [
      "On the Y-axis",
      "In the legend",
      "On the X-axis",
      "As the title"
    ],
    "correctAnswer": "On the X-axis"
  },
  {
    "id": 43,
    "questionText": "To determine the number of classes in a frequency distribution, you divide the range of data by what?",
    "options": [
      "The number of observations",
      "The size of the class interval",
      "The midpoint value",
      "The smallest value"
    ],
    "correctAnswer": "The size of the class interval"
  },
  {
    "id": 44,
    "questionText": "Which measure of central tendency is useful when data contains extreme values?",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "All are equally useful"
    ],
    "correctAnswer": "Median"
  },
  {
    "id": 45,
    "questionText": "What is the primary visual difference between a horizontal bar graph and a vertical bar graph?",
    "options": [
      "One uses frequency, the other doesn't.",
      "The orientation of the bars and axes.",
      "The type of data they can display.",
      "The color of the bars."
    ],
    "correctAnswer": "The orientation of the bars and axes."
  },
  {
    "id": 46,
    "questionText": "What is mentioned as a \"formal part of a decimal number\" for which all zeros after a non-zero digit are significant?",
    "options": [
      "Integers",
      "Decimals",
      "Zeros",
      "Whole numbers"
    ],
    "correctAnswer": "Decimals"
  },
  {
    "id": 47,
    "questionText": "How many days are there in 10 months and 25 days, assuming 30 days per month?",
    "options": [
      "300 days",
      "325 days",
      "250 days",
      "350 days"
    ],
    "correctAnswer": "325 days"
  },
  {
    "id": 48,
    "questionText": "If the \"total quantity of onion\" is 2300 kg and the \"price of onion\" is Rs. 140, what is the total amount?",
    "options": [
      "Rs. 2440",
      "Rs. 16.42",
      "Rs. 322000",
      "Rs. 32200"
    ],
    "correctAnswer": "Rs. 322000"
  },
  {
    "id": 49,
    "questionText": "In a calculation, what value is obtained when 2 is multiplied by 100, and then 35 is added to the product?",
    "options": [
      "200",
      "235",
      "135",
      "270"
    ],
    "correctAnswer": "235"
  },
  {
    "id": 50,
    "questionText": "What is the area of a square shaped park if its side length is 36 m?",
    "options": [
      "$72 m^2$",
      "$144 m^2$",
      "$1296 m^2$",
      "$36 m^2$"
    ],
    "correctAnswer": "$1296 m^2$"
  }
],
  "Probability": [
  {
    "id": 1,
    "questionText": "What is an activity that produces some outcomes called?",
    "options": [
      "An event",
      "A sample space",
      "An experiment",
      "A prediction"
    ],
    "correctAnswer": "An experiment"
  },
  {
    "id": 2,
    "questionText": "What does the \"sample space\" (S) represent in probability?",
    "options": [
      "The most likely outcome",
      "The set of all possible outcomes of an experiment",
      "A single result of an experiment",
      "The desired outcome of an event"
    ],
    "correctAnswer": "The set of all possible outcomes of an experiment"
  },
  {
    "id": 3,
    "questionText": "What is an \"event\" (E) in probability defined as?",
    "options": [
      "The entire sample space",
      "A subset of the sample space",
      "A random outcome",
      "The probability value"
    ],
    "correctAnswer": "A subset of the sample space"
  },
  {
    "id": 4,
    "questionText": "If tossing a coin has outcomes H (Heads) and T (Tails), what is the sample space for this experiment?",
    "options": [
      "{H}",
      "{T}",
      "{H, T}",
      "{}"
    ],
    "correctAnswer": "{H, T}"
  },
  {
    "id": 5,
    "questionText": "What type of event is defined as one that is sure to occur?",
    "options": [
      "Impossible event",
      "Unlikely event",
      "Certain event",
      "Equally likely event"
    ],
    "correctAnswer": "Certain event"
  },
  {
    "id": 6,
    "questionText": "The probability of a certain event is always equal to:",
    "options": [
      "0",
      "0.5",
      "1",
      "Any number between 0 and 1"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 7,
    "questionText": "What is an event that cannot occur called?",
    "options": [
      "Certain event",
      "Likely event",
      "Impossible event",
      "Unlikely event"
    ],
    "correctAnswer": "Impossible event"
  },
  {
    "id": 8,
    "questionText": "The probability of an impossible event is always:",
    "options": [
      "1",
      "0",
      "Undefined",
      "Between 0 and 1"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 9,
    "questionText": "If today is Thursday, then tomorrow is Friday. What type of event is this statement?",
    "options": [
      "Impossible event",
      "Uncertain event",
      "Certain event",
      "Unlikely event"
    ],
    "correctAnswer": "Certain event"
  },
  {
    "id": 10,
    "questionText": "Tossing a coin, the outcomes \"both head and tail\" is an example of what type of event?",
    "options": [
      "Certain event",
      "Impossible event",
      "Likely event",
      "Equally likely event"
    ],
    "correctAnswer": "Impossible event"
  },
  {
    "id": 11,
    "questionText": "What is a \"likely event\"?",
    "options": [
      "An event that is certain not to occur.",
      "An event that will probably occur.",
      "An event with a probability of 0.5.",
      "An event with no chance of happening."
    ],
    "correctAnswer": "An event that will probably occur."
  },
  {
    "id": 12,
    "questionText": "The probability of an event is denoted by:",
    "options": [
      "n(E)",
      "n(S)",
      "P(E)",
      "E'"
    ],
    "correctAnswer": "P(E)"
  },
  {
    "id": 13,
    "questionText": "What is the formula for calculating the probability of an event E?",
    "options": [
      "$P(E) = n(S) / n(E)$",
      "$P(E) = n(E) - n(S)$",
      "$P(E) = n(E) + n(S)$",
      "$P(E) = n(E) / n(S)$"
    ],
    "correctAnswer": "$P(E) = n(E) / n(S)$"
  },
  {
    "id": 14,
    "questionText": "In the probability formula, what does n(E) represent?",
    "options": [
      "Total number of possible outcomes",
      "Number of favorable outcomes",
      "Number of experiments",
      "Number of impossible outcomes"
    ],
    "correctAnswer": "Number of favorable outcomes"
  },
  {
    "id": 15,
    "questionText": "In the probability formula, what does n(S) represent?",
    "options": [
      "Number of favorable outcomes",
      "Total number of possible outcomes",
      "Number of events",
      "Number of experiments"
    ],
    "correctAnswer": "Total number of possible outcomes"
  },
  {
    "id": 16,
    "questionText": "If an event is sure to occur, its probability is 1. This means that the probability of a certain event is:",
    "options": [
      "Always 0",
      "Always 1",
      "Less than 0",
      "Greater than 1"
    ],
    "correctAnswer": "Always 1"
  },
  {
    "id": 17,
    "questionText": "What are \"equally likely events\"?",
    "options": [
      "Events that have unequal chances of occurrence.",
      "Events that have equal chance of occurrence.",
      "Events that will definitely occur.",
      "Events that cannot occur."
    ],
    "correctAnswer": "Events that have equal chance of occurrence."
  },
  {
    "id": 18,
    "questionText": "When tossing a fair coin, the chance of occurrence of head or tail is equal. This means these events are:",
    "options": [
      "Impossible events",
      "Unlikely events",
      "Equally likely events",
      "Certain events"
    ],
    "correctAnswer": "Equally likely events"
  },
  {
    "id": 19,
    "questionText": "What is the probability of rolling a fair dice and getting the number 2?",
    "options": [
      "0",
      "1/6",
      "1/2",
      "1"
    ],
    "correctAnswer": "1/6"
  },
  {
    "id": 20,
    "questionText": "What is the \"complement\" of an event E, denoted by E'?",
    "options": [
      "All outcomes in E.",
      "All outcomes in S that are not in E.",
      "The opposite experiment.",
      "The probability of E."
    ],
    "correctAnswer": "All outcomes in S that are not in E."
  },
  {
    "id": 21,
    "questionText": "What is the relationship between the probability of an event E and its complement E'?",
    "options": [
      "$P(E') = P(E)$",
      "$P(E') = 1 + P(E)$",
      "$P(E') = 1 - P(E)$",
      "$P(E') = P(E) / 2$"
    ],
    "correctAnswer": "$P(E') = 1 - P(E)$"
  },
  {
    "id": 22,
    "questionText": "The sum of the probability of an event (P(A)) and the probability of its complement (P(A')) is always equal to:",
    "options": [
      "0",
      "0.5",
      "1",
      "Any value"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 23,
    "questionText": "If $P(E) = 1/4$, what is $P(E')$?",
    "options": [
      "1/4",
      "3/4",
      "0",
      "1"
    ],
    "correctAnswer": "3/4"
  },
  {
    "id": 24,
    "questionText": "When two fair coins are tossed, what is the sample space (S)?",
    "options": [
      "{HH, TT}",
      "{HT, TH}",
      "{HH, HT, TH, TT}",
      "{H, T}"
    ],
    "correctAnswer": "{HH, HT, TH, TT}"
  },
  {
    "id": 25,
    "questionText": "For two fair coins tossed, if E is the event of getting 2 heads (HH), what is n(E)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 26,
    "questionText": "If n(S) = 4 for an experiment, and n(E) = 1, what is P(E)?",
    "options": [
      "4",
      "0.25",
      "1/2",
      "1"
    ],
    "correctAnswer": "0.25"
  },
  {
    "id": 27,
    "questionText": "What does it mean if $P(E) = 0$?",
    "options": [
      "The event is certain.",
      "The event is impossible.",
      "The event is likely.",
      "The event is equally likely."
    ],
    "correctAnswer": "The event is impossible."
  },
  {
    "id": 28,
    "questionText": "What does it mean if $P(E) = 1$?",
    "options": [
      "The event is impossible.",
      "The event is unlikely.",
      "The event is certain.",
      "The event is not defined."
    ],
    "correctAnswer": "The event is certain."
  },
  {
    "id": 29,
    "questionText": "When picking a card at random from a set {1, 2, 3, 4, 5, 6}, what is n(S)?",
    "options": [
      "1",
      "5",
      "6",
      "10"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 30,
    "questionText": "If you roll a dice, and E is the event of getting an even number, what is n(E)?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correctAnswer": "3"
  },
  {
    "id": 31,
    "questionText": "An event with a probability between 0 and 1 (exclusive) is generally described as:",
    "options": [
      "Certain",
      "Impossible",
      "Likely or Unlikely",
      "Always 0.5"
    ],
    "correctAnswer": "Likely or Unlikely"
  },
  {
    "id": 32,
    "questionText": "In a fair dice, what is the probability of getting a number greater than 6?",
    "options": [
      "1",
      "1/6",
      "0",
      "5/6"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 33,
    "questionText": "What is the number of favorable outcomes for rolling a dice and getting the number \"8\"?",
    "options": [
      "1",
      "6",
      "0",
      "Undefined"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 34,
    "questionText": "If a die is rolled, what is the probability of getting an odd number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "5/6"
    ],
    "correctAnswer": "1/2"
  },
  {
    "id": 35,
    "questionText": "The summary of the Probability section states that \"The probability of a certain event is always equal to...\". What is the value?",
    "options": [
      "0",
      "0.5",
      "1",
      "-1"
    ],
    "correctAnswer": "1"
  },
  {
    "id": 36,
    "questionText": "The summary also states that \"The probability of an impossible event is always...\". What is the value?",
    "options": [
      "1",
      "0.5",
      "0",
      "Undefined"
    ],
    "correctAnswer": "0"
  },
  {
    "id": 37,
    "questionText": "What is an \"unlikely event\"?",
    "options": [
      "An event that is certain to occur.",
      "An event that will probably not occur.",
      "An event that occurs every time.",
      "An event with a probability of 1."
    ],
    "correctAnswer": "An event that will probably not occur."
  },
  {
    "id": 38,
    "questionText": "If a bag contains 10 blue marbles and 8 green marbles, what is the total number of marbles (n(S))?",
    "options": [
      "10",
      "8",
      "18",
      "2"
    ],
    "correctAnswer": "18"
  },
  {
    "id": 39,
    "questionText": "From the previous question, if E is the event of choosing a blue marble, what is n(E)?",
    "options": [
      "8",
      "10",
      "18",
      "0"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 40,
    "questionText": "From the previous two questions, what is the probability of choosing a blue marble, P(Blue)?",
    "options": [
      "8/18",
      "10/18",
      "18/10",
      "1/2"
    ],
    "correctAnswer": "10/18"
  },
  {
    "id": 41,
    "questionText": "If $P(A) = 2/3$, what is $P(Not A)$?",
    "options": [
      "2/3",
      "1/3",
      "0",
      "1"
    ],
    "correctAnswer": "1/3"
  },
  {
    "id": 42,
    "questionText": "In a class of 300 students, if 95 play cricket, 120 play football, and 80 play basketball, and 5 play none, what is the total number of students to consider for a general probability problem involving sports?",
    "options": [
      "300",
      "295",
      "200",
      "250"
    ],
    "correctAnswer": "300"
  },
  {
    "id": 43,
    "questionText": "If an event cannot occur, its probability is 0. What example is given for this?",
    "options": [
      "Tossing a coin and getting \"heads\".",
      "Rolling a die and getting \"6\".",
      "Rolling a dice and the outcome being \"7\".",
      "Drawing a red ball from a bag of red balls."
    ],
    "correctAnswer": "Rolling a dice and the outcome being \"7\"."
  },
  {
    "id": 44,
    "questionText": "What is the probability of a football player also playing volleyball, if the information states \"he/she plays cricket\" and \"he/she plays football\"?",
    "options": [
      "1",
      "0",
      "0.5",
      "Cannot be determined from the source."
    ],
    "correctAnswer": "Cannot be determined from the source."
  },
  {
    "id": 45,
    "questionText": "What is the number of possible outcomes for rolling two fair dice?",
    "options": [
      "6",
      "12",
      "36",
      "2"
    ],
    "correctAnswer": "36"
  },
  {
    "id": 46,
    "questionText": "If E is the event of getting \"odd numbers on both dice\" when two dice are rolled, what is n(E)?",
    "options": [
      "6",
      "9",
      "18",
      "36"
    ],
    "correctAnswer": "9"
  },
  {
    "id": 47,
    "questionText": "What is the probability of getting \"odd numbers on both dice\" when two fair dice are tossed?",
    "options": [
      "9/36 = 1/4",
      "6/36 = 1/6",
      "18/36 = 1/2",
      "36/36 = 1"
    ],
    "correctAnswer": "9/36 = 1/4"
  },
  {
    "id": 48,
    "questionText": "If C is the event of getting \"the number 6 on the 2nd die\" when two dice are rolled, what is n(C)?",
    "options": [
      "1",
      "6",
      "12",
      "36"
    ],
    "correctAnswer": "6"
  },
  {
    "id": 49,
    "questionText": "If P(C) is the probability of getting \"the number 6 on the 2nd die\" when two dice are rolled, what is P(C)?",
    "options": [
      "1/6",
      "1/36",
      "6/36",
      "1/12"
    ],
    "correctAnswer": "6/36"
  },
  {
    "id": 50,
    "questionText": "What is the general range for the probability P(E) of any event E?",
    "options": [
      "$P(E) < 0$",
      "$0 \\leq P(E) \\leq 1$",
      "$P(E) > 1$",
      "$P(E) = 0$ or $P(E) = 1$"
    ],
    "correctAnswer": "$0 \\leq P(E) \\leq 1$"
  }
]
};
export const shortQuestions = {
    "Integers": shortQuestionsData.slice(0, 4),
    "Algebraic Expressions": shortQuestionsData.slice(4, 7),
    "Linear Equations": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Integers": longQuestionsData.slice(0, 2),
    "Algebraic Expressions": longQuestionsData.slice(2, 4),
    "Linear Equations": longQuestionsData.slice(4, 5),
};
