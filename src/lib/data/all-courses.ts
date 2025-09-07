/**
 * @fileoverview This file centralizes all course and question data for the application.
 * It imports data from individual subject files and exports a structured object
 * that can be easily used by components like the Exam Generator.
 */

import type { MCQ } from '@/lib/types';

// AFNS Imports
import { chapters as afnsBiologyChapters, mcqs as afnsBiologyMCQs } from '@/lib/data/afns/biology';
import { chapters as afnsChemistryChapters, mcqs as afnsChemistryMCQs } from '@/lib/data/afns/chemistry';
import { chapters as afnsPhysicsChapters, mcqs as afnsPhysicsMCQs } from '@/lib/data/afns/physics';
import { chapters as afnsEnglishChapters, mcqs as afnsEnglishMCQs } from '@/lib/data/afns/english';
import { chapters as afnsGeneralKnowledgeChapters, mcqs as afnsGeneralKnowledgeMCQs } from '@/lib/data/afns/general-knowledge';
import { mcqs as afnsPersonalityMCQs } from '@/lib/data/afns/personality';
import { chapters as afnsVerbalChapters, mcqs as afnsVerbalMCQs } from '@/lib/data/afns/verbal-test';
import { chapters as afnsNonVerbalChapters, mcqs as afnsNonVerbalMCQs } from '@/lib/data/afns/non-verbal-test';

// PAF Imports
import { chapters as pafBiologyChapters, mcqs as pafBiologyMCQs } from '@/lib/data/paf/biology';
import { chapters as pafPhysicsChapters, mcqs as pafPhysicsMCQs } from '@/lib/data/paf/physics';
import { chapters as pafEnglishChapters, mcqs as pafEnglishMCQs } from '@/lib/data/paf/english';
import { chapters as pafMathChapters, mcqs as pafMathMCQs } from '@/lib/data/paf/mathematics';

// MCJ Imports
import { chapters as mcjEnglishChapters, mcqs as mcjEnglishMCQs } from '@/lib/data/mcj/english';
import { chapters as mcjMathChapters, mcqs as mcjMathMCQs } from '@/lib/data/mcj/mathematics';
import { chapters as mcjGeneralScienceChapters, mcqs as mcjGeneralScienceMCQs } from '@/lib/data/mcj/general-science';

// MCM Imports
import { chapters as mcmEnglishChapters, mcqs as mcmEnglishMCQs } from '@/lib/data/mcm/english';
import { chapters as mcmMathChapters, mcqs as mcmMathMCQs } from '@/lib/data/mcm/mathematics';
import { chapters as mcmGeneralScienceChapters, mcqs as mcmGeneralScienceMCQs } from '@/lib/data/mcm/general-science';

// Class 6 Imports
import { chapters as class6ComputerChapters, mcqs as class6ComputerMCQs, shortQuestions as class6ComputerShortQuestions, longQuestions as class6ComputerLongQuestions } from '@/lib/data/class-6/computer';
import { chapters as class6EnglishChapters, mcqs as class6EnglishMCQs, shortQuestions as class6EnglishShortQuestions, longQuestions as class6EnglishLongQuestions } from '@/lib/data/class-6/english';
import { chapters as class6GeneralScienceChapters, mcqs as class6GeneralScienceMCQs, shortQuestions as class6GeneralScienceShortQuestions, longQuestions as class6GeneralScienceLongQuestions } from '@/lib/data/class-6/general-science';
import { chapters as class6MathChapters, mcqs as class6MathMCQs, shortQuestions as class6MathShortQuestions, longQuestions as class6MathLongQuestions } from '@/lib/data/class-6/mathematics';
import { chapters as class6UrduChapters, mcqs as class6UrduMCQs, shortQuestions as class6UrduShortQuestions, longQuestions as class6UrduLongQuestions } from '@/lib/data/class-6/urdu';

