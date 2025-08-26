
import { MCQ } from '@/lib/types';

// =================================================================================
// 1. CHAPTERS
// =================================================================================
// Add the names of the chapters for this subject.
// The order of chapters here will be the order they appear in the UI.
// =================================================================================

export const chapters = ["Verbal"];

// =================================================================================
// 2. MCQS
// =================================================================================
// Add the MCQs for each chapter. The key for each chapter's MCQs must match
// the chapter name defined in the 'chapters' array above.
// =================================================================================

export const mcqs: Record<string, MCQ[]> = {
  "Verbal": [
    {
        "id": 1,
        "questionText": "Which word is a synonym for 'happy'?",
        "options": ["Sad", "Joyful", "Angry", "Tired"],
        "correctAnswer": "Joyful"
    },
    {
        "id": 2,
        "questionText": "Complete the analogy: 'Doctor is to hospital as teacher is to ____'.",
        "options": ["Book", "Student", "School", "Desk"],
        "correctAnswer": "School"
    },
    {
        "id": 3,
        "questionText": "Identify the noun in the following sentence: 'The cat sat on the mat.'",
        "options": ["The", "Sat", "On", "Cat"],
        "correctAnswer": "Cat"
    },
    {
        "id": 4,
        "questionText": "Which of the following is an antonym for 'hot'?",
        "options": ["Warm", "Cold", "Spicy", "Sunny"],
        "correctAnswer": "Cold"
    },
    {
        "id": 5,
        "questionText": "What is the plural form of 'mouse'?",
        "options": ["Mouses", "Mice", "Mouse", "Mooses"],
        "correctAnswer": "Mice"
    },
    {
        "id": 6,
        "questionText": "Choose the word that best completes the sentence: 'Despite the storm, the crew managed to ______ the ship to safety.'",
        "options": ["Steer", "Stray", "Abandon", "Collide"],
        "correctAnswer": "Steer"
    },
    {
        "id": 7,
        "questionText": "Re-arrange the jumbled words to form a meaningful sentence: 'always truth the speaks he'",
        "options": ["He speaks the always truth.", "The truth he always speaks.", "He always speaks the truth.", "Always he speaks the truth."],
        "correctAnswer": "He always speaks the truth."
    },
    {
        "id": 8,
        "questionText": "Find the odd one out: 'Enormous', 'Gigantic', 'Huge', 'Tiny'",
        "options": ["Enormous", "Gigantic", "Huge", "Tiny"],
        "correctAnswer": "Tiny"
    },
    {
        "id": 9,
        "questionText": "Which word means 'a person who journeys to a sacred place for religious reasons'?",
        "options": ["Tourist", "Pilgrim", "Explorer", "Wanderer"],
        "correctAnswer": "Pilgrim"
    },
    {
        "id": 10,
        "questionText": "If 'ELOQUENT' is coded as 'GNQEWGPV', how is 'HONESTY' coded?",
        "options": ["JQPGUVZ", "JQPHTVA", "IPPGUVZ", "JQPGVUA"],
        "correctAnswer": "JQPGUVZ"
    },
    {
        "id": 11,
        "questionText": "What is the meaning of the idiom 'to bite the bullet'?",
        "options": ["To eat something very hard", "To get injured", "To face a difficult situation with courage", "To make a bad decision"],
        "correctAnswer": "To face a difficult situation with courage"
    },
    {
        "id": 12,
        "questionText": "The words 'mitigate' and 'alleviate' are:",
        "options": ["Antonyms", "Synonyms", "Homophones", "Palindromes"],
        "correctAnswer": "Synonyms"
    },
    {
        "id": 13,
        "questionText": "A 'garrulous' person is someone who...",
        "options": ["is very wealthy.", "is excessively talkative.", "is shy and reserved.", "is extremely generous."],
        "correctAnswer": "is excessively talkative."
    },
    {
        "id": 14,
        "questionText": "Which of the following sentences uses the subjunctive mood correctly?",
        "options": ["If I was you, I would take the offer.", "I wish I was taller.", "The recommendation is that he is to be promoted.", "If I were the king, I would decree a national holiday."],
        "correctAnswer": "If I were the king, I would decree a national holiday."
    },
    {
        "id": 15,
        "questionText": "What does the word 'ephemeral' mean?",
        "options": ["Long-lasting", "Lasting for a very short time", "Beautiful", "Weak"],
        "correctAnswer": "Lasting for a very short time"
    },
    {
        "id": 16,
        "questionText": "What will come next in the following series: 16 12 28 8 4 ?",
        "options": ["2", "12", "40", "4"],
        "correctAnswer": "12"
    },
    {
        "id": 17,
        "questionText": "What will come next in the following series: 4 12 36 108 ?",
        "options": ["124", "424", "324", "242"],
        "correctAnswer": "324"
    },
    {
        "id": 18,
        "questionText": "What will come next in the following series: 62 31 34 17 20 ?",
        "options": ["10", "9", "8", "6"],
        "correctAnswer": "10"
    },
    {
        "id": 19,
        "questionText": "What will come next in the following series: 20 25 23 28 26 31 29 34 ?",
        "options": ["31", "32", "33", "43"],
        "correctAnswer": "32"
    },
    {
        "id": 20,
        "questionText": "What will come next in the following series: 13 15 17 19 21 ?",
        "options": ["26", "20", "23", "24"],
        "correctAnswer": "23"
    },
    {
        "id": 21,
        "questionText": "What will come next in the following series: 5 3 6 4 7 5 8 6 ?",
        "options": ["9,7", "8,10", "7,5", "9,5"],
        "correctAnswer": "9,7"
    },
    {
        "id": 22,
        "questionText": "What will come next in the following series: 17 35 72 147 ?",
        "options": ["892", "294", "198", "298"],
        "correctAnswer": "298"
    },
    {
        "id": 23,
        "questionText": "What will come next in the following series: 10 50 250 1250 ?",
        "options": ["5012", "5169", "2500", "6250"],
        "correctAnswer": "6250"
    },
    {
        "id": 24,
        "questionText": "What will come next in the following series: 49 48 45 40 33 24 ?",
        "options": ["13", "23", "25", "33"],
        "correctAnswer": "13"
    },
    {
        "id": 25,
        "questionText": "What will come next in the following series: 1 10 19 28 ?",
        "options": ["28", "24", "26", "37"],
        "correctAnswer": "37"
    },
    {
        "id": 26,
        "questionText": "What will come next in the following series: 5 9 17 33 ?",
        "options": ["114", "66", "65", "71"],
        "correctAnswer": "65"
    },
    {
        "id": 27,
        "questionText": "What will come next in the following series: 3 4 10 11 17 18 ?",
        "options": ["29", "25", "24", "19"],
        "correctAnswer": "24"
    },
    {
        "id": 28,
        "questionText": "What will come next in the following series: 17 23 30 38 ?",
        "options": ["47", "48", "45", "46"],
        "correctAnswer": "47"
    },
    {
        "id": 29,
        "questionText": "What will come next in the following series: 2 90 4 80 6 70 8 60 ?",
        "options": ["50,10", "12,52", "10,50", "10,12"],
        "correctAnswer": "10,50"
    },
    {
        "id": 30,
        "questionText": "What will come next in the following series: 120 108 97 87 78 ?",
        "options": ["80", "45", "85", "70"],
        "correctAnswer": "70"
    },
    {
        "id": 31,
        "questionText": "What will come next in the following series: 11 8 16 17 14 28 ?",
        "options": ["32", "20", "30", "29"],
        "correctAnswer": "29"
    },
    {
        "id": 32,
        "questionText": "What will come next in the following series: 64 32 16 8 4 2 ?",
        "options": ["1/2", "1/4", "1", "1/8"],
        "correctAnswer": "1"
    },
    {
        "id": 33,
        "questionText": "What will come next in the following series: 3 7 8 12 13 17 ?",
        "options": ["18", "21", "19", "22"],
        "correctAnswer": "18"
    },
    {
        "id": 34,
        "questionText": "What will come next in the following series: 1 100 2 50 4 25 8 ?",
        "options": ["16.12, 5", "8.50, 16", "12.5, 4", "12.5, 16"],
        "correctAnswer": "12.5, 16"
    },
    {
        "id": 35,
        "questionText": "What will come next in the following series: 2 6 12 36 72 216 ?",
        "options": ["376", "288", "432", "648"],
        "correctAnswer": "432"
    },
    {
        "id": 36,
        "questionText": "What will come next in the following series: T S R T S R R S ?",
        "options": ["V", "T", "W", "R"],
        "correctAnswer": "T"
    },
    {
        "id": 37,
        "questionText": "What will come next in the following series: J H F D ?",
        "options": ["F", "B", "C", "E"],
        "correctAnswer": "B"
    },
    {
        "id": 38,
        "questionText": "What will come next in the following series: B D G K P ?",
        "options": ["V", "C", "E", "Q"],
        "correctAnswer": "V"
    },
    {
        "id": 39,
        "questionText": "What will come next in the following series: Z C X B ?",
        "options": ["C", "D", "V", "G"],
        "correctAnswer": "V"
    },
    {
        "id": 40,
        "questionText": "What will come next in the following series: ABCZ ABCY ABC ?",
        "options": ["D", "E", "X", "W"],
        "correctAnswer": "X"
    },
    {
        "id": 41,
        "questionText": "What will come next in the following series: A G L P S ?",
        "options": ["H", "I", "Q", "U"],
        "correctAnswer": "U"
    },
    {
        "id": 42,
        "questionText": "What will come next in the following series: A C F ?",
        "options": ["I", "J", "K", "L"],
        "correctAnswer": "J"
    },
    {
        "id": 43,
        "questionText": "What will come next in the following series: ACDB ?",
        "options": ["CFED", "BDEC", "DFGE", "EGHF"],
        "correctAnswer": "CFED"
    },
    {
        "id": 44,
        "questionText": "What will come next in the following series: A C E G ?",
        "options": ["H", "K", "I", "M"],
        "correctAnswer": "I"
    },
    {
        "id": 45,
        "questionText": "What will come next in the following series: A D G J ?",
        "options": ["N", "T", "M", "V"],
        "correctAnswer": "M"
    },
    {
        "id": 46,
        "questionText": "What will come next in the following series: M J G D ?",
        "options": ["E", "B", "C", "A"],
        "correctAnswer": "A"
    },
    {
        "id": 47,
        "questionText": "What will come next in the following series: I G E ?",
        "options": ["B", "C", "D", "A"],
        "correctAnswer": "C"
    },
    {
        "id": 48,
        "questionText": "What will come next in the following series: S Q O M ?",
        "options": ["L", "P", "K", "R"],
        "correctAnswer": "K"
    },
    {
        "id": 49,
        "questionText": "What will come next in the following series: A C B D F ?",
        "options": ["K", "F", "E", "G"],
        "correctAnswer": "E"
    },
    {
        "id": 50,
        "questionText": "What will come next in the following series: A D B E C ?",
        "options": ["A", "E", "F", "G"],
        "correctAnswer": "F"
    },
    {
        "id": 51,
        "questionText": "What will come next in the following series: J F E ?",
        "options": ["J", "F", "E", "H"],
        "correctAnswer": "J"
    },
    {
        "id": 52,
        "questionText": "What will come next in the following series: B D F H ?",
        "options": ["J", "K", "L", "M"],
        "correctAnswer": "J"
    },
    {
        "id": 53,
        "questionText": "What will come next in the following series: B C D C D E D ?",
        "options": ["G", "J", "E", "H"],
        "correctAnswer": "E"
    },
    {
        "id": 54,
        "questionText": "What will come next in the following series: B B C BCC D D ?",
        "options": ["DDC", "DC", "CDD", "E"],
        "correctAnswer": "E"
    },
    {
        "id": 55,
        "questionText": "What will come next in the following series: K M O Q ?",
        "options": ["S", "T", "U", "V"],
        "correctAnswer": "S"
    },
    {
        "id": 56,
        "questionText": "What will come next in the following series: F FGE E EFD D ?",
        "options": ["BDDC", "DBC", "DCE", "DEC"],
        "correctAnswer": "DEC"
    },
    {
        "id": 57,
        "questionText": "What will come next in the following series: K L KL N M ?",
        "options": ["NM", "MN", "KLM", "LK"],
        "correctAnswer": "NM"
    },
    {
        "id": 58,
        "questionText": "What will come next in the following series: A/AC B/BC C/CC ?",
        "options": ["D/CD", "D/DC", "D/CC", "E/DC"],
        "correctAnswer": "D/DC"
    },
    {
        "id": 59,
        "questionText": "What will come next in the following series: A/CB B/DC E/CD ?",
        "options": ["D/FE", "A/DC", "C/FD", "C/DE"],
        "correctAnswer": "C/DE"
    },
    {
        "id": 60,
        "questionText": "What will come next in the following series: ABC GHI MNO ?",
        "options": ["STV", "VWX", "STU", "PQR"],
        "correctAnswer": "STU"
    },
    {
        "id": 61,
        "questionText": "What will come next in the following series: B C D C D E ?",
        "options": ["E", "EF", "ED", "D"],
        "correctAnswer": "D"
    },
    {
        "id": 62,
        "questionText": "What will come next in the following series: Y X W V ?",
        "options": ["W", "U", "O", "Z"],
        "correctAnswer": "U"
    },
    {
        "id": 63,
        "questionText": "What will come next in the following series: NO QR TU ?",
        "options": ["P S", "S P", "T U", "WX"],
        "correctAnswer": "WX"
    },
    {
        "id": 64,
        "questionText": "What will come next in the following series: X W V T ?",
        "options": ["Y", "Z", "U", "R"],
        "correctAnswer": "U"
    },
    {
        "id": 65,
        "questionText": "What will come next in the following series: A Z B Y C ?",
        "options": ["Y C", "X C", "X Y", "X"],
        "correctAnswer": "X"
    },
    {
        "id": 66,
        "questionText": "What will come next in the following series: A C F J ?",
        "options": ["U", "W", "V", "O"],
        "correctAnswer": "O"
    },
    {
        "id": 67,
        "questionText": "What will come next in the following series: W V U S ?",
        "options": ["T", "V", "W", "R"],
        "correctAnswer": "T"
    },
    {
        "id": 68,
        "questionText": "What will come next in the following series: AB C DE F GH I ?",
        "options": ["J", "JK", "K", "MN"],
        "correctAnswer": "J"
    },
    {
        "id": 69,
        "questionText": "What will come next in the following series: T U V W ?",
        "options": ["R", "S", "V", "X"],
        "correctAnswer": "X"
    },
    {
        "id": 70,
        "questionText": "What will come next in the following series: C F J O ?",
        "options": ["O", "Q", "U", "N"],
        "correctAnswer": "U"
    },
    {
        "id": 71,
        "questionText": "What will come next in the following series: F F G H H I ?",
        "options": ["LK", "JK", "KL", "JJ"],
        "correctAnswer": "JJ"
    },
    {
        "id": 72,
        "questionText": "What will come next in the following series: A C F J ?",
        "options": ["N", "M", "O", "P"],
        "correctAnswer": "O"
    },
    {
        "id": 73,
        "questionText": "What will come next in the following series: A B Z C D Y E F ?",
        "options": ["V", "X", "G", "W"],
        "correctAnswer": "X"
    },
    {
        "id": 74,
        "questionText": "What will come next in the following series: A B C D D E F G ?",
        "options": ["H", "G", "I", "K"],
        "correctAnswer": "G"
    },
    {
        "id": 75,
        "questionText": "What will come next in the following series: S T T U U V ?",
        "options": ["V", "W", "X", "U"],
        "correctAnswer": "V"
    },
    {
        "id": 76,
        "questionText": "What will come next in the following series: K L M L M N M N ?",
        "options": ["D", "P", "O", "M"],
        "correctAnswer": "O"
    },
    {
        "id": 77,
        "questionText": "What will come next in the following series: U T S T S R S R ?",
        "options": ["R", "Q", "V", "S"],
        "correctAnswer": "Q"
    },
    {
        "id": 78,
        "questionText": "What will come next in the following series: C E G E G I ?",
        "options": ["J", "I", "K", "G"],
        "correctAnswer": "G"
    },
    {
        "id": 79,
        "questionText": "What will come next in the following series: S T U V T U V W U V ?",
        "options": ["X W", "X Y", "W X", "T U"],
        "correctAnswer": "W X"
    },
    {
        "id": 80,
        "questionText": "What will come next in the following series: EF FG GH HI ?",
        "options": ["II", "JK", "IJ", "KI"],
        "correctAnswer": "IJ"
    },
    {
        "id": 81,
        "questionText": "What will come next in the following series: A Z B Y ?",
        "options": ["CX", "DT", "V", "VS"],
        "correctAnswer": "CX"
    },
    {
        "id": 82,
        "questionText": "What will come next in the following series: A B D E G H ?",
        "options": ["W", "J", "E", "U"],
        "correctAnswer": "J"
    },
    {
        "id": 83,
        "questionText": "What will come next in the following series: W U S Q O ?",
        "options": ["O", "M", "N", "W"],
        "correctAnswer": "M"
    },
    {
        "id": 84,
        "questionText": "What will come next in the following series: B E F G J K ?",
        "options": ["P", "O", "M", "L"],
        "correctAnswer": "L"
    },
    {
        "id": 85,
        "questionText": "What will come next in the following series: AB DC EF HG?",
        "options": ["I", "V", "W", "IJ"],
        "correctAnswer": "IJ"
    },
    {
        "id": 86,
        "questionText": "What will come next in the following series: D F I M R ?",
        "options": ["W", "X", "V", "Y"],
        "correctAnswer": "X"
    },
    {
        "id": 87,
        "questionText": "What will come next in the following series: B E I ?",
        "options": ["M", "W", "N", "Z"],
        "correctAnswer": "N"
    },
    {
        "id": 88,
        "questionText": "What will come next in the following series: A B D G ?",
        "options": ["K", "L", "M", "N"],
        "correctAnswer": "K"
    },
    {
        "id": 89,
        "questionText": "Meat is to Vegetarians as ... is to Teetotaler?",
        "options": ["Vegetable", "Fruit", "Liquor", "Mutton"],
        "correctAnswer": "Liquor"
    },
    {
        "id": 90,
        "questionText": "Wag is to Dullard as Idiot is to .?",
        "options": ["Healthy", "Heartily", "Foolish", "Clever"],
        "correctAnswer": "Clever"
    },
    {
        "id": 91,
        "questionText": "Finger is to Elbow as Toe is to............... ?",
        "options": ["Arm", "Ankle", "Foot", "Knee"],
        "correctAnswer": "Knee"
    },
    {
        "id": 92,
        "questionText": "Essence is to flower as............... is to oven ?",
        "options": ["Heat", "Vapour", "Steam", "Ice"],
        "correctAnswer": "Heat"
    },
    {
        "id": 93,
        "questionText": "Free is to Imprison as Forgive is to............... ?",
        "options": ["Accept", "Condemn", "Accuse", "Punish"],
        "correctAnswer": "Punish"
    },
    {
        "id": 94,
        "questionText": "Fly is to Aeroplane as Sail is to............... ?",
        "options": ["Ship", "Cabin0", "Sea", "Ocean"],
        "correctAnswer": "Ship"
    },
    {
        "id": 95,
        "questionText": "Aircraft is to Air as Hovercraft is to............... ?",
        "options": ["Space", "Steam", "Jungle", "Sea"],
        "correctAnswer": "Sea"
    },
    {
        "id": 96,
        "questionText": "House is to Human as Nest is to................ ?",
        "options": ["Birds", "Animals", "Kids", "Elders"],
        "correctAnswer": "Birds"
    },
    {
        "id": 97,
        "questionText": "Water is to Flow as Air is to................ ?",
        "options": ["Carry", "Rage", "Drive", "Blow"],
        "correctAnswer": "Blow"
    },
    {
        "id": 98,
        "questionText": "Train is to Truck as Car is to................ ?",
        "options": ["Jungle", "Road", "Wheels", "Oil"],
        "correctAnswer": "Road"
    },
    {
        "id": 99,
        "questionText": "Kitten is Cat as Cub is to................ ?",
        "options": ["Monkey", "Cow", "Goat", "Leopard"],
        "correctAnswer": "Leopard"
    },
    {
        "id": 100,
        "questionText": "Pension is to Retirement as Pay is to................ ?",
        "options": ["Old age", "Employment", "Deployment", "Hardwork"],
        "correctAnswer": "Employment"
    },
    {
        "id": 101,
        "questionText": "Neck is Head as Foot is to................ ?",
        "options": ["Hairs", "Arms", "Legs", "Body"],
        "correctAnswer": "Legs"
    },
    {
        "id": 102,
        "questionText": "Earth is to Sun as Moon is to................ ?",
        "options": ["Earth", "Venus", "Space", "Stars"],
        "correctAnswer": "Earth"
    },
    {
        "id": 103,
        "questionText": "Lamb is to Sheep as Calf is to................. ?",
        "options": ["Cow", "Sheep", "Dog", "Zebra"],
        "correctAnswer": "Cow"
    },
    {
        "id": 104,
        "questionText": "But is to Tub as Tar is to................ ?",
        "options": ["Rat", "Atr", "Tra", "Tar"],
        "correctAnswer": "Rat"
    },
    {
        "id": 105,
        "questionText": "Botany is to Birds as Zoology is to................ ?",
        "options": ["Zoo", "Bee", "Flower", "Teacher"],
        "correctAnswer": "Zoo"
    },
    {
        "id": 106,
        "questionText": "Fan is to Air as Bulb is to................ ?",
        "options": ["Light", "Heat", "Electricity", "Glass"],
        "correctAnswer": "Light"
    },
    {
        "id": 107,
        "questionText": "Fan is to Electricity as Engine is to................ ?",
        "options": ["Drive", "Car", "Water", "Fuel"],
        "correctAnswer": "Fuel"
    },
    {
        "id": 108,
        "questionText": "Skype is to Talk as Youtube is to............... ?",
        "options": ["Play", "Watch", "Listen", "Eat"],
        "correctAnswer": "Watch"
    },
    {
        "id": 109,
        "questionText": "Shop is to Shop as Park is to.............. ?",
        "options": ["School", "Visit", "Picnic", "Drive"],
        "correctAnswer": "Visit"
    },
    {
        "id": 110,
        "questionText": "Car is to Drive as Horse is to................ ?",
        "options": ["Ride", "Buy", "Run", "Drive"],
        "correctAnswer": "Ride"
    },
    {
        "id": 111,
        "questionText": "Trunk is to Tree as Base is to................ ?",
        "options": ["Ground", "Earth", "Building", "Sky"],
        "correctAnswer": "Building"
    },
    {
        "id": 112,
        "questionText": "Carpet is to floor as grass is to................ ?",
        "options": ["Green", "Lawn", "Earth", "Sea"],
        "correctAnswer": "Lawn"
    },
    {
        "id": 113,
        "questionText": "Leaves are to Tree as Bee are to................ ?",
        "options": ["House", "Hive", "Fly", "Brick"],
        "correctAnswer": "Hive"
    },
    {
        "id": 114,
        "questionText": "Picture is to Tv as Sound is to................ ?",
        "options": ["Speaker", "Vocal Cords", "Air", "Radio"],
        "correctAnswer": "Radio"
    },
    {
        "id": 115,
        "questionText": "Foot is to Kick as Fist is to................ ?",
        "options": ["Catch", "Grip", "Figures", "Punch"],
        "correctAnswer": "Punch"
    },
    {
        "id": 116,
        "questionText": "Brazil is to South American as Egypt is to...............?",
        "options": ["Arabia", "Africa", "Europe", "Asia"],
        "correctAnswer": "Africa"
    },
    {
        "id": 117,
        "questionText": "Chimney is to Smoke as Pipe is to................ ?",
        "options": ["Water", "Plastic", "Air", "Iron"],
        "correctAnswer": "Water"
    },
    {
        "id": 118,
        "questionText": "Pressure is to Force as Brawn is to................ ?",
        "options": ["Happiness", "Strength", "Water", "Weakness"],
        "correctAnswer": "Strength"
    },
    {
        "id": 119,
        "questionText": "Belt is to Waist as Lace is to................ ?",
        "options": ["Shoe", "Shock", "Foot", "Tie"],
        "correctAnswer": "Shoe"
    },
    {
        "id": 120,
        "questionText": "Bed is to Sleep as Chair is to............... ?",
        "options": ["Sleep", "sit", "Place", "Pick"],
        "correctAnswer": "sit"
    },
    {
        "id": 121,
        "questionText": "Clothes is to Soap as Computer is to................ ?",
        "options": ["Hard-disc", "Window", "Anti-virus", "Software"],
        "correctAnswer": "Anti-virus"
    },
    {
        "id": 122,
        "questionText": "Car is to Steering as Horse is to................ ?",
        "options": ["Nails", "Saddle", "Riding", "Ring"],
        "correctAnswer": "Saddle"
    },
    {
        "id": 123,
        "questionText": "Reading is to Mind as Eating is to................ ?",
        "options": ["Stomach", "Belly", "Tummy", "Heart"],
        "correctAnswer": "Stomach"
    },
    {
        "id": 124,
        "questionText": "Water is to tank as charge is to................ ?",
        "options": ["Bulb", "Wire", "Battery", "Transformer"],
        "correctAnswer": "Battery"
    },
    {
        "id": 125,
        "questionText": "Zebra is to Herd as Pigeon is to................ ?",
        "options": ["Crowd", "Cluster", "Flock", "Group"],
        "correctAnswer": "Flock"
    },
    {
        "id": 126,
        "questionText": "Reading is to Books as Eating is to................ ?",
        "options": ["Gases", "Foodstuff", "Liquids", "Fruits"],
        "correctAnswer": "Foodstuff"
    },
    {
        "id": 127,
        "questionText": "Blinking is to Stars as Shrinking is to................ ?",
        "options": ["Paper", "Star", "Cloth", "Moon"],
        "correctAnswer": "Cloth"
    },
    {
        "id": 128,
        "questionText": "Thinking is to Mind as Linking is to................ ?",
        "options": ["Web", "Fruits", "Tree", "Spider"],
        "correctAnswer": "Web"
    },
    {
        "id": 129,
        "questionText": "Head is to Cap as Finger is to................. ?",
        "options": ["Nail", "Ring", "Thumb", "Helmet"],
        "correctAnswer": "Ring"
    },
    {
        "id": 130,
        "questionText": "Drama is to Director as Magazine is to................. ?",
        "options": ["Printer", "Publisher", "Editor", "Reader"],
        "correctAnswer": "Editor"
    },
    {
        "id": 131,
        "questionText": "Argument is to Debate as Fight is to................ ?",
        "options": ["Contest", "Quarrel", "Friendship", "Controversy"],
        "correctAnswer": "Quarrel"
    },
    {
        "id": 132,
        "questionText": "Water is to Dam as Trade is to................. ?",
        "options": ["Money", "Goods", "Commerce", "Shipping"],
        "correctAnswer": "Commerce"
    },
    {
        "id": 133,
        "questionText": "Birds is to Feather as Cat is to.................. ?",
        "options": ["Paws", "Fur", "Feet", "Hair"],
        "correctAnswer": "Fur"
    },
    {
        "id": 134,
        "questionText": "Year is to Month as Week is to.................. ?",
        "options": ["Day", "Hours", "Minutes", "Fortnight"],
        "correctAnswer": "Day"
    },
    {
        "id": 135,
        "questionText": "Food is to Growth as Knowledge is to.................. ?",
        "options": ["Wealth", "Peace", "Wisdom", "Happiness"],
        "correctAnswer": "Wisdom"
    },
    {
        "id": 136,
        "questionText": "Handsome is to Beautiful as He is to..................?",
        "options": ["Lovely", "Girls", "Charming", "She"],
        "correctAnswer": "She"
    },
    {
        "id": 137,
        "questionText": "Success is to Hard work as Failure is to................. ?",
        "options": ["Industry", "Roaming", "Laziness", "Waste of time"],
        "correctAnswer": "Laziness"
    },
    {
        "id": 138,
        "questionText": "Poor is to Rich as Pauper is to.................. ?",
        "options": ["Wealthy", "Brave", "Multi-Millionaire", "Solider"],
        "correctAnswer": "Multi-Millionaire"
    },
    {
        "id": 139,
        "questionText": "Gold is to Ornaments as Wood is to................. ?",
        "options": ["Chair", "Table", "Furniture", "Decoration"],
        "correctAnswer": "Furniture"
    },
    {
        "id": 140,
        "questionText": "Statute is to Shape as Song is to................. ?",
        "options": ["Words", "Melody", "Beauty", "Tune"],
        "correctAnswer": "Tune"
    },
    {
        "id": 141,
        "questionText": "Listen is to Hear as look as to.................. ?",
        "options": ["Watch", "Observe", "See", "Notice"],
        "correctAnswer": "See"
    },
    {
        "id": 142,
        "questionText": "Time is to Watch as Pressure is to................. ?",
        "options": ["Barometer", "Thermometer", "Lactometer", "Hydrometer"],
        "correctAnswer": "Barometer"
    },
    {
        "id": 143,
        "questionText": "Coal is to Engine as Wax is to................. ?",
        "options": ["Lamp", "Candle", "Bulb", "Thread"],
        "correctAnswer": "Candle"
    },
    {
        "id": 144,
        "questionText": "Blindness is to Eye as Deafness is to................. ?",
        "options": ["Brain", "Head", "Ear", "Noise"],
        "correctAnswer": "Ear"
    },
    {
        "id": 145,
        "questionText": "Food is to Eat as Water is to..................?",
        "options": ["Dirt", "Drink", "Fire", "Wash"],
        "correctAnswer": "Drink"
    },
    {
        "id": 146,
        "questionText": "Carpenter is to Wood as Tailor is to.................. ?",
        "options": ["Ship", "Shop", "Cloth", "Machine"],
        "correctAnswer": "Cloth"
    },
    {
        "id": 147,
        "questionText": "Road is to Car as Sea is to.................. ?",
        "options": ["Cart", "Cycle", "Ship", "Boat"],
        "correctAnswer": "Ship"
    },
    {
        "id": 148,
        "questionText": "Limb is to Body as Branch is to..................?",
        "options": ["Building", "Tree", "Garden", "Grass"],
        "correctAnswer": "Tree"
    },
    {
        "id": 149,
        "questionText": "General is to Solider as Admiral is to.................. ?",
        "options": ["Caption", "Sailor", "Master", "Player"],
        "correctAnswer": "Sailor"
    },
    {
        "id": 150,
        "questionText": "Ice is to Melt as Water is to.................. ?",
        "options": ["Dry", "Wash", "Evaporate", "Flow"],
        "correctAnswer": "Evaporate"
    },
    {
        "id": 151,
        "questionText": "Milk is to White as Sky is to.................. ?",
        "options": ["Red", "Blue", "Green", "Black"],
        "correctAnswer": "Blue"
    },
    {
        "id": 152,
        "questionText": "Boot is to Foot as Glove is to................ ?",
        "options": ["Wool", "Hand", "Cotton", "Cloth"],
        "correctAnswer": "Hand"
    },
    {
        "id": 153,
        "questionText": "Cow is to Calf as Mother is to................. ?",
        "options": ["Sister", "Son", "Daughter", "Husband"],
        "correctAnswer": "Son"
    },
    {
        "id": 154,
        "questionText": "Teacher is to Student as Doctor is to................. ?",
        "options": ["Patient", "Hospital", "Drug", "Medicine"],
        "correctAnswer": "Patient"
    },
    {
        "id": 155,
        "questionText": "Rich is to Poor as Healthy is to................. ?",
        "options": ["Weight", "Height", "Sick", "Stout"],
        "correctAnswer": "Sick"
    },
    {
        "id": 156,
        "questionText": "Bird is to Nest as Horse is to..................?",
        "options": ["Mare", "Ride", "Tanga", "Stable"],
        "correctAnswer": "Stable"
    },
    {
        "id": 157,
        "questionText": "Petal is to Flower as Arm is to.................. ?",
        "options": ["Toe", "Body", "Skin", "Hand"],
        "correctAnswer": "Body"
    },
    {
        "id": 158,
        "questionText": "Health is to Sickness as Happiness is to.................. ?",
        "options": ["Sadness", "Cheerfulness", "Sweetness", "Well-being"],
        "correctAnswer": "Sadness"
    },
    {
        "id": 159,
        "questionText": "Refrigerator is to Cool as Oven is to................. ?",
        "options": ["Bake", "Heat", "Warm", "Cook"],
        "correctAnswer": "Heat"
    },
    {
        "id": 160,
        "questionText": "Zoo is to Animal as Aquarium is to..................?",
        "options": ["Birds", "Animals", "Fishes", "Horses"],
        "correctAnswer": "Fishes"
    },
    {
        "id": 161,
        "questionText": "Philosophy is to Philosopher as Physic is to.................. ?",
        "options": ["Physique", "Physicist", "Psychologist", "Physical"],
        "correctAnswer": "Physicist"
    },
    {
        "id": 162,
        "questionText": "Paper is to Book as Brick is to.................. ?",
        "options": ["Building", "Cement", "Ground", "Mason"],
        "correctAnswer": "Building"
    },
    {
        "id": 163,
        "questionText": "Mare is to Horse Bitch is to..................?",
        "options": ["Ox", "Dog", "Pig", "Bear"],
        "correctAnswer": "Dog"
    },
    {
        "id": 164,
        "questionText": "Escort is to Visitor as Guide is to................... ?",
        "options": ["Film", "Child", "Tourist", "Students"],
        "correctAnswer": "Tourist"
    },
    {
        "id": 165,
        "questionText": "Flower is to Butterfly as Dirt is to..................?",
        "options": ["Mosquito", "Fly", "Bugs", "Rats"],
        "correctAnswer": "Fly"
    },
    {
        "id": 166,
        "questionText": "Hot is to Steam as Cold is to...................?",
        "options": ["Snow", "Ice", "Weather", "Ice – Cream"],
        "correctAnswer": "Ice"
    },
    {
        "id": 167,
        "questionText": "Dog is to Bark as Cat is to................. ?",
        "options": ["Bray", "Mice", "Mew", "Cry"],
        "correctAnswer": "Mew"
    },
    {
        "id": 168,
        "questionText": "Foot is to Walk as Nose is to...................?",
        "options": ["Breath", "Smell", "Work", "Taste"],
        "correctAnswer": "Smell"
    },
    {
        "id": 169,
        "questionText": "Fan is to Cool as Heater is to................. ?",
        "options": ["Heat", "Warm", "Electricity", "Light"],
        "correctAnswer": "Warm"
    },
    {
        "id": 170,
        "questionText": "Man is to Walk as Train is to................. ?",
        "options": ["Run", "Track", "Move", "Transport"],
        "correctAnswer": "Run"
    },
    {
        "id": 171,
        "questionText": "Mountain is to Cold as Plain is to................. ?",
        "options": ["Summer", "Winter", "Steam", "Hot"],
        "correctAnswer": "Hot"
    },
    {
        "id": 172,
        "questionText": "Apple is to Banana as Carrot is to................. ?",
        "options": ["Radish", "Peach", "Bean", "Date"],
        "correctAnswer": "Radish"
    },
    {
        "id": 173,
        "questionText": "Bismarck is to Disraeli as Hastings is to................. ?",
        "options": ["Clive", "Washington", "Jeffreys", "Duplex"],
        "correctAnswer": "Clive"
    },
    {
        "id": 174,
        "questionText": "High is to Low as Up is to................ ?",
        "options": ["Above", "Down", "Below", "Surface"],
        "correctAnswer": "Down"
    },
    {
        "id": 175,
        "questionText": "Blub is to Light as Pen is to................. ?",
        "options": ["Write", "Pencil", "Ink", "Paper"],
        "correctAnswer": "Write"
    },
    {
        "id": 176,
        "questionText": "Hot is to Bold as Aliment is to................. ?",
        "options": ["Hard", "Yielding", "Shift", "Dull"],
        "correctAnswer": "Yielding"
    },
    {
        "id": 177,
        "questionText": "Lion is to Cage as Man is to................. ?",
        "options": ["Marriage", "Jail", "Woman", "Child"],
        "correctAnswer": "Jail"
    },
    {
        "id": 178,
        "questionText": "Accept is to Reject as Work is to................. ?",
        "options": ["Rest", "Play", "Eat", "Sleep"],
        "correctAnswer": "Rest"
    },
    {
        "id": 179,
        "questionText": "God is to Immortal as Man is to................. ?",
        "options": ["Woman", "Mortal", "Life", "Death"],
        "correctAnswer": "Mortal"
    },
    {
        "id": 180,
        "questionText": "Noise is to Breath as Mouth is to................ ?",
        "options": ["Water", "Food", "Eat", "Drink"],
        "correctAnswer": "Eat"
    },
    {
        "id": 181,
        "questionText": "Food is to Eating as Newspaper is to................ ?",
        "options": ["Paper", "Print", "Reading", "Sale"],
        "correctAnswer": "Reading"
    },
    {
        "id": 182,
        "questionText": "Hard-work is to Success as Treatment is to................. ?",
        "options": ["Disease", "Medicine", "Cure", "Curb"],
        "correctAnswer": "Cure"
    },
    {
        "id": 183,
        "questionText": "Honey is to Bee as Milk is to................. ?",
        "options": ["White", "Healthy", "Cow", "Pack"],
        "correctAnswer": "Cow"
    },
    {
        "id": 184,
        "questionText": "Pen is to Write as Needle is to................ ?",
        "options": ["Cloth", "Sew", "Match", "Join"],
        "correctAnswer": "Sew"
    },
    {
        "id": 185,
        "questionText": "Much is to More as Little is to................. ?",
        "options": ["Low", "Less", "Below", "Down"],
        "correctAnswer": "Less"
    },
    {
        "id": 186,
        "questionText": "Fair is to Fare as Hair is to................ ?",
        "options": ["Hair", "Dare", "Hare", "Heir"],
        "correctAnswer": "Hare"
    },
    {
        "id": 187,
        "questionText": "Tac is to Cat as Tar is to................. ?",
        "options": ["Rat", "Tore", "More", "Roar"],
        "correctAnswer": "Rat"
    },
    {
        "id": 188,
        "questionText": "Admission is to Admit as Blood is to................ ?",
        "options": ["Bleed", "Bleeding", "Blood-thirsty", "Blood-Comes"],
        "correctAnswer": "Bleed"
    },
    {
        "id": 189,
        "questionText": "Pencil is to write as Knife is to................ ?",
        "options": ["Cut", "Sharp", "Steel", "Wood"],
        "correctAnswer": "Cut"
    },
    {
        "id": 190,
        "questionText": "Paddy is to Kharif as Wheat is to................ ?",
        "options": ["Summer", "Winter", "Rainfall", "Rabi"],
        "correctAnswer": "Rabi"
    },
    {
        "id": 191,
        "questionText": "Snow is to Mountain as Crown is to................. ?",
        "options": ["Peacock", "King", "Man", "Peak"],
        "correctAnswer": "King"
    },
    {
        "id": 192,
        "questionText": "Water is to Well as Coal is to................ ?",
        "options": ["Miner", "Hill", "Mine", "Pit"],
        "correctAnswer": "Mine"
    },
    {
        "id": 193,
        "questionText": "Birds is to Aves as Man is to................. ?",
        "options": ["Lizards", "Homo-Sapien", "Apes", "Mammals"],
        "correctAnswer": "Homo-Sapien"
    },
    {
        "id": 194,
        "questionText": "Architect is to Buildings as Gold-Smith is to................ ?",
        "options": ["Gold", "Sliver", "Jewellery", "Iron"],
        "correctAnswer": "Jewellery"
    },
    {
        "id": 195,
        "questionText": "Under is to Below as Apex is to................. ?",
        "options": ["Top", "Middle", "Above", "High"],
        "correctAnswer": "Top"
    },
    {
        "id": 196,
        "questionText": "Smoke is to Pollution as War is to................. ?",
        "options": ["Defeat", "Victory", "Death", "Army"],
        "correctAnswer": "Death"
    },
    {
        "id": 197,
        "questionText": "Saw is to Seed as Reap is to.................. ?",
        "options": ["Rain", "Grain", "Sunshine", "Crop"],
        "correctAnswer": "Grain"
    },
    {
        "id": 198,
        "questionText": "Single is to Double as One is to..................?",
        "options": ["Ten", "Three", "Five", "Twice"],
        "correctAnswer": "Twice"
    },
    {
        "id": 199,
        "questionText": "Fish is to Swimming as Snake is to................. ?",
        "options": ["Jump", "Puppy", "Running", "Crawling"],
        "correctAnswer": "Crawling"
    },
    {
        "id": 200,
        "questionText": "Book is to Title as Man is to..................?",
        "options": ["Sir", "Woman", "Name", "She"],
        "correctAnswer": "Name"
    },
    {
        "id": 201,
        "questionText": "Gun is to Solider as Camera is to................ ?",
        "options": ["Picture", "Photo", "Scene", "Photographer"],
        "correctAnswer": "Photographer"
    },
    {
        "id": 202,
        "questionText": "Shoe is to Foot as Helmet is to.................. ?",
        "options": ["Steal", "Head", "Combat", "Baseball"],
        "correctAnswer": "Head"
    },
    {
        "id": 203,
        "questionText": "Saw is to Cut as Iron is to..................?",
        "options": ["Metal", "Hard", "Press", "Hot"],
        "correctAnswer": "Press"
    },
    {
        "id": 204,
        "questionText": "Ring is to Finger as Watch is to................ ?",
        "options": ["Wrist", "Head", "Arm", "Time"],
        "correctAnswer": "Wrist"
    },
    {
        "id": 205,
        "questionText": "Brush is to Painting as Pencil is to................. ?",
        "options": ["Map", "Sketch", "Drawing", "Notebook"],
        "correctAnswer": "Sketch"
    },
    {
        "id": 206,
        "questionText": "Good is to Better as Bad is to................. ?",
        "options": ["Bedder", "Worst", "Worse", "Best"],
        "correctAnswer": "Worse"
    },
    {
        "id": 207,
        "questionText": "Woman is to Man as Boy is to................ ?",
        "options": ["Brother", "Father", "Girl", "Cousin"],
        "correctAnswer": "Girl"
    },
    {
        "id": 208,
        "questionText": "Son is to Father as Nephew is to.................. ?",
        "options": ["Uncle", "Aunty", "Cousin", "Brother"],
        "correctAnswer": "Uncle"
    },
    {
        "id": 209,
        "questionText": "Confess is to Deny as Release is to................. ?",
        "options": ["Catnip", "Punish", "Arrest", "Run"],
        "correctAnswer": "Arrest"
    },
    {
        "id": 210,
        "questionText": "Mountain is to High as Train is to.................. ?",
        "options": ["Heavy", "Big", "Long", "Tall"],
        "correctAnswer": "Long"
    },
    {
        "id": 211,
        "questionText": "Nib is to Pen as Blade is to..................?",
        "options": ["Razor", "Knife", "Sharpener", "Steel"],
        "correctAnswer": "Razor"
    },
    {
        "id": 212,
        "questionText": "Arce is to Kanal as Square is to................ ?",
        "options": ["Arce", "Karam", "Mile", "Foot"],
        "correctAnswer": "Foot"
    },
    {
        "id": 213,
        "questionText": "Near is to Far as Close is to................. ?",
        "options": ["Open", "Bring", "Door", "Away"],
        "correctAnswer": "Open"
    },
    {
        "id": 214,
        "questionText": "Engine is to Car as Cell is to................ ?",
        "options": ["Torch", "Candle", "Bicycle", "Camera"],
        "correctAnswer": "Torch"
    },
    {
        "id": 215,
        "questionText": "Hear is to ear as Chew is to.................. ?",
        "options": ["Tongue", "Sweet", "Teeth", "Toffee"],
        "correctAnswer": "Teeth"
    },
    {
        "id": 216,
        "questionText": "Brass is to Metal as Sparrow is to................ ?",
        "options": ["Animal", "Bird", "Wings", "Fly"],
        "correctAnswer": "Bird"
    },
    {
        "id": 217,
        "questionText": "Inch is to Finger as Foot is to.................. ?",
        "options": ["Hand", "Leg", "Arm", "Body"],
        "correctAnswer": "Leg"
    },
    {
        "id": 218,
        "questionText": "Milk is to White as Grass is to................ ?",
        "options": ["Orange", "Black", "Green", "Blue"],
        "correctAnswer": "Green"
    },
    {
        "id": 219,
        "questionText": "Dawn is to Dusk as Morning is to................ ?",
        "options": ["Night", "Evening", "Sunset", "Dark"],
        "correctAnswer": "Evening"
    },
    {
        "id": 220,
        "questionText": "Bread : Cake as................ ?",
        "options": ["Pot : Pan", "Poverty : Riches", "Wheat : Chaff", "Shirt : Tie"],
        "correctAnswer": "Pot : Pan"
    },
    {
        "id": 221,
        "questionText": "Lahore : Punjab as................ ?",
        "options": ["Pakistan : Hyderabad", "Peshawar : KPK", "Pakistan : Karachi", "Sindh : Jamshoro"],
        "correctAnswer": "Peshawar : KPK"
    },
    {
        "id": 222,
        "questionText": "Blacksmith : Hammer as................ ?",
        "options": ["Solider : Gun", "Carpenter : Saw", "Merchant : Scales", "Clerk : Files"],
        "correctAnswer": "Carpenter : Saw"
    },
    {
        "id": 223,
        "questionText": "Barometer : Hydrometer as................ ?",
        "options": ["Mercury : Water", "Cloudy : Sultry", "Pressure : Humidity", "Rain : Snow"],
        "correctAnswer": "Pressure : Humidity"
    },
    {
        "id": 224,
        "questionText": "Marriage : Celebrate as................ ?",
        "options": ["Defeat : Failure", "Gloom : Despair", "Punish : Lament", "Condone : Punish"],
        "correctAnswer": "Gloom : Despair"
    },
    {
        "id": 225,
        "questionText": "January : Winter as................ ?",
        "options": ["Spring : September", "February : Autumn", "Summer : June", "June : Summer"],
        "correctAnswer": "June : Summer"
    },
    {
        "id": 226,
        "questionText": "Family : Child as................ ?",
        "options": ["Pound : Dollar", "Bunch : Flower", "Pond : Fish", "Herd : Calf"],
        "correctAnswer": "Herd : Calf"
    },
    {
        "id": 227,
        "questionText": "Inexperience : Error as................ ?",
        "options": ["Carelessness : Lose", "Dispute : Settlement", "Case : Judgment", "Question: Ans"],
        "correctAnswer": "Carelessness : Lose"
    },
    {
        "id": 228,
        "questionText": "Problem : Hypothesis as................ ?",
        "options": ["Blunder : Unattention", "Frugality : Training", "Failure : Defeat", "Condition : React"],
        "correctAnswer": "Condition : React"
    },
    {
        "id": 229,
        "questionText": "Restrict : Encourage as............... ?",
        "options": ["Loss : Despair", "Close : Open", "Profit : Efforts", "End : Finish"],
        "correctAnswer": "Close : Open"
    },
    {
        "id": 230,
        "questionText": "Lawyer : Court as................ ?",
        "options": ["Business : Market", "Athletic : Olympics", "Laborer : Factory", "Cow : Herd"],
        "correctAnswer": "Laborer : Factory"
    },
    {
        "id": 231,
        "questionText": "Audacity: Impudence as............... ?",
        "options": ["Prologue : Epilogue", "Property : Tendency", "Master : Slave", "Slander : Libel"],
        "correctAnswer": "Slander : Libel"
    },
    {
        "id": 232,
        "questionText": "Brain : Neurology............... ?",
        "options": ["Body : Physiology", "Biology : Plants", "Botany : Animals", "Zoology : Birds"],
        "correctAnswer": "Body : Physiology"
    },
    {
        "id": 233,
        "questionText": "Mundane : Common as............... ?",
        "options": ["Car : Cycle", "Water : Oxygen", "Fear : Misfortune", "Laborer : Factory"],
        "correctAnswer": "Fear : Misfortune"
    },
    {
        "id": 234,
        "questionText": "Latitude : Longitude as................ ?",
        "options": ["Preamble : Postscript", "Fluctuate : Flout", "Length : Breadth", "Equator : Tropic"],
        "correctAnswer": "Length : Breadth"
    },
    {
        "id": 235,
        "questionText": "Dubious : Indisputable as................. ?",
        "options": ["Slander: Libel", "Painful : Helpful", "Avaricious: Generous", "Copious : Insufficient"],
        "correctAnswer": "Avaricious: Generous"
    },
    {
        "id": 236,
        "questionText": "Corpulent : Skinny as................ ?",
        "options": ["Fear : Misfortune", "Courage : Lion", "Genius : Intelligence", "Tea : Kettle"],
        "correctAnswer": "Fear : Misfortune"
    },
    {
        "id": 237,
        "questionText": "Dire : Grim as................ ?",
        "options": ["Punitive : Miniature", "Lead : Pencil", "Diabolic : Wicked", "Talking : Gossips"],
        "correctAnswer": "Diabolic : Wicked"
    },
    {
        "id": 238,
        "questionText": "Rotate : Gyrate as................ ?",
        "options": ["Accolade : Criticism", "Absolve : Exonerate", "Move : Freewheel", "Purity : Reject"],
        "correctAnswer": "Absolve : Exonerate"
    },
    {
        "id": 239,
        "questionText": "Correspondence : Clerk as................ ?",
        "options": ["Office : Manager", "Record : Archirist", "Audit : Press", "Condition : React"],
        "correctAnswer": "Record : Archirist"
    },
    {
        "id": 240,
        "questionText": "Picture : Frame as................ ?",
        "options": ["Book : Cover", "Cup : Saucer", "Radio : Recording", "Audit : Press"],
        "correctAnswer": "Book : Cover"
    },
    {
        "id": 241,
        "questionText": "Bacteria : Illness as................ ?",
        "options": ["Milk : Curd", "Bomb : Explosion", "Medicine : Cure", "Health : Illness"],
        "correctAnswer": "Bomb : Explosion"
    },
    {
        "id": 242,
        "questionText": "Room : House as................ ?",
        "options": ["Chair : Table", "Apartment : Building", "Refrigerator: Pot", "Road : City"],
        "correctAnswer": "Apartment : Building"
    },
    {
        "id": 243,
        "questionText": "Projectile : Trajectory as................ ?",
        "options": ["Bullet : Weapon", "Trade : Tariff", "Happiness : Birth", "Satellite : Orbit"],
        "correctAnswer": "Satellite : Orbit"
    },
    {
        "id": 244,
        "questionText": "Sorrow : Death as................ ?",
        "options": ["Laugh : Cry", "Fear : Night", "Happiness : Birth", "Hate : Smell"],
        "correctAnswer": "Happiness : Birth"
    },
    {
        "id": 245,
        "questionText": "Setting : Stone as................ ?",
        "options": ["Pen : Writing", "Socket : Bulb", "Picture : Frame", "Pendulum : Clock"],
        "correctAnswer": "Socket : Bulb"
    },
    {
        "id": 246,
        "questionText": "Debate : Soliloquy as................ ?",
        "options": ["Telephone : Dial", "Group : Hermit", "Crowd : Mob", "Remote : Cell"],
        "correctAnswer": "Group : Hermit"
    },
    {
        "id": 247,
        "questionText": "Tepid : Hot as................ ?",
        "options": ["Topic : Tumble", "Bring : Bang", "Pat : Slap", "Worm : Cold"],
        "correctAnswer": "Pat : Slap"
    },
    {
        "id": 248,
        "questionText": "Mace : Majesty as................ ?",
        "options": ["Book : Knowledge", "Diploma : Knowledge", "King : Queen", "Police Security"],
        "correctAnswer": "Book : Knowledge"
    },
    {
        "id": 249,
        "questionText": "Cloth : Texture as................ ?",
        "options": ["Wool : Terelene", "Linen : Flax", "Paper : Book", "Wool : Grain"],
        "correctAnswer": "Paper : Book"
    },
    {
        "id": 250,
        "questionText": "Forecast Happening as................ ?",
        "options": ["Disaster : Foretell", "Analyze : Problem", "Prophecy : Miracle", "Crowd : Mob"],
        "correctAnswer": "Prophecy : Miracle"
    },
    {
        "id": 251,
        "questionText": "Future : Hereafter as................ ?",
        "options": ["Next : Previous", "Tomorrow:Yesterday", "Prognosis : Diagnosis", "Present : Past"],
        "correctAnswer": "Prognosis : Diagnosis"
    },
    {
        "id": 252,
        "questionText": "Court : Justice as................ ?",
        "options": ["Nature : Creator", "Auditor : Accuracy", "Boss : Executive", "Doctor : Hospital"],
        "correctAnswer": "Auditor : Accuracy"
    },
    {
        "id": 253,
        "questionText": "School : Discipline as................ ?",
        "options": ["Marks : Examination", "Society : Conformity", "Fear : Danger", "Street : House"],
        "correctAnswer": "Society : Conformity"
    },
    {
        "id": 254,
        "questionText": "Modesty : Arrogance as................ ?",
        "options": ["Beauty : Honesty", "Woman : Child", "Cause : Effect", "Debility : Strength"],
        "correctAnswer": "Debility : Strength"
    },
    {
        "id": 255,
        "questionText": "Tadpole : Frog as................ ?",
        "options": ["Caterpillar : Butterfly", "Frog : Fish", "Husband : Wife", "Goose : Dog"],
        "correctAnswer": "Caterpillar : Butterfly"
    },
    {
        "id": 256,
        "questionText": "Octave : Binding as................ ?",
        "options": ["Pica : Printing", "Day : Week", "Rural : Farmer", "Book : Binding"],
        "correctAnswer": "Pica : Printing"
    },
    {
        "id": 257,
        "questionText": "Classic : Greece as................ ?",
        "options": ["Empire : Roman", "France : Italy", "Orthodox : Priest", "Cause : Effect"],
        "correctAnswer": "Empire : Roman"
    },
    {
        "id": 258,
        "questionText": "Famine : Hunger as................ ?",
        "options": ["Pessimism : Disorder", "Compound : Element", "Stupidity:Allurement", "Fall : Steam"],
        "correctAnswer": "Pessimism : Disorder"
    },
    {
        "id": 259,
        "questionText": "Fuel : Fire as................ ?",
        "options": ["Fire : Forest", "Cold : Heat", "Food : Man", "Wood : Tree"],
        "correctAnswer": "Food : Man"
    },
    {
        "id": 260,
        "questionText": "Hare : Tortoise as................ ?",
        "options": ["Truth : Lie", "Telegram : Letter", "Thesis : Essay", "Number : Words"],
        "correctAnswer": "Truth : Lie"
    },
    {
        "id": 261,
        "questionText": "Skeleton : Body as................ ?",
        "options": ["Letter : Content", "Printer : Press", "Jury : Law", "Law : Society"],
        "correctAnswer": "Law : Society"
    },
    {
        "id": 262,
        "questionText": "Lust : Sex as................ ?",
        "options": ["Friend : Foe", "Dark : Bright", "Lamp : Light", "Anger : Pugnacity"],
        "correctAnswer": "Anger : Pugnacity"
    },
    {
        "id": 263,
        "questionText": "Possess : Loss as................ ?",
        "options": ["Hesitate : Advance", "Continue : Desist", "Production : Supply", "Cease : Recur"],
        "correctAnswer": "Continue : Desist"
    },
    {
        "id": 264,
        "questionText": "Pup : Bitch as................ ?",
        "options": ["Pen : Pencil", "Kitten : Cat", "Ink : Inkpot", "Horse : Stable"],
        "correctAnswer": "Kitten : Cat"
    },
    {
        "id": 265,
        "questionText": "If GOLFER is coded as HNMEFQ then HUNGER is :",
        "options": ["ITOEFQ", "IVOHFS", "ITODFQ", "TIDOQF"],
        "correctAnswer": "IVOHFS"
    },
    {
        "id": 266,
        "questionText": "If GOLFER is coded as TLOUVI then POWER is.............. ?",
        "options": ["MNEVI", "CLOVI", "KLDVI", "FGHVI"],
        "correctAnswer": "CLOVI"
    },
    {
        "id": 267,
        "questionText": "If PLAYER is coded as EOJFCR then STUCK is.............. ?",
        "options": ["UTCWM", "UTWCM", "QTCIS", "QTSCI"],
        "correctAnswer": "UTWCM"
    },
    {
        "id": 268,
        "questionText": "If HIGHLIGHT is coded as GJFIKJFIS then LIMELIGHT is.............. ?",
        "options": ["KJKLKJFIS", "KLJFKJFIS", "KJLFKJFIS", "JKFLKJFIS"],
        "correctAnswer": "KJLFKJFIS"
    },
    {
        "id": 269,
        "questionText": "If SELFLESS is coded as SSELFLES then BROKEN is.............. ?",
        "options": ["KERBRO", "REBROK", "RBROKE", "ERBKOR"],
        "correctAnswer": "RBROKE"
    },
    {
        "id": 270,
        "questionText": "If PEKING is coded as ODJHME then SIDNEY is.............. ?",
        "options": ["THCMDX", "DINSEY", "NIDSEY", "YENCIS"],
        "correctAnswer": "NIDSEY"
    },
    {
        "id": 271,
        "questionText": "If LONDON is coded as MPOERO then DECIPHER is.............. ?",
        "options": ["QBSJT", "SPNF", "CFSMJO", "NPTDXP"],
        "correctAnswer": "CFSMJO"
    },
    {
        "id": 272,
        "questionText": "If RANGER is coded as REGNER then TABLE is.............. ?",
        "options": ["TABLE", "ELBAT", "TELBET", "TELBA"],
        "correctAnswer": "ELBAT"
    },
    {
        "id": 273,
        "questionText": "If LIFE is coded as IFCB then MERIT is.............. ?",
        "options": ["JBQFR", "JBOFR", "JBOFQ", "KBQFR"],
        "correctAnswer": "JBOFR"
    },
    {
        "id": 274,
        "questionText": "If LAWER is coded as IRPKKY then HRVHK is.............. ?",
        "options": ["FORTS", "FIRST", "FORCE", "FEWER"],
        "correctAnswer": "FIRST"
    },
    {
        "id": 275,
        "questionText": "If RETREAT is coded as TGVTGCV then CFXCPEG is.............. ?",
        "options": ["ADMARCH", "ATTARAT", "ADVANE", "BATAPUR"],
        "correctAnswer": "ATTARAT"
    },
    {
        "id": 276,
        "questionText": "If FOUR is to1234 and FIVE is to 1567 and TEN is to 879 then KNOWLEDGE is coded as........... ?",
        "options": ["134958347", "125849437", "134958347"],
        "correctAnswer": "125849437"
    },
    {
        "id": 277,
        "questionText": "If LACE is coded as 6543 and DEEP is coded as 2338 then PALACE is...............?",
        "options": ["586453", "685534", "856543", "384556"],
        "correctAnswer": "856543"
    },
    {
        "id": 278,
        "questionText": "If ADOLESCENT is coded as 3517298246 then 398246 is decoded as..............?",
        "options": ["ASCENT", "ASTENT", "ASCENT"],
        "correctAnswer": "ASCENT"
    },
    {
        "id": 279,
        "questionText": "If GLAD is coded as INCF then STRANGE is.............. ?",
        "options": ["UVTCPIG", "GIPCTVU", "IPCTUV", "VUPICT"],
        "correctAnswer": "UVTCPIG"
    },
    {
        "id": 280,
        "questionText": "If IMMEDIATE is coded as LPPHGLDWH then PHGLDWN is.............. ?",
        "options": ["LDIMET", "MEDIATA", "MEDIATE", "DIMEATE"],
        "correctAnswer": "MEDIATA"
    },
    {
        "id": 281,
        "questionText": "If CAMERA is coded as PZQTFZ and INK is coded as YDF then AMERICAN is...............?",
        "options": ["ZQTYFPZD", "ZQTFYPZD", "ZQTFYPDP", "ZQTYEPZD"],
        "correctAnswer": "ZQTFYPZD"
    },
    {
        "id": 282,
        "questionText": "If WE ARE COMING is coded as YG CTG EQOKPI then YG CTG IQKPI is...............?",
        "options": ["WE ARE COMMENING", "WE ARE GOING", "WE ARE COMING", "WE ARE COPING"],
        "correctAnswer": "WE ARE GOING"
    },
    {
        "id": 283,
        "questionText": "If STEAM is coded as BPQWF and MORE is coded as FGZQ then FQPZQ is decoded as...............?",
        "options": ["TEAMS", "METER", "METRE", "MEETS"],
        "correctAnswer": "METRE"
    },
    {
        "id": 284,
        "questionText": "If RIGHT is coded as SQNMW and BACK is coded as UDJL then BARK is..............?",
        "options": ["QWUD", "UDSL", "JLSQ", "SMNU"],
        "correctAnswer": "UDSL"
    },
    {
        "id": 285,
        "questionText": "If ABCDLMN is coded as ZYXWMNO then ZMWKVZXV is decoded.............?",
        "options": ["PEACE AND LOVE", "WAR AND PEACE", "PEACE AND WAR", "AND PEACE"],
        "correctAnswer": "PEACE AND LOVE"
    },
    {
        "id": 286,
        "questionText": "If HUMAN is coded as FSTQP then TST is..............?",
        "options": ["MAN", "MUM", "HUA", "HAM"],
        "correctAnswer": "MUM"
    },
    {
        "id": 287,
        "questionText": "If CONGRATULATIONS is coded as BPMHOBSVKBSJNOR then BPMHOBS is decoded is..............?",
        "options": ["CONGRATULATIONS", "CONGRAT", "CONGRATE", "CONGRATES"],
        "correctAnswer": "CONGRAT"
    },
    {
        "id": 288,
        "questionText": "If METAL is coded as PQYOBX and SAD is coded as WBV then VQPBYV is..............?",
        "options": ["DESIRE", "DOING", "DEMONS", "DEAMND"],
        "correctAnswer": "DEAMND"
    },
    {
        "id": 289,
        "questionText": "If BRIGHT is coded as ASHHGU then RIGHT is..............?",
        "options": ["SHGHH", "HSSGH", "SHHJH", "SHHGH"],
        "correctAnswer": "SHHGH"
    },
    {
        "id": 290,
        "questionText": "Odd one out Godly , Pious , Holy , Atheist :",
        "options": ["Godly", "Pious", "Holy", "Atheist"],
        "correctAnswer": "Atheist"
    },
    {
        "id": 291,
        "questionText": "Odd one out Goat , Buffalo , Horse , Cow :",
        "options": ["Goat", "Buffalo", "Horse", "Cow"],
        "correctAnswer": "Horse"
    },
    {
        "id": 292,
        "questionText": "Odd one out Cure , Student , Examination , Failure :",
        "options": ["Cure", "Student", "Examination", "Failure"],
        "correctAnswer": "Cure"
    },
    {
        "id": 293,
        "questionText": "Odd one out Arc , Diameter , Radius , Diagonal :",
        "options": ["Arc", "Diameter", "Radius", "Diagonal"],
        "correctAnswer": "Diagonal"
    },
    {
        "id": 294,
        "questionText": "Odd one out Kit , Hat , Far , Fad :",
        "options": ["Kit", "Hat", "Far", "Fad"],
        "correctAnswer": "Kit"
    },
    {
        "id": 295,
        "questionText": "Odd one out Chair , Blue , Yellow , Red :",
        "options": ["Chair", "Blue", "Yellow", "Red"],
        "correctAnswer": "Chair"
    },
    {
        "id": 296,
        "questionText": "Odd one out Fork , Dagger , Sword , Knife :",
        "options": ["Fork", "Dagger", "Sword", "Knife"],
        "correctAnswer": "Fork"
    },
    {
        "id": 297,
        "questionText": "Odd one out HK , AC , LO , DG :",
        "options": ["HK", "AC", "LO", "DG"],
        "correctAnswer": "HK"
    },
    {
        "id": 298,
        "questionText": "Odd one out Great , Big , Small , Fat , High :",
        "options": ["Great", "Big", "Small", "Fat"],
        "correctAnswer": "Small"
    },
    {
        "id": 299,
        "questionText": "Odd one out Tram , Bus , Ship , Train :",
        "options": ["Tram", "Bus", "Ship", "Train"],
        "correctAnswer": "Ship"
    },
    {
        "id": 300,
        "questionText": "Odd one out Friendship , Spaceship , Kinship , Relationship :",
        "options": ["Friendship", "Spaceship", "Kinship", "Relationship"],
        "correctAnswer": "Spaceship"
    }
  ]
}