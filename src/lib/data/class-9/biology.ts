
import { MCQ } from '@/lib/types';

export const chapters = [
  "THE SCIENCE OF BIOLOGY",
  "BIODIVERSITY",
  "THE CELL",
  "CELL CYCLE",
  "TISSUES ORGANS AND ORGAN SYSTEMS",
  "BIOMOLECULES",
  "ENZYMES",
  "BIOENERGETICS",
  "PLANT PHYSIOLOGY",
  "REPRODUCTION IN PLANTS",
  "BIOSTATISTICS",
];

export const mcqs: Record<string, MCQ[]> = {
  "THE SCIENCE OF BIOLOGY": [
  {
    "id": 1,
    "questionText": "What is Biology the study of?",
    "options": [
      "a) Structures and functions of non-living things",
      "b) Structures, functions, and interactions of living organisms",
      "c) Chemical reactions in non-living matter",
      "d) Physical forces in the universe"
    ],
    "correctAnswer": "b) Structures, functions, and interactions of living organisms"
  },
  {
    "id": 2,
    "questionText": "Which Greek words combine to form the word \"Biology\"?",
    "options": [
      "a) Bios and logus",
      "b) Bios and logos",
      "c) Bio and logy",
      "d) Bi and logos"
    ],
    "correctAnswer": "b) Bios and logos"
  },
  {
    "id": 3,
    "questionText": "The study of animals, including their structure, function, behaviour, and diversity, is known as:",
    "options": [
      "a) Botany",
      "b) Microbiology",
      "c) Ecology",
      "d) Zoology"
    ],
    "correctAnswer": "d) Zoology"
  },
  {
    "id": 4,
    "questionText": "Botany is defined as the study of:",
    "options": [
      "a) Microorganisms",
      "b) Animals",
      "c) Plants, including their structure, growth, reproduction, and interactions with the environment",
      "d) Fossils"
    ],
    "correctAnswer": "c) Plants, including their structure, growth, reproduction, and interactions with the environment"
  },
  {
    "id": 5,
    "questionText": "Which branch of biology deals with the study of microorganisms such as bacteria and microscopic fungi?",
    "options": [
      "a) Zoology",
      "b) Botany",
      "c) Microbiology",
      "d) Physiology"
    ],
    "correctAnswer": "c) Microbiology"
  },
  {
    "id": 6,
    "questionText": "The study of the form and structure of organisms is called:",
    "options": [
      "a) Anatomy",
      "b) Physiology",
      "c) Morphology",
      "d) Histology"
    ],
    "correctAnswer": "c) Morphology"
  },
  {
    "id": 7,
    "questionText": "Which branch explores the internal physical structure of organisms, particularly humans?",
    "options": [
      "a) Morphology",
      "b) Cytology",
      "c) Anatomy",
      "d) Histology"
    ],
    "correctAnswer": "c) Anatomy"
  },
  {
    "id": 8,
    "questionText": "The branch of Biology that deals with the functioning of body parts is:",
    "options": [
      "a) Histology",
      "b) Cytology",
      "c) Physiology",
      "d) Embryology"
    ],
    "correctAnswer": "c) Physiology"
  },
  {
    "id": 9,
    "questionText": "Histology is the microscopic study of:",
    "options": [
      "a) Cells",
      "b) Organs",
      "c) Tissues",
      "d) Biomolecules"
    ],
    "correctAnswer": "c) Tissues"
  },
  {
    "id": 10,
    "questionText": "The study of cells, including their fundamental structures and mechanisms of cell division, is known as:",
    "options": [
      "a) Histology",
      "b) Cytology",
      "c) Molecular Biology",
      "d) Genetics"
    ],
    "correctAnswer": "b) Cytology"
  },
  {
    "id": 11,
    "questionText": "Which branch of Biology studies biological molecules like carbohydrates, proteins, lipids, and nucleic acids?",
    "options": [
      "a) Biochemistry",
      "b) Molecular Biology",
      "c) Biophysics",
      "d) Bioinformatics"
    ],
    "correctAnswer": "a) Biochemistry"
  },
  {
    "id": 12,
    "questionText": "The study of the process of development of an organism from fertilized egg is called:",
    "options": [
      "a) Genetics",
      "b) Palaeontology",
      "c) Embryology",
      "d) Taxonomy"
    ],
    "correctAnswer": "c) Embryology"
  },
  {
    "id": 13,
    "questionText": "Genetics is the branch of Biology that deals with the study of:",
    "options": [
      "a) Fossils",
      "b) Classification of organisms",
      "c) Transfer of characteristics from parents to offspring",
      "d) Relationships between organisms and their environment"
    ],
    "correctAnswer": "c) Transfer of characteristics from parents to offspring"
  },
  {
    "id": 14,
    "questionText": "Palaeontology is the branch of Biology that deals with the study of:",
    "options": [
      "a) Living organisms",
      "b) Fossils",
      "c) Human evolution",
      "d) Genetic material"
    ],
    "correctAnswer": "b) Fossils"
  },
  {
    "id": 15,
    "questionText": "Which branch of Biology deals with the classification of organisms based on similarities and differences?",
    "options": [
      "a) Palaeontology",
      "b) Ecology",
      "c) Taxonomy",
      "d) Marine Biology"
    ],
    "correctAnswer": "c) Taxonomy"
  },
  {
    "id": 16,
    "questionText": "Ecology is the branch of Biology that deals with the relationships between organisms and their:",
    "options": [
      "a) Internal structures",
      "b) Genetic makeup",
      "c) Environment",
      "d) Reproductive patterns"
    ],
    "correctAnswer": "c) Environment"
  },
  {
    "id": 17,
    "questionText": "Which branch of Biology studies life in oceans?",
    "options": [
      "a) Ecology",
      "b) Marine Biology",
      "c) Zoology",
      "d) Botany"
    ],
    "correctAnswer": "b) Marine Biology"
  },
  {
    "id": 18,
    "questionText": "The study of diseases, their causes, and effects is called:",
    "options": [
      "a) Pharmacology",
      "b) Immunology",
      "c) Pathology",
      "d) Biochemistry"
    ],
    "correctAnswer": "c) Pathology"
  },
  {
    "id": 19,
    "questionText": "Immunology is the branch of Biology that studies the components of the:",
    "options": [
      "a) Circulatory system",
      "b) Nervous system",
      "c) Immune system",
      "d) Digestive system"
    ],
    "correctAnswer": "c) Immune system"
  },
  {
    "id": 20,
    "questionText": "Which branch studies drugs and their effects on the body?",
    "options": [
      "a) Pathology",
      "b) Pharmacology",
      "c) Biochemistry",
      "d) Biotechnology"
    ],
    "correctAnswer": "b) Pharmacology"
  },
  {
    "id": 21,
    "questionText": "Biochemistry deals with the study of the structure and reactions of different chemical substances present in:",
    "options": [
      "a) Non-living systems",
      "b) Living systems",
      "c) Industrial processes",
      "d) Geological formations"
    ],
    "correctAnswer": "b) Living systems"
  },
  {
    "id": 22,
    "questionText": "Biophysics involves the study of the principles of:",
    "options": [
      "a) Chemistry",
      "b) Physics",
      "c) Mathematics",
      "d) Geography"
    ],
    "correctAnswer": "b) Physics"
  },
  {
    "id": 23,
    "questionText": "Computational Biology uses mathematical models, algorithms, and computer simulations to understand:",
    "options": [
      "a) Chemical reactions",
      "b) Biological systems and relationships",
      "c) Geological changes",
      "d) Atmospheric phenomena"
    ],
    "correctAnswer": "b) Biological systems and relationships"
  },
  {
    "id": 24,
    "questionText": "The study of the distribution of living organisms in different geographical regions of the world is called:",
    "options": [
      "a) Ecology",
      "b) Biogeography",
      "c) Taxonomy",
      "d) Environmental Science"
    ],
    "correctAnswer": "b) Biogeography"
  },
  {
    "id": 25,
    "questionText": "Biostatistics deals with the principles of statistics to analyse and interpret data related to:",
    "options": [
      "a) Non-living experiments",
      "b) Living organisms",
      "c) Economic trends",
      "d) Astronomical observations"
    ],
    "correctAnswer": "b) Living organisms"
  },
  {
    "id": 26,
    "questionText": "Which interdisciplinary field uses living organisms or their components to develop beneficial products or processes?",
    "options": [
      "a) Bio-economics",
      "b) Biostatistics",
      "c) Biotechnology",
      "d) Bioinformatics"
    ],
    "correctAnswer": "c) Biotechnology"
  },
  {
    "id": 27,
    "questionText": "Bio-economics deals with the study of organisms from an:",
    "options": [
      "a) Environmental point of view",
      "b) Economic point of view",
      "c) Biological point of view",
      "d) Chemical point of view"
    ],
    "correctAnswer": "b) Economic point of view"
  },
  {
    "id": 28,
    "questionText": "After FSc with Biology, students can select further studies for diverse careers. Which of the following is NOT listed as a major job in Medicine and Surgery?",
    "options": [
      "a) Medical specialist",
      "b) Veterinary Medicine",
      "c) Public Health",
      "d) Environmental Science"
    ],
    "correctAnswer": "d) Environmental Science"
  },
  {
    "id": 29,
    "questionText": "A 4-year BS degree in Zoology, Fisheries or Aquaculture is required for careers in:",
    "options": [
      "a) Agriculture",
      "b) Animal Husbandry",
      "c) Horticulture",
      "d) Fisheries and Wildlife"
    ],
    "correctAnswer": "d) Fisheries and Wildlife"
  },
  {
    "id": 30,
    "questionText": "According to the Holy Quran, \"We made every living thing from water\" is mentioned in which Sura and Verse?",
    "options": [
      "a) Sura: Al-Rehman, Verse: 14",
      "b) Sura: Al-Ambia, Verse: 30",
      "c) Sura: Al-Nur, Verse: 45",
      "d) Sura: Al-Mominun, Verse: 14"
    ],
    "correctAnswer": "b) Sura: Al-Ambia, Verse: 30"
  },
  {
    "id": 31,
    "questionText": "The Human Genome Project aimed to sequence and map the entire human genome. It involved researchers from various disciplines and was completed in which year?",
    "options": [
      "a) 2000",
      "b) 2001",
      "c) 2002",
      "d) 2003"
    ],
    "correctAnswer": "d) 2003"
  },
  {
    "id": 32,
    "questionText": "What is the first step in the scientific method?",
    "options": [
      "a) Hypothesis",
      "b) Deduction",
      "c) Observations",
      "d) Experiment"
    ],
    "correctAnswer": "c) Observations"
  },
  {
    "id": 33,
    "questionText": "Qualitative observations involve observations that cannot be measured with numbers. An example is:",
    "options": [
      "a) Number of birds in a tree",
      "b) The colour and texture of a flower",
      "c) Temperature of water",
      "d) Length of a leaf"
    ],
    "correctAnswer": "b) The colour and texture of a flower"
  },
  {
    "id": 34,
    "questionText": "A tentative answer to a scientific problem is called a:",
    "options": [
      "a) Theory",
      "b) Law",
      "c) Hypothesis",
      "d) Deduction"
    ],
    "correctAnswer": "c) Hypothesis"
  },
  {
    "id": 35,
    "questionText": "Which of the following is a characteristic of a proposed hypothesis?",
    "options": [
      "a) It must always be correct.",
      "b) It cannot be tested through experiments.",
      "c) It is always a way to disprove the hypothesis.",
      "d) It is not based on available observations."
    ],
    "correctAnswer": "c) It is always a way to disprove the hypothesis."
  },
  {
    "id": 36,
    "questionText": "Scientists develop logical results from their hypotheses. Such logical results of hypotheses are called:",
    "options": [
      "a) Observations",
      "b) Experiments",
      "c) Deductions",
      "d) Theories"
    ],
    "correctAnswer": "c) Deductions"
  },
  {
    "id": 37,
    "questionText": "In the scientific method, the \"if-then\" statements are characteristic of:",
    "options": [
      "a) Hypothesis",
      "b) Deduction",
      "c) Observation",
      "d) Experiment"
    ],
    "correctAnswer": "b) Deduction"
  },
  {
    "id": 38,
    "questionText": "The most basic step of the scientific method where scientists test all hypotheses is:",
    "options": [
      "a) Observation",
      "b) Deduction",
      "c) Hypothesis formation",
      "d) Experimentation"
    ],
    "correctAnswer": "d) Experimentation"
  },
  {
    "id": 39,
    "questionText": "When scientists perform experiments, they often arrange two settings. What are they called?",
    "options": [
      "a) Control group and test group",
      "b) Sample group and population group",
      "c) Experimental group and control group",
      "d) Variable group and constant group"
    ],
    "correctAnswer": "c) Experimental group and control group"
  },
  {
    "id": 40,
    "questionText": "A scientific theory is an explanation based on facts that have been:",
    "options": [
      "a) Guessed randomly",
      "b) Accepted without proof",
      "c) Repeatedly confirmed through experiments",
      "d) Based on single observation"
    ],
    "correctAnswer": "c) Repeatedly confirmed through experiments"
  },
  {
    "id": 41,
    "questionText": "If a theory is proved again and again by experiments, it becomes a:",
    "options": [
      "a) Hypothesis",
      "b) Deduction",
      "c) Law or principle",
      "d) Observation"
    ],
    "correctAnswer": "c) Law or principle"
  },
  {
    "id": 42,
    "questionText": "Malaria is a common disease in many countries, including:",
    "options": [
      "a) India",
      "b) China",
      "c) Pakistan",
      "d) Brazil"
    ],
    "correctAnswer": "c) Pakistan"
  },
  {
    "id": 43,
    "questionText": "The only remedy for malaria from the 17th to the 20th century was:",
    "options": [
      "a) Aspirin",
      "b) Penicillin",
      "c) Quinine",
      "d) Morphine"
    ],
    "correctAnswer": "c) Quinine"
  },
  {
    "id": 44,
    "questionText": "In 1878, a French army physician Laversan discovered the microorganism that caused malaria in the blood. What name was given to this microorganism?",
    "options": [
      "a) Bacteria",
      "b) Virus",
      "c) Plasmodium",
      "d) Amoeba"
    ],
    "correctAnswer": "c) Plasmodium"
  },
  {
    "id": 45,
    "questionText": "Biologists deduced that if Plasmodium is the cause of malaria, then all malaria patients should have Plasmodium in their:",
    "options": [
      "a) Saliva",
      "b) Urine",
      "c) Blood",
      "d) Lungs"
    ],
    "correctAnswer": "c) Blood"
  },
  {
    "id": 46,
    "questionText": "Ross found that when he examined the blood of sparrows that got malaria, he found:",
    "options": [
      "a) Bacteria",
      "b) Virus",
      "c) Plasmodia",
      "d) Protozoa"
    ],
    "correctAnswer": "c) Plasmodia"
  },
  {
    "id": 47,
    "questionText": "Which mosquito transmits Plasmodium and is involved in the spread of malaria?",
    "options": [
      "a) Aedes mosquito",
      "b) Culex mosquito",
      "c) Anopheles mosquito",
      "d) All of the above"
    ],
    "correctAnswer": "c) Anopheles mosquito"
  },
  {
    "id": 48,
    "questionText": "In 1898, Italian biologists allowed an infected mosquito to bite a healthy man. This person later became ill with malaria. This experiment confirmed that:",
    "options": [
      "a) Malaria is caused by dirty water.",
      "b) Malaria is caused by a virus.",
      "c) Mosquitoes transmit Plasmodium.",
      "d) Malaria is hereditary."
    ],
    "correctAnswer": "c) Mosquitoes transmit Plasmodium."
  },
  {
    "id": 49,
    "questionText": "Which branch of Biology studies the structure and function of cells?",
    "options": [
      "a) Histology",
      "b) Cytology",
      "c) Morphology",
      "d) Anatomy"
    ],
    "correctAnswer": "b) Cytology"
  },
  {
    "id": 50,
    "questionText": "What is the outcome of a successful experiment in the scientific method?",
    "options": [
      "a) The hypothesis is rejected.",
      "b) The hypothesis is proved correct.",
      "c) New observations are made.",
      "d) A new problem is identified."
    ],
    "correctAnswer": "b) The hypothesis is proved correct."
  }
],
  "BIODIVERSITY": [
  {
    "id": 1,
    "questionText": "Biodiversity is defined as the variety of organisms in a particular area, measured by considering the number of different kinds of organisms and the:",
    "options": [
      "a) Geographic distribution",
      "b) Variation within each kind",
      "c) Economic value",
      "d) Reproductive capacity"
    ],
    "correctAnswer": "b) Variation within each kind"
  },
  {
    "id": 2,
    "questionText": "Which of the following is NOT an essential service provided by biodiversity for humans and the planet?",
    "options": [
      "a) Ecosystem stability",
      "b) Climate regulation",
      "c) Natural resources",
      "d) Political stability"
    ],
    "correctAnswer": "d) Political stability"
  },
  {
    "id": 3,
    "questionText": "Biodiversity helps to maintain the balance of ecosystems, playing an important role in biogeochemical cycles such as carbon cycle and:",
    "options": [
      "a) Water cycle",
      "b) Oxygen cycle",
      "c) Nitrogen cycle",
      "d) Phosphorus cycle"
    ],
    "correctAnswer": "a) Water cycle"
  },
  {
    "id": 4,
    "questionText": "Plants and algae absorb carbon dioxide, contributing to which aspect of biodiversity's importance?",
    "options": [
      "a) Economic benefits",
      "b) Natural resources",
      "c) Ecosystem stability",
      "d) Climate regulation"
    ],
    "correctAnswer": "d) Climate regulation"
  },
  {
    "id": 5,
    "questionText": "The main aim of classification is to determine similarities and differences among organisms and to find:",
    "options": [
      "a) Their economic value",
      "b) Their geographical origin",
      "c) Evolutionary relationships among organisms",
      "d) Their average lifespan"
    ],
    "correctAnswer": "c) Evolutionary relationships among organisms"
  },
  {
    "id": 6,
    "questionText": "Classification allows biologists to group similar organisms together, making it easier to identify and understand their characteristics, relationships, and:",
    "options": [
      "a) Physiological functions",
      "b) Evolutionary history",
      "c) Habitat preferences",
      "d) Behavioral patterns"
    ],
    "correctAnswer": "b) Evolutionary history"
  },
  {
    "id": 7,
    "questionText": "The groups into which organisms are classified are known as taxonomic ranks or:",
    "options": [
      "a) Categories",
      "b) Divisions",
      "c) Taxa (singular \"taxon\")",
      "d) Levels"
    ],
    "correctAnswer": "c) Taxa (singular \"taxon\")"
  },
  {
    "id": 8,
    "questionText": "What is the highest level of classification?",
    "options": [
      "a) Kingdom",
      "b) Phylum",
      "c) Domain",
      "d) Class"
    ],
    "correctAnswer": "c) Domain"
  },
  {
    "id": 9,
    "questionText": "The Swedish botanist Carl Linnaeus devised the Linnaean system of taxonomic ranks in which year?",
    "options": [
      "a) 1675",
      "b) 1735",
      "c) 1778",
      "d) 1977"
    ],
    "correctAnswer": "b) 1735"
  },
  {
    "id": 10,
    "questionText": "In the Linnaean system, how many taxonomic ranks were initially suggested?",
    "options": [
      "a) Five",
      "b) Six",
      "c) Seven",
      "d) Eight"
    ],
    "correctAnswer": "c) Seven"
  },
  {
    "id": 11,
    "questionText": "Which of the following is the taxonomic rank between Order and Species?",
    "options": [
      "a) Class",
      "b) Phylum",
      "c) Family",
      "d) Genus"
    ],
    "correctAnswer": "d) Genus"
  },
  {
    "id": 12,
    "questionText": "The lowest level of classification, comprising a group of similar organisms that can interbreed and produce fertile offspring, is:",
    "options": [
      "a) Genus",
      "b) Family",
      "c) Species",
      "d) Order"
    ],
    "correctAnswer": "c) Species"
  },
  {
    "id": 13,
    "questionText": "The Greek philosopher Aristotle (384-322 BC) was the first who classified organisms into two groups, which were:",
    "options": [
      "a) Protists and Fungi",
      "b) Bacteria and Archaea",
      "c) Plants and Animals",
      "d) Vertebrates and Invertebrates"
    ],
    "correctAnswer": "c) Plants and Animals"
  },
  {
    "id": 14,
    "questionText": "The Arab scholar Abu Usman Amer Al-Jahiz (781-869 AD) described the characteristics of how many species of animals?",
    "options": [
      "a) 150",
      "b) 250",
      "c) 350",
      "d) 450"
    ],
    "correctAnswer": "c) 350"
  },
  {
    "id": 15,
    "questionText": "The Italian botanist Andrea Caesalpinia (1519-1603 AD) divided plants into how many groups and called them genera?",
    "options": [
      "a) Ten",
      "b) Twelve",
      "c) Fifteen",
      "d) Twenty"
    ],
    "correctAnswer": "c) Fifteen"
  },
  {
    "id": 16,
    "questionText": "In 1866, the German zoologist Ernst Haeckel proposed which kingdom classification system?",
    "options": [
      "a) Two-Kingdom System",
      "b) Three-Kingdom System",
      "c) Five-Kingdom System",
      "d) Three-Domain System"
    ],
    "correctAnswer": "b) Three-Kingdom System"
  },
  {
    "id": 17,
    "questionText": "Which kingdom was introduced in the Three-Kingdom Classification System by Ernst Haeckel?",
    "options": [
      "a) Monera",
      "b) Protista",
      "c) Fungi",
      "d) Plantae"
    ],
    "correctAnswer": "b) Protista"
  },
  {
    "id": 18,
    "questionText": "In 1937, French biologist E-Chatton suggested the term \"Prokaryotic\" to describe bacteria and \"Eukaryotic\" to describe:",
    "options": [
      "a) Fungi",
      "b) Plants",
      "c) Animals",
      "d) Protists, fungi, animals and plants"
    ],
    "correctAnswer": "d) Protists, fungi, animals and plants"
  },
  {
    "id": 19,
    "questionText": "The Five-Kingdom Classification System was introduced by which American ecologist in 1969?",
    "options": [
      "a) Carl Linnaeus",
      "b) Ernst Haeckel",
      "c) E-Chatton",
      "d) Robert Whittaker"
    ],
    "correctAnswer": "d) Robert Whittaker"
  },
  {
    "id": 20,
    "questionText": "Which of the following is NOT one of the five kingdoms in Whittaker's classification system?",
    "options": [
      "a) Monera",
      "b) Protista",
      "c) Archaea",
      "d) Plantae"
    ],
    "correctAnswer": "c) Archaea"
  },
  {
    "id": 21,
    "questionText": "In 1988, American biologists Margulis and Schwartz modified the five-kingdom classification of Whittaker by considering:",
    "options": [
      "a) Geographic distribution",
      "b) Habitat and diet",
      "c) Genetics along with cellular organization and mode of nutrition",
      "d) Reproductive strategies"
    ],
    "correctAnswer": "c) Genetics along with cellular organization and mode of nutrition"
  },
  {
    "id": 22,
    "questionText": "In 1977, American microbiologist Carl Woese (1928-2012) added a taxon called \"Domain\" to classify organisms into how many domains?",
    "options": [
      "a) Two",
      "b) Three",
      "c) Five",
      "d) Six"
    ],
    "correctAnswer": "b) Three"
  },
  {
    "id": 23,
    "questionText": "What are the three domains of organisms proposed by Carl Woese?",
    "options": [
      "a) Protista, Fungi, Animalia",
      "b) Plantae, Animalia, Bacteria",
      "c) Archaea, Bacteria, Eukarya",
      "d) Prokaryota, Eukaryota, Viruses"
    ],
    "correctAnswer": "c) Archaea, Bacteria, Eukarya"
  },
  {
    "id": 24,
    "questionText": "Which domain consists of most primitive organisms on Earth, and their cell wall does not contain peptidoglycan?",
    "options": [
      "a) Bacteria",
      "b) Archaea",
      "c) Eukarya",
      "d) Protista"
    ],
    "correctAnswer": "b) Archaea"
  },
  {
    "id": 25,
    "questionText": "Methanogens, Halophiles, and Acidophiles are examples of organisms found in which domain?",
    "options": [
      "a) Bacteria",
      "b) Archaea",
      "c) Eukarya",
      "d) Fungi"
    ],
    "correctAnswer": "b) Archaea"
  },
  {
    "id": 26,
    "questionText": "Which domain contains bacteria, which are prokaryotes and have a cell wall made of peptidoglycan?",
    "options": [
      "a) Archaea",
      "b) Bacteria",
      "c) Eukarya",
      "d) Protista"
    ],
    "correctAnswer": "b) Bacteria"
  },
  {
    "id": 27,
    "questionText": "The domain Eukarya includes all unicellular and multicellular eukaryotes. This domain contains which kingdoms?",
    "options": [
      "a) Archaebacteria and Eubacteria",
      "b) Monera and Protista",
      "c) Protista, Fungi, Plantae and Animalia",
      "d) Viruses and Prions"
    ],
    "correctAnswer": "c) Protista, Fungi, Plantae and Animalia"
  },
  {
    "id": 28,
    "questionText": "Kingdom Protista includes eukaryotes which are unicellular or colonial or filamentous or simple multicellular. They have how many types of protists?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three",
      "d) Four"
    ],
    "correctAnswer": "c) Three"
  },
  {
    "id": 29,
    "questionText": "Which type of protists have cell walls made of cellulose and are autotrophs, like Euglena and diatoms?",
    "options": [
      "a) Fungus-like protists",
      "b) Animal-like protists",
      "c) Plant-like protists",
      "d) Slime molds"
    ],
    "correctAnswer": "c) Plant-like protists"
  },
  {
    "id": 30,
    "questionText": "Plasmodium, which causes malaria, and Entamoeba, which causes dysentery, are examples of:",
    "options": [
      "a) Plant-like protists",
      "b) Animal-like protists (protozoans)",
      "c) Fungus-like protists",
      "d) Algae"
    ],
    "correctAnswer": "b) Animal-like protists (protozoans)"
  },
  {
    "id": 31,
    "questionText": "Kingdom Fungi consists of organisms that are:",
    "options": [
      "a) Autotrophic and unicellular",
      "b) Heterotrophic and eukaryotic",
      "c) Prokaryotic and multicellular",
      "d) Plant-like and chemosynthetic"
    ],
    "correctAnswer": "b) Heterotrophic and eukaryotic"
  },
  {
    "id": 32,
    "questionText": "The cell wall of fungi is mainly made of:",
    "options": [
      "a) Cellulose",
      "b) Peptidoglycan",
      "c) Chitin",
      "d) Lignin"
    ],
    "correctAnswer": "c) Chitin"
  },
  {
    "id": 33,
    "questionText": "Which kingdom includes eukaryotic, multicellular organisms with cell walls made of cellulose and are autotrophic?",
    "options": [
      "a) Fungi",
      "b) Animalia",
      "c) Protista",
      "d) Plantae"
    ],
    "correctAnswer": "d) Plantae"
  },
  {
    "id": 34,
    "questionText": "Kingdom Animalia includes animals that are eukaryotic, multicellular, and heterotrophic. They develop from:",
    "options": [
      "a) Seeds",
      "b) Spores",
      "c) Embryos",
      "d) Cysts"
    ],
    "correctAnswer": "c) Embryos"
  },
  {
    "id": 35,
    "questionText": "Viruses are ultramicroscopic creatures at the borderline of living and non-living. Why are they NOT included in the classification system?",
    "options": [
      "a) They are too small to be seen.",
      "b) They cause diseases.",
      "c) They are acellular (not made of cells) and lack characteristics of the three domains of life.",
      "d) They can only reproduce inside host cells."
    ],
    "correctAnswer": "c) They are acellular (not made of cells) and lack characteristics of the three domains of life."
  },
  {
    "id": 36,
    "questionText": "Which of the following is NOT a characteristic of Archaea?",
    "options": [
      "a) Prokaryotic cell type",
      "b) Cell wall made of polypeptides",
      "c) Ability to live in extreme environments",
      "d) Presence of a nucleus"
    ],
    "correctAnswer": "d) Presence of a nucleus"
  },
  {
    "id": 37,
    "questionText": "The process of giving scientific names to organisms is called:",
    "options": [
      "a) Classification",
      "b) Taxonomy",
      "c) Binomial Nomenclature",
      "d) Identification"
    ],
    "correctAnswer": "c) Binomial Nomenclature"
  },
  {
    "id": 38,
    "questionText": "The scientific name of an organism consists of two parts. The first part is the name of the genus, and the second part is the name of the:",
    "options": [
      "a) Family",
      "b) Order",
      "c) Species",
      "d) Kingdom"
    ],
    "correctAnswer": "c) Species"
  },
  {
    "id": 39,
    "questionText": "Who is known as the founder of the system of giving scientific names to organisms (binomial nomenclature)?",
    "options": [
      "a) Aristotle",
      "b) Robert Whittaker",
      "c) Carl Linnaeus",
      "d) Ernst Haeckel"
    ],
    "correctAnswer": "c) Carl Linnaeus"
  },
  {
    "id": 40,
    "questionText": "According to the rules of Binomial Nomenclature, scientific names are taken from which language?",
    "options": [
      "a) Greek",
      "b) English",
      "c) Latin",
      "d) French"
    ],
    "correctAnswer": "c) Latin"
  },
  {
    "id": 41,
    "questionText": "In binomial nomenclature, the genus name always begins with a:",
    "options": [
      "a) Small letter",
      "b) Capital letter",
      "c) Number",
      "d) Special symbol"
    ],
    "correctAnswer": "b) Capital letter"
  },
  {
    "id": 42,
    "questionText": "When printing a scientific name, it should be typed in:",
    "options": [
      "a) Bold",
      "b) Underlined",
      "c) Italics",
      "d) All caps"
    ],
    "correctAnswer": "c) Italics"
  },
  {
    "id": 43,
    "questionText": "If a scientific name is handwritten, how should the two parts be presented?",
    "options": [
      "a) In bold",
      "b) In italics",
      "c) Separately underlined",
      "d) All in capital letters"
    ],
    "correctAnswer": "c) Separately underlined"
  },
  {
    "id": 44,
    "questionText": "Biodiversity is a measure of the variety of living organisms present in different ecosystems, including terrestrial, marine, and:",
    "options": [
      "a) Urban ecosystems",
      "b) Freshwater ecosystems",
      "c) Desert ecosystems",
      "d) Mountain ecosystems"
    ],
    "correctAnswer": "b) Freshwater ecosystems"
  },
  {
    "id": 45,
    "questionText": "Which domain contains organisms that are eukaryotic and can be unicellular or multicellular, but are simple, like protists and fungi?",
    "options": [
      "a) Archaea",
      "b) Bacteria",
      "c) Eukarya",
      "d) Monera"
    ],
    "correctAnswer": "c) Eukarya"
  },
  {
    "id": 46,
    "questionText": "What is a key characteristic of the cell wall in Bacteria?",
    "options": [
      "a) Chitin",
      "b) Cellulose",
      "c) Peptidoglycan",
      "d) Absent"
    ],
    "correctAnswer": "c) Peptidoglycan"
  },
  {
    "id": 47,
    "questionText": "Which kingdom's mode of nutrition is exclusively autotrophic?",
    "options": [
      "a) Fungi",
      "b) Animalia",
      "c) Plantae",
      "d) Protista (some are heterotrophic)"
    ],
    "correctAnswer": "c) Plantae"
  },
  {
    "id": 48,
    "questionText": "An example of an animal-like protist (protozoan) is:",
    "options": [
      "a) Euglena",
      "b) Diatom",
      "c) Slime mold",
      "d) Amoeba"
    ],
    "correctAnswer": "d) Amoeba"
  },
  {
    "id": 49,
    "questionText": "Why are viruses not included in traditional biological kingdoms?",
    "options": [
      "a) They are too small to be seen.",
      "b) They cause diseases.",
      "c) They lack cellular structure and organelles.",
      "d) They can only reproduce inside living cells."
    ],
    "correctAnswer": "c) They lack cellular structure and organelles."
  },
  {
    "id": 50,
    "questionText": "Which of the following is a common name that does NOT fit the true definition of fish (a vertebrate animal with a backbone, fins, and gills)?",
    "options": [
      "a) Shark",
      "b) Salmon",
      "c) Silver fish",
      "d) Tuna"
    ],
    "correctAnswer": "c) Silver fish"
  }
],
  "THE CELL": [
  {
    "id": 1,
    "questionText": "What is considered the basic unit of life?",
    "options": [
      "a) Tissue",
      "b) Organ",
      "c) Cell",
      "d) Molecule"
    ],
    "correctAnswer": "c) Cell"
  },
  {
    "id": 2,
    "questionText": "Who observed \"cells\" in a thin slice of cork and discovered tiny box-like structures in 1665?",
    "options": [
      "a) Robert Brown",
      "b) Camillo Golgi",
      "c) Robert Hooke",
      "d) Christian René de Duve"
    ],
    "correctAnswer": "c) Robert Hooke"
  },
  {
    "id": 3,
    "questionText": "Prokaryotic cells are characterized by the absence of:",
    "options": [
      "a) Cell wall",
      "b) Cell membrane",
      "c) Membrane-bound organelles",
      "d) Cytoplasm"
    ],
    "correctAnswer": "c) Membrane-bound organelles"
  },
  {
    "id": 4,
    "questionText": "The cell wall of plants is primarily made of:",
    "options": [
      "a) Chitin",
      "b) Peptidoglycan",
      "c) Lignin",
      "d) Cellulose"
    ],
    "correctAnswer": "d) Cellulose"
  },
  {
    "id": 5,
    "questionText": "What is the function of the middle lamella in plant cells?",
    "options": [
      "a) Stores water",
      "b) Photosynthesis",
      "c) Holds the primary walls of adjacent cells together",
      "d) Regulates water transport"
    ],
    "correctAnswer": "c) Holds the primary walls of adjacent cells together"
  },
  {
    "id": 6,
    "questionText": "The cell wall of algae is composed of cellulose, while the cell wall of fungi is made of:",
    "options": [
      "a) Peptidoglycan",
      "b) Lignin",
      "c) Chitin",
      "d) Hemicellulose"
    ],
    "correctAnswer": "c) Chitin"
  },
  {
    "id": 7,
    "questionText": "The cell membrane is a partially permeable membrane that allows only a few molecules to pass through it, making it:",
    "options": [
      "a) Fully permeable",
      "b) Impermeable",
      "c) Selectively-permeable",
      "d) Non-reactive"
    ],
    "correctAnswer": "c) Selectively-permeable"
  },
  {
    "id": 8,
    "questionText": "The fluid-mosaic model describes the structure of the:",
    "options": [
      "a) Cell wall",
      "b) Cell membrane",
      "c) Nucleus",
      "d) Cytoplasm"
    ],
    "correctAnswer": "b) Cell membrane"
  },
  {
    "id": 9,
    "questionText": "The jelly-like substance that fills the inside of a cell and provides a medium for organelles is called:",
    "options": [
      "a) Nucleoplasm",
      "b) Cytosol",
      "c) Cytoplasm",
      "d) Vacuole"
    ],
    "correctAnswer": "c) Cytoplasm"
  },
  {
    "id": 10,
    "questionText": "All eukaryotic cells have a prominent nucleus, which is present in the center in animal cells and pushed to the side in:",
    "options": [
      "a) Prokaryotic cells",
      "b) Fungal cells",
      "c) Bacterial cells",
      "d) Plant cells"
    ],
    "correctAnswer": "d) Plant cells"
  },
  {
    "id": 11,
    "questionText": "The inner nuclear membrane has many small pores called:",
    "options": [
      "a) Plasmodesmata",
      "b) Centrioles",
      "c) Nuclear pores",
      "d) Stomata"
    ],
    "correctAnswer": "c) Nuclear pores"
  },
  {
    "id": 12,
    "questionText": "The genetic material within the nucleus, composed of deoxyribonucleic acid (DNA) and proteins, is known as:",
    "options": [
      "a) Nucleolus",
      "b) Nuclear envelope",
      "c) Chromatin",
      "d) Ribosomes"
    ],
    "correctAnswer": "c) Chromatin"
  },
  {
    "id": 13,
    "questionText": "Which part of the cell is referred to as the \"control center\" and oversees cellular activities by directing protein production?",
    "options": [
      "a) Mitochondrion",
      "b) Golgi apparatus",
      "c) Nucleus",
      "d) Cytoplasm"
    ],
    "correctAnswer": "c) Nucleus"
  },
  {
    "id": 14,
    "questionText": "The cytoskeleton is a network of thin tubes and filaments present throughout the cytoplasm. It consists of microtubules, microfilaments, and:",
    "options": [
      "a) Ribosomes",
      "b) Lysosomes",
      "c) Intermediate filaments",
      "d) Vacuoles"
    ],
    "correctAnswer": "c) Intermediate filaments"
  },
  {
    "id": 15,
    "questionText": "Hollow tubes made up of tubulin protein, which help maintain cell shape and act as tracks for organelles, are called:",
    "options": [
      "a) Microfilaments",
      "b) Intermediate filaments",
      "c) Microtubules",
      "d) Centrioles"
    ],
    "correctAnswer": "c) Microtubules"
  },
  {
    "id": 16,
    "questionText": "Ribosomes are tiny granular structures that are the sites of:",
    "options": [
      "a) Lipid synthesis",
      "b) Carbohydrate storage",
      "c) Protein synthesis",
      "d) DNA replication"
    ],
    "correctAnswer": "c) Protein synthesis"
  },
  {
    "id": 17,
    "questionText": "Eukaryotic ribosomes are typically larger than prokaryotic ones. Each ribosome consists of how many subunits?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three",
      "d) Four"
    ],
    "correctAnswer": "b) Two"
  },
  {
    "id": 18,
    "questionText": "The endoplasmic reticulum is a network of membrane-bounded channels present throughout the cytoplasm of eukaryotic cells. There are two types: rough ER and:",
    "options": [
      "a) Golgi ER",
      "b) Vacuolar ER",
      "c) Smooth ER",
      "d) Lysosomal ER"
    ],
    "correctAnswer": "c) Smooth ER"
  },
  {
    "id": 19,
    "questionText": "Rough Endoplasmic Reticulum (RER) has ribosomes attached to its surface and functions in:",
    "options": [
      "a) Lipid metabolism",
      "b) Detoxification of harmful chemicals",
      "c) Protein synthesis",
      "d) Energy production"
    ],
    "correctAnswer": "c) Protein synthesis"
  },
  {
    "id": 20,
    "questionText": "Smooth Endoplasmic Reticulum (SER) lacks ribosomes and is involved in lipid metabolism and detoxification. It is often found in large amounts in which cells?",
    "options": [
      "a) Nerve cells",
      "b) Bone cells",
      "c) Muscle cells",
      "d) Red blood cells"
    ],
    "correctAnswer": "c) Muscle cells"
  },
  {
    "id": 21,
    "questionText": "The Golgi apparatus consists of a set of flattened sacs called cisternae, and was discovered by:",
    "options": [
      "a) Robert Hooke",
      "b) Robert Brown",
      "c) Camillo Golgi",
      "d) Christian René de Duve"
    ],
    "correctAnswer": "c) Camillo Golgi"
  },
  {
    "id": 22,
    "questionText": "The Golgi apparatus is involved in modifying proteins coming from RER and packing them into small membrane-bound sacs called:",
    "options": [
      "a) Lysosomes",
      "b) Mitochondria",
      "c) Golgi vesicles",
      "d) Vacuoles"
    ],
    "correctAnswer": "c) Golgi vesicles"
  },
  {
    "id": 23,
    "questionText": "Lysosomes were discovered by Belgian scientist Christian René de Duve and contain digestive enzymes responsible for:",
    "options": [
      "a) Protein synthesis",
      "b) Energy production",
      "c) Breaking down various biomolecules into simpler compounds",
      "d) Lipid synthesis"
    ],
    "correctAnswer": "c) Breaking down various biomolecules into simpler compounds"
  },
  {
    "id": 24,
    "questionText": "Mitochondria are known as the \"powerhouses\" of the cell because they perform reactions of aerobic respiration to release:",
    "options": [
      "a) Oxygen",
      "b) Carbon dioxide",
      "c) Energy",
      "d) Water"
    ],
    "correctAnswer": "c) Energy"
  },
  {
    "id": 25,
    "questionText": "The inner membrane of mitochondria is folded to form structures called:",
    "options": [
      "a) Grana",
      "b) Stroma",
      "c) Cristae",
      "d) Thylakoids"
    ],
    "correctAnswer": "c) Cristae"
  },
  {
    "id": 26,
    "questionText": "Plastids are membrane-bounded organelles present in the cells of plants and photosynthetic protists. The three main types are chloroplasts, chromoplasts, and:",
    "options": [
      "a) Mitochondria",
      "b) Ribosomes",
      "c) Leucoplasts",
      "d) Vacuoles"
    ],
    "correctAnswer": "c) Leucoplasts"
  },
  {
    "id": 27,
    "questionText": "Chloroplasts are green plastids that contain chlorophyll and are responsible for:",
    "options": [
      "a) Cellular respiration",
      "b) Energy storage",
      "c) Photosynthesis",
      "d) Protein synthesis"
    ],
    "correctAnswer": "c) Photosynthesis"
  },
  {
    "id": 28,
    "questionText": "Chromoplasts are plastids that contain pigments such as carotenoids and give color to flowers and fruits. Their function is to help in:",
    "options": [
      "a) Storage of starch",
      "b) Pollination and dispersal of fruit and seeds",
      "c) Water absorption",
      "d) Root growth"
    ],
    "correctAnswer": "b) Pollination and dispersal of fruit and seeds"
  },
  {
    "id": 29,
    "questionText": "Leucoplasts are plastids that have no pigments and are involved in the storage of:",
    "options": [
      "a) Water and minerals",
      "b) Sugars and proteins",
      "c) Starches, lipids, and proteins",
      "d) DNA and RNA"
    ],
    "correctAnswer": "c) Starches, lipids, and proteins"
  },
  {
    "id": 30,
    "questionText": "Vacuoles are single membrane-bound sacs filled with fluid. Mature plant cells typically have a single, large central vacuole formed by the fusion of many small vacuoles, and it helps to provide:",
    "options": [
      "a) Energy",
      "b) Turgor pressure",
      "c) Photosynthesis",
      "d) Mechanical support"
    ],
    "correctAnswer": "b) Turgor pressure"
  },
  {
    "id": 31,
    "questionText": "Centrioles are barrel-shaped organelles found in animal cells and most protists, but are absent in:",
    "options": [
      "a) Algae",
      "b) Yeast",
      "c) Prokaryotes, higher plants, and fungi",
      "d) Amoeba"
    ],
    "correctAnswer": "c) Prokaryotes, higher plants, and fungi"
  },
  {
    "id": 32,
    "questionText": "Each centriole is formed of how many triplets of microtubule (made up of tubulin protein)?",
    "options": [
      "a) Six",
      "b) Eight",
      "c) Nine",
      "d) Twelve"
    ],
    "correctAnswer": "c) Nine"
  },
  {
    "id": 33,
    "questionText": "Cilia and Flagella are fine, thin-like projections involved in movement. Cilia are shorter and more numerous, while flagella are:",
    "options": [
      "a) Shorter and more numerous",
      "b) Longer and less numerous",
      "c) Only found in plants",
      "d) Not involved in movement"
    ],
    "correctAnswer": "b) Longer and less numerous"
  },
  {
    "id": 34,
    "questionText": "Which of the following is a structural advantage of plant cells?",
    "options": [
      "a) Presence of centrioles",
      "b) Absence of cell wall",
      "c) Large central vacuole for storage and turgor pressure",
      "d) Ability to change shape easily"
    ],
    "correctAnswer": "c) Large central vacuole for storage and turgor pressure"
  },
  {
    "id": 35,
    "questionText": "Plasmodesmata are channels that allow direct communication and transport of substances between adjacent:",
    "options": [
      "a) Animal cells",
      "b) Fungal cells",
      "c) Plant cells",
      "d) Bacterial cells"
    ],
    "correctAnswer": "c) Plant cells"
  },
  {
    "id": 36,
    "questionText": "Animal cells have centrioles which make spindle fibres. This ensures the accurate distribution of chromosomes during:",
    "options": [
      "a) Protein synthesis",
      "b) Energy production",
      "c) Cell division",
      "d) Waste removal"
    ],
    "correctAnswer": "c) Cell division"
  },
  {
    "id": 37,
    "questionText": "Mesophyll cells are green cells present in leaves that are specialized for:",
    "options": [
      "a) Water absorption",
      "b) Mineral transport",
      "c) Gas exchange",
      "d) Photosynthesis"
    ],
    "correctAnswer": "d) Photosynthesis"
  },
  {
    "id": 38,
    "questionText": "Epidermal cells make up the outermost layer of plant tissues, forming a protective barrier against the:",
    "options": [
      "a) Gravity",
      "b) Temperature changes",
      "c) Environment",
      "d) Light"
    ],
    "correctAnswer": "c) Environment"
  },
  {
    "id": 39,
    "questionText": "Root hairs are extensions of epidermal cells that increase surface area for:",
    "options": [
      "a) Photosynthesis",
      "b) Absorption of water and minerals from the soil",
      "c) Support for the plant",
      "d) Reproduction"
    ],
    "correctAnswer": "b) Absorption of water and minerals from the soil"
  },
  {
    "id": 40,
    "questionText": "Muscle cells are specialized animal cells that can contract and are responsible for:",
    "options": [
      "a) Sensing stimuli",
      "b) Producing hormones",
      "c) Body movements and locomotion",
      "d) Filtering blood"
    ],
    "correctAnswer": "c) Body movements and locomotion"
  },
  {
    "id": 41,
    "questionText": "Neurons are specialized cells of the nervous system that transmit nerve impulses throughout the body. Their extensions are called dendrites and:",
    "options": [
      "a) Myelin sheaths",
      "b) Synapses",
      "c) Axons",
      "d) Glial cells"
    ],
    "correctAnswer": "c) Axons"
  },
  {
    "id": 42,
    "questionText": "Red blood cells (erythrocytes) are specialized to carry oxygen from the lungs to the body's tissues. They are biconcave disk-shaped cells and lack a:",
    "options": [
      "a) Cell membrane",
      "b) Cytoplasm",
      "c) Nucleus and mitochondria",
      "d) Hemoglobin"
    ],
    "correctAnswer": "c) Nucleus and mitochondria"
  },
  {
    "id": 43,
    "questionText": "Liver cells (hepatocytes) are specialized for many important functions, including storage of glycogen, iron and vitamins, detoxification of toxic substances, and production of:",
    "options": [
      "a) Oxygen",
      "b) Proteins",
      "c) Clotting proteins of blood",
      "d) Hormones"
    ],
    "correctAnswer": "c) Clotting proteins of blood"
  },
  {
    "id": 44,
    "questionText": "The specialization of different parts of a system to perform specific tasks more efficiently is called:",
    "options": [
      "a) Cell differentiation",
      "b) Cell specialization",
      "c) Division of labour",
      "d) Organogenesis"
    ],
    "correctAnswer": "c) Division of labour"
  },
  {
    "id": 45,
    "questionText": "Which type of cells are undifferentiated or unspecialized cells that can differentiate into specific cells?",
    "options": [
      "a) Mesophyll cells",
      "b) Epidermal cells",
      "c) Muscle cells",
      "d) Stem cells"
    ],
    "correctAnswer": "d) Stem cells"
  },
  {
    "id": 46,
    "questionText": "A zygote is an unspecialized cell that has the ability to make new cells which can differentiate into specialized cells. Therefore, a zygote is also called a:",
    "options": [
      "a) Differentiated cell",
      "b) Mature cell",
      "c) Stem cell",
      "d) Germ cell"
    ],
    "correctAnswer": "c) Stem cell"
  },
  {
    "id": 47,
    "questionText": "Stem cells present in liver help to repair after damage, while stem cells in bone marrow differentiate to make different types of blood cells and:",
    "options": [
      "a) Skin cells",
      "b) Nerve cells",
      "c) Immune cells",
      "d) Muscle cells"
    ],
    "correctAnswer": "c) Immune cells"
  },
  {
    "id": 48,
    "questionText": "Which cell structure is primarily responsible for forming spindle fibers during cell division in animal cells?",
    "options": [
      "a) Ribosomes",
      "b) Mitochondria",
      "c) Centrioles",
      "d) Vacuoles"
    ],
    "correctAnswer": "c) Centrioles"
  },
  {
    "id": 49,
    "questionText": "The nuclear envelope is surrounded by how many membranes?",
    "options": [
      "a) Single membrane",
      "b) Double membrane",
      "c) Triple membrane",
      "d) No membrane"
    ],
    "correctAnswer": "b) Double membrane"
  },
  {
    "id": 50,
    "questionText": "Which organelle is responsible for packaging and modifying proteins and lipids?",
    "options": [
      "a) Mitochondria",
      "b) Endoplasmic Reticulum",
      "c) Ribosomes",
      "d) Golgi apparatus"
    ],
    "correctAnswer": "d) Golgi apparatus"
  }
],
  "CELL CYCLE": [
  {
    "id": 1,
    "questionText": "The series of events that take place in a eukaryotic cell from its formation to its division into two daughter cells is called the:",
    "options": [
      "a) Cell division",
      "b) Mitosis",
      "c) Meiosis",
      "d) Cell cycle"
    ],
    "correctAnswer": "d) Cell cycle"
  },
  {
    "id": 2,
    "questionText": "The cell cycle is divided into two main phases: interphase and the:",
    "options": [
      "a) G0 phase",
      "b) G1 phase",
      "c) M (mitotic) phase",
      "d) S phase"
    ],
    "correctAnswer": "c) M (mitotic) phase"
  },
  {
    "id": 3,
    "questionText": "During which phase of the cell cycle does the cell perform its life functions according to its specialty and prepares itself for next division, occupying about 90% of the total time?",
    "options": [
      "a) M phase",
      "b) Interphase",
      "c) G0 phase",
      "d) Cytokinesis"
    ],
    "correctAnswer": "b) Interphase"
  },
  {
    "id": 4,
    "questionText": "Interphase consists of three phases: G1 phase, S phase, and:",
    "options": [
      "a) G0 phase",
      "b) M phase",
      "c) G2 phase",
      "d) Cytokinesis"
    ],
    "correctAnswer": "c) G2 phase"
  },
  {
    "id": 5,
    "questionText": "During the G1 (First Gap) phase, the cell makes proteins and organelles and:",
    "options": [
      "a) Replicates its DNA",
      "b) Divides its genetic material",
      "c) Grows in size",
      "d) Duplicates chromosomes"
    ],
    "correctAnswer": "c) Grows in size"
  },
  {
    "id": 6,
    "questionText": "The S (Synthesis) phase is characterized by the replication of DNA. The total number of chromosomes in the cell remains the same, but each chromosome consists of two sister:",
    "options": [
      "a) Centromeres",
      "b) Spindles",
      "c) Chromatids",
      "d) Nuclei"
    ],
    "correctAnswer": "c) Chromatids"
  },
  {
    "id": 7,
    "questionText": "In the G2 (Second Gap) phase, the cell continues to grow and produces proteins necessary for:",
    "options": [
      "a) DNA replication",
      "b) Protein synthesis",
      "c) Cell division",
      "d) Organelle formation"
    ],
    "correctAnswer": "c) Cell division"
  },
  {
    "id": 8,
    "questionText": "The M (mitotic) phase is the phase during which the cell divides its genetic material equally into two new, identical cells. It consists of karyokinesis and:",
    "options": [
      "a) Interphase",
      "b) Cytokinesis",
      "c) G1 phase",
      "d) S phase"
    ],
    "correctAnswer": "b) Cytokinesis"
  },
  {
    "id": 9,
    "questionText": "The division of the nucleus, which is further divided into four phases, is known as:",
    "options": [
      "a) Cytokinesis",
      "b) Meiosis",
      "c) Karyokinesis",
      "d) Interphase"
    ],
    "correctAnswer": "c) Karyokinesis"
  },
  {
    "id": 10,
    "questionText": "During prophase of mitosis, the thread-like chromatin material condenses and makes thick visible:",
    "options": [
      "a) Centrosomes",
      "b) Chromosomes",
      "c) Spindle fibres",
      "d) Chromatids"
    ],
    "correctAnswer": "b) Chromosomes"
  },
  {
    "id": 11,
    "questionText": "In prophase, the two centrosomes migrate to opposite sides of the nucleus and make a network of microtubules called:",
    "options": [
      "a) Astral rays",
      "b) Spindle fibres",
      "c) Chromatin network",
      "d) Metaphase plate"
    ],
    "correctAnswer": "b) Spindle fibres"
  },
  {
    "id": 12,
    "questionText": "During metaphase of mitosis, the chromosomes align at the center of the cell, forming the:",
    "options": [
      "a) Equatorial plate",
      "b) Polar plate",
      "c) Metaphase plate",
      "d) Anaphase plate"
    ],
    "correctAnswer": "c) Metaphase plate"
  },
  {
    "id": 13,
    "questionText": "What happens during anaphase of mitosis?",
    "options": [
      "a) Chromosomes condense.",
      "b) Spindle fibers form.",
      "c) Sister chromatids separate and move to opposite poles.",
      "d) New nuclear envelopes form."
    ],
    "correctAnswer": "c) Sister chromatids separate and move to opposite poles."
  },
  {
    "id": 14,
    "questionText": "During telophase of mitosis, a new nuclear envelope forms around each set of separated chromosomes and the nucleolus:",
    "options": [
      "a) Appears",
      "b) Reforms",
      "c) Condenses",
      "d) Disappears"
    ],
    "correctAnswer": "b) Reforms"
  },
  {
    "id": 15,
    "questionText": "Cytokinesis is the division of:",
    "options": [
      "a) Nucleus",
      "b) Chromosomes",
      "c) Cytoplasm",
      "d) Spindle fibers"
    ],
    "correctAnswer": "c) Cytoplasm"
  },
  {
    "id": 16,
    "questionText": "In animal cells, cytokinesis involves the formation of a furrow in the cytoplasm, which then pinches inward to divide the cell. This furrow is formed by a ring of:",
    "options": [
      "a) Microtubules",
      "b) Microfilaments",
      "c) Intermediate filaments",
      "d) Spindle fibers"
    ],
    "correctAnswer": "b) Microfilaments"
  },
  {
    "id": 17,
    "questionText": "In plant cells, cytokinesis involves the Golgi apparatus making vesicles that move to the middle and fuse to form a plate called:",
    "options": [
      "a) Cell furrow",
      "b) Cell plate",
      "c) Phargmoplast",
      "d) Cell membrane"
    ],
    "correctAnswer": "b) Cell plate"
  },
  {
    "id": 18,
    "questionText": "Mitosis plays a crucial role in the growth of organisms by producing new cells that are:",
    "options": [
      "a) Different from the original cells",
      "b) Haploid",
      "c) Identical to the original cells",
      "d) Genetically varied"
    ],
    "correctAnswer": "c) Identical to the original cells"
  },
  {
    "id": 19,
    "questionText": "The constant dying and replacement of cells in our bodies (e.g., red blood cells, skin cells) is an example of the significance of:",
    "options": [
      "a) Meiosis",
      "b) Asexual reproduction",
      "c) Mitosis",
      "d) Regeneration"
    ],
    "correctAnswer": "c) Mitosis"
  },
  {
    "id": 20,
    "questionText": "Some animals can regenerate parts of the body by carrying out mitosis in the cells of remaining parts. An example is regeneration in:",
    "options": [
      "a) Humans",
      "b) Birds",
      "c) Sea star",
      "d) Insects"
    ],
    "correctAnswer": "c) Sea star"
  },
  {
    "id": 21,
    "questionText": "Asexual reproduction, such as budding in Hydra, is a process where mitosis forms a mass of cells called a bud, which grows into a new individual. This highlights the significance of mitosis in:",
    "options": [
      "a) Genetic diversity",
      "b) Sexual reproduction",
      "c) Asexual reproduction",
      "d) Maintaining chromosome number"
    ],
    "correctAnswer": "c) Asexual reproduction"
  },
  {
    "id": 22,
    "questionText": "Uncontrolled cell division can lead to the formation of masses of cells called:",
    "options": [
      "a) Cysts",
      "b) Benign growths",
      "c) Tumors",
      "d) Polyps"
    ],
    "correctAnswer": "c) Tumors"
  },
  {
    "id": 23,
    "questionText": "If tumors remain in their original location, they are called benign. If they migrate and invade other tissues, they are called:",
    "options": [
      "a) Benign tumors",
      "b) Polyps",
      "c) Malignant tumors (cancer)",
      "d) Cysts"
    ],
    "correctAnswer": "c) Malignant tumors (cancer)"
  },
  {
    "id": 24,
    "questionText": "The spread of cancer cells from their original location to other parts of the body is called:",
    "options": [
      "a) Regeneration",
      "b) Mitosis",
      "c) Metastasis",
      "d) Cytokinesis"
    ],
    "correctAnswer": "c) Metastasis"
  },
  {
    "id": 25,
    "questionText": "Meiosis is a type of cell division in which each daughter cell receives half the number of chromosomes as compared to the:",
    "options": [
      "a) Sister chromatids",
      "b) Grandparent cell",
      "c) Parent cell",
      "d) Somatic cell"
    ],
    "correctAnswer": "c) Parent cell"
  },
  {
    "id": 26,
    "questionText": "Diploid cells (2n) divide to produce four haploid daughter cells (n) in which process?",
    "options": [
      "a) Mitosis",
      "b) Binary fission",
      "c) Meiosis",
      "d) Budding"
    ],
    "correctAnswer": "c) Meiosis"
  },
  {
    "id": 27,
    "questionText": "Meiosis was discovered in 1876 by a German biologist named:",
    "options": [
      "a) Robert Hooke",
      "b) Carl Linnaeus",
      "c) Oscar Hertwig",
      "d) Walther Flemming"
    ],
    "correctAnswer": "c) Oscar Hertwig"
  },
  {
    "id": 28,
    "questionText": "Meiosis consists of two divisions: Meiosis-I and:",
    "options": [
      "a) Mitosis-I",
      "b) Meiosis-II",
      "c) Interphase",
      "d) Cytokinesis"
    ],
    "correctAnswer": "b) Meiosis-II"
  },
  {
    "id": 29,
    "questionText": "During prophase-I of meiosis, homologous chromosomes pair up in a process called:",
    "options": [
      "a) Disjunction",
      "b) Separation",
      "c) Synapsis",
      "d) Alignment"
    ],
    "correctAnswer": "c) Synapsis"
  },
  {
    "id": 30,
    "questionText": "Paired homologous chromosomes form a structure called a:",
    "options": [
      "a) Spindle",
      "b) Centrosome",
      "c) Tetrad",
      "d) Chromatid"
    ],
    "correctAnswer": "c) Tetrad"
  },
  {
    "id": 31,
    "questionText": "During synapsis, non-sister chromatids of homologous chromosomes exchange their segments in a process called:",
    "options": [
      "a) Disjunction",
      "b) Independent assortment",
      "c) Crossing over",
      "d) Segregation"
    ],
    "correctAnswer": "c) Crossing over"
  },
  {
    "id": 32,
    "questionText": "The site for crossing over, where X-shaped structures are formed between homologous chromosomes, is called:",
    "options": [
      "a) Centromere",
      "b) Kinetochore",
      "c) Chiasmata",
      "d) Tetrad"
    ],
    "correctAnswer": "c) Chiasmata"
  },
  {
    "id": 33,
    "questionText": "During metaphase-I of meiosis, the tetrads (pairs of homologous chromosomes) align at the metaphase plate, with two spindle fibres from both poles attached to:",
    "options": [
      "a) Each chromatid",
      "b) One pair of homologous chromosomes",
      "c) Each centromere",
      "d) Non-sister chromatids"
    ],
    "correctAnswer": "c) Each centromere"
  },
  {
    "id": 34,
    "questionText": "What is the key event during anaphase-I of meiosis?",
    "options": [
      "a) Sister chromatids separate.",
      "b) Homologous chromosomes separate and are pulled to opposite poles.",
      "c) DNA replicates.",
      "d) New nuclei form."
    ],
    "correctAnswer": "b) Homologous chromosomes separate and are pulled to opposite poles."
  },
  {
    "id": 35,
    "questionText": "Telophase-I of meiosis is characterized by the disappearance of the spindle and the formation of new nuclear envelopes around:",
    "options": [
      "a) Diploid sets of chromosomes",
      "b) Undivided chromosomes",
      "c) Haploid set of chromosomes",
      "d) Sister chromatids"
    ],
    "correctAnswer": "c) Haploid set of chromosomes"
  },
  {
    "id": 36,
    "questionText": "Meiosis-II closely resembles mitosis and consists of four phases: prophase-II, metaphase-II, anaphase-II, and:",
    "options": [
      "a) Interphase-II",
      "b) Cytokinesis-II",
      "c) Telophase-II",
      "d) G2 phase"
    ],
    "correctAnswer": "c) Telophase-II"
  },
  {
    "id": 37,
    "questionText": "During metaphase-II, individual chromosomes consisting of two sister chromatids align at the:",
    "options": [
      "a) Nuclear envelope",
      "b) Equator of the cell",
      "c) Poles of the cell",
      "d) Centrosome"
    ],
    "correctAnswer": "b) Equator of the cell"
  },
  {
    "id": 38,
    "questionText": "In anaphase-II, sister chromatids separate and are pulled apart, forming two diploid sets at:",
    "options": [
      "a) The center of the cell",
      "b) Opposite poles",
      "c) The cytoplasm",
      "d) The nuclear envelope"
    ],
    "correctAnswer": "b) Opposite poles"
  },
  {
    "id": 39,
    "questionText": "Meiosis maintains the number of chromosomes in the next generation by producing haploid gametes. This ensures that when gametes fuse, the zygote restores the original diploid number of chromosomes. This is significant in:",
    "options": [
      "a) Asexual reproduction",
      "b) Cell replacement",
      "c) Sexual reproduction",
      "d) Genetic mutation"
    ],
    "correctAnswer": "c) Sexual reproduction"
  },
  {
    "id": 40,
    "questionText": "Crossing over during prophase-I of meiosis creates new combinations of genes on chromosomes, leading to:",
    "options": [
      "a) Chromosome number reduction",
      "b) Identical offspring",
      "c) Genetic diversity",
      "d) Cell growth"
    ],
    "correctAnswer": "c) Genetic diversity"
  },
  {
    "id": 41,
    "questionText": "Sometimes, sister chromatids fail to separate during meiosis-II, or homologous chromosomes fail to separate during meiosis-I. This is called:",
    "options": [
      "a) Crossing over",
      "b) Synapsis",
      "c) Non-disjunction",
      "d) Fertilization"
    ],
    "correctAnswer": "c) Non-disjunction"
  },
  {
    "id": 42,
    "questionText": "Non-disjunction errors can result in an abnormal number of chromosomes in the zygote, potentially leading to:",
    "options": [
      "a) Increased genetic diversity",
      "b) Faster cell cycle",
      "c) Severe medical problems",
      "d) Stronger immune system"
    ],
    "correctAnswer": "c) Severe medical problems"
  },
  {
    "id": 43,
    "questionText": "Which of the following is a similarity between mitosis and meiosis?",
    "options": [
      "a) Both involve two divisions.",
      "b) Variations are generated in both.",
      "c) DNA replication occurs during interphase (S phase) before both divisions.",
      "d) Both produce four daughter cells."
    ],
    "correctAnswer": "c) DNA replication occurs during interphase (S phase) before both divisions."
  },
  {
    "id": 44,
    "questionText": "A parent cell divides only once in:",
    "options": [
      "a) Meiosis",
      "b) Mitosis",
      "c) Both mitosis and meiosis",
      "d) Neither"
    ],
    "correctAnswer": "b) Mitosis"
  },
  {
    "id": 45,
    "questionText": "Which process produces two daughter cells that are genetically identical to the parent cell?",
    "options": [
      "a) Meiosis",
      "b) Mitosis",
      "c) Both",
      "d) None"
    ],
    "correctAnswer": "b) Mitosis"
  },
  {
    "id": 46,
    "questionText": "In which type of cell division do homologous chromosomes form pairs?",
    "options": [
      "a) Mitosis",
      "b) Meiosis",
      "c) Both",
      "d) Neither"
    ],
    "correctAnswer": "b) Meiosis"
  },
  {
    "id": 47,
    "questionText": "What is the number of chromosomes in the daughter cells compared to the parent cell after meiosis?",
    "options": [
      "a) Same",
      "b) Reduced by half",
      "c) Doubled",
      "d) Tripled"
    ],
    "correctAnswer": "b) Reduced by half"
  },
  {
    "id": 48,
    "questionText": "Mitosis occurs in which type of cells?",
    "options": [
      "a) Germ cells",
      "b) Reproductive cells",
      "c) Somatic cells",
      "d) Gametes"
    ],
    "correctAnswer": "c) Somatic cells"
  },
  {
    "id": 49,
    "questionText": "Meiosis is primarily involved in producing gametes in animals and spores in plants for:",
    "options": [
      "a) Growth",
      "b) Regeneration",
      "c) Cell replacement",
      "d) Sexual reproduction"
    ],
    "correctAnswer": "d) Sexual reproduction"
  },
  {
    "id": 50,
    "questionText": "In which phase of interphase are enzymes required for DNA replication synthesized?",
    "options": [
      "a) G1 phase",
      "b) S phase",
      "c) G2 phase",
      "d) M phase"
    ],
    "correctAnswer": "a) G1 phase"
  }
],
  "TISSUES ORGANS AND ORGAN SYSTEMS": [
  {
    "id": 1,
    "questionText": "What is the smallest unit of matter that maintains the property of an element?",
    "options": [
      "a) Molecule",
      "b) Organelle",
      "c) Cell",
      "d) Atom"
    ],
    "correctAnswer": "d) Atom"
  },
  {
    "id": 2,
    "questionText": "Molecules combine in specific ways and make the subcellular level, known as:",
    "options": [
      "a) Atom",
      "b) Cell",
      "c) Organelle",
      "d) Tissue"
    ],
    "correctAnswer": "c) Organelle"
  },
  {
    "id": 3,
    "questionText": "Mitochondria and ribosomes are examples of:",
    "options": [
      "a) Cells",
      "b) Tissues",
      "c) Organelles",
      "d) Organs"
    ],
    "correctAnswer": "c) Organelles"
  },
  {
    "id": 4,
    "questionText": "When organelles assemble and interact with each other, they make:",
    "options": [
      "a) Tissues",
      "b) Cells",
      "c) Organs",
      "d) Organ Systems"
    ],
    "correctAnswer": "b) Cells"
  },
  {
    "id": 5,
    "questionText": "A group of similar cells that work together to perform one or more specific functions is called a/an:",
    "options": [
      "a) Organelle",
      "b) Cell",
      "c) Tissue",
      "d) Organ"
    ],
    "correctAnswer": "c) Tissue"
  },
  {
    "id": 6,
    "questionText": "Epithelial tissue covers body surfaces and lines cavities. In the heart, what type of tissue enables movement?",
    "options": [
      "a) Epithelial tissue",
      "b) Connective tissue",
      "c) Muscle tissue",
      "d) Nervous tissue"
    ],
    "correctAnswer": "c) Muscle tissue"
  },
  {
    "id": 7,
    "questionText": "In plants, which tissue protects the underlying parts, like the epidermis of a leaf?",
    "options": [
      "a) Vascular tissue",
      "b) Muscle tissue",
      "c) Epidermal tissue",
      "d) Connective tissue"
    ],
    "correctAnswer": "c) Epidermal tissue"
  },
  {
    "id": 8,
    "questionText": "Xylem and phloem are examples of which type of tissue that transports water and nutrients in plants?",
    "options": [
      "a) Epidermal tissue",
      "b) Muscle tissue",
      "c) Vascular tissue",
      "d) Connective tissue"
    ],
    "correctAnswer": "c) Vascular tissue"
  },
  {
    "id": 9,
    "questionText": "An organ is a structure made up of related tissues working together to perform:",
    "options": [
      "a) Cellular functions",
      "b) Specific functions",
      "c) Molecular synthesis",
      "d) Tissue repair"
    ],
    "correctAnswer": "b) Specific functions"
  },
  {
    "id": 10,
    "questionText": "The heart is an organ that pumps blood throughout the circulatory system. What function does it perform?",
    "options": [
      "a) Filters waste",
      "b) Digestion",
      "c) Circulation",
      "d) Respiration"
    ],
    "correctAnswer": "c) Circulation"
  },
  {
    "id": 11,
    "questionText": "In plants, leaves conduct photosynthesis. What is their function?",
    "options": [
      "a) Anchoring the plant",
      "b) Support",
      "c) Photosynthesis",
      "d) Reproduction"
    ],
    "correctAnswer": "c) Photosynthesis"
  },
  {
    "id": 12,
    "questionText": "An organ system consists of multiple organs that work together to perform:",
    "options": [
      "a) Simple functions",
      "b) Cellular processes",
      "c) Related functions",
      "d) Metabolic reactions"
    ],
    "correctAnswer": "c) Related functions"
  },
  {
    "id": 13,
    "questionText": "Which of the following is an example of an organ system in animals?",
    "options": [
      "a) Root system",
      "b) Shoot system",
      "c) Digestive system",
      "d) Leaf system"
    ],
    "correctAnswer": "c) Digestive system"
  },
  {
    "id": 14,
    "questionText": "New functions called emergent properties are created when components at each level do not work solely but:",
    "options": [
      "a) Adapt to the environment",
      "b) Interact due to their interactions",
      "c) Grow independently",
      "d) Remain static"
    ],
    "correctAnswer": "b) Interact due to their interactions"
  },
  {
    "id": 15,
    "questionText": "Which of the following is NOT an example of emergent properties when individual components combine to form higher levels?",
    "options": [
      "a) Muscle cells combine to form muscle tissue.",
      "b) The heart is an organ that performs complex functions.",
      "c) The digestive system carries out vital functions.",
      "d) A single atom storing information."
    ],
    "correctAnswer": "d) A single atom storing information."
  },
  {
    "id": 16,
    "questionText": "In plants, what are usually found underground and anchor the plant in the soil, absorbing water and essential minerals?",
    "options": [
      "a) Stems",
      "b) Leaves",
      "c) Flowers",
      "d) Roots"
    ],
    "correctAnswer": "d) Roots"
  },
  {
    "id": 17,
    "questionText": "Which part of the plant supports leaves, flowers, and fruits, and contains vascular tissues for transport?",
    "options": [
      "a) Roots",
      "b) Leaves",
      "c) Flowers",
      "d) Stems"
    ],
    "correctAnswer": "d) Stems"
  },
  {
    "id": 18,
    "questionText": "The primary sites of photosynthesis and transpiration in plants are the:",
    "options": [
      "a) Roots",
      "b) Stems",
      "c) Leaves",
      "d) Flowers"
    ],
    "correctAnswer": "c) Leaves"
  },
  {
    "id": 19,
    "questionText": "What is the reproductive part of a plant?",
    "options": [
      "a) Leaf",
      "b) Stem",
      "c) Root",
      "d) Flower"
    ],
    "correctAnswer": "d) Flower"
  },
  {
    "id": 20,
    "questionText": "The outermost layer of a leaf that is made of epidermal tissue and usually covered by a waxy cuticle, which reduces water loss, is called:",
    "options": [
      "a) Mesophyll tissue",
      "b) Vascular tissue",
      "c) Epidermal tissue",
      "d) Spongy mesophyll"
    ],
    "correctAnswer": "c) Epidermal tissue"
  },
  {
    "id": 21,
    "questionText": "Which leaf tissue is present between the upper and lower epidermis and consists of cells rich in chloroplasts?",
    "options": [
      "a) Epidermal tissue",
      "b) Vascular tissue",
      "c) Mesophyll tissue",
      "d) Cuticle"
    ],
    "correctAnswer": "c) Mesophyll tissue"
  },
  {
    "id": 22,
    "questionText": "The palisade mesophyll is located just beneath the upper epidermis and consists of:",
    "options": [
      "a) Loosely arranged cells",
      "b) Tightly packed elongated cells",
      "c) Spherical cells",
      "d) Irregularly shaped cells"
    ],
    "correctAnswer": "b) Tightly packed elongated cells"
  },
  {
    "id": 23,
    "questionText": "The spongy mesophyll is composed of loosely arranged cells with air spaces between them. These air spaces facilitate the diffusion of gases throughout the:",
    "options": [
      "a) Roots",
      "b) Stems",
      "c) Leaf",
      "d) Flower"
    ],
    "correctAnswer": "c) Leaf"
  },
  {
    "id": 24,
    "questionText": "The complex tissue located in the midrib and veins of the leaf, which consists of xylem and phloem tissue, is called:",
    "options": [
      "a) Epidermal tissue",
      "b) Mesophyll tissue",
      "c) Vascular tissue",
      "d) Ground tissue"
    ],
    "correctAnswer": "c) Vascular tissue"
  },
  {
    "id": 25,
    "questionText": "The root system and shoot system are the two main organ systems in:",
    "options": [
      "a) Animals",
      "b) Humans",
      "c) Plants",
      "d) Microorganisms"
    ],
    "correctAnswer": "c) Plants"
  },
  {
    "id": 26,
    "questionText": "What is the function of the heart in the human body?",
    "options": [
      "a) Filters waste",
      "b) Responsible for breathing",
      "c) Pumps blood throughout the body",
      "d) Controls the body"
    ],
    "correctAnswer": "c) Pumps blood throughout the body"
  },
  {
    "id": 27,
    "questionText": "The lungs are responsible for breathing and facilitate the exchange of oxygen and carbon dioxide between the body and the:",
    "options": [
      "a) Blood",
      "b) Heart",
      "c) Environment",
      "d) Brain"
    ],
    "correctAnswer": "c) Environment"
  },
  {
    "id": 28,
    "questionText": "Which organ is the control center of the body and is responsible for coordination among other organs, thinking, and decision-making?",
    "options": [
      "a) Heart",
      "b) Lungs",
      "c) Brain",
      "d) Liver"
    ],
    "correctAnswer": "c) Brain"
  },
  {
    "id": 29,
    "questionText": "The liver performs many vital functions, including filtering blood, producing bile, and storing:",
    "options": [
      "a) Proteins",
      "b) Lipids",
      "c) Glucose",
      "d) Salts"
    ],
    "correctAnswer": "c) Glucose"
  },
  {
    "id": 30,
    "questionText": "What is the primary function of the kidneys in the human body?",
    "options": [
      "a) Digestion",
      "b) Breathing",
      "c) Filtering waste products from the blood and producing urine",
      "d) Pumping blood"
    ],
    "correctAnswer": "c) Filtering waste products from the blood and producing urine"
  },
  {
    "id": 31,
    "questionText": "The stomach is a muscular organ that breaks down food using:",
    "options": [
      "a) Hormones",
      "b) Digestive enzymes",
      "c) Bile",
      "d) Water"
    ],
    "correctAnswer": "b) Digestive enzymes"
  },
  {
    "id": 32,
    "questionText": "The intestines are long, tubular organs that digest food and absorb nutrients from the:",
    "options": [
      "a) Blood",
      "b) Liver",
      "c) Digested food",
      "d) Pancreas"
    ],
    "correctAnswer": "c) Digested food"
  },
  {
    "id": 33,
    "questionText": "The pancreas produces digestive enzymes and also produces hormones such as insulin and:",
    "options": [
      "a) Adrenaline",
      "b) Thyroxine",
      "c) Glucagon",
      "d) Estrogen"
    ],
    "correctAnswer": "c) Glucagon"
  },
  {
    "id": 34,
    "questionText": "The inner wall of the stomach is made up of which type of tissue that secretes gastric juice?",
    "options": [
      "a) Connective tissue",
      "b) Muscle tissue",
      "c) Outer connective tissue",
      "d) Epithelial tissue"
    ],
    "correctAnswer": "d) Epithelial tissue"
  },
  {
    "id": 35,
    "questionText": "Which tissue lies beneath epithelial tissue and provides structural support, containing blood vessels, nerves, and lymphatics?",
    "options": [
      "a) Muscle tissue",
      "b) Outer connective tissue",
      "c) Connective tissue",
      "d) Epithelial tissue"
    ],
    "correctAnswer": "c) Connective tissue"
  },
  {
    "id": 36,
    "questionText": "The middle circular layer of the stomach wall is composed of which type of tissue that contracts and relaxes to mix food?",
    "options": [
      "a) Epithelial tissue",
      "b) Connective tissue",
      "c) Muscle tissue",
      "d) Outer connective tissue"
    ],
    "correctAnswer": "c) Muscle tissue"
  },
  {
    "id": 37,
    "questionText": "Which organ system consists of bones, cartilages, and tendons, providing structure, support, and protection?",
    "options": [
      "a) Muscular system",
      "b) Nervous system",
      "c) Skeletal system",
      "d) Blood circulatory system"
    ],
    "correctAnswer": "c) Skeletal system"
  },
  {
    "id": 38,
    "questionText": "The digestive system consists of organs such as the mouth, esophagus, stomach, small intestine, and:",
    "options": [
      "a) Lungs",
      "b) Heart",
      "c) Brain",
      "d) Large intestine"
    ],
    "correctAnswer": "d) Large intestine"
  },
  {
    "id": 39,
    "questionText": "Which system involves the exchange of gases (oxygen and carbon dioxide) between the body and the environment?",
    "options": [
      "a) Digestive system",
      "b) Muscular system",
      "c) Respiratory system",
      "d) Blood circulatory system"
    ],
    "correctAnswer": "c) Respiratory system"
  },
  {
    "id": 40,
    "questionText": "The ability of an organism to maintain a stable internal environment despite changes in the external environment is called:",
    "options": [
      "a) Metabolism",
      "b) Regulation",
      "c) Homeostasis",
      "d) Adaptation"
    ],
    "correctAnswer": "c) Homeostasis"
  },
  {
    "id": 41,
    "questionText": "When the body temperature falls, the temperature regulatory centre sends a message to muscles, resulting in shivering, which generates:",
    "options": [
      "a) Oxygen",
      "b) ATP",
      "c) Heat",
      "d) Sweat"
    ],
    "correctAnswer": "c) Heat"
  },
  {
    "id": 42,
    "questionText": "When we do hard exercise, our muscles need more oxygen. In such condition, the rate of breathing and heartbeat are increased. This is an example of the role of which organ system in homeostasis?",
    "options": [
      "a) Nervous system",
      "b) Cardiovascular system",
      "c) Respiratory system",
      "d) All of the above"
    ],
    "correctAnswer": "d) All of the above"
  },
  {
    "id": 43,
    "questionText": "The urinary system eliminates waste materials from the body. It also regulates water and salt balance in body tissues, which maintains blood volume, blood pressure, and:",
    "options": [
      "a) Oxygen levels",
      "b) Glucose levels",
      "c) pH levels",
      "d) Hormone levels"
    ],
    "correctAnswer": "c) pH levels"
  },
  {
    "id": 44,
    "questionText": "The integumentary system (skin) acts as a barrier to protect the body from external factors. It also helps to regulate temperature through:",
    "options": [
      "a) Shivering",
      "b) Respiration",
      "c) Digestion",
      "d) Sweating"
    ],
    "correctAnswer": "d) Sweating"
  },
  {
    "id": 45,
    "questionText": "Which organelle is specialized to perform cellular respiration?",
    "options": [
      "a) Ribosomes",
      "b) Nucleus",
      "c) Mitochondria",
      "d) Chloroplasts"
    ],
    "correctAnswer": "c) Mitochondria"
  },
  {
    "id": 46,
    "questionText": "How many types of smooth muscles contribute to the stomach's function?",
    "options": [
      "a) One layer",
      "b) Three layers",
      "c) Two layers",
      "d) Four layers"
    ],
    "correctAnswer": "b) Three layers"
  },
  {
    "id": 47,
    "questionText": "The smooth muscles of the stomach help in the breakdown of:",
    "options": [
      "a) Water",
      "b) Minerals",
      "c) Food",
      "d) Gases"
    ],
    "correctAnswer": "c) Food"
  },
  {
    "id": 48,
    "questionText": "An organ system is a collection of different organs that work together to perform a:",
    "options": [
      "a) Metabolic function",
      "b) Cellular function",
      "c) Related function",
      "d) Molecular synthesis"
    ],
    "correctAnswer": "c) Related function"
  },
  {
    "id": 49,
    "questionText": "Mesophyll tissue is present in the leaf. Its cells contain chloroplasts. What is the site of photosynthesis in plants?",
    "options": [
      "a) Roots",
      "b) Stems",
      "c) Mesophyll cells",
      "d) Flowers"
    ],
    "correctAnswer": "c) Mesophyll cells"
  },
  {
    "id": 50,
    "questionText": "Which of the following demonstrates the correct order of increasing complexity in the levels of organization?",
    "options": [
      "a) Organelle → Tissue → Organ → Organ system",
      "b) Cell → Tissue → Organ → Organ system",
      "c) Atom → Organelle → Cell → Tissue",
      "d) Molecule → Cell → Organelle → Tissue"
    ],
    "correctAnswer": "c) Atom → Organelle → Cell → Tissue"
  }
],
  "BIOMOLECULES": [
  {
    "id": 1,
    "questionText": "Which of the following is NOT a major type of biomolecule discussed in the chapter?",
    "options": ["Carbohydrates", "Proteins", "Vitamins", "Lipids"],
    "correctAnswer": "Vitamins"
  },
  {
    "id": 2,
    "questionText": "What percentage of dry mass of protoplasm do biomolecules comprise?",
    "options": ["50%", "75%", "93%", "100%"],
    "correctAnswer": "93%"
  },
  {
    "id": 3,
    "questionText": "Which biomolecule accounts for 50% of the dry mass of protoplasm?",
    "options": ["Lipids", "Carbohydrates", "Proteins", "Nucleic Acids"],
    "correctAnswer": "Proteins"
  },
  {
    "id": 4,
    "questionText": "The process where small molecules combine to form large molecules is called:",
    "options": ["Catabolism", "Anabolism", "Metabolism", "Hydrolysis"],
    "correctAnswer": "Anabolism"
  },
  {
    "id": 5,
    "questionText": "Carbohydrates are organic compounds composed of carbon, hydrogen, and oxygen in which ratio?",
    "options": ["1:2:1", "2:1:1", "1:1:2", "1:2:2"],
    "correctAnswer": "1:2:1"
  },
  {
    "id": 6,
    "questionText": "Simple sugars, like glucose, fructose, and galactose, are classified as:",
    "options": ["Polysaccharides", "Disaccharides", "Monosaccharides", "Oligosaccharides"],
    "correctAnswer": "Monosaccharides"
  },
  {
    "id": 7,
    "questionText": "Which of the following is a pentose sugar?",
    "options": ["Glucose", "Fructose", "Ribose", "Galactose"],
    "correctAnswer": "Ribose"
  },
  {
    "id": 8,
    "questionText": "Sucrose (table sugar) is an example of a:",
    "options": ["Monosaccharide", "Disaccharide", "Polysaccharide", "Pentose"],
    "correctAnswer": "Disaccharide"
  },
  {
    "id": 9,
    "questionText": "Maltose is made of which two monosaccharide units?",
    "options": ["Glucose and Fructose", "Glucose and Galactose", "Two Glucose molecules", "Glucose and Ribose"],
    "correctAnswer": "Two Glucose molecules"
  },
  {
    "id": 10,
    "questionText": "Polysaccharides are composed of hundreds to thousands of monosaccharide units and are generally:",
    "options": ["Soluble in water and sweet", "Soluble in water and tasteless", "Insoluble in water and tasteless", "Insoluble in water and sweet"],
    "correctAnswer": "Insoluble in water and tasteless"
  },
  {
    "id": 11,
    "questionText": "Which polysaccharide serves as a storage form of glucose in plants?",
    "options": ["Glycogen", "Chitin", "Cellulose", "Starch"],
    "correctAnswer": "Starch"
  },
  {
    "id": 12,
    "questionText": "Glycogen is the animal starch mainly stored in:",
    "options": ["Blood and muscles", "Liver and kidneys", "Liver and muscles", "Brain and heart"],
    "correctAnswer": "Liver and muscles"
  },
  {
    "id": 13,
    "questionText": "The cell walls of plants are primarily composed of which polysaccharide?",
    "options": ["Chitin", "Glycogen", "Cellulose", "Starch"],
    "correctAnswer": "Cellulose"
  },
  {
    "id": 14,
    "questionText": "Chitin is a modified form of cellulose found in the exoskeletons of:",
    "options": ["Fish and birds", "Crabs, lobsters, and insects", "Plants and fungi", "Mammals and reptiles"],
    "correctAnswer": "Crabs, lobsters, and insects"
  },
  {
    "id": 15,
    "questionText": "What is the primary function of carbohydrates in the body?",
    "options": ["Genetic information storage", "Structural support", "Primary source of energy", "Hormone production"],
    "correctAnswer": "Primary source of energy"
  },
  {
    "id": 16,
    "questionText": "Which type of sugar is an essential part of nucleic acids (RNA and DNA)?",
    "options": ["Hexoses", "Disaccharides", "Pentoses", "Polysaccharides"],
    "correctAnswer": "Pentoses"
  },
  {
    "id": 17,
    "questionText": "Proteins are the most abundant biomolecules in a cell and are polymers of:",
    "options": ["Glucose units", "Fatty acids", "Amino acids", "Nucleotides"],
    "correctAnswer": "Amino acids"
  },
  {
    "id": 18,
    "questionText": "How many types of amino acids participate in making most of the proteins?",
    "options": ["10", "15", "20", "25"],
    "correctAnswer": "20"
  },
  {
    "id": 19,
    "questionText": "An amino acid consists of an amino group (NH2), a carboxyl group (COOH), a hydrogen group (H), and a side group (R) attached to a central:",
    "options": ["Sulfur atom", "Nitrogen atom", "Carbon atom", "Oxygen atom"],
    "correctAnswer": "Carbon atom"
  },
  {
    "id": 20,
    "questionText": "Proteins are important components of:",
    "options": ["Cell membrane", "Cell wall", "Vacuole", "Chloroplast"],
    "correctAnswer": "Cell membrane"
  },
  {
    "id": 21,
    "questionText": "What is the function of enzymes, which are proteins?",
    "options": ["Store genetic information", "Catalyze biochemical reactions", "Transport oxygen", "Provide structural support to plants"],
    "correctAnswer": "Catalyze biochemical reactions"
  },
  {
    "id": 22,
    "questionText": "Which protein is responsible for transporting oxygen in the blood?",
    "options": ["Collagen", "Keratin", "Fibrin", "Haemoglobin"],
    "correctAnswer": "Haemoglobin"
  },
  {
    "id": 23,
    "questionText": "Actin and myosin proteins are the main components of:",
    "options": ["Bone tissue", "Muscle cells", "Nerve cells", "Epithelial tissue"],
    "correctAnswer": "Muscle cells"
  },
  {
    "id": 24,
    "questionText": "Fibrin is a blood clotting protein that helps to:",
    "options": ["Fight infections", "Regulate body processes", "Prevent blood loss after an injury", "Transport nutrients"],
    "correctAnswer": "Prevent blood loss after an injury"
  },
  {
    "id": 25,
    "questionText": "Lipids are organic compounds that are generally:",
    "options": ["Soluble in water", "Insoluble in organic solvents", "Insoluble in water but soluble in organic solvents", "Soluble in both water and organic solvents"],
    "correctAnswer": "Insoluble in water but soluble in organic solvents"
  },
  {
    "id": 26,
    "questionText": "Glycerol is an alcohol with how many carbon atoms?",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": "3"
  },
  {
    "id": 27,
    "questionText": "Fatty acids with maximum number of hydrogen atoms and single bonds between carbon atoms are called:",
    "options": ["Unsaturated fatty acids", "Saturated fatty acids", "Phospholipids", "Steroids"],
    "correctAnswer": "Saturated fatty acids"
  },
  {
    "id": 28,
    "questionText": "What is the core component of all cell membranes, formed by one glycerol, two fatty acids, and a phosphate group?",
    "options": ["Fats and oils", "Waxes", "Phospholipids", "Steroids"],
    "correctAnswer": "Phospholipids"
  },
  {
    "id": 29,
    "questionText": "Which of the following is NOT a source of lipids from plants?",
    "options": ["Sunflower oil", "Coconut oil", "Groundnut oil", "Dairy products"],
    "correctAnswer": "Dairy products"
  },
  {
    "id": 30,
    "questionText": "Lipids serve as a long-term energy reserve stored in:",
    "options": ["Muscle tissue", "Adipose tissues", "Liver cells", "Blood plasma"],
    "correctAnswer": "Adipose tissues"
  },
  {
    "id": 31,
    "questionText": "Steroid hormones are derived from which type of lipid?",
    "options": ["Fats", "Oils", "Phospholipids", "Cholesterol"],
    "correctAnswer": "Cholesterol"
  },
  {
    "id": 32,
    "questionText": "Lipids help in the absorption of fat-soluble vitamins, which include:",
    "options": ["Vitamin B and C", "Vitamin A, D, E, and K", "Vitamin B and A", "Vitamin C and E"],
    "correctAnswer": "Vitamin A, D, E, and K"
  },
  {
    "id": 33,
    "questionText": "Nucleic acids are biomolecules composed of units called:",
    "options": ["Amino acids", "Monosaccharides", "Nucleotides", "Fatty acids"],
    "correctAnswer": "Nucleotides"
  },
  {
    "id": 34,
    "questionText": "A nucleotide is made up of three components: pentose sugar, nitrogenous base, and a:",
    "options": ["Sulphate group", "Phosphate group", "Hydroxyl group", "Carboxyl group"],
    "correctAnswer": "Phosphate group"
  },
  {
    "id": 35,
    "questionText": "DNA is made of deoxyribonucleotides. The pentose sugar in DNA is:",
    "options": ["Ribose", "Glucose", "Deoxyribose", "Fructose"],
    "correctAnswer": "Deoxyribose"
  },
  {
    "id": 36,
    "questionText": "Which scientists proposed the double helix model of DNA in 1953?",
    "options": ["Robert Hooke and Anton van Leeuwenhoek", "James Watson and Francis Crick", "Gregor Mendel and Thomas Morgan", "Charles Darwin and Alfred Wallace"],
    "correctAnswer": "James Watson and Francis Crick"
  },
  {
    "id": 37,
    "questionText": "The nitrogenous bases in DNA are adenine (A), guanine (G), cytosine (C), and:",
    "options": ["Uracil (U)", "Thymine (T)", "Ribose (R)", "Phosphate (P)"],
    "correctAnswer": "Thymine (T)"
  },
  {
    "id": 38,
    "questionText": "In a DNA molecule, adenine (A) pairs specifically with which base?",
    "options": ["Cytosine (C)", "Guanine (G)", "Thymine (T)", "Uracil (U)"],
    "correctAnswer": "Thymine (T)"
  },
  {
    "id": 39,
    "questionText": "How many hydrogen bonds are formed between guanine (G) and cytosine (C) in DNA?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": "Three"
  },
  {
    "id": 40,
    "questionText": "RNA is a single-stranded molecule and contains which pentose sugar?",
    "options": ["Deoxyribose", "Ribose", "Glucose", "Fructose"],
    "correctAnswer": "Ribose"
  },
  {
    "id": 41,
    "questionText": "Which nitrogenous base is found in RNA but not in DNA?",
    "options": ["Adenine", "Guanine", "Cytosine", "Uracil"],
    "correctAnswer": "Uracil"
  },
  {
    "id": 42,
    "questionText": "Which type of RNA carries genetic information from DNA to the ribosomes during protein synthesis?",
    "options": ["Ribosomal RNA (rRNA)", "Transfer RNA (tRNA)", "Messenger RNA (mRNA)", "Small nuclear RNA (snRNA)"],
    "correctAnswer": "Messenger RNA (mRNA)"
  },
  {
    "id": 43,
    "questionText": "The process of making mRNA copy of DNA is called:",
    "options": ["Translation", "Replication", "Transcription", "Mutation"],
    "correctAnswer": "Transcription"
  },
  {
    "id": 44,
    "questionText": "The process where the mRNA sequence joins specific amino acids to form a protein is known as:",
    "options": ["Transcription", "Replication", "Translation", "Polymerization"],
    "correctAnswer": "Translation"
  },
  {
    "id": 45,
    "questionText": "Proteins are synthesized on which cellular organelles?",
    "options": ["Nucleus", "Mitochondria", "Ribosomes", "Golgi apparatus"],
    "correctAnswer": "Ribosomes"
  },
  {
    "id": 46,
    "questionText": "Which biomolecule is responsible for carrying hereditary information?",
    "options": ["Proteins", "Lipids", "DNA", "Carbohydrates"],
    "correctAnswer": "DNA"
  },
  {
    "id": 47,
    "questionText": "In the table of major biomolecules and their functions, where are proteins primarily located?",
    "options": ["Only cytoplasm", "Cell membrane, cytoplasm, endoplasmic reticulum, Golgi apparatus, lysosome, mitochondria", "Nucleus only", "Chloroplast only"],
    "correctAnswer": "Cell membrane, cytoplasm, endoplasmic reticulum, Golgi apparatus, lysosome, mitochondria"
  },
  {
    "id": 48,
    "questionText": "Which class of biomolecules includes starch, glycogen, and cellulose?",
    "options": ["Monosaccharides", "Disaccharides", "Polysaccharides", "Lipids"],
    "correctAnswer": "Polysaccharides"
  },
  {
    "id": 49,
    "questionText": "All the chemical reactions that occur in an organism are collectively called:",
    "options": ["Anabolism", "Catabolism", "Metabolism", "Bioenergetics"],
    "correctAnswer": "Metabolism"
  },
  {
    "id": 50,
    "questionText": "What is the function of transfer RNA (tRNA)?",
    "options": ["Carries genetic information from DNA to ribosomes", "Transfers specific amino acids to ribosomes", "Constitutes structural components of ribosomes", "Forms the double helix"],
    "correctAnswer": "Transfers specific amino acids to ribosomes"
  }
],
  "ENZYMES": [
  {
    "id": 1,
    "questionText": "Metabolism encompasses all chemical reactions occurring within an organism, divided into two sub-sets: anabolism and:",
    "options": ["Catabolism", "Bioenergetics", "Homeostasis", "Reproduction"],
    "correctAnswer": "Catabolism"
  },
  {
    "id": 2,
    "questionText": "The breakdown of complex molecules into simpler ones, releasing energy, is an example of:",
    "options": ["Anabolism", "Catabolism", "Photosynthesis", "Protein synthesis"],
    "correctAnswer": "Catabolism"
  },
  {
    "id": 3,
    "questionText": "Cellular respiration, where a food (glucose) molecule is broken into CO2 and H2O to get energy, is a process of:",
    "options": ["Anabolism", "Catabolism", "Biosynthesis", "Polymerization"],
    "correctAnswer": "Catabolism"
  },
  {
    "id": 4,
    "questionText": "Synthesis of proteins by joining amino acids is an example of:",
    "options": ["Catabolism", "Anabolism", "Oxidation", "Reduction"],
    "correctAnswer": "Anabolism"
  },
  {
    "id": 5,
    "questionText": "Enzymes are biological catalysts that speed up chemical reactions in living organisms without being:",
    "options": ["Consumed in the process", "Affected by temperature", "Present in all cells", "Composed of proteins"],
    "correctAnswer": "Consumed in the process"
  },
  {
    "id": 6,
    "questionText": "What is the chemical nature of enzymes?",
    "options": ["Lipids", "Carbohydrates", "Predominantly proteins", "Nucleic acids"],
    "correctAnswer": "Predominantly proteins"
  },
  {
    "id": 7,
    "questionText": "Enzymes typically contain how many amino acids?",
    "options": ["10-50", "50-100", "100-1,000 amino acids", "1,000-5,000 amino acids"],
    "correctAnswer": "100-1,000 amino acids"
  },
  {
    "id": 8,
    "questionText": "The globular structure of enzymes allows them to form:",
    "options": ["Ionic bonds", "Covalent bonds", "Active sites", "Peptide bonds"],
    "correctAnswer": "Active sites"
  },
  {
    "id": 9,
    "questionText": "The property of enzymes to catalyze specific reactions for specific substrates is known as:",
    "options": ["Denaturation", "Specificity", "Inhibition", "Activation"],
    "correctAnswer": "Specificity"
  },
  {
    "id": 10,
    "questionText": "Amylase enzyme specifically catalyzes the breakdown of starch into simple sugars, demonstrating enzyme:",
    "options": ["Versatility", "Efficiency", "Stability", "Specificity"],
    "correctAnswer": "Specificity"
  },
  {
    "id": 11,
    "questionText": "Enzymes that operate within cells, e.g., enzymes of cellular respiration, are called:",
    "options": ["Extracellular enzymes", "Intracellular enzymes", "Coenzymes", "Prosthetic groups"],
    "correctAnswer": "Intracellular enzymes"
  },
  {
    "id": 12,
    "questionText": "Enzymes secreted outside the cells to catalyze reactions, e.g., enzymes working in stomach cavity for digestion of food, are called:",
    "options": ["Intracellular enzymes", "Extracellular enzymes", "Holoenzymes", "Apoenzymes"],
    "correctAnswer": "Extracellular enzymes"
  },
  {
    "id": 13,
    "questionText": "Non-protein molecules required by enzymes to be fully active are called:",
    "options": ["Substrates", "Inhibitors", "Cofactors", "Products"],
    "correctAnswer": "Cofactors"
  },
  {
    "id": 14,
    "questionText": "Inorganic cofactors include metal ions like:",
    "options": ["Sodium and Potassium", "Iron and Magnesium", "Calcium and Zinc", "Copper and Manganese"],
    "correctAnswer": "Iron and Magnesium"
  },
  {
    "id": 15,
    "questionText": "Organic cofactors that are tightly bound to the enzymes, e.g., vitamins (biotin) and the haem group, are called:",
    "options": ["Coenzymes", "Prosthetic groups", "Activators", "Inhibitors"],
    "correctAnswer": "Prosthetic groups"
  },
  {
    "id": 16,
    "questionText": "Organic cofactors which loosely bind to the enzyme, e.g., many vitamins and nucleotides (NAD and NADP), are called:",
    "options": ["Prosthetic groups", "Competitive inhibitors", "Coenzymes", "Non-competitive inhibitors"],
    "correctAnswer": "Coenzymes"
  },
  {
    "id": 17,
    "questionText": "Which enzyme is used in food industry to break starch into simple sugars for the production of white bread, buns, and rolls?",
    "options": ["Lipase", "Protease", "Amylase", "Cellulase"],
    "correctAnswer": "Amylase"
  },
  {
    "id": 18,
    "questionText": "Protease enzymes are used for the removal of protein stains from clothes, acting as a:",
    "options": ["Biological lubricant", "Biological detergent", "Biological adhesive", "Biological emulsifier"],
    "correctAnswer": "Biological detergent"
  },
  {
    "id": 19,
    "questionText": "In 1894, which German chemist proposed the Lock and Key Model of enzyme action?",
    "options": ["Daniel Koshland", "Emil Fischer", "James Watson", "Francis Crick"],
    "correctAnswer": "Emil Fischer"
  },
  {
    "id": 20,
    "questionText": "According to the Lock and Key Model, the active site of an enzyme has a fixed structure, meaning it is:",
    "options": ["Flexible", "Rigid", "Adaptable", "Variable"],
    "correctAnswer": "Rigid"
  },
  {
    "id": 21,
    "questionText": "The enzyme-substrate complex is formed when:",
    "options": ["The product is released from the enzyme", "The enzyme denatures", "The substrate precisely fits into the enzyme's active site", "An inhibitor binds to the enzyme"],
    "correctAnswer": "The substrate precisely fits into the enzyme's active site"
  },
  {
    "id": 22,
    "questionText": "Which American biologist proposed the Induced Fit Model in 1958?",
    "options": ["Emil Fischer", "Daniel Koshland", "Robert Hooke", "Louis Pasteur"],
    "correctAnswer": "Daniel Koshland"
  },
  {
    "id": 23,
    "questionText": "According to the Induced Fit Model, the active site of an enzyme is:",
    "options": ["Always rigid", "Reshaped to perform its function when substrate interacts", "Irreversible", "Independent of substrate binding"],
    "correctAnswer": "Reshaped to perform its function when substrate interacts"
  },
  {
    "id": 24,
    "questionText": "When temperature rises to a certain limit, the heat adds in the movement of molecules, causing the rate of enzyme action to:",
    "options": ["Decrease", "Remain constant", "Increase", "Stop completely"],
    "correctAnswer": "Increase"
  },
  {
    "id": 25,
    "questionText": "Beyond the optimum temperature, the globular structure of the enzyme is lost. This is called:",
    "options": ["Activation", "Renaturation", "Denaturation", "Catalysis"],
    "correctAnswer": "Denaturation"
  },
  {
    "id": 26,
    "questionText": "What is the optimum temperature for human enzymes?",
    "options": ["25°C", "37°C", "45°C", "50°C"],
    "correctAnswer": "37°C"
  },
  {
    "id": 27,
    "questionText": "Enzymes are sensitive to which factor related to hydrogen ion concentration?",
    "options": ["Temperature", "pH", "Substrate concentration", "Cofactor presence"],
    "correctAnswer": "pH"
  },
  {
    "id": 28,
    "questionText": "Pepsin works best in acidic medium, with an optimum pH of:",
    "options": ["7 to 8", "4.5 to 5.5", "1.5 to 2.0", "6.0 to 7.0"],
    "correctAnswer": "1.5 to 2.0"
  },
  {
    "id": 29,
    "questionText": "Trypsin works best in alkaline medium, with an optimum pH of:",
    "options": ["1.5 to 2.0", "4.0 to 5.0", "7 to 8", "9 to 10"],
    "correctAnswer": "7 to 8"
  },
  {
    "id": 30,
    "questionText": "An increase in substrate concentration generally causes the rate of reaction to:",
    "options": ["Decrease", "Remain constant", "Increase", "Flucatuate unpredictably"],
    "correctAnswer": "Increase"
  },
  {
    "id": 31,
    "questionText": "When all active sites of enzymes are occupied, the rate of reaction becomes:",
    "options": ["Zero", "Maximal", "Unpredictable", "Dependent on temperature only"],
    "correctAnswer": "Maximal"
  },
  {
    "id": 32,
    "questionText": "Substances that interfere with and block an enzyme's activity are called:",
    "options": ["Activators", "Cofactors", "Inhibitors", "Substrates"],
    "correctAnswer": "Inhibitors"
  },
  {
    "id": 33,
    "questionText": "Which type of inhibition occurs when the inhibitor resembles the substrate and competes for the active site?",
    "options": ["Non-competitive inhibition", "Irreversible inhibition", "Competitive inhibition", "Allosteric inhibition"],
    "correctAnswer": "Competitive inhibition"
  },
  {
    "id": 34,
    "questionText": "Antibiotics are examples of which type of enzyme inhibitors?",
    "options": ["Non-competitive inhibitors", "Competitive inhibitors", "Reversible inhibitors", "Uncompetitive inhibitors"],
    "correctAnswer": "Competitive inhibitors"
  },
  {
    "id": 35,
    "questionText": "In non-competitive inhibition, the inhibitor attaches to which part of the enzyme?",
    "options": ["The active site", "A different site, changing the shape of the active site", "The substrate only", "The product only"],
    "correctAnswer": "A different site, changing the shape of the active site"
  },
  {
    "id": 36,
    "questionText": "Heavy metals like mercury and certain drugs used in cancer therapy are examples of:",
    "options": ["Competitive inhibitors", "Non-competitive inhibitors", "Coenzymes", "Prosthetic groups"],
    "correctAnswer": "Non-competitive inhibitors"
  },
  {
    "id": 37,
    "questionText": "Ribozymes are an example of which type of molecule that acts as an enzyme?",
    "options": ["Protein", "Lipid", "RNA", "Carbohydrate"],
    "correctAnswer": "RNA"
  },
  {
    "id": 38,
    "questionText": "What is a characteristic of enzymes regarding chemical reactions?",
    "options": ["They increase the time required for reactions.", "They are consumed during the reaction.", "They speed up chemical reactions.", "They change the equilibrium of a reaction."],
    "correctAnswer": "They speed up chemical reactions."
  },
  {
    "id": 39,
    "questionText": "What is the common term for the substance upon which an enzyme acts?",
    "options": ["Inhibitor", "Cofactor", "Product", "Substrate"],
    "correctAnswer": "Substrate"
  },
  {
    "id": 40,
    "questionText": "An enzyme's active site is where the substrate binds. What determines the specificity of an enzyme?",
    "options": ["Its overall size", "The shape and chemical properties of its active site", "The pH of the environment", "The temperature of the environment"],
    "correctAnswer": "The shape and chemical properties of its active site"
  },
  {
    "id": 41,
    "questionText": "Which of the following is NOT a type of cofactor?",
    "options": ["Metal ions", "Prosthetic groups", "Coenzymes", "Substrates"],
    "correctAnswer": "Substrates"
  },
  {
    "id": 42,
    "questionText": "Which enzyme is used to degrade starch to lower its viscosity in paper making industry?",
    "options": ["Protease", "Cellulase", "Amylase", "Lipase"],
    "correctAnswer": "Amylase"
  },
  {
    "id": 43,
    "questionText": "What happens to enzyme activity if the temperature is significantly above the optimum?",
    "options": ["It increases indefinitely.", "It remains constant.", "It rapidly decreases due to denaturation.", "It slightly increases."],
    "correctAnswer": "It rapidly decreases due to denaturation."
  },
  {
    "id": 44,
    "questionText": "The pH value that results in the maximum rate of enzyme activity is called the:",
    "options": ["Optimal temperature", "Optimal concentration", "Optimal pH", "Denaturation point"],
    "correctAnswer": "Optimal pH"
  },
  {
    "id": 45,
    "questionText": "What is the effect of increasing substrate concentration when all active sites of an enzyme are already occupied?",
    "options": ["The rate of reaction continues to increase.", "The rate of reaction decreases.", "The rate of reaction remains constant (maximal).", "The enzyme denatures."],
    "correctAnswer": "The rate of reaction remains constant (maximal)."
  },
  {
    "id": 46,
    "questionText": "If a competitive inhibitor is present, how does it affect the substrate's ability to bind to the enzyme?",
    "options": ["It enhances the binding.", "It blocks the substrate from attaching.", "It changes the shape of the substrate.", "It has no effect."],
    "correctAnswer": "It blocks the substrate from attaching."
  },
  {
    "id": 47,
    "questionText": "What distinguishes a non-competitive inhibitor from a competitive inhibitor?",
    "options": ["Non-competitive inhibitors attach to the active site.", "Non-competitive inhibitors change the enzyme's shape by binding elsewhere.", "Non-competitive inhibitors are always proteins.", "Non-competitive inhibitors are only found in drugs."],
    "correctAnswer": "Non-competitive inhibitors change the enzyme's shape by binding elsewhere."
  },
  {
    "id": 48,
    "questionText": "The overall chemical processes occurring in living organisms, including both anabolism and catabolism, are collectively known as:",
    "options": ["Homeostasis", "Bioenergetics", "Metabolism", "Physiology"],
    "correctAnswer": "Metabolism"
  },
  {
    "id": 49,
    "questionText": "Enzymes work at their maximum rate at which condition?",
    "options": ["Lower temperature and pH", "Optimum temperature and pH", "Higher temperature and pH", "Varying temperature and pH"],
    "correctAnswer": "Optimum temperature and pH"
  },
  {
    "id": 50,
    "questionText": "When an inhibitor blocks an enzyme's activity, this phenomenon is known as:",
    "options": ["Enzyme activation", "Enzyme catalysis", "Enzyme inhibition", "Enzyme regulation"],
    "correctAnswer": "Enzyme inhibition"
  }
],
  "BIOENERGETICS": [
  {
    "id": 1,
    "questionText": "Bioenergetics is the study of how living organisms acquire, convert, store, and utilize energy to fuel their life processes, primarily obtained from:",
    "options": ["Surroundings", "Food", "Water", "Air"],
    "correctAnswer": "Food"
  },
  {
    "id": 2,
    "questionText": "What type of reactions involve the transfer of electrons between molecules?",
    "options": ["Hydrolysis reactions", "Condensation reactions", "Oxidation-reduction (redox) reactions", "Acid-base reactions"],
    "correctAnswer": "Oxidation-reduction (redox) reactions"
  },
  {
    "id": 3,
    "questionText": "In oxidation-reduction reactions, if a molecule loses electrons, it is considered:",
    "options": ["Reduced", "Oxidized", "Neutralized", "Activated"],
    "correctAnswer": "Oxidized"
  },
  {
    "id": 4,
    "questionText": "The chief energy currency of all cells is:",
    "options": ["Glucose", "ADP", "ATP", "NADP"],
    "correctAnswer": "ATP"
  },
  {
    "id": 5,
    "questionText": "ATP (Adenosine triphosphate) is a nucleotide composed of adenine, a five-carbon sugar (ribose), and:",
    "options": ["One phosphate group", "Two phosphate groups", "Three phosphate groups", "Four phosphate groups"],
    "correctAnswer": "Three phosphate groups"
  },
  {
    "id": 6,
    "questionText": "Energy is released from ATP when which bond is broken?",
    "options": ["Between adenine and ribose", "Between ribose and the first phosphate", "Between the second and third phosphate (high-energy bonds)", "Within the adenine molecule"],
    "correctAnswer": "Between the second and third phosphate (high-energy bonds)"
  },
  {
    "id": 7,
    "questionText": "The breaking of one phosphate bond releases approximately how much energy?",
    "options": ["3.7 kcal", "7.3 kcal", "17.3 kcal", "27.3 kcal"],
    "correctAnswer": "7.3 kcal"
  },
  {
    "id": 8,
    "questionText": "When ADP combines with an inorganic phosphate (Pi) to form ATP, energy is:",
    "options": ["Released", "Absorbed", "Stored", "Converted to heat"],
    "correctAnswer": "Stored"
  },
  {
    "id": 9,
    "questionText": "Photosynthesis is the synthesis of glucose from carbon dioxide and water in the presence of sunlight and chlorophyll, with what as a by-product?",
    "options": ["Carbon dioxide", "Glucose", "Oxygen", "ATP"],
    "correctAnswer": "Oxygen"
  },
  {
    "id": 10,
    "questionText": "Photosynthesis occurs in two phases: light reactions and:",
    "options": ["Aerobic reactions", "Dark reactions", "Cellular respiration", "Glycolysis"],
    "correctAnswer": "Dark reactions"
  },
  {
    "id": 11,
    "questionText": "Light reactions of photosynthesis take place in which part of the chloroplast?",
    "options": ["Stroma", "Thylakoid membranes", "Outer membrane", "Inner membrane"],
    "correctAnswer": "Thylakoid membranes"
  },
  {
    "id": 12,
    "questionText": "During light reactions, light energy is used to make high-energy molecules, ATP and:",
    "options": ["NADPH", "NADP", "ADP", "H2O"],
    "correctAnswer": "NADPH"
  },
  {
    "id": 13,
    "questionText": "Which molecule absorbs light and releases high-energy electrons during light reactions?",
    "options": ["Water", "Oxygen", "Chlorophyll", "Glucose"],
    "correctAnswer": "Chlorophyll"
  },
  {
    "id": 14,
    "questionText": "In the light reactions, water molecules break, releasing oxygen and providing:",
    "options": ["Carbon dioxide", "Glucose", "Hydrogen ions and electrons", "ATP only"],
    "correctAnswer": "Hydrogen ions and electrons"
  },
  {
    "id": 15,
    "questionText": "The dark reactions of photosynthesis are also known as the:",
    "options": ["Light-independent reactions", "Electron transport chain", "Krebs Cycle", "Calvin Cycle"],
    "correctAnswer": "Calvin Cycle"
  },
  {
    "id": 16,
    "questionText": "During the Calvin Cycle, CO2 molecules combine with a 5-carbon compound to form a:",
    "options": ["3-carbon compound", "4-carbon compound", "6-carbon compound", "2-carbon compound"],
    "correctAnswer": "6-carbon compound"
  },
  {
    "id": 17,
    "questionText": "The 3-carbon compounds formed in the Calvin Cycle are reduced using ATP and hydrogen from NADPH to make:",
    "options": ["Oxygen", "Water", "Glucose", "Carbon dioxide"],
    "correctAnswer": "Glucose"
  },
  {
    "id": 18,
    "questionText": "Chlorophyll-a and chlorophyll-b, along with carotenoids, are examples of:",
    "options": ["Storage pigments", "Accessory pigments", "Structural pigments", "Defensive pigments"],
    "correctAnswer": "Accessory pigments"
  },
  {
    "id": 19,
    "questionText": "What percentage of the light falling on the leaf surface is absorbed, reflected, or transmitted?",
    "options": ["About 5%", "About 10%", "About 1%", "About 0.1%"],
    "correctAnswer": "About 0.1%"
  },
  {
    "id": 20,
    "questionText": "Cellular respiration is the process by which organisms get energy by breaking the C-H bonds of:",
    "options": ["Water", "Oxygen", "Food", "Chlorophyll"],
    "correctAnswer": "Food"
  },
  {
    "id": 21,
    "questionText": "Cellular respiration that occurs in the presence of oxygen is called:",
    "options": ["Anaerobic respiration", "Fermentation", "Aerobic respiration", "Photosynthesis"],
    "correctAnswer": "Aerobic respiration"
  },
  {
    "id": 22,
    "questionText": "In aerobic respiration, a molecule of glucose (6-C) is broken down into two molecules of:",
    "options": ["Lactic acid", "Pyruvic acid (3-C)", "Ethanol", "Carbon dioxide"],
    "correctAnswer": "Pyruvic acid (3-C)"
  },
  {
    "id": 23,
    "questionText": "Cellular respiration that occurs in the absence of oxygen is called:",
    "options": ["Aerobic respiration", "Fermentation (Anaerobic respiration)", "Glycolysis", "Krebs Cycle"],
    "correctAnswer": "Fermentation (Anaerobic respiration)"
  },
  {
    "id": 24,
    "questionText": "In alcoholic fermentation, yeast breaks down pyruvic acid into ethanol and:",
    "options": ["Lactic acid", "Oxygen", "Carbon dioxide", "Water"],
    "correctAnswer": "Carbon dioxide"
  },
  {
    "id": 25,
    "questionText": "Lactic acid fermentation occurs in the skeletal muscles of humans and other animals, converting pyruvic acid into:",
    "options": ["Ethanol", "Carbon dioxide", "Lactic acid", "Acetyl CoA"],
    "correctAnswer": "Lactic acid"
  },
  {
    "id": 26,
    "questionText": "The first step in both aerobic and anaerobic respiration where a glucose molecule is broken down into two molecules of pyruvic acid is called:",
    "options": ["Krebs Cycle", "Electron Transport Chain", "Glycolysis", "Fermentation"],
    "correctAnswer": "Glycolysis"
  },
  {
    "id": 27,
    "questionText": "During glycolysis, how many ATPs are produced as a net gain?",
    "options": ["1", "2", "4", "36"],
    "correctAnswer": "2"
  },
  {
    "id": 28,
    "questionText": "The Krebs Cycle occurs in the:",
    "options": ["Cytoplasm", "Mitochondria", "Nucleus", "Chloroplast"],
    "correctAnswer": "Mitochondria"
  },
  {
    "id": 29,
    "questionText": "Before entering the Krebs Cycle, pyruvic acid is converted into:",
    "options": ["Lactic acid", "Ethanol", "Acetyl coenzyme-A", "Glucose"],
    "correctAnswer": "Acetyl coenzyme-A"
  },
  {
    "id": 30,
    "questionText": "The Krebs Cycle is a series of reactions discovered by which British scientist?",
    "options": ["Melvin Calvin", "Hans Krebs", "Robert Hooke", "Louis Pasteur"],
    "correctAnswer": "Hans Krebs"
  },
  {
    "id": 31,
    "questionText": "In the Krebs Cycle, acetyl coenzyme-A is completely oxidized to:",
    "options": ["Glucose", "Water", "Carbon dioxide", "Pyruvic acid"],
    "correctAnswer": "Carbon dioxide"
  },
  {
    "id": 32,
    "questionText": "The electron transport chain occurs on which membranes of mitochondria?",
    "options": ["Outer membranes", "Inner membranes", "Both outer and inner membranes", "Stroma"],
    "correctAnswer": "Inner membranes"
  },
  {
    "id": 33,
    "questionText": "During the electron transport chain, electrons pass through a series of electron carriers, and the energy released is used to convert ADP into:",
    "options": ["AMP", "ATP", "NADP", "Glucose"],
    "correctAnswer": "ATP"
  },
  {
    "id": 34,
    "questionText": "How many ATP molecules are produced as net profit during aerobic respiration from one glucose molecule?",
    "options": ["2", "4", "36", "38"],
    "correctAnswer": "36"
  },
  {
    "id": 35,
    "questionText": "Which of the following processes is NOT a way respiratory energy (ATP) is used in the body?",
    "options": ["Muscle contractions", "Active transport of substances", "Photosynthesis", "Replication of DNA"],
    "correctAnswer": "Photosynthesis"
  },
  {
    "id": 36,
    "questionText": "What is the main difference in terms of oxygen presence between aerobic and anaerobic respiration?",
    "options": ["Aerobic needs oxygen, Anaerobic does not.", "Anaerobic needs oxygen, Aerobic does not.", "Both need oxygen.", "Neither needs oxygen."],
    "correctAnswer": "Aerobic needs oxygen, Anaerobic does not."
  },
  {
    "id": 37,
    "questionText": "The primary energy investment in photosynthesis is:",
    "options": ["Energy is stored in the form of bond energy.", "Bond energy of food is transformed into ATP.", "ATP is produced.", "Chemical energy is converted to light energy."],
    "correctAnswer": "Energy is stored in the form of bond energy."
  },
  {
    "id": 38,
    "questionText": "Which organisms are capable of performing photosynthesis?",
    "options": ["All organisms", "Some bacteria, all algae, and all plants", "Only plants", "Only bacteria and algae"],
    "correctAnswer": "Some bacteria, all algae, and all plants"
  },
  {
    "id": 39,
    "questionText": "Where does photosynthesis primarily occur in eukaryotic cells?",
    "options": ["Cytoplasm", "Mitochondria", "Chloroplasts", "Nucleus"],
    "correctAnswer": "Chloroplasts"
  },
  {
    "id": 40,
    "questionText": "When does photosynthesis typically occur?",
    "options": ["All the time", "Only at night", "In daytime only, in the presence of light", "Only in the absence of light"],
    "correctAnswer": "In daytime only, in the presence of light"
  },
  {
    "id": 41,
    "questionText": "The conversion of ADP to ATP is an example of energy:",
    "options": ["Release", "Absorption", "Storage", "Consumption"],
    "correctAnswer": "Storage"
  },
  {
    "id": 42,
    "questionText": "During light reactions, electrons are passed to an electron transport chain from:",
    "options": ["Water molecules", "Glucose", "Chlorophyll", "Carbon dioxide"],
    "correctAnswer": "Chlorophyll"
  },
  {
    "id": 43,
    "questionText": "NADP (Nicotinamide Adenine Dinucleotide Phosphate) is reduced to NADPH by accepting:",
    "options": ["Oxygen and electrons", "Hydrogen ions and electrons", "Carbon dioxide and water", "ATP and ADP"],
    "correctAnswer": "Hydrogen ions and electrons"
  },
  {
    "id": 44,
    "questionText": "Which part of the chloroplast is where dark reactions take place?",
    "options": ["Thylakoid membrane", "Grana", "Stroma", "Outer membrane"],
    "correctAnswer": "Stroma"
  },
  {
    "id": 45,
    "questionText": "Carotenoids are examples of:",
    "options": ["Green pigments", "Yellow and orange pigments", "Blue pigments", "Red pigments"],
    "correctAnswer": "Yellow and orange pigments"
  },
  {
    "id": 46,
    "questionText": "In anaerobic respiration, what is the net ATP production from one glucose molecule?",
    "options": ["36", "38", "2", "0"],
    "correctAnswer": "2"
  },
  {
    "id": 47,
    "questionText": "The final products of alcoholic fermentation are ethanol and carbon dioxide, while the final product of lactic acid fermentation is:",
    "options": ["Pyruvic acid", "Water", "Lactic acid", "Oxygen"],
    "correctAnswer": "Lactic acid"
  },
  {
    "id": 48,
    "questionText": "In aerobic respiration, the complete oxidation of glucose occurs in the presence of:",
    "options": ["Water", "Oxygen", "Carbon dioxide", "Nitrogen"],
    "correctAnswer": "Oxygen"
  },
  {
    "id": 49,
    "questionText": "What is the outcome of a molecule gaining electrons in a redox reaction?",
    "options": ["Oxidation", "Reduction", "Hydrolysis", "Synthesis"],
    "correctAnswer": "Reduction"
  },
  {
    "id": 50,
    "questionText": "Which molecule serves as the primary energy currency for cellular activities?",
    "options": ["Glucose", "DNA", "ATP", "Protein"],
    "correctAnswer": "ATP"
  }
],
  "PLANT PHYSIOLOGY": [
  {
    "id": 1,
    "questionText": "Nutrition in plants refers to the processes in which food is prepared or obtained and converted into body substances for:",
    "options": ["Photosynthesis", "Growth and energy", "Reproduction", "Water transport"],
    "correctAnswer": "Growth and energy"
  },
  {
    "id": 2,
    "questionText": "Minerals required by plants in larger quantities are called:",
    "options": ["Micronutrients", "Macronutrients", "Trace elements", "Essential elements"],
    "correctAnswer": "Macronutrients"
  },
  {
    "id": 3,
    "questionText": "Which of the following is a macronutrient for plants?",
    "options": ["Iron", "Copper", "Boron", "Nitrogen"],
    "correctAnswer": "Nitrogen"
  },
  {
    "id": 4,
    "questionText": "Which of the following is a micronutrient for plants?",
    "options": ["Phosphorus", "Potassium", "Zinc", "Calcium"],
    "correctAnswer": "Zinc"
  },
  {
    "id": 5,
    "questionText": "Nitrogen is a necessary part of all proteins, enzymes, and nucleic acids, and its deficiency leads to insufficient production of:",
    "options": ["Sugars", "Lipids", "Chlorophyll", "Water"],
    "correctAnswer": "Chlorophyll"
  },
  {
    "id": 6,
    "questionText": "Magnesium is a part of chlorophyll and its deficiency leads to:",
    "options": ["Chlorosis (yellowing of leaves)", "Stunted growth", "Reduced seed formation", "Increased disease resistance"],
    "correctAnswer": "Chlorosis (yellowing of leaves)"
  },
  {
    "id": 7,
    "questionText": "The movement of substances such as water, nutrients, hormones, and waste products within an organism is essential for:",
    "options": ["Reproduction", "Environmental changes", "Cellular respiration", "Cellular functions, growth, and responses to environmental changes"],
    "correctAnswer": "Cellular functions, growth, and responses to environmental changes"
  },
  {
    "id": 8,
    "questionText": "The movement of ions or molecules across a cell membrane from a region of higher concentration to a region of lower concentration, without requiring energy, is called:",
    "options": ["Active Transport", "Osmosis", "Passive Transport", "Translocation"],
    "correctAnswer": "Passive Transport"
  },
  {
    "id": 9,
    "questionText": "The movement of water molecules through a semi-permeable membrane from a region of lower solute concentration to a region of higher solute concentration is known as:",
    "options": ["Diffusion", "Active Transport", "Osmosis", "Transpiration"],
    "correctAnswer": "Osmosis"
  },
  {
    "id": 10,
    "questionText": "The outermost covering of the root, with extensions called root hairs, is the:",
    "options": ["Cortex", "Pericycle", "Endodermis", "Epidermis"],
    "correctAnswer": "Epidermis"
  },
  {
    "id": 11,
    "questionText": "Root hairs increase the surface area for absorption of water and minerals from the soil by:",
    "options": ["Diffusion", "Osmosis", "Active transport", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 12,
    "questionText": "The innermost boundary of the cortex that receives water from the cortex is the:",
    "options": ["Epidermis", "Pericycle", "Endodermis", "Vascular bundle"],
    "correctAnswer": "Endodermis"
  },
  {
    "id": 13,
    "questionText": "Which vascular tissue transports water and minerals from the root to the stem?",
    "options": ["Phloem", "Xylem", "Cortex", "Epidermis"],
    "correctAnswer": "Xylem"
  },
  {
    "id": 14,
    "questionText": "The loss of water in the form of vapours from the plant surface is called:",
    "options": ["Guttation", "Osmosis", "Transpiration", "Adsorption"],
    "correctAnswer": "Transpiration"
  },
  {
    "id": 15,
    "questionText": "Transpiration primarily occurs through which structures on leaves?",
    "options": ["Lenticels", "Stomata", "Cuticle", "Hairs"],
    "correctAnswer": "Stomata"
  },
  {
    "id": 16,
    "questionText": "Stomata open and close because of changes in the turgor pressure of their:",
    "options": ["Epidermal cells", "Mesophyll cells", "Guard cells", "Xylem cells"],
    "correctAnswer": "Guard cells"
  },
  {
    "id": 17,
    "questionText": "During daytime, guard cells become turgid, leading to stomata:",
    "options": ["Closing", "Opening", "Remaining unchanged", "Shrinking"],
    "correctAnswer": "Opening"
  },
  {
    "id": 18,
    "questionText": "Which of the following factors increases the rate of transpiration?",
    "options": ["Decreased temperature", "High humidity", "Increased wind speed", "Decreased surface area of stomata"],
    "correctAnswer": "Increased wind speed"
  },
  {
    "id": 19,
    "questionText": "The pulling force in leaves created by transpiration that helps draw water from roots is called:",
    "options": ["Root pressure", "Transpiration pull", "Capillary action", "Osmotic pressure"],
    "correctAnswer": "Transpiration pull"
  },
  {
    "id": 20,
    "questionText": "Which tissue is responsible for the transport of food (sugars) from photosynthetic tissues to storage tissues?",
    "options": ["Xylem", "Epidermis", "Phloem", "Cortex"],
    "correctAnswer": "Phloem"
  },
  {
    "id": 21,
    "questionText": "The mechanism of food translocation in plants is explained by the:",
    "options": ["Cohesion-tension theory", "Root pressure theory", "Pressure flow mechanism", "Capillary action theory"],
    "correctAnswer": "Pressure flow mechanism"
  },
  {
    "id": 22,
    "questionText": "At the source site, food (sucrose) enters the sieve tubes of phloem by:",
    "options": ["Passive transport", "Active transport", "Osmosis", "Diffusion"],
    "correctAnswer": "Active transport"
  },
  {
    "id": 23,
    "questionText": "During the daytime, what do all plant cells carry out?",
    "options": ["Only cellular respiration", "Only photosynthesis", "Both cellular respiration and photosynthesis", "Neither cellular respiration nor photosynthesis"],
    "correctAnswer": "Both cellular respiration and photosynthesis"
  },
  {
    "id": 24,
    "questionText": "In woody stems, gaseous exchange occurs through special pores called:",
    "options": ["Stomata", "Guard cells", "Lenticels", "Root hairs"],
    "correctAnswer": "Lenticels"
  },
  {
    "id": 25,
    "questionText": "The loss of extra water from plants in the form of liquid droplets from leaf margins at night is called:",
    "options": ["Transpiration", "Evaporation", "Guttation", "Excretion"],
    "correctAnswer": "Guttation"
  },
  {
    "id": 26,
    "questionText": "What is the common origin of the water droplets released during guttation?",
    "options": ["Xylem tissue", "Phloem tissue", "Epidermal cells", "Guard cells"],
    "correctAnswer": "Xylem tissue"
  },
  {
    "id": 27,
    "questionText": "Which type of plants are adapted to survive in moderate environments, neither too dry nor too wet?",
    "options": ["Hydrophytes", "Xerophytes", "Mesophytes", "Halophytes"],
    "correctAnswer": "Mesophytes"
  },
  {
    "id": 28,
    "questionText": "Plants like waterlily, living in freshwater environments, are examples of:",
    "options": ["Xerophytes", "Mesophytes", "Halophytes", "Hydrophytes"],
    "correctAnswer": "Hydrophytes"
  },
  {
    "id": 29,
    "questionText": "Cacti, which store water in their specialized stems or roots, are examples of:",
    "options": ["Hydrophytes", "Halophytes", "Xerophytes", "Mesophytes"],
    "correctAnswer": "Xerophytes"
  },
  {
    "id": 30,
    "questionText": "Halophytes live in habitats with salty waters and tend to move water out of their cells due to the:",
    "options": ["Isotonic environment", "Hypotonic environment", "Hypertonic environment", "Neutral environment"],
    "correctAnswer": "Hypertonic environment"
  },
  {
    "id": 31,
    "questionText": "Plants like sea grasses excrete excess salt through:",
    "options": ["Stomata", "Root hairs", "Salt glands", "Lenticels"],
    "correctAnswer": "Salt glands"
  },
  {
    "id": 32,
    "questionText": "Which of the following is NOT a macronutrient according to the source?",
    "options": ["Carbon", "Manganese", "Oxygen", "Phosphorus"],
    "correctAnswer": "Manganese"
  },
  {
    "id": 33,
    "questionText": "The element required for seed germination, photosynthesis, and nucleic acids is:",
    "options": ["Potassium", "Calcium", "Phosphorus", "Sulfur"],
    "correctAnswer": "Phosphorus"
  },
  {
    "id": 34,
    "questionText": "Which element helps regulate the opening and closing of the stomata?",
    "options": ["Magnesium", "Calcium", "Potassium", "Iron"],
    "correctAnswer": "Potassium"
  },
  {
    "id": 35,
    "questionText": "The element that activates enzymes and is a structural component of cell walls, influencing water movement, is:",
    "options": ["Sulfur", "Calcium", "Zinc", "Boron"],
    "correctAnswer": "Calcium"
  },
  {
    "id": 36,
    "questionText": "Water absorption by root hairs occurs primarily via:",
    "options": ["Active transport", "Guttation", "Osmosis", "Translocation"],
    "correctAnswer": "Osmosis"
  },
  {
    "id": 37,
    "questionText": "The movement of water and salts from the root epidermis to the cortex involves:",
    "options": ["Only active transport", "Only passive transport", "Both active and passive transport", "Transpiration pull"],
    "correctAnswer": "Both active and passive transport"
  },
  {
    "id": 38,
    "questionText": "Lenticels are primarily involved in:",
    "options": ["Water absorption", "Food storage", "Gaseous exchange", "Photosynthesis"],
    "correctAnswer": "Gaseous exchange"
  },
  {
    "id": 39,
    "questionText": "Which type of transpiration involves the loss of water from stomata?",
    "options": ["Cuticular transpiration", "Lenticular transpiration", "Stomatal transpiration", "Guttation"],
    "correctAnswer": "Stomatal transpiration"
  },
  {
    "id": 40,
    "questionText": "At night, when photosynthesis is not occurring, plants primarily release:",
    "options": ["Oxygen", "Carbon dioxide", "Water vapor", "Glucose"],
    "correctAnswer": "Carbon dioxide"
  },
  {
    "id": 41,
    "questionText": "Plants excrete latexes, gums, and resins as examples of:",
    "options": ["Gaseous waste", "Water waste", "Other metabolic wastes", "Energy products"],
    "correctAnswer": "Other metabolic wastes"
  },
  {
    "id": 42,
    "questionText": "An adaptation of xerophytes to minimize water loss is:",
    "options": ["Presence of broad leaves", "Living in aquatic environments", "Very few stomata and thick waxy cuticle", "Excreting salt through glands"],
    "correctAnswer": "Very few stomata and thick waxy cuticle"
  },
  {
    "id": 43,
    "questionText": "Which process explains how sugars are transported from leaves to other parts of the plant?",
    "options": ["Transpiration", "Translocation", "Osmosis", "Diffusion"],
    "correctAnswer": "Translocation"
  },
  {
    "id": 44,
    "questionText": "The force that pulls water upwards in the xylem is primarily due to:",
    "options": ["Root pressure", "Osmotic potential of roots", "Water molecules sticking together (cohesion) and to xylem walls (adhesion), driven by transpiration pull", "Active transport by xylem cells"],
    "correctAnswer": "Water molecules sticking together (cohesion) and to xylem walls (adhesion), driven by transpiration pull"
  },
  {
    "id": 45,
    "questionText": "What happens at the sink tissues in the pressure flow mechanism?",
    "options": ["Sucrose is actively loaded into sieve tubes.", "Water moves into sieve tubes by osmosis.", "Sucrose is actively unloaded from sieve tubes into sink tissues.", "Food flows in bulk from source towards sink."],
    "correctAnswer": "Sucrose is actively unloaded from sieve tubes into sink tissues."
  },
  {
    "id": 46,
    "questionText": "What is the effect of high humidity on the rate of transpiration?",
    "options": ["It increases the rate.", "It decreases the rate.", "It has no effect.", "It first increases, then decreases."],
    "correctAnswer": "It decreases the rate."
  },
  {
    "id": 47,
    "questionText": "Water moves up the plant through xylem vessels, reaching leaves and other parts. This process is driven by:",
    "options": ["Absorption", "Transpiration pull", "Guttation", "Osmotic adjustments"],
    "correctAnswer": "Transpiration pull"
  },
  {
    "id": 48,
    "questionText": "Which layer of the root is composed of loose arranged cells with air spaces between them?",
    "options": ["Epidermis", "Cortex", "Endodermis", "Pericycle"],
    "correctAnswer": "Cortex"
  },
  {
    "id": 49,
    "questionText": "In the diagram showing stomata opening and closing, what ions move into the guard cells to cause them to become turgid?",
    "options": ["Sodium ions", "Chloride ions", "Potassium ions", "Calcium ions"],
    "correctAnswer": "Potassium ions"
  },
  {
    "id": 50,
    "questionText": "The primary purpose of stomata in leaves is to regulate:",
    "options": ["Water and mineral absorption", "Water loss and gas exchange", "Sugar transport", "Root growth"],
    "correctAnswer": "Water loss and gas exchange"
  }
],
  "REPRODUCTION IN PLANTS": [
  {
    "id": 1,
    "questionText": "Reproduction is the process in which an organism produces new organisms of their own kind, and involves how many main kinds?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": "Two"
  },
  {
    "id": 2,
    "questionText": "Reproduction that does NOT involve the fusion of gametes is called:",
    "options": ["Sexual reproduction", "Asexual reproduction", "Fertilization", "Pollination"],
    "correctAnswer": "Asexual reproduction"
  },
  {
    "id": 3,
    "questionText": "The offspring produced by asexual reproduction are genetically:",
    "options": ["Diverse from the parents", "Identical to the parents", "A mix of traits", "Sterile"],
    "correctAnswer": "Identical to the parents"
  },
  {
    "id": 4,
    "questionText": "Binary fission is a method of asexual reproduction where the parent cell simply divides into two daughter cells, commonly seen in:",
    "options": ["Plants", "Animals", "Bacteria", "Fungi"],
    "correctAnswer": "Bacteria"
  },
  {
    "id": 5,
    "questionText": "Amoeba and Euglena, which are unicellular eukaryotes (protists), reproduce by:",
    "options": ["Budding", "Spore formation", "Binary fission", "Vegetative propagation"],
    "correctAnswer": "Binary fission"
  },
  {
    "id": 6,
    "questionText": "Budding is a very common asexual reproduction method in yeast, where a small outgrowth develops from the parent organism called a:",
    "options": ["Spore", "Gamete", "Bud", "Rhizome"],
    "correctAnswer": "Bud"
  },
  {
    "id": 7,
    "questionText": "Spore formation is a method of asexual reproduction in thick-walled asexual reproductive cells, common in fungi like:",
    "options": ["Yeast", "Rhizopus", "Amoeba", "Hydra"],
    "correctAnswer": "Rhizopus"
  },
  {
    "id": 8,
    "questionText": "Vegetative propagation is a method in which a new plant is produced from the vegetative part of the parent plant, such as the:",
    "options": ["Seed, fruit, flower", "Root, stem, or leaf", "Spore, gamete, zygote", "Pollen, ovule, embryo sac"],
    "correctAnswer": "Root, stem, or leaf"
  },
  {
    "id": 9,
    "questionText": "A horizontal stem that grows above the ground and produces new leaves and roots at nodes, as seen in strawberry, is called a:",
    "options": ["Tuber", "Rhizome", "Stolon (runner)", "Corm"],
    "correctAnswer": "Stolon (runner)"
  },
  {
    "id": 10,
    "questionText": "Potatoes reproduce by means of underground stems called:",
    "options": ["Rhizomes", "Bulbs", "Tubers", "Corms"],
    "correctAnswer": "Tubers"
  },
  {
    "id": 11,
    "questionText": "Ginger is an example of a plant that reproduces by underground horizontal stems called:",
    "options": ["Tubers", "Rhizomes", "Bulbs", "Stolons"],
    "correctAnswer": "Rhizomes"
  },
  {
    "id": 12,
    "questionText": "Onions and lilies reproduce by fleshy leaves that grow underground to form:",
    "options": ["Corms", "Tubers", "Bulbs", "Suckers"],
    "correctAnswer": "Bulbs"
  },
  {
    "id": 13,
    "questionText": "Dasheen and garlic reproduce by short, swollen underground stems called:",
    "options": ["Bulbs", "Tubers", "Corms", "Rhizomes"],
    "correctAnswer": "Corms"
  },
  {
    "id": 14,
    "questionText": "New shoots that emerge from the base of the parent plant or from its underground roots, as seen in banana, are called:",
    "options": ["Tubers", "Suckers", "Bulbs", "Corms"],
    "correctAnswer": "Suckers"
  },
  {
    "id": 15,
    "questionText": "Modified leaves that develop buds at their margins and can grow into new plants when they fall on the ground are seen in:",
    "options": ["Banana", "Bryophyllum", "Strawberry", "Potato"],
    "correctAnswer": "Bryophyllum"
  },
  {
    "id": 16,
    "questionText": "Artificial propagation techniques include cutting, grafting, and:",
    "options": ["Spore formation", "Tissue culture", "Binary fission", "Budding"],
    "correctAnswer": "Tissue culture"
  },
  {
    "id": 17,
    "questionText": "A piece of stem or root cut from a plant and used to grow a new plant is called:",
    "options": ["Grafting", "Budding", "Cutting", "Layering"],
    "correctAnswer": "Cutting"
  },
  {
    "id": 18,
    "questionText": "The joining of two or more plant parts of the same type to form a single plant is called:",
    "options": ["Cutting", "Layering", "Grafting", "Budding"],
    "correctAnswer": "Grafting"
  },
  {
    "id": 19,
    "questionText": "What is an advantage of vegetative propagation?",
    "options": ["Produces genetic variations", "Allows many new plants in a short time", "Offspring are genetically different", "Requires seeds"],
    "correctAnswer": "Allows many new plants in a short time"
  },
  {
    "id": 20,
    "questionText": "A disadvantage of plants produced through vegetative propagation is that they:",
    "options": ["Are very sensitive to environmental changes and pests", "Are genetically diverse", "Grow slowly", "Require more care"],
    "correctAnswer": "Are very sensitive to environmental changes and pests"
  },
  {
    "id": 21,
    "questionText": "Sexual reproduction in plants involves two generations that alternate: the sporophyte generation and the:",
    "options": ["Gamete generation", "Zygote generation", "Gametophyte generation", "Spore generation"],
    "correctAnswer": "Gametophyte generation"
  },
  {
    "id": 22,
    "questionText": "The sporophyte generation produces spores and is typically:",
    "options": ["Haploid (1n)", "Diploid (2n)", "Triploid (3n)", "Polyploid"],
    "correctAnswer": "Diploid (2n)"
  },
  {
    "id": 23,
    "questionText": "The gametophyte generation produces gametes and is typically:",
    "options": ["Diploid (2n)", "Triploid (3n)", "Haploid (1n)", "Polyploid"],
    "correctAnswer": "Haploid (1n)"
  },
  {
    "id": 24,
    "questionText": "The swollen tip of a flower stalk where all the floral parts are attached is called the:",
    "options": ["Ovary", "Receptacle", "Style", "Stigma"],
    "correctAnswer": "Receptacle"
  },
  {
    "id": 25,
    "questionText": "The outermost whorl of a flower, made of green leaf-like sepals, is called the:",
    "options": ["Corolla", "Androecium", "Gynoecium", "Calyx"],
    "correctAnswer": "Calyx"
  },
  {
    "id": 26,
    "questionText": "The second whorl of a flower, made of petals, is called the:",
    "options": ["Calyx", "Androecium", "Corolla", "Gynoecium"],
    "correctAnswer": "Corolla"
  },
  {
    "id": 27,
    "questionText": "The male reproductive structures of a flower, consisting of stamens, are collectively called the:",
    "options": ["Gynoecium", "Androecium", "Calyx", "Corolla"],
    "correctAnswer": "Androecium"
  },
  {
    "id": 28,
    "questionText": "Each stamen consists of an anther and a:",
    "options": ["Ovary", "Stigma", "Filament", "Style"],
    "correctAnswer": "Filament"
  },
  {
    "id": 29,
    "questionText": "The female reproductive structures of a flower, made of carpels, are collectively called the:",
    "options": ["Androecium", "Calyx", "Gynoecium", "Corolla"],
    "correctAnswer": "Gynoecium"
  },
  {
    "id": 30,
    "questionText": "Each carpel consists of three parts: ovary, style, and:",
    "options": ["Anther", "Filament", "Stigma", "Petal"],
    "correctAnswer": "Stigma"
  },
  {
    "id": 31,
    "questionText": "The large, basal part of the carpel where ovules are produced is the:",
    "options": ["Stigma", "Style", "Ovary", "Anther"],
    "correctAnswer": "Ovary"
  },
  {
    "id": 32,
    "questionText": "The ovule acts as a megasporangium and contains a diploid megaspore mother cell which undergoes meiosis to produce how many haploid megaspores?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": "Four"
  },
  {
    "id": 33,
    "questionText": "Out of the four haploid megaspores produced, how many remain alive?",
    "options": ["Zero", "One", "Two", "Four"],
    "correctAnswer": "One"
  },
  {
    "id": 34,
    "questionText": "The single remaining megaspore undergoes mitosis to form the female gametophyte, also known as the:",
    "options": ["Pollen sac", "Embryo sac", "Ovule", "Zygote"],
    "correctAnswer": "Embryo sac"
  },
  {
    "id": 35,
    "questionText": "The pollen sac contains many diploid microspore mother cells that undergo meiosis to produce:",
    "options": ["Haploid megaspores", "Haploid microspores", "Diploid pollen grains", "Diploid generative cells"],
    "correctAnswer": "Haploid microspores"
  },
  {
    "id": 36,
    "questionText": "The resulting two-celled structure from the microspore, consisting of a pollen grain, is the:",
    "options": ["Embryo sac", "Ovule", "Male gametophyte", "Megasporangium"],
    "correctAnswer": "Male gametophyte"
  },
  {
    "id": 37,
    "questionText": "The transfer of pollens from the anther to the stigma of the same flower or another flower on the same plant is called:",
    "options": ["Cross-pollination", "Self-pollination", "Fertilization", "Germination"],
    "correctAnswer": "Self-pollination"
  },
  {
    "id": 38,
    "questionText": "The transfer of pollens from the anther of one plant to the stigma of a flower on a different plant of the same species is called:",
    "options": ["Self-pollination", "Cross-pollination", "Asexual reproduction", "Vegetative propagation"],
    "correctAnswer": "Cross-pollination"
  },
  {
    "id": 39,
    "questionText": "When pollen grain reaches the stigma, its tube cell forms a:",
    "options": ["Ovule", "Embryo sac", "Pollen tube", "Zygote"],
    "correctAnswer": "Pollen tube"
  },
  {
    "id": 40,
    "questionText": "The fusion of one sperm with the egg, forming a diploid zygote, and the fusion of the second sperm with the fusion nucleus, producing a triploid (3n) endosperm, is called:",
    "options": ["Single fertilization", "Cross-fertilization", "Double fertilization", "Self-fertilization"],
    "correctAnswer": "Double fertilization"
  },
  {
    "id": 41,
    "questionText": "After fertilization, the zygote develops into the embryo, and the triploid nucleus develops into:",
    "options": ["Ovule", "Fruit", "Endosperm tissue", "Seed coat"],
    "correctAnswer": "Endosperm tissue"
  },
  {
    "id": 42,
    "questionText": "The mature ovule develops into a:",
    "options": ["Fruit", "Flower", "Seed", "Zygote"],
    "correctAnswer": "Seed"
  },
  {
    "id": 43,
    "questionText": "The ovary changes into a:",
    "options": ["Seed", "Fruit", "Embryo", "Spore"],
    "correctAnswer": "Fruit"
  },
  {
    "id": 44,
    "questionText": "Development of Sporophytes: When seeds mature, they are dispersed. If seeds get suitable conditions, their embryos develop into new plants (the sporophytes of the next generation). This is the continuation of:",
    "options": ["Gametophyte generation", "Asexual generation", "Sporophyte generation", "Diploid generation"],
    "correctAnswer": "Sporophyte generation"
  },
  {
    "id": 45,
    "questionText": "Which of the following is NOT a part of asexual reproduction mentioned for plants?",
    "options": ["Binary fission", "Budding", "Pollination", "Spore formation"],
    "correctAnswer": "Pollination"
  },
  {
    "id": 46,
    "questionText": "What is the outcome of grafting?",
    "options": ["Two separate plants continue to grow.", "A new plant with mixed genetic material.", "Two or more plant parts join to form a single plant.", "The root and stem parts grow independently."],
    "correctAnswer": "Two or more plant parts join to form a single plant."
  },
  {
    "id": 47,
    "questionText": "The process where the diploid sporophyte produces haploid spores by meiosis is part of the alternation of generations in plants. Which event follows spore production?",
    "options": ["Zygote formation", "Gametophyte generation", "Fertilization", "Development of fruit"],
    "correctAnswer": "Gametophyte generation"
  },
  {
    "id": 48,
    "questionText": "In the development of the female gametophyte, the single megaspore undergoes how many mitotic divisions?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": "Three"
  },
  {
    "id": 49,
    "questionText": "After pollination, the pollen tube reaches the ovule and enters it through the:",
    "options": ["Stigma", "Style", "Micropyle", "Anther"],
    "correctAnswer": "Micropyle"
  },
  {
    "id": 50,
    "questionText": "A unique characteristic of angiosperms, highlighted in the process of sexual reproduction, is:",
    "options": ["Self-pollination", "Spore formation", "Double fertilization", "Vegetative propagation"],
    "correctAnswer": "Double fertilization"
  }
],
  "BIOSTATISTICS": [
  {
    "id": 1,
    "questionText": "Biostatistics is a branch of statistics that applies statistical methods to:",
    "options": ["Financial analysis", "Biological sciences", "Engineering design", "Social studies"],
    "correctAnswer": "Biological sciences"
  },
  {
    "id": 2,
    "questionText": "Biostatistics is essential for designing biological experiments, clinical trials, and:",
    "options": ["Marketing strategies", "Political campaigns", "Epidemiological studies", "Architectural planning"],
    "correctAnswer": "Epidemiological studies"
  },
  {
    "id": 3,
    "questionText": "One of the major uses of biostatistics is for designing experiments and:",
    "options": ["Creating art", "Ensuring data is irrelevant", "Ensuring that data collected will be relevant and sufficient to answer research questions", "Ignoring research questions"],
    "correctAnswer": "Ensuring that data collected will be relevant and sufficient to answer research questions"
  },
  {
    "id": 4,
    "questionText": "In clinical trial testing a new drug, biostatisticians determine the sample size needed to detect a significant effect. This falls under which use of biostatistics?",
    "options": ["Analyzing Biological Data", "Interpreting Results", "Designing Experiments and Studies", "Public Health and Policy Making"],
    "correctAnswer": "Designing Experiments and Studies"
  },
  {
    "id": 5,
    "questionText": "Biostatistics involves applying statistical techniques to analyze data. This analysis can uncover trends, correlations, and:",
    "options": ["Opinions", "Patterns", "Hypotheses", "Theories"],
    "correctAnswer": "Patterns"
  },
  {
    "id": 6,
    "questionText": "Analyzing the growth rates of plants under different environmental conditions can reveal how factors like light and water affect growth. This is an example of which use of biostatistics?",
    "options": ["Interpreting Results", "Predicting Outcomes", "Analyzing Biological Data", "Public Health and Policy Making"],
    "correctAnswer": "Analyzing Biological Data"
  },
  {
    "id": 7,
    "questionText": "Biostatistics helps to interpret the results in a meaningful way. For example, interpreting the results of a survey on the prevalence of a disease in a population guides public health interventions. This is classified as:",
    "options": ["Designing Experiments and Studies", "Predicting Outcomes", "Interpreting Results", "Epidemiology"],
    "correctAnswer": "Interpreting Results"
  },
  {
    "id": 8,
    "questionText": "Biostatistics can be used to create models that predict future outcomes based on current data. For instance, predicting the spread of an infectious disease within a population helps in planning vaccination campaigns. This is:",
    "options": ["Analyzing Biological Data", "Interpreting Results", "Predicting Outcomes", "Public Health and Policy Making"],
    "correctAnswer": "Predicting Outcomes"
  },
  {
    "id": 9,
    "questionText": "In public health, biostatistics provides evidence-based insights that guide policy decisions and health guidelines. Statistical analysis of data on COVID-19 rates can lead to the implementation of COVID-19 vaccination campaigns. This is an example of:",
    "options": ["Designing Experiments and Studies", "Analyzing Biological Data", "Interpreting Results", "Public Health and Policy Making"],
    "correctAnswer": "Public Health and Policy Making"
  },
  {
    "id": 10,
    "questionText": "Epidemiologists use biostatistics to study the distribution and determinants of health and diseases in populations. For example, analyzing data on COVID-19 infection rates, recovery rates, and vaccine effectiveness involves:",
    "options": ["Genetics", "Agriculture", "Clinical trials", "Biostatistical methods"],
    "correctAnswer": "Biostatistical methods"
  },
  {
    "id": 11,
    "questionText": "Biostatistics is used in genetic research to analyze the inheritance of traits and the association of genetic variations with diseases. For instance, genetic studies use biostatistics to identify genetic markers linked to diseases like diabetes and cancer. This is an example of biostatistics in:",
    "options": ["Epidemiology", "Agriculture", "Genetics", "Clinical Trials"],
    "correctAnswer": "Genetics"
  },
  {
    "id": 12,
    "questionText": "In agricultural research, biostatistics helps in analyzing crop yields, the effectiveness of fertilizers, and the resistance of plants to pests and diseases. Comparing the yield of different wheat varieties under various farming practices involves:",
    "options": ["Epidemiology", "Genetics", "Statistical analysis", "Clinical trials"],
    "correctAnswer": "Statistical analysis"
  },
  {
    "id": 13,
    "questionText": "Biostatistics is crucial in the design and analysis of clinical trials that test new treatments and drugs. For instance, determining whether a new medication is more effective than a placebo requires rigorous statistical testing to ensure the results are:",
    "options": ["Subjective", "Significant", "Qualitative", "Ambiguous"],
    "correctAnswer": "Significant"
  },
  {
    "id": 14,
    "questionText": "The mean, median, and mode are the measures that help summarize and understand:",
    "options": ["Statistical hypotheses", "Probability distributions", "Data sets", "Experimental designs"],
    "correctAnswer": "Data sets"
  },
  {
    "id": 15,
    "questionText": "The mean is also known as the average, and it represents the central value of a data set. It is calculated by dividing the sum of all values by the:",
    "options": ["Highest value", "Lowest value", "Number of values", "Range of values"],
    "correctAnswer": "Number of values"
  },
  {
    "id": 16,
    "questionText": "For the data set: 150, 160, 165, 155, 170, what is the mean height?",
    "options": ["155 cm", "160 cm", "165 cm", "170 cm"],
    "correctAnswer": "160 cm"
  },
  {
    "id": 17,
    "questionText": "The median is the middle value of a data set when the values are arranged in:",
    "options": ["Random order", "Alphabetical order", "Ascending or descending order", "Grouped order"],
    "correctAnswer": "Ascending or descending order"
  },
  {
    "id": 18,
    "questionText": "If the number of values in a data set is odd, the median is the value at which position?",
    "options": ["n/2", "(n/2) + 1", "(n+1)/2", "n-1"],
    "correctAnswer": "(n+1)/2"
  },
  {
    "id": 19,
    "questionText": "For the data set: 150, 160, 165, 155, 170, what is the median height after arranging in ascending order?",
    "options": ["150", "155", "160", "165"],
    "correctAnswer": "160"
  },
  {
    "id": 20,
    "questionText": "If the number of values in a data set is even, the median is the average of the two middle values at positions:",
    "options": ["(n/2) and (n/2) + 1", "(n+1)/2 and (n+2)/2", "n and n-1", "(n/2) and n"],
    "correctAnswer": "(n/2) and (n/2) + 1"
  },
  {
    "id": 21,
    "questionText": "For an even number of values, e.g., 150, 160, 165, 155, what is the median height?",
    "options": ["155", "157.5", "160", "162.5"],
    "correctAnswer": "157.5"
  },
  {
    "id": 22,
    "questionText": "The mode is the value that appears:",
    "options": ["Only once", "Least frequently", "Most frequently", "In the middle of the data set"],
    "correctAnswer": "Most frequently"
  },
  {
    "id": 23,
    "questionText": "For the data set: 150, 160, 165, 155, 160, what is the mode?",
    "options": ["150", "155", "160", "165"],
    "correctAnswer": "160"
  },
  {
    "id": 24,
    "questionText": "If a data set has two values that appear most frequently, it is considered:",
    "options": ["Unimodal", "Bimodal", "Trimodal", "Polymodal"],
    "correctAnswer": "Bimodal"
  },
  {
    "id": 25,
    "questionText": "A bar chart is a graphical representation of data using bars of different heights or lengths to compare:",
    "options": ["Continuous data", "Categorical data", "Numerical data", "Time series data"],
    "correctAnswer": "Categorical data"
  },
  {
    "id": 26,
    "questionText": "What is the first step in creating a bar chart?",
    "options": ["Draw axes", "Label axes", "Gather the data to be represented", "Determine the scale"],
    "correctAnswer": "Gather the data to be represented"
  },
  {
    "id": 27,
    "questionText": "For a bar chart, the x-axis typically represents:",
    "options": ["Values", "Categories", "Frequencies", "Heights"],
    "correctAnswer": "Categories"
  },
  {
    "id": 28,
    "questionText": "For a bar chart, the y-axis typically represents:",
    "options": ["Categories", "Labels", "Corresponding values", "Time"],
    "correctAnswer": "Corresponding values"
  },
  {
    "id": 29,
    "questionText": "When drawing bars for a bar chart, they should be of equal width and:",
    "options": ["Varying height", "Spaced unevenly", "Spaced evenly", "Overlapping"],
    "correctAnswer": "Spaced evenly"
  },
  {
    "id": 30,
    "questionText": "In the given example for a bar chart, if Species C has a number of plants of 10, what is the height of its bar?",
    "options": ["5", "10", "15", "20"],
    "correctAnswer": "10"
  },
  {
    "id": 31,
    "questionText": "Biostatistics plays a crucial role in scientific work to obtain results, interpret data, and for understanding various:",
    "options": ["Emotions", "Phenomena", "Opinions", "Beliefs"],
    "correctAnswer": "Phenomena"
  },
  {
    "id": 32,
    "questionText": "In public health, biostatistics can help in the statistical analysis of data on COVID-19 rates to guide:",
    "options": ["Economic forecasts", "Policy decisions and health guidelines", "Fashion trends", "Weather predictions"],
    "correctAnswer": "Policy decisions and health guidelines"
  },
  {
    "id": 33,
    "questionText": "Biostatistics is crucial in clinical trials for testing new treatments and drugs to ensure results are:",
    "options": ["Subjective", "Qualitatively described", "Statistically significant", "Minimally impactful"],
    "correctAnswer": "Statistically significant"
  },
  {
    "id": 34,
    "questionText": "To calculate the mean, all values in a data set are first:",
    "options": ["Multiplied", "Subtracted", "Summed", "Divided"],
    "correctAnswer": "Summed"
  },
  {
    "id": 35,
    "questionText": "How are values arranged to find the median of a data set?",
    "options": ["Randomly", "In groups", "Ascending or descending order", "By their frequency"],
    "correctAnswer": "Ascending or descending order"
  },
  {
    "id": 36,
    "questionText": "For a data set with values: 3, 3, 6, 7, 8, 9, 9, what is the mode?",
    "options": ["3", "6", "9", "Both 3 and 9"],
    "correctAnswer": "Both 3 and 9"
  },
  {
    "id": 37,
    "questionText": "What happens to the median if the number of values in a data set is odd?",
    "options": ["It is the average of the two middle values.", "It is the value at position (n+1)/2.", "It cannot be calculated.", "It is the sum of all values."],
    "correctAnswer": "It is the value at position (n+1)/2."
  },
  {
    "id": 38,
    "questionText": "What happens to the median if the number of values in a data set is even?",
    "options": ["It is the value at position (n+1)/2.", "It is simply the mean.", "It is the average of the two middle values at positions (n/2) and (n/2)+1.", "It is the most frequent value."],
    "correctAnswer": "It is the average of the two middle values at positions (n/2) and (n/2)+1."
  },
  {
    "id": 39,
    "questionText": "The purpose of a bar chart is to visually represent data and compare different:",
    "options": ["Numerical values", "Data trends", "Categories", "Time periods"],
    "correctAnswer": "Categories"
  },
  {
    "id": 40,
    "questionText": "To prevent misinterpretation, the bars in a bar chart should be:",
    "options": ["Of different widths", "Unevenly spaced", "Of equal width and evenly spaced", "Of varying colors only"],
    "correctAnswer": "Of equal width and evenly spaced"
  },
  {
    "id": 41,
    "questionText": "Which measure of central tendency provides an overall average?",
    "options": ["Mean", "Median", "Mode", "Range"],
    "correctAnswer": "Mean"
  },
  {
    "id": 42,
    "questionText": "The value that highlights the most frequent value is the:",
    "options": ["Mean", "Median", "Mode", "Average"],
    "correctAnswer": "Mode"
  },
  {
    "id": 43,
    "questionText": "What does the median provide, especially useful for understanding skewed data?",
    "options": ["The sum of all values.", "The middle value.", "The most frequent value.", "The range of values."],
    "correctAnswer": "The middle value."
  },
  {
    "id": 44,
    "questionText": "Biostatistics in biological research helps scientists to collect, analyze, and interpret data for getting results and understanding various:",
    "options": ["Opinions", "Experiments", "Phenomena", "Theories"],
    "correctAnswer": "Phenomena"
  },
  {
    "id": 45,
    "questionText": "Which axis in a bar chart typically represents the number of items or frequency?",
    "options": ["X-axis", "Y-axis", "Z-axis", "Horizontal axis"],
    "correctAnswer": "Y-axis"
  },
  {
    "id": 46,
    "questionText": "If a data set has no repeated values, what can be said about the mode?",
    "options": ["It is the mean.", "It is the median.", "There is no mode.", "All values are modes."],
    "correctAnswer": "There is no mode."
  },
  {
    "id": 47,
    "questionText": "To make a bar chart, the data should be first organized into categories and their:",
    "options": ["Sums", "Corresponding values", "Products", "Differences"],
    "correctAnswer": "Corresponding values"
  },
  {
    "id": 48,
    "questionText": "In which field would biostatistics be used to identify genetic markers linked to diseases?",
    "options": ["Epidemiology", "Agriculture", "Clinical trials", "Genetics"],
    "correctAnswer": "Genetics"
  },
  {
    "id": 49,
    "questionText": "Biostatistics is used to provide evidence-based insights for policy decisions and health guidelines in:",
    "options": ["Public Health and Policy Making", "Predicting Outcomes", "Analyzing Biological Data", "Interpreting Results"],
    "correctAnswer": "Public Health and Policy Making"
  },
  {
    "id": 50,
    "questionText": "What is the significance of using biostatistics in biological experiments?",
    "options": ["It makes the experiments longer.", "It helps ensure data is relevant and sufficient to answer research questions.", "It complicates data analysis.", "It eliminates the need for data collection."],
    "correctAnswer": "It helps ensure data is relevant and sufficient to answer research questions."
  }
]
};
