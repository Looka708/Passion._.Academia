
import { MCQ } from '@/lib/types';

export const chapters = ["Biodiversity and Classification", "Bacteria and Viruses", "Cells and Subcellular Organelles","Molecular Biology","Enzymes","Bioenergetics","Structural and Computational Biology","Plant Physiology","Human Digestive System","Human Respiratory System","Human Circulatory System","Human Skeletal and Muscular Systems"];
export const mcqs: Record<string, MCQ[]> = {
    "Biodiversity and Classification": [
  {
    "id": 1,
    "questionText": "Which term refers to the variety of life forms present in different ecosystems?",
    "options": [
      "a) Ecosystem",
      "b) Niche",
      "c) Biodiversity",
      "d) Biogeography"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Who proposed the five-kingdom classification system in 1969?",
    "options": [
      "a) Carl Woese",
      "b) Robert Whittaker",
      "c) Ernst Mayr",
      "d) Carolus Linnaeus"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The three domains of life are:",
    "options": [
      "a) Monera, Protista, Fungi",
      "b) Archaea, Bacteria, and Eukarya",
      "c) Plants, Animals, Fungi",
      "d) Viruses, Bacteria, Eukarya"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "In the five-kingdom system, the kingdom Monera included which type of organisms?",
    "options": [
      "a) Eukaryotes",
      "b) Prokaryotes",
      "c) Fungi",
      "d) Protists"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "Which domain is considered to have evolved independently from some common ancestor, with molecular evidence suggesting they are more closely related to eukaryotes than to bacteria?",
    "options": [
      "a) Bacteria",
      "b) Archaea",
      "c) Eukarya",
      "d) Viruses"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "Archaea that produce methane as a metabolic by-product are called:",
    "options": [
      "a) Halobacteria",
      "b) Thermococci",
      "c) Thermoplasmata",
      "d) Methanogens"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "Bacteria that are rod-shaped are known as:",
    "options": [
      "a) Cocci",
      "b) Bacilli",
      "c) Vibrios",
      "d) Spirilla"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The genetic material of bacteria is typically in the form of a:",
    "options": [
      "a) Linear chromosome",
      "b) Multiple chromosomes",
      "c) Single, circular chromosome located in the nucleoid region",
      "d) Plasmid only"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Eukaryotic cells possess a true nucleus and:",
    "options": [
      "a) Lack membrane-bound organelles",
      "b) Have only ribosomes as organelles",
      "c) Are always unicellular",
      "d) Contain membrane-bound organelles like mitochondria and chloroplasts"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 10,
    "questionText": "The highest level of classification is:",
    "options": [
      "a) Kingdom",
      "b) Phylum",
      "c) Class",
      "d) Domain"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 11,
    "questionText": "Which kingdom includes unicellular or colonial eukaryotes, which are either unicellular or filamentous or simple multicellular?",
    "options": [
      "a) Monera",
      "b) Fungi",
      "c) Plantae",
      "d) Protista"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 12,
    "questionText": "Examples of protozoans that are unicellular and heterotrophic include:",
    "options": [
      "a) Euglena",
      "b) Slime mold",
      "c) Water mold",
      "d) Paramecium"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "Fungi are heterotrophic organisms whose cell walls are covered by:",
    "options": [
      "a) Cellulose",
      "b) Peptidoglycan",
      "c) Chitin",
      "d) Lignin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "The major group of fungi that includes bread molds like Rhizopus is:",
    "options": [
      "a) Ascomycota",
      "b) Basidiomycota",
      "c) Zygomycota",
      "d) Deuteromycota"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Plants are autotrophic and prepare food through photosynthesis, and their cell walls are made of:",
    "options": [
      "a) Chitin",
      "b) Peptidoglycan",
      "c) Cellulose",
      "d) Lignin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Nonvascular plants or bryophytes lack:",
    "options": [
      "a) Roots",
      "b) Leaves",
      "c) Conducting tissues (xylem and phloem)",
      "d) Flowers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Which plant group produces seeds enclosed in fruits, such as monocots and dicots?",
    "options": [
      "a) Gymnosperms",
      "b) Nonvascular plants",
      "c) Seedless vascular plants",
      "d) Angiosperms"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "Kingdom Animalia includes eukaryotic, multicellular, and heterotrophic organisms that develop from:",
    "options": [
      "a) Seeds",
      "b) Spores",
      "c) Embryos",
      "d) Buds"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Phylum Porifera includes organisms commonly known as:",
    "options": [
      "a) Jellyfish",
      "b) Flatworms",
      "c) Sponges",
      "d) Corals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Sponges are characterized by having a body wall with numerous pores called:",
    "options": [
      "a) Oscula",
      "b) Gemmules",
      "c) Ostia",
      "d) Spicules"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Phylum Cnidaria includes marine animals like jellyfish and hydra, which exhibit what type of symmetry?",
    "options": [
      "a) Bilateral symmetry",
      "b) Asymmetry",
      "c) Radial symmetry",
      "d) Pentamerous symmetry"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Cnidocytes, special cells that contain nematocysts, are characteristic of which phylum?",
    "options": [
      "a) Porifera",
      "b) Platyhelminthes",
      "c) Cnidaria",
      "d) Nematoda"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Phylum Platyhelminthes includes organisms commonly known as:",
    "options": [
      "a) Roundworms",
      "b) Annelids",
      "c) Flatworms",
      "d) Segmented worms"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "Flatworms are triploblastic and exhibit what type of body plan?",
    "options": [
      "a) Pseudocoelomate",
      "b) Coelomate",
      "c) Acoelomate",
      "d) Radial symmetry"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The excretory system of flatworms consists of flame cells and a system of:",
    "options": [
      "a) Kidneys",
      "b) Nephridia",
      "c) Protonephridia",
      "d) Malpighian tubules"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Phylum Nematoda includes organisms commonly known as:",
    "options": [
      "a) Flatworms",
      "b) Segmented worms",
      "c) Roundworms",
      "d) Snails"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Roundworms are triploblastic, bilateral symmetrical, and possess what type of body cavity?",
    "options": [
      "a) Acoelomate",
      "b) Coelomate",
      "c) Pseudocoelomate",
      "d) None"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Phylum Mollusca includes soft un-segmented aquatic and terrestrial animals, and their body is divided into three parts: head, visceral mass, and:",
    "options": [
      "a) Foot",
      "b) Mantle",
      "c) Radula",
      "d) Shell"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 29,
    "questionText": "The rasping tongue-like organ found in most molluscs is called:",
    "options": [
      "a) Siphon",
      "b) Mantle",
      "c) Radula",
      "d) Gills"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Phylum Annelida includes commonly called segmented worms such as:",
    "options": [
      "a) Snails and slugs",
      "b) Spiders and insects",
      "c) Starfish and sea urchins",
      "d) Earthworms and leeches"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "Annelids possess a closed type of circulatory system, and their body is divided into a number of similar parts called:",
    "options": [
      "a) Segments",
      "b) Metameres",
      "c) Both a and b",
      "d) Coeloms"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Phylum Arthropoda includes the most successful of all invertebrates, characterized by:",
    "options": [
      "a) Soft bodies and radula",
      "b) Radial symmetry and nematocysts",
      "c) Jointed appendages and exoskeleton",
      "d) Segmented bodies and nephridia"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "The exoskeleton of arthropods is primarily made of:",
    "options": [
      "a) Cellulose",
      "b) Peptidoglycan",
      "c) Calcium carbonate",
      "d) Chitin"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "Phylum Echinodermata includes marine animals that are star-shaped, globular, or elongated, such as:",
    "options": [
      "a) Jellyfish",
      "b) Snails",
      "c) Earthworms",
      "d) Sea urchins and starfish"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "Adult echinoderms typically exhibit what type of symmetry?",
    "options": [
      "a) Bilateral",
      "b) Asymmetrical",
      "c) Radial (pentamerous)",
      "d) Biradial"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "The water-vascular system with tube feet, used for locomotion, feeding, and gas exchange, is a characteristic of:",
    "options": [
      "a) Molluscs",
      "b) Annelids",
      "c) Arthropods",
      "d) Echinoderms"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "Chordates are characterized by having a notochord, dorsal nerve cord, pharyngeal gill slits, and what at some point in their development?",
    "options": [
      "a) Exoskeleton",
      "b) Jointed appendages",
      "c) Post-anal tail",
      "d) Radial symmetry"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Subphylum Urochordata includes invertebrate chordates in which the notochord and nerve cord are present only in their:",
    "options": [
      "a) Adult stage",
      "b) Larval stage",
      "c) Free-swimming larval stage",
      "d) Embryonic stage"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Vertebrates are divided into how many groups?",
    "options": [
      "a) Three",
      "b) Four",
      "c) Five",
      "d) Six"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 40,
    "questionText": "Members of Class Pisces (fishes) are aquatic vertebrates, and their heart is typically:",
    "options": [
      "a) Three-chambered",
      "b) Four-chambered",
      "c) Two-chambered",
      "d) One-chambered"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Jawed fishes are classified under which group?",
    "options": [
      "a) Agnatha",
      "b) Myxini",
      "c) Gnathostomes",
      "d) Cephalaspidomorphi"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Amphibians are poikilothermic animals, meaning they cannot regulate their own body temperature and are dependent on the:",
    "options": [
      "a) Food intake",
      "b) External environment",
      "c) Water availability",
      "d) Sunlight exposure"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Reptiles possess protective extra-embryonic membranes, including the amnion, chorion, and allantois, for their eggs, which are known as:",
    "options": [
      "a) Hard-shelled eggs",
      "b) Cleidoic eggs",
      "c) Amniotic eggs",
      "d) Viviparous eggs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which class of vertebrates is endothermic (homeotherms), meaning they maintain a nearly constant core body temperature?",
    "options": [
      "a) Amphibia",
      "b) Reptilia",
      "c) Pisces",
      "d) Aves (Birds)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "Mammals are characterized by having hair on their body and mammary glands. Monotremes are egg-laying mammals like the:",
    "options": [
      "a) Kangaroo",
      "b) Opossum",
      "c) Spiny anteater",
      "d) Duckbill platypus"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 46,
    "questionText": "What type of mammals are the most advanced, developing a placenta during gestation?",
    "options": [
      "a) Monotremes",
      "b) Marsupials",
      "c) Placental mammals",
      "d) Pouched mammals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Viruses are considered acellular and are not classified in any domain or kingdom because they lack:",
    "options": [
      "a) Proteins",
      "b) Nucleic acid",
      "c) Cells",
      "d) Lipids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "An example of an animal virus that causes influenza is:",
    "options": [
      "a) Tobacco mosaic virus",
      "b) Lambda phage",
      "c) Influenza virus",
      "d) Sulfolobus spindle-shaped virus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "Viruses that have a capsid with a symmetrical icosahedral shape are called:",
    "options": [
      "a) Helical viruses",
      "b) Complex viruses",
      "c) Icosahedral viruses",
      "d) Enveloped viruses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Which method of assessing biodiversity involves laying out a line or strip and recording species at regular intervals along it?",
    "options": [
      "a) Quadrat Sampling",
      "b) Aerial Surveys",
      "c) Point Counts",
      "d) Transect Sampling"
    ],
    "correctAnswer": "d"
  }
],
    "Bacteria and Viruses": [
  {
    "id": 1,
    "questionText": "Bacteria are a diverse group; all of them have unicellular prokaryotic organization and lack:",
    "options": [
      "a) Cytoplasm",
      "b) Genetic material",
      "c) Membrane bound organelles",
      "d) Cell wall"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "The bacterial cell wall is primarily composed of a macromolecule called:",
    "options": [
      "a) Cellulose",
      "b) Chitin",
      "c) Peptidoglycan",
      "d) Lipopolysaccharide"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "Gram-positive bacteria have a cell wall with a relatively thick layer of:",
    "options": [
      "a) Lipoprotein",
      "b) Peptidoglycan",
      "c) Outer membrane",
      "d) Periplasmic space"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "The cell membrane of bacteria may lack a cell wall in some cases, such as:",
    "options": [
      "a) Cyanobacteria",
      "b) Spirochetes",
      "c) Mycoplasmas",
      "d) Actinomycetes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Bacterial cytoplasm contains dissolved substances and large structures such as:",
    "options": [
      "a) Nucleus and mitochondria",
      "b) Golgi apparatus and endoplasmic reticulum",
      "c) Nucleoid, ribosomes, and mesosomes",
      "d) Chloroplasts and vacuoles"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Extrachromosomal genetic elements that can be transferred between bacteria, aiding in genetic diversity, are called:",
    "options": [
      "a) Chromosomes",
      "b) Nucleoids",
      "c) Plasmids",
      "d) Ribosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Under unfavorable conditions, many bacteria can form specialized \"resting\" cells called:",
    "options": [
      "a) Cysts",
      "b) Spores",
      "c) Endospores",
      "d) Gametes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "The process by which a bacterium forms an endospore involves the cell membrane forming a septum to isolate a new DNA and a small portion of cytoplasm, which then develops into a spore coat. This process is called:",
    "options": [
      "a) Binary fission",
      "b) Budding",
      "c) Sporulation",
      "d) Conjugation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "The movement of bacteria over surfaces, mediated by pili, which bind to solid surfaces, is called:",
    "options": [
      "a) Swimming",
      "b) Twitching",
      "c) Gliding",
      "d) Siding"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Flagella in bacteria are composed of a protein called:",
    "options": [
      "a) Actin",
      "b) Tubulin",
      "c) Flagellin",
      "d) Myosin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Bacteria with a single polar flagellum are called:",
    "options": [
      "a) Amphitrichous",
      "b) Lophotrichous",
      "c) Peritrichous",
      "d) Monotrichous"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 12,
    "questionText": "The domain bacteria includes diverse groups. Which group is rigid, rod-shaped, heterotrophic, and Gram-negative?",
    "options": [
      "a) Cyanobacteria",
      "b) Mycoplasmas",
      "c) Spirochaetes",
      "d) Omnibacteria"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "Cyanobacteria are photosynthetic bacteria that contain chlorophyll-a and accessory pigments like:",
    "options": [
      "a) Anthocyanins",
      "b) Carotenoids and phycobilins",
      "c) Flavonoids",
      "d) Xanthophylls"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Which group of bacteria lacks cell walls and is resistant to penicillin?",
    "options": [
      "a) Cyanobacteria",
      "b) Actinomycetes",
      "c) Mycoplasmas",
      "d) Spirochaetes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Spiral-shaped Gram-negative bacteria with more than 100 flagella are known as:",
    "options": [
      "a) Omnibacteria",
      "b) Cyanobacteria",
      "c) Mycoplasmas",
      "d) Spirochaetes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 16,
    "questionText": "Beneficial bacteria involved in almost all biogeochemical cycles are called:",
    "options": [
      "a) Pathogens",
      "b) Saprophytes",
      "c) Recyclers of nature",
      "d) Biopesticides"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Bacteria used in the production of antibiotics are primarily found in the fields of:",
    "options": [
      "a) Biotechnology",
      "b) Molecular biology",
      "c) Biochemistry",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "The normal flora in the intestines of humans primarily produces which vitamin?",
    "options": [
      "a) Vitamin A",
      "b) Vitamin C",
      "c) Vitamin K and B-vitamins",
      "d) Vitamin D"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Viruses are extremely small infectious agents that can only be seen under an:",
    "options": [
      "a) Light microscope",
      "b) Phase-contrast microscope",
      "c) Electron microscope",
      "d) Fluorescence microscope"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The central core of a virus is its genome, which is made up of nucleic acid (either DNA or RNA), and is surrounded by a protein coat called a:",
    "options": [
      "a) Envelope",
      "b) Matrix",
      "c) Capsid",
      "d) Nucleoid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Viruses that are composed of a nucleic acid (DNA or RNA) and are surrounded by a protein coat, but lack an outer lipid envelope, are called:",
    "options": [
      "a) Helical viruses",
      "b) Enveloped viruses",
      "c) Non-enveloped (Naked) Viruses",
      "d) Complex viruses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Examples of single-stranded DNA (ssDNA) viruses include:",
    "options": [
      "a) Adenoviruses",
      "b) Herpesviruses",
      "c) Parvoviruses",
      "d) Coronaviruses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "RNA viruses with single-stranded RNA (ssRNA) or double-stranded RNA (dsRNA) include:",
    "options": [
      "a) Adenoviruses",
      "b) Herpesviruses",
      "c) Hepatitis B virus",
      "d) Coronaviruses (COVID-19) and Rotaviruses"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 24,
    "questionText": "Reverse transcriptase is an enzyme that enables certain RNA viruses to translate their RNA genome into DNA. This enzyme is characteristic of:",
    "options": [
      "a) Bacteriophages",
      "b) Animal viruses",
      "c) HIV (Human Immunodeficiency Virus)",
      "d) Plant viruses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "HIV is the causative agent for which disease?",
    "options": [
      "a) Influenza",
      "b) Rabies",
      "c) AIDS (Acquired Immunodeficiency Syndrome)",
      "d) Polio"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Which of the following is NOT found in all kinds of bacteria?",
    "options": [
      "a) Ribosomes",
      "b) Cell membrane",
      "c) Capsule",
      "d) Nucleoid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The bacterial chromosome is typically:",
    "options": [
      "a) Linear, double-stranded DNA",
      "b) Circular, single-stranded RNA",
      "c) Linear, single-stranded DNA",
      "d) Circular, double-stranded DNA"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 28,
    "questionText": "In bacterial cells, respiration occurs at:",
    "options": [
      "a) Mitochondria",
      "b) Ribosomes",
      "c) Cell membrane",
      "d) Endoplasmic reticulum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Which group of bacteria is known as a good source of antibiotics?",
    "options": [
      "a) Omnibacteria",
      "b) Spirochaetes",
      "c) Pseudomonads",
      "d) Actinomycetes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "What is the primary function of flagella in bacterial cells?",
    "options": [
      "a) DNA replication",
      "b) Cell division",
      "c) Motility",
      "d) Protein synthesis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Which type of motility in bacteria is mediated by pili?",
    "options": [
      "a) Brownian movement",
      "b) Gliding motility",
      "c) Twitching motility",
      "d) Swarming motility"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Which of the following bacterial structures is responsible for detecting and responding to chemicals?",
    "options": [
      "a) Capsule",
      "b) Pili",
      "c) Flagella",
      "d) Ribosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Which one of the following are not nitrifying bacteria?",
    "options": [
      "a) Nitrosomonas",
      "b) Nitrobacter",
      "c) Azotobacter",
      "d) Pseudomonas"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "The enzyme responsible for converting HIV RNA into DNA is:",
    "options": [
      "a) RNA polymerase",
      "b) DNA helicase",
      "c) Reverse transcriptase",
      "d) Integrase"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The HIV capsid contains:",
    "options": [
      "a) Single-stranded DNA and reverse transcriptase",
      "b) Single-stranded RNA and reverse transcriptase",
      "c) Double-stranded DNA and integrase",
      "d) Double-stranded RNA and RNA polymerase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which type of bacterial motility involves a bacterial population moving together by means of flagella on surfaces?",
    "options": [
      "a) Swimming",
      "b) Twitching",
      "c) Gliding",
      "d) Swarming"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "Gram-positive and Gram-negative bacteria differ in the presence of what in their cell wall?",
    "options": [
      "a) Lipopolysaccharide (present in Gram-negative, absent in Gram-positive)",
      "b) Peptidoglycan layer thickness",
      "c) Outer membrane (present in Gram-negative, absent in Gram-positive)",
      "d) Both a and c"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "The endospore formation in bacteria allows them to:",
    "options": [
      "a) Reproduce rapidly",
      "b) Increase genetic diversity",
      "c) Survive unfavorable conditions",
      "d) Move more efficiently"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Bacteria that move using an axial filament are typically:",
    "options": [
      "a) Cocci",
      "b) Bacilli",
      "c) Vibrios",
      "d) Spirochaetes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 40,
    "questionText": "Bacteriophages are a diverse group of viruses that attack what?",
    "options": [
      "a) Plants",
      "b) Animals",
      "c) Fungi",
      "d) Bacteria"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 41,
    "questionText": "The ecological importance of bacteria includes their role as:",
    "options": [
      "a) Pathogens",
      "b) Symbionts",
      "c) Decomposers and nitrogen fixers",
      "d) Agents of disease"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Normal flora consists of bacteria that are in a mutualistic relationship with the human body, providing benefits such as:",
    "options": [
      "a) Causing infections",
      "b) Producing toxins",
      "c) Synthesis of vitamins",
      "d) Inducing immune response"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Antibiotics are substances produced by microorganisms that can:",
    "options": [
      "a) Increase bacterial growth",
      "b) Inhibit the growth of other microorganisms",
      "c) Enhance viral replication",
      "d) Strengthen the immune system"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Viruses are obligate intracellular parasites, meaning they can only replicate inside:",
    "options": [
      "a) Culture media",
      "b) Dead cells",
      "c) Living host cells",
      "d) Laboratory glassware"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the common structure of a bacteriophage (T4 phage)?",
    "options": [
      "a) Spherical with an envelope",
      "b) Icosahedral with spikes",
      "c) Head, neck, sheath, and tail fibers",
      "d) Helical with a capsid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The protein coat of a virus is called a:",
    "options": [
      "a) Envelope",
      "b) Tegument",
      "c) Capsid",
      "d) Matrix"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Viruses that infect plants include:",
    "options": [
      "a) Influenza virus",
      "b) Rabies virus",
      "c) Tobacco mosaic virus",
      "d) T4 phage"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "Which type of bacteriophage has a complex structure with a head and a tail?",
    "options": [
      "a) HIV",
      "b) Adenovirus",
      "c) T4 phage",
      "d) Poliovirus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "Pili are hair-like structures in bacteria that help them in attachment to surfaces and in:",
    "options": [
      "a) Motility",
      "b) Metabolism",
      "c) Exchange of genetic material (conjugation)",
      "d) Reproduction"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Some bacteria can thrive in extreme conditions such as high temperatures (thermophiles), high salinity (halophiles), and low pH (acidophiles). These are called:",
    "options": [
      "a) Pathogens",
      "b) Symbionts",
      "c) Extremophiles",
      "d) Saprophytes"
    ],
    "correctAnswer": "c"
  }
],
    "Cells and Subcellular Organelles": [
  {
    "id": 1,
    "questionText": "Cells are the basic unit of life, performing seven properties of life, including movement, respiration, and:",
    "options": [
      "a) Photosynthesis",
      "b) Digestion",
      "c) Growth, reproduction, excretion, and nutrition",
      "d) Circulation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Who was the English scientist who observed \"little boxes\" in cork under a microscope in 1665 and named them \"cellulae\"?",
    "options": [
      "a) Anton van Leeuwenhoek",
      "b) Jean Baptiste de Lamarck",
      "c) Robert Hooke",
      "d) Robert Brown"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "In 1838, the German botanist Matthias Schleiden observed that all plants were composed of:",
    "options": [
      "a) Tissues",
      "b) Organs",
      "c) Cells",
      "d) Fibers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "The German zoologist Theodor Schwann (1821-1902) concluded that all animals were also composed of cells, in the same year that Schleiden made his observation. This was in:",
    "options": [
      "a) 1831",
      "b) 1837",
      "c) 1838",
      "d) 1855"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "One of the key tenets of cell theory, \"all cells come from pre-existing cells,\" was proposed by which scientist in 1862?",
    "options": [
      "a) Robert Hooke",
      "b) Theodor Schwann",
      "c) Matthias Schleiden",
      "d) Louis Pasteur"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 6,
    "questionText": "The resolution of a light microscope, which refers to its ability to distinguish between two points that are close together, is typically about:",
    "options": [
      "a) 0.1 mm",
      "b) 0.2 µm",
      "c) 1 µm",
      "d) 10 nm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "The magnification of a light microscope is usually up to:",
    "options": [
      "a) 500X",
      "b) 1500X",
      "c) 10,000X",
      "d) 100,000X"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "Electron microscopes use a beam of electrons instead of light and can achieve magnifications of up to:",
    "options": [
      "a) 1,500X",
      "b) 16,000X",
      "c) 100,000X",
      "d) 1,000,000X"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 9,
    "questionText": "The two main types of electron microscopes are Scanning Electron Microscope (SEM) and:",
    "options": [
      "a) Atomic Force Microscope",
      "b) Confocal Microscope",
      "c) Transmission Electron Microscope (TEM)",
      "d) X-ray Microscope"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The cell wall is a rigid layer surrounding the cell, found in bacteria, fungi, plants, and algae. The primary cell wall is composed of:",
    "options": [
      "a) Lignin and pectin",
      "b) Hemicellulose and pectin",
      "c) Cellulose microfibrils",
      "d) Chitin and peptidoglycan"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Small channels that directly connect the cytoplasm of neighboring plant cells to each other are called:",
    "options": [
      "a) Cell junctions",
      "b) Gap junctions",
      "c) Plasmodesmata",
      "d) Tight junctions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The fluid mosaic model, proposed by S.J. Singer and Garth Nicolson in 1972, describes the structure of the:",
    "options": [
      "a) Cell wall",
      "b) Nucleus",
      "c) Plasma membrane",
      "d) Endoplasmic reticulum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The basic foundation of the plasma membrane is a:",
    "options": [
      "a) Protein monolayer",
      "b) Carbohydrate matrix",
      "c) Lipid bilayer",
      "d) Cholesterol layer"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Proteins that are embedded in the lipid bilayer of the plasma membrane are called:",
    "options": [
      "a) Peripheral proteins",
      "b) Integral proteins",
      "c) Glycoproteins",
      "d) Lipoproteins"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "The ability of cells to distinguish among different cells is crucial for life. This function is primarily carried out by proteins acting as:",
    "options": [
      "a) Enzymes",
      "b) Transporters",
      "c) Receptors",
      "d) Anchors"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Plasma membranes act as a boundary, holding the cell constituents together, and serve as semi-porous barriers to the:",
    "options": [
      "a) Nucleus",
      "b) Cytoplasm",
      "c) Outside environment",
      "d) Cell wall"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Which of the following techniques can reveal detailed structures of the lipid bilayer and associated proteins in the plasma membrane?",
    "options": [
      "a) Scanning Electron Microscopy",
      "b) Confocal Microscopy",
      "c) Atomic Force Microscopy",
      "d) Transmission Electron Microscopy"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 18,
    "questionText": "The cytoplasm consists of an aqueous ground substance known as:",
    "options": [
      "a) Nucleoplasm",
      "b) Cytoskeleton",
      "c) Cytosol",
      "d) Matrix"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "A prominent nucleus is present in all eukaryotic cells, except in certain animal cells (e.g., mature red blood cells) and:",
    "options": [
      "a) Fungi",
      "b) Protists",
      "c) Plant cells (pushed to side by vacuole)",
      "d) Bacteria"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 20,
    "questionText": "The main function of the nucleus is to store the cell's hereditary material (DNA) and coordinate:",
    "options": [
      "a) Energy production",
      "b) Protein synthesis and cell division",
      "c) Waste removal",
      "d) All of the above"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "The nucleus contains chromatin, which condenses to form during cell division:",
    "options": [
      "a) Nucleosomes",
      "b) Chromosomes",
      "c) Ribosomes",
      "d) Centrosomes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The nucleolus is a prominent darkly stained structure in the nucleoplasm involved in the synthesis of:",
    "options": [
      "a) mRNA",
      "b) tRNA",
      "c) rRNA (ribosomal RNA)",
      "d) DNA"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "The Endoplasmic Reticulum (ER) is a network of flattened sacs and branching tubules called:",
    "options": [
      "a) Cisternae",
      "b) Vesicles",
      "c) Ribosomes",
      "d) Lysosomes"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 24,
    "questionText": "Rough Endoplasmic Reticulum (RER) is characterized by the presence of what on its surface?",
    "options": [
      "a) Golgi apparatus",
      "b) Mitochondria",
      "c) Ribosomes",
      "d) Lysosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "Smooth Endoplasmic Reticulum (SER) is involved in the synthesis of lipids, building blocks for carbohydrate metabolism, and the detoxification of:",
    "options": [
      "a) Proteins",
      "b) Nucleic acids",
      "c) Drugs and poisons",
      "d) Water"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Ribosomes are small granular structures composed of approximately 60 percent ribosomal RNA (rRNA) and 40 percent:",
    "options": [
      "a) Lipids",
      "b) Carbohydrates",
      "c) Protein",
      "d) DNA"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The Svedberg (S) values of ribosomes in eukaryotes are 80S, composed of a 60S large subunit and a smaller subunit of:",
    "options": [
      "a) 30S",
      "b) 40S",
      "c) 50S",
      "d) 70S"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Mitochondria are rod-shaped organelles responsible for:",
    "options": [
      "a) Photosynthesis",
      "b) Protein synthesis",
      "c) Generating ATP (energy) through cellular respiration",
      "d) Lipid synthesis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "The inner membrane of the mitochondrion is highly convoluted, forming infoldings called:",
    "options": [
      "a) Thylakoids",
      "b) Stroma",
      "c) Lumen",
      "d) Cristae"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 30,
    "questionText": "Chloroplasts are the sites of photosynthesis in plant cells and are responsible for capturing what?",
    "options": [
      "a) Chemical energy",
      "b) Thermal energy",
      "c) Light energy",
      "d) Kinetic energy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The internal membrane system of chloroplasts consists of flattened sacs called:",
    "options": [
      "a) Cristae",
      "b) Matrix",
      "c) Thylakoids",
      "d) Cisternae"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "The Golgi apparatus consists of five to eight cup-shaped, membrane-covered sacs called:",
    "options": [
      "a) Thylakoids",
      "b) Cristae",
      "c) Stroma",
      "d) Cisternae"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 33,
    "questionText": "The Golgi apparatus is primarily involved in the distribution and shipping department for the cell's:",
    "options": [
      "a) Energy production",
      "b) Genetic material",
      "c) Chemical products",
      "d) Waste products"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Lysosomes are spherical organelles bounded by a single membrane and contain strong:",
    "options": [
      "a) Catalase enzymes",
      "b) Ribosomal RNA",
      "c) Digestive enzymes",
      "d) ATP synthase"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "Lysosomal storage diseases occur when a patient lacks one of the hydrolytic enzymes, leading to abnormal accumulation of substances in the:",
    "options": [
      "a) Nucleus",
      "b) Mitochondria",
      "c) Lysosomes",
      "d) Endoplasmic reticulum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Peroxisomes are single membrane-bound organelles that contain enzymes primarily involved in:",
    "options": [
      "a) Protein synthesis",
      "b) ATP production",
      "c) Oxidative reactions (e.g., breakdown of fatty acids)",
      "d) Photosynthesis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The enzyme catalase in peroxisomes breaks down hydrogen peroxide (H2O2) into water and:",
    "options": [
      "a) Carbon dioxide",
      "b) Glucose",
      "c) Oxygen",
      "d) Ammonia"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Vacuoles in plant cells function to provide structural support, storage, waste disposal, and:",
    "options": [
      "a) Energy production",
      "b) Protein synthesis",
      "c) Growth and protection",
      "d) Cell division"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "In eukaryotic cells, centrioles are located near the nucleus and are involved in the formation of cilia and:",
    "options": [
      "a) Ribosomes",
      "b) Mitochondria",
      "c) Flagella",
      "d) Lysosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "The cytoskeleton is a network of protein fibers present in the cytoplasm, including microfilaments, microtubules, and:",
    "options": [
      "a) Collagen fibers",
      "b) Elastin fibers",
      "c) Intermediate filaments",
      "d) Myosin fibers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Cilium (plural cilia) and flagellum (plural flagella) are locomotive appendages that protrude from certain cells. The core of eukaryotic cilia and flagella is called:",
    "options": [
      "a) Centrosome",
      "b) Basal body",
      "c) Axoneme",
      "d) Kinetochore"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Prokaryotic cells have DNA as their genetic material, but it is not enclosed within a true:",
    "options": [
      "a) Cell wall",
      "b) Cell membrane",
      "c) Nucleus",
      "d) Cytoplasm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Eukaryotic cells are generally larger (10-100 µm) than prokaryotic cells (1-10 µm) and possess a distinct nucleus and:",
    "options": [
      "a) Peptidoglycan cell wall",
      "b) Simple flagella",
      "c) Membrane-bound organelles",
      "d) Circular chromosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Cell signaling involves the transmission of signals between cells through a series of molecular events, often leading to a:",
    "options": [
      "a) Genetic mutation",
      "b) Metabolic shutdown",
      "c) Cellular response",
      "d) Cell death"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "In protein/peptide signaling, the ligand binds to its specific receptor on the plasma membrane, causing a conformational change in the receptor protein and activating it, which then triggers a second messenger like:",
    "options": [
      "a) DNA",
      "b) RNA",
      "c) cAMP (cyclic AMP)",
      "d) ATP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "Steroid hormones, being lipophilic, can diffuse through the plasma membrane of the target cell and bind to intracellular receptors located in the:",
    "options": [
      "a) Mitochondria",
      "b) Endoplasmic reticulum",
      "c) Cytoplasm",
      "d) Nucleus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Movement of substances across the plasma membrane down a concentration gradient without the expenditure of energy is known as:",
    "options": [
      "a) Active transport",
      "b) Osmosis",
      "c) Passive transport",
      "d) Endocytosis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "Facilitated diffusion involves carrier proteins or gated channels to transport substances across the membrane, but it still moves substances:",
    "options": [
      "a) Against the concentration gradient",
      "b) From higher to lower concentration",
      "c) With expenditure of ATP",
      "d) Only water molecules"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "The process by which water molecules diffuse across a cell membrane from an area of higher water concentration to an area of lower water concentration is called:",
    "options": [
      "a) Diffusion",
      "b) Facilitated diffusion",
      "c) Active transport",
      "d) Osmosis"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "Bulk material is exported out of the cell by a process where a vesicle fuses with the plasma membrane and releases its contents into the extracellular environment. This process is called:",
    "options": [
      "a) Endocytosis",
      "b) Phagocytosis",
      "c) Pinocytosis",
      "d) Exocytosis"
    ],
    "correctAnswer": "d"
  }
],
    "Molecular Biology": [
  {
    "id": 1,
    "questionText": "Biochemistry is the study of the chemical components and chemical processes occurring in:",
    "options": [
      "a) Rocks and minerals",
      "b) Artificial intelligence",
      "c) Living organisms",
      "d) Outer space"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Approximately what percentage of the total mass of living organisms (protoplasm) is water?",
    "options": [
      "a) 50%",
      "b) 60%",
      "c) 70%",
      "d) 80%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "The seven remaining % of small organic molecules include:",
    "options": [
      "a) Carbohydrates, proteins, lipids",
      "b) Lipids, nucleic acids, water",
      "c) Carbohydrates, carbon dioxide, lipids, bases and salts",
      "d) Proteins, nucleic acids, water"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "Carbon is tetravalent, meaning it can form how many covalent bonds?",
    "options": [
      "a) Two",
      "b) Three",
      "c) Four",
      "d) Five"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Bonds formed when two atoms share electrons are called:",
    "options": [
      "a) Ionic bonds",
      "b) Hydrogen bonds",
      "c) Covalent bonds",
      "d) Metallic bonds"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "The breaking down of polymers into smaller fragments by the addition of water molecules is called:",
    "options": [
      "a) Condensation",
      "b) Polymerization",
      "c) Hydrolysis",
      "d) Dehydration synthesis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Water is considered the most abundant compound found in all organisms. It constitutes what percentage of the total weight in humans?",
    "options": [
      "a) About 20%",
      "b) About 40%",
      "c) About 65% to 85%",
      "d) About 90%"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "The ability of water to dissolve a wide variety of substances is due to its:",
    "options": [
      "a) Low heat capacity",
      "b) High heat of vaporization",
      "c) Polarity",
      "d) Cohesion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "Charged or polar molecules that are readily dissolved in water are called:",
    "options": [
      "a) Hydrophobic",
      "b) Amphipathic",
      "c) Hydrophilic",
      "d) Non-polar"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "Water has a high specific heat capacity, meaning it requires a large amount of energy to raise its temperature. Specific heat capacity is defined as the number of calories required to raise the temperature of 1 gram of a substance by:",
    "options": [
      "a) 1°C",
      "b) 1°C (i.e., 1 calorie)",
      "c) 1 Joule",
      "d) 4.184 Joules"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "The evaporation of 2ml of water out of 1 litre lowers the temperature of the remaining 998 ml water by approximately:",
    "options": [
      "a) 0.5 °C",
      "b) 1 °C",
      "c) 2 °C",
      "d) 5 °C"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "The attraction between water molecules and the walls of the xylem vessels in plants, enabling water transport upwards, is called:",
    "options": [
      "a) Adhesion",
      "b) Cohesion",
      "c) Transpiration",
      "d) Capillary action"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 13,
    "questionText": "Carbohydrates are naturally occurring organic compounds. The word \"carbohydrate\" literally means:",
    "options": [
      "a) Energy source",
      "b) Hydrated carbon",
      "c) Sweet compound",
      "d) Simple sugar"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Carbohydrates are classified into three groups: Monosaccharides, Disaccharides, and:",
    "options": [
      "a) Oligosaccharides",
      "b) Tetrasaccharides",
      "c) Polysaccharides",
      "d) Glycoproteins"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Monosaccharides (simple sugars) are made of single sugar molecule. An example of a hexose (6-carbon sugar) is:",
    "options": [
      "a) Ribose",
      "b) Erythrose",
      "c) Glucose",
      "d) Fructose"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "Isomers of monosaccharides are molecules with the same chemical formula but different structural formulas. Glucose and fructose are examples of:",
    "options": [
      "a) Stereoisomers",
      "b) Enantiomers",
      "c) Structural isomers",
      "d) Geometric isomers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "When two monosaccharides are joined by a covalent bond through dehydration synthesis, they form a:",
    "options": [
      "a) Monomer",
      "b) Polymer",
      "c) Disaccharide",
      "d) Polysaccharide"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "Maltose (malt sugar) is made up of two glucose monomers joined by a:",
    "options": [
      "a) 1-2 glycosidic bond",
      "b) 1-6 glycosidic bond",
      "c) 1-4 glycosidic bond",
      "d) Alpha-beta glycosidic bond"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Sucrose (cane sugar) is a disaccharide made up of one glucose and one:",
    "options": [
      "a) Galactose",
      "b) Ribose",
      "c) Fructose",
      "d) Maltose"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "Starch is a plant storage polysaccharide. It is insoluble and forms starch granules inside many plant cells, primarily consisting of:",
    "options": [
      "a) Fructose units",
      "b) Galactose units",
      "c) Glucose units",
      "d) Ribose units"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Amylose is a chain made of glucose monomers with 1,4-glycosidic linkages that tends to:",
    "options": [
      "a) Branch extensively",
      "b) Remain linear",
      "c) Coil up into a helix",
      "d) Form a sheet"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Glycogen is an animal storage polysaccharide, similar to amylopectin but more highly branched. It is found mainly in muscles and:",
    "options": [
      "a) Brain",
      "b) Heart",
      "c) Liver",
      "d) Kidneys"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Cellulose is found primarily in plants, where it is the main component of cell walls. The glucose monomers in cellulose are joined by:",
    "options": [
      "a) Alpha-1,4 glycosidic linkages",
      "b) Alpha-1,6 glycosidic linkages",
      "c) Beta-1,4 glycosidic linkages",
      "d) Beta-1,6 glycosidic linkages"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "Chitin is a modified form of cellulose, found in the exoskeletons of crustaceans and insects, and also in the cell walls of:",
    "options": [
      "a) Plants",
      "b) Bacteria",
      "c) Algae",
      "d) Fungi"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 25,
    "questionText": "Proteins are polymers formed by the inter-linkage of monomers called:",
    "options": [
      "a) Glucose units",
      "b) Fatty acids",
      "c) Amino acids",
      "d) Nucleotides"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Haemoglobin, a protein in red blood cells, has how many amino acids?",
    "options": [
      "a) 51",
      "b) 141",
      "c) 146",
      "d) 574"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 27,
    "questionText": "Amino acid is the basic structural unit of proteins. It contains an amino group (NH2), a carboxyl group (COOH), a hydrogen group (H), and a side group (R), all attached to the same central carbon atom (alpha carbon). Out of about 170 types of amino acids, how many commonly take part as building units of proteins?",
    "options": [
      "a) 10",
      "b) 20",
      "c) 50",
      "d) 100"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 28,
    "questionText": "Amino acids that cannot be synthesized by the human body and must be obtained from the diet are called:",
    "options": [
      "a) Non-essential amino acids",
      "b) Conditional amino acids",
      "c) Essential amino acids",
      "d) Dietary amino acids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "A covalent bond that links two amino acids is known as a:",
    "options": [
      "a) Glycosidic bond",
      "b) Ester bond",
      "c) Peptide bond",
      "d) Hydrogen bond"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "The primary structure of a protein refers to the linear arrangement of:",
    "options": [
      "a) Polypeptide chains",
      "b) Alpha-helices",
      "c) Beta-sheets",
      "d) Amino acids"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 31,
    "questionText": "The secondary structure of a protein involves local folding patterns like alpha-helix and:",
    "options": [
      "a) Random coil",
      "b) Globular domain",
      "c) Beta-pleated sheet",
      "d) Tertiary loop"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "The tertiary structure of a protein refers to the overall three-dimensional shape of a single polypeptide chain, maintained by interactions such as hydrogen bonds and:",
    "options": [
      "a) Peptide bonds",
      "b) Glycosidic bonds",
      "c) Ionic and disulfide bonds",
      "d) Ester linkages"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "The quaternary structure of a protein involves the aggregation of two or more polypeptide chains to form a:",
    "options": [
      "a) Simple protein",
      "b) Fibrous protein",
      "c) Complex protein",
      "d) Denatured protein"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Proteins involved in muscle contraction, such as actin, belong to which category of proteins based on their shape?",
    "options": [
      "a) Globular proteins",
      "b) Fibrous proteins",
      "c) Conjugated proteins",
      "d) Derived proteins"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Enzymes, antibodies, and some hormones are examples of:",
    "options": [
      "a) Fibrous proteins",
      "b) Globular proteins",
      "c) Structural proteins",
      "d) Transport proteins"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Insulin, a hormone that controls blood glucose level, is an example of a protein that functions as:",
    "options": [
      "a) Structural support",
      "b) Transport molecule",
      "c) Regulatory molecule (hormone)",
      "d) Catalytic enzyme"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "Blood clotting is important to prevent blood loss after an injury. Which protein is present in blood and converts into fibrin to form a clot?",
    "options": [
      "a) Albumin",
      "b) Haemoglobin",
      "c) Fibrinogen",
      "d) Ferritin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Lipids are a loosely defined group of non-polar molecules that are insoluble in water but soluble in:",
    "options": [
      "a) Acids",
      "b) Bases",
      "c) Organic solvents",
      "d) Salts"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Acylglycerols are composed of two subunits: glycerol and:",
    "options": [
      "a) Amino acids",
      "b) Glucose molecules",
      "c) Fatty acids",
      "d) Phosphate groups"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Fatty acids are responsible for all the characteristics of acylglycerols. Fatty acids are of two types: saturated and:",
    "options": [
      "a) Essential fatty acids",
      "b) Non-essential fatty acids",
      "c) Unsaturated fatty acids",
      "d) Trans fatty acids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Waxes are derived from acylglycerols and have high melting points. They serve as protective coverings for:",
    "options": [
      "a) Animals only",
      "b) Plants only",
      "c) Both plants and animals",
      "d) Fungi"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Phospholipids play important structural roles in making:",
    "options": [
      "a) Cell walls",
      "b) Nucleosomes",
      "c) Plasma membranes",
      "d) Ribosomes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Terpenes are a large and diverse group of lipids that are made of isoprene units. They form biologically important pigments such as chlorophyll and:",
    "options": [
      "a) Haemoglobin",
      "b) Myoglobin",
      "c) Carotenoids and retinal",
      "d) Ferritin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Steroids are lipids whose carbon skeleton is bent to form four fused rings. An important steroid in animal cells is:",
    "options": [
      "a) Testosterone",
      "b) Estrogen",
      "c) Cholesterol",
      "d) Progesterone"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Nucleic acids are polymers of nucleotide units. The two main types of nucleic acids are deoxyribonucleic acid (DNA) and:",
    "options": [
      "a) ATP",
      "b) ADP",
      "c) Ribonucleic acid (RNA)",
      "d) NAD+"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "A nucleoside is made up of a pentose sugar and a:",
    "options": [
      "a) Phosphate group",
      "b) Nitrogen base",
      "c) Fatty acid",
      "d) Amino acid"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "The two types of nitrogenous bases are purines (adenine and guanine) and pyrimidines (cytosine, thymine, and:",
    "options": [
      "a) Adenine",
      "b) Guanine",
      "c) Uracil",
      "d) Cytosine"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "In DNA, adenine pairs with thymine, and guanine pairs with:",
    "options": [
      "a) Uracil",
      "b) Cytosine",
      "c) Adenine",
      "d) Guanine"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "The central dogma of molecular biology describes the transfer of information from DNA to RNA, and then from RNA to:",
    "options": [
      "a) Lipids",
      "b) Carbohydrates",
      "c) Proteins",
      "d) Nucleic acids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Conjugated molecules are formed by the combination of two or more molecules belonging to different categories. Glycoproteins are formed by covalent linkage between a protein and a:",
    "options": [
      "a) Lipid",
      "b) Nucleic acid",
      "c) Carbohydrate",
      "d) Fatty acid"
    ],
    "correctAnswer": "c"
  }
],
    "Enzymes": [
  {
    "id": 1,
    "questionText": "Enzymes are defined as specific proteins that speed up chemical reactions by lowering the required:",
    "options": [
      "a) Temperature",
      "b) pH level",
      "c) Activation energy",
      "d) Substrate concentration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Rates of enzyme-catalyzed reactions may be how many times greater than the rates of corresponding uncatalyzed reactions?",
    "options": [
      "a) 100 times",
      "b) 1,000 times",
      "c) 10,000 times",
      "d) 10^8 to 10^14 times"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 3,
    "questionText": "The specific site on an enzyme where the substrate binds and the reaction takes place is called the:",
    "options": [
      "a) Allosteric site",
      "b) Regulatory site",
      "c) Active site",
      "d) Binding site"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Additional non-protein components required by many enzymes for their activity are called:",
    "options": [
      "a) Cofactors",
      "b) Coenzymes",
      "c) Prosthetic groups",
      "d) All of the above"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "Small organic molecules that participate in enzyme-catalyzed reactions by transporting electrons, hydrogen atoms, or functional groups from one enzyme to another are called:",
    "options": [
      "a) Cofactors",
      "b) Coenzymes",
      "c) Prosthetic groups",
      "d) Holoenzymes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "The coenzyme NAD+ (nicotinamide adenine dinucleotide) is a derivative of which vitamin?",
    "options": [
      "a) Vitamin B1 (Thiamine)",
      "b) Vitamin B2 (Riboflavin)",
      "c) Vitamin B3 (Niacin)",
      "d) Vitamin B5 (Pantothenic acid)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "The speed of a chemical reaction depends on the amount of activation energy required to initiate it. Enzymes work by:",
    "options": [
      "a) Increasing activation energy",
      "b) Decreasing activation energy",
      "c) Stabilizing reactants",
      "d) Destabilizing products"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The lock-and-key model for enzyme action was proposed in 1894 by:",
    "options": [
      "a) Daniel Koshland",
      "b) Emil Fischer",
      "c) Louis Pasteur",
      "d) Robert Hooke"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "The induced fit model for enzyme action, proposed by Daniel Koshland, suggests that the binding of a substrate induces a change in the enzyme's:",
    "options": [
      "a) Molecular weight",
      "b) Active site shape",
      "c) pH optimum",
      "d) Temperature optimum"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "Enzymes are very sensitive to the environment in which they work. One of the factors that can affect the rate of enzyme action is:",
    "options": [
      "a) Light intensity",
      "b) Gravitational force",
      "c) Temperature",
      "d) Atmospheric pressure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "When temperature falls below the optimum temperature, the bonds that determine enzyme shape become less flexible. This leads to what effect on enzyme activity?",
    "options": [
      "a) Increased activity",
      "b) Reduced activity due to decreased kinetic energy",
      "c) Denaturation",
      "d) Irreversible inhibition"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "The optimum temperature for human enzymes is typically around:",
    "options": [
      "a) 25 °C",
      "b) 37 °C",
      "c) 45 °C",
      "d) 60 °C"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "Pepsin, a human digestive enzyme, has an optimum pH of:",
    "options": [
      "a) 4.6-9.2",
      "b) 6.2",
      "c) 1.5-1.6",
      "d) 7.0"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "When enzyme molecules are free (at low substrate concentration), new substrate molecules bind with the available active sites, and the rate of reaction:",
    "options": [
      "a) Decreases",
      "b) Remains constant",
      "c) Increases",
      "d) Becomes zero"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "A chemical that interferes and blocks an enzyme's activity is called an:",
    "options": [
      "a) Activator",
      "b) Coenzyme",
      "c) Inhibitor",
      "d) Substrate"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 16,
    "questionText": "An inhibitor that resembles the enzyme's substrate and competes for the active site is known as a:",
    "options": [
      "a) Non-competitive inhibitor",
      "b) Irreversible inhibitor",
      "c) Competitive inhibitor",
      "d) Allosteric inhibitor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Malonic acid, which has structural similarity with succinate, inhibits the enzyme succinic dehydrogenase. Malonic acid is an example of a:",
    "options": [
      "a) Non-competitive inhibitor",
      "b) Irreversible inhibitor",
      "c) Competitive inhibitor",
      "d) Allosteric inhibitor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "A non-competitive inhibitor binds to the enzyme at a site other than the active site, causing a conformational change that prevents the substrate from binding or alters the active site's shape. This means it:",
    "options": [
      "a) Competes with substrate",
      "b) Does not compete with substrate",
      "c) Binds permanently to the active site",
      "d) Increases enzyme activity"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "An inhibitor whose effect can be reversed by dilution or dialysis or by increasing the concentration of the substrate is called a:",
    "options": [
      "a) Irreversible inhibitor",
      "b) Reversible inhibitor",
      "c) Competitive inhibitor",
      "d) Non-competitive inhibitor"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "Penicillin irreversibly disables the enzyme responsible for building bacterial cell walls, making it an example of an:",
    "options": [
      "a) Reversible inhibitor",
      "b) Competitive inhibitor",
      "c) Non-competitive inhibitor",
      "d) Irreversible inhibitor"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "Enzyme inhibition is crucial in various biological processes, including the regulation of metabolic pathways and:",
    "options": [
      "a) DNA replication",
      "b) Drug development (e.g., aspirin as an inhibitor)",
      "c) Cell division",
      "d) Protein synthesis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "What refers to the phenomenon where the product of a process controls the process itself, often limiting the production of more products?",
    "options": [
      "a) Allosteric regulation",
      "b) Competitive inhibition",
      "c) Feedback inhibition",
      "d) Substrate saturation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Enzymes are classified into six classes based on the general type of reaction they catalyze. Enzymes that catalyze the oxidation / reduction of their substrates are called:",
    "options": [
      "a) Transferases",
      "b) Hydrolases",
      "c) Oxidoreductases",
      "d) Lyases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "Enzymes that catalyze the transfer of a specific functional group from one substrate to another are called:",
    "options": [
      "a) Oxidoreductases",
      "b) Transferases",
      "c) Hydrolases",
      "d) Lyases"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "Enzymes that catalyze the breakdown of larger polypeptides into smaller polypeptides are called:",
    "options": [
      "a) Lipases",
      "b) Amylases",
      "c) Proteases (or proteinases)",
      "d) Nucleases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Enzymes that act upon lipids and catalyze their breakdown are called:",
    "options": [
      "a) Proteases",
      "b) Amylases",
      "c) Lipases",
      "d) Nucleases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Enzymes that act upon carbohydrates and break them into smaller units are called:",
    "options": [
      "a) Lipases",
      "b) Proteases",
      "c) Amylases",
      "d) Nucleases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Enzymes that act upon nucleic acids and catalyze their breakdown are called:",
    "options": [
      "a) Hydrolases",
      "b) Ligases",
      "c) Nucleases",
      "d) Lyases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Which of the following roles is typically performed by an enzyme in oxidative pathways?",
    "options": [
      "a) Dehydrogenase",
      "b) Coenzyme",
      "c) Prosthetic group",
      "d) Inhibitor"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 30,
    "questionText": "What type of enzymes catalyze the reactions in which two molecules are joined together by synthesis of new bonds, using energy from ATP, are placed in group?",
    "options": [
      "a) Hydrolase",
      "b) Ligase",
      "c) Lyase",
      "d) Transferase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Which of the following is an example of hydrolases?",
    "options": [
      "a) Lipase",
      "b) Glycogen phosphorylase",
      "c) Pyruvate decarboxylase",
      "d) Cytochrome oxidase"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "Which of the following statements about enzymes is correct?",
    "options": [
      "a) They increase the activation energy of a reaction.",
      "b) They are consumed during the reaction.",
      "c) They are specific in terms of the reactions they catalyze.",
      "d) They always work optimally at high temperatures."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Enzyme B requires Zn+ to catalyse the conversion of substrate X. The zinc is best identified as a(n):",
    "options": [
      "a) Coenzyme",
      "b) Activator",
      "c) Cofactor",
      "d) Product"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "If an enzyme solution is saturated with substrate, the most effective way to obtain an even faster yield of products would be:",
    "options": [
      "a) Add more of the enzymes",
      "b) Add more substrate",
      "c) Add an allosteric inhibitor",
      "d) Add a non-competitive inhibitor"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 35,
    "questionText": "How does a non-competitive inhibitor decrease the rate of an enzyme-catalysed reaction?",
    "options": [
      "a) By binding the active site of the enzyme",
      "b) By changing the shape of the enzyme",
      "c) By changing the free energy change of the reaction",
      "d) By acting as a coenzyme for the reaction"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Which enzyme class is responsible for catalyzing the addition of water to a substrate molecule?",
    "options": [
      "a) Ligase",
      "b) Lyase",
      "c) Hydrolase",
      "d) Isomerase"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "What is optimum pH?",
    "options": [
      "a) The pH at which an enzyme is denatured.",
      "b) The pH at which an enzyme completely loses activity.",
      "c) The pH at which an enzyme shows maximum activity.",
      "d) The pH that is acidic for all enzymes."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "The structure of an enzyme includes its specific region where the substrate binds, known as the:",
    "options": [
      "a) Allosteric site",
      "b) Regulatory site",
      "c) Active site",
      "d) Catalytic pocket"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "How do co-factors and co-enzymes differ?",
    "options": [
      "a) Cofactors are organic, co-enzymes are inorganic.",
      "b) Cofactors can be organic or inorganic, co-enzymes are typically organic.",
      "c) Cofactors are permanently bound, co-enzymes are loosely bound.",
      "d) Cofactors facilitate binding, co-enzymes directly participate in catalysis."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "Which type of enzymes are responsible for breaking down large molecules by adding water, such as lipases and peptidases?",
    "options": [
      "a) Oxidoreductases",
      "b) Transferases",
      "c) Hydrolases",
      "d) Lyases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "What is meant by activation energy?",
    "options": [
      "a) The energy released during a reaction.",
      "b) The energy consumed by the enzyme.",
      "c) The minimum energy required to start a chemical reaction.",
      "d) The energy stored in the products."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "In which regulatory mechanism does the end product of a metabolic pathway inhibit an enzyme earlier in the pathway to control its own production?",
    "options": [
      "a) Competitive inhibition",
      "b) Non-competitive inhibition",
      "c) Feedback inhibition",
      "d) Allosteric activation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Malonic acid competitively inhibits succinic dehydrogenase, while cyanide acts as an irreversible inhibitor of cytochrome oxidase. These are examples of:",
    "options": [
      "a) Coenzymes and cofactors",
      "b) Activators and promoters",
      "c) Competitive and irreversible inhibitors",
      "d) Substrates and products"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Enzymes are made of which type of macromolecules?",
    "options": [
      "a) Carbohydrates",
      "b) Lipids",
      "c) Nucleic acids",
      "d) Proteins"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "The active site of an enzyme is usually a small part of the enzyme molecule, typically a cleft or depression on the surface, which is formed by a few:",
    "options": [
      "a) Lipid molecules",
      "b) Carbohydrate chains",
      "c) Amino acids",
      "d) Nucleic acid bases"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What happens to enzyme activity if the pH deviates significantly from its optimum?",
    "options": [
      "a) It increases.",
      "b) It remains constant.",
      "c) The enzyme becomes denatured, and activity decreases.",
      "d) It speeds up the reaction."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "The enzyme salivary amylase, found in human saliva, has an optimum pH range of approximately:",
    "options": [
      "a) 1.5-1.6",
      "b) 4.6-9.2",
      "c) 6.7-7.0",
      "d) 8.0"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "When all active sites of enzymes are occupied (at high substrate concentration), any more substrate molecules do not find free active sites and so reaction rate does not increase. This is known as:",
    "options": [
      "a) Enzyme denaturation",
      "b) Enzyme inhibition",
      "c) Substrate saturation",
      "d) Feedback inhibition"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "Irreversible inhibitors typically form what type of bonds with the enzyme?",
    "options": [
      "a) Hydrogen bonds",
      "b) Ionic bonds",
      "c) Strong covalent bonds",
      "d) Weak hydrophobic interactions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Enzymes are sensitive to what in their environment, which can alter their chemistry and three-dimensional shape?",
    "options": [
      "a) Light",
      "b) Pressure",
      "c) Humidity",
      "d) Temperature and pH"
    ],
    "correctAnswer": "d"
  }
],
    "Bioenergetics": [
  {
    "id": 1,
    "questionText": "Bioenergetics is the study of how energy flows through:",
    "options": [
      "a) Ecosystems",
      "b) Living systems",
      "c) Non-living systems",
      "d) Chemical reactions"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "The processes of photosynthesis and respiration help to understand some of the principles of:",
    "options": [
      "a) Genetics",
      "b) Molecular biology",
      "c) Bioenergetics",
      "d) Taxonomy"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "The special energy currency for cellular reactions is:",
    "options": [
      "a) ADP",
      "b) AMP",
      "c) ATP",
      "d) NADP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "A molecule of ATP has three subunits: adenine, ribose, and:",
    "options": [
      "a) Two phosphate groups",
      "b) One phosphate group",
      "c) Three phosphate groups",
      "d) Four phosphate groups"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "ATP was discovered in 1929 by:",
    "options": [
      "a) Fritz Lipmann",
      "b) Hans Krebs",
      "c) Karl Lohmann",
      "d) Melvin Calvin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "The breaking of one phosphate bond from ATP (adenosine triphosphate) releases approximately how much energy?",
    "options": [
      "a) 3.3 kcal/mole",
      "b) 7.3 kcal/mole",
      "c) 10.3 kcal/mole",
      "d) 12.0 kcal/mole"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Photosynthesis involves the use of light energy that is absorbed and converted into chemical energy by:",
    "options": [
      "a) Chemoautotrophs",
      "b) Heterotrophs",
      "c) Photosynthetic pigments",
      "d) Decomposers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "The overall chemical equation for photosynthesis is:",
    "options": [
      "a) C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy",
      "b) 6CO2 + 12H2O + Light → C6H12O6 + 6O2 + 6H2O",
      "c) C6H12O6 + 6O2 → 6CO2 + 6H2O",
      "d) 6CO2 + 6H2O + Light → C6H12O6 + 6O2"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "The process where light energy is absorbed by pigments, and carbon dioxide is reduced by using ATP and NADPH, is known as:",
    "options": [
      "a) Cellular respiration",
      "b) Fermentation",
      "c) Photosynthesis",
      "d) Chemosynthesis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The first action spectrum of photosynthesis was plotted in 1883 by:",
    "options": [
      "a) Melvin Calvin",
      "b) Hans Krebs",
      "c) T.W. Engelmann",
      "d) Karl Lohmann"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "The carbon dioxide used in photosynthesis enters the leaves through small pores called:",
    "options": [
      "a) Lenticels",
      "b) Hydathodes",
      "c) Stomata",
      "d) Guard cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "In 1930s, Van Neil hypothesized that plant splits water as a source of hydrogen, releasing what as a by-product?",
    "options": [
      "a) Carbon dioxide",
      "b) Carbohydrates",
      "c) Oxygen",
      "d) ATP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "The main photosynthetic pigments in plants are chlorophyll-a, chlorophyll-b, xanthophylls, and:",
    "options": [
      "a) Phycobilins",
      "b) Carotenoids",
      "c) Anthocyanins",
      "d) Both a and b"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 14,
    "questionText": "Chlorophyll a is a lipid molecule with a porphyrin ring and a hydrophobic tail. The porphyrin ring contains which metal ion at its center?",
    "options": [
      "a) Iron",
      "b) Copper",
      "c) Zinc",
      "d) Magnesium"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "The absorption spectrum for chlorophyll-a shows maximum absorption in which light wavelengths?",
    "options": [
      "a) Green and yellow",
      "b) Blue-violet (430 nm) and red light (670 nm)",
      "c) Infrared and ultraviolet",
      "d) Orange and yellow-green"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "For efficient absorption and utilization of solar energy, photosynthetic pigments are organized into clusters called:",
    "options": [
      "a) Chloroplasts",
      "b) Grana",
      "c) Thylakoids",
      "d) Photosystems"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "Photosystem-I (PS-I) contains a chlorophyll-a molecule in its reaction center that absorbs maximum light of:",
    "options": [
      "a) 680 nm",
      "b) 700 nm",
      "c) 550 nm",
      "d) 430 nm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 18,
    "questionText": "Photosynthesis is a redox (oxidation-reduction) process. In the light-dependent reactions, what is oxidized?",
    "options": [
      "a) Carbon dioxide",
      "b) Glucose",
      "c) Water",
      "d) Oxygen"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Light-dependent reactions take place in the:",
    "options": [
      "a) Stroma of the chloroplast",
      "b) Inner membrane of the chloroplast",
      "c) Thylakoid membranes of the grana",
      "d) Cytosol"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The first step in non-cyclic photophosphorylation is the absorption of light by PS-II, which excites electrons that move from PS-II to:",
    "options": [
      "a) PS-I",
      "b) Ferredoxin",
      "c) Primary electron acceptor (P680 chlorophyll)",
      "d) Plastocyanin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "The splitting of water molecules to release electrons, protons, and oxygen in the light-dependent reactions is called:",
    "options": [
      "a) Photoreduction",
      "b) Photooxidation",
      "c) Photolysis of water",
      "d) Chemiosmosis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "In the electron transport chain following PS-II, electrons move through plastoquinone (PQ), cytochrome complex, and plastocyanin (PC) to reach:",
    "options": [
      "a) ATP synthase",
      "b) NADP reductase",
      "c) PS-I",
      "d) Oxygen"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "The primary electron acceptor of PS-I is ferredoxin (FD). From ferredoxin, NADP+ gets two electrons and an H+ ion, forming:",
    "options": [
      "a) ATP",
      "b) ADP",
      "c) NADPH",
      "d) FADH2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "In cyclic photophosphorylation, excited electrons from PS-I travel through an alternative pathway and return to PS-I, generating what only?",
    "options": [
      "a) NADPH",
      "b) ATP",
      "c) Both ATP and NADPH",
      "d) Oxygen"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The mechanism where energy is released from electrons flowing through carriers to synthesize ATP, driven by a proton gradient, is called:",
    "options": [
      "a) Photolysis",
      "b) Photophosphorylation",
      "c) Chemiosmosis",
      "d) Electron transport"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "The light-independent reactions (Calvin cycle) take place in the:",
    "options": [
      "a) Thylakoid membranes",
      "b) Inner chloroplast membrane",
      "c) Stroma of the chloroplast",
      "d) Cytosol"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The enzyme that catalyzes the initial carbon fixation step in the Calvin cycle, combining CO2 with ribulose bisphosphate (RuBP), is:",
    "options": [
      "a) NADP reductase",
      "b) ATP synthase",
      "c) RuBisCO (Ribulose bisphosphate carboxylase)",
      "d) Phosphoglycerate kinase"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "In the reduction phase of the Calvin cycle, 3-PGA (3-phosphoglyceric acid) is converted to G3P (glyceraldehyde 3-phosphate) using energy from ATP and:",
    "options": [
      "a) FADH2",
      "b) NADPH",
      "c) NADH",
      "d) Oxygen"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "The overall process by which organisms break down complex carbon-containing compounds (e.g., glucose) to get usable energy is called:",
    "options": [
      "a) Photosynthesis",
      "b) Cellular respiration",
      "c) Fermentation",
      "d) Bioenergetics"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Anaerobic respiration occurs in many microorganisms and some cells of higher plants in the absence of:",
    "options": [
      "a) Glucose",
      "b) ATP",
      "c) Oxygen",
      "d) Carbon dioxide"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "In alcoholic fermentation, pyruvic acid is converted to ethyl alcohol and:",
    "options": [
      "a) Lactic acid",
      "b) Water",
      "c) Carbon dioxide",
      "d) ATP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Lactic acid fermentation occurs in muscle cells of humans and other animals when oxygen is not available, converting pyruvic acid to:",
    "options": [
      "a) Ethyl alcohol",
      "b) Carbon dioxide",
      "c) Lactic acid",
      "d) Acetyl-CoA"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Cellular respiration is a continuous process that can be divided into four main stages, starting with:",
    "options": [
      "a) Krebs cycle",
      "b) Electron transport chain",
      "c) Glycolysis",
      "d) Pyruvic acid oxidation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Glycolysis takes place in the:",
    "options": [
      "a) Mitochondria",
      "b) Nucleus",
      "c) Cytoplasm (Cytosol)",
      "d) Endoplasmic reticulum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "During glycolysis, one glucose molecule is broken down into two molecules of:",
    "options": [
      "a) Acetyl-CoA",
      "b) Citric acid",
      "c) Pyruvic acid",
      "d) Lactic acid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "In the preparatory phase of glycolysis, glucose is converted to fructose 1,6-bisphosphate, which then splits into two molecules of:",
    "options": [
      "a) Pyruvic acid and acetyl-CoA",
      "b) Lactic acid and ethyl alcohol",
      "c) Glyceraldehyde 3-phosphate (G3P) and dihydroxyacetone phosphate (DAP)",
      "d) Citric acid and malic acid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The oxidative phase of glycolysis involves the conversion of glyceraldehyde 3-phosphate to 1,3-bisphosphoglyceric acid, which generates:",
    "options": [
      "a) ATP",
      "b) FADH2",
      "c) NADH",
      "d) CO2"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Pyruvic acid oxidation, also known as the link reaction, converts pyruvic acid into acetyl-CoA, which then enters the:",
    "options": [
      "a) Glycolysis",
      "b) Electron transport chain",
      "c) Krebs cycle",
      "d) Fermentation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "The Krebs cycle (citric acid cycle) takes place in the:",
    "options": [
      "a) Cytoplasm",
      "b) Outer mitochondrial membrane",
      "c) Mitochondrial matrix",
      "d) Inner mitochondrial membrane"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "In the Krebs cycle, acetyl-CoA combines with a four-carbon molecule, oxaloacetic acid, to form a six-carbon molecule called:",
    "options": [
      "a) Pyruvic acid",
      "b) Lactic acid",
      "c) Malic acid",
      "d) Citric acid"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 41,
    "questionText": "During each turn of the Krebs cycle, how many molecules of NADH are produced?",
    "options": [
      "a) One",
      "b) Two",
      "c) Three",
      "d) Four"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "The electron transport chain, located in the inner mitochondrial membrane, receives electrons from NADH and:",
    "options": [
      "a) ATP",
      "b) CO2",
      "c) FADH2",
      "d) Water"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Electrons pass through a series of carriers (e.g., flavin adenine dinucleotide, coenzyme Q, cytochromes) in the electron transport chain, releasing energy that is used to pump H+ ions into the:",
    "options": [
      "a) Mitochondrial matrix",
      "b) Cytoplasm",
      "c) Inter-membrane space",
      "d) Outer mitochondrial membrane"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "The final electron acceptor in the electron transport chain during aerobic respiration is:",
    "options": [
      "a) Carbon dioxide",
      "b) Water",
      "c) Oxygen",
      "d) ATP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Substrate-level phosphorylation refers to ATP synthesis where an enzyme directly transfers a phosphate group from an organic substrate molecule to:",
    "options": [
      "a) NADP+",
      "b) FAD",
      "c) ADP",
      "d) Glucose"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What is the total net yield of ATP molecules produced from one glucose molecule through glycolysis, pyruvic acid oxidation, and Krebs cycle, as described in the source?",
    "options": [
      "a) 2 ATP",
      "b) 4 ATP",
      "c) 18 ATP",
      "d) 38 ATP"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 47,
    "questionText": "Photorespiration occurs in green cells in the presence of light, but instead of reducing CO2, the enzyme RuBisCO combines RuBP with:",
    "options": [
      "a) CO2",
      "b) H2O",
      "c) O2 (oxygen)",
      "d) ATP"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "In photorespiration, RuBisCO acts as an oxygenase, producing 3-phosphoglyceric acid (3-PGA) and:",
    "options": [
      "a) Glucose",
      "b) Glycolate",
      "c) Serine",
      "d) Phosphoglycolate"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 49,
    "questionText": "Photorespiration is generally considered to be disadvantageous for C3 plants because it:",
    "options": [
      "a) Produces more ATP",
      "b) Increases photosynthetic efficiency",
      "c) Wastes carbon and energy without producing sugar",
      "d) Is only active at low temperatures"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "C4 photosynthesis plants, such as corn and sugarcane, initially fix CO2 into a four-carbon compound in which cells?",
    "options": [
      "a) Bundle sheath cells",
      "b) Epidermal cells",
      "c) Guard cells",
      "d) Mesophyll cells"
    ],
    "correctAnswer": "d"
  }
],
    "Structural and Computational Biology": [
  {
    "id": 1,
    "questionText": "Structural biology deals with the study of three-dimensional (3D) structures of macromolecules, including proteins and:",
    "options": [
      "a) Lipids",
      "b) Carbohydrates",
      "c) Nucleic acids",
      "d) Viruses"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "Structural biology has a wide range of applications, especially in the field of:",
    "options": [
      "a) Agriculture",
      "b) Engineering",
      "c) Medical research",
      "d) Space exploration"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 3,
    "questionText": "Determining the active sites and different domains of macromolecules is crucial for designing specific drugs. For example, structural studies of HIV-1 reverse transcriptase have identified its:",
    "options": [
      "a) Lipid envelope",
      "b) Glycoprotein spikes",
      "c) Polymerase domain",
      "d) Capsid structure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Structural biology is used to identify drug targets. For example, the 3D structure of the spike protein of COVID-19 (SARS-CoV-2) helps in designing:",
    "options": [
      "a) Vaccines",
      "b) Antiviral drugs",
      "c) Diagnostic tests",
      "d) Antibiotics"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 5,
    "questionText": "Identifying Host-Pathogen Interactions involves understanding how pathogens (like viruses or bacteria) interact with the host's body cells. This is studied by looking at:",
    "options": [
      "a) Genetic sequences",
      "b) Metabolic pathways",
      "c) 3D structures of both the pathogen and the host cell proteins",
      "d) Cellular organelles"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Identifying Protein Misfolding is important because the functionality of proteins depends on their correct folding into:",
    "options": [
      "a) One-dimensional shape",
      "b) Two-dimensional shape",
      "c) Three-dimensional shape",
      "d) Linear sequence"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Several diseases, including cystic fibrosis, Parkinson's, and Alzheimer's, originate due to:",
    "options": [
      "a) Genetic mutations",
      "b) Viral infections",
      "c) Incorrect folding of proteins",
      "d) Nutritional deficiencies"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "X-ray crystallography, developed in 1912 by William Henry Bragg and William Lawrence Bragg, is used to determine the:",
    "options": [
      "a) Genetic sequence of proteins",
      "b) Metabolic activity of proteins",
      "c) Protein structure",
      "d) Protein function"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "The first step in X-ray crystallography experiment is to:",
    "options": [
      "a) Measure a diffraction pattern",
      "b) Grow a crystal",
      "c) Compute an electron density",
      "d) Build a model of your molecule"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "To produce a clear 3D structure of a protein using X-ray crystallography, the protein must first be grown into a:",
    "options": [
      "a) Gel",
      "b) Liquid solution",
      "c) Solid crystal form",
      "d) Powder"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Computational biology is an interdisciplinary field that uses computational techniques and tools to solve biological problems. It integrates knowledge from biology, computer science, mathematics, and:",
    "options": [
      "a) Physics",
      "b) Chemistry",
      "c) Statistics",
      "d) Engineering"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Genomics is the study of:",
    "options": [
      "a) Proteins",
      "b) Lipids",
      "c) Carbohydrates",
      "d) Genomes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "Bioinformatics is the application of computer technology to manage and analyze:",
    "options": [
      "a) Clinical data",
      "b) Engineering data",
      "c) Biological data (e.g., DNA, RNA, and protein sequences)",
      "d) Environmental data"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Drug Discovery in computational biology helps in identifying potential drug targets and simulating the effects of drugs on:",
    "options": [
      "a) Physical systems",
      "b) Chemical reactions",
      "c) Biological systems",
      "d) Mechanical systems"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "Genetic Research in computational biology helps identify genetic variations associated with diseases and aids in understanding the genetic basis of diseases and:",
    "options": [
      "a) Drug development",
      "b) Development of personalized medicine",
      "c) Evolutionary relationships",
      "d) Structural biology"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "Evolutionary Biology uses computational tools to compare genetic information across different species, helping to reconstruct evolutionary relationships and understand the process of:",
    "options": [
      "a) Speciation",
      "b) Mutation",
      "c) Adaptation",
      "d) Evolution"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "GenBank is a key database of computational biology used to analyze:",
    "options": [
      "a) Protein structures",
      "b) Carbohydrate sequences",
      "c) Nucleic acid and protein sequences",
      "d) Lipid compositions"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "Protein Data Bank (PDB) provides 3D structural data of large biological molecules, such as proteins and nucleic acids. It is important for studying the structures of macromolecules, their functions, and designing drugs that target specific:",
    "options": [
      "a) DNA sequences",
      "b) RNA sequences",
      "c) Protein structures",
      "d) Carbohydrate structures"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "Ensembl is a genome browser providing information on genome sequences, gene models, and comparative genomics for various species. It helps to analyze:",
    "options": [
      "a) Protein folding",
      "b) Drug interactions",
      "c) Genomic and evolutionary biology data",
      "d) Cellular processes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "BLAST (Basic Local Alignment Search Tool) is used for comparing primary biological sequence information, such as the amino-acid sequences of proteins or the nucleotides of:",
    "options": [
      "a) Lipids",
      "b) Carbohydrates",
      "c) DNA sequences",
      "d) Metals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 21,
    "questionText": "Sequence homology refers to the similarity between DNA, RNA, or protein sequences due to:",
    "options": [
      "a) Random chance",
      "b) Environmental factors",
      "c) Shared ancestry",
      "d) Convergent evolution"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Orthologs are sequences in different species that originated from a common ancestral gene due to:",
    "options": [
      "a) Duplication",
      "b) Recombination",
      "c) Speciation",
      "d) Mutation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Paralogs are sequences within the same species that originated from a gene:",
    "options": [
      "a) Recombination",
      "b) Speciation",
      "c) Duplication",
      "d) Deletion"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "Structural homology refers to the similarity in the three-dimensional structures of proteins or other macromolecules due to shared ancestry. It helps in understanding:",
    "options": [
      "a) Genetic mutations",
      "b) Protein functions and interactions",
      "c) Metabolic pathways",
      "d) Cellular transport"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "Structural biology and computational biology are important in drug design as drugs are often designed to interact with specific:",
    "options": [
      "a) Cell types",
      "b) Organs",
      "c) Protein structures",
      "d) Metabolic intermediates"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Generally, the function of a protein depends on its:",
    "options": [
      "a) One-dimensional structure",
      "b) Two-dimensional structure",
      "c) Three-dimensional structure",
      "d) All of the above"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "The protein domains are:",
    "options": [
      "a) Functional and structural units within protein",
      "b) Secondary structural elements",
      "c) Linear sequences of amino acids",
      "d) Specific regions for post-translational modification"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 28,
    "questionText": "What is a primary role of computational biology?",
    "options": [
      "a) Using computer algorithms to analyze data",
      "b) Identifying genetic mutations",
      "c) Studying protein functions",
      "d) Analyzing the expression patterns"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 29,
    "questionText": "Which computational approach is used to predict protein structure based on amino acid sequence?",
    "options": [
      "a) Multiple sequence alignment",
      "b) Clustering analysis",
      "c) Homology modelling",
      "d) BLAST searches"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Distinct structural units within proteins, often having independent functions, are referred to as:",
    "options": [
      "a) Active sites",
      "b) Motifs",
      "c) Domains",
      "d) Subunits"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The mechanism by which the SARS-CoV-2 (corona virus) typically enters host cells involves the binding of its spike protein to a receptor on the human cell surface, often:",
    "options": [
      "a) CD4 receptor",
      "b) CCR5 receptor",
      "c) ACE2 receptor",
      "d) Transferrin receptor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "The study of the entire set of genetic material within an organism, including its organization, function, and evolution, is called:",
    "options": [
      "a) Proteomics",
      "b) Bioinformatics",
      "c) Genomics",
      "d) Metabolomics"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "Genomics focuses on the study of genomes, while proteomics is the large-scale study of:",
    "options": [
      "a) Lipids",
      "b) Carbohydrates",
      "c) Nucleic acids",
      "d) Proteins"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 34,
    "questionText": "GenBank serves as a public database primarily for:",
    "options": [
      "a) Protein structures",
      "b) Drug candidates",
      "c) Nucleic acid sequences",
      "d) Cellular images"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 35,
    "questionText": "The Protein Data Bank (PDB) is a global archive for the 3D structural data of:",
    "options": [
      "a) Genes",
      "b) Metabolites",
      "c) Proteins and nucleic acids",
      "d) Cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Applications of structural biology include determining active sites, identifying drug targets, and understanding:",
    "options": [
      "a) Metabolic rates",
      "b) Cellular respiration",
      "c) Host-pathogen interactions and protein misfolding",
      "d) Population genetics"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The principle of X-ray crystallography relies on the diffraction of X-rays by the atoms in a crystal, which creates a pattern that can be used to:",
    "options": [
      "a) Determine the elemental composition of the crystal",
      "b) Analyze the magnetic properties of the crystal",
      "c) Infer the three-dimensional arrangement of atoms in the crystal",
      "d) Measure the temperature of the crystal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Which of the following is a key database in computational biology that provides protein structural data?",
    "options": [
      "a) GenBank",
      "b) Ensembl",
      "c) Protein Data Bank (PDB)",
      "d) BLAST"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "If a new viral pandemic emerges, structural biology can contribute to preventing the disease by:",
    "options": [
      "a) Tracing the origin of the virus",
      "b) Analyzing patient symptoms",
      "c) Determining the structure of viral proteins to identify drug targets",
      "d) Developing diagnostic kits"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "Given an unknown protein's amino acid sequence, computational biology can predict its structure and function using techniques like:",
    "options": [
      "a) X-ray crystallography",
      "b) NMR spectroscopy",
      "c) Homology modeling and molecular dynamics simulations",
      "d) Gel electrophoresis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Homology models are computational predictions of protein structure, and thus they typically differ from experimentally determined structures primarily due to:",
    "options": [
      "a) Differences in amino acid sequence",
      "b) Variations in solvent conditions",
      "c) Inherent approximations and limitations of the prediction algorithms",
      "d) Mutations in the protein"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "Computational biology accelerates drug development by assisting in early stages such as:",
    "options": [
      "a) Clinical trials and regulatory approval",
      "b) Manufacturing and distribution",
      "c) Target identification, lead compound discovery, and virtual screening",
      "d) Post-market surveillance"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "The study of human genome is an example of:",
    "options": [
      "a) Proteomics",
      "b) Bioinformatics",
      "c) Genomics",
      "d) Metabolomics"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which database is most useful for comparing nucleotide sequences to identify homologous genes?",
    "options": [
      "a) Protein Data Bank",
      "b) Ensembl",
      "c) BLAST",
      "d) NCBI PubMed"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "What is the primary output of an X-ray crystallography experiment?",
    "options": [
      "a) An image of the protein",
      "b) The amino acid sequence",
      "c) A diffraction pattern",
      "d) A protein crystal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "What is the significance of the Protein Data Bank (PDB)?",
    "options": [
      "a) It stores genetic sequences of all known organisms.",
      "b) It provides tools for metabolic pathway analysis.",
      "c) It offers a repository for 3D structures of biological macromolecules.",
      "d) It catalogs information on drug-target interactions."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Sequence homology implies that two sequences share similarity due to:",
    "options": [
      "a) Identical function",
      "b) Random coincidence",
      "c) Common evolutionary origin",
      "d) Identical length"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "If two genes in different species evolved from a common ancestral gene after a speciation event, they are considered:",
    "options": [
      "a) Paralogs",
      "b) Orthologs",
      "c) Homologs",
      "d) Xenologs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Computational tools like Ensembl are used in evolutionary biology to:",
    "options": [
      "a) Design new proteins",
      "b) Predict protein folding",
      "c) Reconstruct evolutionary relationships",
      "d) Simulate cellular processes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "Which term describes the process of predicting the three-dimensional structure of a protein from its amino acid sequence based on its similarity to proteins of known structure?",
    "options": [
      "a) De novo protein folding",
      "b) Molecular dynamics",
      "c) Homology modeling",
      "d) Virtual screening"
    ],
    "correctAnswer": "c"
  }
],
    "Plant Physiology": [
  {
    "id": 1,
    "questionText": "Which of the following is classified as a macronutrient for plants?",
    "options": [
      "a) Zinc",
      "b) Copper",
      "c) Nitrogen",
      "d) Manganese"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 2,
    "questionText": "How many macronutrients are generally required by plants for their nutrition?",
    "options": [
      "a) 7",
      "b) 9",
      "c) 12",
      "d) 16"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Which nutrient is essential for the synthesis of chlorophyll and plays a crucial role in promoting root growth?",
    "options": [
      "a) Phosphorus",
      "b) Potassium",
      "c) Magnesium",
      "d) Sulfur"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 4,
    "questionText": "A deficiency of which macronutrient can lead to delayed flowering, as well as browning and wrinkling of leaves?",
    "options": [
      "a) Carbon",
      "b) Phosphorus",
      "c) Calcium",
      "d) Sulfur"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "Which of these plants is an example of an insectivorous plant?",
    "options": [
      "a) Rose",
      "b) Water lily",
      "c) Pitcher Plant",
      "d) Cactus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "The Venus fly trap's 'trap' closes rapidly upon contact due to the stimulation of:",
    "options": [
      "a) Light receptors",
      "b) Temperature changes",
      "c) Hair-like projections (trichomes)",
      "d) Chemical signals from prey"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "Primary gas exchange in plants, such as the uptake of carbon dioxide, occurs through which structures on the leaf surface?",
    "options": [
      "a) Lenticels",
      "b) Stomata",
      "c) Hydathodes",
      "d) Cuticle"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The opening and closing of stomata are directly regulated by the turgor pressure within which specialized cells?",
    "options": [
      "a) Epidermal cells",
      "b) Mesophyll cells",
      "c) Guard cells",
      "d) Xylem parenchyma cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 9,
    "questionText": "According to the starch sugar hypothesis, stomata open when:",
    "options": [
      "a) Sugar concentration in guard cells decreases.",
      "b) Starch is converted to sugar in guard cells, increasing turgor pressure.",
      "c) CO2 concentration in guard cells increases.",
      "d) Guard cells become flaccid due to water loss."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "During daylight, stomata open primarily to allow the entry of which gas for photosynthesis?",
    "options": [
      "a) Oxygen",
      "b) Nitrogen",
      "c) Carbon dioxide",
      "d) Water vapor"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "Which type of plant tissue provides support, has relatively thin primary cell walls, and is crucial for maintaining turgor pressure?",
    "options": [
      "a) Sclerenchyma",
      "b) Collenchyma",
      "c) Parenchyma",
      "d) Xylem"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "Which supporting tissue consists of cells with thick, often lignified secondary cell walls, providing significant strength and rigidity to the plant?",
    "options": [
      "a) Parenchyma",
      "b) Collenchyma",
      "c) Sclerenchyma",
      "d) Phloem"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Collenchyma cells are characterized by their:",
    "options": [
      "a) Uniformly thin cell walls.",
      "b) Lignified cell walls.",
      "c) Cell walls thickened at the corners.",
      "d) Exclusive presence of secondary walls."
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "The water potential ($$\\Psi_W$$) of a system is the sum of which two main components?",
    "options": [
      "a) Solute potential ($$\\Psi_S$$) and pressure potential ($$\\Psi_P$$)",
      "b) Osmotic potential and turgor pressure",
      "c) Matric potential and gravitational potential",
      "d) Adhesion and cohesion"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "Water in plants moves from a region of ______ water potential to a region of ______ water potential.",
    "options": [
      "a) lower, higher",
      "b) higher, lower",
      "c) equal, unequal",
      "d) negative, positive"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The primary site for water and mineral absorption in plants is through the extensive network of:",
    "options": [
      "a) Stem cells",
      "b) Root hairs",
      "c) Leaf epidermis",
      "d) Flower petals"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "Which pathway for water movement in roots involves water moving exclusively through the cell walls and intercellular spaces, bypassing the cell cytoplasm?",
    "options": [
      "a) Symplast pathway",
      "b) Vacuolar pathway",
      "c) Apoplast pathway",
      "d) Transmembrane pathway"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "The symplast pathway for water movement in roots involves the continuous network of:",
    "options": [
      "a) Cell walls and intercellular spaces.",
      "b) Cytoplasm and plasmodesmata.",
      "c) Vacuoles and cell sap.",
      "d) Xylem vessels only."
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "Which component of vascular tissue is primarily responsible for the transport of water and dissolved minerals from the roots to the rest of the plant?",
    "options": [
      "a) Phloem",
      "b) Sieve tube elements",
      "c) Xylem",
      "d) Parenchyma"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The overall movement of water through the xylem is explained by the TACT mechanism. What does the 'T' in TACT primarily represent?",
    "options": [
      "a) Turgor",
      "b) Transport",
      "c) Tension",
      "d) Transpiration"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 21,
    "questionText": "The property of water molecules to adhere to other surfaces, such as the walls of xylem vessels, is known as:",
    "options": [
      "a) Adhesion",
      "b) Cohesion",
      "c) Tension",
      "d) Capillarity"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 22,
    "questionText": "What is the primary function of phloem tissue in plants?",
    "options": [
      "a) Transport of water",
      "b) Providing structural support",
      "c) Translocation of organic nutrients (sugars)",
      "d) Facilitating gas exchange"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 23,
    "questionText": "Which specialized cells within the phloem are directly involved in the transport of sugars throughout the plant?",
    "options": [
      "a) Companion cells",
      "b) Phloem parenchyma",
      "c) Sieve tube elements",
      "d) Phloem fibers"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The most widely accepted theory explaining the transport of sugars through the phloem is the:",
    "options": [
      "a) Cohesion-tension theory",
      "b) Root pressure theory",
      "c) Pressure flow theory (Mass flow theory)",
      "d) Transpiration pull theory"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The active loading of sugar from mesophyll cells into sieve tube elements requires:",
    "options": [
      "a) Diffusion",
      "b) Osmosis",
      "c) Facilitated diffusion",
      "d) Energy (ATP)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 26,
    "questionText": "Regions of undifferentiated plant cells that are capable of continuous cell division and give rise to new tissues are known as:",
    "options": [
      "a) Differentiated tissues",
      "b) Meristems",
      "c) Vascular bundles",
      "d) Epidermis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Which type of meristem is responsible for the increase in the length of the plant, being located at the tips of roots and shoots?",
    "options": [
      "a) Lateral meristem",
      "b) Intercalary meristem",
      "c) Apical meristem",
      "d) Secondary meristem"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "The increase in the thickness or girth of stems and roots (secondary growth) is primarily due to the activity of the:",
    "options": [
      "a) Apical meristem",
      "b) Intercalary meristem",
      "c) Primary meristem",
      "d) Lateral meristems (vascular cambium and cork cambium)"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 29,
    "questionText": "The scientific study of tree rings to determine the age of a tree and past environmental conditions is called:",
    "options": [
      "a) Phylogeny",
      "b) Dendrochronology",
      "c) Paleobotany",
      "d) Ecology"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Which plant hormone is well-known for promoting stem elongation, cell enlargement, and breaking seed dormancy?",
    "options": [
      "a) Auxins",
      "b) Gibberellins",
      "c) Cytokinins",
      "d) Abscisic acid"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "Indole acetic acid (IAA) is a naturally occurring plant hormone that belongs to the group of:",
    "options": [
      "a) Gibberellins",
      "b) Cytokinins",
      "c) Abscisic acid",
      "d) Auxins"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 32,
    "questionText": "Which plant hormone primarily promotes cell division and can delay the aging of leaves (senescence)?",
    "options": [
      "a) Auxins",
      "b) Gibberellins",
      "c) Cytokinins",
      "d) Ethylene"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "The plant hormone that acts as a stress hormone, causing stomata to close during water stress and promoting bud/seed dormancy, is:",
    "options": [
      "a) Auxin",
      "b) Ethylene",
      "c) Abscisic acid (ABA)",
      "d) Gibberellin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Which plant hormone is a gaseous compound, known for its role in fruit ripening and inhibiting stem elongation?",
    "options": [
      "a) Auxin",
      "b) Gibberellin",
      "c) Cytokinin",
      "d) Ethylene"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "When a plant cell is placed in a solution that has a lower solute concentration than the cell's cytoplasm, the solution is described as:",
    "options": [
      "a) Isotonic",
      "b) Hypertonic",
      "c) Hypotonic",
      "d) Saturated"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Plants that are adapted to thrive in very dry environments and often have reduced leaves or waxy cuticles are called:",
    "options": [
      "a) Hydrophytes",
      "b) Mesophytes",
      "c) Xerophytes",
      "d) Halophytes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "Water lilies and lotus are classic examples of plants classified as:",
    "options": [
      "a) Xerophytes",
      "b) Halophytes",
      "c) Mesophytes",
      "d) Hydrophytes"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 38,
    "questionText": "Mesophytes are plants that are adapted to grow optimally in environments with:",
    "options": [
      "a) Extreme dry conditions",
      "b) Submerged aquatic conditions",
      "c) Moderate water availability",
      "d) High salt concentrations"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Halophytes are plants that are specially adapted to live in habitats characterized by:",
    "options": [
      "a) Deserts",
      "b) Freshwater lakes",
      "c) Saline soil",
      "d) Tropical rainforests"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 40,
    "questionText": "At very high temperatures, plant enzymes and other proteins can lose their functional structure through a process called:",
    "options": [
      "a) Synthesis",
      "b) Denaturation",
      "c) Activation",
      "d) Crystallization"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "To maintain internal temperature during high external temperatures, plants primarily use which mechanism?",
    "options": [
      "a) Stomatal closure",
      "b) Evaporative cooling through transpiration",
      "c) Production of heat-shock proteins",
      "d) Increased water storage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "In response to low temperatures, plants can increase the proportion of unsaturated fatty acids in their cell membranes to:",
    "options": [
      "a) Increase membrane rigidity",
      "b) Maintain membrane fluidity",
      "c) Reduce solute transport",
      "d) Promote ice crystal formation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Which of the following elements is considered a micronutrient for plants, not a macronutrient?",
    "options": [
      "a) Potassium",
      "b) Calcium",
      "c) Iron",
      "d) Sulfur"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which micronutrient is necessary for lignin synthesis and is also involved in chlorophyll synthesis?",
    "options": [
      "a) Zinc",
      "b) Manganese",
      "c) Copper",
      "d) Boron"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "The active transport of which ions into guard cells causes water to follow by osmosis, leading to stomatal opening?",
    "options": [
      "a) Na+",
      "b) Cl-",
      "c) K+",
      "d) Ca2+"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "Which water transport pathway within roots involves water moving through cell membranes, cytoplasm, tonoplast, and vacuoles?",
    "options": [
      "a) Apoplast pathway",
      "b) Symplast pathway",
      "c) Vacuolar pathway",
      "d) Transmembrane pathway"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "The specialized phloem cells that regulate the activity of sieve tube elements and are involved in sugar loading and unloading are called:",
    "options": [
      "a) Tracheids",
      "b) Vessels",
      "c) Companion cells",
      "d) Xylem parenchyma"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "Primary growth in plants is responsible for an increase in the plant's:",
    "options": [
      "a) Girth",
      "b) Diameter",
      "c) Length",
      "d) Production of bark"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 49,
    "questionText": "The process that involves an increase in the number of cells within the apical meristems of roots and shoots is known as:",
    "options": [
      "a) Cell Elongation",
      "b) Cell Differentiation",
      "c) Cell Division",
      "d) Secondary Growth"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "The plant hormone that plays a significant role in inducing and maintaining dormancy in seeds and buds is:",
    "options": [
      "a) Auxins",
      "b) Gibberellins",
      "c) Abscisic acid",
      "d) Ethylene"
    ],
    "correctAnswer": "c"
  }
],
    "Human Digestive System": [
  {
    "id": 1,
    "questionText": "Digestion is the process by which food breaks down into:",
    "options": [
      "(a) Larger, indigestible molecules",
      "(b) Smaller, absorbable components",
      "(c) Undigested waste",
      "(d) Toxic substances"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "What is the primary function of the human digestive system?",
    "options": [
      "(a) Respiration",
      "(b) Absorption of nutrients and elimination of waste",
      "(c) Circulation of blood",
      "(d) Hormone production"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The human digestive system is composed of the gastrointestinal (GI) tract and:",
    "options": [
      "(a) Respiratory organs",
      "(b) Excretory organs",
      "(c) Accessory digestive organs",
      "(d) Circulatory organs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "Which of the following is NOT an accessory digestive organ?",
    "options": [
      "(a) Salivary glands",
      "(b) Liver",
      "(c) Pancreas",
      "(d) Oesophagus"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 5,
    "questionText": "The GI tract is a continuous tube that extends from:",
    "options": [
      "(a) Pharynx to stomach",
      "(b) Mouth to anus",
      "(c) Oesophagus to large intestine",
      "(d) Stomach to rectum"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "The muscular tongue plays a role in the selection of food through its:",
    "options": [
      "(a) Taste buds",
      "(b) Chewing action",
      "(c) Swallowing reflex",
      "(d) Peristalsis"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 7,
    "questionText": "Mechanical digestion in the mouth primarily involves:",
    "options": [
      "(a) Chemical breakdown by enzymes",
      "(b) Chewing (mastication)",
      "(c) Absorption of nutrients",
      "(d) Secretion of hormones"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "How many pairs of salivary glands are located in the oral cavity?",
    "options": [
      "(a) Two",
      "(b) Three",
      "(c) Four",
      "(d) One"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Saliva contains an enzyme that initiates the digestion of polysaccharides (starch) into disaccharides. This enzyme is:",
    "options": [
      "(a) Pepsin",
      "(b) Lipase",
      "(c) Amylase",
      "(d) Trypsin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The pharynx is a cavity behind the mouth that serves as a common passageway for both:",
    "options": [
      "(a) Food and urine",
      "(b) Air and blood",
      "(c) Food and respiratory tracts",
      "(d) Air and digestive enzymes"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 11,
    "questionText": "During swallowing, the bolus is pushed towards the back of the mouth by the:",
    "options": [
      "(a) Tongue",
      "(b) Epiglottis",
      "(c) Soft palate",
      "(d) Larynx"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 12,
    "questionText": "The epiglottis prevents food from entering the respiratory tract by:",
    "options": [
      "(a) Moving downwards to cover the glottis",
      "(b) Pushing the bolus into the oesophagus",
      "(c) Contracting muscles in the pharynx",
      "(d) Relaxing the soft palate"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 13,
    "questionText": "The oesophagus is approximately how long in an adult human?",
    "options": [
      "(a) 15 cm",
      "(b) 20 cm",
      "(c) 25 cm",
      "(d) 30 cm"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "The rhythmic sequence of waves of contraction in the smooth muscles of the oesophagus and small intestine is called:",
    "options": [
      "(a) Segmentation",
      "(b) Mastication",
      "(c) Peristalsis",
      "(d) Deglutition"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 15,
    "questionText": "What is the primary function of segmentation movements in the small intestine?",
    "options": [
      "(a) Propelling food rapidly towards the anus",
      "(b) Mixing food with digestive secretions and increasing absorption efficiency",
      "(c) Preventing backflow of food to the oesophagus",
      "(d) Initiating the swallowing reflex"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The stomach is an elastic muscular bag (J-shaped) situated on the left side, beneath the diaphragm, connecting the oesophagus to the:",
    "options": [
      "(a) Large intestine",
      "(b) Duodenum",
      "(c) Jejunum",
      "(d) Rectum"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "The stomach has three portions. Which portion is immediately after the oesophagus?",
    "options": [
      "(a) Fundus portion",
      "(b) Pyloric portion",
      "(c) Cardiac portion",
      "(d) Greater curvature"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "The innermost layer of the stomach wall, responsible for producing digestive enzymes and HCl, is the:",
    "options": [
      "(a) Serosa",
      "(b) Muscularis externa",
      "(c) Mucosa",
      "(d) Submucosa"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 19,
    "questionText": "What protects the stomach wall from being digested by the acidic gastric juice and enzymes?",
    "options": [
      "(a) Presence of food",
      "(b) High pH environment",
      "(c) Thick secretion of mucus",
      "(d) Rapid emptying of contents"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The chief cells in the stomach secrete:",
    "options": [
      "(a) Hydrochloric acid",
      "(b) Pepsinogen",
      "(c) Mucus",
      "(d) Gastrin"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "Parietal cells in the stomach secrete:",
    "options": [
      "(a) Pepsinogen",
      "(b) Mucus",
      "(c) Hydrochloric acid",
      "(d) Gastrin"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "Pepsinogen is activated into pepsin by:",
    "options": [
      "(a) Oesophagus",
      "(b) Duodenum",
      "(c) Large intestine",
      "(d) Pancreas"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "The longest part of the alimentary canal in humans is the:",
    "options": [
      "(a) Oesophagus",
      "(b) Stomach",
      "(c) Small intestine",
      "(d) Large intestine"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The small intestine is divided into three parts: duodenum, jejunum, and:",
    "options": [
      "(a) Cecum",
      "(b) Maltose",
      "(c) Fructose",
      "(d) Galactose"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "Trypsinogen is an inactive enzyme secreted by the pancreas. It is activated into trypsin by:",
    "options": [
      "(a) Enterokinase",
      "(b) Pepsin",
      "(c) Lipase",
      "(d) Amylase"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 26,
    "questionText": "Which pancreatic enzyme digests lipids (fats) into glycerol and fatty acids?",
    "options": [
      "(a) Amylase",
      "(b) Trypsin",
      "(c) Lipase",
      "(d) Nuclease"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Pancreatic nuclease digests DNA and RNA into:",
    "options": [
      "(a) Amino acids",
      "(b) Monosaccharides",
      "(c) Nucleotides",
      "(d) Fatty acids"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Bile salts, secreted by the liver, aid in the digestion of fats by:",
    "options": [
      "(a) Breaking them into glycerol and fatty acids",
      "(b) Emulsifying them into smaller droplets",
      "(c) Converting them into carbohydrates",
      "(d) Activating pancreatic lipase"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "The internal surface of the small intestine has numerous finger-like projections called:",
    "options": [
      "(a) Microvilli",
      "(b) Villi",
      "(c) Rugae",
      "(d) Plicae"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Each villus is richly supplied with:",
    "options": [
      "(a) Lymph capillaries and nerve endings",
      "(b) Blood capillaries and a vessel of lymphatic system (lacteal)",
      "(c) Arterioles and venules only",
      "(d) Secretory glands"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 31,
    "questionText": "The epithelial cells of villi have numerous microscopic projections on their surface called:",
    "options": [
      "(a) Macro villi",
      "(b) Microvilli",
      "(c) Rugae",
      "(d) Lacteals"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Amino acids and simple sugars are absorbed by diffusion or active transport into the:",
    "options": [
      "(a) Lacteals",
      "(b) Blood capillaries of villi",
      "(c) Lymphatic vessels",
      "(d) Hepatic portal vein"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "Fatty acids and glycerol are absorbed into the epithelial cells of villi and then combine to form triglycerides. These triglycerides are coated with proteins to form:",
    "options": [
      "(a) Micelles",
      "(b) Chylomicrons",
      "(c) Lipoproteins",
      "(d) Emulsified fats"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "The large intestine consists of three parts: cecum, colon, and:",
    "options": [
      "(a) Duodenum",
      "(b) Jejunum",
      "(c) Ileum",
      "(d) Rectum"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 35,
    "questionText": "The appendix is a blind sac that projects from the:",
    "options": [
      "(a) Rectum",
      "(b) Colon",
      "(c) Cecum",
      "(d) Ileum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 36,
    "questionText": "Next to the cecum, the ascending, transverse, and descending segments belong to the:",
    "options": [
      "(a) Rectum",
      "(b) Appendix",
      "(c) Colon",
      "(d) Ileum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The primary function of the large intestine is to absorb what remaining substances?",
    "options": [
      "(a) Proteins and fats",
      "(b) Vitamins and minerals",
      "(c) Water and various salts",
      "(d) Simple sugars"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Feces consist of a large number of bacteria, indigestible plant fibers (e.g., cellulose), and:",
    "options": [
      "(a) Absorbed nutrients",
      "(b) Mucosal cells",
      "(c) Digestive enzymes",
      "(d) Fatty acids"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The involuntary reflex for egestion in adults represents two stages of neurological and muscular development. Which of the following is characteristic of adults?",
    "options": [
      "(a) Spinal cord reflex",
      "(b) Cerebral cortex mediates conscious regulation of the external anal sphincter",
      "(c) Automatic relaxation of internal anal sphincter",
      "(d) Early childhood development"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "The liver produces bile, which is essential for fat digestion. Bile is stored in the:",
    "options": [
      "(a) Pancreas",
      "(b) Stomach",
      "(c) Gallbladder",
      "(d) Duodenum"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 41,
    "questionText": "Which of the following vitamins is necessary for the coagulation of blood and is produced by bacteria in the large intestine?",
    "options": [
      "(a) Vitamin A",
      "(b) Vitamin B12",
      "(c) Vitamin C",
      "(d) Vitamin K"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 42,
    "questionText": "The pancreas is a large gland situated just ventral to the stomach. It secretes pancreatic juice into the duodenum via the:",
    "options": [
      "(a) Hepatic duct",
      "(b) Bile duct",
      "(c) Pancreatic duct",
      "(d) Cystic duct"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 43,
    "questionText": "Secretin and cholecystokinin (CCK) are hormones that regulate pancreatic and gallbladder secretions. Where are these hormones released from?",
    "options": [
      "(a) Stomach",
      "(b) Liver",
      "(c) Duodenum",
      "(d) Pancreas"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "The liver performs many important functions including storing nutrients and regulating metabolism. It stores excess nutrients from the food and releases them when the body needs:",
    "options": [
      "(a) Glucose and other building materials",
      "(b) Water and salts",
      "(c) Enzymes and hormones",
      "(d) Waste products"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 45,
    "questionText": "The liver plays a central role in metabolism. For example, it converts excess glucose into glycogen and basic when needed. This is an example of:",
    "options": [
      "(a) Glycogenolysis",
      "(b) Gluconeogenesis",
      "(c) Glycogenesis",
      "(d) Glycolysis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "The liver breaks down and removes harmful ammonia by turning it into urea, which is excreted in urine. This is an example of:",
    "options": [
      "(a) Detoxification",
      "(b) Nutrient storage",
      "(c) Bile production",
      "(d) Hormone regulation"
    ],
    "correctAnswer": "a"
  }
],
    "Human Respiratory System": [
  {
    "id": 1,
    "questionText": "Which statement best defines external respiration?",
    "options": [
      "(a) The process of cellular energy production",
      "(b) The uptake of oxygen from the environment and the disposal of carbon dioxide into the environment",
      "(c) The transport of oxygen and carbon dioxide by blood",
      "(d) The exchange of gases between blood and body cells"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "The primary function of the respiratory system is to constitute the:",
    "options": [
      "(a) Circulatory system",
      "(b) Respiratory surface for gaseous exchange",
      "(c) Digestive system",
      "(d) Muscular system"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The respiratory surface in humans has several properties. Which is NOT one of them?",
    "options": [
      "(a) It is moist and permeable",
      "(b) It is thin",
      "(c) It has a large surface area",
      "(d) It has limited blood supply"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 4,
    "questionText": "Air moves in and out of the body through diffusion across the:",
    "options": [
      "(a) Skin surface",
      "(b) Respiratory surface",
      "(c) Digestive tract",
      "(d) Circulatory system"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "The upper respiratory tract includes the nasal cavity, pharynx, and:",
    "options": [
      "(a) Trachea",
      "(b) Bronchi",
      "(c) Larynx",
      "(d) Lungs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "The external openings of the nose, called nostrils, lead to the nasal cavity, which is divided by a:",
    "options": [
      "(a) Pharynx",
      "(b) Larynx",
      "(c) Nasal septum",
      "(d) Trachea"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 7,
    "questionText": "What is the function of the nasal cavity during inspiration?",
    "options": [
      "(a) Only gas exchange occurs",
      "(b) It warms, humidifies, and filters the air",
      "(c) It stores oxygen",
      "(d) It produces vocal sounds"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The pharynx is a tube-like structure that connects the nasal cavity and oral cavity to the:",
    "options": [
      "(a) Trachea and bronchi",
      "(b) Larynx and oesophagus",
      "(c) Lungs and diaphragm",
      "(d) Eustachian tube"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "The larynx is commonly known as the:",
    "options": [
      "(a) Windpipe",
      "(b) Voice box",
      "(c) Food pipe",
      "(d) Air sac"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "The vocal cords are made of:",
    "options": [
      "(a) Bone",
      "(b) Cartilage",
      "(c) Smooth muscles",
      "(d) Bands of smooth muscles"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 11,
    "questionText": "The epiglottis is a cartilaginous flap that extends in front and above the opening of the:",
    "options": [
      "(a) Pharynx",
      "(b) Oesophagus",
      "(c) Larynx (glottis)",
      "(d) Trachea"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The trachea, or windpipe, connects the larynx to the:",
    "options": [
      "(a) Bronchioles",
      "(b) Alveoli",
      "(c) Lungs",
      "(d) Primary bronchi"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 13,
    "questionText": "The trachea is about how wide and long in adults?",
    "options": [
      "(a) 1 inch wide and 4-6 inches long",
      "(b) 0.5 inch wide and 2-3 inches long",
      "(c) 2 inches wide and 8-10 inches long",
      "(d) 1 cm wide and 5 cm long"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 14,
    "questionText": "The C-shaped cartilage rings in the trachea prevent it from:",
    "options": [
      "(a) Collapsing",
      "(b) Expanding too much",
      "(c) Producing sound",
      "(d) Filtering air"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 15,
    "questionText": "The primary bronchi divide into smaller branches known as:",
    "options": [
      "(a) Trachea",
      "(b) Bronchioles",
      "(c) Alveolar ducts",
      "(d) Lungs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The smallest air sacs where gas exchange occurs in the lungs are called:",
    "options": [
      "(a) Bronchi",
      "(b) Bronchioles",
      "(c) Alveoli",
      "(d) Trachea"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 17,
    "questionText": "Each alveolar cluster is surrounded by:",
    "options": [
      "(a) Muscle fibers",
      "(b) Cartilage rings",
      "(c) Blood capillaries",
      "(d) Lymphatic vessels"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "The total surface area of the alveoli for gas exchange in adult humans is approximately:",
    "options": [
      "(a) 10 square meters",
      "(b) 70 square meters",
      "(c) 1 square meter",
      "(d) 500 square cm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "During inhalation, the diaphragm:",
    "options": [
      "(a) Relaxes and moves up",
      "(b) Contracts and moves down",
      "(c) Remains stationary",
      "(d) Expands laterally"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "During exhalation, the intercostal muscles:",
    "options": [
      "(a) Contract to pull the ribs up and out",
      "(b) Relax to allow the ribs to move down and in",
      "(c) Remain contracted",
      "(d) Work with the diaphragm to pull air in"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 21,
    "questionText": "The atmospheric pressure in the lungs during inhalation:",
    "options": [
      "(a) Increases",
      "(b) Decreases",
      "(c) Stays the same",
      "(d) Becomes equal to external pressure"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 22,
    "questionText": "The movement of air out of the lungs is called:",
    "options": [
      "(a) Inspiration",
      "(b) Expiration",
      "(c) Diffusion",
      "(d) Ventilation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "Each breath is initiated by neurons in a respiratory centre located in the:",
    "options": [
      "(a) Spinal cord",
      "(b) Cerebellum",
      "(c) Medulla oblongata",
      "(d) Cerebral cortex"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The partial pressure of oxygen ($$PO_2$$) in alveolar air is approximately:",
    "options": [
      "(a) 40 mm Hg",
      "(b) 70 mm Hg",
      "(c) 105 mm Hg",
      "(d) 160 mm Hg"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 25,
    "questionText": "The partial pressure of oxygen ($$PO_2$$) in deoxygenated blood arriving at the lungs is approximately:",
    "options": [
      "(a) 105 mm Hg",
      "(b) 70 mm Hg",
      "(c) 40 mm Hg",
      "(d) 160 mm Hg"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 26,
    "questionText": "Oxygen transport in blood is primarily carried by:",
    "options": [
      "(a) Plasma",
      "(b) Platelets",
      "(c) Haemoglobin in RBCs",
      "(d) White blood cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 27,
    "questionText": "Approximately how much oxygen is carried by 100 ml of blood?",
    "options": [
      "(a) 5 ml $$O_2$$",
      "(b) 10 ml $$O_2$$",
      "(c) 20 ml $$O_2$$",
      "(d) 15 ml $$O_2$$"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Which statement accurately describes the color of oxygenated and deoxygenated haemoglobin?",
    "options": [
      "(a) Oxyhaemoglobin is bright red; deoxyhaemoglobin is dark red.",
      "(b) Oxyhaemoglobin is dark red; deoxyhaemoglobin is bright red.",
      "(c) Both are bright red.",
      "(d) Both are dark red."
    ],
    "correctAnswer": "a"
  },
  {
    "id": 29,
    "questionText": "The binding of oxygen to haemoglobin is regulated by factors including pH. A lower pH (more acidic) causes haemoglobin's affinity for oxygen to:",
    "options": [
      "(a) Increase",
      "(b) Decrease",
      "(c) Remain unchanged",
      "(d) Become irrelevant"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "Carbon dioxide is transported in the blood in three main forms. Which is the most common form?",
    "options": [
      "(a) As dissolved $$CO_2$$ in plasma",
      "(b) As carbamino-haemoglobin",
      "(c) As bicarbonate ions",
      "(d) As carbonic acid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Approximately 72% of carbon dioxide enters the RBCs and combines with water to form carbonic acid ($$H_2CO_3$$) in the presence of the enzyme:",
    "options": [
      "(a) Carbonic anhydrase",
      "(b) Haemoglobin",
      "(c) Carboxypeptidase",
      "(d) Amylase"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 32,
    "questionText": "The formation of carbonic acid in RBCs is important because it serves as the major buffer of the:",
    "options": [
      "(a) Intracellular fluid",
      "(b) Cerebrospinal fluid",
      "(c) Blood plasma",
      "(d) Lymph fluid"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 33,
    "questionText": "The chloride shift is a mechanism where bicarbonate ions ($$HCO_3^-$$) move out of RBCs into the plasma in exchange for:",
    "options": [
      "(a) Sodium ions ($$Na^+$$)",
      "(b) Potassium ions ($$K^+$$)",
      "(c) Chloride ions ($$Cl^-$$)",
      "(d) Hydrogen ions ($$H^+$$)"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "About 20% of $$CO_2$$ is carried as carbamino-haemoglobin. It forms by binding to the:",
    "options": [
      "(a) Iron atom of haemoglobin",
      "(b) Globin protein portion of haemoglobin",
      "(c) Heme group",
      "(d) Oxygen binding sites"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "The lower $$PCO_2$$ of the air inside the alveoli causes the conversion of $$H_2CO_3$$ into $$H_2O$$ and $$CO_2$$. The $$CO_2$$ then diffuses out of the blood into the alveoli, so that it can leave the body in the next:",
    "options": [
      "(a) Inhalation",
      "(b) Exhalation",
      "(c) Absorption",
      "(d) Circulation"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Haemoglobin is a protein present in RBCs. It is composed of four globin (globular) polypeptide chains (two $$\u03b1$$ and two $$\u03b2$$) and:",
    "options": [
      "(a) A single heme group",
      "(b) Two heme groups",
      "(c) Three heme groups",
      "(d) Four heme groups"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 37,
    "questionText": "Myoglobin is an oxygen-binding protein found in:",
    "options": [
      "(a) Blood plasma",
      "(b) White blood cells",
      "(c) Skeletal and cardiac muscle cells of vertebrates",
      "(d) Lungs"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Myoglobin has a single polypeptide chain, unlike haemoglobin. It has a greater affinity for oxygen than haemoglobin, especially at:",
    "options": [
      "(a) High partial pressure of oxygen",
      "(b) Low partial pressure of oxygen",
      "(c) Neutral pH",
      "(d) High temperatures"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "Upper Respiratory Tract Infections (URTIs) affect which parts of the respiratory system?",
    "options": [
      "(a) Lungs and bronchi",
      "(b) Nose, throat, sinuses, and larynx",
      "(c) Trachea and alveoli",
      "(d) Diaphragm and intercostal muscles"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "Sinusitis is the inflammation of the lining of the sinuses, often caused by:",
    "options": [
      "(a) Bacterial or fungal infections",
      "(b) Allergies only",
      "(c) Viral infections only",
      "(d) Environmental pollutants"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 41,
    "questionText": "Otitis media is an inflammation of the middle ear. It commonly occurs due to:",
    "options": [
      "(a) Loud noises",
      "(b) Blockage of the Eustachian tube",
      "(c) Bacterial infection migrating from the middle ear",
      "(d) Viral infections"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "Pneumonia is a form of acute respiratory infection that primarily affects the:",
    "options": [
      "(a) Upper respiratory tract",
      "(b) Alveoli",
      "(c) Bronchi",
      "(d) Larynx"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Tuberculosis (TB) is a chronic infection caused by the bacterium:",
    "options": [
      "(a) Staphylococcus aureus",
      "(b) Streptococcus pneumoniae",
      "(c) Mycobacterium tuberculosis",
      "(d) Escherichia coli"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "Which type of pulmonary tuberculosis affects the small cavities or holes in the lung tissue, which can make it difficult for the lungs to function properly?",
    "options": [
      "(a) Bronchial tuberculosis",
      "(b) Miliary tuberculosis",
      "(c) Primary tuberculosis",
      "(d) Cavernous tuberculosis"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 45,
    "questionText": "Chronic Obstructive Pulmonary Disease (COPD) is a chronic inflammatory disease of the lungs that is primarily caused by:",
    "options": [
      "(a) Genetic factors",
      "(b) Bacterial infections",
      "(c) Tobacco smoking and long-term exposure to harmful pollutants",
      "(d) Viral infections"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 46,
    "questionText": "Emphysema is a type of COPD in which the inner walls of the alveoli are:",
    "options": [
      "(a) Inflamed",
      "(b) Thickened",
      "(c) Damaged, causing them to eventually rupture",
      "(d) Covered in mucus"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "What is a consequence of emphysema?",
    "options": [
      "(a) Increased surface area for gas exchange",
      "(b) Easier breathing",
      "(c) Reduced gas exchange and shortness of breath",
      "(d) Enhanced oxygen transport"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 48,
    "questionText": "Symptoms of emphysema include shortness of breath, coughing, wheezing, fatigue, and:",
    "options": [
      "(a) Chest tightness",
      "(b) Increased appetite",
      "(c) Skin rash",
      "(d) Joint pain"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 49,
    "questionText": "Treatment for emphysema may include bronchodilators, inhaled corticosteroids, oxygen therapy, and:",
    "options": [
      "(a) Antibiotics",
      "(b) Antivirals",
      "(c) Pulmonary rehabilitation",
      "(d) Surgery for lung removal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 50,
    "questionText": "What is the primary difference between haemoglobin and myoglobin as shown in Table 10.1?",
    "options": [
      "(a) Myoglobin has lower affinity for oxygen",
      "(b) Haemoglobin consists of four polypeptide chains, while myoglobin has one",
      "(c) Myoglobin transports oxygen, haemoglobin stores it",
      "(d) Haemoglobin is found in skeletal and cardiac muscles, myoglobin in RBCs"
    ],
    "correctAnswer": "b"
  }
],
    "Human Circulatory System": [
  {
    "id": 1,
    "questionText": "The human circulatory system is responsible for the transport of different materials in the body, including:",
    "options": [
      "(a) Digestive enzymes and waste",
      "(b) Blood, oxygen, nutrients, hormones, and waste",
      "(c) Only oxygen and carbon dioxide",
      "(d) Lymphatic fluid only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "The circulatory system in humans is classified as:",
    "options": [
      "(a) An open circulatory system",
      "(b) A closed circulatory system",
      "(c) A lymphatic system only",
      "(d) An incomplete circulatory system"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "Blood is composed of two main components: plasma and:",
    "options": [
      "(a) Hormones",
      "(b) Cellular bodies (white blood cells, red blood cells, platelets)",
      "(c) Nutrients",
      "(d) Waste products"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 4,
    "questionText": "How much of the total blood volume is typically made up of cells?",
    "options": [
      "(a) About 55%",
      "(b) About 45%",
      "(c) About 70%",
      "(d) About 30%"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 5,
    "questionText": "The human heart is a hard-working pump that moves blood through the body. It is situated in the middle of the chest cavity, between the lungs, and its back surface is near the:",
    "options": [
      "(a) Sternum",
      "(b) Vertebral column",
      "(c) Ribs",
      "(d) Diaphragm"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 6,
    "questionText": "The heart is enclosed in a sac called the:",
    "options": [
      "(a) Epicardium",
      "(b) Myocardium",
      "(c) Endocardium",
      "(d) Pericardium"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 7,
    "questionText": "The inner layer of the pericardium is called the serous pericardium, which is made of how many sub-layers?",
    "options": [
      "(a) One",
      "(b) Two",
      "(c) Three",
      "(d) Four"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 8,
    "questionText": "The space between the parietal and visceral pericardium is called the pericardial cavity, and it contains up to 50 ml of pericardial fluid. This fluid functions to:",
    "options": [
      "(a) Promote blood clotting",
      "(b) Lubricate the heart and protect it from infections",
      "(c) Supply oxygen to the heart muscle",
      "(d) Regulate heart rate"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "The wall of the heart is composed of three layers. The innermost layer is the:",
    "options": [
      "(a) Epicardium",
      "(b) Myocardium",
      "(c) Endocardium",
      "(d) Pericardium"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 10,
    "questionText": "The heart has four chambers: two upper thin-walled atria and two lower thick-walled:",
    "options": [
      "(a) Ventricles",
      "(b) Septum",
      "(c) Valves",
      "(d) Pericardium"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "The right atrium and right ventricle are separated from each other by the:",
    "options": [
      "(a) Interventricular septum",
      "(b) Interatrial septum",
      "(c) Atrioventricular septum",
      "(d) Mitral valve"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 12,
    "questionText": "The valve between the right atrium and the right ventricle is the:",
    "options": [
      "(a) Bicuspid valve",
      "(b) Tricuspid valve",
      "(c) Aortic valve",
      "(d) Pulmonary valve"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 13,
    "questionText": "The valve between the left atrium and the left ventricle is the:",
    "options": [
      "(a) Tricuspid valve",
      "(b) Pulmonary valve",
      "(c) Bicuspid (mitral) valve",
      "(d) Aortic valve"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Oxygenated blood (right side) and deoxygenated blood (left side) is maintained in the heart by the presence of:",
    "options": [
      "(a) Valves",
      "(b) Septum",
      "(c) Pericardium",
      "(d) Chordae tendineae"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 15,
    "questionText": "The right atrium receives deoxygenated blood from the body via:",
    "options": [
      "(a) Pulmonary veins",
      "(b) Superior and inferior vena cava",
      "(c) Aorta",
      "(d) Coronary arteries"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The left atrium receives oxygenated blood from the lungs via the:",
    "options": [
      "(a) Pulmonary arteries",
      "(b) Superior vena cava",
      "(c) Inferior vena cava",
      "(d) Pulmonary veins"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 17,
    "questionText": "During atrial systole (contraction), blood accumulates in atria, their pressure rises, and blood passes into the:",
    "options": [
      "(a) Ventricles",
      "(b) Aorta",
      "(c) Pulmonary artery",
      "(d) Vena cava"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 18,
    "questionText": "A complete heartbeat (cardiac cycle) typically lasts about:",
    "options": [
      "(a) 0.1 second",
      "(b) 0.3 second",
      "(c) 0.4 second",
      "(d) 0.8 second"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 19,
    "questionText": "The first heart sound, 'Lubb,' is caused by the:",
    "options": [
      "(a) Closing of semilunar valves",
      "(b) Closing of tricuspid and bicuspid valves",
      "(c) Opening of aortic valve",
      "(d) Contraction of atria"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 20,
    "questionText": "The second heart sound, 'Dubb,' is caused by the:",
    "options": [
      "(a) Closing of semilunar valves",
      "(b) Closing of tricuspid and bicuspid valves",
      "(c) Opening of atrioventricular valves",
      "(d) Contraction of ventricles"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 21,
    "questionText": "The pumping of the heart is initiated by the:",
    "options": [
      "(a) Atrioventricular (AV) node",
      "(b) Purkinje fibers",
      "(c) Sinoatrial (SA) node",
      "(d) Bundle of His"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The SA node is embedded in the upper wall of the right atrium and is often called the heart's:",
    "options": [
      "(a) Control center",
      "(b) Pacemaker",
      "(c) Pump",
      "(d) Regulator"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "From the SA node, electrical impulses travel to the AV node, which is located at the lower portion of the:",
    "options": [
      "(a) Left atrium",
      "(b) Interatrial septum",
      "(c) Interventricular septum",
      "(d) Right ventricle"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 24,
    "questionText": "The AV node transmits impulses to the ventricles via specialized fibers called:",
    "options": [
      "(a) SA node fibers",
      "(b) Purkinje fibers and Bundle of His",
      "(c) Neural fibers",
      "(d) Cardiac muscle fibers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 25,
    "questionText": "The heart of an average adult beats about 70 times per minute, pumping about 80 liters of blood per minute, which amounts to approximately:",
    "options": [
      "(a) 36,000 km of blood vessels every day",
      "(b) 36,000 liters of blood every day",
      "(c) 80,000 ml of blood every hour",
      "(d) 7000 liters of blood every hour"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "Electrocardiogram (ECG) is a recording of the electrical potentials generated by the currents of cardiac impulses. What does the P wave in an ECG represent?",
    "options": [
      "(a) Beginning of ventricular depolarization",
      "(b) Beginning of atrial depolarization",
      "(c) Completion of ventricular repolarization",
      "(d) Atrial repolarization"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "The QRS complex in an ECG shows the beginning of:",
    "options": [
      "(a) Atrial repolarization",
      "(b) Atrial depolarization",
      "(c) Ventricular repolarization",
      "(d) Ventricular depolarization"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 28,
    "questionText": "The T wave in an ECG represents the beginning of:",
    "options": [
      "(a) Atrial depolarization",
      "(b) Ventricular depolarization",
      "(c) Repolarization of ventricles",
      "(d) Atrial repolarization"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 29,
    "questionText": "Arteries are blood vessels that carry:",
    "options": [
      "(a) Deoxygenated blood away from the heart",
      "(b) Oxygenated blood away from the heart",
      "(c) Oxygenated blood towards the heart",
      "(d) Deoxygenated blood towards the heart"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 30,
    "questionText": "The central core of an artery is lumen. The walls of arteries are made up of three layers. The innermost layer is:",
    "options": [
      "(a) Tunica externa",
      "(b) Tunica media",
      "(c) Tunica intima",
      "(d) Tunica adventitia"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "The tunica media of arteries is composed of thick muscular tissue and elastic fibers. This layer allows arteries to:",
    "options": [
      "(a) Absorb nutrients",
      "(b) Maintain high blood pressure",
      "(c) Facilitate gas exchange",
      "(d) Prevent backflow of blood"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 32,
    "questionText": "Capillaries are the smallest blood vessels, forming a network between arterioles and venules. Their walls are composed of:",
    "options": [
      "(a) Three layers of endothelial cells",
      "(b) A single layer of endothelial cells",
      "(c) Muscular and elastic fibers",
      "(d) Collagen and reticular fibers"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 33,
    "questionText": "The primary function of capillaries is to:",
    "options": [
      "(a) Maintain blood pressure",
      "(b) Transport blood rapidly",
      "(c) Exchange nutrients, hormones, gases, and waste products between blood and tissues",
      "(d) Prevent blood clotting"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 34,
    "questionText": "Veins are blood vessels that carry:",
    "options": [
      "(a) Oxygenated blood away from the heart",
      "(b) Deoxygenated blood towards the heart",
      "(c) Oxygenated blood towards the heart",
      "(d) Deoxygenated blood away from the heart"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "The walls of veins are thinner and less elastic than arteries because:",
    "options": [
      "(a) They carry oxygenated blood",
      "(b) Blood pressure is lower in veins",
      "(c) They are located deeper in the body",
      "(d) They contain valves"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 36,
    "questionText": "Semilunar valves are present in veins to prevent:",
    "options": [
      "(a) Forward flow of blood",
      "(b) Blood clotting",
      "(c) Backflow of blood",
      "(d) High blood pressure"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "The regulation of blood flow in capillaries is controlled by constriction or dilation of the:",
    "options": [
      "(a) Arteries",
      "(b) Capillaries themselves",
      "(c) Pre-capillary sphincters",
      "(d) Veins"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Vasoconstriction refers to the process where the circular muscles of arterioles:",
    "options": [
      "(a) Relax, increasing blood flow",
      "(b) Contract, reducing blood flow",
      "(c) Remain unchanged",
      "(d) Increase oxygen supply"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 39,
    "questionText": "The systemic circulation supplies oxygenated blood to all the cells, tissues, and organs of the body (except lungs) and returns deoxygenated blood to the:",
    "options": [
      "(a) Right atrium",
      "(b) Left atrium",
      "(c) Right ventricle",
      "(d) Left ventricle"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 40,
    "questionText": "The pulmonary circulation carries deoxygenated blood to the lungs and returns oxygenated blood to the:",
    "options": [
      "(a) Right atrium",
      "(b) Left atrium",
      "(c) Right ventricle",
      "(d) Left ventricle"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "The heart walls are supplied with blood through a small portion of the systemic circulation known as the:",
    "options": [
      "(a) Pulmonary circulation",
      "(b) Hepatic portal circulation",
      "(c) Coronary circulation",
      "(d) Renal circulation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 42,
    "questionText": "A portal system is a circulation in which veins end in capillaries. The hepatic portal system involves blood collected from the spleen and alimentary canal going to the:",
    "options": [
      "(a) Heart directly",
      "(b) Liver before going to the heart",
      "(c) Kidneys",
      "(d) Lungs"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "Systolic pressure is the maximum pressure during ventricular systole (contraction) and is normally around:",
    "options": [
      "(a) 80 mm Hg",
      "(b) 120 mm Hg",
      "(c) 140 mm Hg",
      "(d) 60 mm Hg"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 44,
    "questionText": "Diastolic pressure is the lowest pressure when ventricles relax and is normally around:",
    "options": [
      "(a) 120 mm Hg",
      "(b) 100 mm Hg",
      "(c) 80 mm Hg",
      "(d) 60 mm Hg"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 45,
    "questionText": "Pressure receptors known as baroreceptors are present in the carotid arteries and aortic arch. They respond to changes in blood pressure by sending information to the:",
    "options": [
      "(a) Spinal cord",
      "(b) Brain",
      "(c) Kidneys",
      "(d) Adrenal glands"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Certain hormones regulate the volume of blood by affecting the reabsorption of water and salt in the kidneys. One such hormone, Antidiuretic Hormone (ADH), stimulates kidneys to retain more water in blood, thereby:",
    "options": [
      "(a) Decreasing blood pressure",
      "(b) Increasing blood pressure",
      "(c) Having no effect on blood pressure",
      "(d) Promoting diuresis"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 47,
    "questionText": "Atherosclerosis is a cardiovascular disease where deposition within arteries leads to:",
    "options": [
      "(a) Increased elasticity of arterial walls",
      "(b) Narrowing of arteries and increased risk of clot formation",
      "(c) Improved blood flow",
      "(d) Lower blood pressure"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "Angiography is a diagnostic X-ray procedure used to visualize:",
    "options": [
      "(a) Heart chambers",
      "(b) Blood vessels, especially coronary arteries",
      "(c) Lymph nodes",
      "(d) Lung tissue"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "Coronary bypass surgery is a procedure used to cure:",
    "options": [
      "(a) Hypertension",
      "(b) Coronary artery disease",
      "(c) Angina pectoris only",
      "(d) Atherosclerosis only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 50,
    "questionText": "Lymphatic system begins with small vessels called lymph capillaries, which have blind endings in the:",
    "options": [
      "(a) Blood capillaries",
      "(b) Extracellular fluid (interstitial fluid)",
      "(c) Veins",
      "(d) Arteries"
    ],
    "correctAnswer": "b"
  }
],
    "Human Skeletal and Muscular Systems": [
  {
    "id": 1,
    "questionText": "The human skeletal and muscular systems provide the necessary support framework for the body and are crucial for:",
    "options": [
      "(a) Digestion and absorption",
      "(b) Movement and locomotion",
      "(c) Respiration and circulation",
      "(d) Hormone production"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 2,
    "questionText": "Bones, cartilage, and other connective tissues make an internal framework called the skeleton, which provides:",
    "options": [
      "(a) Flexibility only",
      "(b) Structural support, protects vital organs, and produces movement",
      "(c) Blood cell production only",
      "(d) Mineral storage only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 3,
    "questionText": "The surface of a bone is covered by a tough membrane called:",
    "options": [
      "(a) Endosteum",
      "(b) Marrow",
      "(c) Periosteum",
      "(d) Lamella"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 4,
    "questionText": "The basic structural units of compact bone are called:",
    "options": [
      "(a) Spongy bone",
      "(b) Trabeculae",
      "(c) Haversian systems (osteons)",
      "(d) Lacunae"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 5,
    "questionText": "Lacunae in bone tissue are small spaces where mature bone cells called _________ are located.",
    "options": [
      "(a) Osteoblasts",
      "(b) Osteoclasts",
      "(c) Osteocytes",
      "(d) Osteogenic cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 6,
    "questionText": "Yellow bone marrow primarily fills the shafts of long bones and contains:",
    "options": [
      "(a) Red blood cells",
      "(b) Fat cells",
      "(c) White blood cells",
      "(d) Platelets"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 7,
    "questionText": "Red bone marrow is found in spongy bone and is responsible for producing:",
    "options": [
      "(a) Fat cells",
      "(b) White blood cells only",
      "(c) Red blood cells, white blood cells, and platelets",
      "(d) Only red blood cells"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 8,
    "questionText": "Osteoblasts are bone-forming cells that:",
    "options": [
      "(a) Break down bone tissue",
      "(b) Synthesize and secrete unmineralized ground substance",
      "(c) Become osteocytes",
      "(d) Resorb bone tissue"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 9,
    "questionText": "Osteoclasts are bone-resorbing cells that develop from macrophages and are involved in:",
    "options": [
      "(a) Bone formation",
      "(b) Calcium release and phosphate in blood",
      "(c) Protein synthesis",
      "(d) Hormone secretion"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 10,
    "questionText": "The process by which bones develop is called:",
    "options": [
      "(a) Osteogenesis",
      "(b) Chondrogenesis",
      "(c) Myogenesis",
      "(d) Hematopoiesis"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 11,
    "questionText": "During bone development, primary ossification begins in the center of the cartilage model, known as the:",
    "options": [
      "(a) Epiphysis",
      "(b) Diaphysis",
      "(c) Perichondrium",
      "(d) Articular cartilage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 12,
    "questionText": "Hyaline cartilage is the most common type and is found in the:",
    "options": [
      "(a) Ear lobes and nose",
      "(b) Intervertebral discs",
      "(c) Trachea, bronchi, and articular surfaces of bones in joints",
      "(d) Pubic symphysis"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 13,
    "questionText": "Fibrocartilage is found where strong support and elasticity are needed, such as in the:",
    "options": [
      "(a) Trachea",
      "(b) Articular surfaces of bones",
      "(c) Intervertebral discs and pubic symphysis",
      "(d) External ear"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 14,
    "questionText": "Elastic cartilage provides flexibility and is found in the:",
    "options": [
      "(a) Trachea",
      "(b) Intervertebral discs",
      "(c) Articular cartilages",
      "(d) External ear and epiglottis"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 15,
    "questionText": "The human skeleton consists of how many bones?",
    "options": [
      "(a) 106",
      "(b) 206",
      "(c) 306",
      "(d) 406"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 16,
    "questionText": "The axial skeleton forms the axis of the body and includes the:",
    "options": [
      "(a) Pectoral girdle and pelvic girdle",
      "(b) Skull, ribs, spine, and sternum",
      "(c) Limbs",
      "(d) Mandible and maxilla only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 17,
    "questionText": "How many bones form the cranium (brain box) in the skull?",
    "options": [
      "(a) 2",
      "(b) 5",
      "(c) 8",
      "(d) 14"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 18,
    "questionText": "The vertebral column consists of how many vertebrae?",
    "options": [
      "(a) 24",
      "(b) 33",
      "(c) 12",
      "(d) 7"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 19,
    "questionText": "The first two cervical vertebrae are called the:",
    "options": [
      "(a) Sacral and coccygeal",
      "(b) Lumbar and thoracic",
      "(c) Atlas and the second one is called axis",
      "(d) Frontal and parietal"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 20,
    "questionText": "The chest bone is also known as the:",
    "options": [
      "(a) Sternum",
      "(b) Scapula",
      "(c) Clavicle",
      "(d) Humerus"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 21,
    "questionText": "How many pairs of ribs are typically present in the chest cage?",
    "options": [
      "(a) 7",
      "(b) 10",
      "(c) 12",
      "(d) 24"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 22,
    "questionText": "The pectoral girdle consists of two pairs of bones: clavicles (collar bones) and:",
    "options": [
      "(a) Pelvic bones",
      "(b) Scapulae (shoulder blades)",
      "(c) Humerus",
      "(d) Sternum"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 23,
    "questionText": "The arm (forelimb) consists of a long bone known as the:",
    "options": [
      "(a) Ulna",
      "(b) Radius",
      "(c) Humerus",
      "(d) Carpals"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 24,
    "questionText": "The pelvic girdle is made up of two hip bones. Each hip bone contains three bones: ileum, ischium and:",
    "options": [
      "(a) Pubis",
      "(b) Femur",
      "(c) Tibia",
      "(d) Fibula"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 25,
    "questionText": "The longest and strongest bone in the body is the:",
    "options": [
      "(a) Tibia",
      "(b) Femur",
      "(c) Fibula",
      "(d) Humerus"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 26,
    "questionText": "Fibrous joints are immovable joints where bones are connected by:",
    "options": [
      "(a) Cartilage",
      "(b) Dense fibrous connective tissue",
      "(c) Synovial fluid",
      "(d) Ligaments only"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 27,
    "questionText": "Sutures in the skull are examples of which type of joint?",
    "options": [
      "(a) Cartilaginous joints",
      "(b) Synovial joints",
      "(c) Fibrous joints",
      "(d) Pivot joints"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 28,
    "questionText": "Cartilaginous joints allow some limited movement and are connected by:",
    "options": [
      "(a) Fibrous tissue",
      "(b) Hyaline cartilage or fibrocartilage",
      "(c) Synovial membrane",
      "(d) Ligaments"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 29,
    "questionText": "Intervertebral discs are examples of which type of joint?",
    "options": [
      "(a) Fibrous joints",
      "(b) Synovial joints",
      "(c) Cartilaginous joints",
      "(d) Hinge joints"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 30,
    "questionText": "Synovial joints are the most common type of joint in the human body, characterized by:",
    "options": [
      "(a) Immobility",
      "(b) Limited movement",
      "(c) A smooth, tough, and elastic hyaline cartilage covering articular surfaces, and a synovial cavity",
      "(d) Direct bone-to-bone connection"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 31,
    "questionText": "Ball-and-socket joints allow movement in how many directions?",
    "options": [
      "(a) One",
      "(b) Two",
      "(c) All directions (e.g., shoulder and hip joints)",
      "(d) Limited rotation"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 32,
    "questionText": "Hinge joints allow movement in how many directions (e.g., elbow and knee joints)?",
    "options": [
      "(a) One plane (flexion and extension)",
      "(b) Two planes",
      "(c) All directions",
      "(d) Rotation only"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 33,
    "questionText": "The vertebral column has a distinctive S-shaped curve, which helps to:",
    "options": [
      "(a) Reduce flexibility",
      "(b) Distribute weight evenly and maintain balance",
      "(c) Increase height",
      "(d) Decrease muscle load"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 34,
    "questionText": "Poor posture can cause pain in the neck, shoulders, hips, and knees, leading to:",
    "options": [
      "(a) Bone fractures",
      "(b) Inflammation and potentially arthritis",
      "(c) Muscle cramps",
      "(d) Nerve damage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 35,
    "questionText": "Disc slip (herniated or slipped disc) occurs when the outer layer of the intervertebral disc tears or ruptures, causing the inner gel-like substance to leak out and press against:",
    "options": [
      "(a) Spinal cord or nearby nerves",
      "(b) Vertebrae",
      "(c) Muscles",
      "(d) Ligaments"
    ],
    "correctAnswer": "a"
  },
  {
    "id": 36,
    "questionText": "Spondylosis is a common disease of the vertebral column characterized by:",
    "options": [
      "(a) Acute infection",
      "(b) Chronic inflammation of the spinal cord",
      "(c) Natural degeneration of intervertebral discs",
      "(d) Sudden trauma"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 37,
    "questionText": "Sciatica is compression or irritation of the sciatic nerve. This nerve starts from the lower back and goes down through the:",
    "options": [
      "(a) Arm",
      "(b) Neck",
      "(c) Buttocks into each leg",
      "(d) Chest"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 38,
    "questionText": "Osteoarthritis is a condition characterized by:",
    "options": [
      "(a) Inflammation of the synovial membrane",
      "(b) Autoimmune attack on joints",
      "(c) Gradual breakdown of articular cartilage in joints",
      "(d) Uric acid crystal deposition"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 39,
    "questionText": "Rheumatoid arthritis is an autoimmune disorder that primarily affects the:",
    "options": [
      "(a) Tendons",
      "(b) Synovial membrane of joints",
      "(c) Bones",
      "(d) Cartilage"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 40,
    "questionText": "Gouty arthritis is caused by the deposition of:",
    "options": [
      "(a) Calcium crystals",
      "(b) Uric acid crystals in joints",
      "(c) Bacteria",
      "(d) Autoimmune antibodies"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 41,
    "questionText": "Osteoporosis is a condition characterized by:",
    "options": [
      "(a) Increased bone density",
      "(b) Weakened bones more prone to fractures",
      "(c) Excess calcium deposition in bones",
      "(d) Inflammation of joints"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 42,
    "questionText": "A dislocation is when a bone in a joint is forced out of its normal position. The common cause is:",
    "options": [
      "(a) Bacterial infection",
      "(b) Trauma or injury",
      "(c) Autoimmune disorder",
      "(d) Genetic predisposition"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 43,
    "questionText": "A sprain is an injury to a:",
    "options": [
      "(a) Bone",
      "(b) Muscle",
      "(c) Ligament",
      "(d) Tendon"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 44,
    "questionText": "First aid treatment for dislocation and sprain includes immobilizing the affected area and:",
    "options": [
      "(a) Applying heat",
      "(b) Applying ice",
      "(c) Massaging vigorously",
      "(d) Engaging in light exercise"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 45,
    "questionText": "Muscle is defined as the tissue that can contract in a coordinated way to produce movements of body parts or the whole body. The individual cells of muscle are called:",
    "options": [
      "(a) Neurons",
      "(b) Muscle fibres or myofibres",
      "(c) Osteocytes",
      "(d) Chondrocytes"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 46,
    "questionText": "Which type of muscle is responsible for moving parts of the body, such as the limbs and trunk, and is usually consciously controlled?",
    "options": [
      "(a) Smooth muscles",
      "(b) Cardiac muscles",
      "(c) Skeletal muscles",
      "(d) Involuntary muscles"
    ],
    "correctAnswer": "c"
  },
  {
    "id": 47,
    "questionText": "Smooth muscles are found in the walls of internal organs like the stomach and intestines. They are characterized by:",
    "options": [
      "(a) Striations and voluntary control",
      "(b) Spindle-shaped cells, no striations, and involuntary control",
      "(c) Branched cells and intercalated discs",
      "(d) Multinucleated cells"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 48,
    "questionText": "Cardiac muscles are found only in the walls of the heart and are characterized by:",
    "options": [
      "(a) Voluntary control",
      "(b) Irregularly striped appearance and branched cells",
      "(c) Spindle-shaped cells",
      "(d) Single nucleus and no striations"
    ],
    "correctAnswer": "b"
  },
  {
    "id": 49,
    "questionText": "The functional unit of muscle contraction is the:",
    "options": [
      "(a) Myofibril",
      "(b) Sarcolemma",
      "(c) Sarcoplasmic reticulum",
      "(d) Sarcomere"
    ],
    "correctAnswer": "d"
  },
  {
    "id": 50,
    "questionText": "The sliding filament model explains muscle contraction. During contraction, the thin filaments slide deeper into the A-band, causing the H-band and I-band to:",
    "options": [
      "(a) Widen",
      "(b) Lengthen",
      "(c) Narrow",
      "(d) Remain unchanged"
    ],
    "correctAnswer": "c"
  }
]
};
