
import { MCQ } from '@/lib/types';
import { shortQuestions as shortQuestionsData } from './chemistry-short-questions';
import { longQuestions as longQuestionsData } from './chemistry-long-questions';

export const chapters = [
  "States of Matter and Phase Changes",
  "Atomic Structure",
  "Chemical Bonding",
  "Stoichiometry",
  "Energetics",
  "Equilibria",
  "Acid Base Chemistry",
  "Periodic Table and Periodicity",
  "Group Properties and Elements",
  "Environmental Chemistry",
  "Hydrocarbons",
  "Empirical Data Collection and Analysis",
  "Laboratory and Practical Skills"
];

export const mcqs: Record<string, MCQ[]> = {
  "States of Matter and Phase Changes": [
  {
    "id": 1,
    "questionText": "Which of the following defines chemistry?",
    "options": ["The study of the earth and its resources.", "The study of the composition, properties, and interactions of matter and energy.", "The study of living organisms and their chemical processes.", "The study of the nucleus of an atom."],
    "correctAnswer": "The study of the composition, properties, and interactions of matter and energy."
  },
  {
    "id": 2,
    "questionText": "Which branch of chemistry deals with the study of carbon compounds (hydrocarbons and their derivatives)?",
    "options": ["Inorganic Chemistry", "Biochemistry", "Organic Chemistry", "Physical Chemistry"],
    "correctAnswer": "Organic Chemistry"
  },
  {
    "id": 3,
    "questionText": "What is the main characteristic of matter?",
    "options": ["It has color and smell.", "It has mass and occupies space.", "It is always visible.", "It can be broken down easily."],
    "correctAnswer": "It has mass and occupies space."
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT considered a state of matter in everyday life?",
    "options": ["Solid", "Liquid", "Gas", "Plasma"],
    "correctAnswer": "Plasma"
  },
  {
    "id": 5,
    "questionText": "What distinguishes different states of matter macroscopically?",
    "options": ["Color, taste, and smell", "Particle size, shape, and conductivity", "Density, compressibility, and fluidity", "Transparency, opacity, and hardness"],
    "correctAnswer": "Density, compressibility, and fluidity"
  },
  {
    "id": 6,
    "questionText": "Which state of matter has a definite shape and a fixed volume?",
    "options": ["Liquid", "Gas", "Solid", "Plasma"],
    "correctAnswer": "Solid"
  },
  {
    "id": 7,
    "questionText": "Gases are highly compressible because:",
    "options": ["Their particles are very widely apart with no order.", "Their intermolecular forces are very strong.", "Their densities are very high.", "Their particles are closely packed."],
    "correctAnswer": "Their particles are very widely apart with no order."
  },
  {
    "id": 8,
    "questionText": "Supercritical fluids show properties of:",
    "options": ["Solids and liquids", "Liquids and gases", "Gases and plasma", "Solids and plasma"],
    "correctAnswer": "Liquids and gases"
  },
  {
    "id": 9,
    "questionText": "Which of the following is an example of an allotropic form of carbon?",
    "options": ["Iron", "Copper", "Diamond", "Water"],
    "correctAnswer": "Diamond"
  },
  {
    "id": 10,
    "questionText": "What is the simplest form of matter?",
    "options": ["Compound", "Mixture", "Element", "Solution"],
    "correctAnswer": "Element"
  },
  {
    "id": 11,
    "questionText": "A substance formed by the chemical combination of two or more elements in a fixed ratio by weight is called a:",
    "options": ["Mixture", "Element", "Compound", "Solution"],
    "correctAnswer": "Compound"
  },
  {
    "id": 12,
    "questionText": "Air is an example of a:",
    "options": ["Pure substance", "Compound", "Homogeneous mixture", "Heterogeneous mixture"],
    "correctAnswer": "Homogeneous mixture"
  },
  {
    "id": 13,
    "questionText": "Which of the following is a characteristic of a compound?",
    "options": ["It can be separated by physical methods.", "Its components retain their individual properties.", "It has a fixed ratio of elements by weight.", "Its properties are a sum of its components' properties."],
    "correctAnswer": "It has a fixed ratio of elements by weight."
  },
  {
    "id": 14,
    "questionText": "What is a key difference between elements and compounds?",
    "options": ["Elements can be broken down into simpler particles, compounds cannot.", "Elements are represented by symbols, compounds by formulae.", "Elements have fixed ratios, compounds do not.", "Elements are mixtures, compounds are pure substances."],
    "correctAnswer": "Elements are represented by symbols, compounds by formulae."
  },
  {
    "id": 15,
    "questionText": "Salt solution in water is an example of a:",
    "options": ["Homogeneous mixture", "Heterogeneous mixture", "Element", "Compound"],
    "correctAnswer": "Homogeneous mixture"
  },
  {
    "id": 16,
    "questionText": "What is a solution?",
    "options": ["A mixture where solute particles settle down over time.", "A mixture in which solute particles are completely homogenized in the solvent.", "A mixture that passes through filter paper leaving no residue but particles are visible to naked eye.", "A mixture that shows the Tyndall effect."],
    "correctAnswer": "A mixture in which solute particles are completely homogenized in the solvent."
  },
  {
    "id": 17,
    "questionText": "Which of these can pass through the pores of filter paper leaving no residue?",
    "options": ["Suspension", "Colloidal solution", "True solution", "Emulsion"],
    "correctAnswer": "True solution"
  },
  {
    "id": 18,
    "questionText": "What happens if a suspension is kept for some time?",
    "options": ["Particles dissolve further.", "Particles settle down.", "Particles become invisible.", "Particles undergo chemical reaction."],
    "correctAnswer": "Particles settle down."
  },
  {
    "id": 19,
    "questionText": "Starch solution is an example of a:",
    "options": ["True solution", "Saturated solution", "Colloidal solution", "Unsaturated solution"],
    "correctAnswer": "Colloidal solution"
  },
  {
    "id": 20,
    "questionText": "A solution that contains the maximum amount of a solute at a particular temperature is called a:",
    "options": ["Unsaturated solution", "Supercritical solution", "Saturated solution", "Dilute solution"],
    "correctAnswer": "Saturated solution"
  },
  {
    "id": 21,
    "questionText": "What generally happens to the solubility of solids in liquids as temperature increases?",
    "options": ["It decreases.", "It increases.", "It remains constant.", "It first decreases, then increases."],
    "correctAnswer": "It increases."
  },
  {
    "id": 22,
    "questionText": "Carbon dioxide gas in water, like in soda bottles, generally shows a solubility that:",
    "options": ["Increases with temperature.", "Decreases with temperature.", "Is unaffected by temperature.", "First increases, then decreases with temperature."],
    "correctAnswer": "Decreases with temperature."
  },
  {
    "id": 23,
    "questionText": "Which state of matter is composed of particles with very high kinetic energy?",
    "options": ["Solid", "Liquid", "Gas", "Plasma"],
    "correctAnswer": "Plasma"
  },
  {
    "id": 24,
    "questionText": "An element can exist in more than one structural form, which is called:",
    "options": ["Isomerism", "Allotropy", "Polymerism", "Isotopy"],
    "correctAnswer": "Allotropy"
  },
  {
    "id": 25,
    "questionText": "Which allotropic form of sulphur is typically yellow and rhombic?",
    "options": ["Monoclinic Sulphur", "Plastic Sulphur", "Rhombic Sulphur", "Amorphous Sulphur"],
    "correctAnswer": "Rhombic Sulphur"
  },
  {
    "id": 26,
    "questionText": "What is a distinctive feature of a homogeneous mixture?",
    "options": ["Components are visible separately.", "Composition is uniform throughout.", "Components react chemically.", "It always consists of two phases."],
    "correctAnswer": "Composition is uniform throughout."
  },
  {
    "id": 27,
    "questionText": "Which of the following is NOT a characteristic of solids?",
    "options": ["Closely packed particles", "Fixed positions of particles", "High compressibility", "Strong intermolecular attractions"],
    "correctAnswer": "High compressibility"
  },
  {
    "id": 28,
    "questionText": "What is a supersaturated solution?",
    "options": ["A solution with less solute than a saturated solution.", "A solution with more solute than a saturated solution at a particular temperature.", "A solution where solute particles are visible to the naked eye.", "A solution that can dissolve more solute."],
    "correctAnswer": "A solution with more solute than a saturated solution at a particular temperature."
  },
  {
    "id": 29,
    "questionText": "Which of the following is a physical change?",
    "options": ["Burning of wood", "Rusting of iron", "Melting of ice", "Digestion of food"],
    "correctAnswer": "Melting of ice"
  },
  {
    "id": 30,
    "questionText": "Which branch of chemistry focuses on the study of materials and the laws/principles that govern changes?",
    "options": ["Analytical Chemistry", "Physical Chemistry", "Environmental Chemistry", "Biochemistry"],
    "correctAnswer": "Physical Chemistry"
  },
  {
    "id": 31,
    "questionText": "The field of analytical chemistry generally involves the use of:",
    "options": ["Telescopes", "Microscopes", "Modern and sophisticated instruments", "Ancient measuring tools"],
    "correctAnswer": "Modern and sophisticated instruments"
  },
  {
    "id": 32,
    "questionText": "Which branch of chemistry studies molecules and ions occurring in space and interstellar space?",
    "options": ["Geochemistry", "Astrochemistry", "Nuclear Chemistry", "Medicinal Chemistry"],
    "correctAnswer": "Astrochemistry"
  },
  {
    "id": 33,
    "questionText": "What is the characteristic of elements existing as monatomic molecules?",
    "options": ["Nitrogen (N₂)", "Oxygen (O₂)", "Chlorine (Cl₂)", "Helium (He)"],
    "correctAnswer": "Helium (He)"
  },
  {
    "id": 34,
    "questionText": "The process of dissolving sodium chloride in water is an example of a:",
    "options": ["Suspension", "Colloid", "True solution", "Emulsion"],
    "correctAnswer": "True solution"
  },
  {
    "id": 35,
    "questionText": "According to the solubility curve (Fig 1.6), which substance shows increasing solubility with increasing temperature?",
    "options": ["HCl", "NH₄Cl", "KNO₃", "KClO₃"],
    "correctAnswer": "KNO₃"
  },
  {
    "id": 36,
    "questionText": "Which state of matter is considered the fourth state of matter, not normally observed in this world?",
    "options": ["Liquid crystal", "Supercritical fluid", "Plasma", "Dark matter"],
    "correctAnswer": "Plasma"
  },
  {
    "id": 37,
    "questionText": "The interaction of hydrogen with oxygen to form water is a:",
    "options": ["Physical change", "Mixture formation", "Chemical reaction", "Phase change"],
    "correctAnswer": "Chemical reaction"
  },
  {
    "id": 38,
    "questionText": "The components of a mixture are:",
    "options": ["Chemically bound together", "Separated by chemical methods only", "Not chemically bound", "Always in a fixed ratio"],
    "correctAnswer": "Not chemically bound"
  },
  {
    "id": 39,
    "questionText": "What is a key characteristic of liquids regarding intermolecular forces?",
    "options": ["Very strong, holding particles in fixed positions.", "Very weak, allowing particles to move randomly and be widely apart.", "Strong enough to keep particles close together but allow them to move past each other.", "Non-existent."],
    "correctAnswer": "Strong enough to keep particles close together but allow them to move past each other."
  },
  {
    "id": 40,
    "questionText": "Why is plasma not generally seen in everyday life?",
    "options": ["It is a very dense substance.", "It requires very high kinetic energy to form.", "It is always a solid.", "It is easily compressible."],
    "correctAnswer": "It requires very high kinetic energy to form."
  },
  {
    "id": 41,
    "questionText": "Which of the following represents a heterogeneous mixture?",
    "options": ["Salt solution", "Air", "Rock", "Pure water"],
    "correctAnswer": "Rock"
  },
  {
    "id": 42,
    "questionText": "What is the role of the Punjab Curriculum and Textbook Board, Lahore, according to the textbook cover?",
    "options": ["Authoring the content.", "Providing review and technical advice.", "Publishing the textbook.", "Basing the textbook on updated curriculum."],
    "correctAnswer": "Basing the textbook on updated curriculum."
  },
  {
    "id": 43,
    "questionText": "Which type of mixture involves particles that are visible to the naked eye and settle down if left undisturbed?",
    "options": ["Solution", "Colloid", "Suspension", "Emulsion"],
    "correctAnswer": "Suspension"
  },
  {
    "id": 44,
    "questionText": "The conversion of a liquid to a gas is an example of a:",
    "options": ["Chemical change", "Physical change", "Nuclear change", "Biological change"],
    "correctAnswer": "Physical change"
  },
  {
    "id": 45,
    "questionText": "What property is used to distinguish between a solution and a colloid when light is passed through them? [14, general knowledge, but implied by particle size discussion]",
    "options": ["Opacity", "Transparency", "Tyndall effect", "Refraction"],
    "correctAnswer": "Tyndall effect"
  },
  {
    "id": 46,
    "questionText": "Which of the following statements about elements is correct?",
    "options": ["They are pure substances containing the same kind of atoms.", "They can be broken down into simpler substances by ordinary chemical reactions.", "They always exist as diatomic molecules.", "They are represented by formulae."],
    "correctAnswer": "They are pure substances containing the same kind of atoms."
  },
  {
    "id": 47,
    "questionText": "When 5g of sugar is added to 100g of water, it dissolves. What kind of solution is formed initially?",
    "options": ["Saturated solution", "Unsaturated solution", "Supersaturated solution", "Colloidal solution"],
    "correctAnswer": "Unsaturated solution"
  },
  {
    "id": 48,
    "questionText": "Which of the following is typically a gas at room temperature?",
    "options": ["Sodium", "Water", "Oxygen", "Iron"],
    "correctAnswer": "Oxygen"
  },
  {
    "id": 49,
    "questionText": "What is the primary characteristic of an element, compound, or mixture that determines if it is a \"substance\"?",
    "options": ["Its color", "Its taste", "Having mass and occupying space", "Its ability to conduct electricity"],
    "correctAnswer": "Having mass and occupying space"
  },
  {
    "id": 50,
    "questionText": "The process of separating components of a mixture by physical methods is characteristic of:",
    "options": ["Elements", "Compounds", "Mixtures", "Solutions"],
    "correctAnswer": "Mixtures"
  }
],
  "Atomic Structure": [
  {
    "id": 1,
    "questionText": "According to the modern view, the electrons in an atom are located in:",
    "options": ["Fixed orbits only", "Specific energy levels (shells) around the nucleus", "The nucleus with protons", "A random cloud far from the nucleus"],
    "correctAnswer": "Specific energy levels (shells) around the nucleus"
  },
  {
    "id": 2,
    "questionText": "What are the positively charged particles present in the nucleus of an atom?",
    "options": ["Electrons", "Neutrons", "Protons", "Ions"],
    "correctAnswer": "Protons"
  },
  {
    "id": 3,
    "questionText": "The mass of an electron is approximately:",
    "options": ["1.673 x 10⁻²⁷ kg", "1.675 x 10⁻²⁷ kg", "-1.602 x 10⁻¹⁹ C", "Significantly smaller than a proton or neutron"],
    "correctAnswer": "Significantly smaller than a proton or neutron"
  },
  {
    "id": 4,
    "questionText": "Who discovered the electron using a discharge tube experiment?",
    "options": ["E. Goldstein", "J.J. Thomson", "Lord Rutherford", "Niels Bohr"],
    "correctAnswer": "J.J. Thomson"
  },
  {
    "id": 5,
    "questionText": "The atomic number (Z) of an element represents:",
    "options": ["The total number of protons and neutrons.", "The number of neutrons only.", "The number of protons in the nucleus.", "The total mass of the atom."],
    "correctAnswer": "The number of protons in the nucleus."
  },
  {
    "id": 6,
    "questionText": "Isotopes are atoms of the same element that have:",
    "options": ["Different atomic numbers but same mass numbers.", "Same number of protons but different number of neutrons.", "Same number of neutrons but different number of protons.", "Different chemical properties."],
    "correctAnswer": "Same number of protons but different number of neutrons."
  },
  {
    "id": 7,
    "questionText": "Which of the following isotopes of hydrogen has no neutron?",
    "options": ["Protium (¹H)", "Deuterium (²H)", "Tritium (³H)", "All have neutrons"],
    "correctAnswer": "Protium (¹H)"
  },
  {
    "id": 8,
    "questionText": "The atomic mass unit (amu) is defined as:",
    "options": ["The mass of one proton.", "1/12th of the mass of a carbon-12 atom.", "The mass of one electron.", "The mass of one neutron."],
    "correctAnswer": "1/12th of the mass of a carbon-12 atom."
  },
  {
    "id": 9,
    "questionText": "What is the maximum number of electrons that can be accommodated in the K (1st) shell?",
    "options": ["1", "2", "8", "18"],
    "correctAnswer": "2"
  },
  {
    "id": 10,
    "questionText": "Who proposed the atomic model where electrons revolve around the nucleus in definite circular paths called orbits or shells?",
    "options": ["J.J. Thomson", "Lord Rutherford", "Niels Bohr", "John Dalton"],
    "correctAnswer": "Niels Bohr"
  },
  {
    "id": 11,
    "questionText": "According to Bohr's atomic model, electrons do not radiate energy when they are:",
    "options": ["Moving from a higher orbit to a lower orbit.", "Revolving in one of their definite orbits.", "Moving away from the nucleus.", "Absorbing energy."],
    "correctAnswer": "Revolving in one of their definite orbits."
  },
  {
    "id": 12,
    "questionText": "Radioactive isotopes are useful in:",
    "options": ["Making nuclear weapons only.", "Medical imaging and treating diseases.", "Generating electricity exclusively.", "Determining the composition of compounds."],
    "correctAnswer": "Medical imaging and treating diseases."
  },
  {
    "id": 13,
    "questionText": "What is the process by which an unstable nucleus emits radiation and transforms into a new element?",
    "options": ["Ionization", "Chemical reaction", "Radioactive decay", "Electron capture"],
    "correctAnswer": "Radioactive decay"
  },
  {
    "id": 14,
    "questionText": "Carbon-14 dating is used for finding the age of:",
    "options": ["Rocks and minerals", "Organic material", "Metallic artifacts", "Water samples"],
    "correctAnswer": "Organic material"
  },
  {
    "id": 15,
    "questionText": "What is the mass number (A) of an atom?",
    "options": ["Number of protons only.", "Number of neutrons only.", "Sum of protons and electrons.", "Sum of protons and neutrons in the nucleus."],
    "correctAnswer": "Sum of protons and neutrons in the nucleus."
  },
  {
    "id": 16,
    "questionText": "How does the number of protons in an atom relate to its position in the periodic table?",
    "options": ["It determines the group number.", "It determines the period number.", "It is unique to each element and used to arrange elements.", "It indicates the radioactivity of the element."],
    "correctAnswer": "It is unique to each element and used to arrange elements."
  },
  {
    "id": 17,
    "questionText": "If an atom has 8 protons and 8 neutrons, what is its mass number?",
    "options": ["8", "16", "0", "Cannot be determined"],
    "correctAnswer": "16"
  },
  {
    "id": 18,
    "questionText": "Which subatomic particle was discovered last among electron, proton, and neutron?",
    "options": ["Electron", "Proton", "Neutron", "All discovered at the same time"],
    "correctAnswer": "Neutron"
  },
  {
    "id": 19,
    "questionText": "The number of electrons in an atom that is electrically neutral is equal to the number of:",
    "options": ["Neutrons", "Protons", "Isotopes", "Shells"],
    "correctAnswer": "Protons"
  },
  {
    "id": 20,
    "questionText": "What is a key difference between the physical properties of isotopes of an element?",
    "options": ["They are identical.", "They are always different.", "They might differ due to different masses.", "They are determined by electron configuration only."],
    "correctAnswer": "They might differ due to different masses."
  },
  {
    "id": 21,
    "questionText": "The process of an atom losing an electron due to radiation from a radioactive source is called:",
    "options": ["Neutralization", "Ionization", "Radiation therapy", "Nuclear fusion"],
    "correctAnswer": "Ionization"
  },
  {
    "id": 22,
    "questionText": "How many sub-shells are there in the N (4th) shell?",
    "options": ["1", "2", "3", "4 (s, p, d, f)"],
    "correctAnswer": "4 (s, p, d, f)"
  },
  {
    "id": 23,
    "questionText": "Calculate the number of neutrons in an atom of Oxygen-16 (¹⁶O), given its atomic number is 8.",
    "options": ["8", "16", "24", "0"],
    "correctAnswer": "8"
  },
  {
    "id": 24,
    "questionText": "Who identified the positively charged particles in an atom (protons) using a discharge tube with a perforated cathode?",
    "options": ["J.J. Thomson", "E. Goldstein", "Lord Rutherford", "John Dalton"],
    "correctAnswer": "E. Goldstein"
  },
  {
    "id": 25,
    "questionText": "The transition electron microscope uses which principle to see atoms?",
    "options": ["Light reflection", "Electron diffraction", "X-ray imaging", "Sound waves"],
    "correctAnswer": "Electron diffraction"
  },
  {
    "id": 26,
    "questionText": "Which of the following elements has isotopes commonly used in medical imaging?",
    "options": ["Carbon", "Uranium", "Thorium", "Technetium-99m"],
    "correctAnswer": "Technetium-99m"
  },
  {
    "id": 27,
    "questionText": "The relative atomic mass calculation for an element requires:",
    "options": ["Only the mass of its most abundant isotope.", "The mass and abundance of all its isotopes.", "The mass of carbon-12.", "The density of the element."],
    "correctAnswer": "The mass and abundance of all its isotopes."
  },
  {
    "id": 28,
    "questionText": "The size of an atom is approximately:",
    "options": ["Very large, visible to the naked eye.", "Very small, requiring advanced microscopes.", "Similar to a human hair.", "The size of a grape."],
    "correctAnswer": "Very small, requiring advanced microscopes."
  },
  {
    "id": 29,
    "questionText": "What is the charge of a neutron?",
    "options": ["+1", "-1", "0", "Varies depending on the isotope"],
    "correctAnswer": "0"
  },
  {
    "id": 30,
    "questionText": "If an atom loses an electron, it becomes a:",
    "options": ["Anion", "Cation", "Isotope", "Neutral atom"],
    "correctAnswer": "Cation"
  },
  {
    "id": 31,
    "questionText": "In 1913, what did Niels Bohr propose about the electron's movement?",
    "options": ["Electrons move randomly around the nucleus.", "Electrons move in definite circular paths called orbits.", "Electrons are embedded in a positive sphere.", "Electrons are always in the nucleus."],
    "correctAnswer": "Electrons move in definite circular paths called orbits."
  },
  {
    "id": 32,
    "questionText": "The maximum number of electrons in any given shell can be determined by the formula:",
    "options": ["n²", "2n", "2n²", "n³"],
    "correctAnswer": "2n²"
  },
  {
    "id": 33,
    "questionText": "Which of the following best describes the difference in properties between isotopes?",
    "options": ["Chemical properties are identical, physical properties may differ.", "Physical properties are identical, chemical properties may differ.", "Both chemical and physical properties are identical.", "Both chemical and physical properties are different."],
    "correctAnswer": "Chemical properties are identical, physical properties may differ."
  },
  {
    "id": 34,
    "questionText": "A radioactive isotope of hydrogen with two neutrons is:",
    "options": ["Protium", "Deuterium", "Tritium", "Hydrogen-1"],
    "correctAnswer": "Tritium"
  },
  {
    "id": 35,
    "questionText": "The relative atomic mass of Krypton (Kr) is calculated from the abundance of its isotopes, as shown in the table (Table 2.2). Which value is closest to the relative atomic mass?",
    "options": ["80", "82", "83.7", "85"],
    "correctAnswer": "83.7"
  },
  {
    "id": 36,
    "questionText": "According to Rutherford's model, the central part of the atom which is positively charged is called the:",
    "options": ["Orbit", "Shell", "Nucleus", "Electron cloud"],
    "correctAnswer": "Nucleus"
  },
  {
    "id": 37,
    "questionText": "The difference in properties of elements is due to the difference in the properties of their:",
    "options": ["Isotopes", "Constituent atoms", "Chemical bonds", "State of matter"],
    "correctAnswer": "Constituent atoms"
  },
  {
    "id": 38,
    "questionText": "Which statement is true about the relative atomic mass scale?",
    "options": ["It is based on hydrogen.", "It is based on oxygen.", "It is based on carbon-12.", "It uses a different scale for each element."],
    "correctAnswer": "It is based on carbon-12."
  },
  {
    "id": 39,
    "questionText": "The most common isotopes of an element usually have:",
    "options": ["High relative abundance.", "Low relative abundance.", "No relative abundance.", "Only one neutron."],
    "correctAnswer": "High relative abundance."
  },
  {
    "id": 40,
    "questionText": "How is the atomic number of an element represented in the periodic table?",
    "options": ["It is written as a superscript.", "It is usually listed below the element symbol.", "It is listed above the element symbol or as a subscript.", "It is not explicitly shown, but implied by position."],
    "correctAnswer": "It is listed above the element symbol or as a subscript."
  },
  {
    "id": 41,
    "questionText": "What is the approximate size of the nucleus compared to the atom?",
    "options": ["About 1/10th of the atom.", "About 1/1000th of the atom.", "Less than one hundred-thousandth (1/100,000) of the atom.", "About half the size of the atom."],
    "correctAnswer": "Less than one hundred-thousandth (1/100,000) of the atom."
  },
  {
    "id": 42,
    "questionText": "What happens when an electron moves from a higher energy shell to a lower energy shell?",
    "options": ["It absorbs energy.", "It emits energy.", "Its mass changes.", "Its charge changes."],
    "correctAnswer": "It emits energy."
  },
  {
    "id": 43,
    "questionText": "Which of the following is true about carbon-14 (¹⁴C)?",
    "options": ["It is a stable isotope.", "It is used in medical imaging.", "It is a radioactive isotope used for radiocarbon dating.", "It is an abundant isotope."],
    "correctAnswer": "It is a radioactive isotope used for radiocarbon dating."
  },
  {
    "id": 44,
    "questionText": "The process of positive and negative ion formation in a discharge tube played a crucial role in the discovery of which subatomic particle?",
    "options": ["Neutron", "Proton", "Electron", "Positron"],
    "correctAnswer": "Proton"
  },
  {
    "id": 45,
    "questionText": "The \"uncertainty principle\" relates to the exact paths and locations of which subatomic particle?",
    "options": ["Protons", "Neutrons", "Electrons", "Quarks"],
    "correctAnswer": "Electrons"
  },
  {
    "id": 46,
    "questionText": "Which element looks very different from gold but is also very different from bromine?",
    "options": ["Sulphur", "Zinc", "Aluminium", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 47,
    "questionText": "The term \"subatomic particle\" refers to:",
    "options": ["Elements in the periodic table.", "Particles smaller than an atom (e.g., protons, neutrons, electrons).", "Entire atoms.", "Molecules composed of atoms."],
    "correctAnswer": "Particles smaller than an atom (e.g., protons, neutrons, electrons)."
  },
  {
    "id": 48,
    "questionText": "What can cause a change in the proton number and alter an atom's identity?",
    "options": ["Chemical reaction", "Phase change", "Radioactive decay", "Ionization"],
    "correctAnswer": "Radioactive decay"
  },
  {
    "id": 49,
    "questionText": "Which statement is correct regarding isotopes and chemical properties?",
    "options": ["Isotopes have identical chemical properties due to the same number of valence electrons.", "Isotopes have different chemical properties due to different masses.", "Isotopes have identical chemical properties due to different number of neutrons.", "Chemical properties are not affected by isotopic differences."],
    "correctAnswer": "Isotopes have identical chemical properties due to the same number of valence electrons."
  },
  {
    "id": 50,
    "questionText": "What is the significance of the 1/12th mass of Carbon-12 in defining relative atomic mass?",
    "options": ["It is an arbitrary choice.", "It provides a standard for comparison.", "It makes all atomic masses whole numbers.", "It simplifies calculation of isotopic abundance."],
    "correctAnswer": "It provides a standard for comparison."
  }
],
  "Chemical Bonding": [
  {
    "id": 1,
    "questionText": "What is the main driving force for atoms to form chemical bonds?",
    "options": ["To increase their energy.", "To achieve a stable electron configuration, like noble gases.", "To become electrically charged.", "To become larger in size."],
    "correctAnswer": "To achieve a stable electron configuration, like noble gases."
  },
  {
    "id": 2,
    "questionText": "The octet rule states that atoms tend to achieve an outer shell with:",
    "options": ["2 electrons", "4 electrons", "8 electrons", "18 electrons"],
    "correctAnswer": "8 electrons"
  },
  {
    "id": 3,
    "questionText": "An ionic bond is formed by:",
    "options": ["Sharing of electrons between two atoms.", "Transfer of electrons from one atom to another.", "Overlapping of electron clouds.", "Mutual attraction between neutral atoms."],
    "correctAnswer": "Transfer of electrons from one atom to another."
  },
  {
    "id": 4,
    "questionText": "Which type of bond is formed between a metal and a non-metal?",
    "options": ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
    "correctAnswer": "Ionic bond"
  },
  {
    "id": 5,
    "questionText": "Sodium chloride (NaCl) is an example of an ionic compound. What happens when sodium and chlorine atoms form NaCl?",
    "options": ["Sodium shares electrons with chlorine.", "Sodium transfers an electron to chlorine.", "Chlorine transfers an electron to sodium.", "Both atoms gain electrons."],
    "correctAnswer": "Sodium transfers an electron to chlorine."
  },
  {
    "id": 6,
    "questionText": "A covalent bond is formed by:",
    "options": ["Electrostatic attraction between oppositely charged ions.", "Mutual sharing of electrons between two atoms.", "Transfer of electrons between atoms.", "Delocalized electrons."],
    "correctAnswer": "Mutual sharing of electrons between two atoms."
  },
  {
    "id": 7,
    "questionText": "How many electrons are shared in a single covalent bond?",
    "options": ["One electron", "Two electrons", "Three electrons", "Four electrons"],
    "correctAnswer": "Two electrons"
  },
  {
    "id": 8,
    "questionText": "Water (H₂O) is an example of a:",
    "options": ["Non-polar covalent compound", "Ionic compound", "Polar covalent compound", "Metallic compound"],
    "correctAnswer": "Polar covalent compound"
  },
  {
    "id": 9,
    "questionText": "Which type of covalent bond is formed when the shared electron pair is donated by only one atom?",
    "options": ["Single covalent bond", "Double covalent bond", "Triple covalent bond", "Coordinate covalent bond"],
    "correctAnswer": "Coordinate covalent bond"
  },
  {
    "id": 10,
    "questionText": "What is the nature of a metallic bond?",
    "options": ["Strong electrostatic attraction between oppositely charged ions.", "Sharing of electrons between specific atoms.", "Positive metal ions surrounded by a \"sea\" of mobile electrons.", "Transfer of electrons from one atom to another."],
    "correctAnswer": "Positive metal ions surrounded by a \"sea\" of mobile electrons."
  },
  {
    "id": 11,
    "questionText": "Metals generally have a tendency to:",
    "options": ["Gain electrons to form negative ions.", "Lose electrons to form positive ions.", "Share electrons with other metals.", "Remain neutral."],
    "correctAnswer": "Lose electrons to form positive ions."
  },
  {
    "id": 12,
    "questionText": "Which of the following properties is characteristic of ionic compounds?",
    "options": ["Low melting and boiling points.", "Soluble in non-polar solvents.", "Good conductors of electricity in molten or aqueous state.", "Exist as discrete neutral molecules."],
    "correctAnswer": "Good conductors of electricity in molten or aqueous state."
  },
  {
    "id": 13,
    "questionText": "Covalent compounds typically have:",
    "options": ["High melting and boiling points.", "Are good conductors of electricity.", "Are gases or low boiling liquids.", "Are generally soluble in water."],
    "correctAnswer": "Are gases or low boiling liquids."
  },
  {
    "id": 14,
    "questionText": "The forces of attraction present between molecules of elements and compounds are called:",
    "options": ["Intramolecular forces", "Intermolecular forces", "Ionic forces", "Covalent forces"],
    "correctAnswer": "Intermolecular forces"
  },
  {
    "id": 15,
    "questionText": "What type of intermolecular force is present in polar molecules like HCl?",
    "options": ["Hydrogen bonding", "Dipole-dipole forces of attraction", "London dispersion forces", "Covalent bond"],
    "correctAnswer": "Dipole-dipole forces of attraction"
  },
  {
    "id": 16,
    "questionText": "Hydrogen bonding is a special case of:",
    "options": ["Ionic bond", "Metallic bond", "Dipole-dipole attractive forces", "Covalent bond"],
    "correctAnswer": "Dipole-dipole attractive forces"
  },
  {
    "id": 17,
    "questionText": "Why do atoms form bonds according to the octet/duplet rule?",
    "options": ["To increase their reactivity.", "To achieve a lower energy state and greater stability.", "To become heavier.", "To change their physical state."],
    "correctAnswer": "To achieve a lower energy state and greater stability."
  },
  {
    "id": 18,
    "questionText": "Which noble gas has a duplet configuration in its outermost shell?",
    "options": ["Neon", "Argon", "Helium", "Krypton"],
    "correctAnswer": "Helium"
  },
  {
    "id": 19,
    "questionText": "When an atom gains an electron, it forms a(n):",
    "options": ["Cation", "Anion", "Isotope", "Radical"],
    "correctAnswer": "Anion"
  },
  {
    "id": 20,
    "questionText": "The formation of calcium chloride (CaCl₂) involves calcium losing two electrons and each chlorine gaining one. This forms:",
    "options": ["Covalent bonds", "Metallic bonds", "Ionic bonds", "Hydrogen bonds"],
    "correctAnswer": "Ionic bonds"
  },
  {
    "id": 21,
    "questionText": "Graphite is a good conductor of electricity because:",
    "options": ["It has strong ionic bonds.", "It has a layer structure with mobile electrons.", "It is a metal.", "Its atoms are tightly packed."],
    "correctAnswer": "It has a layer structure with mobile electrons."
  },
  {
    "id": 22,
    "questionText": "Which compound is formed by the chemical combination of atoms that share their electrons unequally, leading to partial charges?",
    "options": ["Non-polar covalent bond", "Ionic bond", "Polar covalent bond", "Metallic bond"],
    "correctAnswer": "Polar covalent bond"
  },
  {
    "id": 23,
    "questionText": "Hydroxonium ion (H₃O⁺) is formed when:",
    "options": ["A proton loses an electron.", "An empty outer shell of an oxygen atom accepts two electrons from a proton.", "Water donates a proton to an empty shell of H⁺.", "A proton combines with a water molecule using a coordinate covalent bond."],
    "correctAnswer": "A proton combines with a water molecule using a coordinate covalent bond."
  },
  {
    "id": 24,
    "questionText": "Examples of ionic compounds include:",
    "options": ["CH₄, CO₂", "KCl, MgF₂, NaBr", "H₂O, NH₃", "O₂, N₂"],
    "correctAnswer": "KCl, MgF₂, NaBr"
  },
  {
    "id": 25,
    "questionText": "The strength of a metallic bond depends upon:",
    "options": ["The number of mobile electrons and the positive charges on the ions.", "The number of protons only.", "The size of the atoms.", "The electronegativity difference."],
    "correctAnswer": "The number of mobile electrons and the positive charges on the ions."
  },
  {
    "id": 26,
    "questionText": "Which of the following is an example of a double covalent bond?",
    "options": ["H-H", "O=O", "N≡N", "H-Cl"],
    "correctAnswer": "O=O"
  },
  {
    "id": 27,
    "questionText": "Electronegativity is the tendency of an atom to:",
    "options": ["Lose electrons.", "Gain electrons.", "Share electrons equally.", "Form positive ions."],
    "correctAnswer": "Gain electrons."
  },
  {
    "id": 28,
    "questionText": "Hydrogen bonds are typically formed between hydrogen and highly electronegative atoms like:",
    "options": ["Carbon, sulfur, chlorine", "Fluorine, oxygen, nitrogen", "Sodium, potassium, magnesium", "Boron, silicon, phosphorus"],
    "correctAnswer": "Fluorine, oxygen, nitrogen"
  },
  {
    "id": 29,
    "questionText": "The process of hydration of ions, such as Na⁺ and Cl⁻ in water, is due to:",
    "options": ["Ionic bond formation", "Covalent bond formation", "Intermolecular forces of attraction", "Metallic bond formation"],
    "correctAnswer": "Intermolecular forces of attraction"
  },
  {
    "id": 30,
    "questionText": "Why are ionic solids brittle?",
    "options": ["Because they have low melting points.", "Because of the strong electrostatic forces within the crystal lattice.", "Because external force can cause repulsion between like charges in the lattice.", "Because they are soluble in water."],
    "correctAnswer": "Because external force can cause repulsion between like charges in the lattice."
  },
  {
    "id": 31,
    "questionText": "Which of the following forms of carbon is used as a lubricant?",
    "options": ["Diamond", "Graphite", "Coal", "Fullerene"],
    "correctAnswer": "Graphite"
  },
  {
    "id": 32,
    "questionText": "The force of attraction between the nucleus of an atom and the shared electron pair in a covalent bond is responsible for:",
    "options": ["Increasing the energy of the system.", "Lowering the energy of the system and forming a stable molecule.", "Forming an ionic bond.", "Breaking the bond."],
    "correctAnswer": "Lowering the energy of the system and forming a stable molecule."
  },
  {
    "id": 33,
    "questionText": "When two identical atoms share electrons equally, they form a:",
    "options": ["Polar covalent bond", "Ionic bond", "Non-polar covalent bond", "Coordinate covalent bond"],
    "correctAnswer": "Non-polar covalent bond"
  },
  {
    "id": 34,
    "questionText": "Ammonia (NH₃) molecules are capable of forming hydrogen bonds because:",
    "options": ["Nitrogen is highly electronegative and bonded to hydrogen.", "Nitrogen is a metal.", "Hydrogen is a noble gas.", "It has a linear structure."],
    "correctAnswer": "Nitrogen is highly electronegative and bonded to hydrogen."
  },
  {
    "id": 35,
    "questionText": "The term \"electropositive character\" refers to the tendency of a metal to:",
    "options": ["Gain electrons", "Lose electrons", "Attract electrons", "Share electrons"],
    "correctAnswer": "Lose electrons"
  },
  {
    "id": 36,
    "questionText": "In the formation of an ionic compound, the atoms achieve noble gas configuration by:",
    "options": ["Sharing electrons.", "Gaining or losing electrons.", "Forming dipole-dipole interactions.", "Undergoing oxidation."],
    "correctAnswer": "Gaining or losing electrons."
  },
  {
    "id": 37,
    "questionText": "Which statement is generally true about the solubility of ionic compounds?",
    "options": ["They are generally soluble in non-polar solvents.", "They are generally insoluble in water.", "They are generally soluble in polar solvents like water.", "Their solubility is unpredictable."],
    "correctAnswer": "They are generally soluble in polar solvents like water."
  },
  {
    "id": 38,
    "questionText": "The example of NH₃ and BF₃ forming a coordinate covalent bond involves:",
    "options": ["Both atoms donating electrons.", "Nitrogen donating a lone pair to boron.", "Boron donating a lone pair to nitrogen.", "Electrons being transferred completely."],
    "correctAnswer": "Nitrogen donating a lone pair to boron."
  },
  {
    "id": 39,
    "questionText": "The bonding in a substance influences its:",
    "options": ["Melting and boiling points.", "Electrical conductivity.", "Solubility.", "All of the above."],
    "correctAnswer": "All of the above."
  },
  {
    "id": 40,
    "questionText": "What is the fundamental difference between an ionic and a covalent bond regarding electron behavior?",
    "options": ["Both involve electron sharing.", "Ionic involves electron transfer, covalent involves electron sharing.", "Ionic involves electron sharing, covalent involves electron transfer.", "Both involve electron transfer."],
    "correctAnswer": "Ionic involves electron transfer, covalent involves electron sharing."
  },
  {
    "id": 41,
    "questionText": "Why does a sodium atom (group 1) readily form a cation?",
    "options": ["It needs to gain 7 electrons to complete its octet.", "It needs to lose 1 electron to achieve a stable electron configuration.", "It needs to share electrons.", "It has a high electronegativity."],
    "correctAnswer": "It needs to lose 1 electron to achieve a stable electron configuration."
  },
  {
    "id": 42,
    "questionText": "What happens to the energy when a chemical bond is formed?",
    "options": ["Energy is absorbed.", "Energy is released.", "Energy remains constant.", "Energy first increases then decreases."],
    "correctAnswer": "Energy is released."
  },
  {
    "id": 43,
    "questionText": "Which of the following is not an example of an ionic compound?",
    "options": ["KBr", "NaCl", "MgF₂", "H₂O"],
    "correctAnswer": "H₂O"
  },
  {
    "id": 44,
    "questionText": "The boiling point of water is relatively high due to:",
    "options": ["Strong covalent bonds.", "Weak dipole-dipole forces.", "Hydrogen bonding between water molecules.", "Metallic bonding."],
    "correctAnswer": "Hydrogen bonding between water molecules."
  },
  {
    "id": 45,
    "questionText": "Carbon atoms typically form which type of bond?",
    "options": ["Ionic bonds", "Metallic bonds", "Covalent bonds", "Hydrogen bonds"],
    "correctAnswer": "Covalent bonds"
  },
  {
    "id": 46,
    "questionText": "What type of substance is formed when two atoms with a very large electronegativity difference react?",
    "options": ["Covalent compound", "Metallic substance", "Ionic compound", "Polymer"],
    "correctAnswer": "Ionic compound"
  },
  {
    "id": 47,
    "questionText": "The arrangement of ions in an ionic compound forms a:",
    "options": ["Molecule", "Crystal lattice", "Gas", "Liquid"],
    "correctAnswer": "Crystal lattice"
  },
  {
    "id": 48,
    "questionText": "Which of the following is true about covalent compounds dissolved in water?",
    "options": ["They ionize completely.", "They often form strong acids.", "They may or may not ionize, depending on their polarity.", "They conduct electricity well."],
    "correctAnswer": "They may or may not ionize, depending on their polarity."
  },
  {
    "id": 49,
    "questionText": "What is the significance of the \"sea of mobile electrons\" in metallic bonding?",
    "options": ["It makes metals brittle.", "It allows metals to react with non-metals.", "It accounts for properties like good electrical and thermal conductivity.", "It makes metals non-lustrous."],
    "correctAnswer": "It accounts for properties like good electrical and thermal conductivity."
  },
  {
    "id": 50,
    "questionText": "The difference in chemical properties between Na and Cl in NaCl is that:",
    "options": ["Both retain their metallic properties.", "Both retain their non-metallic properties.", "They lose their original properties to form a new compound.", "Sodium becomes a gas, and chlorine becomes a solid."],
    "correctAnswer": "They lose their original properties to form a new compound."
  }
],
  "Stoichiometry": [
  {
    "id": 1,
    "questionText": "What is stoichiometry?",
    "options": ["The study of the atomic structure of compounds.", "The quantitative relationship between reactants and products in a chemical reaction.", "The study of energy changes in chemical reactions.", "The study of the rates of chemical reactions."],
    "correctAnswer": "The quantitative relationship between reactants and products in a chemical reaction."
  },
  {
    "id": 2,
    "questionText": "A balanced chemical equation is based on which fundamental law?",
    "options": ["Law of definite proportions", "Law of multiple proportions", "Law of conservation of mass", "Law of energy conservation"],
    "correctAnswer": "Law of conservation of mass"
  },
  {
    "id": 3,
    "questionText": "What is the empirical formula of a compound?",
    "options": ["The actual number of atoms of each element in a molecule.", "The simplest whole number ratio of atoms in a compound.", "The ratio of the masses of elements in a compound.", "The structural arrangement of atoms in a molecule."],
    "correctAnswer": "The simplest whole number ratio of atoms in a compound."
  },
  {
    "id": 4,
    "questionText": "Which of the following is the molecular formula of benzene?",
    "options": ["CH", "C₂H₂", "C₆H₆", "C₃H₃"],
    "correctAnswer": "C₆H₆"
  },
  {
    "id": 5,
    "questionText": "Avogadro's number (NA) represents:",
    "options": ["The number of grams in one mole of a substance.", "The number of particles (atoms, molecules, ions) in one mole of a substance.", "The mass of one atom.", "The volume of one mole of gas at STP."],
    "correctAnswer": "The number of particles (atoms, molecules, ions) in one mole of a substance."
  },
  {
    "id": 6,
    "questionText": "One mole of any substance contains how many particles?",
    "options": ["12", "6.022 x 10²³", "6.022 x 10²²", "1.0"],
    "correctAnswer": "6.022 x 10²³"
  },
  {
    "id": 7,
    "questionText": "What is molar mass?",
    "options": ["The mass of a single atom of an element.", "The mass of one molecule of a compound.", "The mass in grams of one mole of a substance.", "The mass of a proton."],
    "correctAnswer": "The mass in grams of one mole of a substance."
  },
  {
    "id": 8,
    "questionText": "In the chemical equation 2C + O₂ → 2CO, the '2CO' represents:",
    "options": ["Reactants", "Products", "Catalyst", "Inhibitor"],
    "correctAnswer": "Products"
  },
  {
    "id": 9,
    "questionText": "If 2 moles of hydrogen (H₂) react with 1 mole of oxygen (O₂) to produce 2 moles of water (H₂O), what is the mole ratio of hydrogen to oxygen?",
    "options": ["1:1", "1:2", "2:1", "2:2"],
    "correctAnswer": "2:1"
  },
  {
    "id": 10,
    "questionText": "Which statement about a chemical equation is correct?",
    "options": ["It only shows the reactants.", "It must be balanced for the law of conservation of mass.", "It always shows the physical states of all substances.", "It represents an irreversible reaction."],
    "correctAnswer": "It must be balanced for the law of conservation of mass."
  },
  {
    "id": 11,
    "questionText": "What is the empirical formula of H₂O₂ (hydrogen peroxide)?",
    "options": ["H₂O₂", "HO", "H₂O", "O₂"],
    "correctAnswer": "HO"
  },
  {
    "id": 12,
    "questionText": "The number of atoms in 12g of carbon is equal to:",
    "options": ["1 mole", "Avogadro's number", "6.022 x 10²³ atoms", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 13,
    "questionText": "To calculate the molecular formula from the empirical formula, what additional information is required?",
    "options": ["Melting point of the compound.", "Molar mass of the compound.", "Density of the compound.", "Color of the compound."],
    "correctAnswer": "Molar mass of the compound."
  },
  {
    "id": 14,
    "questionText": "How many grams of water (H₂O) are in 1 mole of water (approximate molar mass = 18 g/mol)?",
    "options": ["1 gram", "18 grams", "6.022 x 10²³ grams", "2 grams"],
    "correctAnswer": "18 grams"
  },
  {
    "id": 15,
    "questionText": "What does the subscript 's' in CaCO₃(s) represent in a chemical equation?",
    "options": ["Liquid state", "Gaseous state", "Aqueous state", "Solid state"],
    "correctAnswer": "Solid state"
  },
  {
    "id": 16,
    "questionText": "Which of the following is NOT a step in deducing the molecular formula from the structural formula?",
    "options": ["Count the number of atoms of each type.", "Write down the number of atoms of each type.", "Count the number of molecules.", "Remove the subscript 1."],
    "correctAnswer": "Count the number of molecules."
  },
  {
    "id": 17,
    "questionText": "If the empirical formula of a compound is CH and its molar mass is 78 g/mol, what is its molecular formula?",
    "options": ["CH", "C₂H₂", "C₆H₆", "C₇H₇"],
    "correctAnswer": "C₆H₆"
  },
  {
    "id": 18,
    "questionText": "What is the purpose of balancing a chemical equation?",
    "options": ["To ensure the aesthetics of the equation.", "To satisfy the law of conservation of mass.", "To determine the limiting reactant.", "To predict the products of the reaction."],
    "correctAnswer": "To satisfy the law of conservation of mass."
  },
  {
    "id": 19,
    "questionText": "Which of the following is an example of a binary ionic compound?",
    "options": ["H₂O", "Li₂O", "CH₄", "CO₂"],
    "correctAnswer": "Li₂O"
  },
  {
    "id": 20,
    "questionText": "To convert between moles and mass of a substance, one needs:",
    "options": ["Avogadro's number", "Molar mass", "Density", "Volume"],
    "correctAnswer": "Molar mass"
  },
  {
    "id": 21,
    "questionText": "What happens to the total mass of reactants and products in a chemical reaction according to the law of conservation of mass?",
    "options": ["The total mass of products is less than reactants.", "The total mass of products is greater than reactants.", "The total mass of reactants equals the total mass of products.", "Mass is created or destroyed."],
    "correctAnswer": "The total mass of reactants equals the total mass of products."
  },
  {
    "id": 22,
    "questionText": "What is the molecular formula of Sulphuric acid, if its structural formula is given as H-O-S-O-H with two double bonds to oxygen on S?",
    "options": ["H₂SO₃", "H₂SO₄", "SO₂", "H₂S"],
    "correctAnswer": "H₂SO₄"
  },
  {
    "id": 23,
    "questionText": "When calculating the percentage composition of elements in a compound, you need:",
    "options": ["The atomic number of each element.", "The molar mass of the compound.", "The number of electrons.", "The density of the compound."],
    "correctAnswer": "The molar mass of the compound."
  },
  {
    "id": 24,
    "questionText": "If 4 moles of aluminium react with 3 moles of oxygen to produce 2 moles of aluminium oxide (2Al₂O₃), what is the mole ratio of aluminium to oxygen?",
    "options": ["4:3", "3:4", "2:3", "1:1"],
    "correctAnswer": "4:3"
  },
  {
    "id": 25,
    "questionText": "What do the terms \"reactants\" and \"products\" refer to in a chemical reaction?",
    "options": ["Reactants are formed, products are consumed.", "Reactants are substances before reaction, products are substances formed.", "Both are the same thing.", "Reactants are always solids, products are always gases."],
    "correctAnswer": "Reactants are substances before reaction, products are substances formed."
  },
  {
    "id": 26,
    "questionText": "Given the reaction: CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). If 1 mole of CaCO₃ reacts, how many moles of CO₂ are produced?",
    "options": ["1 mole", "2 moles", "3 moles", "0.5 moles"],
    "correctAnswer": "1 mole"
  },
  {
    "id": 27,
    "questionText": "If an element exists in different forms in the world, these are called:",
    "options": ["Molecules", "Atoms", "Elements", "Isotopes"],
    "correctAnswer": "Isotopes"
  },
  {
    "id": 28,
    "questionText": "What is the symbol for a cation of Lithium (Li)?",
    "options": ["Li²⁺", "Li⁻", "Li⁺", "Li₂"],
    "correctAnswer": "Li⁺"
  },
  {
    "id": 29,
    "questionText": "The concept of Avogadro's number is essential for calculating:",
    "options": ["The color of a substance.", "The number of particles in a given amount of substance.", "The reaction rate.", "The melting point."],
    "correctAnswer": "The number of particles in a given amount of substance."
  },
  {
    "id": 30,
    "questionText": "In the chemical formula C₂H₄O₂, what does the '2' in O₂ represent?",
    "options": ["The charge of oxygen.", "The number of oxygen molecules.", "The number of oxygen atoms in one molecule.", "The state of oxygen."],
    "correctAnswer": "The number of oxygen atoms in one molecule."
  },
  {
    "id": 31,
    "questionText": "How would you distinguish between an element and a compound based on their formula?",
    "options": ["Elements have symbols, compounds have formulae.", "Elements always have single atoms, compounds have multiple atoms.", "Elements are represented by a single symbol, compounds by multiple symbols.", "Compounds have multiple elements, elements are pure forms."],
    "correctAnswer": "Elements are represented by a single symbol, compounds by multiple symbols."
  },
  {
    "id": 32,
    "questionText": "The process of writing down the formula of an ionic compound involves balancing the charges of:",
    "options": ["Atoms and molecules.", "Cations and anions.", "Protons and neutrons.", "Reactants and products."],
    "correctAnswer": "Cations and anions."
  },
  {
    "id": 33,
    "questionText": "Which of the following is true about empirical and molecular formulas?",
    "options": ["The empirical formula is always the same as the molecular formula.", "The molecular formula is always a multiple of the empirical formula.", "The empirical formula is always twice the molecular formula.", "They are interchangeable."],
    "correctAnswer": "The molecular formula is always a multiple of the empirical formula."
  },
  {
    "id": 34,
    "questionText": "A compound consists of 24g of carbon and 32g of oxygen. What is the simplest whole number ratio of atoms of carbon to oxygen? (Atomic mass C=12, O=16)",
    "options": ["1:1", "1:2", "2:1", "3:2"],
    "correctAnswer": "1:1"
  },
  {
    "id": 35,
    "questionText": "The relative mass of reactants and products in a chemical reaction can be quantitatively expressed using:",
    "options": ["Color changes", "Temperature changes", "Molar masses", "Particle sizes"],
    "correctAnswer": "Molar masses"
  },
  {
    "id": 36,
    "questionText": "If 25g of limestone (CaCO₃) produces 27.75g of calcium chloride (CaCl₂), how many grams of calcium chloride would be produced from 100g of limestone?",
    "options": ["27.75g", "55.5g", "111g", "100g"],
    "correctAnswer": "111g"
  },
  {
    "id": 37,
    "questionText": "A chemical reaction is defined as:",
    "options": ["A change in physical state.", "A process where substances rearrange to form new substances.", "A process of separating mixtures.", "A change in the atomic number."],
    "correctAnswer": "A process where substances rearrange to form new substances."
  },
  {
    "id": 38,
    "questionText": "The number 6.022 x 10²³ is also referred to as:",
    "options": ["Thomas Young's number", "Newton's constant", "Avogadro's number", "Bohr's constant"],
    "correctAnswer": "Avogadro's number"
  },
  {
    "id": 39,
    "questionText": "For a compound, if n=1, then its molecular formula is:",
    "options": ["Always CH.", "The same as its empirical formula.", "Always C₆H₆.", "Double its empirical formula."],
    "correctAnswer": "The same as its empirical formula."
  },
  {
    "id": 40,
    "questionText": "How many oxygen atoms are in the compound Fe₂(SO₄)₃?",
    "options": ["3", "4", "7", "12"],
    "correctAnswer": "12"
  },
  {
    "id": 41,
    "questionText": "Which of the following shows the correct symbol for an anion?",
    "options": ["Mg²⁺", "Zn²⁺", "N³⁻", "Cu⁺"],
    "correctAnswer": "N³⁻"
  },
  {
    "id": 42,
    "questionText": "What is a \"chemical formula\"?",
    "options": ["A diagram showing the physical structure of a compound.", "A representation that shows the types and numbers of atoms in a compound.", "A list of elements in a compound.", "The name of a chemical."],
    "correctAnswer": "A representation that shows the types and numbers of atoms in a compound."
  },
  {
    "id": 43,
    "questionText": "Which type of chemical formula is determined by experimental data?",
    "options": ["Molecular formula", "Structural formula", "Empirical formula", "Condensed formula"],
    "correctAnswer": "Empirical formula"
  },
  {
    "id": 44,
    "questionText": "If 0.3 moles of aluminium react with oxygen, how many moles of oxygen are needed based on the balanced equation 4Al + 3O₂ → 2Al₂O₃?",
    "options": ["0.3 moles", "0.225 moles", "0.4 moles", "0.6 moles"],
    "correctAnswer": "0.225 moles"
  },
  {
    "id": 45,
    "questionText": "The conversion factor between grams of a substance and moles of that substance is:",
    "options": ["Avogadro's number", "Molar mass", "Density", "Volume"],
    "correctAnswer": "Molar mass"
  },
  {
    "id": 46,
    "questionText": "What type of information is NOT typically represented in a chemical equation?",
    "options": ["Reactants and products", "Stoichiometric coefficients", "The exact reaction mechanism", "Physical states of substances"],
    "correctAnswer": "The exact reaction mechanism"
  },
  {
    "id": 47,
    "questionText": "When two elements combine to form more than one compound, their mass ratios can be simplified to small whole numbers. This illustrates:",
    "options": ["Law of conservation of mass", "Law of definite proportions", "Law of multiple proportions", "Avogadro's law"],
    "correctAnswer": "Law of multiple proportions"
  },
  {
    "id": 48,
    "questionText": "If the structural formula of acetic acid is CH₃-C(O)OH, what is its molecular formula?",
    "options": ["CHO", "C₂H₄O₂", "CH₃COOH", "C₂H₃O"],
    "correctAnswer": "C₂H₄O₂"
  },
  {
    "id": 49,
    "questionText": "What is the fundamental unit of a compound as defined by its chemical formula?",
    "options": ["Atom", "Element", "Molecule", "Ion"],
    "correctAnswer": "Molecule"
  },
  {
    "id": 50,
    "questionText": "Which number represents Avogadro's number in the textbook example?",
    "options": ["6.022 x 10²²", "6.022 x 10²³", "6.022 x 10¹⁹", "6.022 x 10¹⁸"],
    "correctAnswer": "6.022 x 10²³"
  }
],
  "Energetics": [
  {
    "id": 1,
    "questionText": "What is chemical energy?",
    "options": ["Energy stored in the nucleus of an atom.", "Energy associated with the movement of molecules.", "Energy stored in the bonds that hold atoms together in a molecule.", "Energy transferred as heat."],
    "correctAnswer": "Energy stored in the bonds that hold atoms together in a molecule."
  },
  {
    "id": 2,
    "questionText": "When a bond is formed, energy is:",
    "options": ["Absorbed", "Released", "Neither absorbed nor released", "Converted to mass"],
    "correctAnswer": "Released"
  },
  {
    "id": 3,
    "questionText": "In an endothermic reaction, the surroundings usually get:",
    "options": ["Warmer", "Cooler", "Stay the same temperature", "Generate light"],
    "correctAnswer": "Cooler"
  },
  {
    "id": 4,
    "questionText": "Which of the following describes an exothermic reaction?",
    "options": ["Heat is absorbed from the surroundings.", "Heat is released to the surroundings.", "The enthalpy change (ΔH) is positive.", "The system gains energy."],
    "correctAnswer": "Heat is released to the surroundings."
  },
  {
    "id": 5,
    "questionText": "The total amount of heat energy present in a molecule under standard conditions is called:",
    "options": ["Activation energy", "Kinetic energy", "Enthalpy (H)", "Bond energy"],
    "correctAnswer": "Enthalpy (H)"
  },
  {
    "id": 6,
    "questionText": "The unit of measurement for enthalpy (H) is typically:",
    "options": ["Joules (J)", "Kilojoules per mole (kJ mol⁻¹)", "Calories (cal)", "Degrees Celsius (°C)"],
    "correctAnswer": "Kilojoules per mole (kJ mol⁻¹)"
  },
  {
    "id": 7,
    "questionText": "What happens to bonds during an endothermic process?",
    "options": ["Bonds are formed.", "Bonds are broken.", "Bonds remain unchanged.", "New bonds are created without energy change."],
    "correctAnswer": "Bonds are broken."
  },
  {
    "id": 8,
    "questionText": "Which of these is an example of an exothermic process?",
    "options": ["Melting of ice", "Photosynthesis", "Combustion of carbon dioxide", "Burning of wood (represented by C(s) + O₂(g) → CO₂(g) + 393.5 kJ)"],
    "correctAnswer": "Burning of wood (represented by C(s) + O₂(g) → CO₂(g) + 393.5 kJ)"
  },
  {
    "id": 9,
    "questionText": "The minimum energy required for colliding particles to have a successful collision and initiate a reaction is called:",
    "options": ["Enthalpy change", "Kinetic energy", "Activation energy", "Bond energy"],
    "correctAnswer": "Activation energy"
  },
  {
    "id": 10,
    "questionText": "What effect does a catalyst have on a chemical reaction?",
    "options": ["It changes the overall enthalpy change (ΔH).", "It increases the activation energy.", "It provides an alternative reaction pathway with lower activation energy.", "It is consumed in the reaction."],
    "correctAnswer": "It provides an alternative reaction pathway with lower activation energy."
  },
  {
    "id": 11,
    "questionText": "Aerobic respiration is a continuous process that involves the breakdown of:",
    "options": ["Water and carbon dioxide.", "Glucose in the presence of oxygen.", "Nitrogen and hydrogen.", "Metals and acids."],
    "correctAnswer": "Glucose in the presence of oxygen."
  },
  {
    "id": 12,
    "questionText": "In the energy profile diagram for an exothermic reaction, the products have:",
    "options": ["Higher energy than the reactants.", "Lower energy than the reactants.", "The same energy as the reactants.", "Energy equal to the activation energy."],
    "correctAnswer": "Lower energy than the reactants."
  },
  {
    "id": 13,
    "questionText": "What is the sign of ΔH for an endothermic reaction?",
    "options": ["Negative (-)", "Positive (+)", "Zero", "Depends on the specific reaction"],
    "correctAnswer": "Positive (+)"
  },
  {
    "id": 14,
    "questionText": "Foods like fats and carbohydrates are important biological fuels that convert into chemical energy. This energy is transferred to heat to keep us warm. This is an example of:",
    "options": ["An endothermic process", "An exothermic process", "An equilibrium reaction", "A non-energetic process"],
    "correctAnswer": "An exothermic process"
  },
  {
    "id": 15,
    "questionText": "What is the main difference between chemical energy and heat energy?",
    "options": ["Chemical energy is kinetic, heat energy is potential.", "Chemical energy is stored in molecules, heat energy is transferred due to temperature difference.", "Chemical energy is always released, heat energy is always absorbed.", "There is no difference."],
    "correctAnswer": "Chemical energy is stored in molecules, heat energy is transferred due to temperature difference."
  },
  {
    "id": 16,
    "questionText": "What term describes everything outside of the chemical system that interacts with it?",
    "options": ["Boundary", "Reaction vessel", "Universe", "Surroundings"],
    "correctAnswer": "Surroundings"
  },
  {
    "id": 17,
    "questionText": "Which statement about bond breaking is correct?",
    "options": ["It is always an exothermic process.", "It requires energy input (endothermic).", "It releases energy.", "It only occurs in ionic compounds."],
    "correctAnswer": "It requires energy input (endothermic)."
  },
  {
    "id": 18,
    "questionText": "The formation of nitric oxide (2NO) from nitrogen and oxygen (N₂ + O₂ → 2NO) is:",
    "options": ["An exothermic reaction (ΔH = +180.6 kJ)", "An endothermic reaction (ΔH = +180.6 kJ)", "A combustion reaction", "A neutralization reaction"],
    "correctAnswer": "An endothermic reaction (ΔH = +180.6 kJ)"
  },
  {
    "id": 19,
    "questionText": "A \"transition state\" represents:",
    "options": ["The initial state of reactants.", "The final state of products.", "An intermediate state of maximum energy during a reaction.", "A stable intermediate compound."],
    "correctAnswer": "An intermediate state of maximum energy during a reaction."
  },
  {
    "id": 20,
    "questionText": "Catalysts increase the rate of reaction by:",
    "options": ["Increasing the temperature.", "Decreasing the activation energy.", "Increasing the concentration of reactants.", "Shifting the equilibrium position."],
    "correctAnswer": "Decreasing the activation energy."
  },
  {
    "id": 21,
    "questionText": "What is the overall reaction in aerobic respiration?",
    "options": ["Water and carbon dioxide.", "Glucose + Oxygen → Carbon Dioxide + Water + Energy", "Glucose → Pyruvate + Energy", "Oxygen + Water → Hydrogen Peroxide"],
    "correctAnswer": "Glucose + Oxygen → Carbon Dioxide + Water + Energy"
  },
  {
    "id": 22,
    "questionText": "In an energy profile diagram, the peak represents:",
    "options": ["Reactants", "Products", "Transition state", "Activation energy"],
    "correctAnswer": "Transition state"
  },
  {
    "id": 23,
    "questionText": "Which of the following is an example of energy being transferred from a system to its surroundings as heat, causing the surroundings to warm up?",
    "options": ["Melting ice", "An exothermic reaction", "Boiling water", "Photosynthesis"],
    "correctAnswer": "An exothermic reaction"
  },
  {
    "id": 24,
    "questionText": "The total energy evolved in the formation of 4 O-H bonds is 1936 kJ. This means 4 O-H bonds:",
    "options": ["Are broken, absorbing 1936 kJ.", "Are formed, releasing 1936 kJ.", "Are formed, absorbing 1936 kJ.", "Are broken, releasing 1936 kJ."],
    "correctAnswer": "Are formed, releasing 1936 kJ."
  },
  {
    "id": 25,
    "questionText": "The energy difference between reactants and products is called the:",
    "options": ["Activation energy", "Transition energy", "Enthalpy change (ΔH)", "Bond dissociation energy"],
    "correctAnswer": "Enthalpy change (ΔH)"
  },
  {
    "id": 26,
    "questionText": "Which of the following processes stores energy in the body?",
    "options": ["Glycolysis", "Digestion of food", "Formation of lipids and carbohydrates", "Aerobic respiration"],
    "correctAnswer": "Formation of lipids and carbohydrates"
  },
  {
    "id": 27,
    "questionText": "If ΔH is positive for a reaction, it is:",
    "options": ["Exothermic", "Endothermic", "Equilibrium", "Reversible"],
    "correctAnswer": "Endothermic"
  },
  {
    "id": 28,
    "questionText": "The conversion of hydrogen gas and oxygen gas to liquid water (2H₂ + O₂ → 2H₂O + 571.6 kJ) is an example of an:",
    "options": ["Endothermic reaction", "Exothermic reaction", "Photosynthesis reaction", "Decomposition reaction"],
    "correctAnswer": "Exothermic reaction"
  },
  {
    "id": 29,
    "questionText": "What is the role of Thomas Young in the field of physics related to energy?",
    "options": ["He discovered the law of conservation of energy.", "He first used the word 'energy'.", "He developed the concept of enthalpy.", "He discovered activation energy."],
    "correctAnswer": "He first used the word 'energy'."
  },
  {
    "id": 30,
    "questionText": "In the equation for the formation of hydrogen iodide (2HI), the enthalpy change is ΔH = +53.08 kJ. This indicates:",
    "options": ["The reaction is exothermic.", "The reaction is endothermic.", "Energy is released.", "It is a combustion reaction."],
    "correctAnswer": "The reaction is endothermic."
  },
  {
    "id": 31,
    "questionText": "Which of the following is NOT a type of energy relevant to chemical energetics?",
    "options": ["Chemical Energy", "Heat Energy", "Electrical Energy", "Nuclear Energy"],
    "correctAnswer": "Nuclear Energy"
  },
  {
    "id": 32,
    "questionText": "The activation energy for a reaction represents:",
    "options": ["The total energy of the products.", "The energy difference between reactants and products.", "The energy barrier that must be overcome for a reaction to occur.", "The heat released during a reaction."],
    "correctAnswer": "The energy barrier that must be overcome for a reaction to occur."
  },
  {
    "id": 33,
    "questionText": "When energy is absorbed during a reaction, the total enthalpy of the system:",
    "options": ["Increases", "Decreases", "Remains constant", "Fluctuates"],
    "correctAnswer": "Increases"
  },
  {
    "id": 34,
    "questionText": "A reaction takes place when reactant molecules:",
    "options": ["Are heated to a high temperature.", "Possess average kinetic energy only.", "Collide with each other with sufficient energy and correct orientation.", "Are exposed to a catalyst."],
    "correctAnswer": "Collide with each other with sufficient energy and correct orientation."
  },
  {
    "id": 35,
    "questionText": "Glycolysis is a process where one molecule of glucose is split into:",
    "options": ["Carbon dioxide and water.", "Two molecules of pyruvate.", "Lactic acid.", "ATP and energy."],
    "correctAnswer": "Two molecules of pyruvate."
  },
  {
    "id": 36,
    "questionText": "Which statement is true regarding the stability of bonds and energy?",
    "options": ["Weaker bonds are more stable.", "Stronger bonds are more stable.", "Bond stability is unrelated to energy.", "All bonds have the same stability."],
    "correctAnswer": "Stronger bonds are more stable."
  },
  {
    "id": 37,
    "questionText": "The overall energy change in a reaction is determined by:",
    "options": ["Only the energy of bond breaking.", "Only the energy of bond formation.", "The difference between energy absorbed for bond breaking and energy released for bond formation.", "The kinetic energy of molecules."],
    "correctAnswer": "The difference between energy absorbed for bond breaking and energy released for bond formation."
  },
  {
    "id": 38,
    "questionText": "Washing clothes at 60°C uses almost twice the energy as at 30°C. 90% of the energy used by the traditional electric bulb is wasted in producing heat. This information is classified as:",
    "options": ["A scientific law.", "An example of energy efficiency.", "Interesting Information.", "An exercise question."],
    "correctAnswer": "Interesting Information."
  },
  {
    "id": 39,
    "questionText": "The process of burning fuels like coal and oil releases heat energy. This is an example of:",
    "options": ["Endothermic process", "Exothermic process", "Equilibrium process", "Isothermal process"],
    "correctAnswer": "Exothermic process"
  },
  {
    "id": 40,
    "questionText": "If the enthalpy change (ΔH) for a reaction is -566.0 kJ, the reaction is:",
    "options": ["Endothermic", "Exothermic", "At equilibrium", "Non-spontaneous"],
    "correctAnswer": "Exothermic"
  },
  {
    "id": 41,
    "questionText": "Chemical energetics is primarily concerned with:",
    "options": ["The structure of atoms.", "The flow of energy in chemical reactions.", "The composition of matter.", "The speed of reactions."],
    "correctAnswer": "The flow of energy in chemical reactions."
  },
  {
    "id": 42,
    "questionText": "How does an endothermic reaction affect the temperature of the system?",
    "options": ["It increases.", "It decreases.", "It remains constant.", "It fluctuates."],
    "correctAnswer": "It decreases."
  },
  {
    "id": 43,
    "questionText": "Which type of energy is transformed from chemical energy in our bodies for various life processes?",
    "options": ["Electrical energy", "Heat energy", "Mechanical energy", "Light energy"],
    "correctAnswer": "Heat energy"
  },
  {
    "id": 44,
    "questionText": "Which process involves the absorption of energy to break existing bonds?",
    "options": ["Exothermic reaction", "Endothermic reaction", "Neutralization", "Combustion"],
    "correctAnswer": "Endothermic reaction"
  },
  {
    "id": 45,
    "questionText": "The conversion of H₂ and Cl₂ into HCl with positive enthalpy change is an endothermic reaction. This implies that:",
    "options": ["Heat is released to the surroundings.", "Energy is absorbed from the surroundings.", "The temperature of the system increases.", "The products are more stable than reactants."],
    "correctAnswer": "Energy is absorbed from the surroundings."
  },
  {
    "id": 46,
    "questionText": "What is the role of ATP (Adenosine Triphosphate) in glycolysis?",
    "options": ["It is a waste product.", "It stores energy.", "It is consumed to provide energy for metabolic activities.", "It acts as a catalyst."],
    "correctAnswer": "It is consumed to provide energy for metabolic activities."
  },
  {
    "id": 47,
    "questionText": "The difference between the activation energy of reactants and that of the products in an exothermic reaction is represented by:",
    "options": ["Enthalpy (H)", "Transition state", "Activation energy of reactants", "Activation energy of products"],
    "correctAnswer": "Enthalpy (H)"
  },
  {
    "id": 48,
    "questionText": "The standard enthalpy of a reaction is the enthalpy change that occurs when reactants in their standard states undergo reaction to produce products in their standard states. This definition refers to:",
    "options": ["Chemical kinetics", "Thermochemistry", "Equilibria", "Acid-base chemistry"],
    "correctAnswer": "Thermochemistry"
  },
  {
    "id": 49,
    "questionText": "What is a \"system\" in the context of energetics?",
    "options": ["The entire universe.", "A specific part of the universe under study.", "The surrounding environment.", "A closed container."],
    "correctAnswer": "A specific part of the universe under study."
  },
  {
    "id": 50,
    "questionText": "If a reaction's ΔH is negative, this indicates that the reaction:",
    "options": ["Absorbs energy.", "Releases energy.", "Is at equilibrium.", "Requires a catalyst."],
    "correctAnswer": "Releases energy."
  }
],
  "Equilibria": [
  {
    "id": 1,
    "questionText": "What is a reversible reaction?",
    "options": ["A reaction that proceeds in one direction only.", "A reaction where products can react to regenerate reactants.", "A reaction that stops when all reactants are consumed.", "A reaction that always takes place at high temperatures."],
    "correctAnswer": "A reaction where products can react to regenerate reactants."
  },
  {
    "id": 2,
    "questionText": "In a chemical reaction, if the reactants continue to react to give products, and the products are converted back into reactants, this is known as a:",
    "options": ["Irreversible reaction", "Forward reaction", "Reversible reaction", "Backward reaction"],
    "correctAnswer": "Reversible reaction"
  },
  {
    "id": 3,
    "questionText": "What symbol is used to denote a reversible reaction?",
    "options": ["A single arrow (→)", "An equals sign (=)", "Two half-arrowheads pointing in opposite directions (⇌)", "A double arrow (↔)"],
    "correctAnswer": "Two half-arrowheads pointing in opposite directions (⇌)"
  },
  {
    "id": 4,
    "questionText": "A reaction where the products continuously react to give the reactants is called a:",
    "options": ["Forward reaction", "Backward reaction", "Side reaction", "Catalyst reaction"],
    "correctAnswer": "Backward reaction"
  },
  {
    "id": 5,
    "questionText": "What defines a state of dynamic equilibrium?",
    "options": ["The reaction stops completely.", "The rate of the forward reaction equals the rate of the backward reaction.", "The concentration of reactants is always higher than products.", "The temperature of the system is constant."],
    "correctAnswer": "The rate of the forward reaction equals the rate of the backward reaction."
  },
  {
    "id": 6,
    "questionText": "Which of the following is a characteristic of dynamic equilibrium?",
    "options": ["The concentrations of all reacting species are constantly changing.", "The reaction appears to have stopped but is still proceeding in both directions.", "Only the forward reaction occurs at equilibrium.", "Only the backward reaction occurs at equilibrium."],
    "correctAnswer": "The reaction appears to have stopped but is still proceeding in both directions."
  },
  {
    "id": 7,
    "questionText": "Which of the following is an example of a physical change that can be reversed by changing conditions?",
    "options": ["Burning of wood", "Formation of rust", "Copper sulphate pentahydrate changing color upon heating", "Digestion of food"],
    "correctAnswer": "Copper sulphate pentahydrate changing color upon heating"
  },
  {
    "id": 8,
    "questionText": "In the reaction: N₂ + 3H₂ ⇌ 2NH₃, applying heat to the system (an exothermic forward reaction) will:",
    "options": ["Shift the equilibrium to the right, favoring product formation.", "Shift the equilibrium to the left, favoring reactant formation.", "Have no effect on the equilibrium position.", "Increase the reaction rate equally in both directions."],
    "correctAnswer": "Shift the equilibrium to the left, favoring reactant formation."
  },
  {
    "id": 9,
    "questionText": "Increasing the pressure on a gaseous equilibrium system will cause the reaction to shift towards the side with:",
    "options": ["More moles of gaseous reactants.", "More moles of gaseous products.", "Fewer moles of gaseous substances.", "Equal moles of gaseous substances."],
    "correctAnswer": "Fewer moles of gaseous substances."
  },
  {
    "id": 10,
    "questionText": "What is the effect of a catalyst on an equilibrium reaction?",
    "options": ["It changes the position of equilibrium.", "It increases the rate of the forward reaction more than the backward reaction.", "It increases the rates of both forward and backward reactions equally.", "It decreases the activation energy for the forward reaction only."],
    "correctAnswer": "It increases the rates of both forward and backward reactions equally."
  },
  {
    "id": 11,
    "questionText": "The Haber process for ammonia production (N₂ + 3H₂ ⇌ 2NH₃) is an example of an important industrial application involving:",
    "options": ["Irreversible reactions.", "Dynamic equilibrium.", "Acid-base chemistry.", "Energetics only."],
    "correctAnswer": "Dynamic equilibrium."
  },
  {
    "id": 12,
    "questionText": "If the concentration of a reactant is increased in a system at equilibrium, the reaction will tend to:",
    "options": ["Shift to the left, consuming more product.", "Shift to the right, consuming more reactant.", "Remain unchanged.", "Stop completely."],
    "correctAnswer": "Shift to the right, consuming more reactant."
  },
  {
    "id": 13,
    "questionText": "What happens to the color of anhydrous copper sulphate (white) when exposed to moisture?",
    "options": ["It remains white.", "It turns blue.", "It turns pink.", "It turns green."],
    "correctAnswer": "It turns blue."
  },
  {
    "id": 14,
    "questionText": "When white anhydrous cobalt chloride absorbs moisture, it forms hydrated cobalt chloride which is:",
    "options": ["Blue", "White", "Pink", "Green"],
    "correctAnswer": "Pink"
  },
  {
    "id": 15,
    "questionText": "What condition must be met for a chemical system to be in a state of dynamic equilibrium?",
    "options": ["Reactant concentrations must be zero.", "The system must be open to the atmosphere.", "The rates of forward and backward reactions are equal.", "All physical conditions must be constantly changing."],
    "correctAnswer": "The rates of forward and backward reactions are equal."
  },
  {
    "id": 16,
    "questionText": "What does the observation of unchanging concentrations of reactants and products indicate at equilibrium?",
    "options": ["The reaction has stopped.", "The forward reaction is faster than the backward reaction.", "The system is in a state of dynamic equilibrium.", "The reaction is irreversible."],
    "correctAnswer": "The system is in a state of dynamic equilibrium."
  },
  {
    "id": 17,
    "questionText": "If a reaction mixture is cooled, and the forward reaction is exothermic, the equilibrium will shift to:",
    "options": ["The left (reactants).", "The right (products).", "Not shift at all.", "Reverse its direction completely."],
    "correctAnswer": "The right (products)."
  },
  {
    "id": 18,
    "questionText": "What is the effect of adding a catalyst to a reversible reaction that has reached equilibrium?",
    "options": ["It increases the yield of products.", "It decreases the yield of products.", "It shortens the time to reach equilibrium.", "It makes the reaction irreversible."],
    "correctAnswer": "It shortens the time to reach equilibrium."
  },
  {
    "id": 19,
    "questionText": "Why are reversible reactions represented with two half-arrowheads?",
    "options": ["To show that they are very slow reactions.", "To indicate that they only proceed in a single direction.", "To signify that both forward and backward reactions are occurring simultaneously.", "To show that they require a catalyst."],
    "correctAnswer": "To signify that both forward and backward reactions are occurring simultaneously."
  },
  {
    "id": 20,
    "questionText": "Which of the following is typically an irreversible reaction?",
    "options": ["Melting of ice", "Evaporation of water", "Burning of methane", "Formation of ammonia in Haber process"],
    "correctAnswer": "Burning of methane"
  },
  {
    "id": 21,
    "questionText": "If the forward reaction is endothermic, increasing the temperature will:",
    "options": ["Favor the backward reaction.", "Favor the forward reaction.", "Have no effect.", "Decrease the reaction rate."],
    "correctAnswer": "Favor the forward reaction."
  },
  {
    "id": 22,
    "questionText": "What happens to the rate of the forward reaction and the backward reaction at equilibrium?",
    "options": ["Forward rate is zero, backward rate is maximum.", "Backward rate is zero, forward rate is maximum.", "Both rates are equal and non-zero.", "Both rates are zero."],
    "correctAnswer": "Both rates are equal and non-zero."
  },
  {
    "id": 23,
    "questionText": "The decomposition of calcium carbonate (CaCO₃ ⇌ CaO + CO₂) is an example of a reversible reaction. If the CO₂ gas escapes from an open container, the reaction will:",
    "options": ["Shift to the left, producing more CaCO₃.", "Shift to the right, favoring CaO and CO₂ production.", "Stop completely.", "Reach equilibrium faster."],
    "correctAnswer": "Shift to the right, favoring CaO and CO₂ production."
  },
  {
    "id": 24,
    "questionText": "Which of the following changes will NOT disturb an equilibrium?",
    "options": ["Change in temperature.", "Change in concentration.", "Change in pressure (for gaseous reactions).", "Addition of a catalyst."],
    "correctAnswer": "Addition of a catalyst."
  },
  {
    "id": 25,
    "questionText": "The production of ethyl acetate is a commercially important preparation. If water is removed from the reaction mixture, what would be the effect?",
    "options": ["It would slow down the reaction.", "It would shift the equilibrium towards products (ethyl acetate).", "It would shift the equilibrium towards reactants.", "It would not affect the equilibrium."],
    "correctAnswer": "It would shift the equilibrium towards products (ethyl acetate)."
  },
  {
    "id": 26,
    "questionText": "What is the defining feature of an irreversible reaction?",
    "options": ["Products can convert back to reactants easily.", "It always reaches equilibrium.", "Reactants are completely converted into products.", "It requires specific conditions to proceed."],
    "correctAnswer": "Reactants are completely converted into products."
  },
  {
    "id": 27,
    "questionText": "When a reversible reaction starts, the concentration of products is:",
    "options": ["Maximum", "Minimum or zero", "Equal to reactants", "Constant"],
    "correctAnswer": "Minimum or zero"
  },
  {
    "id": 28,
    "questionText": "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), if the concentration of N₂ is increased, the equilibrium will shift to:",
    "options": ["The left", "The right", "Remain unchanged", "Stop"],
    "correctAnswer": "The right"
  },
  {
    "id": 29,
    "questionText": "What is meant by \"static equilibrium\"?",
    "options": ["Reactants and products are constantly interconverting.", "The reaction has completely stopped.", "The rates of forward and reverse reactions are equal.", "The system is open to the environment."],
    "correctAnswer": "The reaction has completely stopped."
  },
  {
    "id": 30,
    "questionText": "The effect of changing the temperature on the state of equilibrium is known as:",
    "options": ["Henry's Law", "Boyle's Law", "Le Chatelier's Principle (implied)", "Charles's Law"],
    "correctAnswer": "Le Chatelier's Principle (implied)"
  },
  {
    "id": 31,
    "questionText": "If the total energy of the system containing N₂ and H₂ is higher than that of ammonia (NH₃), the formation of ammonia is:",
    "options": ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    "correctAnswer": "Exothermic"
  },
  {
    "id": 32,
    "questionText": "What will happen if a gas mixture in equilibrium is compressed (pressure increased)?",
    "options": ["The reaction will favor the side with more gas molecules.", "The reaction will favor the side with fewer gas molecules.", "No change will occur if the number of gas molecules is equal on both sides.", "Both b and c."],
    "correctAnswer": "Both b and c."
  },
  {
    "id": 33,
    "questionText": "Which of the following is true about a catalyst in a reversible reaction?",
    "options": ["It only speeds up the forward reaction.", "It only speeds up the backward reaction.", "It changes the activation energy for both forward and backward reactions.", "It is consumed during the reaction."],
    "correctAnswer": "It changes the activation energy for both forward and backward reactions."
  },
  {
    "id": 34,
    "questionText": "A reaction where the concentration of products is increasing while reactants are decreasing is:",
    "options": ["At equilibrium", "A backward reaction", "A forward reaction", "An irreversible reaction"],
    "correctAnswer": "A forward reaction"
  },
  {
    "id": 35,
    "questionText": "The statement \"Reactants react to give the products and the products, in turn, react or decompose to give back the reactants\" describes:",
    "options": ["An irreversible reaction.", "A reversible reaction.", "A displacement reaction.", "A combustion reaction."],
    "correctAnswer": "A reversible reaction."
  },
  {
    "id": 36,
    "questionText": "The blue color of hydrated copper sulphate (CuSO₄·5H₂O) turning white when heated indicates:",
    "options": ["A chemical decomposition.", "A reversible physical change (dehydration).", "An irreversible chemical change.", "A redox reaction."],
    "correctAnswer": "A reversible physical change (dehydration)."
  },
  {
    "id": 37,
    "questionText": "If a reaction involves gaseous reactants and products, but the number of moles of gas on both sides of the equation is the same, how will a change in pressure affect the equilibrium?",
    "options": ["It will shift to the right.", "It will shift to the left.", "It will not affect the equilibrium position.", "It will only affect the reaction rate."],
    "correctAnswer": "It will not affect the equilibrium position."
  },
  {
    "id": 38,
    "questionText": "The principle that explains how a system at equilibrium responds to a disturbance is known as:",
    "options": ["Law of Conservation of Energy", "Law of Mass Action", "Le Chatelier's Principle", "Avogadro's Law"],
    "correctAnswer": "Le Chatelier's Principle"
  },
  {
    "id": 39,
    "questionText": "What is a \"chemical equilibrium\"?",
    "options": ["A state where no reaction is occurring.", "A state in which the concentrations of all reacting species remain constant over time.", "A state where only products are formed.", "A state where only reactants are present."],
    "correctAnswer": "A state in which the concentrations of all reacting species remain constant over time."
  },
  {
    "id": 40,
    "questionText": "How is the rate of a forward reaction usually related to time at the beginning of a reversible reaction?",
    "options": ["It is at its maximum and decreases with time.", "It is at its minimum and increases with time.", "It remains constant.", "It first decreases, then increases."],
    "correctAnswer": "It is at its maximum and decreases with time."
  },
  {
    "id": 41,
    "questionText": "Why is the Haber process carried out at 400°C and 200 atm pressure?",
    "options": ["To make the reaction irreversible.", "To achieve a faster rate of reaction and a reasonable yield of ammonia.", "To decrease the activation energy.", "To prevent the backward reaction."],
    "correctAnswer": "To achieve a faster rate of reaction and a reasonable yield of ammonia."
  },
  {
    "id": 42,
    "questionText": "What happens when the concentration of a product is decreased in a system at equilibrium?",
    "options": ["The equilibrium shifts to the left, producing more reactants.", "The equilibrium shifts to the right, producing more product.", "The reaction stops.", "The temperature of the system increases."],
    "correctAnswer": "The equilibrium shifts to the right, producing more product."
  },
  {
    "id": 43,
    "questionText": "Which factor can lead to a new state of equilibrium in a system?",
    "options": ["Keeping all conditions constant.", "Adding more reactants.", "Removing the catalyst.", "Decreasing the surface area of reactants."],
    "correctAnswer": "Adding more reactants."
  },
  {
    "id": 44,
    "questionText": "The color change of cobalt chloride from blue (anhydrous) to pink (hydrated) when exposed to moisture is due to:",
    "options": ["Oxidation", "Reduction", "Formation of a complex ion", "A reversible reaction involving water molecules"],
    "correctAnswer": "A reversible reaction involving water molecules"
  },
  {
    "id": 45,
    "questionText": "What is the role of an industrial plant (like urea fertilizer production) in relation to the Haber process?",
    "options": ["To make the ammonia reaction irreversible.", "To achieve 100% conversion of N₂ and H₂ to NH₃.", "To apply the principles of chemical equilibrium to produce ammonia.", "To supply the catalyst."],
    "correctAnswer": "To apply the principles of chemical equilibrium to produce ammonia."
  },
  {
    "id": 46,
    "questionText": "What can be inferred if a system is at dynamic equilibrium?",
    "options": ["The macroscopic properties (like concentration, color) are constant.", "The reaction has stopped at a molecular level.", "Only reactants are present.", "The system is always hot."],
    "correctAnswer": "The macroscopic properties (like concentration, color) are constant."
  },
  {
    "id": 47,
    "questionText": "In the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), if the temperature is increased, what is the most likely effect if the forward reaction is endothermic?",
    "options": ["The equilibrium will shift to the left.", "The equilibrium will shift to the right.", "No change in equilibrium position.", "The reaction will become irreversible."],
    "correctAnswer": "The equilibrium will shift to the right."
  },
  {
    "id": 48,
    "questionText": "What is the state of the reaction when it starts with only products?",
    "options": ["It proceeds only in the forward direction.", "It proceeds only in the backward direction to form reactants.", "It immediately reaches equilibrium.", "It stops."],
    "correctAnswer": "It proceeds only in the backward direction to form reactants."
  },
  {
    "id": 49,
    "questionText": "Which statement is generally true about a system at dynamic equilibrium?",
    "options": ["The amount of reactants is always greater than the amount of products.", "The concentrations of reactants and products are equal.", "The concentrations of reactants and products remain constant, but the reactions continue.", "The net change in energy is always zero."],
    "correctAnswer": "The concentrations of reactants and products remain constant, but the reactions continue."
  },
  {
    "id": 50,
    "questionText": "What will happen if the temperature of an exothermic reversible reaction is decreased?",
    "options": ["The equilibrium will shift to the left, favoring reactants.", "The equilibrium will shift to the right, favoring products.", "The reaction rate will increase.", "There will be no change in equilibrium."],
    "correctAnswer": "The equilibrium will shift to the right, favoring products."
  }
],
  "Acid Base Chemistry": [
  {
    "id": 1,
    "questionText": "Which of the following describes the taste of acids?",
    "options": ["Bitter", "Sweet", "Sour", "Salty"],
    "correctAnswer": "Sour"
  },
  {
    "id": 2,
    "questionText": "Acids are substances that turn blue litmus paper to what color?",
    "options": ["Green", "Red", "Yellow", "Black"],
    "correctAnswer": "Red"
  },
  {
    "id": 3,
    "questionText": "According to the Arrhenius concept, an acid is a chemical compound that gives which ion in an aqueous solution?",
    "options": ["OH⁻", "H⁺", "Na⁺", "Cl⁻"],
    "correctAnswer": "H⁺"
  },
  {
    "id": 4,
    "questionText": "Which of these is a property of bases?",
    "options": ["Sour taste", "Slippery touch", "Turn blue litmus red", "React with carbonates to produce carbon dioxide"],
    "correctAnswer": "Slippery touch"
  },
  {
    "id": 5,
    "questionText": "What is the natural source of lactic acid?",
    "options": ["Amla", "Vinegar", "Curd", "Lemon"],
    "correctAnswer": "Curd"
  },
  {
    "id": 6,
    "questionText": "Which acid is found in ant sting?",
    "options": ["Acetic acid", "Formic acid", "Citric acid", "Oxalic acid"],
    "correctAnswer": "Formic acid"
  },
  {
    "id": 7,
    "questionText": "What is the definition of a Bronsted-Lowry acid?",
    "options": ["An electron pair acceptor", "A proton donor", "A proton acceptor", "An OH⁻ donor"],
    "correctAnswer": "A proton donor"
  },
  {
    "id": 8,
    "questionText": "An amphoteric compound is one that can behave as:",
    "options": ["Only an acid", "Only a base", "Both an acid and a base", "Neither an acid nor a base"],
    "correctAnswer": "Both an acid and a base"
  },
  {
    "id": 9,
    "questionText": "Which of the following reactions is an example of an acid reacting with an active metal?",
    "options": ["HNO₃ + CaO → Ca(NO₃)₂ + H₂O", "Mg + 2HCl → MgCl₂ + H₂", "Zn + H₂SO₄ → ZnSO₄ + H₂", "Both b and c"],
    "correctAnswer": "Both b and c"
  },
  {
    "id": 10,
    "questionText": "What is produced when acids react with metal carbonates and hydrogen carbonates?",
    "options": ["Water and hydrogen gas", "Salt and hydrogen gas", "Carbon dioxide gas", "Salt, water, and carbon dioxide gas"],
    "correctAnswer": "Salt, water, and carbon dioxide gas"
  },
  {
    "id": 11,
    "questionText": "Which of the following is a strong acid?",
    "options": ["Acetic acid (CH₃COOH)", "Nitric acid (HNO₃)", "Formic acid (HCOOH)", "All organic acids"],
    "correctAnswer": "Nitric acid (HNO₃)"
  },
  {
    "id": 12,
    "questionText": "Which of the following is an example of a weak base?",
    "options": ["Sodium hydroxide (NaOH)", "Potassium hydroxide (KOH)", "Ammonium hydroxide (NH₄OH)", "Barium hydroxide (Ba(OH)₂)"],
    "correctAnswer": "Ammonium hydroxide (NH₄OH)"
  },
  {
    "id": 13,
    "questionText": "The reaction of an acid with a base to form salt and water is called:",
    "options": ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    "correctAnswer": "Neutralization"
  },
  {
    "id": 14,
    "questionText": "What is the pH range for acid rain?",
    "options": ["7.0 - 8.0", "4.2 - 4.4", "5.6 - 6.0", "Below 3.0"],
    "correctAnswer": "4.2 - 4.4"
  },
  {
    "id": 15,
    "questionText": "Which gas is responsible for the formation of acid rain?",
    "options": ["CO₂", "O₂", "SO₂ and NO₂", "CH₄"],
    "correctAnswer": "SO₂ and NO₂"
  },
  {
    "id": 16,
    "questionText": "Acid rain can damage which of the following?",
    "options": ["Buildings and statues made of limestone", "Aquatic life", "Vegetation", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 17,
    "questionText": "What is the approximate percentage ionization of glacial acetic acid?",
    "options": ["100%", "0.132%", "1.06%", "50%"],
    "correctAnswer": "1.06%"
  },
  {
    "id": 18,
    "questionText": "Which acid is used in the preparation of soap?",
    "options": ["Tartaric acid", "Citric acid", "Stearic acid", "Oxalic acid"],
    "correctAnswer": "Stearic acid"
  },
  {
    "id": 19,
    "questionText": "What is the conjugate acid of NH₃ according to Bronsted-Lowry theory?",
    "options": ["NH₂⁻", "NH₄⁺", "OH⁻", "H₂O"],
    "correctAnswer": "NH₄⁺"
  },
  {
    "id": 20,
    "questionText": "When HCl is dissolved in water, it forms H₃O⁺ and Cl⁻. This is an example of:",
    "options": ["Arrhenius acid", "Bronsted-Lowry acid", "Both Arrhenius and Bronsted-Lowry acid", "Neither"],
    "correctAnswer": "Both Arrhenius and Bronsted-Lowry acid"
  },
  {
    "id": 21,
    "questionText": "Which of the following reacts with an acid to produce a salt and hydrogen gas?",
    "options": ["Copper", "Zinc", "Silver", "Gold"],
    "correctAnswer": "Zinc"
  },
  {
    "id": 22,
    "questionText": "What happens when an alkali metal reacts with water?",
    "options": ["Produces an acid", "Produces a base", "Produces a salt", "No reaction"],
    "correctAnswer": "Produces a base"
  },
  {
    "id": 23,
    "questionText": "What is the chemical formula for calcium oxide, which is an example of a basic oxide?",
    "options": ["ZnO", "MgO", "CaO", "Na₂O"],
    "correctAnswer": "CaO"
  },
  {
    "id": 24,
    "questionText": "Which type of reaction occurs when acids are mixed with alkalis?",
    "options": ["Precipitation reaction", "Neutralization reaction", "Redox reaction", "Decomposition reaction"],
    "correctAnswer": "Neutralization reaction"
  },
  {
    "id": 25,
    "questionText": "What is the general behavior of alkalis when dissolved in water?",
    "options": ["They are insoluble.", "They are sparingly soluble.", "They are soluble.", "They decompose."],
    "correctAnswer": "They are soluble."
  },
  {
    "id": 26,
    "questionText": "Which of the following is NOT an example of a strong Arrhenius acid mentioned in the sources?",
    "options": ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"],
    "correctAnswer": "CH₃COOH"
  },
  {
    "id": 27,
    "questionText": "What does a strong acid do in an aqueous solution?",
    "options": ["Dissociates partially into ions", "Dissociates completely into ions", "Forms a precipitate", "Evaporates quickly"],
    "correctAnswer": "Dissociates completely into ions"
  },
  {
    "id": 28,
    "questionText": "Which of the following is a diprotic acid?",
    "options": ["HNO₃", "HCl", "H₂SO₄", "CH₃COOH"],
    "correctAnswer": "H₂SO₄"
  },
  {
    "id": 29,
    "questionText": "What is the common problem often caused by stomach acidity or hyperacidity?",
    "options": ["Headache", "Heartburn", "Fever", "Rash"],
    "correctAnswer": "Heartburn"
  },
  {
    "id": 30,
    "questionText": "Antacids are used to relieve which condition?",
    "options": ["Blood pressure", "Stomach acidity", "Diabetes", "Allergies"],
    "correctAnswer": "Stomach acidity"
  },
  {
    "id": 31,
    "questionText": "What is the Bronsted-Lowry conjugate base of H₂O?",
    "options": ["H₃O⁺", "OH⁻", "H₂", "O₂"],
    "correctAnswer": "OH⁻"
  },
  {
    "id": 32,
    "questionText": "Give an example of a Bronsted-Lowry acid-base pair where HI acts as an acid.",
    "options": ["HI (acid) + H₂O (base) → H₃O⁺ (conjugate acid) + I⁻ (conjugate base)", "HI (base) + H₂O (acid) → H₂I⁺ (conjugate acid) + OH⁻ (conjugate base)", "HI (acid) + CN⁻ (base) → HCN (conjugate acid) + I⁻ (conjugate base)", "HI (acid) + H₂O (acid) → No reaction"],
    "correctAnswer": "HI (acid) + H₂O (base) → H₃O⁺ (conjugate acid) + I⁻ (conjugate base)"
  },
  {
    "id": 33,
    "questionText": "When an acid reacts with a metal, what gas is typically evolved?",
    "options": ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    "correctAnswer": "Hydrogen"
  },
  {
    "id": 34,
    "questionText": "Slaked lime is used to neutralize which type of soil?",
    "options": ["Basic soil", "Acidic soil", "Neutral soil", "Saline soil"],
    "correctAnswer": "Acidic soil"
  },
  {
    "id": 35,
    "questionText": "Caustic drain cleaners, like NaOH, work by dissolving which substances?",
    "options": ["Hair and food", "Grease and hair", "Grease and food", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 36,
    "questionText": "What is one way to clean a blocked drain using common household items?",
    "options": ["Pour hot water only", "Pour half a cup of sodium bicarbonate solution into the drain followed by half a cup of vinegar", "Pour only vinegar", "Use a strong acid directly"],
    "correctAnswer": "Pour half a cup of sodium bicarbonate solution into the drain followed by half a cup of vinegar"
  },
  {
    "id": 37,
    "questionText": "What effect does acid rain have on water bodies?",
    "options": ["Increases pH", "Makes water too acidic for animals to live in", "Increases aquatic plant growth", "Has no effect"],
    "correctAnswer": "Makes water too acidic for animals to live in"
  },
  {
    "id": 38,
    "questionText": "The pH of normal rain water is approximately:",
    "options": ["7.0", "5.6", "8.0", "4.0"],
    "correctAnswer": "5.6"
  },
  {
    "id": 39,
    "questionText": "Which of the following would cause acid rain?",
    "options": ["Burning of fossil fuels", "Volcanic eruptions", "Forest fires", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 40,
    "questionText": "Which of the following organic acids is the simplest diprotic acid?",
    "options": ["Acetic acid", "Formic acid", "Oxalic acid (H₂C₂O₄)", "Citric acid"],
    "correctAnswer": "Oxalic acid (H₂C₂O₄)"
  },
  {
    "id": 41,
    "questionText": "According to the Bronsted-Lowry theory, a substance that accepts a proton is called a:",
    "options": ["Acid", "Base", "Salt", "Conjugate acid"],
    "correctAnswer": "Base"
  },
  {
    "id": 42,
    "questionText": "What is formed when sulphur dioxide (SO₂) reacts with water?",
    "options": ["Sulphuric acid (H₂SO₄)", "Sulphurous acid (H₂SO₃)", "Nitric acid (HNO₃)", "Carbonic acid (H₂CO₃)"],
    "correctAnswer": "Sulphurous acid (H₂SO₃)"
  },
  {
    "id": 43,
    "questionText": "Which of the following ions is present in large amounts when hydrochloric acid (HCl) ionizes in water?",
    "options": ["Hydroxide ion (OH⁻)", "Chloride ion (Cl⁻)", "Sodium ion (Na⁺)", "Sulphate ion (SO₄²⁻)"],
    "correctAnswer": "Chloride ion (Cl⁻)"
  },
  {
    "id": 44,
    "questionText": "What is the chemical formula for the strong base potassium hydroxide?",
    "options": ["NaOH", "Ca(OH)₂", "KOH", "NH₄OH"],
    "correctAnswer": "KOH"
  },
  {
    "id": 45,
    "questionText": "Which acid is naturally found in tomatoes?",
    "options": ["Tartaric acid", "Oxalic acid", "Citric acid", "Acetic acid"],
    "correctAnswer": "Oxalic acid"
  },
  {
    "id": 46,
    "questionText": "How does the concentration of H⁺ ions in an aqueous solution relate to its acidity?",
    "options": ["Higher H⁺ concentration means less acidic.", "Higher H⁺ concentration means more acidic.", "H⁺ concentration has no relation to acidity.", "Lower H⁺ concentration means more acidic."],
    "correctAnswer": "Higher H⁺ concentration means more acidic."
  },
  {
    "id": 47,
    "questionText": "What is the common definition of an alkali?",
    "options": ["An insoluble base", "A soluble base", "A strong acid", "A weak acid"],
    "correctAnswer": "A soluble base"
  },
  {
    "id": 48,
    "questionText": "Which of the following substances can act as a proton donor?",
    "options": ["OH⁻", "NH₃", "H₂O (when acting as acid)", "H₃O⁺"],
    "correctAnswer": "H₂O (when acting as acid)"
  },
  {
    "id": 49,
    "questionText": "Which acid is responsible for the sour taste of lemons and oranges?",
    "options": ["Lactic acid", "Citric acid", "Ascorbic acid", "Acetic acid"],
    "correctAnswer": "Citric acid"
  },
  {
    "id": 50,
    "questionText": "When diluting an acid with water, what is the correct safety procedure?",
    "options": ["Do it quickly", "Do not stir the container", "Always add acid to water", "Always add water to acid"],
    "correctAnswer": "Always add acid to water"
  }
],
  "Periodic Table and Periodicity": [
  {
    "id": 1,
    "questionText": "How are elements arranged in the modern periodic table?",
    "options": [
      "By increasing atomic mass",
      "By increasing atomic number",
      "By chemical reactivity",
      "By physical state"
    ],
    "correctAnswer": "By increasing atomic number"
  },
  {
    "id": 2,
    "questionText": "What are the horizontal rows in the periodic table called?",
    "options": [
      "Groups",
      "Blocks",
      "Periods",
      "Series"
    ],
    "correctAnswer": "Periods"
  },
  {
    "id": 3,
    "questionText": "How many periods are there in the modern periodic table?",
    "options": [
      "18",
      "7",
      "8",
      "10"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 4,
    "questionText": "What are the vertical columns in the periodic table called?",
    "options": [
      "Periods",
      "Blocks",
      "Groups",
      "Rows"
    ],
    "correctAnswer": "Groups"
  },
  {
    "id": 5,
    "questionText": "Elements in a group generally show what kind of chemical properties?",
    "options": [
      "Widely varying",
      "Very different",
      "Similar",
      "Unpredictable"
    ],
    "correctAnswer": "Similar"
  },
  {
    "id": 6,
    "questionText": "The first period of the periodic table starts with an alkali metal and ends with a:",
    "options": [
      "Halogen",
      "Transition metal",
      "Noble gas",
      "Alkaline earth metal"
    ],
    "correctAnswer": "Noble gas"
  },
  {
    "id": 7,
    "questionText": "Which block of elements contains groups 1 and 2?",
    "options": [
      "p-block",
      "d-block",
      "s-block",
      "f-block"
    ],
    "correctAnswer": "s-block"
  },
  {
    "id": 8,
    "questionText": "What is the general trend for atomic radius when moving from left to right in a period?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Decreases"
  },
  {
    "id": 9,
    "questionText": "What is the general trend for atomic radius when moving from top to bottom in a group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 10,
    "questionText": "What is ionization energy?",
    "options": [
      "The energy released when an electron is added to an atom.",
      "The energy required to remove the most loosely bound electron from the valence shell of an isolated gaseous atom.",
      "The energy required to form a bond.",
      "The energy released during a chemical reaction."
    ],
    "correctAnswer": "The energy required to remove the most loosely bound electron from the valence shell of an isolated gaseous atom."
  },
  {
    "id": 11,
    "questionText": "How does ionization energy generally change when moving from left to right in a period?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 12,
    "questionText": "How does ionization energy generally change when moving from top to bottom in a group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Decreases"
  },
  {
    "id": 13,
    "questionText": "What is electron affinity?",
    "options": [
      "The energy required to remove an electron.",
      "The energy released when an electron is added to the outermost shell of an isolated gaseous atom.",
      "The ability of an atom to attract shared electrons.",
      "The size of an atom."
    ],
    "correctAnswer": "The energy released when an electron is added to the outermost shell of an isolated gaseous atom."
  },
  {
    "id": 14,
    "questionText": "Which element has the highest electronegativity?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Chlorine",
      "Fluorine"
    ],
    "correctAnswer": "Fluorine"
  },
  {
    "id": 15,
    "questionText": "What is the general trend for electronegativity when moving from left to right in a period?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 16,
    "questionText": "What is the general trend for electronegativity when moving from top to bottom in a group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Decreases"
  },
  {
    "id": 17,
    "questionText": "Metallic character is defined by an element's tendency to:",
    "options": [
      "Gain electrons",
      "Lose electrons",
      "Share electrons",
      "Remain unreactive"
    ],
    "correctAnswer": "Lose electrons"
  },
  {
    "id": 18,
    "questionText": "How does metallic character generally change when moving from left to right in a period?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Decreases"
  },
  {
    "id": 19,
    "questionText": "How does metallic character generally change when moving from top to bottom in a group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 20,
    "questionText": "The s-block elements are found in which groups?",
    "options": [
      "1 and 2",
      "13 to 18",
      "3 to 12",
      "Lanthanides and Actinides"
    ],
    "correctAnswer": "1 and 2"
  },
  {
    "id": 21,
    "questionText": "Which of the following is true about the d-block elements?",
    "options": [
      "They are found in groups 1 and 2.",
      "They are found in groups 13 to 18.",
      "They are called transition metals.",
      "They have completely filled outermost shells."
    ],
    "correctAnswer": "They are called transition metals."
  },
  {
    "id": 22,
    "questionText": "What is the significance of the atomic number in the modern periodic table?",
    "options": [
      "It determines the element's mass.",
      "It represents the number of protons and defines the element.",
      "It indicates the number of neutrons.",
      "It describes the element's electron affinity."
    ],
    "correctAnswer": "It represents the number of protons and defines the element."
  },
  {
    "id": 23,
    "questionText": "The second period elements have electrons filling which shell?",
    "options": [
      "1st shell",
      "2nd shell",
      "3rd shell",
      "4th shell"
    ],
    "correctAnswer": "2nd shell"
  },
  {
    "id": 24,
    "questionText": "Elements that have similar chemical properties in a group are because they have the same number of:",
    "options": [
      "Protons",
      "Neutrons",
      "Electrons in their outermost shell",
      "Total electrons"
    ],
    "correctAnswer": "Electrons in their outermost shell"
  },
  {
    "id": 25,
    "questionText": "Which elements are called lanthanides and actinides?",
    "options": [
      "d-block elements",
      "p-block elements",
      "s-block elements",
      "f-block elements"
    ],
    "correctAnswer": "f-block elements"
  },
  {
    "id": 26,
    "questionText": "Group 1 elements are known as:",
    "options": [
      "Alkaline earth metals",
      "Alkali metals",
      "Halogens",
      "Noble gases"
    ],
    "correctAnswer": "Alkali metals"
  },
  {
    "id": 27,
    "questionText": "Group 17 elements are known as:",
    "options": [
      "Alkaline earth metals",
      "Alkali metals",
      "Halogens",
      "Noble gases"
    ],
    "correctAnswer": "Halogens"
  },
  {
    "id": 28,
    "questionText": "Which of the following elements belongs to the boron family?",
    "options": [
      "Carbon",
      "Nitrogen",
      "Boron",
      "Oxygen"
    ],
    "correctAnswer": "Boron"
  },
  {
    "id": 29,
    "questionText": "What is the outermost shell electron configuration for Group 2 elements?",
    "options": [
      "ns¹",
      "ns²",
      "ns²np¹",
      "ns²np⁵"
    ],
    "correctAnswer": "ns²"
  },
  {
    "id": 30,
    "questionText": "Atomic radius is defined as half the distance between the nuclei of two identical bonded atoms. What is the typical unit used for atomic radius?",
    "options": [
      "nm (nanometers)",
      "pm (picometers)",
      "Å (Angstroms)",
      "cm (centimeters)"
    ],
    "correctAnswer": "pm (picometers)"
  },
  {
    "id": 31,
    "questionText": "In a period, the atomic radius generally decreases from left to right because:",
    "options": [
      "The number of shells increases.",
      "The nuclear charge increases, pulling electrons closer.",
      "The number of valence electrons decreases.",
      "Interatomic forces decrease."
    ],
    "correctAnswer": "The nuclear charge increases, pulling electrons closer."
  },
  {
    "id": 32,
    "questionText": "Why does atomic radius generally increase down a group?",
    "options": [
      "Nuclear charge decreases.",
      "The number of shells increases.",
      "Electron affinity increases.",
      "Electronegativity decreases."
    ],
    "correctAnswer": "The number of shells increases."
  },
  {
    "id": 33,
    "questionText": "The first ionization energy of sodium (Na) is +496 kJ mol⁻¹. What does this value represent?",
    "options": [
      "Energy released when Na gains an electron.",
      "Energy required to remove the first electron from a gaseous Na atom.",
      "Energy released when Na forms an ionic bond.",
      "Energy absorbed when Na vaporizes."
    ],
    "correctAnswer": "Energy required to remove the first electron from a gaseous Na atom."
  },
  {
    "id": 34,
    "questionText": "Which of the following elements would typically have the highest first ionization energy?",
    "options": [
      "Li",
      "Na",
      "K",
      "Cs"
    ],
    "correctAnswer": "Li"
  },
  {
    "id": 35,
    "questionText": "The electron affinity of fluorine (F) is -328 kJ mol⁻¹. What does this negative value indicate?",
    "options": [
      "Energy is absorbed.",
      "Energy is released.",
      "The atom is very stable.",
      "The atom resists electron gain."
    ],
    "correctAnswer": "Energy is released."
  },
  {
    "id": 36,
    "questionText": "Which of the following has the highest electron affinity among the Group 17 elements listed in the source?",
    "options": [
      "F",
      "Cl",
      "Br",
      "I"
    ],
    "correctAnswer": "Cl"
  },
  {
    "id": 37,
    "questionText": "Electronegativity is defined as the tendency of an atom to:",
    "options": [
      "Lose electrons",
      "Gain electrons",
      "Attract the shared pair of electrons towards itself in a bond",
      "Emit radiation"
    ],
    "correctAnswer": "Attract the shared pair of electrons towards itself in a bond"
  },
  {
    "id": 38,
    "questionText": "What happens to the metallic character as you move down a group?",
    "options": [
      "It increases.",
      "It decreases.",
      "It remains constant.",
      "It first increases then decreases."
    ],
    "correctAnswer": "It increases."
  },
  {
    "id": 39,
    "questionText": "Why do elements in Group 1 have similar chemical properties?",
    "options": [
      "They have the same number of protons.",
      "They have the same atomic mass.",
      "They have the same number of valence electrons.",
      "They are all gases at room temperature."
    ],
    "correctAnswer": "They have the same number of valence electrons."
  },
  {
    "id": 40,
    "questionText": "Which of the following is a transition element?",
    "options": [
      "Lithium",
      "Carbon",
      "Iron",
      "Oxygen"
    ],
    "correctAnswer": "Iron"
  },
  {
    "id": 41,
    "questionText": "What is the number of elements in the 3rd period?",
    "options": [
      "2",
      "8",
      "18",
      "32"
    ],
    "correctAnswer": "8"
  },
  {
    "id": 42,
    "questionText": "According to Moseley, what was the basis for arranging elements in the periodic table?",
    "options": [
      "Atomic mass",
      "Atomic number",
      "Density",
      "Reactivity"
    ],
    "correctAnswer": "Atomic number"
  },
  {
    "id": 43,
    "questionText": "Which period contains lanthanides and actinides?",
    "options": [
      "4th and 5th",
      "5th and 6th",
      "6th and 7th",
      "These are separate blocks, not periods."
    ],
    "correctAnswer": "6th and 7th"
  },
  {
    "id": 44,
    "questionText": "What type of elements are found in the p-block?",
    "options": [
      "Alkali metals",
      "Transition metals",
      "Non-metals and metalloids, and some metals",
      "Rare earth metals"
    ],
    "correctAnswer": "Non-metals and metalloids, and some metals"
  },
  {
    "id": 45,
    "questionText": "Which characteristic is least likely to define Group 18 elements (Noble Gases)?",
    "options": [
      "Monatomic gases",
      "Unreactive",
      "Full outermost shells",
      "High electron affinity"
    ],
    "correctAnswer": "High electron affinity"
  },
  {
    "id": 46,
    "questionText": "If an element has an electronic configuration ending in ns²np³, which group does it most likely belong to?",
    "options": [
      "Group 13",
      "Group 14",
      "Group 15",
      "Group 16"
    ],
    "correctAnswer": "Group 15"
  },
  {
    "id": 47,
    "questionText": "Based on the trend for density in Group 1 elements, which element would have the highest density among Li, Na, K, Rb, Cs?",
    "options": [
      "Li",
      "Na",
      "K",
      "Cs"
    ],
    "correctAnswer": "Cs"
  },
  {
    "id": 48,
    "questionText": "An element in the 3rd period, Group 17 (Halogen Family) would have how many electrons in its outermost shell?",
    "options": [
      "2",
      "5",
      "7",
      "8"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 49,
    "questionText": "What information does the period number provide about an element?",
    "options": [
      "Number of valence electrons",
      "Number of protons",
      "Number of electron shells",
      "Atomic mass"
    ],
    "correctAnswer": "Number of electron shells"
  },
  {
    "id": 50,
    "questionText": "Which of the following is not a property of Group 1 elements?",
    "options": [
      "Relatively soft metals",
      "High melting points",
      "Increase in reactivity down the group",
      "Form positive ions"
    ],
    "correctAnswer": "High melting points"
  }
],
  "Group Properties and Elements": [
  {
    "id": 1,
    "questionText": "Which of the following is a characteristic property of Group 1 Alkali Metals?",
    "options": [
      "High melting points",
      "Relatively soft metals",
      "Decrease in reactivity down the group",
      "Form negative ions"
    ],
    "correctAnswer": "Relatively soft metals"
  },
  {
    "id": 2,
    "questionText": "How does the melting point generally change for Group 1 Alkali Metals as you move down the group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "First increases, then decreases"
    ],
    "correctAnswer": "Decreases"
  },
  {
    "id": 3,
    "questionText": "What is the trend for reactivity of Group 1 Alkali Metals as you move down the group?",
    "options": [
      "Decreases",
      "Increases",
      "Remains constant",
      "Varies unpredictably"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 4,
    "questionText": "When sodium (Na) reacts with water, what products are formed?",
    "options": [
      "NaOH(aq) + H₂(g)",
      "Na₂O(s) + H₂(g)",
      "NaCl(aq) + H₂O(l)",
      "NaH(s) + O₂(g)"
    ],
    "correctAnswer": "NaOH(aq) + H₂(g)"
  },
  {
    "id": 5,
    "questionText": "Which of the following is true about Group 17 Halogens?",
    "options": [
      "They are monatomic gases.",
      "They are highly reactive non-metals.",
      "Their reactivity increases down the group.",
      "They tend to lose electrons to form positive ions."
    ],
    "correctAnswer": "They are highly reactive non-metals."
  },
  {
    "id": 6,
    "questionText": "What is the color and physical state of Fluorine (F₂) at room temperature?",
    "options": [
      "Greenish yellow gas",
      "Pale yellow gas",
      "Red-brown liquid",
      "Grey solid"
    ],
    "correctAnswer": "Pale yellow gas"
  },
  {
    "id": 7,
    "questionText": "What is the appearance of iodine (I₂) at room temperature?",
    "options": [
      "Pale yellow gas",
      "Greenish yellow gas",
      "Red-brown liquid",
      "Shiny grey solid"
    ],
    "correctAnswer": "Shiny grey solid"
  },
  {
    "id": 8,
    "questionText": "Halogens react with alkali metals to form:",
    "options": [
      "Oxides",
      "Sulphides",
      "Halides (salts)",
      "Hydroxides"
    ],
    "correctAnswer": "Halides (salts)"
  },
  {
    "id": 9,
    "questionText": "Which of the following is an example of an oxidation-reduction reaction involving a halogen?",
    "options": [
      "Cl₂ + 2NaI → 2NaCl + I₂",
      "Cl₂ + H₂ → 2HCl",
      "Br₂ + H₂O → HBr + HOBr",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "id": 10,
    "questionText": "How does the thermal stability of hydrogen halides (HX) change down Group 17?",
    "options": [
      "Increases (HF > HCl > HBr > HI)",
      "Decreases (HF > HCl > HBr > HI)",
      "Remains constant",
      "Varies unpredictably"
    ],
    "correctAnswer": "Decreases (HF > HCl > HBr > HI)"
  },
  {
    "id": 11,
    "questionText": "Transition elements are found in which block of the periodic table?",
    "options": [
      "s-block",
      "p-block",
      "d-block",
      "f-block"
    ],
    "correctAnswer": "d-block"
  },
  {
    "id": 12,
    "questionText": "Which of the following is a characteristic property of Transition elements?",
    "options": [
      "Low melting points",
      "Form colorless compounds",
      "Are used as catalysts",
      "Have low densities"
    ],
    "correctAnswer": "Are used as catalysts"
  },
  {
    "id": 13,
    "questionText": "Which noble gas is used in advertising signs?",
    "options": [
      "Helium (He)",
      "Neon (Ne)",
      "Argon (Ar)",
      "Krypton (Kr)"
    ],
    "correctAnswer": "Neon (Ne)"
  },
  {
    "id": 14,
    "questionText": "What is the typical electron configuration for Noble Gases in their outermost shells (except Helium)?",
    "options": [
      "ns¹",
      "ns²np³",
      "ns²np⁶",
      "ns²"
    ],
    "correctAnswer": "ns²np⁶"
  },
  {
    "id": 15,
    "questionText": "Which of the following is NOT a general physical property of metals?",
    "options": [
      "Malleable",
      "Ductile",
      "Good conductors of heat and electricity",
      "Brittle"
    ],
    "correctAnswer": "Brittle"
  },
  {
    "id": 16,
    "questionText": "Non-metals generally exhibit which property?",
    "options": [
      "Lustrous",
      "High melting points",
      "Poor conductors of heat and electricity (except graphite)",
      "Strong"
    ],
    "correctAnswer": "Poor conductors of heat and electricity (except graphite)"
  },
  {
    "id": 17,
    "questionText": "Which element is described as having layers in its graphite structure, allowing it to conduct electricity?",
    "options": [
      "Diamond",
      "Silicon",
      "Carbon (Graphite)",
      "Boron"
    ],
    "correctAnswer": "Carbon (Graphite)"
  },
  {
    "id": 18,
    "questionText": "How does atomic size generally change in Group 1 elements as you move down the group?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "First increases, then decreases"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 19,
    "questionText": "What kind of ions do Group 1 elements tend to form?",
    "options": [
      "Positive ions (cations)",
      "Negative ions (anions)",
      "Both positive and negative ions",
      "Do not form ions"
    ],
    "correctAnswer": "Positive ions (cations)"
  },
  {
    "id": 20,
    "questionText": "What kind of ions do Group 17 elements tend to form?",
    "options": [
      "Positive ions (cations)",
      "Negative ions (anions)",
      "Both positive and negative ions",
      "Do not form ions"
    ],
    "correctAnswer": "Negative ions (anions)"
  },
  {
    "id": 21,
    "questionText": "The oxides of alkali metals are generally:",
    "options": [
      "Acidic in nature",
      "Basic in nature",
      "Amphoteric",
      "Strongly basic (The source states \"also basic in nature\")"
    ],
    "correctAnswer": "Strongly basic (The source states \"also basic in nature\")"
  },
  {
    "id": 22,
    "questionText": "When Group 2 (alkaline earth) elements react, they tend to:",
    "options": [
      "Gain one electron",
      "Gain two electrons",
      "Lose one electron",
      "Lose two electrons"
    ],
    "correctAnswer": "Lose two electrons"
  },
  {
    "id": 23,
    "questionText": "Which of the following is a common application of ammonia?",
    "options": [
      "Fuel",
      "Fertilizer",
      "Catalyst",
      "Preservative"
    ],
    "correctAnswer": "Fertilizer"
  },
  {
    "id": 24,
    "questionText": "Vanadium pentoxide (V₂O₅) is a catalyst used in the manufacture of:",
    "options": [
      "Sulphuric acid",
      "Nitric acid",
      "Ammonia",
      "Hydrochloric acid"
    ],
    "correctAnswer": "Sulphuric acid"
  },
  {
    "id": 25,
    "questionText": "What is a distinguishing characteristic of metals regarding their electrons?",
    "options": [
      "They strongly hold onto their outermost electrons.",
      "They have loosely linked outermost electrons that form a \"sea of electrons\".",
      "They have no electrons.",
      "They share electrons to form covalent bonds."
    ],
    "correctAnswer": "They have loosely linked outermost electrons that form a \"sea of electrons\"."
  },
  {
    "id": 26,
    "questionText": "What state are non-metals generally in at room temperature?",
    "options": [
      "Solids only",
      "Liquids only",
      "Gases only",
      "May be solids, liquids, or gases"
    ],
    "correctAnswer": "May be solids, liquids, or gases"
  },
  {
    "id": 27,
    "questionText": "Which of the following is a property of non-metals?",
    "options": [
      "Lustrous",
      "Malleable",
      "Brittle",
      "Good conductors of electricity"
    ],
    "correctAnswer": "Brittle"
  },
  {
    "id": 28,
    "questionText": "How does the density of Group 1 elements change from top to bottom?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "First decreases, then increases"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 29,
    "questionText": "Which halogen is a red-brown liquid at room temperature?",
    "options": [
      "Fluorine",
      "Chlorine",
      "Bromine",
      "Iodine"
    ],
    "correctAnswer": "Bromine"
  },
  {
    "id": 30,
    "questionText": "When hydrogen chloride (HCl) gas is formed, what kind of bond exists between hydrogen and chlorine?",
    "options": [
      "Ionic bond",
      "Metallic bond",
      "Covalent bond",
      "Coordinate covalent bond"
    ],
    "correctAnswer": "Covalent bond"
  },
  {
    "id": 31,
    "questionText": "Which element is considered the most reactive halogen?",
    "options": [
      "Chlorine",
      "Fluorine",
      "Bromine",
      "Iodine"
    ],
    "correctAnswer": "Fluorine"
  },
  {
    "id": 32,
    "questionText": "Among alkali metals, which one has the highest melting point?",
    "options": [
      "Lithium (Li)",
      "Sodium (Na)",
      "Potassium (K)",
      "Cesium (Cs)"
    ],
    "correctAnswer": "Lithium (Li)"
  },
  {
    "id": 33,
    "questionText": "Elements of Group 1 form hydroxides with water. What are these hydroxides generally described as?",
    "options": [
      "Weakly acidic",
      "Strongly acidic",
      "Weakly basic",
      "Strongly basic"
    ],
    "correctAnswer": "Strongly basic"
  },
  {
    "id": 34,
    "questionText": "What is the s¹ configuration indicative of?",
    "options": [
      "Group 2 elements",
      "Group 1 elements",
      "Group 13 elements",
      "Group 17 elements"
    ],
    "correctAnswer": "Group 1 elements"
  },
  {
    "id": 35,
    "questionText": "The reactivity of alkali metals gradually increases down the group due to:",
    "options": [
      "Decrease in atomic size",
      "Increase in ionization energy",
      "Tendency to lose electrons more easily",
      "Increase in electronegativity"
    ],
    "correctAnswer": "Tendency to lose electrons more easily"
  },
  {
    "id": 36,
    "questionText": "When calcium (Ca) reacts with chlorine (Cl₂), what is the resulting product?",
    "options": [
      "CaCl",
      "Ca₂Cl",
      "CaCl₂",
      "Ca(ClO)₂"
    ],
    "correctAnswer": "CaCl₂"
  },
  {
    "id": 37,
    "questionText": "Which transition metal is used as a catalyst in the hydrogenation of oils to give solid margarine?",
    "options": [
      "Iron",
      "Platinum",
      "Nickel",
      "Vanadium"
    ],
    "correctAnswer": "Nickel"
  },
  {
    "id": 38,
    "questionText": "Which of the following is an example of a good conductor of heat and electricity among non-metals?",
    "options": [
      "Sulphur",
      "Diamond",
      "Graphite",
      "Iodine"
    ],
    "correctAnswer": "Graphite"
  },
  {
    "id": 39,
    "questionText": "The ability of metals to be hammered into thin sheets is called:",
    "options": [
      "Ductility",
      "Malleability",
      "Lustre",
      "Brittleness"
    ],
    "correctAnswer": "Malleability"
  },
  {
    "id": 40,
    "questionText": "How do non-metals generally behave regarding electron gain?",
    "options": [
      "Tend to gain electrons easily",
      "Tend to lose electrons easily",
      "Tend to share electrons only",
      "Do not interact with electrons"
    ],
    "correctAnswer": "Tend to gain electrons easily"
  },
  {
    "id": 41,
    "questionText": "Among the halogens, which one has the highest electron affinity?",
    "options": [
      "Fluorine",
      "Chlorine",
      "Bromine",
      "Iodine"
    ],
    "correctAnswer": "Chlorine"
  },
  {
    "id": 42,
    "questionText": "Which statement about the thermal stability of hydrogen halides (HX) is correct?",
    "options": [
      "HF has the highest thermal stability among hydrogen halides.",
      "HI has the highest thermal stability among hydrogen halides.",
      "Thermal stability increases down the group.",
      "All hydrogen halides have similar thermal stability."
    ],
    "correctAnswer": "HF has the highest thermal stability among hydrogen halides."
  },
  {
    "id": 43,
    "questionText": "When bromine (Br₂) reacts with sodium iodide (NaI), what is the color of the precipitate formed?",
    "options": [
      "Red-brown",
      "Pale yellow",
      "Grey (due to iodine formation)",
      "Green"
    ],
    "correctAnswer": "Grey (due to iodine formation)"
  },
  {
    "id": 44,
    "questionText": "Which of the following is true about alkali metals’ oxides?",
    "options": [
      "They are strongly acidic.",
      "They are readily soluble in water giving acidic solutions.",
      "They are readily soluble in water giving alkaline solutions.",
      "They are insoluble."
    ],
    "correctAnswer": "They are readily soluble in water giving alkaline solutions."
  },
  {
    "id": 45,
    "questionText": "Which group number corresponds to the Boron family?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": "13"
  },
  {
    "id": 46,
    "questionText": "What is the primary characteristic that distinguishes noble gases from other elements?",
    "options": [
      "High reactivity",
      "Formation of many compounds",
      "Unreactive nature",
      "High metallic character"
    ],
    "correctAnswer": "Unreactive nature"
  },
  {
    "id": 47,
    "questionText": "Which type of elements are typically found in the d-block and f-block?",
    "options": [
      "Reactive non-metals",
      "Alkali and alkaline earth metals",
      "Transition and inner transition elements",
      "Noble gases"
    ],
    "correctAnswer": "Transition and inner transition elements"
  },
  {
    "id": 48,
    "questionText": "An element from Group 1, period 4, would be:",
    "options": [
      "Lithium (Li)",
      "Sodium (Na)",
      "Potassium (K)",
      "Rubidium (Rb)"
    ],
    "correctAnswer": "Potassium (K)"
  },
  {
    "id": 49,
    "questionText": "What happens to the density of elements as you move down Group 1?",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "First decreases, then increases"
    ],
    "correctAnswer": "Increases"
  },
  {
    "id": 50,
    "questionText": "Which halogen is typically a greenish-yellow gas?",
    "options": [
      "Fluorine",
      "Chlorine",
      "Bromine",
      "Iodine"
    ],
    "correctAnswer": "Chlorine"
  }
],
  "Environmental Chemistry": [
  {
    "id": 1,
    "questionText": "What is the approximate percentage of nitrogen (N₂) in clean, dry air?",
    "options": [
      "21%",
      "78%",
      "0.04%",
      "0.934%"
    ],
    "correctAnswer": "78%"
  },
  {
    "id": 2,
    "questionText": "Which of the following is a major air pollutant?",
    "options": [
      "Oxygen (O₂)",
      "Nitrogen (N₂)",
      "Carbon dioxide (CO₂)",
      "Water vapor"
    ],
    "correctAnswer": "Carbon dioxide (CO₂)"
  },
  {
    "id": 3,
    "questionText": "What is the primary source of carbon monoxide (CO) in the atmosphere?",
    "options": [
      "Complete combustion of carbon-containing fuels",
      "Incomplete combustion of carbon-containing fuels",
      "Volcanic eruptions",
      "Photosynthesis"
    ],
    "correctAnswer": "Incomplete combustion of carbon-containing fuels"
  },
  {
    "id": 4,
    "questionText": "Oxides of nitrogen (NOₓ) are primarily formed from:",
    "options": [
      "Decomposition of vegetation",
      "Car engines and power plants",
      "Volcanic emissions",
      "Sea spray"
    ],
    "correctAnswer": "Car engines and power plants"
  },
  {
    "id": 5,
    "questionText": "Which pollutant is known to cause breathing problems and damage to plants?",
    "options": [
      "Carbon monoxide",
      "Oxides of sulphur (SOₓ)",
      "Nitrogen",
      "Oxygen"
    ],
    "correctAnswer": "Oxides of sulphur (SOₓ)"
  },
  {
    "id": 6,
    "questionText": "What is the main harmful effect of carbon monoxide (CO) on human health?",
    "options": [
      "Irritates eyes and lungs",
      "Causes suffocation by stopping red blood cells from carrying oxygen",
      "Causes pneumonia",
      "Damages buildings"
    ],
    "correctAnswer": "Causes suffocation by stopping red blood cells from carrying oxygen"
  },
  {
    "id": 7,
    "questionText": "What is the major source of sulphur dioxide (SO₂) in the atmosphere?",
    "options": [
      "Emissions from car engines",
      "Burning of fossil fuels (oil, natural gas, coal)",
      "Industrial processes involving nitrogen",
      "Decomposition of organic matter"
    ],
    "correctAnswer": "Burning of fossil fuels (oil, natural gas, coal)"
  },
  {
    "id": 8,
    "questionText": "Which pollutant is associated with increased global warming?",
    "options": [
      "Carbon monoxide",
      "Particulate matter",
      "Hydrocarbons (methane is a hydrocarbon and greenhouse gas)",
      "Ozone"
    ],
    "correctAnswer": "Hydrocarbons (methane is a hydrocarbon and greenhouse gas)"
  },
  {
    "id": 9,
    "questionText": "What is smog?",
    "options": [
      "A mixture of gases found in the stratosphere.",
      "Fog mixed with smoke or other pollutants, often mixed with volatile organic compounds and NOx.",
      "A layer of clean air at high altitude.",
      "Water vapor mixed with oxygen."
    ],
    "correctAnswer": "Fog mixed with smoke or other pollutants, often mixed with volatile organic compounds and NOx."
  },
  {
    "id": 10,
    "questionText": "Acid rain is formed when oxides of sulphur and nitrogen mix with what in the atmosphere?",
    "options": [
      "Methane",
      "Water vapor",
      "Carbon dioxide",
      "Ozone"
    ],
    "correctAnswer": "Water vapor"
  },
  {
    "id": 11,
    "questionText": "What is the effect of acid rain on soil?",
    "options": [
      "Makes soil more alkaline",
      "Makes soil more acidic, dissolving toxic substances",
      "Increases soil fertility",
      "Has no effect on soil pH"
    ],
    "correctAnswer": "Makes soil more acidic, dissolving toxic substances"
  },
  {
    "id": 12,
    "questionText": "Acid rain can damage which human-made structures?",
    "options": [
      "Buildings, statues, automobiles, and other structures made of stone and metal",
      "Wooden houses",
      "Plastic containers",
      "Textile factories"
    ],
    "correctAnswer": "Buildings, statues, automobiles, and other structures made of stone and metal"
  },
  {
    "id": 13,
    "questionText": "What is the progressive warming of Earth's surface due to the blanketing effect of CO₂ and CH₄ called?",
    "options": [
      "Ozone depletion",
      "Acid rain",
      "Global warming (Greenhouse Effect)",
      "Air pollution"
    ],
    "correctAnswer": "Global warming (Greenhouse Effect)"
  },
  {
    "id": 14,
    "questionText": "Which of the following is a greenhouse gas?",
    "options": [
      "Oxygen (O₂)",
      "Nitrogen (N₂)",
      "Carbon dioxide (CO₂)",
      "Argon (Ar)"
    ],
    "correctAnswer": "Carbon dioxide (CO₂)"
  },
  {
    "id": 15,
    "questionText": "What is one of the major effects of global warming mentioned in the sources?",
    "options": [
      "Decrease in sea level",
      "Increase in rainfall (leading to floods)",
      "Reduction in severe weather events",
      "Improved agricultural output"
    ],
    "correctAnswer": "Increase in rainfall (leading to floods)"
  },
  {
    "id": 16,
    "questionText": "Methane (CH₄) contributes to global warming because:",
    "options": [
      "It absorbs thermal radiation.",
      "It increases the decay of vegetation matter.",
      "It is a very reactive gas.",
      "It blocks sunlight."
    ],
    "correctAnswer": "It absorbs thermal radiation."
  },
  {
    "id": 17,
    "questionText": "What is a key strategy to reduce environmental issues related to CO₂?",
    "options": [
      "Burning more fossil fuels",
      "Planting trees",
      "Using more catalytic converters for CO",
      "Increasing industrial output"
    ],
    "correctAnswer": "Planting trees"
  },
  {
    "id": 18,
    "questionText": "How do catalytic converters in automobiles help reduce air pollution?",
    "options": [
      "Increase nitrogen oxides",
      "Reduce carbon dioxide",
      "Convert harmful gases like CO and hydrocarbons into less harmful substances",
      "Increase sulphur dioxide emissions"
    ],
    "correctAnswer": "Convert harmful gases like CO and hydrocarbons into less harmful substances"
  },
  {
    "id": 19,
    "questionText": "What is an Air Quality Index (AQI)?",
    "options": [
      "A rating system that shows bad is the atmosphere around you.",
      "A measure of rainfall.",
      "A measure of ozone levels only.",
      "An indicator of water purity."
    ],
    "correctAnswer": "A rating system that shows bad is the atmosphere around you."
  },
  {
    "id": 20,
    "questionText": "Which activity can help reduce the intensity of outdoor air pollution?",
    "options": [
      "Increasing vehicle use",
      "Reducing outdoor activity on bad air quality days",
      "Burning more waste",
      "Using aerosols"
    ],
    "correctAnswer": "Reducing outdoor activity on bad air quality days"
  },
  {
    "id": 21,
    "questionText": "N95 masks are recommended for protection against which pollutant?",
    "options": [
      "Carbon monoxide",
      "Particulate matter",
      "Nitrogen oxides",
      "Sulphur dioxide"
    ],
    "correctAnswer": "Particulate matter"
  },
  {
    "id": 22,
    "questionText": "What is a major source of carbon dioxide in the atmosphere?",
    "options": [
      "Volcanic activity",
      "Burning of fossil fuels",
      "Ocean evaporation",
      "Respiration by plants"
    ],
    "correctAnswer": "Burning of fossil fuels"
  },
  {
    "id": 23,
    "questionText": "Which pollutant can cause irreversible lung damage and respiratory problems?",
    "options": [
      "Carbon dioxide",
      "Carbon monoxide",
      "Particulate matter",
      "Water vapor"
    ],
    "correctAnswer": "Particulate matter"
  },
  {
    "id": 24,
    "questionText": "How does ozone (O₃) act as an air pollutant in the lower atmosphere?",
    "options": [
      "It cools the Earth.",
      "It causes respiratory problems, chest pain, and congestion.",
      "It increases plant growth.",
      "It reduces UV radiation."
    ],
    "correctAnswer": "It causes respiratory problems, chest pain, and congestion."
  },
  {
    "id": 25,
    "questionText": "Which gas is released during the decomposition of vegetation and waste gases from digestion in animals?",
    "options": [
      "Carbon dioxide",
      "Methane",
      "Oxygen",
      "Nitrogen"
    ],
    "correctAnswer": "Methane"
  },
  {
    "id": 26,
    "questionText": "Which type of pollution helps in understanding the causes, effects, and solutions of different types of pollution?",
    "options": [
      "Organic Chemistry",
      "Environmental Chemistry",
      "Analytical Chemistry",
      "Physical Chemistry"
    ],
    "correctAnswer": "Environmental Chemistry"
  },
  {
    "id": 27,
    "questionText": "What happens when SO₂ and NO₂ gases mix with moisture in the air?",
    "options": [
      "They form clean air.",
      "They form acid rain droplets.",
      "They precipitate as solid particles.",
      "They turn into oxygen."
    ],
    "correctAnswer": "They form acid rain droplets."
  },
  {
    "id": 28,
    "questionText": "One of the ways acid rain affects aquatic life is by:",
    "options": [
      "Increasing the pH of water.",
      "Making water too acidic for animals to live in.",
      "Increasing oxygen levels in water.",
      "Promoting growth of new aquatic species."
    ],
    "correctAnswer": "Making water too acidic for animals to live in."
  },
  {
    "id": 29,
    "questionText": "The Taj Mahal in Agra (India) is an example of a human-made structure damaged by:",
    "options": [
      "Earthquakes",
      "Acid rain",
      "Flooding",
      "Strong winds"
    ],
    "correctAnswer": "Acid rain"
  },
  {
    "id": 30,
    "questionText": "Greenhouse gases include carbon dioxide and methane. What do these gases do in the atmosphere?",
    "options": [
      "Allow sunlight to pass through but trap heat radiated from Earth.",
      "Reflect all sunlight back into space.",
      "Produce more oxygen.",
      "Decrease atmospheric temperature."
    ],
    "correctAnswer": "Allow sunlight to pass through but trap heat radiated from Earth."
  },
  {
    "id": 31,
    "questionText": "What is a major reason for the increase in carbon dioxide concentration in the atmosphere over the last 300 years?",
    "options": [
      "Increased volcanic activity",
      "Large amount of coal, oil and natural gas burning",
      "Increased plant respiration",
      "Decreased ocean absorption"
    ],
    "correctAnswer": "Large amount of coal, oil and natural gas burning"
  },
  {
    "id": 32,
    "questionText": "Which global warming effect can lead to worldwide floods?",
    "options": [
      "Increase in temperature",
      "Rise in sea level",
      "Increase in rainfall",
      "Both b and c"
    ],
    "correctAnswer": "Both b and c"
  },
  {
    "id": 33,
    "questionText": "What is the main cause of the changes in weather that affect the types of crops grown in different parts of the world?",
    "options": [
      "Soil erosion",
      "Climate change",
      "Water pollution",
      "Air pollution"
    ],
    "correctAnswer": "Climate change"
  },
  {
    "id": 34,
    "questionText": "What is the function of the chlorophyll in plants regarding CO₂ and O₂?",
    "options": [
      "It produces CO₂ and releases O₂.",
      "It absorbs CO₂ and releases O₂.",
      "It absorbs O₂ and releases CO₂.",
      "It has no role in gas exchange."
    ],
    "correctAnswer": "It absorbs CO₂ and releases O₂."
  },
  {
    "id": 35,
    "questionText": "Which gas is reduced by catalytic converters to nitrogen (N₂)?",
    "options": [
      "Carbon monoxide (CO)",
      "Nitrogen oxides (NOₓ)",
      "Sulphur dioxide (SO₂)",
      "Hydrocarbons"
    ],
    "correctAnswer": "Nitrogen oxides (NOₓ)"
  },
  {
    "id": 36,
    "questionText": "What is the purpose of installing carbon monoxide detectors?",
    "options": [
      "To detect CO produced by faulty fuel burning appliances.",
      "To detect natural gas leaks.",
      "To measure humidity.",
      "To monitor oxygen levels."
    ],
    "correctAnswer": "To detect CO produced by faulty fuel burning appliances."
  },
  {
    "id": 37,
    "questionText": "Which type of pollution involves a decrease in visibility (haze) and can cause asthma?",
    "options": [
      "Carbon dioxide",
      "Carbon monoxide",
      "Particulate matter",
      "Hydrocarbons"
    ],
    "correctAnswer": "Particulate matter"
  },
  {
    "id": 38,
    "questionText": "In winter, what forms when the smoke present in the atmosphere is mixed with fog?",
    "options": [
      "Rain",
      "Snow",
      "Smog",
      "Clear sky"
    ],
    "correctAnswer": "Smog"
  },
  {
    "id": 39,
    "questionText": "What is the primary effect of oxides of nitrogen (NOₓ) on human health?",
    "options": [
      "Suffocation",
      "Damage lungs, irritate eyes and damage vegetation",
      "Cancer",
      "Heart disease"
    ],
    "correctAnswer": "Damage lungs, irritate eyes and damage vegetation"
  },
  {
    "id": 40,
    "questionText": "Acid deposition of acidic particles causes damage to:",
    "options": [
      "Underground pipes",
      "Buildings, statues, and other structures",
      "Ocean life",
      "Forests only"
    ],
    "correctAnswer": "Buildings, statues, and other structures"
  },
  {
    "id": 41,
    "questionText": "Water vapor is described as what kind of greenhouse gas?",
    "options": [
      "Minor",
      "Most abundant",
      "Artificial",
      "Non-contributing"
    ],
    "correctAnswer": "Most abundant"
  },
  {
    "id": 42,
    "questionText": "According to the source, what percentage of oxygen is present in clean, dry air?",
    "options": [
      "78.0%",
      "21.0%",
      "0.04%",
      "0.934%"
    ],
    "correctAnswer": "21.0%"
  },
  {
    "id": 43,
    "questionText": "What is a primary source of carbon monoxide in urban areas?",
    "options": [
      "Photosynthesis",
      "Industrial activities and transportation",
      "Ocean currents",
      "Forest decomposition"
    ],
    "correctAnswer": "Industrial activities and transportation"
  },
  {
    "id": 44,
    "questionText": "Which gas is primarily responsible for the greenhouse effect, along with methane?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "correctAnswer": "Carbon dioxide"
  },
  {
    "id": 45,
    "questionText": "One effect of climate change on agriculture is:",
    "options": [
      "Increased crop yields",
      "Global warming risking agricultural drought",
      "Reduced need for irrigation",
      "Shorter growing seasons"
    ],
    "correctAnswer": "Global warming risking agricultural drought"
  },
  {
    "id": 46,
    "questionText": "What percentage of marine mammals are at risk of choking with plastic, according to 'Amazing Facts about the Environment'?",
    "options": [
      "50%",
      "78%",
      "90%",
      "100%"
    ],
    "correctAnswer": "90%"
  },
  {
    "id": 47,
    "questionText": "What does desulphurization process involve?",
    "options": [
      "Adding sulphur to fuels",
      "Removing sulphur dioxide gas from exhaust gases of fossil fuels",
      "Burning sulphur-rich fuels",
      "Producing more sulphur compounds"
    ],
    "correctAnswer": "Removing sulphur dioxide gas from exhaust gases of fossil fuels"
  },
  {
    "id": 48,
    "questionText": "If the Air Quality Index (AQI) value is over 300, it is considered:",
    "options": [
      "Good",
      "Moderate",
      "Unhealthy",
      "Hazardous"
    ],
    "correctAnswer": "Hazardous"
  },
  {
    "id": 49,
    "questionText": "Keeping indoor environments healthy includes:",
    "options": [
      "Closing all windows tightly.",
      "Keeping carpets and furniture always clean.",
      "Improving air conditioning or air cleaner system.",
      "Using more air fresheners."
    ],
    "correctAnswer": "Improving air conditioning or air cleaner system."
  },
  {
    "id": 50,
    "questionText": "What is the main objective of environmental education?",
    "options": [
      "To increase industrialization",
      "To study chemicals and other pollutants in the environment",
      "To promote deforestation",
      "To encourage the use of non-renewable resources"
    ],
    "correctAnswer": "To study chemicals and other pollutants in the environment"
  }
],
  "Hydrocarbons": [
  {
    "id": 1,
    "questionText": "Hydrocarbons are organic compounds that contain which elements?",
    "options": [
      "Carbon and oxygen",
      "Carbon and hydrogen",
      "Hydrogen and oxygen",
      "Carbon, hydrogen, and oxygen"
    ],
    "correctAnswer": "Carbon and hydrogen"
  },
  {
    "id": 2,
    "questionText": "What is the general definition of organic chemistry?",
    "options": [
      "The chemistry of elements other than carbon.",
      "The chemistry of compounds that do not contain carbon.",
      "The chemistry of carbon compounds.",
      "The chemistry of inorganic compounds."
    ],
    "correctAnswer": "The chemistry of carbon compounds."
  },
  {
    "id": 3,
    "questionText": "Which of the following is an example of an inorganic compound?",
    "options": [
      "Methane (CH₄)",
      "Carbonates",
      "Glucose (C₆H₁₂O₆)",
      "Proteins"
    ],
    "correctAnswer": "Carbonates"
  },
  {
    "id": 4,
    "questionText": "Hydrocarbons are classified into which structural types?",
    "options": [
      "Alkanes, alcohols, aldehydes",
      "Alkenes, ketones, ethers",
      "Alkanes, alkenes, alkynes, aromatic hydrocarbons",
      "Acids, bases, salts"
    ],
    "correctAnswer": "Alkanes, alkenes, alkynes, aromatic hydrocarbons"
  },
  {
    "id": 5,
    "questionText": "What is the simplest alkane?",
    "options": [
      "Ethane",
      "Methane",
      "Propane",
      "Butane"
    ],
    "correctAnswer": "Methane"
  },
  {
    "id": 6,
    "questionText": "What is the general formula for alkanes?",
    "options": [
      "CnH₂n",
      "CnH₂n-₂",
      "CnH₂n+₂",
      "CnHn"
    ],
    "correctAnswer": "CnH₂n+₂"
  },
  {
    "id": 7,
    "questionText": "Alkanes are known as saturated hydrocarbons because they contain:",
    "options": [
      "Double bonds",
      "Triple bonds",
      "Only single carbon-carbon bonds",
      "Ring structures"
    ],
    "correctAnswer": "Only single carbon-carbon bonds"
  },
  {
    "id": 8,
    "questionText": "According to IUPAC nomenclature, what is the root name for a hydrocarbon with 5 carbon atoms?",
    "options": [
      "But-",
      "Pent-",
      "Hex-",
      "Hept-"
    ],
    "correctAnswer": "Pent-"
  },
  {
    "id": 9,
    "questionText": "What is the suffix used for alkanes in IUPAC nomenclature?",
    "options": [
      "-ene",
      "-yne",
      "-ol",
      "-ane"
    ],
    "correctAnswer": "-ane"
  },
  {
    "id": 10,
    "questionText": "What is the name of the organic compound CH₃-CH(CH₃)-CH₂-CH₃?",
    "options": [
      "n-Pentane",
      "Isobutane",
      "2-Methylbutane",
      "3-Methylbutane"
    ],
    "correctAnswer": "2-Methylbutane"
  },
  {
    "id": 11,
    "questionText": "Cracking is the process of breaking down which type of hydrocarbons?",
    "options": [
      "Lower molecular mass hydrocarbons",
      "Higher molecular mass hydrocarbons",
      "Saturated hydrocarbons only",
      "Unsaturated hydrocarbons only"
    ],
    "correctAnswer": "Higher molecular mass hydrocarbons"
  },
  {
    "id": 12,
    "questionText": "In cracking, what is used as a catalyst and at what temperature range?",
    "options": [
      "Zeolite, 50-100°C",
      "Zeolite, around 500°C",
      "Platinum, 200°C",
      "Nickel, 500°C"
    ],
    "correctAnswer": "Zeolite, around 500°C"
  },
  {
    "id": 13,
    "questionText": "Reduction of alkenes and alkynes to alkanes involves which catalyst?",
    "options": [
      "Zeolite",
      "Platinum",
      "Nickel",
      "Iron"
    ],
    "correctAnswer": "Nickel"
  },
  {
    "id": 14,
    "questionText": "The addition of hydrogen to alkenes or alkynes is called what type of reaction?",
    "options": [
      "Oxidation",
      "Reduction",
      "Cracking",
      "Halogenation"
    ],
    "correctAnswer": "Reduction"
  },
  {
    "id": 15,
    "questionText": "Alkyl halides (R-X) can be reduced to alkanes by reacting with hydrogen generated by which metal and acid combination?",
    "options": [
      "Ni / H₂SO₄",
      "Zn / HCl",
      "Fe / HNO₃",
      "Pt / H₂O"
    ],
    "correctAnswer": "Zn / HCl"
  },
  {
    "id": 16,
    "questionText": "Alkanes are sometimes referred to as 'paraffins'. What does this term mean?",
    "options": [
      "Highly reactive",
      "Little affinity",
      "Highly soluble",
      "Strong bonds"
    ],
    "correctAnswer": "Little affinity"
  },
  {
    "id": 17,
    "questionText": "Halogenation of alkanes is what type of reaction?",
    "options": [
      "Addition reaction",
      "Elimination reaction",
      "Substitution reaction",
      "Combustion reaction"
    ],
    "correctAnswer": "Substitution reaction"
  },
  {
    "id": 18,
    "questionText": "Which condition is required for the halogenation of alkanes (specifically methane reacting with chlorine)?",
    "options": [
      "High temperature",
      "UV light (photochemical reaction)",
      "Catalyst",
      "High pressure"
    ],
    "correctAnswer": "UV light (photochemical reaction)"
  },
  {
    "id": 19,
    "questionText": "What are the products of the complete combustion of alkanes in oxygen or air?",
    "options": [
      "CO and H₂O",
      "CO₂ and H₂O",
      "Carbon and H₂O",
      "Alcohol and H₂O"
    ],
    "correctAnswer": "CO₂ and H₂O"
  },
  {
    "id": 20,
    "questionText": "What is the main cause of explosion at homes when gas leakage occurs, regarding natural gas (methane)?",
    "options": [
      "Its smell",
      "Its flammability",
      "Its density",
      "Its color"
    ],
    "correctAnswer": "Its flammability"
  },
  {
    "id": 21,
    "questionText": "Which of the following is NOT an unreactive property of alkanes?",
    "options": [
      "No reaction site in alkane molecules.",
      "Electro-negativity values of carbon and hydrogen do not differ appreciably.",
      "C-C and C-H bonds are almost equally shared.",
      "They react vigorously with acids and bases."
    ],
    "correctAnswer": "They react vigorously with acids and bases."
  },
  {
    "id": 22,
    "questionText": "What does the structural formula show about a compound?",
    "options": [
      "Only the elements present.",
      "The number of atoms of each element.",
      "The arrangement of atoms and the bonds present.",
      "Its molecular mass."
    ],
    "correctAnswer": "The arrangement of atoms and the bonds present."
  },
  {
    "id": 23,
    "questionText": "Natural gas is primarily composed of which hydrocarbon?",
    "options": [
      "Ethane",
      "Propane",
      "Methane",
      "Butane"
    ],
    "correctAnswer": "Methane"
  },
  {
    "id": 24,
    "questionText": "LPG (Liquefied Petroleum Gas) is an example of a mixture of which type of hydrocarbons?",
    "options": [
      "Alkenes",
      "Aromatics",
      "Alkanes",
      "Alkynes"
    ],
    "correctAnswer": "Alkanes"
  },
  {
    "id": 25,
    "questionText": "When naming alkanes, how is the longest continuous chain identified?",
    "options": [
      "By finding the chain with the most methyl groups.",
      "By finding the chain with the most carbon atoms.",
      "By selecting the chain that forms a branch.",
      "By choosing the shortest chain."
    ],
    "correctAnswer": "By finding the chain with the most carbon atoms."
  },
  {
    "id": 26,
    "questionText": "What is a substituent in organic nomenclature?",
    "options": [
      "The main chain of carbon atoms.",
      "A group attached to the main chain.",
      "A double bond.",
      "A triple bond."
    ],
    "correctAnswer": "A group attached to the main chain."
  },
  {
    "id": 27,
    "questionText": "What is the structural formula of ethane?",
    "options": [
      "CH₄",
      "C₂H₆",
      "C₃H₈",
      "C₄H₁₀"
    ],
    "correctAnswer": "C₂H₆"
  },
  {
    "id": 28,
    "questionText": "During the cracking of higher hydrocarbons, what are the products?",
    "options": [
      "Alkanes only",
      "Alkenes only",
      "Both alkanes and alkenes",
      "Aromatics"
    ],
    "correctAnswer": "Both alkanes and alkenes"
  },
  {
    "id": 29,
    "questionText": "What does the term 'hydrogenation' mean in the context of preparing alkanes?",
    "options": [
      "Removal of hydrogen",
      "Addition of hydrogen",
      "Reaction with halogens",
      "Cracking of hydrocarbons"
    ],
    "correctAnswer": "Addition of hydrogen"
  },
  {
    "id": 30,
    "questionText": "Which is an example of reduction of an alkyl halide to an alkane?",
    "options": [
      "CH₃Cl + Cl₂ → CH₂Cl₂ + HCl",
      "CH₄ + Cl₂ → CH₃Cl + HCl",
      "R-X + 2[H] (from Zn/HCl) → R-H + HX",
      "C₂H₄ + H₂ → C₂H₆"
    ],
    "correctAnswer": "R-X + 2[H] (from Zn/HCl) → R-H + HX"
  },
  {
    "id": 31,
    "questionText": "What is the chemical formula for chloroform, a product of methane halogenation?",
    "options": [
      "CH₃Cl",
      "CH₂Cl₂",
      "CHCl₃",
      "CCl₄"
    ],
    "correctAnswer": "CHCl₃"
  },
  {
    "id": 32,
    "questionText": "What is produced in excess when alkanes burn in air or oxygen?",
    "options": [
      "Heat",
      "Cold",
      "Light only",
      "Odor"
    ],
    "correctAnswer": "Heat"
  },
  {
    "id": 33,
    "questionText": "Alkanes are classified as what type of hydrocarbons?",
    "options": [
      "Unsaturated",
      "Saturated",
      "Aromatic",
      "Cyclic"
    ],
    "correctAnswer": "Saturated"
  },
  {
    "id": 34,
    "questionText": "The melting points and boiling points of organic compounds are generally:",
    "options": [
      "High",
      "Low",
      "Variable",
      "Very high"
    ],
    "correctAnswer": "Low"
  },
  {
    "id": 35,
    "questionText": "Which statement describes the behavior of alkanes?",
    "options": [
      "They are highly reactive.",
      "They are very soluble in water.",
      "They undergo combustion reactions.",
      "They readily add halogens."
    ],
    "correctAnswer": "They undergo combustion reactions."
  },
  {
    "id": 36,
    "questionText": "What is the common name for CH₃CH₂CH₂CH₃?",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "n-Butane"
    ],
    "correctAnswer": "n-Butane"
  },
  {
    "id": 37,
    "questionText": "What happens to the melting and boiling points of alkanes as their molecular mass increases?",
    "options": [
      "They decrease.",
      "They increase.",
      "They remain constant.",
      "They fluctuate randomly."
    ],
    "correctAnswer": "They increase."
  },
  {
    "id": 38,
    "questionText": "Which of the following is an example of an unsaturated hydrocarbon?",
    "options": [
      "Methane",
      "Ethane",
      "Ethene (C₂H₄)",
      "Propane"
    ],
    "correctAnswer": "Ethene (C₂H₄)"
  },
  {
    "id": 39,
    "questionText": "Organic compounds are found in all forms of life and are essential for:",
    "options": [
      "Manufacturing plastics",
      "Extracting metals",
      "Life",
      "Industrial catalysts"
    ],
    "correctAnswer": "Life"
  },
  {
    "id": 40,
    "questionText": "How many carbon atoms are in the root name \"Hept-\"?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 41,
    "questionText": "What type of compounds are formed when alkyl halides are reduced?",
    "options": [
      "Alkenes",
      "Alkynes",
      "Alcohols",
      "Alkanes"
    ],
    "correctAnswer": "Alkanes"
  },
  {
    "id": 42,
    "questionText": "In the reaction CH₄ + Cl₂ → CH₃Cl + HCl, what role does UV light play?",
    "options": [
      "It is a catalyst.",
      "It provides heat.",
      "It initiates the photochemical substitution reaction.",
      "It speeds up the reaction."
    ],
    "correctAnswer": "It initiates the photochemical substitution reaction."
  },
  {
    "id": 43,
    "questionText": "If a hydrocarbon has the general formula CnH₂n, what type of hydrocarbon is it?",
    "options": [
      "Alkane",
      "Alkene",
      "Alkyne",
      "Aromatic"
    ],
    "correctAnswer": "Alkene"
  },
  {
    "id": 44,
    "questionText": "Which of the following is NOT a method for preparing alkanes?",
    "options": [
      "Cracking of higher hydrocarbons",
      "Reduction of alkenes",
      "Direct reaction with acids",
      "Reduction of alkyl halides"
    ],
    "correctAnswer": "Direct reaction with acids"
  },
  {
    "id": 45,
    "questionText": "What is the maximum number of carbon atoms in a naphtha fraction typically used for cracking?",
    "options": [
      "1-4 carbon atoms",
      "5-10 carbon atoms",
      "11-15 carbon atoms",
      "More than 15 carbon atoms"
    ],
    "correctAnswer": "More than 15 carbon atoms"
  },
  {
    "id": 46,
    "questionText": "How does the presence of branches affect the reactivity of alkanes?",
    "options": [
      "Increases reactivity",
      "Decreases reactivity",
      "Has no effect on reactivity (The source states \"their lack of reactivity towards usual chemical reagents.\" 150)",
      "Makes them explosive"
    ],
    "correctAnswer": "Has no effect on reactivity (The source states \"their lack of reactivity towards usual chemical reagents.\" 150)"
  },
  {
    "id": 47,
    "questionText": "What is the systematic way of nomenclature called for alkanes?",
    "options": [
      "Common naming",
      "IUPAC system",
      "Branch naming",
      "Organic naming"
    ],
    "correctAnswer": "IUPAC system"
  },
  {
    "id": 48,
    "questionText": "Which of the following describes the bonding in alkanes?",
    "options": [
      "Only double bonds",
      "Only triple bonds",
      "Only single bonds",
      "Alternating single and double bonds"
    ],
    "correctAnswer": "Only single bonds"
  },
  {
    "id": 49,
    "questionText": "What is a common product of the incomplete combustion of hydrocarbons?",
    "options": [
      "Carbon dioxide",
      "Water",
      "Carbon monoxide",
      "Oxygen"
    ],
    "correctAnswer": "Carbon monoxide"
  },
  {
    "id": 50,
    "questionText": "What type of compounds are proteins, carbohydrates, lipids, and nucleic acids?",
    "options": [
      "Inorganic compounds",
      "Simple salts",
      "Biomolecules (organic compounds)",
      "Metals"
    ],
    "correctAnswer": "Biomolecules (organic compounds)"
  }
],
  "Empirical Data Collection and Analysis": [
  {
    "id": 1,
    "questionText": "What is the purpose of using a standardized system of units in chemistry?",
    "options": [
      "To make calculations more complex.",
      "To ensure better communication and collaboration globally.",
      "To confuse students.",
      "To limit the types of measurements that can be made."
    ],
    "correctAnswer": "To ensure better communication and collaboration globally."
  },
  {
    "id": 2,
    "questionText": "What does SI stand for in the context of units?",
    "options": [
      "Standardized Information",
      "Scientific Inquiry",
      "International System of Units",
      "System of Instruments"
    ],
    "correctAnswer": "International System of Units"
  },
  {
    "id": 3,
    "questionText": "How many base units are there in the SI system for physical quantities?",
    "options": [
      "Five",
      "Seven",
      "Ten",
      "Twelve"
    ],
    "correctAnswer": "Seven"
  },
  {
    "id": 4,
    "questionText": "Which of the following is an SI base unit for length?",
    "options": [
      "Kilogram (kg)",
      "Second (s)",
      "Metre (m)",
      "Kelvin (K)"
    ],
    "correctAnswer": "Metre (m)"
  },
  {
    "id": 5,
    "questionText": "What is the SI base unit for mass?",
    "options": [
      "Gram (g)",
      "Pound (lb)",
      "Kilogram (kg)",
      "Newton (N)"
    ],
    "correctAnswer": "Kilogram (kg)"
  },
  {
    "id": 6,
    "questionText": "What is the SI base unit for time?",
    "options": [
      "Hour (h)",
      "Minute (min)",
      "Second (s)",
      "Day (d)"
    ],
    "correctAnswer": "Second (s)"
  },
  {
    "id": 7,
    "questionText": "What is the SI base unit for temperature?",
    "options": [
      "Celsius (°C)",
      "Fahrenheit (°F)",
      "Kelvin (K)",
      "Rankine (°R)"
    ],
    "correctAnswer": "Kelvin (K)"
  },
  {
    "id": 8,
    "questionText": "What is the SI base unit for amount of substance?",
    "options": [
      "Gram (g)",
      "Kilogram (kg)",
      "Mole (mol)",
      "Litre (L)"
    ],
    "correctAnswer": "Mole (mol)"
  },
  {
    "id": 9,
    "questionText": "Which of the following is a derived unit in the SI system?",
    "options": [
      "Metre",
      "Kilogram",
      "Volume",
      "Second"
    ],
    "correctAnswer": "Volume"
  },
  {
    "id": 10,
    "questionText": "What is the derived SI unit for density?",
    "options": [
      "kg m",
      "kg/m³",
      "g/cm²",
      "kg/L"
    ],
    "correctAnswer": "kg/m³"
  },
  {
    "id": 11,
    "questionText": "The prefix \"kilo\" (k) represents which power of ten?",
    "options": [
      "10¹",
      "10²",
      "10³",
      "10⁶"
    ],
    "correctAnswer": "10³"
  },
  {
    "id": 12,
    "questionText": "The prefix \"milli\" (m) represents which power of ten?",
    "options": [
      "10⁻¹",
      "10⁻²",
      "10⁻³",
      "10⁻⁶"
    ],
    "correctAnswer": "10⁻³"
  },
  {
    "id": 13,
    "questionText": "How do you convert a Celsius temperature to Kelvin?",
    "options": [
      "K = °C - 273",
      "K = °C + 273",
      "K = °C × 1.8",
      "K = °C / 273"
    ],
    "correctAnswer": "K = °C + 273"
  },
  {
    "id": 14,
    "questionText": "What is the SI unit for force?",
    "options": [
      "Pascal (Pa)",
      "Joule (J)",
      "Newton (N)",
      "Watt (W)"
    ],
    "correctAnswer": "Newton (N)"
  },
  {
    "id": 15,
    "questionText": "What is the SI unit for pressure?",
    "options": [
      "Newton (N)",
      "Joule (J)",
      "Pascal (Pa)",
      "Kilogram (kg)"
    ],
    "correctAnswer": "Pascal (Pa)"
  },
  {
    "id": 16,
    "questionText": "Accuracy in measurement refers to:",
    "options": [
      "How close measurements are to each other.",
      "How close a measurement is to the true or known value.",
      "The precision of the measuring instrument.",
      "The number of significant figures."
    ],
    "correctAnswer": "How close a measurement is to the true or known value."
  },
  {
    "id": 17,
    "questionText": "Precision in measurement refers to:",
    "options": [
      "How close a measurement is to the true value.",
      "How many times a measurement is repeated.",
      "How close measurements are to each other (reproducibility).",
      "The skill of the experimenter."
    ],
    "correctAnswer": "How close measurements are to each other (reproducibility)."
  },
  {
    "id": 18,
    "questionText": "An error that occurs due to faulty equipment or incorrect calibration is classified as a:",
    "options": [
      "Random error",
      "Systematic error",
      "Human error",
      "Calculation error"
    ],
    "correctAnswer": "Systematic error"
  },
  {
    "id": 19,
    "questionText": "Which type of error is caused by unpredictable changes during an experiment, such as fluctuations in temperature or pressure?",
    "options": [
      "Systematic error",
      "Random error",
      "Personal error",
      "Calibration error"
    ],
    "correctAnswer": "Random error"
  },
  {
    "id": 20,
    "questionText": "A measurement of 27cm³ is taken when the true value is 26cm³. This measurement is considered:",
    "options": [
      "Accurate and precise",
      "Not accurate but precise",
      "Accurate but not precise",
      "Not accurate (it deviates from the true value)"
    ],
    "correctAnswer": "Not accurate (it deviates from the true value)"
  },
  {
    "id": 21,
    "questionText": "If a student takes multiple readings (17.3, 17.4, 17.2) for an object with an exact mass of 20g, their measurements are considered:",
    "options": [
      "Accurate and precise",
      "Not accurate but precise (the readings are close to each other, but far from 20g)",
      "Accurate but not precise",
      "Neither accurate nor precise"
    ],
    "correctAnswer": "Not accurate but precise (the readings are close to each other, but far from 20g)"
  },
  {
    "id": 22,
    "questionText": "What is the unit of measurement of volume in chemistry, derived from the SI unit for length?",
    "options": [
      "Litre (L)",
      "Cubic metre (m³)",
      "Millilitre (mL)",
      "Gallon (gal)"
    ],
    "correctAnswer": "Cubic metre (m³)"
  },
  {
    "id": 23,
    "questionText": "The SI system is a metric system, meaning it is based around what number for convenience?",
    "options": [
      "2",
      "5",
      "10",
      "100"
    ],
    "correctAnswer": "10"
  },
  {
    "id": 24,
    "questionText": "Which SI prefix represents 10⁻⁹?",
    "options": [
      "Micro",
      "Nano",
      "Pico",
      "Centi"
    ],
    "correctAnswer": "Nano"
  },
  {
    "id": 25,
    "questionText": "Which SI prefix represents 10⁶?",
    "options": [
      "Kilo",
      "Mega",
      "Giga",
      "Tera"
    ],
    "correctAnswer": "Mega"
  },
  {
    "id": 26,
    "questionText": "Why is it essential to measure the masses of reacting elements in chemistry?",
    "options": [
      "To determine their color.",
      "To know the type of chemical bond.",
      "To calculate the amount of reactants and products.",
      "To identify their physical state."
    ],
    "correctAnswer": "To calculate the amount of reactants and products."
  },
  {
    "id": 27,
    "questionText": "What is the symbol for the SI prefix \"deci\"?",
    "options": [
      "D",
      "d",
      "da",
      "c"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 28,
    "questionText": "What is the symbol for the SI prefix \"hecto\"?",
    "options": [
      "H",
      "h",
      "he",
      "Hc"
    ],
    "correctAnswer": "h"
  },
  {
    "id": 29,
    "questionText": "Which of the following is NOT an SI base unit used in Chemistry?",
    "options": [
      "Mass",
      "Volume",
      "Length",
      "Pressure"
    ],
    "correctAnswer": "Volume"
  },
  {
    "id": 30,
    "questionText": "What happens if two students use the same tool but obtain different measurements for the same object?",
    "options": [
      "It indicates a systematic error.",
      "It indicates a random error.",
      "It indicates a precise measurement.",
      "It indicates an accurate measurement."
    ],
    "correctAnswer": "It indicates a random error."
  },
  {
    "id": 31,
    "questionText": "What is a \"mole\" in the context of the SI system?",
    "options": [
      "A unit of mass.",
      "A unit of length.",
      "The base unit of amount of pure substance.",
      "A unit of temperature."
    ],
    "correctAnswer": "The base unit of amount of pure substance."
  },
  {
    "id": 32,
    "questionText": "Avogadro's number is defined as approximately:",
    "options": [
      "6.022 × 10²³ particles",
      "6.022 × 10⁻²³ particles",
      "1.602 × 10⁻¹⁹ particles",
      "1.67 × 10⁻²⁷ particles"
    ],
    "correctAnswer": "6.022 × 10²³ particles"
  },
  {
    "id": 33,
    "questionText": "Which unit of energy is typically used in the SI system?",
    "options": [
      "Calorie",
      "Erg",
      "Joule (J)",
      "BTU"
    ],
    "correctAnswer": "Joule (J)"
  },
  {
    "id": 34,
    "questionText": "What is the SI symbol for metre?",
    "options": [
      "M",
      "m",
      "Mt",
      "Mr"
    ],
    "correctAnswer": "m"
  },
  {
    "id": 35,
    "questionText": "The definition of 1 kilogram (kg) is based on the mass of a block kept in which country?",
    "options": [
      "United States",
      "United Kingdom",
      "France",
      "Germany"
    ],
    "correctAnswer": "France"
  },
  {
    "id": 36,
    "questionText": "The time that elapses during 9,192,631,770 cycles of the radiation produced by the transition between two levels of the cesium-133 atom defines which SI base unit?",
    "options": [
      "Metre",
      "Second",
      "Kelvin",
      "Mole"
    ],
    "correctAnswer": "Second"
  },
  {
    "id": 37,
    "questionText": "What is the triple point of water used to define?",
    "options": [
      "Metre",
      "Kilogram",
      "Kelvin",
      "Second"
    ],
    "correctAnswer": "Kelvin"
  },
  {
    "id": 38,
    "questionText": "What is the relationship between cubic centimetre (cm³) and cubic metre (m³)?",
    "options": [
      "1 m³ = 100 cm³",
      "1 m³ = 1000 cm³",
      "1 m³ = 1,000,000 cm³",
      "1 cm³ = 1 m³"
    ],
    "correctAnswer": "1 m³ = 1,000,000 cm³"
  },
  {
    "id": 39,
    "questionText": "Which of the following describes a 'good' measurement?",
    "options": [
      "It has many random errors.",
      "It has only systematic errors.",
      "It is both accurate and precise.",
      "It is just precise, regardless of accuracy."
    ],
    "correctAnswer": "It is both accurate and precise."
  },
  {
    "id": 40,
    "questionText": "If you have a given substance and you need to find the amount of solute dissolved in 100g of solvent at a particular temperature, what are you trying to determine?",
    "options": [
      "Density",
      "Solubility",
      "Volume",
      "Mass"
    ],
    "correctAnswer": "Solubility"
  },
  {
    "id": 41,
    "questionText": "What is the appropriate SI prefix for 10⁻¹²?",
    "options": [
      "Nano",
      "Pico",
      "Micro",
      "Femto"
    ],
    "correctAnswer": "Pico"
  },
  {
    "id": 42,
    "questionText": "What is the correct way to write \"100 millimeters\"?",
    "options": [
      "100 mms",
      "100 mm",
      "100 MM",
      "100 M.M."
    ],
    "correctAnswer": "100 mm"
  },
  {
    "id": 43,
    "questionText": "Which derived unit is correctly matched with its quantity?",
    "options": [
      "Volume - cm²",
      "Density - kg/L",
      "Energy - Joule (J)",
      "Area - m³"
    ],
    "correctAnswer": "Energy - Joule (J)"
  },
  {
    "id": 44,
    "questionText": "What is the value of 65°C in Kelvin?",
    "options": [
      "208 K",
      "338 K",
      "300 K",
      "273 K"
    ],
    "correctAnswer": "338 K"
  },
  {
    "id": 45,
    "questionText": "What is the definition of a \"unified atomic mass unit\" (amu)?",
    "options": [
      "The mass of one proton.",
      "The mass of one electron.",
      "A new scale equal to 1/12th of the mass of C-12.",
      "The average mass of an atom."
    ],
    "correctAnswer": "A new scale equal to 1/12th of the mass of C-12."
  },
  {
    "id": 46,
    "questionText": "Revised Question: Which of the following is a key aspect for chemists to achieve consistent and accurate scientific models?",
    "options": [
      "Using local measurement systems only.",
      "Avoiding collaboration.",
      "Using standardized units to measure and communicate results.",
      "Relying solely on intuition."
    ],
    "correctAnswer": "Using standardized units to measure and communicate results."
  },
  {
    "id": 47,
    "questionText": "When presenting a long measurement, such as 0.000840, in scientific notation, what is the correct format?",
    "options": [
      "8.40 x 10⁻⁴",
      "84.0 x 10⁻⁵",
      "8.40 x 10⁻³",
      "0.840 x 10⁻³"
    ],
    "correctAnswer": "8.40 x 10⁻⁴"
  },
  {
    "id": 48,
    "questionText": "If a student fails to follow instructions during an experiment, what can occur?",
    "options": [
      "Systematic error",
      "Random error",
      "Making mistakes (leading to accidents)",
      "High precision"
    ],
    "correctAnswer": "Making mistakes (leading to accidents)"
  },
  {
    "id": 49,
    "questionText": "Which of the following is NOT listed as one of the seven base units in the SI system used for physical quantities in chemistry?",
    "options": [
      "Length",
      "Time",
      "Temperature",
      "Volume (volume is a derived unit)"
    ],
    "correctAnswer": "Volume (volume is a derived unit)"
  },
  {
    "id": 50,
    "questionText": "What is the most common SI unit for energy?",
    "options": [
      "Calorie",
      "Joule",
      "Kilojoule",
      "Electronvolt"
    ],
    "correctAnswer": "Joule"
  }
],
  "Laboratory and Practical Skills": [
  {
    "id": 1,
    "questionText": "What is the primary purpose of safety instructions in a chemistry laboratory?",
    "options": [
      "To make experiments more difficult.",
      "To ensure safe working practices and prevent accidents.",
      "To limit student access to chemicals.",
      "To speed up experiments."
    ],
    "correctAnswer": "To ensure safe working practices and prevent accidents."
  },
  {
    "id": 2,
    "questionText": "Which of the following is an example of a flammable chemical hazard?",
    "options": [
      "Acids",
      "Bases",
      "Picric acid",
      "Water"
    ],
    "correctAnswer": "Picric acid"
  },
  {
    "id": 3,
    "questionText": "What action should you take if a chemical spills on your skin?",
    "options": [
      "Ignore it if it's a small amount.",
      "Wash the affected area with soap and water and seek medical attention.",
      "Let it dry naturally.",
      "Cover it with a bandage."
    ],
    "correctAnswer": "Wash the affected area with soap and water and seek medical attention."
  },
  {
    "id": 4,
    "questionText": "Corrosive chemicals are those that attack what upon contact?",
    "options": [
      "Only metals",
      "Living tissues (skin, eyes, respiratory tract, intestines)",
      "Only glass",
      "Only paper"
    ],
    "correctAnswer": "Living tissues (skin, eyes, respiratory tract, intestines)"
  },
  {
    "id": 5,
    "questionText": "Which of the following is an example of a toxic chemical?",
    "options": [
      "Water",
      "Sugar",
      "Mercury",
      "Sodium chloride"
    ],
    "correctAnswer": "Mercury"
  },
  {
    "id": 6,
    "questionText": "What is a key safety instruction when working with reactive chemicals?",
    "options": [
      "Store them loosely.",
      "Segregate them from other chemicals while storage.",
      "Mix them with other chemicals to neutralize.",
      "Store them near heat sources."
    ],
    "correctAnswer": "Segregate them from other chemicals while storage."
  },
  {
    "id": 7,
    "questionText": "What are radioactive materials capable of causing?",
    "options": [
      "Increased cell growth",
      "Living tissues and organs damage",
      "Strong chemical bonds",
      "Bright light emission"
    ],
    "correctAnswer": "Living tissues and organs damage"
  },
  {
    "id": 8,
    "questionText": "Asphyxiation hazards in a laboratory are typically associated with what?",
    "options": [
      "Electrical shocks",
      "Inhalation of gas or vapors that cause unconsciousness or suffocation.",
      "Chemical burns",
      "Fires"
    ],
    "correctAnswer": "Inhalation of gas or vapors that cause unconsciousness or suffocation."
  },
  {
    "id": 9,
    "questionText": "Which chemical is an example of a chemical that can cause asphyxiation?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Hydrogen peroxide",
      "All listed (hydrogen cyanide, carbon monoxide, nitrogen, argon, helium, methane, carbon dioxide)"
    ],
    "correctAnswer": "All listed (hydrogen cyanide, carbon monoxide, nitrogen, argon, helium, methane, carbon dioxide)"
  },
  {
    "id": 10,
    "questionText": "What is the purpose of a fume cupboard in a laboratory?",
    "options": [
      "To store chemicals.",
      "To conduct experiments with flammable liquids.",
      "To avoid breathing corrosive vapors.",
      "To heat solutions."
    ],
    "correctAnswer": "To avoid breathing corrosive vapors."
  },
  {
    "id": 11,
    "questionText": "What is the meaning of a warning sign that shows a skull and crossbones?",
    "options": [
      "Flammable",
      "Toxic hazard",
      "Corrosive",
      "Radiation hazard"
    ],
    "correctAnswer": "Toxic hazard"
  },
  {
    "id": 12,
    "questionText": "Which piece of Personal Protective Equipment (PPE) is essential for protecting your eyes in the lab?",
    "options": [
      "Lab coat",
      "Face shield",
      "Protective glasses",
      "Both b and c"
    ],
    "correctAnswer": "Both b and c"
  },
  {
    "id": 13,
    "questionText": "Where should a fire extinguisher be located in a laboratory?",
    "options": [
      "In a locked cabinet.",
      "In an easily accessible location.",
      "Outside the building.",
      "Near the most flammable chemicals."
    ],
    "correctAnswer": "In an easily accessible location."
  },
  {
    "id": 14,
    "questionText": "What should be the FIRST step in an emergency situation in the lab?",
    "options": [
      "Run out of the lab.",
      "Stay calm and do not panic.",
      "Call emergency services immediately.",
      "Try to handle the situation yourself."
    ],
    "correctAnswer": "Stay calm and do not panic."
  },
  {
    "id": 15,
    "questionText": "What is the responsibility of students in the laboratory?",
    "options": [
      "Only following instructions when watched.",
      "The responsibility of the professor only.",
      "The responsibility of the lab in charge only.",
      "A shared responsibility (following instructions and safety)."
    ],
    "correctAnswer": "A shared responsibility (following instructions and safety)."
  },
  {
    "id": 16,
    "questionText": "Which of the following is considered an accident often resulting from failure to use common sense or follow instructions?",
    "options": [
      "Systematic error",
      "Random error",
      "Making mistakes",
      "High precision"
    ],
    "correctAnswer": "Making mistakes"
  },
  {
    "id": 17,
    "questionText": "What does the label \"Warning\" on a chemical bottle signify?",
    "options": [
      "That the chemical is extremely dangerous.",
      "That the chemical can cause less serious injury.",
      "That the chemical is completely safe.",
      "That the chemical is expired."
    ],
    "correctAnswer": "That the chemical can cause less serious injury."
  },
  {
    "id": 18,
    "questionText": "What does the label \"Corrosive\" on a chemical bottle indicate?",
    "options": [
      "That the material is an oxidizing agent.",
      "That the material can degrade rapidly upon exposure.",
      "That its contact destroys living tissue.",
      "That the chemical can explode."
    ],
    "correctAnswer": "That its contact destroys living tissue."
  },
  {
    "id": 19,
    "questionText": "What type of chemical is potassium cyanide?",
    "options": [
      "Flammable",
      "Corrosive",
      "Toxic",
      "Reactive"
    ],
    "correctAnswer": "Toxic"
  },
  {
    "id": 20,
    "questionText": "When diluting an acid with water, what is the correct procedure?",
    "options": [
      "Add water to acid quickly.",
      "Add acid to water slowly with stirring.",
      "Do not stir the container.",
      "Always add water to acid slowly with stirring."
    ],
    "correctAnswer": "Add acid to water slowly with stirring."
  },
  {
    "id": 21,
    "questionText": "In case of a fire drill in the lab, what action should you take?",
    "options": [
      "Continue working.",
      "Run to safety shower.",
      "Close gas valves and turn off all equipment.",
      "Carry chemicals out of the lab."
    ],
    "correctAnswer": "Close gas valves and turn off all equipment."
  },
  {
    "id": 22,
    "questionText": "What should you never do with chemicals in the lab?",
    "options": [
      "Taste or smell any compound or gas.",
      "Label them clearly.",
      "Use them carefully.",
      "Store them appropriately."
    ],
    "correctAnswer": "Taste or smell any compound or gas."
  },
  {
    "id": 23,
    "questionText": "What is a general characteristic of reactive chemicals?",
    "options": [
      "They are always stable.",
      "They may cause fires, explosions, or damage to life and property.",
      "They are harmless when diluted.",
      "They only react with water."
    ],
    "correctAnswer": "They may cause fires, explosions, or damage to life and property."
  },
  {
    "id": 24,
    "questionText": "Which type of chemical hazard involves sudden release of pressure, gas, and heat when they experience sudden shock?",
    "options": [
      "Corrosive chemicals",
      "Toxic chemicals",
      "Explosive chemicals",
      "Reactive chemicals"
    ],
    "correctAnswer": "Explosive chemicals"
  },
  {
    "id": 25,
    "questionText": "What is the primary danger associated with mercury as a toxic chemical?",
    "options": [
      "It is highly corrosive.",
      "It is flammable.",
      "It can cause serious health problems.",
      "It causes asphyxiation."
    ],
    "correctAnswer": "It can cause serious health problems."
  },
  {
    "id": 26,
    "questionText": "Why should you keep radioactive sources shielded?",
    "options": [
      "To prevent them from exploding.",
      "To avoid prolonged exposures to the radiation.",
      "To keep them cool.",
      "To make them more reactive."
    ],
    "correctAnswer": "To avoid prolonged exposures to the radiation."
  },
  {
    "id": 27,
    "questionText": "What is the purpose of a lab coat as PPE?",
    "options": [
      "To make a student look professional.",
      "To protect clothing from chemical splashes.",
      "To keep warm in the lab.",
      "To carry equipment."
    ],
    "correctAnswer": "To protect clothing from chemical splashes."
  },
  {
    "id": 28,
    "questionText": "If there is a fire in the lab, what should be done with doors and windows?",
    "options": [
      "Open them to ventilate.",
      "Close them to confine the fire.",
      "Break them for escape.",
      "Ignore them."
    ],
    "correctAnswer": "Close them to confine the fire."
  },
  {
    "id": 29,
    "questionText": "What is the role of emergency staff in a lab emergency?",
    "options": [
      "To clean up spills.",
      "To call and assist emergency staff.",
      "To document the incident.",
      "To conduct an investigation."
    ],
    "correctAnswer": "To call and assist emergency staff."
  },
  {
    "id": 30,
    "questionText": "Which of the following is a safety instruction for handling chemicals?",
    "options": [
      "Always use the largest quantity of chemicals.",
      "Always conduct experiments in a fume hood if harmful vapors are produced.",
      "Inform no one if you are working with hazardous chemicals.",
      "Store flammable liquids in the refrigerator."
    ],
    "correctAnswer": "Always conduct experiments in a fume hood if harmful vapors are produced."
  },
  {
    "id": 31,
    "questionText": "What is the most common cause of asphyxiation in a lab according to the source?",
    "options": [
      "Electrical shock",
      "Inhalation of gas or vapors",
      "Chemical burns",
      "Physical injury"
    ],
    "correctAnswer": "Inhalation of gas or vapors"
  },
  {
    "id": 32,
    "questionText": "Which gas is commonly associated with an asphyxiation hazard?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "All listed (hydrogen cyanide, carbon monoxide, nitrogen, argon, helium, methane, carbon dioxide)"
    ],
    "correctAnswer": "All listed (hydrogen cyanide, carbon monoxide, nitrogen, argon, helium, methane, carbon dioxide)"
  },
  {
    "id": 33,
    "questionText": "What is the primary purpose of gloves as PPE?",
    "options": [
      "To keep hands clean.",
      "To protect hands from chemical contact.",
      "To improve grip on glassware.",
      "To keep hands warm."
    ],
    "correctAnswer": "To protect hands from chemical contact."
  },
  {
    "id": 34,
    "questionText": "If a chemical is highly flammable, what hazard sign should it display?",
    "options": [
      "Toxic Hazard",
      "Radiation Hazard",
      "Danger (Highly flammable)",
      "Warning Corrosive"
    ],
    "correctAnswer": "Danger (Highly flammable)"
  },
  {
    "id": 35,
    "questionText": "What is an appropriate emergency procedure if a person is affected by an emergency in the lab?",
    "options": [
      "Ignore them and continue working.",
      "Provide immediate first aid if trained.",
      "Encourage them to leave the lab alone.",
      "Wait for them to recover on their own."
    ],
    "correctAnswer": "Provide immediate first aid if trained."
  },
  {
    "id": 36,
    "questionText": "Which of the following is NOT a general safety instruction in the lab?",
    "options": [
      "Store and use asphyxiant chemicals in well-ventilated areas.",
      "Wear a full lab. coat, wear glasses, and standard gloves.",
      "Dispose off the waste strictly according to the instructions.",
      "Always work alone."
    ],
    "correctAnswer": "Always work alone."
  },
  {
    "id": 37,
    "questionText": "When should protective eyewear (glasses, face mask) be worn in the lab?",
    "options": [
      "Only during complex experiments.",
      "Only when working with acids.",
      "During all laboratory work.",
      "Only when specifically instructed."
    ],
    "correctAnswer": "During all laboratory work."
  },
  {
    "id": 38,
    "questionText": "What is the meaning of the symbol showing a hand with liquid pouring onto it?",
    "options": [
      "Flammable",
      "Toxic",
      "Corrosive",
      "Reactive"
    ],
    "correctAnswer": "Corrosive"
  },
  {
    "id": 39,
    "questionText": "Which of the following describes the condition where a chemical gives off vapors towards your nose?",
    "options": [
      "It is always safe to sniff it gently.",
      "It is never advisable to sniff the vapors.",
      "Only toxic chemicals give off vapors.",
      "It means the chemical is non-reactive."
    ],
    "correctAnswer": "It is never advisable to sniff the vapors."
  },
  {
    "id": 40,
    "questionText": "When should you identify the nearest fire extinguisher and emergency shower?",
    "options": [
      "Never, just use them.",
      "Locate them before starting any laboratory work.",
      "Only in case of a fire.",
      "Only when a supervisor tells you."
    ],
    "correctAnswer": "Locate them before starting any laboratory work."
  },
  {
    "id": 41,
    "questionText": "Picric acid is an example of which type of chemical hazard?",
    "options": [
      "Corrosive",
      "Explosive",
      "Toxic",
      "Reactive"
    ],
    "correctAnswer": "Explosive"
  },
  {
    "id": 42,
    "questionText": "Benzoyl peroxide is an example of which type of chemical hazard?",
    "options": [
      "Toxic",
      "Corrosive",
      "Reactive",
      "Flammable"
    ],
    "correctAnswer": "Flammable"
  },
  {
    "id": 43,
    "questionText": "Which chemical type attacks skin, eyes, and the respiratory tract?",
    "options": [
      "Flammable",
      "Explosive",
      "Corrosive",
      "Reactive"
    ],
    "correctAnswer": "Corrosive"
  },
  {
    "id": 44,
    "questionText": "What safety equipment should be used when mixing concentrated acids with water?",
    "options": [
      "Goggles only",
      "Fume cupboard and diluting slowly",
      "Bare hands",
      "Only a lab coat"
    ],
    "correctAnswer": "Fume cupboard and diluting slowly"
  },
  {
    "id": 45,
    "questionText": "What type of chemical hazard applies to calcium hydride and sodium azide?",
    "options": [
      "Explosive",
      "Toxic",
      "Reactive",
      "Corrosive"
    ],
    "correctAnswer": "Reactive"
  },
  {
    "id": 46,
    "questionText": "What is the definition of \"asphyxiation\"?",
    "options": [
      "A type of burn injury.",
      "Unconsciousness or death through suffocation.",
      "A skin rash caused by chemicals.",
      "A form of radiation sickness."
    ],
    "correctAnswer": "Unconsciousness or death through suffocation."
  },
  {
    "id": 47,
    "questionText": "What are \"hazardous waste disposal sites\"?",
    "options": [
      "Regular trash bins.",
      "Specific locations for chemical waste.",
      "Sinks and drains.",
      "Outdoor areas."
    ],
    "correctAnswer": "Specific locations for chemical waste."
  },
  {
    "id": 48,
    "questionText": "Which of the following PPEs are used for hand protection?",
    "options": [
      "Lab coat",
      "Protective glasses",
      "Apron",
      "Gloves"
    ],
    "correctAnswer": "Gloves"
  },
  {
    "id": 49,
    "questionText": "What should be done with all equipment if a fire emergency is declared in the lab?",
    "options": [
      "Leave it as is.",
      "Turn off all equipment.",
      "Move it to a safe location.",
      "Keep only essential equipment running."
    ],
    "correctAnswer": "Turn off all equipment."
  },
  {
    "id": 50,
    "questionText": "What is the main purpose of \"emergency showers\" in a laboratory?",
    "options": [
      "To clean glassware.",
      "To wash off chemicals from the body in case of a large spill.",
      "To provide drinking water.",
      "To cool down hot apparatus."
    ],
    "correctAnswer": "To wash off chemicals from the body in case of a large spill."
  }
]
};
export const shortQuestions = {
    "Fundamentals of Chemistry": shortQuestionsData.slice(0, 3),
    "Atomic Structure": shortQuestionsData.slice(3, 6),
    "Periodic Table and Periodicity": shortQuestionsData.slice(6, 8),
    "Chemical Bonding": shortQuestionsData.slice(8, 10),
};

export const longQuestions = {
    "Fundamentals of Chemistry": longQuestionsData.slice(0, 1),
    "Atomic Structure": longQuestionsData.slice(1, 2),
    "Periodic Table and Periodicity": longQuestionsData.slice(2, 3),
    "Chemical Bonding": longQuestionsData.slice(3, 5),
};