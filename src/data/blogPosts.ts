export type { BlogPost, BlogSection } from './articles/types';

import { originalPosts } from './articles/originalPosts';
import { guidePosts } from './articles/guidePosts';
import type { BlogPost } from './articles/types';

export { originalPosts, guidePosts };

export const blogPosts: BlogPost[] = [...originalPosts, ...guidePosts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];
