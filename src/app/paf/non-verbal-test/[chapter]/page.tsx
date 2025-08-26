
import TestPageClient from '@/components/test-client-wrapper';
import { mcqs, chapters } from '@/lib/data/paf/non-verbal-test';
import { MCQ } from '@/lib/types';
import { notFound } from 'next/navigation';

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

export default async function PafNonVerbalTestPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: chapterSlug } = await params;

  const chapterTitle = chapters.find((ch: string) => createSlug(ch) === chapterSlug);
  
  if (!chapterTitle) {
      return notFound();
  }

  const chapterMcqs: MCQ[] = mcqs[chapterTitle as keyof typeof mcqs] || [];
  const basePath = `/paf/non-verbal-test`;

  return (
    <TestPageClient
      grade="PAF"
      subject="Non-Verbal Test"
      chapterTitle={chapterTitle}
      chapterMcqs={chapterMcqs}
      basePath={basePath}
    />
  );
}
