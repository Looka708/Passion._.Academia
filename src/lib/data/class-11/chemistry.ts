
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './chemistry-short-questions';
import { longQuestions as longQuestionsData } from './chemistry-long-questions';

export const chapters = ["Periodic Table and Periodic Properties", 
                        "Atomic Structure", 
                        "Chemical Bonding",
                        "Stoichiometry",
                        "States and Phases of Matter",
                        "Chemical Energetics",
                        "Reaction Kinetics",
                        "Chemical Equilibrium",
                        "Acid-Base Chemistry",
                        "Electrochemistry",
                        "Hydrocarbons",
                        "Nitrogen and Sulfur",
                        "Halogens",
                        "Atmosphere",
                        "Basic Separation Techniques",
                        "Lab Safety and Practical Skills"
];
export const mcqs: Record<string, MCQ[]> = {
    "Periodic Table and Periodic Properties": [
  {
    "id": 1,
    "questionText": "Who is considered the \"father of the Periodic Table\" for arranging 63 elements by increasing atomic mass and leaving gaps for undiscovered elements?",
    "options": [
      "a) Antoine Lavoisier",
      "b) John Newlands",
      "c) Dmitri Mendeleev",
      "d) Moseley"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "In the modern periodic table, how are the 118 elements primarily arranged?",
    "options": [
      "a) By increasing atomic mass",
      "b) By increasing atomic number",
      "c) By chemical properties",
      "d) By density"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Which of the following statements about the modern periodic table's structure is correct?",
    "options": [
      "a) It has 8 vertical groups and 7 horizontal periods.",
      "b) Elements in a period show similar chemical properties.",
      "c) There are seven horizontal rows called periods and eighteen vertical columns called groups.",
      "d) The classification is based solely on atomic mass."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Elements that tend to lose electrons to form positive ions are generally classified as:",
    "options": [
      "a) Non-metals",
      "b) Metals",
      "c) Metalloids",
      "d) Noble gases"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What block do elements in Group 1 and Group 2 of the periodic table belong to?",
    "options": [
      "a) p-block",
      "b) d-block",
      "c) f-block",
      "d) s-block"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 6,
    "questionText": "Which element family is characterized by having one valence electron and producing alkalis when reacting with water?",
    "options": [
      "a) Alkaline earth metals",
      "b) Transition metals",
      "c) Halogens",
      "d) Alkali metals"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "The period number (n) in the periodic table indicates what about an element's atomic structure?",
    "options": [
      "a) The number of valence electrons",
      "b) The specific subshell where valence electrons are found",
      "c) The type of block it belongs to",
      "d) The number of electron shells surrounding the nucleus"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 8,
    "questionText": "Which of the following periodic trends is observed for atomic radius when moving from left to right across a period?",
    "options": [
      "a) It increases.",
      "b) It decreases.",
      "c) It remains constant.",
      "d) It first increases then decreases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "How does the ionic radius of a cation typically compare to its neutral atom?",
    "options": [
      "a) It is generally larger due to increased electronic repulsion.",
      "b) It remains the same as the neutral atom.",
      "c) It is generally smaller due to the loss of an electron shell and stronger nuclear pull on remaining electrons.",
      "d) It depends on the group number."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What is the definition of the first ionization energy (I1)?",
    "options": [
      "a) The energy released when an electron is added to an atom in the gaseous state.",
      "b) The energy required to remove all electrons from an atom in the gaseous state.",
      "c) The energy needed to remove one electron from each atom in one mole of atoms of the element in the gaseous state to form one mole of gaseous 1+ ions.",
      "d) The energy required to break a chemical bond."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Which factor leads to a decrease in ionization energy down a group?",
    "options": [
      "a) Increase in effective nuclear charge",
      "b) Stability of half-filled subshells",
      "c) Increase in atomic size and shielding effect",
      "d) Spin-pair repulsion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Noble gases have the highest ionization energies in their respective periods due to:",
    "options": [
      "a) Their large atomic radii.",
      "b) Weak shielding effects.",
      "c) Highly stable fully-filled shells (ns²np⁶).",
      "d) Strong spin-pair repulsion."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is the general trend for electron affinity as you move from left to right across a period?",
    "options": [
      "a) It generally becomes less negative.",
      "b) It remains constant.",
      "c) It generally becomes more negative.",
      "d) It first increases then decreases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What is electronegativity?",
    "options": [
      "a) The energy needed to remove an electron from an atom.",
      "b) The tendency of an atom to gain electrons to form a negative ion.",
      "c) The power of an atom to attract shared pair of electrons toward itself in a molecule.",
      "d) The size of an atom's electron cloud."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "How does electronegativity generally change as you move from left to right across a period?",
    "options": [
      "a) It decreases.",
      "b) It remains constant.",
      "c) It increases.",
      "d) It first decreases then increases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which statement accurately describes the metallic character of elements in the periodic table?",
    "options": [
      "a) It increases from left to right across a period.",
      "b) It increases as one moves down in a group.",
      "c) It remains constant across a period.",
      "d) Elements on the right side of the periodic table are typically metals."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "How does sodium (Na) react with water compared to magnesium (Mg)?",
    "options": [
      "a) Na reacts more slowly than Mg.",
      "b) Both react at the same rate.",
      "c) Mg reacts vigorously, while Na reacts slowly.",
      "d) Na reacts vigorously with water, while Mg reacts more slowly."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "What type of oxide is formed when a metal reacts with oxygen and gives off an alkali when combined with water?",
    "options": [
      "a) Acidic oxide",
      "b) Amphoteric oxide",
      "c) Neutral oxide",
      "d) Basic oxide"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "Which of the following is an example of an amphoteric oxide that can react with both acids and bases?",
    "options": [
      "a) Na₂O",
      "b) P₂O₃",
      "c) SO₂",
      "d) Al₂O₃"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 20,
    "questionText": "When aluminium chloride (AlCl₃) is added to water, it forms an acidic solution. This process, where the Al³⁺ ion causes a water molecule to lose an H⁺ ion, is called:",
    "options": [
      "a) Hydration",
      "b) Hydrolysis",
      "c) Neutralization",
      "d) Dissolution"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Why do phosphorus and sulfur exhibit several oxidation numbers in their oxides and chlorides?",
    "options": [
      "a) They have very low electronegativity.",
      "b) They are very small atoms.",
      "c) They can expand their octet by exciting electrons into empty 3d orbitals.",
      "d) They are noble gases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What is the oxidation number of sulfur in SO₃?",
    "options": [
      "a) +2",
      "b) +3",
      "c) +4",
      "d) +6"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 23,
    "questionText": "According to Döbereiner, what was a key observation about elements grouped into triads (a group of three)?",
    "options": [
      "a) Every eighth element resembled the first.",
      "b) They were classified as metals and nonmetals.",
      "c) The atomic weight of the middle element was roughly the average of the other two.",
      "d) They formed famous curves when plotting atomic weight against atomic volume."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What significant breakthrough did Moseley make in 1913 regarding the arrangement of the periodic table?",
    "options": [
      "a) Grouped elements into triads.",
      "b) Observed periodicity in atomic masses.",
      "c) Predicted undiscovered elements.",
      "d) Determined exact atomic numbers of known elements, resolving flaws in Mendeleev’s table."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 25,
    "questionText": "Elements in the same group of the modern periodic table exhibit similar chemical properties because they have:",
    "options": [
      "a) The same atomic number.",
      "b) Similar atomic masses.",
      "c) The same number of valence electrons.",
      "d) The same number of electron shells."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "The elements boron (B), silicon (Si), germanium (Ge), arsenic (As), antimony (Sb), tellurium (Te), and polonium (Po) are generally classified as:",
    "options": [
      "a) Metals",
      "b) Non-metals",
      "c) Metalloids",
      "d) Transition metals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "An element X belongs to Group 14 and Period 2. Which of the following describes its valence electron configuration?",
    "options": [
      "a) 2 valence electrons in the 2nd shell.",
      "b) 4 valence electrons in the 3rd shell.",
      "c) 4 valence electrons in the 2nd shell.",
      "d) 14 valence electrons in the 2nd shell."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "What happens to the effective nuclear charge across a period (left to right) that contributes to the decrease in atomic radius?",
    "options": [
      "a) It decreases, pulling the electron cloud further.",
      "b) It increases, pulling the electron cloud closer.",
      "c) It remains constant.",
      "d) It fluctuates irregularly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "When an atom gains one or more electrons to become an anion, its size generally:",
    "options": [
      "a) Decreases compared to the neutral atom.",
      "b) Remains the same.",
      "c) Increases due to increased electronic repulsion, causing the electron cloud to expand.",
      "d) Becomes equal to its corresponding cation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Which of the following statements about successive ionization energies is true?",
    "options": [
      "a) The first ionization energy is always the highest.",
      "b) Successive ionization energies generally increase because it becomes harder to remove electrons from an increasingly positive ion.",
      "c) Removing an electron from a fully-filled subshell requires less energy.",
      "d) Spin-pair repulsion always increases ionization energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Why does oxygen have a lower first ionization energy than nitrogen?",
    "options": [
      "a) Oxygen has a larger atomic size.",
      "b) Oxygen has a higher effective nuclear charge.",
      "c) Nitrogen has a more stable half-filled 2p subshell (2p³).",
      "d) Oxygen experiences greater shielding effect."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Electron affinity is generally low when an electron is added to:",
    "options": [
      "a) A completely filled sub-shell.",
      "b) A partially filled sub-shell.",
      "c) A half-filled sub-shell.",
      "d) An empty sub-shell."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 33,
    "questionText": "What is the relationship between atomic size and electronegativity?",
    "options": [
      "a) Larger atomic size results in a greater value of electronegativity.",
      "b) Larger atomic size results in a lower value of electronegativity.",
      "c) Atomic size has no effect on electronegativity.",
      "d) Electronegativity increases with increasing atomic size."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "Which statement about the reactivity of acidic oxides with water is correct?",
    "options": [
      "a) Basic oxides react with water to give an acid.",
      "b) Acidic oxides react with water to give an acid.",
      "c) Amphoteric oxides do not react with water.",
      "d) All oxides form neutral solutions with water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What happens when SiO₂ (silicon dioxide) reacts with NaOH(aq)?",
    "options": [
      "a) It forms H₂SiO₃(aq).",
      "b) It behaves as a basic oxide.",
      "c) It reacts as an acidic oxide, forming Na₂SiO₃(aq) and water.",
      "d) No reaction occurs as SiO₂ is insoluble."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Group 1 and group 2 chlorides, such as NaCl and MgCl₂, are described as predominantly:",
    "options": [
      "a) Acidic",
      "b) Basic",
      "c) Neutral",
      "d) Amphoteric"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The oxidation number of an element of the 3rd period in its oxide or chloride generally corresponds to:",
    "options": [
      "a) Its electron affinity.",
      "b) Its atomic radius.",
      "c) Its group number, reflecting the total number of valence electrons.",
      "d) The number of core electrons."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "According to the source, how does the metallic character of elements vary moving from left to right across a period?",
    "options": [
      "a) It increases.",
      "b) It decreases.",
      "c) It remains constant.",
      "d) It first decreases then increases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Which equation correctly represents magnesium reacting with steam?",
    "options": [
      "a) 2Mg(s) + 2H₂O(l) → 2Mg(OH)₂(aq) + H₂(g)",
      "b) Mg(s) + 2H₂O(l) → Mg(OH)₂(aq) + H₂(g)",
      "c) Mg(s) + 2H₂O(g) → MgO(s) + 2H₂(g)",
      "d) 2Mg(s) + O₂(g) → 2MgO(s)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Sodium is kept under kerosene oil to prevent its reaction with:",
    "options": [
      "a) Water",
      "b) Chlorine",
      "c) Acids",
      "d) Air (oxygen)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 41,
    "questionText": "The transition from ionic to covalent bonding character in chlorides across period 3 is a result of:",
    "options": [
      "a) Decreasing electronegativity and increasing ionic character.",
      "b) Increasing electronegativity and decreasing ionic character.",
      "c) Constant electronegativity and constant ionic character.",
      "d) Increasing atomic size across the period."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "The modern periodic table consists of how many horizontal rows and vertical columns?",
    "options": [
      "a) 8 periods and 18 groups",
      "b) 7 groups and 18 periods",
      "c) 7 periods and 18 groups",
      "d) 10 periods and 8 groups"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "What type of chemical bonding is predominantly found in sodium chloride (NaCl)?",
    "options": [
      "a) Covalent",
      "b) Polar covalent",
      "c) Metallic",
      "d) Ionic"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "The principal energy level (n) of an atom's outer electrons can be deduced from its position on the periodic table by recognizing it as the:",
    "options": [
      "a) Group number",
      "b) Atomic number",
      "c) Period number",
      "d) Block designation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The two series of elements found at the bottom of the periodic table, known as Lanthanides and Actinides, belong to which block?",
    "options": [
      "a) s-block",
      "b) p-block",
      "c) d-block",
      "d) f-block"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 46,
    "questionText": "Elements in Group 16, known as Chalcogens, are called so because:",
    "options": [
      "a) They produce alkalis when reacting with water.",
      "b) They are highly reactive nonmetals that form salts.",
      "c) Most ores of copper (Greek chalkos) are oxides or sulfides.",
      "d) They are unreactive due to complete outermost shells."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Why are Noble Gases (Group 18) considered almost entirely unreactive under normal conditions?",
    "options": [
      "a) They have high electron affinities.",
      "b) They are metals that form positive ions.",
      "c) They have complete outermost shells.",
      "d) They are highly electronegative."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "The statement \"The physical and chemical properties of elements are periodic functions of their atomic numbers\" is a formulation of:",
    "options": [
      "a) Mendeleev's Periodic Law",
      "b) Newlands' Law of Octaves",
      "c) The Modern Periodic Law",
      "d) Döbereiner's Law of Triads"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "Which of the following is an acidic oxide, characterized by reacting with water to form an acid?",
    "options": [
      "a) Na₂O",
      "b) CaO",
      "c) MgO",
      "d) P₂O₅"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "An electronegativity difference greater than 1.8 between two bonded atoms typically indicates the presence of what type of bond?",
    "options": [
      "a) Pure covalent bond",
      "b) Polar covalent bond",
      "c) Ionic bond",
      "d) Metallic bond"
    ],
    "correctAnswer": "c"
  }
],
    "Atomic Structure": [
  {
    "id": 1,
    "questionText": "What does the atomic number (Z) represent in an element?",
    "options": [
      "a) The total number of protons and neutrons.",
      "b) The number of electrons in the outermost shell.",
      "c) The number of protons in the nucleus.",
      "d) The relative atomic mass."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Which terms represent the same concept?",
    "options": [
      "a) Atomic number and mass number.",
      "b) Proton number and nucleon number.",
      "c) Atomic number and proton number.",
      "d) Mass number and electron number."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "How is the nucleon number (A) defined?",
    "options": [
      "a) The number of electrons in an atom.",
      "b) The number of protons in the nucleus.",
      "c) The number of neutrons in an atom.",
      "d) The total number of protons and neutrons in the nucleus of an atom."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 4,
    "questionText": "For the element 27Al13, how many neutrons are present?",
    "options": [
      "a) 13",
      "b) 14",
      "c) 27",
      "d) 40"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "If an atom 27Al13 loses three electrons to form Al3+, how many electrons will it have?",
    "options": [
      "a) 13",
      "b) 16",
      "c) 10",
      "d) 27"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "When beams of electrons, protons, and neutrons pass through an electric field at the same speed, which particle is deflected the most?",
    "options": [
      "a) Proton",
      "b) Neutron",
      "c) Electron",
      "d) All are deflected equally."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is the relative charge of a proton?",
    "options": [
      "a) -1",
      "b) 0",
      "c) +1",
      "d) +1.6022 x 10^-19"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the approximate mass (in amu) of a neutron?",
    "options": [
      "a) 5.4858 x 10^-4",
      "b) 1.0073",
      "c) 1.0087",
      "d) 0"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Which phenomenon primarily provides evidence for the electronic configuration of atoms?",
    "options": [
      "a) Atomic size",
      "b) Atomic spectra and ionization energies",
      "c) Mass spectrometry",
      "d) Chemical reactivity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "What is an atomic emission spectrum?",
    "options": [
      "a) The spectrum observed when white light passes through a gaseous sample.",
      "b) The spectrum of radiation emitted when an element in gaseous state is heated or subjected to electrical discharge.",
      "c) A continuous spectrum of all wavelengths.",
      "d) The spectrum of light absorbed by atoms in their cold state."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What do successive ionization energies reveal about an atom?",
    "options": [
      "a) The number of neutrons.",
      "b) The mass of the nucleus.",
      "c) The arrangement of electrons in shells around the nucleus.",
      "d) The chemical reactivity of the element."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "In the plot of successive ionization energies for Magnesium (Mg), where would you expect to see a large increase (jump)?",
    "options": [
      "a) Between the 1st and 2nd ionization energies.",
      "b) Between the 2nd and 3rd ionization energies.",
      "c) Between the 10th and 11th ionization energies.",
      "d) Between the 1st and 12th ionization energies."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "As you go down a particular group in the periodic table, what generally happens to ionization energies?",
    "options": [
      "a) They increase.",
      "b) They decrease.",
      "c) They remain constant.",
      "d) They fluctuate irregularly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What does the principal quantum number (n) describe?",
    "options": [
      "a) The shape of the orbital.",
      "b) The orientation of an orbital in space.",
      "c) The size and energy of the orbital.",
      "d) The spin of an electron."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n=3?",
    "options": [
      "a) 2",
      "b) 8",
      "c) 18",
      "d) 32"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "If n=2, what are the possible values for the azimuthal quantum number (l)?",
    "options": [
      "a) 0",
      "b) 1",
      "c) 0 and 1",
      "d) 0, 1 and 2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Which orbital designation corresponds to an azimuthal quantum number (l) value of 1?",
    "options": [
      "a) s",
      "b) p",
      "c) d",
      "d) f"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is the maximum number of electrons that can fill a p subshell?",
    "options": [
      "a) 2",
      "b) 6",
      "c) 10",
      "d) 14"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What does the magnetic quantum number (m) describe?",
    "options": [
      "a) The size of the orbital.",
      "b) The shape of the orbital.",
      "c) The orientation of an orbital in space.",
      "d) The energy of the electron."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "For a d-subshell (l=2), how many degenerate orbitals are there?",
    "options": [
      "a) 1",
      "b) 3",
      "c) 5",
      "d) 7"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What are degenerate orbitals?",
    "options": [
      "a) Orbitals with different energies in the same subshell.",
      "b) Orbitals of the same subshell having the same energy.",
      "c) Orbitals in different shells with different energies.",
      "d) Orbitals that cannot be differentiated by a magnetic field."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What are the two possible values for the spin quantum number (s)?",
    "options": [
      "a) +1 and -1",
      "b) +1/2 and -1/2",
      "c) 0 and 1",
      "d) +2 and -2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "What is the shape of an s-orbital?",
    "options": [
      "a) Polar (dumbbell)",
      "b) Cloverleaf (double dumbbell)",
      "c) Spherical",
      "d) Complicated"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "A p-orbital has two lobes on any of the axes. How are these p-orbitals named?",
    "options": [
      "a) ps, pp, pd",
      "b) p1, p2, p3",
      "c) px, py, pz",
      "d) pa, pb, pc"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What does an atomic orbital represent according to the wave mechanical model of the atom?",
    "options": [
      "a) The exact path of an electron.",
      "b) A two-dimensional region in space where the electron is confined.",
      "c) The three-dimensional region in space around the nucleus in which the probability of finding the electron is maximum.",
      "d) The fixed energy level of an electron."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "What does electronic configuration describe?",
    "options": [
      "a) The total number of subshells in an atom.",
      "b) The distribution of electrons among available shells, subshells, or orbitals of an atom or ion.",
      "c) The charge of the nucleus.",
      "d) The number of protons and neutrons in the nucleus."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is the maximum electron capacity of the L shell (n=2)?",
    "options": [
      "a) 2 electrons",
      "b) 8 electrons",
      "c) 18 electrons",
      "d) 32 electrons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Which principle states that subshells in an atom are filled with electrons in an increasing order of their energy values?",
    "options": [
      "a) Pauli's exclusion principle",
      "b) Hund's rule",
      "c) Aufbau principle",
      "d) Heisenberg's uncertainty principle"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "According to the (n + l) rule, which subshell (4s or 3d) has lower energy and is filled first?",
    "options": [
      "a) 4s (n+l = 4)",
      "b) 3d (n+l = 5)",
      "c) Both have the same energy.",
      "d) It depends on the element."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "Which rule states that \"No two electrons in an atom can have the same values for all the four quantum numbers\" or \"Two electrons in an orbital will always have opposite spins\"?",
    "options": [
      "a) Hund's rule",
      "b) Aufbau principle",
      "c) Pauli's exclusion principle",
      "d) Octet rule"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Hund's rule provides an idea for filling electrons into degenerate orbitals. What does it state?",
    "options": [
      "a) Electrons must occupy orbitals of higher energy first.",
      "b) Electrons should be placed in separate orbitals with the same spin rather than in the same orbital with opposite spins.",
      "c) Electrons must always be spin-paired.",
      "d) Each orbital can occupy a maximum of two electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What are valence electrons?",
    "options": [
      "a) Electrons located closest to the nucleus.",
      "b) Electrons in an atom in the outermost shell.",
      "c) Electrons involved in determining the atomic mass.",
      "d) Electrons that have no role in chemical reactions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Elements in which the s-orbitals are being filled are known as what block?",
    "options": [
      "a) p-block",
      "b) d-block",
      "c) f-block",
      "d) s-block"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "A neutral atom with the electronic configuration 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁵ belongs to which block in the periodic table?",
    "options": [
      "a) s-block",
      "b) p-block",
      "c) d-block",
      "d) f-block"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Which element, with Z=11, has the electronic configuration 1s²2s²2p⁶3s¹?",
    "options": [
      "a) Lithium",
      "b) Magnesium",
      "c) Sodium",
      "d) Potassium"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "How are positive ions typically formed?",
    "options": [
      "a) When atoms gain electrons.",
      "b) When atoms lose electrons.",
      "c) When atoms gain protons.",
      "d) When atoms lose neutrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "The sulfide ion, S²⁻ (proton number = 16), has how many electrons?",
    "options": [
      "a) 16",
      "b) 14",
      "c) 18",
      "d) 32"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "For d-block elements, when atoms lose electrons to form ions, which electrons are lost first?",
    "options": [
      "a) d-electrons",
      "b) p-electrons",
      "c) s-electrons (from the outermost shell, e.g., 4s before 3d)",
      "d) f-electrons"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What is a free radical?",
    "options": [
      "a) A species with a positive charge.",
      "b) A species with a negative charge.",
      "c) A species with one or more unpaired electrons.",
      "d) A species with a complete octet."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What makes silicon an ideal material for electronic devices like semiconductors?",
    "options": [
      "a) Its high electrical conductivity.",
      "b) Its specific electronic configuration with 4 valence electrons.",
      "c) Its ability to form ionic bonds.",
      "d) Its inertness to chemical reactions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "In the formation of an N-type semiconductor, what kind of impurity atoms are added to pure silicon?",
    "options": [
      "a) Atoms with three valence electrons.",
      "b) Atoms with five valence electrons.",
      "c) Atoms with two valence electrons.",
      "d) Atoms with six valence electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What happens to the atomic radius across a period (from left to right) in the periodic table?",
    "options": [
      "a) It increases.",
      "b) It decreases.",
      "c) It remains constant.",
      "d) It first increases then decreases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which factors affect the ionization energy of an element?",
    "options": [
      "a) Only atomic size.",
      "b) Nuclear charge, atomic size, electronic arrangement, shielding effect, and spin–pair repulsion.",
      "c) Only electronegativity.",
      "d) Only metallic character."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Noble gases have the highest ionization energies in their respective periods due to:",
    "options": [
      "a) Large atomic size.",
      "b) Half-filled subshells.",
      "c) Highly stable fully-filled shells (ns²np⁶).",
      "d) Strong shielding effect."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "How does the electron affinity generally change as we move from left to right in a period?",
    "options": [
      "a) It becomes less negative.",
      "b) It becomes more negative.",
      "c) It remains constant.",
      "d) It changes irregularly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the definition of electronegativity?",
    "options": [
      "a) The energy needed to remove an electron from an atom.",
      "b) The tendency of an atom to gain an electron.",
      "c) The power of an atom to attract shared pair of electrons toward itself in a molecule.",
      "d) The size of an atom."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What happens to electronegativity as you move down a group in the periodic table?",
    "options": [
      "a) It increases.",
      "b) It decreases.",
      "c) It remains constant.",
      "d) It first decreases then increases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What element belongs to group 14 and period 2?",
    "options": [
      "a) Aluminum",
      "b) Silicon",
      "c) Carbon",
      "d) Germanium"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "An element X belongs to group 13 and period 3. What is its electron configuration?",
    "options": [
      "a) 1s²2s²2p⁶3s¹",
      "b) 1s²2s²2p⁶3s²",
      "c) 1s²2s²2p⁶3s²3p¹",
      "d) 1s²2s²2p⁶3s²3p²"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The modern periodic table is arranged into four blocks associated with which sublevels?",
    "options": [
      "a) s, p, d, f",
      "b) K, L, M, N",
      "c) α, β, γ, δ",
      "d) 1, 2, 3, 4"
    ],
    "correctAnswer": "a"
  }
],
    "Chemical Bonding": [
  {
    "id": 1,
    "questionText": "What is a chemical bond?",
    "options": [
      "a) The force that holds together two or more atoms, molecules or ions.",
      "b) The energy released during a chemical reaction.",
      "c) The force of attraction between opposite charges in an electric field.",
      "d) A type of intermolecular force."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 2,
    "questionText": "According to Lewis theory, how is an ionic bond formed?",
    "options": [
      "a) By mutual sharing of electrons.",
      "b) By complete transfer of electrons from an atom with low ionization energy to another atom with high electron affinity.",
      "c) By sharing of a lone pair of electrons.",
      "d) By delocalized electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Which of the following describes a covalent bond?",
    "options": [
      "a) Formed by the complete transfer of electrons.",
      "b) Formed by the mutual sharing of electrons between two atoms.",
      "c) Formed by electrostatic attraction between oppositely charged ions.",
      "d) Formed when one atom donates both electrons to the bond."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "In a purely covalent and non-polar bond, what is the electronegativity difference between the two atoms?",
    "options": [
      "a) Very large (>1.8)",
      "b) Between 0.4 and 1.8",
      "c) Very small or zero",
      "d) Exactly 1.0"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What defines a dative bond (coordinate covalent bond)?",
    "options": [
      "a) Formed by mutual sharing of electrons.",
      "b) Formed by complete transfer of electrons.",
      "c) Formed when the shared pair of electrons is donated by one of the bonding atoms.",
      "d) Formed by delocalized electrons in a metal lattice."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which of the following molecules contains a dative bond?",
    "options": [
      "a) H₂O",
      "b) NaCl",
      "c) CH₄",
      "d) CO"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "In the formation of the hydronium ion (H₃O⁺), what is the role of the water molecule?",
    "options": [
      "a) It accepts a lone pair of electrons.",
      "b) It donates a lone pair of electrons to a proton.",
      "c) It completely transfers electrons to a proton.",
      "d) It forms a non-polar covalent bond."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Can elements of period 2 of the periodic table have an expanded octet?",
    "options": [
      "a) Yes, all of them.",
      "b) Yes, only those with d-orbitals.",
      "c) No, because they do not have accessible d-orbitals.",
      "d) It depends on the electronegativity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "What type of bond is formed when the electronegativity difference between two bonded atoms is greater than 1.8?",
    "options": [
      "a) Pure covalent",
      "b) Polar covalent",
      "c) Ionic",
      "d) Metallic"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "A bond with an electronegativity difference between 0.4 and 1.8 corresponds to which bond type?",
    "options": [
      "a) Pure covalent",
      "b) Polar covalent",
      "c) Ionic",
      "d) Metallic"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is a dipole moment?",
    "options": [
      "a) A qualitative measure of bond polarity.",
      "b) A quantitative measurement of the polarity of a bond or a molecule.",
      "c) The overall charge on a molecule.",
      "d) The distance between two nuclei in a molecule."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The non-zero dipole moment of water (1.85 D) indicates that the water molecule has which shape?",
    "options": [
      "a) Linear",
      "b) Trigonal planar",
      "c) V-shaped (non-linear)",
      "d) Tetrahedral"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Why does CO₂ not have a dipole moment while CO does?",
    "options": [
      "a) CO₂ has non-polar bonds.",
      "b) CO₂ has a symmetrical linear structure, causing bond dipoles to cancel.",
      "c) CO has a symmetrical linear structure.",
      "d) CO is an ionic compound."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Which type of intermolecular force is present in all types of molecules, regardless of their polarity?",
    "options": [
      "a) Dipole-dipole forces",
      "b) Hydrogen bonds",
      "c) London dispersion forces",
      "d) Ion-dipole forces"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is bond energy?",
    "options": [
      "a) The distance between the nuclei of two bonded atoms.",
      "b) The average amount of energy required to break all bonds of a particular type in one mole of a substance.",
      "c) The energy released during bond formation.",
      "d) The strength of intermolecular forces."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "How does bond energy generally change with an increasing electronegativity difference between bonded atoms?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It fluctuates."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Which statement accurately compares the strengths of multiple bonds?",
    "options": [
      "a) C-C > C=C > C≡C",
      "b) C≡C > C=C > C-C",
      "c) C=C > C≡C > C-C",
      "d) C-C = C=C = C≡C"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is bond length primarily defined as?",
    "options": [
      "a) The energy required to break a bond.",
      "b) The distance between the nuclei of two atoms forming a covalent bond.",
      "c) The degree of bond polarity.",
      "d) The number of electrons shared in a bond."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "How does increasing atomic size of the atoms affect the covalent bond length?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It has no effect."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Which type of chemical bond is generally considered the strongest?",
    "options": [
      "a) Covalent bond",
      "b) Metallic bond",
      "c) Ionic bond",
      "d) Hydrogen bond"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "According to Valence Bond Theory (VBT), a covalent bond is formed when:",
    "options": [
      "a) Electrons are completely transferred.",
      "b) Half-filled orbitals in the valence shells of two atoms with similar energy overlap.",
      "c) Ions are attracted to each other.",
      "d) Delocalized electrons form a sea of electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What characterizes a sigma bond?",
    "options": [
      "a) Formed by sideways overlap of p-orbitals.",
      "b) Formed by the linear overlap of two half-filled atomic orbitals on adjacent atoms.",
      "c) Formed by the overlap of empty orbitals.",
      "d) Always involves only s-orbitals."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "In the formation of an HCl molecule, what type of overlap occurs to form the covalent bond?",
    "options": [
      "a) s-s overlap",
      "b) s-p overlap",
      "c) p-p overlap",
      "d) π-bond overlap"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What is hybridization?",
    "options": [
      "a) The process of forming molecular orbitals from atomic orbitals.",
      "b) The mixing of orbitals in different atoms to form bonds.",
      "c) A process in which atomic orbitals of slightly different energies and shapes are mixed together to form a new set of equivalent orbitals of same energy and same shape.",
      "d) The separation of electrons into different subshells."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "In methane (CH₄), what is the hybridization of the carbon atom?",
    "options": [
      "a) sp",
      "b) sp²",
      "c) sp³",
      "d) dsp²"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "The VSEPR model predicts the shapes of molecules based on the assumption that:",
    "options": [
      "a) Atoms strive to complete their octets.",
      "b) Electron pairs around the central atom arrange themselves to minimize electronic repulsions.",
      "c) Molecules always adopt a linear shape.",
      "d) Bond energies are maximized."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "According to VSEPR theory, what is the order of repulsion strength between electron pairs?",
    "options": [
      "a) lp-lp < lp-bp < bp-bp",
      "b) lp-lp > lp-bp > bp-bp",
      "c) bp-bp > lp-bp > lp-lp",
      "d) All repulsions are equal."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is the electron pair geometry and ideal bond angle for a molecule with two electron pairs around the central atom and no lone pairs (AB₂ type, e.g., CO₂)?",
    "options": [
      "a) Trigonal planar, 120°",
      "b) Tetrahedral, 109.5°",
      "c) Linear, 180°",
      "d) Octahedral, 90°"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "For a molecule of type AB₃ with one lone pair (e.g., SO₂), what is its shape?",
    "options": [
      "a) Trigonal planar",
      "b) Tetrahedral",
      "c) Linear",
      "d) Angular, v-shaped"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "Methane (CH₄) has four bonded electron pairs around its central carbon atom. What is its shape and bond angle?",
    "options": [
      "a) Pyramidal, less than 109.5°",
      "b) Tetrahedral, 109.5°",
      "c) Trigonal planar, 120°",
      "d) Linear, 180°"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Ammonia (NH₃) has three bond pairs and one lone pair around the nitrogen atom. What is its shape?",
    "options": [
      "a) Tetrahedral",
      "b) Pyramidal",
      "c) V-shaped",
      "d) Linear"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The water molecule (H₂O) has two bond pairs and two lone pairs around the oxygen atom. What is its shape?",
    "options": [
      "a) Linear",
      "b) Trigonal planar",
      "c) Tetrahedral",
      "d) Angular, v-shaped"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "What is the shape of the hydronium ion (H₃O⁺)?",
    "options": [
      "a) Linear",
      "b) Trigonal planar",
      "c) Tetrahedral trigonal pyramidal",
      "d) V-shaped"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "A molecule of type AB₅ with no lone pairs (e.g., PCl₅) has what electron pair geometry and molecular shape?",
    "options": [
      "a) Tetrahedral",
      "b) Octahedral",
      "c) Trigonal bipyramidal",
      "d) Square planar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The tri-iodide ion [I₃]⁻ is an AB₅ system with three lone pairs. What is its actual shape?",
    "options": [
      "a) Trigonal bipyramidal",
      "b) T-shaped",
      "c) Linear",
      "d) Square planar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Sulfur hexafluoride (SF₆) is an AB₆ type molecule with six electron pairs. What is its shape and bond angles?",
    "options": [
      "a) Trigonal bipyramidal, 120°, 90°",
      "b) Square planar, 90°",
      "c) Octahedral, 90°",
      "d) Linear, 180°"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "How do drugs (ligands) primarily interact with targets (receptors) in the human body?",
    "options": [
      "a) Through covalent bond formation.",
      "b) Through specific binding, influenced by their shape and bond angles.",
      "c) By completely changing the target's chemical structure.",
      "d) By increasing the target's temperature."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "According to Molecular Orbital Theory (MOT), when atomic orbitals overlap with opposite signs, what type of molecular orbital is formed?",
    "options": [
      "a) Bonding molecular orbital",
      "b) Anti-bonding molecular orbital",
      "c) Non-bonding orbital",
      "d) Hybrid orbital"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "What is the formula for bond order in MOT?",
    "options": [
      "a) (a + b) / 2",
      "b) (a - b) / 2",
      "c) a - b",
      "d) a + b"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "For the He₂ molecule, what is its bond order?",
    "options": [
      "a) 1",
      "b) 0",
      "c) 2",
      "d) 0.5"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the bond order for the N₂ molecule?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 0"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "The paramagnetic nature of oxygen (O₂) molecule is explained by MOT due to the presence of:",
    "options": [
      "a) Paired electrons in bonding orbitals.",
      "b) Unpaired electrons in its antibonding π* molecular orbitals.",
      "c) A high bond order.",
      "d) Strong sigma bonds."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which type of bonding involves the formation of new species through transfer and sharing of electrons, affecting the chemical properties of a substance?",
    "options": [
      "a) Intermolecular forces",
      "b) Chemical bonds (ionic, covalent, metallic)",
      "c) Hydrogen bonding only",
      "d) London dispersion forces only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Which of the following is NOT a postulate of the Valence Bond Theory (VBT)?",
    "options": [
      "a) A covalent bond is formed when half-filled orbitals overlap.",
      "b) Greater overlap of orbitals results in a stronger bond.",
      "c) Covalent bonds are directional.",
      "d) Molecular orbitals are formed which are characteristic of the whole molecule."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "The bond angle in H₂O is 104.5°, whereas in H₂S, it is 92°. This difference is attributed to:",
    "options": [
      "a) The larger size of sulfur orbitals and stronger lone pair repulsion.",
      "b) The higher electronegativity of oxygen.",
      "c) The smaller atomic mass of oxygen.",
      "d) H₂O being a polar molecule."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 46,
    "questionText": "When a central atom has four electron pairs, one of which is a lone pair (AB₃E type), what is its molecular shape?",
    "options": [
      "a) Tetrahedral",
      "b) Pyramidal",
      "c) Angular, v-shaped",
      "d) Trigonal planar"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "How many lone pairs are present on the central atom in an H₂O molecule?",
    "options": [
      "a) 0",
      "b) 1",
      "c) 2",
      "d) 3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What is the hybridization of the central atom in a molecule with a trigonal planar electron pair geometry?",
    "options": [
      "a) sp",
      "b) sp²",
      "c) sp³",
      "d) dsp²"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Which of the following bond types involves the delocalization of electrons within a crystal lattice?",
    "options": [
      "a) Ionic bond",
      "b) Covalent bond",
      "c) Metallic bond",
      "d) Dative bond"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What type of intermolecular force is formed when a hydrogen atom is connected to a highly electronegative atom (F, O, or N) and that electronegative atom has a lone pair of electrons?",
    "options": [
      "a) London dispersion forces",
      "b) Permanent dipole-permanent dipole forces",
      "c) Hydrogen bonding",
      "d) Ion-dipole forces"
    ],
    "correctAnswer": "c"
  }
],
    "Stoichiometry": [
  {
    "id": 1,
    "questionText": "What is stoichiometry?",
    "options": [
      "a) The study of reaction rates.",
      "b) The branch of chemistry that studies the relationship between the amounts of reactants and products in a balanced chemical equation.",
      "c) The study of energy changes in chemical reactions.",
      "d) The process of classifying elements."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "According to the law of conservation of mass, what is true for a balanced chemical equation?",
    "options": [
      "a) The total mass of reactants is less than the total mass of products.",
      "b) The total mass of reactants is greater than the total mass of products.",
      "c) The total mass of reactants is equal to the total mass of products.",
      "d) Mass is created or destroyed during the reaction."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What is the definition of a mole?",
    "options": [
      "a) The mass of 12 grams of carbon-12.",
      "b) The amount of a substance which contains as many elementary entities as there are atoms in 0.012 kg (12 g) of carbon-12.",
      "c) The number of grams in one atomic mass unit.",
      "d) The total mass of all atoms in a substance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What is the value of Avogadro’s Number (NA)?",
    "options": [
      "a) 1.0 x 10^23",
      "b) 6.02 x 10^23",
      "c) 3.01 x 10^23",
      "d) 12.0 x 10^23"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is the molar mass of a substance?",
    "options": [
      "a) The mass of one atom of the substance.",
      "b) The mass of one mole of a substance expressed in grams.",
      "c) The sum of the atomic numbers of its component atoms.",
      "d) The mass of the substance in kilograms."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "Calculate the molar mass of CCl₄.",
    "options": [
      "a) 12.0 g/mol",
      "b) 35.5 g/mol",
      "c) 142.0 g/mol",
      "d) 154.0 g/mol"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "How many moles are present in 20 g of NaOH (Molar mass NaOH = 40 g/mol)?",
    "options": [
      "a) 0.2 mol",
      "b) 0.5 mol",
      "c) 1.0 mol",
      "d) 2.0 mol"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Calculate the mass of 0.5 moles of HCl (Molar mass HCl = 36.5 g/mol).",
    "options": [
      "a) 18.25 g",
      "b) 36.5 g",
      "c) 73.0 g",
      "d) 0.5 g"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 9,
    "questionText": "Calculate the mass of 10⁻³ mol of MgSO₄ (Molar mass MgSO₄ = 120 g/mol).",
    "options": [
      "a) 0.12 g",
      "b) 1.2 g",
      "c) 12 g",
      "d) 120 g"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 10,
    "questionText": "How many molecules are present in 18.0 g of H₂O?",
    "options": [
      "a) 1 mole",
      "b) 6.02 x 10^23 molecules",
      "c) 18 molecules",
      "d) 18 x 6.02 x 10^23 molecules"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "A sample of glucose contains 3.76 x 10^24 molecules. What is the number of moles in this quantity?",
    "options": [
      "a) 0.625 moles",
      "b) 3.76 moles",
      "c) 6.25 moles",
      "d) 60.2 moles"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "How many atoms are there in 2.3 g of sodium metal (Molar mass Na = 23.0 g/mol)?",
    "options": [
      "a) 0.1 atoms",
      "b) 6.02 x 10^23 atoms",
      "c) 0.602 x 10^23 atoms",
      "d) 60.2 x 10^23 atoms"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "What is the volume of one mole of an ideal gas at STP (Standard Temperature and Pressure)?",
    "options": [
      "a) 1.0 dm³",
      "b) 12.0 dm³",
      "c) 22.4 dm³",
      "d) 44.8 dm³"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "According to Avogadro’s law, equal volumes of all ideal gases at the same temperature and pressure contain:",
    "options": [
      "a) Equal masses of molecules.",
      "b) Equal numbers of atoms.",
      "c) Equal numbers of molecules.",
      "d) Different numbers of molecules."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the volume of 2.5 moles of chlorine molecules at STP?",
    "options": [
      "a) 22.4 dm³",
      "b) 44.8 dm³",
      "c) 56.0 dm³",
      "d) 11.2 dm³"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What is the relationship between density (d), mass (m), and volume (V)?",
    "options": [
      "a) d = m + V",
      "b) d = m / V",
      "c) d = V / m",
      "d) d = m x V"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Calculate the molar mass of a gas which has a density of 1.97 g/dm³ at STP.",
    "options": [
      "a) 1.97 g/mol",
      "b) 22.4 g/mol",
      "c) 44.1 g/mol",
      "d) 88.2 g/mol"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What are the units for molar concentration?",
    "options": [
      "a) g/mol",
      "b) dm³",
      "c) mol/dm³",
      "d) kg/m³"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Calculate the molar concentration of a substance containing 27.64 g of K₂CO₃ dissolved in 1 dm³ of solution (Molar mass K₂CO₃ = 138.2 g/mol).",
    "options": [
      "a) 0.1 mol/dm³",
      "b) 0.2 mol/dm³",
      "c) 1.0 mol/dm³",
      "d) 2.0 mol/dm³"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Which of the following is NOT a general assumption made during stoichiometric calculations?",
    "options": [
      "a) All reactants are completely converted into products.",
      "b) Law of conservation of mass is obeyed.",
      "c) Side reactions always occur.",
      "d) Law of definite proportions is obeyed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "In the reaction N₂(g) + 3H₂(g) → 2NH₃(g), if 3.3 mol of nitrogen reacts, how many moles of hydrogen are consumed?",
    "options": [
      "a) 3.3 mol",
      "b) 6.6 mol",
      "c) 9.9 mol",
      "d) 1.1 mol"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "For the combustion of glucose: C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l). How many moles of carbon dioxide are produced when 2.25 moles of glucose are used (oxygen is in excess)?",
    "options": [
      "a) 2.25 mol",
      "b) 6.00 mol",
      "c) 13.5 mol",
      "d) 1.50 mol"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "In the reaction N₂(g) + 3H₂(g) → 2NH₃(g), what volume of ammonia can be produced by the reaction of 100 dm³ of hydrogen with excess nitrogen at STP?",
    "options": [
      "a) 44.8 dm³",
      "b) 66.7 dm³",
      "c) 100 dm³",
      "d) 22.4 dm³"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "Solid lithium hydroxide (LiOH) is used to remove CO₂ from space vehicles: 2LiOH(s) + CO₂(g) → Li₂CO₃(s) + H₂O(l). Calculate the mass of Li₂CO₃ that can be produced by 20.0 mol of LiOH (Molar mass Li₂CO₃ ≈ 73.89 g/mol, calculated using atomic masses Li=6.94, C=12.01, O=16.00).",
    "options": [
      "a) 73.89 g",
      "b) 147.78 g",
      "c) 738.9 g",
      "d) 10.0 g"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "How many moles of HCl will be neutralized by 2.1 g of baking soda (NaHCO₃) (Molar mass NaHCO₃ = 84.0 g/mol) in the reaction: NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(aq)?",
    "options": [
      "a) 0.025 mol",
      "b) 0.050 mol",
      "c) 0.100 mol",
      "d) 0.250 mol"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 26,
    "questionText": "What volume of hydrogen at STP will be produced when 7.0 g of iron are reacted with an excess of sulfuric acid: Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g) (Molar mass Fe = 55.8 g/mol)?",
    "options": [
      "a) 1.4 dm³",
      "b) 2.8 dm³",
      "c) 7.0 dm³",
      "d) 22.4 dm³"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What is a limiting reactant?",
    "options": [
      "a) The reactant that is present in the largest amount.",
      "b) The reactant that is consumed earlier and controls the amount of products formed.",
      "c) The reactant that is left unreacted at the end of the reaction.",
      "d) The reactant that speeds up the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Why is a large amount of inexpensive reactant often supplied in chemical processes?",
    "options": [
      "a) To decrease the rate of reaction.",
      "b) To ensure the expensive reactant is completely converted to product.",
      "c) To decrease the maximum amount of product.",
      "d) To reduce the overall cost of the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Which strategy is used to identify a limiting reactant?",
    "options": [
      "a) Calculate moles of product from each reactant and identify the reactant producing the least amount.",
      "b) Calculate the mass of each reactant and identify the one with the smallest mass.",
      "c) Identify the reactant with the lowest molar mass.",
      "d) Identify the reactant with the highest initial concentration."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "In the reaction 2H₂(g) + O₂(g) → 2H₂O(l), if 2 moles of hydrogen (4 g) and 2 moles of oxygen (64 g) are mixed, which is the limiting reactant?",
    "options": [
      "a) Hydrogen",
      "b) Oxygen",
      "c) Water",
      "d) Both are limiting."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 31,
    "questionText": "What is the actual yield of a reaction?",
    "options": [
      "a) The maximum amount of product that can be produced based on stoichiometry.",
      "b) The amount of product obtained experimentally in a chemical reaction.",
      "c) The amount of unreacted reactant.",
      "d) The percentage of product obtained compared to the theoretical yield."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "The theoretical yield is defined as:",
    "options": [
      "a) The actual amount of product collected.",
      "b) The amount of product calculated from the balanced chemical equation.",
      "c) The percentage yield of the reaction.",
      "d) The amount of limiting reactant used."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "What is the formula for percentage yield?",
    "options": [
      "a) (Actual yield / Theoretical yield) × 100",
      "b) (Theoretical yield / Actual yield) × 100",
      "c) (Mass of reactant / Mass of product) × 100",
      "d) (Limiting reactant / Excess reactant) × 100"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "Why is the actual yield often less than the theoretical yield?",
    "options": [
      "a) Reactants are never completely converted to products.",
      "b) Side reactions might occur.",
      "c) Product might be lost during separation and purification.",
      "d) All of the above."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "The formation of quicklime (CaO) from limestone (CaCO₃) is given by: CaCO₃(s) → CaO(s) + CO₂(g). If the actual yield of CaO is 2.5 kg when 4.5 kg of limestone is roasted (Molar mass CaCO₃ = 100 g/mol, CaO = 56 g/mol). What is the percentage yield?",
    "options": [
      "a) ~55.5%",
      "b) ~69.6%",
      "c) ~99.2%",
      "d) ~80.2%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Why is stoichiometry important in the production and dosage of medicine?",
    "options": [
      "a) It ensures that all side reactions are avoided.",
      "b) It precisely controls chemical reactions to produce drugs, ensuring efficiency, effectiveness, and safe use.",
      "c) It solely determines the shelf life of medicines.",
      "d) It predicts the color of the final drug product."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is a consequence of overdosing on a medicine like paracetamol?",
    "options": [
      "a) No effect.",
      "b) Immediate cure.",
      "c) Blood thinning, organ damage, and severe liver damage.",
      "d) Increased immune response."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Which statement is incorrect about one mole of a gas?",
    "options": [
      "a) One mole of nitrogen gas contains Avogadro’s number of molecules.",
      "b) One mole of ozone gas contains Avogadro’s number of molecules.",
      "c) One mole of ozone contains Avogadro’s number of O atoms.",
      "d) One mole of hydrogen gas contains Avogadro’s number of molecules."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Which of the following has the greatest mass?",
    "options": [
      "a) 0.5 mol of N₂ (14 g)",
      "b) 0.5 mol of NH₃ (8.5 g)",
      "c) 0.5 mol of He (2 g)",
      "d) 0.5 mol of CO₂ (22 g)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 40,
    "questionText": "Which of the following gases will have the greatest volume at STP?",
    "options": [
      "a) 22 g of CO₂",
      "b) 88 g of N₂O",
      "c) 28 g of CO",
      "d) 28 g of N₂"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "A container holds 0.5 moles of an ideal gas at STP. What is the volume of the gas in dm³?",
    "options": [
      "a) 11.2 dm³",
      "b) 22.4 dm³",
      "c) 44.8 dm³",
      "d) 12.2 dm³"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "How many nitrogen atoms are present in a sample of nitrogen gas (N₂) that has a mass of 14 g?",
    "options": [
      "a) 3.01 × 10²³ atoms",
      "b) 6.02 × 10²³ atoms",
      "c) 1.204 × 10²⁴ atoms",
      "d) 1.204 × 10²³ atoms"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "What is the molar volume of a gas?",
    "options": [
      "a) The volume of any amount of gas at standard conditions.",
      "b) The volume occupied by one gram of a gas.",
      "c) The volume occupied by one mole of an ideal gas at STP.",
      "d) The volume of a gas at its boiling point."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "39 g of potassium (K) and 56 g of iron (Fe) have equal numbers of atoms. What is the reason for this (Approximate Atomic mass K=39, Fe=56)?",
    "options": [
      "a) They have the same atomic number.",
      "b) They are both in their standard states.",
      "c) 39g K is 1 mole of K, and 56g Fe is 1 mole of Fe, both contain Avogadro's number of atoms.",
      "d) They are both metals."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The concept of mole is derived from Avogadro’s number by defining it as:",
    "options": [
      "a) The mass of 12 grams of carbon-12.",
      "b) The amount of a substance that contains Avogadro's number of elementary entities.",
      "c) The molar mass of a substance.",
      "d) The volume of a gas at STP."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "When 1 mole of O₂ and 1 mole of H₂ are mixed, how much O₂ will be left unreacted after the formation of water (2H₂(g) + O₂(g) → 2H₂O(l))?",
    "options": [
      "a) 0 moles",
      "b) 0.5 moles",
      "c) 1 mole",
      "d) 1.5 moles"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What is the primary purpose of adding nitrogen blankets to large shipments of hydrocarbons or edible oils?",
    "options": [
      "a) To increase their temperature.",
      "b) To safeguard them from oxygen and moisture, preventing ignition.",
      "c) To enhance their flavor.",
      "d) To make them denser."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is the volume in dm³ of 4.75 mol of methane (CH₄) gas at STP?",
    "options": [
      "a) 4.75 dm³",
      "b) 22.4 dm³",
      "c) 106.4 dm³",
      "d) 47.5 dm³"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What type of relationship is studied using stoichiometric principles in a balanced chemical equation?",
    "options": [
      "a) Only mole-mole relationships.",
      "b) Only mass-mass relationships.",
      "c) Relationships involving masses, volumes of gases, volumes and concentrations of solutions, limiting/excess reagents, and percentage yield.",
      "d) Only energy relationships."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The law of definite proportions states that a pure compound always contains: a) Different elements combined in variable ratios by mass. b) The same elements combined in the same ratio by mass. c) Different masses of elements in a fixed volume. d) The same elements, but their ratios vary with conditions. Answer: b) The same elements combined in the same ratio by mass.",
    "options": [
      "a) Different elements combined in variable ratios by mass.",
      "b) The same elements combined in the same ratio by mass.",
      "c) Different masses of elements in a fixed volume.",
      "d) The same elements, but their ratios vary with conditions."
    ],
    "correctAnswer": "b"
  }
],
    "States and Phases of Matter": [
  {
    "id": 1,
    "questionText": "Which of the following is NOT a physical property of gases?",
    "options": [
      "a) High compressibility",
      "b) Definite shape and volume",
      "c) Widely separated molecules",
      "d) Negligible intermolecular forces in ideal gases"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the Joule-Thomson effect?",
    "options": [
      "a) Increase in temperature when gases expand.",
      "b) Cooling takes place when sudden expansion of gases occurs.",
      "c) Pressure exerted by gas molecules on container walls.",
      "d) Diffusion of gas molecules."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "How is the pressure of a gas generated?",
    "options": [
      "a) By the attractive forces between gas molecules.",
      "b) By the collisions of gas molecules with the walls of the container.",
      "c) By the volume occupied by the gas molecules.",
      "d) By the expansion of the gas."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What is the ideal gas equation?",
    "options": [
      "a) P/V = nRT",
      "b) PV = n/RT",
      "c) PV = nRT",
      "d) P + V = nRT"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Which formula can be used to calculate the relative molecular mass (Mr) of a gas using the ideal gas equation?",
    "options": [
      "a) Mr = PV / mRT",
      "b) Mr = mRT / PV",
      "c) Mr = nRT / PV",
      "d) Mr = mP / RTV"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "Calculate the relative molecular mass of a gas if 1.34 g of the gas occupies 1 dm³ at -90 °C under 7 atm pressure. (R = 0.0821 atm dm³ mol⁻¹ K⁻¹)",
    "options": [
      "a) 44 amu",
      "b) 28 amu",
      "c) 32 amu",
      "d) 64 amu"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Compared to gases, liquids are:",
    "options": [
      "a) 10⁵ times more compressible.",
      "b) 10⁵ times less compressible.",
      "c) Equally compressible.",
      "d) Incompressible."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the evidence for the free motion of liquid molecules?",
    "options": [
      "a) Their definite volume.",
      "b) Diffusion among miscible liquids.",
      "c) Their incompressibility.",
      "d) Their high density."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Which of the following is NOT one of the three types of intermolecular forces mentioned?",
    "options": [
      "a) Instantaneous dipole-induced dipole forces",
      "b) Permanent dipole-permanent dipole forces",
      "c) Covalent bonds",
      "d) Hydrogen bonding"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What are London Dispersion Forces?",
    "options": [
      "a) Forces between permanent dipoles.",
      "b) Forces between hydrogen atoms and electronegative atoms.",
      "c) Momentary force of attraction between an instantaneous dipole and an induced dipole.",
      "d) Forces in ionic compounds."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What happens to the strength of London Dispersion Forces as the molecular mass (Mr) of a compound increases?",
    "options": [
      "a) They become weaker.",
      "b) They become stronger.",
      "c) They remain constant.",
      "d) They disappear."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The boiling points of noble gases (Group 18) increase from helium (He) to xenon (Xe). This is due to the increase in:",
    "options": [
      "a) Electronegativity.",
      "b) Covalent bonding.",
      "c) London Dispersion Forces.",
      "d) Metallic character."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "How does surface area (shape of molecule) affect the strength of intermolecular forces?",
    "options": [
      "a) Larger surface area leads to weaker forces.",
      "b) Larger surface area leads to stronger forces.",
      "c) Surface area has no effect on forces.",
      "d) Branched molecules have stronger forces."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Among the isomers of pentane, which one has the highest boiling point?",
    "options": [
      "a) n-pentane (straight chain)",
      "b) 2-Methylbutane (isopentane)",
      "c) 2,2-Dimethylpropane (neopentane)",
      "d) All have the same boiling point."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "What is a permanent dipole-permanent dipole force?",
    "options": [
      "a) Force of attraction between non-polar molecules.",
      "b) Force of attraction between the positive end of a polar molecule and the negative end of a nearby polar molecule.",
      "c) Force of attraction between ions.",
      "d) Force due to temporary induced dipoles."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Which of the following conditions is required for hydrogen bonding to occur?",
    "options": [
      "a) The hydrogen atom must be bonded to a carbon atom.",
      "b) The electronegative atom must have an empty orbital.",
      "c) The hydrogen atom is connected to a highly electronegative atom (F, O, or N) and that atom has a lone pair of electrons.",
      "d) The molecule must be non-polar."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "How is a hydrogen bond typically represented?",
    "options": [
      "a) A solid line (—)",
      "b) A double line (=)",
      "c) A dotted line (…)",
      "d) A wavy line (~)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is the approximate strength of a hydrogen bond compared to an ordinary covalent bond?",
    "options": [
      "a) Ten times stronger.",
      "b) Equal in strength.",
      "c) One tenth of an ordinary covalent bond.",
      "d) Much weaker than London forces."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Why does ice float on water?",
    "options": [
      "a) Water molecules are not hydrogen bonded in ice.",
      "b) Ice has a higher density than liquid water.",
      "c) Extensive hydrogen bonding in ice creates empty spaces, making it less dense.",
      "d) Ice molecules are arranged randomly."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What is the reason for water's high specific heat capacity?",
    "options": [
      "a) Its small molecular size.",
      "b) Its non-polar nature.",
      "c) Its unique molecular structure allowing strong hydrogen bonds.",
      "d) Its ability to form ionic bonds."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Water has the highest enthalpy change of vaporization (41 kJ/mol) among Group 16 hydrides. Why?",
    "options": [
      "a) Due to weak London dispersion forces.",
      "b) Water molecules are exceptionally hydrogen bonded.",
      "c) Water has a lower boiling point.",
      "d) Water molecules are linear."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is surface tension?",
    "options": [
      "a) The resistance of a liquid to flow.",
      "b) The spontaneous conversion of a liquid into vapour.",
      "c) A downward pull of water molecules at the surface, making the water surface stretched and strained.",
      "d) The pressure exerted by liquid vapour."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "How does stronger intermolecular forces affect the viscosity of a liquid?",
    "options": [
      "a) It decreases viscosity.",
      "b) It increases viscosity.",
      "c) It has no effect on viscosity.",
      "d) It makes the liquid less resistant to flow."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "Why does evaporation cause cooling?",
    "options": [
      "a) High energy molecules are recaptured by the liquid.",
      "b) Low energy molecules leave the liquid, increasing the average kinetic energy of the remaining molecules.",
      "c) High energy molecules leave the liquid, decreasing the average kinetic energy of the remaining molecules.",
      "d) The process is endothermic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What is vapour pressure?",
    "options": [
      "a) The pressure exerted by a liquid on the walls of its container.",
      "b) The pressure exerted by the liquid vapour in equilibrium with its liquid at a given temperature.",
      "c) The atmospheric pressure above a liquid.",
      "d) The pressure at which a liquid boils."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "How does increasing temperature affect the vapour pressure of a liquid?",
    "options": [
      "a) It decreases vapour pressure.",
      "b) It increases vapour pressure.",
      "c) It has no effect on vapour pressure.",
      "d) It decreases the rate of evaporation."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "When does a liquid start boiling?",
    "options": [
      "a) When its temperature reaches 100 °C.",
      "b) When its vapour pressure becomes equal to the atmospheric or external pressure.",
      "c) When intermolecular forces are completely broken.",
      "d) When the kinetic energy of its molecules becomes zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is molar heat of fusion?",
    "options": [
      "a) The heat absorbed by one mole of a liquid to convert it into vapour.",
      "b) The amount of heat absorbed by one mole of a solid to melt it into the liquid at its melting point at 1 atmospheric pressure.",
      "c) The energy released when a liquid freezes.",
      "d) The energy required to break chemical bonds in a solid."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is molar heat of vaporization?",
    "options": [
      "a) The heat absorbed by one mole of a solid to melt.",
      "b) The amount of heat absorbed by one mole of a liquid to convert it into one mole of vapour at its boiling point at 1 atmospheric pressure.",
      "c) The energy released during condensation.",
      "d) The energy required to heat a liquid by 1 degree Celsius."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "How do molar heat of fusion and vaporization affect the particles that make up matter?",
    "options": [
      "a) They cause particles to move closer together.",
      "b) They provide enough energy for particles to move away from one another and change state.",
      "c) They decrease the kinetic energy of particles.",
      "d) They increase the intermolecular forces."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What is a key characteristic of solids?",
    "options": [
      "a) Their constituent particles undergo translatory motion.",
      "b) They are highly compressible.",
      "c) Their particles are closely packed and held by strong cohesive forces.",
      "d) They have no definite shape."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Why is the compression of solids generally not possible?",
    "options": [
      "a) Their particles are moving too fast.",
      "b) Their atoms are spherically symmetrical.",
      "c) Their constituent particles are closely packed and cannot move closer.",
      "d) Solids have very low density."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What kind of motion do the constituent particles of a solid typically exhibit?",
    "options": [
      "a) Only translational motion.",
      "b) Translational and rotational motion.",
      "c) Only vibratory motion about their mean positions.",
      "d) No motion at all."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What is the definition of a crystal lattice?",
    "options": [
      "a) A random arrangement of atoms in a solid.",
      "b) The regular arrangement of ions, atoms, or molecules in three-dimensional space.",
      "c) The melting point of a solid.",
      "d) The process of crystal growth."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Which of the following is a characteristic property of crystalline solids?",
    "options": [
      "a) They melt over a wide temperature range.",
      "b) They are isotropic.",
      "c) They have a definite and sharp melting point.",
      "d) They lack a regular arrangement of particles."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is a cleavage plane in crystalline solids?",
    "options": [
      "a) A random surface where the solid breaks.",
      "b) A definite plane along which crystalline solids break, inclined at a particular angle.",
      "c) A plane where crystal growth initiates.",
      "d) A plane of maximum intermolecular forces."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What are amorphous solids?",
    "options": [
      "a) Solids with a definite regular three-dimensional geometric shape.",
      "b) Solids that melt sharply at a specific temperature.",
      "c) Solids that lack long-range order in their particle arrangement.",
      "d) Solids that are anisotropic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Which property differentiates crystalline solids from amorphous solids?",
    "options": [
      "a) Compressibility",
      "b) Hardness",
      "c) Anisotropy vs. Isotropy in properties",
      "d) Presence of intermolecular forces"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What are liquid crystals?",
    "options": [
      "a) Substances that are fully liquid at all temperatures.",
      "b) Substances that are fully solid at all temperatures.",
      "c) Substances existing in a phase that is neither fully liquid nor fully solid, where molecules can move around but have restricted motion.",
      "d) Solutions of solids in liquids."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "What is a common molecular shape of molecules in most liquid crystals?",
    "options": [
      "a) Spherical",
      "b) Irregular and random",
      "c) Rigid, rod-like shape",
      "d) Cubic"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Which of the following is a property of liquid crystals?",
    "options": [
      "a) They are always isotropic.",
      "b) They flow like liquids but show optical properties like crystals.",
      "c) They have no viscosity.",
      "d) They always have spherical molecules."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "How are liquid crystals used in diagnostics for tumors and infections?",
    "options": [
      "a) By their electrical conductivity.",
      "b) By detecting characteristic higher temperatures of affected tissue.",
      "c) By absorbing light at specific wavelengths.",
      "d) By reacting chemically with diseased cells."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which of the following is the most common application of liquid crystal technology?",
    "options": [
      "a) Solar panels",
      "b) Batteries",
      "c) Liquid Crystal Displays (LCDs)",
      "d) Catalytic converters"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which change of state involves overcoming only London dispersion forces?",
    "options": [
      "a) Melting ice ((s) → (l))",
      "b) Boiling water ((l) → (g))",
      "c) Subliming iodine ((s) → (g))",
      "d) Dissolving sodium chloride in water"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Which of the following liquids would you expect to have the highest viscosity at a given temperature?",
    "options": [
      "a) Water",
      "b) Acetone",
      "c) Glycerine",
      "d) Benzene"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What is the phenomenon of \"attainment of equilibrium when the evaporation of liquid is carried out in an evacuated closed vessel\"?",
    "options": [
      "a) Boiling",
      "b) Condensation",
      "c) Vapor pressure equilibrium",
      "d) Freezing"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What is the main reason for the low density of ice compared to liquid water?",
    "options": [
      "a) Higher kinetic energy of water molecules.",
      "b) Close packing of molecules in ice.",
      "c) Open, cage-like structure due to extensive hydrogen bonding creating empty spaces.",
      "d) Conversion of water to a gas."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "How does an increase in external pressure affect the boiling point of a liquid?",
    "options": [
      "a) It decreases the boiling point.",
      "b) It increases the boiling point.",
      "c) It has no effect.",
      "d) It depends on the liquid."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Acetone feels colder than water when poured on hands. Why?",
    "options": [
      "a) Acetone has stronger intermolecular forces than water.",
      "b) Acetone evaporates more slowly than water.",
      "c) Acetone has weaker intermolecular forces, leading to faster evaporation and more cooling.",
      "d) Water has a higher specific heat capacity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The resistance offered by a liquid to its flow is called:",
    "options": [
      "a) Surface tension",
      "b) Vapour pressure",
      "c) Viscosity",
      "d) Evaporation"
    ],
    "correctAnswer": "c"
  }
],
    "Chemical Energetics": [
  {
    "id": 1,
    "questionText": "What is enthalpy (H)?",
    "options": [
      "a) The work done by a system.",
      "b) The sum of all possible, potential, and kinetic energies of a system.",
      "c) The heat transferred at constant volume.",
      "d) The measure of disorder in a system."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "In an exothermic process, what is the relationship between the enthalpy of products (HP) and reactants (HR)?",
    "options": [
      "a) HP > HR",
      "b) HP < HR",
      "c) HP = HR",
      "d) Cannot be determined."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What characterizes an endothermic process?",
    "options": [
      "a) Heat is released to the surroundings.",
      "b) Heat is absorbed by the system from surroundings.",
      "c) The temperature of the system increases.",
      "d) The enthalpy change (ΔH) is negative."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "On an energy profile diagram, what does Ea represent?",
    "options": [
      "a) Enthalpy of reactants.",
      "b) Enthalpy of products.",
      "c) Energy of activation, the minimum energy required by reactant molecules for effective collisions.",
      "d) Enthalpy change of the reaction."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "What is the standard enthalpy change of formation (ΔfH°) of any element in its standard state?",
    "options": [
      "a) Always positive.",
      "b) Always negative.",
      "c) Zero.",
      "d) Dependent on temperature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which definition corresponds to standard enthalpy change of neutralization (ΔneutH°)?",
    "options": [
      "a) When one mole of a substance is completely burnt in excess of oxygen.",
      "b) When one mole of liquid water is formed from its ionic components, and the net neutralization reaction is exothermic.",
      "c) When one mole of a substance dissolves in excess solvent.",
      "d) When one mole of gaseous atoms is formed from an element."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "The first electron affinity (ea₁) is an enthalpy change involved when:",
    "options": [
      "a) An electron is removed from a gaseous atom.",
      "b) 1 mole of electrons is added to 1 mole of gaseous atoms to form 1 mole of gaseous uni-negative ions.",
      "c) An electron is excited to a higher energy level.",
      "d) An electron is shared between two atoms."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is bond dissociation energy (E)?",
    "options": [
      "a) The energy released when a bond is formed.",
      "b) The energy absorbed when a bond is broken to form neutral atoms in one mole of a particular bond.",
      "c) The activation energy of a reaction.",
      "d) The lattice energy of an ionic compound."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "For the reaction H₂(g) + ½O₂(g) → H₂O(g), the formation of water is exothermic because:",
    "options": [
      "a) More energy is absorbed to break bonds than released in forming bonds.",
      "b) More energy is released in forming bonds than absorbed in breaking bonds.",
      "c) The activation energy is very high.",
      "d) It is a spontaneous reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "What is the calorie content of food?",
    "options": [
      "a) A measure of the mass of the food.",
      "b) A measure of the energy ‘released’ when a unit mass of food is completely burnt.",
      "c) The amount of water in food.",
      "d) The sum of all nutrients in food."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "According to Hess’s Law, the total enthalpy change for a chemical reaction:",
    "options": [
      "a) Depends on the pathway taken from reactants to products.",
      "b) Is independent of the pathway taken, as long as initial and final conditions are the same.",
      "c) Varies with the concentration of reactants.",
      "d) Is only applicable to exothermic reactions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The equation for the enthalpy change of a reaction (ΔrH°) using bond energies is:",
    "options": [
      "a) ΣE(bonds formed) - ΣE(bonds broken)",
      "b) ΣE(bonds broken) - ΣE(bonds formed)",
      "c) E(reactants) + E(products)",
      "d) E(activation) - E(products)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "The process in which water molecules surround and interact with the solute ions is called:",
    "options": [
      "a) Dissolution",
      "b) Crystallization",
      "c) Hydration",
      "d) Ionization"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What are the two primary factors affecting the magnitude of hydration energy?",
    "options": [
      "a) Temperature and pressure.",
      "b) Charge on the ion and size of the ion.",
      "c) Concentration of the solution and type of solvent.",
      "d) Mass of the ion and boiling point of water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is lattice energy (ΔlattH°)?",
    "options": [
      "a) The enthalpy change when one mole of an ionic compound dissolves in water.",
      "b) The energy released when one mole of a gaseous ionic compound is formed from its gaseous ions.",
      "c) The energy required to break a covalent bond.",
      "d) The energy associated with an electrical double layer."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "How does an increase in the size of either cations or anions affect lattice energy?",
    "options": [
      "a) It increases lattice energy.",
      "b) It decreases lattice energy.",
      "c) It has no effect on lattice energy.",
      "d) It makes lattice energy more positive."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What is the Born-Haber cycle used for?",
    "options": [
      "a) Calculating bond energies.",
      "b) Determining the spontaneity of a reaction.",
      "c) Calculating lattice energies or other enthalpy changes for ionic compounds.",
      "d) Measuring atomic radii."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is entropy (S)?",
    "options": [
      "a) A measure of the total energy in a system.",
      "b) A measure of the heat content of a system.",
      "c) A measure of the number of ways energy can be distributed within a system at a specific temperature.",
      "d) A measure of the bond strength in a molecule."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Why does diffusion happen spontaneously?",
    "options": [
      "a) Because molecules are always moving.",
      "b) Because there is a large number of ways of arranging the molecules.",
      "c) Because of strong intermolecular forces.",
      "d) Because the total energy of the system decreases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Which of the following usually has lower entropy?",
    "options": [
      "a) Gases",
      "b) Liquids",
      "c) Solids",
      "d) Dissolved substances"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What happens to the entropy of the system (ΔS°system) when a solid converts to a liquid, then to a gas?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It first decreases, then increases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "For the reaction 2Ca(s) + O₂(g) → 2CaO(s), if the standard entropy change of the system (ΔS°system) is negative, this means:",
    "options": [
      "a) The system becomes more ordered.",
      "b) The system becomes more disordered.",
      "c) The reaction is always spontaneous.",
      "d) The reaction absorbs heat."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 23,
    "questionText": "What is the formula for the total entropy change (ΔStotal)?",
    "options": [
      "a) ΔStotal = ΔSsystem - ΔSsurrounding",
      "b) ΔStotal = ΔSsystem + ΔSsurrounding",
      "c) ΔStotal = ΔSsystem × ΔSsurrounding",
      "d) ΔStotal = ΔSsurrounding / ΔSsystem"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "A reaction is considered spontaneous if the total entropy change (ΔStotal) is:",
    "options": [
      "a) Negative",
      "b) Zero",
      "c) Positive",
      "d) Dependent on Gibbs free energy only."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The unit of temperature times entropy (TΔS) represents which thermodynamic quantity?",
    "options": [
      "a) Enthalpy",
      "b) Gibbs free energy",
      "c) Work",
      "d) Heat"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "For a reaction to be spontaneous at all temperatures, what must be the signs of ΔH and ΔS?",
    "options": [
      "a) ΔH (+), ΔS (-)",
      "b) ΔH (-), ΔS (+)",
      "c) ΔH (-), ΔS (-)",
      "d) ΔH (+), ΔS (+)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Which of the following is NOT a standard condition for measuring enthalpy changes?",
    "options": [
      "a) Temperature of 298 K (25 °C).",
      "b) Pressure of 1 atm (101 kPa).",
      "c) Concentration of 1 mol dm⁻³ for solutions.",
      "d) High activation energy."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 28,
    "questionText": "Which of the following equations represents the standard heat of formation of C₂H₄? [282 - Q.1 I]",
    "options": [
      "a) 2C(s) + 2H₂(g) → C₂H₄(g)",
      "b) C₂H₄(g) → 2C(s) + 2H₂(g)",
      "c) ½ C₂H₄(g) → C(s) + H₂(g)",
      "d) 2C(g) + 4H(g) → C₂H₄(g)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 29,
    "questionText": "The enthalpy of solution can be expressed in terms of which enthalpy changes?",
    "options": [
      "a) Lattice energy and bond dissociation energy.",
      "b) Lattice energy and hydration energy.",
      "c) Hydration energy and electron affinity.",
      "d) Ionization energy and electron affinity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Which of the following processes would typically result in an increase in entropy of the system?",
    "options": [
      "a) Freezing a liquid.",
      "b) Condensation of a gas.",
      "c) Dissolving a solid in a liquid.",
      "d) Forming a precipitate."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "What is the difference between enthalpy change of reaction and standard enthalpy change of formation?",
    "options": [
      "a) Enthalpy change of reaction is for any reaction, while standard enthalpy of formation is for 1 mole of compound from its elements in standard states.",
      "b) Enthalpy change of reaction is always exothermic, while formation can be endothermic.",
      "c) Standard enthalpy of formation uses elements, reaction enthalpy uses compounds.",
      "d) There is no difference, they are interchangeable terms."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "Why is the enthalpy of hydration always an exothermic process for gaseous ions?",
    "options": [
      "a) Because water molecules form covalent bonds with ions.",
      "b) Because energy is released when water molecules (dipoles) are attracted to and surround the ions (ion-dipole forces).",
      "c) Because ions gain electrons from water.",
      "d) Because water is a polar solvent."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "When 2Ca(s) + O₂(g) → 2CaO(s), the enthalpy change of reaction is ΔrH° = -1270 kJ mol⁻¹. What is the sign of the entropy change of the surroundings (ΔS°surrounding) at 298 K for this reaction?",
    "options": [
      "a) Positive",
      "b) Negative",
      "c) Zero",
      "d) Cannot be determined without ΔS°system."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What is the relationship between Gibbs free energy (ΔG), enthalpy change (ΔH), and entropy change (ΔS)? [281 - implied]",
    "options": [
      "a) ΔG = ΔH + TΔS",
      "b) ΔG = ΔH - TΔS",
      "c) ΔG = TΔS - ΔH",
      "d) ΔG = ΔH / TΔS"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "For the reaction CaCO₃(s) → CaO(s) + CO₂(g), how would you expect the entropy change of the system (ΔS°system) to be?",
    "options": [
      "a) Negative, as a gas is formed from a solid.",
      "b) Positive, as a gas is formed from a solid.",
      "c) Zero, as the number of moles of solids is conserved.",
      "d) Negative, as complexity decreases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which factor would lead to a greater enthalpy change of neutralization?",
    "options": [
      "a) Lower concentration of acid/base.",
      "b) Higher activation energy.",
      "c) Stronger acid and strong base.",
      "d) Larger volume of solvent."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What are standard conditions for measuring energy changes?",
    "options": [
      "a) 0 °C and 1 atm pressure.",
      "b) 25 °C and 1 atm pressure, with 1 mol dm⁻³ for solutions.",
      "c) High temperature and high pressure.",
      "d) Any conditions where the reaction can occur."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "The standard enthalpy change for the reaction: C(s) + O₂(g) → CO₂(g) is given as ΔcH° = -393.5 kJ mol⁻¹. This is also the standard enthalpy of:",
    "options": [
      "a) Atomization of carbon.",
      "b) Neutralization.",
      "c) Formation of CO₂.",
      "d) Hydration."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The decomposition of N₂O₅(g) → 4NO₂(g) + O₂(g) would likely involve which change in entropy of the system?",
    "options": [
      "a) Significant decrease.",
      "b) Slight decrease.",
      "c) Significant increase.",
      "d) No change."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "When Na⁺(aq) is surrounded by water molecules during hydration, what type of force is created?",
    "options": [
      "a) Covalent bond.",
      "b) Hydrogen bond.",
      "c) Ion-dipole force.",
      "d) London dispersion force."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What indicates that a reaction is in equilibrium based on Gibbs free energy?",
    "options": [
      "a) ΔG > 0",
      "b) ΔG < 0",
      "c) ΔG = 0",
      "d) ΔG is very large."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "How are the units of standard entropy (S°) typically expressed?",
    "options": [
      "a) J mol⁻¹",
      "b) kJ mol⁻¹",
      "c) J K⁻¹ mol⁻¹",
      "d) kJ K⁻¹ mol⁻¹"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Which of the following generally has a lower standard entropy (S°)?",
    "options": [
      "a) Graphite",
      "b) Diamond",
      "c) CO₂ gas",
      "d) Water vapor"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Which enthalpy change is defined as \"the enthalpy change when one mole of a gaseous ionic compound is formed from its gaseous ions\"?",
    "options": [
      "a) Standard enthalpy of formation",
      "b) Standard enthalpy of hydration",
      "c) Standard lattice enthalpy",
      "d) Standard enthalpy of solution"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "For the dissolution of Na₂CO₃ (s) → 2Na⁺(aq) + CO₃²⁻(aq), what is the process called?",
    "options": [
      "a) Atomization",
      "b) Neutralization",
      "c) Standard enthalpy change of solution",
      "d) Combustion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "When calculating enthalpy change of reaction using bond energies, why are the bond enthalpies of bonds formed taken with a minus sign?",
    "options": [
      "a) Because energy is absorbed when bonds are formed.",
      "b) Because energy is released when bonds are formed.",
      "c) Because it's an endothermic process.",
      "d) Because bond formation is always non-spontaneous."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What is the effect of ionic charge on the numerical magnitude of lattice energy?",
    "options": [
      "a) Higher ionic charge leads to higher (more negative) lattice energy.",
      "b) Higher ionic charge leads to lower (less negative) lattice energy.",
      "c) Ionic charge has no effect.",
      "d) It only affects hydration energy."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 48,
    "questionText": "For a reaction where ΔH is positive and ΔS is negative, how does temperature affect spontaneity?",
    "options": [
      "a) Always spontaneous.",
      "b) Always non-spontaneous.",
      "c) Spontaneous at high temperatures.",
      "d) Spontaneous at low temperatures."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "What concept allows calculation of the enthalpy change of solution by summing lattice energy and hydration energies?",
    "options": [
      "a) Bond energy calculations.",
      "b) Gibbs free energy equation.",
      "c) Hess's Law (implied through enthalpy cycles).",
      "d) Boltzmann distribution."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "If ΔG < 0 for a reaction, what does it signify? [281 - implied]",
    "options": [
      "a) The reaction is at equilibrium.",
      "b) The reaction is non-spontaneous.",
      "c) The reaction is spontaneous.",
      "d) The reaction is endothermic."
    ],
    "correctAnswer": "c"
  }
],
    "Reaction Kinetics": [
  {
    "id": 1,
    "questionText": "What is reaction kinetics?",
    "options": [
      "a) The study of the amount of reactants and products.",
      "b) The study of energy changes in chemical reactions.",
      "c) The study of the rates of chemical reactions.",
      "d) The study of chemical equilibrium."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "According to Collision Theory, for a chemical reaction to occur, reactant particles must:",
    "options": [
      "a) Have low energy.",
      "b) Collide with one another with proper orientation and sufficient activation energy.",
      "c) Be in different phases.",
      "d) Form an ionic bond."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "What is activation energy (Ea)?",
    "options": [
      "a) The energy released during a collision.",
      "b) The minimum amount of energy required for an effective collision between reacting species.",
      "c) The energy of the products.",
      "d) The difference in energy between reactants and products."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How does activation energy affect the rate of a reaction?",
    "options": [
      "a) Higher activation energy leads to a faster reaction rate.",
      "b) Lower activation energy leads to a faster reaction rate.",
      "c) Activation energy has no effect on the reaction rate.",
      "d) Activation energy only affects the equilibrium position."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "How is the rate of a reaction defined?",
    "options": [
      "a) The total change in concentration over the entire reaction.",
      "b) The change in the concentration of a reactant or a product divided by the time taken for the change.",
      "c) The concentration of reactants at equilibrium.",
      "d) The activation energy divided by time."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "In the rate expression, what does a negative sign for a reactant (e.g., -Δ[A]/Δt) indicate?",
    "options": [
      "a) An increase in the concentration of reactant A.",
      "b) A decrease in the concentration of reactant A.",
      "c) The reaction is endothermic.",
      "d) The reaction is irreversible."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "What is the difference between instantaneous rate and average rate of reaction?",
    "options": [
      "a) Instantaneous rate is always higher than average rate.",
      "b) Average rate is the rate at a specific instant, while instantaneous rate is over a period.",
      "c) Instantaneous rate is the rate at any one instant, while average rate is over a time period.",
      "d) They are always equal."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "For the reaction N₂(g) + 3H₂(g) → 2NH₃(g), if the concentration of ammonia is 3.5 mol dm⁻³ after 1.0 min and 6.2 mol dm⁻³ after 4.0 minutes, what is the average rate of production of ammonia for the system between 1.0 and 4.0 minutes?",
    "options": [
      "a) 3.5 mol dm⁻³ min⁻¹",
      "b) 2.7 mol dm⁻³ min⁻¹",
      "c) 0.90 mol dm⁻³ min⁻¹",
      "d) 6.2 mol dm⁻³ min⁻¹"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "When determining the rate of a reaction from a concentration-time curve of a reactant, how is the rate calculated?",
    "options": [
      "a) By calculating the area under the curve.",
      "b) By finding the slope of a tangent drawn to the curve at a specific point.",
      "c) By taking the initial concentration divided by the final time.",
      "d) By measuring the height of the curve."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Which method can be used to measure the rate of a reaction if a reactant or product absorbs ultraviolet, visible or infrared radiation?",
    "options": [
      "a) Titration",
      "b) Electrical conductivity method",
      "c) Spectrophotometry or colorimetry",
      "d) Volume change method"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What happens to the rate of reaction if the concentration of one or more reactants increases?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It first increases then decreases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What does the Boltzmann distribution curve illustrate?",
    "options": [
      "a) The distribution of kinetic energies of particles at a certain temperature.",
      "b) The change in activation energy with temperature.",
      "c) The effect of a catalyst on reaction rate.",
      "d) The concentration of reactants over time."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 13,
    "questionText": "On a Boltzmann distribution curve, what does the shaded area under the graph (beyond Ea) represent?",
    "options": [
      "a) The total number of molecules.",
      "b) The proportion of molecules that have enough energy to cause a chemical change (effective collisions).",
      "c) The activation energy itself.",
      "d) The average kinetic energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "How does an increase in temperature affect the proportion of successful collisions in a reaction mixture?",
    "options": [
      "a) It decreases it.",
      "b) It has no effect.",
      "c) It increases it greatly.",
      "d) It makes all collisions successful."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is a catalyst?",
    "options": [
      "a) A substance that is consumed in a chemical reaction.",
      "b) A substance that alters the rate of a chemical reaction but remains chemically unchanged.",
      "c) A substance that increases the activation energy.",
      "d) A substance that changes the equilibrium position."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "How does a catalyst increase the rate of a reaction?",
    "options": [
      "a) By providing a new reaction path with a high activation energy barrier.",
      "b) By increasing the kinetic energy of reacting particles.",
      "c) By providing a new reaction path with a low activation energy barrier.",
      "d) By shifting the chemical equilibrium."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "What is homogeneous catalysis?",
    "options": [
      "a) The catalyst and reactants are in different phases.",
      "b) The catalyst and reactants are in the same phase.",
      "c) The catalyst is a solid.",
      "d) The reaction occurs only on the surface of the catalyst."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What are enzymes?",
    "options": [
      "a) Inorganic catalysts.",
      "b) Biochemical catalysts that lower activation energy and increase reaction rate in living organisms.",
      "c) Substances that inhibit biochemical reactions.",
      "d) Products of a chemical reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "What is a rate law?",
    "options": [
      "a) An equation that relates the rate of a reaction to the concentration of products.",
      "b) An equation that relates the rate of a reaction to the concentrations of reactants raised to various powers according to experimental data.",
      "c) A description of the reaction mechanism.",
      "d) An equation for activation energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "What is the rate constant (k)?",
    "options": [
      "a) A variable that changes with reactant concentration.",
      "b) The rate of reaction when the concentrations of the reactants are unity.",
      "c) The activation energy of the reaction.",
      "d) The overall order of the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "The exponent 'x' in the rate equation Rate = k[A]ˣ[B]ʸ gives the order of reaction with respect to A. What does this define?",
    "options": [
      "a) The total number of reactant molecules.",
      "b) How the reactant concentration influences its rate.",
      "c) The stoichiometry of the reaction.",
      "d) The number of steps in the mechanism."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "For a zero-order reaction, how is the rate affected by the concentration of reactants?",
    "options": [
      "a) It is directly proportional to concentration.",
      "b) It is inversely proportional to concentration.",
      "c) It is independent of the concentration of the reactants.",
      "d) It is proportional to the square of the concentration."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an example of a zero-order reaction?",
    "options": [
      "a) Decomposition of nitrogen pentaoxide.",
      "b) H₂(g) + Cl₂(g) → 2HCl(g) in sunlight.",
      "c) Hydrolysis of an ester.",
      "d) Reaction of nitrogen (II) oxide with H₂."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What are the units of the rate constant (k) for a first-order reaction?",
    "options": [
      "a) mol dm⁻³ s⁻¹",
      "b) dm³ mol⁻¹ s⁻¹",
      "c) s⁻¹",
      "d) dm⁶ mol⁻² s⁻¹"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What are the units of the rate constant (k) for a second-order reaction?",
    "options": [
      "a) s⁻¹",
      "b) mol dm⁻³ s⁻¹",
      "c) dm³ mol⁻¹ s⁻¹",
      "d) dm⁶ mol⁻² s⁻¹"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "The half-life (t₁/₂) of a first-order reaction is related to the rate constant (k) by which formula?",
    "options": [
      "a) k = t₁/₂ / 0.693",
      "b) k = 0.693 / t₁/₂",
      "c) k = 1 / t₁/₂",
      "d) k = 0.5 * t₁/₂"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "A sample of hydrogen peroxide has a half-life of 2 hours and decomposes in a first-order reaction. Calculate the rate constant (k) for this reaction in s⁻¹.",
    "options": [
      "a) 5.775 x 10⁻⁴ s⁻¹",
      "b) 9.625 x 10⁻⁵ s⁻¹",
      "c) 3.465 x 10⁻⁴ s⁻¹",
      "d) 1.925 x 10⁻¹ s⁻¹"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is a reaction mechanism?",
    "options": [
      "a) The overall balanced chemical equation.",
      "b) A detailed, step-by-step description of how a chemical reaction occurs at the molecular level.",
      "c) The rate law of a reaction.",
      "d) A graph of concentration versus time."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is the molecularity of an elementary step?",
    "options": [
      "a) The overall order of the reaction.",
      "b) The number of reactant molecules involved in an elementary step.",
      "c) The number of product molecules formed.",
      "d) The activation energy of the step."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "A bimolecular elementary reaction involves:",
    "options": [
      "a) A single reactant molecule.",
      "b) Two atoms, ions, or molecules.",
      "c) Three molecules simultaneously.",
      "d) Only product molecules."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What are intermediates in a reaction mechanism?",
    "options": [
      "a) Stable products of the reaction.",
      "b) Short-lived species produced in one step and consumed in a subsequent step, not appearing in the overall balanced equation.",
      "c) Catalysts for the reaction.",
      "d) Reactants that are in excess."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the rate-determining step in a multi-step reaction?",
    "options": [
      "a) The fastest step.",
      "b) The step that consumes all reactants.",
      "c) The significantly slowest step, which controls the overall rate of the reaction.",
      "d) The first step in the mechanism."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Which of the following factors would NOT typically affect the rate of a chemical reaction?",
    "options": [
      "a) Concentration of reactants.",
      "b) Temperature of the system.",
      "c) Surface area.",
      "d) Enthalpy change of reaction."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "How does increasing the pressure of gaseous reactants affect the rate of reaction?",
    "options": [
      "a) It decreases the rate.",
      "b) It has no effect.",
      "c) It increases the rate by increasing concentration.",
      "d) It only affects liquid reactants."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The rate constant for a reaction is given as 3.5 × 10⁻⁴ s⁻¹. What is the order of this reaction?",
    "options": [
      "a) Zero order",
      "b) First order",
      "c) Second order",
      "d) Third order"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "A reaction is second order with respect to a reactant. If its concentration is doubled, how much does the rate of reaction increase?",
    "options": [
      "a) 2 times",
      "b) 4 times",
      "c) 8 times",
      "d) It remains the same."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "Why does wood burn more rapidly in pure oxygen than in air?",
    "options": [
      "a) Oxygen is a catalyst.",
      "b) The concentration of oxygen is higher in pure oxygen, increasing the rate of combustion.",
      "c) The activation energy for burning is lower in pure oxygen.",
      "d) Air contains inert gases that slow down the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What is the purpose of using a standard alkali (like NaOH) with phenolphthalein as an indicator in measuring the rate of hydrolysis of an ester?",
    "options": [
      "a) To increase the reaction rate.",
      "b) To neutralize the acid formed during the reaction, allowing measurement of concentration change.",
      "c) To absorb the ester.",
      "d) To provide a color change indicating the end of the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The rate equation for the reaction H₂O₂(aq) + 2I⁻(aq) + 2H⁺(aq) → 2H₂O(l) + I₂(aq) is rate = k[H₂O₂][I⁻]. What is the overall order of this reaction?",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 0"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "How is the rate constant (k) for a reaction typically determined using the initial concentration method?",
    "options": [
      "a) By plotting a graph of concentration vs. time.",
      "b) By measuring the half-life of the reaction.",
      "c) By using experimental data from various initial concentrations to deduce the rate law, then calculating k.",
      "d) By measuring the activation energy."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Which statement correctly describes the effect of temperature on the rate constant (k)?",
    "options": [
      "a) k remains constant with temperature changes.",
      "b) k decreases with increasing temperature.",
      "c) k increases with increasing temperature.",
      "d) k only changes with concentration."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What is the function of V₂O₅ as a catalyst in the Contact Process (2SO₂(g) + O₂(g) → 2SO₃(g))?",
    "options": [
      "a) It changes the equilibrium position.",
      "b) It provides a heterogeneous surface for the reaction to occur.",
      "c) It increases the activation energy.",
      "d) It is consumed during the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "In a reaction mechanism, if the rate law is determined experimentally as Rate = k[NO₂]², and a proposed mechanism involves NO₂ + NO₂ → NO₃ + NO (slow), this mechanism is consistent because:",
    "options": [
      "a) The slow step is unimolecular.",
      "b) The rate law of the slow step matches the experimental rate law.",
      "c) The reaction is exothermic.",
      "d) NO₃ is an intermediate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The order of a reaction provides valuable information about:",
    "options": [
      "a) The number of products formed.",
      "b) The mechanism of a reaction.",
      "c) The overall enthalpy change.",
      "d) The physical state of reactants."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Which of the following is an example of a fractional order reaction?",
    "options": [
      "a) H₂(g) + Cl₂(g) → 2HCl(g)",
      "b) 2NH₃(g) → N₂(g) + 3H₂(g)",
      "c) CHCl₃(l) + Cl₂(g) → CCl₄(l) + HCl(g) with Rate = k[CHCl₃][Cl₂]¹/²",
      "d) Decomposition of N₂O₅."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What does the slope of the tangent to a concentration-time curve for a reactant indicate?",
    "options": [
      "a) The average rate of reaction.",
      "b) The instantaneous rate of reaction at that point in time.",
      "c) The final concentration of the reactant.",
      "d) The half-life of the reaction."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The rate of a reaction involving ions can be studied by measuring the electrical conductivity of the solution because:",
    "options": [
      "a) Conductivity is inversely proportional to ion concentration.",
      "b) Conductivity is proportional to the rate of change of concentration of reacting or formed ions.",
      "c) Ions do not affect conductivity.",
      "d) Only neutral molecules conduct electricity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "The relationship between the order of a reaction and the sum of stoichiometric coefficients of the balanced chemical equation is that:",
    "options": [
      "a) They are always equal.",
      "b) They are directly proportional.",
      "c) The sum of coefficients is not necessarily important to give the order of a reaction; order is determined experimentally.",
      "d) The order is always half the sum of coefficients."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "On an energy profile diagram, the presence of a catalyst is represented by: [328 - Q.1 XI]",
    "options": [
      "a) A higher peak representing the activation energy.",
      "b) A lower peak representing the activation energy.",
      "c) A change in the energy level of the reactants or products.",
      "d) A shift in the equilibrium position."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "What is the role of vitamins in biochemical reactions?",
    "options": [
      "a) They act as reactants.",
      "b) They act as catalysts, often as coenzymes.",
      "c) They act as inhibitors.",
      "d) They increase the activation energy."
    ],
    "correctAnswer": "b"
  }
],
    "Chemical Equilibrium": [
  {
    "id": 1,
    "questionText": "Which of the following describes reactions where reactants are completely consumed and converted into products?",
    "options": [
      "a) Reversible reactions",
      "b) Equilibrium reactions",
      "c) Irreversible reactions",
      "d) Dynamic reactions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "At chemical equilibrium, what is observed about the concentrations of reactants and products?",
    "options": [
      "a) They continuously change.",
      "b) They become zero.",
      "c) They become constant.",
      "d) They fluctuate unpredictably."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What does the double arrow (⇌) in a chemical equation indicate?",
    "options": [
      "a) The reaction is exothermic.",
      "b) The reaction is irreversible.",
      "c) The reaction is reversible.",
      "d) The reaction has reached completion."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Which of the following is an example of a macroscopic event in a chemical reaction?",
    "options": [
      "a) Collisions between molecules",
      "b) Breaking and forming bonds",
      "c) Change in color",
      "d) Rearrangement of atoms"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Microscopic events in a chemical reaction refer to phenomena that:",
    "options": [
      "a) Can be observed with the naked eye.",
      "b) Lead to a precipitate formation.",
      "c) Involve individual particles or molecules.",
      "d) Include changes in volume or pressure."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "At the beginning of a reversible reaction, when only reactants are present, what is the rate of the forward reaction?",
    "options": [
      "a) Zero",
      "b) Low, gradually increasing",
      "c) Maximum",
      "d) Constant"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "When a reversible reaction reaches chemical equilibrium, what is true about the rates of the forward and reverse reactions?",
    "options": [
      "a) The forward rate is higher than the reverse rate.",
      "b) The reverse rate is higher than the forward rate.",
      "c) Both rates become zero.",
      "d) Both rates become equal."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 8,
    "questionText": "Why is chemical equilibrium considered \"dynamic\"?",
    "options": [
      "a) Because the concentrations of reactants and products are constantly changing.",
      "b) Because the individual molecules are constantly reacting.",
      "c) Because external factors continually disturb the system.",
      "d) Because it is only observed in moving systems."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "What happens to the rates of evaporation and condensation when a liquid in a closed container achieves dynamic equilibrium with its vapor?",
    "options": [
      "a) Evaporation rate is higher.",
      "b) Condensation rate is higher.",
      "c) Both rates become equal.",
      "d) Both rates cease."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Which condition is necessary for a chemical equilibrium to be established?",
    "options": [
      "a) The reaction vessel must be open to the atmosphere.",
      "b) The reaction must be irreversible.",
      "c) All reactants must be in the gaseous phase.",
      "d) The reaction vessel must be closed."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 11,
    "questionText": "What is the effect of a catalyst on a chemical equilibrium?",
    "options": [
      "a) It changes the equilibrium position.",
      "b) It changes the value of the equilibrium constant.",
      "c) It helps to attain the equilibrium earlier.",
      "d) It shifts the reaction towards products."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The value of the equilibrium constant (Kc) depends on:",
    "options": [
      "a) Initial concentrations of reactants.",
      "b) Volume of the reaction vessel.",
      "c) Temperature only.",
      "d) Pressure of the system."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "In a homogeneous equilibrium system, what is true about the physical states of all reactants and products?",
    "options": [
      "a) They are all solids.",
      "b) They are all liquids.",
      "c) They are all in the same phase.",
      "d) They are in different phases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Which of the following is an example of a heterogeneous equilibrium?",
    "options": [
      "a) N2(g) + 3H2(g) ⇌ 2NH3(g)",
      "b) CH3COOH(l) + C2H5OH(l) ⇌ CH3COOC2H5(l) + H2O(l)",
      "c) 2SO2(g) + O2(g) ⇌ 2SO3(g)",
      "d) CaCO3(s) ⇌ CaO(s) + CO2(g)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "What is meant by the \"position of equilibrium\"?",
    "options": [
      "a) The exact point in time when equilibrium is reached.",
      "b) The relative amounts of products and reactants present in an equilibrium mixture.",
      "c) The rate at which the forward reaction proceeds.",
      "d) The stability of the products compared to reactants."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "According to the Law of Mass Action, the rate of a chemical reaction is directly proportional to:",
    "options": [
      "a) The molar mass of the reactants.",
      "b) The active masses of the reactants, raised to their coefficients.",
      "c) The temperature of the system.",
      "d) The volume of the container."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What is the equilibrium constant (Kc) for the reaction aA + bB ⇌ cC + dD?",
    "options": [
      "a) Kc = [A]a [B]b / [C]c [D]d",
      "b) Kc = kf / kr",
      "c) Kc = ([C] + [D]) / ([A] + [B])",
      "d) Kc = [C]c [D]d / [A]a [B]b"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "For the reaction N2(g) + 3H2(g) ⇌ 2NH3(g), what is the correct Kc expression?",
    "options": [
      "a) Kc = [NH3] / [N2][H2]",
      "b) Kc = [N2][H2]3 / [NH3]2",
      "c) Kc = [NH3]2 / [N2][H2]3",
      "d) Kc = [NH3]2 / [N2] + [H2]3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "When are the concentrations of pure solids or pure liquids not included in the equilibrium constant expression?",
    "options": [
      "a) When the reaction is homogeneous.",
      "b) When their concentrations are very low.",
      "c) Because changes in their concentrations have no effect on the equilibrium constant.",
      "d) Only in heterogeneous equilibrium."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "For the ester formation reaction CH3COOH(aq) + C2H5OH(aq) ⇌ CH3COOC2H5(aq) + H2O(l), what are the units of Kc?",
    "options": [
      "a) mol dm-3",
      "b) dm3 mol-1",
      "c) No units",
      "d) mol-1 dm3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is the relationship between Kp and Kc for a gaseous reaction where Δn is the difference in moles of gaseous products and reactants?",
    "options": [
      "a) Kp = Kc (RT)Δn",
      "b) Kp = Kc / (RT)Δn",
      "c) Kp = Kc + (RT)Δn",
      "d) Kp = Kc - (RT)Δn"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "If the number of moles of gaseous reactants and products in a balanced chemical equation are equal (Δn = 0), what is true about Kp and Kc?",
    "options": [
      "a) Kp > Kc",
      "b) Kp < Kc",
      "c) Kp = Kc",
      "d) Their relationship cannot be determined."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Le-Chatelier's Principle states that if a system in equilibrium is disturbed, it behaves in such a way as to:",
    "options": [
      "a) Accelerate the disturbance.",
      "b) Nullify or counteract the effect of that disturbance.",
      "c) Reach a new equilibrium instantly.",
      "d) Remain unchanged despite the disturbance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "In the hydrolysis of BiCl3: BiCl3 + H2O ⇌ BiOCl + 2HCl, what happens if BiCl3 is added at equilibrium?",
    "options": [
      "a) The reaction shifts to the reverse direction.",
      "b) More BiOCl and HCl are produced.",
      "c) Kc changes.",
      "d) The equilibrium position remains unchanged."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The effect of change of volume or pressure is not applicable to an equilibrium system if:",
    "options": [
      "a) The system involves only gaseous components.",
      "b) The number of moles of reactants and products are unequal in the gaseous phase.",
      "c) The system does not involve gaseous components.",
      "d) The reaction is exothermic."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "For the ammonia synthesis: N2(g) + 3H2(g) ⇌ 2NH3(g), what effect does an increase in pressure have on the equilibrium?",
    "options": [
      "a) It shifts to the reverse direction.",
      "b) It produces more ammonia.",
      "c) It has no effect.",
      "d) It increases the volume of the mixture."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Temperature is the only factor that also affects the value of which constant?",
    "options": [
      "a) Kc",
      "b) Kp",
      "c) Kx",
      "d) Kn"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 28,
    "questionText": "For an exothermic reaction, how does an increase in temperature affect the equilibrium?",
    "options": [
      "a) It favors the forward reaction.",
      "b) It favors the reverse reaction.",
      "c) It has no effect on the equilibrium position.",
      "d) It increases the value of Kc."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is the effect of a catalyst on the yield of a chemical reaction at equilibrium?",
    "options": [
      "a) It increases the yield.",
      "b) It decreases the yield.",
      "c) It does not change the yield.",
      "d) It changes the equilibrium constant, thus affecting yield."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "In the Haber's process, N2(g) + 3H2(g) ⇌ 2NH3(g) (ΔH = negative), what conditions favor the maximum yield of ammonia?",
    "options": [
      "a) Low pressure, high temperature",
      "b) High pressure, low temperature",
      "c) Low pressure, low temperature",
      "d) High pressure, high temperature"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Why is the temperature raised to a moderate level (e.g., 400 °C) in the Haber process despite lower temperatures favoring higher ammonia yield?",
    "options": [
      "a) To decrease the rate of reaction.",
      "b) To make the process more economical by increasing the rate.",
      "c) To avoid catalyst poisoning.",
      "d) To shift the equilibrium to the left."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the catalyst used in the industrial synthesis of ammonia (Haber process)?",
    "options": [
      "a) Vanadium pentoxide",
      "b) Platinum",
      "c) Pieces of iron crystals",
      "d) Nickel"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "For the preparation of sulfur trioxide: 2SO2(g) + O2(g) ⇌ 2SO3(g) (ΔH = negative), what conditions are essential for a better yield of SO3 according to Le-Chatelier's principle?",
    "options": [
      "a) Low pressure, high temperature",
      "b) High pressure, low temperature",
      "c) Low pressure, low temperature",
      "d) High pressure, high temperature"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "Which of the following is an example of a microscopic event that occurs when a chemical system is in equilibrium?",
    "options": [
      "a) Change in color",
      "b) Formation of precipitate",
      "c) Collisions between molecules",
      "d) Evolution of a gas"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "When H2O and CO are mixed, initially the forward reaction rate is maximum because:",
    "options": [
      "a) The concentration of products is high.",
      "b) There are maximum collisions between H2O and CO molecules.",
      "c) The reverse reaction is negligible.",
      "d) The system is at equilibrium."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "If the concentration of products is increased relative to the reactants in an equilibrium system, the position of equilibrium is said to have shifted:",
    "options": [
      "a) To the right.",
      "b) To the left.",
      "c) No shift occurs.",
      "d) To the center."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "If the concentration of products is decreased relative to the reactants in an equilibrium system, the position of equilibrium is said to have shifted:",
    "options": [
      "a) To the right.",
      "b) To the left.",
      "c) No shift occurs.",
      "d) To the center."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 38,
    "questionText": "Which type of equilibrium constant uses square brackets [ ] to express concentrations in mol dm-3?",
    "options": [
      "a) Kp",
      "b) Kn",
      "c) Kc",
      "d) Kx"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "For a reaction where Δn is positive, what is the relationship between Kp and Kc?",
    "options": [
      "a) Kp = Kc",
      "b) Kp > Kc (Implied, as (RT)^Δn > 1 for T > 0 and R > 0)",
      "c) Kp < Kc",
      "d) Kp is unrelated to Kc."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What is the equilibrium constant expression for the heterogeneous reaction C(s) + H2O(g) ⇌ CO(g) + H2(g)?",
    "options": [
      "a) Kc = [CO][H2] / [C][H2O]",
      "b) Kc = [CO][H2] / [H2O]",
      "c) Kc = [C][H2O] / [CO][H2]",
      "d) Kc = [CO][H2]"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "In the equilibrium H2O(g) + CO(g) ⇌ H2(g) + CO2(g), if the initial concentrations of reactants are 10.00 mol dm–3 each and the equilibrium concentration of CO(g) is 9.47 mol dm–3, what is the equilibrium concentration of H2O(g)?",
    "options": [
      "a) 9.47 mol dm–3",
      "b) 10.00 mol dm–3",
      "c) 0.53 mol dm–3",
      "d) 10.53 mol dm–3"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "How does an increase in temperature affect the vapor pressure of a liquid in dynamic equilibrium with its vapor?",
    "options": [
      "a) It decreases the vapor pressure.",
      "b) It has no effect on the vapor pressure.",
      "c) It increases the vapor pressure.",
      "d) It causes condensation to stop."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Which type of equilibrium constant uses mole fractions (X) for gaseous reactants and products?",
    "options": [
      "a) Kc",
      "b) Kp",
      "c) Kn",
      "d) Kx"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "What happens to the rate of the reverse reaction as products accumulate in a reversible reaction?",
    "options": [
      "a) It starts with a maximum rate.",
      "b) It gradually decreases.",
      "c) It gradually increases.",
      "d) It remains constant."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "In the context of the hydrolysis of BiCl3, if a certain amount of BiOCl is removed at equilibrium, how will the reaction shift?",
    "options": [
      "a) To the reverse direction.",
      "b) To the forward direction.",
      "c) No shift occurs, as BiOCl is a product.",
      "d) Kc will increase."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "For the reaction 2SO2(g) + O2(g) ⇌ 2SO3(g), what effect does increasing the volume have on the equilibrium?",
    "options": [
      "a) It shifts towards the products.",
      "b) It shifts towards the reactants.",
      "c) It has no effect.",
      "d) It increases the pressure."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What does the term \"active mass\" refer to in the context of the Law of Mass Action?",
    "options": [
      "a) The total mass of the substance.",
      "b) The molar concentration.",
      "c) The mass per unit volume.",
      "d) The atomic mass."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "How do microscopic events collectively appear to an observer?",
    "options": [
      "a) As individual molecular changes.",
      "b) As rapid fluctuations.",
      "c) As macroscopic changes.",
      "d) They are unobservable."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the effect of decreasing pressure on the equilibrium N2O4(g) ⇌ 2NO2(g)?",
    "options": [
      "a) Shifts to the left.",
      "b) Shifts to the right.",
      "c) No effect, as moles are equal.",
      "d) Increases the concentration of N2O4."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "In the Contact Process for H2SO4 manufacture, what catalyst is used for the oxidation of SO2 to SO3?",
    "options": [
      "a) Platinum",
      "b) Iron crystals",
      "c) Vanadium pentoxide (V2O5)",
      "d) Nickel"
    ],
    "correctAnswer": "c"
  }
],
    "Acid-Base Chemistry": [
  {
    "id": 1,
    "questionText": "According to the Brønsted-Lowry theory, an acid is a species that:",
    "options": [
      "a) Accepts a lone pair of electrons.",
      "b) Donates a proton.",
      "c) Accepts a proton.",
      "d) Produces OH- ions in solution."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "In the reaction HCl(g) + H2O(l) → H3O+(aq) + Cl–(aq), which species acts as the Brønsted base?",
    "options": [
      "a) HCl",
      "b) H2O",
      "c) H3O+",
      "d) Cl–"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "A conjugate acid is formed when a Brønsted base:",
    "options": [
      "a) Donates a proton.",
      "b) Accepts a proton.",
      "c) Donates an electron pair.",
      "d) Loses a proton."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Which of the following describes an amphoteric substance?",
    "options": [
      "a) A substance that only acts as an acid.",
      "b) A substance that only acts as a base.",
      "c) A species that can act as either an acid or a base.",
      "d) A substance that forms a neutral solution."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "In the reaction NH3(g) + H2O(l) ⇌ OH-(aq) + NH4+(aq), which is the conjugate acid-base pair?",
    "options": [
      "a) NH3-OH-",
      "b) H2O-NH4+",
      "c) NH3-NH4+ and H2O-OH-",
      "d) NH3-H2O"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "According to the Lewis concept, a Lewis acid is any species that can:",
    "options": [
      "a) Donate a pair of electrons.",
      "b) Accept a pair of electrons.",
      "c) Donate a proton.",
      "d) Accept a proton."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "In the reaction BF3 + F- → BF4-, which species is the Lewis base?",
    "options": [
      "a) BF3",
      "b) F-",
      "c) BF4-",
      "d) None of the above."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "For pure water at 25°C, what is the value of Kw (ionic product of water)?",
    "options": [
      "a) 1.8 × 10-16",
      "b) 55.5",
      "c) 1.01 × 10-14",
      "d) 10-7"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "If [H+] > [OH-] in an aqueous solution, the solution is considered:",
    "options": [
      "a) Neutral",
      "b) Acidic",
      "c) Basic",
      "d) Amphoteric"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "The pH of a solution is mathematically defined as:",
    "options": [
      "a) -log[OH-]",
      "b) log[H+]",
      "c) -log[H+]",
      "d) [H+] + [OH-]"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "What is the relationship between pH and pOH at 25°C?",
    "options": [
      "a) pH = pOH",
      "b) pH - pOH = 14",
      "c) pH + pOH = 14",
      "d) pH × pOH = 14"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "If the pH of a solution is 9.2, what is its pOH?",
    "options": [
      "a) 9.2",
      "b) 4.8",
      "c) 14.0",
      "d) 7.0"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "The value of Ka (acid dissociation constant) is a quantitative measure of:",
    "options": [
      "a) The pH of the solution.",
      "b) The concentration of H2O.",
      "c) The strength of the acid.",
      "d) The volume of the acid."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "For a weak acid HA, if Ka < 10-3, the acid is considered:",
    "options": [
      "a) Very strong",
      "b) Moderately strong",
      "c) Weak",
      "d) Very weak"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the concentration of [H3O+] in a 0.1 M solution of acetic acid (Ka = 1.8 × 10-5)?",
    "options": [
      "a) 0.1 M",
      "b) 1.34 × 10-3 M",
      "c) 1.8 × 10-6 M",
      "d) 2.38 M"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The common ion effect is defined as the suppression of ionization of a weak electrolyte by adding:",
    "options": [
      "a) A strong electrolyte.",
      "b) A non-electrolyte.",
      "c) A common ion to it.",
      "d) Water to it."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "When HCl gas is passed through brine (saturated NaCl solution), NaCl crystallizes out. This is an example of:",
    "options": [
      "a) Precipitation",
      "b) Common ion effect",
      "c) Neutralization",
      "d) Hydrolysis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is the effect of adding NH4Cl to an NH3 solution?",
    "options": [
      "a) It increases the concentration of OH-.",
      "b) It suppresses the concentration of OH-.",
      "c) It makes the solution more basic.",
      "d) It has no effect due to separate compounds."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Buffer solutions are defined as solutions that:",
    "options": [
      "a) Change their pH significantly when an acid or base is added.",
      "b) Have a constant pH irrespective of dilution.",
      "c) Resist changes in their pH when small amounts of acid or base are added.",
      "d) Are always neutral."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "An acidic buffer is prepared by mixing a weak acid and its salt with a:",
    "options": [
      "a) Weak base",
      "b) Strong acid",
      "c) Strong base",
      "d) Another weak acid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is the Henderson equation used to calculate?",
    "options": [
      "a) Kw of water",
      "b) Ka of a weak acid",
      "c) pH of a buffer solution",
      "d) Solubility product"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "For an acetic acid – sodium acetate buffer, if [CH3COOH] = [CH3COONa], then pH is equal to:",
    "options": [
      "a) pOH",
      "b) pKa",
      "c) 7",
      "d) 14"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "When a base or OH- ions are added to an acetic acid/sodium acetate buffer, they react with:",
    "options": [
      "a) CH3COOH to give CH3COO-.",
      "b) H3O+ to give H2O.",
      "c) Na+ ions.",
      "d) CH3COO- to give CH3COOH."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "For slightly soluble salts, what type of equilibrium exists between the solid solute and its dissolved ions?",
    "options": [
      "a) Irreversible equilibrium.",
      "b) Dynamic equilibrium.",
      "c) Static equilibrium.",
      "d) Chemical equilibrium only."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is the solubility product expression (Ksp) for Ca(OH)2?",
    "options": [
      "a) Ksp = [Ca2+][OH-]",
      "b) Ksp = [Ca2+][OH-]2",
      "c) Ksp = [Ca2+]2[OH-]",
      "d) Ksp = [Ca(OH)2]"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "The presence of a common ion generally has what effect on the solubility of a slightly soluble ionic compound?",
    "options": [
      "a) Increases solubility.",
      "b) Decreases solubility.",
      "c) No effect on solubility.",
      "d) Only affects the rate of dissolution."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "If the calculated ion product (Qsp) is greater than Ksp, what is predicted to occur?",
    "options": [
      "a) More dissolution of the salt.",
      "b) Precipitation of the salt.",
      "c) No change in the system.",
      "d) The solution becomes unsaturated."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "An aqueous solution of a salt derived from a strong acid and a strong base (e.g., NaCl) will have a pH that is:",
    "options": [
      "a) Acidic.",
      "b) Basic.",
      "c) Neutral.",
      "d) Variable."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "For salts derived from strong acids and weak bases (e.g., NH4Cl), the solution will be:",
    "options": [
      "a) Basic.",
      "b) Neutral.",
      "c) Acidic.",
      "d) Amphoteric."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "In the hydrolysis of sodium acetate (CH3COONa), which ion reacts with water to produce OH- ions, making the solution basic?",
    "options": [
      "a) Na+",
      "b) CH3COO-",
      "c) H+",
      "d) H2O"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "An acid-base indicator is a substance that changes color to mark a titration's:",
    "options": [
      "a) Starting point.",
      "b) Mid-point.",
      "c) Equivalence point.",
      "d) Endpoint."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "Why do HIn and In- forms of an indicator have different colors?",
    "options": [
      "a) Because of different concentrations.",
      "b) Because of different temperatures.",
      "c) Because they are in equilibrium.",
      "d) Because they are different chemical species with different light absorption properties."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "Which indicator changes color from red to yellow between pH 4.4 and 6.2?",
    "options": [
      "a) Phenolphthalein",
      "b) Methyl orange",
      "c) Methyl red",
      "d) Litmus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "A suitable indicator for an acid-alkali titration should:",
    "options": [
      "a) Have a color change over a narrow pH range.",
      "b) Have its pH at the end of titration far from the indicator's neutral point.",
      "c) Indicate a sharp color change near the equivalence point.",
      "d) Be very concentrated."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "For a strong acid-strong base titration, what is the pH at the equivalence point?",
    "options": [
      "a) Less than 7.0",
      "b) Greater than 7.0",
      "c) Exactly 7.0",
      "d) Depends on the specific acid and base."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Which indicator is suitable for strong acid-weak base titrations?",
    "options": [
      "a) Phenolphthalein",
      "b) Methyl orange",
      "c) Litmus",
      "d) Bromothymol blue"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "In an acid-base titration, the equivalence point is defined as the point at which:",
    "options": [
      "a) The indicator changes color.",
      "b) The pH of the solution is 7.0.",
      "c) The amount of titrant added is just enough to completely neutralize the analyte.",
      "d) Equal volumes of acid and base have been mixed."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "The hydronium ion (H3O+) is the conjugate acid of:",
    "options": [
      "a) HCl",
      "b) H2O",
      "c) Cl-",
      "d) OH-"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "In the self-ionization of water, H2O(l) + H2O(l) ⇌ H3O+(aq) + OH-(aq), what is the net reaction often represented as?",
    "options": [
      "a) H2O(l) → H+(aq) + OH-(aq)",
      "b) 2H2O(l) → H2(g) + O2(g)",
      "c) H2O(l) → H3O+(aq) + OH-(aq)",
      "d) H+(aq) + OH-(aq) → H2O(l)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 40,
    "questionText": "If a solution has a [H+] concentration of 1.0 × 10-7 M at 25°C, what is its pH?",
    "options": [
      "a) 1.0",
      "b) 7.0",
      "c) 14.0",
      "d) 0.0"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What type of substance is added to a weak acid solution to form an acidic buffer?",
    "options": [
      "a) Its salt with a strong base.",
      "b) Its salt with a weak acid.",
      "c) A strong acid.",
      "d) A strong base directly."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "Which of the following is an example of a salt of a weak acid and a strong base?",
    "options": [
      "a) Ammonium chloride (NH4Cl)",
      "b) Sodium chloride (NaCl)",
      "c) Ammonium acetate (CH3COONH4)",
      "d) Sodium acetate (CH3COONa)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 43,
    "questionText": "In a solution of a salt from a weak acid and a weak base (e.g., ammonium acetate), what determines the resultant pH?",
    "options": [
      "a) Only the conjugate acid's strength.",
      "b) Only the conjugate base's strength.",
      "c) The relative strengths of the conjugate acid and conjugate base.",
      "d) It is always neutral."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which of the following is a characteristic of a weak-acid indicator (HIn) in acidic solutions?",
    "options": [
      "a) It exists mostly in its ionized form (In-).",
      "b) It exists mostly in its unionized form (HIn).",
      "c) It changes color irreversibly.",
      "d) It accepts electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Why is pH paper or an anti-parallax card used when taking burette readings during a titration?",
    "options": [
      "a) To avoid spillage.",
      "b) To ensure the burette is clean.",
      "c) To clearly see the color change.",
      "d) To minimize parallax error."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 46,
    "questionText": "If a solution has a pH of 4.0, what is its [OH-] concentration at 25°C?",
    "options": [
      "a) 1.0 × 10-4 M",
      "b) 1.0 × 10-10 M",
      "c) 1.0 × 10-7 M",
      "d) 1.0 × 10-14 M"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What is the approximate range of pH values where phenolphthalein changes color?",
    "options": [
      "a) 3.2-4.5",
      "b) 4.4-6.2",
      "c) 8.2-10.0",
      "d) 0-7"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "For a weak acid, HA(aq) ⇌ H+(aq) + A-(aq), what is the simplified expression for Ka if the initial concentration of HA is C and x is the [H+] at equilibrium?",
    "options": [
      "a) Ka = x / C",
      "b) Ka = C / x^2",
      "c) Ka = x^2 / C",
      "d) Ka = C - x^2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the characteristic color change of phenolphthalein indicator as the pH decreases during a titration?",
    "options": [
      "a) Blue to red",
      "b) Red to yellow",
      "c) Pink to colorless",
      "d) Colorless to pink"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What type of buffer solution would be formed by mixing NH4OH and NH4Cl?",
    "options": [
      "a) Acidic buffer",
      "b) Neutral buffer",
      "c) Basic buffer",
      "d) Amphoteric buffer"
    ],
    "correctAnswer": "c"
  }
],
    "Electrochemistry": [
  {
    "id": 1,
    "questionText": "Oxidation is defined as a process involving:",
    "options": [
      "a) Gain of electrons.",
      "b) Decrease in oxidation number.",
      "c) Loss of electrons.",
      "d) Formation of an anion."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "In the reaction Cu2+ + 2e- → Cu, what process is occurring?",
    "options": [
      "a) Oxidation",
      "b) Reduction",
      "c) Disproportionation",
      "d) Neutralization"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "An oxidizing agent is a substance that:",
    "options": [
      "a) Loses electrons and is oxidized.",
      "b) Gains electrons and is oxidized.",
      "c) Loses electrons and is reduced.",
      "d) Gains electrons and is reduced."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 4,
    "questionText": "What is the oxidation number of oxygen in peroxides (e.g., H2O2)?",
    "options": [
      "a) 0",
      "b) -1",
      "c) -2",
      "d) +1"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is the oxidation number of hydrogen in metal hydrides (e.g., NaH)?",
    "options": [
      "a) +1",
      "b) -1",
      "c) 0",
      "d) +2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "In a polyatomic ion, what is the algebraic sum of the oxidation numbers of all the elements equal to?",
    "options": [
      "a) Zero",
      "b) +1",
      "c) The charge on the ion",
      "d) -1"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Calculate the oxidation number of sulfur in SO2.",
    "options": [
      "a) +2",
      "b) -2",
      "c) +4",
      "d) +6"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Calculate the oxidation number of sulfur in SO42-.",
    "options": [
      "a) +2",
      "b) +4",
      "c) +6",
      "d) -2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "A disproportionation reaction is a chemical reaction where a single substance acts as:",
    "options": [
      "a) Only an oxidizing agent.",
      "b) Only a reducing agent.",
      "c) Both the oxidizing and reducing agent.",
      "d) A catalyst."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "In the decomposition of hydrogen peroxide (2H2O2 → 2H2O + O2), what are the oxidation state changes for oxygen?",
    "options": [
      "a) -1 to -2 (reduction) and -1 to 0 (oxidation).",
      "b) -2 to -1 (oxidation) and 0 to -1 (reduction).",
      "c) -1 to 0 (oxidation) only.",
      "d) -1 to -2 (reduction) only."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "What is the first step in balancing redox equations by the oxidation number method?",
    "options": [
      "a) Equate increase/decrease in oxidation number.",
      "b) Identify elements undergoing change in oxidation number.",
      "c) Write down the skeleton equation.",
      "d) Balance the rest by inspection."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "An electrolytic cell converts:",
    "options": [
      "a) Chemical energy into electrical energy.",
      "b) Electrical energy into chemical energy.",
      "c) Heat energy into electrical energy.",
      "d) Light energy into electrical energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "In an electrolytic cell, reduction always occurs at the:",
    "options": [
      "a) Anode.",
      "b) Cathode.",
      "c) Salt bridge.",
      "d) Electrolyte."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What is the fate of positive ions (cations) in an electrolytic cell?",
    "options": [
      "a) They lose electrons at the anode.",
      "b) They gain electrons at the cathode.",
      "c) They remain in the electrolyte.",
      "d) They form gases at both electrodes."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the quantity of electric charge carried by 1 mole of electrons or 1 mole of singly charged ions called?",
    "options": [
      "a) Ampere",
      "b) Coulomb",
      "c) Faraday",
      "d) Volt"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What is the value of 1 Faraday in Coulombs per mole?",
    "options": [
      "a) 1 C mol–1",
      "b) 96500 C mol–1",
      "c) 6.02 × 1023 C mol–1",
      "d) 1.6022 × 10-19 C mol–1"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "How many Faradays of electricity are required to deposit 1 mole of copper from Cu2+ ions?",
    "options": [
      "a) 1 Faraday",
      "b) 2 Faradays",
      "c) 0.5 Faraday",
      "d) 96500 Faradays"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "What is the primary purpose of the standard hydrogen electrode (SHE)?",
    "options": [
      "a) To produce hydrogen gas.",
      "b) To serve as a reference electrode for measuring other electrode potentials.",
      "c) To measure the concentration of H+ ions.",
      "d) To conduct electrolysis reactions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Under standard conditions, what is the concentration of ions in a half-cell?",
    "options": [
      "a) 0.1 mol dm–3",
      "b) 1.00 mol dm–3",
      "c) 2.00 mol dm–3",
      "d) 10.0 mol dm–3"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "If a half-cell has a more positive E° value compared to the SHE, what does this indicate about the species on the left of its half-equation?",
    "options": [
      "a) They are easier to oxidize.",
      "b) They are harder to reduce.",
      "c) They are easier to reduce.",
      "d) They act as strong reducing agents."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "A galvanic (voltaic) cell converts:",
    "options": [
      "a) Electrical energy into chemical energy.",
      "b) Chemical energy from spontaneous redox processes into electrical energy.",
      "c) Heat energy into electrical energy.",
      "d) Light energy into chemical energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What is the function of a salt bridge in an electrochemical cell?",
    "options": [
      "a) To allow movement of electrons between half-cells.",
      "b) To complete the electrical circuit and maintain ionic balance.",
      "c) To prevent mixing of solutions.",
      "d) To generate voltage."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "In a Cu-Zn electrochemical cell, given E°(Cu2+/Cu) = +0.34 V and E°(Zn2+/Zn) = –0.76 V, which metal acts as the anode?",
    "options": [
      "a) Copper",
      "b) Zinc",
      "c) Both",
      "d) Neither"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "If an electrochemical cell has an overall standard cell potential (E°cell) that is positive, what does this indicate about the reaction's feasibility?",
    "options": [
      "a) The reaction is not feasible.",
      "b) The reaction is feasible.",
      "c) The reaction is at equilibrium.",
      "d) More information is needed."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The activity series of metals ranks metals based on their tendency to:",
    "options": [
      "a) Gain electrons.",
      "b) Melt.",
      "c) Lose electrons and undergo oxidation.",
      "d) Conduct electricity."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "According to the activity series, metals higher in the series have more negative standard reduction potentials, meaning they are:",
    "options": [
      "a) Less reactive.",
      "b) More likely to gain electrons.",
      "c) Stronger oxidizing agents.",
      "d) More likely to lose electrons and undergo oxidation."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 27,
    "questionText": "The Nernst equation is used to predict how electrode potentials vary with:",
    "options": [
      "a) Temperature and pressure only.",
      "b) Concentration of aqueous ions and temperature.",
      "c) Volume of the solution.",
      "d) Type of electrode material."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "A photovoltaic cell converts:",
    "options": [
      "a) Chemical energy into electrical energy.",
      "b) Light energy into electrical energy.",
      "c) Electrical energy into chemical energy.",
      "d) Heat energy into light energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "What is the fundamental principle behind the operation of photovoltaic cells?",
    "options": [
      "a) Electrolysis",
      "b) Thermoelectric effect",
      "c) Photovoltaic effect",
      "d) Faraday's law"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Biochemical oxygen demand (BOD) is a measure of the capacity of organic matter in natural water to consume oxygen within a period of:",
    "options": [
      "a) 1 day",
      "b) 3 days",
      "c) 5 days",
      "d) 10 days"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "What is the minimum level of dissolved oxygen (DO) that water should have to be considered unpolluted?",
    "options": [
      "a) 1 mg/dm3",
      "b) 3 mg/dm3",
      "c) 5 mg/dm3",
      "d) 8 mg/dm3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is the oxidation number of oxygen in F2O?",
    "options": [
      "a) -2",
      "b) -1",
      "c) 0",
      "d) +2"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "When an element in a species undergoes only an increase in oxidation number in a reaction, how is that species typically written on the RHS of the equation during balancing by the oxidation number method?",
    "options": [
      "a) It is written once.",
      "b) It is written twice.",
      "c) It is omitted.",
      "d) It is written with a subscript indicating the change."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "In balancing redox equations, if an element undergoes both oxidation and reduction simultaneously (disproportionation), the species containing that element is written:",
    "options": [
      "a) Once on the RHS.",
      "b) Twice on the RHS.",
      "c) Once on the LHS.",
      "d) As an intermediate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "What is the standard electrode potential E° for the standard hydrogen electrode (SHE)?",
    "options": [
      "a) +1.00 V",
      "b) -1.00 V",
      "c) 0.00 V",
      "d) Depends on the temperature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "In a Cu-Zn galvanic cell, which electrode serves as the cathode?",
    "options": [
      "a) Zinc",
      "b) Copper",
      "c) Both",
      "d) Neither"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "If a half-cell reaction has a more negative E° value, what does it indicate about the metal?",
    "options": [
      "a) It is a stronger oxidizing agent.",
      "b) It is less likely to lose electrons.",
      "c) It is a stronger reducing agent.",
      "d) Its ions are easier to reduce."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "According to the activity series, which metal is most reactive with cold water?",
    "options": [
      "a) Zinc",
      "b) Magnesium",
      "c) Lithium",
      "d) Iron"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What type of current must an electrolytic cell's power supply provide?",
    "options": [
      "a) Alternating current (AC)",
      "b) Direct current (DC)",
      "c) Pulsed current",
      "d) Variable current"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "How is the charge (Q) passed during electrolysis calculated?",
    "options": [
      "a) Q = I / t",
      "b) Q = t / I",
      "c) Q = I × t",
      "d) Q = I + t"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "When a metal is placed in a solution of its ions, an electrical double layer forms. Why can't the absolute electrode potential be directly measured?",
    "options": [
      "a) Due to the current flow.",
      "b) Due to the formation of the double layer.",
      "c) Due to the resistance of the solution.",
      "d) Due to the presence of impurities."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "In the Nernst equation, what does 'z' represent?",
    "options": [
      "a) The charge on the ion.",
      "b) The number of electrons transferred in the reaction.",
      "c) The concentration of the oxidized form.",
      "d) The standard electrode potential."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which of the following is true about a metal's position in the activity series and its ease of oxidation?",
    "options": [
      "a) Higher in series, harder to oxidize.",
      "b) Lower in series, easier to oxidize.",
      "c) Higher in series, easier to oxidize.",
      "d) Position is unrelated to ease of oxidation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which process is used in the Winkler method for measuring BOD?",
    "options": [
      "a) Photosynthesis",
      "b) Biological oxidation",
      "c) Electrolysis",
      "d) Distillation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "If the concentration of Zn2+ in a Zn electrode half-cell is decreased, how does the electrode potential (E) change, assuming E°(Zn2+/Zn) = -0.76V?",
    "options": [
      "a) It increases (becomes more positive).",
      "b) It decreases (becomes more negative).",
      "c) It remains the same.",
      "d) It becomes zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "When Cu2+(aq) ions are compared to H+(aq) ions regarding reduction, what is indicated by E°(Cu2+/Cu) = +0.34 V and E°(H+/H2) = 0.00 V?",
    "options": [
      "a) H+ ions are easier to reduce than Cu2+ ions.",
      "b) Cu2+ ions are easier to reduce than H+ ions.",
      "c) Both are equally easy to reduce.",
      "d) Neither can be reduced."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "What happens to the oxidation number of an element if it acts as a reducing agent?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains unchanged.",
      "d) It becomes zero."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "During electrolysis of molten zinc chloride (ZnCl2), what is the overall reaction?",
    "options": [
      "a) Zn(s) + Cl2(g) → ZnCl2(l)",
      "b) ZnCl2(l) → Zn(s) + Cl2(g)",
      "c) Zn2+(l) + 2Cl-(l) → Zn(s) + Cl2(g)",
      "d) Zn(s) + Cl2(g) → ZnCl2(s)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Which of the following conditions is not a standard condition for measuring electrode potentials?",
    "options": [
      "a) Concentration of ions at 1.00 mol dm–3.",
      "b) A temperature of 25 °C (298 K).",
      "c) Gases at a pressure of 10 atm (1010 kPa).",
      "d) Measured relative to the standard hydrogen electrode."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "For an electrode, if the concentration of the oxidized form is increased, how does the electrode potential (E) change?",
    "options": [
      "a) It becomes more negative.",
      "b) It becomes more positive.",
      "c) It remains the same.",
      "d) It becomes zero."
    ],
    "correctAnswer": "b"
  }
],
    "Hydrocarbons": [
  {
    "id": 1,
    "questionText": "Hydrocarbons are organic compounds that consist of only:",
    "options": [
      "a) Carbon, hydrogen, and oxygen.",
      "b) Carbon and hydrogen.",
      "c) Carbon, hydrogen, and nitrogen.",
      "d) Carbon and oxygen."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Alkanes are described as:",
    "options": [
      "a) Cyclic aliphatic hydrocarbons.",
      "b) Acyclic and unsaturated aliphatic hydrocarbons.",
      "c) Acyclic saturated aliphatic hydrocarbons.",
      "d) Aromatic hydrocarbons."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What is the general formula for alkanes?",
    "options": [
      "a) CnH2n",
      "b) CnH2n-2",
      "c) CnH2n+2",
      "d) CnHn"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "What is an alkyl group?",
    "options": [
      "a) An alkane that has lost two hydrogen atoms.",
      "b) What is obtained after the removal of one hydrogen atom from an alkane.",
      "c) A cyclic hydrocarbon.",
      "d) A branched chain alkane."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "The IUPAC name for CH3CHCH3 is:",
    "options": [
      "a) n-Propyl group",
      "b) Iso-Propyl group",
      "c) Propane",
      "d) 1-Methylpropyl"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "According to IUPAC rules, if two chains of equal length compete for selection as the parent chain, choose the chain with:",
    "options": [
      "a) The greater number of carbon atoms.",
      "b) The greater number of substituents.",
      "c) The least number of branches.",
      "d) The one closest to alphabetical order."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "How are cycloalkanes named?",
    "options": [
      "a) By attaching the prefix 'alkane' to the cycle name.",
      "b) By attaching the prefix 'cyclo' to the names of the alkanes with the same number of carbon atoms.",
      "c) By counting the carbon atoms and adding '-ene' suffix.",
      "d) As aromatic compounds."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the shape of methane (CH4) according to sp3 hybridization?",
    "options": [
      "a) Linear",
      "b) Trigonal planar",
      "c) Tetrahedral",
      "d) Pyramidal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Alkanes containing up to four carbon atoms are typically:",
    "options": [
      "a) Liquids",
      "b) Solids",
      "c) Gases",
      "d) Waxy solids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Why are alkanes considered unreactive towards polar reagents under ordinary conditions?",
    "options": [
      "a) Due to the presence of double bonds.",
      "b) Due to the non-polarity of the C-C and C-H bonds.",
      "c) Due to their high melting points.",
      "d) Due to their solubility in water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is homolytic fission?",
    "options": [
      "a) When a covalent bond breaks unevenly, producing ions.",
      "b) When a covalent bond breaks evenly, producing free radicals.",
      "c) When a double bond breaks to form two single bonds.",
      "d) When a bond is formed by sharing electrons."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "A free radical is a species that contains:",
    "options": [
      "a) A positive charge.",
      "b) A negative charge.",
      "c) An unpaired electron.",
      "d) A complete octet of electrons."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The initiation step in free radical substitution involves:",
    "options": [
      "a) The attack of a radical on an alkane.",
      "b) The breaking of the halogen-halogen bond homolytically using UV light.",
      "c) The combination of two radicals.",
      "d) The formation of a carbocation."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "What is the order of reactivity of halogens in free radical halogenation of alkanes?",
    "options": [
      "a) I2 > Br2 > Cl2 > F2",
      "b) Cl2 > F2 > Br2 > I2",
      "c) F2 > Cl2 > Br2 > I2",
      "d) Br2 > I2 > Cl2 > F2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the main characteristic of the propagation step in free radical substitution?",
    "options": [
      "a) It forms the final, stable product.",
      "b) It consumes all free radicals.",
      "c) It generates more free radicals by attacking the alkane molecule.",
      "d) It produces ions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "What type of reactions do alkenes mostly undergo due to their unsaturation?",
    "options": [
      "a) Substitution reactions.",
      "b) Elimination reactions.",
      "c) Electrophilic addition reactions.",
      "d) Redox reactions only."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "In the electrophilic addition mechanism, what attacks the double bond of an alkene first?",
    "options": [
      "a) A nucleophile",
      "b) A free radical",
      "c) An electrophile",
      "d) A carbocation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is the intermediate formed during electrophilic addition reactions of alkenes?",
    "options": [
      "a) Carbanion",
      "b) Free radical",
      "c) Carbocation",
      "d) Alkyl halide"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Which of the following reactions is used to identify the unsaturation of an organic compound?",
    "options": [
      "a) Hydrogenation",
      "b) Halogenation with bromine water",
      "c) Hydration",
      "d) Ozonolysis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "When an unsymmetrical alkene (e.g., propene) reacts with HBr, which product is generally the major product according to Markovnikov's rule?",
    "options": [
      "a) 1-bromopropane",
      "b) 2-bromopropane",
      "c) Both in equal amounts.",
      "d) Depends on the catalyst."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is the order of reactivity of hydrogen halides in addition reactions to alkenes?",
    "options": [
      "a) HI > HBr > HCl > HF",
      "b) HF > HCl > HBr > HI",
      "c) HCl > HBr > HI > HF",
      "d) All react at the same rate."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "What is the industrial application of hydrogenation of alkenes?",
    "options": [
      "a) Production of plastics",
      "b) Conversion of vegetable oil into margarine",
      "c) Synthesis of alcohols",
      "d) Breaking down hydrocarbons"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Epoxidation of alkenes produces:",
    "options": [
      "a) Alcohols",
      "b) Diols",
      "c) Three-membered cyclic ethers called epoxides.",
      "d) Aldehydes."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "What is the primary use of ozonolysis in organic chemistry?",
    "options": [
      "a) To form polymers.",
      "b) To identify the structure of unknown alkenes by breaking them into smaller pieces.",
      "c) To add hydrogen to double bonds.",
      "d) To produce epoxides."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is addition polymerization?",
    "options": [
      "a) Formation of small molecules from large polymers.",
      "b) Reaction where many monomers with C=C double bonds form long chains.",
      "c) Breaking down polymers into monomers.",
      "d) Reaction where a catalyst is added to form a new product."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "Isomerism is the phenomenon where two or more compounds have the same molecular formula but:",
    "options": [
      "a) Different physical properties only.",
      "b) Different chemical properties only.",
      "c) Different structural formulae and properties.",
      "d) Different number of carbon atoms."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What type of isomerism arises due to the difference in the position of the same functional group on the carbon chain?",
    "options": [
      "a) Chain isomerism",
      "b) Position isomerism",
      "c) Functional group isomerism",
      "d) Metamerism"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Compounds with the same molecular formula but different functional groups exhibit:",
    "options": [
      "a) Position isomerism",
      "b) Chain isomerism",
      "c) Functional group isomerism",
      "d) Metamerism"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "What is metamerism?",
    "options": [
      "a) Isomerism due to shifting of a proton within a molecule.",
      "b) Isomerism due to unequal distribution of carbon atoms on either side of the functional group.",
      "c) Isomerism due to different positions of identical groups in space.",
      "d) Isomerism where compounds have different functional groups."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "In organic oxidation, what typically happens?",
    "options": [
      "a) Hydrogen is added or oxygen is removed.",
      "b) Oxygen is added or hydrogen is removed.",
      "c) Only electrons are transferred.",
      "d) Double bonds are formed."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "In organic reduction, what typically happens?",
    "options": [
      "a) Oxygen is added or hydrogen is removed.",
      "b) Hydrogen is added or oxygen is removed.",
      "c) Oxidation number increases.",
      "d) Water is eliminated."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Alkenes are prepared by reactions known as:",
    "options": [
      "a) Substitution reactions.",
      "b) Addition reactions.",
      "c) Elimination reactions.",
      "d) Redox reactions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "What is the process of preparing ethene from ethanol and concentrated sulfuric acid at 180°C?",
    "options": [
      "a) Hydrohalogenation",
      "b) Dehydrohalogenation",
      "c) Dehydration of alcohols",
      "d) Hydrogenation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "What are the physical properties of the first three members of alkenes (ethene, propene, butene) at room temperature?",
    "options": [
      "a) Liquids",
      "b) Solids",
      "c) Gases",
      "d) Waxy solids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The stability order of carbocations is:",
    "options": [
      "a) 1° > 2° > 3°",
      "b) 3° > 2° > 1°",
      "c) Methyl > 1° > 2°",
      "d) All are equally stable."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which type of carbocation is directly bonded to three carbon (alkyl) substituents?",
    "options": [
      "a) Methyl carbocation",
      "b) Primary (1°) carbocation",
      "c) Secondary (2°) carbocation",
      "d) Tertiary (3°) carbocation"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "What are the conditions for converting vegetable oil into margarine (Banaspati ghee) on an industrial scale?",
    "options": [
      "a) Steam and H2SO4",
      "b) Halogen and water",
      "c) Ozone and zinc/water",
      "d) H2 and Ni/Pt catalyst at 250-300 °C"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "Which of the following is true about the structure of ethene (C2H4)?",
    "options": [
      "a) Each carbon atom is sp3 hybridized.",
      "b) It has a linear shape.",
      "c) It has one sigma (σ) bond and one pi (π) bond between the carbon atoms.",
      "d) It has only single bonds."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What is conjugated alkenes?",
    "options": [
      "a) Alkenes with isolated double bonds.",
      "b) Alkenes with alternate double and single bonds.",
      "c) Alkenes with cumulative double bonds.",
      "d) Alkenes that are unreactive."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "How is dehydrohalogenation of alkyl halides carried out to prepare ethene?",
    "options": [
      "a) By reacting with H2SO4.",
      "b) By heating ethyl bromide with alcoholic KOH.",
      "c) By adding H2.",
      "d) By ozonolysis."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the molecular formula of the simplest alkane, methane?",
    "options": [
      "a) C2H6",
      "b) CH4",
      "c) C3H8",
      "d) C4H10"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What is the common name for trichloromethane?",
    "options": [
      "a) Chloromethane",
      "b) Dichloromethane",
      "c) Chloroform",
      "d) Carbon tetrachloride"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "The unreactive nature of alkanes can also be explained by the inertness of which type of bond?",
    "options": [
      "a) Pi (π) bond",
      "b) Sigma (σ) bond",
      "c) Ionic bond",
      "d) Dative bond"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Why do branched alkanes have lower boiling points than their isomeric normal chain alkanes?",
    "options": [
      "a) Stronger intermolecular forces.",
      "b) Larger surface area.",
      "c) Weaker intermolecular forces due to reduced surface contact.",
      "d) Higher molecular mass."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The conversion of a carbon-carbon double bond to an alkane by adding hydrogen is an example of:",
    "options": [
      "a) Organic oxidation.",
      "b) Organic reduction.",
      "c) Electrophilic addition.",
      "d) Substitution."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What type of fission occurs when the originally shared pair of electrons is gained by one atom only, forming oppositely charged ions?",
    "options": [
      "a) Homolytic fission",
      "b) Heterolytic fission",
      "c) Reductive fission",
      "d) Oxidative fission"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The most stable carbonium ion (carbocation) among the following is:",
    "options": [
      "a) CH3+",
      "b) CH3CH2+",
      "c) (CH3)2CH+",
      "d) (CH3)3C+"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 48,
    "questionText": "What is a key characteristic of aromatic hydrocarbons?",
    "options": [
      "a) They are open-chain compounds.",
      "b) They have a low carbon to hydrogen ratio.",
      "c) They are based on benzene or resembling compounds.",
      "d) They are acyclic and saturated."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is halohydration?",
    "options": [
      "a) Reaction of an alkene with water to form an alcohol.",
      "b) Reaction of an alkene with a halogen in the absence of water.",
      "c) Reaction of an alkene with a halogen in the presence of water to form a halohydrin.",
      "d) Reaction of an alkene with hydrogen halide."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The conversion of nitriles to amines is an example of:",
    "options": [
      "a) Organic oxidation.",
      "b) Organic reduction.",
      "c) Electrophilic addition.",
      "d) Substitution."
    ],
    "correctAnswer": "b"
  }
],
    "Nitrogen and Sulfur": [
  {
    "id": 1,
    "questionText": "Nitrogen belongs to which group of the periodic table?",
    "options": [
      "a) Group 14",
      "b) Group 15",
      "c) Group 16",
      "d) Group 18"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the primary reason for the lack of reactivity of nitrogen (N2) at ordinary temperatures?",
    "options": [
      "a) Its high electronegativity.",
      "b) Its small atomic radius.",
      "c) Its triple bond strength and lack of polarity.",
      "d) Its ability to form multiple oxidation states."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "What is the common industrial method for obtaining nitrogen?",
    "options": [
      "a) Heating ammonium nitrite.",
      "b) Cooling air until it becomes a liquid.",
      "c) Reacting ammonia with oxygen.",
      "d) Electrolysis of water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How does ammonia (NH3) behave according to the Brønsted-Lowry theory?",
    "options": [
      "a) As an acid by donating a proton.",
      "b) As a base by accepting a proton.",
      "c) As a neutral molecule.",
      "d) As an oxidizing agent."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "What is the shape of the ammonium ion (NH4+)?",
    "options": [
      "a) Pyramidal",
      "b) Linear",
      "c) Tetrahedral",
      "d) Trigonal planar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "In the laboratory, how can ammonia gas be synthesized from an ammonium salt?",
    "options": [
      "a) By reacting with a strong acid.",
      "b) By heating with a base like Ca(OH)2.",
      "c) By direct reaction with hydrogen.",
      "d) By cooling it rapidly."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Which of the following is not an oxide of nitrogen mentioned in the source?",
    "options": [
      "a) NO",
      "b) N2O",
      "c) N2O3",
      "d) NO2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "NO and NO2 are collectively referred to as:",
    "options": [
      "a) N2O",
      "b) NOx",
      "c) N2O4",
      "d) N2O5"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Which natural source produces NO when N2 and O2 in the air react?",
    "options": [
      "a) Volcanic eruption",
      "b) Forest fires",
      "c) Lightning",
      "d) Denitrifying bacteria"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "What are the main anthropogenic sources of NOx?",
    "options": [
      "a) Lightning and volcanic eruptions.",
      "b) Combustion of fossil fuels in vehicles and power plants.",
      "c) Microorganism activity.",
      "d) Forest fires and biomass burning."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What does PAN stand for in the context of photochemical smog?",
    "options": [
      "a) Polycyclic Aromatic Nitrogen",
      "b) Peroxyacyl Nitrates",
      "c) Phthalic Anhydride Nitride",
      "d) Primary Atmospheric Nitrogen"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "What is the function of a catalytic converter in vehicle exhaust systems?",
    "options": [
      "a) To increase the emission of harmful gases.",
      "b) To convert harmful gases (CO, NO, hydrocarbons) into less harmful ones (CO2, N2, H2O).",
      "c) To store unburned hydrocarbons.",
      "d) To produce more NOx gases."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "Which noble metals are dispersed on alumina in a catalytic converter?",
    "options": [
      "a) Au, Ag, Cu",
      "b) Pt, Pd, Rh",
      "c) Fe, Ni, Co",
      "d) Al, Si, Ge"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Nitrification involves the conversion of:",
    "options": [
      "a) Nitrate to nitrogen gas.",
      "b) Nitrogen gas to ammonia.",
      "c) Ammonium to nitrite and nitrate.",
      "d) Nitrite to ammonium."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Denitrification involves the conversion of:",
    "options": [
      "a) Ammonium to nitrite.",
      "b) Nitrate to nitrogen gas.",
      "c) Nitrogen gas to nitrate.",
      "d) Nitrite to nitrate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Sulfur belongs to which group, also known as the Chalcogen family?",
    "options": [
      "a) Group 15",
      "b) Group 16",
      "c) Group 17",
      "d) Group 18"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "What is the most common bonding characteristic of sulfur, leading to larger molecules like S8?",
    "options": [
      "a) Formation of double bonds.",
      "b) Strong ionic bonding.",
      "c) Catenation, forming single bonds with other sulfur atoms.",
      "d) Extensive hydrogen bonding."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is the approximate shape of the S8 molecule?",
    "options": [
      "a) Linear",
      "b) Planar",
      "c) Crown-like",
      "d) Tetrahedral"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Under acidic conditions, which oxidation state of sulfur is generally more stable?",
    "options": [
      "a) +6 (e.g., SO42-)",
      "b) +4 (e.g., SO2)",
      "c) -2 (e.g., H2S)",
      "d) 0 (elemental sulfur)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "What is the oxidation state of sulfur in H2SO4?",
    "options": [
      "a) +2",
      "b) +4",
      "c) +6",
      "d) -2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "What is the oxidation state of sulfur in SO3?",
    "options": [
      "a) +2",
      "b) +4",
      "c) +6",
      "d) -2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "When sulfur burns in the air, what gas is primarily formed with a blue-colored flame?",
    "options": [
      "a) SO3",
      "b) H2S",
      "c) SO2",
      "d) SCl2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "When sulfur reacts with elements that have lower electronegativity, sulfur acts as a(n):",
    "options": [
      "a) Reducing agent.",
      "b) Oxidizing agent.",
      "c) Catalyst.",
      "d) Solvent."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "What is the process of cross-linking rubber molecular chains with sulfur called?",
    "options": [
      "a) Polymerization",
      "b) Vulcanization",
      "c) Sulfonation",
      "d) Catenation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is the main component of gunpowder, along with sulfur and charcoal?",
    "options": [
      "a) Sodium nitrate",
      "b) Potassium nitrate",
      "c) Ammonium nitrate",
      "d) Calcium sulfate"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "Which type of sulfur-containing drugs are antibacterial sulfonamides, such as penicillins?",
    "options": [
      "a) Thioethers",
      "b) Sulfoxides",
      "c) Sulfa drugs",
      "d) Sulfones"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "What is the role of mercaptans in natural gas?",
    "options": [
      "a) To remove impurities.",
      "b) To give it an odor.",
      "c) To increase its heating value.",
      "d) To act as a catalyst."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "What is the major portion (around 85%) of sulfur used for?",
    "options": [
      "a) Production of gunpowder.",
      "b) Vulcanization of rubber.",
      "c) Production of sulfuric acid.",
      "d) Synthesis of dyes and drugs."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "In the Contact Process for sulfuric acid production, what happens to SO3 after it is cooled?",
    "options": [
      "a) It is directly reacted with water.",
      "b) It is dissolved in recirculating hot 98.5% sulfuric acid to form oleum.",
      "c) It is condensed into liquid SO3.",
      "d) It is released into the atmosphere."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "What is oleum?",
    "options": [
      "a) Pure sulfuric acid.",
      "b) A mixture of sulfur trioxide with 100 percent sulfuric acid.",
      "c) Dilute sulfuric acid.",
      "d) Sulfuric acid with dissolved impurities."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Sulfuric acid is highly soluble in water and is hygroscopic in nature, meaning it:",
    "options": [
      "a) Reacts explosively with water.",
      "b) Readily absorbs water vapor from the air.",
      "c) Repels water.",
      "d) Has a low boiling point."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the pKa1 value for H2SO4, indicating it is a strong acid?",
    "options": [
      "a) +2",
      "b) -2",
      "c) +1.92",
      "d) -1.92"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Concentrated sulfuric acid is a powerful dehydrating agent because it removes water from substances like sucrose and starch to produce:",
    "options": [
      "a) Acids and bases.",
      "b) Carbon, steam, and heat.",
      "c) Alcohols and ethers.",
      "d) Sugars and starches."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "How do metals above hydrogen in the electrochemical series (e.g., Zn, Fe) react with dilute sulfuric acid?",
    "options": [
      "a) They liberate SO2.",
      "b) They liberate H2S.",
      "c) They produce hydrogen gas and metal sulfates.",
      "d) They do not react."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "Which of the following metals reacts with hot concentrated H2SO4 to form metal sulfates, liberating SO2?",
    "options": [
      "a) Iron",
      "b) Magnesium",
      "c) Copper",
      "d) Aluminum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "What is the significance of sulfuric acid consumption in a country?",
    "options": [
      "a) It indicates the country's agricultural output.",
      "b) It indicates the country's industrial progress.",
      "c) It indicates the country's energy consumption.",
      "d) It indicates the country's water purity."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "What is a major use of sulfuric acid in the agricultural sector?",
    "options": [
      "a) As a pesticide.",
      "b) In making fertilizers (e.g., ammonium sulfate).",
      "c) As a soil conditioner.",
      "d) For crop drying."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What is nitrous oxide (N2O) also commonly known as?",
    "options": [
      "a) Laughing gas",
      "b) Rocket propellant",
      "c) Biochemical messenger",
      "d) Nitrogen peroxide"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 39,
    "questionText": "What is the catalyst used in the Contact Process for the oxidation of SO2 into SO3?",
    "options": [
      "a) Platinum",
      "b) Iron",
      "c) Vanadium pentoxide (V2O5)",
      "d) Nickel"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "How is arsenic oxide (As2O3) removed from SO2 gas in the purification unit of the Contact Process?",
    "options": [
      "a) By filtration.",
      "b) By absorption with gelatinous ferric hydroxide.",
      "c) By cooling and condensation.",
      "d) By reacting with water."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the recommended IUPAC name for ammonia?",
    "options": [
      "a) Ammonia",
      "b) Hydrazine",
      "c) Azane",
      "d) Aminomethane"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "How does the oxidation state of sulfur change in the reaction S(s) + 6HNO3(l) → H2SO4(l) + 6NO2(g) + 2H2O(l)?",
    "options": [
      "a) From 0 to +4.",
      "b) From 0 to +6.",
      "c) From +4 to +6.",
      "d) From -2 to +6."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which sulfur-containing functional group is present in drugs like omeprazole (for reflux disease)?",
    "options": [
      "a) Thiols",
      "b) Thioethers",
      "c) Sulfoxides",
      "d) Sulfones"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which gas is used as an insulator in electric devices due to its unreactive nature?",
    "options": [
      "a) SO2",
      "b) H2S",
      "c) SF6",
      "d) SCl2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the process of thionation or sulfurization used for?",
    "options": [
      "a) To vulcanize rubber.",
      "b) To produce sulfur dyes.",
      "c) To extract sulfur from ores.",
      "d) To create odorants."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the effect of decreasing temperature on the equilibrium for SO3 formation (2SO2(g) + O2(g) ⇌ 2SO3(g), ΔH = negative)?",
    "options": [
      "a) Decreases the yield of SO3.",
      "b) Increases the rate of reaction.",
      "c) Favors the formation of SO3.",
      "d) Has no effect on yield."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What happens to the pH and temperature as ammonia solution is heated in the laboratory synthesis of ammonia?",
    "options": [
      "a) pH increases, temperature decreases.",
      "b) pH decreases, temperature increases.",
      "c) Both increase.",
      "d) Both decrease."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "What is the approximate percentage of nitrogen in the atmosphere?",
    "options": [
      "a) 21.01%",
      "b) 0.93%",
      "c) 78.00%",
      "d) 0.04%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "What is the name of the yellow liquid formed when sulfur reacts with chlorine?",
    "options": [
      "a) SCl2",
      "b) SF6",
      "c) S2Cl2",
      "d) SO2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The recommended name for ammonium ion by IUPAC is:",
    "options": [
      "a) Ammonia",
      "b) Azane",
      "c) Hydronium",
      "d) Azanium"
    ],
    "correctAnswer": "d"
  }
],
    "Halogens": [
  {
    "id": 1,
    "questionText": "Which of the following halogens is a reddish-brown volatile liquid at room temperature?",
    "options": [
      "a) Fluorine",
      "b) Chlorine",
      "c) Bromine",
      "d) Iodine"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What is the typical color of chlorine gas at room temperature?",
    "options": [
      "a) Pale yellow",
      "b) Greenish yellow",
      "c) Red-brown",
      "d) Dark gray"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Which halogen sublimes directly from a solid to a violet vapor?",
    "options": [
      "a) Fluorine",
      "b) Chlorine",
      "c) Bromine",
      "d) Iodine"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 4,
    "questionText": "How does the volatility of halogens change as one moves down Group 17 from chlorine to iodine?",
    "options": [
      "a) It increases",
      "b) It decreases",
      "c) It remains constant",
      "d) It fluctuates unpredictably"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "The decreasing volatility of halogens down the group is primarily attributed to:",
    "options": [
      "a) Decreasing atomic radius",
      "b) Increasing electronegativity",
      "c) Increasing molecular mass and stronger London dispersion forces",
      "d) Increasing bond strength"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which type of intermolecular forces significantly determines the volatility of halogens?",
    "options": [
      "a) Hydrogen bonding",
      "b) Permanent dipole-permanent dipole forces",
      "c) Instantaneous dipole-induced dipole forces (London dispersion forces)",
      "d) Ionic forces"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "A molecule with larger size and higher polarizability will generally have:",
    "options": [
      "a) Lower boiling point and higher volatility",
      "b) Lower boiling point and lower volatility",
      "c) Higher boiling point and higher volatility",
      "d) Higher boiling point and lower volatility"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 8,
    "questionText": "Which statement accurately describes the bond strength trend in halogen molecules (Cl2, Br2, I2)?",
    "options": [
      "a) It increases down the group.",
      "b) It decreases down the group.",
      "c) It remains constant down the group.",
      "d) It is highest for iodine."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Why is the F-F bond strength exceptionally weaker compared to the general trend in halogens?",
    "options": [
      "a) Larger atomic radius of fluorine",
      "b) Significant electron-electron repulsion between lone pairs due to small size",
      "c) Lower electronegativity of fluorine",
      "d) Stronger London dispersion forces in F2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "What is the order of decreasing oxidizing power among the halogens?",
    "options": [
      "a) I2 > Br2 > Cl2 > F2",
      "b) Cl2 > Br2 > I2 > F2",
      "c) Br2 > Cl2 > I2 > F2",
      "d) F2 > Cl2 > Br2 > I2"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 11,
    "questionText": "Which halogen can oxidize and displace all other halide ions (Cl-, Br-, I-) from their solutions?",
    "options": [
      "a) Fluorine (F2)",
      "b) Chlorine (Cl2)",
      "c) Bromine (Br2)",
      "d) Iodine (I2)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The oxidizing power of halogens is related to their standard electrode potential (Eo) values. A more positive Eo value indicates:",
    "options": [
      "a) Decreasing oxidizing power",
      "b) Increasing oxidizing power",
      "c) No relation to oxidizing power",
      "d) Increasing reducing power"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "Which of the following factors contributes to a halogen having a high oxidizing power?",
    "options": [
      "a) High energy of dissociation",
      "b) Low electron affinity of atoms",
      "c) Higher hydration energy of its ions",
      "d) Low heat of vaporization"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "How does the reactivity of halogens with hydrogen change down the group from fluorine to iodine?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It shows no clear trend."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "What are the conditions for the reaction between hydrogen and fluorine?",
    "options": [
      "a) Heating with catalyst",
      "b) UV light or spark",
      "c) Low temperature and dark conditions, explosively",
      "d) High temperature and presence of catalyst"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which hydrogen halide is formed when bromine reacts with hydrogen upon heating?",
    "options": [
      "a) HF",
      "b) HCl",
      "c) HBr",
      "d) HI"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "The reaction between hydrogen and iodine to form hydrogen iodide (HI) gas is typically:",
    "options": [
      "a) Explosive and irreversible",
      "b) Fast and complete",
      "c) Slow and reversible, requiring a catalyst at high temperature",
      "d) Spontaneous at room temperature"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "How does the thermal stability of hydrogen halides (H-X) change down the halogen group from fluorine to iodine?",
    "options": [
      "a) It decreases.",
      "b) It increases.",
      "c) It remains constant.",
      "d) It shows an irregular trend."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 19,
    "questionText": "What is the primary reason for the trend in thermal stability of hydrogen halides?",
    "options": [
      "a) Increasing electronegativity of halogens",
      "b) Decreasing bond dissociation energies (bond strength)",
      "c) Increasing hydrogen bonding",
      "d) Decreasing atomic number"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Which hydrogen halide has the highest bond dissociation energy and is the most thermally stable?",
    "options": [
      "a) HF",
      "b) HCl",
      "c) HBr",
      "d) HI"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 21,
    "questionText": "What is the order of increasing reducing ability of halide ions?",
    "options": [
      "a) F- < Cl- < Br- < I-",
      "b) I- < Br- < Cl- < F-",
      "c) Cl- < Br- < F- < I-",
      "d) F- < I- < Br- < Cl-"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "Why is the fluoride ion (F-) considered the weakest reducing agent among halides?",
    "options": [
      "a) Its large size and low charge density.",
      "b) Its high tendency to donate electrons.",
      "c) Its high electronegativity and strong bond with its extra electron, leading to high charge density.",
      "d) Its ability to form strong covalent bonds."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Which of the following halide ions forms a white precipitate with aqueous silver nitrate that is soluble in dilute ammonia?",
    "options": [
      "a) Fluoride (F-)",
      "b) Chloride (Cl-)",
      "c) Bromide (Br-)",
      "d) Iodide (I-)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "A cream-colored precipitate is formed when aqueous silver ions react with which halide ion?",
    "options": [
      "a) Fluoride (F-)",
      "b) Chloride (Cl-)",
      "c) Bromide (Br-)",
      "d) Iodide (I-)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "What happens when aqueous ammonia is added to a yellow precipitate formed by reacting aqueous silver ions with an iodide solution?",
    "options": [
      "a) The precipitate dissolves in dilute ammonia.",
      "b) The precipitate dissolves in concentrated ammonia.",
      "c) The precipitate remains insoluble.",
      "d) The precipitate turns white."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Which silver halide is soluble in water and therefore does not form a precipitate with aqueous silver ions?",
    "options": [
      "a) AgF",
      "b) AgCl",
      "c) AgBr",
      "d) AgI"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 27,
    "questionText": "What is produced when concentrated sulfuric acid reacts with sodium fluoride (NaF)?",
    "options": [
      "a) Bromine fumes",
      "b) Sulfur dioxide gas",
      "c) Fumes of hydrogen fluoride gas",
      "d) Hydrogen sulfide gas"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "When concentrated sulfuric acid reacts with sodium bromide (NaBr), what are the main observations?",
    "options": [
      "a) Fumes of hydrogen bromide only.",
      "b) Steamy fumes of HBr gas and brown fumes of Br2, along with the smell of SO2.",
      "c) Purple fumes of iodine.",
      "d) Only sulfur dioxide gas is produced."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Which halide ion is a strong reducing agent and reduces concentrated H2SO4 to H2S?",
    "options": [
      "a) Fluoride (F-)",
      "b) Chloride (Cl-)",
      "c) Bromide (Br-)",
      "d) Iodide (I-)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "A reaction in which a single element undergoes both oxidation and reduction simultaneously is called a:",
    "options": [
      "a) Neutralization reaction",
      "b) Disproportionation reaction",
      "c) Displacement reaction",
      "d) Combination reaction"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "When chlorine gas reacts with cold aqueous sodium hydroxide, what are the main chlorine-containing products?",
    "options": [
      "a) NaCl and NaClO3",
      "b) NaCl and NaClO",
      "c) HCl and HClO3",
      "d) Cl2O and HCl"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What are the oxidation states of chlorine in the products formed when chlorine reacts with cold aqueous sodium hydroxide?",
    "options": [
      "a) -1 and +3",
      "b) -1 and +1",
      "c) +1 and +5",
      "d) 0 and -1"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "When chlorine gas reacts with hot aqueous sodium hydroxide, what are the main chlorine-containing products?",
    "options": [
      "a) NaCl and NaClO3",
      "b) NaCl and NaClO",
      "c) HCl and HClO3",
      "d) Cl2O and HCl"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What are the oxidation states of chlorine in the products formed when chlorine reacts with hot aqueous sodium hydroxide?",
    "options": [
      "a) -1 and +1",
      "b) +1 and +3",
      "c) -1 and +5",
      "d) 0 and -1"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "What is the primary reason for using chlorine in water purification?",
    "options": [
      "a) To increase water hardness",
      "b) To remove suspended solids",
      "c) Its strong disinfectant properties against bacteria",
      "d) To adjust water pH"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "When chlorine gas is added to water for purification, it undergoes hydrolysis to form:",
    "options": [
      "a) Only hydrochloric acid (HCl)",
      "b) Only chloric (I) acid (HClO)",
      "c) A mixture of hydrochloric acid (HCl) and chloric (I) acid (HClO)",
      "d) Chlorine dioxide (ClO2)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "Which of the following species is a primary active disinfectant in chlorinated water and is more effective due to its neutral charge?",
    "options": [
      "a) Chloride ion (Cl-)",
      "b) Hydrogen ion (H+)",
      "c) Chloric (I) acid (HOCl)",
      "d) Chlorate (I) ion (OCl-)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Why is HOCl considered a more effective disinfectant than OCl-?",
    "options": [
      "a) OCl- is more reactive.",
      "b) HOCl is a stronger acid.",
      "c) OCl- has a negative charge, which inhibits penetration into cell walls.",
      "d) HOCl's neutral charge allows it to penetrate cell walls of microorganisms more easily."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 39,
    "questionText": "What happens to the effectiveness of water disinfection by chlorine at higher pH (above 7.5)?",
    "options": [
      "a) It increases because HOCl predominates.",
      "b) It decreases because OCl- predominates, which is less effective.",
      "c) It remains constant, as pH does not affect disinfection.",
      "d) It leads to the formation of stronger disinfectants."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "What is the \"silver nitrate test\" commonly used for in qualitative analysis?",
    "options": [
      "a) To identify sulfate ions.",
      "b) To identify nitrate ions.",
      "c) To identify halide ions.",
      "d) To identify carbonate ions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "In the reaction of halogens with hydrogen, which element reacts explosively with hydrogen at low temperatures and in the dark?",
    "options": [
      "a) Fluorine",
      "b) Chlorine",
      "c) Bromine",
      "d) Iodine"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 42,
    "questionText": "How does the bond strength of H-X (hydrogen halide) relate to its thermal stability?",
    "options": [
      "a) Directly proportional: stronger bond, lower stability.",
      "b) Directly proportional: stronger bond, higher stability.",
      "c) Inversely proportional: stronger bond, higher stability.",
      "d) Inversely proportional: weaker bond, lower stability."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Why is dilute nitric acid added during the silver nitrate test for halide ions?",
    "options": [
      "a) To enhance the color of the precipitate.",
      "b) To increase the solubility of silver halides.",
      "c) To react with excess silver nitrate.",
      "d) To prevent the precipitation of carbonate ions."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 44,
    "questionText": "Which of the following statements about fluorine (F2) is correct based on the sources?",
    "options": [
      "a) It has the weakest oxidizing power among halogens.",
      "b) Its bond strength is relatively weak due to electron-electron repulsion.",
      "c) It reacts slowly with hydrogen even in dark conditions.",
      "d) Its F-F bond energy is higher than Cl-Cl bond energy."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "What is the Greek meaning of the word \"halogen\"?",
    "options": [
      "a) Fragrance maker",
      "b) Salt maker",
      "c) Acid maker",
      "d) Fire maker"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Which of the following is true regarding the solubility of silver halides in aqueous ammonia?",
    "options": [
      "a) AgCl is insoluble in dilute ammonia.",
      "b) AgI is soluble in concentrated ammonia.",
      "c) AgBr is sparingly soluble in concentrated ammonia.",
      "d) AgF forms a precipitate which is then soluble in ammonia."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What causes the colors of halogens (X2) to darken progressively from chlorine to iodine?",
    "options": [
      "a) Increase in reactivity.",
      "b) Decrease in volatility.",
      "c) Changes in the absorption of light due to electron transitions.",
      "d) Increase in bond strength."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "The standard electrode potential (Eo) values for halogens (X2/X-) become less positive from fluorine to iodine. This trend indicates:",
    "options": [
      "a) Increasing reducing power",
      "b) Increasing thermal stability",
      "c) Decreasing oxidizing power",
      "d) Decreasing volatility"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "Which of the following is an example of a disproportionation reaction involving chlorine?",
    "options": [
      "a) Cl2 + H2 → 2HCl",
      "b) 2NaCl + F2 → 2NaF + Cl2",
      "c) 3Cl2 + 6NaOH (hot) → NaCl + NaClO3 + 3H2O",
      "d) AgCl + 2NH3 → [Ag(NH3)2]Cl"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The effectiveness of water disinfection by chlorine is affected by which of the following factors?",
    "options": [
      "a) Presence of inert gases",
      "b) Water turbidity",
      "c) pH of the water",
      "d) Pressure of the water"
    ],
    "correctAnswer": "c"
  }
],
    "Atmosphere": [
  {
    "id": 1,
    "questionText": "Which layer of the atmosphere extends up to 12 km and is where major weather events occur?",
    "options": [
      "a) Stratosphere",
      "b) Troposphere",
      "c) Mesosphere",
      "d) Thermosphere"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "In which layer of the atmosphere does the temperature generally increase with increasing altitude?",
    "options": [
      "a) Troposphere and Mesosphere",
      "b) Stratosphere and Thermosphere",
      "c) Troposphere and Thermosphere",
      "d) Mesosphere and Stratosphere"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The ozone layer, which absorbs high-energy ultraviolet radiation from the Sun, is located in the:",
    "options": [
      "a) Troposphere",
      "b) Stratosphere",
      "c) Mesosphere",
      "d) Thermosphere"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "What is the approximate percentage of nitrogen in the Earth's atmosphere?",
    "options": [
      "a) 78.00%",
      "b) 21.01%",
      "c) 0.93%",
      "d) 0.04%"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 5,
    "questionText": "Which of the following is considered a \"trace component\" of the atmosphere?",
    "options": [
      "a) Argon",
      "b) Carbon dioxide",
      "c) Methane",
      "d) Oxygen"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Pollutants formed due to chemical reactions of primary pollutants are known as:",
    "options": [
      "a) Natural pollutants",
      "b) Mobile pollutants",
      "c) Secondary pollutants",
      "d) Anthropogenic pollutants"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Which of the following is primarily a natural source of nitrogen oxides (NOx) in the atmosphere?",
    "options": [
      "a) Vehicle exhausts",
      "b) Thunderbolt (lightning)",
      "c) Industrial power plants",
      "d) Biomass burning"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "What is the main source of carbon monoxide (CO) in the atmosphere?",
    "options": [
      "a) Complete combustion of fossil fuels",
      "b) Incomplete combustion of fossil fuels",
      "c) Volcanic eruptions",
      "d) Photosynthesis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Carbon monoxide is a highly poisonous gas because it:",
    "options": [
      "a) Reacts with water to form acid rain.",
      "b) Depletes the ozone layer.",
      "c) Causes respiratory irritation.",
      "d) Binds with blood hemoglobin more strongly than oxygen."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "Which greenhouse gas is produced by microbial processes in soil and oceans and human activities like agricultural fertilizer use?",
    "options": [
      "a) Carbon monoxide",
      "b) Sulfur dioxide",
      "c) Nitrogen dioxide",
      "d) Methane"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 11,
    "questionText": "What is the major source of acid deposition in the air?",
    "options": [
      "a) Sulfur dioxide (SO2)",
      "b) Carbon dioxide (CO2)",
      "c) Methane (CH4)",
      "d) Ozone (O3)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "Which of the following is a major source of hydrocarbon emissions?",
    "options": [
      "a) Volcanic eruptions",
      "b) Forest fires",
      "c) Automobiles",
      "d) Algae on ocean surface"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The decrease in the concentration of ozone in the stratosphere is primarily caused by:",
    "options": [
      "a) Carbon dioxide",
      "b) Sulfur dioxide",
      "c) Chlorofluorocarbons (CFCs)",
      "d) Methane"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "How many molecules of ozone can one molecule of CFCs potentially destroy?",
    "options": [
      "a) 100",
      "b) 1,000",
      "c) 10,000",
      "d) 100,000"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "What are Polycyclic Aromatic Hydrocarbons (PAHs) primarily generated from?",
    "options": [
      "a) Complete combustion of natural gas.",
      "b) Incomplete combustion of fossil fuels and vehicle emissions.",
      "c) Photosynthesis in marine environments.",
      "d) Industrial processes that use water as a coolant."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Which characteristic defines Persistent Organic Pollutants (POPs)?",
    "options": [
      "a) They readily degrade through biological processes.",
      "b) They are only toxic in high concentrations.",
      "c) They are limited to their country of origin.",
      "d) They are resistant to degradation and accumulate in the environment."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "Which of the following is NOT listed as a common Volatile Organic Compound (VOC)?",
    "options": [
      "a) Benzene",
      "b) Toluene",
      "c) Acetone",
      "d) Water"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "Short-term exposure to VOCs can cause:",
    "options": [
      "a) Liver damage",
      "b) Kidney damage",
      "c) Central nervous system damage",
      "d) Eye, nose, and throat irritation"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "Particulate matter (PM) includes which of the following?",
    "options": [
      "a) Only solid particles",
      "b) Only liquid droplets",
      "c) Solid particles, liquid droplets, or both",
      "d) Only gases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Which human activity is considered the primary cause of current climate change?",
    "options": [
      "a) Burning of fossil fuels",
      "b) Deforestation",
      "c) Volcanic eruptions",
      "d) Use of renewable energy"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 21,
    "questionText": "What defines acid rain?",
    "options": [
      "a) Rain with a pH greater than 7.",
      "b) Rain with a pH of exactly 7.",
      "c) Rain with a pH less than 5.6.",
      "d) Any precipitation containing dissolved pollutants."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The progressive warming up of the Earth's surface due to the blanketing effect of greenhouse gases is called:",
    "options": [
      "a) Ozone depletion",
      "b) Greenhouse effect",
      "c) Acid precipitation",
      "d) Photochemical smog"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Which of the following is NOT listed as a greenhouse gas (GHG)?",
    "options": [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Oxygen"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 24,
    "questionText": "What AQI value is generally considered \"Good\" in air quality and safe for outdoor activities?",
    "options": [
      "a) 0 to 50",
      "b) 51 to 100",
      "c) 101 to 150",
      "d) 301 to 500"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 25,
    "questionText": "An AQI value over 300 is considered:",
    "options": [
      "a) Moderate",
      "b) Unhealthy for sensitive groups",
      "c) Very unhealthy",
      "d) Hazardous"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "Which of the following meteorological conditions can lead to poor air quality?",
    "options": [
      "a) Strong winds that disperse pollutants",
      "b) A layer of warm air trapping pollutants near the ground (temperature inversion)",
      "c) Low humidity",
      "d) Consistent rainfall"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "What health condition is specifically linked to the inhalation of particulate matter (PM)?",
    "options": [
      "a) Liver damage",
      "b) Central nervous system damage",
      "c) Asthma and bronchitis",
      "d) Skin irritation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The instrument used to measure the Air Quality Index (AQI) by monitoring particulate matter is a:",
    "options": [
      "a) Spectrometer",
      "b) Nephelometer",
      "c) Calorimeter",
      "d) Potentiometer"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Which air quality monitoring system is used at industrial sites to continuously monitor gases like CO, O3, SO2, NO2, VOCs, and PM?",
    "options": [
      "a) Continuous Emission Monitoring System (CEMS)",
      "b) Air Quality Monitoring Stations (AQMS)",
      "c) Remote sensing techniques",
      "d) Nephelometers"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "What is the primary function of a Diesel Particulate Filter (DPF) in modern diesel engines?",
    "options": [
      "a) To reduce NOx emissions.",
      "b) To capture and store soot particles from exhaust gases.",
      "c) To oxidize CO and hydrocarbons.",
      "d) To reduce sulfur emissions."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Which technology uses catalysts like TiO2 or zeolites to reduce NOx to N2 and oxidize CO and hydrocarbons to CO2 and water vapor in diesel engines?",
    "options": [
      "a) Diesel particulate filter (DPF)",
      "b) Scrubbers",
      "c) Selective Catalytic Reduction (SCR)",
      "d) Catalytic converter (CC)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "What is the role of scrubbers in air pollution control?",
    "options": [
      "a) To filter out solid particulate matter only.",
      "b) To use liquids (e.g., H2O) to remove a wide range of pollutants.",
      "c) To convert NOx into N2.",
      "d) To remove sulfur from fossil fuels before combustion."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Which layer of the atmosphere is the densest layer?",
    "options": [
      "a) Troposphere",
      "b) Stratosphere",
      "c) Mesosphere",
      "d) Thermosphere"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "Ozone in the upper stratosphere is formed by the recombination of:",
    "options": [
      "a) Nitrogen and oxygen",
      "b) Carbon dioxide and oxygen",
      "c) Monoatomic oxygen and diatomic oxygen",
      "d) Hydrocarbons and oxygen"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": " \"Primary pollutants\" are defined as:",
    "options": [
      "a) Substances directly produced or emitted.",
      "b) Substances formed from reactions of other pollutants.",
      "c) Only naturally occurring pollutants.",
      "d) Only human-made pollutants."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 36,
    "questionText": "Which natural source of air pollution involves denitrifying bacteria in soil?",
    "options": [
      "a) Volcanic eruption",
      "b) Microbial processes",
      "c) Forest fires",
      "d) Wind erosion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 37,
    "questionText": "The burning of wood as a domestic fuel is considered a:",
    "options": [
      "a) Natural source of air pollution.",
      "b) Human-made source of air pollution.",
      "c) Primary pollutant.",
      "d) Secondary pollutant."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "Low-altitude ozone is harmful to:",
    "options": [
      "a) Only humans",
      "b) Only plants",
      "c) Only materials like rubber and fabric dyes",
      "d) Humans, plants, and various materials"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 39,
    "questionText": "The decomposition of CFCs in the stratosphere creates which highly reactive species that breaks down ozone?",
    "options": [
      "a) Oxygen radical (O.)",
      "b) Chloride free radical (Cl.)",
      "c) Hydroxyl radical (HO.)",
      "d) Nitrogen oxide (NO)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "Polychlorinated Biphenyls (PCBs) are examples of POPs used in:",
    "options": [
      "a) Pesticides",
      "b) Electrical equipment, surface coatings, inks, adhesives, and paints",
      "c) Refrigerants",
      "d) Fertilizers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Which compound is an example of a PAH?",
    "options": [
      "a) Benzene",
      "b) Naphthalene",
      "c) Ethanol",
      "d) Methane"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "How does deforestation contribute to atmospheric changes?",
    "options": [
      "a) It reduces the absorption of CO2 from the atmosphere.",
      "b) It increases oxygen production.",
      "c) It has no significant impact on atmospheric composition.",
      "d) It increases local rainfall."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "Which of the following is a chemical reaction involved in the formation of acid rain?",
    "options": [
      "a) CH4 + 2O2 → CO2 + 2H2O",
      "b) O3 → O2 + O",
      "c) SO3 + H2O → H2SO4",
      "d) N2 + O2 → 2NO"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which group of people is considered to be at \"high-risk\" when the AQI is over 300?",
    "options": [
      "a) Only healthy adults",
      "b) Only outdoor workers",
      "c) Children under 18, adults over 65, people with chronic heart/lung diseases, and outdoor workers.",
      "d) Only people with pre-existing conditions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The \"safest\" range of AQI is indicated by which color?",
    "options": [
      "a) Green",
      "b) Yellow",
      "c) Orange",
      "d) Red"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 46,
    "questionText": "What is one of the \"natural events\" that can significantly lower air quality?",
    "options": [
      "a) Photosynthesis",
      "b) Ocean currents",
      "c) Dust storms",
      "d) Rain showers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "The overall goal of strategies like catalytic converters, DPF, and SCR is to:",
    "options": [
      "a) Increase vehicle speed.",
      "b) Reduce fuel consumption.",
      "c) Reduce air pollution and improve air quality.",
      "d) Convert gasoline to diesel."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "What does \"NEQS\" stand for in the context of air pollution control in Pakistan?",
    "options": [
      "a) National Environmental Quality Survey",
      "b) Natural Environmental Quality Standard",
      "c) New Emission Quality System",
      "d) National Energy Quota System"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Which layer of the atmosphere is located from 80 km to 600 km above the Earth's surface?",
    "options": [
      "a) Troposphere",
      "b) Stratosphere",
      "c) Mesosphere",
      "d) Thermosphere"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "The coldest region of the atmosphere is located in which layer?",
    "options": [
      "a) Troposphere",
      "b) Stratosphere",
      "c) Mesosphere",
      "d) Thermosphere"
    ],
    "correctAnswer": "c"
  }
],
    "Basic Separation Techniques": [
  {
    "id": 1,
    "questionText": "In a solution, the component present in excess as compared to the solute is called the:",
    "options": [
      "a) Residue",
      "b) Solvent",
      "c) Filtrate",
      "d) Mixture"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "The homogeneous mixture formed when a solute dissolves in a solvent is called a:",
    "options": [
      "a) Solution",
      "b) Suspension",
      "c) Precipitate",
      "d) Emulsion"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 3,
    "questionText": "What is the purpose of filtration?",
    "options": [
      "a) To separate miscible liquids.",
      "b) To separate an insoluble solid from a liquid.",
      "c) To obtain pure crystals from a solution.",
      "d) To separate components based on boiling points."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT mentioned as a filter medium for filtration?",
    "options": [
      "a) Filter paper",
      "b) Gooch crucible",
      "c) Sintered glass crucible",
      "d) Cotton wool only (without a crucible)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "The liquid obtained in the conical flask underneath the funnel after filtration is called the:",
    "options": [
      "a) Residue",
      "b) Solute",
      "c) Filtrate",
      "d) Solvent"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Which type of crucible is made of porcelain with a perforated bottom, often covered with paper pulp or an asbestos mat?",
    "options": [
      "a) Gooch crucible",
      "b) Sintered glass crucible",
      "c) Porcelain evaporating dish",
      "d) Büchner funnel"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 7,
    "questionText": "A sintered glass crucible is convenient to use because:",
    "options": [
      "a) It can be ignited at high temperatures.",
      "b) It allows for very slow filtration.",
      "c) No preparation is needed as with the Gooch crucible.",
      "d) It reacts with concentrated acids."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the basic principle of crystallization?",
    "options": [
      "a) Solute solubility increases with temperature, then decreases on cooling to form crystals.",
      "b) Solute decomposes at high temperature to form crystals.",
      "c) Solute evaporates to leave crystals behind.",
      "d) Impurities remain in solution at all temperatures."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 9,
    "questionText": "Which of the following is NOT an ideal feature for a solvent used in crystallization?",
    "options": [
      "a) It should dissolve a large amount of the substance at its boiling point.",
      "b) It should not react chemically with the solute.",
      "c) It should be easily removable.",
      "d) It should dissolve impurities equally well at all temperatures."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "If a solvent for crystallization is inflammable, what precaution should be taken during heating?",
    "options": [
      "a) Use a Bunsen burner with a strong flame.",
      "b) Use a water bath for heating.",
      "c) Heat directly over an open flame.",
      "d) Heat rapidly to minimize exposure."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 11,
    "questionText": "What is the purpose of adding finely powdered animal charcoal during crystallization if colored impurities are present?",
    "options": [
      "a) To increase the solubility of the solute.",
      "b) To act as a drying agent.",
      "c) To adsorb the colored impurities.",
      "d) To promote faster crystal formation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Which drying agent is mentioned for use in a vacuum desiccator during the drying of crystals?",
    "options": [
      "a) Sodium chloride",
      "b) Distilled water",
      "c) Silica gel",
      "d) Activated carbon"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Simple distillation is primarily used to separate:",
    "options": [
      "a) A mixture of two miscible liquids.",
      "b) A mixture of two immiscible liquids.",
      "c) A solvent from a non-volatile solid solute.",
      "d) Components based on their Rf values."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "What is the approximate difference in boiling points required for two miscible liquids to be successfully separated by fractional distillation?",
    "options": [
      "a) Around 5°C",
      "b) Around 10°C",
      "c) Around 25°C",
      "d) Around 50°C"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the function of the glass beads or packing in a fractional distillation column?",
    "options": [
      "a) To cool the vapors.",
      "b) To prevent bumping of the liquid.",
      "c) To increase the surface area for condensing the vapor.",
      "d) To measure the temperature of the distillation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Which of the following is a daily-life application of fractional distillation?",
    "options": [
      "a) Purifying drinking water from suspended solids.",
      "b) Separating sand from salt.",
      "c) Separating components of petroleum (e.g., petrol, diesel).",
      "d) Obtaining pure sugar from a sugary solution."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Chromatography involves the distribution of a solute between which two phases?",
    "options": [
      "a) Liquid and gas phases.",
      "b) Solid and gas phases.",
      "c) Stationary and mobile phases.",
      "d) Polar and non-polar phases."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "In adsorption chromatography, the stationary phase is typically a:",
    "options": [
      "a) Solid",
      "b) Liquid",
      "c) Gas",
      "d) Gel"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 19,
    "questionText": "Paper chromatography is classified as which type of chromatography?",
    "options": [
      "a) Adsorption chromatography",
      "b) Partition chromatography",
      "c) Ion-exchange chromatography",
      "d) Gel filtration chromatography"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "In ascending paper chromatography, how does the solvent travel up the paper?",
    "options": [
      "a) By gravity.",
      "b) By capillary action.",
      "c) By pumping.",
      "d) By diffusion from top to bottom."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "What is a \"locating agent\" used for in paper chromatography?",
    "options": [
      "a) To speed up the separation process.",
      "b) To prevent the solvent from evaporating.",
      "c) To make colorless separated substances visible.",
      "d) To hold the paper in place."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What does the Rf value represent in chromatography?",
    "options": [
      "a) The ratio of the distance traveled by the component to the distance traveled by the solvent.",
      "b) The rate of flow of the mobile phase.",
      "c) The retention time of the component in the stationary phase.",
      "d) The amount of substance separated."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 23,
    "questionText": "A pure substance produces how many spots on a chromatogram?",
    "options": [
      "a) Two or more.",
      "b) One.",
      "c) Zero.",
      "d) Varies depending on the substance."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "How can the purity of a liquid compound be checked?",
    "options": [
      "a) By measuring its melting point.",
      "b) By comparing its boiling point with literature values.",
      "c) By observing its color.",
      "d) By performing a titration."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "If a crude product (like aspirin) melts within a range of temperature rather than sharply at its known melting point, it indicates:",
    "options": [
      "a) The product is pure.",
      "b) The product is impure.",
      "c) The heating rate was too slow.",
      "d) The thermometer is faulty."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "What is the \"mixed melting point\" method used for?",
    "options": [
      "a) To determine the boiling point of a mixture.",
      "b) To separate components of a mixture.",
      "c) To confirm the purity of a substance by mixing it with a pure sample.",
      "d) To measure the solubility of a substance."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Which of the following is a characteristic of an ideal solvent for crystallization?",
    "options": [
      "a) It should react chemically with the solute.",
      "b) It should dissolve impurities along with the solute.",
      "c) It should not dissolve impurities or impurities should not crystallize from it.",
      "d) It should be expensive and difficult to remove."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Boiling chips are added to a distillation flask to:",
    "options": [
      "a) Increase the boiling point of the liquid.",
      "b) Decrease the boiling point of the liquid.",
      "c) Prevent bumping of the liquid.",
      "d) Aid in condensation."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "The components left behind in the distillation flask after simple distillation are collectively called the:",
    "options": [
      "a) Residue",
      "b) Distillate",
      "c) Filtrate",
      "d) Solvent"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "Which organic liquid is usually used as the mobile phase in paper chromatography?",
    "options": [
      "a) Water",
      "b) An organic liquid (mixture)",
      "c) Dilute acid",
      "d) Dilute alkali"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "If two substances have the same Rf values in paper chromatography, they are likely to be:",
    "options": [
      "a) Different compounds.",
      "b) Identical compounds.",
      "c) Impure substances.",
      "d) Separated components."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "What is the pore size of Whatmann’s filter paper No. 1, used for routine applications?",
    "options": [
      "a) 5 µm",
      "b) 11 µm",
      "c) 20 µm",
      "d) 25 µm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Qualitative analysis in chemistry is concerned with:",
    "options": [
      "a) Determining the relative amounts of elements.",
      "b) Detection or identification of elements present in a compound.",
      "c) Measuring reaction rates.",
      "d) Calculating percentage yield."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "What is the process of removing insoluble impurities in a hot saturated solution during crystallization?",
    "options": [
      "a) Decantation",
      "b) Filtration",
      "c) Evaporation",
      "d) Sublimation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "When separating a mixture of common salt and sand using water, what role does water play?",
    "options": [
      "a) Solute",
      "b) Solvent",
      "c) Residue",
      "d) Filtrate"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which of the following is an example of a \"partition chromatography\" technique?",
    "options": [
      "a) Paper chromatography",
      "b) Thin layer chromatography (TLC)",
      "c) Column chromatography",
      "d) Adsorption chromatography"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 37,
    "questionText": "A mixture of water and ethyl alcohol can be separated by heating the mixture in a distillation flask. This process is called:",
    "options": [
      "a) Simple distillation",
      "b) Fractional distillation",
      "c) Crystallization",
      "d) Filtration"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 38,
    "questionText": "What would happen if crystals start to appear during the filtration of a hot saturated solution?",
    "options": [
      "a) The crystals would be purer.",
      "b) The filter paper or funnel would choke.",
      "c) The rate of filtration would increase.",
      "d) The solvent would become more effective."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "To ensure the complete separation of liquids during fractional distillation, when should the receiving flask be replaced?",
    "options": [
      "a) At the beginning of heating.",
      "b) Only once the distillation is complete.",
      "c) As soon as the temperature starts rising above the boiling point of the first component.",
      "d) When the temperature drops significantly."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "How many steps are generally involved in a complete quantitative determination in analytical chemistry?",
    "options": [
      "a) Two",
      "b) Three",
      "c) Four",
      "d) Five"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Why is sea water distilled to make it drinkable?",
    "options": [
      "a) To remove suspended sand particles.",
      "b) To get rid of soluble inorganic compounds.",
      "c) To adjust its pH.",
      "d) To make it less viscous."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "What happens to the components of a mixture with comparable attraction for the stationary phase during paper chromatography?",
    "options": [
      "a) They will move at very different rates.",
      "b) They may not separate well.",
      "c) They will travel with the solvent front.",
      "d) They will remain at the original spot."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which technique would be most suitable to separate a mixture of NaCl and NaNO3?",
    "options": [
      "a) Filtration",
      "b) Crystallization (based on different solubilities)",
      "c) Simple distillation",
      "d) Paper chromatography"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "The process of drying crystals by spreading them over a watch glass and keeping them in a vacuum desiccator is considered:",
    "options": [
      "a) A safe and reliable method.",
      "b) A rapid but less reliable method.",
      "c) Only suitable for substances that melt or decompose at 100°C.",
      "d) Dependent on the atmospheric pressure."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 45,
    "questionText": "What is the term for the method where substances are distributed throughout both the stationary and mobile phases?",
    "options": [
      "a) Adsorption chromatography",
      "b) Partition chromatography",
      "c) Gel filtration",
      "d) Affinity chromatography"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "What is the purpose of drawing a thin pencil line on the chromatographic paper before spotting the sample mixture?",
    "options": [
      "a) To mark the original spot from which components start to separate.",
      "b) To increase the paper's absorption capacity.",
      "c) To prevent the solvent from spreading too quickly.",
      "d) To act as a locating agent."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 47,
    "questionText": "Why is a hot water funnel sometimes used during filtration in crystallization?",
    "options": [
      "a) To increase the evaporation rate.",
      "b) To avoid premature crystallization of the solute on the filter paper or in the funnel stem.",
      "c) To sterilize the equipment.",
      "d) To ensure complete dissolution of the solute."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "If a solution containing colored impurities is boiled with finely powdered animal charcoal, what happens to the impurities?",
    "options": [
      "a) They are dissolved by the charcoal.",
      "b) They are adsorbed by the charcoal.",
      "c) They precipitate out with the charcoal.",
      "d) They react chemically with the charcoal."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Which of the following compounds has isomers that can be distinguished by different physical properties but the same molecular formula?",
    "options": [
      "a) Methane",
      "b) Ethane",
      "c) Butane",
      "d) Propane"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The technique of chromatography is useful for identifying complicated chemicals such as:",
    "options": [
      "a) Pure elements",
      "b) Simple inorganic salts",
      "c) Dyes, drugs, and pesticides",
      "d) Metals"
    ],
    "correctAnswer": "c"
  }
],
    "Lab Safety and Practical Skills": [
  {
    "id": 1,
    "questionText": "What is the primary expectation for students regarding their conduct in the lab?",
    "options": [
      "a) To work as quickly as possible.",
      "b) To conduct experiments alone.",
      "c) To conduct themselves in a responsible manner at all times.",
      "d) To bring food items for quick breaks."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "What should girls specifically do with their scarves and hair before working in the lab?",
    "options": [
      "a) Leave them loose.",
      "b) Tie them up.",
      "c) Cover them with a lab coat.",
      "d) Wear a cap instead."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "If a student is unaware of how to use a new apparatus, what is the recommended action?",
    "options": [
      "a) Try to figure it out independently.",
      "b) Ask a fellow student for help.",
      "c) Seek help from the lab instructor.",
      "d) Skip the part of the experiment that requires it."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT an appropriate method for disposing of chemical waste?",
    "options": [
      "a) Storing in proper containers.",
      "b) Labeling chemical waste containers.",
      "c) Transferring containers to allocated treatment sites.",
      "d) Pouring chemicals down the drains or into the sewer system."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "Slips and falls on wet floors are examples of which type of hazard in a laboratory?",
    "options": [
      "a) Physical hazards",
      "b) Chemical hazards",
      "c) Biological hazards",
      "d) Electrical hazards"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 6,
    "questionText": "What type of gloves should be worn when handling broken glassware to prevent cuts and abrasions?",
    "options": [
      "a) Latex gloves",
      "b) Nitrile gloves",
      "c) Cut-resistant gloves",
      "d) Cotton gloves"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Microbes, including viruses and bacteria, are examples of which type of hazard?",
    "options": [
      "a) Physical hazards",
      "b) Chemical hazards",
      "c) Biological hazards",
      "d) Electrical hazards"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "What is the immediate first aid for minor cuts in the lab?",
    "options": [
      "a) Apply pressure for 10 minutes.",
      "b) Remove glass if any, apply methylated spirit or tincture iodine.",
      "c) Consult a doctor immediately.",
      "d) Wash with concentrated acid."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "If acid gets into the eye, what is the recommended first aid?",
    "options": [
      "a) Wash thoroughly with water and then with 1% sodium bicarbonate solution.",
      "b) Wash with water followed by 1% boric acid solution.",
      "c) Rub the eye vigorously.",
      "d) Put a drop of olive oil."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 10,
    "questionText": "What is the first aid for burns with dry heat (flame, hot object)?",
    "options": [
      "a) Wash freely with ice cold water.",
      "b) Apply 1% acetic acid solution.",
      "c) Apply burnol or mustard oil.",
      "d) Wash with 2% ammonia solution."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "If someone's clothes catch fire in the lab, what is the primary action to take?",
    "options": [
      "a) Do not run, wrap with a blanket or dry cotton cloth, lie down on the floor.",
      "b) Run to the nearest water source.",
      "c) Stand still and wait for help.",
      "d) Remove the burning clothes immediately."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "To extinguish a fire in a beaker containing an inflammable liquid, what should be done?",
    "options": [
      "a) Throw water on it.",
      "b) Cover the beaker with a duster or damp cloth.",
      "c) Blow on the flames.",
      "d) Use a fire extinguisher directly on the liquid."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "What is \"volumetric analysis\" used for?",
    "options": [
      "a) To identify unknown substances qualitatively.",
      "b) To find the concentrations of solutions.",
      "c) To separate mixtures.",
      "d) To measure melting points."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "The moment at which an indicator changes color in a titration is called the:",
    "options": [
      "a) Equivalence point",
      "b) End point",
      "c) Saturation point",
      "d) Neutralization point"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "What is the color change of phenolphthalein indicator when the pH decreases from basic to acidic?",
    "options": [
      "a) Blue to red",
      "b) Red to blue",
      "c) Pink to colorless",
      "d) Colorless to pink"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "How many drops of phenolphthalein indicator are typically added to 10 cm3 of solution in a titration?",
    "options": [
      "a) 5-10 drops",
      "b) 1-2 drops",
      "c) 3-4 drops",
      "d) As much as possible until color change."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "To get accurate and concordant readings in a titration, how close should repeated readings agree with one another?",
    "options": [
      "a) Within 1.0 cm3",
      "b) Within 0.5 cm3",
      "c) Within 0.1 cm3",
      "d) Within 0.01 cm3"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "What is observed when dilute HCl solution is added to a solid carbonate sample, and the evolved gas is passed through lime water?",
    "options": [
      "a) No reaction.",
      "b) A blue solution forms.",
      "c) Effervescence with a gas that turns lime water milky.",
      "d) A yellow precipitate forms."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "In the identification tests for chloride (Cl1-), bromide (Br1-), and iodide (I1-) radicals, what is added to acidify the solution before adding aqueous AgNO3?",
    "options": [
      "a) Dilute H2SO4",
      "b) Dilute HNO3",
      "c) Dilute NaOH",
      "d) Distilled water"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "A thick white precipitate is formed with AgNO3, which dissolves in aqueous ammonia. This indicates the presence of:",
    "options": [
      "a) Bromide (Br1-)",
      "b) Iodide (I1-)",
      "c) Chloride (Cl1-)",
      "d) Fluoride (F1-)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "A bright yellow precipitate is formed with AgNO3, which is insoluble in aqueous ammonia. This indicates the presence of:",
    "options": [
      "a) Chloride (Cl1-)",
      "b) Bromide (Br1-)",
      "c) Iodide (I1-)",
      "d) Sulfate (SO4 2-)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "What gas is evolved with a characteristic smell that turns moist red litmus paper blue, indicating the presence of a nitrate (NO3 1-) radical after adding NaOH and powdered aluminum metal?",
    "options": [
      "a) Hydrogen (H2)",
      "b) Sulfur dioxide (SO2)",
      "c) Ammonia (NH3)",
      "d) Carbon dioxide (CO2)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "A heavy white precipitate of BaSO4 is formed upon acidifying a sample solution with dilute HNO3 and then adding barium nitrate solution. This indicates the presence of:",
    "options": [
      "a) Carbonate (CO3 2-)",
      "b) Chloride (Cl1-)",
      "c) Nitrate (NO3 1-)",
      "d) Sulfate (SO4 2-)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 24,
    "questionText": "When NaOH solution is added to a solution containing Al3+ radical, what is observed?",
    "options": [
      "a) A green precipitate.",
      "b) A white gelatinous precipitate that dissolves in excess NaOH.",
      "c) A deep blue solution.",
      "d) An orange brown precipitate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "What is observed when aqueous ammonia is added to a solution containing Ca2+ radical?",
    "options": [
      "a) A heavy white precipitate.",
      "b) Only a slight turbidity appears or no precipitate is formed.",
      "c) A deep blue solution.",
      "d) A green precipitate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "A green precipitate appears with NaOH solution, which turns into a green solution when excess NaOH is added. This indicates the presence of:",
    "options": [
      "a) Chromium (Cr3+)",
      "b) Iron (Fe2+)",
      "c) Copper (Cu2+)",
      "d) Aluminum (Al3+)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 27,
    "questionText": "A light-blue precipitate is formed when NaOH solution is added to a sample. This indicates the presence of:",
    "options": [
      "a) Iron (Fe2+)",
      "b) Copper (Cu2+)",
      "c) Zinc (Zn2+)",
      "d) Aluminum (Al3+)"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "When aqueous ammonia is added to a solution containing Cu2+ radical, what is observed?",
    "options": [
      "a) A white precipitate.",
      "b) A light-blue precipitate that is insoluble.",
      "c) A deep blue solution.",
      "d) A green precipitate."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "A green precipitate forms with NaOH solution, which turns into an orange-brown precipitate after some time. This indicates the presence of:",
    "options": [
      "a) Iron (II) (Fe2+)",
      "b) Iron (III) (Fe3+)",
      "c) Chromium (Cr3+)",
      "d) Copper (Cu2+)"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "When NaOH solution is added to a solution containing Zn2+ radical, what is observed?",
    "options": [
      "a) A white precipitate that is insoluble in excess NaOH.",
      "b) A white precipitate that is soluble in excess NaOH.",
      "c) A deep blue solution.",
      "d) An orange brown precipitate."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "What safety equipment should always be worn while working in the lab?",
    "options": [
      "a) Gloves only",
      "b) Lab coat only",
      "c) Lab coat and safety goggles",
      "d) Safety shoes only"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "If a spirit or oil fire occurs in the lab, what should be thrown on it?",
    "options": [
      "a) Water",
      "b) A mixture of sand and sodium bicarbonate",
      "c) A blanket",
      "d) A duster"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "To effectively calculate the molarity of an acid solution in titration, which equation is used?",
    "options": [
      "a) M1V1/n1 = M2V2/n2",
      "b) M1V2/n1 = M2V1/n2",
      "c) M1n1/V1 = M2n2/V2",
      "d) V1n2/M1 = V2n1/M2"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 34,
    "questionText": "What is the role of dilute nitric acid in the test for sulfate ions with barium nitrate solution?",
    "options": [
      "a) To oxidize the sulfate.",
      "b) To reduce the sulfate.",
      "c) To destroy any carbonate ions present as an impurity.",
      "d) To make the solution more alkaline."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The formation of a green precipitate with aqueous ammonia, which is insoluble in excess, indicates which basic radical?",
    "options": [
      "a) Al3+",
      "b) Fe2+",
      "c) Cr3+",
      "d) Zn2+"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Which of the following cations gives a white precipitate with NaOH solution that is soluble in excess NaOH solution?",
    "options": [
      "a) Al3+",
      "b) Ca2+",
      "c) Cr3+",
      "d) Zn2+"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 37,
    "questionText": "A black spot on glassware is identified as manganese dioxide. This is a common hazard in:",
    "options": [
      "a) Physical hazards.",
      "b) Biological hazards.",
      "c) Chemical hazards (from a reagent like KMnO4).",
      "d) Electrical hazards."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "What type of titration uses phenolphthalein as an indicator because the pH at the equivalence point is around 7.0 and its color change matches this range?",
    "options": [
      "a) Weak acid-weak base",
      "b) Weak acid-strong base",
      "c) Strong acid-strong base",
      "d) Strong acid-weak base"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "What type of physical hazard is associated with working on wet floors in a laboratory?",
    "options": [
      "a) Cuts",
      "b) Burns",
      "c) Slips and falls",
      "d) Chemical spills"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "How is a serious cut treated as a first aid measure in the lab?",
    "options": [
      "a) Applying methylated spirit",
      "b) Applying pressure on the cut for about 10 minutes to stop bleeding",
      "c) Washing thoroughly with water",
      "d) Putting a drop of olive oil"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "What is the treatment for alkali burns on the skin?",
    "options": [
      "a) Apply burnol.",
      "b) Wash with saturated sodium bicarbonate solution.",
      "c) Wash freely with water, then 1% acetic acid solution, then water, dry, and apply burnol.",
      "d) Wash with 2% ammonia solution."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "What should be done first if electric parts catch fire in the lab?",
    "options": [
      "a) Switch off the electric supply immediately and throw sand.",
      "b) Throw water on it.",
      "c) Cover it with a damp cloth.",
      "d) Use a fire extinguisher designed for liquid fires."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 43,
    "questionText": "Which solution is typically taken in a burette during an acid-base titration?",
    "options": [
      "a) Either acidic or basic solution (the titrant)",
      "b) Only the acid solution",
      "c) Only the base solution",
      "d) Only the indicator solution"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 44,
    "questionText": "What is the purpose of placing the conical flask on a white paper under the burette during titration?",
    "options": [
      "a) To absorb any spilled liquid.",
      "b) To prevent the flask from slipping.",
      "c) To see the color change of the indicator clearly.",
      "d) To keep the flask at a constant temperature."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The change of color of phenolphthalein indicator from pink to colorless at the endpoint can fade gradually due to:",
    "options": [
      "a) Evaporation of the solution.",
      "b) Interference of atmospheric carbon dioxide dissolving in the solution.",
      "c) Reaction with the glassware.",
      "d) Over-titration."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "When testing for a basic radical, if ammonia gas is evolved with a distinct smell and turns moist red litmus blue after adding NaOH solution and gently heating, which radical is indicated?",
    "options": [
      "a) Ca2+",
      "b) Al3+",
      "c) NH4+",
      "d) Zn2+"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What happens when Fe2+ solution reacts with aqueous ammonia?",
    "options": [
      "a) Orange brown precipitate forms immediately.",
      "b) White gelatinous precipitate forms, which quickly oxidizes to red-brown.",
      "c) Deep blue solution forms.",
      "d) Green precipitate forms and remains green."
    ],
    "correctAnswer": "d"
  },
  {
    "id": 48,
    "questionText": "What is a key instruction for students regarding crowding in the lab?",
    "options": [
      "a) Moderate crowding is acceptable as long as work gets done.",
      "b) Students should work closely to collaborate on experiments.",
      "c) There must not be any crowding, and students should stick to their workplaces at a safe distance.",
      "d) Crowding is only a concern during highly reactive experiments."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "For the reaction: NaOH(aq) + HCl(aq) → NaCl(aq) + H2O(l), if 1 mole of NaOH reacts with 1 mole of HCl, what are n1 and n2 in the molarity equation M1V1/n1 = M2V2/n2?",
    "options": [
      "a) n1=2, n2=1",
      "b) n1=1, n2=1",
      "c) n1=1, n2=2",
      "d) n1=2, n2=2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "Which basic radical forms an orange-brown precipitate with both NaOH solution and aqueous ammonia?",
    "options": [
      "a) Fe2+",
      "b) Fe3+",
      "c) Cr3+",
      "d) Cu2+"
    ],
    "correctAnswer": "b"
  }
]
};
export const shortQuestions = {
    "Stoichiometry": shortQuestionsData.slice(0, 3),
    "Atomic Structure": shortQuestionsData.slice(3, 5),
    "Theories of Covalent Bonding": shortQuestionsData.slice(5, 7),
    "States of Matter": shortQuestionsData.slice(7, 10),
};

export const longQuestions = {
    "Stoichiometry": longQuestionsData.slice(0, 1),
    "Atomic Structure": longQuestionsData.slice(1, 2),
    "Theories of Covalent Bonding": longQuestionsData.slice(2, 3),
    "States of Matter": longQuestionsData.slice(3, 5),
};
