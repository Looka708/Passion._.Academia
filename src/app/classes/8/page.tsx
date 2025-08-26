
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Sigma, Atom, ArrowRight, Languages, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProtectedRoute } from "@/components/protected-route";

const subjects = [
  { name: "Mathematics", icon: Sigma, description: "Prepare for higher-level concepts with advanced algebra and geometry.", href: "/classes/8/mathematics" },
  { name: "English", icon: Book, description: "Focus on literature analysis, formal writing, and public speaking.", href: "/classes/8/english" },
  { name: "Urdu", icon: Languages, description: "Master Urdu grammar, essay writing, and poetry analysis.", href: "/classes/8/urdu" },
  { name: "General Science", icon: Atom, description: "Study complex topics in physics, chemistry, and biology for board exams.", href: "/classes/8/general-science" },
  { name: "Computer", icon: Laptop, description: "Introduction to programming concepts and digital citizenship.", href: "/classes/8/computer" },
];

export default function Class8Page() {
  return (
    <ProtectedRoute>
        <div className="bg-background text-foreground">
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
            <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary">
                Class 8 Subjects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore the subjects available for 8th-grade students.
            </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((item) => (
                <Card key={item.name} className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full transition-transform duration-300 hover:scale-105">
                    <Link href={item.href || "#"}>
                        Start Learning <ArrowRight className="ml-2 h-4 w-4" />
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
