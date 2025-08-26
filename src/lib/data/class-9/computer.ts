
import { MCQ } from '@/lib/types';

export const chapters = [
  "Introduction to Systems",
  "Number Systems",
  "Digital Systems and Logic Design",
  "System Troubleshooting",
  "Software System",
  "Introduction to Computer Networks",
  "Computational Thinking",
  "Web Development with HTML CSS and JavaScript",
  "Data Science and Data Gathering",
  "Emerging Technologies in Computer Science",
  "Ethical Social and Legal Concerns in Computer Usage",
  "Entrepreneurship in Digital Age"
];

export const mcqs: Record<string, MCQ[]> = {
  "Introduction to Systems": [
  {
    "id": 1,
    "questionText": "What is the primary function of a system?",
    "options": [
      "a) To work independently",
      "b) To achieve a common goal",
      "c) To create new systems",
      "d) To provide entertainment"
    ],
    "correctAnswer": "b) To achieve a common goal"
  },
  {
    "id": 2,
    "questionText": "Which of the following describes a system's objective?",
    "options": [
      "a) Its size",
      "b) Its purpose or goal that it wishes to fulfill",
      "c) Its age",
      "d) Its price"
    ],
    "correctAnswer": "b) Its purpose or goal that it wishes to fulfill"
  },
  {
    "id": 3,
    "questionText": "A thermostat system maintaining a set temperature in an environment is an example of which type of system objective?",
    "options": [
      "a) Information processing",
      "b) Supporting other systems",
      "c) Achieving specific goals",
      "d) Providing user entertainment"
    ],
    "correctAnswer": "c) Achieving specific goals"
  },
  {
    "id": 4,
    "questionText": "What is the primary role of components in any system?",
    "options": [
      "a) To operate independently without interaction",
      "b) To play a specific role and contribute to the overall functionality",
      "c) To define the system's environment",
      "d) To solely process information"
    ],
    "correctAnswer": "b) To play a specific role and contribute to the overall functionality"
  },
  {
    "id": 5,
    "questionText": "What defines the environment of a system?",
    "options": [
      "a) Only the internal factors affecting its operation",
      "b) Everything external to the system that interacts with it",
      "c) Its core components",
      "d) Its communication protocols"
    ],
    "correctAnswer": "b) Everything external to the system that interacts with it"
  },
  {
    "id": 6,
    "questionText": "In which type of environment do changes occur independently of the system's output?",
    "options": [
      "a) Static",
      "b) Deterministic",
      "c) Dynamic",
      "d) Non-deterministic"
    ],
    "correctAnswer": "c) Dynamic"
  },
  {
    "id": 7,
    "questionText": "Which type of system is characterized by its fully known and certain impact of its output on the environment?",
    "options": [
      "a) Non-deterministic",
      "b) Dynamic",
      "c) Static",
      "d) Deterministic"
    ],
    "correctAnswer": "d) Deterministic"
  },
  {
    "id": 8,
    "questionText": "What is crucial for the functioning of a system, ensuring components work in an organized manner?",
    "options": [
      "a) Component isolation",
      "b) Static environment",
      "c) Communication and interaction among system components",
      "d) External factors only"
    ],
    "correctAnswer": "c) Communication and interaction among system components"
  },
  {
    "id": 9,
    "questionText": "Which type of systems exist in nature and operate independently of human involvement?",
    "options": [
      "a) Artificial systems",
      "b) Engineering systems",
      "c) Knowledge systems",
      "d) Natural systems"
    ],
    "correctAnswer": "d) Natural systems"
  },
  {
    "id": 10,
    "questionText": "Which type of systems are created and developed by people to fulfill certain functions or address certain issues?",
    "options": [
      "a) Biological systems",
      "b) Physical systems",
      "c) Artificial systems",
      "d) Psychological systems"
    ],
    "correctAnswer": "c) Artificial systems"
  },
  {
    "id": 11,
    "questionText": "A car system, made up of an engine, wheels, and brakes, is used as an example of what fundamental concept?",
    "options": [
      "a) A natural system",
      "b) An abstract object",
      "c) An organized set of components coordinated to perform a designated function",
      "d) A complex biological system"
    ],
    "correctAnswer": "c) An organized set of components coordinated to perform a designated function"
  },
  {
    "id": 12,
    "questionText": "The human brain processing information received by the human senses is an example of which type of system objective?",
    "options": [
      "a) Achieving specific goals",
      "b) Supporting other systems",
      "c) Information processing",
      "d) Providing mechanical energy"
    ],
    "correctAnswer": "c) Information processing"
  },
  {
    "id": 13,
    "questionText": "Which of the following is considered an auxiliary component of a computer system?",
    "options": [
      "a) CPU",
      "b) Memory",
      "c) Storage devices",
      "d) The source does not explicitly list auxiliary components, only necessary components and then later discusses peripherals as external devices that expand capabilities."
    ],
    "correctAnswer": "d) The source does not explicitly list auxiliary components, only necessary components and then later discusses peripherals as external devices that expand capabilities."
  },
  {
    "id": 14,
    "questionText": "What are the three main requirements for a computing system to function?",
    "options": [
      "a) Software, CPU, and user",
      "b) Hardware, software, and electric power",
      "c) Network, internet, and data",
      "d) Input, output, and storage"
    ],
    "correctAnswer": "b) Hardware, software, and electric power"
  },
  {
    "id": 15,
    "questionText": "What is the standard computer architecture that delineates a system with four primary components: memory, CPU, input, and output mechanisms?",
    "options": [
      "a) Harvard architecture",
      "b) Parallel processing architecture",
      "c) Von Neumann architecture",
      "d) Distributed architecture"
    ],
    "correctAnswer": "c) Von Neumann architecture"
  },
  {
    "id": 16,
    "questionText": "Which component of the Von Neumann architecture performs mathematical computations and logical operations?",
    "options": [
      "a) Control Unit (CU)",
      "b) Arithmetic Logic Unit (ALU)",
      "c) Memory",
      "d) Input Devices"
    ],
    "correctAnswer": "b) Arithmetic Logic Unit (ALU)"
  },
  {
    "id": 17,
    "questionText": "In the Von Neumann architecture, what stores both program instructions and data in the same memory space?",
    "options": [
      "a) Instruction Register (IR)",
      "b) Program Counter (PC)",
      "c) Single Memory Store",
      "d) Separate Data and Instruction Memory"
    ],
    "correctAnswer": "c) Single Memory Store"
  },
  {
    "id": 18,
    "questionText": "What is the term for the limitation in the Von Neumann architecture where a single memory area restricts the CPU's ability to retrieve instructions and data quickly?",
    "options": [
      "a) Memory overflow",
      "b) Security risk",
      "c) Von Neumann bottleneck",
      "d) Data bus limitation"
    ],
    "correctAnswer": "c) Von Neumann bottleneck"
  },
  {
    "id": 19,
    "questionText": "What is a key advantage of the Von Neumann architecture?",
    "options": [
      "a) Enhanced security due to separate memory",
      "b) Simplified design by combining instructions and data into a single memory area",
      "c) Parallel execution of instructions",
      "d) Elimination of the need for a CPU"
    ],
    "correctAnswer": "b) Simplified design by combining instructions and data into a single memory area"
  },
  {
    "id": 20,
    "questionText": "Which of the following is a type of natural system that consists of living organisms and their interactions?",
    "options": [
      "a) Physical systems",
      "b) Chemical systems",
      "c) Biological systems",
      "d) Psychological systems"
    ],
    "correctAnswer": "c) Biological systems"
  },
  {
    "id": 21,
    "questionText": "A \"knowledge system\" is a type of artificial system designed to perform what primary function?",
    "options": [
      "a) Converting raw materials into useful products",
      "b) Building and maintaining physical structures",
      "c) Capture, process, facilitate, store, retrieve and manage information",
      "d) Handling social interactions and organizational governance"
    ],
    "correctAnswer": "c) Capture, process, facilitate, store, retrieve and manage information"
  },
  {
    "id": 22,
    "questionText": "Which of the following is an example of an engineering system focused on building and maintaining structures like houses, roads, and bridges?",
    "options": [
      "a) Software Engineering Systems",
      "b) Mechanical Engineering Systems",
      "c) Chemical Engineering Systems",
      "d) Civil Engineering Systems"
    ],
    "correctAnswer": "d) Civil Engineering Systems"
  },
  {
    "id": 23,
    "questionText": "Which type of engineering system involves the study and application of electricity, electronics, and electromagnetism to develop electrical systems?",
    "options": [
      "a) Civil Engineering Systems",
      "b) Mechanical Engineering Systems",
      "c) Electrical Engineering Systems",
      "d) Software Engineering Systems"
    ],
    "correctAnswer": "c) Electrical Engineering Systems"
  },
  {
    "id": 24,
    "questionText": "What is the primary purpose of social systems as described in the context of artificial systems?",
    "options": [
      "a) To develop new software tools",
      "b) To convert raw materials into products",
      "c) To maintain order, provide services, and facilitate social connections",
      "d) To manage mathematical formulas"
    ],
    "correctAnswer": "c) To maintain order, provide services, and facilitate social connections"
  },
  {
    "id": 25,
    "questionText": "What is the function of the Control Unit (CU) in the CPU of a Von Neumann architecture?",
    "options": [
      "a) Performs mathematical computations",
      "b) Stores program instructions",
      "c) Governs the activities of the CPU by instructing ALU and memory",
      "d) Inputs data into the system"
    ],
    "correctAnswer": "c) Governs the activities of the CPU by instructing ALU and memory"
  },
  {
    "id": 26,
    "questionText": "During the fetching stage of the Von Neumann instruction cycle, what does the Program Counter (PC) store?",
    "options": [
      "a) The current instruction being executed",
      "b) The result of the computation",
      "c) The memory address of the subsequent instruction",
      "d) Data for future processing"
    ],
    "correctAnswer": "c) The memory address of the subsequent instruction"
  },
  {
    "id": 27,
    "questionText": "What happens during the decoding stage of the Von Neumann instruction cycle?",
    "options": [
      "a) The CPU processes the instruction",
      "b) The outcome is returned to memory",
      "c) The Control Unit (CU) decodes the opcode to determine necessary actions",
      "d) An instruction is retrieved from memory"
    ],
    "correctAnswer": "c) The Control Unit (CU) decodes the opcode to determine necessary actions"
  },
  {
    "id": 28,
    "questionText": "The characteristic of the Von Neumann architecture where instructions are processed one after another in a sequence is called:",
    "options": [
      "a) Stored Program Concept",
      "b) Single Memory Store",
      "c) Sequential Execution",
      "d) Instruction Parallelism"
    ],
    "correctAnswer": "c) Sequential Execution"
  },
  {
    "id": 29,
    "questionText": "What is a \"system bus\" in a computational system?",
    "options": [
      "a) A type of output device",
      "b) A component that stores data permanently",
      "c) A communication mechanism that facilitates the movement of data between components",
      "d) A software application for data management"
    ],
    "correctAnswer": "c) A communication mechanism that facilitates the movement of data between components"
  },
  {
    "id": 30,
    "questionText": "Which type of bus transports the address of data or instructions from the CPU to other components?",
    "options": [
      "a) Data Bus",
      "b) Control Bus",
      "c) System Bus (general term)",
      "d) Address Bus"
    ],
    "correctAnswer": "d) Address Bus"
  },
  {
    "id": 31,
    "questionText": "How does a computer system typically interact with peripheral devices like printers and scanners?",
    "options": [
      "a) Through direct electrical connections only",
      "b) By forming a food chain",
      "c) Through interaction and communication with them",
      "d) By receiving data from environment sensors"
    ],
    "correctAnswer": "c) Through interaction and communication with them"
  },
  {
    "id": 32,
    "questionText": "What is the primary objective of a computing system?",
    "options": [
      "a) To solely provide a user interface",
      "b) To only execute instructions",
      "c) Processing data, executing instructions, and providing a user interface",
      "d) To manage physical objects in nature"
    ],
    "correctAnswer": "c) Processing data, executing instructions, and providing a user interface"
  },
  {
    "id": 33,
    "questionText": "Which of the following is defined as a type of computing system?",
    "options": [
      "a) A car engine system",
      "b) A thermostat",
      "c) Computer Networks",
      "d) The human brain"
    ],
    "correctAnswer": "c) Computer Networks"
  },
  {
    "id": 34,
    "questionText": "What are the two primary categories of software in a computer system?",
    "options": [
      "a) Input software and output software",
      "b) Process software and storage software",
      "c) System software and application software",
      "d) Utility software and game software"
    ],
    "correctAnswer": "c) System software and application software"
  },
  {
    "id": 35,
    "questionText": "The Internet is described as a vast and complex system designed for what primary objective?",
    "options": [
      "a) To connect devices within a single office building",
      "b) To run different applications on a cell phone",
      "c) To facilitate communication and data exchange between computers and users globally",
      "d) To process user data to produce meaningful outputs"
    ],
    "correctAnswer": "c) To facilitate communication and data exchange between computers and users globally"
  },
  {
    "id": 36,
    "questionText": "Which of the following is NOT an objective of computer networks?",
    "options": [
      "a) Resource Sharing",
      "b) Communication",
      "c) Data Management",
      "d) Solely processing user data locally"
    ],
    "correctAnswer": "d) Solely processing user data locally"
  },
  {
    "id": 37,
    "questionText": "What is the role of routers in a computer network?",
    "options": [
      "a) To connect devices in a network and facilitate communication",
      "b) To transmit data packets between networks",
      "c) To provide a physical medium for data transfer",
      "d) To manage network resources like Windows Server"
    ],
    "correctAnswer": "b) To transmit data packets between networks"
  },
  {
    "id": 38,
    "questionText": "Which of the following protocols is less reliable but faster for data transfer over the Internet?",
    "options": [
      "a) TCP/IP",
      "b) FTP",
      "c) POP",
      "d) User Datagram Protocol (UDP)"
    ],
    "correctAnswer": "d) User Datagram Protocol (UDP)"
  },
  {
    "id": 39,
    "questionText": "Natural science primarily focuses on studying what type of systems?",
    "options": [
      "a) Systems designed by humans (artifacts)",
      "b) Existing natural systems to understand their workings",
      "c) New computer tools and systems",
      "d) Algorithms and their efficiency"
    ],
    "correctAnswer": "b) Existing natural systems to understand their workings"
  },
  {
    "id": 40,
    "questionText": "What is the primary goal of Design Science?",
    "options": [
      "a) To uncover the objectivity and functionality of natural systems",
      "b) To design and create artifacts (tools, systems, methods) to achieve specific goals",
      "c) To study existing algorithms",
      "d) To analyze the human brain"
    ],
    "correctAnswer": "b) To design and create artifacts (tools, systems, methods) to achieve specific goals"
  },
  {
    "id": 41,
    "questionText": "How does Natural Science of Computer Science differ from Design Science of Computer Science?",
    "options": [
      "a) Natural science creates new tools, while design science studies existing ones",
      "b) Natural science focuses on finding basic rules of computer systems, while design science focuses on creating and improving tools",
      "c) Natural science uses empirical cycles, while design science uses regulative cycles",
      "d) Natural science deals with hardware, while design science deals with software"
    ],
    "correctAnswer": "b) Natural science focuses on finding basic rules of computer systems, while design science focuses on creating and improving tools"
  },
  {
    "id": 42,
    "questionText": "The study of different sorting algorithms to understand their speed and performance with various data types is an example of:",
    "options": [
      "a) Design Science of Computer Science",
      "b) Natural Science of Computer Science",
      "c) Computational Thinking",
      "d) System Troubleshooting"
    ],
    "correctAnswer": "b) Natural Science of Computer Science"
  },
  {
    "id": 43,
    "questionText": "Which of the following is considered an interface component of a computer system?",
    "options": [
      "a) CPU",
      "b) RAM",
      "c) Keyboard",
      "d) Storage (Hard Drive)"
    ],
    "correctAnswer": "c) Keyboard"
  },
  {
    "id": 44,
    "questionText": "What acts as the primary circuit board that interconnects all components in a computer system?",
    "options": [
      "a) System Bus",
      "b) CPU",
      "c) Motherboard",
      "d) RAM"
    ],
    "correctAnswer": "c) Motherboard"
  },
  {
    "id": 45,
    "questionText": "In the Von Neumann architecture, what is the role of Memory?",
    "options": [
      "a) To execute commands provided by the CPU",
      "b) To perform mathematical computations",
      "c) To contain both input data and the instructions required for CPU processing",
      "d) To present the outcomes of executed tasks"
    ],
    "correctAnswer": "c) To contain both input data and the instructions required for CPU processing"
  },
  {
    "id": 46,
    "questionText": "When you double-click on a file icon, which component sends a signal to the computer indicating your action?",
    "options": [
      "a) CPU",
      "b) Memory",
      "c) Input Device (e.g., mouse)",
      "d) Operating System (OS)"
    ],
    "correctAnswer": "c) Input Device (e.g., mouse)"
  },
  {
    "id": 47,
    "questionText": "What happens in the storing stage of the Von Neumann instruction cycle?",
    "options": [
      "a) The CPU fetches an instruction from memory",
      "b) The Control Unit decodes the instruction",
      "c) The ALU executes a computation",
      "d) The outcome of the computation is returned to memory or sent to an output device"
    ],
    "correctAnswer": "d) The outcome of the computation is returned to memory or sent to an output device"
  },
  {
    "id": 48,
    "questionText": "A key disadvantage of the Von Neumann architecture is related to security risks. Why?",
    "options": [
      "a) Because it lacks a dedicated control unit",
      "b) Because programs cannot be easily changed",
      "c) Because having data and instructions in the same area poses a problem where one program can alter another's instructions",
      "d) Because it leads to overly complex designs"
    ],
    "correctAnswer": "c) Because having data and instructions in the same area poses a problem where one program can alter another's instructions"
  },
  {
    "id": 49,
    "questionText": "What is the role of electricity in a computing system?",
    "options": [
      "a) It is a type of application software",
      "b) It functions as a storage device",
      "c) It dictates the requirements for hardware",
      "d) It is the power source that enables the hardware components to function"
    ],
    "correctAnswer": "d) It is the power source that enables the hardware components to function"
  },
  {
    "id": 50,
    "questionText": "Which of the following is an example of a network operating system?",
    "options": [
      "a) TCP/IP",
      "b) Ethernet cable",
      "c) Windows Server",
      "d) Router"
    ],
    "correctAnswer": "c) Windows Server"
  }
],
  "Number Systems": [
  {
    "id": 1,
    "questionText": "What is the primary purpose of the ASCII encoding scheme?",
    "options": [
      "a) To represent characters from various languages across the world",
      "b) To map all graphic characters used in any of the world's writing systems",
      "c) To represent text in devices such as computers and similar systems",
      "d) To compress audio files"
    ],
    "correctAnswer": "c) To represent text in devices such as computers and similar systems"
  },
  {
    "id": 2,
    "questionText": "How many bits are used in the standard ASCII encoding?",
    "options": [
      "a) 8 bits",
      "b) 7 bits",
      "c) 16 bits",
      "d) 32 bits"
    ],
    "correctAnswer": "b) 7 bits"
  },
  {
    "id": 3,
    "questionText": "What is the main difference between ASCII and Unicode?",
    "options": [
      "a) ASCII uses more bits per character than Unicode",
      "b) Unicode is limited to 128 characters, while ASCII can represent over a million",
      "c) Unicode can represent over a million characters, unlike ASCII which is limited to 128 characters",
      "d) ASCII is used for images, while Unicode is for text"
    ],
    "correctAnswer": "c) Unicode can represent over a million characters, unlike ASCII which is limited to 128 characters"
  },
  {
    "id": 4,
    "questionText": "How does Unicode handle characters from different languages?",
    "options": [
      "a) By exclusively using 7-bit encoding",
      "b) By converting all characters to a single binary value",
      "c) Through different forms of encodings such as UTF-8, UTF-16, and UTF-32",
      "d) By only supporting English alphabet characters"
    ],
    "correctAnswer": "c) Through different forms of encodings such as UTF-8, UTF-16, and UTF-32"
  },
  {
    "id": 5,
    "questionText": "What is the range of values for an unsigned 2-byte integer?",
    "options": [
      "a) 0 to 127",
      "b) -32,768 to 32,767",
      "c) 0 to 255",
      "d) 0 to 65,535"
    ],
    "correctAnswer": "d) 0 to 65,535"
  },
  {
    "id": 6,
    "questionText": "How is a negative integer represented in binary using two's complement?",
    "options": [
      "a) By simply changing the sign bit",
      "b) By inverting all bits and then subtracting 1",
      "c) By inverting all bits and then adding 1 to the Least Significant Bit (LSB)",
      "d) By using a separate sign bit at the end of the number"
    ],
    "correctAnswer": "c) By inverting all bits and then adding 1 to the Least Significant Bit (LSB)"
  },
  {
    "id": 7,
    "questionText": "What is the benefit of using unsigned integers?",
    "options": [
      "a) They can represent negative values",
      "b) They use less memory than signed integers",
      "c) They are commonly used for quantities that cannot be negative, allowing a larger positive range",
      "d) They are faster to process in the CPU"
    ],
    "correctAnswer": "c) They are commonly used for quantities that cannot be negative, allowing a larger positive range"
  },
  {
    "id": 8,
    "questionText": "How does the number of bits affect the range of integer values?",
    "options": [
      "a) More bits reduce the maximum value that can be represented",
      "b) Fewer bits allow for larger negative numbers",
      "c) The number of bits only affects floating-point numbers",
      "d) More bits allow for bigger values (larger range)"
    ],
    "correctAnswer": "d) More bits allow for bigger values (larger range)"
  },
  {
    "id": 9,
    "questionText": "Why are whole numbers commonly used in computing for quantities that cannot be negative?",
    "options": [
      "a) Because they are easier to convert to hexadecimal",
      "b) Because they include all negative integers",
      "c) Because they are a set of non-negative integers (0, 1, 2, 3...)",
      "d) Because they are only used for scientific computing"
    ],
    "correctAnswer": "c) Because they are a set of non-negative integers (0, 1, 2, 3...)"
  },
  {
    "id": 10,
    "questionText": "How is the range of floating-point numbers calculated for single precision?",
    "options": [
      "a) It uses 64 bits with a bias of 1023",
      "b) It is calculated by considering the total number of bits, without distinction for sign, exponent, or mantissa",
      "c) It uses 32 bits, with 1 bit for sign, 8 bits for the exponent, and 23 bits for the mantissa, allowing a range from approx. 1.4 x 10^-45 to 3.4 x 10^38",
      "d) It uses 16 bits for the exponent"
    ],
    "correctAnswer": "c) It uses 32 bits, with 1 bit for sign, 8 bits for the exponent, and 23 bits for the mantissa, allowing a range from approx. 1.4 x 10^-45 to 3.4 x 10^38"
  },
  {
    "id": 11,
    "questionText": "Why is it important to understand the limitations of floating-point representation in scientific computing?",
    "options": [
      "a) Because floating-point numbers can only represent whole numbers",
      "b) Because they are always perfectly accurate",
      "c) Because possible round-off errors must be considered to maintain accuracy",
      "d) Because they only work for very small numbers"
    ],
    "correctAnswer": "c) Because possible round-off errors must be considered to maintain accuracy"
  },
  {
    "id": 12,
    "questionText": "What is the decimal equivalent of the binary number 1011?",
    "options": [
      "a) 9",
      "b) 11",
      "c) 13",
      "d) 15"
    ],
    "correctAnswer": "b) 11"
  },
  {
    "id": 13,
    "questionText": "How are the two states of digital circuits (ON/OFF) represented in the binary system?",
    "options": [
      "a) ON for 0, OFF for 1",
      "b) ON for 1, OFF for 0",
      "c) Both ON and OFF for 1",
      "d) Both ON and OFF for 0"
    ],
    "correctAnswer": "b) ON for 1, OFF for 0"
  },
  {
    "id": 14,
    "questionText": "What is the base value of the octal number system?",
    "options": [
      "a) 2",
      "b) 10",
      "c) 16",
      "d) 8"
    ],
    "correctAnswer": "d) 8"
  },
  {
    "id": 15,
    "questionText": "Each octal digit represents how many binary digits (bits)?",
    "options": [
      "a) 1 bit",
      "b) 2 bits",
      "c) 3 bits",
      "d) 4 bits"
    ],
    "correctAnswer": "c) 3 bits"
  },
  {
    "id": 16,
    "questionText": "What is the decimal equivalent of the octal number 157?",
    "options": [
      "a) 100",
      "b) 111",
      "c) 119",
      "d) 127"
    ],
    "correctAnswer": "b) 111"
  },
  {
    "id": 17,
    "questionText": "What is the base value of the hexadecimal number system?",
    "options": [
      "a) 2",
      "b) 8",
      "c) 10",
      "d) 16"
    ],
    "correctAnswer": "d) 16"
  },
  {
    "id": 18,
    "questionText": "In hexadecimal, which letter represents the numeric value 10?",
    "options": [
      "a) F",
      "b) E",
      "c) C",
      "d) A"
    ],
    "correctAnswer": "d) A"
  },
  {
    "id": 19,
    "questionText": "Each hexadecimal digit equals how many binary bits?",
    "options": [
      "a) 1 bit",
      "b) 2 bits",
      "c) 3 bits",
      "d) 4 bits"
    ],
    "correctAnswer": "d) 4 bits"
  },
  {
    "id": 20,
    "questionText": "What is the result of converting the binary number 1101011010110010 to hexadecimal?",
    "options": [
      "a) A6B2",
      "b) D6B2",
      "c) E5C1",
      "d) F7D3"
    ],
    "correctAnswer": "b) D6B2"
  },
  {
    "id": 21,
    "questionText": "What is the primary purpose of floating-point numbers in computers?",
    "options": [
      "a) To represent whole numbers only",
      "b) To store text characters",
      "c) To represent numbers with fractions and/or decimals (real values)",
      "d) To manage memory addresses"
    ],
    "correctAnswer": "c) To represent numbers with fractions and/or decimals (real values)"
  },
  {
    "id": 22,
    "questionText": "In the formula for a floating-point number (sign x mantissa x 2^exponent), what does the mantissa represent?",
    "options": [
      "a) The sign of the number",
      "b) The power of 2",
      "c) The fractional part of the number (implied from example 5.75 = 1.4375 x 2^2 where 1.4375 is the mantissa)",
      "d) The base of the number system"
    ],
    "correctAnswer": "c) The fractional part of the number (implied from example 5.75 = 1.4375 x 2^2 where 1.4375 is the mantissa)"
  },
  {
    "id": 23,
    "questionText": "Which of the following is NOT a rule for binary addition?",
    "options": [
      "a) 0 + 0 = 0",
      "b) 0 + 1 = 1",
      "c) 1 + 0 = 1",
      "d) 1 + 1 = 1 (with a carry of 0) (Correct rule is 1+1=0 with carry 1)"
    ],
    "correctAnswer": "d) 1 + 1 = 1 (with a carry of 0) (Correct rule is 1+1=0 with carry 1)"
  },
  {
    "id": 24,
    "questionText": "How is binary subtraction commonly carried out in binary arithmetic?",
    "options": [
      "a) By directly subtracting bits like in decimal",
      "b) By adding the two's complement of the subtrahend to the minuend",
      "c) By inverting all bits of the minuend",
      "d) By shifting bits to the left"
    ],
    "correctAnswer": "b) By adding the two's complement of the subtrahend to the minuend"
  },
  {
    "id": 25,
    "questionText": "What is the final step in multiplying binary numbers?",
    "options": [
      "a) Shift partial results one place to the left",
      "b) Multiply each bit of the second number by the first",
      "c) Add all the partial results to get the final product",
      "d) Align numbers by the least significant bit"
    ],
    "correctAnswer": "c) Add all the partial results to get the final product"
  },
  {
    "id": 26,
    "questionText": "When dividing binary numbers, what is the first step?",
    "options": [
      "a) Subtract the divisor from the dividend",
      "b) Shift the next binary digit down",
      "c) Compare the divisor with the current portion of the dividend",
      "d) Repeat the process until all digits are used"
    ],
    "correctAnswer": "c) Compare the divisor with the current portion of the dividend"
  },
  {
    "id": 27,
    "questionText": "What is UTF-8?",
    "options": [
      "a) A fixed-length encoding scheme that uses 4 bytes per character",
      "b) An encoding scheme not compatible with ASCII",
      "c) A variable-length encoding scheme that can use 1 to 4 bytes per character and is backward compatible with ASCII",
      "d) An encoding scheme used only for Urdu letters"
    ],
    "correctAnswer": "c) A variable-length encoding scheme that can use 1 to 4 bytes per character and is backward compatible with ASCII"
  },
  {
    "id": 28,
    "questionText": "Which Unicode encoding uses a fixed length of 4 bytes per character?",
    "options": [
      "a) UTF-8",
      "b) UTF-16",
      "c) UTF-32",
      "d) ASCII"
    ],
    "correctAnswer": "c) UTF-32"
  },
  {
    "id": 29,
    "questionText": "What are pixels in the context of storing images?",
    "options": [
      "a) Sound waves",
      "b) Binary data sequences",
      "c) Tiny dots, each with a color, that make up a complete picture",
      "d) Image file formats"
    ],
    "correctAnswer": "c) Tiny dots, each with a color, that make up a complete picture"
  },
  {
    "id": 30,
    "questionText": "In a color image, the color of each pixel is typically represented by three numbers. What are they?",
    "options": [
      "a) Cyan, Magenta, Yellow (CMY)",
      "b) Hue, Saturation, Value (HSV)",
      "c) Red, Green, Blue (RGB)",
      "d) Black, White, Gray (BWG)"
    ],
    "correctAnswer": "c) Red, Green, Blue (RGB)"
  },
  {
    "id": 31,
    "questionText": "Which image file format supports transparency and maintains high quality without losing data?",
    "options": [
      "a) JPEG",
      "b) GIF",
      "c) PNG",
      "d) BMP"
    ],
    "correctAnswer": "c) PNG"
  },
  {
    "id": 32,
    "questionText": "What are the two main processes involved in storing audio files by converting sound waves into digital data?",
    "options": [
      "a) Compression and encryption",
      "b) Sampling and quantization",
      "c) Filtering and modulation",
      "d) Encoding and decoding"
    ],
    "correctAnswer": "b) Sampling and quantization"
  },
  {
    "id": 33,
    "questionText": "Which audio file format is a common compressed format that may lose some quality?",
    "options": [
      "a) WAV",
      "b) AAC",
      "c) Mp3",
      "d) FLAC"
    ],
    "correctAnswer": "c) Mp3"
  },
  {
    "id": 34,
    "questionText": "What is a frame in the context of storing videos?",
    "options": [
      "a) The audio track only",
      "b) The metadata of the video",
      "c) Each individual image shown rapidly in sequence",
      "d) The compression algorithm used"
    ],
    "correctAnswer": "c) Each individual image shown rapidly in sequence"
  },
  {
    "id": 35,
    "questionText": "What is the number of frames shown per second in a video called?",
    "options": [
      "a) Resolution",
      "b) Aspect Ratio",
      "c) Frame Rate (FPS)",
      "d) Bit Rate"
    ],
    "correctAnswer": "c) Frame Rate (FPS)"
  },
  {
    "id": 36,
    "questionText": "Which storage device uses spinning disks to read/write data and offers large storage capacities?",
    "options": [
      "a) Solid State Drive (SSD)",
      "b) Cloud Storage",
      "c) Hard Disk Drive (HDD)",
      "d) RAM"
    ],
    "correctAnswer": "c) Hard Disk Drive (HDD)"
  },
  {
    "id": 37,
    "questionText": "What are Whole Numbers (W) defined as in computing?",
    "options": [
      "a) All integers, positive and negative",
      "b) Numbers with fractions or decimals",
      "c) A set of non-negative integers, including zero",
      "d) Only positive integers greater than zero"
    ],
    "correctAnswer": "c) A set of non-negative integers, including zero"
  },
  {
    "id": 38,
    "questionText": "For a 1-byte whole number (8 bits), what is the maximum value that can be represented?",
    "options": [
      "a) 127",
      "b) 255",
      "c) 65,535",
      "d) 4,294,967,295"
    ],
    "correctAnswer": "b) 255"
  },
  {
    "id": 39,
    "questionText": "What is the maximum positive value that can be stored in a 1-byte signed integer?",
    "options": [
      "a) 255",
      "b) 127",
      "c) 0",
      "d) -128"
    ],
    "correctAnswer": "b) 127"
  },
  {
    "id": 40,
    "questionText": "What is the process of converting a decimal fractional part to binary?",
    "options": [
      "a) Divide the fractional part by 2",
      "b) Multiply the fractional part by 2 and write down the integral part",
      "c) Invert the bits of the integral part",
      "d) Add 1 to the fractional part"
    ],
    "correctAnswer": "b) Multiply the fractional part by 2 and write down the integral part"
  },
  {
    "id": 41,
    "questionText": "In single precision (32-bit) floating-point representation, how many bits are assigned to the exponent?",
    "options": [
      "a) 1 bit",
      "b) 8 bits",
      "c) 23 bits",
      "d) 11 bits"
    ],
    "correctAnswer": "b) 8 bits"
  },
  {
    "id": 42,
    "questionText": "In double precision (64-bit) floating-point representation, how many bits are used for the exponent?",
    "options": [
      "a) 8 bits",
      "b) 23 bits",
      "c) 11 bits",
      "d) 52 bits"
    ],
    "correctAnswer": "c) 11 bits"
  },
  {
    "id": 43,
    "questionText": "Which of the following data sizes represents 1024 Kilobytes?",
    "options": [
      "a) 1 Byte (B)",
      "b) 1 Gigabyte (GB)",
      "c) 1 Megabyte (MB)",
      "d) 1 Terabyte (TB)"
    ],
    "correctAnswer": "c) 1 Megabyte (MB)"
  },
  {
    "id": 44,
    "questionText": "The octal system was more common in early computing systems like the PDP-8 because:",
    "options": [
      "a) It allowed for more digits than decimal",
      "b) It is easier to convert between octal and binary than between decimal and binary",
      "c) It used base 16, which is more compact",
      "d) It was directly used by modern computers"
    ],
    "correctAnswer": "b) It is easier to convert between octal and binary than between decimal and binary"
  },
  {
    "id": 45,
    "questionText": "The conversion of decimal number 83 to binary is:",
    "options": [
      "a) 1010010",
      "b) 1010011",
      "c) 1010101",
      "d) 1011001"
    ],
    "correctAnswer": "b) 1010011"
  },
  {
    "id": 46,
    "questionText": "The conversion of decimal number 83 to octal is:",
    "options": [
      "a) 103",
      "b) 123",
      "c) 130",
      "d) 143"
    ],
    "correctAnswer": "b) 123"
  },
  {
    "id": 47,
    "questionText": "The conversion of decimal number 2297 to hexadecimal is:",
    "options": [
      "a) 8E9",
      "b) 8F9",
      "c) 9F8",
      "d) AFA"
    ],
    "correctAnswer": "a) 8E9"
  },
  {
    "id": 48,
    "questionText": "What is the primary reason computers use the binary number system?",
    "options": [
      "a) It is the easiest for humans to understand",
      "b) It allows for direct representation of decimal numbers",
      "c) It fits well with electronics, as digital circuits have two states (ON/OFF)",
      "d) It requires less storage space for all data types"
    ],
    "correctAnswer": "c) It fits well with electronics, as digital circuits have two states (ON/OFF)"
  },
  {
    "id": 49,
    "questionText": "What is the approximate range of values for single-precision floating-point numbers?",
    "options": [
      "a) 1.4 x 10^-45 to 3.4 x 10^38",
      "b) 1.4 x 10^38 to 3.4 x 10^45",
      "c) -2^31 to 2^31 - 1",
      "d) 0 to 2^32 - 1"
    ],
    "correctAnswer": "a) 1.4 x 10^-45 to 3.4 x 10^38"
  },
  {
    "id": 50,
    "questionText": "What does 1 Kilobyte (KB) equal in Bytes?",
    "options": [
      "a) 8 Bytes",
      "b) 1000 Bytes",
      "c) 1024 Bytes",
      "d) 1,000,000 Bytes"
    ],
    "correctAnswer": "c) 1024 Bytes"
  }
],
  "Digital Systems and Logic Design": [
  {
    "id": 1,
    "questionText": "What is a Boolean function?",
    "options": [
      "a) A mathematical function that uses real numbers",
      "b) An algebraic statement describing the relationship between binary variables and logical operations",
      "c) A signal that changes smoothly and continuously",
      "d) A device that converts analog signals to digital"
    ],
    "correctAnswer": "b) An algebraic statement describing the relationship between binary variables and logical operations"
  },
  {
    "id": 2,
    "questionText": "What is the significance of the truth table in digital logic?",
    "options": [
      "a) It simplifies complex Boolean expressions algebraically",
      "b) It describes the physical connections of a circuit",
      "c) It is useful in demonstrating the functionality of a logic operation with all possibilities of input variables",
      "d) It measures how fast or slow an algorithm performs"
    ],
    "correctAnswer": "c) It is useful in demonstrating the functionality of a logic operation with all possibilities of input variables"
  },
  {
    "id": 3,
    "questionText": "How do analog signals differ from digital signals?",
    "options": [
      "a) Analog signals have only two values (0 or 1), while digital signals change smoothly",
      "b) Analog signals change smoothly and continuously, while digital signals have only two values (0 or 1)",
      "c) Analog signals are less affected by noise, digital signals are more affected",
      "d) Analog signals are processed by computers, digital signals by humans"
    ],
    "correctAnswer": "b) Analog signals change smoothly and continuously, while digital signals have only two values (0 or 1)"
  },
  {
    "id": 4,
    "questionText": "Describe the function of a NOT gate with its truth table.",
    "options": [
      "a) It outputs true when both inputs are true (A=0, P=0; A=1, P=1)",
      "b) It outputs true when at least one input is true (A=0, P=0; A=1, P=1)",
      "c) It negates a single binary input (A=0, P=1; A=1, P=0)",
      "d) It performs mathematical computations (A=0, P=0; A=1, P=2)"
    ],
    "correctAnswer": "c) It negates a single binary input (A=0, P=1; A=1, P=0)"
  },
  {
    "id": 5,
    "questionText": "What is the purpose of a Karnaugh map in simplifying Boolean expressions?",
    "options": [
      "a) To algebraically expand Boolean expressions",
      "b) To convert analog signals to digital",
      "c) To graphically represent Boolean expressions to minimize logic functions without complex algebraic operations",
      "d) To design Half-adder and Full-adder circuits"
    ],
    "correctAnswer": "c) To graphically represent Boolean expressions to minimize logic functions without complex algebraic operations"
  },
  {
    "id": 6,
    "questionText": "In digital logic, what voltage level typically refers to a binary '1'?",
    "options": [
      "a) 0 volts",
      "b) Negative voltage",
      "c) A higher voltage, such as 5 volts",
      "d) Any voltage level"
    ],
    "correctAnswer": "c) A higher voltage, such as 5 volts"
  },
  {
    "id": 7,
    "questionText": "What is the AND operation output when both inputs are '1'?",
    "options": [
      "a) 0",
      "b) 1",
      "c) Undetermined",
      "d) Variable"
    ],
    "correctAnswer": "b) 1"
  },
  {
    "id": 8,
    "questionText": "What is the OR operation output when both inputs are '0'?",
    "options": [
      "a) 0",
      "b) 1",
      "c) Undetermined",
      "d) Variable"
    ],
    "correctAnswer": "a) 0"
  },
  {
    "id": 9,
    "questionText": "In binary logic, what does 1 + 1 equal in a logical OR operation?",
    "options": [
      "a) 0",
      "b) 2",
      "c) 1",
      "d) Undetermined"
    ],
    "correctAnswer": "c) 1"
  },
  {
    "id": 10,
    "questionText": "Which logic gate is achieved when an AND gate is combined with a NOT gate?",
    "options": [
      "a) OR Gate",
      "b) XOR Gate",
      "c) NAND Gate",
      "d) NOT Gate"
    ],
    "correctAnswer": "c) NAND Gate"
  },
  {
    "id": 11,
    "questionText": "What is the output of an XOR (Exclusive OR) gate?",
    "options": [
      "a) True only when both inputs are true",
      "b) False when both inputs are true",
      "c) True only when exactly one of the inputs is true",
      "d) True when at least one input is true"
    ],
    "correctAnswer": "c) True only when exactly one of the inputs is true"
  },
  {
    "id": 12,
    "questionText": "The simplification of Boolean functions is important for designing efficient digital circuits because it:",
    "options": [
      "a) Increases their size and complexity",
      "b) Makes them more energy-intensive",
      "c) Requires fewer gates, making them compact, energy efficient, and faster",
      "d) Requires more complicated algebraic computations"
    ],
    "correctAnswer": "c) Requires fewer gates, making them compact, energy efficient, and faster"
  },
  {
    "id": 13,
    "questionText": "According to the Identity Laws in Boolean algebra, what does A + 0 equal?",
    "options": [
      "a) 0",
      "b) 1",
      "c) A",
      "d) A.0"
    ],
    "correctAnswer": "c) A"
  },
  {
    "id": 14,
    "questionText": "According to the Null Laws in Boolean algebra, what does A + 1 equal?",
    "options": [
      "a) A",
      "b) 1",
      "c) 0",
      "d) A.1"
    ],
    "correctAnswer": "b) 1"
  },
  {
    "id": 15,
    "questionText": "According to the Idempotent Laws in Boolean algebra, what does A + A equal?",
    "options": [
      "a) 1",
      "b) 0",
      "c) A",
      "d) A²"
    ],
    "correctAnswer": "c) A"
  },
  {
    "id": 16,
    "questionText": "According to the Complement Laws in Boolean algebra, what does A + A equal?",
    "options": [
      "a) A",
      "b) 1",
      "c) 0",
      "d) 2A"
    ],
    "correctAnswer": "b) 1"
  },
  {
    "id": 17,
    "questionText": "According to the Commutative Laws in Boolean algebra, what does A . B equal?",
    "options": [
      "a) A + B",
      "b) B + A",
      "c) B . A",
      "d) A . A"
    ],
    "correctAnswer": "c) B . A"
  },
  {
    "id": 18,
    "questionText": "What do logic diagrams depict?",
    "options": [
      "a) The algebraic simplification of Boolean functions",
      "b) The voltage levels in a digital circuit",
      "c) The working of a digital circuit through symbols that represent individual logic gates",
      "d) The truth table of a Boolean function"
    ],
    "correctAnswer": "c) The working of a digital circuit through symbols that represent individual logic gates"
  },
  {
    "id": 19,
    "questionText": "A Half-adder is a basic circuitry unit that performs addition of:",
    "options": [
      "a) Three single-bit binary digits",
      "b) Decimal numbers",
      "c) Two single-bit binary digits",
      "d) Floating-point numbers"
    ],
    "correctAnswer": "c) Two single-bit binary digits"
  },
  {
    "id": 20,
    "questionText": "What are the two outputs of a Half-adder circuit?",
    "options": [
      "a) Input A and Input B",
      "b) Sum (S) and Carry (C)",
      "c) Carry-in (Cin) and Carry-out (Cout)",
      "d) Output P and Output Q"
    ],
    "correctAnswer": "b) Sum (S) and Carry (C)"
  },
  {
    "id": 21,
    "questionText": "What is the Boolean expression for the Sum (S) output of a Half-adder?",
    "options": [
      "a) S = A . B",
      "b) S = A + B",
      "c) S = A",
      "d) S = A ⊕ B"
    ],
    "correctAnswer": "d) S = A ⊕ B"
  },
  {
    "id": 22,
    "questionText": "What is the Boolean expression for the Carry (C) output of a Half-adder?",
    "options": [
      "a) C = A + B",
      "b) C = A ⊕ B",
      "c) C = A",
      "d) C = A . B"
    ],
    "correctAnswer": "d) C = A . B"
  },
  {
    "id": 23,
    "questionText": "A Full-adder is a more complex circuit that adds how many single-bit binary numbers?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three (two main bits and a carry bit from a previous addition)",
      "d) Four"
    ],
    "correctAnswer": "c) Three (two main bits and a carry bit from a previous addition)"
  },
  {
    "id": 24,
    "questionText": "What are the three inputs of a Full-adder circuit?",
    "options": [
      "a) Sum (S), Carry-in (Cin), Carry-out (Cout)",
      "b) A, B, and Cin (carry input)",
      "c) A, B, and Sum (S)",
      "d) A, B, and Carry (C)"
    ],
    "correctAnswer": "b) A, B, and Cin (carry input)"
  },
  {
    "id": 25,
    "questionText": "What is the Boolean expression for the Sum (S) output of a Full-adder?",
    "options": [
      "a) S = A . B . Cin",
      "b) S = A + B + Cin",
      "c) S = A ⊕ B ⊕ Cin",
      "d) S = (A.B) + (Cin . (A⊕B))"
    ],
    "correctAnswer": "c) S = A ⊕ B ⊕ Cin"
  },
  {
    "id": 26,
    "questionText": "What is the Boolean expression for the Carry (Cout) output of a Full-adder?",
    "options": [
      "a) Cout = A ⊕ B ⊕ Cin",
      "b) Cout = A + B + Cin",
      "c) Cout = A . B . Cin",
      "d) Cout = (A.B) + (Cin . (A⊕B))"
    ],
    "correctAnswer": "d) Cout = (A.B) + (Cin . (A⊕B))"
  },
  {
    "id": 27,
    "questionText": "What is the minimum number of variables for a Karnaugh map with a 2x2 grid?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "b) 2"
  },
  {
    "id": 28,
    "questionText": "What is a minterm in Boolean algebra?",
    "options": [
      "a) A sum (OR) term where every variable is present",
      "b) A term that corresponds to a false output",
      "c) A particular product (AND) term whereby every variable of the function is present in either its true form or its complement",
      "d) A simplified Boolean expression"
    ],
    "correctAnswer": "c) A particular product (AND) term whereby every variable of the function is present in either its true form or its complement"
  },
  {
    "id": 29,
    "questionText": "Which of the following examples best illustrates the use of Boolean functions in Arithmetic Logic Units (ALUs)?",
    "options": [
      "a) Processing text documents",
      "b) Displaying images on a screen",
      "c) Performing operations like addition, subtraction, multiplication, and division",
      "d) Managing system resources like memory"
    ],
    "correctAnswer": "c) Performing operations like addition, subtraction, multiplication, and division"
  },
  {
    "id": 30,
    "questionText": "What is Analog to Digital Conversion (ADC)?",
    "options": [
      "a) The process of converting digital signals into analog signals",
      "b) The conversion of analog signals into digital signals",
      "c) A process used for human perception of information",
      "d) A type of logic gate"
    ],
    "correctAnswer": "b) The conversion of analog signals into digital signals"
  },
  {
    "id": 31,
    "questionText": "Why is ADC and DAC conversion critical?",
    "options": [
      "a) It only allows for processing of analog signals",
      "b) It enables data processing, storage, and transmission, as digital signals are less affected by noise",
      "c) It is only used for sound waves",
      "d) It prevents digital signals from being transmitted over long distances"
    ],
    "correctAnswer": "b) It enables data processing, storage, and transmission, as digital signals are less affected by noise"
  },
  {
    "id": 32,
    "questionText": "What is the conventional representation for a higher voltage (e.g., 5 volts) in digital circuits?",
    "options": [
      "a) Logic 0",
      "b) Logic 1",
      "c) Undetermined",
      "d) Analog signal"
    ],
    "correctAnswer": "b) Logic 1"
  },
  {
    "id": 33,
    "questionText": "Which mathematician invented Boolean algebra?",
    "options": [
      "a) John von Neumann",
      "b) George Boole",
      "c) Alan Turing",
      "d) Charles Babbage"
    ],
    "correctAnswer": "b) George Boole"
  },
  {
    "id": 34,
    "questionText": "A Boolean function with inputs A, B, and C that is expressed as F(A, B, C) = A . B + A . C uses which operations?",
    "options": [
      "a) Only AND",
      "b) Only OR",
      "c) Only NOT",
      "d) AND, OR, and NOT"
    ],
    "correctAnswer": "d) AND, OR, and NOT"
  },
  {
    "id": 35,
    "questionText": "The truth table for F(A,B) = A.B shows an output of '1' only when:",
    "options": [
      "a) A=0, B=1",
      "b) A=1, B=0",
      "c) A=0, B=0",
      "d) A=1, B=1"
    ],
    "correctAnswer": "d) A=1, B=1"
  },
  {
    "id": 36,
    "questionText": "In the context of a safety system, an alarm should go on if either one of two sensors detects an issue. This scenario is an example of which logic gate?",
    "options": [
      "a) AND Gate",
      "b) NOT Gate",
      "c) XOR Gate",
      "d) OR Gate (More specifically, NAND if it's based on \"at least one of two sensors detects an issue\" where an issue is a false input, but given the options and common interpretation, OR for \"at least one is true\")"
    ],
    "correctAnswer": "d) OR Gate (More specifically, NAND if it's based on \"at least one of two sensors detects an issue\" where an issue is a false input, but given the options and common interpretation, OR for \"at least one is true\")"
  },
  {
    "id": 37,
    "questionText": "According to De Morgan's Theorems, what is the equivalent of A + B?",
    "options": [
      "a) A + B",
      "b) A . B",
      "c) A . B",
      "d) A + B"
    ],
    "correctAnswer": "c) A . B"
  },
  {
    "id": 38,
    "questionText": "According to the Double Negation Law, what does A equal?",
    "options": [
      "a) 0",
      "b) 1",
      "c) A",
      "d) A"
    ],
    "correctAnswer": "c) A"
  },
  {
    "id": 39,
    "questionText": "In a Karnaugh map, which of the following group sizes is NOT a power of two?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    "correctAnswer": "c) 3"
  },
  {
    "id": 40,
    "questionText": "How many variables would a Karnaugh map with a 2x4 grid typically have?",
    "options": [
      "a) 2",
      "b) 3",
      "c) 4",
      "d) 5"
    ],
    "correctAnswer": "b) 3"
  },
  {
    "id": 41,
    "questionText": "For a Boolean function with variables A, B, and C, how is the minterm where A = 1, B = 0, and C = 1 written?",
    "options": [
      "a) A + B + C",
      "b) A . B . C",
      "c) A B C",
      "d) A + B . C"
    ],
    "correctAnswer": "c) A B C"
  },
  {
    "id": 42,
    "questionText": "What is the simplified expression for A + A . B using Boolean algebra rules?",
    "options": [
      "a) A . B",
      "b) 1",
      "c) A + B",
      "d) A"
    ],
    "correctAnswer": "d) A"
  },
  {
    "id": 43,
    "questionText": "Which of the following applications in everyday devices uses Boolean functions?",
    "options": [
      "a) Listening to music on a phone",
      "b) Taking a photo with a camera",
      "c) Dailing a number on a cell phone or performing calculations on a calculator",
      "d) Watching a video"
    ],
    "correctAnswer": "c) Dailing a number on a cell phone or performing calculations on a calculator"
  },
  {
    "id": 44,
    "questionText": "Which layer of the OSI model involves analog to digital conversion to transmit information?",
    "options": [
      "a) Application layer",
      "b) Data Link layer",
      "c) Network layer",
      "d) The source does not explicitly link ADC to an OSI layer but rather to the general concept of digital communication."
    ],
    "correctAnswer": "d) The source does not explicitly link ADC to an OSI layer but rather to the general concept of digital communication."
  },
  {
    "id": 45,
    "questionText": "In a digital circuit, what two states are used to represent and manipulate information?",
    "options": [
      "a) True and False",
      "b) High and Low",
      "c) 0 and 1",
      "d) On and Off"
    ],
    "correctAnswer": "c) 0 and 1"
  },
  {
    "id": 46,
    "questionText": "What is the role of logic levels in digital circuits?",
    "options": [
      "a) To perform logical computations",
      "b) To represent binary variables as true or false",
      "c) To switch devices on and off and define ways digital circuits execute operations",
      "d) To simplify Boolean expressions"
    ],
    "correctAnswer": "c) To switch devices on and off and define ways digital circuits execute operations"
  },
  {
    "id": 47,
    "questionText": "What happens when A=1 and B=1 in the AND operation?",
    "options": [
      "a) Output P is 0",
      "b) Output P is 1",
      "c) Output P is undetermined",
      "d) Output P is the negation of A"
    ],
    "correctAnswer": "b) Output P is 1"
  },
  {
    "id": 48,
    "questionText": "When the input A is 0 in a NOT operation, what is the output P?",
    "options": [
      "a) 0",
      "b) 1",
      "c) Undetermined",
      "d) The same as input"
    ],
    "correctAnswer": "b) 1"
  },
  {
    "id": 49,
    "questionText": "What is a key purpose of constructing Boolean functions?",
    "options": [
      "a) To analyze analog signals",
      "b) To simplify truth tables",
      "c) To employ in the formation of various digital circuits",
      "d) To perform binary arithmetic operations"
    ],
    "correctAnswer": "c) To employ in the formation of various digital circuits"
  },
  {
    "id": 50,
    "questionText": "Which basic Boolean algebra rule states that A . (B + C) = (A . B) + (A . C)?",
    "options": [
      "a) Commutative Law",
      "b) Associative Law",
      "c) Distributive Law",
      "d) Absorption Law"
    ],
    "correctAnswer": "c) Distributive Law"
  }
],
  "System Troubleshooting": [
  {
    "id": 1,
    "questionText": "What is the first step in the systematic process of troubleshooting?",
    "options": [
      "a) Establish a Theory of Probable Cause",
      "b) Implement the Solution",
      "c) Identify Problem",
      "d) Document Findings, Actions, and Outcomes"
    ],
    "correctAnswer": "c) Identify Problem"
  },
  {
    "id": 2,
    "questionText": "After identifying a problem, what is the next step in troubleshooting?",
    "options": [
      "a) Test the Theory to Determine the Cause",
      "b) Establish a Theory of Probable Cause",
      "c) Implement the Solution",
      "d) Verify Full System Functionality"
    ],
    "correctAnswer": "b) Establish a Theory of Probable Cause"
  },
  {
    "id": 3,
    "questionText": "Why is it important to test a theory during the troubleshooting process?",
    "options": [
      "a) To skip directly to implementing a solution",
      "b) To document findings prematurely",
      "c) To check if the suspected cause is actually the reason for the problem",
      "d) To prevent system downtime"
    ],
    "correctAnswer": "c) To check if the suspected cause is actually the reason for the problem"
  },
  {
    "id": 4,
    "questionText": "What does the \"Implement the Solution\" step entail in troubleshooting?",
    "options": [
      "a) Coming up with a plan to fix the problem",
      "b) Verifying full system functionality",
      "c) Doing whatever is necessary to fix the problem according to the plan",
      "d) Documenting the problem"
    ],
    "correctAnswer": "c) Doing whatever is necessary to fix the problem according to the plan"
  },
  {
    "id": 5,
    "questionText": "Why is it necessary to verify full system functionality after implementing a solution?",
    "options": [
      "a) To identify a new problem",
      "b) To document the steps taken",
      "c) To make sure that the problem is fully resolved and the system is working properly again",
      "d) To establish a new theory"
    ],
    "correctAnswer": "c) To make sure that the problem is fully resolved and the system is working properly again"
  },
  {
    "id": 6,
    "questionText": "What is the final step in the systematic process of troubleshooting?",
    "options": [
      "a) Implement the Solution",
      "b) Verify Full System Functionality",
      "c) Document Findings, Actions, and Outcomes",
      "d) Establish a Plan of Action"
    ],
    "correctAnswer": "c) Document Findings, Actions, and Outcomes"
  },
  {
    "id": 7,
    "questionText": "What is a common quick fix for many computer problems, often called \"giving the computer a nap\"?",
    "options": [
      "a) Updating drivers",
      "b) Reinstalling applications",
      "c) Scanning for malware",
      "d) Restarting the computer"
    ],
    "correctAnswer": "d) Restarting the computer"
  },
  {
    "id": 8,
    "questionText": "Effective troubleshooting helps prevent downtime. What is downtime?",
    "options": [
      "a) When an application freezes",
      "b) When a peripheral device is unresponsive",
      "c) When a computer system is not operational",
      "d) When a security breach occurs"
    ],
    "correctAnswer": "c) When a computer system is not operational"
  },
  {
    "id": 9,
    "questionText": "Why is troubleshooting important for data integrity?",
    "options": [
      "a) It ensures data is always backed up to the cloud",
      "b) It helps encrypt data for secure transmission",
      "c) It helps identify the source of data corruption and prevent it from happening again",
      "d) It improves the speed of data processing"
    ],
    "correctAnswer": "c) It helps identify the source of data corruption and prevent it from happening again"
  },
  {
    "id": 10,
    "questionText": "How does troubleshooting contribute to enhancing system performance?",
    "options": [
      "a) By always replacing hardware components",
      "b) By only focusing on software bugs",
      "c) By identifying reasons for slow performance, such as insufficient memory or software conflicts",
      "d) By installing new operating systems"
    ],
    "correctAnswer": "c) By identifying reasons for slow performance, such as insufficient memory or software conflicts"
  },
  {
    "id": 11,
    "questionText": "An application that stops responding and cannot be used is called:",
    "options": [
      "a) Software conflict",
      "b) Operating system crash",
      "c) Application freezing",
      "d) Unresponsive peripheral"
    ],
    "correctAnswer": "c) Application freezing"
  },
  {
    "id": 12,
    "questionText": "What is a common solution for an unresponsive peripheral device like a mouse or keyboard?",
    "options": [
      "a) Reinstalling the operating system",
      "b) Buying a new device immediately",
      "c) Checking connections, unplugging and replugging, or updating drivers",
      "d) Running Disk Cleanup"
    ],
    "correctAnswer": "c) Checking connections, unplugging and replugging, or updating drivers"
  },
  {
    "id": 13,
    "questionText": "When should you use the power button to force a computer to shut down?",
    "options": [
      "a) For regular shutdowns",
      "b) When the computer is responding normally",
      "c) Only as a last resort when the computer is not responding to normal commands",
      "d) Before installing software updates"
    ],
    "correctAnswer": "c) Only as a last resort when the computer is not responding to normal commands"
  },
  {
    "id": 14,
    "questionText": "What is a common hardware issue that can cause a computer to slow down, freeze, or shut down unexpectedly?",
    "options": [
      "a) Cable disconnection",
      "b) Driver updates",
      "c) Overheating",
      "d) Insufficient storage"
    ],
    "correctAnswer": "c) Overheating"
  },
  {
    "id": 15,
    "questionText": "What is the benefit of proper cable management in a workspace?",
    "options": [
      "a) It makes cables more difficult to identify",
      "b) It increases the risk of tripping",
      "c) It prevents accidental disconnections and reduces the risk of tripping or damaging cables",
      "d) It causes overheating"
    ],
    "correctAnswer": "c) It prevents accidental disconnections and reduces the risk of tripping or damaging cables"
  },
  {
    "id": 16,
    "questionText": "What is crucial for preventing overheating and ensuring a computer runs efficiently?",
    "options": [
      "a) Placing the computer in a confined space",
      "b) Blocking the vents and fans",
      "c) Proper ventilation",
      "d) Disconnecting external devices"
    ],
    "correctAnswer": "c) Proper ventilation"
  },
  {
    "id": 17,
    "questionText": "Which of the following are common signs of RAM issues?",
    "options": [
      "a) Strange clicking noises from the computer",
      "b) Displaying error messages about the disk",
      "c) Frequent system crashes, Blue Screens Of Death (BSOD), and poor performance",
      "d) Slow internet connection"
    ],
    "correctAnswer": "c) Frequent system crashes, Blue Screens Of Death (BSOD), and poor performance"
  },
  {
    "id": 18,
    "questionText": "Which tool is recommended for checking for RAM issues?",
    "options": [
      "a) CrystalDiskInfo",
      "b) SMART status checks",
      "c) Windows Memory Diagnostic or MemTest86",
      "d) Task Manager"
    ],
    "correctAnswer": "c) Windows Memory Diagnostic or MemTest86"
  },
  {
    "id": 19,
    "questionText": "Symptoms of hard drive failures include:",
    "options": [
      "a) Clear display on monitor and fast performance",
      "b) Strange noises (like clicking), slow performance, frequent crashes, and corrupted files",
      "c) Stable power supply and secure network connection",
      "d) Automatic software updates and strong passwords"
    ],
    "correctAnswer": "b) Strange noises (like clicking), slow performance, frequent crashes, and corrupted files"
  },
  {
    "id": 20,
    "questionText": "What is an essential step when replacing a hard drive?",
    "options": [
      "a) Immediately install the operating system without backup",
      "b) Back up your data before disconnecting the old drive",
      "c) Keep the computer plugged in during replacement",
      "d) Install new RAM without checking compatibility"
    ],
    "correctAnswer": "b) Back up your data before disconnecting the old drive"
  },
  {
    "id": 21,
    "questionText": "What is the benefit of regularly installing updates and software patches?",
    "options": [
      "a) It slows down system performance",
      "b) It makes the system more vulnerable to attacks",
      "c) It ensures that software is protected against vulnerabilities and performs optimally",
      "d) It only affects cosmetic changes to the software"
    ],
    "correctAnswer": "c) It ensures that software is protected against vulnerabilities and performs optimally"
  },
  {
    "id": 22,
    "questionText": "What is the process of identifying and removing malware infections?",
    "options": [
      "a) Reinstalling the operating system",
      "b) Changing hardware components",
      "c) Using antivirus software to scan for and remove malware",
      "d) Deleting unnecessary files"
    ],
    "correctAnswer": "c) Using antivirus software to scan for and remove malware"
  },
  {
    "id": 23,
    "questionText": "What is a key characteristic of strong passwords?",
    "options": [
      "a) Easy to remember and short",
      "b) Common words or personal information",
      "c) A combination of upper and lower-case letters, numbers, and special characters",
      "d) Using the same password for all accounts"
    ],
    "correctAnswer": "c) A combination of upper and lower-case letters, numbers, and special characters"
  },
  {
    "id": 24,
    "questionText": "What are the benefits of effective data management and regular backups?",
    "options": [
      "a) They only help in recovering data after a disaster",
      "b) They increase storage space on the primary drive",
      "c) They help free up resources, improve efficiency, and ensure data security",
      "d) They are primarily for preventing malware"
    ],
    "correctAnswer": "c) They help free up resources, improve efficiency, and ensure data security"
  },
  {
    "id": 25,
    "questionText": "What is a method for managing storage space on a computer?",
    "options": [
      "a) Always keeping all downloaded files",
      "b) Deleting unnecessary files and moving large files to external/cloud storage",
      "c) Increasing RAM capacity",
      "d) Disconnecting peripheral devices"
    ],
    "correctAnswer": "b) Deleting unnecessary files and moving large files to external/cloud storage"
  },
  {
    "id": 26,
    "questionText": "Which of the following is an example of an external storage device used for data backup?",
    "options": [
      "a) Google Drive",
      "b) USB flash drive",
      "c) Hard Disk Drive (internal)",
      "d) RAM"
    ],
    "correctAnswer": "b) USB flash drive"
  },
  {
    "id": 27,
    "questionText": "What is the primary benefit of utilizing cloud solutions for data backup?",
    "options": [
      "a) Provides a physical copy of your data",
      "b) Offers faster local access",
      "c) Allows access to files from anywhere with an internet connection",
      "d) Eliminates the need for strong passwords"
    ],
    "correctAnswer": "c) Allows access to files from anywhere with an internet connection"
  },
  {
    "id": 28,
    "questionText": "What should you do first if an application freezes on your computer?",
    "options": [
      "a) Reinstall the application",
      "b) Restart the computer immediately",
      "c) Press Ctrl + Alt + Delete to open Task Manager and \"End Task\"",
      "d) Buy new hardware"
    ],
    "correctAnswer": "c) Press Ctrl + Alt + Delete to open Task Manager and \"End Task\""
  },
  {
    "id": 29,
    "questionText": "What is the purpose of documenting findings, actions, and outcomes in troubleshooting?",
    "options": [
      "a) To make the problem more complex",
      "b) To prevent others from fixing similar problems",
      "c) For future reference and to help troubleshoot similar problems more efficiently",
      "d) To ensure the problem persists"
    ],
    "correctAnswer": "c) For future reference and to help troubleshoot similar problems more efficiently"
  },
  {
    "id": 30,
    "questionText": "In troubleshooting, when you come up with a theory about what might be causing a problem, you are in which step?",
    "options": [
      "a) Identify Problem",
      "b) Establish a Theory of Probable Cause",
      "c) Test the Theory",
      "d) Establish a Plan of Action"
    ],
    "correctAnswer": "b) Establish a Theory of Probable Cause"
  },
  {
    "id": 31,
    "questionText": "What is the significance of troubleshooting in businesses?",
    "options": [
      "a) It only applies to personal computers",
      "b) It helps increase system downtime",
      "c) It helps prevent costly downtime and maintains productivity",
      "d) It eliminates the need for any technical support"
    ],
    "correctAnswer": "c) It helps prevent costly downtime and maintains productivity"
  },
  {
    "id": 32,
    "questionText": "What is the goal of resolving software conflicts?",
    "options": [
      "a) To install more conflicting software",
      "b) To make applications run slower",
      "c) To prevent system instability by identifying and uninstalling conflicting software or updating affected applications",
      "d) To ignore compatibility issues"
    ],
    "correctAnswer": "c) To prevent system instability by identifying and uninstalling conflicting software or updating affected applications"
  },
  {
    "id": 33,
    "questionText": "Why are operating system updates essential for security?",
    "options": [
      "a) They only change the user interface",
      "b) They automatically create strong passwords",
      "c) They protect the computer from newly discovered security vulnerabilities",
      "d) They reduce the need for antivirus software"
    ],
    "correctAnswer": "c) They protect the computer from newly discovered security vulnerabilities"
  },
  {
    "id": 34,
    "questionText": "What does Two-Factor Authentication (2FA) add to account security?",
    "options": [
      "a) A simpler login process",
      "b) An extra layer of security, requiring a second piece of information after the password",
      "c) The ability to use weaker passwords",
      "d) Faster access to public Wi-Fi"
    ],
    "correctAnswer": "b) An extra layer of security, requiring a second piece of information after the password"
  },
  {
    "id": 35,
    "questionText": "Why is it advisable to avoid public Wi-Fi for sensitive transactions?",
    "options": [
      "a) Public Wi-Fi is usually slower",
      "b) Public Wi-Fi requires more complex passwords",
      "c) Public Wi-Fi networks are often less secure and can put sensitive information at risk",
      "d) Public Wi-Fi is only for entertainment purposes"
    ],
    "correctAnswer": "c) Public Wi-Fi networks are often less secure and can put sensitive information at risk"
  },
  {
    "id": 36,
    "questionText": "How can you identify if an email or message is a scam?",
    "options": [
      "a) By always clicking on the links provided",
      "b) By immediately providing requested personal information",
      "c) By being skeptical of unsolicited requests for personal information and verifying the source",
      "d) By forwarding it to all your contacts"
    ],
    "correctAnswer": "c) By being skeptical of unsolicited requests for personal information and verifying the source"
  },
  {
    "id": 37,
    "questionText": "What does \"Cooling and Overheating\" refer to in the context of computer health?",
    "options": [
      "a) Installing more fans for aesthetic purposes",
      "b) Preventing high temperatures that can reduce a CPU's lifespan, through proper cooling and cleaning",
      "c) Using a computer in a hot environment",
      "d) The speed of the internet connection"
    ],
    "correctAnswer": "b) Preventing high temperatures that can reduce a CPU's lifespan, through proper cooling and cleaning"
  },
  {
    "id": 38,
    "questionText": "The phrase \"Tech Detective Work\" is used to describe troubleshooting. Why?",
    "options": [
      "a) Because it involves only guessing the problem",
      "b) Because it requires physical tools only",
      "c) Because you solve tech problems by following clues and gathering evidence",
      "d) Because it is a random process"
    ],
    "correctAnswer": "c) Because you solve tech problems by following clues and gathering evidence"
  },
  {
    "id": 39,
    "questionText": "What percentage of software issues can be fixed by simply restarting a computer?",
    "options": [
      "a) 10%",
      "b) 25%",
      "c) Up to 50%",
      "d) 100%"
    ],
    "correctAnswer": "c) Up to 50%"
  },
  {
    "id": 40,
    "questionText": "What is the purpose of using tools like memory diagnostic apps (e.g., MemTest86)?",
    "options": [
      "a) To optimize hard drive performance",
      "b) To check for malware infections",
      "c) To check for RAM issues",
      "d) To manage cable connections"
    ],
    "correctAnswer": "c) To check for RAM issues"
  },
  {
    "id": 41,
    "questionText": "What percentage of all computer crashes and Blue Screens Of Death (BSOD) can be accounted for by RAM errors?",
    "options": [
      "a) Up to 5%",
      "b) Up to 10%",
      "c) Up to 20%",
      "d) Over 50%"
    ],
    "correctAnswer": "d) Over 50%"
  },
  {
    "id": 42,
    "questionText": "How does \"Space Saver\" relate to managing computer storage?",
    "options": [
      "a) It refers to buying more physical storage",
      "b) It means keeping all files, organized or not",
      "c) It means keeping storage clean by deleting unnecessary files, which helps the computer run faster",
      "d) It's a method for securing data"
    ],
    "correctAnswer": "c) It means keeping storage clean by deleting unnecessary files, which helps the computer run faster"
  },
  {
    "id": 43,
    "questionText": "In 2017, the WannaCry ransomware attack exploited a vulnerability in older Windows systems that had been patched in a security update. This highlights the importance of:",
    "options": [
      "a) Using only open-source software",
      "b) Avoiding all software updates",
      "c) Regularly installing software updates for security",
      "d) Only using strong passwords"
    ],
    "correctAnswer": "c) Regularly installing software updates for security"
  },
  {
    "id": 44,
    "questionText": "What percentage of people are estimated to have never backed up their data?",
    "options": [
      "a) 10%",
      "b) 30%",
      "c) 60%",
      "d) 90%"
    ],
    "correctAnswer": "c) 60%"
  },
  {
    "id": 45,
    "questionText": "Which resource can provide solutions to more complex computer problems through forums, tutorials, and FAQs?",
    "options": [
      "a) Built-in help features",
      "b) Device drivers",
      "c) Internet Resources (e.g., Stack Exchange, Reddit, YouTube)",
      "d) Physical computer parts"
    ],
    "correctAnswer": "c) Internet Resources (e.g., Stack Exchange, Reddit, YouTube)"
  },
  {
    "id": 46,
    "questionText": "When assisting others with computer problems, what is important for effective communication?",
    "options": [
      "a) To only provide solutions without listening to their descriptions",
      "b) To use highly technical jargon",
      "c) To clearly explain the issue and troubleshooting steps, and listen to their descriptions",
      "d) To tell them to figure it out themselves"
    ],
    "correctAnswer": "c) To clearly explain the issue and troubleshooting steps, and listen to their descriptions"
  },
  {
    "id": 47,
    "questionText": "Sharing troubleshooting experiences and solutions with others to help peers understand how to fix common issues is an example of:",
    "options": [
      "a) Problem isolation",
      "b) Algorithmic bias",
      "c) Transferring Troubleshooting Skills to Assist Others",
      "d) Ignoring documentation"
    ],
    "correctAnswer": "c) Transferring Troubleshooting Skills to Assist Others"
  },
  {
    "id": 48,
    "questionText": "What is the process of finding and fixing errors in an algorithm or flowchart?",
    "options": [
      "a) Dry run",
      "b) Implementation",
      "c) Simulation",
      "d) Debugging (Though it appears in Unit 7, it is a general troubleshooting technique)"
    ],
    "correctAnswer": "d) Debugging (Though it appears in Unit 7, it is a general troubleshooting technique)"
  },
  {
    "id": 49,
    "questionText": "What does the \"Establish a Plan of Action to Resolve the Problem\" step involve?",
    "options": [
      "a) Only documenting the problem",
      "b) Testing the theory",
      "c) Deciding what steps need to be taken to resolve the issue",
      "d) Verifying full system functionality"
    ],
    "correctAnswer": "c) Deciding what steps need to be taken to resolve the issue"
  },
  {
    "id": 50,
    "questionText": "What does \"Data Integrity\" mean in the context of troubleshooting?",
    "options": [
      "a) Ensuring data is always accessible",
      "b) Protecting data from physical damage",
      "c) Ensuring that data is accurate and reliable",
      "d) Compressing data to save space"
    ],
    "correctAnswer": "c) Ensuring that data is accurate and reliable"
  }
],
  "Software System": [
  {
    "id": 1,
    "questionText": "What is software defined as?",
    "options": [
      "a) The physical parts of a computer system",
      "b) A collection of programs and instructions that tell a computer what to do and how to do it",
      "c) The user interface of a computer",
      "d) External devices connected to a computer"
    ],
    "correctAnswer": "b) A collection of programs and instructions that tell a computer what to do and how to do it"
  },
  {
    "id": 2,
    "questionText": "Which type of software is designed to manage the system resources and provide a platform for application software to run?",
    "options": [
      "a) Application software",
      "b) Utility software",
      "c) System software",
      "d) Device drivers"
    ],
    "correctAnswer": "c) System software"
  },
  {
    "id": 3,
    "questionText": "Which of the following is an example of system software?",
    "options": [
      "a) Microsoft Word",
      "b) Google Chrome",
      "c) Microsoft Windows",
      "d) Minecraft"
    ],
    "correctAnswer": "c) Microsoft Windows"
  },
  {
    "id": 4,
    "questionText": "Which type of software is designed to help users perform specific tasks?",
    "options": [
      "a) System software",
      "b) Application software",
      "c) Operating system",
      "d) Device drivers"
    ],
    "correctAnswer": "b) Application software"
  },
  {
    "id": 5,
    "questionText": "Which of the following is an example of application software?",
    "options": [
      "a) Linux",
      "b) Printer drivers",
      "c) Antivirus software",
      "d) Microsoft Word"
    ],
    "correctAnswer": "d) Microsoft Word"
  },
  {
    "id": 6,
    "questionText": "What is the primary difference in purpose between system software and application software?",
    "options": [
      "a) System software is for entertainment, application software for work",
      "b) Application software manages hardware, system software performs specific tasks",
      "c) System software manages and operates hardware, application software helps users perform specific tasks",
      "d) System software is installed by the user, application software is pre-installed"
    ],
    "correctAnswer": "c) System software manages and operates hardware, application software helps users perform specific tasks"
  },
  {
    "id": 7,
    "questionText": "What is the main function of an Operating System (OS)?",
    "options": [
      "a) To exclusively run applications",
      "b) To only manage hardware resources",
      "c) To manage all the hardware and software on a computer, acting as an intermediary",
      "d) To provide specialized task software"
    ],
    "correctAnswer": "c) To manage all the hardware and software on a computer, acting as an intermediary"
  },
  {
    "id": 8,
    "questionText": "Which of the following is an example of a Graphical User Interface (GUI) operating system?",
    "options": [
      "a) Linux Command-Line Interface",
      "b) Disk Operating System (DOS)",
      "c) Microsoft Windows",
      "d) UNIX (Not explicitly mentioned as GUI, but known for CLI)"
    ],
    "correctAnswer": "c) Microsoft Windows"
  },
  {
    "id": 9,
    "questionText": "What is the primary function of the operating system regarding running applications?",
    "options": [
      "a) To ensure applications interfere with each other",
      "b) To prevent applications from running simultaneously",
      "c) To load applications into memory, allocate resources, and manage their execution efficiently",
      "d) To only display applications on the screen"
    ],
    "correctAnswer": "c) To load applications into memory, allocate resources, and manage their execution efficiently"
  },
  {
    "id": 10,
    "questionText": "What are utility programs?",
    "options": [
      "a) Core operating system components",
      "b) Software for specific user tasks",
      "c) Essential components of system software that enhance the functionality of a computer system",
      "d) Device drivers"
    ],
    "correctAnswer": "c) Essential components of system software that enhance the functionality of a computer system"
  },
  {
    "id": 11,
    "questionText": "Which utility program scans your hard drive for temporary files and other unnecessary items that can be safely deleted?",
    "options": [
      "a) Antivirus software",
      "b) Backup software",
      "c) File compression tools",
      "d) Disk Cleanup"
    ],
    "correctAnswer": "d) Disk Cleanup"
  },
  {
    "id": 12,
    "questionText": "Which utility program is used to scan files and incoming data for known viruses and malware signatures?",
    "options": [
      "a) Disk Cleanup",
      "b) Backup software",
      "c) File compression tools",
      "d) Antivirus software"
    ],
    "correctAnswer": "d) Antivirus software"
  },
  {
    "id": 13,
    "questionText": "What is the primary function of backup software?",
    "options": [
      "a) To clean temporary files from the hard drive",
      "b) To compress files for faster transfer",
      "c) To schedule regular backups of files and folders to external drives, cloud storage, or network locations",
      "d) To detect and remove malware"
    ],
    "correctAnswer": "c) To schedule regular backups of files and folders to external drives, cloud storage, or network locations"
  },
  {
    "id": 14,
    "questionText": "What do file compression tools primarily do?",
    "options": [
      "a) Scan for viruses",
      "b) Restore deleted files",
      "c) Reduce file size to save storage space and make file transfer faster",
      "d) Manage network resources"
    ],
    "correctAnswer": "c) Reduce file size to save storage space and make file transfer faster"
  },
  {
    "id": 15,
    "questionText": "What is the role of device drivers in a computer system?",
    "options": [
      "a) To manage the operating system's core functions",
      "b) To run user applications",
      "c) To facilitate communication between hardware devices and the operating system",
      "d) To provide internet access"
    ],
    "correctAnswer": "c) To facilitate communication between hardware devices and the operating system"
  },
  {
    "id": 16,
    "questionText": "What does a printer driver do?",
    "options": [
      "a) Helps the computer display images on screen",
      "b) Manages internal memory",
      "c) Helps the computer send the correct signals to the printer so it can print documents",
      "d) Scans for malware"
    ],
    "correctAnswer": "c) Helps the computer send the correct signals to the printer so it can print documents"
  },
  {
    "id": 17,
    "questionText": "What is word processing software used for?",
    "options": [
      "a) Organizing, analyzing, and storing data in tabular form",
      "b) Creating, editing, and managing visual content",
      "c) Creating, editing, formatting, and printing text-based documents",
      "d) Playing games and multimedia"
    ],
    "correctAnswer": "c) Creating, editing, formatting, and printing text-based documents"
  },
  {
    "id": 18,
    "questionText": "Which of the following is an example of word processing software?",
    "options": [
      "a) Microsoft Excel",
      "b) Adobe Photoshop",
      "c) Microsoft Word",
      "d) Google Chrome"
    ],
    "correctAnswer": "c) Microsoft Word"
  },
  {
    "id": 19,
    "questionText": "What are the main functions of spreadsheet software?",
    "options": [
      "a) Creating and editing text documents",
      "b) Designing logos and illustrations",
      "c) Organizing, analyzing, and storing data in tabular form, performing calculations, and creating charts",
      "d) Managing hardware resources"
    ],
    "correctAnswer": "c) Organizing, analyzing, and storing data in tabular form, performing calculations, and creating charts"
  },
  {
    "id": 20,
    "questionText": "Which of the following is an example of spreadsheet software?",
    "options": [
      "a) Apple Pages",
      "b) Microsoft Excel",
      "c) Adobe Illustrator",
      "d) VLC Media Player"
    ],
    "correctAnswer": "b) Microsoft Excel"
  },
  {
    "id": 21,
    "questionText": "What is the primary purpose of graphic design software?",
    "options": [
      "a) To create and edit text documents",
      "b) To organize data in tabular form",
      "c) To create, edit, and manage visual content like drawings, paintings, and photo editing",
      "d) To manage computer networks"
    ],
    "correctAnswer": "c) To create, edit, and manage visual content like drawings, paintings, and photo editing"
  },
  {
    "id": 22,
    "questionText": "How can graphic design software be used in the field of education?",
    "options": [
      "a) To automate administrative tasks",
      "b) To manage student grades",
      "c) To create visual learning materials, presentations, and educational illustrations (Inferred from general use cases of graphic design software, not explicitly stated how in education, but aligned with its primary function)",
      "d) To develop new programming languages"
    ],
    "correctAnswer": "c) To create visual learning materials, presentations, and educational illustrations (Inferred from general use cases of graphic design software, not explicitly stated how in education, but aligned with its primary function)"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an example of graphic design software?",
    "options": [
      "a) Google Docs",
      "b) LibreOffice Calc",
      "c) Adobe Photoshop",
      "d) Microsoft Word"
    ],
    "correctAnswer": "c) Adobe Photoshop"
  },
  {
    "id": 24,
    "questionText": "What are the two main types of user interfaces provided by operating systems?",
    "options": [
      "a) Input/Output Interfaces and Processing Interfaces",
      "b) Graphical User Interfaces (GUIs) and Command-Line Interfaces (CLIs)",
      "c) Hardware Interfaces and Software Interfaces",
      "d) Network Interfaces and Storage Interfaces"
    ],
    "correctAnswer": "b) Graphical User Interfaces (GUIs) and Command-Line Interfaces (CLIs)"
  },
  {
    "id": 25,
    "questionText": "What is the primary characteristic of a Command-Line Interface (CLI)?",
    "options": [
      "a) It uses visual elements like icons and menus",
      "b) It requires users to type text commands to perform specific tasks",
      "c) It is less flexible and powerful than a GUI",
      "d) It is generally easier for beginners to use"
    ],
    "correctAnswer": "b) It requires users to type text commands to perform specific tasks"
  },
  {
    "id": 26,
    "questionText": "What does the term \"Plug and Play (PnP)\" device mean?",
    "options": [
      "a) It requires manual configuration after connection",
      "b) It is incompatible with most operating systems",
      "c) It automatically configures itself when connected to a computer, simplifying installation",
      "d) It can only be used for gaming"
    ],
    "correctAnswer": "c) It automatically configures itself when connected to a computer, simplifying installation"
  },
  {
    "id": 27,
    "questionText": "What is the significance of data backups?",
    "options": [
      "a) They only protect against accidental deletion",
      "b) They increase the risk of data loss",
      "c) They ensure you can recover your data if something goes wrong, such as accidental deletion, hardware failure, or a computer virus",
      "d) They are primarily for enhancing system performance"
    ],
    "correctAnswer": "c) They ensure you can recover your data if something goes wrong, such as accidental deletion, hardware failure, or a computer virus"
  },
  {
    "id": 28,
    "questionText": "How can data backups be performed?",
    "options": [
      "a) By only storing data on the main hard drive",
      "b) By scheduling regular backups to external drives, cloud storage, or network locations",
      "c) By manually deleting all old files",
      "d) Both b and c. (Should be 'b' and not 'c')"
    ],
    "correctAnswer": "b) By scheduling regular backups to external drives, cloud storage, or network locations"
  },
  {
    "id": 29,
    "questionText": "The first computer virus, \"Creeper,\" created in 1971, was an example of what type of program?",
    "options": [
      "a) An application software",
      "b) A utility program",
      "c) An experimental self-replicating program",
      "d) A device driver"
    ],
    "correctAnswer": "c) An experimental self-replicating program"
  },
  {
    "id": 30,
    "questionText": "The first operating system, GM-NAA I/O, was created in the 1950s for which computers?",
    "options": [
      "a) Apple",
      "b) Microsoft",
      "c) IBM",
      "d) Linux"
    ],
    "correctAnswer": "c) IBM"
  },
  {
    "id": 31,
    "questionText": "Which operating system is developed by Google for smartphones and tablets?",
    "options": [
      "a) macOS",
      "b) iOS",
      "c) Windows",
      "d) Android"
    ],
    "correctAnswer": "d) Android"
  },
  {
    "id": 32,
    "questionText": "Which operating system is open-source and used for everything from servers to desktop computers?",
    "options": [
      "a) Windows",
      "b) macOS",
      "c) Linux",
      "d) iOS"
    ],
    "correctAnswer": "c) Linux"
  },
  {
    "id": 33,
    "questionText": "What does the operating system do when you open a web browser while listening to music?",
    "options": [
      "a) It closes the music player to prioritize the browser",
      "b) It only allows one application to run at a time",
      "c) It allocates CPU time and memory to both applications, ensuring they run smoothly",
      "d) It crashes due to resource conflict"
    ],
    "correctAnswer": "c) It allocates CPU time and memory to both applications, ensuring they run smoothly"
  },
  {
    "id": 34,
    "questionText": "What are the key features of a Graphical User Interface (GUI)?",
    "options": [
      "a) Typing text commands only",
      "b) Visual elements such as windows, icons, and menus",
      "c) Limited user interaction",
      "d) Primarily for developers"
    ],
    "correctAnswer": "b) Visual elements such as windows, icons, and menus"
  },
  {
    "id": 35,
    "questionText": "Which company developed macOS?",
    "options": [
      "a) Microsoft",
      "b) Google",
      "c) Apple",
      "d) IBM"
    ],
    "correctAnswer": "c) Apple"
  },
  {
    "id": 36,
    "questionText": "What is the purpose of regularly updating your operating system?",
    "options": [
      "a) To slow down the computer",
      "b) To make it compatible with old hardware",
      "c) To ensure it runs smoothly and is protected from security threats",
      "d) To only change the visual theme"
    ],
    "correctAnswer": "c) To ensure it runs smoothly and is protected from security threats"
  },
  {
    "id": 37,
    "questionText": "What is file compression functionality in utility programs?",
    "options": [
      "a) Encrypting files for security",
      "b) Recovering deleted files",
      "c) Compressing one or multiple files into a single archive format to reduce file size",
      "d) Scanning files for viruses"
    ],
    "correctAnswer": "c) Compressing one or multiple files into a single archive format to reduce file size"
  },
  {
    "id": 38,
    "questionText": "The example of a TV remote control acting as a \"translator\" for a TV is an analogy for which computer component?",
    "options": [
      "a) Operating system",
      "b) Application software",
      "c) Device driver",
      "d) Utility program"
    ],
    "correctAnswer": "c) Device driver"
  },
  {
    "id": 39,
    "questionText": "What does a Graphics Card Driver ensure?",
    "options": [
      "a) The computer can print documents correctly",
      "b) The computer can play audio files",
      "c) The computer can display images and videos correctly on the screen",
      "d) The computer can connect to the internet"
    ],
    "correctAnswer": "c) The computer can display images and videos correctly on the screen"
  },
  {
    "id": 40,
    "questionText": "AI-based tools like Grammarly and Microsoft Editor are revolutionizing word processing by providing:",
    "options": [
      "a) New font styles",
      "b) Advanced grammar, style, and tone suggestions",
      "c) Automatic image insertion",
      "d) Cloud storage integration"
    ],
    "correctAnswer": "b) Advanced grammar, style, and tone suggestions"
  },
  {
    "id": 41,
    "questionText": "AI-based tools in spreadsheet software, such as Microsoft's Ideas in Excel, help users by:",
    "options": [
      "a) Automatically fixing all data errors",
      "b) Providing insights, suggesting formulas, and creating charts automatically",
      "c) Only changing the color schemes of spreadsheets",
      "d) Converting spreadsheets into word documents"
    ],
    "correctAnswer": "b) Providing insights, suggesting formulas, and creating charts automatically"
  },
  {
    "id": 42,
    "questionText": "Which graphic design software is an open-source alternative to Adobe Photoshop?",
    "options": [
      "a) Adobe Illustrator",
      "b) CorelDRAW",
      "c) Canva",
      "d) GNU Image Manipulation Program (GIMP)"
    ],
    "correctAnswer": "d) GNU Image Manipulation Program (GIMP)"
  },
  {
    "id": 43,
    "questionText": "In business, how does application software primarily contribute?",
    "options": [
      "a) By automating hardware repairs",
      "b) By streamlining operations, improving productivity, and enhancing communication",
      "c) By installing operating system updates",
      "d) By detecting malware infections"
    ],
    "correctAnswer": "b) By streamlining operations, improving productivity, and enhancing communication"
  },
  {
    "id": 44,
    "questionText": "In education, how does application software enhance the learning experience?",
    "options": [
      "a) By replacing teachers with AI",
      "b) By solely managing administrative efficiency",
      "c) By providing online learning platforms, virtual classrooms, and access to educational resources (Inferred from general role, aligns with definition)",
      "d) By only focusing on game-based learning"
    ],
    "correctAnswer": "c) By providing online learning platforms, virtual classrooms, and access to educational resources (Inferred from general role, aligns with definition)"
  },
  {
    "id": 45,
    "questionText": "What is the role of software in a computing system?",
    "options": [
      "a) To exclusively manage hardware resources",
      "b) To solely provide a user interface",
      "c) To act as the intermediary between the user and the hardware, enabling specific tasks",
      "d) To operate independently of user input"
    ],
    "correctAnswer": "c) To act as the intermediary between the user and the hardware, enabling specific tasks"
  },
  {
    "id": 46,
    "questionText": "Which operating system feature allows users to keep track of running applications and their resource usage?",
    "options": [
      "a) Disk Cleanup",
      "b) Antivirus Software",
      "c) Task Manager (Windows) or Activity Monitor (Mac)",
      "d) File compression tools"
    ],
    "correctAnswer": "c) Task Manager (Windows) or Activity Monitor (Mac)"
  },
  {
    "id": 47,
    "questionText": "When connecting a new device to your computer, what often needs to be installed?",
    "options": [
      "a) Application software",
      "b) Utility programs",
      "c) A device driver",
      "d) Another operating system"
    ],
    "correctAnswer": "c) A device driver"
  },
  {
    "id": 48,
    "questionText": "What is the purpose of the <style> tag in an HTML document?",
    "options": [
      "a) To link an external CSS file",
      "b) To define inline styles directly on an element",
      "c) To include CSS rules within the <head> section for the entire page",
      "d) To add JavaScript code"
    ],
    "correctAnswer": "c) To include CSS rules within the <head> section for the entire page"
  },
  {
    "id": 49,
    "questionText": "Which word processing software is web-based and allows for real-time collaboration?",
    "options": [
      "a) Microsoft Word",
      "b) Apple Pages",
      "c) LibreOffice Writer",
      "d) Google Docs"
    ],
    "correctAnswer": "d) Google Docs"
  },
  {
    "id": 50,
    "questionText": "What does the term \"digital literacy\" mean in the context of learning web development?",
    "options": [
      "a) The ability to only use pre-built websites",
      "b) The understanding of how websites are made using HTML, CSS, and JavaScript",
      "c) The skill to troubleshoot complex software issues",
      "d) The ability to only create graphic designs"
    ],
    "correctAnswer": "b) The understanding of how websites are made using HTML, CSS, and JavaScript"
  }
],
  "Introduction to Computer Networks": [
  {
    "id": 1,
    "questionText": "What is the main purpose of a computer network?",
    "options": [
      "a) To operate individual computers faster",
      "b) To exchange data and operate together between linked devices and computers",
      "c) To secure data locally without external connections",
      "d) To only transfer files using USB drives"
    ],
    "correctAnswer": "b) To exchange data and operate together between linked devices and computers"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a key objective of computer networks?",
    "options": [
      "a) Increasing computational power",
      "b) Enabling resource sharing, data communication, and collaboration",
      "c) Enhancing graphic capabilities",
      "d) Improving software development"
    ],
    "correctAnswer": "b) Enabling resource sharing, data communication, and collaboration"
  },
  {
    "id": 3,
    "questionText": "What are nodes in a computer network?",
    "options": [
      "a) The physical connections between devices",
      "b) Devices that are connected to the network, such as computers, smartphones, and printers",
      "c) Rules for data exchange",
      "d) Programs that manage network resources"
    ],
    "correctAnswer": "b) Devices that are connected to the network, such as computers, smartphones, and printers"
  },
  {
    "id": 4,
    "questionText": "What is data communication?",
    "options": [
      "a) The process of storing data on a single device",
      "b) The exchange of data between a sender and a receiver through a communication medium",
      "c) The process of converting data to binary",
      "d) The creation of network topologies"
    ],
    "correctAnswer": "b) The exchange of data between a sender and a receiver through a communication medium"
  },
  {
    "id": 5,
    "questionText": "Which of the following is NOT a basic component of data communication?",
    "options": [
      "a) Sender",
      "b) Receiver",
      "c) Protocol",
      "d) Network topology"
    ],
    "correctAnswer": "d) Network topology"
  },
  {
    "id": 6,
    "questionText": "What is the role of a router in a computer network?",
    "options": [
      "a) To connect devices in a network and facilitate communication",
      "b) To provide a physical medium for data transfer",
      "c) To filter incoming and outgoing network traffic",
      "d) To interconnect networks and direct data packets between them"
    ],
    "correctAnswer": "d) To interconnect networks and direct data packets between them"
  },
  {
    "id": 7,
    "questionText": "How does a switch work to forward data to the correct device?",
    "options": [
      "a) By broadcasting data to all connected devices every time",
      "b) By using IP addresses to route data between networks",
      "c) By reading the destination MAC address and sending the packet only to the device with that address",
      "d) By converting analog signals to digital signals"
    ],
    "correctAnswer": "c) By reading the destination MAC address and sending the packet only to the device with that address"
  },
  {
    "id": 8,
    "questionText": "What is an Access Point (AP)?",
    "options": [
      "a) A device that transmits data packets between networks",
      "b) A physical medium for data transfer",
      "c) A networking device that facilitates the connection of wireless devices to a wired network",
      "d) A software that manages network resources"
    ],
    "correctAnswer": "c) A networking device that facilitates the connection of wireless devices to a wired network"
  },
  {
    "id": 9,
    "questionText": "What are network topologies?",
    "options": [
      "a) Types of network cables",
      "b) Rules for data communication",
      "c) Methods used to define the arrangement of different devices in a computer network",
      "d) Software for managing network security"
    ],
    "correctAnswer": "c) Methods used to define the arrangement of different devices in a computer network"
  },
  {
    "id": 10,
    "questionText": "In a Bus topology, how are all devices connected?",
    "options": [
      "a) To a central hub or switch",
      "b) In a circular pathway with other devices",
      "c) To every other device (mesh)",
      "d) To a single communication line called a bus"
    ],
    "correctAnswer": "d) To a single communication line called a bus"
  },
  {
    "id": 11,
    "questionText": "What is a characteristic of a Bus topology?",
    "options": [
      "a) High redundancy and reliability",
      "b) Data travels in one direction through each device",
      "c) Easy to set up, but if the main cable fails, the whole network goes down",
      "d) All devices are connected to a central switch"
    ],
    "correctAnswer": "c) Easy to set up, but if the main cable fails, the whole network goes down"
  },
  {
    "id": 12,
    "questionText": "In a Star topology, how do all nodes communicate with others?",
    "options": [
      "a) Directly with each other",
      "b) Via a central switch or hub",
      "c) Along a single shared cable",
      "d) Through a circular pathway"
    ],
    "correctAnswer": "b) Via a central switch or hub"
  },
  {
    "id": 13,
    "questionText": "What happens in a Ring topology if one connection fails?",
    "options": [
      "a) The network reroutes data through other links",
      "b) The entire network remains functional",
      "c) The whole network is affected",
      "d) Data transmission becomes full-duplex"
    ],
    "correctAnswer": "c) The whole network is affected"
  },
  {
    "id": 14,
    "questionText": "What is a key advantage of a Mesh topology?",
    "options": [
      "a) Simplicity of setup",
      "b) Low cost",
      "c) High redundancy and reliability because if one link fails, data can be rerouted through other links",
      "d) Data travels in one direction only"
    ],
    "correctAnswer": "c) High redundancy and reliability because if one link fails, data can be rerouted through other links"
  },
  {
    "id": 15,
    "questionText": "In Simplex communication, what is the direction of data transmission?",
    "options": [
      "a) Both directions simultaneously",
      "b) Both directions, but not simultaneously",
      "c) Unidirectional (flows in only one direction)",
      "d) Variable, depending on device"
    ],
    "correctAnswer": "c) Unidirectional (flows in only one direction)"
  },
  {
    "id": 16,
    "questionText": "What is the characteristic of Half-Duplex communication?",
    "options": [
      "a) Data transmission occurs in one direction only",
      "b) Data transmission can occur in both directions, but not simultaneously",
      "c) Data transmission occurs in both directions simultaneously",
      "d) It uses a dedicated communication path"
    ],
    "correctAnswer": "b) Data transmission can occur in both directions, but not simultaneously"
  },
  {
    "id": 17,
    "questionText": "What allows for simultaneous data delivery in both directions?",
    "options": [
      "a) Simplex communication",
      "b) Half-Duplex communication",
      "c) Full-Duplex communication",
      "d) Packet switching"
    ],
    "correctAnswer": "c) Full-Duplex communication"
  },
  {
    "id": 18,
    "questionText": "What is the Physical Layer (Layer 1) of the OSI Model responsible for?",
    "options": [
      "a) Error detection and correction",
      "b) Data transfer between different networks",
      "c) The actual connection between devices, sending unprocessed data bits via a physical medium",
      "d) Managing sessions between applications"
    ],
    "correctAnswer": "c) The actual connection between devices, sending unprocessed data bits via a physical medium"
  },
  {
    "id": 19,
    "questionText": "What are the main functions of the Data Link Layer (Layer 2) in the OSI model?",
    "options": [
      "a) Routing data between networks",
      "b) Managing data flow control and error checking across an entire transfer",
      "c) Error detection and correction, as well as node-to-node data transport",
      "d) Providing network services directly to applications"
    ],
    "correctAnswer": "c) Error detection and correction, as well as node-to-node data transport"
  },
  {
    "id": 20,
    "questionText": "What is the purpose of the Network Layer (Layer 3) in the OSI model?",
    "options": [
      "a) To ensure error-free data transmission from the Physical Layer",
      "b) To manage sessions between applications",
      "c) To determine the best path for data to travel from source to destination between different networks",
      "d) To translate data between the application layer and the network"
    ],
    "correctAnswer": "c) To determine the best path for data to travel from source to destination between different networks"
  },
  {
    "id": 21,
    "questionText": "Which layer of the OSI model ensures that data is transferred reliably from one process to another?",
    "options": [
      "a) Network Layer",
      "b) Session Layer",
      "c) Presentation Layer",
      "d) Transport Layer"
    ],
    "correctAnswer": "d) Transport Layer"
  },
  {
    "id": 22,
    "questionText": "What does the Session Layer (Layer 5) of the OSI Model manage?",
    "options": [
      "a) Data encryption and compression",
      "b) The physical connection between devices",
      "c) Sessions between applications (establishes, maintains, and terminates connections)",
      "d) Routing of data packets"
    ],
    "correctAnswer": "c) Sessions between applications (establishes, maintains, and terminates connections)"
  },
  {
    "id": 23,
    "questionText": "What is the role of the Presentation Layer (Layer 6) in the OSI Model?",
    "options": [
      "a) To provide network services directly to applications",
      "b) To manage data flow control",
      "c) To translate data between the application layer and the network, formatting and encrypting data",
      "d) To manage physical addressing"
    ],
    "correctAnswer": "c) To translate data between the application layer and the network, formatting and encrypting data"
  },
  {
    "id": 24,
    "questionText": "Which layer of the OSI Model is closest to the end user and provides network services directly to applications?",
    "options": [
      "a) Presentation Layer",
      "b) Session Layer",
      "c) Transport Layer",
      "d) Application Layer"
    ],
    "correctAnswer": "d) Application Layer"
  },
  {
    "id": 25,
    "questionText": "How many bits does IPv4 use for its address scheme?",
    "options": [
      "a) 64 bits",
      "b) 32 bits",
      "c) 128 bits",
      "d) 256 bits"
    ],
    "correctAnswer": "b) 32 bits"
  },
  {
    "id": 26,
    "questionText": "How many bits does IPv6 use for its address scheme?",
    "options": [
      "a) 32 bits",
      "b) 64 bits",
      "c) 128 bits",
      "d) 256 bits"
    ],
    "correctAnswer": "c) 128 bits"
  },
  {
    "id": 27,
    "questionText": "What is the purpose of the Domain Name System (DNS)?",
    "options": [
      "a) To assign IP addresses dynamically",
      "b) To secure data communication",
      "c) To translate domain names to IP addresses, making it easier for users to access websites",
      "d) To monitor network traffic"
    ],
    "correctAnswer": "c) To translate domain names to IP addresses, making it easier for users to access websites"
  },
  {
    "id": 28,
    "questionText": "What is the purpose of the Dynamic Host Configuration Protocol (DHCP)?",
    "options": [
      "a) To translate domain names to IP addresses",
      "b) To provide faster but less reliable data transfer",
      "c) To automatically assign IP addresses to devices on a network, simplifying network management",
      "d) To encrypt data for secure communication"
    ],
    "correctAnswer": "c) To automatically assign IP addresses to devices on a network, simplifying network management"
  },
  {
    "id": 29,
    "questionText": "What is the primary function of firewalls in network security?",
    "options": [
      "a) To convert data into a secure format",
      "b) To monitor and control incoming and outgoing network traffic based on predetermined security rules",
      "c) To assign IP addresses",
      "d) To translate domain names"
    ],
    "correctAnswer": "b) To monitor and control incoming and outgoing network traffic based on predetermined security rules"
  },
  {
    "id": 30,
    "questionText": "What is encryption?",
    "options": [
      "a) The process of monitoring network traffic",
      "b) Transforms data into a secure format that can only be read or understood by authorized parties",
      "c) A method for assigning IP addresses",
      "d) A way to translate domain names"
    ],
    "correctAnswer": "b) Transforms data into a secure format that can only be read or understood by authorized parties"
  },
  {
    "id": 31,
    "questionText": "Which of the following is a common threat to network security described as attempts to trick users into revealing sensitive information through deceptive emails or websites?",
    "options": [
      "a) Malware",
      "b) Denial of Service (DoS) Attacks",
      "c) Man-in-the-Middle Attacks",
      "d) Phishing"
    ],
    "correctAnswer": "d) Phishing"
  },
  {
    "id": 32,
    "questionText": "What type of network is used for communication between personal devices within a short range, such as a smartphone and a wireless headset?",
    "options": [
      "a) LAN",
      "b) WAN",
      "c) MAN",
      "d) PAN (Personal Area Network)"
    ],
    "correctAnswer": "d) PAN (Personal Area Network)"
  },
  {
    "id": 33,
    "questionText": "A network that connects computers and devices within a limited area, such as a home, school, or office building is called a:",
    "options": [
      "a) WAN",
      "b) MAN",
      "c) CAN",
      "d) LAN (Local Area Network)"
    ],
    "correctAnswer": "d) LAN (Local Area Network)"
  },
  {
    "id": 34,
    "questionText": "A network that spans a city or a large campus, connecting multiple LANs together, is known as a:",
    "options": [
      "a) PAN",
      "b) LAN",
      "c) MAN (Metropolitan Area Network)",
      "d) WAN"
    ],
    "correctAnswer": "c) MAN (Metropolitan Area Network)"
  },
  {
    "id": 35,
    "questionText": "The Internet is the largest example of which type of network?",
    "options": [
      "a) LAN",
      "b) MAN",
      "c) PAN",
      "d) WAN (Wide Area Network)"
    ],
    "correctAnswer": "d) WAN (Wide Area Network)"
  },
  {
    "id": 36,
    "questionText": "A network that connects multiple LANs within a limited geographical area, such as a university campus or a business park is a:",
    "options": [
      "a) WAN",
      "b) MAN",
      "c) CAN (Campus Area Network)",
      "d) PAN"
    ],
    "correctAnswer": "c) CAN (Campus Area Network)"
  },
  {
    "id": 37,
    "questionText": "In the context of data communication, what is a message?",
    "options": [
      "a) The device that sends the data",
      "b) The set of rules governing data communication",
      "c) The data being communicated",
      "d) The physical path data travels through"
    ],
    "correctAnswer": "c) The data being communicated"
  },
  {
    "id": 38,
    "questionText": "What is a protocol in data communication?",
    "options": [
      "a) The hardware that connects devices",
      "b) The physical path through which data travels",
      "c) A set of rules governing data communication",
      "d) The content of an email"
    ],
    "correctAnswer": "c) A set of rules governing data communication"
  },
  {
    "id": 39,
    "questionText": "The World Wide Web (WWW) was invented by Tim Berners-Lee in what year?",
    "options": [
      "a) 1985",
      "b) 1989",
      "c) 1991",
      "d) 1995"
    ],
    "correctAnswer": "b) 1989"
  },
  {
    "id": 40,
    "questionText": "What is TCP/IP (Transmission Control Protocol/Internet Protocol)?",
    "options": [
      "a) A single protocol for data transfer",
      "b) The fundamental suite of protocols for internet communication",
      "c) A protocol used only for file transfer",
      "d) A network security method"
    ],
    "correctAnswer": "b) The fundamental suite of protocols for internet communication"
  },
  {
    "id": 41,
    "questionText": "Which TCP/IP protocol ensures reliable data transfer?",
    "options": [
      "a) UDP",
      "b) IP",
      "c) DNS",
      "d) TCP"
    ],
    "correctAnswer": "d) TCP"
  },
  {
    "id": 42,
    "questionText": "What is the role of IP (Internet Protocol) in TCP/IP communications?",
    "options": [
      "a) To ensure reliable data transfer",
      "b) To translate domain names to IP addresses",
      "c) To handle addressing and routing of data packets",
      "d) To automatically assign IP addresses"
    ],
    "correctAnswer": "c) To handle addressing and routing of data packets"
  },
  {
    "id": 43,
    "questionText": "Which of the following is NOT a method of network security mentioned?",
    "options": [
      "a) Firewalls",
      "b) Encryption",
      "c) Antivirus Software",
      "d) Network Topology"
    ],
    "correctAnswer": "d) Network Topology"
  },
  {
    "id": 44,
    "questionText": "Which layer of the OSI model uses IP addresses to route data between networks?",
    "options": [
      "a) Data Link Layer",
      "b) Transport Layer",
      "c) Network Layer",
      "d) Session Layer"
    ],
    "correctAnswer": "c) Network Layer"
  },
  {
    "id": 45,
    "questionText": "The first message sent over the ARPANET, the precursor to the internet, was \"LO.\" What was it meant to be?",
    "options": [
      "a) \"LOAD\"",
      "b) \"LOGIN\"",
      "c) \"HELLO\"",
      "d) \"LINK\""
    ],
    "correctAnswer": "b) \"LOGIN\""
  },
  {
    "id": 46,
    "questionText": "What allows a mobile device to connect to a mobile network, make calls, and send messages?",
    "options": [
      "a) Router",
      "b) Switch",
      "c) Access Point",
      "d) SIM card"
    ],
    "correctAnswer": "d) SIM card"
  },
  {
    "id": 47,
    "questionText": "What does encapsulation ensure in network communication?",
    "options": [
      "a) Converting data into a secure format",
      "b) Wrapping data with protocol information for transmission (Implied by protocols and layering in source, but explicitly stated as a MCQ option in source)",
      "c) Monitoring network traffic",
      "d) Translating domain names to IP addresses"
    ],
    "correctAnswer": "b) Wrapping data with protocol information for transmission (Implied by protocols and layering in source, but explicitly stated as a MCQ option in source)"
  },
  {
    "id": 48,
    "questionText": "A home router often includes what two networking devices?",
    "options": [
      "a) A hub and an Access Point",
      "b) A switch and a modem",
      "c) A switch and a wireless Access Point",
      "d) A router and a firewall"
    ],
    "correctAnswer": "c) A switch and a wireless Access Point"
  },
  {
    "id": 49,
    "questionText": "What is the approximate range of a PAN (Personal Area Network)?",
    "options": [
      "a) A few kilometers [340 of nodes and devices in networks, and explicit in short questions)",
      "b) Up to 10 meters",
      "c) Over 100 meters",
      "d) A software application"
    ],
    "correctAnswer": "b) Up to 10 meters"
  }
],
  "Computational Thinking": [
  {
    "id": 1,
    "questionText": "What is the core definition of Computational Thinking (CT)?",
    "options": [
      "A method of solving problems using mathematical calculations only.",
      "A problem-solving process that involves a set of skills and techniques to solve complex problems in a way that can be executed by a computer.",
      "A technique used exclusively in computer programming.",
      "An approach that ignores real-world applications."
    ],
    "correctAnswer": "A problem-solving process that involves a set of skills and techniques to solve complex problems in a way that can be executed by a computer."
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT one of the key components of Computational Thinking?",
    "options": [
      "Decomposition",
      "Pattern Recognition",
      "Implementation",
      "Abstraction"
    ],
    "correctAnswer": "Implementation"
  },
  {
    "id": 3,
    "questionText": "Decomposition is the method of breaking down a complicated problem into:",
    "options": [
      "Larger, more abstract concepts.",
      "Smaller, more convenient components.",
      "Unrelated tasks.",
      "Mathematical equations."
    ],
    "correctAnswer": "Smaller, more convenient components."
  },
  {
    "id": 4,
    "questionText": "If you break down the task of building a birdhouse into deciding on the design, gathering materials, cutting wood, assembling pieces, painting, and installing, which Computational Thinking component are you using?",
    "options": [
      "Abstraction",
      "Pattern Recognition",
      "Decomposition",
      "Algorithm Design"
    ],
    "correctAnswer": "Decomposition"
  },
  {
    "id": 5,
    "questionText": "What does pattern recognition involve in Computational Thinking?",
    "options": [
      "Ignoring repetitive elements.",
      "Looking for similarities or patterns among and within problems.",
      "Breaking problems into smaller pieces.",
      "Writing detailed algorithms."
    ],
    "correctAnswer": "Looking for similarities or patterns among and within problems."
  },
  {
    "id": 6,
    "questionText": "Observing that the area of a square can be calculated by adding consecutive odd numbers (e.g., area of side 3 = 1+3+5=9) is an example of which Computational Thinking component?",
    "options": [
      "Abstraction",
      "Decomposition",
      "Algorithm Design",
      "Pattern Recognition"
    ],
    "correctAnswer": "Pattern Recognition"
  },
  {
    "id": 7,
    "questionText": "Which Computational Thinking component involves simplifying complex problems by focusing only on the essential details and ignoring unnecessary ones?",
    "options": [
      "Decomposition",
      "Pattern Recognition",
      "Abstraction",
      "Algorithm"
    ],
    "correctAnswer": "Abstraction"
  },
  {
    "id": 8,
    "questionText": "When creating a recipe for baking a cake, where you outline a clear sequence of steps, you are essentially developing a/an:",
    "options": [
      "Abstraction",
      "Pattern Recognition",
      "Algorithm",
      "Decomposition"
    ],
    "correctAnswer": "Algorithm"
  },
  {
    "id": 9,
    "questionText": "What is the first and most important step in problem-solving, especially in computational thinking?",
    "options": [
      "Problem Simplification",
      "Solution Selection and Design",
      "Problem Understanding",
      "Algorithm Design"
    ],
    "correctAnswer": "Problem Understanding"
  },
  {
    "id": 10,
    "questionText": "According to Albert Einstein, if he had an hour to solve a problem, how would he spend the majority of his time?",
    "options": [
      "5 minutes thinking about the problem and 55 minutes thinking about solutions.",
      "55 minutes thinking about the problem and 5 minutes thinking about solutions.",
      "Equal time on problem and solutions.",
      "He would not think about solutions until the problem is fully solved."
    ],
    "correctAnswer": "55 minutes thinking about the problem and 5 minutes thinking about solutions."
  },
  {
    "id": 11,
    "questionText": "What does simplifying a problem involve in Computational Thinking?",
    "options": [
      "Adding more complex details to the problem.",
      "Breaking it down into smaller, more manageable sub-problems.",
      "Finding the final solution directly.",
      "Ignoring parts of the problem that are difficult."
    ],
    "correctAnswer": "Breaking it down into smaller, more manageable sub-problems."
  },
  {
    "id": 12,
    "questionText": "What are flowcharts?",
    "options": [
      "Text-based descriptions of algorithms.",
      "Visual representations of the steps in a process or system, depicted using different symbols connected by arrows.",
      "Programming languages for complex algorithms.",
      "Tools for debugging software."
    ],
    "correctAnswer": "Visual representations of the steps in a process or system, depicted using different symbols connected by arrows."
  },
  {
    "id": 13,
    "questionText": "Which of the following is a key importance of flowcharts?",
    "options": [
      "They obscure complex processes.",
      "They are exclusively used for mathematical equations.",
      "They serve as essential documentation for systems and processes.",
      "They are primarily for coding programs."
    ],
    "correctAnswer": "They serve as essential documentation for systems and processes."
  },
  {
    "id": 14,
    "questionText": "What does the oval symbol typically represent in a flowchart?",
    "options": [
      "A process, task, or operation.",
      "Data input or output.",
      "A decision point.",
      "The start or end of a process."
    ],
    "correctAnswer": "The start or end of a process."
  },
  {
    "id": 15,
    "questionText": "Which flowchart symbol represents a decision point where the flow can branch based on a yes/no question?",
    "options": [
      "Rectangle",
      "Parallelogram",
      "Diamond",
      "Arrow"
    ],
    "correctAnswer": "Diamond"
  },
  {
    "id": 16,
    "questionText": "What is pseudocode?",
    "options": [
      "A visual representation of an algorithm.",
      "Actual code that can be run on a computer.",
      "A method of representing an algorithm using simple and informal language that is easy to understand.",
      "A complex mathematical formula for problem-solving."
    ],
    "correctAnswer": "A method of representing an algorithm using simple and informal language that is easy to understand."
  },
  {
    "id": 17,
    "questionText": "One benefit of using pseudocode is that it helps programmers and students focus on the logic of the algorithm without worrying about:",
    "options": [
      "The complexity of the problem.",
      "The syntax of a specific programming language.",
      "The overall objective of the system.",
      "The efficiency of the algorithm."
    ],
    "correctAnswer": "The syntax of a specific programming language."
  },
  {
    "id": 18,
    "questionText": "In the given pseudocode for checking if a number is even or odd, what does number % 2 == 0 check for?",
    "options": [
      "If the number is greater than 0.",
      "If the number is divisible by 2 with no remainder.",
      "If the number is equal to 0.",
      "If the number is an integer."
    ],
    "correctAnswer": "If the number is divisible by 2 with no remainder."
  },
  {
    "id": 19,
    "questionText": "How do flowcharts primarily communicate an algorithm?",
    "options": [
      "In a detailed, narrative-like format.",
      "In a visual format, showing the flow and structure.",
      "Through a sequence of written steps.",
      "By listing programming commands."
    ],
    "correctAnswer": "In a visual format, showing the flow and structure."
  },
  {
    "id": 20,
    "questionText": "What is Time Complexity in algorithm design?",
    "options": [
      "A measure of the time it takes for a programmer to write the algorithm.",
      "A measure of how fast or slow an algorithm performs, showing how its running time changes as the input size increases.",
      "A measure of the memory an algorithm uses.",
      "A measure of how many errors are present in an algorithm."
    ],
    "correctAnswer": "A measure of how fast or slow an algorithm performs, showing how its running time changes as the input size increases."
  },
  {
    "id": 21,
    "questionText": "If an algorithm takes fewer steps to complete a task, what does this generally imply?",
    "options": [
      "It is a more complex algorithm.",
      "It is a faster algorithm.",
      "It uses more memory.",
      "It is less reliable."
    ],
    "correctAnswer": "It is a faster algorithm."
  },
  {
    "id": 22,
    "questionText": "What does Space Complexity measure?",
    "options": [
      "The physical size of the computer running the algorithm.",
      "The amount of memory an algorithm uses relative to input size.",
      "The number of lines of code in an algorithm.",
      "The storage capacity of the hard drive."
    ],
    "correctAnswer": "The amount of memory an algorithm uses relative to input size."
  },
  {
    "id": 23,
    "questionText": "What does a \"dry run\" of an algorithm involve?",
    "options": [
      "Running the algorithm on a computer with a large dataset.",
      "Manually going through the algorithm with sample data to identify any errors.",
      "Automatically testing the algorithm using a debugger.",
      "Writing the algorithm in multiple programming languages."
    ],
    "correctAnswer": "Manually going through the algorithm with sample data to identify any errors."
  },
  {
    "id": 24,
    "questionText": "In the dry run example for calculating the sum of two numbers (3 and 5), what is the final output displayed?",
    "options": [
      "3",
      "5",
      "8",
      "The individual numbers 3 and 5."
    ],
    "correctAnswer": "8"
  },
  {
    "id": 25,
    "questionText": "What is \"Simulation\" in the context of algorithms and systems?",
    "options": [
      "Manually executing an algorithm step-by-step.",
      "Using computer programs to create a model of a real-world process or system to test ideas.",
      "A technique for simplifying complex problems.",
      "A method for identifying syntax errors."
    ],
    "correctAnswer": "Using computer programs to create a model of a real-world process or system to test ideas."
  },
  {
    "id": 26,
    "questionText": "What is one benefit of using simulation for testing algorithms?",
    "options": [
      "It is always more accurate than real experiments.",
      "It is often cheaper and faster than conducting real experiments.",
      "It eliminates the need for any real-world testing.",
      "It only works for very simple algorithms."
    ],
    "correctAnswer": "It is often cheaper and faster than conducting real experiments."
  },
  {
    "id": 27,
    "questionText": "What does LARP stand for?",
    "options": [
      "Logical Analysis and Review Process.",
      "Logic of Algorithms for Resolution of Problems.",
      "Language for Algorithmic Real-time Programming.",
      "Learning Advanced Robotic Programming."
    ],
    "correctAnswer": "Logic of Algorithms for Resolution of Problems."
  },
  {
    "id": 28,
    "questionText": "What is the primary purpose of LARP (Logic of Algorithms for Resolution of Problems)?",
    "options": [
      "To write complex programming code.",
      "To learn how algorithms work by actually running them and seeing the results.",
      "To develop new hardware components for computers.",
      "To analyze the historical context of algorithms."
    ],
    "correctAnswer": "To learn how algorithms work by actually running them and seeing the results."
  },
  {
    "id": 29,
    "questionText": "Which command is typically used in LARP to display messages?",
    "options": [
      "SHOW",
      "DISPLAY",
      "WRITE",
      "OUTPUT"
    ],
    "correctAnswer": "OUTPUT"
  },
  {
    "id": 30,
    "questionText": "In LARP, what do conditional statements like IF...THEN...ELSE primarily handle?",
    "options": [
      "Data input",
      "Looping",
      "Decision-making processes",
      "Variable declaration"
    ],
    "correctAnswer": "Decision-making processes"
  },
  {
    "id": 31,
    "questionText": "What type of errors occur when you write something incorrectly in your algorithm or flowchart, such as missing a step or using the wrong symbol?",
    "options": [
      "Runtime Errors",
      "Logical Errors",
      "Syntax Errors",
      "Semantic Errors"
    ],
    "correctAnswer": "Syntax Errors"
  },
  {
    "id": 32,
    "questionText": "What type of errors happen when an algorithm or flowchart is being executed, such as trying to perform an impossible operation like dividing by zero?",
    "options": [
      "Syntax Errors",
      "Logical Errors",
      "Runtime Errors",
      "Compilation Errors"
    ],
    "correctAnswer": "Runtime Errors"
  },
  {
    "id": 33,
    "questionText": "Which type of error causes an algorithm to behave incorrectly due to mistakes in its logic, even if it runs without crashing?",
    "options": [
      "Syntax Errors",
      "Runtime Errors",
      "Logical Errors",
      "System Errors"
    ],
    "correctAnswer": "Logical Errors"
  },
  {
    "id": 34,
    "questionText": "Which debugging technique involves manually going through each step of your algorithm or flowchart to see where it goes wrong?",
    "options": [
      "Simplify the Problem",
      "Use Comments",
      "Trace the Steps",
      "Check Conditions"
    ],
    "correctAnswer": "Trace the Steps"
  },
  {
    "id": 35,
    "questionText": "What is the benefit of writing comments or notes in your algorithm as a debugging technique?",
    "options": [
      "It speeds up the execution time.",
      "It complicates the algorithm.",
      "It can help you spot mistakes by explaining what each part is supposed to do.",
      "It is only useful for very simple algorithms."
    ],
    "correctAnswer": "It can help you spot mistakes by explaining what each part is supposed to do."
  },
  {
    "id": 36,
    "questionText": "According to the source, what kind of errors are the easiest to find because the LARP tool usually points them out?",
    "options": [
      "Logical errors",
      "Runtime errors",
      "Syntax errors",
      "Semantic errors"
    ],
    "correctAnswer": "Syntax errors"
  },
  {
    "id": 37,
    "questionText": "Which type of errors are the hardest to find because the algorithm still runs but does not produce correct answers?",
    "options": [
      "Syntax errors",
      "Runtime errors",
      "Logical errors",
      "Compilation errors"
    ],
    "correctAnswer": "Logical errors"
  },
  {
    "id": 38,
    "questionText": "The process of breaking down a complex problem into smaller, more manageable parts is known as:",
    "options": [
      "Abstraction",
      "Pattern Recognition",
      "Decomposition",
      "Algorithm"
    ],
    "correctAnswer": "Decomposition"
  },
  {
    "id": 39,
    "questionText": "What is a \"Missing Step\" error message in LARP likely to indicate?",
    "options": [
      "You are using a variable that hasn't been defined yet.",
      "You forgot to include an important step in your algorithm.",
      "You are trying to perform an operation that is not allowed.",
      "The algorithm has completed successfully."
    ],
    "correctAnswer": "You forgot to include an important step in your algorithm."
  },
  {
    "id": 40,
    "questionText": "What is an \"Undefined Variable\" error message in LARP likely to indicate?",
    "options": [
      "You forgot to include an important step in your algorithm.",
      "You are using a variable that hasn't been defined yet.",
      "You are trying to perform an operation that is not allowed.",
      "The algorithm's logic is flawed."
    ],
    "correctAnswer": "You are using a variable that hasn't been defined yet."
  },
  {
    "id": 41,
    "questionText": "What is an \"Invalid Operation\" error message in LARP likely to indicate?",
    "options": [
      "You forgot to include an important step in your algorithm.",
      "You are using a variable that hasn't been defined yet.",
      "You are trying to perform an operation that is not allowed, like dividing by zero.",
      "The algorithm has successfully found a solution."
    ],
    "correctAnswer": "You are trying to perform an operation that is not allowed, like dividing by zero."
  },
  {
    "id": 42,
    "questionText": "How does dry running help in the development process?",
    "options": [
      "It makes the code run faster.",
      "It helps catch errors early, saving time and effort.",
      "It automates the entire debugging process.",
      "It only works for complex algorithms."
    ],
    "correctAnswer": "It helps catch errors early, saving time and effort."
  },
  {
    "id": 43,
    "questionText": "Which principle of computational thinking is about choosing the most efficient approach after evaluating different solutions?",
    "options": [
      "Problem Understanding",
      "Problem Simplification",
      "Solution Selection and Design",
      "Algorithm Implementation"
    ],
    "correctAnswer": "Solution Selection and Design"
  },
  {
    "id": 44,
    "questionText": "What analogy is used to describe an algorithm in the source material?",
    "options": [
      "A puzzle.",
      "A roadmap.",
      "A recipe.",
      "A blueprint."
    ],
    "correctAnswer": "A recipe."
  },
  {
    "id": 45,
    "questionText": "The example of \"Making a Cup of Tea\" with high-level steps (boil water, add tea leaves, steep, pour, add milk/sugar) demonstrates which CT component?",
    "options": [
      "Decomposition",
      "Pattern Recognition",
      "Abstraction",
      "Algorithm"
    ],
    "correctAnswer": "Abstraction"
  },
  {
    "id": 46,
    "questionText": "When working with different integer types, what is a \"Top Tip\" mentioned to avoid unexpected results?",
    "options": [
      "Always use the largest possible integer type.",
      "Always check whether the data type is signed or unsigned.",
      "Only use positive numbers.",
      "Convert all integers to floating-point numbers."
    ],
    "correctAnswer": "Always check whether the data type is signed or unsigned."
  },
  {
    "id": 47,
    "questionText": "Why is \"Clarity and Focus\" important for problem understanding?",
    "options": [
      "It helps you avoid thinking about the problem too much.",
      "It allows you to define clear and achievable goals.",
      "It helps you focus on the right aspects without getting distracted by irrelevant details.",
      "It immediately leads to an efficient solution."
    ],
    "correctAnswer": "It helps you focus on the right aspects without getting distracted by irrelevant details."
  },
  {
    "id": 48,
    "questionText": "What is the purpose of the 'for i from 2 to sqrt(number)' loop in the pseudocode for checking if a number is prime?",
    "options": [
      "To check for negative divisors.",
      "To iterate through all numbers up to the given number.",
      "To loop through possible divisors efficiently, as factors greater than the square root would have a smaller factor already tested.",
      "To perform multiplication operations."
    ],
    "correctAnswer": "To loop through possible divisors efficiently, as factors greater than the square root would have a smaller factor already tested."
  },
  {
    "id": 49,
    "questionText": "What is the value of the Program Counter (PC) in the fetching stage of the Von Neumann architecture?",
    "options": [
      "It stores the instruction currently being executed.",
      "It stores the memory address of the subsequent instruction.",
      "It performs mathematical computations.",
      "It controls the activities of the CPU."
    ],
    "correctAnswer": "It stores the memory address of the subsequent instruction."
  },
  {
    "id": 50,
    "questionText": "Which of the following is NOT a benefit of pseudocode?",
    "options": [
      "It helps in understanding the logic of the algorithm.",
      "It allows programmers to outline their thoughts and plan the steps.",
      "It is a universal way to convey the steps of an algorithm.",
      "It guarantees error-free code execution without testing."
    ],
    "correctAnswer": "It guarantees error-free code execution without testing."
  }
],
  "Web Development with HTML CSS and JavaScript": [
  {
    "id": 1,
    "questionText": "What is the process of creating websites and web applications called?",
    "options": [
      "Software Engineering",
      "Web Development",
      "Digital Marketing",
      "Network Administration"
    ],
    "correctAnswer": "Web Development"
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT a fundamental technology used in front-end web development?",
    "options": [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    "correctAnswer": "SQL"
  },
  {
    "id": 3,
    "questionText": "HTML is primarily used to:",
    "options": [
      "Style the content on web pages.",
      "Add interactivity to web pages.",
      "Structure the content on web pages.",
      "Manage databases."
    ],
    "correctAnswer": "Structure the content on web pages."
  },
  {
    "id": 4,
    "questionText": "CSS is primarily used to:",
    "options": [
      "Structure the content on web pages.",
      "Style the content on web pages, changing colors, fonts, and layout.",
      "Add interactivity to web pages.",
      "Manage server-side logic."
    ],
    "correctAnswer": "Style the content on web pages, changing colors, fonts, and layout."
  },
  {
    "id": 5,
    "questionText": "JavaScript is primarily used to:",
    "options": [
      "Structure the content on web pages.",
      "Style the content on web pages.",
      "Add interactivity to web pages, making them dynamic and engaging.",
      "Store and manage data."
    ],
    "correctAnswer": "Add interactivity to web pages, making them dynamic and engaging."
  },
  {
    "id": 6,
    "questionText": "Which components manage the behind-the-scenes functionality of a website, including servers, databases, and application logic?",
    "options": [
      "Front-end Development",
      "Full-Stack Development",
      "Back-end Development",
      "Client-side Development"
    ],
    "correctAnswer": "Back-end Development"
  },
  {
    "id": 7,
    "questionText": "Who created HTML in 1991?",
    "options": [
      "Bill Gates",
      "Steve Jobs",
      "Tim Berners-Lee",
      "Mark Zuckerberg"
    ],
    "correctAnswer": "Tim Berners-Lee"
  },
  {
    "id": 8,
    "questionText": "Which version of HTML is the latest and includes new elements for better multimedia support, graphics, and more interactive web pages?",
    "options": [
      "HTML 2.0",
      "HTML 4.01",
      "HTML5",
      "HTML 3.2"
    ],
    "correctAnswer": "HTML5"
  },
  {
    "id": 9,
    "questionText": "When setting up a development environment for web development, which two basic tools are essential?",
    "options": [
      "Database Management System and Operating System",
      "Text Editor and Web Browser",
      "Integrated Development Environment (IDE) and Compiler",
      "Version Control System and Cloud Server"
    ],
    "correctAnswer": "Text Editor and Web Browser"
  },
  {
    "id": 10,
    "questionText": "What is the correct file extension for an HTML file?",
    "options": [
      ".htm",
      ".txt",
      ".html",
      ".js"
    ],
    "correctAnswer": ".html"
  },
  {
    "id": 11,
    "questionText": "Which HTML tag defines a large heading?",
    "options": [
      "<p>",
      "<h6>",
      "<h1>",
      "<div>"
    ],
    "correctAnswer": "<h1>"
  },
  {
    "id": 12,
    "questionText": "Which HTML tag defines a paragraph?",
    "options": [
      "<h1>",
      "<br>",
      "<p>",
      "<li>"
    ],
    "correctAnswer": "<p>"
  },
  {
    "id": 13,
    "questionText": "What is the difference between paired tags and unpaired tags in HTML?",
    "options": [
      "Paired tags are for styling, unpaired tags are for structure.",
      "Paired tags have both an opening and closing tag, while unpaired tags do not need closing tags.",
      "Unpaired tags are deprecated, while paired tags are modern.",
      "Paired tags are for text, unpaired tags are for images."
    ],
    "correctAnswer": "Paired tags have both an opening and closing tag, while unpaired tags do not need closing tags."
  },
  {
    "id": 14,
    "questionText": "Which HTML tag is used to create a hyperlink?",
    "options": [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    "correctAnswer": "<a>"
  },
  {
    "id": 15,
    "questionText": "What attribute is used in the <a> tag to specify the destination URL of a link?",
    "options": [
      "src",
      "alt",
      "href",
      "link"
    ],
    "correctAnswer": "href"
  },
  {
    "id": 16,
    "questionText": "Which HTML tag is used to add an image to a web page?",
    "options": [
      "<picture>",
      "<img>",
      "<image>",
      "<photo>"
    ],
    "correctAnswer": "<img>"
  },
  {
    "id": 17,
    "questionText": "What is the purpose of the alt attribute in the <img> tag?",
    "options": [
      "To define the alignment of the image.",
      "To provide a description of the image for visually impaired users or when the image cannot be displayed.",
      "To set the size of the image.",
      "To link the image to another page."
    ],
    "correctAnswer": "To provide a description of the image for visually impaired users or when the image cannot be displayed."
  },
  {
    "id": 18,
    "questionText": "Which HTML tag is used to create an unordered (bulleted) list?",
    "options": [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    "correctAnswer": "<ul>"
  },
  {
    "id": 19,
    "questionText": "Which HTML tag is used to create an ordered (numbered) list?",
    "options": [
      "<ul>",
      "<dl>",
      "<ol>",
      "<li>"
    ],
    "correctAnswer": "<ol>"
  },
  {
    "id": 20,
    "questionText": "What HTML tags are used to define a table, table rows, and table data (cells) respectively?",
    "options": [
      "<table>, <td>, <tr>",
      "<table>, <tr>, <td>",
      "<tr>, <td>, <th>",
      "<td>, <tr>, <table>"
    ],
    "correctAnswer": "<table>, <tr>, <td>"
  },
  {
    "id": 21,
    "questionText": "What is the syntax for an HTML comment?",
    "options": [
      "// This is a comment",
      "/* This is a comment */",
      "",
      "# This is a comment"
    ],
    "correctAnswer": ""
  },
  {
    "id": 22,
    "questionText": "What is CSS primarily composed of?",
    "options": [
      "HTML tags and attributes.",
      "Selectors and declarations.",
      "JavaScript functions and variables.",
      "Server-side scripts."
    ],
    "correctAnswer": "Selectors and declarations."
  },
  {
    "id": 23,
    "questionText": "Which method of integrating CSS involves adding CSS directly to individual HTML elements using the style attribute?",
    "options": [
      "External Styles",
      "Internal Styles",
      "Inline Styles",
      "Global Styles"
    ],
    "correctAnswer": "Inline Styles"
  },
  {
    "id": 24,
    "questionText": "Which method of integrating CSS involves including CSS in the <head> section of an HTML document using the <style> tag?",
    "options": [
      "External Styles",
      "Internal Styles",
      "Inline Styles",
      "Local Styles"
    ],
    "correctAnswer": "Internal Styles"
  },
  {
    "id": 25,
    "questionText": "Which is the most efficient method for integrating CSS for larger projects, keeping HTML clean and allowing easy updates across multiple pages?",
    "options": [
      "Inline Styles",
      "Internal Styles",
      "External Styles",
      "Embedded Styles"
    ],
    "correctAnswer": "External Styles"
  },
  {
    "id": 26,
    "questionText": "To change the font to Arial and make the text bold for a paragraph, which CSS properties would you use?",
    "options": [
      "font-type and text-bold",
      "font-family and font-weight",
      "text-font and boldness",
      "font and weight"
    ],
    "correctAnswer": "font-family and font-weight"
  },
  {
    "id": 27,
    "questionText": "Which CSS property is used to set the background color of a web page or any HTML element?",
    "options": [
      "color",
      "text-color",
      "background-color",
      "bgcolor"
    ],
    "correctAnswer": "background-color"
  },
  {
    "id": 28,
    "questionText": "Which CSS property is used to set an image as the background of a web page?",
    "options": [
      "image-src",
      "background-image",
      "img-background",
      "src-image"
    ],
    "correctAnswer": "background-image"
  },
  {
    "id": 29,
    "questionText": "Which CSS property helps in arranging items in a flexible and responsive way, useful for aligning items in a row or column?",
    "options": [
      "CSS Grid",
      "CSS Layout",
      "CSS Flexbox",
      "CSS Position"
    ],
    "correctAnswer": "CSS Flexbox"
  },
  {
    "id": 30,
    "questionText": "What are margin and padding used for in CSS?",
    "options": [
      "To change the color and font of elements.",
      "To create space around and inside elements, respectively.",
      "To add animations and transitions.",
      "To define grid columns and rows."
    ],
    "correctAnswer": "To create space around and inside elements, respectively."
  },
  {
    "id": 31,
    "questionText": "What is the purpose of @keyframes in CSS animations?",
    "options": [
      "To apply the animation to an element.",
      "To set how many times the animation should repeat.",
      "To specify the start, end, and intermediate steps of an animation.",
      "To control the timing function of an animation."
    ],
    "correctAnswer": "To specify the start, end, and intermediate steps of an animation."
  },
  {
    "id": 32,
    "questionText": "What is JavaScript used for in web development?",
    "options": [
      "To define the structure of web pages.",
      "To style the visual appearance of web pages.",
      "To make websites interactive and engaging.",
      "To manage server-side databases."
    ],
    "correctAnswer": "To make websites interactive and engaging."
  },
  {
    "id": 33,
    "questionText": "Who created JavaScript and in how many days?",
    "options": [
      "Tim Berners-Lee in 30 days.",
      "Brendan Eich in 10 days.",
      "Bill Gates in 100 days.",
      "Steve Jobs in 5 days."
    ],
    "correctAnswer": "Brendan Eich in 10 days."
  },
  {
    "id": 34,
    "questionText": "In JavaScript, what keyword is used to declare a variable?",
    "options": [
      "int",
      "string",
      "var, let, or const",
      "declare"
    ],
    "correctAnswer": "var, let, or const"
  },
  {
    "id": 35,
    "questionText": "Which JavaScript data type represents a sequence of characters used for text?",
    "options": [
      "Number",
      "Boolean",
      "String",
      "Array"
    ],
    "correctAnswer": "String"
  },
  {
    "id": 36,
    "questionText": "Which JavaScript data type represents true or false values?",
    "options": [
      "String",
      "Number",
      "Boolean",
      "Object"
    ],
    "correctAnswer": "Boolean"
  },
  {
    "id": 37,
    "questionText": "What are functions in JavaScript used for?",
    "options": [
      "To declare variables.",
      "To reuse code and perform specific tasks.",
      "To define HTML elements.",
      "To apply CSS styles."
    ],
    "correctAnswer": "To reuse code and perform specific tasks."
  },
  {
    "id": 38,
    "questionText": "In a JavaScript function function greet(name), what is name?",
    "options": [
      "A variable declared outside the function.",
      "An event handler.",
      "A parameter.",
      "A return value."
    ],
    "correctAnswer": "A parameter."
  },
  {
    "id": 39,
    "questionText": "What is an \"event\" in the context of JavaScript and web pages?",
    "options": [
      "A variable declaration.",
      "A style change.",
      "An action that occurs when a user interacts with a webpage, like clicking a button.",
      "A server-side process."
    ],
    "correctAnswer": "An action that occurs when a user interacts with a webpage, like clicking a button."
  },
  {
    "id": 40,
    "questionText": "Which HTML event is triggered when an element is clicked?",
    "options": [
      "onload",
      "onmouseover",
      "onclick",
      "onkeyup"
    ],
    "correctAnswer": "onclick"
  },
  {
    "id": 41,
    "questionText": "What is an \"event handler\" in JavaScript?",
    "options": [
      "A special type of variable.",
      "A function that runs when a specific event occurs.",
      "A CSS property.",
      "An HTML tag."
    ],
    "correctAnswer": "A function that runs when a specific event occurs."
  },
  {
    "id": 42,
    "questionText": "How does the example document.getElementById('name').value work in JavaScript?",
    "options": [
      "It sets the ID of an element to 'name'.",
      "It retrieves the value entered into an HTML input element with the ID 'name'.",
      "It creates a new HTML element called 'name'.",
      "It defines a JavaScript function."
    ],
    "correctAnswer": "It retrieves the value entered into an HTML input element with the ID 'name'."
  },
  {
    "id": 43,
    "questionText": "Which of the following is a common debugging technique in web development?",
    "options": [
      "Ignoring error messages.",
      "Avoiding browser developer tools.",
      "Using browser developer tools to see error messages and set breakpoints.",
      "Deploying the page immediately without checking."
    ],
    "correctAnswer": "Using browser developer tools to see error messages and set breakpoints."
  },
  {
    "id": 44,
    "questionText": "What does console.log() do in JavaScript?",
    "options": [
      "Displays an alert message to the user.",
      "Prints messages to the browser's developer console for debugging.",
      "Changes the background color of the web page.",
      "Creates a new HTML element."
    ],
    "correctAnswer": "Prints messages to the browser's developer console for debugging."
  },
  {
    "id": 45,
    "questionText": "Why is cross-browser testing important in web development?",
    "options": [
      "To ensure the web page works only in one specific browser.",
      "To verify that the web page displays and functions consistently across different web browsers.",
      "To optimize the website for mobile devices only.",
      "To test the server-side functionality."
    ],
    "correctAnswer": "To verify that the web page displays and functions consistently across different web browsers."
  },
  {
    "id": 46,
    "questionText": "What does \"Responsive Design Testing\" ensure?",
    "options": [
      "The web page loads quickly.",
      "The web page looks good on all devices, including desktops, tablets, and smartphones.",
      "The web page is secure from cyber-attacks.",
      "The web page has animations and transitions."
    ],
    "correctAnswer": "The web page looks good on all devices, including desktops, tablets, and smartphones."
  },
  {
    "id": 47,
    "questionText": "When dealing with font-family in CSS, if the first font listed is not available, what happens?",
    "options": [
      "The text will not display.",
      "The browser will use a default font.",
      "The next font in the list will be used.",
      "An error message will appear."
    ],
    "correctAnswer": "The next font in the list will be used."
  },
  {
    "id": 48,
    "questionText": "What is the role of <meta charset=\"UTF-8\"> in an HTML document?",
    "options": [
      "Defines the document's title.",
      "Specifies the character encoding for the document.",
      "Links to an external CSS file.",
      "Includes JavaScript code."
    ],
    "correctAnswer": "Specifies the character encoding for the document."
  },
  {
    "id": 49,
    "questionText": "What is the purpose of the src attribute in the <script> tag?",
    "options": [
      "To define the script's type.",
      "To specify the source file of an external JavaScript.",
      "To set the script's language.",
      "To declare a variable."
    ],
    "correctAnswer": "To specify the source file of an external JavaScript."
  },
  {
    "id": 50,
    "questionText": "What does the document.body.style.backgroundColor = \"lightblue\"; line do in JavaScript?",
    "options": [
      "It creates a new body element.",
      "It changes the text color of the body to light blue.",
      "It sets the background color of the HTML document's body to light blue.",
      "It defines a light blue border around the body."
    ],
    "correctAnswer": "It sets the background color of the HTML document's body to light blue."
  }
],
  "Data Science and Data Gathering": [
  {
    "id": 1,
    "questionText": "What does \"Data\" refer to in the context of the source material?",
    "options": [
      "Processed information ready for decision-making.",
      "Raw facts collected about things around us that can be processed to generate useful information.",
      "Only numerical values used in calculations.",
      "Pre-analyzed insights from observations."
    ],
    "correctAnswer": "Raw facts collected about things around us that can be processed to generate useful information."
  },
  {
    "id": 2,
    "questionText": "Which of the following is an example of \"Weather Data\"?",
    "options": [
      "Records of product sales.",
      "80% of customers rating their experience as \"satisfactory.\"",
      "Information on temperature, humidity, and wind speed collected from weather stations.",
      "Likes and comments on social media posts."
    ],
    "correctAnswer": "Information on temperature, humidity, and wind speed collected from weather stations."
  },
  {
    "id": 3,
    "questionText": "Qualitative data is primarily characterized by:",
    "options": [
      "Being numerical and measurable.",
      "Representing quantities and amounts.",
      "Being non-numeric, descriptive, and categorical.",
      "Allowing all arithmetic operations."
    ],
    "correctAnswer": "Being non-numeric, descriptive, and categorical."
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of qualitative data?",
    "options": [
      "Student heights in centimeters.",
      "Number of cars in a parking lot.",
      "Colors of cars in a parking lot (e.g., red, blue, green).",
      "Test scores."
    ],
    "correctAnswer": "Colors of cars in a parking lot (e.g., red, blue, green)."
  },
  {
    "id": 5,
    "questionText": "What type of qualitative data is used to label or categorize items without implying any order (e.g., gender, types of fruit)?",
    "options": [
      "Ordinal Data",
      "Discrete Data",
      "Nominal Data",
      "Continuous Data"
    ],
    "correctAnswer": "Nominal Data"
  },
  {
    "id": 6,
    "questionText": "Customer satisfaction ratings (satisfied, neutral, unsatisfied) are an example of which type of qualitative data?",
    "options": [
      "Nominal Data",
      "Discrete Data",
      "Ordinal Data",
      "Continuous Data"
    ],
    "correctAnswer": "Ordinal Data"
  },
  {
    "id": 7,
    "questionText": "Quantitative data consists of numbers used to measure the quantity or amount of something. Which question does it answer?",
    "options": [
      "\"What kind?\"",
      "\"How much?\" or \"How long?\"",
      "\"Why?\"",
      "\"Which category?\""
    ],
    "correctAnswer": "\"How much?\" or \"How long?\""
  },
  {
    "id": 8,
    "questionText": "Which characteristic does NOT apply to quantitative data?",
    "options": [
      "Numerical",
      "Measurable",
      "Arithmetical",
      "Descriptive"
    ],
    "correctAnswer": "Descriptive"
  },
  {
    "id": 9,
    "questionText": "What type of quantitative data consists of distinct, separate values that are countable, often in whole numbers (e.g., number of students)?",
    "options": [
      "Nominal Data",
      "Ordinal Data",
      "Discrete Data",
      "Continuous Data"
    ],
    "correctAnswer": "Discrete Data"
  },
  {
    "id": 10,
    "questionText": "Student heights (150.5 cm, 160.2 cm) and fruit weights (1.5 kg, 2.2 kg) are examples of which type of quantitative data?",
    "options": [
      "Nominal Data",
      "Ordinal Data",
      "Discrete Data",
      "Continuous Data"
    ],
    "correctAnswer": "Continuous Data"
  },
  {
    "id": 11,
    "questionText": "What is a key benefit of organizing data systematically?",
    "options": [
      "It makes data harder to find.",
      "It helps reduce errors and improves clarity.",
      "It complicates analysis and interpretation.",
      "It increases the amount of data."
    ],
    "correctAnswer": "It helps reduce errors and improves clarity."
  },
  {
    "id": 12,
    "questionText": "Which of the following is NOT a common type of chart mentioned for visualizing data?",
    "options": [
      "Bar charts",
      "Line charts",
      "Pie charts",
      "Flowcharts"
    ],
    "correctAnswer": "Flowcharts"
  },
  {
    "id": 13,
    "questionText": "What is \"Data Collection\"?",
    "options": [
      "The process of organizing data into tables.",
      "The process of gathering information to answer questions, make decisions, or understand something better.",
      "The process of visualizing data.",
      "The process of cleaning data."
    ],
    "correctAnswer": "The process of gathering information to answer questions, make decisions, or understand something better."
  },
  {
    "id": 14,
    "questionText": "Which data collection method involves collecting information from people by asking them questions, typically on paper, phone, or online?",
    "options": [
      "Interviews",
      "Observations",
      "Surveys",
      "Data Extraction"
    ],
    "correctAnswer": "Surveys"
  },
  {
    "id": 15,
    "questionText": "What is \"Data Extraction\"?",
    "options": [
      "Combining information from different sources.",
      "Finding and saving the most relevant information from a larger set of data.",
      "Creating charts and graphs.",
      "Asking questions to collect data."
    ],
    "correctAnswer": "Finding and saving the most relevant information from a larger set of data."
  },
  {
    "id": 16,
    "questionText": "What does \"Data Integration\" involve?",
    "options": [
      "Collecting raw facts without organization.",
      "Removing errors from data.",
      "Combining information from different sources to get a complete perspective.",
      "Focusing on single data points."
    ],
    "correctAnswer": "Combining information from different sources to get a complete perspective."
  },
  {
    "id": 17,
    "questionText": "Data that is organized and formatted to be easily searchable and analyzable, such as data in spreadsheets and traditional databases, is known as:",
    "options": [
      "Unstructured Data",
      "Structured Data",
      "Raw Data",
      "Qualitative Data"
    ],
    "correctAnswer": "Structured Data"
  },
  {
    "id": 18,
    "questionText": "Which type of data is more free-form and doesn't fit into a specific format, such as text from emails, social media posts, videos, and images?",
    "options": [
      "Structured Data",
      "Quantitative Data",
      "Unstructured Data",
      "Discrete Data"
    ],
    "correctAnswer": "Unstructured Data"
  },
  {
    "id": 19,
    "questionText": "Which data storage technique is described as tools that help us organize data in rows and columns, often used for tasks that don't require complex data management?",
    "options": [
      "Databases",
      "Data Warehouses",
      "Spreadsheets",
      "NoSQL"
    ],
    "correctAnswer": "Spreadsheets"
  },
  {
    "id": 20,
    "questionText": "What are \"Databases\" designed to handle?",
    "options": [
      "Small amounts of unstructured data.",
      "Large amounts of structured data.",
      "Only numerical values.",
      "Only text documents."
    ],
    "correctAnswer": "Large amounts of structured data."
  },
  {
    "id": 21,
    "questionText": "Specialized types of databases designed for storing and analyzing large amounts of data collected from various sources, used by organizations to make decisions, are called:",
    "options": [
      "Spreadsheets",
      "Databases",
      "Data Warehouses",
      "NoSQL databases"
    ],
    "correctAnswer": "Data Warehouses"
  },
  {
    "id": 22,
    "questionText": "What does \"NoSQL\" stand for?",
    "options": [
      "Not Structured Query Language",
      "New Object-Oriented SQL",
      "Not Only SQL",
      "Next Generation SQL"
    ],
    "correctAnswer": "Not Only SQL"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an example of a popular NoSQL database mentioned?",
    "options": [
      "MySQL",
      "Oracle",
      "MongoDB",
      "PostgreSQL"
    ],
    "correctAnswer": "MongoDB"
  },
  {
    "id": 24,
    "questionText": "What is \"Data Visualization\"?",
    "options": [
      "The process of collecting raw data.",
      "The process of turning numbers and information into pictures to make data easier to understand.",
      "The process of cleaning data.",
      "The process of extracting relevant data."
    ],
    "correctAnswer": "The process of turning numbers and information into pictures to make data easier to understand."
  },
  {
    "id": 25,
    "questionText": "What is a key benefit of data visualization?",
    "options": [
      "It makes data more complex.",
      "It allows for slower decision-making.",
      "It provides quick insights and makes understanding data much easier.",
      "It replaces the need for data analysis."
    ],
    "correctAnswer": "It provides quick insights and makes understanding data much easier."
  },
  {
    "id": 26,
    "questionText": "Which of the following tools is specifically designed for creating detailed and interactive data visualizations?",
    "options": [
      "Microsoft Word",
      "Google Docs",
      "Tableau",
      "Notepad"
    ],
    "correctAnswer": "Tableau"
  },
  {
    "id": 27,
    "questionText": "What type of charts are suitable for visualizing nominal data?",
    "options": [
      "Line graphs and scatter plots.",
      "Histograms and dot plots.",
      "Bar charts and pie charts.",
      "Box plots."
    ],
    "correctAnswer": "Bar charts and pie charts."
  },
  {
    "id": 28,
    "questionText": "What is \"Data Pre-processing\"?",
    "options": [
      "The final step in data analysis.",
      "The process of getting the data ready for analysis by cleaning and organizing it.",
      "The process of visualizing data.",
      "The process of collecting new data."
    ],
    "correctAnswer": "The process of getting the data ready for analysis by cleaning and organizing it."
  },
  {
    "id": 29,
    "questionText": "What does \"Evaluating Data Quality\" involve in data pre-processing?",
    "options": [
      "Ignoring missing data.",
      "Ensuring data is accurate, complete, and reliable.",
      "Only focusing on numerical data.",
      "Identifying outliers and deleting them immediately."
    ],
    "correctAnswer": "Ensuring data is accurate, complete, and reliable."
  },
  {
    "id": 30,
    "questionText": "What are \"Outliers\" in data?",
    "options": [
      "The most frequent values.",
      "Unusual or extreme values that don't fit the pattern of the rest of the data.",
      "Missing data points.",
      "Errors in data entry."
    ],
    "correctAnswer": "Unusual or extreme values that don't fit the pattern of the rest of the data."
  },
  {
    "id": 31,
    "questionText": "What does \"Data Validation\" ensure in data cleaning processes?",
    "options": [
      "Data is securely stored.",
      "Data completeness and accuracy.",
      "Data is visualized effectively.",
      "Data is shared with authorized parties."
    ],
    "correctAnswer": "Data completeness and accuracy."
  },
  {
    "id": 32,
    "questionText": "What does \"Data Cleaning\" involve?",
    "options": [
      "Collecting more data.",
      "Error removing, handling missing data, and dealing with outliers.",
      "Performing arithmetic operations.",
      "Creating new data."
    ],
    "correctAnswer": "Error removing, handling missing data, and dealing with outliers."
  },
  {
    "id": 33,
    "questionText": "Which type of data analysis deals with numbers and measurable data, helping understand patterns and trends?",
    "options": [
      "Qualitative Analysis",
      "Content Analysis",
      "Quantitative Analysis",
      "Thematic Analysis"
    ],
    "correctAnswer": "Quantitative Analysis"
  },
  {
    "id": 34,
    "questionText": "What are the three most common \"Measures of Centre\" in statistical analysis?",
    "options": [
      "Range, Variance, Standard Deviation",
      "Mean, Median, Mode",
      "Sum, Count, Average",
      "Maximum, Minimum, Total"
    ],
    "correctAnswer": "Mean, Median, Mode"
  },
  {
    "id": 35,
    "questionText": "For the scores 70, 80, 90, 100, and 110, what is the mean score?",
    "options": [
      "80",
      "90",
      "100",
      "85"
    ],
    "correctAnswer": "90"
  },
  {
    "id": 36,
    "questionText": "Which measure of center is most useful when the dataset has outliers that could distort the mean?",
    "options": [
      "Mean",
      "Mode",
      "Median",
      "Average"
    ],
    "correctAnswer": "Median"
  },
  {
    "id": 37,
    "questionText": "What does \"Mode\" represent in statistical analysis?",
    "options": [
      "The average value.",
      "The middle value.",
      "The value that appears most frequently.",
      "The difference between highest and lowest values."
    ],
    "correctAnswer": "The value that appears most frequently."
  },
  {
    "id": 38,
    "questionText": "What does \"Range\" measure in statistical analysis?",
    "options": [
      "The average value.",
      "The middle value.",
      "The most frequent value.",
      "The difference between the highest and lowest values."
    ],
    "correctAnswer": "The difference between the highest and lowest values."
  },
  {
    "id": 39,
    "questionText": "Qualitative analysis primarily deals with:",
    "options": [
      "Numerical data.",
      "Measurable quantities.",
      "Non-numeric data such as text, images, and sounds.",
      "Structured database entries."
    ],
    "correctAnswer": "Non-numeric data such as text, images, and sounds."
  },
  {
    "id": 40,
    "questionText": "What is \"Content Analysis\" in qualitative data analysis?",
    "options": [
      "Identifying and interpreting themes.",
      "Counting the number of times specific words or themes appear in a text.",
      "Calculating the mean and median.",
      "Visualizing data with scatter plots."
    ],
    "correctAnswer": "Counting the number of times specific words or themes appear in a text."
  },
  {
    "id": 41,
    "questionText": "What is \"Remote Access\"?",
    "options": [
      "The ability to collect data from distant sensors.",
      "The ability to connect to and use a computer or network from a distant location.",
      "A method for storing data offline.",
      "A tool for collaborative authoring."
    ],
    "correctAnswer": "The ability to connect to and use a computer or network from a distant location."
  },
  {
    "id": 42,
    "questionText": "What are \"Data Backups\"?",
    "options": [
      "Original files stored on a primary device.",
      "Copies of important data or files stored separately from the original to protect against data loss.",
      "Real-time data streams.",
      "Temporary files used by applications."
    ],
    "correctAnswer": "Copies of important data or files stored separately from the original to protect against data loss."
  },
  {
    "id": 43,
    "questionText": "What is \"Collaborative Authoring\"?",
    "options": [
      "A single person writing a document.",
      "The process of multiple people working together to create, edit, and improve a document or project in real-time.",
      "Writing code individually without sharing.",
      "Analyzing data in isolation."
    ],
    "correctAnswer": "The process of multiple people working together to create, edit, and improve a document or project in real-time."
  },
  {
    "id": 44,
    "questionText": "What analogy is used to describe Data Science?",
    "options": [
      "Being a painter.",
      "Being an architect.",
      "Being a detective, solving problems using data.",
      "Being a musician."
    ],
    "correctAnswer": "Being a detective, solving problems using data."
  },
  {
    "id": 45,
    "questionText": "Which of the following is NOT part of the interdisciplinary nature of data science?",
    "options": [
      "Computer Science",
      "Mathematics and Statistics",
      "Business Knowledge",
      "Philosophy"
    ],
    "correctAnswer": "Philosophy"
  },
  {
    "id": 46,
    "questionText": "What are the \"Three Vs\" defining characteristics of Big Data?",
    "options": [
      "Validity, Value, Verification",
      "Visualization, Versatility, Velocity",
      "Volume, Velocity, Variety",
      "Vision, Vitality, Visibility"
    ],
    "correctAnswer": "Volume, Velocity, Variety"
  },
  {
    "id": 47,
    "questionText": "What does \"Volume\" refer to in Big Data?",
    "options": [
      "The speed at which data is generated.",
      "The different forms data can take.",
      "The sheer amount of data collected.",
      "The complexity of data processing."
    ],
    "correctAnswer": "The sheer amount of data collected."
  },
  {
    "id": 48,
    "questionText": "What does \"Velocity\" refer to in Big Data?",
    "options": [
      "The sheer amount of data collected.",
      "The speed at which data is generated and processed.",
      "The different forms data can take.",
      "The accuracy of data."
    ],
    "correctAnswer": "The speed at which data is generated and processed."
  },
  {
    "id": 49,
    "questionText": "What does \"Variety\" refer to in Big Data?",
    "options": [
      "The sheer amount of data collected.",
      "The speed at which data is generated and processed.",
      "The different forms data can take (text, images, videos, numbers).",
      "The consistency of data."
    ],
    "correctAnswer": "The different forms data can take (text, images, videos, numbers)."
  },
  {
    "id": 50,
    "questionText": "Which programming language is popular in data science for analyzing data and building data models, known for libraries like Pandas and Matplotlib?",
    "options": [
      "Java",
      "C++",
      "Python",
      "R"
    ],
    "correctAnswer": "Python"
  }
],
  "Emerging Technologies in Computer Science": [
  {
    "id": 1,
    "questionText": "What is Artificial Intelligence (AI) primarily defined as?",
    "options": [
      "The development of robots that can perform physical tasks.",
      "The simulation of human thinking ability in computer systems to think and learn in a manner like humans.",
      "A new type of computer hardware.",
      "A field focused on processing large datasets."
    ],
    "correctAnswer": "The simulation of human thinking ability in computer systems to think and learn in a manner like humans."
  },
  {
    "id": 2,
    "questionText": "Who first coined the term 'Artificial Intelligence' in 1956?",
    "options": [
      "Alan Turing",
      "Marvin Minsky",
      "John McCarthy",
      "Herbert A. Simon"
    ],
    "correctAnswer": "John McCarthy"
  },
  {
    "id": 3,
    "questionText": "Which AI-based model, designed to understand human-like text-based input, was introduced in 2023?",
    "options": [
      "Siri",
      "Alexa",
      "ChatGPT",
      "Google Assistant"
    ],
    "correctAnswer": "ChatGPT"
  },
  {
    "id": 4,
    "questionText": "AI is used in healthcare for:",
    "options": [
      "Diagnosing diseases and personalizing treatment plans.",
      "Creating realistic characters in games.",
      "Optimizing vehicle performance.",
      "Automating administrative tasks in education."
    ],
    "correctAnswer": "Diagnosing diseases and personalizing treatment plans."
  },
  {
    "id": 5,
    "questionText": "Which of the following is NOT an application of AI mentioned in the source material?",
    "options": [
      "Automobile",
      "Finance",
      "Social media",
      "Traditional farming techniques without optimization"
    ],
    "correctAnswer": "Traditional farming techniques without optimization"
  },
  {
    "id": 6,
    "questionText": "Which subfield of AI focuses on computers learning from experience and improving over time without being explicitly programmed?",
    "options": [
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Machine Learning",
      "Computer Vision"
    ],
    "correctAnswer": "Machine Learning"
  },
  {
    "id": 7,
    "questionText": "What distinguishes Deep Learning from general Machine Learning?",
    "options": [
      "It only uses rule-based systems.",
      "It uses complex structures called neural networks, inspired by how the human brain works.",
      "It focuses on symbolic methods.",
      "It is primarily used for computer vision."
    ],
    "correctAnswer": "It uses complex structures called neural networks, inspired by how the human brain works."
  },
  {
    "id": 8,
    "questionText": "When Siri or Alexa understand your questions and provide helpful answers, which subfield of AI is at work?",
    "options": [
      "Computer Vision",
      "Robotics",
      "Natural Language Processing (NLP)",
      "Deep Learning"
    ],
    "correctAnswer": "Natural Language Processing (NLP)"
  },
  {
    "id": 9,
    "questionText": "What is 'Computer Vision'?",
    "options": [
      "The science of building and programming robots.",
      "A field of artificial intelligence that enables computers to see and understand the visual world, interpreting images and videos.",
      "The ability of computers to learn from data.",
      "The processing of human language."
    ],
    "correctAnswer": "A field of artificial intelligence that enables computers to see and understand the visual world, interpreting images and videos."
  },
  {
    "id": 10,
    "questionText": "AI algorithms can be broadly categorized into two types based on their interpretability. What are they?",
    "options": [
      "Simple and Complex",
      "Fast and Slow",
      "Explainable (Whitebox) and Unexplainable (Blackbox)",
      "Static and Dynamic"
    ],
    "correctAnswer": "Explainable (Whitebox) and Unexplainable (Blackbox)"
  },
  {
    "id": 11,
    "questionText": "Which type of AI algorithms have a transparent and understandable decision-making process?",
    "options": [
      "Blackbox Algorithms",
      "Unexplainable Algorithms",
      "Whitebox Algorithms",
      "Neural Networks"
    ],
    "correctAnswer": "Whitebox Algorithms"
  },
  {
    "id": 12,
    "questionText": "Decision Trees, Linear Regression, and Rule-Based Systems are examples of which type of AI algorithm?",
    "options": [
      "Unexplainable (Blackbox) Algorithms",
      "Explainable (Whitebox) Algorithms",
      "Deep Learning Models",
      "Reinforcement Learning Models"
    ],
    "correctAnswer": "Explainable (Whitebox) Algorithms"
  },
  {
    "id": 13,
    "questionText": "Which type of AI algorithms often involve complex computations and interactions, making their decision-making process not easily interpretable?",
    "options": [
      "Explainable Algorithms",
      "Whitebox Algorithms",
      "Blackbox Algorithms",
      "Symbolic AI"
    ],
    "correctAnswer": "Blackbox Algorithms"
  },
  {
    "id": 14,
    "questionText": "Neural networks and deep learning models are examples of which type of AI algorithm?",
    "options": [
      "Explainable (Whitebox) Algorithms",
      "Rule-Based Systems",
      "Unexplainable (Blackbox) Algorithms",
      "Linear Regression"
    ],
    "correctAnswer": "Unexplainable (Blackbox) Algorithms"
  },
  {
    "id": 15,
    "questionText": "What is the Internet of Things (IoT) defined as?",
    "options": [
      "A network of connected computers only.",
      "A network of physical objects (\"things\") equipped with sensors, software, and other technologies to exchange data over the internet.",
      "A new programming language for web development.",
      "A type of cloud storage solution."
    ],
    "correctAnswer": "A network of physical objects (\"things\") equipped with sensors, software, and other technologies to exchange data over the internet."
  },
  {
    "id": 16,
    "questionText": "Who coined the term 'Internet of Things'?",
    "options": [
      "John McCarthy",
      "Kevin Ashton",
      "Tim Berners-Lee",
      "Steve Jobs"
    ],
    "correctAnswer": "Kevin Ashton"
  },
  {
    "id": 17,
    "questionText": "Which of the following is NOT a typical component of an IoT system?",
    "options": [
      "Sensors",
      "Devices",
      "Networks",
      "Quantum Processors"
    ],
    "correctAnswer": "Quantum Processors"
  },
  {
    "id": 18,
    "questionText": "In an IoT system, what is the role of 'Actuators'?",
    "options": [
      "To detect and measure physical properties like temperature.",
      "To process and analyze collected data.",
      "To convert energy into motion and act on data to generate output.",
      "To connect sensors and devices to the internet."
    ],
    "correctAnswer": "To convert energy into motion and act on data to generate output."
  },
  {
    "id": 19,
    "questionText": "Which of the following is an application of IoT in healthcare?",
    "options": [
      "Creating realistic game characters.",
      "Monitoring patient vital signs and medication adherence.",
      "Optimizing transportation routes.",
      "Personalizing investment recommendations."
    ],
    "correctAnswer": "Monitoring patient vital signs and medication adherence."
  },
  {
    "id": 20,
    "questionText": "Smart traffic lights and real-time tracking systems are examples of IoT applications in which domain?",
    "options": [
      "Smart Homes",
      "Healthcare",
      "Transportation",
      "Education"
    ],
    "correctAnswer": "Transportation"
  },
  {
    "id": 21,
    "questionText": "Which of the following is a security measure for IoT deployments?",
    "options": [
      "Using default passwords for convenience.",
      "Avoiding regular software updates.",
      "Ensuring data transmitted between devices is encrypted.",
      "Connecting all devices to public Wi-Fi."
    ],
    "correctAnswer": "Ensuring data transmitted between devices is encrypted."
  },
  {
    "id": 22,
    "questionText": "What is a key risk associated with AI and IoT regarding personal information?",
    "options": [
      "Increased processing speed.",
      "Enhanced data analysis.",
      "Data Privacy concerns due to vast data collection.",
      "Simplified system design."
    ],
    "correctAnswer": "Data Privacy concerns due to vast data collection."
  },
  {
    "id": 23,
    "questionText": "What is 'Algorithmic Bias'?",
    "options": [
      "A feature that enhances the accuracy of AI models.",
      "The perpetuation or amplification of biases in AI models if training datasets contain biases.",
      "A technique for improving decision-making processes.",
      "The ability of an algorithm to learn quickly."
    ],
    "correctAnswer": "The perpetuation or amplification of biases in AI models if training datasets contain biases."
  },
  {
    "id": 24,
    "questionText": "Which of the following is a type of policy and regulatory framework addressing AI and IoT challenges?",
    "options": [
      "Promoting unexplainable algorithms.",
      "Implementing strict data protection laws like GDPR.",
      "Encouraging the use of public Wi-Fi for sensitive data.",
      "Eliminating ethical guidelines in AI development."
    ],
    "correctAnswer": "Implementing strict data protection laws like GDPR."
  },
  {
    "id": 25,
    "questionText": "How do AI and IoT technologies impact daily life?",
    "options": [
      "By making daily tasks more complex.",
      "By providing smart solutions for homes, healthcare, and transportation.",
      "By reducing the need for personal interaction.",
      "By increasing manual labor."
    ],
    "correctAnswer": "By providing smart solutions for homes, healthcare, and transportation."
  },
  {
    "id": 26,
    "questionText": "How do AI and IoT impact work environments?",
    "options": [
      "By making all jobs obsolete.",
      "By automating repetitive tasks, improving efficiency, and enabling data-driven decision-making.",
      "By decreasing the need for technology.",
      "By forcing all employees to learn programming."
    ],
    "correctAnswer": "By automating repetitive tasks, improving efficiency, and enabling data-driven decision-making."
  },
  {
    "id": 27,
    "questionText": "According to the source, what societal challenge can smart cities leverage IoT to address?",
    "options": [
      "Increased traffic congestion.",
      "Efficient resource management and improved public services.",
      "Decreased urban development.",
      "Reduced data sharing."
    ],
    "correctAnswer": "Efficient resource management and improved public services."
  },
  {
    "id": 28,
    "questionText": "Which of the following is a subfield of AI that helps computers understand human language?",
    "options": [
      "Robotics",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Deep Learning"
    ],
    "correctAnswer": "Natural Language Processing (NLP)"
  },
  {
    "id": 29,
    "questionText": "What is the role of sensors in an IoT system?",
    "options": [
      "To perform specific tasks based on data.",
      "To connect devices to the internet.",
      "To detect and measure physical properties from the environment.",
      "To process and analyze data."
    ],
    "correctAnswer": "To detect and measure physical properties from the environment."
  },
  {
    "id": 30,
    "questionText": "The first AI program, 'Logic Theorist,' was created in which decade?",
    "options": [
      "1940s",
      "1950s",
      "1960s",
      "1970s"
    ],
    "correctAnswer": "1950s"
  },
  {
    "id": 31,
    "questionText": "In the context of AI applications in finance, what is enabled by AI?",
    "options": [
      "Only basic data entry.",
      "Personalized investment recommendations and fraud detection.",
      "Manual data processing.",
      "Reduction in risk assessment."
    ],
    "correctAnswer": "Personalized investment recommendations and fraud detection."
  },
  {
    "id": 32,
    "questionText": "What does AI in agriculture enable?",
    "options": [
      "Traditional farming practices without change.",
      "Precision farming techniques like predictive analytics for crop yields and automated irrigation.",
      "Increased manual labor in fields.",
      "Reliance on traditional weather forecasting methods."
    ],
    "correctAnswer": "Precision farming techniques like predictive analytics for crop yields and automated irrigation."
  },
  {
    "id": 33,
    "questionText": "Which of the following is an application of AI in e-commerce?",
    "options": [
      "Manual order processing.",
      "Personalized product recommendations and intelligent chatbots for customer support.",
      "Offline sales only.",
      "Limited data collection."
    ],
    "correctAnswer": "Personalized product recommendations and intelligent chatbots for customer support."
  },
  {
    "id": 34,
    "questionText": "A decision tree is used to identify an animal based on characteristics. This is an example of what type of AI algorithm?",
    "options": [
      "Blackbox",
      "Unexplainable",
      "Explainable (Whitebox)",
      "Neural Network"
    ],
    "correctAnswer": "Explainable (Whitebox)"
  },
  {
    "id": 35,
    "questionText": "Linear regression helps find the relationship between:",
    "options": [
      "Complex datasets with many variables.",
      "Two features, like study time and grades.",
      "Categorical data only.",
      "Unstructured data."
    ],
    "correctAnswer": "Two features, like study time and grades."
  },
  {
    "id": 36,
    "questionText": "Rule-based systems are like a set of 'if-then' rules that computers follow to make decisions. Who writes these rules?",
    "options": [
      "The computer itself.",
      "Other AI systems.",
      "Humans.",
      "Randomly generated algorithms."
    ],
    "correctAnswer": "Humans."
  },
  {
    "id": 37,
    "questionText": "Why are explainable AI algorithms important in fields like healthcare and finance?",
    "options": [
      "They are faster to develop.",
      "They require less data.",
      "Understanding the decision-making process is essential for trust and accountability.",
      "They are less prone to errors."
    ],
    "correctAnswer": "Understanding the decision-making process is essential for trust and accountability."
  },
  {
    "id": 38,
    "questionText": "What is the significance of IoT in connecting devices and systems?",
    "options": [
      "It makes devices more complex to use.",
      "It allows for seamless integration of the physical and digital worlds, enabling data collection and sharing.",
      "It limits data exchange to only a few devices.",
      "It reduces the overall number of devices used."
    ],
    "correctAnswer": "It allows for seamless integration of the physical and digital worlds, enabling data collection and sharing."
  },
  {
    "id": 39,
    "questionText": "What are 'Devices' in an IoT system?",
    "options": [
      "Only smartwatches and fitness trackers.",
      "Everyday objects like smartwatches, refrigerators, and cars that are connected to the internet.",
      "Only sensors that collect data.",
      "Only the networks connecting devices."
    ],
    "correctAnswer": "Everyday objects like smartwatches, refrigerators, and cars that are connected to the internet."
  },
  {
    "id": 40,
    "questionText": "How can strong passwords contribute to IoT security?",
    "options": [
      "They slow down data transmission.",
      "They help prevent unauthorized access to IoT devices.",
      "They make devices easier to manage.",
      "They are a form of data analysis."
    ],
    "correctAnswer": "They help prevent unauthorized access to IoT devices."
  },
  {
    "id": 41,
    "questionText": "What is the purpose of regular software updates for IoT devices?",
    "options": [
      "To increase battery consumption.",
      "To introduce new, unrelated features.",
      "To protect against known vulnerabilities and improve security.",
      "To make devices more expensive."
    ],
    "correctAnswer": "To protect against known vulnerabilities and improve security."
  },
  {
    "id": 42,
    "questionText": "GDPR (General Data Protection Regulation) in Europe is an example of which type of framework for AI and IoT?",
    "options": [
      "Ethical Guidelines",
      "Security Standards",
      "Data Protection Laws",
      "Bias Mitigation Standards"
    ],
    "correctAnswer": "Data Protection Laws"
  },
  {
    "id": 43,
    "questionText": "IEEE (Institute of Electrical and Electronics Engineers) has developed guidelines for:",
    "options": [
      "Speed optimization in AI.",
      "Ethical AI.",
      "Hardware manufacturing.",
      "Network topology."
    ],
    "correctAnswer": "Ethical AI."
  },
  {
    "id": 44,
    "questionText": "Why is diverse and representative data collection important in addressing algorithmic bias?",
    "options": [
      "It makes the algorithm faster.",
      "It simplifies the model.",
      "It helps in identifying and mitigating biases in AI models.",
      "It reduces the amount of data needed."
    ],
    "correctAnswer": "It helps in identifying and mitigating biases in AI models."
  },
  {
    "id": 45,
    "questionText": "The 'Logic Theorist' program, which mimicked human problem-solving, was created in what year?",
    "options": [
      "1945",
      "1955",
      "1965",
      "1975"
    ],
    "correctAnswer": "1955"
  },
  {
    "id": 46,
    "questionText": "What is the approximate number of IoT devices in use worldwide in 2020?",
    "options": [
      "5 billion",
      "10 billion",
      "20 billion",
      "50 billion"
    ],
    "correctAnswer": "20 billion"
  },
  {
    "id": 47,
    "questionText": "What is a key characteristic of the 'Deep Learning' subfield of AI?",
    "options": [
      "It uses simple rule-based logic.",
      "It relies on explicit programming for every task.",
      "It uses complex neural networks, inspired by the human brain.",
      "It is primarily concerned with processing structured data."
    ],
    "correctAnswer": "It uses complex neural networks, inspired by the human brain."
  },
  {
    "id": 48,
    "questionText": "Which AI application involves autonomous driving and advanced driver assistance?",
    "options": [
      "Healthcare",
      "Gaming",
      "Automobile",
      "Education"
    ],
    "correctAnswer": "Automobile"
  },
  {
    "id": 49,
    "questionText": "How does AI benefit social media platforms?",
    "options": [
      "By limiting user interactions.",
      "By powering personalized content recommendations and targeted advertising.",
      "By removing all user-generated content.",
      "By solely focusing on text-based communication."
    ],
    "correctAnswer": "By powering personalized content recommendations and targeted advertising."
  },
  {
    "id": 50,
    "questionText": "What kind of AI algorithms are represented by Neural Networks and Deep Learning Models?",
    "options": [
      "Explainable (Whitebox)",
      "Unexplainable (Blackbox)",
      "Symbolic",
      "Expert Systems"
    ],
    "correctAnswer": "Unexplainable (Blackbox)"
  }
],
  "Ethical Social and Legal Concerns in Computer Usage": [
  {
    "id": 1,
    "questionText": "What does \"responsible computer usage\" mean?",
    "options": [
      "Only using expensive, new computers.",
      "Making thoughtful decisions when using computers, including selecting the right hardware/software, safeguarding data, and respecting others online.",
      "Using computers for entertainment purposes only.",
      "Avoiding the internet entirely."
    ],
    "correctAnswer": "Making thoughtful decisions when using computers, including selecting the right hardware/software, safeguarding data, and respecting others online."
  },
  {
    "id": 2,
    "questionText": "Why is choosing the right hardware and software important for computer usage?",
    "options": [
      "It primarily affects the aesthetic appeal of the computer.",
      "It can affect the safety, efficiency, and overall experience of using a computer.",
      "It determines the cost of internet access.",
      "It only impacts game performance."
    ],
    "correctAnswer": "It can affect the safety, efficiency, and overall experience of using a computer."
  },
  {
    "id": 3,
    "questionText": "What is \"Compatibility\" in the context of hardware and software?",
    "options": [
      "The speed at which they operate.",
      "The cost of the components.",
      "That the hardware and software should work well together.",
      "The brand name of the components."
    ],
    "correctAnswer": "That the hardware and software should work well together."
  },
  {
    "id": 4,
    "questionText": "What is a key practice for the safe operation of digital platforms and devices?",
    "options": [
      "Using simple, easy-to-remember passwords.",
      "Avoiding all software updates.",
      "Using strong, unique passwords.",
      "Sharing personal information publicly."
    ],
    "correctAnswer": "Using strong, unique passwords."
  },
  {
    "id": 5,
    "questionText": "What is the purpose of regular software updates?",
    "options": [
      "To make your computer run slower.",
      "To introduce new, unnecessary features.",
      "To include important security fixes that protect your device from new threats.",
      "To change the user interface."
    ],
    "correctAnswer": "To include important security fixes that protect your device from new threats."
  },
  {
    "id": 6,
    "questionText": "Why should you be cautious with unknown links and downloads?",
    "options": [
      "They might offer free software.",
      "They could contain harmful software (malware) that can damage your device or steal personal information.",
      "They might be slow to download.",
      "They are usually from legitimate sources."
    ],
    "correctAnswer": "They could contain harmful software (malware) that can damage your device or steal personal information."
  },
  {
    "id": 7,
    "questionText": "What does \"Two-Factor Authentication (2FA)\" add to your accounts?",
    "options": [
      "A simpler login process.",
      "An extra layer of security by requiring a second piece of information after the password.",
      "The ability to log in from multiple devices simultaneously without verification.",
      "A way to bypass password requirements."
    ],
    "correctAnswer": "An extra layer of security by requiring a second piece of information after the password."
  },
  {
    "id": 8,
    "questionText": "Why is it advisable to avoid public Wi-Fi for sensitive transactions (e.g., online banking)?",
    "options": [
      "Public Wi-Fi is often faster for such transactions.",
      "Public Wi-Fi networks are often less secure.",
      "Public Wi-Fi is always encrypted.",
      "Public Wi-Fi limits data usage."
    ],
    "correctAnswer": "Public Wi-Fi networks are often less secure."
  },
  {
    "id": 9,
    "questionText": "What are \"phishing\" emails?",
    "options": [
      "Legitimate emails from companies asking for personal information.",
      "Emails designed to trick you into revealing sensitive information by pretending to be from legitimate companies.",
      "Emails containing software updates.",
      "Emails for marketing purposes."
    ],
    "correctAnswer": "Emails designed to trick you into revealing sensitive information by pretending to be from legitimate companies."
  },
  {
    "id": 10,
    "questionText": "What is a recommended practice if you notice unusual activity in your online accounts?",
    "options": [
      "Ignore it, as it's probably a minor glitch.",
      "Change your password immediately and report the activity.",
      "Share the suspicious activity on social media.",
      "Wait for the activity to resolve itself."
    ],
    "correctAnswer": "Change your password immediately and report the activity."
  },
  {
    "id": 11,
    "questionText": "What is the purpose of \"Data Backups\"?",
    "options": [
      "To save storage space on your device.",
      "To make your data accessible to everyone.",
      "To ensure you can recover important information if something goes wrong with your device.",
      "To encrypt your data."
    ],
    "correctAnswer": "To ensure you can recover important information if something goes wrong with your device."
  },
  {
    "id": 12,
    "questionText": "When using social media, what is a responsible behavior?",
    "options": [
      "Sharing your home address publicly to connect with others.",
      "Avoiding sharing personal information publicly.",
      "Posting everything without thinking about consequences.",
      "Ignoring privacy settings."
    ],
    "correctAnswer": "Avoiding sharing personal information publicly."
  },
  {
    "id": 13,
    "questionText": "What is the importance of \"Privacy Settings\" on online platforms?",
    "options": [
      "To increase the visibility of your posts to everyone.",
      "To control who can see your information and interact with you online.",
      "To share all your data with third parties.",
      "To make your account easier to find."
    ],
    "correctAnswer": "To control who can see your information and interact with you online."
  },
  {
    "id": 14,
    "questionText": "What are \"Privacy Laws\"?",
    "options": [
      "Rules set by companies to manage their own data.",
      "Rules set by the government to protect our personal information.",
      "Guidelines for sharing information publicly.",
      "Laws specific to hardware manufacturing."
    ],
    "correctAnswer": "Rules set by the government to protect our personal information."
  },
  {
    "id": 15,
    "questionText": "What is \"Data Ethics\" about?",
    "options": [
      "Gathering as much data as possible without restrictions.",
      "Doing the right thing when it comes to collecting, storing, and using information fairly and responsibly.",
      "Selling user data to third parties for profit.",
      "Ignoring user consent during data collection."
    ],
    "correctAnswer": "Doing the right thing when it comes to collecting, storing, and using information fairly and responsibly."
  },
  {
    "id": 16,
    "questionText": "Which of the following is an ethical guideline for data usage?",
    "options": [
      "Data maximization (collecting as much as possible).",
      "Data sharing without consent.",
      "Informed Consent (asking for permission before collecting data).",
      "Avoiding accountability for data breaches."
    ],
    "correctAnswer": "Informed Consent (asking for permission before collecting data)."
  },
  {
    "id": 17,
    "questionText": "What do \"Intellectual Property Rights\" protect?",
    "options": [
      "Physical objects and tangible assets only.",
      "The creations and ideas of individuals and organizations.",
      "Public domain information.",
      "Open-source software."
    ],
    "correctAnswer": "The creations and ideas of individuals and organizations."
  },
  {
    "id": 18,
    "questionText": "What is \"Copyright\"?",
    "options": [
      "A symbol used by companies to distinguish their products.",
      "A legal right that gives creators control over their original works (music, books, software).",
      "Exclusive rights to make, use, or sell an invention.",
      "The right to copy and distribute any content freely."
    ],
    "correctAnswer": "A legal right that gives creators control over their original works (music, books, software)."
  },
  {
    "id": 19,
    "questionText": "What are \"Trademarks\"?",
    "options": [
      "Legal rights for original literary works.",
      "Symbols, names, or slogans used by companies to distinguish their products or services.",
      "Exclusive rights for new inventions.",
      "Permissions to use software."
    ],
    "correctAnswer": "Symbols, names, or slogans used by companies to distinguish their products or services."
  },
  {
    "id": 20,
    "questionText": "What do \"Patents\" protect?",
    "options": [
      "Music and artistic works.",
      "Company logos and brand names.",
      "New inventions or processes, giving the inventor exclusive rights.",
      "Software code from being copied."
    ],
    "correctAnswer": "New inventions or processes, giving the inventor exclusive rights."
  },
  {
    "id": 21,
    "questionText": "What is \"Software Piracy\"?",
    "options": [
      "Buying software from an official source.",
      "The legal sharing of software licenses.",
      "The illegal copying, distribution, or use of software.",
      "Updating software regularly."
    ],
    "correctAnswer": "The illegal copying, distribution, or use of software."
  },
  {
    "id": 22,
    "questionText": "When searching for information online, why should you \"Cross-Check Information\"?",
    "options": [
      "To find sensational headlines.",
      "To rely on a single source.",
      "To confirm the accuracy of information by checking multiple trustworthy sources.",
      "To make the search process longer."
    ],
    "correctAnswer": "To confirm the accuracy of information by checking multiple trustworthy sources."
  },
  {
    "id": 23,
    "questionText": "What is \"Private Browsing\" mode useful for during online research?",
    "options": [
      "Saving all browsing history and personal information.",
      "Not saving browsing history or personal information.",
      "Increasing the speed of internet connection.",
      "Bypassing security measures on websites."
    ],
    "correctAnswer": "Not saving browsing history or personal information."
  },
  {
    "id": 24,
    "questionText": "What are some signs that a person might be developing an \"Internet Addiction\"?",
    "options": [
      "Spending time with family and friends.",
      "Finding it hard to stop using the internet, even when it interferes with daily life.",
      "Regularly completing homework on time.",
      "Balancing online time with offline activities."
    ],
    "correctAnswer": "Finding it hard to stop using the internet, even when it interferes with daily life."
  },
  {
    "id": 25,
    "questionText": "What is a strategy for promoting balanced internet usage?",
    "options": [
      "Spending all free time online.",
      "Setting time limits on internet use.",
      "Ignoring offline activities.",
      "Constantly checking social media."
    ],
    "correctAnswer": "Setting time limits on internet use."
  },
  {
    "id": 26,
    "questionText": "When using social networking platforms, what is a responsible practice for privacy?",
    "options": [
      "Setting accounts to public for maximum reach.",
      "Adjusting privacy settings to private so only trusted people can see posts.",
      "Sharing personal details with strangers.",
      "Accepting all friend requests without checking."
    ],
    "correctAnswer": "Adjusting privacy settings to private so only trusted people can see posts."
  },
  {
    "id": 27,
    "questionText": "What is \"Cyberbullying\"?",
    "options": [
      "Sending kind messages to friends online.",
      "Using the Internet to harm or harass others through mean messages, rumors, or embarrassing photos.",
      "Reporting suspicious activity to platform administrators.",
      "Offering support to others online."
    ],
    "correctAnswer": "Using the Internet to harm or harass others through mean messages, rumors, or embarrassing photos."
  },
  {
    "id": 28,
    "questionText": "If you experience or witness cyberbullying, what is a recommended action?",
    "options": [
      "Engage in a verbal argument with the bully.",
      "Report it to the platform and block the person responsible.",
      "Ignore it and hope it goes away.",
      "Retaliate with more aggressive messages."
    ],
    "correctAnswer": "Report it to the platform and block the person responsible."
  },
  {
    "id": 29,
    "questionText": "How does computing technology affect the \"Economic Impact\" on society?",
    "options": [
      "It only decreases job opportunities.",
      "It creates new industries and job opportunities, while also affecting traditional jobs through automation.",
      "It has no effect on the economy.",
      "It only benefits large corporations."
    ],
    "correctAnswer": "It creates new industries and job opportunities, while also affecting traditional jobs through automation."
  },
  {
    "id": 30,
    "questionText": "How does computing influence \"Global Trade\"?",
    "options": [
      "It makes it harder to buy and sell products internationally.",
      "It makes it easier to buy and sell products around the world through online shopping platforms.",
      "It limits trade to local businesses only.",
      "It has no impact on trade."
    ],
    "correctAnswer": "It makes it easier to buy and sell products around the world through online shopping platforms."
  },
  {
    "id": 31,
    "questionText": "What is a risk associated with \"Misinformation\" on social networking?",
    "options": [
      "It strengthens critical thinking skills.",
      "It can mislead people and cause confusion, leading to harmful behavior.",
      "It promotes accurate news.",
      "It encourages diverse opinions."
    ],
    "correctAnswer": "It can mislead people and cause confusion, leading to harmful behavior."
  },
  {
    "id": 32,
    "questionText": "What is a trade-off between \"Privacy vs. Usability\" in computing systems?",
    "options": [
      "Increased usability always leads to better privacy.",
      "Requiring strong passwords and 2FA can make logging in more secure but also more time-consuming.",
      "Privacy and usability are always mutually exclusive.",
      "Simplifying privacy settings always enhances security."
    ],
    "correctAnswer": "Requiring strong passwords and 2FA can make logging in more secure but also more time-consuming."
  },
  {
    "id": 33,
    "questionText": "What is the \"Golden Rule\" for online etiquette?",
    "options": [
      "Always post your opinions loudly.",
      "Treat others as you want to be treated.",
      "Share as much personal information as possible.",
      "Never interact with anyone online."
    ],
    "correctAnswer": "Treat others as you want to be treated."
  },
  {
    "id": 34,
    "questionText": "What is \"Cyber Hygiene\" compared to in the source?",
    "options": [
      "Daily exercise.",
      "Washing your hands to prevent germs.",
      "Eating healthy food.",
      "Reading a book."
    ],
    "correctAnswer": "Washing your hands to prevent germs."
  },
  {
    "id": 35,
    "questionText": "The first use of Two-Factor Authentication (2FA) became widespread with the rise of online accounts in which decade?",
    "options": [
      "1980s",
      "1990s",
      "2000s",
      "2010s"
    ],
    "correctAnswer": "2000s"
  },
  {
    "id": 36,
    "questionText": "What ethical principle means you have the right to know how your data is being used?",
    "options": [
      "Data Minimization",
      "Accountability",
      "Informed Consent",
      "Data Security"
    ],
    "correctAnswer": "Informed Consent"
  },
  {
    "id": 37,
    "questionText": "According to the source, the largest data breach affected Yahoo in 2013, exposing how many accounts?",
    "options": [
      "3 million",
      "30 million",
      "300 million",
      "3 billion"
    ],
    "correctAnswer": "3 billion"
  },
  {
    "id": 38,
    "questionText": "What is the estimated annual cost of software piracy to the global economy?",
    "options": [
      "$4.6 billion",
      "$46 million",
      "$46 billion",
      "$460 million"
    ],
    "correctAnswer": "$46 billion"
  },
  {
    "id": 39,
    "questionText": "What type of websites are usually educational institutions and often more reliable sources for research?",
    "options": [
      "Those with \".com\" domains.",
      "Those with \".org\" domains.",
      "Those with \".edu\" domains.",
      "Those with \".net\" domains."
    ],
    "correctAnswer": "Those with \".edu\" domains."
  },
  {
    "id": 40,
    "questionText": "What was the first computer mouse, invented in 1964, made of?",
    "options": [
      "Plastic with multiple buttons.",
      "Metal with a trackball.",
      "Wood with a single button.",
      "Rubber with two buttons."
    ],
    "correctAnswer": "Wood with a single button."
  },
  {
    "id": 41,
    "questionText": "Which of the following is NOT a strategy for digital well-being?",
    "options": [
      "Taking regular breaks from internet use.",
      "Using technology wisely to manage online time.",
      "Ignoring your mental health if being online makes you stressed.",
      "Fostering healthy online habits."
    ],
    "correctAnswer": "Ignoring your mental health if being online makes you stressed."
  },
  {
    "id": 42,
    "questionText": "What does \"Data Minimization\" mean in ethical data usage?",
    "options": [
      "Collecting as much data as possible.",
      "Only collecting the data you need.",
      "Storing data for the shortest possible time.",
      "Deleting all collected data after use."
    ],
    "correctAnswer": "Only collecting the data you need."
  },
  {
    "id": 43,
    "questionText": "Which legal consequence can arise from unauthorized access to personal data?",
    "options": [
      "Identity theft or fraud.",
      "Increased system performance.",
      "Enhanced data security.",
      "Automatic software updates."
    ],
    "correctAnswer": "Identity theft or fraud."
  },
  {
    "id": 44,
    "questionText": "What is the responsibility of companies regarding user information according to privacy laws?",
    "options": [
      "To sell it to third parties for profit.",
      "To share it openly with other companies.",
      "To implement strong security measures like encryption to protect data.",
      "To store it indefinitely without consent."
    ],
    "correctAnswer": "To implement strong security measures like encryption to protect data."
  },
  {
    "id": 45,
    "questionText": "The ethical principle of \"Accountability\" in data ethics means:",
    "options": [
      "Collecting data from many different sources.",
      "Taking responsibility if something goes wrong with data handling.",
      "Only collecting numerical data.",
      "Ensuring data is always public."
    ],
    "correctAnswer": "Taking responsibility if something goes wrong with data handling."
  },
  {
    "id": 46,
    "questionText": "What is the role of computing in \"Cultural Evolution\"?",
    "options": [
      "It restricts cultural exchange to local communities.",
      "It helps share and spread cultures through online platforms like YouTube.",
      "It homogenizes all cultures into one.",
      "It has no impact on culture."
    ],
    "correctAnswer": "It helps share and spread cultures through online platforms like YouTube."
  },
  {
    "id": 47,
    "questionText": "What is the importance of \"Data Security Measures\"?",
    "options": [
      "To make data publicly accessible.",
      "To protect your information from unauthorized access.",
      "To reduce the amount of data stored.",
      "To simplify user passwords."
    ],
    "correctAnswer": "To protect your information from unauthorized access."
  },
  {
    "id": 48,
    "questionText": "What does \"Economic Impact\" of computing include?",
    "options": [
      "Only the environmental cost of computers.",
      "The creation of new industries and job opportunities, as well as the impact on traditional jobs.",
      "Reduced global trade due to automation.",
      "A decrease in technological advancements."
    ],
    "correctAnswer": "The creation of new industries and job opportunities, as well as the impact on traditional jobs."
  },
  {
    "id": 49,
    "questionText": "When designing systems, what does the trade-off between \"Security vs. Usability\" imply?",
    "options": [
      "Higher security always makes systems easier to use.",
      "Implementing high-security measures can sometimes make systems less user-friendly.",
      "Security and usability are always inversely proportional.",
      "Usability should always be prioritized over security."
    ],
    "correctAnswer": "Implementing high-security measures can sometimes make systems less user-friendly."
  },
  {
    "id": 50,
    "questionText": "What does \"Credibility Check\" for online sources suggest for websites with \".edu\" domains?",
    "options": [
      "They are often less reliable.",
      "They are usually educational institutions and often more reliable for research.",
      "They are typically commercial websites.",
      "They should be avoided for sensitive information."
    ],
    "correctAnswer": "They are usually educational institutions and often more reliable for research."
  }
],
  "Entrepreneurship in Digital Age": [
  {
    "id": 1,
    "questionText": "What is \"Entrepreneurship\" defined as?",
    "options": [
      "The process of buying and selling stocks.",
      "The process of working for a large company.",
      "The process of designing, launching, and running a new business, often initially a small business.",
      "The process of managing existing businesses."
    ],
    "correctAnswer": "The process of designing, launching, and running a new business, often initially a small business."
  },
  {
    "id": 2,
    "questionText": "Which of the following is an example of entrepreneurship mentioned in the text?",
    "options": [
      "Working as an employee in a large corporation.",
      "Tech startups like Facebook and Google.",
      "Government-owned businesses.",
      "Non-profit organizations focused solely on charity."
    ],
    "correctAnswer": "Tech startups like Facebook and Google."
  },
  {
    "id": 3,
    "questionText": "What is a key characteristic of successful entrepreneurs?",
    "options": [
      "Avoiding risks and sticking to established methods.",
      "High job security and predictable outcomes.",
      "Innovation and risk-taking.",
      "Reluctance to adapt to change."
    ],
    "correctAnswer": "Innovation and risk-taking."
  },
  {
    "id": 4,
    "questionText": "The word \"entrepreneur\" comes from a French word meaning:",
    "options": [
      "\"To create\"",
      "\"To innovate\"",
      "\"To undertake\"",
      "\"To manage\""
    ],
    "correctAnswer": "\"To undertake\""
  },
  {
    "id": 5,
    "questionText": "What is one reason why entrepreneurship is important?",
    "options": [
      "It primarily slows down economic growth.",
      "It discourages new ideas and competition.",
      "It drives economic growth and fosters innovation.",
      "It only benefits the entrepreneurs themselves."
    ],
    "correctAnswer": "It drives economic growth and fosters innovation."
  },
  {
    "id": 6,
    "questionText": "The invention of the smartphone is given as an example of entrepreneurial:",
    "options": [
      "Risk avoidance.",
      "Innovation and progress.",
      "Economic stability.",
      "Traditional business practices."
    ],
    "correctAnswer": "Innovation and progress."
  },
  {
    "id": 7,
    "questionText": "What does \"Digital Entrepreneurship\" involve?",
    "options": [
      "Running businesses solely through physical stores.",
      "Leveraging the power of the Internet, digital platforms, and various technologies to create and run businesses.",
      "Avoiding digital tools in business.",
      "Focusing only on local markets."
    ],
    "correctAnswer": "Leveraging the power of the Internet, digital platforms, and various technologies to create and run businesses."
  },
  {
    "id": 8,
    "questionText": "Which of the following is NOT an example of a digital technology that enhances business operations for entrepreneurs?",
    "options": [
      "Social media",
      "Mobile apps",
      "Cloud computing",
      "Traditional postal services"
    ],
    "correctAnswer": "Traditional postal services"
  },
  {
    "id": 9,
    "questionText": "What is the role of \"Social Media\" for entrepreneurs in the digital landscape?",
    "options": [
      "Primarily for personal use, not business.",
      "To market products, engage with customers, and build a brand presence.",
      "To store sensitive financial data.",
      "To avoid customer interaction."
    ],
    "correctAnswer": "To market products, engage with customers, and build a brand presence."
  },
  {
    "id": 10,
    "questionText": "What does \"Cloud Computing\" allow businesses to do?",
    "options": [
      "Store data and run applications over the Internet, reducing the need for physical infrastructure.",
      "Rely solely on local servers.",
      "Increase the cost of IT infrastructure.",
      "Limit access to data."
    ],
    "correctAnswer": "Store data and run applications over the Internet, reducing the need for physical infrastructure."
  },
  {
    "id": 11,
    "questionText": "What is \"Big Data Analytics\" used for by businesses?",
    "options": [
      "To manage small datasets only.",
      "To understand market trends, customer behavior, and make informed decisions.",
      "To replace human decision-making entirely.",
      "To generate random business ideas."
    ],
    "correctAnswer": "To understand market trends, customer behavior, and make informed decisions."
  },
  {
    "id": 12,
    "questionText": "What does \"Digital Marketing\" involve?",
    "options": [
      "Promoting products and services using only traditional media.",
      "Promoting products and services using digital channels.",
      "Selling goods online without promotion.",
      "Analyzing competitor's physical store sales."
    ],
    "correctAnswer": "Promoting products and services using digital channels."
  },
  {
    "id": 13,
    "questionText": "What is \"E-commerce\"?",
    "options": [
      "Buying and selling goods through traditional stores.",
      "Buying and selling goods online.",
      "Marketing products without selling them.",
      "Managing inventory manually."
    ],
    "correctAnswer": "Buying and selling goods online."
  },
  {
    "id": 14,
    "questionText": "Which digital marketing strategy optimizes website content to rank higher in search engine results?",
    "options": [
      "Social Media Marketing",
      "Content Marketing",
      "Search Engine Optimization (SEO)",
      "Email Marketing"
    ],
    "correctAnswer": "Search Engine Optimization (SEO)"
  },
  {
    "id": 15,
    "questionText": "E-commerce platforms like Amazon, eBay, and Shopify allow entrepreneurs to:",
    "options": [
      "Avoid online sales.",
      "Set up online stores, manage inventory, and process payments.",
      "Only market products, not sell them.",
      "Focus solely on local customers."
    ],
    "correctAnswer": "Set up online stores, manage inventory, and process payments."
  },
  {
    "id": 16,
    "questionText": "Daraz is a leading e-commerce platform in which region?",
    "options": [
      "North America",
      "Europe",
      "South Asia",
      "Africa"
    ],
    "correctAnswer": "South Asia"
  },
  {
    "id": 17,
    "questionText": "Bykea is a Pakistani startup that leverages digital technology to provide:",
    "options": [
      "Online shopping for electronics.",
      "On-demand transportation and delivery services.",
      "Cloud storage solutions.",
      "Social media marketing services."
    ],
    "correctAnswer": "On-demand transportation and delivery services."
  },
  {
    "id": 18,
    "questionText": "Which of the following is an opportunity presented by digital entrepreneurship?",
    "options": [
      "High competition.",
      "Access to a global market.",
      "Cybersecurity threats.",
      "Need for continuous innovation."
    ],
    "correctAnswer": "Access to a global market."
  },
  {
    "id": 19,
    "questionText": "Which of the following is a challenge faced by digital entrepreneurship?",
    "options": [
      "Cost-effective marketing.",
      "Enhanced customer engagement.",
      "Cybersecurity threats.",
      "Access to a global market."
    ],
    "correctAnswer": "Cybersecurity threats."
  },
  {
    "id": 20,
    "questionText": "Which digital tool is popular for creating and editing documents online, allowing multiple users to collaborate in real time?",
    "options": [
      "SurveyMonkey",
      "Google Docs",
      "SEMrush",
      "Zendesk"
    ],
    "correctAnswer": "Google Docs"
  },
  {
    "id": 21,
    "questionText": "Which market research tool tracks website traffic and user behavior?",
    "options": [
      "SurveyMonkey",
      "SEMrush",
      "Google Analytics",
      "Hootsuite"
    ],
    "correctAnswer": "Google Analytics"
  },
  {
    "id": 22,
    "questionText": "Which market research tool conducts online surveys to gather customer feedback?",
    "options": [
      "Google Analytics",
      "SEMrush",
      "SurveyMonkey",
      "Canva"
    ],
    "correctAnswer": "SurveyMonkey"
  },
  {
    "id": 23,
    "questionText": "Which online marketing tool is used to manage social media accounts and schedules posts?",
    "options": [
      "Yoast SEO",
      "Canva",
      "Hootsuite",
      "PayPal"
    ],
    "correctAnswer": "Hootsuite"
  },
  {
    "id": 24,
    "questionText": "What does \"Ideation\" mean in business idea generation?",
    "options": [
      "The process of implementing a solution.",
      "The process of generating ideas.",
      "The process of testing a product.",
      "The process of analyzing market data."
    ],
    "correctAnswer": "The process of generating ideas."
  },
  {
    "id": 25,
    "questionText": "What is the first step in generating a viable business idea?",
    "options": [
      "Creative problem-solving.",
      "Developing a business plan.",
      "Identifying market needs and opportunities.",
      "Prototyping a product."
    ],
    "correctAnswer": "Identifying market needs and opportunities."
  },
  {
    "id": 26,
    "questionText": "Which of the following is NOT a technique for identifying market needs?",
    "options": [
      "Surveys and Questionnaires.",
      "Market Research.",
      "Observation.",
      "Ignoring customer feedback."
    ],
    "correctAnswer": "Ignoring customer feedback."
  },
  {
    "id": 27,
    "questionText": "What is \"Design Thinking\"?",
    "options": [
      "A solution-focused approach that involves empathizing, defining, ideating, prototyping, and testing.",
      "A method for complex financial analysis.",
      "A process for creating physical prototypes only.",
      "A way to avoid problem-solving."
    ],
    "correctAnswer": "A solution-focused approach that involves empathizing, defining, ideating, prototyping, and testing."
  },
  {
    "id": 28,
    "questionText": "What is the final step in the Design Thinking process?",
    "options": [
      "Empathizing.",
      "Ideating.",
      "Testing.",
      "Defining."
    ],
    "correctAnswer": "Testing."
  },
  {
    "id": 29,
    "questionText": "What is a \"Business Plan\"?",
    "options": [
      "A short summary of a business idea.",
      "A detailed document that outlines business goals and strategies for achieving them.",
      "A marketing campaign.",
      "A financial report."
    ],
    "correctAnswer": "A detailed document that outlines business goals and strategies for achieving them."
  },
  {
    "id": 30,
    "questionText": "What does \"Market Analysis\" involve in a business plan?",
    "options": [
      "Creating a marketing campaign.",
      "Researching your target market to understand needs and preferences, studying market trends, analyzing competitors.",
      "Calculating revenue forecasts.",
      "Defining pricing strategies."
    ],
    "correctAnswer": "Researching your target market to understand needs and preferences, studying market trends, analyzing competitors."
  },
  {
    "id": 31,
    "questionText": "What does a \"Revenue Model\" outline?",
    "options": [
      "The marketing strategies for a business.",
      "How your business will generate income.",
      "The operational structure of the business.",
      "The legal compliance requirements."
    ],
    "correctAnswer": "How your business will generate income."
  },
  {
    "id": 32,
    "questionText": "What does \"Prototyping\" involve in refining business ideas?",
    "options": [
      "Finalizing the product design.",
      "Creating a preliminary model of your product or service to test and refine your business idea.",
      "Launching the product directly to market.",
      "Documenting legal requirements."
    ],
    "correctAnswer": "Creating a preliminary model of your product or service to test and refine your business idea."
  },
  {
    "id": 33,
    "questionText": "What is \"Iteration\" in business development?",
    "options": [
      "The initial launch of a product.",
      "The process of making improvements based on feedback.",
      "Avoiding any changes after initial design.",
      "Focusing only on the first design."
    ],
    "correctAnswer": "The process of making improvements based on feedback."
  },
  {
    "id": 34,
    "questionText": "What does \"Ethical Entrepreneurship\" involve?",
    "options": [
      "Maximizing profits at all costs.",
      "Incorporating principles of ethics into all aspects of business operations and decision-making.",
      "Avoiding social responsibility.",
      "Focusing solely on economic growth."
    ],
    "correctAnswer": "Incorporating principles of ethics into all aspects of business operations and decision-making."
  },
  {
    "id": 35,
    "questionText": "Which of the following is a principle of ethics in business?",
    "options": [
      "Deception",
      "Selfishness",
      "Honesty",
      "Exploitation"
    ],
    "correctAnswer": "Honesty"
  },
  {
    "id": 36,
    "questionText": "How many global goals are in the Sustainable Development Goals (SDGs)?",
    "options": [
      "10",
      "15",
      "17",
      "20"
    ],
    "correctAnswer": "17"
  },
  {
    "id": 37,
    "questionText": "What does \"Social Sustainability\" involve according to the SDGs?",
    "options": [
      "Reducing carbon footprints.",
      "Ensuring fair labor practices, promoting education, and supporting community development.",
      "Creating jobs and fostering innovation.",
      "Minimizing waste."
    ],
    "correctAnswer": "Ensuring fair labor practices, promoting education, and supporting community development."
  },
  {
    "id": 38,
    "questionText": "What does \"Environmental Sustainability\" involve according to the SDGs?",
    "options": [
      "Promoting education.",
      "Reducing carbon footprints, using renewable resources, and minimizing waste.",
      "Fostering innovation.",
      "Ensuring fair labor practices."
    ],
    "correctAnswer": "Reducing carbon footprints, using renewable resources, and minimizing waste."
  },
  {
    "id": 39,
    "questionText": "What does \"Economic Sustainability\" involve according to the SDGs?",
    "options": [
      "Reducing carbon footprints.",
      "Promoting education.",
      "Creating jobs, fostering innovation, and contributing to economic growth.",
      "Minimizing waste."
    ],
    "correctAnswer": "Creating jobs, fostering innovation, and contributing to economic growth."
  },
  {
    "id": 40,
    "questionText": "A Pakistani startup focusing on solar energy solutions contributes to which SDG?",
    "options": [
      "SDG 1 (No Poverty)",
      "SDG 4 (Quality Education)",
      "SDG 7 (Affordable and Clean Energy)",
      "SDG 13 (Climate Action)"
    ],
    "correctAnswer": "SDG 7 (Affordable and Clean Energy)"
  },
  {
    "id": 41,
    "questionText": "What is the estimated e-commerce market size in Pakistan in 2021?",
    "options": [
      "$1 billion",
      "$2 billion",
      "$4 billion",
      "$8 billion"
    ],
    "correctAnswer": "$4 billion"
  },
  {
    "id": 42,
    "questionText": "Many successful companies like Apple and Google use which process to develop their products?",
    "options": [
      "Traditional manufacturing.",
      "Design thinking.",
      "Random experimentation.",
      "Market suppression."
    ],
    "correctAnswer": "Design thinking."
  },
  {
    "id": 43,
    "questionText": "What is the benefit of market analysis for businesses?",
    "options": [
      "It guarantees immediate sales.",
      "It helps predict future trends and adapt strategies accordingly.",
      "It eliminates competition.",
      "It reduces production costs directly."
    ],
    "correctAnswer": "It helps predict future trends and adapt strategies accordingly."
  },
  {
    "id": 44,
    "questionText": "Which of the following is NOT a component of a comprehensive business plan?",
    "options": [
      "Market Analysis",
      "Revenue Models",
      "Digital Marketing Strategies",
      "Personal vacation plans"
    ],
    "correctAnswer": "Personal vacation plans"
  },
  {
    "id": 45,
    "questionText": "Why is it crucial to gather feedback from potential customers and stakeholders during prototyping?",
    "options": [
      "To avoid any changes to the original idea.",
      "To make necessary adjustments and improve your product or service.",
      "To immediately launch the product.",
      "To solely rely on internal team opinions."
    ],
    "correctAnswer": "To make necessary adjustments and improve your product or service."
  },
  {
    "id": 46,
    "questionText": "What does \"Sustainable growth\" in entrepreneurship focus on?",
    "options": [
      "Developing a business that maximizes short-term profits.",
      "Developing a business that meets present needs without compromising the ability of future generations to meet their own needs.",
      "Expanding rapidly without considering resources.",
      "Avoiding any environmental regulations."
    ],
    "correctAnswer": "Developing a business that meets present needs without compromising the ability of future generations to meet their own needs."
  },
  {
    "id": 47,
    "questionText": "What is an example of a digital tool for creating visually appealing graphics and marketing materials?",
    "options": [
      "Hootsuite",
      "Yoast SEO",
      "Canva",
      "PayPal"
    ],
    "correctAnswer": "Canva"
  },
  {
    "id": 48,
    "questionText": "What is a key advantage of digital marketing over traditional marketing methods?",
    "options": [
      "It is more expensive.",
      "It can only reach a local audience.",
      "It can reach a global audience at a fraction of the cost, and its effectiveness is easier to measure.",
      "It relies solely on print advertising."
    ],
    "correctAnswer": "It can reach a global audience at a fraction of the cost, and its effectiveness is easier to measure."
  },
  {
    "id": 49,
    "questionText": "Which e-commerce platform mentioned helps create and manage online stores with ease?",
    "options": [
      "PayPal",
      "Zendesk",
      "Shopify",
      "Google Docs"
    ],
    "correctAnswer": "Shopify"
  },
  {
    "id": 50,
    "questionText": "What is the main goal of \"Data-Driven Entrepreneurship\"?",
    "options": [
      "To ignore market trends.",
      "To make informed decisions based on data.",
      "To rely on intuition only.",
      "To generate random business concepts."
    ],
    "correctAnswer": "To make informed decisions based on data."
  }
]
};
