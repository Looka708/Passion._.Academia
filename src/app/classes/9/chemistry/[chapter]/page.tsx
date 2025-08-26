
import TestPageClient from '@/components/test-client-wrapper';
import { mcqs, chapters } from '@/lib/data/class-9/chemistry';
import { MCQ } from '@/lib/types';
import { notFound } from 'next/navigation';

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

export default async function Class9ChemistryChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: chapterSlug } = await params;
  const chapterTitle = chapters.find(ch => createSlug(ch) === chapterSlug);

  if (!chapterTitle) {
    return notFound();
  }

  const chapterMcqs: MCQ[] = mcqs[chapterTitle as keyof typeof mcqs] || [];
  const basePath = "/classes/9/chemistry";

  return (
    <TestPageClient
        grade="9"
        subject="Chemistry"
        chapterTitle={chapterTitle}
        chapterMcqs={chapterMcqs}
        basePath={basePath}
    />
  );
}
