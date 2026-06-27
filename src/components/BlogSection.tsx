import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import BlogCard from './BlogCard';
import { getFeaturedPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  const featured = getFeaturedPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-[#1a1a1a] minecraft-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-handjet text-green-500">הבלוג שלנו</h2>
          </div>
          <p className="text-gray-400 font-rubik max-w-2xl mx-auto">
            מדריכים, טיפים ומאמרים על מיינקראפט — רדסטון, הישרדות, חינוך ועוד
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="minecraft-button inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-handjet text-lg hover:bg-green-600 transition-colors"
          >
            כל המאמרים
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
