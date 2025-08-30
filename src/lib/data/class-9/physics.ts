
import { MCQ } from '@/lib/types';

export const chapters = [
  "Physical Quantities and Measurements",
  "Kinematics",
  "Dynamics",
  "Turning Effects of Forces",
  "Work Energy and Power",
  "Mechanical Properties of Matter",
  "Thermal Properties of Matter",
  "Magnetism",
  "Nature of Science"
];

export const mcqs: Record<string, MCQ[]> = {
  "Physical Quantities and Measurements": [
  {
    "id": 1,
    "questionText": "Which of the following is not a physical quantity?",
    "options": [
      "Length",
      "Mass",
      "Time",
      "Love"
    ],
    "correctAnswer": "Love"
  },
  {
    "id": 2,
    "questionText": "The SI unit of length is:",
    "options": [
      "Centimeter",
      "Metre",
      "Kilometer",
      "Millimeter"
    ],
    "correctAnswer": "Metre"
  },
  {
    "id": 3,
    "questionText": "How many base units are there in the International System of Units (SI)?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 4,
    "questionText": "Which of the following is a derived quantity?",
    "options": [
      "Mass",
      "Time",
      "Area",
      "Electric current"
    ],
    "correctAnswer": "Area"
  },
  {
    "id": 5,
    "questionText": "The prefix \"kilo\" represents:",
    "options": [
      "10²",
      "10³",
      "10⁶",
      "10⁹"
    ],
    "correctAnswer": "10³"
  },
  {
    "id": 6,
    "questionText": "Scientific notation expresses a number as a power of:",
    "options": [
      "2",
      "5",
      "10",
      "100"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 7,
    "questionText": "The smallest measurement that can be taken with a metre rule is:",
    "options": [
      "0.1 mm",
      "1 mm",
      "1 cm",
      "1 meter"
    ],
    "correctAnswer": "1 mm"
  },
  {
    "id": 8,
    "questionText": "Parallax error is due to:",
    "options": [
      "Incorrect position of eye when taking measurements",
      "Faulty instrument",
      "Environmental factors",
      "Human error in calculation"
    ],
    "correctAnswer": "Incorrect position of eye when taking measurements"
  },
  {
    "id": 9,
    "questionText": "A Vernier Callipers can measure lengths down to:",
    "options": [
      "1/10th of a millimetre",
      "1 mm",
      "1 cm",
      "1/100th of a millimetre"
    ],
    "correctAnswer": "1/10th of a millimetre"
  },
  {
    "id": 10,
    "questionText": "The least count of a Vernier Callipers is given by:",
    "options": [
      "1 M.S div + 1 V.S div",
      "1 M.S div - 1 V.S div",
      "1 M.S div / 1 V.S div",
      "1 V.S div - 1 M.S div"
    ],
    "correctAnswer": "1 M.S div - 1 V.S div"
  },
  {
    "id": 11,
    "questionText": "If the zero of the Vernier scale coincides with the zero of the main scale, it is considered:",
    "options": [
      "Positive zero error",
      "Negative zero error",
      "No zero error",
      "Parallax error"
    ],
    "correctAnswer": "No zero error"
  },
  {
    "id": 12,
    "questionText": "What is the pitch of a micrometer screw gauge?",
    "options": [
      "1 mm",
      "0.5 mm",
      "0.01 mm",
      "0.001 mm"
    ],
    "correctAnswer": "0.5 mm"
  },
  {
    "id": 13,
    "questionText": "The least count of a micrometer screw gauge is:",
    "options": [
      "0.5 mm",
      "0.01 mm",
      "0.1 mm",
      "1 mm"
    ],
    "correctAnswer": "0.01 mm"
  },
  {
    "id": 14,
    "questionText": "Mass is the measure of:",
    "options": [
      "Quantity of matter in a body",
      "Force with which a body is attracted to Earth",
      "Volume of an object",
      "Density of an object"
    ],
    "correctAnswer": "Quantity of matter in a body"
  },
  {
    "id": 15,
    "questionText": "A physical balance works on the principle of:",
    "options": [
      "Energy conservation",
      "Momentum conservation",
      "Levers",
      "Gravity"
    ],
    "correctAnswer": "Levers"
  },
  {
    "id": 16,
    "questionText": "The least count of the mechanical stopwatch mentioned?",
    "options": [
      "1 second",
      "0.01 second",
      "0.1 second",
      "0.001 second"
    ],
    "correctAnswer": "0.1 second"
  },
  {
    "id": 17,
    "questionText": "A measuring cylinder is used to measure:",
    "options": [
      "Volume of liquids",
      "Mass of liquids",
      "Temperature of liquids",
      "Density of liquids"
    ],
    "correctAnswer": "Volume of liquids"
  },
  {
    "id": 18,
    "questionText": "When reading a measuring cylinder, the meniscus for water (a liquid that wets glass) is:",
    "options": [
      "Concave",
      "Convex",
      "Flat",
      "Irregular"
    ],
    "correctAnswer": "Concave"
  },
  {
    "id": 19,
    "questionText": "The method used to find the volume of an irregular solid by submerging it in water is known as:",
    "options": [
      "Measuring cylinder method",
      "Displacement can method",
      "Archimedes principle",
      "Buoyancy method"
    ],
    "correctAnswer": "Displacement can method"
  },
  {
    "id": 20,
    "questionText": "What is the SI unit of electric current?",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "correctAnswer": "Ampere"
  },
  {
    "id": 21,
    "questionText": "Which type of error is caused by the limitation of human perception?",
    "options": [
      "Human errors",
      "Systematic errors",
      "Random errors",
      "Experimental errors"
    ],
    "correctAnswer": "Human errors"
  },
  {
    "id": 22,
    "questionText": "Errors that cause a consistent difference in reading due to instrument calibration or incorrect marking are called:",
    "options": [
      "Human errors",
      "Systematic errors",
      "Random errors",
      "Parallax errors"
    ],
    "correctAnswer": "Systematic errors"
  },
  {
    "id": 23,
    "questionText": "Errors that occur due to sudden fluctuations or unpredictable unknown causes are called:",
    "options": [
      "Human errors",
      "Systematic errors",
      "Random errors",
      "Calibration errors"
    ],
    "correctAnswer": "Random errors"
  },
  {
    "id": 24,
    "questionText": "Uncertainty in a measurement is primarily due to:",
    "options": [
      "Limitation of the instrument being used",
      "Human error",
      "Environmental factors",
      "Incorrect calculations"
    ],
    "correctAnswer": "Limitation of the instrument being used"
  },
  {
    "id": 25,
    "questionText": "What are significant figures?",
    "options": [
      "The accurately known digits and the first doubtful digit in a measurement",
      "All digits in a measurement",
      "Only the non-zero digits",
      "Only the digits after the decimal point"
    ],
    "correctAnswer": "The accurately known digits and the first doubtful digit in a measurement"
  },
  {
    "id": 26,
    "questionText": "How many significant figures are there in 0.0034 m?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": 27,
    "questionText": "When differentiating between base and derived physical quantities and units, which statement is true?",
    "options": [
      "Both base and derived quantities have independent definitions.",
      "Base units can be expressed in terms of derived units.",
      "Derived units can be expressed in terms of base units.",
      "There are more base units than derived units."
    ],
    "correctAnswer": "Derived units can be expressed in terms of base units."
  },
  {
    "id": 28,
    "questionText": "Which of the following is not an SI base unit?",
    "options": [
      "Kilogram",
      "Second",
      "Newton",
      "Kelvin"
    ],
    "correctAnswer": "Newton"
  },
  {
    "id": 29,
    "questionText": "The unit of pressure, Pascal (Pa), is a derived unit. It can be expressed in terms of base units as:",
    "options": [
      "kg m s⁻¹",
      "kg m⁻¹ s⁻¹",
      "kg m⁻¹ s⁻²",
      "kg m² s⁻²"
    ],
    "correctAnswer": "kg m⁻¹ s⁻²"
  },
  {
    "id": 30,
    "questionText": "What is the value of giga (G) prefix?",
    "options": [
      "10⁶",
      "10⁹",
      "10¹²",
      "10¹⁵"
    ],
    "correctAnswer": "10⁹"
  },
  {
    "id": 31,
    "questionText": "The standard for measuring the mass of objects is known as:",
    "options": [
      "Standard meter",
      "Standard second",
      "International Prototype Kilogram",
      "Standard ampere"
    ],
    "correctAnswer": "International Prototype Kilogram"
  },
  {
    "id": 32,
    "questionText": "What is the purpose of using SI prefixes?",
    "options": [
      "To complicate numbers",
      "To make calculations harder",
      "To write very large or very small numbers conveniently",
      "To change the base units"
    ],
    "correctAnswer": "To write very large or very small numbers conveniently"
  },
  {
    "id": 33,
    "questionText": "Which instrument is generally used to measure length in a laboratory?",
    "options": [
      "Measuring tape",
      "Metre rule",
      "Vernier Callipers",
      "Micrometer Screw Gauge"
    ],
    "correctAnswer": "Metre rule"
  },
  {
    "id": 34,
    "questionText": "The maximum uncertainty in measuring length using a metre rule calibrated in millimeters is:",
    "options": [
      "± 1 mm",
      "± 0.5 mm",
      "± 0.1 mm",
      "± 0.05 mm"
    ],
    "correctAnswer": "± 0.5 mm"
  },
  {
    "id": 35,
    "questionText": "When rounding off numbers, if the last digit is more than 5, the retained digit is:",
    "options": [
      "Decreased by one",
      "Increased by one",
      "Left unchanged",
      "Rounded to the nearest even number"
    ],
    "correctAnswer": "Increased by one"
  },
  {
    "id": 36,
    "questionText": "If a measurement is precise but not accurate, it means:",
    "options": [
      "The measurements are close to the true value but scattered.",
      "The measurements are close to each other but not close to the true value.",
      "The measurements are close to the true value and close to each other.",
      "The measurements are scattered and far from the true value."
    ],
    "correctAnswer": "The measurements are close to each other but not close to the true value."
  },
  {
    "id": 37,
    "questionText": "The SI unit of amount of substance is:",
    "options": [
      "Kilogram",
      "Candela",
      "Mole",
      "Ampere"
    ],
    "correctAnswer": "Mole"
  },
  {
    "id": 38,
    "questionText": "Which of the following devices is used to measure very short time intervals with high accuracy (about 10⁻¹⁰ seconds)?",
    "options": [
      "Atomic clock",
      "Digital stopwatch",
      "Analogue stopwatch",
      "Pendulum clock"
    ],
    "correctAnswer": "Atomic clock"
  },
  {
    "id": 39,
    "questionText": "The SI unit of force, Newton (N), is a derived unit. It can be expressed in base units as:",
    "options": [
      "kg m s⁻¹",
      "kg m⁻² s⁻²",
      "kg m s⁻²",
      "kg m² s⁻¹"
    ],
    "correctAnswer": "kg m s⁻²"
  },
  {
    "id": 40,
    "questionText": "The measurement of an unknown quantity with a widely accepted standard quantity is known as:",
    "options": [
      "Estimation",
      "Measurement",
      "Calculation",
      "Approximation"
    ],
    "correctAnswer": "Measurement"
  },
  {
    "id": 41,
    "questionText": "Which of the following is a non-physical quantity?",
    "options": [
      "Distance",
      "Density",
      "Colour",
      "Temperature"
    ],
    "correctAnswer": "Colour"
  },
  {
    "id": 42,
    "questionText": "A measurement without a unit is:",
    "options": [
      "Accurate",
      "Precise",
      "Correct",
      "Meaningless"
    ],
    "correctAnswer": "Meaningless"
  },
  {
    "id": 43,
    "questionText": "The SI unit of luminous intensity is:",
    "options": [
      "Ampere",
      "Candela",
      "Kelvin",
      "Second"
    ],
    "correctAnswer": "Candela"
  },
  {
    "id": 44,
    "questionText": "The SI unit for pressure is Pascal (Pa). Which of the following is an equivalent expression for Pascal in terms of base SI units?",
    "options": [
      "kg m s⁻¹",
      "N m⁻²",
      "kg m⁻¹ s⁻²",
      "J m⁻³"
    ],
    "correctAnswer": "kg m⁻¹ s⁻²"
  },
  {
    "id": 45,
    "questionText": "The value 5 x 10⁷ m in scientific notation for 50,000,000 m is an example of writing a:",
    "options": [
      "Small quantity",
      "Large quantity",
      "Standard quantity",
      "Derived quantity"
    ],
    "correctAnswer": "Large quantity"
  },
  {
    "id": 46,
    "questionText": "The zero error of an instrument refers to:",
    "options": [
      "Human error",
      "The non-zero reading when the jaws or thimble are closed",
      "Random fluctuations",
      "Parallax in reading"
    ],
    "correctAnswer": "The non-zero reading when the jaws or thimble are closed"
  },
  {
    "id": 47,
    "questionText": "What is the process of comparing an unknown quantity with a widely accepted standard quantity?",
    "options": [
      "Estimation",
      "Measurement",
      "Calibration",
      "Quantification"
    ],
    "correctAnswer": "Measurement"
  },
  {
    "id": 48,
    "questionText": "To measure the length of an object using a metre rule, if the person's eye is directly above the ruler, this helps to avoid:",
    "options": [
      "Parallax error",
      "Zero error",
      "Systematic error",
      "Random error"
    ],
    "correctAnswer": "Parallax error"
  },
  {
    "id": 49,
    "questionText": "The SI unit for luminous intensity is:",
    "options": [
      "Ampere",
      "Candela",
      "Mole",
      "Kelvin"
    ],
    "correctAnswer": "Candela"
  },
  {
    "id": 50,
    "questionText": "What is the primary thing to make accurate measurements?",
    "options": [
      "Estimation",
      "Guesswork",
      "Reliable results from experiments",
      "Quick observations"
    ],
    "correctAnswer": "Reliable results from experiments"
  }
],
  "Kinematics": [
  {
    "id": 1,
    "questionText": "Kinematics is the study of motion of objects:",
    "options": [
      "a) Considering the forces that cause the motion",
      "b) Without referring to the forces that cause the motion",
      "c) Only for objects at rest",
      "d) Only for objects moving in a straight line"
    ],
    "correctAnswer": "b) Without referring to the forces that cause the motion"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a scalar quantity?",
    "options": [
      "a) Displacement",
      "b) Velocity",
      "c) Mass",
      "d) Force"
    ],
    "correctAnswer": "c) Mass"
  },
  {
    "id": 3,
    "questionText": "A vector quantity needs to be described completely by:",
    "options": [
      "a) Its magnitude only",
      "b) Both magnitude and direction",
      "c) Its direction only",
      "d) Its unit only"
    ],
    "correctAnswer": "b) Both magnitude and direction"
  },
  {
    "id": 4,
    "questionText": "The method used to add two or more vectors by placing the tail of one vector to the head of the previous one is called:",
    "options": [
      "a) Head-to-tail rule",
      "b) Parallelogram method",
      "c) Resolution of vectors",
      "d) Graphical analysis"
    ],
    "correctAnswer": "a) Head-to-tail rule"
  },
  {
    "id": 5,
    "questionText": "Motion in which a body moves along a straight line is called:",
    "options": [
      "a) Linear motion",
      "b) Circular motion",
      "c) Random motion",
      "d) Rotatory motion"
    ],
    "correctAnswer": "a) Linear motion"
  },
  {
    "id": 6,
    "questionText": "The motion of a spinning top is an example of:",
    "options": [
      "a) Translatory motion",
      "b) Rotatory motion",
      "c) Vibratory motion",
      "d) Random motion"
    ],
    "correctAnswer": "b) Rotatory motion"
  },
  {
    "id": 7,
    "questionText": "The shortest distance between the initial and final positions of a body is called its:",
    "options": [
      "a) Distance",
      "b) Displacement",
      "c) Speed",
      "d) Velocity"
    ],
    "correctAnswer": "b) Displacement"
  },
  {
    "id": 8,
    "questionText": "Speed is a scalar quantity because it has:",
    "options": [
      "a) Direction only",
      "b) Magnitude only",
      "c) Both magnitude and direction",
      "d) Neither magnitude nor direction"
    ],
    "correctAnswer": "b) Magnitude only"
  },
  {
    "id": 9,
    "questionText": "The SI unit of speed is:",
    "options": [
      "a) m s⁻¹",
      "b) km h⁻¹",
      "c) m s⁻²",
      "d) km s⁻¹"
    ],
    "correctAnswer": "a) m s⁻¹"
  },
  {
    "id": 10,
    "questionText": "Velocity is a vector quantity because it requires:",
    "options": [
      "a) Magnitude only",
      "b) Magnitude and direction",
      "c) Direction only",
      "d) Time"
    ],
    "correctAnswer": "b) Magnitude and direction"
  },
  {
    "id": 11,
    "questionText": "If a body does not change its speed and direction, its velocity is:",
    "options": [
      "a) Uniform",
      "b) Non-uniform",
      "c) Zero",
      "d) Increasing"
    ],
    "correctAnswer": "a) Uniform"
  },
  {
    "id": 12,
    "questionText": "Acceleration is defined as the rate of change of:",
    "options": [
      "a) Speed",
      "b) Velocity",
      "c) Distance",
      "d) Displacement"
    ],
    "correctAnswer": "b) Velocity"
  },
  {
    "id": 13,
    "questionText": "The SI unit of acceleration is:",
    "options": [
      "a) m s⁻¹",
      "b) m s⁻²",
      "c) km h⁻²",
      "d) N kg⁻¹"
    ],
    "correctAnswer": "b) m s⁻²"
  },
  {
    "id": 14,
    "questionText": "A distance-time graph where the line is curved upward (concave up) indicates:",
    "options": [
      "a) Uniform speed",
      "b) Constant velocity",
      "c) Increasing speed/acceleration",
      "d) Decreasing speed/deceleration"
    ],
    "correctAnswer": "c) Increasing speed/acceleration"
  },
  {
    "id": 15,
    "questionText": "The gradient of a distance-time graph represents:",
    "options": [
      "a) Acceleration",
      "b) Speed",
      "c) Displacement",
      "d) Time"
    ],
    "correctAnswer": "b) Speed"
  },
  {
    "id": 16,
    "questionText": "The gradient of a speed-time graph represents:",
    "options": [
      "a) Acceleration",
      "b) Distance",
      "c) Speed",
      "d) Time"
    ],
    "correctAnswer": "a) Acceleration"
  },
  {
    "id": 17,
    "questionText": "The area under a speed-time graph represents:",
    "options": [
      "a) Acceleration",
      "b) Velocity",
      "c) Distance covered",
      "d) Time interval"
    ],
    "correctAnswer": "c) Distance covered"
  },
  {
    "id": 18,
    "questionText": "For motion under gravity, the acceleration due to gravity (g) is approximately:",
    "options": [
      "a) 5 m s⁻²",
      "b) 9.8 m s⁻²",
      "c) 10 m s⁻¹",
      "d) 0 m s⁻²"
    ],
    "correctAnswer": "b) 9.8 m s⁻²"
  },
  {
    "id": 19,
    "questionText": "When a body is falling freely under the action of gravity, the direction of gravitational acceleration is:",
    "options": [
      "a) Downwards",
      "b) Upwards",
      "c) Horizontal",
      "d) Dependent on the initial velocity"
    ],
    "correctAnswer": "a) Downwards"
  },
  {
    "id": 20,
    "questionText": "If a body is thrown vertically upward, the value of 'g' will be taken as:",
    "options": [
      "a) Negative",
      "b) Positive",
      "c) Zero",
      "d) Variable"
    ],
    "correctAnswer": "a) Negative"
  },
  {
    "id": 21,
    "questionText": "Which type of motion is exhibited by a simple pendulum?",
    "options": [
      "a) Translatory motion",
      "b) Rotatory motion",
      "c) Vibratory motion",
      "d) Linear motion"
    ],
    "correctAnswer": "c) Vibratory motion"
  },
  {
    "id": 22,
    "questionText": "The relationship between distance and time for an object at rest is represented by a distance-time graph that is:",
    "options": [
      "a) A straight line with a positive slope",
      "b) A straight line with a negative slope",
      "c) A horizontal straight line",
      "d) A curved line"
    ],
    "correctAnswer": "c) A horizontal straight line"
  },
  {
    "id": 23,
    "questionText": "The SI unit for displacement is:",
    "options": [
      "a) km",
      "b) m",
      "c) cm",
      "d) mm"
    ],
    "correctAnswer": "b) m"
  },
  {
    "id": 24,
    "questionText": "A car moving on a circular road with constant speed is an example of:",
    "options": [
      "a) Linear motion",
      "b) Circular motion",
      "c) Random motion",
      "d) Vibratory motion"
    ],
    "correctAnswer": "b) Circular motion"
  },
  {
    "id": 25,
    "questionText": "An object falls freely from a height. Its initial velocity is:",
    "options": [
      "a) Zero",
      "b) Maximum",
      "c) Constant",
      "d) Negative"
    ],
    "correctAnswer": "a) Zero"
  },
  {
    "id": 26,
    "questionText": "If a body moves with uniform acceleration, its speed-time graph will be a:",
    "options": [
      "a) Straight line rising upward",
      "b) Horizontal straight line",
      "c) Curved line",
      "d) Straight line falling downward"
    ],
    "correctAnswer": "a) Straight line rising upward"
  },
  {
    "id": 27,
    "questionText": "The first equation of motion relates:",
    "options": [
      "a) Displacement, initial velocity, time, acceleration",
      "b) Final velocity, initial velocity, acceleration, time",
      "c) Displacement, final velocity, acceleration",
      "d) Final velocity, time, acceleration"
    ],
    "correctAnswer": "b) Final velocity, initial velocity, acceleration, time"
  },
  {
    "id": 28,
    "questionText": "Which of the following conditions is assumed when applying equations of motion for bodies moving under gravity?",
    "options": [
      "a) Air resistance is considered.",
      "b) Motion is always along a curved path.",
      "c) Acceleration is assumed to be uniform.",
      "d) Initial velocity is always zero."
    ],
    "correctAnswer": "c) Acceleration is assumed to be uniform."
  },
  {
    "id": 29,
    "questionText": "The concept of \"universal speed limit\" in physics is associated with:",
    "options": [
      "a) Newton's laws",
      "b) Einstein's theory of special relativity",
      "c) Kepler's laws",
      "d) Galileo's experiments"
    ],
    "correctAnswer": "b) Einstein's theory of special relativity"
  },
  {
    "id": 30,
    "questionText": "The magnitude of a vector is always:",
    "options": [
      "a) Positive",
      "b) Negative",
      "c) Zero",
      "d) Variable"
    ],
    "correctAnswer": "a) Positive"
  },
  {
    "id": 31,
    "questionText": "When adding two vectors graphically using the head-to-tail rule, the resultant vector is drawn from:",
    "options": [
      "a) The head of the first vector to the head of the last vector",
      "b) The tail of the first vector to the head of the last vector",
      "c) The tail of the last vector to the head of the first vector",
      "d) The head of the first vector to the tail of the last vector"
    ],
    "correctAnswer": "b) The tail of the first vector to the head of the last vector"
  },
  {
    "id": 32,
    "questionText": "The motion of a honey bee is an example of:",
    "options": [
      "a) Linear motion",
      "b) Circular motion",
      "c) Random motion",
      "d) Vibratory motion"
    ],
    "correctAnswer": "c) Random motion"
  },
  {
    "id": 33,
    "questionText": "A body is said to be moving with uniform velocity if its speed and direction:",
    "options": [
      "a) Change constantly",
      "b) Do not change",
      "c) Change only in magnitude",
      "d) Change only in direction"
    ],
    "correctAnswer": "b) Do not change"
  },
  {
    "id": 34,
    "questionText": "If the velocity of a body is changing, it is said to have:",
    "options": [
      "a) Uniform velocity",
      "b) Non-uniform velocity",
      "c) Zero velocity",
      "d) Constant speed"
    ],
    "correctAnswer": "b) Non-uniform velocity"
  },
  {
    "id": 35,
    "questionText": "Deceleration or retardation is also known as:",
    "options": [
      "a) Positive acceleration",
      "b) Negative acceleration",
      "c) Uniform acceleration",
      "d) Zero acceleration"
    ],
    "correctAnswer": "b) Negative acceleration"
  },
  {
    "id": 36,
    "questionText": "A graph is a pictorial diagram that shows the relationship between:",
    "options": [
      "a) One physical quantity",
      "b) Only scalar quantities",
      "c) Two physical quantities",
      "d) Only vector quantities"
    ],
    "correctAnswer": "c) Two physical quantities"
  },
  {
    "id": 37,
    "questionText": "In a distance-time graph, the independent quantity (time) is taken along the:",
    "options": [
      "a) X-axis",
      "b) Y-axis",
      "c) Z-axis",
      "d) Any axis"
    ],
    "correctAnswer": "a) X-axis"
  },
  {
    "id": 38,
    "questionText": "What does a horizontal line in a speed-time graph indicate?",
    "options": [
      "a) Increasing acceleration",
      "b) Decreasing acceleration",
      "c) Constant speed",
      "d) Zero speed"
    ],
    "correctAnswer": "c) Constant speed"
  },
  {
    "id": 39,
    "questionText": "The equation S = vᵢt + ½at² is used to calculate:",
    "options": [
      "a) Displacement",
      "b) Final velocity",
      "c) Acceleration",
      "d) Time"
    ],
    "correctAnswer": "a) Displacement"
  },
  {
    "id": 40,
    "questionText": "The term 'free fall acceleration' is used when the only force acting on a body is:",
    "options": [
      "a) Air resistance",
      "b) Friction",
      "c) Gravity",
      "d) Normal force"
    ],
    "correctAnswer": "c) Gravity"
  },
  {
    "id": 41,
    "questionText": "What is the SI unit of momentum? a) kg m s⁻¹ b) kg m⁻¹ s⁻¹ c) N s d) J s",
    "options": [
      "a) kg m s⁻¹",
      "b) kg m⁻¹ s⁻¹",
      "c) N s",
      "d) J s"
    ],
    "correctAnswer": "a) kg m s⁻¹"
  },
  {
    "id": 42,
    "questionText": "A measurement of displacement requires knowing:",
    "options": [
      "a) Only the distance",
      "b) Only the path taken",
      "c) The shortest distance and direction",
      "d) The average speed"
    ],
    "correctAnswer": "c) The shortest distance and direction"
  },
  {
    "id": 43,
    "questionText": "If an object is moving along a straight line and its velocity changes by equal amounts in equal intervals of time, it is said to have:",
    "options": [
      "a) Uniform acceleration",
      "b) Non-uniform acceleration",
      "c) Uniform speed",
      "d) Non-uniform speed"
    ],
    "correctAnswer": "a) Uniform acceleration"
  },
  {
    "id": 44,
    "questionText": "The type of motion where every particle of the body moves uniformly in the same direction is called:",
    "options": [
      "a) Translatory motion",
      "b) Rotatory motion",
      "c) Vibratory motion",
      "d) Random motion"
    ],
    "correctAnswer": "a) Translatory motion"
  },
  {
    "id": 45,
    "questionText": "In a distance-time graph, a straight line with a positive slope indicates:",
    "options": [
      "a) Uniform speed",
      "b) Non-uniform speed",
      "c) Zero speed",
      "d) Constant acceleration"
    ],
    "correctAnswer": "a) Uniform speed"
  },
  {
    "id": 46,
    "questionText": "The third equation of motion, 2aS = v_f² - v_i², relates:",
    "options": [
      "a) Time, velocity, acceleration",
      "b) Distance, time, acceleration",
      "c) Displacement, initial and final velocities, acceleration",
      "d) Mass, velocity, acceleration"
    ],
    "correctAnswer": "c) Displacement, initial and final velocities, acceleration"
  },
  {
    "id": 47,
    "questionText": "For a freely falling body, the initial velocity is often taken as zero. Which equation of motion becomes S = ½gt² in this case?",
    "options": [
      "a) First",
      "b) Second",
      "c) Third",
      "d) None"
    ],
    "correctAnswer": "b) Second"
  },
  {
    "id": 48,
    "questionText": "A car's speedometer measures its:",
    "options": [
      "a) Average speed",
      "b) Instantaneous speed",
      "c) Average velocity",
      "d) Instantaneous velocity"
    ],
    "correctAnswer": "b) Instantaneous speed"
  },
  {
    "id": 49,
    "questionText": "The velocity of a car moving 90 km h⁻¹ towards North is an example of a:",
    "options": [
      "a) Scalar quantity",
      "b) Vector quantity",
      "c) Base quantity",
      "d) Derived quantity"
    ],
    "correctAnswer": "b) Vector quantity"
  },
  {
    "id": 50,
    "questionText": "If a car is moving with a constant speed, its acceleration is:",
    "options": [
      "a) Zero",
      "b) Positive",
      "c) Negative",
      "d) Constant but non-zero"
    ],
    "correctAnswer": "a) Zero"
  }
],
  "Dynamics": [
  {
    "id": 1,
    "questionText": "A common concept of force is a:",
    "options": [
      "a) Push or a pull",
      "b) Change in mass",
      "c) Measure of inertia",
      "d) Turning effect"
    ],
    "correctAnswer": "a) Push or a pull"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a contact force?",
    "options": [
      "a) Friction",
      "b) Gravitational force",
      "c) Electrostatic force",
      "d) Magnetic force"
    ],
    "correctAnswer": "a) Friction"
  },
  {
    "id": 3,
    "questionText": "The force exerted by a surface perpendicular to the object resting on it is called:",
    "options": [
      "a) Thrust",
      "b) Weight",
      "c) Normal force",
      "d) Elastic force"
    ],
    "correctAnswer": "c) Normal force"
  },
  {
    "id": 4,
    "questionText": "How many fundamental forces are there in nature?",
    "options": [
      "a) 2",
      "b) 3",
      "c) 4",
      "d) 5"
    ],
    "correctAnswer": "c) 4"
  },
  {
    "id": 5,
    "questionText": "The strongest among the fundamental forces is the:",
    "options": [
      "a) Gravitational force",
      "b) Electromagnetic force",
      "c) Strong nuclear force",
      "d) Weak nuclear force"
    ],
    "correctAnswer": "c) Strong nuclear force"
  },
  {
    "id": 6,
    "questionText": "According to Newton's First Law of Motion, a body continues its state of rest or uniform motion in a straight line unless acted upon by:",
    "options": [
      "a) Friction",
      "b) Gravity",
      "c) Some external force",
      "d) Inertia"
    ],
    "correctAnswer": "c) Some external force"
  },
  {
    "id": 7,
    "questionText": "The property of a body to maintain its state of rest or of uniform motion is called:",
    "options": [
      "a) Momentum",
      "b) Inertia",
      "c) Force",
      "d) Weight"
    ],
    "correctAnswer": "b) Inertia"
  },
  {
    "id": 8,
    "questionText": "Newton's Second Law of Motion states that if a net force acts on a body, it produces an acceleration in the direction of the force. The magnitude of acceleration is:",
    "options": [
      "a) Directly proportional to mass",
      "b) Inversely proportional to mass",
      "c) Independent of mass",
      "d) Directly proportional to velocity"
    ],
    "correctAnswer": "b) Inversely proportional to mass"
  },
  {
    "id": 9,
    "questionText": "The SI unit of force, Newton (N), can be defined as the force that produces an acceleration of 1 m s⁻² in a body of mass:",
    "options": [
      "a) 1 gram",
      "b) 1 kilogram",
      "c) 1 pound",
      "d) 1 tonne"
    ],
    "correctAnswer": "b) 1 kilogram"
  },
  {
    "id": 10,
    "questionText": "Newton's Third Law of Motion states that for every action, there is:",
    "options": [
      "a) An equal action",
      "b) An equal and opposite reaction",
      "c) No reaction",
      "d) An unequal reaction"
    ],
    "correctAnswer": "b) An equal and opposite reaction"
  },
  {
    "id": 11,
    "questionText": "Mass is a:",
    "options": [
      "a) Scalar quantity",
      "b) Vector quantity",
      "c) Fundamental force",
      "d) Derived force"
    ],
    "correctAnswer": "a) Scalar quantity"
  },
  {
    "id": 12,
    "questionText": "Weight is a:",
    "options": [
      "a) Scalar quantity",
      "b) Vector quantity",
      "c) Constant value",
      "d) Property of matter"
    ],
    "correctAnswer": "b) Vector quantity"
  },
  {
    "id": 13,
    "questionText": "The SI unit of mass is:",
    "options": [
      "a) Gram",
      "b) Kilogram",
      "c) Pound",
      "d) Newton"
    ],
    "correctAnswer": "b) Kilogram"
  },
  {
    "id": 14,
    "questionText": "The gravitational force acting on unit mass is called:",
    "options": [
      "a) Mass",
      "b) Gravitational field strength",
      "c) Weight",
      "d) Density"
    ],
    "correctAnswer": "b) Gravitational field strength"
  },
  {
    "id": 15,
    "questionText": "Momentum (p) of a moving body is defined as the product of its:",
    "options": [
      "a) Mass and acceleration",
      "b) Mass and velocity",
      "c) Force and time",
      "d) Force and distance"
    ],
    "correctAnswer": "b) Mass and velocity"
  },
  {
    "id": 16,
    "questionText": "The total momentum of an isolated system before collision is equal to the total momentum after collision. This is the law of conservation of:",
    "options": [
      "a) Energy",
      "b) Mass",
      "c) Momentum",
      "d) Force"
    ],
    "correctAnswer": "c) Momentum"
  },
  {
    "id": 17,
    "questionText": "What is the constant velocity attained by a freely falling body when air resistance balances the gravitational force?",
    "options": [
      "a) Initial velocity",
      "b) Terminal velocity",
      "c) Average velocity",
      "d) Maximum velocity"
    ],
    "correctAnswer": "b) Terminal velocity"
  },
  {
    "id": 18,
    "questionText": "When a spring is stretched, the force exerted by the spring attempting to restore its original shape is called:",
    "options": [
      "a) Thrust",
      "b) Drag",
      "c) Normal force",
      "d) Elastic force"
    ],
    "correctAnswer": "d) Elastic force"
  },
  {
    "id": 19,
    "questionText": "A free-body diagram shows:",
    "options": [
      "a) Only applied forces",
      "b) Only gravitational forces",
      "c) All external forces acting on an object",
      "d) Internal forces only"
    ],
    "correctAnswer": "c) All external forces acting on an object"
  },
  {
    "id": 20,
    "questionText": "When you jump on a trampoline, the trampoline pushes you up with an equal and opposite force. This is an example of:",
    "options": [
      "a) Newton's first law",
      "b) Newton's second law",
      "c) Newton's third law",
      "d) Law of conservation of momentum"
    ],
    "correctAnswer": "c) Newton's third law"
  },
  {
    "id": 21,
    "questionText": "The value of 'g' (acceleration due to gravity) on the Earth is approximately 10 N kg⁻¹. If an object has a mass of 5 kg, what is its weight?",
    "options": [
      "a) 5 N",
      "b) 50 N",
      "c) 0.5 N",
      "d) 10 N"
    ],
    "correctAnswer": "b) 50 N"
  },
  {
    "id": 22,
    "questionText": "What is the function of mechanical balances?",
    "options": [
      "a) To create force",
      "b) To compare masses of objects",
      "c) To measure length",
      "d) To measure time"
    ],
    "correctAnswer": "b) To compare masses of objects"
  },
  {
    "id": 23,
    "questionText": "The force that resists motion when a body rolls over a surface is called:",
    "options": [
      "a) Static friction",
      "b) Sliding friction",
      "c) Rolling friction",
      "d) Kinetic friction"
    ],
    "correctAnswer": "c) Rolling friction"
  },
  {
    "id": 24,
    "questionText": "Which method is used to reduce friction?",
    "options": [
      "a) Increasing surface area",
      "b) Roughening surfaces",
      "c) Using ball bearings",
      "d) Increasing normal force"
    ],
    "correctAnswer": "c) Using ball bearings"
  },
  {
    "id": 25,
    "questionText": "The rate of change of momentum of a body is equal to the:",
    "options": [
      "a) Impulse",
      "b) Force acting on it",
      "c) Acceleration",
      "d) Work done"
    ],
    "correctAnswer": "b) Force acting on it"
  },
  {
    "id": 26,
    "questionText": "In a collision between two objects, the total momentum of the system:",
    "options": [
      "a) Is conserved if no external forces act",
      "b) Is always zero",
      "c) Increases after the collision",
      "d) Decreases after the collision"
    ],
    "correctAnswer": "a) Is conserved if no external forces act"
  },
  {
    "id": 27,
    "questionText": "Which of the following forces prevents objects from falling through the floor?",
    "options": [
      "a) Gravitational force",
      "b) Normal force",
      "c) Friction",
      "d) Tension"
    ],
    "correctAnswer": "b) Normal force"
  },
  {
    "id": 28,
    "questionText": "When two forces interact, they form an:",
    "options": [
      "a) Action-reaction pair",
      "b) Equilibrium",
      "c) Impulse",
      "d) Turning effect"
    ],
    "correctAnswer": "a) Action-reaction pair"
  },
  {
    "id": 29,
    "questionText": "The force with which the Earth attracts a body towards its centre is called:",
    "options": [
      "a) Mass",
      "b) Weight",
      "c) Gravity",
      "d) Normal force"
    ],
    "correctAnswer": "b) Weight"
  },
  {
    "id": 30,
    "questionText": "An example of a non-contact force is:",
    "options": [
      "a) Drag",
      "b) Tension",
      "c) Electromagnetic force",
      "d) Air resistance"
    ],
    "correctAnswer": "c) Electromagnetic force"
  },
  {
    "id": 31,
    "questionText": "Which of the following describes the effect of friction?",
    "options": [
      "a) It increases the speed of moving objects.",
      "b) It always helps to start motion.",
      "c) It dissipates energy as heat.",
      "d) It reduces wear and tear."
    ],
    "correctAnswer": "c) It dissipates energy as heat."
  },
  {
    "id": 32,
    "questionText": "A system on which no external force acts is known as an:",
    "options": [
      "a) Isolated system",
      "b) Open system",
      "c) Closed system",
      "d) Controlled system"
    ],
    "correctAnswer": "a) Isolated system"
  },
  {
    "id": 33,
    "questionText": "What is the name of the force that results in the disintegration of a nucleus?",
    "options": [
      "a) Strong nuclear force",
      "b) Weak nuclear force",
      "c) Gravitational force",
      "d) Electromagnetic force"
    ],
    "correctAnswer": "b) Weak nuclear force"
  },
  {
    "id": 34,
    "questionText": "The branch of physics that deals with the motion of objects and the forces that change it is:",
    "options": [
      "a) Kinematics",
      "b) Dynamics",
      "c) Statics",
      "d) Thermodynamics"
    ],
    "correctAnswer": "b) Dynamics"
  },
  {
    "id": 35,
    "questionText": "The SI unit of impulse is:",
    "options": [
      "a) N/s",
      "b) N s",
      "c) J s",
      "d) W s"
    ],
    "correctAnswer": "b) N s"
  },
  {
    "id": 36,
    "questionText": "If you are sitting in a car that suddenly accelerates forward, you are pushed back against the seat due to:",
    "options": [
      "a) Newton's second law",
      "b) Inertia",
      "c) Friction",
      "d) Momentum"
    ],
    "correctAnswer": "b) Inertia"
  },
  {
    "id": 37,
    "questionText": "What is the value of gravitational field strength (g) on Earth (approximately)?",
    "options": [
      "a) 9.8 m/s²",
      "b) 10 N kg⁻¹",
      "c) 9.8 N kg⁻¹",
      "d) All of the above"
    ],
    "correctAnswer": "d) All of the above"
  },
  {
    "id": 38,
    "questionText": "Two ice skaters weighing 60 kg and 80 kg push off against each other on a frictionless ice track. The 60 kg skater gains a velocity of 4 m s⁻¹. According to Newton's third law and conservation of momentum, the 80 kg skater will move:",
    "options": [
      "a) With a greater speed in the same direction",
      "b) With a smaller speed in the same direction",
      "c) With a smaller speed in the opposite direction",
      "d) With the same speed in the opposite direction"
    ],
    "correctAnswer": "c) With a smaller speed in the opposite direction"
  }
],
  "Turning Effects of Forces": [
  {
    "id": 1,
    "questionText": "Forces that are acting in the same direction and are parallel to one another are called:",
    "options": [
      "a) Like parallel forces",
      "b) Unlike parallel forces",
      "c) Resultant forces",
      "d) Concurrent forces"
    ],
    "correctAnswer": "a) Like parallel forces"
  },
  {
    "id": 2,
    "questionText": "The turning effect of a force is known as:",
    "options": [
      "a) Force",
      "b) Moment of force or torque",
      "c) Couple",
      "d) Equilibrium"
    ],
    "correctAnswer": "b) Moment of force or torque"
  },
  {
    "id": 3,
    "questionText": "The moment arm is defined as the:",
    "options": [
      "a) Distance from the point of application of force",
      "b) Perpendicular distance from the axis of rotation to the line of action of force",
      "c) Length of the object",
      "d) Direction of the force"
    ],
    "correctAnswer": "b) Perpendicular distance from the axis of rotation to the line of action of force"
  },
  {
    "id": 4,
    "questionText": "The SI unit of moment of force or torque is:",
    "options": [
      "a) Newton",
      "b) Newton metre",
      "c) Joule",
      "d) Watt"
    ],
    "correctAnswer": "b) Newton metre"
  },
  {
    "id": 5,
    "questionText": "Two equal and opposite parallel forces that act at two different points of the same body form a:",
    "options": [
      "a) Torque",
      "b) Moment",
      "c) Couple",
      "d) Resultant force"
    ],
    "correctAnswer": "c) Couple"
  },
  {
    "id": 6,
    "questionText": "The process of finding the perpendicular components of a force is called:",
    "options": [
      "a) Addition of forces",
      "b) Resolution of vectors",
      "c) Resolution of a force",
      "d) Turning effect"
    ],
    "correctAnswer": "c) Resolution of a force"
  },
  {
    "id": 7,
    "questionText": "The point where the whole mass of the body appears to be concentrated is called the:",
    "options": [
      "a) Centre of mass",
      "b) Centre of gravity",
      "c) Pivot point",
      "d) Equilibrium point"
    ],
    "correctAnswer": "b) Centre of gravity"
  },
  {
    "id": 8,
    "questionText": "If a body is supported at its centre of gravity, it stays there without:",
    "options": [
      "a) Moving",
      "b) Rotating",
      "c) Rotation",
      "d) Accelerating"
    ],
    "correctAnswer": "c) Rotation"
  },
  {
    "id": 9,
    "questionText": "A body is said to be in equilibrium if it has:",
    "options": [
      "a) No acceleration",
      "b) Constant acceleration",
      "c) Increasing speed",
      "d) Decreasing speed"
    ],
    "correctAnswer": "a) No acceleration"
  },
  {
    "id": 10,
    "questionText": "The state of equilibrium where a body at rest, if slightly tilted, comes back to its original position is called:",
    "options": [
      "a) Stable equilibrium",
      "b) Unstable equilibrium",
      "c) Neutral equilibrium",
      "d) Dynamic equilibrium"
    ],
    "correctAnswer": "a) Stable equilibrium"
  },
  {
    "id": 11,
    "questionText": "A body is in unstable equilibrium if, after a slight tilt, it tends to move:",
    "options": [
      "a) Further away from its original position",
      "b) Back to its original position",
      "c) To a new stable position",
      "d) Remains in the tilted position"
    ],
    "correctAnswer": "a) Further away from its original position"
  },
  {
    "id": 12,
    "questionText": "For a body to be in translational equilibrium, the sum of all the forces acting on it must be:",
    "options": [
      "a) Maximum",
      "b) Minimum",
      "c) Zero",
      "d) Constant"
    ],
    "correctAnswer": "c) Zero"
  },
  {
    "id": 13,
    "questionText": "The second condition of equilibrium applies to:",
    "options": [
      "a) Rotational equilibrium",
      "b) Translational equilibrium",
      "c) Static equilibrium",
      "d) Dynamic equilibrium"
    ],
    "correctAnswer": "a) Rotational equilibrium"
  },
  {
    "id": 14,
    "questionText": "The sum of all the torques acting on a body about any point must be zero for it to be in:",
    "options": [
      "a) Translational equilibrium",
      "b) Rotational equilibrium",
      "c) Unstable equilibrium",
      "d) Neutral equilibrium"
    ],
    "correctAnswer": "b) Rotational equilibrium"
  },
  {
    "id": 15,
    "questionText": "The force that causes an object to move in a circle at constant speed is called:",
    "options": [
      "a) Gravitational force",
      "b) Centrifugal force",
      "c) Centripetal force",
      "d) Friction"
    ],
    "correctAnswer": "c) Centripetal force"
  },
  {
    "id": 16,
    "questionText": "The direction of centripetal force is always:",
    "options": [
      "a) Tangential to the circle",
      "b) Away from the center of the circle",
      "c) Towards the center of the circle",
      "d) In the direction of motion"
    ],
    "correctAnswer": "c) Towards the center of the circle"
  },
  {
    "id": 17,
    "questionText": "The value of centripetal force (Fc) is given by the formula:",
    "options": [
      "a) Fc = mv",
      "b) Fc = mv²",
      "c) Fc = mv²/r",
      "d) Fc = mvr"
    ],
    "correctAnswer": "c) Fc = mv²/r"
  },
  {
    "id": 18,
    "questionText": "Which of the following is an example of an application of centripetal force?",
    "options": [
      "a) A car braking",
      "b) A ball rolling down a ramp",
      "c) A washing machine dryer",
      "d) A pendulum swinging"
    ],
    "correctAnswer": "c) A washing machine dryer"
  },
  {
    "id": 19,
    "questionText": "A narrow strip that projects from behind the main scale known as tail or depth gauge is used to measure the depths of a:",
    "options": [
      "a) Solid object",
      "b) Hollow object",
      "c) Liquid container",
      "d) Gas cylinder"
    ],
    "correctAnswer": "b) Hollow object"
  },
  {
    "id": 20,
    "questionText": "When the direction of parallel forces is opposite to one another, they are called:",
    "options": [
      "a) Like parallel forces",
      "b) Unlike parallel forces",
      "c) Resultant forces",
      "d) Concurrent forces"
    ],
    "correctAnswer": "b) Unlike parallel forces"
  },
  {
    "id": 21,
    "questionText": "The ability to distinguish between like and unlike parallel forces involves knowing their:",
    "options": [
      "a) Magnitude",
      "b) Point of application",
      "c) Direction",
      "d) Unit"
    ],
    "correctAnswer": "c) Direction"
  },
  {
    "id": 22,
    "questionText": "The point around which a body can rotate is called the:",
    "options": [
      "a) Axis of rotation/Pivot",
      "b) Centre of gravity",
      "c) Centre of mass",
      "d) Equilibrium point"
    ],
    "correctAnswer": "a) Axis of rotation/Pivot"
  },
  {
    "id": 23,
    "questionText": "The magnitude of torque is equal to the product of force and:",
    "options": [
      "a) Area",
      "b) Volume",
      "c) Moment arm",
      "d) Mass"
    ],
    "correctAnswer": "c) Moment arm"
  },
  {
    "id": 24,
    "questionText": "If the line of action of force passes through the axis of rotation, the torque produced is:",
    "options": [
      "a) Maximum",
      "b) Zero",
      "c) Negative",
      "d) Constant"
    ],
    "correctAnswer": "b) Zero"
  },
  {
    "id": 25,
    "questionText": "The centre of gravity of a solid sphere is at its:",
    "options": [
      "a) Edge",
      "b) Surface",
      "c) Centre",
      "d) Top"
    ],
    "correctAnswer": "c) Centre"
  },
  {
    "id": 26,
    "questionText": "When a body is at rest and its velocity is zero, it is in:",
    "options": [
      "a) Static equilibrium",
      "b) Dynamic equilibrium",
      "c) Unstable equilibrium",
      "d) Neutral equilibrium"
    ],
    "correctAnswer": "a) Static equilibrium"
  },
  {
    "id": 27,
    "questionText": "A body moving with uniform velocity is in:",
    "options": [
      "a) Static equilibrium",
      "b) Dynamic equilibrium",
      "c) Unstable equilibrium",
      "d) Neutral equilibrium"
    ],
    "correctAnswer": "b) Dynamic equilibrium"
  },
  {
    "id": 28,
    "questionText": "The condition for translational equilibrium is that the net force (ΣF) acting on the body is:",
    "options": [
      "a) Maximum",
      "b) Positive",
      "c) Zero",
      "d) Negative"
    ],
    "correctAnswer": "c) Zero"
  },
  {
    "id": 29,
    "questionText": "To enhance the stability of a racing car, its centre of mass is kept:",
    "options": [
      "a) As low as possible",
      "b) As high as possible",
      "c) At the front",
      "d) At the rear"
    ],
    "correctAnswer": "a) As low as possible"
  },
  {
    "id": 30,
    "questionText": "The force that tends to produce an anticlockwise rotation about the axis is taken as:",
    "options": [
      "a) Negative torque",
      "b) Positive torque",
      "c) Zero torque",
      "d) Constant torque"
    ],
    "correctAnswer": "b) Positive torque"
  },
  {
    "id": 31,
    "questionText": "The process of splitting a force into its perpendicular components is known as:",
    "options": [
      "a) Resolution of force",
      "b) Composition of force",
      "c) Turning effect",
      "d) Couple"
    ],
    "correctAnswer": "a) Resolution of force"
  },
  {
    "id": 32,
    "questionText": "The centre of gravity of an irregular shaped lamina can be found by:",
    "options": [
      "a) Calculation",
      "b) Suspending it freely from different points",
      "c) Using a formula",
      "d) Measuring its mass and volume"
    ],
    "correctAnswer": "b) Suspending it freely from different points"
  },
  {
    "id": 33,
    "questionText": "An object resting on a horizontal surface, if rotated slightly, there is no force or torque that brings it back to its original position or moves it away. This state is called:",
    "options": [
      "a) Stable equilibrium",
      "b) Unstable equilibrium",
      "c) Neutral equilibrium",
      "d) Dynamic equilibrium"
    ],
    "correctAnswer": "c) Neutral equilibrium"
  },
  {
    "id": 34,
    "questionText": "A double decker bus is more likely to tilt and overturn if its centre of gravity is:",
    "options": [
      "a) Low",
      "b) High",
      "c) In the middle",
      "d) Towards the front"
    ],
    "correctAnswer": "b) High"
  },
  {
    "id": 35,
    "questionText": "The motion of Earth orbiting the Sun is an example of:",
    "options": [
      "a) Linear motion",
      "b) Vibratory motion",
      "c) Rotational motion around its own axis",
      "d) Motion involving centripetal force"
    ],
    "correctAnswer": "d) Motion involving centripetal force"
  },
  {
    "id": 36,
    "questionText": "If a body's resultant force is zero, but its resultant torque is non-zero, the body will:",
    "options": [
      "a) Remain at rest",
      "b) Move with uniform velocity",
      "c) Rotate",
      "d) Accelerate linearly"
    ],
    "correctAnswer": "c) Rotate"
  },
  {
    "id": 37,
    "questionText": "What makes a bottle opener an example of increasing the turning effect of force?",
    "options": [
      "a) It changes the direction of force.",
      "b) It reduces the force required.",
      "c) It applies force at a longer moment arm.",
      "d) It generates more force."
    ],
    "correctAnswer": "c) It applies force at a longer moment arm."
  },
  {
    "id": 38,
    "questionText": "When two equal and opposite parallel forces act at two different points of the same body, they form a:",
    "options": [
      "a) Moment",
      "b) Couple",
      "c) Resolution of force",
      "d) Centripetal force"
    ],
    "correctAnswer": "b) Couple"
  },
  {
    "id": 39,
    "questionText": "The force responsible for the steering wheel of a car working is due to:",
    "options": [
      "a) A couple",
      "b) A single force",
      "c) Centripetal force",
      "d) Friction"
    ],
    "correctAnswer": "a) A couple"
  },
  {
    "id": 40,
    "questionText": "The position of the centre of gravity of a body relative to its base of support affects its:",
    "options": [
      "a) Momentum",
      "b) Stability",
      "c) Velocity",
      "d) Mass"
    ],
    "correctAnswer": "b) Stability"
  },
  {
    "id": 41,
    "questionText": "An example of static equilibrium is:",
    "options": [
      "a) A car moving at constant speed",
      "b) A book lying on a table",
      "c) A child on a swing",
      "d) A paratrooper falling with uniform velocity"
    ],
    "correctAnswer": "b) A book lying on a table"
  },
  {
    "id": 42,
    "questionText": "A centripetal force is necessary for:",
    "options": [
      "a) Linear motion",
      "b) Circular motion",
      "c) Vibratory motion",
      "d) Projectile motion"
    ],
    "correctAnswer": "b) Circular motion"
  },
  {
    "id": 43,
    "questionText": "If the magnitude of two unlike parallel forces acting on a body are equal, the resultant force is:",
    "options": [
      "a) Maximum",
      "b) Double the individual force",
      "c) Zero",
      "d) Halved"
    ],
    "correctAnswer": "c) Zero"
  },
  {
    "id": 44,
    "questionText": "The condition for an object to be in complete equilibrium is:",
    "options": [
      "a) Only the first condition of equilibrium is met.",
      "b) Only the second condition of equilibrium is met.",
      "c) Both the first and second conditions of equilibrium are met.",
      "d) The object must be at rest."
    ],
    "correctAnswer": "c) Both the first and second conditions of equilibrium are met."
  },
  {
    "id": 45,
    "questionText": "In stable equilibrium, if the body is slightly tilted, its centre of gravity:",
    "options": [
      "a) Rises and moves further away.",
      "b) Rises and returns to its original position.",
      "c) Lowers.",
      "d) Stays at the same level."
    ],
    "correctAnswer": "b) Rises and returns to its original position."
  },
  {
    "id": 46,
    "questionText": "The use of balancing toys relies on the principle of:",
    "options": [
      "a) Keeping the center of gravity low",
      "b) High center of gravity",
      "c) Unstable equilibrium",
      "d) Continuous rotation"
    ],
    "correctAnswer": "a) Keeping the center of gravity low"
  },
  {
    "id": 47,
    "questionText": "Which of the following is true for an object in neutral equilibrium?",
    "options": [
      "a) Its centre of gravity rises when disturbed.",
      "b) Its centre of gravity falls when disturbed.",
      "c) Its centre of gravity remains at the same height when disturbed.",
      "d) It returns to its original position."
    ],
    "correctAnswer": "c) Its centre of gravity remains at the same height when disturbed."
  },
  {
    "id": 48,
    "questionText": "The principle of moments states that when a body is in balanced position, the sum of clockwise moments about any point equals the sum of:",
    "options": [
      "a) Anticlockwise moments about that point",
      "b) Net force",
      "c) Resultant force",
      "d) Applied force"
    ],
    "correctAnswer": "a) Anticlockwise moments about that point"
  },
  {
    "id": 49,
    "questionText": "The value of the gravitational acceleration for the moon orbiting the Earth is a key aspect of:",
    "options": [
      "a) Centripetal force",
      "b) Turning effects of force",
      "c) Work and energy",
      "d) Properties of matter"
    ],
    "correctAnswer": "a) Centripetal force"
  },
  {
    "id": 50,
    "questionText": "The force that causes an object to move in a circle at constant speed is called:",
    "options": [
      "a) Gravitational force",
      "b) Centrifugal force",
      "c) Centripetal force",
      "d) Friction"
    ],
    "correctAnswer": "c) Centripetal force"
  },
  {
    "id": 51,
    "questionText": "What type of motion is a washing machine drum exhibiting?",
    "options": [
      "a) Linear motion",
      "b) Vibratory motion",
      "c) Rotational motion due to centripetal force",
      "d) Translatory motion"
    ],
    "correctAnswer": "c) Rotational motion due to centripetal force"
  }
],
  "Work Energy and Power": [
  {
    "id": 1,
    "questionText": "Work is defined as the product of:",
    "options": [
      "a) Force and time",
      "b) Force and displacement in the direction of the force",
      "c) Mass and acceleration",
      "d) Energy and time"
    ],
    "correctAnswer": "b) Force and displacement in the direction of the force"
  },
  {
    "id": 2,
    "questionText": "The SI unit of work is:",
    "options": [
      "a) Newton",
      "b) Joule",
      "c) Watt",
      "d) Pascal"
    ],
    "correctAnswer": "b) Joule"
  },
  {
    "id": 3,
    "questionText": "Energy can be defined as the:",
    "options": [
      "a) Rate of doing work",
      "b) Turning effect of force",
      "c) Ability of a body to do work",
      "d) Force that causes displacement"
    ],
    "correctAnswer": "c) Ability of a body to do work"
  },
  {
    "id": 4,
    "questionText": "The combination of kinetic energy and potential energy is called:",
    "options": [
      "a) Mechanical energy",
      "b) Thermal energy",
      "c) Nuclear energy",
      "d) Electrical energy"
    ],
    "correctAnswer": "a) Mechanical energy"
  },
  {
    "id": 5,
    "questionText": "Kinetic energy is the energy possessed by a body due to its:",
    "options": [
      "a) Position",
      "b) Motion",
      "c) Deformation",
      "d) Mass"
    ],
    "correctAnswer": "b) Motion"
  },
  {
    "id": 6,
    "questionText": "Potential energy is defined as the energy that a body possesses by virtue of its:",
    "options": [
      "a) Motion",
      "b) Position or deformation",
      "c) Temperature",
      "d) Chemical composition"
    ],
    "correctAnswer": "b) Position or deformation"
  },
  {
    "id": 7,
    "questionText": "The energy stored in a compressed or stretched spring is called:",
    "options": [
      "a) Kinetic energy",
      "b) Elastic potential energy",
      "c) Gravitational potential energy",
      "d) Nuclear energy"
    ],
    "correctAnswer": "b) Elastic potential energy"
  },
  {
    "id": 8,
    "questionText": "Nuclear energy is the hidden energy in the nuclei of:",
    "options": [
      "a) Molecules",
      "b) Atoms",
      "c) Electrons",
      "d) Protons"
    ],
    "correctAnswer": "b) Atoms"
  },
  {
    "id": 9,
    "questionText": "The law of conservation of energy states that energy:",
    "options": [
      "a) Can be created and destroyed",
      "b) Cannot be created or destroyed, only transformed",
      "c) Always decreases in a closed system",
      "d) Is always converted to heat"
    ],
    "correctAnswer": "b) Cannot be created or destroyed, only transformed"
  },
  {
    "id": 10,
    "questionText": "Which of the following is a fossil fuel?",
    "options": [
      "a) Solar energy",
      "b) Wind energy",
      "c) Coal",
      "d) Geothermal energy"
    ],
    "correctAnswer": "c) Coal"
  },
  {
    "id": 11,
    "questionText": "Hydroelectric generation produces electricity from:",
    "options": [
      "a) Burning fuels",
      "b) Falling water",
      "c) Wind",
      "d) Solar radiation"
    ],
    "correctAnswer": "b) Falling water"
  },
  {
    "id": 12,
    "questionText": "Solar energy can be converted directly into electricity using:",
    "options": [
      "a) Windmills",
      "b) Dams",
      "c) Solar cells",
      "d) Geothermal plants"
    ],
    "correctAnswer": "c) Solar cells"
  },
  {
    "id": 13,
    "questionText": "Geothermal energy is the heat energy extracted from:",
    "options": [
      "a) The sun",
      "b) Hot rocks deep under the surface of the Earth",
      "c) Moving water",
      "d) Chemical reactions"
    ],
    "correctAnswer": "b) Hot rocks deep under the surface of the Earth"
  },
  {
    "id": 14,
    "questionText": "Energy from tides arises due to the:",
    "options": [
      "a) Earth's rotation",
      "b) Wind over the sea",
      "c) Gravitational force of the moon",
      "d) Earth's magnetic field"
    ],
    "correctAnswer": "c) Gravitational force of the moon"
  },
  {
    "id": 15,
    "questionText": "Which of the following is a non-renewable energy source?",
    "options": [
      "a) Solar energy",
      "b) Wind energy",
      "c) Nuclear energy",
      "d) Hydroelectric energy"
    ],
    "correctAnswer": "c) Nuclear energy"
  },
  {
    "id": 16,
    "questionText": "The production of hydroelectric power is considered:",
    "options": [
      "a) More economical and pollution free",
      "b) High pollution",
      "c) Expensive",
      "d) Dependent on fossil fuels"
    ],
    "correctAnswer": "a) More economical and pollution free"
  },
  {
    "id": 17,
    "questionText": "Power is defined as the:",
    "options": [
      "a) Total work done",
      "b) Rate of doing work",
      "c) Total energy consumed",
      "d) Force applied over time"
    ],
    "correctAnswer": "b) Rate of doing work"
  },
  {
    "id": 18,
    "questionText": "The SI unit of power is:",
    "options": [
      "a) Joule",
      "b) Newton",
      "c) Watt",
      "d) Volt"
    ],
    "correctAnswer": "c) Watt"
  },
  {
    "id": 19,
    "questionText": "One horsepower (hp) is equal to approximately:",
    "options": [
      "a) 500 W",
      "b) 646 W",
      "c) 746 W",
      "d) 1000 W"
    ],
    "correctAnswer": "c) 746 W"
  },
  {
    "id": 20,
    "questionText": "The efficiency of a working system is defined as the ratio of:",
    "options": [
      "a) Total input energy to useful output energy",
      "b) Useful output energy to total input energy",
      "c) Work done to time",
      "d) Force to displacement"
    ],
    "correctAnswer": "b) Useful output energy to total input energy"
  },
  {
    "id": 21,
    "questionText": "A system cannot have 100% efficiency because:",
    "options": [
      "a) It needs more input energy.",
      "b) Some energy is always lost as heat due to friction and other resistances.",
      "c) The output energy is always greater than input.",
      "d) Energy is created in the process."
    ],
    "correctAnswer": "b) Some energy is always lost as heat due to friction and other resistances."
  },
  {
    "id": 22,
    "questionText": "Which of the following is true about perpetual energy machines?",
    "options": [
      "a) They can do work indefinitely without external energy sources.",
      "b) They are highly efficient.",
      "c) They are hypothetical machines that do not exist in reality.",
      "d) They produce more energy than they consume."
    ],
    "correctAnswer": "c) They are hypothetical machines that do not exist in reality."
  },
  {
    "id": 23,
    "questionText": "If a 10 kg box is pushed up a frictionless inclined plane by a force of 100 N over a distance of 10 m, the work done is:",
    "options": [
      "a) 10 J",
      "b) 100 J",
      "c) 1000 J",
      "d) 10000 J"
    ],
    "correctAnswer": "c) 1000 J"
  },
  {
    "id": 24,
    "questionText": "Which of the following has potential energy?",
    "options": [
      "a) A moving car",
      "b) A stretched bow",
      "c) A flying bird",
      "d) A rolling ball"
    ],
    "correctAnswer": "b) A stretched bow"
  },
  {
    "id": 25,
    "questionText": "According to Einstein's theory of relativity, matter and energy are:",
    "options": [
      "a) Independent",
      "b) Interchangeable",
      "c) Unrelated",
      "d) Always conserved separately"
    ],
    "correctAnswer": "b) Interchangeable"
  },
  {
    "id": 26,
    "questionText": "Fossil fuels are considered non-renewable because:",
    "options": [
      "a) They are formed over millions of years and are in limited quantity.",
      "b) They produce electricity.",
      "c) They are easily replenished.",
      "d) They are expensive."
    ],
    "correctAnswer": "a) They are formed over millions of years and are in limited quantity."
  },
  {
    "id": 27,
    "questionText": "The main disadvantage of nuclear power generation is:",
    "options": [
      "a) High cost",
      "b) Low efficiency",
      "c) Leakage of radioactive radiation",
      "d) Dependence on weather"
    ],
    "correctAnswer": "c) Leakage of radioactive radiation"
  },
  {
    "id": 28,
    "questionText": "A kilowatt-hour (kWh) is a unit of:",
    "options": [
      "a) Power",
      "b) Energy",
      "c) Force",
      "d) Work (rate)"
    ],
    "correctAnswer": "b) Energy"
  },
  {
    "id": 29,
    "questionText": "If a machine produces 80 J of useful output energy for 100 J of total input energy, its efficiency is:",
    "options": [
      "a) 100%",
      "b) 90%",
      "c) 80%",
      "d) 70%"
    ],
    "correctAnswer": "c) 80%"
  },
  {
    "id": 30,
    "questionText": "The SI unit of energy (Joule) is equivalent to:",
    "options": [
      "a) N/m",
      "b) N m",
      "c) W/s",
      "d) Pa s"
    ],
    "correctAnswer": "b) N m"
  },
  {
    "id": 31,
    "questionText": "The energy possessed by a body due to its height above the ground is called:",
    "options": [
      "a) Kinetic energy",
      "b) Elastic potential energy",
      "c) Gravitational potential energy",
      "d) Thermal energy"
    ],
    "correctAnswer": "c) Gravitational potential energy"
  },
  {
    "id": 32,
    "questionText": "Water falling from a height in hydroelectric power generation is an example of conversion from:",
    "options": [
      "a) Gravitational potential energy to kinetic energy",
      "b) Kinetic energy to electrical energy",
      "c) Chemical energy to electrical energy",
      "d) Thermal energy to electrical energy"
    ],
    "correctAnswer": "a) Gravitational potential energy to kinetic energy"
  },
  {
    "id": 33,
    "questionText": "The process of burning oil, coal, and natural gas to produce electricity is typical of:",
    "options": [
      "a) Hydroelectric power plants",
      "b) Solar power plants",
      "c) Fossil fuel power plants",
      "d) Wind power plants"
    ],
    "correctAnswer": "c) Fossil fuel power plants"
  },
  {
    "id": 34,
    "questionText": "The major disadvantage of wind energy production is:",
    "options": [
      "a) High cost of production",
      "b) Pollution",
      "c) Windmills spoil the beauty of landscape",
      "d) Not renewable"
    ],
    "correctAnswer": "c) Windmills spoil the beauty of landscape"
  },
  {
    "id": 35,
    "questionText": "The unit \"Watt\" is named in honor of:",
    "options": [
      "a) James Watt",
      "b) Isaac Newton",
      "c) Albert Einstein",
      "d) Michael Faraday"
    ],
    "correctAnswer": "a) James Watt"
  },
  {
    "id": 36,
    "questionText": "Which of the following is a renewable energy source?",
    "options": [
      "a) Natural gas",
      "b) Uranium",
      "c) Biomass",
      "d) Coal"
    ],
    "correctAnswer": "c) Biomass"
  },
  {
    "id": 37,
    "questionText": "The ability to do work is known as:",
    "options": [
      "a) Power",
      "b) Energy",
      "c) Force",
      "d) Momentum"
    ],
    "correctAnswer": "b) Energy"
  },
  {
    "id": 38,
    "questionText": "When a force does not produce any displacement, the work done is:",
    "options": [
      "a) Maximum",
      "b) Positive",
      "c) Zero",
      "d) Negative"
    ],
    "correctAnswer": "c) Zero"
  },
  {
    "id": 39,
    "questionText": "The energy stored in a body due to its motion is called:",
    "options": [
      "a) Potential energy",
      "b) Kinetic energy",
      "c) Mechanical energy",
      "d) Thermal energy"
    ],
    "correctAnswer": "b) Kinetic energy"
  },
  {
    "id": 40,
    "questionText": "What is the value of 1 MW (MegaWatt) in Watts?",
    "options": [
      "a) 10³ W",
      "b) 10⁴ W",
      "c) 10⁶ W",
      "d) 10⁹ W"
    ],
    "correctAnswer": "c) 10⁶ W"
  },
  {
    "id": 41,
    "questionText": "Biofuel energy is obtained from:",
    "options": [
      "a) Fossil fuels",
      "b) Nuclear reactions",
      "c) Fermentation of organic materials",
      "d) Geothermal heat"
    ],
    "correctAnswer": "c) Fermentation of organic materials"
  },
  {
    "id": 42,
    "questionText": "A person pushing a lawn mower makes an angle of 45° with the horizontal. If the mower is moved through a distance of 20 m, and the force applied is 50 N, how much work is done?",
    "options": [
      "a) 50 J",
      "b) 1000 J",
      "c) 500 J",
      "d) 707 J"
    ],
    "correctAnswer": "d) 707 J"
  },
  {
    "id": 43,
    "questionText": "What is the efficiency of an ideal machine that would have 100% efficiency?",
    "options": [
      "a) It is impossible for any real machine to have 100% efficiency.",
      "b) It would require no energy input.",
      "c) It would produce more energy than it consumes.",
      "d) It would have no output."
    ],
    "correctAnswer": "a) It is impossible for any real machine to have 100% efficiency."
  },
  {
    "id": 44,
    "questionText": "The heat energy from hot rocks deep under the Earth's surface is harnessed through:",
    "options": [
      "a) Solar panels",
      "b) Geothermal power plants",
      "c) Wind turbines",
      "d) Hydroelectric dams"
    ],
    "correctAnswer": "b) Geothermal power plants"
  },
  {
    "id": 45,
    "questionText": "The energy carried by waves in the sea can be used to generate electricity using:",
    "options": [
      "a) Duck floats and balanced floats",
      "b) Wind turbines",
      "c) Solar cells",
      "d) Geothermal wells"
    ],
    "correctAnswer": "a) Duck floats and balanced floats"
  },
  {
    "id": 46,
    "questionText": "The remains of plants and animals buried under the Earth took millions of years to change into:",
    "options": [
      "a) Fossil fuels",
      "b) Biofuels",
      "c) Nuclear fuels",
      "d) Geothermal sources"
    ],
    "correctAnswer": "a) Fossil fuels"
  },
  {
    "id": 47,
    "questionText": "What happens to the potential energy when a body is dropped to point B at a height x from the ground from point A?",
    "options": [
      "a) It increases.",
      "b) It remains constant.",
      "c) It decreases.",
      "d) It becomes zero immediately."
    ],
    "correctAnswer": "c) It decreases."
  },
  {
    "id": 48,
    "questionText": "Which factor is responsible for the energy transferred in the form of heat from a hot body to a cold body?",
    "options": [
      "a) Temperature difference",
      "b) Mass difference",
      "c) Volume difference",
      "d) Density difference"
    ],
    "correctAnswer": "a) Temperature difference"
  },
  {
    "id": 49,
    "questionText": "The energy required to melt ice or boil water is an example of:",
    "options": [
      "a) Kinetic energy",
      "b) Potential energy",
      "c) Thermal energy",
      "d) Electrical energy"
    ],
    "correctAnswer": "c) Thermal energy"
  },
  {
    "id": 50,
    "questionText": "What type of energy is possessed by a stretched bow string?",
    "options": [
      "a) Kinetic energy",
      "b) Elastic potential energy",
      "c) Gravitational potential energy",
      "d) Nuclear energy"
    ],
    "correctAnswer": "b) Elastic potential energy"
  }
],
  "Mechanical Properties of Matter": [
  {
    "id": 1,
    "questionText": "A force applied on an object that changes its size or shape is known as a:",
    "options": [
      "A) Restoring force",
      "B) Normal force",
      "C) Deforming force",
      "D) Frictional force"
    ],
    "correctAnswer": "C) Deforming force"
  },
  {
    "id": 2,
    "questionText": "Materials like clay and plasticine that do not regain their original shape after the deforming force is removed are called:",
    "options": [
      "A) Elastic materials",
      "B) Inelastic materials",
      "C) Ductile materials",
      "D) Brittle materials"
    ],
    "correctAnswer": "B) Inelastic materials"
  },
  {
    "id": 3,
    "questionText": "Hooke's Law states that force is directly proportional to the extension or compression within the:",
    "options": [
      "A) Breaking point",
      "B) Elastic limit",
      "C) Plastic region",
      "D) Yield strength"
    ],
    "correctAnswer": "B) Elastic limit"
  },
  {
    "id": 4,
    "questionText": "What is the SI unit of the spring constant 'k' in Hooke's Law?",
    "options": [
      "A) N m",
      "B) N m²",
      "C) N m⁻¹",
      "D) N s"
    ],
    "correctAnswer": "C) N m⁻¹"
  },
  {
    "id": 5,
    "questionText": "Which of the following instruments uses the principle of Hooke's Law?",
    "options": [
      "A) Metre rule",
      "B) Spring scales",
      "C) Stopwatch",
      "D) Measuring cylinder"
    ],
    "correctAnswer": "B) Spring scales"
  },
  {
    "id": 6,
    "questionText": "The density of a substance is defined as its:",
    "options": [
      "A) Mass per unit volume",
      "B) Weight per unit area",
      "C) Force per unit length",
      "D) Mass per unit area"
    ],
    "correctAnswer": "A) Mass per unit volume"
  },
  {
    "id": 7,
    "questionText": "What is the SI unit of density?",
    "options": [
      "A) kg m⁻¹",
      "B) kg m⁻³",
      "C) g cm⁻³",
      "D) N m⁻²"
    ],
    "correctAnswer": "B) kg m⁻³"
  },
  {
    "id": 8,
    "questionText": "According to the sources, the density of iron is:",
    "options": [
      "A) 1000 kg m⁻³",
      "B) 2700 kg m⁻³",
      "C) 19300 kg m⁻³",
      "D) 7800 kg m⁻³"
    ],
    "correctAnswer": "D) 7800 kg m⁻³"
  },
  {
    "id": 9,
    "questionText": "Pressure is defined as:",
    "options": [
      "A) Force exerted normally on unit area",
      "B) Force applied parallel to unit area",
      "C) Weight per unit volume",
      "D) Mass per unit volume"
    ],
    "correctAnswer": "A) Force exerted normally on unit area"
  },
  {
    "id": 10,
    "questionText": "What is the SI unit of pressure?",
    "options": [
      "A) Newton",
      "B) Joule",
      "C) Pascal",
      "D) Watt"
    ],
    "correctAnswer": "C) Pascal"
  },
  {
    "id": 11,
    "questionText": "One Pascal (Pa) is equivalent to:",
    "options": [
      "A) N m⁻²",
      "B) N m⁻¹",
      "C) kg m⁻²",
      "D) kg m⁻³"
    ],
    "correctAnswer": "A) N m⁻²"
  },
  {
    "id": 12,
    "questionText": "A sharp knife cuts objects more easily than a blunt knife because the sharp knife:",
    "options": [
      "A) Has more force",
      "B) Is made of stronger material",
      "C) Has a smaller contact area, increasing pressure",
      "D) Has a larger contact area, decreasing pressure"
    ],
    "correctAnswer": "C) Has a smaller contact area, increasing pressure"
  },
  {
    "id": 13,
    "questionText": "The pressure at a certain depth 'h' in a liquid is given by the formula:",
    "options": [
      "A) P = F/A",
      "B) P = mgh",
      "C) P = ρgh",
      "D) P = Work/Time"
    ],
    "correctAnswer": "C) P = ρgh"
  },
  {
    "id": 14,
    "questionText": "What happens to atmospheric pressure as altitude increases?",
    "options": [
      "A) It increases",
      "B) It decreases",
      "C) It remains constant",
      "D) It fluctuates unpredictably"
    ],
    "correctAnswer": "B) It decreases"
  },
  {
    "id": 15,
    "questionText": "The experiment where a tin can crumples after boiling water inside it and sealing it demonstrates:",
    "options": [
      "A) Boyle's Law",
      "B) Charles's Law",
      "C) Evidence of atmospheric pressure",
      "D) Pascal's Law"
    ],
    "correctAnswer": "C) Evidence of atmospheric pressure"
  },
  {
    "id": 16,
    "questionText": "Which instrument is used to measure atmospheric pressure?",
    "options": [
      "A) Barometer",
      "B) Hydrometer",
      "C) Ammeter",
      "D) Voltmeter"
    ],
    "correctAnswer": "A) Barometer"
  },
  {
    "id": 17,
    "questionText": "The standard atmospheric pressure is approximately:",
    "options": [
      "A) 1013 Pa",
      "B) 1.013 x 10³ Pa",
      "C) 1.013 x 10⁵ Pa",
      "D) 1.013 x 10⁷ Pa"
    ],
    "correctAnswer": "C) 1.013 x 10⁵ Pa"
  },
  {
    "id": 18,
    "questionText": "A simple manometer consists of a U-shaped glass tube which contains:",
    "options": [
      "A) Water",
      "B) Oil",
      "C) Mercury",
      "D) Alcohol"
    ],
    "correctAnswer": "C) Mercury"
  },
  {
    "id": 19,
    "questionText": "Pascal's Law states that pressure applied at one point in an enclosed liquid is transmitted:",
    "options": [
      "A) Partially to all parts",
      "B) Only to the bottom",
      "C) Equally to all parts without loss",
      "D) Only to the top surface"
    ],
    "correctAnswer": "C) Equally to all parts without loss"
  },
  {
    "id": 20,
    "questionText": "Which of the following is an application of Pascal's Law?",
    "options": [
      "A) Spring balance",
      "B) Hydraulic press",
      "C) Meter rule",
      "D) Thermometer"
    ],
    "correctAnswer": "B) Hydraulic press"
  },
  {
    "id": 21,
    "questionText": "In a hydraulic press, if the area of the larger piston (A₂) is greater than the area of the smaller piston (A₁), then the force produced on the larger piston (F₂) will be:",
    "options": [
      "A) Less than F₁",
      "B) Greater than F₁",
      "C) Equal to F₁",
      "D) Independent of F₁"
    ],
    "correctAnswer": "B) Greater than F₁"
  },
  {
    "id": 22,
    "questionText": "What is transferred through the oil in a hydraulic brake system?",
    "options": [
      "A) Force",
      "B) Volume",
      "C) Pressure",
      "D) Mass"
    ],
    "correctAnswer": "C) Pressure"
  },
  {
    "id": 23,
    "questionText": "Which of the following is NOT a property of an ideal thermometric substance mentioned in the sources?",
    "options": [
      "A) Good conductor of heat",
      "B) Uniform expansion",
      "C) Does not wet glass",
      "D) Low thermal conductivity"
    ],
    "correctAnswer": "D) Low thermal conductivity"
  },
  {
    "id": 24,
    "questionText": "A force is applied to a spring. If the spring extends, this change is described as:",
    "options": [
      "A) Compression",
      "B) Extension",
      "C) Torsion",
      "D) Shearing"
    ],
    "correctAnswer": "B) Extension"
  },
  {
    "id": 25,
    "questionText": "The graph of force versus extension for an elastic material within its elastic limit is typically a:",
    "options": [
      "A) Curve",
      "B) Straight line through the origin",
      "C) Horizontal line",
      "D) Vertical line"
    ],
    "correctAnswer": "B) Straight line through the origin"
  },
  {
    "id": 26,
    "questionText": "Which of these devices relies on the deflection of a pointer proportional to the current flowing through a tiny coiled hair spring?",
    "options": [
      "A) Spring balance",
      "B) Mechanical clock",
      "C) Galvanometer",
      "D) Stopwatch"
    ],
    "correctAnswer": "C) Galvanometer"
  },
  {
    "id": 27,
    "questionText": "If a substance has a mass of 94 g and a volume of 12 cm³, its density is:",
    "options": [
      "A) 0.127 kg m⁻³",
      "B) 7.8 kg m⁻³",
      "C) 7800 kg m⁻³",
      "D) 7.8 g cm⁻³"
    ],
    "correctAnswer": "D) 7.8 g cm⁻³"
  },
  {
    "id": 28,
    "questionText": "The pressure exerted by a liquid increases with:",
    "options": [
      "A) Decreasing depth",
      "B) Decreasing density",
      "C) Increasing depth",
      "D) Increasing surface area"
    ],
    "correctAnswer": "C) Increasing depth"
  },
  {
    "id": 29,
    "questionText": "Why do elephants have large, broad feet to walk on soft ground?",
    "options": [
      "A) To increase the force on the ground",
      "B) To decrease the pressure on the ground",
      "C) To increase the pressure on the ground",
      "D) To improve balance"
    ],
    "correctAnswer": "B) To decrease the pressure on the ground"
  },
  {
    "id": 30,
    "questionText": "The atmospheric pressure at sea level is equivalent to the pressure exerted by a mercury column of:",
    "options": [
      "A) 100 mm",
      "B) 500 mm",
      "C) 760 mm",
      "D) 1000 mm"
    ],
    "correctAnswer": "C) 760 mm"
  },
  {
    "id": 31,
    "questionText": "In a simple mercury barometer, the space above the mercury column is typically:",
    "options": [
      "A) Filled with air",
      "B) Filled with water vapor",
      "C) Almost zero pressure",
      "D) Under high pressure"
    ],
    "correctAnswer": "C) Almost zero pressure"
  },
  {
    "id": 32,
    "questionText": "The density of liquid mercury in a barometer continuously:",
    "options": [
      "A) Increases",
      "B) Remains constant",
      "C) Decreases with height",
      "D) Fluctuates randomly"
    ],
    "correctAnswer": "B) Remains constant"
  },
  {
    "id": 33,
    "questionText": "Which property of a liquid ensures the equal transmission of pressure in all directions, as described by Pascal's Law?",
    "options": [
      "A) Incompressibility",
      "B) High density",
      "C) Low viscosity",
      "D) Incompressibility (implied from transmission)"
    ],
    "correctAnswer": "D) Incompressibility (implied from transmission)"
  },
  {
    "id": 34,
    "questionText": "Hydraulic brakes are an essential safety feature in vehicles because they:",
    "options": [
      "A) Directly multiply the force applied",
      "B) Convert pressure into mechanical energy",
      "C) Effectively transmit pressure to all brake cylinders",
      "D) Reduce the overall weight of the vehicle"
    ],
    "correctAnswer": "C) Effectively transmit pressure to all brake cylinders"
  },
  {
    "id": 35,
    "questionText": "The elastic limit refers to the point beyond which a material:",
    "options": [
      "A) Breaks",
      "B) Becomes harder",
      "C) Does not return to its original shape",
      "D) Becomes more flexible"
    ],
    "correctAnswer": "C) Does not return to its original shape"
  },
  {
    "id": 36,
    "questionText": "Which of the following substances has the lowest density according to Table 7.1?",
    "options": [
      "A) Aluminium",
      "B) Iron",
      "C) Air",
      "D) Gold"
    ],
    "correctAnswer": "C) Air"
  },
  {
    "id": 37,
    "questionText": "A body submerged in a liquid experiences pressure that acts:",
    "options": [
      "A) Only downwards",
      "B) Only sideways",
      "C) In all directions",
      "D) Only upwards"
    ],
    "correctAnswer": "C) In all directions"
  },
  {
    "id": 38,
    "questionText": "The value of gravitational acceleration (g) is crucial in calculating liquid pressure because:",
    "options": [
      "A) It affects the liquid's temperature",
      "B) It determines the weight of the liquid column",
      "C) It changes the liquid's density",
      "D) It influences the liquid's surface tension"
    ],
    "correctAnswer": "B) It determines the weight of the liquid column"
  },
  {
    "id": 39,
    "questionText": "Why do submarines need to withstand enormous pressure at great depths?",
    "options": [
      "A) Because the density of water increases significantly",
      "B) Because the temperature of water changes",
      "C) Because the pressure in liquids increases with depth",
      "D) Because of strong ocean currents"
    ],
    "correctAnswer": "C) Because the pressure in liquids increases with depth"
  },
  {
    "id": 40,
    "questionText": "When drawing water with a syringe, the atmospheric pressure:",
    "options": [
      "A) Increases the volume of water",
      "B) Decreases the water's density",
      "C) Pushes the water up into the syringe",
      "D) Has no effect on the water"
    ],
    "correctAnswer": "C) Pushes the water up into the syringe"
  },
  {
    "id": 41,
    "questionText": "In a hydraulic press, a small force applied to a smaller piston can lift a much heavier load on a larger piston. This is due to:",
    "options": [
      "A) Conservation of energy",
      "B) Force multiplication",
      "C) Reduced friction",
      "D) Increased volume"
    ],
    "correctAnswer": "B) Force multiplication"
  },
  {
    "id": 42,
    "questionText": "What is the pressure at the surface of a liquid in an open container?",
    "options": [
      "A) Zero",
      "B) Negligible",
      "C) Atmospheric pressure",
      "D) Depends on the liquid's density"
    ],
    "correctAnswer": "C) Atmospheric pressure"
  },
  {
    "id": 43,
    "questionText": "Which material from the table would be most suitable for building structures that need to be very strong?",
    "options": [
      "A) Petrol",
      "B) Wood",
      "C) Water",
      "D) Steel"
    ],
    "correctAnswer": "D) Steel"
  },
  {
    "id": 44,
    "questionText": "If you press a drawing pin with your thumb, the pin enters the wooden board. This illustrates:",
    "options": [
      "A) Newton's Third Law",
      "B) Conservation of momentum",
      "C) Pressure distribution based on area",
      "D) Elasticity of wood"
    ],
    "correctAnswer": "C) Pressure distribution based on area"
  },
  {
    "id": 45,
    "questionText": "The air pressure gauge used to measure pressure in motor car tyres relies on the principle that:",
    "options": [
      "A) Air is incompressible",
      "B) Pressure exerts force over an area",
      "C) Air expands when heated",
      "D) Air density varies with volume"
    ],
    "correctAnswer": "B) Pressure exerts force over an area"
  },
  {
    "id": 46,
    "questionText": "What is the term for the height difference in the mercury levels of a manometer that indicates the pressure of a gas cylinder?",
    "options": [
      "A) 'h' in P = ρgh",
      "B) The length of the tube",
      "C) The volume of mercury",
      "D) The cross-sectional area of the tube"
    ],
    "correctAnswer": "A) 'h' in P = ρgh"
  },
  {
    "id": 47,
    "questionText": "The technology of hydraulic systems is primarily based on:",
    "options": [
      "A) Archimedes' principle",
      "B) Bernoulli's principle",
      "C) Pascal's Law",
      "D) Boyle's Law"
    ],
    "correctAnswer": "C) Pascal's Law"
  },
  {
    "id": 48,
    "questionText": "The property of solids to return to their original shape after a deforming force is removed is called:",
    "options": [
      "A) Plasticity",
      "B) Elasticity",
      "C) Brittleness",
      "D) Ductility"
    ],
    "correctAnswer": "B) Elasticity"
  },
  {
    "id": 49,
    "questionText": "What type of balance is based on the principle of levers and uses known standard masses to compare the mass of an object?",
    "options": [
      "A) Spring balance",
      "B) Physical balance",
      "C) Electronic balance",
      "D) Digital balance"
    ],
    "correctAnswer": "B) Physical balance"
  },
  {
    "id": 50,
    "questionText": "The value of 'g' (gravitational acceleration) is approximately:",
    "options": [
      "A) 9.8 m s⁻²",
      "B) 10 m s⁻²",
      "C) 9.8 km s⁻²",
      "D) 10 km s⁻²"
    ],
    "correctAnswer": "A) 9.8 m s⁻²"
  }
],
  "Thermal Properties of Matter": [
  {
    "id": 1,
    "questionText": "Kinematics is the study of motion of objects:",
    "options": [
      "Considering the forces that cause the motion",
      "Without referring to the forces that cause the motion",
      "Only for objects at rest",
      "Only for objects moving in a straight line"
    ],
    "correctAnswer": "Without referring to the forces that cause the motion"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a scalar quantity?",
    "options": [
      "Displacement",
      "Velocity",
      "Mass",
      "Force"
    ],
    "correctAnswer": "Mass"
  },
  {
    "id": 3,
    "questionText": "A vector quantity needs to be described completely by:",
    "options": [
      "Its magnitude only",
      "Both magnitude and direction",
      "Its direction only",
      "Its unit only"
    ],
    "correctAnswer": "Both magnitude and direction"
  },
  {
    "id": 4,
    "questionText": "The method used to add two or more vectors by placing the tail of one vector to the head of the previous one is called:",
    "options": [
      "Head-to-tail rule",
      "Parallelogram method",
      "Resolution of vectors",
      "Graphical analysis"
    ],
    "correctAnswer": "Head-to-tail rule"
  },
  {
    "id": 5,
    "questionText": "Motion in which a body moves along a straight line is called:",
    "options": [
      "Linear motion",
      "Circular motion",
      "Random motion",
      "Rotatory motion"
    ],
    "correctAnswer": "Linear motion"
  },
  {
    "id": 6,
    "questionText": "The motion of a spinning top is an example of:",
    "options": [
      "Translatory motion",
      "Rotatory motion",
      "Vibratory motion",
      "Random motion"
    ],
    "correctAnswer": "Rotatory motion"
  },
  {
    "id": 7,
    "questionText": "The shortest distance between the initial and final positions of a body is called its:",
    "options": [
      "Distance",
      "Displacement",
      "Speed",
      "Velocity"
    ],
    "correctAnswer": "Displacement"
  },
  {
    "id": 8,
    "questionText": "Speed is a scalar quantity because it has:",
    "options": [
      "Direction only",
      "Magnitude only",
      "Both magnitude and direction",
      "Neither magnitude nor direction"
    ],
    "correctAnswer": "Magnitude only"
  },
  {
    "id": 9,
    "questionText": "The SI unit of speed is:",
    "options": [
      "m s⁻¹",
      "km h⁻¹",
      "m s⁻²",
      "km s⁻¹"
    ],
    "correctAnswer": "m s⁻¹"
  },
  {
    "id": 10,
    "questionText": "Velocity is a vector quantity because it requires:",
    "options": [
      "Magnitude only",
      "Magnitude and direction",
      "Direction only",
      "Time"
    ],
    "correctAnswer": "Magnitude and direction"
  },
  {
    "id": 11,
    "questionText": "If a body does not change its speed and direction, its velocity is:",
    "options": [
      "Uniform",
      "Non-uniform",
      "Zero",
      "Increasing"
    ],
    "correctAnswer": "Uniform"
  },
  {
    "id": 12,
    "questionText": "Acceleration is defined as the rate of change of:",
    "options": [
      "Speed",
      "Velocity",
      "Distance",
      "Displacement"
    ],
    "correctAnswer": "Velocity"
  },
  {
    "id": 13,
    "questionText": "The SI unit of acceleration is:",
    "options": [
      "m s⁻¹",
      "m s⁻²",
      "km h⁻²",
      "N kg⁻¹"
    ],
    "correctAnswer": "m s⁻²"
  },
  {
    "id": 14,
    "questionText": "A distance-time graph where the line is curved upward (concave up) indicates:",
    "options": [
      "Uniform speed",
      "Constant velocity",
      "Increasing speed/acceleration",
      "Decreasing speed/deceleration"
    ],
    "correctAnswer": "Increasing speed/acceleration"
  },
  {
    "id": 15,
    "questionText": "The gradient of a distance-time graph represents:",
    "options": [
      "Acceleration",
      "Speed",
      "Displacement",
      "Time"
    ],
    "correctAnswer": "Speed"
  },
  {
    "id": 16,
    "questionText": "The gradient of a speed-time graph represents:",
    "options": [
      "Acceleration",
      "Distance",
      "Speed",
      "Time"
    ],
    "correctAnswer": "Acceleration"
  },
  {
    "id": 17,
    "questionText": "The area under a speed-time graph represents:",
    "options": [
      "Acceleration",
      "Velocity",
      "Distance covered",
      "Time interval"
    ],
    "correctAnswer": "Distance covered"
  },
  {
    "id": 18,
    "questionText": "For motion under gravity, the acceleration due to gravity (g) is approximately:",
    "options": [
      "5 m s⁻²",
      "9.8 m s⁻²",
      "10 m s⁻¹",
      "0 m s⁻²"
    ],
    "correctAnswer": "9.8 m s⁻²"
  },
  {
    "id": 19,
    "questionText": "When a body is falling freely under the action of gravity, the direction of gravitational acceleration is:",
    "options": [
      "Downwards",
      "Upwards",
      "Horizontal",
      "Dependent on the initial velocity"
    ],
    "correctAnswer": "Downwards"
  },
  {
    "id": 20,
    "questionText": "If a body is thrown vertically upward, the value of 'g' will be taken as:",
    "options": [
      "Negative",
      "Positive",
      "Zero",
      "Variable"
    ],
    "correctAnswer": "Negative"
  },
  {
    "id": 21,
    "questionText": "Which type of motion is exhibited by a simple pendulum?",
    "options": [
      "Translatory motion",
      "Rotatory motion",
      "Vibratory motion",
      "Linear motion"
    ],
    "correctAnswer": "Vibratory motion"
  },
  {
    "id": 22,
    "questionText": "The relationship between distance and time for an object at rest is represented by a distance-time graph that is:",
    "options": [
      "A straight line with a positive slope",
      "A straight line with a negative slope",
      "A horizontal straight line",
      "A curved line"
    ],
    "correctAnswer": "A horizontal straight line"
  },
  {
    "id": 23,
    "questionText": "The SI unit for displacement is:",
    "options": [
      "km",
      "m",
      "cm",
      "mm"
    ],
    "correctAnswer": "m"
  },
  {
    "id": 24,
    "questionText": "A car moving on a circular road with constant speed is an example of:",
    "options": [
      "Linear motion",
      "Circular motion",
      "Random motion",
      "Vibratory motion"
    ],
    "correctAnswer": "Circular motion"
  },
  {
    "id": 25,
    "questionText": "An object falls freely from a height. Its initial velocity is:",
    "options": [
      "Zero",
      "Maximum",
      "Constant",
      "Negative"
    ],
    "correctAnswer": "Zero"
  },
  {
    "id": 26,
    "questionText": "If a body moves with uniform acceleration, its speed-time graph will be a:",
    "options": [
      "Straight line rising upward",
      "Horizontal straight line",
      "Curved line",
      "Straight line falling downward"
    ],
    "correctAnswer": "Straight line rising upward"
  },
  {
    "id": 27,
    "questionText": "The first equation of motion relates:",
    "options": [
      "Displacement, initial velocity, time, acceleration",
      "Final velocity, initial velocity, acceleration, time",
      "Displacement, final velocity, acceleration",
      "Final velocity, time, acceleration"
    ],
    "correctAnswer": "Final velocity, initial velocity, acceleration, time"
  },
  {
    "id": 28,
    "questionText": "Which of the following conditions is assumed when applying equations of motion for bodies moving under gravity?",
    "options": [
      "Air resistance is considered.",
      "Motion is always along a curved path.",
      "Acceleration is assumed to be uniform.",
      "Initial velocity is always zero."
    ],
    "correctAnswer": "Acceleration is assumed to be uniform."
  },
  {
    "id": 29,
    "questionText": "The concept of \"universal speed limit\" in physics is associated with:",
    "options": [
      "Newton's laws",
      "Einstein's theory of special relativity",
      "Kepler's laws",
      "Galileo's experiments"
    ],
    "correctAnswer": "Einstein's theory of special relativity"
  },
  {
    "id": 30,
    "questionText": "The magnitude of a vector is always:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Variable"
    ],
    "correctAnswer": "Positive"
  },
  {
    "id": 31,
    "questionText": "When adding two vectors graphically using the head-to-tail rule, the resultant vector is drawn from:",
    "options": [
      "The head of the first vector to the head of the last vector",
      "The tail of the first vector to the head of the last vector",
      "The tail of the last vector to the head of the first vector",
      "The head of the first vector to the tail of the last vector"
    ],
    "correctAnswer": "The tail of the first vector to the head of the last vector"
  },
  {
    "id": 32,
    "questionText": "The motion of a honey bee is an example of:",
    "options": [
      "Linear motion",
      "Circular motion",
      "Random motion",
      "Vibratory motion"
    ],
    "correctAnswer": "Random motion"
  },
  {
    "id": 33,
    "questionText": "A body is said to be moving with uniform velocity if its speed and direction:",
    "options": [
      "Change constantly",
      "Do not change",
      "Change only in magnitude",
      "Change only in direction"
    ],
    "correctAnswer": "Do not change"
  },
  {
    "id": 34,
    "questionText": "If the velocity of a body is changing, it is said to have:",
    "options": [
      "Uniform velocity",
      "Non-uniform velocity",
      "Zero velocity",
      "Constant speed"
    ],
    "correctAnswer": "Non-uniform velocity"
  },
  {
    "id": 35,
    "questionText": "Deceleration or retardation is also known as:",
    "options": [
      "Positive acceleration",
      "Negative acceleration",
      "Uniform acceleration",
      "Zero acceleration"
    ],
    "correctAnswer": "Negative acceleration"
  },
  {
    "id": 36,
    "questionText": "A graph is a pictorial diagram that shows the relationship between:",
    "options": [
      "One physical quantity",
      "Only scalar quantities",
      "Two physical quantities",
      "Only vector quantities"
    ],
    "correctAnswer": "Two physical quantities"
  },
  {
    "id": 37,
    "questionText": "In a distance-time graph, the independent quantity (time) is taken along the:",
    "options": [
      "X-axis",
      "Y-axis",
      "Z-axis",
      "Any axis"
    ],
    "correctAnswer": "X-axis"
  },
  {
    "id": 38,
    "questionText": "What does a horizontal line in a speed-time graph indicate?",
    "options": [
      "Increasing acceleration",
      "Decreasing acceleration",
      "Constant speed",
      "Zero speed"
    ],
    "correctAnswer": "Constant speed"
  },
  {
    "id": 39,
    "questionText": "The equation S = vᵢt + ½at² is used to calculate:",
    "options": [
      "Displacement",
      "Final velocity",
      "Acceleration",
      "Time"
    ],
    "correctAnswer": "Displacement"
  },
  {
    "id": 40,
    "questionText": "The term 'free fall acceleration' is used when the only force acting on a body is:",
    "options": [
      "Air resistance",
      "Friction",
      "Gravity",
      "Normal force"
    ],
    "correctAnswer": "Gravity"
  },
  {
    "id": 41,
    "questionText": "What is the SI unit of momentum?",
    "options": [
      "kg m s⁻¹",
      "kg m⁻¹ s⁻¹",
      "N s",
      "J s"
    ],
    "correctAnswer": "kg m s⁻¹"
  },
  {
    "id": 42,
    "questionText": "A measurement of displacement requires knowing:",
    "options": [
      "Only the distance",
      "Only the path taken",
      "The shortest distance and direction",
      "The average speed"
    ],
    "correctAnswer": "The shortest distance and direction"
  },
  {
    "id": 43,
    "questionText": "If an object is moving along a straight line and its velocity changes by equal amounts in equal intervals of time, it is said to have:",
    "options": [
      "Uniform acceleration",
      "Non-uniform acceleration",
      "Uniform speed",
      "Non-uniform speed"
    ],
    "correctAnswer": "Uniform acceleration"
  },
  {
    "id": 44,
    "questionText": "The type of motion where every particle of the body moves uniformly in the same direction is called:",
    "options": [
      "Translatory motion",
      "Rotatory motion",
      "Vibratory motion",
      "Random motion"
    ],
    "correctAnswer": "Translatory motion"
  },
  {
    "id": 45,
    "questionText": "In a distance-time graph, a straight line with a positive slope indicates:",
    "options": [
      "Uniform speed",
      "Non-uniform speed",
      "Zero speed",
      "Constant acceleration"
    ],
    "correctAnswer": "Uniform speed"
  },
  {
    "id": 46,
    "questionText": "The third equation of motion, 2aS = v_f² - v_i², relates:",
    "options": [
      "Time, velocity, acceleration",
      "Distance, time, acceleration",
      "Displacement, initial and final velocities, acceleration",
      "Mass, velocity, acceleration"
    ],
    "correctAnswer": "Displacement, initial and final velocities, acceleration"
  },
  {
    "id": 47,
    "questionText": "For a freely falling body, the initial velocity is often taken as zero. Which equation of motion becomes S = ½gt² in this case?",
    "options": [
      "First",
      "Second",
      "Third",
      "None"
    ],
    "correctAnswer": "Second"
  },
  {
    "id": 48,
    "questionText": "A car's speedometer measures its:",
    "options": [
      "Average speed",
      "Instantaneous speed",
      "Average velocity",
      "Instantaneous velocity"
    ],
    "correctAnswer": "Instantaneous speed"
  },
  {
    "id": 49,
    "questionText": "The velocity of a car moving 90 km h⁻¹ towards North is an example of a:",
    "options": [
      "Scalar quantity",
      "Vector quantity",
      "Base quantity",
      "Derived quantity"
    ],
    "correctAnswer": "Vector quantity"
  },
  {
    "id": 50,
    "questionText": "If a car is moving with a constant speed, its acceleration is:",
    "options": [
      "Zero",
      "Positive",
      "Negative",
      "Constant but non-zero"
    ],
    "correctAnswer": "Zero"
  }
],
  "Magnetism": [
  {
    "id": 1,
    "questionText": "Magnetism is a force that acts upon:",
    "options": [
      "All materials",
      "Non-magnetic materials",
      "Magnetic materials",
      "Conductors only"
    ],
    "correctAnswer": "Magnetic materials"
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT a magnetic material?",
    "options": [
      "Iron",
      "Nickel",
      "Copper",
      "Cobalt"
    ],
    "correctAnswer": "Copper"
  },
  {
    "id": 3,
    "questionText": "A freely suspended bar magnet always comes to rest in which direction?",
    "options": [
      "East-West direction",
      "North-South direction",
      "Up-Down direction",
      "Random direction"
    ],
    "correctAnswer": "North-South direction"
  },
  {
    "id": 4,
    "questionText": "The pole of a suspended bar magnet that points towards the geographic north is called the:",
    "options": [
      "South pole",
      "North pole",
      "Geographic pole",
      "Magnetic equator"
    ],
    "correctAnswer": "North pole"
  },
  {
    "id": 5,
    "questionText": "What happens when two like poles of magnets are brought close to each other?",
    "options": [
      "They attract",
      "They repel",
      "They have no interaction",
      "They induce magnetism"
    ],
    "correctAnswer": "They repel"
  },
  {
    "id": 6,
    "questionText": "The surest test for magnetism is:",
    "options": [
      "Attraction",
      "Repulsion",
      "Conductivity",
      "Weight"
    ],
    "correctAnswer": "Repulsion"
  },
  {
    "id": 7,
    "questionText": "If a bar magnet is broken into two pieces, each piece will:",
    "options": [
      "Lose its magnetism",
      "Become a single pole magnet",
      "Have both a North and South pole",
      "Only retain the pole it originally had"
    ],
    "correctAnswer": "Have both a North and South pole"
  },
  {
    "id": 8,
    "questionText": "The process by which a magnetic material can be made into a magnet by being near another magnet is called:",
    "options": [
      "Induced magnetism",
      "Permanent magnetism",
      "Electromagnetism",
      "Demagnetization"
    ],
    "correctAnswer": "Induced magnetism"
  },
  {
    "id": 9,
    "questionText": "Which method of magnetization involves stroking a steel bar with one pole of a magnet always in the same direction?",
    "options": [
      "Single-Touch Method",
      "Double-Touch Method",
      "Solenoid Method",
      "Alternating Current Method"
    ],
    "correctAnswer": "Single-Touch Method"
  },
  {
    "id": 10,
    "questionText": "In the solenoid method of magnetization, the polarity of the magnetised steel bar is found by applying the:",
    "options": [
      "Left Hand Rule",
      "Fleming's Rule",
      "Ampere's Rule",
      "Right Hand Grip Rule"
    ],
    "correctAnswer": "Right Hand Grip Rule"
  },
  {
    "id": 11,
    "questionText": "Magnets that retain their magnetism for a short period and only when in a magnetic field are called:",
    "options": [
      "Temporary magnets",
      "Permanent magnets",
      "Natural magnets",
      "Electromagnets"
    ],
    "correctAnswer": "Temporary magnets"
  },
  {
    "id": 12,
    "questionText": "Which material is typically used to make temporary magnets?",
    "options": [
      "Steel",
      "Soft iron",
      "Alnico",
      "Ferrite"
    ],
    "correctAnswer": "Soft iron"
  },
  {
    "id": 13,
    "questionText": "The region around a magnet where a magnetic object experiences a force is called the:",
    "options": [
      "Electric field",
      "Magnetic field",
      "Gravitational field",
      "Magnetic domain"
    ],
    "correctAnswer": "Magnetic field"
  },
  {
    "id": 14,
    "questionText": "Magnetic field lines:",
    "options": [
      "Cross each other",
      "Originate from the South pole",
      "Never cross each other",
      "Are always parallel"
    ],
    "correctAnswer": "Never cross each other"
  },
  {
    "id": 15,
    "questionText": "The strength of the magnetic field is indicated by the:",
    "options": [
      "Color of the field lines",
      "Length of the field lines",
      "Spacing of the field lines",
      "Number of poles"
    ],
    "correctAnswer": "Spacing of the field lines"
  },
  {
    "id": 16,
    "questionText": "Which of the following is an application of a permanent magnet?",
    "options": [
      "Electromagnet",
      "Circuit breaker",
      "Moving coil loudspeaker",
      "Maglev train"
    ],
    "correctAnswer": "Moving coil loudspeaker"
  },
  {
    "id": 17,
    "questionText": "An electromagnet is a type of:",
    "options": [
      "Permanent magnet",
      "Temporary magnet",
      "Natural magnet",
      "Diamagnetic material"
    ],
    "correctAnswer": "Temporary magnet"
  },
  {
    "id": 18,
    "questionText": "The strength of an electromagnet can be increased by:",
    "options": [
      "Decreasing the current",
      "Increasing the number of turns in the coil",
      "Using a non-magnetic core",
      "Decreasing the voltage of the battery"
    ],
    "correctAnswer": "Increasing the number of turns in the coil"
  },
  {
    "id": 19,
    "questionText": "Which device uses an electromagnet to quickly open a circuit when current exceeds a certain maximum?",
    "options": [
      "Electric bell",
      "Telephone receiver",
      "Circuit breaker",
      "Maglev train"
    ],
    "correctAnswer": "Circuit breaker"
  },
  {
    "id": 20,
    "questionText": "Materials that are weakly attracted to magnets are called:",
    "options": [
      "Paramagnetic materials",
      "Diamagnetic materials",
      "Ferromagnetic materials",
      "Non-magnetic materials"
    ],
    "correctAnswer": "Paramagnetic materials"
  },
  {
    "id": 21,
    "questionText": "Copper, bismuth, and water are examples of:",
    "options": [
      "Paramagnetic materials",
      "Diamagnetic materials",
      "Ferromagnetic materials",
      "Magnetic materials"
    ],
    "correctAnswer": "Diamagnetic materials"
  },
  {
    "id": 22,
    "questionText": "Ferromagnetic materials are characterized by:",
    "options": [
      "Weak repulsion by magnets",
      "Weak attraction by magnets",
      "Strong attraction by magnets",
      "No interaction with magnets"
    ],
    "correctAnswer": "Strong attraction by magnets"
  },
  {
    "id": 23,
    "questionText": "According to the domain theory, in an unmagnetized ferromagnetic material, the domains are:",
    "options": [
      "Randomly oriented",
      "Aligned in the same direction",
      "Non-existent",
      "Only found at the poles"
    ],
    "correctAnswer": "Randomly oriented"
  },
  {
    "id": 24,
    "questionText": "Which method is used to demagnetize a magnet by heating it?",
    "options": [
      "Heating (thermal vibrations)",
      "Stroking",
      "Solenoid method",
      "Double-touch method"
    ],
    "correctAnswer": "Heating (thermal vibrations)"
  },
  {
    "id": 25,
    "questionText": "Hammering a magnet can cause it to lose its magnetism due to:",
    "options": [
      "Magnetic induction",
      "Disturbing the alignment of domains",
      "Increase in magnetic field strength",
      "Chemical reaction"
    ],
    "correctAnswer": "Disturbing the alignment of domains"
  },
  {
    "id": 26,
    "questionText": "Magnetic tape recording utilizes the principle of:",
    "options": [
      "Induced magnetism",
      "Permanent magnetism",
      "Electromagnetism",
      "Diamagnetism"
    ],
    "correctAnswer": "Permanent magnetism"
  },
  {
    "id": 27,
    "questionText": "Hard disk recording stores data as binary digits (1 or 0) by:",
    "options": [
      "Using laser technology",
      "Storing electrical charges",
      "Magnetising tiny spots on the disk",
      "Etching patterns onto the surface"
    ],
    "correctAnswer": "Magnetising tiny spots on the disk"
  },
  {
    "id": 28,
    "questionText": "Soft iron is used as a magnetic shield because it has:",
    "options": [
      "Low magnetic permeability",
      "High magnetic permeability",
      "No magnetic properties",
      "High electrical conductivity"
    ],
    "correctAnswer": "High magnetic permeability"
  },
  {
    "id": 29,
    "questionText": "An AC generator is a device that converts:",
    "options": [
      "Electrical energy to mechanical energy",
      "Mechanical energy to electrical energy",
      "Magnetic energy to thermal energy",
      "Chemical energy to electrical energy"
    ],
    "correctAnswer": "Mechanical energy to electrical energy"
  },
  {
    "id": 30,
    "questionText": "The direction of the magnetic field at any point in space is indicated by the direction in which the:",
    "options": [
      "N-pole of a magnetic compass needle points",
      "S-pole of a magnetic compass needle points",
      "Entire compass needle aligns",
      "Magnetic force acts on a non-magnetic material"
    ],
    "correctAnswer": "N-pole of a magnetic compass needle points"
  },
  {
    "id": 31,
    "questionText": "If you hang a small piece of iron near a magnet, it temporarily becomes a magnet. This is an example of:",
    "options": [
      "Permanent magnetism",
      "Magnetic induction",
      "Demagnetization",
      "Electromagnetism"
    ],
    "correctAnswer": "Magnetic induction"
  },
  {
    "id": 32,
    "questionText": "The main characteristic of permanent magnets is their ability to:",
    "options": [
      "Change polarity easily",
      "Retain magnetism for a long time",
      "Be easily demagnetized",
      "Only work when a current is flowing"
    ],
    "correctAnswer": "Retain magnetism for a long time"
  },
  {
    "id": 33,
    "questionText": "Which of the following shows the correct representation of magnetic field lines between two unlike poles?",
    "options": [
      "Lines originating from N and ending on S",
      "Lines crossing each other",
      "Lines forming concentric circles",
      "Lines repelling each other"
    ],
    "correctAnswer": "Lines originating from N and ending on S"
  },
  {
    "id": 34,
    "questionText": "The electric bell operates on the principle of:",
    "options": [
      "Permanent magnets",
      "Electromagnets",
      "Electrostatic force",
      "Magnetic induction"
    ],
    "correctAnswer": "Electromagnets"
  },
  {
    "id": 35,
    "questionText": "The study of the distribution of celestial bodies like planets, stars and galaxies is known as:",
    "options": [
      "Cosmology",
      "Astronomy",
      "Astrophysics",
      "Geophysics"
    ],
    "correctAnswer": "Cosmology"
  },
  {
    "id": 36,
    "questionText": "Maglev trains use electromagnets for:",
    "options": [
      "Breaking",
      "Providing power to the wheels",
      "Levitation and propulsion",
      "Communication"
    ],
    "correctAnswer": "Levitation and propulsion"
  },
  {
    "id": 37,
    "questionText": "A circuit breaker protects electrical appliances from burning by:",
    "options": [
      "Cooling the circuit",
      "Detaching the armature from the copper strip",
      "Increasing resistance",
      "Generating an opposing magnetic field"
    ],
    "correctAnswer": "Detaching the armature from the copper strip"
  },
  {
    "id": 38,
    "questionText": "What is the typical size of a domain in a ferromagnetic material?",
    "options": [
      "About 0.1 mm",
      "About 1 cm",
      "About 1 mm",
      "About 1 meter"
    ],
    "correctAnswer": "About 0.1 mm"
  },
  {
    "id": 39,
    "questionText": "Aluminium and lithium are classified as:",
    "options": [
      "Paramagnetic materials",
      "Diamagnetic materials",
      "Ferromagnetic materials",
      "Non-magnetic materials"
    ],
    "correctAnswer": "Paramagnetic materials"
  },
  {
    "id": 40,
    "questionText": "What is the effect of an alternating current (A.C) flowing through a long solenoid on a magnetised material placed inside it?",
    "options": [
      "It strengthens the magnetism",
      "It maintains the magnetism",
      "It demagnetises the material",
      "It has no effect"
    ],
    "correctAnswer": "It demagnetises the material"
  },
  {
    "id": 41,
    "questionText": "Magnetic disk devices have an advantage over tape recorders because they allow for:",
    "options": [
      "Longer recording times",
      "Better sound quality",
      "Random access to desired information",
      "Easier physical manipulation"
    ],
    "correctAnswer": "Random access to desired information"
  },
  {
    "id": 42,
    "questionText": "Soft iron is commonly used in the cores of transformers and electromagnets because:",
    "options": [
      "It is cheap and readily available",
      "It can be easily magnetised and demagnetised",
      "It is a good electrical insulator",
      "It resists heat very well"
    ],
    "correctAnswer": "It can be easily magnetised and demagnetised"
  },
  {
    "id": 43,
    "questionText": "Which of the following provides the necessary centripetal force for satellites orbiting the Earth?",
    "options": [
      "Gravitational pull of the Earth",
      "Atmospheric drag",
      "Solar wind",
      "Internal propulsion"
    ],
    "correctAnswer": "Gravitational pull of the Earth"
  },
  {
    "id": 44,
    "questionText": "When an electric current passes through a coil of wire, a magnetic field is produced. This phenomenon is known as:",
    "options": [
      "Electrostatic induction",
      "Electromagnetism",
      "Permanent magnetism",
      "Magnetic resonance"
    ],
    "correctAnswer": "Electromagnetism"
  },
  {
    "id": 45,
    "questionText": "The quality of a good magnetic shield material, like soft iron, is its ability to:",
    "options": [
      "Attract magnetic fields",
      "Allow magnetic flux to pass through it",
      "Repel magnetic fields",
      "Convert magnetic energy into electrical energy"
    ],
    "correctAnswer": "Allow magnetic flux to pass through it"
  },
  {
    "id": 46,
    "questionText": "Which material is commonly used to make permanent magnets?",
    "options": [
      "Soft iron",
      "Steel",
      "Aluminium",
      "Copper"
    ],
    "correctAnswer": "Steel"
  },
  {
    "id": 47,
    "questionText": "The telephone receiver uses an electromagnet to:",
    "options": [
      "Convert electric signals into sound waves",
      "Transmit sound waves wirelessly",
      "Amplify audio signals",
      "Store electric charges"
    ],
    "correctAnswer": "Convert electric signals into sound waves"
  },
  {
    "id": 48,
    "questionText": "If a magnetic compass needle is placed at a point near a bar magnet, the needle will align itself with the:",
    "options": [
      "Geographic North",
      "Geographic South",
      "Direction of the magnetic field at that point",
      "Earth's axis of rotation"
    ],
    "correctAnswer": "Direction of the magnetic field at that point"
  },
  {
    "id": 49,
    "questionText": "In a double-touch method for magnetization, two magnets are stroked from the center outwards to opposite ends. This method is:",
    "options": [
      "Less efficient than single-touch",
      "More efficient than single-touch",
      "Only suitable for small magnets",
      "Primarily used for demagnetization"
    ],
    "correctAnswer": "More efficient than single-touch"
  },
  {
    "id": 50,
    "questionText": "The image of the Earth as a giant magnet shown in Fig. 8.30 illustrates:",
    "options": [
      "The Earth's rotation",
      "The Earth's revolution",
      "The Earth's gravitational pull providing centripetal force",
      "The Earth's magnetic field influencing orbits"
    ],
    "correctAnswer": "The Earth's magnetic field influencing orbits"
  }
],
  "Nature of Science": [
  {
    "id": 1,
    "questionText": "Physics is a fundamental science that deals with the constituents of the universe, that is, matter, energy, space, time and their:",
    "options": [
      "Chemical reactions",
      "Biological processes",
      "Mutual relationships and interactions",
      "Economic impacts"
    ],
    "correctAnswer": "Mutual relationships and interactions"
  },
  {
    "id": 2,
    "questionText": "Physics strives to understand how the universe works, from the smallest subatomic particles to the:",
    "options": [
      "Largest galaxies",
      "Largest stars",
      "Largest stars and galaxies",
      "Solar system"
    ],
    "correctAnswer": "Largest stars and galaxies"
  },
  {
    "id": 3,
    "questionText": "The branch of Physics that studies the motion of objects and the forces that change it is:",
    "options": [
      "Mechanics",
      "Thermodynamics",
      "Acoustics",
      "Optics"
    ],
    "correctAnswer": "Mechanics"
  },
  {
    "id": 4,
    "questionText": "Heat and Thermodynamics is a branch of Physics that deals with:",
    "options": [
      "Visible light",
      "Sound energy",
      "Thermal energy",
      "Motion of objects"
    ],
    "correctAnswer": "Thermal energy"
  },
  {
    "id": 5,
    "questionText": "The study of the nature and physical aspects of audible sound energy is covered under:",
    "options": [
      "Optics",
      "Acoustics",
      "Electromagnetism",
      "Quantum Mechanics"
    ],
    "correctAnswer": "Acoustics"
  },
  {
    "id": 6,
    "questionText": "Which branch of Physics explains the behavior of particles at the atomic and subatomic level?",
    "options": [
      "Relativistic Mechanics",
      "Quantum Mechanics",
      "Nuclear Physics",
      "Particle Physics"
    ],
    "correctAnswer": "Quantum Mechanics"
  },
  {
    "id": 7,
    "questionText": "Relativistic Mechanics explains how space and time are not absolute quantities but rather:",
    "options": [
      "Universal constants",
      "Independent of motion",
      "Relative to the observer",
      "Easily measured"
    ],
    "correctAnswer": "Relative to the observer"
  },
  {
    "id": 8,
    "questionText": "The study of the properties of nuclei of atoms is known as:",
    "options": [
      "Particle Physics",
      "Quantum Mechanics",
      "Nuclear Physics",
      "Astrophysics"
    ],
    "correctAnswer": "Nuclear Physics"
  },
  {
    "id": 9,
    "questionText": "Biophysics applies principles and techniques of physics to the study of:",
    "options": [
      "Celestial phenomena",
      "Biological systems",
      "Earth's internal structure",
      "Atmospheric dynamics"
    ],
    "correctAnswer": "Biological systems"
  },
  {
    "id": 10,
    "questionText": "Which interdisciplinary field applies physical principles to develop techniques and technologies for health diagnosis and treatment, such as X-rays and MRI?",
    "options": [
      "Biophysics",
      "Medical Physics",
      "Astrophysics",
      "Geophysics"
    ],
    "correctAnswer": "Medical Physics"
  },
  {
    "id": 11,
    "questionText": "The study of the physical properties and processes of celestial bodies and phenomena is the domain of:",
    "options": [
      "Astronomy",
      "Cosmology",
      "Astrophysics",
      "Climate Physics"
    ],
    "correctAnswer": "Astrophysics"
  },
  {
    "id": 12,
    "questionText": "Geophysics applies physical principles to study the:",
    "options": [
      "Surface of the Earth",
      "Internal structure of the Earth",
      "Earth's atmosphere",
      "Ocean currents"
    ],
    "correctAnswer": "Internal structure of the Earth"
  },
  {
    "id": 13,
    "questionText": "Climate Physics includes the study of physical processes in the environment, including:",
    "options": [
      "Geology and seismology",
      "Atmospheric dynamics, climate change, and weather conditions",
      "Oceanography and marine biology",
      "Renewable energy sources"
    ],
    "correctAnswer": "Atmospheric dynamics, climate change, and weather conditions"
  },
  {
    "id": 14,
    "questionText": "The scientific method is a systematic approach used to search for:",
    "options": [
      "New technologies",
      "Economic benefits",
      "Truth of an issue and problem",
      "Political solutions"
    ],
    "correctAnswer": "Truth of an issue and problem"
  },
  {
    "id": 15,
    "questionText": "The first step in the scientific method is:",
    "options": [
      "Hypothesis",
      "Observation",
      "Experiment",
      "Theory"
    ],
    "correctAnswer": "Observation"
  },
  {
    "id": 16,
    "questionText": "A tentative explanation based on collected observations or experimentation, which may or may not be true, is called a:",
    "options": [
      "Law",
      "Theory",
      "Hypothesis",
      "Prediction"
    ],
    "correctAnswer": "Hypothesis"
  },
  {
    "id": 17,
    "questionText": "An organized repeatable process which is used to test the truth of a hypothesis is called an:",
    "options": [
      "Observation",
      "Experiment",
      "Theory",
      "Law"
    ],
    "correctAnswer": "Experiment"
  },
  {
    "id": 18,
    "questionText": "After the successful verification of an assumption and with the help of careful experimentation, it becomes a:",
    "options": [
      "Law",
      "Theory",
      "Prediction",
      "Hypothesis"
    ],
    "correctAnswer": "Theory"
  },
  {
    "id": 19,
    "questionText": "The requirement that a scientific theory must be testable and potentially proven false is known as:",
    "options": [
      "Verifiability",
      "Predictability",
      "Falsifiability",
      "Reproducibility"
    ],
    "correctAnswer": "Falsifiability"
  },
  {
    "id": 20,
    "questionText": "When a theory has been tested many times and generally accepted as true, it is called a:",
    "options": [
      "Hypothesis",
      "Experiment",
      "Prediction",
      "Law"
    ],
    "correctAnswer": "Law"
  },
  {
    "id": 21,
    "questionText": "The theories or laws of Physics are man-made ideas about the way the things work. They are liable to be:",
    "options": [
      "Modified based on opinion",
      "Disproved or modified with future advances",
      "Considered absolute truth",
      "Replaced by new theories entirely"
    ],
    "correctAnswer": "Disproved or modified with future advances"
  },
  {
    "id": 22,
    "questionText": "Automobile technology is based on the principles of:",
    "options": [
      "Electromagnetism",
      "Optics",
      "Thermodynamics",
      "Acoustics"
    ],
    "correctAnswer": "Thermodynamics"
  },
  {
    "id": 23,
    "questionText": "Radar technology is based on the detection and reflection principles of:",
    "options": [
      "Sound waves",
      "Light waves",
      "Electromagnetic waves",
      "Gravitational waves"
    ],
    "correctAnswer": "Electromagnetic waves"
  },
  {
    "id": 24,
    "questionText": "Laser technology, which is based on the principles of atomic physics, is widely used in:",
    "options": [
      "Agriculture",
      "Medical diagnosis and treatment",
      "Financial analysis",
      "Weather forecasting"
    ],
    "correctAnswer": "Medical diagnosis and treatment"
  },
  {
    "id": 25,
    "questionText": "The development of intelligent systems, like \"artificial intelligence,\" involves the collaboration across fields such as computer science, mathematical logic, and:",
    "options": [
      "Biology",
      "Chemistry",
      "Neuroscience",
      "Anthropology"
    ],
    "correctAnswer": "Neuroscience"
  },
  {
    "id": 26,
    "questionText": "Which of the following is NOT an advantage of interdisciplinary approaches in science?",
    "options": [
      "Foster innovation",
      "Evolve out of box solutions",
      "Discourage sharing of knowledge",
      "Lead to novel insight and breakthroughs"
    ],
    "correctAnswer": "Discourage sharing of knowledge"
  },
  {
    "id": 27,
    "questionText": "The concept of stability is widely applied in engineering technology, especially in manufacturing racing cars and:",
    "options": [
      "Aerodynamics",
      "Balancing toys",
      "Robotics",
      "Bridge construction"
    ],
    "correctAnswer": "Balancing toys"
  },
  {
    "id": 28,
    "questionText": "Physics is an important and basic part of physical sciences beside other disciplines such as:",
    "options": [
      "Economics and Sociology",
      "Chemistry and Geology",
      "Political Science and History",
      "Literature and Arts"
    ],
    "correctAnswer": "Chemistry and Geology"
  },
  {
    "id": 29,
    "questionText": "The motion of these objects can be studied with or without considering the force which causes motion in them or changes it. This describes:",
    "options": [
      "Kinematics",
      "Dynamics",
      "Statics",
      "Thermodynamics"
    ],
    "correctAnswer": "Kinematics"
  },
  {
    "id": 30,
    "questionText": "The field of observation and experimentation to understand about the world around us is known as:",
    "options": [
      "Technology",
      "Science",
      "Engineering",
      "Philosophy"
    ],
    "correctAnswer": "Science"
  },
  {
    "id": 31,
    "questionText": "To obtain reliable results from experiments, the primary thing is to make:",
    "options": [
      "Theories",
      "Hypotheses",
      "Accurate measurements",
      "Predictions"
    ],
    "correctAnswer": "Accurate measurements"
  },
  {
    "id": 32,
    "questionText": "What is the fundamental branch of science which deals with matter, energy, space, time and their mutual relationships?",
    "options": [
      "Biology",
      "Chemistry",
      "Physics",
      "Mathematics"
    ],
    "correctAnswer": "Physics"
  },
  {
    "id": 33,
    "questionText": "Which of the following is an example of an interdisciplinary approach fostering innovation?",
    "options": [
      "Focusing solely on physics",
      "Conducting experiments in isolation",
      "Combining physics, chemistry, and material science for nano-scale devices",
      "Avoiding collaboration with other fields"
    ],
    "correctAnswer": "Combining physics, chemistry, and material science for nano-scale devices"
  },
  {
    "id": 34,
    "questionText": "The rapid sharing of knowledge and information across the globe is advanced by:",
    "options": [
      "Restricting access to research papers",
      "Limiting international conferences",
      "Online internet information exchanges",
      "Patenting all research findings"
    ],
    "correctAnswer": "Online internet information exchanges"
  },
  {
    "id": 35,
    "questionText": "When light travels in a straight line, it can create a shadow of an opaque object. This observation leads to the understanding of:",
    "options": [
      "Quantum mechanics",
      "Light traveling in a straight line",
      "Relativistic effects",
      "Wave-particle duality"
    ],
    "correctAnswer": "Light traveling in a straight line"
  },
  {
    "id": 36,
    "questionText": "After formulating a hypothesis, the next step in the scientific method is to:",
    "options": [
      "Develop a theory",
      "Make a prediction",
      "Perform an experiment",
      "Announce a law"
    ],
    "correctAnswer": "Make a prediction"
  },
  {
    "id": 37,
    "questionText": "What role does engineering play in applying scientific knowledge?",
    "options": [
      "Formulating theories",
      "Making observations",
      "Designing processes, tools, and structures",
      "Developing hypotheses"
    ],
    "correctAnswer": "Designing processes, tools, and structures"
  },
  {
    "id": 38,
    "questionText": "The development of useful products and services from scientific knowledge is called:",
    "options": [
      "Science",
      "Research",
      "Technology",
      "Innovation"
    ],
    "correctAnswer": "Technology"
  },
  {
    "id": 39,
    "questionText": "The primary goal of a civil engineer designing a bridge is to ensure its ability to:",
    "options": [
      "Be aesthetically pleasing",
      "Be cost-effective",
      "Withstand strong winds, earthquakes, and heavy traffic",
      "Use the latest materials"
    ],
    "correctAnswer": "Withstand strong winds, earthquakes, and heavy traffic"
  },
  {
    "id": 40,
    "questionText": "An aviation engineer might focus on developing lighter materials for an airplane to:",
    "options": [
      "Increase its speed",
      "Improve its fuel efficiency",
      "Enhance its aesthetic appeal",
      "Reduce manufacturing costs"
    ],
    "correctAnswer": "Improve its fuel efficiency"
  },
  {
    "id": 41,
    "questionText": "The scope of physics extends to understanding phenomena from the very small to the very large. This includes:",
    "options": [
      "Only subatomic particles",
      "Only stars and galaxies",
      "Both subatomic particles and celestial bodies",
      "Only everyday objects"
    ],
    "correctAnswer": "Both subatomic particles and celestial bodies"
  },
  {
    "id": 42,
    "questionText": "Which of the following is considered the ultimate truth of a scientific method?",
    "options": [
      "Hypothesis",
      "Experimentation",
      "Theory",
      "Law"
    ],
    "correctAnswer": "Law"
  },
  {
    "id": 43,
    "questionText": "Which statement about scientific theories is true?",
    "options": [
      "They are absolute and cannot be changed.",
      "They are proven facts.",
      "They are logical explanations of causes and effects based on verified assumptions.",
      "They are the initial guess in an investigation."
    ],
    "correctAnswer": "They are logical explanations of causes and effects based on verified assumptions."
  },
  {
    "id": 44,
    "questionText": "Cosmology, a branch of physics, primarily explores:",
    "options": [
      "The properties of light",
      "The behavior of atoms",
      "The large structure and evolution of the universe",
      "The mechanics of celestial bodies"
    ],
    "correctAnswer": "The large structure and evolution of the universe"
  },
  {
    "id": 45,
    "questionText": "What is the fundamental principle behind Newton's first law of motion?",
    "options": [
      "Force",
      "Acceleration",
      "Inertia",
      "Momentum"
    ],
    "correctAnswer": "Inertia"
  },
  {
    "id": 46,
    "questionText": "The study of specific properties of matter in solid form falls under:",
    "options": [
      "Quantum Mechanics",
      "Particle Physics",
      "Solid State Physics",
      "Thermal Physics"
    ],
    "correctAnswer": "Solid State Physics"
  },
  {
    "id": 47,
    "questionText": "When considering complex global issues such as climate change, disease prevention, or sustainable energy, a \"multifacet expertise\" approach is needed. This implies:",
    "options": [
      "Relying on a single expert",
      "Ignoring scientific data",
      "Drawing knowledge from diverse disciplines",
      "Focusing on short-term solutions"
    ],
    "correctAnswer": "Drawing knowledge from diverse disciplines"
  },
  {
    "id": 48,
    "questionText": "The phrase \"if I do not study for this test, then I will not get good grade\" is an example of a:",
    "options": [
      "Theory",
      "Observation",
      "Experimentation",
      "Prediction"
    ],
    "correctAnswer": "Prediction"
  },
  {
    "id": 49,
    "questionText": "What differentiates a scientific law from a scientific theory?",
    "options": [
      "A law is a guess, a theory is a fact.",
      "A law explains why something happens, a theory describes what happens.",
      "A law describes a natural phenomenon, a theory provides an explanation.",
      "Laws are always true, theories can be false."
    ],
    "correctAnswer": "A law describes a natural phenomenon, a theory provides an explanation."
  },
  {
    "id": 50,
    "questionText": "Which of these activities best represents the collaborative field of science?",
    "options": [
      "An individual scientist working alone in a lab",
      "Interdisciplinary researchers working together to share knowledge and critique ideas",
      "A single company developing a new product",
      "Publishing research without peer review"
    ],
    "correctAnswer": "Interdisciplinary researchers working together to share knowledge and critique ideas"
  }
]
};
