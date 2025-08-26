
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BookOpen,
  PlayCircle,
  Users2,
  Plane,
} from "lucide-react";
import type { Course, Testimonial } from "@/lib/types";
import CourseCard from "@/components/course-card";

const courses: Course[] = [
  {
    title: 'Grades 6-12 Tutoring',
    category: 'Academics',
    description: 'Comprehensive tutoring for students in grades 6 through 12 across all major subjects.',
    image: '/program-academics.png',
    duration: 'Ongoing',
    students: 350,
    rating: 4.9,
    dataAiHint: "classroom students",
  },
  {
    title: 'AFNS Test Preparation',
    category: 'Test Prep',
    description: 'Specialized coaching to excel in the Armed Forces Nursing Service (AFNS) entrance exam.',
    image: '/program-afns.png',
    duration: '8 weeks',
    students: 120,
    rating: 4.8,
    dataAiHint: "medical exam",
  },
  {
    title: 'PAF Cadet Test Prep',
    category: 'Test Prep',
    description: 'Rigorous training program for aspiring Pakistan Air Force (PAF) cadets.',
    image: '/program-paf.png',
    duration: '10 weeks',
    students: 95,
    rating: 4.9,
    dataAiHint: "air force",
  },
  {
    title: 'MCJ/MCM Entrance Prep',
    category: 'Test Prep',
    description: 'Expert guidance for Military College Jhelum (MCJ) and Murree (MCM) entrance tests.',
    image: '/program-mcj-mcm.png',
    duration: '12 weeks',
    students: 150,
    rating: 4.8,
    dataAiHint: "military school",
  },
];


const testimonials: Testimonial[] = [
  {
    name: "Aisha K.",
    role: "AFNS Aspirant",
    avatar: "/testimonial-aisha.png",
    quote: "The AFNS prep course was fantastic. The instructors were knowledgeable and the mock tests were extremely helpful. I feel confident for my exam!",
    dataAiHint: "woman student"
  },
  {
    name: "Bilal Ahmed",
    role: "PAF Cadet",
    avatar: "/testimonial-bilal.png",
    quote: "Passion Academia made my dream of joining the PAF possible. The physical and academic training was top-notch. Highly recommended!",
    dataAiHint: "man student"
  },
  {
    name: "Fatima R.",
    role: "Parent",
    avatar: "/testimonial-fatima.png",
    quote: "My son's grades improved significantly with their grade 10 tutoring. The teachers are patient and create a very positive learning environment.",
    dataAiHint: "woman parent"
  },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/10 opacity-50 blur-3xl"></div>
          <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-primary/10 opacity-50 blur-3xl"></div>
           <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-primary/10 opacity-50 blur-3xl"></div>
        </div>

        <div className="container relative z-20 grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Up Your <span className="text-primary">Skills</span> <br />
              To Advance Your <span className="text-primary">Career Path</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Expert tutoring for Grades 6-12 and specialized preparation for AFNS, PAF, MCJ & MCM entrance exams. The latest online learning system and material that help your knowledge growing.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
                <Link href="/contact">
                  Get free trial
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center">
            <div className="absolute inset-0 m-auto h-[380px] w-[380px] rounded-full bg-primary/80 blur-3xl opacity-50"></div>
             <div className="relative z-10 rounded-xl bg-background/50 p-4 shadow-2xl ring-1 ring-border backdrop-blur-sm">
                <Image src="/Main.png" alt="Instructor" width={400} height={500} className="rounded-md object-cover" />
            </div>
             <div className="absolute -bottom-4 left-0 z-20 flex items-center gap-3 rounded-lg border bg-background/80 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <p className="font-bold">5K+</p>
                    <p className="text-sm text-muted-foreground">Online Courses</p>
                </div>
             </div>
             <div className="absolute -top-8 right-0 z-20 flex items-center gap-3 rounded-lg border bg-background/80 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <PlayCircle className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <p className="font-bold">2K+</p>
                    <p className="text-sm text-muted-foreground">Video Courses</p>
                </div>
             </div>
              <div className="absolute -bottom-4 right-0 z-20 flex items-center gap-3 rounded-lg border bg-background/80 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Users2 className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <p className="font-bold">250+</p>
                    <p className="text-sm text-muted-foreground">Tutors</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="courses" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Find the perfect program to achieve your academic and career goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Students & Parents Say
          </h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex h-full flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
                      <p className="mb-4 text-muted-foreground">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="faq" className="w-full bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                What are the class timings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer flexible timings with morning and evening batches to accommodate student schedules. Please contact us for the detailed schedule for your specific course.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Do you provide study materials?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, all students receive comprehensive study materials, including notes, practice questions, and mock test series, all tailored to the specific curriculum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                What is the student-to-teacher ratio?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We maintain a low student-to-teacher ratio to ensure personalized attention for every student, fostering a more effective learning environment.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                How can I get help if I'm stuck?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer dedicated doubt-clearing sessions and one-on-one interactions with instructors. Our goal is to ensure every student understands the concepts thoroughly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
