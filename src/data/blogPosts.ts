export type { BlogPost, BlogSection } from './articles/types';

import { originalPosts } from './articles/originalPosts';
import { guidePosts } from './articles/guidePosts';
import { useCasePosts } from './articles/useCasePosts';
import type { BlogPost } from './articles/types';

export { originalPosts, guidePosts, useCasePosts };

export const blogPosts: BlogPost[] = [...originalPosts, ...guidePosts];

export const allPosts: BlogPost[] = [...blogPosts, ...useCasePosts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getFeaturedUseCases(): BlogPost[] {
  return useCasePosts.filter((post) => post.featured);
}

export function getUseCasePosts(): BlogPost[] {
  return useCasePosts;
}

export function getUseCaseTopics(): string[] {
  return [...new Set(useCasePosts.map((p) => p.topic).filter(Boolean) as string[])];
}

export function getUseCaseCategories(): string[] {
  return [...new Set(useCasePosts.map((p) => p.category))];
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const pool = post.kind === 'use-case' ? useCasePosts : blogPosts;
  return pool
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.topic === post.topic))
    .slice(0, limit);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];
