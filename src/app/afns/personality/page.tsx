
import TestPageClient from '@/components/test-client-wrapper';
import { mcqs } from '@/lib/data/afns/personality';
import { MCQ } from '@/lib/types';

export default function AfnsPersonalityTestPage() {
  const chapterMcqs: MCQ[] = mcqs || [];
  const basePath = `/afns/personality`;

  return (
    <TestPageClient
      grade="AFNS"
      subject="Personality Test"
      chapterTitle="Personality Test"
      chapterMcqs={chapterMcqs}
      basePath={basePath}
    />
  );
}