// Class 7 Imports
import { chapters as class7ComputerChapters, mcqs as class7ComputerMCQs, shortQuestions as class7ComputerShortQuestions, longQuestions as class7ComputerLongQuestions } from '@/lib/data/class-7/computer';
import { chapters as class7EnglishChapters, mcqs as class7EnglishMCQs, shortQuestions as class7EnglishShortQuestions, longQuestions as class7EnglishLongQuestions } from '@/lib/data/class-7/english';
import { chapters as class7GeneralScienceChapters, mcqs as class7GeneralScienceMCQs, shortQuestions as class7GeneralScienceShortQuestions, longQuestions as class7GeneralScienceLongQuestions } from '@/lib/data/class-7/general-science';
import { chapters as class7MathChapters, mcqs as class7MathMCQs, shortQuestions as class7MathShortQuestions, longQuestions as class7MathLongQuestions } from '@/lib/data/class-7/mathematics';
import { chapters as class7UrduChapters, mcqs as class7UrduMCQs, shortQuestions as class7UrduShortQuestions, longQuestions as class7UrduLongQuestions } from '@/lib/data/class-7/urdu';

// Class 8 Imports
import { chapters as class8ComputerChapters, mcqs as class8ComputerMCQs, shortQuestions as class8ComputerShortQuestions, longQuestions as class8ComputerLongQuestions } from '@/lib/data/class-8/computer';
import { chapters as class8EnglishChapters, mcqs as class8EnglishMCQs, shortQuestions as class8EnglishShortQuestions, longQuestions as class8EnglishLongQuestions } from '@/lib/data/class-8/english';
import { chapters as class8GeneralScienceChapters, mcqs as class8GeneralScienceMCQs, shortQuestions as class8GeneralScienceShortQuestions, longQuestions as class8GeneralScienceLongQuestions } from '@/lib/data/class-8/general-science';
import { chapters as class8MathChapters, mcqs as class8MathMCQs, shortQuestions as class8MathShortQuestions, longQuestions as class8MathLongQuestions } from '@/lib/data/class-8/mathematics';
import { chapters as class8UrduChapters, mcqs as class8UrduMCQs, shortQuestions as class8UrduShortQuestions, longQuestions as class8UrduLongQuestions } from '@/lib/data/class-8/urdu';

// Class 9 Imports
import { chapters as class9BiologyChapters, mcqs as class9BiologyMCQs, shortQuestions as class9BiologyShortQuestions, longQuestions as class9BiologyLongQuestions } from '@/lib/data/class-9/biology';
import { chapters as class9ChemistryChapters, mcqs as class9ChemistryMCQs, shortQuestions as class9ChemistryShortQuestions, longQuestions as class9ChemistryLongQuestions } from '@/lib/data/class-9/chemistry';
import { chapters as class9ComputerChapters, mcqs as class9ComputerMCQs, shortQuestions as class9ComputerShortQuestions, longQuestions as class9ComputerLongQuestions } from '@/lib/data/class-9/computer';
import { chapters as class9EnglishChapters, mcqs as class9EnglishMCQs, shortQuestions as class9EnglishShortQuestions, longQuestions as class9EnglishLongQuestions } from '@/lib/data/class-9/english';
import { chapters as class9MathChapters, mcqs as class9MathMCQs, shortQuestions as class9MathShortQuestions, longQuestions as class9MathLongQuestions } from '@/lib/data/class-9/mathematics';
import { chapters as class9PhysicsChapters, mcqs as class9PhysicsMCQs, shortQuestions as class9PhysicsShortQuestions, longQuestions as class9PhysicsLongQuestions } from '@/lib/data/class-9/physics';
import { chapters as class9UrduChapters, mcqs as class9UrduMCQs, shortQuestions as class9UrduShortQuestions, longQuestions as class9UrduLongQuestions } from '@/lib/data/class-9/urdu';

