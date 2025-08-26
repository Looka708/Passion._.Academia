
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { syllabus } from "@/lib/data/paf";
import { ProtectedRoute } from "@/components/protected-route";

export default function PAFPage() {
  return (
    <ProtectedRoute>
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary">
            PAF Cadet Test
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Prepare to soar with our specialized coaching for the Pakistan Air Force (PAF) cadet entrance exam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {syllabus.map((item) => (
            <Card key={item.title} className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                 {item.title === "Intelligence Test" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                       <Button className="w-full transition-transform duration-300 hover:scale-105">
                        Start Test <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Select Intelligence Test Type</DialogTitle>
                        <DialogDescription>
                          Choose between Verbal and Non-Verbal test sections to begin.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-around">
                         <Button asChild type="button" variant="secondary" className="transition-transform duration-300 hover:scale-105">
                            <Link href="/paf/verbal-test">Verbal Test</Link>
                         </Button>
                         <Button asChild type="button" className="transition-transform duration-300 hover:scale-105">
                            <Link href="/paf/non-verbal-test">
                                Non-Verbal Test <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                         </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                 ) : (
                    <Button asChild className="w-full transition-transform duration-300 hover:scale-105">
                        <Link href={item.href || "#"}>
                            Start Test <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                 )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
                Achieve Your Dream of Joining the PAF
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our expert-led program provides rigorous academic training, physical conditioning guidance, and comprehensive mock tests to ensure you are fully prepared for the challenges ahead.
            </p>
            <div className="mt-8">
                 <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                    <Link href="/contact">
                        Enroll Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
      </section>
    </div>
    </ProtectedRoute>
  );
}
