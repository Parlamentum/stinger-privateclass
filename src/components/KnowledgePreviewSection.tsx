import { Link } from 'react-router-dom';
import { Library } from 'lucide-react';
import BlogCard from './BlogCard';
import { getFeaturedUseCases, useCasePosts } from '../data/blogPosts';

const KnowledgePreviewSection: React.FC = () => {
  const featured = getFeaturedUseCases().slice(0, 3);

  return (
    <section id="knowledge" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Library className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-handjet text-green-500">מרכז הידע</h2>
          </div>
          <p className="text-gray-400 font-rubik max-w-2xl mx-auto">
            מדריכים מעשיים — איך לשרוד, לבנות, לחקור ולהתקדם במיינקראפט
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} basePath="/knowledge" />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/knowledge"
            className="minecraft-button inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-handjet text-lg hover:bg-green-600 transition-colors"
          >
            לכל המדריכים ({useCasePosts.length})
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgePreviewSection;