// Class 10 Imports
import { chapters as class10BiologyChapters, mcqs as class10BiologyMCQs, shortQuestions as class10BiologyShortQuestions, longQuestions as class10BiologyLongQuestions } from '@/lib/data/class-10/biology';
import { chapters as class10ChemistryChapters, mcqs as class10ChemistryMCQs, shortQuestions as class10ChemistryShortQuestions, longQuestions as class10ChemistryLongQuestions } from '@/lib/data/class-10/chemistry';
import { chapters as class10ComputerChapters, mcqs as class10ComputerMCQs, shortQuestions as class10ComputerShortQuestions, longQuestions as class10ComputerLongQuestions } from '@/lib/data/class-10/computer';
import { chapters as class10EnglishChapters, mcqs as class10EnglishMCQs, shortQuestions as class10EnglishShortQuestions, longQuestions as class10EnglishLongQuestions } from '@/lib/data/class-10/english';
import { chapters as class10MathChapters, mcqs as class10MathMCQs, shortQuestions as class10MathShortQuestions, longQuestions as class10MathLongQuestions } from '@/lib/data/class-10/mathematics';
import { chapters as class10PhysicsChapters, mcqs as class10PhysicsMCQs, shortQuestions as class10PhysicsShortQuestions, longQuestions as class10PhysicsLongQuestions } from '@/lib/data/class-10/physics';
import { chapters as class10UrduChapters, mcqs as class10UrduMCQs, shortQuestions as class10UrduShortQuestions, longQuestions as class10UrduLongQuestions } from '@/lib/data/class-10/urdu';

// Class 11 Imports
import { chapters as class11BiologyChapters, mcqs as class11BiologyMCQs, shortQuestions as class11BiologyShortQuestions, longQuestions as class11BiologyLongQuestions } from '@/lib/data/class-11/biology';
import { chapters as class11ChemistryChapters, mcqs as class11ChemistryMCQs, shortQuestions as class11ChemistryShortQuestions, longQuestions as class11ChemistryLongQuestions } from '@/lib/data/class-11/chemistry';
import { chapters as class11ComputerChapters, mcqs as class11ComputerMCQs, shortQuestions as class11ComputerShortQuestions, longQuestions as class11ComputerLongQuestions } from '@/lib/data/class-11/computer';
import { chapters as class11EnglishChapters, mcqs as class11EnglishMCQs, shortQuestions as class11EnglishShortQuestions, longQuestions as class11EnglishLongQuestions } from '@/lib/data/class-11/english';
import { chapters as class11MathChapters, mcqs as class11MathMCQs, shortQuestions as class11MathShortQuestions, longQuestions as class11MathLongQuestions } from '@/lib/data/class-11/mathematics';
import { chapters as class11PhysicsChapters, mcqs as class11PhysicsMCQs, shortQuestions as class11PhysicsShortQuestions, longQuestions as class11PhysicsLongQuestions } from '@/lib/data/class-11/physics';

// Class 12 Imports
import { chapters as class12BiologyChapters, mcqs as class12BiologyMCQs, shortQuestions as class12BiologyShortQuestions, longQuestions as class12BiologyLongQuestions } from '@/lib/data/class-12/biology';
import { chapters as class12ChemistryChapters, mcqs as class12ChemistryMCQs, shortQuestions as class12ChemistryShortQuestions, longQuestions as class12ChemistryLongQuestions } from '@/lib/data/class-12/chemistry';
import { chapters as class12ComputerChapters, mcqs as class12ComputerMCQs, shortQuestions as class12ComputerShortQuestions, longQuestions as class12ComputerLongQuestions } from '@/lib/data/class-12/computer';
import { chapters as class12MathChapters, mcqs as class12MathMCQs, shortQuestions as class12MathShortQuestions, longQuestions as class12MathLongQuestions } from '@/lib/data/class-12/mathematics';
import { chapters as class12PhysicsChapters, mcqs as class12PhysicsMCQs, shortQuestions as class12PhysicsShortQuestions, longQuestions as class12PhysicsLongQuestions } from '@/lib/data/class-12/physics';


