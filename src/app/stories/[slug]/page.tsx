import { notFound } from "next/navigation";
import { stories, getStory, getPrevNextStory } from "@/lib/stories";
import StoryClient from "./StoryClient";

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: `${story.title} — Side-Out Studios`,
    description: story.description,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const { prev, next } = getPrevNextStory(slug);

  return <StoryClient story={story} prev={prev ?? null} next={next ?? null} />;
}
