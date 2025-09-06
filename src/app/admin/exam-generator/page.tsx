
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProtectedRoute } from "@/components/protected-route";
import { Wrench } from "lucide-react";

export default function ExamGeneratorPage() {

  return (
    <ProtectedRoute adminOnly={true}>
      <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-muted/40 p-4 md:p-8">
        <div className="mx-auto grid w-full max-w-lg gap-4 text-center">
          <Card>
            <CardHeader className="items-center">
                <Wrench className="h-16 w-16 text-primary" />
              <CardTitle className="mt-4 text-3xl">Coming Soon!</CardTitle>
              <CardDescription className="mt-2 text-lg">
                The Exam Generator is currently under construction. We are working hard to bring you this feature.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Please check back later!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