export type Subject = {
  chapters: string[];
  mcqs: Record<string, MCQ[]>;
  shortQuestions: Record<string, string[]>;
  longQuestions: Record<string, string[]>;
};

export type Course = {
  subjects: Record<string, Subject>;
};

export const courses: Record<string, Course> = {
  "AFNS": {
    subjects: {
      "Biology": { chapters: afnsBiologyChapters, mcqs: afnsBiologyMCQs, shortQuestions: {}, longQuestions: {} },
      "Chemistry": { chapters: afnsChemistryChapters, mcqs: afnsChemistryMCQs, shortQuestions: {}, longQuestions: {} },
      "Physics": { chapters: afnsPhysicsChapters, mcqs: afnsPhysicsMCQs, shortQuestions: {}, longQuestions: {} },
      "English": { chapters: afnsEnglishChapters, mcqs: afnsEnglishMCQs, shortQuestions: {}, longQuestions: {} },
      "General Knowledge": { chapters: afnsGeneralKnowledgeChapters, mcqs: afnsGeneralKnowledgeMCQs, shortQuestions: {}, longQuestions: {} },
      "Personality Test": { chapters: ["Personality Test"], mcqs: { "Personality Test": afnsPersonalityMCQs }, shortQuestions: {}, longQuestions: {} },
      "Verbal Test": { chapters: afnsVerbalChapters, mcqs: afnsVerbalMCQs, shortQuestions: {}, longQuestions: {} },
      "Non-Verbal Test": { chapters: afnsNonVerbalChapters, mcqs: afnsNonVerbalMCQs, shortQuestions: {}, longQuestions: {} },
    }
  },
  "PAF": {
    subjects: {
      "Biology": { chapters: pafBiologyChapters, mcqs: pafBiologyMCQs, shortQuestions: {}, longQuestions: {} },
      "Physics": { chapters: pafPhysicsChapters, mcqs: pafPhysicsMCQs, shortQuestions: {}, longQuestions: {} },
      "English": { chapters: pafEnglishChapters, mcqs: pafEnglishMCQs, shortQuestions: {}, longQuestions: {} },
      "Mathematics": { chapters: pafMathChapters, mcqs: pafMathMCQs, shortQuestions: {}, longQuestions: {} },
    }
  },
  "MCJ": {
    subjects: {
        "English": { chapters: mcjEnglishChapters, mcqs: mcjEnglishMCQs, shortQuestions: {}, longQuestions: {} },
        "Mathematics": { chapters: mcjMathChapters, mcqs: mcjMathMCQs, shortQuestions: {}, longQuestions: {} },
        "General Science": { chapters: mcjGeneralScienceChapters, mcqs: mcjGeneralScienceMCQs, shortQuestions: {}, longQuestions: {} },
    }
  },
  "MCM": {
    subjects: {
        "English": { chapters: mcmEnglishChapters, mcqs: mcmEnglishMCQs, shortQuestions: {}, longQuestions: {} },
        "Mathematics": { chapters: mcmMathChapters, mcqs: mcmMathMCQs, shortQuestions: {}, longQuestions: {} },
        "General Science": { chapters: mcmGeneralScienceChapters, mcqs: mcmGeneralScienceMCQs, shortQuestions: {}, longQuestions: {} },
    }
  },
  "Class 6": {
    subjects: {
      "Computer": { chapters: class6ComputerChapters, mcqs: class6ComputerMCQs, shortQuestions: class6ComputerShortQuestions, longQuestions: class6ComputerLongQuestions },
      "English": { chapters: class6EnglishChapters, mcqs: class6EnglishMCQs, shortQuestions: class6EnglishShortQuestions, longQuestions: class6EnglishLongQuestions },
      "General Science": { chapters: class6GeneralScienceChapters, mcqs: class6GeneralScienceMCQs, shortQuestions: class6GeneralScienceShortQuestions, longQuestions: class6GeneralScienceLongQuestions },
      "Mathematics": { chapters: class6MathChapters, mcqs: class6MathMCQs, shortQuestions: class6MathShortQuestions, longQuestions: class6MathLongQuestions },
      "Urdu": { chapters: class6UrduChapters, mcqs: class6UrduMCQs, shortQuestions: class6UrduShortQuestions, longQuestions: class6UrduLongQuestions },
    }
  },
  "Class 7": {
    subjects: {
        "Computer": { chapters: class7ComputerChapters, mcqs: class7ComputerMCQs, shortQuestions: class7ComputerShortQuestions, longQuestions: class7ComputerLongQuestions },
        "English": { chapters: class7EnglishChapters, mcqs: class7EnglishMCQs, shortQuestions: class7EnglishShortQuestions, longQuestions: class7EnglishLongQuestions },
        "General Science": { chapters: class7GeneralScienceChapters, mcqs: class7GeneralScienceMCQs, shortQuestions: class7GeneralScienceShortQuestions, longQuestions: class7GeneralScienceLongQuestions },
        "Mathematics": { chapters: class7MathChapters, mcqs: class7MathMCQs, shortQuestions: class7MathShortQuestions, longQuestions: class7MathLongQuestions },
        "Urdu": { chapters: class7UrduChapters, mcqs: class7UrduMCQs, shortQuestions: class7UrduShortQuestions, longQuestions: class7UrduLongQuestions },
    }
  },
   "Class 8": {
    subjects: {
      "Computer": { chapters: class8ComputerChapters, mcqs: class8ComputerMCQs, shortQuestions: class8ComputerShortQuestions, longQuestions: class8ComputerLongQuestions },
      "English": { chapters: class8EnglishChapters, mcqs: class8EnglishMCQs, shortQuestions: class8EnglishShortQuestions, longQuestions: class8EnglishLongQuestions },
      "General Science": { chapters: class8GeneralScienceChapters, mcqs: class8GeneralScienceMCQs, shortQuestions: class8GeneralScienceShortQuestions, longQuestions: class8GeneralScienceLongQuestions },
      "Mathematics": { chapters: class8MathChapters, mcqs: class8MathMCQs, shortQuestions: class8MathShortQuestions, longQuestions: class8MathLongQuestions },
      "Urdu": { chapters: class8UrduChapters, mcqs: class8UrduMCQs, shortQuestions: class8UrduShortQuestions, longQuestions: class8UrduLongQuestions },
    },
  },
  "Class 9": {
    subjects: {
      "Biology": { chapters: class9BiologyChapters, mcqs: class9BiologyMCQs, shortQuestions: class9BiologyShortQuestions, longQuestions: class9BiologyLongQuestions },
      "Chemistry": { chapters: class9ChemistryChapters, mcqs: class9ChemistryMCQs, shortQuestions: class9ChemistryShortQuestions, longQuestions: class9ChemistryLongQuestions },
      "Computer": { chapters: class9ComputerChapters, mcqs: class9ComputerMCQs, shortQuestions: class9ComputerShortQuestions, longQuestions: class9ComputerLongQuestions },
      "English": { chapters: class9EnglishChapters, mcqs: class9EnglishMCQs, shortQuestions: class9EnglishShortQuestions, longQuestions: class9EnglishLongQuestions },
      "Mathematics": { chapters: class9MathChapters, mcqs: class9MathMCQs, shortQuestions: class9MathShortQuestions, longQuestions: class9MathLongQuestions },
      "Physics": { chapters: class9PhysicsChapters, mcqs: class9PhysicsMCQs, shortQuestions: class9PhysicsShortQuestions, longQuestions: class9PhysicsLongQuestions },
      "Urdu": { chapters: class9UrduChapters, mcqs: class9UrduMCQs, shortQuestions: class9UrduShortQuestions, longQuestions: class9UrduLongQuestions },
    }
  },
  "Class 10": {
    subjects: {
      "Biology": { chapters: class10BiologyChapters, mcqs: class10BiologyMCQs, shortQuestions: class10BiologyShortQuestions, longQuestions: class10BiologyLongQuestions },
      "Chemistry": { chapters: class10ChemistryChapters, mcqs: class10ChemistryMCQs, shortQuestions: class10ChemistryShortQuestions, longQuestions: class10ChemistryLongQuestions },
      "Computer": { chapters: class10ComputerChapters, mcqs: class10ComputerMCQs, shortQuestions: class10ComputerShortQuestions, longQuestions: class10ComputerLongQuestions },
      "English": { chapters: class10EnglishChapters, mcqs: class10EnglishMCQs, shortQuestions: class10EnglishShortQuestions, longQuestions: class10EnglishLongQuestions },
      "Mathematics": { chapters: class10MathChapters, mcqs: class10MathMCQs, shortQuestions: class10MathShortQuestions, longQuestions: class10MathLongQuestions },
      "Physics": { chapters: class10PhysicsChapters, mcqs: class10PhysicsMCQs, shortQuestions: class10PhysicsShortQuestions, longQuestions: class10PhysicsLongQuestions },
      "Urdu": { chapters: class10UrduChapters, mcqs: class10UrduMCQs, shortQuestions: class10UrduShortQuestions, longQuestions: class10UrduLongQuestions },
    }
  },
  "Class 11": {
    subjects: {
      "Biology": { chapters: class11BiologyChapters, mcqs: class11BiologyMCQs, shortQuestions: class11BiologyShortQuestions, longQuestions: class11BiologyLongQuestions },
      "Chemistry": { chapters: class11ChemistryChapters, mcqs: class11ChemistryMCQs, shortQuestions: class11ChemistryShortQuestions, longQuestions: class11ChemistryLongQuestions },
      "Computer": { chapters: class11ComputerChapters, mcqs: class11ComputerMCQs, shortQuestions: class11ComputerShortQuestions, longQuestions: class11ComputerLongQuestions },
      "English": { chapters: class11EnglishChapters, mcqs: class11EnglishMCQs, shortQuestions: class11EnglishShortQuestions, longQuestions: class11EnglishLongQuestions },
      "Mathematics": { chapters: class11MathChapters, mcqs: class11MathMCQs, shortQuestions: class11MathShortQuestions, longQuestions: class11MathLongQuestions },
      "Physics": { chapters: class11PhysicsChapters, mcqs: class11PhysicsMCQs, shortQuestions: class11PhysicsShortQuestions, longQuestions: class11PhysicsLongQuestions },
    }
  },
  "Class 12": {
    subjects: {
        "Biology": { chapters: class12BiologyChapters, mcqs: class12BiologyMCQs, shortQuestions: class12BiologyShortQuestions, longQuestions: class12BiologyLongQuestions },
        "Chemistry": { chapters: class12ChemistryChapters, mcqs: class12ChemistryMCQs, shortQuestions: class12ChemistryShortQuestions, longQuestions: class12ChemistryLongQuestions },
        "Computer": { chapters: class12ComputerChapters, mcqs: class12ComputerMCQs, shortQuestions: class12ComputerShortQuestions, longQuestions: class12ComputerLongQuestions },
        "Mathematics": { chapters: class12MathChapters, mcqs: class12MathMCQs, shortQuestions: class12MathShortQuestions, longQuestions: class12MathLongQuestions },
        "Physics": { chapters: class12PhysicsChapters, mcqs: class12PhysicsMCQs, shortQuestions: class12PhysicsShortQuestions, longQuestions: class12PhysicsLongQuestions },
    }
  },
};

export type CourseName = keyof typeof courses;
export type SubjectName<T extends CourseName> = keyof CourseData[T]['subjects'];
export type ChapterName<T extends CourseName, U extends SubjectName<T>> = CourseData[T]['subjects'][U]['chapters'][number];
export type CourseData = typeof courses;