
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProtectedRoute } from "@/components/protected-route";
import { chapters } from "@/lib/data/class-9/english";

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/:/g, '').replace(/\(/g, '').replace(/\)/g, '');
};

export default function Class9EnglishPage() {
  return (
    <ProtectedRoute>
        <div className="bg-background text-foreground">
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
            <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary">
                Class 9 English
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Select a chapter to begin your test preparation.
            </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
                <Card key={chapter} className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{chapter}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">Practice MCQs and review key concepts for {chapter}.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full transition-transform duration-300 hover:scale-105">
                    <Link href={`/classes/9/english/${createSlug(chapter)}`}>
                        Start Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </section>
        </div>
    </ProtectedRoute>
  );
}
