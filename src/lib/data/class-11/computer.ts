
import { MCQ } from '@/lib/types';

export const chapters = ["Introduction to Software Development", 
                        "Python Programming", 
                        "Algorithms and Problem Solving",
                        "Computational Structures",
                        "Data Analytics",
                        "Emerging Technologies",
                        "Legal and Ethical Aspects of Computing System",
                        "Online Research and Digital Literacy",
                        "Entrepreneurship in Digital Age"];
export const mcqs: Record<string, MCQ[]> = {
    "Introduction to Software Development": [
  {
    "id": 1,
    "questionText": "What is the primary purpose of the Software Development Life Cycle (SDLC)?",
    "options": [
      "a) To design websites",
      "b) To deliver high-quality software within time and cost estimates",
      "c) To manage database systems",
      "d) To create hardware components"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Which of the following describes the specific behaviors or functions of a system?",
    "options": [
      "a) Non-Functional Requirements",
      "b) Technical Requirements",
      "c) Functional Requirements",
      "d) Operational Requirements"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "In the context of SDLC, a framework's role is to provide a structured foundation for developing software applications. Which of the following best describes this role?",
    "options": [
      "a) To write code from scratch",
      "b) To provide a structured foundation with predefined components and architectures",
      "c) To manage hardware",
      "d) To perform manual testing"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Which two software development models are explicitly mentioned in the context of varying development methodologies?",
    "options": [
      "a) Lean Software Development and Scrum",
      "b) Waterfall Model and Agile Methodology",
      "c) DevOps and Continuous Integration",
      "d) Rapid Application Development and Prototyping"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is considered a crucial aspect of comprehensive project planning?",
    "options": [
      "a) Understanding the project scope and tasks",
      "b) Deciding the project's colour scheme",
      "c) Hiring a large development team",
      "d) Ignoring potential risks"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 6,
    "questionText": "Which factor is least likely to influence the cost estimation of a software project?",
    "options": [
      "a) Scope of the project",
      "b) Technology stack",
      "c) Number of meetings held",
      "d) Operational costs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is the purpose of Use Case Diagrams?",
    "options": [
      "a) To document the system's architecture",
      "b) To identify and document the system's functional requirements",
      "c) To illustrate the database schema",
      "d) To define the system's user interface design"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the primary difference between Functional Requirements and Non-Functional Requirements?",
    "options": [
      "a) Functional requirements define the \"how\" the system performs, while Non-functional define the \"what\" the system should do.",
      "b) Functional requirements define the \"what\" the system should do, while Non-functional define the \"quality attributes and constraints\".",
      "c) Functional requirements are related to user interactions, while Non-functional are related to system tasks.",
      "d) Functional requirements specify system performance, while Non-functional specify system behaviors."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What is the process of checking software to identify any bugs, errors, or issues, thinking of it as a quality check to make sure everything works as expected?",
    "options": [
      "a) Coding",
      "b) Design",
      "c) Testing",
      "d) Deployment"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What are the three main activities included in the \"Requirement Gathering\" phase of SDLC?",
    "options": [
      "a) Coding, Testing, Deployment",
      "b) Interviews and Surveys, Observations, Document Review",
      "c) Design, Implementation, Maintenance",
      "d) Planning, Execution, Monitoring"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is the definition of Software Development Life Cycle (SDLC)?",
    "options": [
      "a) A process for creating computer programs",
      "b) A framework that defines the processes used by organizations to build an application from its initial conception to its deployment and maintenance",
      "c) A method for debugging software errors",
      "d) A tool for project management"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "In the context of a Library Management System, which of the following is an example of a Functional Requirement?",
    "options": [
      "a) The system should handle up to 1000 simultaneous users without performance degradation.",
      "b) The system should be available 99.9% of the time.",
      "c) User registration: The system should allow users to register and create an account.",
      "d) User data should be encrypted."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is an example of a Non-Functional Requirement for a Library Management System?",
    "options": [
      "a) Book Borrowing: The system should enable users to search for books.",
      "b) Performance: The system should handle up to 1000 simultaneous users without performance degradation.",
      "c) Inventory Management: Librarians should be able to add, update, and remove books.",
      "d) User Registration: The system should allow users to register."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "During the Design phase (1.2.2.2 Design), what is the purpose of \"Create Diagrams\"?",
    "options": [
      "a) To develop mockups of the user interface.",
      "b) To decide the overall structure of the software.",
      "c) To specify clearly what each part of the software needs to do.",
      "d) To show how different parts of the software will connect and work together."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "What is the main characteristic of the Waterfall Model?",
    "options": [
      "a) Flexible and adaptive approach",
      "b) Iterative development in short cycles",
      "c) Straightforward, sequential approach where each phase must be completed before the next one begins",
      "d) Emphasis on continuous integration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which of the following is a limitation of the Waterfall Model?",
    "options": [
      "a) Simple and Easy to Understand",
      "b) Suitable for Small Projects",
      "c) Inflexibility: Once a phase is completed, going back to make changes is difficult and costly.",
      "d) Clear, distinct phases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is a key characteristic of Agile Methodology?",
    "options": [
      "a) A straightforward approach where each phase must be completed before the next.",
      "b) Delivering small, functional parts of the software quickly and adapting to changes as the project progresses.",
      "c) A model that focuses on extensive documentation.",
      "d) A method that avoids stakeholder involvement."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What are the three main activities included in Agile methods?",
    "options": [
      "a) Requirements, Design, Deployment",
      "b) Continuous Integration, Test-Driven Development, Pair Programming",
      "c) Planning, Execution, Monitoring",
      "d) Analysis, Implementation, Maintenance"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "A benefit of Agile Methodology is:",
    "options": [
      "a) Less Predictable",
      "b) High Flexibility: Allows for changes in requirements even after development has started.",
      "c) Scaling Challenges for large projects",
      "d) Limited stakeholder involvement"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the initial phase in Project Planning and Management?",
    "options": [
      "a) Planning",
      "b) Execution",
      "c) Initiation",
      "d) Project closure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What does \"Setting Project Timelines\" involve?",
    "options": [
      "a) Estimating the cost of a software project.",
      "b) Deciding how long each part of the project will take.",
      "c) Identifying potential risks.",
      "d) Ensuring quality standards are met."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "Which of these is a Key Factor in Cost Estimation for a software project?",
    "options": [
      "a) Marketing Strategy",
      "b) Project Duration",
      "c) Customer Support",
      "d) Employee benefits"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "What is the purpose of Risk Assessment and Management?",
    "options": [
      "a) To manage employee performance.",
      "b) To identify potential risks, analyze their impact, and develop strategies to manage them.",
      "c) To determine the project budget.",
      "d) To set project timelines."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What does \"Execution\" phase (1.4.5 Execution) involve in project management?",
    "options": [
      "a) Analyzing risks",
      "b) Designing the project plan",
      "c) Where the actual development work happens, with the team writing code and building the software.",
      "d) Monitoring project progress"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What is the primary goal of Quality Assurance in software development?",
    "options": [
      "a) To design attractive user interfaces.",
      "b) To ensure that a project meets set standards and works correctly.",
      "c) To reduce development costs.",
      "d) To accelerate project timelines."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What does UML (Unified Modeling Language) help developers understand?",
    "options": [
      "a) How to write code more efficiently.",
      "b) How a system works and communicates.",
      "c) How to market software products.",
      "d) How to estimate project costs."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Which type of UML diagram provides a visual representation of the system's functionality from a user's perspective?",
    "options": [
      "a) Class Diagrams",
      "b) Sequence Diagrams",
      "c) Use Case Diagrams",
      "d) Activity Diagrams"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "In a Use Case Diagram, what is an \"actor\"?",
    "options": [
      "a) A specific task the system performs.",
      "b) A set of interactions between a user (actor) and a system to achieve a specific goal.",
      "c) An external entity (person, system, or organization) that interacts with the system.",
      "d) A database entry."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What does a Class Diagram represent?",
    "options": [
      "a) How objects in a system interact over time.",
      "b) How activities or steps flow in a process.",
      "c) How things are organized in a system.",
      "d) The sequence of events in a software application."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "In the example of organizing a room with a Class Diagram, what does \"Room\" represent?",
    "options": [
      "a) A container within the room.",
      "b) An individual item like a toy.",
      "c) The overall space encompassing all other elements, analogous to the main structure in a class diagram.",
      "d) A specific action that can be performed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "What is the purpose of a Sequence Diagram?",
    "options": [
      "a) To show how things are organized in a system.",
      "b) To illustrate the flow of activities in a process.",
      "c) To show how objects in a system interact with each other in a particular sequence.",
      "d) To define the functional requirements of a system."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What do Activity Diagrams illustrate?",
    "options": [
      "a) The organization of classes and objects.",
      "b) The flow of activities or steps in a process.",
      "c) The sequence of interactions between objects.",
      "d) The functional and non-functional requirements."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is the primary benefit of using Design Patterns in software development?",
    "options": [
      "a) To complicate software development.",
      "b) To act like templates to help make coding easier, faster and more consistent.",
      "c) To avoid using standard solutions.",
      "d) To make software less maintainable."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "Which design pattern ensures that a specific object or resource is created only once in a program and reused whenever needed?",
    "options": [
      "a) Factory Pattern",
      "b) Observer Pattern",
      "c) Singleton Pattern",
      "d) Strategy Pattern"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The Factory Design Pattern is described as a special workshop that knows how to create different products. What is its main purpose?",
    "options": [
      "a) To observe changes in other objects.",
      "b) To encapsulate algorithms.",
      "c) To worry about the details of how those products are made.",
      "d) To ensure an object is created only once."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the role of the Observer Design Pattern?",
    "options": [
      "a) To provide a framework for creating families of related objects.",
      "b) To define a family of algorithms, encapsulate each one, and make them interchangeable.",
      "c) To keep things in sync without everyone constantly checking for updates by having a group of people who are interested in getting updates from one particular source.",
      "d) To ensure only one instance of a class exists."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What are Design Patterns widely used for?",
    "options": [
      "a) To make software more complex.",
      "b) To solve common problems and create robust and maintainable code.",
      "c) To introduce new programming languages.",
      "d) To reduce the number of developers needed."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What is the purpose of Debugging in software development?",
    "options": [
      "a) To write new code.",
      "b) To compile the program.",
      "c) To find and fix errors in the software that cause it to behave unexpectedly.",
      "d) To deploy the software to users."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What does Unit Testing involve?",
    "options": [
      "a) Checking the entire software system.",
      "b) Evaluating the interaction between different components.",
      "c) Testing individual parts of the code (like functions or classes) in isolation.",
      "d) Testing the software in a real-world environment."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is Integration Testing designed to evaluate?",
    "options": [
      "a) Individual modules of the software.",
      "b) The interaction between different components or modules.",
      "c) The system's performance under heavy load.",
      "d) User acceptance of the software."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the main goal of System Testing?",
    "options": [
      "a) To find errors in individual lines of code.",
      "b) To ensure the software is treated as a complete entity and tested for its overall functionality, performance, security, and compliance.",
      "c) To check for interface errors between modules.",
      "d) To validate that the software behaves as expected from the user's perspective."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What is another name for Acceptance Testing?",
    "options": [
      "a) Unit Testing",
      "b) Integration Testing",
      "c) User Acceptance Testing (UAT)",
      "d) System Testing"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Which of the following is a Language Editor?",
    "options": [
      "a) Interpreters",
      "b) Compilers",
      "c) Notepad++",
      "d) Debuggers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "What do Translators do in software development?",
    "options": [
      "a) Help developers find and fix errors in their code.",
      "b) Convert code written in one programming language into another language that the computer can understand.",
      "c) Provide a visual development interface.",
      "d) Manage source code repositories."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Which of these is an example of an Interpreter?",
    "options": [
      "a) GCC (for C/C++)",
      "b) Python (translates line-by-line)",
      "c) Visual Studio",
      "d) GitHub"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What are Integrated Development Environments (IDEs)?",
    "options": [
      "a) Standalone debugging tools.",
      "b) Comprehensive software suites that provide all the tools needed for software development in one place.",
      "c) Online platforms for simple code editing.",
      "d) Tools for managing project documentation."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Which of the following is an example of an IDE?",
    "options": [
      "a) Notepad++",
      "b) GitHub",
      "c) Visual Studio",
      "d) Bitbucket"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is the purpose of Source Code Repositories like GitHub or Bitbucket?",
    "options": [
      "a) To execute code directly on a server.",
      "b) To provide an environment for writing, compiling, and debugging code.",
      "c) To store, manage, and track changes to code, helping in version control and allowing multiple developers to work on the same project without conflicts.",
      "d) To offer online platforms accessible via the internet for development."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is a key characteristic of Continuous Integration in Agile Methodology?",
    "options": [
      "a) Writing tests before writing the code.",
      "b) Two developers working together at one workstation.",
      "c) Regularly merging code changes into a central repository to detect and fix issues early.",
      "d) Adapting to changes in requirements even after development."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The SDLC framework defines processes used by organizations. What is its primary objective?",
    "options": [
      "a) To help developers focus on writing code specific to their application.",
      "b) To provide predefined components and architectures.",
      "c) To deliver high-quality software that meets customer expectations, reaches completion within time and cost estimates, and works efficiently.",
      "d) To promote efficiency, consistency, and code reusability."
    ],
    "correctAnswer": "c"
  }
],
    "Python Programming": [
  {
    "id": 1,
    "questionText": "What is the purpose of computer programming?",
    "options": [
      "a) To understand basic programming concepts.",
      "b) To create a set of instructions that tell a computer how to perform a task.",
      "c) To write and interpret basic Python syntax.",
      "d) To apply modular programming techniques."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the first step in writing a computer program?",
    "options": [
      "a) Execute Code",
      "b) Output Display",
      "c) Write Code: Create a set of instructions in a programming language.",
      "d) Compile/Interpret"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What is the development environment for Python used for?",
    "options": [
      "a) To run Python programs only.",
      "b) To prepare a computer to write, run, and debug Python code effectively.",
      "c) To compile Python code into machine language.",
      "d) To display output only."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How can one ensure Python is easily accessible from the command line on Windows during installation?",
    "options": [
      "a) By restarting the computer.",
      "b) By checking the box that says \"Add Python to PATH.\"",
      "c) By installing a different IDE.",
      "d) By manually configuring environment variables after installation."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What does the print() function typically do in Python?",
    "options": [
      "a) Reads input from the user.",
      "b) Stores data in a variable.",
      "c) Displays output messages on the screen.",
      "d) Defines a function."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "How are single-line comments denoted in Python?",
    "options": [
      "a) Using /* comment */",
      "b) Using # comment",
      "c) Using // comment",
      "d) Using "
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What is a variable in programming?",
    "options": [
      "a) A fixed value that cannot change.",
      "b) A storage container in a computer's memory that allows storage, retrieval and manipulation of data.",
      "c) A function that performs an operation.",
      "d) A type of operator."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Which of the following is a valid variable name in Python?",
    "options": [
      "a) 1variable",
      "b) variable-name",
      "c) variable1",
      "d) variable name"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Which of the following is NOT a valid variable naming rule in Python?",
    "options": [
      "a) The name must begin with a letter (a-z, A-Z) or an underscore (_).",
      "b) Subsequent characters can include letters, digits (0-9), or underscores (_).",
      "c) Variable names are case-sensitive.",
      "d) Python's reserved keywords, such as for, while, if, etc., can be used as variable names."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "What are three common types of variables in Python?",
    "options": [
      "a) Integer, String, Function",
      "b) Integer, Floating-point, Boolean",
      "c) Integer, Operator, Expression",
      "d) List, Tuple, Dictionary"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is the purpose of the input() function in Python?",
    "options": [
      "a) To display information on the screen.",
      "b) To store a value in a variable.",
      "c) To accept user input.",
      "d) To convert data types."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "How do you handle integer inputs in Python when the input() function returns a string?",
    "options": [
      "a) You don't need to do anything, Python automatically converts it.",
      "b) Use str() function.",
      "c) Use int() function to convert strings to integers.",
      "d) Use print() function."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Which of the following is an example of an arithmetic operator?",
    "options": [
      "a) ==",
      "b) +=",
      "c) *",
      "d) and"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What is the output of 10 // 3 in Python? (Integer division)",
    "options": [
      "a) 3.3333333333333335",
      "b) 3",
      "c) 1",
      "d) 0"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the output of 10 % 3 in Python? (Modulo operator)",
    "options": [
      "a) 3",
      "b) 1",
      "c) 0",
      "d) 3.3333333333333335"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Which operator is used for exponentiation in Python?",
    "options": [
      "a) /",
      "b) //",
      "c) *",
      "d) **"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "Which of the following is a comparison operator that checks if two values are equal?",
    "options": [
      "a) =",
      "b) !=",
      "c) ==",
      "d) <="
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What does a += b mean in Python, where a and b are variables?",
    "options": [
      "a) a = a - b",
      "b) a = a * b",
      "c) a = a + b",
      "d) a = a / b"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What is the output of (3 + 4) * 2 considering operator precedence?",
    "options": [
      "a) 14",
      "b) 11",
      "c) 10",
      "d) 9"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 20,
    "questionText": "What is the highest precedence operator according to the provided text?",
    "options": [
      "a) Multiplication",
      "b) Division",
      "c) Parentheses",
      "d) Exponentiation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "In Python, what type of value do logical operators (and, or, not) return?",
    "options": [
      "a) Integer",
      "b) String",
      "c) Boolean",
      "d) Float"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What is the purpose of control structures in programming?",
    "options": [
      "a) To define variables.",
      "b) To perform arithmetic operations.",
      "c) To control the flow of a program based on different conditions or repeat certain actions multiple times.",
      "d) To display output."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Which statement is used for decision making based on conditions in Python?",
    "options": [
      "a) while",
      "b) for",
      "c) if",
      "d) print"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What happens if the condition in an if statement is false?",
    "options": [
      "a) The code block inside the if statement is executed.",
      "b) The program stops.",
      "c) The code block inside the else statement (if present) is executed.",
      "d) An error occurs."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What is a short-hand if-else statement also known as?",
    "options": [
      "a) Nested if-else",
      "b) Ternary operator",
      "c) Elif statement",
      "d) Looping construct"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What does an if-elif-else statement allow a program to do?",
    "options": [
      "a) Execute only one block of code.",
      "b) Check a single condition.",
      "c) Use multiple conditions and execute different blocks of code for each condition.",
      "d) Loop through a sequence of items."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What is the main purpose of looping constructs in Python?",
    "options": [
      "a) To define functions.",
      "b) To handle exceptions.",
      "c) To help us repeat actions, making our code more efficient and easier to read.",
      "d) To declare variables."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Which of the following is NOT a type of loop mentioned in Python?",
    "options": [
      "a) while",
      "b) for",
      "c) do-while",
      "d) repeat"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "A while loop continues as long as:",
    "options": [
      "a) A specific number of times is reached.",
      "b) The condition is true.",
      "c) The condition is false.",
      "d) It encounters a break statement."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "In a for loop, what does it commonly iterate over?",
    "options": [
      "a) A specific number of times.",
      "b) A block of code once.",
      "c) A sequence (like a list, tuple, or string).",
      "d) A conditional statement."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "What is the purpose of Functions and Modules in Python?",
    "options": [
      "a) To make code less readable.",
      "b) To encapsulate reusable blocks of code and help structure programs.",
      "c) To introduce errors.",
      "d) To define variables globally."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "How are functions defined in Python?",
    "options": [
      "a) Using the function keyword.",
      "b) Using the def keyword.",
      "c) Using the func keyword.",
      "d) Using the method keyword."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is a \"default parameter\" in a Python function?",
    "options": [
      "a) A parameter that must always be provided.",
      "b) A parameter that has a predefined value that is used if no argument is provided during the function call.",
      "c) A parameter that returns a value.",
      "d) A parameter used only for calculations."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the purpose of Importing and Using Libraries in Python?",
    "options": [
      "a) To make the code longer.",
      "b) To create modules.",
      "c) To use pre-built toolkits that can be used without having to write all the code yourself.",
      "d) To manage project files."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "How can you import a library in Python to generate random numbers?",
    "options": [
      "a) use random",
      "b) import random",
      "c) get random",
      "d) include random"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the purpose of a Package Structure in Python?",
    "options": [
      "a) To store individual files.",
      "b) To manage large projects by organizing modules into packages.",
      "c) To define variables.",
      "d) To create loops."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is a List in Python?",
    "options": [
      "a) An immutable data structure.",
      "b) A data structure used to store multiple pieces of data in a specific sequence, enclosed in square brackets [].",
      "c) A collection of key-value pairs.",
      "d) A way to define a function."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "How is a List created in Python?",
    "options": [
      "a) Using curly braces {}.",
      "b) Using square brackets [], with each item separated by a comma.",
      "c) Using parentheses ().",
      "d) Using angle brackets <>."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "How do you access items in a list in Python?",
    "options": [
      "a) By using their value.",
      "b) By using an index, starting from 0.",
      "c) By using a specific key.",
      "d) By calling a function."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "Which method would you use to add an item to the end of a list?",
    "options": [
      "a) insert()",
      "b) append()",
      "c) remove()",
      "d) pop()"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Which method removes the first occurrence of an item from a list?",
    "options": [
      "a) sort()",
      "b) append()",
      "c) remove()",
      "d) reverse()"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What is a Tuple in Python?",
    "options": [
      "a) A mutable, ordered collection of items.",
      "b) An immutable, ordered collection of items, similar to lists but with a key difference: tuples are immutable.",
      "c) A dictionary.",
      "d) A set."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "How do you access elements in a tuple?",
    "options": [
      "a) By using curly braces.",
      "b) By using square brackets and an index.",
      "c) By using a key.",
      "d) By calling a method directly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "What does \"slicing\" allow you to do with sequences in Python (like strings, lists, or tuples)?",
    "options": [
      "a) Add a single element.",
      "b) Delete elements.",
      "c) Access a subset of a sequence.",
      "d) Change an element's value."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the concept of Modular Programming in Python?",
    "options": [
      "a) Dividing a program into smaller, manageable, and reusable pieces called modules.",
      "b) Writing all code in a single file.",
      "c) Focusing on object-oriented principles only.",
      "d) Using only built-in functions."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 46,
    "questionText": "What is Object-Oriented Programming (OOP)?",
    "options": [
      "a) A procedural programming paradigm.",
      "b) A way of designing and organizing code to make it easier to manage and understand, using classes and objects.",
      "c) A method for writing only short scripts.",
      "d) A technique that avoids defining functions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What is a \"class\" in OOP?",
    "options": [
      "a) An actual thing or object.",
      "b) A blueprint or template for creating things.",
      "c) A function definition.",
      "d) A type of variable."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is Exception Handling in Python?",
    "options": [
      "a) A mechanism to create errors during program execution.",
      "b) A mechanism to manage errors that occur during program execution, allowing a program to continue running or gracefully terminate if an error occurs.",
      "c) A way to ignore all errors.",
      "d) A method to ensure programs never have bugs."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What are try-except blocks used for in Python?",
    "options": [
      "a) To define new functions.",
      "b) To test a block of code for errors, and the except block lets you handle errors if they occur.",
      "c) To create loops.",
      "d) To import libraries."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is a common debugging technique mentioned in Python?",
    "options": [
      "a) Unit Testing",
      "b) Print Statements: Adding print statements to check the values of variables at different stages of the code.",
      "c) Integration Testing",
      "d) Regression Testing"
    ],
    "correctAnswer": "b"
  }
],
    "Algorithms and Problem Solving": [
  {
    "id": 1,
    "questionText": "What is the primary definition of an algorithm?",
    "options": [
      "a) A complex computational structure.",
      "b) A set of step-by-step instructions that a computer can execute to solve a problem.",
      "c) A programming language.",
      "d) A type of data structure."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the first step in understanding a computational problem?",
    "options": [
      "a) Identify common computational problems.",
      "b) Evaluate algorithms for efficiency.",
      "c) Input: The data or information given to the algorithm at the beginning of the problem.",
      "d) Implement and compare algorithms."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What are the three steps involved in solving a problem computationally?",
    "options": [
      "a) Input, Process, Output",
      "b) Define, Design, Debug",
      "c) Analyze, Implement, Test",
      "d) Plan, Code, Deploy"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "Which of the following describes a \"Decision Problem\"?",
    "options": [
      "a) Problems where the goal is to find the best solution according to some criteria.",
      "b) Problems where the task is to find a solution or an item that meets certain criteria.",
      "c) Problems where the output is a simple \"yes\" or \"no\".",
      "d) Problems where the objective is to count the number of ways certain conditions can be met."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "A well-defined problem is characterized by:",
    "options": [
      "a) Ambiguous goals and unclear requirements.",
      "b) Vague processes and inputs.",
      "c) Clear goals, inputs, processes, and outputs.",
      "d) Undefined solutions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which of the following is an example of a well-defined problem?",
    "options": [
      "a) How to reduce poverty in Pakistan.",
      "b) Determining if a number is even, with clear input (a single integer), process (check if divisible by 2), and clear output (even or odd).",
      "c) Finding the best solution to a complex design problem.",
      "d) Identifying all factors that influence customer satisfaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What is the Generate-and-Test Method?",
    "options": [
      "a) A method that guarantees finding the optimal solution.",
      "b) A problem-solving technique that works by generating potential solutions to a problem and then testing each one to determine if it meets the required conditions.",
      "c) A method primarily used for sorting data.",
      "d) A method that avoids testing solutions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is a key characteristic of the Generate-and-Test Method?",
    "options": [
      "a) It is always efficient for all types of problems.",
      "b) The problem space is small, making it feasible to generate and test all possible solutions.",
      "c) There is no clear strategy for finding a solution, and an exhaustive search is necessary.",
      "d) It is primarily used in AI applications."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What is the difference between Solvable vs. Unsolvable Problems?",
    "options": [
      "a) Solvable problems have a solution; unsolvable problems do not have a general procedure that can guarantee a solution.",
      "b) Solvable problems can be solved in polynomial time; unsolvable problems cannot.",
      "c) Solvable problems are always simple; unsolvable problems are always complex.",
      "d) Solvable problems are only found in computer science."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 10,
    "questionText": "The Halting Problem is a famous example of:",
    "options": [
      "a) A solvable problem.",
      "b) An optimization problem.",
      "c) An unsolvable problem.",
      "d) A decision problem."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What is the distinction between Tractable vs. Intractable Problems?",
    "options": [
      "a) Tractable problems can be solved in polynomial time; intractable problems require super-polynomial time.",
      "b) Tractable problems are only solved by computers; intractable problems are solved by humans.",
      "c) Tractable problems are ill-defined; intractable problems are well-defined.",
      "d) Tractable problems are always easy; intractable problems are always hard."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "The Traveling Salesman Problem (TSP) is an example of an:",
    "options": [
      "a) Tractable problem.",
      "b) Solvable problem.",
      "c) NP-hard problem.",
      "d) Easy problem."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What does Class P refer to in complexity theory?",
    "options": [
      "a) Problems that are at least as difficult as the hardest problems in NP-hard.",
      "b) Problems that can be solved efficiently by a computer (in polynomial time).",
      "c) Problems that can be checked quickly by a computer.",
      "d) Problems with ambiguous goals."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What defines Class NP problems?",
    "options": [
      "a) Problems that can be solved in polynomial time.",
      "b) Problems for which a solution, if given, can be checked quickly by a computer.",
      "c) Problems that are inherently impossible to solve.",
      "d) Problems that are only solved by generating and testing."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the relationship between P and NP?",
    "options": [
      "a) P is a subset of NP.",
      "b) NP is a subset of P.",
      "c) P and NP are completely separate classes.",
      "d) P and NP are the same."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 16,
    "questionText": "What is the primary goal of Algorithm Analysis?",
    "options": [
      "a) To write the algorithm.",
      "b) To predict the running time and space complexity of algorithms.",
      "c) To debug the algorithm.",
      "d) To deploy the algorithm."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What does Time Complexity measure?",
    "options": [
      "a) The amount of memory an algorithm uses.",
      "b) How the running time of an algorithm increases as the size of the input data increases.",
      "c) The number of lines of code in an algorithm.",
      "d) The ease of understanding an algorithm."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What does Big O notation provide?",
    "options": [
      "a) An exact running time of an algorithm.",
      "b) An upper bound on the time an algorithm will take to complete as the input size grows.",
      "c) The best-case scenario for an algorithm.",
      "d) A measure of an algorithm's readability."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Which Big O notation represents Constant Time?",
    "options": [
      "a) O(n²)",
      "b) O(n)",
      "c) O(1)",
      "d) O(log n)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Which Big O notation indicates that the runtime grows linearly with the input size?",
    "options": [
      "a) O(n²)",
      "b) O(n)",
      "c) O(1)",
      "d) O(log n)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What does Space Complexity measure?",
    "options": [
      "a) The time required for an algorithm to run.",
      "b) The amount of memory or space an algorithm uses when handling large datasets.",
      "c) The number of lines of code.",
      "d) The number of errors in an algorithm."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is Divide and Conquer?",
    "options": [
      "a) An algorithm design technique that solves problems by breaking a large problem into smaller, more manageable parts, solving them independently, and then combining their solutions.",
      "b) An algorithm that always finds the globally optimal solution.",
      "c) An algorithm that processes data sequentially.",
      "d) An algorithm that relies on guessing solutions."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 23,
    "questionText": "What type of algorithms make a sequence of choices, each of which is locally optimal, with the hope that these choices will lead to a globally optimal solution?",
    "options": [
      "a) Divide and Conquer",
      "b) Dynamic Programming",
      "c) Greedy Algorithms",
      "d) Backtracking"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "A key insight regarding Greedy Algorithms is that they:",
    "options": [
      "a) Always guarantee the optimal solution for every problem.",
      "b) Are often faster and easier to implement than other techniques, but may not always guarantee the optimal solution.",
      "c) Are suitable only for complex projects.",
      "d) Require significant computation for every step."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is Dynamic Programming (DP)?",
    "options": [
      "a) A technique that breaks a problem into smaller, independent subproblems.",
      "b) An optimization technique used to solve problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant calculations.",
      "c) A method that always finds a local optimum.",
      "d) A straightforward, sequential approach."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "How does Dynamic Programming avoid redundant calculations?",
    "options": [
      "a) By recalculating Fibonacci numbers every time.",
      "b) By storing the results of each Fibonacci number as it is computed.",
      "c) By skipping intermediate steps.",
      "d) By only solving the largest subproblems."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is Backtracking?",
    "options": [
      "a) A method used in solving problems where you build up a solution step by step. If you find that a particular path doesn't lead to a solution, you simply go back and try a different path.",
      "b) A method that always chooses the locally optimal solution.",
      "c) A method that divides a problem into independent subproblems.",
      "d) A method for sorting algorithms."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 28,
    "questionText": "Which of the following is a Commonly Used Algorithm for sorting?",
    "options": [
      "a) Breadth-First Search (BFS)",
      "b) Bubble Sort",
      "c) Binary Search",
      "d) Depth-First Search (DFS)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "How does Bubble Sort work?",
    "options": [
      "a) By repeatedly dividing the list in half.",
      "b) By stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.",
      "c) By selecting the smallest element and moving it to the front.",
      "d) By creating a new list."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What is the time complexity of Bubble Sort?",
    "options": [
      "a) O(log n)",
      "b) O(n)",
      "c) O(n²)",
      "d) O(1)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "How does Selection Sort work?",
    "options": [
      "a) By comparing adjacent elements and swapping them.",
      "b) By repeatedly dividing the list.",
      "c) By selecting the smallest (or largest, depending on the desired order) element from the unsorted part of the list and swapping it with the first element of the unsorted part.",
      "d) By inserting an element into its correct position."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is the time complexity of Selection Sort?",
    "options": [
      "a) O(n)",
      "b) O(n log n)",
      "c) O(n²)",
      "d) O(1)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Which search algorithm is designed to find specific elements or a set of elements within a dataset?",
    "options": [
      "a) Sorting Algorithms",
      "b) Search Algorithms",
      "c) Graph Algorithms",
      "d) Dynamic Programming"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "How does a Linear Search work?",
    "options": [
      "a) By repeatedly dividing the search interval in half.",
      "b) By checking each item in the list one by one until you find what you're looking for.",
      "c) By starting at the middle and moving outwards.",
      "d) By creating a hash table."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "When is Linear Search particularly useful?",
    "options": [
      "a) When the list is very large and sorted.",
      "b) When the list is small or unsorted.",
      "c) When you need the fastest possible search.",
      "d) When only the middle element is relevant."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the key requirement for Binary Search to be efficient?",
    "options": [
      "a) The list must be unsorted.",
      "b) The list must be very small.",
      "c) The list must be sorted.",
      "d) The list must contain duplicate elements."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "How does Binary Search typically proceed?",
    "options": [
      "a) It starts from the first element and checks each one sequentially.",
      "b) It repeatedly divides the search interval in half.",
      "c) It randomly selects elements to check.",
      "d) It only works on strings."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What is the time complexity of Binary Search?",
    "options": [
      "a) O(n)",
      "b) O(log n)",
      "c) O(n²)",
      "d) O(n log n)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What are Graph Algorithms used to explore and analyze?",
    "options": [
      "a) Linear lists.",
      "b) Hierarchical structures like trees.",
      "c) Graphs made up of nodes (vertices) connected by edges.",
      "d) Tabular data."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is Breadth-First Search (BFS)?",
    "options": [
      "a) A graph traversal algorithm that explores as far down a branch as possible before backtracking.",
      "b) A graph traversal algorithm that explores all the nodes of a graph level by level, starting from a given node.",
      "c) A sorting algorithm.",
      "d) A searching algorithm for sorted lists."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What data structure is often used to implement BFS?",
    "options": [
      "a) Stack",
      "b) Queue",
      "c) List",
      "d) Tree"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What is the time complexity of BFS?",
    "options": [
      "a) O(V + E) where V is the number of vertices and E is the number of edges.",
      "b) O(V)",
      "c) O(E)",
      "d) O(log n)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "What is Depth-First Search (DFS)?",
    "options": [
      "a) A graph traversal algorithm that explores all the nodes of a graph level by level.",
      "b) A graph traversal algorithm that explores as far down a branch as possible before backtracking to explore other branches.",
      "c) A sorting algorithm.",
      "d) A linear search algorithm."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "What data structure is typically used to implement DFS?",
    "options": [
      "a) Queue",
      "b) List",
      "c) Stack",
      "d) Tree"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The time complexity of DFS is O(V + E). Compared to BFS, DFS is:",
    "options": [
      "a) More memory-efficient for deep graphs, while BFS is more suited for shallow graphs.",
      "b) Less memory-efficient for deep graphs.",
      "c) Always better for all graph types.",
      "d) Only used for directed graphs."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 46,
    "questionText": "Which statement applies to unsolvable problems?",
    "options": [
      "a) They can be solved in polynomial time.",
      "b) They cannot be solved by any algorithm.",
      "c) They are always in NP class.",
      "d) They require exponential time to solve."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Which search algorithm is more efficient for large datasets?",
    "options": [
      "a) Bubble Sort",
      "b) Selection Sort",
      "c) Binary Search",
      "d) Merge Sort"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "A scenario where Dynamic Programming proves most useful is:",
    "options": [
      "a) Problems without overlapping subproblems.",
      "b) Problems solved by making local choices.",
      "c) Problems with overlapping subproblems and optimal substructure.",
      "d) Problems divided into independent subproblems."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the best description of time complexity?",
    "options": [
      "a) Amount of memory an algorithm needs.",
      "b) Time taken as a function of input size.",
      "c) Efficiency as input size grows.",
      "d) Upper bound of space requirements."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "Which algorithm sorts data by stepping through the list and swapping adjacent elements if needed?",
    "options": [
      "a) Selection Sort",
      "b) Quick Sort",
      "c) Bubble Sort",
      "d) Merge Sort"
    ],
    "correctAnswer": "c"
  }
],
    "Computational Structures": [
  {
    "id": 1,
    "questionText": "What is a List in the context of primitive computational structures?",
    "options": [
      "a) A data structure that stores a single piece of data.",
      "b) A data structure used to store multiple pieces of data in a specific sequence, where each piece of data is an element, positioned at a particular index.",
      "c) A fixed-size data structure.",
      "d) A data structure that does not allow easy access and management."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "How are Lists created in Python?",
    "options": [
      "a) Using curly braces {}.",
      "b) Using square brackets [], with each item separated by a comma.",
      "c) Using parentheses ().",
      "d) Using angle brackets <>."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What does the insert() function do in Python lists?",
    "options": [
      "a) Removes an item from the list.",
      "b) Appends an item to the end of the list.",
      "c) Adds an item at a specific position in the list.",
      "d) Returns the length of the list."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "How can you delete an item from a Python list if you know its value?",
    "options": [
      "a) Using pop().",
      "b) Using insert().",
      "c) Using remove().",
      "d) Using append()."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What is the pop() function used for in Python lists?",
    "options": [
      "a) To add an item to a specific index.",
      "b) To remove an item at a specific index and return it.",
      "c) To search for an item.",
      "d) To sort the list."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "Which operation is used to search for an item in a list?",
    "options": [
      "a) insert()",
      "b) pop()",
      "c) The 'in' keyword.",
      "d) remove()"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is a Stack data structure?",
    "options": [
      "a) A simple data structure that allows adding and removing elements from any position.",
      "b) A data structure that only allows adding and removing elements from one end, known as the \"top\". It follows the Last-In, First-Out (LIFO) principle.",
      "c) A data structure where elements are added to one end and removed from the other.",
      "d) A data structure used for random access."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What are the two basic operations performed on a Stack?",
    "options": [
      "a) Enqueue and Dequeue",
      "b) Add and Remove",
      "c) Push and Pop",
      "d) Insert and Delete"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What does the \"Push\" operation on a stack do?",
    "options": [
      "a) Removes an item from the top of the stack.",
      "b) Means adding an item to the top of the stack.",
      "c) Checks if an item exists in the stack.",
      "d) Returns the length of the stack."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "What does the \"Pop\" operation on a stack do?",
    "options": [
      "a) Adds an item to the top of the stack.",
      "b) Removes an item from the top of the stack.",
      "c) Returns the size of the stack.",
      "d) Moves an item to the bottom of the stack."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is a Queue data structure?",
    "options": [
      "a) A data structure that follows the Last-In, First-Out (LIFO) principle.",
      "b) A data structure where the first person to get in line is the first person to be served. It follows the First-In, First-Out (FIFO) principle.",
      "c) A data structure that allows random access to elements.",
      "d) A data structure that can only store numbers."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What are the two primary operations of a Queue?",
    "options": [
      "a) Push and Pop",
      "b) Insert and Delete",
      "c) Enqueue (Add an Item) and Dequeue (Remove an Item)",
      "d) Read and Write"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What does the \"Enqueue\" operation do in a queue?",
    "options": [
      "a) Removes an item from the front of the line.",
      "b) Adds an item to the end of the line.",
      "c) Checks if the queue is empty.",
      "d) Retrieves the element at the front without removing it."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What does the \"Dequeue\" operation do in a queue?",
    "options": [
      "a) Adds an item to the end of the line.",
      "b) Removes an item from the front of the line.",
      "c) Adds an item to the front of the line.",
      "d) Views the item at the end of the line."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the \"Peek\" operation in a queue?",
    "options": [
      "a) Adds an item to the queue.",
      "b) Removes an item from the queue.",
      "c) Retrieves the element at the front of the line without removing it.",
      "d) Checks the size of the queue."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What is a Tree data structure?",
    "options": [
      "a) A linear data structure.",
      "b) A data structure that stores information in a way that spreads out from a main point called the root node, with connected nodes forming a branching structure.",
      "c) A data structure with no hierarchy.",
      "d) A data structure that only stores text."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "In a family tree, who represents the root node?",
    "options": [
      "a) The youngest members.",
      "b) The oldest ancestors.",
      "c) The most recent generation.",
      "d) Siblings."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is a \"Root Node\" in a tree?",
    "options": [
      "a) The very last item in the tree.",
      "b) The very first or top node in a tree.",
      "c) A node with no children.",
      "d) A node that connects to all other nodes."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What are \"Nodes and Edges\" in a tree structure?",
    "options": [
      "a) Nodes are the individual elements in the tree, and they are connected by lines called edges.",
      "b) Nodes are the connections, and edges are the elements.",
      "c) Nodes are only at the bottom of the tree.",
      "d) Edges represent data values."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 20,
    "questionText": "What does the \"Height\" of a tree refer to?",
    "options": [
      "a) The number of nodes in the tree.",
      "b) The number of edges in the tree.",
      "c) The longest path from the root node down to the farthest leaf.",
      "d) The total number of branches."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is a \"Balanced Tree\"?",
    "options": [
      "a) A tree where all branches have the same height.",
      "b) A tree where all nodes have two children.",
      "c) A tree considered balanced if the branches on the left and right sides are nearly the same height.",
      "d) A tree that is sorted."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What is an application of trees in File Systems?",
    "options": [
      "a) To manage network connections.",
      "b) To store data in a linear fashion.",
      "c) Pre-order tree traversal is useful for creating backups of file systems by visiting the root first and then recursively backing up each directory.",
      "d) To sort files alphabetically."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "How do trees help in Hierarchical Data Representation?",
    "options": [
      "a) They represent data in a flat structure.",
      "b) They represent data with a clear hierarchical relationship, such as organisational charts and family trees.",
      "c) They only represent numerical data.",
      "d) They eliminate the need for relationships."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What is a Graph data structure?",
    "options": [
      "a) A data structure that consists of a set of vertices (or nodes) connected by edges.",
      "b) A linear arrangement of data.",
      "c) A hierarchical structure with a single root.",
      "d) A structure used only for mathematical equations."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 25,
    "questionText": "In the context of graphs, what are \"vertices\" and \"edges\"?",
    "options": [
      "a) Vertices are connections, edges are nodes.",
      "b) Vertices are nodes, edges represent relationships between vertices.",
      "c) Vertices are data values, edges are functions.",
      "d) Vertices are only at the beginning of the graph."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What is a key characteristic of a Directed Graph?",
    "options": [
      "a) Edges do not have a direction.",
      "b) Edges have a direction, meaning they go from one vertex to another in a specific way.",
      "c) Edges have weights.",
      "d) There is no specified starting point."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is an Undirected Graph?",
    "options": [
      "a) A graph where edges have a specific direction.",
      "b) A graph where edges do not have a direction, meaning you can travel in both directions.",
      "c) A graph where all edges have weights.",
      "d) A graph with no cycles."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is a Weighted Graph?",
    "options": [
      "a) A graph where edges do not have a direction.",
      "b) A graph where each edge has a weight or cost associated with it.",
      "c) A graph where all vertices have the same number of edges.",
      "d) A graph used only for social networks."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is an example application of a Weighted Graph?",
    "options": [
      "a) Representing family relationships.",
      "b) Managing a to-do list.",
      "c) Finding the shortest or quickest route between landmarks on a map.",
      "d) Modeling a line of customers in a store."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Which of the following is NOT a property of graphs mentioned?",
    "options": [
      "a) Degree",
      "b) Weight",
      "c) Direction",
      "d) Color"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "What is the \"Degree\" of a vertex in a graph?",
    "options": [
      "a) The number of edges connected to a vertex.",
      "b) The direction of the edges.",
      "c) The weight of the edges.",
      "d) The position of the vertex."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "What is the purpose of \"Weight\" in some graphs?",
    "options": [
      "a) To indicate direction.",
      "b) To represent values like distances or costs.",
      "c) To connect vertices.",
      "d) To signify the type of vertex."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Which type of graph is most suitable for representing connections in a social network?",
    "options": [
      "a) Directed Graph",
      "b) Weighted Graph",
      "c) Undirected Graph (as friendships are often reciprocal)",
      "d) A tree structure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What is the difference between Enqueue and Dequeue operations of queue?",
    "options": [
      "a) Enqueue adds an item to the front, Dequeue removes from the end.",
      "b) Enqueue adds an item to the end, Dequeue removes from the front.",
      "c) Enqueue and Dequeue both remove items.",
      "d) Enqueue and Dequeue both add items."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What is the dynamic size property of lists in Python?",
    "options": [
      "a) Lists have a fixed size after creation.",
      "b) Lists can change their size (grow or shrink) during program execution.",
      "c) Lists can only store a single data type.",
      "d) Lists cannot be modified once created."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which Python module can be used to implement queues?",
    "options": [
      "a) list",
      "b) stack",
      "c) queue (built-in module mentioned)",
      "d) tree"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "In a stack_of_books example, if you push 'Book A' then push 'Book B', which book would be popped first?",
    "options": [
      "a) Book A",
      "b) Book B",
      "c) Both A and B simultaneously",
      "d) Neither, an error occurs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What is the Last-In, First-Out (LIFO) principle primarily associated with?",
    "options": [
      "a) Queues",
      "b) Lists",
      "c) Stacks",
      "d) Trees"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What is the First-In, First-Out (FIFO) principle primarily associated with?",
    "options": [
      "a) Stacks",
      "b) Lists",
      "c) Queues",
      "d) Graphs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is a use case for file system deletion related to applications of trees?",
    "options": [
      "a) Pre-order traversal to back up directories.",
      "b) Post-order traversal ensures that all sub-directories and files are deleted before deleting the parent directory.",
      "c) In-order traversal to list files alphabetically.",
      "d) Using a balanced tree to ensure efficient deletion."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What type of diagram is shown in Figure 4.4, which depicts nodes connected by edges with numerical values?",
    "options": [
      "a) Undirected Graph",
      "b) Directed Weighted Graph",
      "c) Unweighted Graph",
      "d) Tree"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "How would you represent a \"to-do list\" using a computational structure?",
    "options": [
      "a) As a graph.",
      "b) As a stack (Last-In, First-Out might be relevant for recent tasks).",
      "c) As a queue (First-In, First-Out might be relevant for prioritizing oldest tasks).",
      "d) As a list (most flexible for adding/removing/reordering tasks)."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 43,
    "questionText": "In a tree, how do you find the depth of a node?",
    "options": [
      "a) By counting the total number of nodes.",
      "b) By counting the number of edges from the root to that node.",
      "c) By looking at its height.",
      "d) By its position relative to other leaves."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Which of these properties is typically NOT associated with a tree's root node?",
    "options": [
      "a) It is the very first or top node.",
      "b) It can have multiple parents.",
      "c) It has no parent.",
      "d) It is connected to other folders and files in a computer where all other folders and files are contained."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "If you want to efficiently manage First-In, First-Out (FIFO) data, which computational structure would be most appropriate?",
    "options": [
      "a) Stack",
      "b) List",
      "c) Queue",
      "d) Graph"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "If you want to manage data where the Last-In, First-Out (LIFO) principle is crucial, which computational structure would you use?",
    "options": [
      "a) Queue",
      "b) List",
      "c) Stack",
      "d) Tree"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "When adding an item to the end of a list in Python, what method is generally used?",
    "options": [
      "a) insert()",
      "b) remove()",
      "c) append()",
      "d) pop()"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is the fundamental difference between append() and insert() in Python lists?",
    "options": [
      "a) append() removes an item, insert() adds one.",
      "b) append() adds to the end, insert() adds at a specified index.",
      "c) append() works only with numbers, insert() with strings.",
      "d) append() creates a new list, insert() modifies the existing one."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What describes a graph where edges do not have a direction?",
    "options": [
      "a) Directed Graph",
      "b) Undirected Graph",
      "c) Weighted Graph",
      "d) Tree Graph"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "In the context of computational structures, what is the role of \"data storage and manipulation\" for lists?",
    "options": [
      "a) Lists are commonly used to store and manage collections of data, such as records, entries, or values.",
      "b) Lists are used only for graphical representations.",
      "c) Lists are only for stack and queue implementations.",
      "d) Lists are only for mathematical operations."
    ],
    "correctAnswer": "a"
  }
],
    "Data Analytics": [
  {
    "id": 1,
    "questionText": "What is Data Analytics?",
    "options": [
      "a) The process of collecting raw data.",
      "b) The process of examining data to find useful information, patterns, and trends to support decision-making.",
      "c) The process of creating visualizations.",
      "d) The process of building statistical models."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is Statistics defined as?",
    "options": [
      "a) A branch of mathematics that helps us understand and analyze data by summarizing large sets of information in a simple way.",
      "b) A method for collecting data.",
      "c) A tool for data visualization.",
      "d) A way to create reports."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 3,
    "questionText": "What are the three main measures of central tendency?",
    "options": [
      "a) Variance, Standard Deviation, Probability",
      "b) Mean, Median, Mode",
      "c) Surveys, Observations, Experiments",
      "d) Bar Charts, Line Graphs, Histograms"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How is the Mean calculated?",
    "options": [
      "a) The middle value in a dataset.",
      "b) The number that appears most often in a dataset.",
      "c) The average of all the numbers together and then dividing the sum by the total number of values.",
      "d) The square root of the variance."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What is the Median?",
    "options": [
      "a) The average of all numbers.",
      "b) The middle value in a dataset when the numbers are arranged in order.",
      "c) The most frequent number.",
      "d) The highest value in the dataset."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What is the Mode?",
    "options": [
      "a) The middle value in a dataset.",
      "b) The average of all numbers.",
      "c) The number that appears most often in a dataset.",
      "d) The sum of all numbers."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What do Measures of Dispersion tell us?",
    "options": [
      "a) The average of the data.",
      "b) How spread out or scattered the data is.",
      "c) The most frequent value.",
      "d) The center of the data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is Variance?",
    "options": [
      "a) The square root of the standard deviation.",
      "b) A measure of how far each number in the data set differs from the mean.",
      "c) The middle value of the data.",
      "d) The sum of all values."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What is Standard Deviation?",
    "options": [
      "a) The variance squared.",
      "b) The average of all data points.",
      "c) The square root of the variance.",
      "d) The most frequent data point."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What is Probability?",
    "options": [
      "a) The study of how data is distributed.",
      "b) The study of how likely an event is to happen.",
      "c) The process of collecting data.",
      "d) The method of visualizing data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "If you flip a coin, what is the probability of getting heads?",
    "options": [
      "a) 1 (certainty)",
      "b) 0 (impossibility)",
      "c) 50% (or 1/2)",
      "d) 25% (or 1/4)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What are the crucial aspects of data collection and preparation?",
    "options": [
      "a) Drawing conclusions.",
      "b) Research, analysis, data collection, and preparation.",
      "c) Data visualization.",
      "d) Model building."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What is a Survey in data collection?",
    "options": [
      "a) A method used for direct observation.",
      "b) A commonly used method for collecting large amounts of data in a structured way, involving asking a predefined set of questions to a sample group.",
      "c) A controlled experiment.",
      "d) A way to prepare data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What does Observation involve in data collection?",
    "options": [
      "a) Asking customers questions.",
      "b) Manipulating variables.",
      "c) Collecting data by watching or monitoring subjects in their natural environment without interference.",
      "d) Preparing data for analysis."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What are Experiments in data collection?",
    "options": [
      "a) Surveys conducted online.",
      "b) Manipulating one or more variables to determine their effect on another variable.",
      "c) Observing natural behavior.",
      "d) Preparing data for cleaning."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "What is Data Preparation?",
    "options": [
      "a) The process of collecting data.",
      "b) The process of preparing data to make it clean, free from errors or inconsistencies, and organized into a suitable format for analysis.",
      "c) The process of visualizing data.",
      "d) The process of building statistical models."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What is the purpose of Data Cleaning and Transformation?",
    "options": [
      "a) To add more data.",
      "b) To ensure data is accurate, consistent, and in a usable format for analysis by removing errors, missing values, or duplicate results.",
      "c) To visualize data.",
      "d) To build statistical models."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What does Data Cleaning specifically entail?",
    "options": [
      "a) Transforming data into different formats.",
      "b) Correcting or removing any problems in the data, including incorrect entries, missing values, or duplicate results.",
      "c) Aggregating data.",
      "d) Summarizing statistics."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What is Data Transformation?",
    "options": [
      "a) Removing errors from data.",
      "b) Changing data into different formats, creating new columns, or organizing data in a different way to make it suitable for analysis or modeling.",
      "c) Identifying missing values.",
      "d) Flagging missing data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is Handling Missing Data?",
    "options": [
      "a) Always deleting rows with missing values.",
      "b) One option is to remove the rows with missing values if they are very few. Another option is to fill in the missing values with an average or with data from similar cases.",
      "c) Ignoring all missing data.",
      "d) Only filling in missing data with zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is \"Imputation\" when handling missing data?",
    "options": [
      "a) Deleting rows with missing values.",
      "b) Estimating the missing value using existing data.",
      "c) Ignoring missing values.",
      "d) Flagging missing data for later review."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is the first step in Building Statistical Models?",
    "options": [
      "a) Collect Data",
      "b) Choose an Algorithm",
      "c) Define the Problem",
      "d) Train the Model"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "What is Linear Regression?",
    "options": [
      "a) A tool used to predict outcomes that can be categorized as \"yes\" or \"no\".",
      "b) A widely used statistical model that helps understand the relationship between two variables, often used to predict one variable based on another.",
      "c) A clustering technique.",
      "d) A data visualization method."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "In the simple linear regression formula Y = β₀ + β₁ X, what does Y represent?",
    "options": [
      "a) The independent variable.",
      "b) The dependent variable.",
      "c) The intercept.",
      "d) The slope."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "In the simple linear regression formula Y = β₀ + β₁ X, what does X represent?",
    "options": [
      "a) The dependent variable.",
      "b) The independent variable.",
      "c) The intercept.",
      "d) The slope."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "In the simple linear regression formula Y = β₀ + β₁ X, what is β₀?",
    "options": [
      "a) The slope.",
      "b) The intercept, which is the value of Y when X is 0.",
      "c) The error term.",
      "d) The predicted value."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "In the simple linear regression formula Y = β₀ + β₁ X, what is β₁?",
    "options": [
      "a) The intercept.",
      "b) The error term.",
      "c) The slope of the line, which shows how much Y changes with each unit change in X.",
      "d) The dependent variable."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What is the purpose of Testing the Model in statistical model building?",
    "options": [
      "a) To collect new data.",
      "b) To ensure the model meets ethical considerations.",
      "c) To test it using new data and see how well it works by comparing predicted outcomes with actual values.",
      "d) To define the problem."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What is Logistic Regression?",
    "options": [
      "a) A powerful tool used when we want to predict an outcome that can be categorized as \"yes\" or \"no\".",
      "b) A model that predicts a continuous outcome.",
      "c) A method for identifying clusters in data.",
      "d) A way to visualize data."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "What are Clustering Techniques?",
    "options": [
      "a) A way of grouping similar things together based on their characteristics.",
      "b) A method for predicting continuous outcomes.",
      "c) A technique for linear regression.",
      "d) A tool for data visualization."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 31,
    "questionText": "What is K-means Clustering?",
    "options": [
      "a) One of the simplest and most popular techniques to group data. It aims to divide the students into two clusters based on their math and English scores.",
      "b) A supervised learning algorithm.",
      "c) A method for predicting \"yes\" or \"no\" outcomes.",
      "d) A way to clean data."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "What do Performance Metrics measure in evaluating and interpreting models?",
    "options": [
      "a) How much data was collected.",
      "b) How well a model is doing, such as error metrics or accuracy metrics.",
      "c) The complexity of the model.",
      "d) The time it took to build the model."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is an Error Metric?",
    "options": [
      "a) Measures how much the model's predictions differ from the actual values.",
      "b) Measures the number of correct predictions.",
      "c) Interprets the model's output.",
      "d) Ensures fairness and bias."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What are Accuracy Metrics?",
    "options": [
      "a) Measures how much the model's predictions differ from actual values.",
      "b) Tell us how many of the model's predictions were correct, assessing the percentage of correct predications made by the model.",
      "c) Interprets the model's output.",
      "d) Provides ethical considerations."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What is the purpose of Interpreting Outputs from a model?",
    "options": [
      "a) To improve the model's accuracy.",
      "b) To understand what the model's output means and what the results reveal.",
      "c) To collect more data.",
      "d) To remove bias."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is Data Visualization?",
    "options": [
      "a) The process of collecting and analyzing data.",
      "b) The process of representing data in a visual format, such as graphs or charts.",
      "c) The process of building statistical models.",
      "d) The process of cleaning data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is the purpose of Bar Charts?",
    "options": [
      "a) To show trends over time.",
      "b) To show the distribution of a dataset.",
      "c) To display the relationships between two variables.",
      "d) To compare different categories."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "What do Line Graphs show?",
    "options": [
      "a) The distribution of a dataset.",
      "b) Trends over time.",
      "c) Relationships between two variables.",
      "d) Comparisons between categories."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What are Histograms used for?",
    "options": [
      "a) To compare different categories.",
      "b) To show trends over time.",
      "c) To show the distribution of a dataset by grouping data into bins or intervals.",
      "d) To display relationships between two variables."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What are Scatterplots used for?",
    "options": [
      "a) To compare different categories.",
      "b) To show trends over time.",
      "c) To show the distribution of a dataset.",
      "d) To display the relationships between two variables."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 41,
    "questionText": "What is a Boxplot (or whisker plot) used for?",
    "options": [
      "a) To compare different categories.",
      "b) To show the distribution of a dataset by displaying the median, quartiles, and potential outliers.",
      "c) To display relationships between two variables.",
      "d) To track trends over time."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Which software tools are widely accessible and provide straightforward methods for creating visualizations?",
    "options": [
      "a) Python (Matplotlib)",
      "b) MS Excel and Google Sheets",
      "c) Tableau",
      "d) All of the above"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is the first step in creating a visualization in Excel or Google Sheets?",
    "options": [
      "a) Select the data.",
      "b) Choose a chart type.",
      "c) Customize the chart.",
      "d) Enter your data into the spreadsheet."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "Which of the following is an example of a basic statistical model?",
    "options": [
      "a) Neural Networks",
      "b) Support Vector Machines",
      "c) Linear Regression",
      "d) Decision Trees"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What activity is involved in experimental design in data science?",
    "options": [
      "a) Creating visualizations.",
      "b) Collecting and analyzing data systematically.",
      "c) Writing code for machine learning.",
      "d) Building databases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the meaning of the slope in a linear regression model?",
    "options": [
      "a) The intercept of the model.",
      "b) The change in the dependent variable for a unit change in the independent variable.",
      "c) The error term.",
      "d) The mean of the data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "An example of a real-world application of statistical models is:",
    "options": [
      "a) Designing websites.",
      "b) Predicting house prices.",
      "c) Communicating insights effectively.",
      "d) Summarizing large datasets."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is the primary goal of K-Means Clustering?",
    "options": [
      "a) To classify data into predefined categories.",
      "b) To group data into clusters based on similarity.",
      "c) To predict continuous outcomes.",
      "d) To reduce the dimensionality of data."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What does the meaning of \"K\" in K-Means Clustering refer to?",
    "options": [
      "a) Number of features in the dataset.",
      "b) Number of clusters to be formed.",
      "c) Number of iterations required for convergence.",
      "d) Number of data points in the dataset."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is the importance of building statistical models in real-world applications?",
    "options": [
      "a) To collect raw data.",
      "b) To visualize data effectively.",
      "c) To make predictions and decisions based on data.",
      "d) To simplify data cleaning."
    ],
    "correctAnswer": "c"
  }
],
    "Emerging Technologies": [
  {
    "id": 1,
    "questionText": "Which of the following is NOT considered an emerging technology according to the source?",
    "options": [
      "a) Artificial Intelligence",
      "b) Cloud Computing",
      "c) Traditional Desktop Computing",
      "d) Blockchain Technology"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What does AI primarily involve?",
    "options": [
      "a) Storing and accessing data over the internet",
      "b) Machines and software that can learn and perform human-like tasks",
      "c) Connecting everyday objects to the internet",
      "d) Decentralized ledgers for transactions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Cloud computing allows people to store and access data and applications over the internet instead of on a _______.",
    "options": [
      "a) Local computer or server",
      "b) USB drive",
      "c) Physical book",
      "d) External hard drive"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "Which company is NOT mentioned as providing cloud services like Google Drive or Dropbox in the initial overview?",
    "options": [
      "a) Amazon Web Services (AWS)",
      "b) Microsoft Azure",
      "c) Apple iCloud",
      "d) Google Compute Engine"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "What is a key characteristic of Blockchain technology?",
    "options": [
      "a) Centralized control by a single entity",
      "b) Secure and shared information across many computers",
      "c) Focus on human-like intelligence",
      "d) High latency data processing"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "IoT connects everyday objects to the internet to _______.",
    "options": [
      "a) Perform complex mathematical calculations",
      "b) Send and receive data, making our lives more convenient",
      "c) Create virtual realities",
      "d) Design software applications"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Augmented Reality (AR) and Virtual Reality (VR) add digital elements to the real world or create entirely new realities using _______.",
    "options": [
      "a) Specialized server farms",
      "b) Smartphones or glasses",
      "c) Quantum processors",
      "d) 5G networks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the primary benefit of 5G technology?",
    "options": [
      "a) Enhanced data storage capacity",
      "b) Faster internet speeds and more reliable connections",
      "c) Improved artificial intelligence algorithms",
      "d) More secure blockchain transactions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Quantum Computing is a type of computer that uses _______.",
    "options": [
      "a) Binary digits (bits)",
      "b) Tiny building blocks called qubits",
      "c) Analog signals",
      "d) Optical fibers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Biotechnology involves using living organisms, like bacteria and plants, to _______.",
    "options": [
      "a) Store vast amounts of data",
      "b) Create new products or solve problems",
      "c) Develop new programming languages",
      "d) Manage cloud resources"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "Cloud computing is described as a model that offers easy and convenient access to computing resources like servers, storage, and applications over the internet. These resources can be quickly provided with _______.",
    "options": [
      "a) Maximum human intervention",
      "b) Minimal management effort or service provider interaction",
      "c) Extensive physical hardware installations",
      "d) Limited scalability"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What is Virtualization in cloud computing?",
    "options": [
      "a) A physical server that runs a single operating system",
      "b) A technology that allows a single physical machine to run multiple virtual machines",
      "c) A method for storing data offline",
      "d) A type of network security protocol"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "Scalability in cloud computing refers to the ability to _______.",
    "options": [
      "a) Minimize the number of users",
      "b) Add more resources when you need them",
      "c) Reduce internet bandwidth",
      "d) Increase physical server space only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Elasticity in cloud computing is the ability of a cloud system to automatically _______.",
    "options": [
      "a) Decrease network latency",
      "b) Allocate more servers to handle the load and scale back down afterward",
      "c) Limit computing resources to save costs",
      "d) Run applications on local servers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What does On-Demand Access mean in cloud computing?",
    "options": [
      "a) Resources are available only at specific times",
      "b) Users must wait for manual approval to access resources",
      "c) Accessing computing resources whenever you need them, without waiting for a long setup process",
      "d) Resources are limited to a fixed capacity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which of the following is an example of Infrastructure as a Service (IaaS)?",
    "options": [
      "a) Google Docs",
      "b) Amazon Web Services (AWS) offering virtual servers",
      "c) Salesforce",
      "d) Ruby on Rails"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Platform as a Service (PaaS) offers a complete development and deployment environment in the cloud, including _______.",
    "options": [
      "a) Only hardware",
      "b) Only software applications",
      "c) Infrastructure, middleware, development tools, and management services",
      "d) Only operating systems"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "Which company is mentioned as an example of a PaaS provider, allowing developers to build and deploy applications?",
    "options": [
      "a) Amazon Web Services",
      "b) Google App Engine",
      "c) Microsoft Office 365",
      "d) Gmail"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Software as a Service (SaaS) provides software applications that are hosted and managed by _______.",
    "options": [
      "a) The user",
      "b) The service provider",
      "c) A third-party developer",
      "d) Local hardware"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Gmail, Google Docs, and Microsoft Office 365 are examples of which cloud service type?",
    "options": [
      "a) IaaS",
      "b) PaaS",
      "c) SaaS",
      "d) BaaS (Backend as a Service)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is a Public Cloud deployment model?",
    "options": [
      "a) A cloud environment used exclusively by one organization",
      "b) A cloud service offered over the internet that is shared among multiple organizations",
      "c) A combination of public and private clouds",
      "d) A cloud service provided by a single local server"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "Which cloud deployment model is hosted on-premises or by a third-party provider, but is not shared with other organizations?",
    "options": [
      "a) Public Cloud",
      "b) Private Cloud",
      "c) Hybrid Cloud",
      "d) Multi-Cloud"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "A Hybrid Cloud combines public and private clouds, allowing data and applications to be shared between them. This model provides greater flexibility and _______.",
    "options": [
      "a) Lower security",
      "b) Control",
      "c) Complex management",
      "d) Increased latency"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "A Multi-Cloud model is a cloud computing strategy where an organization uses services from _______.",
    "options": [
      "a) A single cloud provider",
      "b) Multiple cloud providers",
      "c) Only private clouds",
      "d) Only public clouds"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is a key advantage of public clouds according to the exercise questions?",
    "options": [
      "a) Increased complexity",
      "b) Reduced latency",
      "c) Lower costs",
      "d) Enhanced security"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Cloud computing can provide data storage by allowing users to save data on remote servers rather than on _______.",
    "options": [
      "a) Local devices",
      "b) External hard drives",
      "c) USB drives",
      "d) SD cards"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 27,
    "questionText": "What is an example of a cloud computing application for Web Hosting and Content Delivery?",
    "options": [
      "a) Google Drive",
      "b) Amazon Web Services (AWS) and Microsoft Azure",
      "c) Google Cloud AI",
      "d) Dropbox"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Machine Learning and AI in the Cloud provide powerful tools for developing and running _______.",
    "options": [
      "a) Traditional software applications",
      "b) Artificial intelligence models",
      "c) Operating systems",
      "d) Database management systems"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Which is NOT mentioned as a security risk in cloud computing?",
    "options": [
      "a) Data breaches",
      "b) Unauthorized access",
      "c) Loss of data",
      "d) Increased physical hardware maintenance"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "To mitigate risks, users should use encryption, strong authentication methods, and regularly review their security policies to ensure _______.",
    "options": [
      "a) Higher costs",
      "b) Data security",
      "c) Slower performance",
      "d) More complex management"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What is a key cost consideration in cloud computing?",
    "options": [
      "a) Users pay for what they use, and costs can quickly add up if not monitored",
      "b) Fixed monthly fees regardless of usage",
      "c) Costs are always lower than on-premise solutions",
      "d) No costs associated with scaling up resources"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "Compliance in cloud computing refers to adhering to regulations related to data privacy, security, and _______.",
    "options": [
      "a) Advertising",
      "b) Industry-specific standards",
      "c) Marketing",
      "d) Software development"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Blockchain technology is a revolutionary concept that enables secure and transparent transactions through a _______.",
    "options": [
      "a) Centralized database",
      "b) Distributed ledger system",
      "c) Local server",
      "d) Single personal computer"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What does \"Transparency\" mean in the context of blockchain?",
    "options": [
      "a) Only the owner can see the data",
      "b) Everyone in the group can see what's written in the notebook",
      "c) Data is hidden from public view",
      "d) Information is frequently deleted"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Why is blockchain considered \"Secure\"?",
    "options": [
      "a) It relies on a single trusted authority",
      "b) It's protected by a special kind of math called cryptography",
      "c) Information can be easily altered",
      "d) It is prone to data breaches"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Decentralization in blockchain means that the network is controlled by _______.",
    "options": [
      "a) A central authority",
      "b) A single server",
      "c) A network of computers (nodes)",
      "d) A government entity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What does \"Immutability\" in blockchain ensure?",
    "options": [
      "a) Transactions can be easily changed or deleted",
      "b) Once a block is added to the blockchain, it cannot be altered or deleted",
      "c) Data is temporary",
      "d) Information is only valid for a short period"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Consensus Mechanisms in blockchain networks use algorithms to agree on the _______.",
    "options": [
      "a) Best price for a transaction",
      "b) Validity of transactions",
      "c) User preferences",
      "d) Network speed"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "In a blockchain system, what is a \"Node\"?",
    "options": [
      "a) A physical currency",
      "b) A computer that participates in the blockchain network",
      "c) A central server",
      "d) A unique identification number"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What is a \"Block\" in blockchain?",
    "options": [
      "a) A collection of transactions that are bundled together",
      "b) A collection of transactions that are bundled together, each block contains a unique identifier (hash)",
      "c) A single cryptocurrency coin",
      "d) A type of network error"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "A \"Transaction\" in blockchain is an individual entry in the blockchain that represents the transfer of _______.",
    "options": [
      "a) Physical goods",
      "b) Assets or information between participants",
      "c) Ideas or concepts",
      "d) Services or products"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Blockchain Protocol defines the rules and procedures for how transactions are validated, how blocks are added to the chain, and how _______.",
    "options": [
      "a) Users interact with each other",
      "b) Consensus is achieved",
      "c) Software is developed",
      "d) Data is visualized"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which of the following is a key use case for blockchain technology?",
    "options": [
      "a) Centralized banking systems",
      "b) Supply Chain Management",
      "c) Traditional email services",
      "d) Single-user databases"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Smart Contracts are digital agreements that automatically carry out the terms written into them when _______.",
    "options": [
      "a) They are manually approved",
      "b) Specific conditions are met",
      "c) A third party intervenes",
      "d) They are updated by a central authority"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What is a benefit of blockchain in tracking the origin of products?",
    "options": [
      "a) It makes the supply chain more opaque",
      "b) It makes the raw material supplier to the final customer traceable and immutable",
      "c) It only tracks the final product",
      "d) It relies on paper records"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Blockchain can be used in financial services to make transactions faster and safer, and sending money abroad can be _______.",
    "options": [
      "a) Slower",
      "b) More expensive",
      "c) Quicker and cheaper",
      "d) More complicated"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Data security in blockchain ensures that information stored in a blockchain is protected from unauthorized access, tampering, or loss, primarily through _______.",
    "options": [
      "a) Centralized servers",
      "b) Cryptography",
      "c) Human verification",
      "d) Physical locks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "Edge computing brings processing power closer to _______.",
    "options": [
      "a) Centralized data centers",
      "b) Remote servers",
      "c) Data sources",
      "d) Mainframe computers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the main benefit of edge computing?",
    "options": [
      "a) Lower costs",
      "b) Reduced latency and improved efficiency",
      "c) Increased complexity",
      "d) Centralized data storage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "Serverless architectures allow developers to build and deploy applications without managing servers, enhancing scalability and reducing _______.",
    "options": [
      "a) Operational complexity",
      "b) Data security",
      "c) Network speed",
      "d) Cost savings"
    ],
    "correctAnswer": "a"
  }
],
    "Legal and Ethical Aspects of Computing System": [
  {
    "id": 1,
    "questionText": "What does \"Terms of Use\" define for a service provider and user?",
    "options": [
      "a) Advertising regulations",
      "b) Legal agreements outlining responsibilities",
      "c) Software development guidelines",
      "d) Network security protocols"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "One important reason for Terms of Use is the protection of rights, such as the right to privacy, the right to receive certain levels of service, and the right to seek redress if something goes wrong. This is known as _______.",
    "options": [
      "a) User Obligations",
      "b) Limitations of Liability",
      "c) Privacy and Data Use",
      "d) Protection of Rights"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "Terms of Use provide clarity and transparency about what users can expect from a service. This is referred to as _______.",
    "options": [
      "a) Legal Safeguards",
      "b) Clarity and Transparency",
      "c) Intellectual Property Rights",
      "d) Termination of Service"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Legal safeguards in Terms of Use act as a safeguard against _______.",
    "options": [
      "a) User feedback",
      "b) Misuse of their services",
      "c) System upgrades",
      "d) Marketing campaigns"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "Which of the following is a common clause in Terms of Use related to user responsibilities?",
    "options": [
      "a) Intellectual Property Rights",
      "b) User Obligations",
      "c) Limitations of Liability",
      "d) Privacy and Data Use"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "The clause \"Limitations of Liability\" explains _______.",
    "options": [
      "a) How users can register for an account",
      "b) The service provider's liability if something goes wrong",
      "c) The process for updating user information",
      "d) Rules for community interaction"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What does the \"Privacy and Data Use\" clause in Terms of Use explain?",
    "options": [
      "a) How users can share their data with third parties",
      "b) How a company will collect, use, and protect user data",
      "c) The service's pricing model",
      "d) Software compatibility requirements"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Intellectual Property Rights clauses specify ownership of _______.",
    "options": [
      "a) User accounts",
      "b) Logos, software, and other proprietary materials",
      "c) Network infrastructure",
      "d) Customer data"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What does the \"Termination of Service\" clause outline?",
    "options": [
      "a) How a user can upgrade their service",
      "b) The conditions under which the provider can terminate a user's access to the service",
      "c) The process for submitting customer complaints",
      "d) Rules for transferring user accounts"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Ethical considerations in Terms of Use are essential for companies to ensure fairness, transparency, and respect for _______.",
    "options": [
      "a) Profit margins",
      "b) User rights",
      "c) Competitor analysis",
      "d) Advertising revenue"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "The right to privacy, the right to be informed, and the right to withdraw consent are all examples of _______.",
    "options": [
      "a) User Obligations",
      "b) Personal Rights",
      "c) Legal Ramifications",
      "d) Service Agreements"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "Which of the following is defined as unwanted messages that you receive on your email or phone?",
    "options": [
      "a) Spyware",
      "b) Cookies",
      "c) Spam",
      "d) Phishing"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Spyware is a type of harmful software that secretly monitors your activities on your computer or _______.",
    "options": [
      "a) External hard drive",
      "b) Mobile phone",
      "c) Printer",
      "d) Router"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What are \"Cookies\"?",
    "options": [
      "a) Harmful software that steals personal data",
      "b) Small files that websites place on your device when you visit them to remember things",
      "c) Unwanted emails",
      "d) Redirects to fake websites"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "Phishing is a type of scam where someone pretends to be a trustworthy organization to trick you into giving away your personal information, such as _______.",
    "options": [
      "a) Favorite color",
      "b) Email account details",
      "c) Pet's name",
      "d) Favorite food"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Pharming is a sophisticated technique where users are redirected to a fake website _______.",
    "options": [
      "a) While browsing social media",
      "b) Without their knowledge",
      "c) By clicking on a legitimate link",
      "d) After clearing their browser history"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What do spam filters help to keep out of your inbox?",
    "options": [
      "a) Important emails",
      "b) Unwanted emails",
      "c) Emails from friends",
      "d) Software updates"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "Antivirus software protects your computer from harmful programs like _______.",
    "options": [
      "a) Word processors",
      "b) Spyware",
      "c) Web browsers",
      "d) Image editors"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What does Cookie Management involve?",
    "options": [
      "a) Creating new cookies for all websites",
      "b) Deleting cookies from your computer",
      "c) Blocking all cookies to improve privacy",
      "d) Managing cookies you want to keep and which ones you want to delete"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 20,
    "questionText": "Recognizing phishing involves identifying emails that look fake and avoiding clicking any links or providing _______.",
    "options": [
      "a) Feedback",
      "b) Personal information",
      "c) Product reviews",
      "d) Survey responses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Guarding against pharming involves checking the URL for your bank's website and looking for _______.",
    "options": [
      "a) A simple layout",
      "b) A padlock symbol in the browser address bar",
      "c) Many advertisements",
      "d) Pop-up windows"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The digital divide refers to the gap between individuals, communities, and regions that have access to _______.",
    "options": [
      "a) Physical goods",
      "b) Modern information and Communication Technology (ICT)",
      "c) Traditional education",
      "d) Renewable energy"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an Economic Barrier contributing to the digital divide?",
    "options": [
      "a) Lack of internet access in rural areas",
      "b) Many individuals and families cannot afford the costs associated with computers and smartphones",
      "c) Insufficient digital literacy skills",
      "d) Lack of government initiatives"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "Geographical Barriers to ICT access significantly vary between urban and _______.",
    "options": [
      "a) Wealthy neighborhoods",
      "b) Rural areas",
      "c) Educational institutions",
      "d) Business districts"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is an Educational Barrier to digital literacy?",
    "options": [
      "a) Lack of digital literacy contributes to individuals not knowing how to use ICT effectively",
      "b) High cost of internet",
      "c) Remote locations without infrastructure",
      "d) Poor communication skills"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 26,
    "questionText": "Age, gender, and disability can also affect access to technology, contributing to _______.",
    "options": [
      "a) Economic growth",
      "b) Social Barriers",
      "c) Improved communication",
      "d) Reduced poverty"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is an impact of the digital divide on educational inequality?",
    "options": [
      "a) All students have equal access to online learning",
      "b) Students who lack access to resources are at a significant disadvantage",
      "c) Teachers can easily adapt to online teaching methods",
      "d) Internet access is not essential for education"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Economic disparities due to the digital divide imply that many jobs require at least basic digital skills, leading to higher unemployment rates in _______.",
    "options": [
      "a) Urban areas",
      "b) Digitally disadvantaged communities",
      "c) Wealthy countries",
      "d) Manufacturing sectors"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "The digital divide can lead to unequal access to health information and services, resulting in _______.",
    "options": [
      "a) Improved public health",
      "b) Health Disparities",
      "c) More hospital visits",
      "d) Better access to medication"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What does a \"Digital Literacy Gap\" mean?",
    "options": [
      "a) Individuals who have excellent digital skills",
      "b) Individuals who do not have access to technology",
      "c) Individuals who understand how to develop essential digital skills",
      "d) Individuals who are tech-savvy and those who are not"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "Which of the following is a way Government Initiatives can help bridge the digital divide?",
    "options": [
      "a) By imposing high taxes on internet services",
      "b) By building the infrastructure needed for internet access in areas where it's not available",
      "c) By restricting access to online content",
      "d) By promoting traditional communication methods"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Educational Programs contribute to bridging the digital divide by teaching people how to use _______.",
    "options": [
      "a) Traditional tools",
      "b) Technology",
      "c) Physical books",
      "d) Manual calculators"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Public-Private Partnerships help bridge the digital divide by involving government teams with businesses and nonprofits to make _______.",
    "options": [
      "a) Technology less accessible",
      "b) Technology more affordable",
      "c) Technology more complex",
      "d) Technology exclusive"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "One positive impact of computing is the increased accessibility to information, making it possible for people to access vast amounts of information on _______.",
    "options": [
      "a) Bookshelves",
      "b) Nearby topics",
      "c) The internet",
      "d) Local libraries"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "Improved communication through computing systems includes platforms like Facebook and X (Twitter), enabling people to _______.",
    "options": [
      "a) Isolate themselves",
      "b) Connect globally",
      "c) Reduce social interaction",
      "d) Rely on traditional mail"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "The rise of e-commerce platforms like Daraz has transformed traditional business models, creating new industries and _______.",
    "options": [
      "a) Job losses",
      "b) Economic growth",
      "c) Reduced online shopping",
      "d) Decreased trade"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "Misinformation and fake news are examples of _______.",
    "options": [
      "a) Positive Impacts of computing",
      "b) Negative Impacts of computing",
      "c) Ethical considerations",
      "d) Digital literacy skills"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Privacy concerns and data breaches are negative impacts of computing that relate to _______.",
    "options": [
      "a) Hardware failures",
      "b) The collection and storage of vast amounts of personal data",
      "c) Software development",
      "d) Network infrastructure"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Digital citizenship involves understanding how to behave responsibly and ethically when using digital technologies and the _______.",
    "options": [
      "a) Library",
      "b) Community",
      "c) Internet",
      "d) Workplace"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Using strong passwords and avoiding phishing scams are aspects of _______.",
    "options": [
      "a) Online research",
      "b) Responsible Digital Behavior",
      "c) Digital literacy",
      "d) Cyber law"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Responsible data sharing means only sharing personal or sensitive information when _______.",
    "options": [
      "a) It is convenient",
      "b) It is absolutely necessary and ensuring that it is shared with trusted entities",
      "c) It is requested by anyone",
      "d) It can generate profit"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Respecting copyright means not copying or using someone else's work without _______.",
    "options": [
      "a) Permission",
      "b) Citation",
      "c) Payment",
      "d) Acknowledgment"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "Avoiding plagiarism primarily involves attributing ideas and information to their original authors and _______.",
    "options": [
      "a) Changing the words slightly",
      "b) Citing sources in assignments",
      "c) Ignoring the source",
      "d) Copying without permission"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Cybersecurity awareness involves understanding and implementing practices to protect oneself from _______.",
    "options": [
      "a) Online threats",
      "b) Data overload",
      "c) Software bugs",
      "d) Hardware failures"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 45,
    "questionText": "Collaborative problem solving involves working together with others to address challenges and _______.",
    "options": [
      "a) Increase competition",
      "b) Achieve common goals",
      "c) Work independently",
      "d) Reduce communication"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Human-machine collaboration is about working with technology to _______.",
    "options": [
      "a) Replace humans",
      "b) Solve problems",
      "c) Complicate tasks",
      "d) Reduce efficiency"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Leveraging software and digital tools to assist in tasks is an example of _______.",
    "options": [
      "a) Avoiding technology",
      "b) Using Tools in collaborative problem solving",
      "c) Traditional methods",
      "d) Manual processes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "Integrating human skills with machine capabilities for better results is an example of _______.",
    "options": [
      "a) Avoiding collaboration",
      "b) Combining Skills in collaborative problem solving",
      "c) Decentralization",
      "d) Automation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What is the purpose of creating accessible digital content?",
    "options": [
      "a) To make content exclusive",
      "b) To make content visually appealing only",
      "c) To ensure everyone can use it, including people with disabilities",
      "d) To reduce file size"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Providing descriptions for images so that visually impaired users can understand the content is an example of _______.",
    "options": [
      "a) Using Readable Fonts",
      "b) Alternative Text for Images",
      "c) User Feedback",
      "d) Direct Communication"
    ],
    "correctAnswer": "b"
  }
],
    "Online Research and Digital Literacy": [
  {
    "id": 1,
    "questionText": "What is online research primarily described as?",
    "options": [
      "a) Reading physical books only",
      "b) The activity of finding information on the internet about a particular topic",
      "c) Conducting interviews in person",
      "d) Collecting data through surveys only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Online research is important because it allows people to access a wide range of information _______.",
    "options": [
      "a) Slowly",
      "b) Only from academic journals",
      "c) Quickly and easily",
      "d) After extensive training"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "Which type of online research involves finding basic information on a topic, often using search engines like Google?",
    "options": [
      "a) Academic Research",
      "b) Market Research",
      "c) General Information Research",
      "d) Fact-Checking Research"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Academic Research focuses on finding scholarly information for educational purposes, involving searching for books, research papers, or articles from _______.",
    "options": [
      "a) Social media websites",
      "b) Educational websites, libraries, or databases",
      "c) Personal blogs",
      "d) Entertainment sites"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "Market Research is used by businesses and entrepreneurs to understand market trends, customer behavior, and _______.",
    "options": [
      "a) Competitor analysis",
      "b) Competition",
      "c) Historical events",
      "d) Scientific theories"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 6,
    "questionText": "What does Fact-Checking Research involve?",
    "options": [
      "a) Creating new information",
      "b) Verifying if the information is accurate and checking multiple reliable sources",
      "c) Only trusting the first source found",
      "d) Relying on personal opinions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Health Research involves finding information related to health issues, medical treatments, or _______.",
    "options": [
      "a) Political opinions",
      "b) Healthcare services",
      "c) Entertainment news",
      "d) Financial advice"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Digital literacy is the ability to use digital tools, such as computers, smartphones, and the internet, to find, understand, create, and _______.",
    "options": [
      "a) Store physical items",
      "b) Share information",
      "c) Avoid technology",
      "d) Build physical structures"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Which of the following is NOT a key component of digital literacy?",
    "options": [
      "a) Using Technology",
      "b) Searching for Information",
      "c) Evaluating Sources",
      "d) Physical Fitness"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "Using technology involves operating devices like computers, tablets, and smartphones, and knowing how to open programs, use applications, and _______.",
    "options": [
      "a) Repair hardware",
      "b) Navigate websites",
      "c) Develop software",
      "d) Build circuits"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "Searching for information means using search engines to find data on the internet, which includes entering relevant keywords and _______.",
    "options": [
      "a) Asking friends",
      "b) Refining search results to locate useful information",
      "c) Copying the first result",
      "d) Avoiding search engines"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "Evaluating sources involves checking if the information you find online is _______.",
    "options": [
      "a) Interesting",
      "b) From a popular website",
      "c) Reliable and from a trustworthy source",
      "d) Widely shared on social media"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Online libraries and research databases are available online, providing access to a wealth of _______.",
    "options": [
      "a) Personal blogs",
      "b) Academic resources",
      "c) Social media content",
      "d) Gaming communities"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Academic journals are collections of articles written by experts in various fields, which are usually _______.",
    "options": [
      "a) Unverified",
      "b) Peer-reviewed",
      "c) Anonymous",
      "d) Short blog posts"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is an important aspect of effective navigation for online research?",
    "options": [
      "a) Knowing how to search effectively",
      "b) Knowing how to search effectively and manage digital information",
      "c) Limiting search terms",
      "d) Avoiding diverse sources"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Managing digital information involves saving and organizing digital copies of articles, taking notes, and keeping track of your sources for _______.",
    "options": [
      "a) Immediate deletion",
      "b) Future reference",
      "c) Manual transcription",
      "d) Sharing with everyone"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Research ethics are principles and guidelines that researchers follow to ensure that their work is honest, respectful, and _______.",
    "options": [
      "a) Profitable",
      "b) Biased",
      "c) Fair",
      "d) Complex"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What does \"Informed Consent\" in research ethics mean?",
    "options": [
      "a) Always inform participants about the purpose of your research and obtain their permission",
      "b) Keep research objectives secret",
      "c) Obtain consent after data collection",
      "d) Only inform participants who are paid"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 19,
    "questionText": "Confidentiality in research ethics requires keeping personal information and responses of participants _______.",
    "options": [
      "a) Public",
      "b) Anonymous",
      "c) Private and not shared without permission",
      "d) Available to other researchers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Integrity in research ethics means being honest and transparent in your research, and not _______.",
    "options": [
      "a) Sharing results",
      "b) Falsifying data, plagiarizing, or misrepresenting findings",
      "c) Collaborating with others",
      "d) Using existing data"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Respect for participants ensures that all participants are treated with respect and that your research does not _______.",
    "options": [
      "a) Benefit them",
      "b) Harm them in any way",
      "c) Involve their opinions",
      "d) Require their time"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is Intellectual Property (IP)?",
    "options": [
      "a) Physical possessions like land or buildings",
      "b) Legal rights to protect creations of the mind, such as inventions, literary and artistic works",
      "c) Financial assets",
      "d) Natural resources"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "A patent is an exclusive right granted for an invention, which is a product or process that provides _______.",
    "options": [
      "a) A copy of an existing solution",
      "b) A new way of doing something or offers a new technical solution to a problem",
      "c) A shared idea",
      "d) A temporary design"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "Trademarks are a sign, logo, or name that distinguishes the goods or services of one company from those of _______.",
    "options": [
      "a) Its customers",
      "b) Its employees",
      "c) Other companies",
      "d) Its partners"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "Copyright protects literary and artistic works, such as books, music, films, paintings, and software, giving the creator the exclusive right to use, distribute, and _______.",
    "options": [
      "a) Modify without permission",
      "b) License their work",
      "c) Share with anyone",
      "d) Destroy other people's work"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "Industrial designs protect the visual design of objects that are not purely utilitarian. This includes the shape, configuration, and _______.",
    "options": [
      "a) Cost of a product",
      "b) Aesthetic aspects of a product",
      "c) Functionality of a product",
      "d) Marketing strategy"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "A trade secret is a confidential information that provides a business with a _______.",
    "options": [
      "a) Public image",
      "b) Competitive edge",
      "c) Marketing campaign",
      "d) Legal dispute"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Intellectual property is important because it helps people protect their ideas and creations and encourages _______.",
    "options": [
      "a) Monopoly",
      "b) Copying",
      "c) Creativity and innovation",
      "d) Stagnation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "One way to protect a patent is to _______.",
    "options": [
      "a) Keep it secret",
      "b) Register it with the Intellectual Property Organization (IPO)",
      "c) Publish it widely",
      "d) Share it with competitors"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "How do you protect a trademark?",
    "options": [
      "a) By using a generic name",
      "b) By registering your brand name, logo, or slogan as a trademark",
      "c) By verbally describing it",
      "d) By keeping it a secret"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "To protect copyrights, you must ensure that your creative works are protected by registering them with the _______.",
    "options": [
      "a) Local library",
      "b) Appropriate authority",
      "c) Social media platform",
      "d) Design agency"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Trade secrets are protected by keeping valuable business information _______.",
    "options": [
      "a) Public",
      "b) Confidential and using legal agreements",
      "c) In a database accessible to all",
      "d) Shared with employees only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Which of the following is a key component of digital literacy, as per the exercise questions?",
    "options": [
      "a) Writing poetry",
      "b) Understanding agricultural methods",
      "c) Using digital tools effectively",
      "d) Practicing public speaking"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Which boolean operator is used to exclude a term from search results?",
    "options": [
      "a) OR",
      "b) AND",
      "c) NOT",
      "d) NEITHER"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "What is an essential skill for evaluating online sources, as per the exercise questions?",
    "options": [
      "a) Guessing the source's credibility",
      "b) Knowing the content creator's name",
      "c) Checking if content is from a trusted entity",
      "d) Reading the content multiple times"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "When formulating a research question, what is important, as per the exercise questions?",
    "options": [
      "a) To ensure it covers a wide range of topics",
      "b) To clearly define what you want to find and avoid vagueness",
      "c) To include as much information as possible",
      "d) To make the research more generalizable"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "The meaning of a \"peer-reviewed\" article is _______.",
    "options": [
      "a) Edited by a single expert",
      "b) Published in a magazine",
      "c) Reviewed by other experts in the field",
      "d) Freely available online"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "What is a key purpose of online libraries?",
    "options": [
      "a) Providing access to entertainment",
      "b) Offering a variety of academic resources",
      "c) Promoting social media interaction",
      "d) Selling digital books and materials"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Which of the following is an essential component of ethical research, as per the exercise questions?",
    "options": [
      "a) Collecting data regardless of participant privacy",
      "b) Avoiding plagiarism and giving proper credit",
      "c) Publishing only positive results",
      "d) Ignoring consent if research is important"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "The research ethics principle focused on honesty in reporting findings is _______.",
    "options": [
      "a) Confidentiality",
      "b) Integrity",
      "c) Informed Consent",
      "d) Avoiding Bias"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Which option falls outside the category of intellectual property?",
    "options": [
      "a) Patents",
      "b) Trademarks",
      "c) Copyrights",
      "d) Physical Properties"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 42,
    "questionText": "What is the best way for a company to protect a trade secret, as per the exercise questions?",
    "options": [
      "a) Register it with the IPO",
      "b) Apply for a trademark",
      "c) Keep it confidential and use legal agreements",
      "d) Publish it in a journal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Why is it important for users to understand Terms of Use?",
    "options": [
      "a) To avoid reading long documents",
      "b) To protect their rights and understand their obligations",
      "c) To find legal loopholes",
      "d) To get free services"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Differentiating between phishing and pharming involves understanding that phishing usually involves deceptive emails, while pharming involves _______.",
    "options": [
      "a) Direct mail scams",
      "b) Redirecting users to fake websites",
      "c) Phone calls",
      "d) Social media ads"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Identifying two impacts of the digital divide on social and civic participation involves recognizing that it can lead to _______.",
    "options": [
      "a) Increased social cohesion",
      "b) Reduced civic engagement and social isolation",
      "c) Better access to political information for all",
      "d) More equitable distribution of resources"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What are the key steps involved in evaluating information sources?",
    "options": [
      "a) Trusting the first result, ignoring the author, and checking only one source",
      "b) Checking credibility, looking for bias, and comparing with other sources",
      "c) Relying on popularity, accepting all claims, and avoiding verification",
      "d) Reading quickly, sharing immediately, and disregarding evidence"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "How does responsible data sharing contribute to ethical use of information?",
    "options": [
      "a) It ensures that personal data is shared without consent",
      "b) It promotes transparency and prevents misuse of sensitive information",
      "c) It allows companies to profit from user data",
      "d) It simplifies data collection processes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "The importance of collaborative problem solving in a digital environment highlights its role in _______.",
    "options": [
      "a) Fostering individual competition",
      "b) Enhancing creativity and shared understanding",
      "c) Limiting access to information",
      "d) Centralizing decision-making"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Examples of human-machine collaboration include using AI tools for data analysis or relying on _______.",
    "options": [
      "a) Manual calculations",
      "b) Spreadsheet software to analyze data for a group or individual project",
      "c) Human-only brainstorming sessions",
      "d) Traditional research methods"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is the primary goal of creating accessible digital content?",
    "options": [
      "a) To make it visually appealing",
      "b) To ensure it can be used by everyone, including people with disabilities",
      "c) To protect copyright",
      "d) To reduce printing costs"
    ],
    "correctAnswer": "b"
  }
],
    "Entrepreneurship in Digital Age": [
  {
    "id": 1,
    "questionText": "What is the primary goal of entrepreneurship in the modern economy?",
    "options": [
      "a) To create new technologies",
      "b) To solve problems and create value",
      "c) To manage finances",
      "d) To compete with large corporations"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Design Thinking is a method that helps us to look at problems from _______.",
    "options": [
      "a) A single perspective",
      "b) Different angles",
      "c) A technical standpoint only",
      "d) A historical context"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The five key steps in Design Thinking are Empathize, Define, Ideate, Prototype, and _______.",
    "options": [
      "a) Analyze",
      "b) Test",
      "c) Implement",
      "d) Evaluate"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What does \"Empathize\" mean in Design Thinking?",
    "options": [
      "a) To brainstorm solutions",
      "b) To put yourself in someone else's shoes to understand their feelings, needs, and challenges",
      "c) To create a quick version of your idea",
      "d) To evaluate the effectiveness of a solution"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "In Design Thinking, \"Define\" refers to _______.",
    "options": [
      "a) Gathering information, the next step is to clearly define the problem",
      "b) Imagining all possible solutions",
      "c) Creating a simple version of your idea",
      "d) Testing the solution with users"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 6,
    "questionText": "\"Ideate\" in Design Thinking means _______.",
    "options": [
      "a) Narrowing down ideas",
      "b) Brainstorming to think of all possible solutions without worrying if they are perfect",
      "c) Defining a specific problem",
      "d) Getting user feedback"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What is a \"Prototype\" in Design Thinking?",
    "options": [
      "a) The final product",
      "b) A simple version of your idea that you can create quickly",
      "c) A detailed business plan",
      "d) A marketing strategy"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The \"Test\" step in Design Thinking involves _______.",
    "options": [
      "a) Launching the product immediately",
      "b) Asking users to try the product and give feedback to see if it works well",
      "c) Documenting the problem",
      "d) Ignoring user opinions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Business solutions are ways to help companies solve problems and _______.",
    "options": [
      "a) Avoid customer interaction",
      "b) Work better",
      "c) Reduce competition",
      "d) Increase costs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "What is the purpose of Design Thinking in developing business solutions?",
    "options": [
      "a) To complicate business processes",
      "b) To help businesses tackle challenges and better meet customer needs",
      "c) To reduce innovation",
      "d) To focus solely on financial gains"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "A business plan is a document that describes your business idea, how you plan to make it successful, and the steps you will take to _______.",
    "options": [
      "a) Hide information from competitors",
      "b) Achieve your goals",
      "c) Avoid regulations",
      "d) Minimize effort"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "Which of the following is NOT a key part of a business plan mentioned?",
    "options": [
      "a) Executive Summary",
      "b) Market Analysis",
      "c) Personal Daily Schedule",
      "d) Financial Plan"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The Executive Summary in a business plan is a brief overview of _______.",
    "options": [
      "a) The company's history",
      "b) The business idea and its most important points",
      "c) Detailed financial statements",
      "d) Product specifications"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What does the Business Description part of a business plan explain?",
    "options": [
      "a) The products or services you will offer, your target customers, and what makes your business unique",
      "b) Your personal background",
      "c) The economic forecast",
      "d) Your competitors' strategies"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "Market Analysis in a business plan shows that you understand your market, including your potential customers, what they need, and _______.",
    "options": [
      "a) Your personal income",
      "b) Who your competitors are",
      "c) Your daily routine",
      "d) Your hobbies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The \"Products or Services\" section of a business plan explains what you are selling or offering and _______.",
    "options": [
      "a) How you will get rich",
      "b) The features and benefits of your products or services",
      "c) Your employee salaries",
      "d) Your personal expenses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Marketing and Sales Strategy in a business plan describes your marketing methods and _______.",
    "options": [
      "a) Product manufacturing process",
      "b) Sales tactics",
      "c) Legal obligations",
      "d) Software used"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "The Financial Plan outlines your financial goals and how you will achieve them, including details about your budget, funding needs, and _______.",
    "options": [
      "a) Personal savings",
      "b) Expected revenue",
      "c) Competitor profits",
      "d) Employee benefits"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What is the purpose of \"Using Digital Tools to Create a Business Plan\"?",
    "options": [
      "a) To make the plan more expensive",
      "b) To make the process more efficient and accessible",
      "c) To limit who can see the plan",
      "d) To complicate the plan"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Software like PlanGuru or Enloop can be used to create a business plan, offering templates for _______.",
    "options": [
      "a) Personal budgeting",
      "b) Retail businesses",
      "c) Academic essays",
      "d) Game development"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Collaborative tools like Google Drive or Dropbox Paper are essential for teamwork when developing a business plan, particularly if you are working with _______.",
    "options": [
      "a) Only yourself",
      "b) Partners or advisors",
      "c) Competitors",
      "d) Customers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is the primary goal of collecting market insights?",
    "options": [
      "a) To ignore customer feedback",
      "b) To gain an understanding of the success of any business",
      "c) To reduce market competition",
      "d) To simplify financial planning"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Market research techniques include Qualitative Research and _______.",
    "options": [
      "a) Historical Research",
      "b) Quantitative Research",
      "c) Theoretical Research",
      "d) Experimental Research"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "Qualitative Research focuses on understanding the underlying reasons, opinions, and motivations of customers, involving methods such as interviews, focus groups, and _______.",
    "options": [
      "a) Statistical analysis",
      "b) Observations",
      "c) Large-scale surveys",
      "d) Financial projections"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What type of research involves conducting surveys to gather numerical data that can be measured and analyzed statistically?",
    "options": [
      "a) Qualitative Research",
      "b) Observational Research",
      "c) Quantitative Research",
      "d) Experimental Research"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Customer Surveys are a powerful tool for gathering information from a large number of customers, conducted online, over the phone, or in _______.",
    "options": [
      "a) Private meetings",
      "b) Person",
      "c) Confidential reports",
      "d) Academic journals"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Focus Groups consist of a small, diverse set of individuals brought together to engage in detailed discussions about a product, service, or concept, with the primary objective to obtain a comprehensive understanding of _______.",
    "options": [
      "a) Competitor strategies",
      "b) Customer opinions and attitudes",
      "c) Market trends",
      "d) Financial regulations"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Analyzing Market Data involves reviewing the information to find important trends, and _______.",
    "options": [
      "a) Historical facts",
      "b) Insights that can help guide your business decisions",
      "c) Random data points",
      "d) Irrelevant information"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Understanding Trends and Patterns helps when we analyze the market data to identify _______.",
    "options": [
      "a) Individual customer preferences only",
      "b) Key objectives and future patterns",
      "c) Competitor weaknesses",
      "d) Company internal structures"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What does Competitor Analysis involve?",
    "options": [
      "a) Analyzing market data to look at your competitors",
      "b) Focusing solely on your own business",
      "c) Ignoring market rivals",
      "d) Collaborating with competitors"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 31,
    "questionText": "Predictive Analysis uses historical data to forecast future trends and outcomes, useful for _______.",
    "options": [
      "a) Explaining past events",
      "b) Predicting sales data",
      "c) Random decision-making",
      "d) Avoiding market research"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Making Data-Driven Decisions is the primary aim of analyzing market data to make _______.",
    "options": [
      "a) Guesswork decisions",
      "b) Well-informed decisions that improve your business's success",
      "c) Decisions based on personal bias",
      "d) Quick, uninformed decisions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "A business pitch is a short presentation where you explain your business idea. What is a key question your pitch should answer?",
    "options": [
      "a) What is my personal history?",
      "b) What the idea is?",
      "c) What are my competitors' failures?",
      "d) What is the weather like today?"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "The step \"Introduce Your Solution\" in pitching involves talking about how your business will solve the problem. You might explain, \"Our juice shop will offer a variety of fresh, healthy juices made from _______.",
    "options": [
      "a) Concentrate",
      "b) Local fruits",
      "c) Artificial flavors",
      "d) Imported ingredients"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Explaining \"Why It's Unique\" in a pitch highlights what makes your idea better or different than other options, focusing on _______.",
    "options": [
      "a) Cost-cutting measures",
      "b) Affordability and supporting local farmers",
      "c) Generic products",
      "d) Extensive advertising"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Knowing your audience in a pitch means talking to a group of potential customers, focusing on _______.",
    "options": [
      "a) Your personal achievements",
      "b) What they would love your juices",
      "c) Industry jargon",
      "d) Technical details"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "Estimating costs in a pitch helps explain _______.",
    "options": [
      "a) Your profit margin",
      "b) How much the juices will cost or where the shop will be located",
      "c) Your personal expenses",
      "d) Your competitors' pricing"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Pitching is important because it helps you get the support you need to turn your idea into reality, whether you're starting a small business or _______.",
    "options": [
      "a) Getting a job",
      "b) Launching a big project",
      "c) Writing a book",
      "d) Buying a new car"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Understanding Your Market involves identifying potential customers, their needs, and _______.",
    "options": [
      "a) Your personal opinions",
      "b) How your product can address those needs",
      "c) Your daily activities",
      "d) Your competitors' weaknesses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "A marketing plan details the strategies for reaching your target market, including selecting promotional channels such as social media, television, or _______.",
    "options": [
      "a) Word-of-mouth",
      "b) Physical mail",
      "c) Personal visits",
      "d) Telemarketing"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 41,
    "questionText": "What does \"Revenue\" represent in financial concepts?",
    "options": [
      "a) The total amount of money a business earns from selling goods or services",
      "b) The total costs of running a business",
      "c) The profit made by a business",
      "d) The amount of money invested"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "Profit is calculated by subtracting _______.",
    "options": [
      "a) Investments from revenue",
      "b) Costs from revenue",
      "c) Taxes from revenue",
      "d) Savings from revenue"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Expenses are the costs that a business incurs while operating. Which of the following is an example of an expense?",
    "options": [
      "a) Revenue from sales",
      "b) Customer payments",
      "c) Salaries",
      "d) Investment returns"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Investment involves allocating funds to a business or project with the aim of generating _______.",
    "options": [
      "a) Immediate profit",
      "b) Future profit",
      "c) Debt",
      "d) Losses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Loans and interest are financial concepts where businesses need money, they take out a loan from a bank or another financial institution, and a loan is borrowed money that must be _______.",
    "options": [
      "a) Never repaid",
      "b) Paid back with interest",
      "c) Given as a gift",
      "d) Used for personal expenses only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Effective communication and storytelling skills are essential skills that can help you express your ideas, connect with others, and make a lasting impact. What is a key aspect of communication?",
    "options": [
      "a) Clear Speaking",
      "b) Avoiding eye contact",
      "c) Monotonous tone",
      "d) Using complex jargon"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 47,
    "questionText": "Storytelling involves using words, images, and emotions to create a narrative that engages the audience, and a well-crafted story captures attention, simplifies complex ideas, and _______.",
    "options": [
      "a) Distracts listeners",
      "b) Aids in the retention of the message",
      "c) Makes the content boring",
      "d) Confuses the audience"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "In developing communication and storytelling skills, \"Practice Regularly\" suggests that the more you speak and tell stories, the _______.",
    "options": [
      "a) Less confident you become",
      "b) More confident you will become",
      "c) More mistakes you will make",
      "d) Less creative you are"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "\"Show Emotion\" in storytelling involves using your voice and facial expressions to show how you feel about the topic, making your communication more authentic and _______.",
    "options": [
      "a) Distant",
      "b) Relatable",
      "c) Formal",
      "d) Robotic"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is \"Iteration\" in the context of business development?",
    "options": [
      "a) Repeating a process without any changes",
      "b) Making changes and improvements based on feedback until the final outcome is achieved",
      "c) Avoiding feedback",
      "d) Sticking to the initial plan rigidly"
    ],
    "correctAnswer": "b"
  }
]
};
