import { Link, useParams, useLocation } from 'react-router-dom';
import { Clock, Tag, ArrowRight, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { homeHash } from '../utils/paths';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import type { BlogSection as BlogSectionType } from '../data/blogPosts';

function renderSection(section: BlogSectionType, index: number) {
  switch (section.type) {
    case 'heading':
      if (section.level === 3) {
        return (
          <h3 key={index} className="text-xl font-handjet text-green-400 mt-6 mb-3">
            {section.content}
          </h3>
        );
      }
      return (
        <h2 key={index} className="text-2xl font-handjet text-green-500 mt-10 mb-4">
          {section.content}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-gray-300 font-rubik leading-relaxed mb-4 whitespace-pre-line">
          {section.content}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-300 font-rubik mr-4">
          {section.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case 'tip':
      return (
        <div
          key={index}
          className="bg-green-500/10 border-r-4 border-green-500 p-4 rounded-lg mb-6 font-rubik text-gray-300"
        >
          {section.content}
        </div>
      );
    default:
      return null;
  }
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = slug ? getPostBySlug(slug) : undefined;

  const isGuide = post?.kind === 'guide' || location.pathname.startsWith('/knowledge');
  const basePath = isGuide ? '/knowledge' : '/blog';
  const backLabel = isGuide ? 'חזרה למרכז הידע' : 'חזרה לבלוג';

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-handjet text-green-500 mb-4">המאמר לא נמצא</h1>
          <Link to={basePath} className="text-green-400 hover:text-green-300 font-rubik">
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'סטינגר ישראל',
    },
    publisher: {
      '@type': 'Organization',
      name: 'סטינגר ישראל',
    },
    inLanguage: 'he',
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        path={`${basePath}/${post.slug}`}
        type="article"
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Navbar />

        <article className="pt-28 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-rubik text-sm mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              {backLabel}
            </Link>

            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4 text-green-500" />
                  {post.category}
                </span>
                {post.topic && (
                  <span className="text-gray-500 font-rubik">{post.topic}</span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-green-500" />
                  עודכן: {new Date(post.updatedAt).toLocaleDateString('he-IL')}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-handjet text-green-500 mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-400 font-rubik leading-relaxed">{post.excerpt}</p>

              <p className="text-sm text-gray-500 font-rubik mt-4">
                נכתב על ידי {post.author || 'סטינגר ישראל'}
              </p>
            </header>

            <div className="prose prose-invert max-w-none">
              {post.sections.map((section, index) => renderSection(section, index))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-xs text-gray-600 font-rubik">
                מילות מפתח: {post.keywords.join(' | ')}
              </p>
            </div>

            <div className="mt-12 minecraft-card text-center">
              <h2 className="text-2xl font-handjet text-green-500 mb-3">רוצים ללמוד את זה עם מורה?</h2>
              <p className="text-gray-400 font-rubik mb-6">
                שיעורים פרטיים במיינקראפט — נבנה יחד את הפרויקט, בקצב של הילד/ה, עם סטינגר.
              </p>
              <a
                href={homeHash('pricing')}
                className="minecraft-button inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-handjet"
              >
                קבע שיעור עכשיו
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="container mx-auto px-4 max-w-5xl mt-16">
              <h2 className="text-2xl font-handjet text-green-500 mb-6">
                {isGuide ? 'מדריכים קשורים' : 'מאמרים קשורים'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} basePath={basePath} />
                ))}
              </div>
            </div>
          )}
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
