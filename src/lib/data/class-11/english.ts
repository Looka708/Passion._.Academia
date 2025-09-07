
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './english-short-questions';
import { longQuestions as longQuestionsData } from './english-long-questions';


export const chapters = ["Khatam-un-Nabiyeen Hazrat Muhammad",
                        "Responsibility of the Youth in Nation Building",
                        "A Bird Came Down the Walk",
                        "Team Moon",
                        "Impact of Global Warming on Pakistan",
                        "The Echoing Green",
                        "What You Do is What You are",
                        "Clean Water",
                        "Freedom",
                        "The Punishment of Shahpesh the Persian on Khipil the Builder",
                        "Those Winter Sundays",
                        "The Impact of AI on Society Human Relationships and Ethics",
                        "Rubaiyat",
                        "The End of the Beginning"
];
export const mcqs: Record<string, MCQ[]> = {
    "Khatam-un-Nabiyeen Hazrat Muhammad": [
  {
    "id": 1,
    "questionText": "Where is the sacred city of Makkah located?",
    "options": [
      "a) In the south-eastern region of Hijaz",
      "b) In the north-western region of Hijaz",
      "c) In the south-western region of Hijaz",
      "d) In the central region of Hijaz"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "In what year was Hazrat Muhammad (PBUH) born?",
    "options": [
      "a) 610 A.D.",
      "b) 570 A.D.",
      "c) 571 A.D.",
      "d) 622 A.D."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "To which noble clan was Rasoolullah (PBUH) born?",
    "options": [
      "a) Banu Hashim",
      "b) Banu Umayyah",
      "c) Quraish",
      "d) Aws"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "What was the state of the world when Rasoolullah (PBUH) appeared?",
    "options": [
      "a) Peaceful and prosperous",
      "b) Technologically advanced",
      "c) Engulfed in ignorance and moral decay",
      "d) United under a single empire"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What social problems prevailed in pre-Islamic Arabia?",
    "options": [
      "a) Democracy and equality",
      "b) Scientific advancements and education",
      "c) Idolatry, tribal arrogance, and widespread injustice",
      "d) Strong legal systems"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Who passed away before Rasoolullah's (PBUH) birth?",
    "options": [
      "a) Hazrat Abu Talib",
      "b) Hazrat Abdul Muttalib",
      "c) Hazrat Abdullah",
      "d) Hazrat Amina"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "How old was Rasoolullah (PBUH) when his mother, Hazrat Amina, died?",
    "options": [
      "a) Two years old",
      "b) Four years old",
      "c) Six years old",
      "d) Eight years old"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Who took responsibility for Rasoolullah's (PBUH) upbringing after Hazrat Abdul Muttalib's passing?",
    "options": [
      "a) Hazrat Abdullah",
      "b) Hazrat Amina",
      "c) Hazrat Abu Talib",
      "d) Hazrat Khadijah"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Which qualities of Rasoolullah (PBUH) earned him universal respect in Makkah?",
    "options": [
      "a) Wealth and power",
      "b) Eloquence and poetry",
      "c) Truthfulness, humility, generosity, and sense of justice",
      "d) Military prowess"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What titles were bestowed upon Rasoolullah (PBUH) by the people of Makkah?",
    "options": [
      "a) The Great Warrior and The Wise Leader",
      "b) Al-Sadiq (The Truthful) and Al-Amin (The Trustworthy)",
      "c) The Benevolent and The Just",
      "d) The Orator and The Scholar"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What was Hilf al-Fudul?",
    "options": [
      "a) A trade agreement among the tribes",
      "b) A military alliance against foreign invaders",
      "c) A pact formed to defend the oppressed and uphold justice",
      "d) A poetic competition"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "How did Rasoolullah (PBUH) demonstrate his concern for justice during the reconstruction of the Ka'bah?",
    "options": [
      "a) By leading the reconstruction efforts himself",
      "b) By allowing each tribe to place a piece of the Black Stone",
      "c) By providing an impartial and insightful arbitration regarding the placing of the Hajr-e-Aswad",
      "d) By refusing to participate in the dispute"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Who was Hazrat Khadijah (RA)?",
    "options": [
      "a) A skilled warrior",
      "b) A respected scholar",
      "c) A woman of outstanding virtue, intellect, and business acumen",
      "d) A renowned poet"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What deeply impressed Hazrat Khadijah (RA) about Rasoolullah (PBUH)?",
    "options": [
      "a) His lineage",
      "b) His physical strength",
      "c) His honesty, graceful conduct, and upright character in business dealings",
      "d) His speaking skills"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What role did Hazrat Khadijah (RA) play as Rasoolullah's (PBUH) first supporter?",
    "options": [
      "a) She provided political counsel.",
      "b) She led military campaigns.",
      "c) She provided emotional and financial support during his divine mission.",
      "d) She helped him write revelations."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "To which place did Rasoolullah (PBUH) frequently retreat for solitude and reflection before the first revelation?",
    "options": [
      "a) The marketplace",
      "b) The Ka'bah",
      "c) The Cave of Hira",
      "d) The house of Abu Talib"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "In which month did Hazrat Jibraeel (AS) appear before Rasoolullah (PBUH) with the first revelation?",
    "options": [
      "a) Muharram",
      "b) Rabi-ul-Awwal",
      "c) Dhul-Hijjah",
      "d) Ramadan"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "What was the first word of the revelation given to Rasoolullah (PBUH)?",
    "options": [
      "a) Pray!",
      "b) Proclaim!",
      "c) Read!",
      "d) Believe!"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "The first revelation challenged deep-rooted practices of:",
    "options": [
      "a) Trade and commerce",
      "b) Agriculture and farming",
      "c) Idolatry, class privilege, and social injustice",
      "d) Scientific inquiry"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What was the call to Tauhid?",
    "options": [
      "a) Belief in multiple gods",
      "b) Belief in nature's power",
      "c) Belief in the Oneness of Allah",
      "d) Belief in ancestral spirits"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "How did the Quraish react to Rasoolullah's (PBUH) message after the first revelation?",
    "options": [
      "a) They embraced Islam immediately.",
      "b) They offered him leadership.",
      "c) They became his staunch opponents, viewing his message as a threat.",
      "d) They ignored him."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What difficulties did the Muslims face in Makkah?",
    "options": [
      "a) Famine and disease",
      "b) Lack of trade routes",
      "c) Relentless persecution, economic boycotts, and social ostracism",
      "d) Internal conflicts"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "What was the Hijrah?",
    "options": [
      "a) The first battle of Islam",
      "b) The first revelation",
      "c) The migration of Rasoolullah (PBUH) to Madinah",
      "d) The treaty of Hudaybiyyah"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What was established in Madinah after the Hijrah?",
    "options": [
      "a) A new trade center",
      "b) A military academy",
      "c) The first Islamic society",
      "d) A school of poetry"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What principles did the Charter of Madinah introduce?",
    "options": [
      "a) Dictatorship and monarchy",
      "b) Feudalism and serfdom",
      "c) Civic equality, religious freedom, and the rule of law",
      "d) Tribal supremacy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Which was the first major battle that resulted in a remarkable Muslim victory?",
    "options": [
      "a) Uhud",
      "b) Khandaq",
      "c) Badr",
      "d) Khaybar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "When did the Conquest of Makkah occur?",
    "options": [
      "a) 6 AH",
      "b) 7 AH",
      "c) 8 AH",
      "d) 9 AH"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "How was the Conquest of Makkah described?",
    "options": [
      "a) A brutal siege",
      "b) A protracted war",
      "c) Astonishingly bloodless, marked by exemplary mercy",
      "d) A difficult negotiation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What did Rasoolullah (PBUH) declare during the Conquest of Makkah?",
    "options": [
      "a) A call for retribution",
      "b) A demand for reparations",
      "c) General amnesty, even for those who had persecuted him",
      "d) Exile for his opponents"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Which Surah and verse of the Qur'an describe Rasoolullah (PBUH) as \"a mercy to the worlds\"?",
    "options": [
      "a) Surah Al-Baqarah, 2:107",
      "b) Surah Al-Imran, 3:107",
      "c) Surah Al-Anbiya, 21:107",
      "d) Surah Al-Fatiha, 1:7"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "When did Rasoolullah (PBUH) announce his intention to perform Hajjat-ul-Wida (Farewell Pilgrimage)?",
    "options": [
      "a) The fifth year of Hijrah",
      "b) The seventh year of Hijrah",
      "c) The ninth year of Hijrah",
      "d) The tenth year of Hijrah"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "What was the central message of the Farewell Sermon on the plain of Arafat?",
    "options": [
      "a) A call to expand the Islamic empire",
      "b) Instructions on specific rituals of Hajj",
      "c) Affirmation of universal human dignity, equality, and piety",
      "d) A political declaration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "\"An Arab has no superiority over a non-Arab, nor does a non-Arab have superiority over an Arab. A white person has no superiority over a black person, nor does a black person have superiority over a white person - except through piety and righteous action.\" This quote is from:",
    "options": [
      "a) The Charter of Madinah",
      "b) The first revelation",
      "c) The Farewell Sermon",
      "d) A Hadith from Bukhari"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What is the overarching theme of the entire text about Rasoolullah (PBUH)?",
    "options": [
      "a) Military strategies and conquests",
      "b) Economic policies and trade",
      "c) His exemplary character, leadership, and the transformative impact of his teachings",
      "d) Scientific discoveries and inventions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The word \"acumen\" means:",
    "options": [
      "a) Lack of understanding",
      "b) Physical strength",
      "c) The ability to understand and decide things quickly and well",
      "d) Artistic talent"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "The word \"benefactor\" means:",
    "options": [
      "a) A person who causes harm",
      "b) A person who offers support, help, or assistance",
      "c) A person who seeks personal gain",
      "d) A person who lives in isolation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "\"Idolatry\" refers to:",
    "options": [
      "a) The practice of self-worship",
      "b) The practice of respecting elders",
      "c) The practice of worshipping statues as gods",
      "d) The practice of fasting"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "The term \"ostracism\" means:",
    "options": [
      "a) The act of welcoming someone into a group",
      "b) The act of deliberately not including somebody in a group or activity",
      "c) The act of rewarding good behavior",
      "d) The act of public speaking"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "\"Persecution\" refers to:",
    "options": [
      "a) The act of showing kindness",
      "b) The act of promoting peace",
      "c) The act of treating somebody in a cruel and unfair way, especially because of their race, religion or political beliefs",
      "d) The act of negotiation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "\"Profound\" means:",
    "options": [
      "a) Superficial",
      "b) Insignificant",
      "c) Showing great knowledge or understanding",
      "d) Simple"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "The word \"radical\" means:",
    "options": [
      "a) Minor and insignificant",
      "b) Gradual and slow",
      "c) Relating to the most basic and important parts of something; complete and detailed",
      "d) Traditional and conservative"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "\"Solitude\" means:",
    "options": [
      "a) The state of being surrounded by many people",
      "b) The state of being busy",
      "c) The state of being alone, especially when you find this pleasant",
      "d) The state of being confused"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "\"Vengeance\" refers to:",
    "options": [
      "a) The act of forgiveness",
      "b) The act of reconciliation",
      "c) The act of punishing or harming somebody in return for what they have done to you",
      "d) The act of mediation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "In the sentence, \"The social fabric of society was torn by idolatry...\", \"fabric\" most likely means:",
    "options": [
      "a) Material",
      "b) Structure",
      "c) Decoration",
      "d) Thread"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "In the sentence, \"...a pact formed to defend the oppressed and uphold justice\", \"pact\" most likely means:",
    "options": [
      "a) Organization",
      "b) Battle",
      "c) Agreement",
      "d) Punishment"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "In the sentence, \"He would frequently retreat to the Cave of Hira, seeking solitude and reflection.\", \"retreat\" most likely means:",
    "options": [
      "a) Go back",
      "b) Take shelter",
      "c) Move forward",
      "d) Gather people"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 47,
    "questionText": "In the sentence, \"The Quraish viewed his message as a threat to their traditions and authority.\", \"threat\" most likely means:",
    "options": [
      "a) Gift",
      "b) Danger",
      "c) Tradition",
      "d) Helper"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "In the sentence, \"The Charter of Madinah introduced principles of governance rooted in equality and justice.\", \"Charter\" most likely means:",
    "options": [
      "a) Ship",
      "b) Map",
      "c) Document",
      "d) Story"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "In the sentence, \"The Muslims faced ostracism, boycotts, and persecution in Makkah.\", \"ostraci sm\" most likely means:",
    "options": [
      "a) Reward",
      "b) Acceptance",
      "c) Exclusion",
      "d) Protection"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "In the sentence, \"The Hijrah was a decisive turning point in Islamic history.\", \"decisive\" most likely means:",
    "options": [
      "a) Uncertain",
      "b) Delaying",
      "c) Firm and conclusive",
      "d) Forgettable"
    ],
    "correctAnswer": "c"
  }
],
    "Responsibility of the Youth in Nation Building": [
  {
    "id": 1,
    "questionText": "What is the central theme of Quaid-e-Azam's speech \"Responsibility of the Youth in Nation-Building\"?",
    "options": [
      "a) The importance of military strength",
      "b) The challenges of urban development",
      "c) Nation-building through responsible citizenship and purposeful education",
      "d) The history of Pakistan's independence"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Where did Quaid-e-Azam deliver the speech \"Responsibility of the Youth in Nation-Building\"?",
    "options": [
      "a) Karachi University Convocation",
      "b) Lahore University Convocation",
      "c) Dhaka University Convocation",
      "d) Peshawar University Convocation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "On what date was this speech delivered?",
    "options": [
      "a) March 23, 1947",
      "b) August 14, 1948",
      "c) March 24, 1948",
      "d) September 11, 1948"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "How does Quaid-e-Azam address the students in his speech?",
    "options": [
      "a) As the Head of State",
      "b) As a strict leader",
      "c) As a friend and one who has always held them in affection",
      "d) As their employer"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What does Quaid-e-Azam say is incumbent upon every Mussalman?",
    "options": [
      "a) To seek personal wealth",
      "b) To pursue higher education abroad",
      "c) To serve his people honestly and selflessly",
      "d) To engage in political protests"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "According to Quaid-e-Azam, what significant change did the students experience upon the birth of Pakistan?",
    "options": [
      "a) Increased job opportunities in government",
      "b) A return to colonial rule",
      "c) Entering life under a sovereign, Independent State of their own",
      "d) Greater academic freedom"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Quaid-e-Azam emphasizes that \"freedom, however, does not mean __________.\"",
    "options": [
      "a) Responsibility",
      "b) Progress",
      "c) License",
      "d) Opportunity"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is required of the nation after achieving freedom, according to Quaid-e-Azam?",
    "options": [
      "a) Militant spirit",
      "b) Passive observance",
      "c) Constructive spirit",
      "d) International aid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What tragic event followed the establishment of Pakistan, as mentioned by Quaid-e-Azam?",
    "options": [
      "a) Economic depression",
      "b) Foreign invasion",
      "c) The Punjab and Delhi holocaust",
      "d) Natural disasters"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "How did Pakistan's enemies try to weaken and destroy it, according to the speech?",
    "options": [
      "a) By imposing trade sanctions",
      "b) By launching a propaganda campaign",
      "c) Through the Punjab and Delhi holocaust and withholding cash balances",
      "d) By disrupting its educational system"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What was the impact of the Punjab and Delhi holocaust on Pakistan?",
    "options": [
      "a) It strengthened the enemies' resolve.",
      "b) It led to Pakistan's immediate collapse.",
      "c) Pakistan survived the shock and emerged stronger, more chastened and better equipped.",
      "d) It caused widespread indifference."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What was another difficulty Pakistan faced shortly after independence, as mentioned by Quaid-e-Azam?",
    "options": [
      "a) Lack of natural resources",
      "b) Insufficient infrastructure development",
      "c) Withholding by India of cash balances and military equipment",
      "d) Internal political disputes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What should be the main occupation of the students, in fairness to themselves, their parents, and the State?",
    "options": [
      "a) Engaging in politics",
      "b) Seeking government jobs",
      "c) Devoting attention solely to their studies",
      "d) Starting their own businesses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "How can students become an \"asset and a source of strength and of pride to their State\"?",
    "options": [
      "a) By participating in protests",
      "b) By joining the military",
      "c) By equipping themselves for the battle of life through studies",
      "d) By relying on foreign aid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What are the \"fifth columnists\" that Quaid-e-Azam warns the youth against?",
    "options": [
      "a) Foreign spies",
      "b) International organizations",
      "c) Traitors or secret sympathizers of an enemy",
      "d) Academic rivals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Quaid-e-Azam advises the youth to guard against and weed out __________ people.",
    "options": [
      "a) Ambitious",
      "b) Educated",
      "c) Selfish",
      "d) Naive"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What does Quaid-e-Azam criticize about the old system of education and government?",
    "options": [
      "a) It promoted entrepreneurship.",
      "b) It encouraged technical skills.",
      "c) It was designed to produce well-trained clerks.",
      "d) It focused on arts and philosophy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What does Quaid-e-Azam say about an M.A. degree holder compared to a taxi driver?",
    "options": [
      "a) An M.A. earns more.",
      "b) Their earnings are similar.",
      "c) An M.A. earns less than a taxi driver.",
      "d) A taxi driver earns less."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Why does Quaid-e-Azam encourage students to move away from only seeking government jobs?",
    "options": [
      "a) Government jobs are scarce and can lead to demoralization and exploitation.",
      "b) Government jobs are too challenging.",
      "c) Government jobs offer no prestige.",
      "d) Government jobs are only for the elderly."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 20,
    "questionText": "What alternative avenues and fields does Quaid-e-Azam suggest for the youth?",
    "options": [
      "a) Manual labor only",
      "b) Overseas employment",
      "c) Technical education, banking, commerce, trade, law, industry",
      "d) Political activism"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What example does Quaid-e-Azam provide to illustrate success outside of government service?",
    "options": [
      "a) A successful farmer",
      "b) A renowned academic",
      "c) A young man who succeeded in a banking corporation",
      "d) A military officer"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The word \"affection\" means:",
    "options": [
      "a) Indifference",
      "b) Hatred",
      "c) The feeling of liking or loving somebody/something very much and caring about them",
      "d) Fear"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "\"Avenue\" in the context of the speech refers to:",
    "options": [
      "a) A street",
      "b) A path",
      "c) A choice or way of making progress towards something",
      "d) A public building"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "\"Blockade\" means:",
    "options": [
      "a) An open pathway",
      "b) A free trade zone",
      "c) The action of surrounding or closing a place to stop people or goods from coming in or out",
      "d) A diplomatic agreement"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "To \"deplore\" something means:",
    "options": [
      "a) To praise or commend",
      "b) To accept without question",
      "c) To criticize something, especially publicly, because you think it is very bad",
      "d) To ignore"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "\"Disgruntled\" means:",
    "options": [
      "a) Happy and satisfied",
      "b) Enthusiastic and motivated",
      "c) Annoyed or disappointed because something has happened to upset you",
      "d) Peaceful and calm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "\"Exploit\" in the context of the speech means:",
    "options": [
      "a) To help or assist",
      "b) To develop for one's benefit",
      "c) To treat somebody unfairly by making them work and not giving them much in return",
      "d) To discover"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "\"Holocaust\" refers to:",
    "options": [
      "a) A grand celebration",
      "b) A peaceful demonstration",
      "c) A situation in which many things are destroyed and many people killed",
      "d) A period of economic growth"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "\"Incumbent\" refers to:",
    "options": [
      "a) A person who has retired from an official position",
      "b) A person who has an official position",
      "c) A person who is unemployed",
      "d) A person who is an enemy"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "\"Selflessly\" means:",
    "options": [
      "a) In a way that prioritizes personal gain",
      "b) In a way that shows no emotion",
      "c) In a way that shows that you are thinking more about the needs, happiness, etc. of other people than about your own",
      "d) In a way that is boastful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "\"Vigilance\" means:",
    "options": [
      "a) Carelessness",
      "b) Indifference",
      "c) Great care that is taken to notice any signs of danger or trouble",
      "d) Laziness"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Why does Quaid-e-Azam clarify the informal nature of his speech at the beginning?",
    "options": [
      "a) To apologize for being unprepared",
      "b) To highlight his dislike for universities",
      "c) To connect with the students on a personal level",
      "d) To announce policy changes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What major outcome of gaining independence does Quaid-e-Azam identify?",
    "options": [
      "a) Increased foreign investment",
      "b) The end of student protests",
      "c) A free government responsible to its people",
      "d) The reopening of colonial offices"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Quaid-e-Azam warns that freedom should not be mistaken for __________.",
    "options": [
      "a) Opportunity",
      "b) Independence",
      "c) Lawlessness",
      "d) Responsibility"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "How does Quaid-e-Azam describe the early days of Pakistan?",
    "options": [
      "a) Smooth and full of promise",
      "b) Peaceful and organized",
      "c) Challenging but full of hope",
      "d) Prosperous from the start"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Which historical event does Quaid-e-Azam reference to highlight Pakistan's struggle?",
    "options": [
      "a) The Quit India Movement",
      "b) The Punjab and Delhi riots",
      "c) The Bengal famine",
      "d) The Kashmir conflict"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "Why does Quaid-e-Azam stress the importance of students focusing on their studies?",
    "options": [
      "a) To avoid political activism",
      "b) To build a strong and self-reliant nation",
      "c) To keep universities functioning",
      "d) To meet international academic standards"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What mentality does Quaid-e-Azam criticize in students seeking only government jobs?",
    "options": [
      "a) It promotes political instability.",
      "b) It reflects colonial influence and limits growth.",
      "c) It benefits the economy.",
      "d) It builds national pride."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What alternative paths does Quaid-e-Azam encourage students to consider?",
    "options": [
      "a) Travel and tourism",
      "b) Political campaigning",
      "c) Manual work, trade, industry, and technical fields",
      "d) Teaching and social work only"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is the overall tone of Quaid-e-Azam's message to the students?",
    "options": [
      "a) Humorous and casual",
      "b) Stern and authoritarian",
      "c) Encouraging and visionary",
      "d) Dismissive and critical"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "In the sentence, \"The speaker praised the laurels earned by the graduating students.\", \"laurels\" most likely means:",
    "options": [
      "a) Punishments",
      "b) Achievements",
      "c) Decorations",
      "d) Misunderstandings"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "In the sentence, \"He urged the youth not to be swayed by selfish individuals who seek personal gain.\", \"selfish\" most likely means:",
    "options": [
      "a) Generous",
      "b) Humble",
      "c) Self-centred",
      "d) Respectful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "In the sentence, \"Quaid-e-Azam referred to the threshold of life as the point where students enter the real world.\", \"threshold\" most likely means:",
    "options": [
      "a) Boundary",
      "b) Ending",
      "c) Origin",
      "d) Entrance"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "In the sentence, \"He emphasised that constructing a nation is harder than fighting for independence.\", \"constructing\" most likely means:",
    "options": [
      "a) Creating",
      "b) Demolishing",
      "c) Declining",
      "d) Decorating"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 45,
    "questionText": "In the sentence, \"The upheaval caused by partition tested the strength of the new nation.\", \"upheaval\" most likely means:",
    "options": [
      "a) Celebration",
      "b) Stability",
      "c) Disruption",
      "d) Entertainment"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "\"Pakistan had faced massive refugee crises immediately after its independence.\" This sentence is in which tense?",
    "options": [
      "a) Simple Present",
      "b) Present Perfect",
      "c) Past Perfect",
      "d) Simple Past"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 47,
    "questionText": "\"The nation will thrive if its citizens work together sincerely.\" This sentence is in which tense?",
    "options": [
      "a) Simple Present",
      "b) Present Continuous",
      "c) Simple Future",
      "d) Future Perfect"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "\"Students are dedicating their time to productive learning.\" This sentence is in which tense?",
    "options": [
      "a) Simple Present",
      "b) Present Continuous",
      "c) Simple Future",
      "d) Present Perfect"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "\"We broke free from colonial rule in 1947.\" This sentence is in which tense?",
    "options": [
      "a) Present Perfect",
      "b) Simple Past",
      "c) Past Continuous",
      "d) Simple Future"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What type of essay is students asked to write about \"The Role of Education in Nation-Building\"?",
    "options": [
      "a) Descriptive essay",
      "b) Explanatory essay",
      "c) Argumentative essay",
      "d) Narrative essay"
    ],
    "correctAnswer": "c"
  }
],
    "A Bird Came Down the Walk": [
  {
    "id": 1,
    "questionText": "Who is the poet of \"A Bird Came Down the Walk\"?",
    "options": [
      "a) Robert Hayden",
      "b) William Blake",
      "c) Langston Hughes",
      "d) Emily Dickinson"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 2,
    "questionText": "What is the bird's initial action described in the poem?",
    "options": [
      "a) It drank dew.",
      "b) It hopped sidewise.",
      "c) It bit an Angleworm in halves and ate it raw.",
      "d) It glanced with rapid eyes."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "From where did the bird drink dew?",
    "options": [
      "a) A puddle",
      "b) A stream",
      "c) A convenient Grass",
      "d) A leaf"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Why did the bird hop sidewise to the wall?",
    "options": [
      "a) To hide",
      "b) To find more food",
      "c) To let a Beetle pass",
      "d) To look at the speaker"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "How did the speaker describe the bird's eyes?",
    "options": [
      "a) Like shining jewels",
      "b) Bright and curious",
      "c) Like frightened Beads",
      "d) Calm and still"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "How did the bird stir its head?",
    "options": [
      "a) Playfully",
      "b) Lazily",
      "c) Like one in danger, Cautious",
      "d) Eagerly"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What did the speaker offer the bird?",
    "options": [
      "a) A seed",
      "b) A worm",
      "c) A Crumb",
      "d) Water"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What was the bird's reaction to the speaker's offer?",
    "options": [
      "a) It accepted the offer.",
      "b) It sang a song.",
      "c) It unrolled its feathers and rowed him softer home.",
      "d) It flew directly at the speaker."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "The bird's flight is compared to:",
    "options": [
      "a) Leaves rustling in the wind",
      "b) Fish swimming in a stream",
      "c) Oars dividing the Ocean, too silver for a seam",
      "d) Clouds drifting in the sky"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What other natural imagery is used to describe the bird's flight?",
    "options": [
      "a) Bees humming in a garden",
      "b) Dragonflies hovering over water",
      "c) Butterflies, off Banks of Noon, Leap, plashless as they swim",
      "d) Birds soaring high above"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "How many stanzas are in \"A Bird Came Down the Walk\"?",
    "options": [
      "a) Three",
      "b) Four",
      "c) Five",
      "d) Six"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What type of stanzas are used in the poem?",
    "options": [
      "a) Couplets",
      "b) Tercets",
      "c) Quatrains",
      "d) Sestets"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is one of the distinct aspects of Dickinson's approach to nature, as described in the background?",
    "options": [
      "a) It is highly romanticized.",
      "b) It focuses only on beauty.",
      "c) It presents nature with a blend of beauty and raw reality.",
      "d) It avoids detailed observation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "When was most of Emily Dickinson's poetry published?",
    "options": [
      "a) During her lifetime",
      "b) Shortly before her death",
      "c) After her death",
      "d) In the early 20th century"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What are common motifs in Dickinson's poetry?",
    "options": [
      "a) Politics and social issues",
      "b) Adventure and travel",
      "c) Nature, death, and the human psyche",
      "d) Technology and science"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What does the poem \"A Bird Came Down the Walk\" contrast in terms of nature?",
    "options": [
      "a) Sunlight and darkness",
      "b) Stillness and movement",
      "c) The beauty and brutality of nature",
      "d) Land and water"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "The bird's decision to fly away after being offered a crumb underscores:",
    "options": [
      "a) The bird's shyness",
      "b) The speaker's kindness",
      "c) Nature's independence and the boundary between human interaction and natural autonomy",
      "d) The bird's preference for worms"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What does the bird symbolize in the poem?",
    "options": [
      "a) Vulnerability and dependence",
      "b) Curiosity and interaction",
      "c) Freedom and self-reliance",
      "d) Hunger and survival"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "The line \"Like one in danger, Cautious\" subtly contrasts innocence with:",
    "options": [
      "a) Playfulness",
      "b) Boldness",
      "c) The potential for danger",
      "d) Harmony"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "\"Angleworm\" is another term for:",
    "options": [
      "a) A type of bird",
      "b) An earthworm",
      "c) A beetle",
      "d) A type of grass"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "\"Beads\" in the description of the bird's eyes refers to:",
    "options": [
      "a) Small pieces of glass",
      "b) A metaphorical description for eyes",
      "c) Water droplets",
      "d) Tiny stones"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "\"Caesura\" is a literary device defined as:",
    "options": [
      "a) The repetition of consonant sounds.",
      "b) When one line of poetry continues into the next without a pause.",
      "c) A pause in a line of poetry that can be created using punctuation.",
      "d) Placing two ideas side by side to highlight contrast."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "\"Enjambment\" is a literary device defined as:",
    "options": [
      "a) The repetition of initial consonant sounds.",
      "b) When one line of poetry continues into the next line without a pause.",
      "c) A pause within a line of poetry.",
      "d) The comparison of two different things using \"like\" or \"as.\""
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "\"Alliteration\" is a literary device defined as:",
    "options": [
      "a) Giving human qualities to animals.",
      "b) The repetition of the same letter or sound at the start of words that are adjacent or close together.",
      "c) Using descriptive language that appeals to the senses.",
      "d) An object representing something beyond its literal meaning."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "\"Juxtaposition\" is a literary device used to:",
    "options": [
      "a) Create a sense of mystery.",
      "b) Generate humor.",
      "c) Place two or more ideas, characters, or settings side by side to highlight their contrasts.",
      "d) Introduce a new character."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "\"Plashless\" means:",
    "options": [
      "a) With much splashing",
      "b) Without splashing, used to describe silent, graceful movement",
      "c) Making a loud noise",
      "d) Rapidly"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "\"Velvet\" in \"Velvet Head\" refers to:",
    "options": [
      "a) The color of the bird",
      "b) A type of cloth with a thick, soft surface, metaphorically used for softness",
      "c) A type of feather",
      "d) A smooth, hard surface"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Which of the following is an example of personification in the poem?",
    "options": [
      "a) \"He bit an Angleworm in halves\"",
      "b) \"And then he drank a Dew\"",
      "c) \"He stirred his Velvet Head\"",
      "d) \"I offered him a Crumb\""
    ],
    "correctAnswer": "a"
  },
  {
    "id": 29,
    "questionText": "The metaphor in the final stanza compares the bird's flight to:",
    "options": [
      "a) A cloud drifting",
      "b) Oars divide the Ocean",
      "c) A ship sailing",
      "d) A kite flying"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "The simile \"They looked like frightened Beads\" compares the bird's eyes to:",
    "options": [
      "a) Small stones",
      "b) Drops of water",
      "c) Frightened beads",
      "d) Bright stars"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The tactile imagery in \"He stirred his Velvet Head\" contributes to the tone of:",
    "options": [
      "a) Aggression",
      "b) Fear",
      "c) Gentleness and tenderness",
      "d) Indifference"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is the bird's initial action when it comes down the walk?",
    "options": [
      "a) It drinks from a puddle.",
      "b) It bites an angleworm in half.",
      "c) It flies away.",
      "d) It hops to a wall."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "How does the speaker describe the bird's eyes?",
    "options": [
      "a) Bright as the sun.",
      "b) Like sparkling jewels.",
      "c) Like frightened Beads.",
      "d) As calm and serene."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What does the bird do after the speaker offers it a crumb?",
    "options": [
      "a) Eats the crumb.",
      "b) Flies away.",
      "c) Sings a song.",
      "d) Hops closer to the speaker."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "The bird's flight is compared to:",
    "options": [
      "a) Leaves falling from a tree.",
      "b) Waves crashing on the shore.",
      "c) Oars dividing the ocean.",
      "d) Wind blowing through the trees."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the tone of the poem?",
    "options": [
      "a) Joyful and celebratory.",
      "b) Tense and suspenseful.",
      "c) Calm and reflective.",
      "d) Angry and resentful."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What is the cause when \"The bird hopped sideways to the wall to let the Beetle pass\"?",
    "options": [
      "a) The bird was tired.",
      "b) The bird was looking for food.",
      "c) The beetle needed to pass.",
      "d) The wall was too high."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "What is the effect when \"The speaker offered a Crumb to the bird\"?",
    "options": [
      "a) The bird ate it immediately.",
      "b) The bird became friendly.",
      "c) The bird flew away.",
      "d) The bird sang a song."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The statement \"The bird's eyes looked like 'frightened Beads'\" is:",
    "options": [
      "a) Fact",
      "b) Opinion",
      "c) Generalized Statement",
      "d) Evidence-Based Information"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "The statement \"The bird 'bit an Angleworm in halves and ate the fellow, raw'\" is:",
    "options": [
      "a) Generalized Statement",
      "b) Evidence-Based Information",
      "c) Opinion",
      "d) Inference"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the denotative meaning of \"velvet\"?",
    "options": [
      "a) Smooth",
      "b) Soft",
      "c) A type of cloth",
      "d) Luxurious"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What is the connotative meaning of \"velvet\" when describing the bird's head?",
    "options": [
      "a) Roughness",
      "b) Softness and delicacy",
      "c) Hardness",
      "d) Heaviness"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which pair of words has similar basic definitions but evokes different feelings, as discussed in the text?",
    "options": [
      "a) Fly vs. walk",
      "b) Eat vs. drink",
      "c) Glance vs. stare",
      "d) Hop vs. jump"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "In the line \"He stirred his Velvet Head\", what is the inferred meaning of \"stirred\" using context clues?",
    "options": [
      "a) To shake",
      "b) To clean",
      "c) To move slightly",
      "d) To comb"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The phrase \"They looked like frightened Beads\" is an example of:",
    "options": [
      "a) Personification",
      "b) Metaphor",
      "c) Simile",
      "d) Symbolism"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "\"He stirred his Velvet Head\" is an example of:",
    "options": [
      "a) Euphemism",
      "b) Oxymoron",
      "c) Simile",
      "d) Personification"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 47,
    "questionText": "In the context of the poem, Dickinson's direct descriptions of the bird eating the worm without softening the reality indicate:",
    "options": [
      "a) Use of oxymoron",
      "b) Use of simile",
      "c) Absence of euphemism",
      "d) Use of hyperbole"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "Which of the following is a compound preposition?",
    "options": [
      "a) On",
      "b) By",
      "c) Into",
      "d) At"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What does the compound preposition \"within\" mean in the sentence: \"You must complete the work within two days\"?",
    "options": [
      "a) Outside the limit",
      "b) In between",
      "c) Beyond the limit",
      "d) Inside a time limit"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "A prepositional phrase consists of a preposition followed by a:",
    "options": [
      "a) Verb or adverb",
      "b) Noun, pronoun, or noun phrase",
      "c) Adjective or conjunction",
      "d) Independent clause"
    ],
    "correctAnswer": "b"
  }
],
    "Team Moon": [
  {
    "id": 1,
    "questionText": "\"Team Moon\" is an adaptation inspired by a book by:",
    "options": [
      "a) Emily Dickinson",
      "b) Robert Hayden",
      "c) Langston Hughes",
      "d) Catherine Thimmesh"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 2,
    "questionText": "What was Neil Armstrong's famous quote upon stepping onto the Moon?",
    "options": [
      "a) \"Houston, we have a problem.\"",
      "b) \"The sky is not the limit.\"",
      "c) \"That's one small step for man, one giant leap for mankind.\"",
      "d) \"The Eagle has landed.\""
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "How many people were part of the \"vast, hidden army\" working behind Apollo 11's success?",
    "options": [
      "a) 3 astronauts",
      "b) 40,000 people",
      "c) 400,000 people",
      "d) 4 million people"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "What was the critical task of the seamstresses at Playtex?",
    "options": [
      "a) Sewing flags",
      "b) Upholstering spacecraft interiors",
      "c) Crafting spacesuits that would protect astronauts",
      "d) Making parachutes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Why was the work of the seamstresses considered a \"matter of life and death\"?",
    "options": [
      "a) Because they worked in dangerous conditions.",
      "b) Because they faced strict deadlines.",
      "c) One misplaced stitch could spell disaster for the astronauts.",
      "d) Their work was highly competitive."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "What were the engineers at NASA tackling with the Saturn V rocket?",
    "options": [
      "a) Designing new communication systems",
      "b) Developing lunar vehicles",
      "c) Problems no one had ever solved before, ensuring flawless function to carry cargo to the Moon",
      "d) Training astronauts"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Where was Mission Control located for Apollo 11?",
    "options": [
      "a) Cape Canaveral",
      "b) Washington D.C.",
      "c) Houston",
      "d) New York"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What happened when the lunar module \"Eagle\" descended towards the Moon, causing tension in Mission Control?",
    "options": [
      "a) A sudden loss of communication",
      "b) A change in weather patterns",
      "c) Alarms blared with unexpected error codes",
      "d) A power outage"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "How did Mission Control resolve the alarm situation during the lunar landing?",
    "options": [
      "a) They aborted the mission.",
      "b) They instructed the astronauts to restart the computer.",
      "c) They quickly determined the alarms were not mission-critical and the computer was overloaded but functioning.",
      "d) They asked for advice from external experts."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Who was Margaret Hamilton?",
    "options": [
      "a) An astronaut",
      "b) A flight director",
      "c) A software engineer who led the team for the lunar module's onboard flight software",
      "d) A seamstress"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What was Hamilton's software designed to do that proved invaluable during the lunar landing?",
    "options": [
      "a) Enhance visual displays",
      "b) Improve communication speed",
      "c) Prioritise the most critical tasks and discard less important ones when overloaded",
      "d) Control the rocket's propulsion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The \"Unseen Heroes\" mentioned in the text include:",
    "options": [
      "a) Only scientists and engineers",
      "b) Only astronauts",
      "c) Janitors, technicians, and scientists",
      "d) Only seamstresses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What did the Moon landing signify, beyond the astronauts' dreams?",
    "options": [
      "a) A new era of space tourism",
      "b) The end of international competition",
      "c) A triumph of human ingenuity and perseverance, made possible by 400,000 people's efforts",
      "d) The discovery of new resources"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "How long did Armstrong and Aldrin spend on the lunar surface?",
    "options": [
      "a) 2 hours",
      "b) 12 hours",
      "c) Just over 21 hours",
      "d) 48 hours"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Where did the astronauts splash down safely after returning from the Moon?",
    "options": [
      "a) Atlantic Ocean",
      "b) Indian Ocean",
      "c) Pacific Ocean",
      "d) Mediterranean Sea"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "The theme of \"Team Moon\" is:",
    "options": [
      "a) The individual heroism of astronauts",
      "b) The technological advancements of NASA",
      "c) The power of teamwork and collaboration in achieving extraordinary goals",
      "d) The history of space exploration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "\"Abort\" means:",
    "options": [
      "a) To successfully complete a task.",
      "b) To initiate a new project.",
      "c) To end or cause something to end before it has been completed.",
      "d) To delay an activity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "\"Behemoth\" refers to:",
    "options": [
      "a) A small, delicate object.",
      "b) A fast-moving vehicle.",
      "c) Something which has the qualities of great power and might.",
      "d) A complex problem."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "\"Collaboration\" means:",
    "options": [
      "a) Working independently.",
      "b) Engaging in competition.",
      "c) The act of working with another person or group of people to create or produce something.",
      "d) Avoiding group tasks."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "\"Foresight\" is:",
    "options": [
      "a) The ability to react quickly to events.",
      "b) The ability to remember past events.",
      "c) The ability to predict what is likely to happen and to use this to prepare for the future.",
      "d) The ability to analyze current events."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "\"Insurmountable\" means:",
    "options": [
      "a) Easily overcome.",
      "b) Possible to achieve.",
      "c) (Of difficulties, problems, etc.) that cannot be dealt with successfully.",
      "d) A simple task."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "\"Monumental\" means:",
    "options": [
      "a) Small and insignificant.",
      "b) Temporary and fleeting.",
      "c) Very important and having a great influence, especially as the result of years of work.",
      "d) Easily forgotten."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "\"Perseverance\" is:",
    "options": [
      "a) Giving up easily.",
      "b) Lack of determination.",
      "c) The quality of continuing to try to achieve a particular aim despite difficulties.",
      "d) A sudden burst of effort."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "\"Precision\" is:",
    "options": [
      "a) Being approximate.",
      "b) Making many errors.",
      "c) The quality of being exact, accurate and careful.",
      "d) Being vague."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "\"Simulations\" are:",
    "options": [
      "a) Real-world experiments.",
      "b) Random events.",
      "c) A situation in which a particular set of conditions is created artificially to study something.",
      "d) Historical records."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "\"Testament\" is:",
    "options": [
      "a) A secret agreement.",
      "b) A brief report.",
      "c) A legal document that says what is to happen to somebody's money and property after they die (or proof of something).",
      "d) A scientific theory."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "\"Trajectory\" is:",
    "options": [
      "a) A straight line.",
      "b) A circular path.",
      "c) The curved path of something that has been fired, hit or thrown into the air.",
      "d) A fixed point."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Why does the author choose to focus on the seamstresses at Playtex?",
    "options": [
      "a) To emphasize their high salaries.",
      "b) To show their creative designs.",
      "c) To highlight the significance of their detailed contributions to the mission's safety.",
      "d) To illustrate the gender imbalance in space exploration."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "How does the setting of Mission Control shape the actions and decisions of the flight controllers?",
    "options": [
      "a) It encourages leisurely decision-making.",
      "b) It allows for individual, isolated work.",
      "c) It creates tension and necessitates swift, collaborative decision-making due to high stakes.",
      "d) It promotes a relaxed atmosphere."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "What impact do words like \"tension,\" \"critical,\" and \"overloaded\" have on the narrative's tone?",
    "options": [
      "a) They make it humorous.",
      "b) They create a sense of calm.",
      "c) They enhance the urgency and drama of the events.",
      "d) They introduce a philosophical reflection."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "If \"Team Moon\" had focused solely on the astronauts, what would be the impact on the message?",
    "options": [
      "a) It would strengthen the theme of collective effort.",
      "b) It would highlight the individual brilliance of astronauts more effectively.",
      "c) It would diminish the emphasis on the widespread collaboration and collective achievement.",
      "d) It would not change the narrative's message significantly."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is the author's purpose in highlighting the lesser-known contributors to Apollo 11?",
    "options": [
      "a) To downplay the role of astronauts.",
      "b) To show that only a few people are truly important.",
      "c) To challenge the traditional narrative and emphasize that every contribution matters.",
      "d) To introduce new scientific concepts."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What could have happened if the engineers failed to solve a key problem with the Saturn V rocket?",
    "options": [
      "a) The mission would have been delayed by a few days.",
      "b) The astronauts would have still reached the Moon.",
      "c) The Apollo 11 mission would have failed, affecting its outcome significantly.",
      "d) Another team of engineers would have taken over."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "In the exposition of \"Team Moon,\" what key information does the author provide?",
    "options": [
      "a) Details about future space missions.",
      "b) The personal lives of the astronauts.",
      "c) Neil Armstrong's Moon landing and the vast number of people involved.",
      "d) The political context of the Cold War."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "How does the rising action build tension in \"Team Moon\"?",
    "options": [
      "a) By introducing new characters.",
      "b) By describing the peaceful journey.",
      "c) By presenting challenges like spacesuit crafting and rocket engineering problems.",
      "d) By revealing the mission's success early on."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the pivotal moment (climax) when the mission's outcome is most uncertain?",
    "options": [
      "a) The launch of the Saturn V rocket.",
      "b) The journey back to Earth.",
      "c) The lunar module's descent with blaring error codes.",
      "d) The astronauts planting the flag."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "How does the resolution highlight the contributions of the entire team?",
    "options": [
      "a) It focuses on the astronauts' celebrations.",
      "b) It describes new scientific discoveries.",
      "c) It declares the mission a success, belonging to every engineer, scientist, seamstress, and technician.",
      "d) It outlines future plans for space travel."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "How do the astronauts' and engineers' perspectives contrast in the given excerpts?",
    "options": [
      "a) Astronauts focus on the technical, engineers on the emotional.",
      "b) Both focus on personal gain.",
      "c) Astronauts carry hopes and dreams, while engineers grapple with technical challenges and personal investment.",
      "d) Astronauts emphasize the past, engineers the future."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The passage, \"Without the unsung heroes—the seamstresses, engineers, and flight controllers—the Moon landing would have remained a dream. Their stories, often overshadowed, are what truly define success in missions like Apollo 11,\" is primarily:",
    "options": [
      "a) Descriptive",
      "b) Argumentative/Persuasive",
      "c) Narrative",
      "d) Explanatory"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "If the climax of the lunar landing moments were described at the beginning of the book, how would it affect suspense?",
    "options": [
      "a) It would increase suspense.",
      "b) It would reduce suspense, as the outcome would be known early.",
      "c) It would make the story more humorous.",
      "d) It would not affect suspense."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "If the story was told only from the astronauts' perspective, how would it influence the theme of teamwork?",
    "options": [
      "a) It would strengthen the theme.",
      "b) It would make the theme more universal.",
      "c) It would likely diminish the focus on collective effort and the contributions of all involved.",
      "d) It would add more depth to the theme."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Which words in the excerpt \"The seamstresses worked with meticulous care, knowing that each stitch could mean life or death for the astronauts. They stitched layer upon layer, their hands moving with a blend of quiet pride and immense responsibility\" emphasize the importance of their work?",
    "options": [
      "a) \"worked,\" \"moving,\" \"hands\"",
      "b) \"layer upon layer,\" \"blend,\" \"quiet\"",
      "c) \"meticulous care,\" \"life or death,\" \"immense responsibility\"",
      "d) \"stitched,\" \"pride,\" \"seamstresses\""
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "In the context of \"Team Moon\", \"meticulous\" means:",
    "options": [
      "a) Careless",
      "b) Quick",
      "c) Very careful and precise",
      "d) Indifferent"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "An adjectival phrase is a group of words that functions like an:",
    "options": [
      "a) Adverb",
      "b) Verb",
      "c) Noun",
      "d) Adjective"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "An adverbial phrase is a group of words that functions like an:",
    "options": [
      "a) Adjective",
      "b) Noun",
      "c) Verb",
      "d) Adverb"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 46,
    "questionText": "In the sentence, \"The house on the corner is up for sale,\" \"on the corner\" is an:",
    "options": [
      "a) Adverbial phrase",
      "b) Adjectival phrase",
      "c) Verb phrase",
      "d) Noun phrase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "In the sentence, \"She spoke with determination,\" \"with determination\" is an:",
    "options": [
      "a) Adjectival phrase",
      "b) Adverbial phrase",
      "c) Noun phrase",
      "d) Prepositional object"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "A complex sentence combines one main (independent) clause with:",
    "options": [
      "a) Another independent clause",
      "b) One or more subordinate (dependent) clauses",
      "c) A verb phrase",
      "d) A noun phrase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Subordinating conjunctions are words that introduce:",
    "options": [
      "a) Main clauses",
      "b) Subordinate clauses",
      "c) Adjectival phrases",
      "d) Independent ideas"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "Which type of essay is requested for the \"Writing Skills\" section of this unit (Question A)?",
    "options": [
      "a) Descriptive essay",
      "b) Narrative essay",
      "c) Explanatory essay on \"The Importance of Teamwork in Achieving Great Feats\"",
      "d) Book review"
    ],
    "correctAnswer": "c"
  }
],
    "Impact of Global Warming on Pakistan": [
  {
    "id": 1,
    "questionText": "What is the theme of the unit \"Impact of Global Warming on Pakistan\"?",
    "options": [
      "a) Economic development and trade.",
      "b) Political stability in Pakistan.",
      "c) Climate change and its multifaceted effects on a vulnerable nation, emphasizing SDG 13.",
      "d) Agricultural techniques in Pakistan."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What is SDG 13 primarily focused on?",
    "options": [
      "a) Quality Education",
      "b) Clean Water and Sanitation",
      "c) Climate Action",
      "d) Gender Equality"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "Why is Pakistan highly susceptible to the impacts of global warming?",
    "options": [
      "a) Its small population.",
      "b) Its advanced technology.",
      "c) Its diverse geography and heavy dependence on agriculture.",
      "d) Its stable political environment."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "What specific climate-related risks is Pakistan prone to?",
    "options": [
      "a) Earthquakes and volcanic eruptions.",
      "b) Tsunamis and blizzards.",
      "c) Glacial melt, extreme heat, and sea-level rise.",
      "d) Landslides and hail storms."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What exacerbates Pakistan's vulnerability to climate change, besides its geography?",
    "options": [
      "a) Low population density.",
      "b) Strong financial resources.",
      "c) Heavy dependence on agriculture.",
      "d) High literacy rates."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "What local factor exacerbates rising temperatures in urban areas like Karachi?",
    "options": [
      "a) Rural-to-urban migration.",
      "b) Increased green spaces.",
      "c) Urban heat islands.",
      "d) Decreased industrial activity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What was the recorded temperature in Jacobabad in 2022?",
    "options": [
      "a) 45 °C (113°F)",
      "b) 51 °C (124°F)",
      "c) 39 °C (102°F)",
      "d) 55 °C (131°F)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "How many deaths resulted from the heatwave in Karachi in 2015?",
    "options": [
      "a) Around 500",
      "b) Around 800",
      "c) Over 1,200",
      "d) Over 2,000"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What plan has Pakistan introduced to combat heatwaves, aligning with SDG 13?",
    "options": [
      "a) Urban Greening Initiative.",
      "b) Disaster Preparedness Program.",
      "c) Heatwave Management Plan.",
      "d) Public Health Awareness Campaign."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What percentage of ice in Pakistan's glaciers has already melted?",
    "options": [
      "a) 10%",
      "b) 20%",
      "c) Over 30%",
      "d) 40%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What is the primary reason for the rapid melting of glaciers?",
    "options": [
      "a) Tectonic activity.",
      "b) Deforestation.",
      "c) Global warming, which increases temperatures.",
      "d) Increased rainfall."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What initiative has Pakistan implemented under SDG 13 to address glacial melting?",
    "options": [
      "a) Indus River Conservation Project.",
      "b) Glacial Lake Outburst Flood (GLOF) project.",
      "c) Mountain Preservation Program.",
      "d) Water Resources Management Plan."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What extreme weather events are increasing in frequency and severity in Pakistan?",
    "options": [
      "a) Blizzards and tornadoes.",
      "b) Floods, droughts, and cyclones.",
      "c) Hailstorms and sandstorms.",
      "d) Heatwaves"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "How many people were affected by the 2010 floods in Pakistan?",
    "options": [
      "a) 10 million",
      "b) Over 20 million",
      "c) 30 million",
      "d) 5 million"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What framework has Pakistan developed to enhance disaster preparedness and response?",
    "options": [
      "a) Provincial Disaster Management Authority.",
      "b) Local Disaster Response Plan.",
      "c) National Disaster Risk Management Framework.",
      "d) International Disaster Aid Program."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What is the projected decline in wheat yields by 2050 due to climate change?",
    "options": [
      "a) 0-3%",
      "b) 3-6%",
      "c) 6-8%",
      "d) 8-10%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What caused crop losses worth $2.2 billion in 2020?",
    "options": [
      "a) Severe droughts.",
      "b) Heavy floods.",
      "c) Locust attack driven by unusual weather patterns.",
      "d) Plant diseases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What practices is Pakistan promoting under SDG 13 to mitigate agricultural risks?",
    "options": [
      "a) Traditional farming methods.",
      "b) Chemical-intensive agriculture.",
      "c) Climate-Smart Agriculture practices.",
      "d) Subsistence farming."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "By 2100, how much could sea levels along Pakistan's coast rise?",
    "options": [
      "a) 0.1 meters",
      "b) 0.3 meters",
      "c) 0.6 meters",
      "d) 1.0 meters"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What project has Pakistan launched under SDG 13 to counter coastal erosion and sea-level rise?",
    "options": [
      "a) Coastal Defense Wall Project.",
      "b) Marine Life Conservation Initiative.",
      "c) Mangrove Rehabilitation Project.",
      "d) Fishery Development Program."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What key species are losing their habitats due to changing climate conditions?",
    "options": [
      "a) Red deer and bears.",
      "b) Wild boars and foxes.",
      "c) Snow leopard and Indus River dolphin.",
      "d) Markhor and ibex."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "How many hectares of forest is Pakistan losing annually?",
    "options": [
      "a) 20,000 hectares",
      "b) 30,000 hectares",
      "c) 43,000 hectares",
      "d) 50,000 hectares"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "What initiative aims to conserve critical habitats and endangered species?",
    "options": [
      "a) Wildlife Protection Act.",
      "b) Protected Areas Initiative.",
      "c) Reforestation Drive.",
      "d) National Parks Expansion Program."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "\"Biodiversity\" refers to:",
    "options": [
      "a) The existence of only one type of animal or plant.",
      "b) The existence of a large number of different kinds of animals and plants.",
      "c) The study of living organisms.",
      "d) The process of species extinction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "\"Arid\" means:",
    "options": [
      "a) Having abundant rainfall.",
      "b) Fertile and green.",
      "c) Having little or no rain; very dry.",
      "d) Humid and moist."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "\"Collaborative\" means:",
    "options": [
      "a) Done by a single person.",
      "b) Competitive.",
      "c) Involving, or done by, several people or groups of people working together.",
      "d) Independent."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "\"Contamination\" is:",
    "options": [
      "a) The process of purification.",
      "b) The process of making something clean.",
      "c) The process of making something dirty or poisonous.",
      "d) The process of distillation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "\"Disrupt\" means:",
    "options": [
      "a) To support.",
      "b) To maintain.",
      "c) A situation in which it is difficult for something to continue in the normal way (or to cause it).",
      "d) To create."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "\"Drastically\" means:",
    "options": [
      "a) Slowly and subtly.",
      "b) Gradually.",
      "c) In an extreme way that has a sudden, serious or violent effect.",
      "d) Slightly."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "\"Drought\" is:",
    "options": [
      "a) A period of heavy rainfall.",
      "b) A sudden flood.",
      "c) A long period of time when there is little or no rain.",
      "d) A seasonal storm."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "\"Hygiene\" is:",
    "options": [
      "a) The practice of proper eating.",
      "b) The practice of keeping yourself and your living and working areas clean.",
      "c) The study of health.",
      "d) The consumption of clean water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "\"Inadequate\" means:",
    "options": [
      "a) More than enough.",
      "b) Sufficient.",
      "c) Not enough; not good enough.",
      "d) Excessive."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "\"Incidence\" refers to:",
    "options": [
      "a) The rarity of something.",
      "b) The extent to which something happens or has an effect.",
      "c) The beginning of an event.",
      "d) The end of a process."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "\"Innovative\" means:",
    "options": [
      "a) Traditional.",
      "b) Outdated.",
      "c) Introducing or using new ideas, ways of doing something, etc.",
      "d) Conservative."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "\"Multifaceted\" means:",
    "options": [
      "a) Having only one aspect.",
      "b) Simple and straightforward.",
      "c) Having many different aspects to be considered.",
      "d) Complicated."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "\"Profound\" means:",
    "options": [
      "a) Superficial.",
      "b) Minor.",
      "c) Very great (or showing great knowledge).",
      "d) Common."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "\"Scarcity\" is:",
    "options": [
      "a) An abundance of something.",
      "b) An excess of something.",
      "c) A shortage or lack of something.",
      "d) A surplus of something."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "\"Substantial\" means:",
    "options": [
      "a) Small in amount.",
      "b) Insignificant.",
      "c) Large in amount, value, or importance.",
      "d) Minimal."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "\"Susceptible\" means:",
    "options": [
      "a) Resistant.",
      "b) Immune.",
      "c) Very likely to be influenced, harmed or affected by something.",
      "d) Protected."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "\"Urbanization\" is:",
    "options": [
      "a) The process of rural development.",
      "b) The process of decreasing city populations.",
      "c) The process in which towns, streets, factories, etc. are built where there was once countryside.",
      "d) The process of decentralization."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "\"Vulnerability\" is:",
    "options": [
      "a) The fact of being strong and resilient.",
      "b) The fact of being immune.",
      "c) The fact of being weak and easily hurt physically or emotionally.",
      "d) The fact of being protected."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "In the sentence, \"Water is fundamental to all forms of life,\" \"fundamental\" most likely means:",
    "options": [
      "a) Unimportant",
      "b) Essential",
      "c) Optional",
      "d) Dangerous"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "In the sentence, \"We mistreat the small fraction of water that we have,\" \"mistreat\" most likely means:",
    "options": [
      "a) Preserve",
      "b) Improve",
      "c) Abuse",
      "d) Ignore"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "In the sentence, \"Clean water, specifically, is vital for drinking, cooking, sanitation, and hygiene,\" \"vital\" most likely means:",
    "options": [
      "a) Unnecessary",
      "b) Optional",
      "c) Essential",
      "d) Harmful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the cause when \"We are using water at a rate faster than it precipitates to the ground\"?",
    "options": [
      "a) Increased precipitation",
      "b) Reduced water consumption",
      "c) Overuse of water resources",
      "d) Improved water management"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The statement, \"Clean water is a fundamental resource that supports human health, environmental sustainability, and economic development,\" is categorized as:",
    "options": [
      "a) Opinion",
      "b) Fact",
      "c) Belief-based language",
      "d) Personal tone"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The statement, \"We mistreat the small fraction of water that we have,\" is categorized as:",
    "options": [
      "a) Opinion",
      "b) Fact",
      "c) Statistic",
      "d) Evidence-based"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 48,
    "questionText": "What is the characteristic of idioms?",
    "options": [
      "a) They are complete sentences.",
      "b) They give moral lessons.",
      "c) They are figurative expressions used to convey a particular meaning within sentences.",
      "d) They are often literal."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the characteristic of proverbs?",
    "options": [
      "a) They are part of a sentence.",
      "b) They are only descriptive.",
      "c) They are short, well-known sayings that express a general truth or moral lesson.",
      "d) They are always non-literal."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Which conjunction type connects a dependent clause to an independent clause?",
    "options": [
      "a) Coordinating conjunctions",
      "b) Correlative conjunctions",
      "c) Conjunctive adverbs",
      "d) Subordinating conjunctions"
    ],
    "correctAnswer": "d"
  }
],
    "The Echoing Green": [
  {
    "id": 1,
    "questionText": "What is the central idea of William Blake's poem \"The Echoing Green\"?",
    "options": [
      "a) The harshness of nature",
      "b) The joyful and harmonious relationship between nature and human life",
      "c) The sadness of aging",
      "d) The conflict between children and elders"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Which season is welcomed by the \"merry bells ring\" in the poem?",
    "options": [
      "a) Summer",
      "b) Autumn",
      "c) Winter",
      "d) Spring"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "What sound do the sky-lark and thrush make around the \"Echoing Green\"?",
    "options": [
      "a) Sing louder",
      "b) Chirp softly",
      "c) Squawk",
      "d) Remain silent"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "Who is \"Old John, with white hair\" laughing away care with?",
    "options": [
      "a) The children",
      "b) The birds",
      "c) The old folk",
      "d) His family"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What do the \"old folk\" on the Echoing Green remember about their youth-time?",
    "options": [
      "a) Their hard work",
      "b) The joys they experienced on the Echoing Green",
      "c) Their struggles",
      "d) Their studies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What happens when the sun descends in the poem?",
    "options": [
      "a) Sports continue",
      "b) The little ones become more merry",
      "c) Sports have an end",
      "d) Birds sing louder"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "To what are the \"many sisters and brothers\" compared when they are ready for rest?",
    "options": [
      "a) Like birds in their nest",
      "b) Like flowers in a field",
      "c) Like fish in a stream",
      "d) Like lambs in a meadow"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 8,
    "questionText": "What is the state of the \"Green\" at the end of the poem?",
    "options": [
      "a) Vibrant and lively",
      "b) Echoing",
      "c) Darkening",
      "d) Bright"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "According to the poet, what does the rising sun \"make happy\"?",
    "options": [
      "a) The children",
      "b) The birds",
      "c) The skies",
      "d) The old folk"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The phrase \"The sun does arise, / And make happy the skies\" contains an example of which literary device?",
    "options": [
      "a) Simile",
      "b) Alliteration",
      "c) Personification",
      "d) Metaphor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What does the \"echoing green\" primarily symbolize in the context of the poem's central idea?",
    "options": [
      "a) A place of sadness",
      "b) A healthy, thriving environment and the continuity between generations",
      "c) A lonely place",
      "d) A place of conflict"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "How does the poem reflect the passage of time?",
    "options": [
      "a) Through the changing activities of children",
      "b) Through the progression from bright morning to calm evening",
      "c) Through the wisdom of the elders",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "What quality does the word \"merry\" convey in \"The merry bells ring\"?",
    "options": [
      "a) Serious",
      "b) Happy and lively",
      "c) Quiet",
      "d) Boring"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "The children become \"weary\" because:",
    "options": [
      "a) The old folk left",
      "b) The sun descends and their sports end",
      "c) The birds stopped singing",
      "d) It started to rain"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "How does Blake generally portray the relationship between nature and human life in the poem?",
    "options": [
      "a) As conflicting",
      "b) As isolated",
      "c) As joyful and harmonious",
      "d) As indifferent"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What role do the \"old folk\" play in the scene?",
    "options": [
      "a) They participate in the sports.",
      "b) They watch the children play and remember their own youth.",
      "c) They scold the children.",
      "d) They sing with the birds."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What does the shift from \"lively activity\" to \"quietness\" as the poem progresses signify?",
    "options": [
      "a) A change in the weather",
      "b) The end of the day and the cycle of life",
      "c) The children leaving the green",
      "d) The arrival of new people"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "The term \"echoing\" in the poem's title can symbolize:",
    "options": [
      "a) Loud noises",
      "b) Memory or continuity between generations",
      "c) A sense of emptiness",
      "d) Disagreement"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What feelings are evoked by the imagery of joyful children playing under flourishing trees in a vibrant natural setting?",
    "options": [
      "a) Fear and anxiety",
      "b) Contentment and nostalgia",
      "c) Anger and frustration",
      "d) Boredom and indifference"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "How does the poem's imagery contrast with today's environmental challenges?",
    "options": [
      "a) It shows a polluted environment.",
      "b) It depicts a healthy, thriving environment, unlike current risks from global warming and deforestation.",
      "c) It emphasizes urban development.",
      "d) It has no relevance to modern environmental issues."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is the significance of \"The Echoing Green\" symbolizing a healthy, thriving environment?",
    "options": [
      "a) It promotes urban living.",
      "b) It suggests environmental degradation.",
      "c) It represents an ideal natural state that is now at risk.",
      "d) It criticizes human interaction with nature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Which of these aspects is explicitly stated as part of the poem's central idea?",
    "options": [
      "a) Joyful relationship between nature and human life",
      "b) Happiness of children playing",
      "c) Wisdom of the elderly",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "The progression of the day in the poem, from bright morning to calm evening, symbolizes:",
    "options": [
      "a) The fleeting nature of happiness",
      "b) The challenges of adulthood",
      "c) The cycle of life",
      "d) The change of seasons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "William Blake (1757-1827) is described as an English poet and painter known for his:",
    "options": [
      "a) Realistic portrayals",
      "b) Unique and visionary work",
      "c) Political activism",
      "d) Academic style"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What type of imagery does Blake use extensively in the poem?",
    "options": [
      "a) Auditory imagery only",
      "b) Visual imagery only",
      "c) Tactile imagery",
      "d) Visual and auditory imagery"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "How does the simple, song-like structure and rhyme scheme contribute to the tone of the poem?",
    "options": [
      "a) It makes it complex and formal.",
      "b) It creates a harsh and critical tone.",
      "c) It enhances a joyful and carefree tone.",
      "d) It makes the poem melancholic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What is the definition of \"weary\" as used in the poem?",
    "options": [
      "a) Happy and energetic",
      "b) Full of excitement",
      "c) Very tired, especially after working hard or for a long time",
      "d) Bored"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The word \"descend\" in the poem refers to:",
    "options": [
      "a) To go up",
      "b) To come down",
      "c) To remain stable",
      "d) To disappear"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "How does the use of the present tense in lines like \"The sun does arise\" contribute to the theme of the poem?",
    "options": [
      "a) It makes the events seem distant.",
      "b) It emphasizes the timeless and universal nature of the theme.",
      "c) It suggests future events.",
      "d) It creates a sense of uncertainty."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What role do the adjectives 'merry' and 'welcome' play in shaping the mood of the poem?",
    "options": [
      "a) They create a sense of sadness.",
      "b) They introduce conflict.",
      "c) They enhance a joyful and inviting mood.",
      "d) They make the poem seem indifferent."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The poem contains several simple, parallel sentence structures. How does this impact the overall rhythm and flow?",
    "options": [
      "a) It disrupts the flow.",
      "b) It makes it complex.",
      "c) It mirrors themes of innocence and cyclical nature, impacting rhythm and flow.",
      "d) It has no impact on rhythm."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "According to the \"About the Poet\" section, what themes did William Blake's poem \"The Echoing Green\" reflect?",
    "options": [
      "a) War and conflict",
      "b) Innocence, nature, and the cycles of life",
      "c) Urban development",
      "d) Political change"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What does the speaker observe happening \"On the Echoing Green\" during the day?",
    "options": [
      "a) Children playing sports",
      "b) Farmers working",
      "c) People arguing",
      "d) Quiet meditation"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What emotion does \"Old John\" express by laughing away care?",
    "options": [
      "a) Sadness",
      "b) Worry",
      "c) Joy",
      "d) Anger"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The line \"Round the laps of their mothers, / Many sisters and brothers\" suggests a scene of:",
    "options": [
      "a) Playfulness",
      "b) Competition",
      "c) Comfort and rest",
      "d) Departure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the initial reaction suggested by the \"Pre-reading\" section when one thinks of a green field or a park?",
    "options": [
      "a) Disinterest",
      "b) Negative emotions",
      "c) Imagery or feelings (implies positive association)",
      "d) Confusion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What is important for people's happiness and well-being, according to the \"Pre-reading\" questions?",
    "options": [
      "a) Wealth",
      "b) Green spaces (parks, gardens, countryside)",
      "c) Education",
      "d) Technology"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "How does the poem generally portray nature?",
    "options": [
      "a) As a threat",
      "b) As a setting for human activity and joy",
      "c) As indifferent to humans",
      "d) As something to be conquered"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Which birds are mentioned singing in the first stanza?",
    "options": [
      "a) Robins and sparrows",
      "b) Sky-lark and thrush",
      "c) Crows and owls",
      "d) Eagles and hawks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What happens to the sports when the sun descends?",
    "options": [
      "a) They continue in the dark.",
      "b) They move indoors.",
      "c) They have an end.",
      "d) They become more intense."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "The \"little ones weary\" implies that they are:",
    "options": [
      "a) Excited",
      "b) Playful",
      "c) Tired from their activities",
      "d) Bored"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What kind of atmosphere is created by the \"bells' cheerful sound\"?",
    "options": [
      "a) Ominous",
      "b) Melancholic",
      "c) Lively and pleasant",
      "d) Chaotic"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "What does the \"darkening Green\" signify at the poem's end?",
    "options": [
      "a) The beginning of a new day",
      "b) The end of the daytime activities",
      "c) A storm is coming",
      "d) Environmental pollution"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The poem primarily uses its setting to evoke a sense of: a) Urban anxiety b) Rural nostalgia and joy c) Modernity d) Industrial progress",
    "options": [
      "a) Urban anxiety",
      "b) Rural nostalgia and joy",
      "c) Modernity",
      "d) Industrial progress"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What literary term describes the use of language to appeal to the senses?",
    "options": [
      "a) Metaphor",
      "b) Symbolism",
      "c) Imagery",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "According to the \"For the Teacher\" section, what do students often reflect on when exploring \"The Echoing Green\" today?",
    "options": [
      "a) The history of poetry",
      "b) How the poem's imagery contrasts with current environmental challenges",
      "c) The economic impact of green spaces",
      "d) The architectural design of parks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The phrase \"birds of the bush\" exemplifies which literary device?",
    "options": [
      "a) Metaphor",
      "b) Simile",
      "c) Alliteration",
      "d) Personification"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is the definition of \"cheerful\" as listed in the glossary?",
    "options": [
      "a) Sad",
      "b) Angry",
      "c) Happy and positive",
      "d) Quiet"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What does the phrase \"merry bells ring / To welcome the Spring\" evoke?",
    "options": [
      "a) A sense of duty",
      "b) A celebratory atmosphere",
      "c) A warning",
      "d) A quiet morning"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What type of activity is not seen on the \"darkening Green\" at the end of the poem?",
    "options": [
      "a) Resting",
      "b) Talking",
      "c) Sport",
      "d) Sleeping"
    ],
    "correctAnswer": "c"
  }
],
    "What You Do is What You are": [
  {
    "id": 1,
    "questionText": "What is the central idea of William Blake's poem \"The Echoing Green\"?",
    "options": [
      "a) The harshness of nature",
      "b) The joyful and harmonious relationship between nature and human life",
      "c) The sadness of aging",
      "d) The conflict between children and elders"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Which season is welcomed by the \"merry bells ring\" in the poem?",
    "options": [
      "a) Summer",
      "b) Autumn",
      "c) Winter",
      "d) Spring"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "What sound do the sky-lark and thrush make around the \"Echoing Green\"?",
    "options": [
      "a) Sing louder",
      "b) Chirp softly",
      "c) Squawk",
      "d) Remain silent"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "Who is \"Old John, with white hair\" laughing away care with?",
    "options": [
      "a) The children",
      "b) The birds",
      "c) The old folk",
      "d) His family"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What do the \"old folk\" on the Echoing Green remember about their youth-time?",
    "options": [
      "a) Their hard work",
      "b) The joys they experienced on the Echoing Green",
      "c) Their struggles",
      "d) Their studies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What happens when the sun descends in the poem?",
    "options": [
      "a) Sports continue",
      "b) The little ones become more merry",
      "c) Sports have an end",
      "d) Birds sing louder"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "To what are the \"many sisters and brothers\" compared when they are ready for rest?",
    "options": [
      "a) Like birds in their nest",
      "b) Like flowers in a field",
      "c) Like fish in a stream",
      "d) Like lambs in a meadow"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 8,
    "questionText": "What is the state of the \"Green\" at the end of the poem?",
    "options": [
      "a) Vibrant and lively",
      "b) Echoing",
      "c) Darkening",
      "d) Bright"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "According to the poet, what does the rising sun \"make happy\"?",
    "options": [
      "a) The children",
      "b) The birds",
      "c) The skies",
      "d) The old folk"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The phrase \"The sun does arise, / And make happy the skies\" contains an example of which literary device?",
    "options": [
      "a) Simile",
      "b) Alliteration",
      "c) Personification",
      "d) Metaphor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What does the \"echoing green\" primarily symbolize in the context of the poem's central idea?",
    "options": [
      "a) A place of sadness",
      "b) A healthy, thriving environment and the continuity between generations",
      "c) A lonely place",
      "d) A place of conflict"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "How does the poem reflect the passage of time?",
    "options": [
      "a) Through the changing activities of children",
      "b) Through the progression from bright morning to calm evening",
      "c) Through the wisdom of the elders",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "What quality does the word \"merry\" convey in \"The merry bells ring\"?",
    "options": [
      "a) Serious",
      "b) Happy and lively",
      "c) Quiet",
      "d) Boring"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "The children become \"weary\" because:",
    "options": [
      "a) The old folk left",
      "b) The sun descends and their sports end",
      "c) The birds stopped singing",
      "d) It started to rain"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "How does Blake generally portray the relationship between nature and human life in the poem?",
    "options": [
      "a) As conflicting",
      "b) As isolated",
      "c) As joyful and harmonious",
      "d) As indifferent"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What role do the \"old folk\" play in the scene?",
    "options": [
      "a) They participate in the sports.",
      "b) They watch the children play and remember their own youth.",
      "c) They scold the children.",
      "d) They sing with the birds."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What does the shift from \"lively activity\" to \"quietness\" as the poem progresses signify?",
    "options": [
      "a) A change in the weather",
      "b) The end of the day and the cycle of life",
      "c) The children leaving the green",
      "d) The arrival of new people"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "The term \"echoing\" in the poem's title can symbolize:",
    "options": [
      "a) Loud noises",
      "b) Memory or continuity between generations",
      "c) A sense of emptiness",
      "d) Disagreement"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What feelings are evoked by the imagery of joyful children playing under flourishing trees in a vibrant natural setting?",
    "options": [
      "a) Fear and anxiety",
      "b) Contentment and nostalgia",
      "c) Anger and frustration",
      "d) Boredom and indifference"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "How does the poem's imagery contrast with today's environmental challenges?",
    "options": [
      "a) It shows a polluted environment.",
      "b) It depicts a healthy, thriving environment, unlike current risks from global warming and deforestation.",
      "c) It emphasizes urban development.",
      "d) It has no relevance to modern environmental issues."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is the significance of \"The Echoing Green\" symbolizing a healthy, thriving environment?",
    "options": [
      "a) It promotes urban living.",
      "b) It suggests environmental degradation.",
      "c) It represents an ideal natural state that is now at risk.",
      "d) It criticizes human interaction with nature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Which of these aspects is explicitly stated as part of the poem's central idea?",
    "options": [
      "a) Joyful relationship between nature and human life",
      "b) Happiness of children playing",
      "c) Wisdom of the elderly",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "The progression of the day in the poem, from bright morning to calm evening, symbolizes:",
    "options": [
      "a) The fleeting nature of happiness",
      "b) The challenges of adulthood",
      "c) The cycle of life",
      "d) The change of seasons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "William Blake (1757-1827) is described as an English poet and painter known for his:",
    "options": [
      "a) Realistic portrayals",
      "b) Unique and visionary work",
      "c) Political activism",
      "d) Academic style"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What type of imagery does Blake use extensively in the poem?",
    "options": [
      "a) Auditory imagery only",
      "b) Visual imagery only",
      "c) Tactile imagery",
      "d) Visual and auditory imagery"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "How does the simple, song-like structure and rhyme scheme contribute to the tone of the poem?",
    "options": [
      "a) It makes it complex and formal.",
      "b) It creates a harsh and critical tone.",
      "c) It enhances a joyful and carefree tone.",
      "d) It makes the poem melancholic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What is the definition of \"weary\" as used in the poem?",
    "options": [
      "a) Happy and energetic",
      "b) Full of excitement",
      "c) Very tired, especially after working hard or for a long time",
      "d) Bored"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The word \"descend\" in the poem refers to:",
    "options": [
      "a) To go up",
      "b) To come down",
      "c) To remain stable",
      "d) To disappear"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "How does the use of the present tense in lines like \"The sun does arise\" contribute to the theme of the poem?",
    "options": [
      "a) It makes the events seem distant.",
      "b) It emphasizes the timeless and universal nature of the theme.",
      "c) It suggests future events.",
      "d) It creates a sense of uncertainty."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What role do the adjectives 'merry' and 'welcome' play in shaping the mood of the poem?",
    "options": [
      "a) They create a sense of sadness.",
      "b) They introduce conflict.",
      "c) They enhance a joyful and inviting mood.",
      "d) They make the poem seem indifferent."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The poem contains several simple, parallel sentence structures. How does this impact the overall rhythm and flow?",
    "options": [
      "a) It disrupts the flow.",
      "b) It makes it complex.",
      "c) It mirrors themes of innocence and cyclical nature, impacting rhythm and flow.",
      "d) It has no impact on rhythm."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "According to the \"About the Poet\" section, what themes did William Blake's poem \"The Echoing Green\" reflect?",
    "options": [
      "a) War and conflict",
      "b) Innocence, nature, and the cycles of life",
      "c) Urban development",
      "d) Political change"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What does the speaker observe happening \"On the Echoing Green\" during the day?",
    "options": [
      "a) Children playing sports",
      "b) Farmers working",
      "c) People arguing",
      "d) Quiet meditation"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What emotion does \"Old John\" express by laughing away care?",
    "options": [
      "a) Sadness",
      "b) Worry",
      "c) Joy",
      "d) Anger"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The line \"Round the laps of their mothers, / Many sisters and brothers\" suggests a scene of:",
    "options": [
      "a) Playfulness",
      "b) Competition",
      "c) Comfort and rest",
      "d) Departure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the initial reaction suggested by the \"Pre-reading\" section when one thinks of a green field or a park?",
    "options": [
      "a) Disinterest",
      "b) Negative emotions",
      "c) Imagery or feelings (implies positive association)",
      "d) Confusion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What is important for people's happiness and well-being, according to the \"Pre-reading\" questions?",
    "options": [
      "a) Wealth",
      "b) Green spaces (parks, gardens, countryside)",
      "c) Education",
      "d) Technology"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "How does the poem generally portray nature?",
    "options": [
      "a) As a threat",
      "b) As a setting for human activity and joy",
      "c) As indifferent to humans",
      "d) As something to be conquered"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Which birds are mentioned singing in the first stanza?",
    "options": [
      "a) Robins and sparrows",
      "b) Sky-lark and thrush",
      "c) Crows and owls",
      "d) Eagles and hawks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What happens to the sports when the sun descends?",
    "options": [
      "a) They continue in the dark.",
      "b) They move indoors.",
      "c) They have an end.",
      "d) They become more intense."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "The \"little ones weary\" implies that they are:",
    "options": [
      "a) Excited",
      "b) Playful",
      "c) Tired from their activities",
      "d) Bored"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What kind of atmosphere is created by the \"bells' cheerful sound\"?",
    "options": [
      "a) Ominous",
      "b) Melancholic",
      "c) Lively and pleasant",
      "d) Chaotic"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "What does the \"darkening Green\" signify at the poem's end?",
    "options": [
      "a) The beginning of a new day",
      "b) The end of the daytime activities",
      "c) A storm is coming",
      "d) Environmental pollution"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The poem primarily uses its setting to evoke a sense of: a) Urban anxiety b) Rural nostalgia and joy c) Modernity d) Industrial progress",
    "options": [
      "a) Urban anxiety",
      "b) Rural nostalgia and joy",
      "c) Modernity",
      "d) Industrial progress"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What literary term describes the use of language to appeal to the senses?",
    "options": [
      "a) Metaphor",
      "b) Symbolism",
      "c) Imagery",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "According to the \"For the Teacher\" section, what do students often reflect on when exploring \"The Echoing Green\" today?",
    "options": [
      "a) The history of poetry",
      "b) How the poem's imagery contrasts with current environmental challenges",
      "c) The economic impact of green spaces",
      "d) The architectural design of parks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The phrase \"birds of the bush\" exemplifies which literary device?",
    "options": [
      "a) Metaphor",
      "b) Simile",
      "c) Alliteration",
      "d) Personification"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is the definition of \"cheerful\" as listed in the glossary?",
    "options": [
      "a) Sad",
      "b) Angry",
      "c) Happy and positive",
      "d) Quiet"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What does the phrase \"merry bells ring / To welcome the Spring\" evoke?",
    "options": [
      "a) A sense of duty",
      "b) A celebratory atmosphere",
      "c) A warning",
      "d) A quiet morning"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What type of activity is not seen on the \"darkening Green\" at the end of the poem?",
    "options": [
      "a) Resting",
      "b) Talking",
      "c) Sport",
      "d) Sleeping"
    ],
    "correctAnswer": "c"
  }
],
    "Clean Water": [
  {
    "id": 1,
    "questionText": "What percentage of the human body does water constitute?",
    "options": [
      "a) About 50%",
      "b) About 60%",
      "c) About 70%",
      "d) About 80%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What fraction of the Earth's water is readily available fresh water?",
    "options": [
      "a) Only 70%",
      "b) Only 3%",
      "c) Only one third of the 3%",
      "d) All of it"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "According to the text, what is a cornerstone of public health, environmental sustainability, and economic development?",
    "options": [
      "a) Access to technology",
      "b) Access to clean water",
      "c) Rapid urbanization",
      "d) Industrial growth"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What is one of the most direct impacts of contaminated water on human health?",
    "options": [
      "a) Improved immune system",
      "b) Cause of waterborne diseases like cholera and typhoid",
      "c) Enhanced physical fitness",
      "d) Increased appetite"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "How many people worldwide lack access to safely managed drinking water services?",
    "options": [
      "a) Around 829,000",
      "b) Around 1.5 billion",
      "c) Around 2.2 billion",
      "d) Around 4.2 billion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which demographic is particularly vulnerable to waterborne diseases and dies before their fifth birthday due to lack of clean water and proper sanitation?",
    "options": [
      "a) Adults",
      "b) Elderly people",
      "c) Children",
      "d) Pregnant women"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is crucial for maintaining ecosystems like rivers, lakes, and wetlands?",
    "options": [
      "a) Industrial activities",
      "b) Agricultural runoff",
      "c) Clean water",
      "d) Waste disposal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Pollution from industrial activities, agricultural runoff, and improper waste disposal can lead to:",
    "options": [
      "a) Improved aquatic life",
      "b) Degradation of ecosystems and decline in fish populations",
      "c) Increased water availability",
      "d) Enhanced water quality"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What is vital for agricultural and food production?",
    "options": [
      "a) Chemical fertilizers",
      "b) Genetically modified crops",
      "c) Clean water",
      "d) Advanced machinery"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What can inadequate access to clean water lead to in the agriculture sector?",
    "options": [
      "a) Food surplus and lower prices",
      "b) Increased agricultural productivity",
      "c) Food shortage and economic hardships",
      "d) Improved soil management"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What exacerbates issues of water scarcity and contamination in many regions, especially developing countries?",
    "options": [
      "a) Population growth, climate change, and pollution",
      "b) Technological advancements",
      "c) Improved infrastructure",
      "d) Economic prosperity"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "What kind of approach is required to address water challenges effectively?",
    "options": [
      "a) A single-solution approach",
      "b) A reactive approach",
      "c) A multifaceted approach incorporating sustainable solutions and community engagement",
      "d) A solely governmental approach"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Which of the following is a community-based initiative mentioned for improving access to clean drinking water?",
    "options": [
      "a) Industrial expansion",
      "b) Rainwater harvesting and water conservation",
      "c) Rapid urbanization",
      "d) Extensive use of pesticides"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What are key components of improving water access and quality, according to the text?",
    "options": [
      "a) Financial investments only",
      "b) Education and awareness",
      "c) International organizations only",
      "d) Advanced infrastructure without public involvement"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What does the text ultimately advocate for regarding clean water?",
    "options": [
      "a) Limiting access to certain populations",
      "b) Ensuring clean water for all",
      "c) Focusing solely on urban areas",
      "d) Relying on natural purification"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "What is the definition of \"vulnerability\" as used in the context of Pakistan's water issues?",
    "options": [
      "a) Strength and resilience",
      "b) The fact of being weak and easily hurt physically or emotionally",
      "c) Self-sufficiency",
      "d) Independence"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "How does the author use \"cause-effect\" patterns in the text?",
    "options": [
      "a) To confuse the reader.",
      "b) To help the reader understand the seriousness of water-related issues.",
      "c) To only present problems without solutions.",
      "d) To avoid making arguments."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What does \"precipitates\" mean in the sentence: \"We are using water at a rate faster than it precipitates to the ground.\"?",
    "options": [
      "a) Evaporates",
      "b) Flows",
      "c) Falls (as rain, snow, etc.)",
      "d) Absorbs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What is the primary reason for Pakistan's vulnerability to global warming impacts, as mentioned in SDG 13?",
    "options": [
      "a) Limited population",
      "b) Diverse geography",
      "c) Abundant financial resources",
      "d) Low dependence on agriculture"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Which of the following diseases can be caused by contaminated water?",
    "options": [
      "a) Flu and common cold",
      "b) Cholera, typhoid, dysentery, and hepatitis",
      "c) Cancer and heart disease",
      "d) Diabetes and allergies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is the estimated number of deaths each year from diarrhea caused by contaminated drinking water, sanitation, and hand hygiene, according to WHO?",
    "options": [
      "a) Over 1.2 billion",
      "b) Around 829,000",
      "c) About 2.2 million",
      "d) Less than 100,000"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What happens to regions where water is scarce or contaminated, regarding hygiene practices?",
    "options": [
      "a) People are more likely to practice good hygiene.",
      "b) People are less likely to practice good hygiene.",
      "c) Hygiene practices are unaffected.",
      "d) They develop new hygiene methods."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "What types of pollutants can accumulate in water bodies and pose risks to human health and the environment?",
    "options": [
      "a) Oxygen and nitrogen",
      "b) Heavy metals, chemicals, and pesticides",
      "c) Pure minerals",
      "d) Natural sediments"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What does \"exacerbated\" mean in \"Pakistan's vulnerability to climate change is exacerbated by its geographic diversity.\"?",
    "options": [
      "a) Reduced",
      "b) Worsened",
      "c) Improved",
      "d) Controlled"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The text implies that investing in clean water infrastructure can lead to:",
    "options": [
      "a) Increased economic burden",
      "b) Reduced public health",
      "c) Economic stability and growth",
      "d) Greater contamination"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "What does the \"K-W-L Chart Before Reading\" activity help students do?",
    "options": [
      "a) Memorize facts.",
      "b) Activate prior understanding and prepare for new information.",
      "c) Skip the text entirely.",
      "d) Ignore their own biases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is SDG 13 focused on?",
    "options": [
      "a) Quality Education",
      "b) Climate Action",
      "c) Clean Water & Sanitation",
      "d) Gender Equality"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "The theme of the unit emphasizes the urgent need for climate action as outlined in:",
    "options": [
      "a) SDG 1",
      "b) SDG 13",
      "c) SDG 17",
      "d) SDG 5"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is the meaning of \"scarcity\"?",
    "options": [
      "a) Abundance",
      "b) A shortage or lack of something",
      "c) Purity",
      "d) Overflow"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Which of the following statements from the text is presented as a fact?",
    "options": [
      "a) \"We mistreat the small fraction of water that we have.\"",
      "b) \"Clean water is a fundamental resource that supports human health, environmental sustainability, and economic development.\"",
      "c) \"Investing in clean water infrastructure not only improves public health but also fosters economic stability and growth.\"",
      "d) \"Water is fundamental to all forms of life.\""
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "What is the function of \"Transitional Devices\"?",
    "options": [
      "a) To introduce new topics without connection.",
      "b) To link ideas between sentences or paragraphs, improving flow and clarity.",
      "c) To complicate sentence structure.",
      "d) To replace conjunctions entirely."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the primary purpose of an \"informative essay\"?",
    "options": [
      "a) To narrate a story.",
      "b) To persuade readers of an urgent need for action.",
      "c) To describe a person or place.",
      "d) To analyze literary devices."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is the meaning of the idiom \"a blessing in disguise\"?",
    "options": [
      "a) Something that is always bad.",
      "b) Something that seems bad at first but has a good result.",
      "c) Something hidden.",
      "d) Something that brings immediate good fortune."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the meaning of the proverb \"Actions speak louder than words\"?",
    "options": [
      "a) Speaking loudly is effective.",
      "b) What people do is more important than what they say.",
      "c) Words can be very powerful.",
      "d) Actions are always violent."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "I wanted to stay longer, __ I had to catch the last bus.\" Which conjunction best completes the sentence?",
    "options": [
      "a) and",
      "b) but",
      "c) or",
      "d) so"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which type of conjunction connects a dependent clause to an independent clause?",
    "options": [
      "a) Coordinating",
      "b) Subordinating",
      "c) Correlative",
      "d) Conjunctive Adverb"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "He could not attend the meeting because he was sick.\" In this sentence, \"because he was sick\" is a(n):",
    "options": [
      "a) Independent clause",
      "b) Dependent clause",
      "c) Coordinating conjunction",
      "d) Prepositional phrase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Which of the following is a \"correlative conjunction\"?",
    "options": [
      "a) because",
      "b) and",
      "c) either/or",
      "d) however"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What is the \"Purpose/Meaning\" of the subordinating conjunction \"unless\"?",
    "options": [
      "a) Shows reason",
      "b) Shows contrast",
      "c) Indicates time",
      "d) Indicates condition (negative)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 40,
    "questionText": "What is the definition of \"drastically\"?",
    "options": [
      "a) In a minor way",
      "b) Gradually",
      "c) In an extreme way that has a sudden, serious or violent effect",
      "d) Slightly"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What is the meaning of \"mitigate\"?",
    "options": [
      "a) To make something more harmful",
      "b) To make something less harmful, serious, etc.",
      "c) To ignore a problem",
      "d) To create new problems"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "How does an \"informative essay\" achieve its purpose, as described in the \"Writing Skills\" section?",
    "options": [
      "a) By presenting claims with relevant evidence and examples.",
      "b) By engaging in storytelling.",
      "c) By expressing personal opinions primarily.",
      "d) By solely summarizing."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "Which SDG is particularly relevant for Pakistan due to its vulnerability to global warming?",
    "options": [
      "a) SDG 4: Quality Education",
      "b) SDG 6: Clean Water and Sanitation",
      "c) SDG 13: Climate Action",
      "d) SDG 15: Life on Land"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "The lesson highlights challenges posed by water scarcity, contamination, and:",
    "options": [
      "a) Excessive rainfall",
      "b) Abundant resources",
      "c) Inadequate infrastructure",
      "d) Reduced population growth"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the function of \"education and awareness\" in addressing water issues?",
    "options": [
      "a) To increase pollution",
      "b) To empower individuals to protect water sources",
      "c) To limit access to information",
      "d) To promote unsustainable practices"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What can happen if \"inadequate infrastructure\" is coupled with rapid urbanization in cities like Karachi and Lahore?",
    "options": [
      "a) Increased water availability",
      "b) Decreased risk of climate-induced disasters",
      "c) Increased risk of climate-induced disasters such as heatwaves and flooding",
      "d) Improved water quality"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "How does the \"Reading and Critical Thinking\" section suggest evaluating the realism of a problem-solution structure in the text?",
    "options": [
      "a) By ignoring the context of Pakistan.",
      "b) By justifying the response based on the text's context.",
      "c) By stating it is always realistic.",
      "d) By not providing a justification."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is the purpose of \"identifying language cues (statistics, personal tone, belief-based language)\" when distinguishing fact from opinion?",
    "options": [
      "a) To ignore the author's viewpoint.",
      "b) To justify the classification of a statement.",
      "c) To complicate understanding.",
      "d) To make the text less reliable."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What is a \"word map\" designed to include?",
    "options": [
      "a) Only the definition of a word.",
      "b) Word, definition, synonyms, antonyms, and an example sentence.",
      "c) Only the pronunciation and etymology.",
      "d) Only example sentences."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What does the \"K Column\" in the K-W-L Chart prompt students to write down?",
    "options": [
      "a) What they want to know.",
      "b) What they have learned.",
      "c) What they already know about the topic.",
      "d) Their personal opinions only."
    ],
    "correctAnswer": "c"
  }
],
    "Freedom": [
  {
    "id": 1,
    "questionText": "According to Langston Hughes, how will freedom NOT come?",
    "options": [
      "a) Through compromise and fear",
      "b) Through courage and unity",
      "c) Through determination",
      "d) Through active resistance"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 2,
    "questionText": "What right does the speaker claim to have, just like \"the other fellow\"?",
    "options": [
      "a) To be passive",
      "b) To stand on his two feet and own the land",
      "c) To compromise",
      "d) To wait for tomorrow"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What phrase does the speaker tire of hearing?",
    "options": [
      "a) \"Freedom is a strong seed\"",
      "b) \"Let things take their course. Tomorrow is another day.\"",
      "c) \"I live here, too.\"",
      "d) \"I want my freedom just as you.\""
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Why does the poet reject the idea of \"tomorrow's bread\"?",
    "options": [
      "a) To show that food is more important than freedom.",
      "b) To emphasize that freedom must be experienced now, not in the future.",
      "c) To highlight the importance of patience.",
      "d) To suggest a lack of resources."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What metaphor does Hughes use to describe freedom in the poem?",
    "options": [
      "a) A bird in flight",
      "b) A strong seed planted in a great need",
      "c) A flowing river",
      "d) A distant star"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "The repetition of \"freedom\" in the poem serves to:",
    "options": [
      "a) Make the poem longer",
      "b) Emphasize its importance and the speaker's strong desire for it",
      "c) Create confusion",
      "d) Add a humorous tone"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What kind of tone does the poem primarily convey?",
    "options": [
      "a) Humorous and light",
      "b) Calm and accepting",
      "c) Urgent and demanding",
      "d) Mysterious and suspenseful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the central theme of \"Freedom\" by Langston Hughes?",
    "options": [
      "a) The struggles of daily life",
      "b) The urgent, unwavering demand for immediate freedom and equality",
      "c) The beauty of compromise",
      "d) The benefits of delayed gratification"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Langston Hughes was a leading figure of which cultural movement?",
    "options": [
      "a) The Enlightenment",
      "b) The Romantic Era",
      "c) The Harlem Renaissance",
      "d) The Beat Generation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What kind of issues did Hughes often write about?",
    "options": [
      "a) European history",
      "b) The struggles, desires, and aspirations of Black Americans",
      "c) Nature and wildlife",
      "d) Technological advancements"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What does the irregular line alignment in the poem reflect?",
    "options": [
      "a) A perfect, ordered society",
      "b) A visual manifestation of the poem's theme of struggle",
      "c) A sense of calm and peace",
      "d) A lack of poetic skill"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The use of \"Enjambment\" in the poem creates:",
    "options": [
      "a) A disjointed effect",
      "b) A sense of urgency, pushing the reader forward without pause",
      "c) A slow, meditative pace",
      "d) A formal structure"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What does \"Alliteration\" add to the poem?",
    "options": [
      "a) Confusion",
      "b) Rhythm and musicality, enhancing emotional impact",
      "c) A sense of stillness",
      "d) Only visual appeal"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "The phrase \"stand on my two feet and own the land\" is an example of:",
    "options": [
      "a) Passive acceptance",
      "b) A demand for autonomy and self-determination",
      "c) A wish for physical comfort",
      "d) A fear of responsibility"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the speaker's perspective regarding the postponement of freedom?",
    "options": [
      "a) They are willing to wait.",
      "b) They believe it is necessary for peace.",
      "c) They reject it, emphasizing immediate action.",
      "d) They are indifferent."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What does the poem emphasize as a fundamental right for all?",
    "options": [
      "a) Wealth",
      "b) Freedom",
      "c) Power",
      "d) Education"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What literary device is exemplified by the contrast between the speaker's active pursuit of freedom and others' passive attitudes?",
    "options": [
      "a) Symbolism",
      "b) Imagery",
      "c) Contrast",
      "d) Metaphor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is the meaning of \"compromise\" as used in the poem?",
    "options": [
      "a) An agreement where both sides get everything they want.",
      "b) An agreement made between two people or groups in which each side gives up some of the things they want.",
      "c) A total surrender.",
      "d) A complete refusal to negotiate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "The word \"tire\" in the poem means:",
    "options": [
      "a) To become happy",
      "b) To become excited",
      "c) To become tired and feel as if you want to sleep or rest",
      "d) To become active"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What is the definition of \"bread\" in its old-fashioned, slang context as potentially used in the poem?",
    "options": [
      "a) A type of food",
      "b) Money",
      "c) Sustenance",
      "d) Comfort"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What does the phrase \"I cannot live on tomorrow's bread\" highlight?",
    "options": [
      "a) The importance of saving.",
      "b) The urgency of present freedom.",
      "c) The desire for future wealth.",
      "d) The need for charity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What makes the speaker's message more powerful, according to one of the oral communication questions?",
    "options": [
      "a) The use of long, complex sentences.",
      "b) Direct language and repetition.",
      "c) An academic tone.",
      "d) Detailed historical explanations."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Which aspect of time describes actions or states that are general, habitual, or completed at a specific time?",
    "options": [
      "a) Progressive Aspect",
      "b) Perfect Aspect",
      "c) Simple Aspect",
      "d) Perfect Progressive Aspect"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What punctuation mark ends a direct question?",
    "options": [
      "a) Full Stop (.)",
      "b) Comma (,)",
      "c) Question Mark (?)",
      "d) Exclamation Mark (!)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What is the main difference between a summary and a precis, according to the text?",
    "options": [
      "a) A summary is longer than a precis.",
      "b) A precis includes personal opinions, while a summary does not.",
      "c) A precis maintains the author's tone and style, while a summary may use simpler language.",
      "d) A summary focuses on clarity, while a precis focuses on general understanding."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "In the sentence \"By the time he arrives, I have finished my work,\" what is the error related to the use of time aspects?",
    "options": [
      "a) Incorrect present simple.",
      "b) Incorrect future simple.",
      "c) Incorrect present perfect where future perfect should be used.",
      "d) No error."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Langston Hughes's works express a powerful sense of:",
    "options": [
      "a) Hopelessness",
      "b) Dignity, pride, and hope",
      "c) Indifference",
      "d) Despair"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "The poem \"Freedom\" has how many stanzas?",
    "options": [
      "a) Three",
      "b) Four",
      "c) Five",
      "d) Six"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is the structure of the first and fourth stanzas of the poem?",
    "options": [
      "a) Tercets",
      "b) Quintains",
      "c) Quatrains",
      "d) Couplets"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "The rhyme in \"fear\" and \"year\" in stanza one is used to:",
    "options": [
      "a) Confuse the reader.",
      "b) Emphasize certain lines.",
      "c) Slow down the pace.",
      "d) Hide the meaning."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "The poem's central theme asserts that freedom is:",
    "options": [
      "a) Something to be postponed.",
      "b) A fundamental right for all.",
      "c) Only for a select few.",
      "d) Dependent on political power."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The speaker's statement \"I do not need my freedom when I'm dead\" highlights the importance of:",
    "options": [
      "a) Afterlife",
      "b) Living in the moment",
      "c) Political action",
      "d) Inherited rights"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What does \"a strong seed planted in a great need\" suggest about freedom?",
    "options": [
      "a) It is easily destroyed.",
      "b) It requires nurturing and effort to grow.",
      "c) It is a natural occurrence.",
      "d) It is a temporary state."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the effect of the \"first-person perspective\" in the poem?",
    "options": [
      "a) It creates distance.",
      "b) It makes the poem impersonal.",
      "c) It allows the poet to speak for a group while expressing personal feelings.",
      "d) It focuses only on the poet's individual life."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The poem implies that freedom should not be achieved through:",
    "options": [
      "a) Patience",
      "b) Perseverance",
      "c) Passivity",
      "d) Hope"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Which of these is NOT an \"Aspect of Time\" mentioned in the grammar section?",
    "options": [
      "a) Simple Aspect",
      "b) Complex Aspect",
      "c) Progressive (Continuous) Aspect",
      "d) Perfect Aspect"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "The \"Present Perfect Progressive\" aspect describes actions that:",
    "options": [
      "a) Happened at a specific time in the past.",
      "b) Will be completed by a certain point in the future.",
      "c) Started in the past and are still ongoing or recently finished, with an emphasis on duration.",
      "d) Are general truths or habits."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "The \"Past Perfect\" aspect describes actions that:",
    "options": [
      "a) Are happening right now.",
      "b) Will occur in the future.",
      "c) Were completed before another action in the past.",
      "d) Are ongoing in the past."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What is the primary purpose of \"capitalization, punctuation, and spelling\" rules in writing?",
    "options": [
      "a) To make the text longer.",
      "b) To confuse the reader.",
      "c) To demonstrate command of Standard English conventions for clarity and legibility.",
      "d) To limit creative expression."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is a \"precis\" primarily used for?",
    "options": [
      "a) General understanding of the text.",
      "b) Academic writing, note-taking, and exams where conciseness is crucial.",
      "c) Expressing personal opinions.",
      "d) Expanding on the original text."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the length recommendation for a summary of a poem, as per \"Writing Skills\"?",
    "options": [
      "a) Around one-fourth to one-fifth of the poem's length.",
      "b) Around one-third of the poem's length.",
      "c) Any length, as long as it's clear.",
      "d) Longer than the original poem."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What is the length recommendation for a precis of a poem, as per \"Writing Skills\"?",
    "options": [
      "a) Around one-third of the poem's length.",
      "b) Around one-fourth to one-fifth of the poem's length.",
      "c) Shorter than a summary.",
      "d) Equivalent to the original poem."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which punctuation mark is used to link closely related independent clauses?",
    "options": [
      "a) Comma (,)",
      "b) Colon (:)",
      "c) Semi-colon (;)",
      "d) Full Stop (.)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Langston Hughes was known for emphasizing themes such as:",
    "options": [
      "a) Wealth and prosperity",
      "b) Racial identity, injustice, and the quest for freedom",
      "c) Technological advancement",
      "d) Historical events of Europe"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "The poem critiques those who say \"let things take their course\" by:",
    "options": [
      "a) Agreeing with their patience.",
      "b) Highlighting the urgency of the need for freedom in the present.",
      "c) Suggesting a passive approach to change.",
      "d) Ignoring their viewpoint."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What does the \"Writing Skills\" section advise against including in a summary or precis?",
    "options": [
      "a) Main ideas",
      "b) Key points",
      "c) Personal opinions or interpretations",
      "d) Author's tone"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "The \"Past Progressive\" aspect describes actions that:",
    "options": [
      "a) Will be ongoing in the future.",
      "b) Are happening right now.",
      "c) Were happening at a specific moment in the past.",
      "d) Have just been completed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What literary device makes freedom more tangible, helping readers visualize the need for autonomy?",
    "options": [
      "a) Alliteration",
      "b) Repetition",
      "c) Imagery",
      "d) Enjambment"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What does the \"Pre-reading\" section encourage students to discuss regarding the poem's title \"Freedom\"?",
    "options": [
      "a) The poet's favorite color.",
      "b) Whether it's about personal, social, or something else.",
      "c) The length of the poem.",
      "d) The poet's birthplace."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "The poem expresses a strong desire for freedom because the speaker:",
    "options": [
      "a) Wishes for power.",
      "b) \"lives here, too\" and wants freedom \"just as you.\"",
      "c) Wants to travel.",
      "d) Seeks material wealth."
    ],
    "correctAnswer": "b"
  }
],
    "The Punishment of Shahpesh the Persian on Khipil the Builder": [
  {
    "id": 1,
    "questionText": "Who commanded the building of the palace in the story?",
    "options": [
      "a) Khipil",
      "b) Ebn Busrac",
      "c) Shahpesh, the Persian",
      "d) Hazrat Abraham"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What was Khipil doing when Shahpesh came to inspect the palace?",
    "options": [
      "a) Working diligently on the construction.",
      "b) Sitting on a marble slab, reciting adventures to workers.",
      "c) Hiding from the king.",
      "d) Supervising the workers from a distance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "How long did the work on the palace linger?",
    "options": [
      "a) From the first year to the second year of Shahpesh's reign.",
      "b) From the first year to his fourth year.",
      "c) Only a few months.",
      "d) Less than a year."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What did Shahpesh praise Khipil for, initially, despite his negligence?",
    "options": [
      "a) His speediness of construction.",
      "b) The perfection of his craft, greatness of labor, speediness of construction, and assiduity (feigning not to behold his negligence).",
      "c) His honesty.",
      "d) His architectural design."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "Why did Khipil hesitate to step forward into the gap on the marble terrace?",
    "options": [
      "a) He was tired.",
      "b) The gap was wide, and he could not swim.",
      "c) He was afraid of heights.",
      "d) He refused to obey the king."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What was Khipil's \"reward daily\" after falling into the water?",
    "options": [
      "a) A promotion",
      "b) A bath, described as an \"apt contrivance\"",
      "c) Financial compensation",
      "d) A new construction project"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What privilege did Shahpesh grant Khipil in the hall of state?",
    "options": [
      "a) To eat at the king's table.",
      "b) To sit in the marble chair of the throne in his presence.",
      "c) To oversee a new project.",
      "d) To leave the palace."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What did Khipil pretend to do when the chair was \"not yet executed\"?",
    "options": [
      "a) To sit in the invisible chair.",
      "b) To build the chair immediately.",
      "c) To argue with the king.",
      "d) To run away."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 9,
    "questionText": "Why did Khipil not move from his sitting posture in the invisible chair?",
    "options": [
      "a) He was comfortable.",
      "b) He was transfixed by the guards with bent bows.",
      "c) He was asleep.",
      "d) He was meditating."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "How did the people react when they saw Khipil sitting on nothing?",
    "options": [
      "a) They felt pity.",
      "b) They cheered him.",
      "c) They laughed so that they rolled upon the floor.",
      "d) They protested the king's cruelty."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What did Shahpesh call Khipil's newly contrived gardens?",
    "options": [
      "a) Admirable in design, full of coolness and refreshingness (sarcastically).",
      "b) A beautiful oasis.",
      "c) A desert full of weeds and nettles.",
      "d) The most magnificent gardens in Persia."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "What did Khipil pluck from the gardens and put to his nose?",
    "options": [
      "a) Beautiful flowers",
      "b) Nettles",
      "c) Sweet-smelling herbs",
      "d) Exotic fruits"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What was Khipil compelled to drink as an \"honour\" from the King for three days and nights?",
    "options": [
      "a) Fresh water",
      "b) Wine",
      "c) The drought of the fountain (no water)",
      "d) Sweet juices"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What was Khipil made to do for seven days and seven nights, compared to the branches of a tree?",
    "options": [
      "a) Stand with stretched arms, holding a pomegranate in each hand.",
      "b) Sit in the invisible chair.",
      "c) Work on the palace.",
      "d) Recite poetry."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "What is the central message conveyed through Khipil's fate?",
    "options": [
      "a) The importance of royal commands.",
      "b) The foolishness of valuing words over deeds.",
      "c) The cruelty of kings.",
      "d) The necessity of flattery."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "What does Shahpesh's leadership style reveal through his treatment of Khipil?",
    "options": [
      "a) His generosity",
      "b) His use of sarcasm and irony to punish negligence",
      "c) His democratic approach",
      "d) His kindness"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "How does Khipil's character evolve from the start of the story to the end?",
    "options": [
      "a) He becomes more defiant.",
      "b) He becomes more courageous.",
      "c) He becomes more fearful and resigned.",
      "d) He becomes more industrious."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What does the \"unfinished palace\" symbolically reflect?",
    "options": [
      "a) The king's wealth",
      "b) Khipil's incompetence and the consequences of idle talk",
      "c) Architectural innovation",
      "d) The beauty of Persian art"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "The metaphor of the \"farm servant who failed to sow seeds\" used by Shahpesh reveals his perspective on Khipil's work as:",
    "options": [
      "a) Diligent and fruitful.",
      "b) Full of empty talk and lack of real production.",
      "c) Innovative and creative.",
      "d) Challenging but effective."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the story's overall style, as mentioned in the text?",
    "options": [
      "a) Realistic drama",
      "b) Timeless satire, humorous yet sharp warning, moral storytelling",
      "c) Romantic epic",
      "d) Historical biography"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What does the punishment inflicted on Khipil demonstrate about Shahpesh's wisdom?",
    "options": [
      "a) He knew how to reward loyalty.",
      "b) He knew how to punish offenses \"in coin\" (i.e., appropriately/with ironic justice).",
      "c) He was a cruel tyrant.",
      "d) He was easily fooled."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The proverb cited at the end, \"If thou wouldst be famous, and rich in splendid fruits, / Leave to bloom the flower of things, and dig among the roots,\" emphasizes:",
    "options": [
      "a) The importance of surface appearance.",
      "b) The value of deep, foundational work over superficial show.",
      "c) The beauty of flowers.",
      "d) The need for quick results."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "What is the meaning of \"loquacious\"?",
    "options": [
      "a) Quiet",
      "b) Talking a lot",
      "c) Angry",
      "d) Humble"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "The phrase \"Palace of the Wagging Tongue\" refers to:",
    "options": [
      "a) A grand palace built by Khipil.",
      "b) A metaphorical place for those punished for excessive, idle talk.",
      "c) A place for royal celebrations.",
      "d) A secret meeting place."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What happens to Shahpesh's affairs after Khipil's punishment?",
    "options": [
      "a) They languished further.",
      "b) They flourished, with business currents becoming active again.",
      "c) They remained stagnant.",
      "d) They were unaffected."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "George Meredith's writing is known for its:",
    "options": [
      "a) Simplicity and directness.",
      "b) Witty, insightful, and often ironic style.",
      "c) Formal academic tone.",
      "d) Romantic idealism."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What did the king say to Khipil after his humiliation in the invisible chair?",
    "options": [
      "a) \"Thou art but the length of thy measure on the ground, O talkative one!\"",
      "b) \"Thou hast been exalted above men, O Khipil! for that thou didst execute for thy master has been found fitting for thee.\"",
      "c) \"You are a master builder.\"",
      "d) \"You are forgiven.\""
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is \"anecdote\" defined as in the glossary?",
    "options": [
      "a) A long, formal speech.",
      "b) A short, amusing or interesting story about a real incident or person.",
      "c) A poetic verse.",
      "d) A historical document."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "The term \"obelisk\" refers to:",
    "options": [
      "a) A type of plant.",
      "b) A tall pointed stone column with four sides.",
      "c) A decorative archway.",
      "d) A small building."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Shahpesh's \"magnanimity of monarchs is as the rain that falleth, the sun that shineth: and in this spot it fertilizeth richness; in that encourageth rankness.\" What does this statement imply?",
    "options": [
      "a) Kings are always benevolent.",
      "b) Royal grace can have different, even harsh, effects depending on the recipient's nature.",
      "c) Kings control nature.",
      "d) All subjects benefit equally from royal favor."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What effect does the use of humour, wit, and satire serve in this story?",
    "options": [
      "a) To avoid serious topics.",
      "b) To solely entertain the audience.",
      "c) To comment on political and social issues.",
      "d) To describe historical events accurately."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "The story begins by setting the scene in which geographical/cultural context?",
    "options": [
      "a) European",
      "b) Middle Eastern/Persian",
      "c) African",
      "d) East Asian"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Khipil's initial character is portrayed as:",
    "options": [
      "a) Diligent and humble",
      "b) Loquacious and negligent",
      "c) Quiet and efficient",
      "d) Loyal and honest"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the meaning of \"wrath\" in \"Shahpesh's wrath was swift, leaving Khipil in fear\"?",
    "options": [
      "a) Joy",
      "b) Anger",
      "c) Mercy",
      "d) Laughter"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "The story critiques the idea that:",
    "options": [
      "a) Hard work is always rewarded.",
      "b) Eloquence and flattery can hide negligence.",
      "c) Kings are always just.",
      "d) Builders are always honest."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the \"Exposition\" of the story?",
    "options": [
      "a) The climax of the plot.",
      "b) Key information about Shahpesh and Khipil provided at the beginning.",
      "c) The resolution of the conflict.",
      "d) The character development of Shahpesh."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What kind of stories are common in Middle Eastern literature that this tale draws upon?",
    "options": [
      "a) Science fiction",
      "b) Moral storytelling",
      "c) Romantic comedies",
      "d) Detective stories"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What does the comparison of workers to \"pleased flocks whom the shepherd hath led to a pasture\" suggest about Khipil's influence over them?",
    "options": [
      "a) He is a harsh taskmaster.",
      "b) He entertains them, leading to idleness.",
      "c) He guides them diligently.",
      "d) He exploits their labor."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Shahpesh's declaration that \"All is perfect, and it is my will thou delay not to advance\" when Khipil points out a gap, is an example of:",
    "options": [
      "a) Direct command",
      "b) Literal agreement",
      "c) Sarcastic instruction",
      "d) Encouragement"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What happened to Khipil's nose after he sniffed the nettles as commanded by Shahpesh?",
    "options": [
      "a) It was soothed.",
      "b) It was reddened, and he desired to rub it.",
      "c) It became numb.",
      "d) It started bleeding."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "The theme of the story is relevant to those who:",
    "options": [
      "a) Work hard and are rewarded.",
      "b) Rely more on words and appearances than on actual deeds.",
      "c) Are always honest.",
      "d) Avoid conflict."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Khipil's actions betray a lack of:",
    "options": [
      "a) Ambition",
      "b) True productivity and commitment",
      "c) Intelligence",
      "d) Creativity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is the meaning of \"humiliation\" as inferred from the text?",
    "options": [
      "a) Praise and honor",
      "b) The state of being made to feel ashamed or foolish",
      "c) Great success",
      "d) A reward"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The story functions as a \"humorous yet sharp warning\" and a \"timeless satire\" primarily on:",
    "options": [
      "a) The power of kings.",
      "b) The foolishness of valuing words over deeds.",
      "c) The art of building palaces.",
      "d) The importance of honesty."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "The word \"interspersed\" in the description of Khipil's reciting adventures means:",
    "options": [
      "a) To avoid",
      "b) To put something in something else or among or between other things",
      "c) To ignore",
      "d) To combine entirely"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What does \"gabble\" mean?",
    "options": [
      "a) To speak slowly and clearly.",
      "b) To talk quickly so that people cannot hear you clearly or understand you.",
      "c) To sing loudly.",
      "d) To whisper secrets."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What was the \"fashion to do\" before Khipil's punishment, as described by the text?",
    "options": [
      "a) To be a diligent worker.",
      "b) To fancy the tongue a constructor rather than a commentator.",
      "c) To build with precision.",
      "d) To avoid talking."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What did Khipil's hesitation to step into the gap, despite Shahpesh's command, reveal about his character?",
    "options": [
      "a) His bravery.",
      "b) His fear of death and inability to swim.",
      "c) His rebellion against the king.",
      "d) His wisdom."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What phrase from the text describes Khipil's sad and battered state after his punishments?",
    "options": [
      "a) \"heightened with the honour\"",
      "b) \"his tongue drooped like the tongue of a heavy bell, that when it soundeth giveth forth mournful sounds only\"",
      "c) \"trembling, his teeth chattering\"",
      "d) \"exalted above men\""
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is the definition of \"fawn\"?",
    "options": [
      "a) To ignore someone.",
      "b) To criticize someone.",
      "c) To try to please somebody by praising them or paying them too much attention.",
      "d) To challenge someone."
    ],
    "correctAnswer": "c"
  }
],
    "Those Winter Sundays": [
  {
    "id": 1,
    "questionText": "What time of day does the father typically get up on Sundays?",
    "options": [
      "a) Late at night",
      "b) Early in the morning",
      "c) Midday",
      "d) After the speaker wakes up"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "How is the \"cold\" described in the first stanza?",
    "options": [
      "a) Icy white",
      "b) Blueblack",
      "c) Silvery grey",
      "d) Sharp and clear"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What physical characteristic of the father's hands is mentioned?",
    "options": [
      "a) Soft and gentle",
      "b) Strong and firm",
      "c) Cracked and aching",
      "d) Warm and inviting"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "What was the source of the father's hand pain?",
    "options": [
      "a) Illness",
      "b) Old age",
      "c) Labor in the weekday weather",
      "d) A Sunday accident"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What did the father do with \"banked fires\"?",
    "options": [
      "a) Put them out",
      "b) Let them die down",
      "c) Made them blaze",
      "d) Ignored them"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "According to the speaker, how often was the father thanked for his efforts?",
    "options": [
      "a) Every Sunday",
      "b) Sometimes",
      "c) Never",
      "d) Rarely"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What sound did the speaker hear upon waking?",
    "options": [
      "a) The father calling",
      "b) The cold splintering, breaking",
      "c) Birds singing",
      "d) The fire crackling"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "When did the father call the speaker?",
    "options": [
      "a) When the cold was splintering",
      "b) When the rooms were warm",
      "c) Before he lit the fire",
      "d) After breakfast"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What emotion did the speaker \"fear\" in the house?",
    "options": [
      "a) Sudden joy",
      "b) Loud arguments",
      "c) The chronic angers",
      "d) Deep sadness"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "How did the speaker speak to the father?",
    "options": [
      "a) Affectionately",
      "b) Indifferently",
      "c) Respectfully",
      "d) Gratefully"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "Besides warming the house, what other act of service did the father perform for the speaker?",
    "options": [
      "a) Cooked breakfast",
      "b) Polished \"good shoes\"",
      "c) Prepared clothes",
      "d) Told stories"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What phrase does the speaker use to reflect on his past ignorance?",
    "options": [
      "a) \"I understood everything\"",
      "b) \"What a wonderful childhood\"",
      "c) \"What did I know, what did I know\"",
      "d) \"I was always grateful\""
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The poem concludes with the speaker's realization about \"love's austere and lonely offices.\" What does \"austere\" mean in this context?",
    "options": [
      "a) Simple and plain",
      "b) Luxurious and grand",
      "c) Harsh and cruel",
      "d) Joyful and light"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 14,
    "questionText": "What does \"lonely\" imply about these \"offices\"?",
    "options": [
      "a) They are performed in solitude",
      "b) They are only for single people",
      "c) They are unpopular",
      "d) They are done in a remote location"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "What literary device is exemplified by \"blueblack cold\"?",
    "options": [
      "a) Metaphor",
      "b) Simile",
      "c) Imagery",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "The \"fire\" in the poem primarily symbolizes:",
    "options": [
      "a) Anger",
      "b) Destruction",
      "c) The father's love and warmth",
      "d) Family gatherings"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What does \"Winter\" symbolize in the poem?",
    "options": [
      "a) A season of celebration",
      "b) Emotional distance",
      "c) Comfort and joy",
      "d) The speaker's birth"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is the effect of the repetition of \"What did I know, what did I know\"?",
    "options": [
      "a) Creates suspense",
      "b) Highlights the speaker's regret and growing understanding",
      "c) Shows confusion",
      "d) Adds a musical quality"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "\"Love's austere and lonely offices\" is an example of what literary device?",
    "options": [
      "a) Simile",
      "b) Personification",
      "c) Metaphor",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "How would you describe the shift in the poem's tone?",
    "options": [
      "a) From joyful to angry",
      "b) From detached to sarcastic",
      "c) From neutral, descriptive to reflective and regretful",
      "d) From sad to hopeful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "The poem contrasts warmth with cold. What does \"warmth\" represent?",
    "options": [
      "a) The father's hidden struggles",
      "b) The comfort provided by the father's love",
      "c) The speaker's indifference",
      "d) The changing seasons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The poem is written in free verse. What effect does this have on its style?",
    "options": [
      "a) Creates a formal structure",
      "b) Adds a consistent rhyme scheme",
      "c) Results in a natural, conversational style",
      "d) Makes it difficult to read aloud"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Robert Hayden's poetry is known for exploring themes of:",
    "options": [
      "a) Political activism and revolution",
      "b) Technology and scientific discovery",
      "c) Family, history, and African American experiences",
      "d) Nature and environmentalism"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What does \"banked\" mean in the context of the poem's glossary?",
    "options": [
      "a) To save money",
      "b) To pile coal, etc., on a fire so that it burns slowly for a long time",
      "c) To store something away",
      "d) To lean against something"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The word \"blaze\" means to:",
    "options": [
      "a) Dim slowly",
      "b) Burn brightly and strongly",
      "c) Extinguish",
      "d) Smoulder"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What does \"chronic\" refer to in \"chronic angers\"?",
    "options": [
      "a) Lasting a long time; difficult to solve",
      "b) Sudden and intense",
      "c) Hidden or suppressed",
      "d) Unimportant"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 27,
    "questionText": "The father's actions, like lighting fires and polishing shoes, are depicted as:",
    "options": [
      "a) Extraordinary feats",
      "b) Quiet, selfless sacrifices",
      "c) Demanding chores",
      "d) Daily routines"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "The \"unspoken parental love\" theme highlights that love is often shown through:",
    "options": [
      "a) Affectionate words",
      "b) Material gifts",
      "c) Actions rather than words",
      "d) Public displays"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What contributes to the \"emotional distance\" between father and child in the poem?",
    "options": [
      "a) The speaker's busy schedule",
      "b) The father's lack of communication",
      "c) The \"chronic angers\" in the household",
      "d) Different interests"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "The speaker's adult realization about his father's devotion is characterized by:",
    "options": [
      "a) Pride",
      "b) Amusement",
      "c) Remorse",
      "d) Indifference"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The \"lonely offices\" of love suggest that parental duties can be:",
    "options": [
      "a) Fun and easy",
      "b) Difficult and unappreciated",
      "c) Shared by many",
      "d) Immediately recognized"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the significance of the title \"Those Winter Sundays\"?",
    "options": [
      "a) It refers to specific holidays.",
      "b) \"Winter\" indicates the harshness, and \"Sundays\" (plural) suggests recurring, unappreciated efforts.",
      "c) It describes a period of relaxation.",
      "d) It highlights the speaker's favourite day."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Why might the poet use the words \"splintering, breaking\" to describe the cold?",
    "options": [
      "a) To show the extreme fragility of the house.",
      "b) To emphasize the intense, almost tangible harshness of the cold.",
      "c) To suggest a literal breaking of ice outside.",
      "d) To symbolize the family breaking apart."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "The lack of direct communication between the father and speaker suggests:",
    "options": [
      "a) A dysfunctional family",
      "b) A common pattern of unspoken love and service",
      "c) That they had nothing to talk about",
      "d) That the father was often absent"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What is the speaker's main feeling when looking back at his younger self?",
    "options": [
      "a) Joy and nostalgia",
      "b) Self-criticism and regret",
      "c) Satisfaction",
      "d) Detachment"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What part of speech is \"indifferently\"?",
    "options": [
      "a) Adjective",
      "b) Noun",
      "c) Adverb",
      "d) Verb"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What does the speaker imply by stating \"No one ever thanked him\"?",
    "options": [
      "a) The father did not expect thanks.",
      "b) The father's efforts were taken for granted.",
      "c) The family was ungrateful.",
      "d) The father was too busy to receive thanks."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What inference can be drawn about the father's job from \"cracked hands that ached from labor in the weekday weather\"?",
    "options": [
      "a) He had a high-paying office job.",
      "b) He performed manual labor.",
      "c) He was a musician.",
      "d) He was unemployed."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The poem emphasizes that true love can be:",
    "options": [
      "a) Always verbally expressed",
      "b) Silent, enduring, and often unacknowledged",
      "c) Easily understood by children",
      "d) Dependent on reciprocation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What is a key characteristic of Robert Hayden's poetic style?",
    "options": [
      "a) Strict adherence to traditional forms",
      "b) Use of complex scientific terminology",
      "c) Reflective, emotional poetry with vivid imagery",
      "d) Humorous and light-hearted tone"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What does the poem imply about the speaker's maturity level as a child?",
    "options": [
      "a) He was very observant and appreciative.",
      "b) He was too young or self-absorbed to understand the sacrifices.",
      "c) He actively resisted his father's help.",
      "d) He tried to help his father."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "The phrase \"drove out the cold\" is an example of:",
    "options": [
      "a) Simile",
      "b) Personification",
      "c) Irony",
      "d) Allusion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is the primary purpose of the imagery in the poem?",
    "options": [
      "a) To distract the reader",
      "b) To create a sensory experience and highlight conditions and sacrifices",
      "c) To provide factual information",
      "d) To make the poem longer"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The poem implies that children often:",
    "options": [
      "a) Express gratitude immediately",
      "b) Recognize love in subtle ways",
      "c) Take parental love for granted until adulthood",
      "d) Are eager to assist their parents"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What emotion is most evident in the speaker's adult reflection?",
    "options": [
      "a) Pride",
      "b) Bitterness",
      "c) Regret",
      "d) Joy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The speaker's \"indifference\" suggests a lack of:",
    "options": [
      "a) Attention",
      "b) Interest or care",
      "c) Respect",
      "d) Communication"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "How does the poem challenge the idea that love must always be openly expressed?",
    "options": [
      "a) By showing that words are not necessary for love",
      "b) By depicting a father's love through his actions and sacrifices",
      "c) By arguing that love is a private matter",
      "d) By suggesting that feelings are less important than deeds"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What literary device is present in \"weekday weather\"?",
    "options": [
      "a) Metaphor",
      "b) Simile",
      "c) Alliteration",
      "d) Hyperbole"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "The word \"splinter\" from the glossary means to:",
    "options": [
      "a) Repair",
      "b) Break, or to make something break, into small, thin, sharp pieces",
      "c) Soften",
      "d) Melt"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What does the father's \"early\" rising on Sundays suggest?",
    "options": [
      "a) He had to go to work.",
      "b) He prioritized the family's comfort over his own rest.",
      "c) He was a restless sleeper.",
      "d) He enjoyed the quiet morning."
    ],
    "correctAnswer": "b"
  }
],
    "The Impact of AI on Society Human Relationships and Ethics": [
  {
    "id": 1,
    "questionText": "What is the core definition of Artificial Intelligence (AI) according to the text?",
    "options": [
      "a) Advanced robotics",
      "b) Machines performing tasks typically requiring human intelligence",
      "c) Automated manufacturing processes",
      "d) Digital entertainment"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT listed as a task typically requiring human intelligence that AI can perform?",
    "options": [
      "a) Learning",
      "b) Problem-solving",
      "c) Emotional expression",
      "d) Decision-making"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "In which sector does AI assist doctors in diagnosing diseases and performing robotic surgeries?",
    "options": [
      "a) Education",
      "b) Finance",
      "c) Healthcare",
      "d) Entertainment"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "How do AI-based learning platforms benefit education?",
    "options": [
      "a) By replacing teachers entirely",
      "b) By providing personalized lessons and automated assessments",
      "c) By limiting student-teacher interactions",
      "d) By focusing only on rote memorization"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is AI's primary function in the financial industry?",
    "options": [
      "a) Creating new currencies",
      "b) Fraud detection, customer service chatbots, and automated trading",
      "c) Managing international trade agreements",
      "d) Regulating stock markets"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "How does the entertainment industry utilize AI?",
    "options": [
      "a) For live concert production",
      "b) For content recommendations and creation of realistic digital characters",
      "c) For managing movie ticket sales",
      "d) For developing new musical instruments"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "One of the most pressing challenges of widespread AI use mentioned is:",
    "options": [
      "a) Climate change",
      "b) Job displacement",
      "c) Space exploration",
      "d) Traffic congestion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Which example of job displacement is provided in the text?",
    "options": [
      "a) Artists replacing engineers",
      "b) Self-checkout systems replacing cashiers",
      "c) Doctors replacing nurses",
      "d) Teachers replacing administrative staff"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What is recommended for workers in industries affected by automation?",
    "options": [
      "a) Retirement",
      "b) Acquiring new skills through re-skilling and up-skilling",
      "c) Protesting automation",
      "d) Relocating to rural areas"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "How do social media platforms use AI algorithms?",
    "options": [
      "a) To randomly display content",
      "b) To personalize content and connect users with shared interests",
      "c) To censor all user posts",
      "d) To manage server traffic"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is a potential risk of excessive reliance on digital communication?",
    "options": [
      "a) Increased face-to-face interactions",
      "b) Enhanced emotional intelligence",
      "c) Decline in face-to-face interactions and social isolation",
      "d) Improved critical thinking"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What is Replika mentioned as an example of?",
    "options": [
      "a) An AI-powered chatbot for emotional support and companionship",
      "b) A new social media platform",
      "c) A self-driving car system",
      "d) An AI diagnostic tool"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 13,
    "questionText": "What is a key concern regarding AI systems and large amounts of data?",
    "options": [
      "a) Data storage costs",
      "b) Privacy concerns, such as monitoring without consent",
      "c) Speed of data processing",
      "d) Data backup procedures"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "How can AI systems inherit biases?",
    "options": [
      "a) From faulty hardware",
      "b) If the data used to train them contains biases",
      "c) From programming errors",
      "d) Through network interference"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What ethical challenge arises when an AI system makes a harmful decision, such as an autonomous vehicle causing an accident?",
    "options": [
      "a) Difficulty in identifying the technical flaw",
      "b) Challenge in determining who is responsible (accountability)",
      "c) Cost of repairs",
      "d) Lack of insurance coverage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "What is the term for fake or misleading content created by AI, which can manipulate public opinion?",
    "options": [
      "a) Deepfake videos",
      "b) Virtual reality",
      "c) Augmented reality",
      "d) Holograms"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 17,
    "questionText": "Which principle for responsible AI use ensures users can understand how AI systems work?",
    "options": [
      "a) Fairness",
      "b) Privacy Protection",
      "c) Transparency",
      "d) Accountability"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "To ensure fair treatment for all individuals, AI systems should be trained on:",
    "options": [
      "a) Large datasets",
      "b) Diverse and unbiased data",
      "c) Historical data only",
      "d) Data from a single source"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What does \"Privacy Protection\" in AI guidelines entail?",
    "options": [
      "a) Limiting data sharing among users",
      "b) Securely storing and processing user data only with user consent",
      "c) Restricting AI access to certain public areas",
      "d) Encrypting AI algorithms"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is meant by \"Accountability\" in the context of responsible AI use?",
    "options": [
      "a) AI systems must explain their decisions.",
      "b) Clear rules should define who is responsible for the actions of an AI system.",
      "c) AI systems should be audited regularly.",
      "d) Users are solely responsible for AI outcomes."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What does \"Continuous Monitoring\" of AI systems aim to ensure?",
    "options": [
      "a) They are always online.",
      "b) They operate ethically and efficiently.",
      "c) They update automatically.",
      "d) They are constantly expanding their capabilities."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is the central theme of the unit \"The Impact of AI on Society, Human Relationships, and Ethics\"?",
    "options": [
      "a) The benefits of AI in business",
      "b) The transformative role of AI, its impact on human relationships, and ethical concerns",
      "c) The history of AI development",
      "d) How AI will replace all human jobs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "The word \"transform\" means to:",
    "options": [
      "a) Maintain the status quo",
      "b) Change the form of something; to change in form",
      "c) Reduce complexity",
      "d) Automate tasks"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What does \"displacement\" mean in the glossary?",
    "options": [
      "a) The act of replacing something",
      "b) The act of forcing somebody/something away from their home or position",
      "c) A form of entertainment",
      "d) A type of AI algorithm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What does \"Excessive\" mean:",
    "options": [
      "a) Minimal",
      "b) Just right",
      "c) Greater than what seems reasonable or appropriate",
      "d) Less than required"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "What does \"interaction\" refer to?",
    "options": [
      "a) Communication between machines",
      "b) The act of communicating with somebody, especially while you work, play or spend time with them",
      "c) A process of automation",
      "d) A type of programming language"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "The term \"social isolation\" in the context of AI refers to:",
    "options": [
      "a) Being physically alone",
      "b) A decline in face-to-face interactions due to overreliance on devices",
      "c) Separating AI from human society",
      "d) Protecting personal data"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is a specific benefit of AI in healthcare, as mentioned in the text?",
    "options": [
      "a) Reducing hospital waiting times",
      "b) Identifying diseases like cancer at an early stage",
      "c) Providing remote consultations",
      "d) Lowering the cost of medication"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "How does AI improve efficiency for businesses?",
    "options": [
      "a) By creating new product designs",
      "b) By automating processes like inventory management and customer data analysis",
      "c) By facilitating global expansion",
      "d) By reducing marketing costs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What problem is highlighted with AI recruitment tools?",
    "options": [
      "a) They are too slow.",
      "b) They may favour male candidates over female candidates due to historical gender bias in data.",
      "c) They require too much human oversight.",
      "d) They are unable to assess soft skills."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What is the primary concern regarding facial recognition systems used in public spaces?",
    "options": [
      "a) Their inaccuracy",
      "b) Their impact on privacy and potential for misuse of data",
      "c) Their high cost",
      "d) Their slow processing speed"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The text suggests that technological progress should:",
    "options": [
      "a) Prioritize profit over people",
      "b) Benefit everyone, including those who lose jobs due to automation",
      "c) Be controlled by a select few",
      "d) Focus solely on innovation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is the main argument for establishing ethical guidelines for AI?",
    "options": [
      "a) To slow down AI development",
      "b) To maximize benefits and minimize risks of AI",
      "c) To prevent AI from becoming too powerful",
      "d) To ensure AI is only used by governments"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "The concept of \"reliance\" (in the glossary) means:",
    "options": [
      "a) The state of needing somebody/something in order to survive, be successful, etc.",
      "b) Independence",
      "c) A type of AI system",
      "d) A temporary solution"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 35,
    "questionText": "How does AI affect communication tools like messaging apps and virtual assistants?",
    "options": [
      "a) Makes them less reliable",
      "b) Makes communication faster and more convenient",
      "c) Increases security risks",
      "d) Reduces their functionality"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the purpose of re-skilling and up-skilling the workforce in an AI-driven future?",
    "options": [
      "a) To replace AI systems with humans",
      "b) To ensure individuals are prepared for new technology-driven jobs",
      "c) To reduce the cost of labor",
      "d) To encourage people to retire early"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What are \"virtual companions\" mentioned as potentially lacking?",
    "options": [
      "a) Genuine emotions and understanding",
      "b) Ability to communicate",
      "c) Advanced processing power",
      "d) Access to information"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 38,
    "questionText": "What is a direct consequence of \"overreliance on AI for social interactions\"?",
    "options": [
      "a) Increased emotional connection",
      "b) Reduced empathy and emotional intelligence among users",
      "c) Development of new social skills",
      "d) Stronger community bonds"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The text describes AI as a \"transformative force.\" What does this imply about its impact?",
    "options": [
      "a) It causes minor adjustments.",
      "b) It brings about fundamental and significant changes.",
      "c) It has a temporary influence.",
      "d) It only affects specific aspects of life."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "How does AI's image recognition software contribute to healthcare?",
    "options": [
      "a) By writing prescriptions",
      "b) By performing complex surgeries",
      "c) By identifying diseases like cancer at an early stage",
      "d) By managing patient records"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What is a risk associated with AI in law enforcement, particularly with facial recognition?",
    "options": [
      "a) Slow identification processes",
      "b) Unfair treatment due to performance variations across racial groups",
      "c) Inability to store data",
      "d) High energy consumption"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "The term \"automate\" means:",
    "options": [
      "a) To operate manually",
      "b) To use machines and computers instead of people to do a job or task",
      "c) To complicate a process",
      "d) To require more human input"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is the role of governments and educational institutions in mitigating job displacement?",
    "options": [
      "a) To ignore the problem",
      "b) To focus on re-skilling and up-skilling the workforce",
      "c) To create new jobs immediately",
      "d) To halt AI development"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The unit \"The Impact of AI\" encourages students to critically engage with:",
    "options": [
      "a) The history of AI",
      "b) The benefits and risks of AI",
      "c) Only the positive aspects of AI",
      "d) Only the negative aspects of AI"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What is mentioned as a benefit of AI in the entertainment industry?",
    "options": [
      "a) Creating live music",
      "b) Video editing and content recommendations",
      "c) Designing physical sets",
      "d) Managing artist contracts"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "The passage emphasizes that AI's impact on society includes:",
    "options": [
      "a) Only economic changes",
      "b) Improvements in daily tasks, making them faster, more accurate, and convenient",
      "c) Only negative consequences",
      "d) Limiting human potential"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "How can deepfake videos pose an ethical challenge?",
    "options": [
      "a) By increasing data storage needs",
      "b) By manipulating public opinion or damaging reputation",
      "c) By requiring specialized software",
      "d) By being difficult to produce"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is the importance of \"Fairness\" in AI design?",
    "options": [
      "a) To make AI systems popular",
      "b) To ensure AI systems are trained on diverse and unbiased data for equitable treatment",
      "c) To reduce costs",
      "d) To promote competition"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "The introduction to the unit states that AI is a branch of technology that enables machines to perform tasks that typically require:",
    "options": [
      "a) Physical strength",
      "b) Human intelligence",
      "c) Manual dexterity",
      "d) Artistic talent"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is one of the \"new possibilities\" opened by AI, as mentioned in the theme description?",
    "options": [
      "a) Reducing global conflicts",
      "b) Enhancing efficiency across various sectors",
      "c) Eliminating all forms of manual labor",
      "d) Predicting future events with absolute certainty"
    ],
    "correctAnswer": "b"
  }
],
    "Rubaiyat": [
  {
    "id": 1,
    "questionText": "Who is the author of \"Ruba'iyat\"?",
    "options": [
      "a) Langston Hughes",
      "b) Robert Hayden",
      "c) Allama Muhammad Iqbal",
      "d) George Meredith"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What is the classical poetic structure used in \"Ruba'iyat\"?",
    "options": [
      "a) Sonnet",
      "b) Haiku",
      "c) Ruba'i (quatrain)",
      "d) Free verse"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "How many stanzas are in the poem \"Ruba'iyat\"?",
    "options": [
      "a) Five",
      "b) One",
      "c) Three",
      "d) Two"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "What is the typical rhyme scheme of a ruba'iyat, as mentioned in the text?",
    "options": [
      "a) ABAB",
      "b) AABB",
      "c) Modified AABA",
      "d) ABCB"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Allama Muhammad Iqbal's philosophy is strongly associated with the concept of:",
    "options": [
      "a) Nihilism",
      "b) Khudi (selfhood)",
      "c) Materialism",
      "d) Determinism"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "To what does the poet compare \"faith\" in the first line?",
    "options": [
      "a) A burning passion",
      "b) Abraham at the stake",
      "c) A divine gift",
      "d) Unwavering devotion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What does \"God-drunk\" emphasize about faith?",
    "options": [
      "a) Intoxication from alcohol",
      "b) Total absorption in divine devotion",
      "c) Blind obedience",
      "d) Irrational behavior"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What does the poet claim is \"worse than slavery\"?",
    "options": [
      "a) Physical bondage",
      "b) Lack of faith",
      "c) Compromise and fear",
      "d) Materialistic pursuits"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "\"You whom this age's way so captivate!\" uses what literary device?",
    "options": [
      "a) Simile",
      "b) Metaphor",
      "c) Apostrophe and Personification",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What blends with \"Islam's fire\" in the second stanza?",
    "options": [
      "a) Divine guidance",
      "b) Spiritual awakening",
      "c) Music of strange lands",
      "d) European values"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "How does \"Islam's fire\" symbolize Islamic civilization?",
    "options": [
      "a) Its destructive power",
      "b) Its energy and divine inspiration",
      "c) Its historical conflicts",
      "d) Its material wealth"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What is said to be \"empty of concord\" in Europe?",
    "options": [
      "a) Its scientific achievements",
      "b) Its political systems",
      "c) Its soul",
      "d) Its cultural expressions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "\"Whose civilization to no Makkah bends\" implies that European civilization:",
    "options": [
      "a) Is superior to others",
      "b) Refuses to submit to any spiritual authority",
      "c) Does not have holy sites",
      "d) Is only focused on trade"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What has \"departed\" from Muslims, according to the third stanza?",
    "options": [
      "a) Their wealth",
      "b) Love's madness",
      "c) Their knowledge",
      "d) Their unity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What does \"Love's madness\" represent in the poem?",
    "options": [
      "a) Romantic love",
      "b) Sacred passion or religious fervour",
      "c) Insanity",
      "d) Emotional instability"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "What is the physiological metaphor used to describe Muslims' weakened spiritual vitality?",
    "options": [
      "a) \"Ranks broken\"",
      "b) \"Hearts perplexed\"",
      "c) \"The blood runs thin\"",
      "d) \"Prayers cold\""
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "How are the \"ranks\" of Muslims described?",
    "options": [
      "a) Strong",
      "b) United",
      "c) Broken",
      "d) Growing"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is the emotional state of Muslims' \"hearts\"?",
    "options": [
      "a) Joyful",
      "b) Resilient",
      "c) Perplexed",
      "d) Calm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What is the spiritual state of Muslims' \"prayers\"?",
    "options": [
      "a) Fervent",
      "b) Cold",
      "c) Regular",
      "d) Absent"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the extent of \"feeling\" remaining in contemporary Muslims?",
    "options": [
      "a) Deep and profound",
      "b) No feeling deeper than the skin",
      "c) Emotional and expressive",
      "d) Intellectual and rational"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "The phrase \"no feeling deeper than the skin\" renders Muslim superficiality:",
    "options": [
      "a) Intellectually",
      "b) Politically",
      "c) Physically",
      "d) Spiritually"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 22,
    "questionText": "The juxtaposition of \"Europe's 'empty concord' vs. Islam's 'harmony'\" highlights:",
    "options": [
      "a) Their similarities",
      "b) The fundamental clash between civilizations",
      "c) Their shared history",
      "d) The superiority of one over the other"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "What does Makkah symbolize in the poem?",
    "options": [
      "a) A place of pilgrimage",
      "b) Submission to God",
      "c) A center of trade",
      "d) A historical city"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What is the significance of Hazrat Abraham's sacrifice in the poem?",
    "options": [
      "a) It represents historical suffering.",
      "b) It grounds the poem in Islamic tradition and symbolizes unwavering devotion.",
      "c) It is a tale of personal loss.",
      "d) It critiques ancient practices."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "Allama Muhammad Iqbal lamented the \"loss of passion\" among Muslims, also referred to as:",
    "options": [
      "a) \"Spiritual awakening\"",
      "b) \"Love's madness\"",
      "c) \"Intellectual curiosity\"",
      "d) \"Social reform\""
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "The theme of \"spiritual bankruptcy of the modern age\" is contrasted with:",
    "options": [
      "a) Material progress",
      "b) True faith as exemplified by Hazrat Abraham's devotion",
      "c) Western values",
      "d) Political power"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "The decline of Muslim societies is primarily attributed to the loss of:",
    "options": [
      "a) Economic power",
      "b) Spiritual passion and unity",
      "c) Military strength",
      "d) Political influence"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "The phrase \"age's way\" is personified as a:",
    "options": [
      "a) Wise teacher",
      "b) Seductive force",
      "c) Guiding light",
      "d) Harsh ruler"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "The use of \"Fire\" as thermal imagery in the poem represents:",
    "options": [
      "a) Destruction",
      "b) Islam's energy",
      "c) Conflict",
      "d) Anger"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "How is \"cold\" prayers used as thermal imagery?",
    "options": [
      "a) To describe the physical temperature of mosques",
      "b) To map spiritual states of hollow rituals",
      "c) To signify winter",
      "d) To show a lack of resources"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "The poem critiques Western civilization for being:",
    "options": [
      "a) Technologically backward",
      "b) Spiritually hollow and disconnected",
      "c) Aggressive and violent",
      "d) Culturally isolated"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What does \"self-honouring\" mean in the glossary?",
    "options": [
      "a) Being proud of oneself",
      "b) Maintaining one's dignity and self-respect through noble principles",
      "c) Seeking personal gain",
      "d) Boasting about achievements"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "The word \"perplexed\" means:",
    "options": [
      "a) Confident",
      "b) Happy",
      "c) Confused or deeply troubled",
      "d) Enthusiastic"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "\"Ranks\" is used metaphorically for:",
    "options": [
      "a) Military formations",
      "b) Social status",
      "c) Muslim solidarity",
      "d) Economic divisions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "Allama Muhammad Iqbal is described as a \"visionary philosopher-poet\" from:",
    "options": [
      "a) Early 20th century",
      "b) 19th century",
      "c) Late 18th century",
      "d) Contemporary era"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 36,
    "questionText": "What is the purpose of \"Juxtaposition & Contrast\" in the poem?",
    "options": [
      "a) To create a sense of unity",
      "b) To highlight differences and a nuanced understanding",
      "c) To confuse the reader",
      "d) To add decorative elements"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What does the comparison of faith to Abraham at the stake signify?",
    "options": [
      "a) The importance of physical strength",
      "b) The trial of belief and unwavering devotion",
      "c) A historical event",
      "d) A metaphor for political struggle"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "The phrase \"music of strange lands\" could refer to:",
    "options": [
      "a) Foreign music styles",
      "b) Western cultural influences",
      "c) Traditional Arabic music",
      "d) Heavenly melodies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What is the primary concern Allama Muhammad Iqbal expresses about Muslims?",
    "options": [
      "a) Their lack of political power",
      "b) Their spiritual and moral decline",
      "c) Their economic hardship",
      "d) Their educational shortcomings"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "The poem challenges the idea that faith is:",
    "options": [
      "a) Only personal",
      "b) Passive or ritualistic",
      "c) Solely about community",
      "d) Inherited"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "\"God-drunk\" is presented as a striking:",
    "options": [
      "a) Simile",
      "b) Paradox",
      "c) Alliteration",
      "d) Imagery"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 42,
    "questionText": "The \"cold\" in \"prayers cold\" is a type of:",
    "options": [
      "a) Visual imagery",
      "b) Auditory imagery",
      "c) Thermal imagery",
      "d) Gustatory imagery"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "The poem suggests that Islamic civilization draws its strength and harmony from:",
    "options": [
      "a) Its history",
      "b) Divine inspiration",
      "c) Its military might",
      "d) Its intellectual traditions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The word \"captivate\" means to:",
    "options": [
      "a) Release",
      "b) Charm or dominate someone's attention",
      "c) Repel",
      "d) Bore"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What is the etymology of \"Ruba'iyat\"?",
    "options": [
      "a) Greek literature",
      "b) Persian literature",
      "c) Latin poetry",
      "d) Arabic prose"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Iqbal's \"scathing critiques\" of Western civilization describe it as:",
    "options": [
      "a) Spiritually hollow",
      "b) Intellectually superior",
      "c) Technologically advanced",
      "d) Environmentally conscious"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 47,
    "questionText": "How does the poem use \"Allusion & Islamic Intertextuality\"?",
    "options": [
      "a) By referencing other poems",
      "b) By grounding the poem in Islamic tradition, e.g., Hazrat Abraham's sacrifice",
      "c) By making obscure references",
      "d) By quoting classical texts"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "The poem contrasts \"true devotion\" with:",
    "options": [
      "a) Intellectual pursuits",
      "b) The hollow pursuits of modernity",
      "c) Social justice",
      "d) Artistic expression"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "The word \"concord\" means:",
    "options": [
      "a) Disagreement",
      "b) Harmony or agreement; unity of hearts and purpose",
      "c) Conflict",
      "d) Noise"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is the ultimate goal of Iqbal's message of \"Khudi\" and spiritual vigour?",
    "options": [
      "a) Personal wealth",
      "b) Political dominance",
      "c) Revival through self-realization and spiritual vigour",
      "d) Cultural isolation"
    ],
    "correctAnswer": "c"
  }
],
    "The End of the Beginning": [
  {
    "id": 1,
    "questionText": "Who is the playwright of \"The End of the Beginning\"?",
    "options": [
      "a) William Blake",
      "b) Langston Hughes",
      "c) Sean O'Casey",
      "d) Allama Muhammad Iqbal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What genre of play is \"The End of the Beginning\"?",
    "options": [
      "a) Tragedy",
      "b) Drama",
      "c) One-act farcical comedy",
      "d) Romantic play"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What is Darry Berrill's main character trait at the beginning of the play?",
    "options": [
      "a) Timidity",
      "b) Overconfidence",
      "c) Laziness",
      "d) Humility"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How does Darry describe Lizzie's job compared to his own?",
    "options": [
      "a) More difficult",
      "b) A sinecure of a job",
      "c) Less important",
      "d) Equally challenging"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What chore does Darry challenge Lizzie to let him do?",
    "options": [
      "a) Mow the meadow",
      "b) What's to be done in the house",
      "c) Feed the animals",
      "d) Ironing"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "What does Lizzie do when Darry angrily tells her to \"Buzz off\"?",
    "options": [
      "a) She cries.",
      "b) She violently pulls off her overall and flings it on the floor.",
      "c) She laughs.",
      "d) She walks away quietly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What does Lizzie warn Darry about regarding Alice Lanigan?",
    "options": [
      "a) She is a good neighbor.",
      "b) She will help with housework.",
      "c) She is setting him on to nag and making mechanical toys of him and Barry.",
      "d) She is coming to visit."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the first thing Darry does after Lizzie leaves that causes a problem?",
    "options": [
      "a) He breaks a jug.",
      "b) He breaks the clock.",
      "c) He starts exercising.",
      "d) He sings a song."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "When Darry and Barry try to do physical exercises, what problem do they encounter with the gramophone?",
    "options": [
      "a) It runs out of power.",
      "b) They can't keep up with the music's tempo.",
      "c) It stops working.",
      "d) It plays the wrong song."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Who is Barry Derrill in relation to Darry?",
    "options": [
      "a) His brother",
      "b) His neighbor",
      "c) His well-meaning but inept friend",
      "d) His son"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What instrument does Barry bring with him?",
    "options": [
      "a) Guitar",
      "b) Harmonica",
      "c) Mandolin",
      "d) Flute"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "What happens when Darry and Barry attempt to sing a song together?",
    "options": [
      "a) They sing in perfect harmony.",
      "b) They argue about the rhythm and movements.",
      "c) They impress each other.",
      "d) Lizzie returns and stops them."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What sound is heard outside when Darry realizes he needs to start housework?",
    "options": [
      "a) A car horn",
      "b) The rattling whirr of a mowing machine",
      "c) Dogs barking",
      "d) Birds singing"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What does Darry accuse Barry of doing to the clock?",
    "options": [
      "a) Fixing it",
      "b) Not winding it",
      "c) Breaking it",
      "d) Stealing it"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What happens to a jug when Barry is wiping dishes?",
    "options": [
      "a) It is cleaned perfectly.",
      "b) It flies off the table and breaks on the floor.",
      "c) It is filled with water.",
      "d) It is put away."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "How does Darry injure his nose?",
    "options": [
      "a) He falls down the stairs.",
      "b) He hits it on the concrete while going outside.",
      "c) Barry accidentally hits him.",
      "d) He trips over the rug."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What does Barry accidentally break while sweeping?",
    "options": [
      "a) A mirror",
      "b) A windowpane",
      "c) A chair",
      "d) A flowerpot"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "What solution does Barry suggest for tying the heifer?",
    "options": [
      "a) Tying her to a tree",
      "b) Putting a rope down the chimney and tying it to a chair",
      "c) Building a new stable",
      "d) Letting her roam free"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What happens when Darry tries to fix the light bulb?",
    "options": [
      "a) The light comes on perfectly.",
      "b) It causes a flash, and the room becomes darker.",
      "c) The bulb drops and breaks.",
      "d) He realizes he needs a new fixture."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the final disastrous event before Lizzie's return?",
    "options": [
      "a) The house catches fire.",
      "b) Darry falls down the chimney.",
      "c) The heifer escapes.",
      "d) Barry breaks all the crockery."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is Darry's reaction when he falls down the chimney and sees Lizzie?",
    "options": [
      "a) He apologizes.",
      "b) He blames Lizzie for taking the rope off the heifer.",
      "c) He laughs.",
      "d) He is too shocked to speak."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The theme of \"The End of the Beginning\" primarily explores:",
    "options": [
      "a) The importance of family",
      "b) Gender roles and stereotypes, especially concerning domestic work",
      "c) The challenges of rural life",
      "d) The joys of music"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Darry's journey from overconfidence to humility is achieved through:",
    "options": [
      "a) Lizzie's direct teaching",
      "b) His own comic disaster and struggles with tasks",
      "c) Barry's advice",
      "d) Reading a book"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "The play uses farcical comedy, which is characterized by:",
    "options": [
      "a) Deep philosophical debates",
      "b) Exaggerated situations and clumsy mistakes",
      "c) Realistic portrayals of life",
      "d) Subtle social commentary"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The setting of the play is:",
    "options": [
      "a) A city apartment",
      "b) A rural Irish cottage in the early 20th century",
      "c) A modern suburban home",
      "d) A lavish palace"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What does Darry mean by \"expedite matters\"?",
    "options": [
      "a) To delay things",
      "b) To make things happen more quickly",
      "c) To complicate things",
      "d) To make excuses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "The term \"inept\" (used to describe Barry in the character description) means:",
    "options": [
      "a) Skillful",
      "b) Capable",
      "c) Clumsy or without skill",
      "d) Resourceful"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What is the meaning of \"scornfully\" as Darry speaks to Lizzie?",
    "options": [
      "a) Respectfully",
      "b) With contempt or derision",
      "c) Playfully",
      "d) Indifferently"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "When Darry says Lizzie's job is a \"sinecure,\" he means it's:",
    "options": [
      "a) A demanding job",
      "b) An easy job requiring little effort",
      "c) A dangerous job",
      "d) A well-respected job"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What does Darry's \"nag at me\" imply Lizzie thinks Alice Lanigan encourages?",
    "options": [
      "a) Praising Lizzie",
      "b) Complaining about Lizzie's workload",
      "c) Helping Lizzie",
      "d) Ignoring Lizzie"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What is \"callisthenics\"?",
    "options": [
      "a) A musical performance",
      "b) Physical exercises",
      "c) A type of dance",
      "d) A game"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The word \"limber\" means:",
    "options": [
      "a) Stiff and rigid",
      "b) Flexible; able to bend or move easily",
      "c) Weak",
      "d) Heavy"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "How does Darry try to blame Barry for the rhythm issues during exercises?",
    "options": [
      "a) He accuses Barry of changing the settings.",
      "b) He says Barry is \"spoiling the whole thing by getting out of time.\"",
      "c) He claims Barry isn't listening to the music.",
      "d) He states Barry is too stiff."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the effect of the rapid tempo forced upon Darry and Barry by the gramophone's \"Fast\" setting?",
    "options": [
      "a) It makes their movements graceful.",
      "b) It forces them to do the exercises in a frantic way.",
      "c) It makes them feel refreshed.",
      "d) It allows them to synchronize perfectly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "When Darry is injured, what does he frantically ask Barry to find for his neck?",
    "options": [
      "a) A bandage",
      "b) Something cold",
      "c) A warm cloth",
      "d) A pain reliever"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "What is the metaphorical significance of \"Down where the bees are hummin' an' the wild flowers gaily growing\"?",
    "options": [
      "a) It describes a literal garden.",
      "b) It provides a pleasant, idyllic backdrop to the characters' chaos.",
      "c) It symbolizes their aspirations.",
      "d) It represents the beauty of nature untouched by human error."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What does Darry lament will be a \"nice panorama of ruin\" in front of Lizzie?",
    "options": [
      "a) The broken clock",
      "b) The general chaos and damage in the house",
      "c) The un-mowed meadow",
      "d) His injured nose"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "When Darry discovers the oil has spilled, he is described as \"staggering against the wall.\" What does \"staggering\" mean?",
    "options": [
      "a) Walking steadily",
      "b) Walking unsteadily from side to side",
      "c) Running quickly",
      "d) Leaning firmly"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What is Lizzie's final action/remark before she leaves to mow the meadow?",
    "options": [
      "a) She tells Darry she will be back soon.",
      "b) She wishes Darry good luck.",
      "c) She hopes she'll \"at least find the four walls standing\" when she returns.",
      "d) She calls Barry to help Darry."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "The \"Do It Now\" card hanging on the wall serves as:",
    "options": [
      "a) A serious instruction that the characters follow.",
      "b) An ironic contrast to Darry's procrastination and incompetence.",
      "c) A decorative element.",
      "d) A reminder for Lizzie."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What does the sound of the \"mowing machine\" symbolize when Lizzie is away?",
    "options": [
      "a) Lizzie's competence and hard work.",
      "b) Darry's successful completion of the meadow.",
      "c) The arrival of a new character.",
      "d) The start of a new day."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "What does Darry's overconfidence primarily lead to?",
    "options": [
      "a) Efficient task completion",
      "b) Humiliation and chaos",
      "c) Learning new skills",
      "d) Respect from others"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "How does Barry describe his eyesight?",
    "options": [
      "a) Perfect",
      "b) Very near-sighted",
      "c) Improving",
      "d) Normal"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The broken spring \"darts out\" from the clock. What does \"darts\" suggest?",
    "options": [
      "a) Slow movement",
      "b) Quick, sudden movement",
      "c) Gentle release",
      "d) Controlled action"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "When Barry says Darry is \"manfully\" continuing the exercises, it is an example of:",
    "options": [
      "a) Literal description",
      "b) Sarcasm or irony, given the chaotic situation",
      "c) Praise",
      "d) Encouragement"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "The word \"sooty\" (describing Darry after falling down the chimney) means:",
    "options": [
      "a) Clean",
      "b) Covered with soot",
      "c) Injured",
      "d) Exhausted"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What is the play's subtle critique of gender roles?",
    "options": [
      "a) That men are better at housework.",
      "b) That domestic work is difficult and requires skill, regardless of gender.",
      "c) That women should only do housework.",
      "d) That traditional roles are outdated."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What literary device is at play when Darry shouts \"You snaky - arm'd candle - power - ey'd elephant\"?",
    "options": [
      "a) Simile",
      "b) Metaphor",
      "c) Hyperbole/Exaggerated insult",
      "d) Alliteration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is Darry's initial attitude towards the challenges of household chores?",
    "options": [
      "a) He approaches them cautiously.",
      "b) He underestimates them.",
      "c) He seeks help immediately.",
      "d) He views them as a personal strength."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What does Lizzie's practical and competent nature highlight?",
    "options": [
      "a) Her lack of ambition outside the home.",
      "b) The efficiency required to manage domestic and farm duties.",
      "c) Her stubbornness.",
      "d) Her desire for control."
    ],
    "correctAnswer": "b"
  }
]
};
export const shortQuestions = {
    "Short Stories": shortQuestionsData.slice(0, 4),
    "Poems": shortQuestionsData.slice(4, 7),
    "Essays": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Short Stories": longQuestionsData.slice(0, 2),
    "Poems": longQuestionsData.slice(2, 4),
    "Essays": longQuestionsData.slice(4, 5),
};
