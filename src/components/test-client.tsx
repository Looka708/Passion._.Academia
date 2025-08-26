
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { MCQ } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestClientProps {
    grade: number | string;
    subject: string;
    chapterTitle: string;
    chapterMcqs: MCQ[];
    basePath: string;
}

export default function TestClient({ grade, subject, chapterTitle, chapterMcqs, basePath }: TestClientProps) {
  const [testStarted, setTestStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState(chapterMcqs.length > 0 ? Math.min(10, chapterMcqs.length) : 0);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const startTest = () => {
    if (chapterMcqs.length > 0) {
      const shuffled = [...chapterMcqs].sort(() => 0.5 - Math.random());
      const selectedNumQuestions = Math.min(numQuestions, chapterMcqs.length);
      setMcqs(shuffled.slice(0, selectedNumQuestions));
      setTestStarted(true);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setSubmitted(false);
      setScore(0);
    }
  };

  const handleOptionChange = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    mcqs.forEach((mcq, index) => {
      if (selectedAnswers[index] === mcq.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / mcqs.length) * 100);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const getOptionValue = (option: string | { label: string; svg: string }) => {
    return typeof option === 'string' ? option : option.label;
  };


  if (!chapterMcqs || chapterMcqs.length === 0) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <Card className="max-w-xl mx-auto">
                <CardHeader>
                    <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500" />
                    <CardTitle>No Questions Available</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>There are no questions available for this chapter yet. Please check back later or contact an administrator to add content.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="mx-auto">
                        <Link href={basePath}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Start Test</CardTitle>
            <CardDescription>
              {`You are about to start a test on ${subject}: ${chapterTitle}.`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="num-questions" className="text-lg font-semibold">Number of Questions: {numQuestions}</Label>
              <Slider
                id="num-questions"
                min={1}
                max={chapterMcqs.length}
                step={1}
                value={[numQuestions]}
                onValueChange={(value) => setNumQuestions(value[0])}
                className="mt-4"
              />
            </div>
            <Button onClick={startTest} size="lg">Begin Test</Button>
          </CardContent>
           <CardFooter>
                <Button asChild variant="outline" className="mx-auto">
                    <Link href={basePath}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Cancel
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  if (submitted) {
    return (
       <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Test Results</CardTitle>
            <CardDescription>
                You scored <span className="font-bold text-primary">{score.toFixed(0)}%</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                <div
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - score}%)` }}
                />
            </div>
            {mcqs.map((mcq, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === mcq.correctAnswer;
              
              return (
                <div key={mcq.id} className="border p-4 rounded-md">
                   {mcq.questionImage && (
                    <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{ __html: mcq.questionImage }} />
                  )}
                  {mcq.questionText && <p className={cn("font-semibold", mcq.language === 'urdu' ? 'font-urdu text-xl text-right' : '')}>{`${index + 1}. ${mcq.questionText}`}</p>}
                  
                  <div className={cn("mt-2 text-sm", mcq.language === 'urdu' ? 'font-urdu text-lg text-right' : '')}>
                    <p className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      Your answer: {userAnswer || "Not answered"}
                      {isCorrect ? <CheckCircle className="inline ml-2 h-4 w-4"/> : <XCircle className="inline ml-2 h-4 w-4"/> }
                    </p>
                    {!isCorrect && <p className="text-green-600">Correct answer: {mcq.correctAnswer}</p>}
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter className="flex-col sm:flex-row justify-center gap-4">
            <Button onClick={startTest}>
                Try Again
            </Button>
            <Button asChild variant="outline">
                <Link href={basePath}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Subject
                </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentMcq = mcqs[currentQuestionIndex];
  return (
    <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                 <Progress value={(currentQuestionIndex + 1) / mcqs.length * 100} className="mb-4" />
                <CardTitle className={cn("text-xl", currentMcq.language === 'urdu' ? 'font-urdu text-2xl text-right' : '')}>
                    {`Question ${currentQuestionIndex + 1} of ${mcqs.length}`}
                </CardTitle>
                {currentMcq.questionText && <CardDescription className={cn("pt-4 text-lg", currentMcq.language === 'urdu' ? 'font-urdu text-xl text-right' : '')}>
                    {currentMcq.questionText}
                </CardDescription>}
                 {currentMcq.questionImage && (
                    <div className="pt-4 flex justify-center" dangerouslySetInnerHTML={{ __html: currentMcq.questionImage }} />
                )}
            </CardHeader>
            <CardContent>
                 <RadioGroup
                    value={selectedAnswers[currentQuestionIndex]}
                    onValueChange={(value) => handleOptionChange(currentQuestionIndex, value)}
                    className="space-y-2"
                >
                    <div className={cn("grid gap-4", currentMcq.options.some(opt => typeof opt !== 'string') ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-1')}>
                        {currentMcq.options.map((option) => {
                            const optionValue = getOptionValue(option);
                            const optionId = `${currentMcq.id}-${optionValue}`;
                            
                            return (
                                <div key={optionId} className={cn("flex items-center rounded-md border border-input p-2", selectedAnswers[currentQuestionIndex] === optionValue ? 'bg-primary/10 border-primary ring-2 ring-primary' : '')}>
                                    <RadioGroupItem value={optionValue} id={optionId} className="mr-2" />
                                    <Label htmlFor={optionId} className="flex flex-col items-center justify-center w-full cursor-pointer">
                                        {typeof option === 'string' ? (
                                            <span className={cn(currentMcq.language === 'urdu' ? 'font-urdu text-lg' : '')}>{option}</span>
                                        ) : (
                                            <>
                                                <div dangerouslySetInnerHTML={{ __html: option.svg }} />
                                                <span className="mt-2 font-semibold">{option.label}</span>
                                            </>
                                        )}
                                    </Label>
                                </div>
                            );
                        })}
                    </div>
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {currentQuestionIndex === mcqs.length - 1 ? (
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                ) : (
                    <Button onClick={handleNext}>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardFooter>
        </Card>
    </div>
  );
}
