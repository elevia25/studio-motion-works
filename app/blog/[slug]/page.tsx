import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { postContent, defaultContent } from "@/data/postContent";
import { ArticleProgress } from "@/components/blog/ArticleProgress";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { Prose } from "@/components/blog/Prose";
import { ShareRow } from "@/components/blog/ShareRow";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { NewsletterCTA } from "@/components/blog/NewsLetterCTA";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found — Kinetic" };
  return {
    title: `${post.title} — Kinetic Journal`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] ?? defaultContent;

  return (
    <>
      <ArticleProgress />

      <ArticleHeader post={post} />

      <div className="px-6">
        <div className="mx-auto max-w-3xl">
          <Prose blocks={content.blocks} />

          <ShareRow title={post.title} />

          <AuthorCard
            post={post}
            bio={content.authorBio}
            role={content.authorRole}
          />

          <NewsletterCTA />

          <RelatedPosts current={post} allPosts={posts} />
        </div>
      </div>

      {/* Bottom breathing room */}
      <div className="h-32" />
    </>
  );
}