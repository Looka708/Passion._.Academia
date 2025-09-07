
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ProtectedRoute } from "@/components/protected-route";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { MCQ } from "@/lib/types";
import { courses, CourseName } from "@/lib/data/all-courses";

type GeneratedExam = {
  mcqs: MCQ[];
  shortQuestions: string[];
  longQuestions: string[];
};

// Define a generic type for a subject to help TypeScript understand the structure
type Subject = {
    chapters: string[];
    mcqs: Record<string, MCQ[]>;
    shortQuestions: Record<string, string[]>;
    longQuestions: Record<string, string[]>;
};


export default function ExamGeneratorPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseName | "">("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedChapter, setSelectedChapter] = useState<string>("");

  const [numMcqs, setNumMcqs] = useState(10);
  const [numShortQuestions, setNumShortQuestions] = useState(5);
  const [numLongQuestions, setNumLongQuestions] = useState(2);
  const [customLongQuestions, setCustomLongQuestions] = useState("");

  const [generatedExam, setGeneratedExam] = useState<GeneratedExam | null>(null);

  const handleCourseChange = (value: string) => {
    setSelectedCourse(value as CourseName);
    setSelectedSubject("");
    setSelectedChapter("");
    setGeneratedExam(null);
  };

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    setSelectedChapter("");
    setGeneratedExam(null);
  };
  
  const handleChapterChange = (value: string) => {
    setSelectedChapter(value);
    setGeneratedExam(null);
  };

  const getAvailableMcqs = () => {
    if (!selectedCourse || !selectedSubject || !selectedChapter) return [];
    const courseData = courses[selectedCourse as CourseName];
    // Cast to the specific Subject type to resolve the TypeScript error
    const subjectData = courseData.subjects[selectedSubject] as Subject; 
    return subjectData?.mcqs?.[selectedChapter] || [];
  };

  const getAvailableShortQuestions = () => {
    if (!selectedCourse || !selectedSubject || !selectedChapter) return [];
    const courseData = courses[selectedCourse as CourseName];
    // Cast to the specific Subject type to resolve the TypeScript error
    const subjectData = courseData.subjects[selectedSubject] as Subject;
    return subjectData?.shortQuestions?.[selectedChapter] || [];
  };

  const getAvailableLongQuestions = () => {
    if (!selectedCourse || !selectedSubject || !selectedChapter) return [];
    const courseData = courses[selectedCourse as CourseName];
    // Cast to the specific Subject type to resolve the TypeScript error
    const subjectData = courseData.subjects[selectedSubject] as Subject;
    return subjectData?.longQuestions?.[selectedChapter] || [];
  };

  const handleGenerateExam = () => {
    const availableMcqs = getAvailableMcqs();
    const availableShorts = getAvailableShortQuestions();
    const availableLongs = getAvailableLongQuestions();
    
    const shuffledMcqs = [...availableMcqs].sort(() => 0.5 - Math.random());
    const shuffledShorts = [...availableShorts].sort(() => 0.5 - Math.random());
    const shuffledLongs = [...availableLongs].sort(() => 0.5 - Math.random());

    const selectedMcqs = shuffledMcqs.slice(0, numMcqs);
    const selectedShorts = shuffledShorts.slice(0, numShortQuestions);
    let selectedLongs = shuffledLongs.slice(0, numLongQuestions);

    if (customLongQuestions.trim() !== "") {
        selectedLongs = [...selectedLongs, ...customLongQuestions.trim().split('\n')];
    }

    setGeneratedExam({
      mcqs: selectedMcqs,
      shortQuestions: selectedShorts,
      longQuestions: selectedLongs,
    });
  };

  const handlePrint = () => {
    const printableContent = document.getElementById('printable-exam')?.innerHTML;
    if (printableContent) {
        const printWindow = window.open('', '', 'height=800,width=800');
        printWindow?.document.write('<html><head><title>Print Exam</title>');
        printWindow?.document.write('<style> body { font-family: sans-serif; } .question-section { page-break-inside: avoid; } .question { margin-bottom: 0.5rem; page-break-inside: avoid; } .options { margin-left: 1.5rem; } .option { margin-bottom: 0.25rem; } h1, h2, h3 { margin-bottom: 1.5rem; text-align: center; } h1 { font-size: 1.5rem; } h2 { font-size: 1.25rem; } h3 { font-size: 1.1rem; text-align: left; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem; } ol, ul { padding-left: 1.5rem; } li { margin-bottom: 0.5rem; } .mcq-list { list-style-type: decimal; padding-left: 1.5rem; columns: 2; -webkit-columns: 2; -moz-columns: 2; column-gap: 2rem; } .mcq-list li { margin-bottom: 0.25rem; page-break-inside: avoid; } @media print { body { -webkit-print-color-adjust: exact; } .mcq-list { columns: 2; -webkit-columns: 2; -moz-columns: 2; } } </style>');
        printWindow?.document.write('</head><body>');
        printWindow?.document.write(printableContent);
        printWindow?.document.write('</body></html>');
        printWindow?.document.close();
        printWindow?.print();
    }
  };


  return (
    <ProtectedRoute adminOnly={true}>
      <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center bg-muted/40 p-4 md:p-8">
        <div className="grid w-full max-w-4xl gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Exam Generator</CardTitle>
              <CardDescription>
                Create a custom exam by selecting questions from the database and adding your own.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Label>Course</Label>
                 <Select onValueChange={handleCourseChange} value={selectedCourse}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a Course" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(courses).map(course => (
                            <SelectItem key={course} value={course}>{course}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
              </div>

              {selectedCourse && (
                 <div className="space-y-4">
                    <Label>Subject</Label>
                    <Select onValueChange={handleSubjectChange} value={selectedSubject} disabled={!selectedCourse}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a Subject" />
                        </SelectTrigger>
                        <SelectContent>
                             {Object.keys(courses[selectedCourse as CourseName].subjects).map(subject => (
                                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
              )}
               
              {selectedSubject && (
                 <div className="space-y-4">
                    <Label>Chapter</Label>
                    <Select onValueChange={handleChapterChange} value={selectedChapter} disabled={!selectedSubject}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a Chapter" />
                        </SelectTrigger>
                        <SelectContent>
                            {(courses[selectedCourse as CourseName].subjects[selectedSubject] as Subject)?.chapters.map(chapter => (
                                <SelectItem key={chapter} value={chapter}>{chapter}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
               )}

              <div className="space-y-4">
                <Label htmlFor="num-mcqs">Number of MCQs ({getAvailableMcqs().length} available)</Label>
                <Slider
                  id="num-mcqs"
                  min={0}
                  max={getAvailableMcqs().length}
                  step={1}
                  value={[numMcqs]}
                  onValueChange={(value) => setNumMcqs(value[0])}
                  disabled={!selectedChapter}
                />
                <p className="text-sm text-center font-bold">{numMcqs}</p>
              </div>

               <div className="space-y-4">
                <Label htmlFor="num-short-questions">Number of Short Questions ({getAvailableShortQuestions().length} available)</Label>
                <Slider
                  id="num-short-questions"
                  min={0}
                  max={getAvailableShortQuestions().length}
                  step={1}
                  value={[numShortQuestions]}
                  onValueChange={(value) => setNumShortQuestions(value[0])}
                  disabled={!selectedChapter}
                />
                <p className="text-sm text-center font-bold">{numShortQuestions}</p>
              </div>

               <div className="space-y-4">
                <Label htmlFor="num-long-questions">Number of Long Questions ({getAvailableLongQuestions().length} available)</Label>
                <Slider
                  id="num-long-questions"
                  min={0}
                  max={getAvailableLongQuestions().length}
                  step={1}
                  value={[numLongQuestions]}
                  onValueChange={(value) => setNumLongQuestions(value[0])}
                  disabled={!selectedChapter}
                />
                <p className="text-sm text-center font-bold">{numLongQuestions}</p>
              </div>

              <div className="space-y-4 md:col-span-2">
                <Label htmlFor="custom-long-questions">Add Custom Long Questions (one per line)</Label>
                <Textarea
                    id="custom-long-questions"
                    placeholder="e.g., Explain the theory of relativity."
                    value={customLongQuestions}
                    onChange={(e) => setCustomLongQuestions(e.target.value)}
                    className="min-h-[100px]"
                />
              </div>

            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button onClick={handleGenerateExam} disabled={!selectedChapter}>Generate Exam</Button>
                <Button onClick={handlePrint} disabled={!generatedExam} variant="outline">Print Exam</Button>
            </CardFooter>
          </Card>
          
          {generatedExam && (
             <div id="printable-exam" className="mt-8 bg-background p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center">Exam</h1>
                <h2 className="text-xl text-center mb-8">{selectedCourse} - {selectedSubject} ({selectedChapter})</h2>

                {generatedExam.mcqs.length > 0 && (
                    <section className="question-section">
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Multiple Choice Questions</h3>
                        <ol className="mcq-list">
                        {generatedExam.mcqs.map((mcq, index) => (
                            <li key={`mcq-${index}`} className="question mb-2">
                                <p>{index + 1}. {mcq.questionText}</p>
                                <ul className="options list-alpha-lower list-inside mt-1 pl-4">
                                    {mcq.options.map((option, optIndex) => (
                                        <li key={optIndex} className="option">
                                            {typeof option === 'string' ? option : option.label}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        </ol>
                    </section>
                )}

                 {generatedExam.shortQuestions.length > 0 && (
                    <section className="question-section mt-8">
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Short Questions</h3>
                        <ol className="list-decimal list-inside space-y-4">
                        {generatedExam.shortQuestions.map((q, index) => (
                            <li key={`short-${index}`} className="question">{q}</li>
                        ))}
                        </ol>
                    </section>
                )}

                 {generatedExam.longQuestions.length > 0 && (
                     <section className="question-section mt-8">
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Long Questions</h3>
                        <ol className="list-decimal list-inside space-y-4">
                        {generatedExam.longQuestions.map((q, index) => (
                            <li key={`long-${index}`} className="question">{q}</li>
                        ))}
                        </ol>
                    </section>
                )}
            </div>
          )}

        </div>
      </div>
    </ProtectedRoute>
  );
}

// Add a list-alpha-lower style to your globals.css if you don't have one
// for the options a, b, c, d...
// e.g. .list-alpha-lower { list-style-type: lower-alpha; }

