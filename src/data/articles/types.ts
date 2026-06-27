export interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'tip';
  level?: 2 | 3;
  content?: string;
  items?: string[];
}

export type ArticleKind = 'blog' | 'guide';

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  featured?: boolean;
  author?: string;
  kind?: ArticleKind;
  topic?: string;
  sections: BlogSection[];
}
