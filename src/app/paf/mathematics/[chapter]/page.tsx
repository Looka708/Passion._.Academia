
import TestPageClient from '@/components/test-client-wrapper';
import { mcqs, chapters } from '@/lib/data/paf/mathematics';
import { MCQ } from '@/lib/types';
import { notFound } from 'next/navigation';

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

export default async function PafMathematicsTestPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: chapterSlug } = await params;
  const chapterTitle = chapters.find((ch: string) => createSlug(ch) === chapterSlug);

  if (!chapterTitle) {
    return notFound();
  }

  const chapterMcqs: MCQ[] = mcqs[chapterTitle as keyof typeof mcqs] || [];
  const basePath = '/paf/mathematics';

  return (
    <TestPageClient
      grade="PAF"
      subject="Mathematics"
      chapterTitle={chapterTitle}
      chapterMcqs={chapterMcqs}
      basePath={basePath}
    />
  );
}
