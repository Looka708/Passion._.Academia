
import TestPageClient from '@/components/test-client-wrapper';
import { mcqs, chapters } from '@/lib/data/class-11/physics';
import { MCQ } from '@/lib/types';
import { notFound } from 'next/navigation';

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

export default async function Class11PhysicsChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: chapterSlug } = await params;
  const chapterTitle = chapters.find(ch => createSlug(ch) === chapterSlug);

  if (!chapterTitle) {
    return notFound();
  }

  const chapterMcqs: MCQ[] = mcqs[chapterTitle as keyof typeof mcqs] || [];
  const basePath = "/classes/11/physics";

  return (
    <TestPageClient
        grade="11"
        subject="Physics"
        chapterTitle={chapterTitle}
        chapterMcqs={chapterMcqs}
        basePath={basePath}
    />
  );
}
