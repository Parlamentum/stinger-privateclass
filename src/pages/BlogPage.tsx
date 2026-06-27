import { Link } from 'react-router-dom';
import { BookOpen, Filter } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';
import { blogPosts, blogCategories } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  return (
    <>
      <SEO
        title="בלוג מיינקראפט — מדריכים, טיפים ומאמרים"
        description="מדריכי מיינקראפט בעברית: רדסטון, הישרדות, סידים, Java vs Bedrock, לימוד אנגלית ועוד. מאמרים מקצועיים לשחקנים והורים."
        keywords={[
          'בלוג מיינקראפט',
          'מדריך מיינקראפט',
          'רדסטון',
          'מיינקראפט לילדים',
          'טיפים מיינקראפט',
        ]}
        path="/blog"
      />
      <div className="min-h-screen bg-[#1a1a1a]">
        <Navbar />

        <header className="pt-32 pb-12 minecraft-grid">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-10 h-10 text-green-500" />
              <h1 className="text-4xl md:text-5xl font-handjet text-green-500">בלוג מיינקראפט</h1>
            </div>
            <p className="text-gray-400 font-rubik max-w-2xl mx-auto text-lg">
              מאמרים ומדריכים על מיינקראפט — להורים, לילדים, ולכל מי שרוצה להבין את העולם הזה לעומק
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Filter className="w-5 h-5 text-green-500" />
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg font-rubik text-sm transition-colors ${
                activeCategory === null
                  ? 'bg-green-500 text-white'
                  : 'bg-[#2a2a2a] text-gray-400 hover:text-green-500'
              }`}
            >
              הכל
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-rubik text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-green-500 text-white'
                    : 'bg-[#2a2a2a] text-gray-400 hover:text-green-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 font-rubik py-12">אין מאמרים בקטגוריה זו</p>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="minecraft-card text-center">
              <h2 className="text-xl font-handjet text-green-500 mb-3">מרכז הידע</h2>
              <p className="text-gray-400 font-rubik mb-4 text-sm">
                20+ מדריכי Use Case מעשיים — הישרדות, Redstone, Nether ועוד
              </p>
              <Link
                to="/knowledge"
                className="text-green-500 hover:text-green-400 font-handjet transition-colors"
              >
                למרכז הידע ←
              </Link>
            </div>
            <div className="minecraft-card text-center">
              <h2 className="text-2xl font-handjet text-green-500 mb-3">רוצים ללמוד עם מורה?</h2>
            <p className="text-gray-400 font-rubik mb-6">
              שיעורים פרטיים במיינקראפט — רדסטון, בנייה, אנגלית ועוד. אחד על אחד עם יוטיובר מנוסה.
            </p>
            <Link
              to="/#pricing"
              className="minecraft-button inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-handjet"
            >
              קבע שיעור
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
